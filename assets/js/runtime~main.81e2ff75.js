(()=>{"use strict";var e,t,r,a,o,n={},c={};function d(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=n,d.c=c,e=[],d.O=(t,r,a,o)=>{if(!r){var n=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var c=!0,f=0;f<r.length;f++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](r[f])))?r.splice(f--,1):(c=!1,o<n&&(n=o));if(c){e.splice(b--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,d.d(o,n),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",93:"a884dfa6",124:"c746a891",210:"4780c924",237:"1df93b7f",256:"40f0b1b7",288:"591753a1",368:"a94703ab",379:"2d1cd6e4",414:"393be207",518:"a7bd4aaa",661:"5e95c892",671:"0e384e19",713:"1e4c1add",769:"6eada910",856:"05c7707b",918:"17896441",967:"2bcacb66"}[e]||e)+"."+{53:"5fedea83",85:"6082d4c6",93:"f5369bf6",124:"d47bb13a",210:"a947c91b",237:"e64f72cd",256:"3e4c2847",288:"643a1d4b",368:"7f61673c",379:"d0a1ab0a",414:"7297b0c6",518:"e801c5fa",661:"2bb66262",671:"16fcde60",674:"0e5351e6",713:"1f30becf",769:"565e21b6",772:"2c43142e",856:"1ab9471c",918:"b03fdf35",967:"9be795f6"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="overreact-docs:",d.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var c,f;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){c=u;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",o+r),c.src=e),a[e]=[t];var l=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),f&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",d.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85",a884dfa6:"93",c746a891:"124","4780c924":"210","1df93b7f":"237","40f0b1b7":"256","591753a1":"288",a94703ab:"368","2d1cd6e4":"379","393be207":"414",a7bd4aaa:"518","5e95c892":"661","0e384e19":"671","1e4c1add":"713","6eada910":"769","05c7707b":"856","2bcacb66":"967"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=d.p+d.u(t),c=new Error;d.l(n,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],c=r[1],f=r[2],i=0;if(n.some((t=>0!==e[t]))){for(a in c)d.o(c,a)&&(d.m[a]=c[a]);if(f)var b=f(d)}for(t&&t(r);i<n.length;i++)o=n[i],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(b)},r=self.webpackChunkoverreact_docs=self.webpackChunkoverreact_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();