(this.webpackJsonpmonitoring=this.webpackJsonpmonitoring||[]).push([[0],{113:function(e,t,n){e.exports=n(167)},167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(118),n(143),n(145),n(150),n(151),n(152),n(154),n(24)),l=(n(158),n(203)),m=(n(159),n(101)),u=n(189),s=n(191),d=n(192),p=n(51),g=n(193),f=n(104),h=n.n(f),E=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function b(e){var t=e.onClick,n=E();return r.a.createElement("div",{className:n.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(d.a,{onClick:t,edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(h.a,null)),r.a.createElement(p.a,{variant:"h6",className:n.title},"Monitoring"),r.a.createElement(g.a,{color:"inherit",onClick:function(){window.open("https://www.google.com/nonprofits/account/home?hl=pt-BR")}},"Login"))))}var v=n(196),w=n(205),O=n(197),j=n(199),x=n(204),y=n(202),C=n(194),k=n(195),S=n(198),I=n(200),N=n(201),L=n(108),B=Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"column",flexWrap:"wrap",width:"fit-content"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200,border:100},sideList:{width:"100%",maxWidth:300},nested:{paddingLeft:e.spacing(4)}}}));function F(e){var t=e.map,n=B(),o=Object(a.useState)(!1),c=Object(i.a)(o,2),l=c[0],m=c[1],u=Object(a.useState)(!1),s=Object(i.a)(u,2),d=s[0],p=s[1],g=Object(a.useState)(0),f=Object(i.a)(g,2),h=f[0],E=f[1],F=Object(a.useState)(!1),W=Object(i.a)(F,2),M=W[0],R=W[1],T=Object(a.useRef)(),H=function(){m((function(e){return!e}))},z=function(){R(!M)},D=[{text:"Wind",IconComponent:C.a,onClick:function(e){p(!0);var n=T.current;if(n)return p(!1),t.hasLayer(n)?void n.removeFrom(t):void n.addTo(t);var a=new Date,r=a.toISOString().split("T")[0].replace(/-/g,""),o="0".concat(a.getUTCHours()).slice(-2);fetch("https://b2cforecast.climatempo.com.br/datas/windy/global/".concat(r,"/").concat(o,"_10m.json")).then((function(e){return e.json()})).then((function(e){var n=T.current;n&&n.removeFrom(t),T.current=new L.a({data:e,displayOptions:{speedUnit:"km/h"},lineWidth:2,maxVelocity:100}).addTo(t),p(!1)}))}},{text:"Mail",IconComponent:k.a,subItems:r.a.createElement(v.a,{component:"div",disablePadding:!0},r.a.createElement(w.a,{button:!0,className:n.nested},r.a.createElement(O.a,null,r.a.createElement(S.a,null)),r.a.createElement(j.a,{primary:"Starred"})),r.a.createElement(w.a,{button:!0,className:n.nested},r.a.createElement(O.a,null,r.a.createElement(S.a,null)),r.a.createElement(j.a,{primary:"Starred"})),r.a.createElement(w.a,{button:!0,className:n.nested},r.a.createElement(O.a,null,r.a.createElement(S.a,null)),r.a.createElement(j.a,{primary:"Starred"}))),onClick:function(e){var t=e.target;console.log(t)}},{text:"Spam",IconComponent:C.a,onClick:function(e){var t=e.target;console.log(t)}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{onClick:H}),r.a.createElement(x.a,{anchor:"left",open:l,onClose:H},r.a.createElement(v.a,{component:"nav",className:n.sideList},D.map((function(e,t){var n=e.text,o=e.onClick,c=e.IconComponent,i=e.subItems;return r.a.createElement(a.Fragment,{key:t},r.a.createElement(w.a,{button:!0,disabled:d,key:t,selected:h===t,onClick:function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a=arguments.length>3?arguments[3]:void 0;E(t),n(e),a&&z()}(e,t,o,i)}},r.a.createElement(O.a,null,r.a.createElement(c,null)),r.a.createElement(j.a,{primary:n}),i&&(M?r.a.createElement(I.a,null):r.a.createElement(N.a,null))),i&&r.a.createElement(y.a,{in:M,timeout:"auto",unmountOnExit:!0},i))}),D))))}n(70);var W=n(2);function M(e){e.map;var t=e.updateMap,n=Object(a.useState)(window.innerHeight),o=Object(i.a)(n,2),c=o[0],l=o[1],m=Object(a.useRef)();return Object(a.useEffect)((function(){var e=window.innerHeight,n=getComputedStyle(m.current.parentElement.firstChild).height,a=e-Number(n.slice(0,-2));l(a);var r=Object(W.map)(m.current,{center:[-23.547778,-46.635833],zoom:4,maxBounds:[[-180,1/0],[180,-1/0]],maxZoom:16,minZoom:3});t(r),Object(W.tileLayer)("https://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(r)}),[m]),r.a.createElement("div",{id:"map",style:{height:c},ref:m})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){var e=window.innerHeight,t=Object(a.useState)(),n=Object(i.a)(t,2),o=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(F,{map:o}),r.a.createElement(M,{height:e,mainMap:o,updateMap:function(e){return c(e)}}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[113,1,2]]]);
//# sourceMappingURL=main.ee22af49.chunk.js.map