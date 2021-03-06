import { useCallback, useEffect, useState, useRef } from "react";

import { getVideoStream, isVideoTrackFaceSize } from "../media/video";
import { useRoomMedia } from "./useRoom";

const isVideoTrack = async (track: MediaStreamTrack) => {
  if (track.kind !== "video") return false;
  const isFaceSize = await isVideoTrackFaceSize(track);
  return !isFaceSize;
};

export const useVideoShare = (
  roomId: string,
  userId: string,
  enabled: boolean,
  setEnabled: (enabled: boolean) => void,
  videoDeviceId?: string
) => {
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [videoStreamMap, setVideoStreamMap] = useState<{
    [userId: string]: MediaStream | null;
  }>({});

  type CleanupFn = () => void;
  const cleanupFns = useRef<CleanupFn[]>([]);
  useEffect(() => {
    const cleanup = () => {
      cleanupFns.current.forEach((fn) => fn());
    };
    return cleanup;
  }, []);

  const onTrack = useCallback(async (track, info) => {
    if (!(await isVideoTrack(track))) return;
    setVideoStreamMap((prev) => ({
      ...prev,
      [info.userId]: new MediaStream([track]),
    }));
    const onended = () => {
      setVideoStreamMap((prev) => ({
        ...prev,
        [info.userId]: null,
      }));
    };
    track.addEventListener("ended", onended);
    // XXX we don't get "ended" event with removeTrack,
    // so a workaround with "mute" but "mute" is dispatched occasionally,
    // so use this timeout hack
    let timeout: NodeJS.Timeout;
    const onmute = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVideoStreamMap((prev) => ({
          ...prev,
          [info.userId]: null,
        }));
      }, 3000);
    };
    track.addEventListener("mute", onmute);
    const onunmute = () => {
      clearTimeout(timeout);
    };
    track.addEventListener("unmute", onunmute);
    cleanupFns.current.push(() => {
      track.removeEventListener("ended", onended);
      clearTimeout(timeout);
      track.removeEventListener("mute", onmute);
      track.removeEventListener("unmute", onunmute);
    });
  }, []);

  const { addTrack, removeTrack } = useRoomMedia(
    roomId,
    userId,
    onTrack,
    "cameraVideo"
  );

  useEffect(() => {
    let dispose: (() => void) | null = null;
    if (enabled && addTrack && removeTrack) {
      (async () => {
        const result = await getVideoStream(videoDeviceId);
        const track = result.stream.getVideoTracks()[0];
        addTrack(track);
        setVideoStream(result.stream);
        dispose = () => {
          removeTrack(track);
          result.dispose();
          setVideoStream(null);
          setEnabled(false);
        };
        track.addEventListener("ended", () => {
          if (dispose) dispose();
          dispose = null;
        });
      })();
    }
    return () => {
      if (dispose) dispose();
    };
  }, [roomId, videoDeviceId, enabled, setEnabled, addTrack, removeTrack]);

  return { videoStream, videoStreamMap };
};
