import{R as o,j as c,a as g}from"./index.deccb83f.js";var m={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=o.createContext&&o.createContext(m),l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)},y=globalThis&&globalThis.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function d(e){return e&&e.map(function(r,t){return o.createElement(r.tag,l({key:t},r.attr),d(r.child))})}function O(e){return function(r){return c(v,{...l({attr:l({},e.attr)},r),children:d(e.child)})}}function v(e){var r=function(t){var n=e.attr,a=e.size,s=e.title,h=y(e,["attr","size","title"]),u=a||t.size||"1em",i;return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),g("svg",{...l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,h,{className:i,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&c("title",{children:s}),e.children]})};return f!==void 0?c(f.Consumer,{children:function(t){return r(t)}}):r(m)}export{O as G};
