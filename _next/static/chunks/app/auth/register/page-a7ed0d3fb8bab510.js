(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859,983],{3695:(e,t,r)=>{"use strict";r.d(t,{Checkbox:()=>C});var n=r(5155),s=r(2115),a=r(6101),o=r(6081),i=r(5185),l=r(5845),c=r(5503),d=r(1275),u=r(8905),f=r(3655),p="Checkbox",[v,b]=(0,o.A)(p),[m,h]=v(p),y=s.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:o,checked:c,defaultChecked:d,required:u,disabled:p,value:v="on",onCheckedChange:b,form:h,...y}=e,[k,x]=s.useState(null),j=(0,a.s)(t,e=>x(e)),E=s.useRef(!1),C=!k||h||!!k.closest("form"),[R=!1,P]=(0,l.i)({prop:c,defaultProp:d,onChange:b}),D=s.useRef(R);return s.useEffect(()=>{let e=null==k?void 0:k.form;if(e){let t=()=>P(D.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[k,P]),(0,n.jsxs)(m,{scope:r,state:R,disabled:p,children:[(0,n.jsx)(f.sG.button,{type:"button",role:"checkbox","aria-checked":g(R)?"mixed":R,"aria-required":u,"data-state":N(R),"data-disabled":p?"":void 0,disabled:p,value:v,...y,ref:j,onKeyDown:(0,i.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,i.m)(e.onClick,e=>{P(e=>!!g(e)||!e),C&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())})}),C&&(0,n.jsx)(w,{control:k,bubbles:!E.current,name:o,value:v,checked:R,required:u,disabled:p,form:h,style:{transform:"translateX(-100%)"},defaultChecked:!g(d)&&d})]})});y.displayName=p;var k="CheckboxIndicator",x=s.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:s,...a}=e,o=h(k,r);return(0,n.jsx)(u.C,{present:s||g(o.state)||!0===o.state,children:(0,n.jsx)(f.sG.span,{"data-state":N(o.state),"data-disabled":o.disabled?"":void 0,...a,ref:t,style:{pointerEvents:"none",...e.style}})})});x.displayName=k;var w=e=>{let{control:t,checked:r,bubbles:a=!0,defaultChecked:o,...i}=e,l=s.useRef(null),u=(0,c.Z)(r),f=(0,d.X)(t);s.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(u!==r&&t){let n=new Event("click",{bubbles:a});e.indeterminate=g(r),t.call(e,!g(r)&&r),e.dispatchEvent(n)}},[u,r,a]);let p=s.useRef(!g(r)&&r);return(0,n.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=o?o:p.current,...i,tabIndex:-1,ref:l,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function g(e){return"indeterminate"===e}function N(e){return g(e)?"indeterminate":e?"checked":"unchecked"}var j=r(5196),E=r(3999);let C=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(y,{ref:t,className:(0,E.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...s,children:(0,n.jsx)(x,{className:(0,E.cn)("flex items-center justify-center text-current"),children:(0,n.jsx)(j.A,{className:"h-4 w-4"})})})});C.displayName=y.displayName},3999:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var n=r(2596),s=r(9688);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,n.$)(t))}},5503:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(2115);function s(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},6220:(e,t,r)=>{"use strict";r.d(t,{Label:()=>d});var n=r(5155),s=r(2115),a=r(3655),o=s.forwardRef((e,t)=>(0,n.jsx)(a.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";var i=r(2085),l=r(3999);let c=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(o,{ref:t,className:(0,l.cn)(c(),r),...s})});d.displayName=o.displayName},9120:(e,t,r)=>{Promise.resolve().then(r.bind(r,3695)),Promise.resolve().then(r.bind(r,6220)),Promise.resolve().then(r.t.bind(r,6874,23))}},e=>{var t=t=>e(e.s=t);e.O(0,[971,874,441,684,358],()=>t(9120)),_N_E=e.O()}]);