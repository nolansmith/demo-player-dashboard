(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(t,e,o){"use strict";o.r(e),function(t){var o="undefined"!=typeof window&&"undefined"!=typeof document;const n=["Edge","Trident","Firefox"];let i=0;for(let t=0;t<n.length;t+=1)if(o&&0<=navigator.userAgent.indexOf(n[t])){i=1;break}var r=o&&window.Promise?function(t){let e=!1;return()=>{e||(e=!0,window.Promise.resolve().then(()=>{e=!1,t()}))}}:function(t){let e=!1;return()=>{e||(e=!0,setTimeout(()=>{e=!1,t()},i))}};function s(t){return t&&"[object Function]"==={}.toString.call(t)}function f(t,e){if(1!==t.nodeType)return[];const o=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?o[e]:o}function p(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function a(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}const{overflow:e,overflowX:o,overflowY:n}=f(t);return/(auto|scroll|overlay)/.test(e+n+o)?t:a(p(t))}const l=o&&!(!window.MSInputMethodContext||!document.documentMode),c=o&&/MSIE 10/.test(navigator.userAgent);function d(t){return 11===t?l:10===t?c:l||c}function h(t){if(!t)return document.documentElement;const e=d(10)?document.body:null;let o=t.offsetParent||null;for(;o===e&&t.nextElementSibling;)o=(t=t.nextElementSibling).offsetParent;const n=o&&o.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===f(o,"position")?h(o):o:t?t.ownerDocument.documentElement:document.documentElement}function u(t){return null===t.parentNode?t:u(t.parentNode)}function m(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;const o=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?t:e,i=o?e:t,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);const{commonAncestorContainer:s}=r;if(t!==s&&e!==s||n.contains(i))return function(t){const{nodeName:e}=t;return"BODY"!==e&&("HTML"===e||h(t.firstElementChild)===t)}(s)?s:h(s);const f=u(t);return f.host?m(f.host,e):m(t,u(e).host)}function g(t,e="top"){const o="top"===e?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){const e=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||e)[o]}return t[o]}function b(t,e){const o="x"===e?"Left":"Top",n="Left"==o?"Right":"Bottom";return parseFloat(t[`border${o}Width`],10)+parseFloat(t[`border${n}Width`],10)}function w(t,e,o,n){return Math.max(e[`offset${t}`],e[`scroll${t}`],o[`client${t}`],o[`offset${t}`],o[`scroll${t}`],d(10)?parseInt(o[`offset${t}`])+parseInt(n[`margin${"Height"===t?"Top":"Left"}`])+parseInt(n[`margin${"Height"===t?"Bottom":"Right"}`]):0)}function y(t){const e=t.body,o=t.documentElement,n=d(10)&&getComputedStyle(o);return{height:w("Height",e,o,n),width:w("Width",e,o,n)}}var E=Object.assign||function(t){for(var e,o=1;o<arguments.length;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t};function v(t){return E({},t,{right:t.left+t.width,bottom:t.top+t.height})}function x(t){let e={};try{if(d(10)){e=t.getBoundingClientRect();const o=g(t,"top"),n=g(t,"left");e.top+=o,e.left+=n,e.bottom+=o,e.right+=n}else e=t.getBoundingClientRect()}catch(e){}const o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},n="HTML"===t.nodeName?y(t.ownerDocument):{},i=n.width||t.clientWidth||o.right-o.left,r=n.height||t.clientHeight||o.bottom-o.top;let s=t.offsetWidth-i,p=t.offsetHeight-r;if(s||p){const e=f(t);s-=b(e,"x"),p-=b(e,"y"),o.width-=s,o.height-=p}return v(o)}function O(t,e,o=!1){var n=Math.max;const i=d(10),r="HTML"===e.nodeName,s=x(t),p=x(e),l=a(t),c=f(e),h=parseFloat(c.borderTopWidth,10),u=parseFloat(c.borderLeftWidth,10);o&&r&&(p.top=n(p.top,0),p.left=n(p.left,0));let m=v({top:s.top-p.top-h,left:s.left-p.left-u,width:s.width,height:s.height});if(m.marginTop=0,m.marginLeft=0,!i&&r){const t=parseFloat(c.marginTop,10),e=parseFloat(c.marginLeft,10);m.top-=h-t,m.bottom-=h-t,m.left-=u-e,m.right-=u-e,m.marginTop=t,m.marginLeft=e}return(i&&!o?e.contains(l):e===l&&"BODY"!==l.nodeName)&&(m=function(t,e,o=!1){const n=g(e,"top"),i=g(e,"left"),r=o?-1:1;return t.top+=n*r,t.bottom+=n*r,t.left+=i*r,t.right+=i*r,t}(m,e)),m}function L(t){if(!t||!t.parentElement||d())return document.documentElement;let e=t.parentElement;for(;e&&"none"===f(e,"transform");)e=e.parentElement;return e||document.documentElement}function T(t,e,o,n,i=!1){let r={top:0,left:0};const s=i?L(t):m(t,e);if("viewport"===n)r=function(t,e=!1){var o=Math.max;const n=t.ownerDocument.documentElement,i=O(t,n),r=o(n.clientWidth,window.innerWidth||0),s=o(n.clientHeight,window.innerHeight||0),f=e?0:g(n),p=e?0:g(n,"left");return v({top:f-i.top+i.marginTop,left:p-i.left+i.marginLeft,width:r,height:s})}(s,i);else{let o;"scrollParent"===n?"BODY"===(o=a(p(e))).nodeName&&(o=t.ownerDocument.documentElement):o="window"===n?t.ownerDocument.documentElement:n;const l=O(o,s,i);if("HTML"!==o.nodeName||function t(e){const o=e.nodeName;if("BODY"===o||"HTML"===o)return!1;if("fixed"===f(e,"position"))return!0;const n=p(e);return!!n&&t(n)}(s))r=l;else{const{height:e,width:o}=y(t.ownerDocument);r.top+=l.top-l.marginTop,r.bottom=e+l.top,r.left+=l.left-l.marginLeft,r.right=o+l.left}}const l="number"==typeof(o=o||0);return r.left+=l?o:o.left||0,r.top+=l?o:o.top||0,r.right-=l?o:o.right||0,r.bottom-=l?o:o.bottom||0,r}function D({width:t,height:e}){return t*e}function C(t,e,o,n,i,r=0){if(-1===t.indexOf("auto"))return t;const s=T(o,n,r,i),f={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},p=Object.keys(f).map(t=>E({key:t},f[t],{area:D(f[t])})).sort((t,e)=>e.area-t.area),a=p.filter(({width:t,height:e})=>t>=o.clientWidth&&e>=o.clientHeight),l=0<a.length?a[0].key:p[0].key,c=t.split("-")[1];return l+(c?`-${c}`:"")}function N(t,e,o,n=null){return O(o,n?L(e):m(e,o),n)}function F(t){const e=t.ownerDocument.defaultView.getComputedStyle(t),o=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),n=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+n,height:t.offsetHeight+o}}function M(t){const e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,t=>e[t])}function S(t,e,o){o=o.split("-")[0];const n=F(t),i={width:n.width,height:n.height},r=-1!==["right","left"].indexOf(o),s=r?"top":"left",f=r?"left":"top",p=r?"height":"width",a=r?"width":"height";return i[s]=e[s]+e[p]/2-n[p]/2,i[f]=o===f?e[f]-n[a]:e[M(f)],i}function W(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function H(t,e,o){return(void 0===o?t:t.slice(0,function(t,e,o){if(Array.prototype.findIndex)return t.findIndex(t=>t[e]===o);const n=W(t,t=>t[e]===o);return t.indexOf(n)}(t,"name",o))).forEach(t=>{t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");const o=t.function||t.fn;t.enabled&&s(o)&&(e.offsets.popper=v(e.offsets.popper),e.offsets.reference=v(e.offsets.reference),e=o(e,t))}),e}function $(t,e){return t.some(({name:t,enabled:o})=>o&&t===e)}function k(t){const e=[!1,"ms","Webkit","Moz","O"],o=t.charAt(0).toUpperCase()+t.slice(1);for(let n=0;n<e.length;n++){const i=e[n],r=i?`${i}${o}`:t;if(void 0!==document.body.style[r])return r}return null}function B(t){const e=t.ownerDocument;return e?e.defaultView:window}function A(t,e,o,n){o.updateBound=n,B(t).addEventListener("resize",o.updateBound,{passive:!0});const i=a(t);return function t(e,o,n,i){const r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(o,n,{passive:!0}),r||t(a(s.parentNode),o,n,i),i.push(s)}(i,"scroll",o.updateBound,o.scrollParents),o.scrollElement=i,o.eventsEnabled=!0,o}function P(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,B(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(t=>{t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function I(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function R(t,e){Object.keys(e).forEach(o=>{let n="";-1!==["width","height","top","right","bottom","left"].indexOf(o)&&I(e[o])&&(n="px"),t.style[o]=e[o]+n})}const j=o&&/Firefox/i.test(navigator.userAgent);function U(t,e,o){const n=W(t,({name:t})=>t===e),i=!!n&&t.some(t=>t.name===o&&t.enabled&&t.order<n.order);if(!i){const t=`\`${e}\``,n=`\`${o}\``;console.warn(`${n} modifier is required by ${t} modifier in order to work, be sure to include it before ${t}!`)}return i}var Y=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];const V=Y.slice(3);function q(t,e=!1){const o=V.indexOf(t),n=V.slice(o+1).concat(V.slice(0,o));return e?n.reverse():n}const K={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function z(t,e,o,n){const i=[0,0],r=-1!==["right","left"].indexOf(n),s=t.split(/(\+|\-)/).map(t=>t.trim()),f=s.indexOf(W(s,t=>-1!==t.search(/,|\s/)));s[f]&&-1===s[f].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");const p=/\s*,\s*|\s+/;let a=-1===f?[s]:[s.slice(0,f).concat([s[f].split(p)[0]]),[s[f].split(p)[1]].concat(s.slice(f+1))];return(a=a.map((t,n)=>{const i=(1===n?!r:r)?"height":"width";let s=!1;return t.reduce((t,e)=>""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e),[]).map(t=>(function(t,e,o,n){var i=Math.max;const r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+r[1],f=r[2];if(!s)return t;if(0===f.indexOf("%")){let t;switch(f){case"%p":t=o;break;case"%":case"%r":default:t=n}return v(t)[e]/100*s}if("vh"===f||"vw"===f){let t;return(t="vh"===f?i(document.documentElement.clientHeight,window.innerHeight||0):i(document.documentElement.clientWidth,window.innerWidth||0))/100*s}return s})(t,i,e,o))})).forEach((t,e)=>{t.forEach((o,n)=>{I(o)&&(i[e]+=o*("-"===t[n-1]?-1:1))})}),i}var G={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:()=>{},onUpdate:()=>{},modifiers:{shift:{order:100,enabled:!0,fn:function(t){const e=t.placement,o=e.split("-")[0],n=e.split("-")[1];if(n){const{reference:e,popper:i}=t.offsets,r=-1!==["bottom","top"].indexOf(o),s=r?"left":"top",f=r?"width":"height",p={start:{[s]:e[s]},end:{[s]:e[s]+e[f]-i[f]}};t.offsets.popper=E({},i,p[n])}return t}},offset:{order:200,enabled:!0,fn:function(t,{offset:e}){const{placement:o,offsets:{popper:n,reference:i}}=t,r=o.split("-")[0];let s;return s=I(+e)?[+e,0]:z(e,n,i,r),"left"===r?(n.top+=s[0],n.left-=s[1]):"right"===r?(n.top+=s[0],n.left+=s[1]):"top"===r?(n.left+=s[0],n.top-=s[1]):"bottom"===r&&(n.left+=s[0],n.top+=s[1]),t.popper=n,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){let o=e.boundariesElement||h(t.instance.popper);t.instance.reference===o&&(o=h(o));const n=k("transform"),i=t.instance.popper.style,{top:r,left:s,[n]:f}=i;i.top="",i.left="",i[n]="";const p=T(t.instance.popper,t.instance.reference,e.padding,o,t.positionFixed);i.top=r,i.left=s,i[n]=f,e.boundaries=p;const a=e.priority;let l=t.offsets.popper;const c={primary(t){let o=l[t];return l[t]<p[t]&&!e.escapeWithReference&&(o=Math.max(l[t],p[t])),{[t]:o}},secondary(t){const o="right"===t?"left":"top";let n=l[o];return l[t]>p[t]&&!e.escapeWithReference&&(n=Math.min(l[o],p[t]-("right"===t?l.width:l.height))),{[o]:n}}};return a.forEach(t=>{const e=-1===["left","top"].indexOf(t)?"secondary":"primary";l=E({},l,c[e](t))}),t.offsets.popper=l,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){const{popper:e,reference:o}=t.offsets,n=t.placement.split("-")[0],i=Math.floor,r=-1!==["top","bottom"].indexOf(n),s=r?"right":"bottom",f=r?"left":"top",p=r?"width":"height";return e[s]<i(o[f])&&(t.offsets.popper[f]=i(o[f])-e[p]),e[f]>i(o[s])&&(t.offsets.popper[f]=i(o[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){if(!U(t.instance.modifiers,"arrow","keepTogether"))return t;let o=e.element;if("string"==typeof o){if(!(o=t.instance.popper.querySelector(o)))return t}else if(!t.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;const n=t.placement.split("-")[0],{popper:i,reference:r}=t.offsets,s=-1!==["left","right"].indexOf(n),p=s?"height":"width",a=s?"Top":"Left",l=a.toLowerCase(),c=s?"left":"top",d=s?"bottom":"right",h=F(o)[p];r[d]-h<i[l]&&(t.offsets.popper[l]-=i[l]-(r[d]-h)),r[l]+h>i[d]&&(t.offsets.popper[l]+=r[l]+h-i[d]),t.offsets.popper=v(t.offsets.popper);const u=r[l]+r[p]/2-h/2,m=f(t.instance.popper),g=parseFloat(m[`margin${a}`],10),b=parseFloat(m[`border${a}Width`],10);let w=u-t.offsets.popper[l]-g-b;return w=Math.max(Math.min(i[p]-h,w),0),t.arrowElement=o,t.offsets.arrow={[l]:Math.round(w),[c]:""},t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if($(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;const o=T(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed);let n=t.placement.split("-")[0],i=M(n),r=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case K.FLIP:s=[n,i];break;case K.CLOCKWISE:s=q(n);break;case K.COUNTERCLOCKWISE:s=q(n,!0);break;default:s=e.behavior}return s.forEach((f,p)=>{if(n!==f||s.length===p+1)return t;n=t.placement.split("-")[0],i=M(n);const a=t.offsets.popper,l=t.offsets.reference,c=Math.floor,d="left"===n&&c(a.right)>c(l.left)||"right"===n&&c(a.left)<c(l.right)||"top"===n&&c(a.bottom)>c(l.top)||"bottom"===n&&c(a.top)<c(l.bottom),h=c(a.left)<c(o.left),u=c(a.right)>c(o.right),m=c(a.top)<c(o.top),g=c(a.bottom)>c(o.bottom),b="left"===n&&h||"right"===n&&u||"top"===n&&m||"bottom"===n&&g,w=-1!==["top","bottom"].indexOf(n),y=!!e.flipVariations&&(w&&"start"===r&&h||w&&"end"===r&&u||!w&&"start"===r&&m||!w&&"end"===r&&g),v=!!e.flipVariationsByContent&&(w&&"start"===r&&u||w&&"end"===r&&h||!w&&"start"===r&&g||!w&&"end"===r&&m),x=y||v;(d||b||x)&&(t.flipped=!0,(d||b)&&(n=s[p+1]),x&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=n+(r?"-"+r:""),t.offsets.popper=E({},t.offsets.popper,S(t.instance.popper,t.offsets.reference,t.placement)),t=H(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){const e=t.placement,o=e.split("-")[0],{popper:n,reference:i}=t.offsets,r=-1!==["left","right"].indexOf(o),s=-1===["top","left"].indexOf(o);return n[r?"left":"top"]=i[o]-(s?n[r?"width":"height"]:0),t.placement=M(e),t.offsets.popper=v(n),t}},hide:{order:800,enabled:!0,fn:function(t){if(!U(t.instance.modifiers,"hide","preventOverflow"))return t;const e=t.offsets.reference,o=W(t.instance.modifiers,t=>"preventOverflow"===t.name).boundaries;if(e.bottom<o.top||e.left>o.right||e.top>o.bottom||e.right<o.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){const{x:o,y:n}=e,{popper:i}=t.offsets,r=W(t.instance.modifiers,t=>"applyStyle"===t.name).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");const s=void 0===r?e.gpuAcceleration:r,f=h(t.instance.popper),p=x(f),a={position:i.position},l=function(t,e){const{popper:o,reference:n}=t.offsets,{round:i,floor:r}=Math,s=t=>t,f=i(n.width),p=i(o.width),a=-1!==["left","right"].indexOf(t.placement),l=-1!==t.placement.indexOf("-"),c=e?a||l||f%2==p%2?i:r:s,d=e?i:s;return{left:c(1==f%2&&1==p%2&&!l&&e?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:c(o.right)}}(t,2>window.devicePixelRatio||!j),c="bottom"===o?"top":"bottom",d="right"===n?"left":"right",u=k("transform");let m,g;if(g="bottom"==c?"HTML"===f.nodeName?-f.clientHeight+l.bottom:-p.height+l.bottom:l.top,m="right"==d?"HTML"===f.nodeName?-f.clientWidth+l.right:-p.width+l.right:l.left,s&&u)a[u]=`translate3d(${m}px, ${g}px, 0)`,a[c]=0,a[d]=0,a.willChange="transform";else{const t="bottom"==c?-1:1,e="right"==d?-1:1;a[c]=g*t,a[d]=m*e,a.willChange=`${c}, ${d}`}const b={"x-placement":t.placement};return t.attributes=E({},b,t.attributes),t.styles=E({},a,t.styles),t.arrowStyles=E({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){return R(t.instance.popper,t.styles),function(t,e){Object.keys(e).forEach(function(o){!1===e[o]?t.removeAttribute(o):t.setAttribute(o,e[o])})}(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&R(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,o,n,i){const r=N(0,e,t,o.positionFixed),s=C(o.placement,r,e,t,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return e.setAttribute("x-placement",s),R(e,{position:o.positionFixed?"fixed":"absolute"}),o},gpuAcceleration:void 0}}};class J{constructor(t,e,o={}){this.scheduleUpdate=(()=>requestAnimationFrame(this.update)),this.update=r(this.update.bind(this)),this.options=E({},J.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(E({},J.Defaults.modifiers,o.modifiers)).forEach(t=>{this.options.modifiers[t]=E({},J.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(t=>E({name:t},this.options.modifiers[t])).sort((t,e)=>t.order-e.order),this.modifiers.forEach(t=>{t.enabled&&s(t.onLoad)&&t.onLoad(this.reference,this.popper,this.options,t,this.state)}),this.update();const n=this.options.eventsEnabled;n&&this.enableEventListeners(),this.state.eventsEnabled=n}update(){return function(){if(this.state.isDestroyed)return;let t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=C(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=S(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=H(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}.call(this)}destroy(){return function(){return this.state.isDestroyed=!0,$(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[k("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}enableEventListeners(){return function(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}disableEventListeners(){return P.call(this)}}J.Utils=("undefined"==typeof window?t:window).PopperUtils,J.placements=Y,J.Defaults=G,e.default=J}.call(this,o(27))}}]);