"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3273,2482],{93273:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(11527);var i=n(99122).ZP.div.withConfig({componentId:"sc-f808b011-0"})`
  iframe {
    opacity: ${e=>{let{$loaded:t}=e;return t?"100%":"0%"}};
    transition: opacity 0.25s ease-in;
  }

  .loading {
    &::before {
      color: #fff;
      font-weight: 500;
      mix-blend-mode: normal;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 50%);
    }
  }
`,o=n(2482),r=n(22214),s=n(73422),l=n(89771),c=n(40618),f=n(78546),d=n(53081),u=n(50959),p=n(5506),m=n(55872).Buffer;var g=e=>{let{id:t}=e;const{closeWithTransition:n,processes:{[t]:{libs:[g=""]=[],url:w=""}={}}={}}=(0,c.z)(),{createPath:h,exists:y,readFile:b,updateFolder:v,writeFile:$}=(0,l.o)(),{foregroundId:k,setForegroundId:x,setWallpaper:F}=(0,f.k)(),L=(0,u.useRef)(null),[T,D]=(0,u.useState)(!1),[E,_]=(0,u.useState)(),{prependFileToTitle:C}=(0,s.Z)(t),j=(0,u.useCallback)((e=>t=>{const n=(0,d.join)(p.dA,"wallpaper.png");t.toBlob((async t=>{await $(n,m.from(await(t?.arrayBuffer())),!0),F(n,e)}))}),[F,$]),{onDragOver:B,onDrop:P}=(0,r.Z)({id:t});return(0,u.useEffect)((()=>{C("Untitled")}),[C]),(0,u.useEffect)((()=>{k!==t&&L.current?.contentWindow?.addEventListener("click",(()=>x(t)),p.K7)}),[k,t,x]),(0,u.useEffect)((()=>{const{contentWindow:e}=L.current||{};if(T&&e&&!E){const a=e,i=a.systemHooks.showOpenFileDialog,o=a.file_new;_(a),a.file_new=()=>{C("Untitled"),o()},a.systemHooks.setWallpaperTiled=j("tile"),a.systemHooks.setWallpaperCentered=j("center"),a.systemHooks.showOpenFileDialog=async e=>{const{file:t}=await i(e);return C(t.name),{file:t}},a.close=()=>n(t),a.storage_quota_exceeded=()=>{},a.systemHooks.showSaveFileDialog=async e=>{let{defaultFileName:t,getBlob:n}=e;return v(p.Ll,await h(`${t}.png`,p.Ll,m.from(await(await n("image/png")).arrayBuffer())))},a.systemHooks.writeBlobToHandle=async(e,t)=>{await y(e)&&(await $(e,m.from(await t.arrayBuffer()),!0),v((0,d.dirname)(e),(0,d.basename)(e)))},e.addEventListener("dragover",B),e.addEventListener("drop",P)}}),[n,h,y,t,E,T,B,P,C,j,v,$]),(0,u.useEffect)((()=>{E&&w&&b(w).then((e=>{const t=E.onunhandledrejection;E.onunhandledrejection=e=>{t?.(e),"either options.data or options.file or options.filePath must be passed"===e?.reason?.message&&C("Untitled")},E.open_from_file(new File([e],w),w),C((0,d.basename)(w))}))}),[E,C,b,w]),(0,a.jsxs)(i,{$loaded:T,children:[!T&&(0,a.jsx)(o.default,{className:"loading"}),(0,a.jsx)("iframe",{ref:L,height:"100%",id:"jspaint-iframe",onLoad:()=>D(!0),src:g,title:t,width:"100%",...p.v0})]})}},2482:function(e,t,n){n.r(t);const a=n(99122).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "Working on it...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;t.default=a},22214:function(e,t,n){var a=n(22631),i=n(78303),o=n(36677),r=n(89771),s=n(40618),l=n(78546),c=n(53081),f=n(50959),d=n(5506),u=n(7047);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:m,onDragOver:g,updatePositions:w}=e;const{url:h}=(0,s.z)(),{iconPositions:y,sortOrders:b,setIconPositions:v}=(0,l.k)(),{mkdirRecursive:$,updateFolder:k,writeFile:x}=(0,r.o)(),F=(0,f.useCallback)((async(e,t,n)=>{if(p)if(t){const a=(0,c.join)(d.Ll,e);await $(d.Ll),await x(a,t,!0)&&(n===o.v.UPDATE_URL&&h(p,a),k(d.Ll,e))}else n===o.v.UPDATE_URL&&h(p,e)}),[p,$,k,h,x]),{openTransferDialog:L}=(0,a.Z)();return{onDragLeave:m,onDragOver:e=>{g?.(e),(0,u.nK)(e)},onDrop:e=>{if(!d.my.has((0,u.RT)(n))){if(w&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,i.p4)(e);if(0===t.length&&""===a)return;const o={x:e.clientX,y:e.clientY};let r=[];if(a){try{r=JSON.parse(a)}catch{}if(!Array.isArray(r))return;const[e]=r;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;r=r.map((e=>(0,c.basename)(e)))}else r=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!y[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(y[a]);return(0,c.basename)(a)})),(0,u.vi)(n,e.target,y,b,o,r,v)}(0,i.WG)(e,t||F,n,L,Boolean(p))}}}}},73422:function(e,t,n){var a=n(40618),i=n(76566),o=n(50959),r=n(5506);t.Z=e=>{const{title:t}=(0,a.z)(),[n]=e.split(r.CC),{title:s}=i.Z[n]||{};return{appendFileToTitle:(0,o.useCallback)(((n,a)=>{const i=n?` - ${n}${a?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,o.useCallback)(((n,a,i)=>{const o=n?`${a?`${r.xy} `:""}${n}${i?" ":" - "}`:"";t(e,`${o}${s}`)}),[e,s,t])}}}}]);