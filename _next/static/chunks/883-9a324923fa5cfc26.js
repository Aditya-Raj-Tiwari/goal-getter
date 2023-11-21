"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{8883:function(e,n,t){t.d(n,{oC:function(){return nt},VY:function(){return e6},$F:function(){return eH},ZA:function(){return e4},ck:function(){return nn},wU:function(){return na},__:function(){return ne},Uv:function(){return e8},Ee:function(){return nr},Rk:function(){return no},fC:function(){return e5},Z0:function(){return nu},Tr:function(){return nl},tu:function(){return ni},fF:function(){return nc},xz:function(){return e7}});var r=t(3428),o=t(2265),a=t(5744),u=t(2210),l=t(6989),c=t(3763),i=t(9381),d=t(7733),s=t(5400),f=t(9249),p=t(1244),m=t(2799),v=t(966),g=t(2300),w=t(2730),h=t(5606),E=t(6459);let M="rovingFocusGroup.onEntryFocus",_={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[C,R,D]=(0,d.B)(b),[y,k]=(0,l.b)(b,[D]),[I,x]=y(b),F=(0,o.forwardRef)((e,n)=>(0,o.createElement)(C.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(C.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(P,(0,r.Z)({},e,{ref:n}))))),P=(0,o.forwardRef)((e,n)=>{let{__scopeRovingFocusGroup:t,orientation:l,loop:d=!1,dir:f,currentTabStopId:p,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:v,onEntryFocus:g,...w}=e,h=(0,o.useRef)(null),b=(0,u.e)(n,h),C=(0,s.gm)(f),[D=null,y]=(0,c.T)({prop:p,defaultProp:m,onChange:v}),[k,x]=(0,o.useState)(!1),F=(0,E.W)(g),P=R(t),T=(0,o.useRef)(!1),[O,S]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=h.current;if(e)return e.addEventListener(M,F),()=>e.removeEventListener(M,F)},[F]),(0,o.createElement)(I,{scope:t,orientation:l,dir:C,loop:d,currentTabStopId:D,onItemFocus:(0,o.useCallback)(e=>y(e),[y]),onItemShiftTab:(0,o.useCallback)(()=>x(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>S(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>S(e=>e-1),[])},(0,o.createElement)(i.WV.div,(0,r.Z)({tabIndex:k||0===O?-1:0,"data-orientation":l},w,{ref:b,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{T.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let n=!T.current;if(e.target===e.currentTarget&&n&&!k){let n=new CustomEvent(M,_);if(e.currentTarget.dispatchEvent(n),!n.defaultPrevented){let e=P().filter(e=>e.focusable),n=e.find(e=>e.active),t=e.find(e=>e.id===D),r=[n,t,...e].filter(Boolean),o=r.map(e=>e.ref.current);Z(o)}}T.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>x(!1))})))}),T=(0,o.forwardRef)((e,n)=>{let{__scopeRovingFocusGroup:t,focusable:u=!0,active:l=!1,tabStopId:c,...d}=e,s=(0,v.M)(),f=c||s,p=x("RovingFocusGroupItem",t),m=p.currentTabStopId===f,g=R(t),{onFocusableItemAdd:w,onFocusableItemRemove:h}=p;return(0,o.useEffect)(()=>{if(u)return w(),()=>h()},[u,w,h]),(0,o.createElement)(C.ItemSlot,{scope:t,id:f,focusable:u,active:l},(0,o.createElement)(i.WV.span,(0,r.Z)({tabIndex:m?0:-1,"data-orientation":p.orientation},d,{ref:n,onMouseDown:(0,a.M)(e.onMouseDown,e=>{u?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let n=function(e,n,t){var r;let o=(r=e.key,"rtl"!==t?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===n&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===n&&["ArrowUp","ArrowDown"].includes(o)))return O[o]}(e,p.orientation,p.dir);if(void 0!==n){e.preventDefault();let o=g().filter(e=>e.focusable),a=o.map(e=>e.ref.current);if("last"===n)a.reverse();else if("prev"===n||"next"===n){var t,r;"prev"===n&&a.reverse();let o=a.indexOf(e.currentTarget);a=p.loop?(t=a,r=o+1,t.map((e,n)=>t[(r+n)%t.length])):a.slice(o+1)}setTimeout(()=>Z(a))}})})))}),O={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Z(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}var S=t(7256),A=t(5859),L=t(2098);let K=["Enter"," "],V=["ArrowUp","PageDown","End"],G=["ArrowDown","PageUp","Home",...V],W={ltr:[...K,"ArrowRight"],rtl:[...K,"ArrowLeft"]},U={ltr:["ArrowLeft"],rtl:["ArrowRight"]},B="Menu",[z,X,Y]=(0,d.B)(B),[H,N]=(0,l.b)(B,[Y,g.D7,k]),j=(0,g.D7)(),$=k(),[q,J]=H(B),[Q,ee]=H(B),en=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e,u=j(t);return(0,o.createElement)(g.ee,(0,r.Z)({},u,a,{ref:n}))}),et="MenuPortal",[er,eo]=H(et,{forceMount:void 0}),ea="MenuContent",[eu,el]=H(ea),ec=(0,o.forwardRef)((e,n)=>{let t=eo(ea,e.__scopeMenu),{forceMount:a=t.forceMount,...u}=e,l=J(ea,e.__scopeMenu),c=ee(ea,e.__scopeMenu);return(0,o.createElement)(z.Provider,{scope:e.__scopeMenu},(0,o.createElement)(h.z,{present:a||l.open},(0,o.createElement)(z.Slot,{scope:e.__scopeMenu},c.modal?(0,o.createElement)(ei,(0,r.Z)({},u,{ref:n})):(0,o.createElement)(ed,(0,r.Z)({},u,{ref:n})))))}),ei=(0,o.forwardRef)((e,n)=>{let t=J(ea,e.__scopeMenu),l=(0,o.useRef)(null),c=(0,u.e)(n,l);return(0,o.useEffect)(()=>{let e=l.current;if(e)return(0,A.Ry)(e)},[]),(0,o.createElement)(es,(0,r.Z)({},e,{ref:c,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),ed=(0,o.forwardRef)((e,n)=>{let t=J(ea,e.__scopeMenu);return(0,o.createElement)(es,(0,r.Z)({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),es=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,loop:l=!1,trapFocus:c,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:w,onPointerDownOutside:h,onFocusOutside:E,onInteractOutside:M,onDismiss:_,disableOutsideScroll:b,...C}=e,R=J(ea,t),D=ee(ea,t),y=j(t),k=$(t),I=X(t),[x,P]=(0,o.useState)(null),T=(0,o.useRef)(null),O=(0,u.e)(n,T,R.onContentChange),Z=(0,o.useRef)(0),A=(0,o.useRef)(""),K=(0,o.useRef)(0),W=(0,o.useRef)(null),U=(0,o.useRef)("right"),B=(0,o.useRef)(0),z=b?L.Z:o.Fragment,Y=b?{as:S.g7,allowPinchZoom:!0}:void 0,H=e=>{var n,t;let r=A.current+e,o=I().filter(e=>!e.disabled),a=document.activeElement,u=null===(n=o.find(e=>e.ref.current===a))||void 0===n?void 0:n.textValue,l=o.map(e=>e.textValue),c=function(e,n,t){var r;let o=n.length>1&&Array.from(n).every(e=>e===n[0]),a=o?n[0]:n,u=t?e.indexOf(t):-1,l=(r=Math.max(u,0),e.map((n,t)=>e[(r+t)%e.length])),c=1===a.length;c&&(l=l.filter(e=>e!==t));let i=l.find(e=>e.toLowerCase().startsWith(a.toLowerCase()));return i!==t?i:void 0}(l,r,u),i=null===(t=o.find(e=>e.textValue===c))||void 0===t?void 0:t.ref.current;!function e(n){A.current=n,window.clearTimeout(Z.current),""!==n&&(Z.current=window.setTimeout(()=>e(""),1e3))}(r),i&&setTimeout(()=>i.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(Z.current),[]),(0,p.EW)();let N=(0,o.useCallback)(e=>{var n,t;let r=U.current===(null===(n=W.current)||void 0===n?void 0:n.side);return r&&function(e,n){if(!n)return!1;let t={x:e.clientX,y:e.clientY};return function(e,n){let{x:t,y:r}=e,o=!1;for(let e=0,a=n.length-1;e<n.length;a=e++){let u=n[e].x,l=n[e].y,c=n[a].x,i=n[a].y,d=l>r!=i>r&&t<(c-u)*(r-l)/(i-l)+u;d&&(o=!o)}return o}(t,n)}(e,null===(t=W.current)||void 0===t?void 0:t.area)},[]);return(0,o.createElement)(eu,{scope:t,searchRef:A,onItemEnter:(0,o.useCallback)(e=>{N(e)&&e.preventDefault()},[N]),onItemLeave:(0,o.useCallback)(e=>{var n;N(e)||(null===(n=T.current)||void 0===n||n.focus(),P(null))},[N]),onTriggerLeave:(0,o.useCallback)(e=>{N(e)&&e.preventDefault()},[N]),pointerGraceTimerRef:K,onPointerGraceIntentChange:(0,o.useCallback)(e=>{W.current=e},[])},(0,o.createElement)(z,Y,(0,o.createElement)(m.M,{asChild:!0,trapped:c,onMountAutoFocus:(0,a.M)(i,e=>{var n;e.preventDefault(),null===(n=T.current)||void 0===n||n.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:w,onPointerDownOutside:h,onFocusOutside:E,onInteractOutside:M,onDismiss:_},(0,o.createElement)(F,(0,r.Z)({asChild:!0},k,{dir:D.dir,orientation:"vertical",loop:l,currentTabStopId:x,onCurrentTabStopIdChange:P,onEntryFocus:(0,a.M)(v,e=>{D.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(g.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":eZ(R.open),"data-radix-menu-content":"",dir:D.dir},y,C,{ref:O,style:{outline:"none",...C.style},onKeyDown:(0,a.M)(C.onKeyDown,e=>{let n=e.target,t=n.closest("[data-radix-menu-content]")===e.currentTarget,r=e.ctrlKey||e.altKey||e.metaKey,o=1===e.key.length;t&&("Tab"===e.key&&e.preventDefault(),!r&&o&&H(e.key));let a=T.current;if(e.target!==a||!G.includes(e.key))return;e.preventDefault();let u=I().filter(e=>!e.disabled),l=u.map(e=>e.ref.current);V.includes(e.key)&&l.reverse(),function(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}(l)}),onBlur:(0,a.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(Z.current),A.current="")}),onPointerMove:(0,a.M)(e.onPointerMove,eL(e=>{let n=e.target,t=B.current!==e.clientX;if(e.currentTarget.contains(n)&&t){let n=e.clientX>B.current?"right":"left";U.current=n,B.current=e.clientX}}))})))))))}),ef=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"group"},a,{ref:n}))}),ep=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({},a,{ref:n}))}),em="MenuItem",ev="menu.itemSelect",eg=(0,o.forwardRef)((e,n)=>{let{disabled:t=!1,onSelect:l,...c}=e,d=(0,o.useRef)(null),s=ee(em,e.__scopeMenu),f=el(em,e.__scopeMenu),p=(0,u.e)(n,d),m=(0,o.useRef)(!1);return(0,o.createElement)(ew,(0,r.Z)({},c,{ref:p,disabled:t,onClick:(0,a.M)(e.onClick,()=>{let e=d.current;if(!t&&e){let n=new CustomEvent(ev,{bubbles:!0,cancelable:!0});e.addEventListener(ev,e=>null==l?void 0:l(e),{once:!0}),(0,i.jH)(e,n),n.defaultPrevented?m.current=!1:s.onClose()}}),onPointerDown:n=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,n),m.current=!0},onPointerUp:(0,a.M)(e.onPointerUp,e=>{var n;m.current||null===(n=e.currentTarget)||void 0===n||n.click()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let n=""!==f.searchRef.current;!t&&(!n||" "!==e.key)&&K.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),ew=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,disabled:l=!1,textValue:c,...d}=e,s=el(em,t),f=$(t),p=(0,o.useRef)(null),m=(0,u.e)(n,p),[v,g]=(0,o.useState)(!1),[w,h]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=p.current;if(e){var n;h((null!==(n=e.textContent)&&void 0!==n?n:"").trim())}},[d.children]),(0,o.createElement)(z.ItemSlot,{scope:t,disabled:l,textValue:null!=c?c:w},(0,o.createElement)(T,(0,r.Z)({asChild:!0},f,{focusable:!l}),(0,o.createElement)(i.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0},d,{ref:m,onPointerMove:(0,a.M)(e.onPointerMove,eL(e=>{if(l)s.onItemLeave(e);else if(s.onItemEnter(e),!e.defaultPrevented){let n=e.currentTarget;n.focus()}})),onPointerLeave:(0,a.M)(e.onPointerLeave,eL(e=>s.onItemLeave(e))),onFocus:(0,a.M)(e.onFocus,()=>g(!0)),onBlur:(0,a.M)(e.onBlur,()=>g(!1))}))))}),eh=(0,o.forwardRef)((e,n)=>{let{checked:t=!1,onCheckedChange:u,...l}=e;return(0,o.createElement)(eR,{scope:e.__scopeMenu,checked:t},(0,o.createElement)(eg,(0,r.Z)({role:"menuitemcheckbox","aria-checked":eS(t)?"mixed":t},l,{ref:n,"data-state":eA(t),onSelect:(0,a.M)(l.onSelect,()=>null==u?void 0:u(!!eS(t)||!t),{checkForDefaultPrevented:!1})})))}),[eE,eM]=H("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),e_=(0,o.forwardRef)((e,n)=>{let{value:t,onValueChange:a,...u}=e,l=(0,E.W)(a);return(0,o.createElement)(eE,{scope:e.__scopeMenu,value:t,onValueChange:l},(0,o.createElement)(ef,(0,r.Z)({},u,{ref:n})))}),eb=(0,o.forwardRef)((e,n)=>{let{value:t,...u}=e,l=eM("MenuRadioItem",e.__scopeMenu),c=t===l.value;return(0,o.createElement)(eR,{scope:e.__scopeMenu,checked:c},(0,o.createElement)(eg,(0,r.Z)({role:"menuitemradio","aria-checked":c},u,{ref:n,"data-state":eA(c),onSelect:(0,a.M)(u.onSelect,()=>{var e;return null===(e=l.onValueChange)||void 0===e?void 0:e.call(l,t)},{checkForDefaultPrevented:!1})})))}),eC="MenuItemIndicator",[eR,eD]=H(eC,{checked:!1}),ey=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,forceMount:a,...u}=e,l=eD(eC,t);return(0,o.createElement)(h.z,{present:a||eS(l.checked)||!0===l.checked},(0,o.createElement)(i.WV.span,(0,r.Z)({},u,{ref:n,"data-state":eA(l.checked)})))}),ek=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},a,{ref:n}))}),eI=((e,n)=>{let{__scopeMenu:t,...a}=e,u=j(t);return(0,o.createElement)(g.Eh,(0,r.Z)({},u,a,{ref:n}))},"MenuSub"),[ex,eF]=H(eI),eP="MenuSubTrigger",eT=(0,o.forwardRef)((e,n)=>{let t=J(eP,e.__scopeMenu),l=ee(eP,e.__scopeMenu),c=eF(eP,e.__scopeMenu),i=el(eP,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(en,(0,r.Z)({asChild:!0},p),(0,o.createElement)(ew,(0,r.Z)({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":c.contentId,"data-state":eZ(t.open)},e,{ref:(0,u.F)(n,c.onTriggerChange),onClick:n=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,n),e.disabled||n.defaultPrevented||(n.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,a.M)(e.onPointerMove,eL(n=>{i.onItemEnter(n),n.defaultPrevented||e.disabled||t.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),m()},100))})),onPointerLeave:(0,a.M)(e.onPointerLeave,eL(e=>{var n,r;m();let o=null===(n=t.content)||void 0===n?void 0:n.getBoundingClientRect();if(o){let n=null===(r=t.content)||void 0===r?void 0:r.dataset.side,a="right"===n,u=o[a?"left":"right"],l=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:u,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:u,y:o.bottom}],side:n}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,a.M)(e.onKeyDown,n=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==n.key)&&W[l.dir].includes(n.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),n.preventDefault()}})})))}),eO=(0,o.forwardRef)((e,n)=>{let t=eo(ea,e.__scopeMenu),{forceMount:l=t.forceMount,...c}=e,i=J(ea,e.__scopeMenu),d=ee(ea,e.__scopeMenu),s=eF("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,u.e)(n,f);return(0,o.createElement)(z.Provider,{scope:e.__scopeMenu},(0,o.createElement)(h.z,{present:l||i.open},(0,o.createElement)(z.Slot,{scope:e.__scopeMenu},(0,o.createElement)(es,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},c,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var n;d.isUsingKeyboardRef.current&&(null===(n=f.current)||void 0===n||n.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,a.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let n=e.currentTarget.contains(e.target),t=U[d.dir].includes(e.key);if(n&&t){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function eZ(e){return e?"open":"closed"}function eS(e){return"indeterminate"===e}function eA(e){return eS(e)?"indeterminate":e?"checked":"unchecked"}function eL(e){return n=>"mouse"===n.pointerType?e(n):void 0}let eK=e=>{let{__scopeMenu:n,open:t=!1,children:r,dir:a,onOpenChange:u,modal:l=!0}=e,c=j(n),[i,d]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,E.W)(u),m=(0,s.gm)(a);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",n,{capture:!0,once:!0}),document.addEventListener("pointermove",n,{capture:!0,once:!0})},n=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",n,{capture:!0}),document.removeEventListener("pointermove",n,{capture:!0})}},[]),(0,o.createElement)(g.fC,c,(0,o.createElement)(q,{scope:n,open:t,onOpenChange:p,content:i,onContentChange:d},(0,o.createElement)(Q,{scope:n,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:l},r)))},eV=e=>{let{__scopeMenu:n,forceMount:t,children:r,container:a}=e,u=J(et,n);return(0,o.createElement)(er,{scope:n,forceMount:t},(0,o.createElement)(h.z,{present:t||u.open},(0,o.createElement)(w.h,{asChild:!0,container:a},r)))},eG=e=>{let{__scopeMenu:n,children:t,open:r=!1,onOpenChange:a}=e,u=J(eI,n),l=j(n),[c,i]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,E.W)(a);return(0,o.useEffect)(()=>(!1===u.open&&f(!1),()=>f(!1)),[u.open,f]),(0,o.createElement)(g.fC,l,(0,o.createElement)(q,{scope:n,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(ex,{scope:n,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:c,onTriggerChange:i},t)))},eW="DropdownMenu",[eU,eB]=(0,l.b)(eW,[N]),ez=N(),[eX,eY]=eU(eW),eH=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,disabled:l=!1,...c}=e,d=eY("DropdownMenuTrigger",t),s=ez(t);return(0,o.createElement)(en,(0,r.Z)({asChild:!0},s),(0,o.createElement)(i.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":l?"":void 0,disabled:l},c,{ref:(0,u.F)(n,d.triggerRef),onPointerDown:(0,a.M)(e.onPointerDown,e=>{l||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{!l&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),eN=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,l=eY("DropdownMenuContent",t),c=ez(t),i=(0,o.useRef)(!1);return(0,o.createElement)(ec,(0,r.Z)({id:l.contentId,"aria-labelledby":l.triggerId},c,u,{ref:n,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var n;i.current||null===(n=l.triggerRef.current)||void 0===n||n.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,a.M)(e.onInteractOutside,e=>{let n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;(!l.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),ej=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(ef,(0,r.Z)({},u,a,{ref:n}))}),e$=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(ep,(0,r.Z)({},u,a,{ref:n}))}),eq=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(eg,(0,r.Z)({},u,a,{ref:n}))}),eJ=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(eh,(0,r.Z)({},u,a,{ref:n}))}),eQ=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(e_,(0,r.Z)({},u,a,{ref:n}))}),e0=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(eb,(0,r.Z)({},u,a,{ref:n}))}),e1=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(ey,(0,r.Z)({},u,a,{ref:n}))}),e2=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(ek,(0,r.Z)({},u,a,{ref:n}))}),e3=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(eT,(0,r.Z)({},u,a,{ref:n}))}),e9=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=ez(t);return(0,o.createElement)(eO,(0,r.Z)({},u,a,{ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),e5=e=>{let{__scopeDropdownMenu:n,children:t,dir:a,open:u,defaultOpen:l,onOpenChange:i,modal:d=!0}=e,s=ez(n),f=(0,o.useRef)(null),[p=!1,m]=(0,c.T)({prop:u,defaultProp:l,onChange:i});return(0,o.createElement)(eX,{scope:n,triggerId:(0,v.M)(),triggerRef:f,contentId:(0,v.M)(),open:p,onOpenChange:m,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,o.createElement)(eK,(0,r.Z)({},s,{open:p,onOpenChange:m,dir:a,modal:d}),t))},e7=eH,e8=e=>{let{__scopeDropdownMenu:n,...t}=e,a=ez(n);return(0,o.createElement)(eV,(0,r.Z)({},a,t))},e6=eN,e4=ej,ne=e$,nn=eq,nt=eJ,nr=eQ,no=e0,na=e1,nu=e2,nl=e=>{let{__scopeDropdownMenu:n,children:t,open:a,onOpenChange:u,defaultOpen:l}=e,i=ez(n),[d=!1,s]=(0,c.T)({prop:a,defaultProp:l,onChange:u});return(0,o.createElement)(eG,(0,r.Z)({},i,{open:d,onOpenChange:s}),t)},nc=e3,ni=e9}}]);