(this["webpackJsonpimages-switcher"]=this["webpackJsonpimages-switcher"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/1.70eeeb45.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.1e921e25.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.1c28f435.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.75eb8430.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.a3ad066f.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.6b16d480.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.78bec073.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.d2a72859.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.99d0d97b.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.43825f80.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.c41e052a.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.7ff0b466.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),i=(a(9),a(10),a(1)),s=function(e){var t=e.primaryImg,a=e.secondaryImg,r=Object(n.useRef)(null),o=Object(n.useState)(!0),s=Object(i.a)(o,2),l=s[0],u=s[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),f=p[0],d=p[1],g=Object(n.useCallback)((function(){d((function(){return b()}))}),[]);Object(n.useEffect)((function(){return window.addEventListener("scroll",g),d(b()),u(!1),function(){window.removeEventListener("scroll",g)}}),[l,g]);var b=function(){if(r.current){var e=r.current.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}return!1};return l?null:c.a.createElement("img",{ref:r,src:f?a:t,alt:"",style:{opacity:f?1:.5}})},l=function(e){var t=e.primaryImg,a=e.secondaryImg,r=Object(n.useRef)(null),o=Object(n.useState)(t),s=Object(i.a)(o,2),l=s[0],u=s[1];return c.a.createElement("img",{ref:r,current:l,src:t,onMouseOver:function(){u(a),r.current.src=a},onMouseOut:function(){u(t),r.current.src=t},alt:""})},u=function(e){var t=e.event,a=e.primaryByDefault,n=e.paths,r="scrolling"===t?s:l,o=function(e){return{primaryIndex:e?0:1,secondaryIndex:e?1:0}}(a),i=o.primaryIndex,u=o.secondaryIndex;return c.a.createElement("div",{className:"images-content"},n.map((function(e,t){return c.a.createElement(r,{key:t,primaryImg:e[i],secondaryImg:e[u],alt:""})})))},m=function(e){var t=e.checked,a=e.label,n=e.className,r=e.onChange,o="checkbox-".concat(n);return c.a.createElement("div",{className:"toggle-switch ".concat(n)},c.a.createElement("input",{id:o,type:"checkbox",checked:t,onChange:r}),c.a.createElement("label",{style:{background:t&&"darkgrey"},className:"switch-button-back",htmlFor:o},c.a.createElement("span",{className:"switch-button"})),c.a.createElement("label",{className:"switch-label"},a))},p=function(e){var t=e.paths,a=Object(n.useState)(!1),r=Object(i.a)(a,2),o=r[0],s=r[1],l=Object(n.useState)(!1),p=Object(i.a)(l,2),f=p[0],d=p[1],g=Object(n.useState)(!1),b=Object(i.a)(g,2),h=b[0],v=b[1];Object(n.useEffect)((function(){return v(!0)}),[]);var j=o?"scrolling":"mouse over",E=o?"mouse over":"scrolling";return c.a.createElement("div",{className:"images-controller"},c.a.createElement("div",{className:"toggles"},c.a.createElement(m,{key:"all-images",checked:f,className:"switch-all-images",label:"Switch all images",onChange:function(){d(!f),v(!h)}}),c.a.createElement(m,{key:"event",checked:o,className:"switch-event",label:"Switch ".concat(j," event to ").concat(E),onChange:function(){s(!o)}})),c.a.createElement(u,{event:j,primaryByDefault:h,paths:t}))},f=function(e){var t=e.source;return c.a.createElement("div",{className:"images-source"},"Source of images:",c.a.createElement("a",{href:t},t))},d=[[a(11),a(12)],[a(13),a(14)],[a(15),a(16)],[a(17),a(18)],[a(19),a(20)],[a(21),a(22)]];var g=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,{paths:d}),c.a.createElement(f,{source:"https://pixabay.com/"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d8b29825.chunk.js.map