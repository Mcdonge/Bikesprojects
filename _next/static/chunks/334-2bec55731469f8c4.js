"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{1469:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{default:function(){return i},getImageProps:function(){return u}});let t=n(8229),o=n(8883),a=n(3063),l=t._(n(4615));function u(e){let{props:r}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Bikesprojects/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(r))void 0===n&&delete r[e];return{props:r}}let i=a.Image},6766:(e,r,n)=>{n.d(r,{default:()=>o.a});var t=n(1469),o=n.n(t)},8698:(e,r,n)=>{n.d(r,{H_:()=>e9,UC:()=>e8,YJ:()=>e5,q7:()=>e6,VF:()=>e7,JU:()=>e2,ZL:()=>e1,z6:()=>e3,hN:()=>e4,bL:()=>e$,wv:()=>re,Pb:()=>rr,G5:()=>rt,ZP:()=>rn,l9:()=>e0});var t=n(2115),o=n(5185),a=n(6101),l=n(6081),u=n(5845),i=n(3655),d=n(2284),s=n(4315),c=n(9178),p=n(2293),f=n(7900),v=n(1285),m=n(5152),g=n(4378),h=n(8905),w=n(9196),x=n(9708),y=n(9033),C=n(8168),b=n(3795),M=n(5155),j=["Enter"," "],R=["ArrowUp","PageDown","End"],_=["ArrowDown","PageUp","Home",...R],D={ltr:[...j,"ArrowRight"],rtl:[...j,"ArrowLeft"]},k={ltr:["ArrowLeft"],rtl:["ArrowRight"]},P="Menu",[I,E,O]=(0,d.N)(P),[N,S]=(0,l.A)(P,[O,m.Bk,w.RG]),T=(0,m.Bk)(),L=(0,w.RG)(),[A,F]=N(P),[G,K]=N(P),B=e=>{let{__scopeMenu:r,open:n=!1,children:o,dir:a,onOpenChange:l,modal:u=!0}=e,i=T(r),[d,c]=t.useState(null),p=t.useRef(!1),f=(0,y.c)(l),v=(0,s.jH)(a);return t.useEffect(()=>{let e=()=>{p.current=!0,document.addEventListener("pointerdown",r,{capture:!0,once:!0}),document.addEventListener("pointermove",r,{capture:!0,once:!0})},r=()=>p.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",r,{capture:!0}),document.removeEventListener("pointermove",r,{capture:!0})}},[]),(0,M.jsx)(m.bL,{...i,children:(0,M.jsx)(A,{scope:r,open:n,onOpenChange:f,content:d,onContentChange:c,children:(0,M.jsx)(G,{scope:r,onClose:t.useCallback(()=>f(!1),[f]),isUsingKeyboardRef:p,dir:v,modal:u,children:o})})})};B.displayName=P;var U=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e,o=T(n);return(0,M.jsx)(m.Mz,{...o,...t,ref:r})});U.displayName="MenuAnchor";var V="MenuPortal",[z,X]=N(V,{forceMount:void 0}),q=e=>{let{__scopeMenu:r,forceMount:n,children:t,container:o}=e,a=F(V,r);return(0,M.jsx)(z,{scope:r,forceMount:n,children:(0,M.jsx)(h.C,{present:n||a.open,children:(0,M.jsx)(g.Z,{asChild:!0,container:o,children:t})})})};q.displayName=V;var Z="MenuContent",[H,Y]=N(Z),J=t.forwardRef((e,r)=>{let n=X(Z,e.__scopeMenu),{forceMount:t=n.forceMount,...o}=e,a=F(Z,e.__scopeMenu),l=K(Z,e.__scopeMenu);return(0,M.jsx)(I.Provider,{scope:e.__scopeMenu,children:(0,M.jsx)(h.C,{present:t||a.open,children:(0,M.jsx)(I.Slot,{scope:e.__scopeMenu,children:l.modal?(0,M.jsx)(W,{...o,ref:r}):(0,M.jsx)(Q,{...o,ref:r})})})})}),W=t.forwardRef((e,r)=>{let n=F(Z,e.__scopeMenu),l=t.useRef(null),u=(0,a.s)(r,l);return t.useEffect(()=>{let e=l.current;if(e)return(0,C.Eq)(e)},[]),(0,M.jsx)($,{...e,ref:u,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),Q=t.forwardRef((e,r)=>{let n=F(Z,e.__scopeMenu);return(0,M.jsx)($,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),$=t.forwardRef((e,r)=>{let{__scopeMenu:n,loop:l=!1,trapFocus:u,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:g,onPointerDownOutside:h,onFocusOutside:y,onInteractOutside:C,onDismiss:j,disableOutsideScroll:D,...k}=e,P=F(Z,n),I=K(Z,n),O=T(n),N=L(n),S=E(n),[A,G]=t.useState(null),B=t.useRef(null),U=(0,a.s)(r,B,P.onContentChange),V=t.useRef(0),z=t.useRef(""),X=t.useRef(0),q=t.useRef(null),Y=t.useRef("right"),J=t.useRef(0),W=D?b.A:t.Fragment,Q=D?{as:x.DX,allowPinchZoom:!0}:void 0,$=e=>{var r,n;let t=z.current+e,o=S().filter(e=>!e.disabled),a=document.activeElement,l=null===(r=o.find(e=>e.ref.current===a))||void 0===r?void 0:r.textValue,u=function(e,r,n){var t;let o=r.length>1&&Array.from(r).every(e=>e===r[0])?r[0]:r,a=(t=Math.max(n?e.indexOf(n):-1,0),e.map((r,n)=>e[(t+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let l=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}(o.map(e=>e.textValue),t,l),i=null===(n=o.find(e=>e.textValue===u))||void 0===n?void 0:n.ref.current;!function e(r){z.current=r,window.clearTimeout(V.current),""!==r&&(V.current=window.setTimeout(()=>e(""),1e3))}(t),i&&setTimeout(()=>i.focus())};t.useEffect(()=>()=>window.clearTimeout(V.current),[]),(0,p.Oh)();let ee=t.useCallback(e=>{var r,n;return Y.current===(null===(r=q.current)||void 0===r?void 0:r.side)&&function(e,r){return!!r&&function(e,r){let{x:n,y:t}=e,o=!1;for(let e=0,a=r.length-1;e<r.length;a=e++){let l=r[e].x,u=r[e].y,i=r[a].x,d=r[a].y;u>t!=d>t&&n<(i-l)*(t-u)/(d-u)+l&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)}(e,null===(n=q.current)||void 0===n?void 0:n.area)},[]);return(0,M.jsx)(H,{scope:n,searchRef:z,onItemEnter:t.useCallback(e=>{ee(e)&&e.preventDefault()},[ee]),onItemLeave:t.useCallback(e=>{var r;ee(e)||(null===(r=B.current)||void 0===r||r.focus(),G(null))},[ee]),onTriggerLeave:t.useCallback(e=>{ee(e)&&e.preventDefault()},[ee]),pointerGraceTimerRef:X,onPointerGraceIntentChange:t.useCallback(e=>{q.current=e},[]),children:(0,M.jsx)(W,{...Q,children:(0,M.jsx)(f.n,{asChild:!0,trapped:u,onMountAutoFocus:(0,o.m)(i,e=>{var r;e.preventDefault(),null===(r=B.current)||void 0===r||r.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:(0,M.jsx)(c.qW,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:g,onPointerDownOutside:h,onFocusOutside:y,onInteractOutside:C,onDismiss:j,children:(0,M.jsx)(w.bL,{asChild:!0,...N,dir:I.dir,orientation:"vertical",loop:l,currentTabStopId:A,onCurrentTabStopIdChange:G,onEntryFocus:(0,o.m)(v,e=>{I.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,M.jsx)(m.UC,{role:"menu","aria-orientation":"vertical","data-state":eD(P.open),"data-radix-menu-content":"",dir:I.dir,...O,...k,ref:U,style:{outline:"none",...k.style},onKeyDown:(0,o.m)(k.onKeyDown,e=>{let r=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,t=1===e.key.length;r&&("Tab"===e.key&&e.preventDefault(),!n&&t&&$(e.key));let o=B.current;if(e.target!==o||!_.includes(e.key))return;e.preventDefault();let a=S().filter(e=>!e.disabled).map(e=>e.ref.current);R.includes(e.key)&&a.reverse(),function(e){let r=document.activeElement;for(let n of e)if(n===r||(n.focus(),document.activeElement!==r))return}(a)}),onBlur:(0,o.m)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(V.current),z.current="")}),onPointerMove:(0,o.m)(e.onPointerMove,eI(e=>{let r=e.target,n=J.current!==e.clientX;e.currentTarget.contains(r)&&n&&(Y.current=e.clientX>J.current?"right":"left",J.current=e.clientX)}))})})})})})})});J.displayName=Z;var ee=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,M.jsx)(i.sG.div,{role:"group",...t,ref:r})});ee.displayName="MenuGroup";var er=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,M.jsx)(i.sG.div,{...t,ref:r})});er.displayName="MenuLabel";var en="MenuItem",et="menu.itemSelect",eo=t.forwardRef((e,r)=>{let{disabled:n=!1,onSelect:l,...u}=e,d=t.useRef(null),s=K(en,e.__scopeMenu),c=Y(en,e.__scopeMenu),p=(0,a.s)(r,d),f=t.useRef(!1);return(0,M.jsx)(ea,{...u,ref:p,disabled:n,onClick:(0,o.m)(e.onClick,()=>{let e=d.current;if(!n&&e){let r=new CustomEvent(et,{bubbles:!0,cancelable:!0});e.addEventListener(et,e=>null==l?void 0:l(e),{once:!0}),(0,i.hO)(e,r),r.defaultPrevented?f.current=!1:s.onClose()}}),onPointerDown:r=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,r),f.current=!0},onPointerUp:(0,o.m)(e.onPointerUp,e=>{var r;f.current||null===(r=e.currentTarget)||void 0===r||r.click()}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{let r=""!==c.searchRef.current;!n&&(!r||" "!==e.key)&&j.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});eo.displayName=en;var ea=t.forwardRef((e,r)=>{let{__scopeMenu:n,disabled:l=!1,textValue:u,...d}=e,s=Y(en,n),c=L(n),p=t.useRef(null),f=(0,a.s)(r,p),[v,m]=t.useState(!1),[g,h]=t.useState("");return t.useEffect(()=>{let e=p.current;if(e){var r;h((null!==(r=e.textContent)&&void 0!==r?r:"").trim())}},[d.children]),(0,M.jsx)(I.ItemSlot,{scope:n,disabled:l,textValue:null!=u?u:g,children:(0,M.jsx)(w.q7,{asChild:!0,...c,focusable:!l,children:(0,M.jsx)(i.sG.div,{role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0,...d,ref:f,onPointerMove:(0,o.m)(e.onPointerMove,eI(e=>{l?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.m)(e.onPointerLeave,eI(e=>s.onItemLeave(e))),onFocus:(0,o.m)(e.onFocus,()=>m(!0)),onBlur:(0,o.m)(e.onBlur,()=>m(!1))})})})}),el=t.forwardRef((e,r)=>{let{checked:n=!1,onCheckedChange:t,...a}=e;return(0,M.jsx)(ev,{scope:e.__scopeMenu,checked:n,children:(0,M.jsx)(eo,{role:"menuitemcheckbox","aria-checked":ek(n)?"mixed":n,...a,ref:r,"data-state":eP(n),onSelect:(0,o.m)(a.onSelect,()=>null==t?void 0:t(!!ek(n)||!n),{checkForDefaultPrevented:!1})})})});el.displayName="MenuCheckboxItem";var eu="MenuRadioGroup",[ei,ed]=N(eu,{value:void 0,onValueChange:()=>{}}),es=t.forwardRef((e,r)=>{let{value:n,onValueChange:t,...o}=e,a=(0,y.c)(t);return(0,M.jsx)(ei,{scope:e.__scopeMenu,value:n,onValueChange:a,children:(0,M.jsx)(ee,{...o,ref:r})})});es.displayName=eu;var ec="MenuRadioItem",ep=t.forwardRef((e,r)=>{let{value:n,...t}=e,a=ed(ec,e.__scopeMenu),l=n===a.value;return(0,M.jsx)(ev,{scope:e.__scopeMenu,checked:l,children:(0,M.jsx)(eo,{role:"menuitemradio","aria-checked":l,...t,ref:r,"data-state":eP(l),onSelect:(0,o.m)(t.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,n)},{checkForDefaultPrevented:!1})})})});ep.displayName=ec;var ef="MenuItemIndicator",[ev,em]=N(ef,{checked:!1}),eg=t.forwardRef((e,r)=>{let{__scopeMenu:n,forceMount:t,...o}=e,a=em(ef,n);return(0,M.jsx)(h.C,{present:t||ek(a.checked)||!0===a.checked,children:(0,M.jsx)(i.sG.span,{...o,ref:r,"data-state":eP(a.checked)})})});eg.displayName=ef;var eh=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,M.jsx)(i.sG.div,{role:"separator","aria-orientation":"horizontal",...t,ref:r})});eh.displayName="MenuSeparator";var ew=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e,o=T(n);return(0,M.jsx)(m.i3,{...o,...t,ref:r})});ew.displayName="MenuArrow";var ex="MenuSub",[ey,eC]=N(ex),eb=e=>{let{__scopeMenu:r,children:n,open:o=!1,onOpenChange:a}=e,l=F(ex,r),u=T(r),[i,d]=t.useState(null),[s,c]=t.useState(null),p=(0,y.c)(a);return t.useEffect(()=>(!1===l.open&&p(!1),()=>p(!1)),[l.open,p]),(0,M.jsx)(m.bL,{...u,children:(0,M.jsx)(A,{scope:r,open:o,onOpenChange:p,content:s,onContentChange:c,children:(0,M.jsx)(ey,{scope:r,contentId:(0,v.B)(),triggerId:(0,v.B)(),trigger:i,onTriggerChange:d,children:n})})})};eb.displayName=ex;var eM="MenuSubTrigger",ej=t.forwardRef((e,r)=>{let n=F(eM,e.__scopeMenu),l=K(eM,e.__scopeMenu),u=eC(eM,e.__scopeMenu),i=Y(eM,e.__scopeMenu),d=t.useRef(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:c}=i,p={__scopeMenu:e.__scopeMenu},f=t.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return t.useEffect(()=>f,[f]),t.useEffect(()=>{let e=s.current;return()=>{window.clearTimeout(e),c(null)}},[s,c]),(0,M.jsx)(U,{asChild:!0,...p,children:(0,M.jsx)(ea,{id:u.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":u.contentId,"data-state":eD(n.open),...e,ref:(0,a.t)(r,u.onTriggerChange),onClick:r=>{var t;null===(t=e.onClick)||void 0===t||t.call(e,r),e.disabled||r.defaultPrevented||(r.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,o.m)(e.onPointerMove,eI(r=>{i.onItemEnter(r),r.defaultPrevented||e.disabled||n.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:(0,o.m)(e.onPointerLeave,eI(e=>{var r,t;f();let o=null===(r=n.content)||void 0===r?void 0:r.getBoundingClientRect();if(o){let r=null===(t=n.content)||void 0===t?void 0:t.dataset.side,a="right"===r,l=o[a?"left":"right"],u=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:l,y:o.top},{x:u,y:o.top},{x:u,y:o.bottom},{x:l,y:o.bottom}],side:r}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.m)(e.onKeyDown,r=>{let t=""!==i.searchRef.current;if(!e.disabled&&(!t||" "!==r.key)&&D[l.dir].includes(r.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),r.preventDefault()}})})})});ej.displayName=eM;var eR="MenuSubContent",e_=t.forwardRef((e,r)=>{let n=X(Z,e.__scopeMenu),{forceMount:l=n.forceMount,...u}=e,i=F(Z,e.__scopeMenu),d=K(Z,e.__scopeMenu),s=eC(eR,e.__scopeMenu),c=t.useRef(null),p=(0,a.s)(r,c);return(0,M.jsx)(I.Provider,{scope:e.__scopeMenu,children:(0,M.jsx)(h.C,{present:l||i.open,children:(0,M.jsx)(I.Slot,{scope:e.__scopeMenu,children:(0,M.jsx)($,{id:s.contentId,"aria-labelledby":s.triggerId,...u,ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var r;d.isUsingKeyboardRef.current&&(null===(r=c.current)||void 0===r||r.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,o.m)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{let r=e.currentTarget.contains(e.target),n=k[d.dir].includes(e.key);if(r&&n){var t;i.onOpenChange(!1),null===(t=s.trigger)||void 0===t||t.focus(),e.preventDefault()}})})})})})});function eD(e){return e?"open":"closed"}function ek(e){return"indeterminate"===e}function eP(e){return ek(e)?"indeterminate":e?"checked":"unchecked"}function eI(e){return r=>"mouse"===r.pointerType?e(r):void 0}e_.displayName=eR;var eE="DropdownMenu",[eO,eN]=(0,l.A)(eE,[S]),eS=S(),[eT,eL]=eO(eE),eA=e=>{let{__scopeDropdownMenu:r,children:n,dir:o,open:a,defaultOpen:l,onOpenChange:i,modal:d=!0}=e,s=eS(r),c=t.useRef(null),[p=!1,f]=(0,u.i)({prop:a,defaultProp:l,onChange:i});return(0,M.jsx)(eT,{scope:r,triggerId:(0,v.B)(),triggerRef:c,contentId:(0,v.B)(),open:p,onOpenChange:f,onOpenToggle:t.useCallback(()=>f(e=>!e),[f]),modal:d,children:(0,M.jsx)(B,{...s,open:p,onOpenChange:f,dir:o,modal:d,children:n})})};eA.displayName=eE;var eF="DropdownMenuTrigger",eG=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,disabled:t=!1,...l}=e,u=eL(eF,n),d=eS(n);return(0,M.jsx)(U,{asChild:!0,...d,children:(0,M.jsx)(i.sG.button,{type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":u.open,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...l,ref:(0,a.t)(r,u.triggerRef),onPointerDown:(0,o.m)(e.onPointerDown,e=>{t||0!==e.button||!1!==e.ctrlKey||(u.onOpenToggle(),u.open||e.preventDefault())}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{!t&&(["Enter"," "].includes(e.key)&&u.onOpenToggle(),"ArrowDown"===e.key&&u.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});eG.displayName=eF;var eK=e=>{let{__scopeDropdownMenu:r,...n}=e,t=eS(r);return(0,M.jsx)(q,{...t,...n})};eK.displayName="DropdownMenuPortal";var eB="DropdownMenuContent",eU=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...a}=e,l=eL(eB,n),u=eS(n),i=t.useRef(!1);return(0,M.jsx)(J,{id:l.contentId,"aria-labelledby":l.triggerId,...u,...a,ref:r,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var r;i.current||null===(r=l.triggerRef.current)||void 0===r||r.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,o.m)(e.onInteractOutside,e=>{let r=e.detail.originalEvent,n=0===r.button&&!0===r.ctrlKey,t=2===r.button||n;(!l.modal||t)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});eU.displayName=eB;var eV=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(ee,{...o,...t,ref:r})});eV.displayName="DropdownMenuGroup";var ez=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(er,{...o,...t,ref:r})});ez.displayName="DropdownMenuLabel";var eX=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(eo,{...o,...t,ref:r})});eX.displayName="DropdownMenuItem";var eq=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(el,{...o,...t,ref:r})});eq.displayName="DropdownMenuCheckboxItem";var eZ=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(es,{...o,...t,ref:r})});eZ.displayName="DropdownMenuRadioGroup";var eH=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(ep,{...o,...t,ref:r})});eH.displayName="DropdownMenuRadioItem";var eY=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(eg,{...o,...t,ref:r})});eY.displayName="DropdownMenuItemIndicator";var eJ=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(eh,{...o,...t,ref:r})});eJ.displayName="DropdownMenuSeparator",t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(ew,{...o,...t,ref:r})}).displayName="DropdownMenuArrow";var eW=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(ej,{...o,...t,ref:r})});eW.displayName="DropdownMenuSubTrigger";var eQ=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eS(n);return(0,M.jsx)(e_,{...o,...t,ref:r,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});eQ.displayName="DropdownMenuSubContent";var e$=eA,e0=eG,e1=eK,e8=eU,e5=eV,e2=ez,e6=eX,e9=eq,e3=eZ,e4=eH,e7=eY,re=eJ,rr=e=>{let{__scopeDropdownMenu:r,children:n,open:t,onOpenChange:o,defaultOpen:a}=e,l=eS(r),[i=!1,d]=(0,u.i)({prop:t,defaultProp:a,onChange:o});return(0,M.jsx)(eb,{...l,open:i,onOpenChange:d,children:n})},rn=eW,rt=eQ},9428:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(9946).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])}}]);