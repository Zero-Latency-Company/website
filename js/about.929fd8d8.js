(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04d1":function(t,r,e){var n=e("342f"),o=n.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"057f":function(t,r,e){var n=e("c6b6"),o=e("fc6a"),i=e("241c").f,a=e("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(r){return a(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?u(t):i(o(t))}},"0767":function(t,r,e){"use strict";e.r(r);e("b0c0");var n=e("7a23"),o={class:"container mx-auto max-w-7xl px-5"},i=Object(n["e"])("div",{class:"py-40"},[Object(n["e"])("p",{class:"text-3xl font-mono uppercase"},[Object(n["g"])("KNOW OUR "),Object(n["e"])("span",{class:"text-white bg-red-300"},"TEAM")])],-1),a={class:"py-10"},c={class:"grid w-full grid-cols-1 gap-10 md:grid-cols-3"},u={class:"flex flex-col col-span-1 items-center justify-center shadow-xl py-10 px-10 transform duration-500 hover:-translate-y-5 cursor-pointer rounded-md bg-white"},s={class:"relative p-5"},f=["src"],l={class:"mt-3 py-5 text-center"},d={class:"font-medium text-xl"};function p(t,r,e,p,v,h){return Object(n["r"])(),Object(n["d"])("div",o,[i,Object(n["e"])("div",a,[Object(n["e"])("div",c,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(v.teams,(function(t,r){return Object(n["r"])(),Object(n["d"])("div",{key:r},[Object(n["e"])("div",u,[Object(n["e"])("div",s,[Object(n["e"])("div",{class:Object(n["n"])(["absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full",v.theme[r]])},null,2),Object(n["e"])("img",{class:"relative z-10 w-full rounded-full",src:"img/team/"+t.pic+".png"},null,8,f)]),Object(n["e"])("div",l,[Object(n["e"])("h3",d,Object(n["y"])(t.name),1),Object(n["e"])("p",null,"( "+Object(n["y"])(t.title)+" )",1)])])])})),128))])])])}e("4e82");var v={data:function(){return{theme:["bg-red-100","bg-blue-100","bg-green-100","bg-yellow-100","bg-purple-100","bg-blue-100","bg-red-100","bg-blue-100","bg-green-100","bg-yellow-100","bg-purple-100","bg-blue-100"],teams:[{name:"Jerry Ward",title:"CEO",pic:"jerry"},{name:"Byron Nicholson",title:"Investment Manager",pic:"byron"},{name:"Elise",title:"Legal / Accounts",pic:"elise"},{name:"Webster Pearson",title:"Developer",pic:"webster"},{name:"Oliver Mcdaniel",title:"Developer / Tester",pic:"oliver"},{name:"Hugh Bennett",title:"Developer / Debugger",pic:"hugh"},{name:"Blossom",title:"Fund Manager",pic:"blossom"},{name:"Leonard Coleman",title:"Fund Manager",pic:"leonard"},{name:"Hardi Johnson",title:"Fund Manager",pic:"hardi"},{name:"Tristram Elledge",title:"Fund Manager",pic:"tristram"},{name:"Wayne Simmons",title:"Fund Manager",pic:"wayne"}]}},mounted:function(){this.teams.sort((function(){return Math.random()-.5}))}},h=e("6b0d"),b=e.n(h);const g=b()(v,[["render",p]]);r["default"]=g},"083a":function(t,r,e){"use strict";var n=e("0d51"),o=TypeError;t.exports=function(t,r){if(!delete t[r])throw o("Cannot delete property "+n(r)+" of "+n(t))}},"0b42":function(t,r,e){var n=e("e8b5"),o=e("68ee"),i=e("861d"),a=e("b622"),c=a("species"),u=Array;t.exports=function(t){var r;return n(t)&&(r=t.constructor,o(r)&&(r===u||n(r.prototype))?r=void 0:i(r)&&(r=r[c],null===r&&(r=void 0))),void 0===r?u:r}},"0c47":function(t,r,e){var n=e("da84"),o=e("d44e");o(n.JSON,"JSON",!0)},"159b":function(t,r,e){var n=e("da84"),o=e("fdbc"),i=e("785a"),a=e("17c2"),c=e("9112"),u=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(r){t.forEach=a}};for(var s in o)o[s]&&u(n[s]&&n[s].prototype);u(i)},"17c2":function(t,r,e){"use strict";var n=e("b727").forEach,o=e("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,r,e){var n=e("d039"),o=e("b622"),i=e("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[],e=r.constructor={};return e[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"23dc":function(t,r,e){var n=e("d44e");n(Math,"Math",!0)},3410:function(t,r,e){var n=e("23e7"),o=e("d039"),i=e("7b0b"),a=e("e163"),c=e("e177"),u=o((function(){a(1)}));n({target:"Object",stat:!0,forced:u,sham:!c},{getPrototypeOf:function(t){return a(i(t))}})},"3d87":function(t,r,e){var n=e("4930");t.exports=n&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,r,e){var n=e("da84");t.exports=n},"4dae":function(t,r,e){var n=e("23cb"),o=e("07fa"),i=e("8418"),a=Array,c=Math.max;t.exports=function(t,r,e){for(var u=o(t),s=n(r,u),f=n(void 0===e?u:e,u),l=a(c(f-s,0)),d=0;s<f;s++,d++)i(l,d,t[s]);return l.length=d,l}},"4e82":function(t,r,e){"use strict";var n=e("23e7"),o=e("e330"),i=e("59ed"),a=e("7b0b"),c=e("07fa"),u=e("083a"),s=e("577e"),f=e("d039"),l=e("addb"),d=e("a640"),p=e("04d1"),v=e("d998"),h=e("2d00"),b=e("512c"),g=[],m=o(g.sort),y=o(g.push),w=f((function(){g.sort(void 0)})),x=f((function(){g.sort(null)})),O=d("sort"),j=!f((function(){if(h)return h<70;if(!(p&&p>3)){if(v)return!0;if(b)return b<603;var t,r,e,n,o="";for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)g.push({k:r+n,v:e})}for(g.sort((function(t,r){return r.v-t.v})),n=0;n<g.length;n++)r=g[n].k.charAt(0),o.charAt(o.length-1)!==r&&(o+=r);return"DGBEFHACIJK"!==o}})),E=w||!x||!O||!j,S=function(t){return function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:s(r)>s(e)?1:-1}};n({target:"Array",proto:!0,forced:E},{sort:function(t){void 0!==t&&i(t);var r=a(this);if(j)return void 0===t?m(r):m(r,t);var e,n,o=[],s=c(r);for(n=0;n<s;n++)n in r&&y(o,r[n]);l(o,S(t)),e=o.length,n=0;while(n<e)r[n]=o[n++];while(n<s)u(r,n++);return r}})},"512c":function(t,r,e){var n=e("342f"),o=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},"57b9":function(t,r,e){var n=e("c65b"),o=e("d066"),i=e("b622"),a=e("cb2d");t.exports=function(){var t=o("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,c=i("toPrimitive");r&&!r[c]&&a(r,c,(function(t){return n(e,this)}),{arity:1})}},"5a47":function(t,r,e){var n=e("23e7"),o=e("4930"),i=e("d039"),a=e("7418"),c=e("7b0b"),u=!o||i((function(){a.f(1)}));n({target:"Object",stat:!0,forced:u},{getOwnPropertySymbols:function(t){var r=a.f;return r?r(c(t)):[]}})},"65f0":function(t,r,e){var n=e("0b42");t.exports=function(t,r){return new(n(t))(0===r?0:r)}},7156:function(t,r,e){var n=e("1626"),o=e("861d"),i=e("d2bb");t.exports=function(t,r,e){var a,c;return i&&n(a=r.constructor)&&a!==e&&o(c=a.prototype)&&c!==e.prototype&&i(t,c),t}},"746f":function(t,r,e){var n=e("428f"),o=e("1a2d"),i=e("e538"),a=e("9bf2").f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},8418:function(t,r,e){"use strict";var n=e("a04b"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},"944a":function(t,r,e){var n=e("d066"),o=e("746f"),i=e("d44e");o("toStringTag"),i(n("Symbol"),"Symbol")},a4d3:function(t,r,e){e("d9f5"),e("b4f8"),e("c513"),e("e9c4"),e("5a47")},a640:function(t,r,e){"use strict";var n=e("d039");t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){return 1},1)}))}},ab36:function(t,r,e){var n=e("861d"),o=e("9112");t.exports=function(t,r){n(r)&&"cause"in r&&o(t,"cause",r.cause)}},addb:function(t,r,e){var n=e("4dae"),o=Math.floor,i=function(t,r){var e=t.length,u=o(e/2);return e<8?a(t,r):c(t,i(n(t,0,u),r),i(n(t,u),r),r)},a=function(t,r){var e,n,o=t.length,i=1;while(i<o){n=i,e=t[i];while(n&&r(t[n-1],e)>0)t[n]=t[--n];n!==i++&&(t[n]=e)}return t},c=function(t,r,e,n){var o=r.length,i=e.length,a=0,c=0;while(a<o||c<i)t[a+c]=a<o&&c<i?n(r[a],e[c])<=0?r[a++]:e[c++]:a<o?r[a++]:e[c++];return t};t.exports=i},aeb0:function(t,r,e){var n=e("9bf2").f;t.exports=function(t,r,e){e in t||n(t,e,{configurable:!0,get:function(){return r[e]},set:function(t){r[e]=t}})}},b0c0:function(t,r,e){var n=e("83ab"),o=e("5e77").EXISTS,i=e("e330"),a=e("9bf2").f,c=Function.prototype,u=i(c.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=i(s.exec),l="name";n&&!o&&a(c,l,{configurable:!0,get:function(){try{return f(s,u(this))[1]}catch(t){return""}}})},b4f8:function(t,r,e){var n=e("23e7"),o=e("d066"),i=e("1a2d"),a=e("577e"),c=e("5692"),u=e("3d87"),s=c("string-to-symbol-registry"),f=c("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!u},{for:function(t){var r=a(t);if(i(s,r))return s[r];var e=o("Symbol")(r);return s[r]=e,f[e]=r,e}})},b636:function(t,r,e){var n=e("746f");n("asyncIterator")},b727:function(t,r,e){var n=e("0366"),o=e("e330"),i=e("44ad"),a=e("7b0b"),c=e("07fa"),u=e("65f0"),s=o([].push),f=function(t){var r=1==t,e=2==t,o=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(v,h,b,g){for(var m,y,w=a(v),x=i(w),O=n(h,b),j=c(x),E=0,S=g||u,k=r?S(v,j):e||d?S(v,0):void 0;j>E;E++)if((p||E in x)&&(m=x[E],y=O(m,E,w),t))if(r)k[E]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:s(k,m)}else switch(t){case 4:return!1;case 7:s(k,m)}return l?-1:o||f?f:k}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},b8fa:function(t,r,e){"use strict";e.r(r);var n=e("7a23"),o=Object(n["e"])("p",{class:"text-3xl font-mono uppercase py-5"},[Object(n["g"])("EMAIL "),Object(n["e"])("span",{class:"text-white bg-red-300"},"US")],-1),i={class:"text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"};function a(t,r,e,a,c,u){return Object(n["r"])(),Object(n["d"])("div",null,[Object(n["e"])("div",{class:"px-5 py-20 container mx-auto max-w-7xl",onClick:r[0]||(r[0]=function(){return u.ofs&&u.ofs.apply(u,arguments)}),onMouseenter:r[1]||(r[1]=function(){return u.ofs&&u.ofs.apply(u,arguments)})},[o,Object(n["e"])("p",i,Object(n["y"])(c.mail),1)],32)])}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("b636"),e("944a"),e("0c47"),e("23dc"),e("d9e2"),e("3410"),e("159b"),e("b0c0"),e("fb6a");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
u=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(F){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=f;var d={};function p(){}function v(){}function h(){}var b={};s(b,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==r&&e.call(m,o)&&(b=m);var y=h.prototype=p.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function n(o,i,a,u){var s=l(t[o],t,i);if("throw"!==s.type){var f=s.arg,d=f.value;return d&&"object"==c(d)&&e.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(d).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=void 0,O(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return v.prototype=h,s(y,"constructor",h),s(h,"constructor",v),v.displayName=s(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(y),s(y,a,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function s(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function f(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))}}var l={data:function(){return{mail:"click to view"}},methods:{ofs:function(){var t=this;return f(u().mark((function r(){return u().wrap((function(r){while(1)switch(r.prev=r.next){case 0:Math.random()>.5?t.mail="mail@zerolatency.company":t.mail="contact@zerolatency.company";case 1:case"end":return r.stop()}}),r)})))()}}},d=e("6b0d"),p=e.n(d);const v=p()(l,[["render",a]]);r["default"]=v},b980:function(t,r,e){var n=e("d039"),o=e("5c6c");t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},c513:function(t,r,e){var n=e("23e7"),o=e("1a2d"),i=e("d9b5"),a=e("0d51"),c=e("5692"),u=e("3d87"),s=c("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!u},{keyFor:function(t){if(!i(t))throw TypeError(a(t)+" is not a symbol");if(o(s,t))return s[t]}})},c770:function(t,r,e){var n=e("e330"),o=Error,i=n("".replace),a=function(t){return String(o(t).stack)}("zxcasd"),c=/\n\s*at [^:]*:[^\n]*/,u=c.test(a);t.exports=function(t,r){if(u&&"string"==typeof t&&!o.prepareStackTrace)while(r--)t=i(t,c,"");return t}},c9e5:function(t,r,e){"use strict";e.r(r);var n=e("7a23"),o={class:"px-5 py-20 container mx-auto max-w-7xl"},i=Object(n["f"])('<div class="py-10"><aside class="p-12 pt-36 sm:p-16 sm:pt-64 bg-gradient-to-r from-red-400 to-purple-500"><div class="sm:items-end sm:justify-between sm:flex"><div class="max-w-xl"><p class="text-3xl font-bold text-white sm:text-4xl uppercase">We invest in Web3 at the earliest stages and beyond.</p></div><a class="inline-block px-8 py-4 mt-4 text-blue-500 bg-white rounded-lg shadow-lg hover:opacity-75 sm:mt-0 sm:ml-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 sm:h-8 sm:w-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></div></aside></div><div class="grid grid-cols-2 md:grid-cols-4"><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/marlin.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/ironfish.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/rabbithole.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/anoma.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/oasis_labs.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/spacemesh.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/spruce.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/certora.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/near.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/bitnomial.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/mobilecoin.png" class="h-64 w-64"></div><div class="transform duration-500 hover:-translate-y-1"><img src="img/logo/layer3.png" class="h-64 w-64"></div></div>',2),a=[i];function c(t,r){return Object(n["r"])(),Object(n["d"])("div",o,a)}var u=e("6b0d"),s=e.n(u);const f={},l=s()(f,[["render",c]]);r["default"]=l},d28b:function(t,r,e){var n=e("746f");n("iterator")},d998:function(t,r,e){var n=e("342f");t.exports=/MSIE|Trident/.test(n)},d9e2:function(t,r,e){var n=e("23e7"),o=e("da84"),i=e("2ba4"),a=e("e5cb"),c="WebAssembly",u=o[c],s=7!==Error("e",{cause:7}).cause,f=function(t,r){var e={};e[t]=a(t,r,s),n({global:!0,constructor:!0,arity:1,forced:s},e)},l=function(t,r){if(u&&u[t]){var e={};e[t]=a(c+"."+t,r,s),n({target:c,stat:!0,constructor:!0,arity:1,forced:s},e)}};f("Error",(function(t){return function(r){return i(t,this,arguments)}})),f("EvalError",(function(t){return function(r){return i(t,this,arguments)}})),f("RangeError",(function(t){return function(r){return i(t,this,arguments)}})),f("ReferenceError",(function(t){return function(r){return i(t,this,arguments)}})),f("SyntaxError",(function(t){return function(r){return i(t,this,arguments)}})),f("TypeError",(function(t){return function(r){return i(t,this,arguments)}})),f("URIError",(function(t){return function(r){return i(t,this,arguments)}})),l("CompileError",(function(t){return function(r){return i(t,this,arguments)}})),l("LinkError",(function(t){return function(r){return i(t,this,arguments)}})),l("RuntimeError",(function(t){return function(r){return i(t,this,arguments)}}))},d9f5:function(t,r,e){"use strict";var n=e("23e7"),o=e("da84"),i=e("c65b"),a=e("e330"),c=e("c430"),u=e("83ab"),s=e("4930"),f=e("d039"),l=e("1a2d"),d=e("3a9b"),p=e("825a"),v=e("fc6a"),h=e("a04b"),b=e("577e"),g=e("5c6c"),m=e("7c73"),y=e("df75"),w=e("241c"),x=e("057f"),O=e("7418"),j=e("06cf"),E=e("9bf2"),S=e("37e8"),k=e("d1e7"),L=e("cb2d"),F=e("5692"),A=e("f772"),M=e("d012"),P=e("90e3"),T=e("b622"),N=e("e538"),_=e("746f"),C=e("57b9"),D=e("d44e"),I=e("69f3"),G=e("b727").forEach,J=A("hidden"),W="Symbol",B="prototype",R=I.set,z=I.getterFor(W),H=Object[B],$=o.Symbol,K=$&&$[B],U=o.TypeError,Y=o.QObject,Q=j.f,X=E.f,q=x.f,V=k.f,Z=a([].push),tt=F("symbols"),rt=F("op-symbols"),et=F("wks"),nt=!Y||!Y[B]||!Y[B].findChild,ot=u&&f((function(){return 7!=m(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=Q(H,r);n&&delete H[r],X(t,r,e),n&&t!==H&&X(H,r,n)}:X,it=function(t,r){var e=tt[t]=m(K);return R(e,{type:W,tag:t,description:r}),u||(e.description=r),e},at=function(t,r,e){t===H&&at(rt,r,e),p(t);var n=h(r);return p(e),l(tt,n)?(e.enumerable?(l(t,J)&&t[J][n]&&(t[J][n]=!1),e=m(e,{enumerable:g(0,!1)})):(l(t,J)||X(t,J,g(1,{})),t[J][n]=!0),ot(t,n,e)):X(t,n,e)},ct=function(t,r){p(t);var e=v(r),n=y(e).concat(dt(e));return G(n,(function(r){u&&!i(st,e,r)||at(t,r,e[r])})),t},ut=function(t,r){return void 0===r?m(t):ct(m(t),r)},st=function(t){var r=h(t),e=i(V,this,r);return!(this===H&&l(tt,r)&&!l(rt,r))&&(!(e||!l(this,r)||!l(tt,r)||l(this,J)&&this[J][r])||e)},ft=function(t,r){var e=v(t),n=h(r);if(e!==H||!l(tt,n)||l(rt,n)){var o=Q(e,n);return!o||!l(tt,n)||l(e,J)&&e[J][n]||(o.enumerable=!0),o}},lt=function(t){var r=q(v(t)),e=[];return G(r,(function(t){l(tt,t)||l(M,t)||Z(e,t)})),e},dt=function(t){var r=t===H,e=q(r?rt:v(t)),n=[];return G(e,(function(t){!l(tt,t)||r&&!l(H,t)||Z(n,tt[t])})),n};s||($=function(){if(d(K,this))throw U("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,r=P(t),e=function(t){this===H&&i(e,rt,t),l(this,J)&&l(this[J],r)&&(this[J][r]=!1),ot(this,r,g(1,t))};return u&&nt&&ot(H,r,{configurable:!0,set:e}),it(r,t)},K=$[B],L(K,"toString",(function(){return z(this).tag})),L($,"withoutSetter",(function(t){return it(P(t),t)})),k.f=st,E.f=at,S.f=ct,j.f=ft,w.f=x.f=lt,O.f=dt,N.f=function(t){return it(T(t),t)},u&&(X(K,"description",{configurable:!0,get:function(){return z(this).description}}),c||L(H,"propertyIsEnumerable",st,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!s,sham:!s},{Symbol:$}),G(y(et),(function(t){_(t)})),n({target:W,stat:!0,forced:!s},{useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!u},{create:ut,defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:lt}),C(),D($,W),M[J]=!0},e01a:function(t,r,e){"use strict";var n=e("23e7"),o=e("83ab"),i=e("da84"),a=e("e330"),c=e("1a2d"),u=e("1626"),s=e("3a9b"),f=e("577e"),l=e("9bf2").f,d=e("e893"),p=i.Symbol,v=p&&p.prototype;if(o&&u(p)&&(!("description"in v)||void 0!==p().description)){var h={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),r=s(v,this)?new p(t):void 0===t?p():p(t);return""===t&&(h[r]=!0),r};d(b,p),b.prototype=v,v.constructor=b;var g="Symbol(test)"==String(p("test")),m=a(v.toString),y=a(v.valueOf),w=/^Symbol\((.*)\)[^)]+$/,x=a("".replace),O=a("".slice);l(v,"description",{configurable:!0,get:function(){var t=y(this),r=m(t);if(c(h,t))return"";var e=g?O(r,7,-1):x(r,w,"$1");return""===e?void 0:e}}),n({global:!0,constructor:!0,forced:!0},{Symbol:b})}},e391:function(t,r,e){var n=e("577e");t.exports=function(t,r){return void 0===t?arguments.length<2?"":r:n(t)}},e538:function(t,r,e){var n=e("b622");r.f=n},e5cb:function(t,r,e){"use strict";var n=e("d066"),o=e("1a2d"),i=e("9112"),a=e("3a9b"),c=e("d2bb"),u=e("e893"),s=e("aeb0"),f=e("7156"),l=e("e391"),d=e("ab36"),p=e("c770"),v=e("b980"),h=e("83ab"),b=e("c430");t.exports=function(t,r,e,g){var m="stackTraceLimit",y=g?2:1,w=t.split("."),x=w[w.length-1],O=n.apply(null,w);if(O){var j=O.prototype;if(!b&&o(j,"cause")&&delete j.cause,!e)return O;var E=n("Error"),S=r((function(t,r){var e=l(g?r:t,void 0),n=g?new O(t):new O;return void 0!==e&&i(n,"message",e),v&&i(n,"stack",p(n.stack,2)),this&&a(j,this)&&f(n,this,S),arguments.length>y&&d(n,arguments[y]),n}));if(S.prototype=j,"Error"!==x?c?c(S,E):u(S,E,{name:!0}):h&&m in O&&(s(S,O,m),s(S,O,"prepareStackTrace")),u(S,O),!b)try{j.name!==x&&i(j,"name",x),j.constructor=S}catch(k){}return S}}},e8b5:function(t,r,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e9c4:function(t,r,e){var n=e("23e7"),o=e("d066"),i=e("2ba4"),a=e("c65b"),c=e("e330"),u=e("d039"),s=e("e8b5"),f=e("1626"),l=e("861d"),d=e("d9b5"),p=e("f36a"),v=e("4930"),h=o("JSON","stringify"),b=c(/./.exec),g=c("".charAt),m=c("".charCodeAt),y=c("".replace),w=c(1..toString),x=/[\uD800-\uDFFF]/g,O=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,E=!v||u((function(){var t=o("Symbol")();return"[null]"!=h([t])||"{}"!=h({a:t})||"{}"!=h(Object(t))})),S=u((function(){return'"\\udf06\\ud834"'!==h("\udf06\ud834")||'"\\udead"'!==h("\udead")})),k=function(t,r){var e=p(arguments),n=r;if((l(r)||void 0!==t)&&!d(t))return s(r)||(r=function(t,r){if(f(n)&&(r=a(n,this,t,r)),!d(r))return r}),e[1]=r,i(h,null,e)},L=function(t,r,e){var n=g(e,r-1),o=g(e,r+1);return b(O,t)&&!b(j,o)||b(j,t)&&!b(O,n)?"\\u"+w(m(t,0),16):t};h&&n({target:"JSON",stat:!0,arity:3,forced:E||S},{stringify:function(t,r,e){var n=p(arguments),o=i(E?k:h,null,n);return S&&"string"==typeof o?y(o,x,L):o}})},fb6a:function(t,r,e){"use strict";var n=e("23e7"),o=e("e8b5"),i=e("68ee"),a=e("861d"),c=e("23cb"),u=e("07fa"),s=e("fc6a"),f=e("8418"),l=e("b622"),d=e("1dde"),p=e("f36a"),v=d("slice"),h=l("species"),b=Array,g=Math.max;n({target:"Array",proto:!0,forced:!v},{slice:function(t,r){var e,n,l,d=s(this),v=u(d),m=c(t,v),y=c(void 0===r?v:r,v);if(o(d)&&(e=d.constructor,i(e)&&(e===b||o(e.prototype))?e=void 0:a(e)&&(e=e[h],null===e&&(e=void 0)),e===b||void 0===e))return p(d,m,y);for(n=new(void 0===e?b:e)(g(y-m,0)),l=0;m<y;m++,l++)m in d&&f(n,l,d[m]);return n.length=l,n}})}}]);
//# sourceMappingURL=about.929fd8d8.js.map