(function(e){function t(t){for(var r,a,u=t[0],l=t[1],i=t[2],s=0,p=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"929fd8d8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var i=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",i.name="ChunkLoadError",i.type=r,i.request=c,n[1](i)}o[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container mx-auto flex flex-col flex-wrap items-center justify-between py-10 md:flex-row uppercase text-2xl"},c={class:"relative flex flex-col md:flex-row mb-2"},a=Object(r["g"])(" ZERO LATENCY "),u={class:"inline-flex items-center ml-5 space-x-6 lg:justify-end"},l={class:"flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 uppercase"},i=Object(r["g"])("Portfolio"),s=Object(r["g"])("TEAM"),f=Object(r["g"])("CONTACT"),p=Object(r["e"])("footer",{class:"py-20"},[Object(r["e"])("div",{class:"container px-4 mx-auto"},[Object(r["e"])("p",{class:"text-center text-2xl text-gray-400 uppercase"},"Built with ❤️ In INDIA")])],-1);function b(e,t){var n=Object(r["w"])("router-link"),b=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["e"])("div",c,[Object(r["h"])(n,{to:"/",class:"font-bold"},{default:Object(r["B"])((function(){return[a]})),_:1})]),Object(r["e"])("div",u,[Object(r["e"])("nav",l,[Object(r["h"])(n,{to:"/portfolio",class:"mr-5"},{default:Object(r["B"])((function(){return[i]})),_:1}),Object(r["h"])(n,{to:"/team",class:"mr-5"},{default:Object(r["B"])((function(){return[s]})),_:1}),Object(r["h"])(n,{to:"/contact",class:"mr-5"},{default:Object(r["B"])((function(){return[f]})),_:1})])])]),Object(r["h"])(b),p],64)}var d=n("6b0d"),m=n.n(d);const O={},j=m()(O,[["render",b]]);var v=j,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),x=Object(r["e"])("div",{class:"container mx-auto max-w-5xl flex flex-col justify-between items-center relative font-mono"},[Object(r["e"])("div",{class:"flex flex-col px-6 py-40"},[Object(r["e"])("p",{class:"text-3xl my-6 text-center dark:text-white"},"ZERO LATENCY IS A ORGANISATION THAT DEVELOPS, MANAGES & FUNDS BLOCKCHAIN STARTUPS.")])],-1),y=[x];function w(e,t){return Object(r["r"])(),Object(r["d"])("div",null,y)}const g={},T=m()(g,[["render",w]]);var A=T,P=[{path:"/",name:"Home",component:A},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("about").then(n.bind(null,"c9e5"))}},{path:"/team",name:"Team",component:function(){return n.e("about").then(n.bind(null,"0767"))}}],S=Object(h["a"])({history:Object(h["b"])(),routes:P}),E=S;Object(r["c"])(v).use(E).mount("#app")}});
//# sourceMappingURL=app.cc1064ce.js.map