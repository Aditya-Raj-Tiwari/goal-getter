(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{6435:function(e,t,r){"use strict";r.d(t,{F:function(){return s},f:function(){return c}});var n=r(2265);let o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,n.createContext)(void 0),u={setTheme:e=>{},themes:[]},s=()=>{var e;return null!==(e=(0,n.useContext)(i))&&void 0!==e?e:u},c=e=>(0,n.useContext)(i)?n.createElement(n.Fragment,null,e.children):n.createElement(d,e),f=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:l=!0,storageKey:u="theme",themes:s=f,defaultTheme:c=r?"system":"light",attribute:d="data-theme",value:y,children:b,nonce:v})=>{let[_,O]=(0,n.useState)(()=>m(u,c)),[w,E]=(0,n.useState)(()=>m(u)),P=y?Object.values(y):s,S=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=g());let a=y?y[n]:n,i=t?p():null,u=document.documentElement;if("class"===d?(u.classList.remove(...P),a&&u.classList.add(a)):a?u.setAttribute(d,a):u.removeAttribute(d),l){let e=o.includes(c)?c:null,t=o.includes(n)?n:e;u.style.colorScheme=t}null==i||i()},[]),R=(0,n.useCallback)(e=>{O(e);try{localStorage.setItem(u,e)}catch(e){}},[e]),j=(0,n.useCallback)(t=>{let n=g(t);E(n),"system"===_&&r&&!e&&S("system")},[_,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(j),j(e),()=>e.removeListener(j)},[j]),(0,n.useEffect)(()=>{let e=e=>{e.key===u&&R(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[R]),(0,n.useEffect)(()=>{S(null!=e?e:_)},[e,_]);let C=(0,n.useMemo)(()=>({theme:_,setTheme:R,forcedTheme:e,resolvedTheme:"system"===_?w:_,themes:r?[...s,"system"]:s,systemTheme:r?w:void 0}),[_,R,e,w,r,s]);return n.createElement(i.Provider,{value:C},n.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:l,storageKey:u,themes:s,defaultTheme:c,attribute:d,value:y,children:b,attrs:P,nonce:v}),b)},h=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:l,enableColorScheme:i,defaultTheme:u,value:s,attrs:c,nonce:f})=>{let d="system"===u,h="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,m=i?o.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,n=!0)=>{let a=s?s[e]:e,l=t?e+"|| ''":`'${a}'`,u="";return i&&n&&!t&&o.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===r?u+=t||a?`c.add(${l})`:"null":a&&(u+=`d[s](n,${l})`),u},g=e?`!function(){${h}${p(e)}}()`:l?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${d?"":"else{"+p(u,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(u,!1,!1)};}${m}}catch(t){}}();`;return n.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})},()=>!0),m=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},9524:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(3997);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4549:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(3997),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8326:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(1024),o=n._(r(2265)),a=r(9121),l=r(8664),i=r(8130),u=r(6681),s=r(9524),c=r(6304),f=r(6313),d=r(1581),h=r(4549),m=r(9872),p=r(9706),g=new Set;function y(e,t,r,n,o,a){if(!a&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+o;if(g.has(a))return;g.add(a)}let i=a?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(i).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:g,children:v,prefetch:_=null,passHref:O,replace:w,shallow:E,scroll:P,locale:S,onClick:R,onMouseEnter:j,onTouchStart:C,legacyBehavior:x=!1,...N}=e;r=v,x&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let M=o.default.useContext(c.RouterContext),k=o.default.useContext(f.AppRouterContext),I=null!=M?M:k,T=!M,L=!1!==_,A=null===_?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,{href:$,as:U}=o.default.useMemo(()=>{if(!M){let e=b(i);return{href:e,as:g?b(g):e}}let[e,t]=(0,a.resolveHref)(M,i,!0);return{href:e,as:g?(0,a.resolveHref)(M,g):t||e}},[M,i,g]),W=o.default.useRef($),z=o.default.useRef(U);x&&(n=o.default.Children.only(r));let D=x?n&&"object"==typeof n&&n.ref:t,[K,F,q]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(z.current!==U||W.current!==$)&&(q(),z.current=U,W.current=$),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[U,D,$,q,K]);o.default.useEffect(()=>{I&&F&&L&&y(I,$,U,{locale:S},{kind:A},T)},[U,$,F,S,L,null==M?void 0:M.locale,I,T,A]);let B={ref:V,onClick(e){x||"function"!=typeof R||R(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,a,i,u,s,c){let{nodeName:f}=e.currentTarget,d="A"===f.toUpperCase();if(d&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let e=null==u||u;"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:i,locale:s,scroll:e}):t[a?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(h):h()}(e,I,$,U,w,E,P,S,T)},onMouseEnter(e){x||"function"!=typeof j||j(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(L||!T)&&y(I,$,U,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:A},T)},onTouchStart(e){x||"function"!=typeof C||C(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(L||!T)&&y(I,$,U,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:A},T)}};if((0,u.isAbsoluteUrl)(U))B.href=U;else if(!x||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);B.href=t||(0,m.addBasePath)((0,s.addLocale)(U,e,null==M?void 0:M.defaultLocale))}return x?o.default.cloneElement(n,B):o.default.createElement("a",{...N,...B},r)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9121:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(5991),o=r(8130),a=r(8137),l=r(6681),i=r(3997),u=r(8664),s=r(9289),c=r(948);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),h=d.match(/^[a-zA-Z]{1,}:\/\//),m=h?d.slice(h[0].length):d,p=m.split("?",1);if((p[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,l.normalizeRepeatedSlashes)(m);d=(h?h[0]:"")+t}if(!(0,u.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,i.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:l,params:i}=(0,c.interpolateAs)(e.pathname,e.pathname,r);l&&(t=(0,o.formatWithValidation)({pathname:l,hash:e.hash,query:(0,a.omit)(r,i)}))}let l=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[l,t||l]:l}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1581:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(2265),o=r(2389),a="function"==typeof IntersectionObserver,l=new Map,i=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(a){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:o},i.push(r),l.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let m=(0,n.useCallback)(()=>{f(!1)},[]);return[h,c,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4910:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},6304:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return a}});let n=r(1024),o=n._(r(2265)),a=o.default.createContext(null)},8130:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return l},urlObjectKeys:function(){return i},formatWithValidation:function(){return u}});let n=r(8533),o=n._(r(5991)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",l=e.pathname||"",i=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(o.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==s?(s="//"+(s||""),l&&"/"!==l[0]&&(l="/"+l)):s||(s=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),""+n+s+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+i}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},9289:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(9255),o=r(5321)},948:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let n=r(1670),o=r(4586);function a(e,t,r){let a="",l=(0,o.getRouteRegex)(e),i=l.groups,u=(t!==e?(0,n.getRouteMatcher)(l)(t):"")||r;a=e;let s=Object.keys(i);return s.every(e=>{let t=u[e]||"",{repeat:r,optional:n}=i[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in u)&&(a=a.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:s,result:a}}},5321:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let n=r(4507),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},8664:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=r(6681),o=r(6746);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},8137:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},5991:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return a}})},1670:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(6681);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},l={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(l[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),l}}},4586:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return u},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});let n=r(4507),o=r(4910),a=r(9006);function l(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function i(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},i=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:u}=l(a[1]);return r[e]={pos:i++,repeat:u,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=l(a[1]);return r[e]={pos:i++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function u(e){let{parameterizedRoute:t,groups:r}=i(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function s(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:a,optional:i,repeat:u}=l(r),s=a.replace(/\W/g,"");o&&(s=""+o+s);let c=!1;return(0===s.length||s.length>30)&&(c=!0),isNaN(parseInt(s.slice(0,1)))||(c=!0),c&&(s=t()),o?n[s]=""+o+a:n[s]=""+a,u?i?"(?:/(?<"+s+">.+?))?":"/(?<"+s+">.+?)":"/(?<"+s+">[^/]+?)"}function c(e,t){let r;let l=(0,a.removeTrailingSlash)(e).slice(1).split("/"),i=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:l.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);return r&&a?s({getSafeRouteKey:i,segment:a[1],routeKeys:u,keyPrefix:t?"nxtI":void 0}):a?s({getSafeRouteKey:i,segment:a[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function f(e,t){let r=c(e,t);return{...u(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=i(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},9255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let r=o.slice(1,-1),l=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),l=!0),r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function a(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(l){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,r),this.optionalRestSlugName=r,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,r),this.restSlugName=r,o="[...]"}}else{if(l)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,r),this.slugName=r,o="[]"}}this.children.has(o)||this.children.set(o,new r),this.children.get(o)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},6681:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return a},getLocationOrigin:function(){return l},getURL:function(){return i},getDisplayName:function(){return u},isResSent:function(){return s},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return h},DecodeError:function(){return m},NormalizeError:function(){return p},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=l();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n){let t='"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,h=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class p extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},1654:function(e){e.exports={style:{fontFamily:"'__Inter_7f02d0', '__Inter_Fallback_7f02d0'",fontStyle:"normal"},className:"__className_7f02d0"}},1396:function(e,t,r){e.exports=r(8326)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function u(e){return function(t){return n.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,s=i(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,function(e){return t(e)}):t(o)}},6694:function(e,t,r){"use strict";r.d(t,{Ee:function(){return b},NY:function(){return v},fC:function(){return y}});var n=r(3428),o=r(2265),a=r(6989),l=r(6459),i=r(1030),u=r(9381);let s="Avatar",[c,f]=(0,a.b)(s),[d,h]=c(s),m=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,...a}=e,[l,i]=(0,o.useState)("idle");return(0,o.createElement)(d,{scope:r,imageLoadingStatus:l,onImageLoadingStatusChange:i},(0,o.createElement)(u.WV.span,(0,n.Z)({},a,{ref:t})))}),p=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:s=()=>{},...c}=e,f=h("AvatarImage",r),d=function(e){let[t,r]=(0,o.useState)("idle");return(0,i.b)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,o=e=>()=>{t&&r(e)};return r("loading"),n.onload=o("loaded"),n.onerror=o("error"),n.src=e,()=>{t=!1}},[e]),t}(a),m=(0,l.W)(e=>{s(e),f.onImageLoadingStatusChange(e)});return(0,i.b)(()=>{"idle"!==d&&m(d)},[d,m]),"loaded"===d?(0,o.createElement)(u.WV.img,(0,n.Z)({},c,{ref:t,src:a})):null}),g=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:a,...l}=e,i=h("AvatarFallback",r),[s,c]=(0,o.useState)(void 0===a);return(0,o.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>c(!0),a);return()=>window.clearTimeout(e)}},[a]),s&&"loaded"!==i.imageLoadingStatus?(0,o.createElement)(u.WV.span,(0,n.Z)({},l,{ref:t})):null}),y=m,b=p,v=g}}]);