(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=22},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(7),i=n.n(c),u=(n(20),n(8)),s=n(9),l=n(11),f=n(13),m=n(3),d=function(){var e=Object(a.useState)(60),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){n>0?setTimeout((function(){r(n-1)}),1e3):window.location.reload()})),o.a.createElement("div",null,o.a.createElement("h1",null,"Unrecoverable error occurred."),o.a.createElement("p",null,"Will auto reload in ",n," sec."))},p=n(1),v=n.n(p),g=n(2),b=function(){var e=window.crypto.getRandomValues(new Uint8Array(32));return Array.from(e).map((function(e){return e.toString(16).padStart(2,"0")})).join("")},h=function(e){try{var t=new URL(e).hash.slice(1);return new URLSearchParams(t).get("roomId")}catch(n){return null}},E=n(14),w=n(12),y=n(10),O=n.n(y),k=function(e){return new Promise((function(t){return setTimeout(t,e)}))},I=function(e,t){return"".concat(e,"_").concat(t)},j=function(e){return Number(e.split("_")[1])},A=function(e){return j(e.peer)},S=function(e){return j(e)<5},R=function e(t,n,r){r({type:"INITIALIZING_PEER",index:t});var a=t<5?t:1e3+window.crypto.getRandomValues(new Uint16Array(1))[0]%9e3,o=I(n,a);console.log("createMyPeer",t,o);var c=new O.a(o);return new Promise((function(a){c.on("open",(function(){a(c)})),c.on("error",(function(o){"unavailable-id"===o.type?(c.destroy(),e(t+1,n,r).then(a)):"peer-unavailable"===o.type||("network"===o.type?(console.log("createMyPeer network error",o),r({type:"NETWORK_ERROR"})):(console.error("createMyPeer",o.type,o),r({type:"UNKNOWN_ERROR"})))}))}))},N=function(e,t,n){var r=!1,a=null,o=null,c=function(){var e=new Map;return{addConn:function(t){e.set(t.peer,{conn:t,live:!1})},markLive:function(t){var n=e.get(t.peer);n&&(n.live=!0)},isLive:function(t){var n=e.get(t);return!!n&&n.live},hasConn:function(t){return e.has(t)},delConn:function(t){var n=e.get(t.peer);n&&n.conn===t&&e.delete(t.peer)},getLivePeerJsIds:function(){return Array.from(e.keys()).filter((function(t){var n;return null===(n=e.get(t))||void 0===n?void 0:n.live}))},forEachLiveConns:function(t){Array.from(e.values()).forEach((function(e){e.live&&t(e.conn)}))}}}(),i=function(){var e=c.getLivePeerJsIds().map(j);t({type:"CONNECTED_PEERS",peerIds:e})},u=function(e){if(a&&a.id!==e&&!c.hasConn(e)){console.log("connectPeer",e);var t=a.connect(e,{serialization:"json"});c.addConn(t),s(t)}},s=function(t){t.on("open",(function(){c.markLive(t),i(),o&&t.send({data:o,peers:c.getLivePeerJsIds()})})),t.on("data",(function(a){return function(t,a){if(!r)try{var o=A(t);a&&"object"===typeof a&&(n(o,a.data),Array.isArray(a.peers)&&a.peers.forEach((function(t){(function(e,t){return"string"===typeof t&&t.startsWith("".concat(e,"_"))})(e,t)&&u(t)})))}catch(c){console.error("handlePayload",c)}}(t,a)})),t.on("close",Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.delConn(t),console.log("dataConnection closed",t),i(),S(t.peer)&&f(t.peer);case 4:case"end":return e.stop()}}),e)}))))},l=function(){var n=Object(g.a)(v.a.mark((function n(){var o,i;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=2;break}return n.abrupt("return");case 2:if(!a){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,R(0,e,t);case 6:for((a=n.sent).on("connection",(function(e){console.log("new connection received",e);var n=A(e);t({type:"NEW_CONNECTION",peerId:n}),c.addConn(e),s(e),c.markLive(e)})),a.on("disconnected",(function(){if(a){var e=a;a=null,e.destroy(),setTimeout(l,6e4)}})),a.on("close",(function(){a=null,setTimeout(l,6e4)})),t({type:"CONNECTING_SEED_PEERS"}),o=0;o<5;o+=1)i=I(e,o),u(i);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();l();var f=function(){var t=Object(g.a)(v.a.mark((function t(n){var r,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:if(!S(a.id)){t.next=4;break}return t.abrupt("return");case 4:return r=30+Math.floor(60*Math.random()),console.log("Disconnected seed peer: ".concat(j(n),", reinit in ").concat(r,"sec...")),t.next=8,k(1e3*r);case 8:if(a){t.next=10;break}return t.abrupt("return");case 10:if(!S(a.id)){t.next=12;break}return t.abrupt("return");case 12:if(!Array.from(Array(5).keys()).every((function(t){var n=I(e,t);return c.isLive(n)}))){t.next=16;break}return i(),t.abrupt("return");case 16:o=a,a=null,o.destroy(),l();case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{broadcastData:function(e){if(!r){o=e;var t=c.getLivePeerJsIds();c.forEachLiveConns((function(n){try{n.send({data:e,peers:t})}catch(r){console.error("broadcastData",r)}}))}},dispose:function(){if(r=!0,a){var e=a;a=null,e.destroy()}}}},x=function(){var e=Object(g.a)(v.a.mark((function e(t,n){var r,a,o,c,i,u,s,l,f;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return r=new ImageCapture(n),e.next=4,k(2e3);case 4:return e.prev=4,e.next=7,r.takePhoto();case 7:return o=e.sent,e.next=10,createImageBitmap(o);case 10:a=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,r.grabFrame();case 17:a=e.sent;case 18:return c=a.width,i=a.height,e.abrupt("return",{srcImg:a,srcW:c,srcH:i});case 21:return(u=document.getElementById("internal-video")).style.display="block",u.srcObject=t,e.next=26,k(2e3);case 26:return s=u,l=u.videoWidth,f=u.videoHeight,e.abrupt("return",{srcImg:s,srcW:l,srcH:f});case 30:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r,a,o,c,i,u,s,l,f,m,d,p,g,b,h;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,a=r.getVideoTracks()[0],o=document.getElementById("internal-canvas"),c=o.getContext("2d"),i=72,u=72,o.width=i,o.height=u,e.next=13,x(r,a);case 13:return s=e.sent,l=s.srcImg,f=s.srcW,m=s.srcH,d=Math.max(i/f,u/m),p=Math.min(f,i/d),g=Math.min(m,u/d),b=(f-p)/2,h=(m-g)/2,c.drawImage(l,b,h,p,g,0,0,i,u),a.stop(),e.abrupt("return",o.toDataURL("image/png"));case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"videoinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=(n(23),r="nickname",window.localStorage.getItem(r)||""),D=function(e){var t=e.roomId,n=e.userId,r=Object(a.useRef)(P),c=Object(a.useRef)("");Object(a.useEffect)((function(){!function(e){var t=window.location.hash.slice(1),n=new URLSearchParams(t);n.set("roomId",e),window.location.hash=n.toString()}(t)}),[t]);var i=Object(a.useState)(),u=Object(m.a)(i,2),s=u[0],l=u[1],f=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n}(),d=Object(a.useCallback)((function(){return{nickname:r.current,message:c.current}}),[]),p=function(e,t,n,r){var o=Object(a.useState)(),c=Object(m.a)(o,2),i=c[0],u=c[1],s=Object(a.useState)([]),l=Object(m.a)(s,2),f=l[0],d=l[1],p=Object(a.useState)(),b=Object(m.a)(p,2),h=b[0],y=b[1],O=Object(a.useState)(),k=Object(m.a)(O,2),I=k[0],j=k[1];if(I)throw I;if(h&&("NETWORK_ERROR"===h.type||"UNKNOWN_ERROR"===h.type))throw new Error("network error");return Object(a.useEffect)((function(){var a=N(e,y,(function(e,t){if(t&&"object"===typeof t&&"string"===typeof t.userId&&"string"===typeof t.image&&((r=t.info)&&"object"===typeof r&&"string"===typeof r.nickname&&"string"===typeof r.message)){var n={userId:t.userId,image:t.image,info:t.info,received:Date.now(),obsoleted:!1};d((function(e){var t=!1,r=e.map((function(e){return e.userId===n.userId?(t=!0,n):e}));return t?r:[].concat(Object(w.a)(e),[n])}))}var r})),o=a.broadcastData,c=a.dispose,i=function(){var e=Date.now()-12e4;d((function(t){var n=!1,r=t.map((function(t){return t.received<e&&!t.obsoleted?(n=!0,Object(E.a)({},t,{obsoleted:!0})):t}));return n?r:t}))},s=function(){var e=Object(g.a)(v.a.mark((function e(){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(),e.next=4,C(r);case 4:a=e.sent,u(a),c={userId:t,image:a,info:n()},o(c),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),j(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();s();var l=setInterval(s,12e4);return function(){c(),clearTimeout(l)}}),[e,t,n,r]),{myImage:i,roomImages:f,networkStatus:h}}(t,n,d,s),b=p.myImage,h=p.roomImages,y=p.networkStatus;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"SingleRoom-status"},JSON.stringify(y)),o.a.createElement("div",{className:"SingleRoom-room-info"},o.a.createElement("div",null,"Link to this room:",o.a.createElement("input",{value:window.location.href,readOnly:!0}),"(Share this link with your colleagues)"),o.a.createElement("div",null,"Your Name:"," ",o.a.createElement("input",{defaultValue:P,onChange:function(e){r.current=e.target.value,function(e,t){window.localStorage.setItem(e,t)}("nickname",r.current)}})),o.a.createElement("div",null,"Select Camera:"," ",o.a.createElement("select",{onChange:function(e){return l(e.target.value)}},f.map((function(e){return o.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)}))))),o.a.createElement("div",null,o.a.createElement("div",{className:"SingleRoom-card"},o.a.createElement("img",{src:b||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=",className:"SingleRoom-photo",alt:"myself"}),o.a.createElement("div",{className:"SingleRoom-name"},r.current),o.a.createElement("div",{className:"SingleRoom-mesg"},o.a.createElement("form",null,o.a.createElement("input",{onChange:function(e){c.current=e.target.value},placeholder:"Enter message."})))),h.map((function(e){return o.a.createElement("div",{key:e.userId,className:"SingleRoom-card",style:{opacity:e.obsoleted?.2:1}},o.a.createElement("img",{src:e.image,className:"SingleRoom-photo",alt:"friend"}),o.a.createElement("div",{className:"SingleRoom-name"},e.info.nickname),o.a.createElement("div",{className:"SingleRoom-mesg"},e.info.message))}))))},U=(n(24),function(){var e=window.location.hash.slice(1);return new URLSearchParams(e).get("roomId")}()),M=b(),_=function(){var e=Object(a.useState)(U),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),u=i[0],s=i[1];return n?o.a.createElement(D,{roomId:n,userId:M}):o.a.createElement("div",{className:"SingleRoomEntrance-init"},o.a.createElement("button",{type:"button",onClick:function(){r(b())}},"Create a new room"),"OR",o.a.createElement("input",{value:u,onChange:function(e){return s(e.target.value)},placeholder:"Enter room link..."}),o.a.createElement("button",{type:"button",onClick:function(){r(h(u))},disabled:!h(u)},"Enter room"))},T=(n(25),function(e){Object(f.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.children;return this.state.hasError?o.a.createElement(d,null):e}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(o.a.Component)),W=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(T,null,o.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.4c13f466.chunk.js.map