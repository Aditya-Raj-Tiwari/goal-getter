(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7770:function(e,t,n){Promise.resolve().then(n.t.bind(n,2489,23)),Promise.resolve().then(n.t.bind(n,1654,23)),Promise.resolve().then(n.bind(n,3243)),Promise.resolve().then(n.bind(n,3670)),Promise.resolve().then(n.bind(n,688))},3243:function(e,t,n){"use strict";n.r(t),n.d(t,{ModeToggle:function(){return l}});var r=n(7437);n(2265);var s=n(9394),a=n(6435),o=n(3089),i=n(9346);function l(){let{setTheme:e}=(0,a.F)();return(0,r.jsx)("div",{className:"absolute right-4 top-4",children:(0,r.jsxs)(i.h_,{children:[(0,r.jsx)(i.$F,{asChild:!0,children:(0,r.jsxs)(o.z,{variant:"outline",size:"icon",children:[(0,r.jsx)(s.NWY,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,r.jsx)(s.kLh,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,r.jsxs)(i.AW,{align:"end",children:[(0,r.jsx)(i.Xi,{onClick:()=>e("light"),children:"Light"}),(0,r.jsx)(i.Xi,{onClick:()=>e("dark"),children:"Dark"}),(0,r.jsx)(i.Xi,{onClick:()=>e("system"),children:"System"})]})]})})}},3670:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(7437),s=n(8152),a=n(2265),o=n(6468),i=n(3089),l=n(3487),d=n(311),c=n(6694),u=n(345);let f=a.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(c.fC,{ref:t,className:(0,u.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...s})});f.displayName=c.fC.displayName;let m=a.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(c.Ee,{ref:t,className:(0,u.cn)("aspect-square h-full w-full",n),...s})});m.displayName=c.Ee.displayName;let h=a.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(c.NY,{ref:t,className:(0,u.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...s})});h.displayName=c.NY.displayName;var x=n(1697),p=n(2510);n(6137);var v=n(4887);let j=e=>{let{children:t,position:n}=e,r=document.createElement("div");return r.style.position="absolute",r.style.left="".concat(n.x,"px"),r.style.top="".concat(n.y,"px"),(0,a.useEffect)(()=>(document.body.appendChild(r),()=>{document.body.removeChild(r)}),[r]),v.createPortal(t,r)},b=e=>{let{text:t}=e;return(0,r.jsx)("div",{className:"bg-red-400 text-sm ml-2 mt-1 p-2 rounded-lg",children:t})};var N=n(1396),g=n.n(N),y=()=>{let[e,t]=(0,a.useState)(!1),[n,c]=(0,a.useState)({show:!1,text:"",position:{x:0,y:0}}),u=(0,a.useRef)({}),[v,N]=(0,a.useState)("");(0,a.useEffect)(()=>{N(v)},[]);let y=e=>(u.current[e]||(u.current[e]=a.createRef()),u.current[e]),w=t=>{if(e&&u.current[t].current){let e=u.current[t].current.getBoundingClientRect();c({show:!0,text:t,position:{x:e.right,y:e.top+window.scrollY}})}},k=()=>c({...n,show:!1});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"sidebar flex h-screen",children:(0,r.jsxs)(s.YE,{width:"200px",className:e?"sidebar-collapsed":"sidebar-expanded",collapsed:e,rootStyles:{[".".concat(s.YW.container)]:{backgroundColor:"transparent",padding:"70px 5px"}},children:[(0,r.jsxs)(s.v2,{menuItemStyles:{button:e=>{let{level:t,active:n,disabled:r}=e;if(0===t||1===t)return{"&:hover":{backgroundColor:"rgb(102 50 25) !important",borderRadius:"0.5rem",span:{className:"underline-animation",color:"  !important"}}}}},children:[(0,r.jsxs)(s.sN,{active:"/"===v,ref:y("Home"),onMouseEnter:()=>w("Home"),onMouseLeave:k,component:(0,r.jsx)(g(),{href:"/"}),icon:(0,r.jsx)(l.CCr,{className:"h-5 w-5 hover:bg-accent hover:text-accent-foreground"}),children:[(0,r.jsx)("span",{className:"underline-animation w-auto",children:"Home"}),n.show&&"Home"===n.text&&(0,r.jsx)(j,{position:n.position,children:(0,r.jsx)(b,{text:"Home"})})]}),(0,r.jsx)(s.sN,{active:"/today"===v,ref:y("Today"),onMouseEnter:()=>w("Today"),onMouseLeave:k,component:(0,r.jsx)(g(),{href:"/today"}),icon:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.tpH,{className:"h-5 w-5 hover:bg-accent hover:text-accent-foreground"}),(0,r.jsx)("span",{className:"ml-2 calendar absolute",children:(()=>{let e=new Date;return e.getDate()})()}),n.show&&"Today"===n.text&&(0,r.jsx)(j,{position:n.position,children:(0,r.jsx)(b,{text:"Today"})})]}),children:(0,r.jsx)("span",{className:"underline-animation w-auto",children:"Today"})}),(0,r.jsxs)(s.sN,{active:"/todo"===v,ref:y("Todo"),onMouseEnter:()=>w("Todo"),onMouseLeave:k,component:(0,r.jsx)(g(),{href:"/todo"}),icon:(0,r.jsx)(x.Bmq,{className:"h-5 w-5 hover:bg-accent hover:text-accent-foreground"}),children:[(0,r.jsx)("span",{className:"underline-animation w-auto",children:"Todo"}),n.show&&"Todo"===n.text&&(0,r.jsx)(j,{position:n.position,children:(0,r.jsx)(b,{text:"Todo"})})]}),(0,r.jsxs)(s.sN,{active:"/pillarsOfLife"===v,ref:y("Pillars of life"),onMouseEnter:()=>w("Pillars of life"),onMouseLeave:k,component:(0,r.jsx)(g(),{href:"/pillarsOfLife"}),icon:(0,r.jsx)(o.xID,{className:"h-5 w-5 hover:bg-accent hover:text-accent-foreground"}),children:[(0,r.jsx)("span",{className:"underline-animation w-auto",children:"Pillars of life"}),n.show&&"Pillars of life"===n.text&&(0,r.jsx)(j,{position:n.position,children:(0,r.jsx)(b,{text:"Pillars of life"})})]})]}),(0,r.jsxs)("div",{className:"absolute left-6 top-4 flex w-full items-center  justify-start transition-none",children:[(0,r.jsx)(i.z,{variant:"ghost",size:"icon",onClick:()=>t(!e),children:(0,r.jsx)(d.Bbf,{className:"h-5 w-5 "})}),(0,r.jsxs)(f,{className:"w-7 h-7 ml-4 mr-2 ".concat(e?"hidden":"block "),children:[(0,r.jsx)(m,{src:"https://github.com/shadcn.png"}),(0,r.jsx)(h,{children:"CN"})]}),(0,r.jsx)("span",{className:"".concat(e?"hidden":"block "),children:"@Art"})]})]})})})}},688:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return a}});var r=n(7437);n(2265);var s=n(6435);function a(e){let{children:t,...n}=e;return(0,r.jsx)(s.f,{...n,children:t})}},3089:function(e,t,n){"use strict";n.d(t,{d:function(){return l},z:function(){return d}});var r=n(7437),s=n(2265),a=n(7256),o=n(6061),i=n(345);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:n,variant:s,size:o,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,r.jsx)(u,{className:(0,i.cn)(l({variant:s,size:o,className:n})),ref:t,...c})});d.displayName="Button"},9346:function(e,t,n){"use strict";n.d(t,{$F:function(){return d},AW:function(){return h},Ju:function(){return j},KM:function(){return N},Ph:function(){return c},TG:function(){return m},VD:function(){return b},Xi:function(){return x},_x:function(){return u},bO:function(){return p},h_:function(){return l},kt:function(){return f},qB:function(){return v}});var r=n(7437),s=n(2265),a=n(8883),o=n(9394),i=n(345);let l=a.fC,d=a.xz;a.ZA,a.Uv;let c=a.Tr,u=a.Ee,f=s.forwardRef((e,t)=>{let{className:n,inset:s,children:l,...d}=e;return(0,r.jsxs)(a.fF,{ref:t,className:(0,i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",n),...d,children:[l,(0,r.jsx)(o.XCv,{className:"ml-auto h-4 w-4"})]})});f.displayName=a.fF.displayName;let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.tu,{ref:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...s})});m.displayName=a.tu.displayName;let h=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...o}=e;return(0,r.jsx)(a.Uv,{children:(0,r.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})})});h.displayName=a.VY.displayName;let x=s.forwardRef((e,t)=>{let{className:n,inset:s,...o}=e;return(0,r.jsx)(a.ck,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",n),...o})});x.displayName=a.ck.displayName;let p=s.forwardRef((e,t)=>{let{className:n,children:s,checked:l,...d}=e;return(0,r.jsxs)(a.oC,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:l,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(a.wU,{children:(0,r.jsx)(o.nQG,{className:"h-4 w-4"})})}),s]})});p.displayName=a.oC.displayName;let v=s.forwardRef((e,t)=>{let{className:n,children:s,...l}=e;return(0,r.jsxs)(a.Rk,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...l,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(a.wU,{children:(0,r.jsx)(o.jXb,{className:"h-4 w-4 fill-current"})})}),s]})});v.displayName=a.Rk.displayName;let j=s.forwardRef((e,t)=>{let{className:n,inset:s,...o}=e;return(0,r.jsx)(a.__,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",n),...o})});j.displayName=a.__.displayName;let b=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.Z0,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",n),...s})});b.displayName=a.Z0.displayName;let N=e=>{let{className:t,...n}=e;return(0,r.jsx)("span",{className:(0,i.cn)("ml-auto text-xs tracking-widest opacity-60",t),...n})};N.displayName="DropdownMenuShortcut"},345:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var r=n(7042),s=n(4769);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,r.W)(t))}},2489:function(){},6137:function(){}},function(e){e.O(0,[310,442,184,787,33,190,306,827,883,616,971,472,744],function(){return e(e.s=7770)}),_N_E=e.O()}]);