"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1136],{12549:function(e,t,n){var a=n(11527),r=n(22214),i=n(40618),o=n(30725),l=n.n(o),s=n(50959);const c=l()((()=>n.e(2482).then(n.bind(n,2482))),{loadableGenerated:{webpack:()=>[2482]}}),d=e=>{let{id:t,useHook:n,StyledComponent:o,children:l}=e;const{processes:{[t]:{url:d=""}={}}}=(0,i.z)(),u=(0,s.useRef)(null),[f,p]=(0,s.useState)(!0),m=(0,s.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n({containerRef:u,id:t,loading:f,setLoading:p,url:d}),(0,a.jsxs)(a.Fragment,{children:[f&&(0,a.jsx)(c,{}),(0,a.jsx)(o,{ref:u,style:m,...(0,r.Z)({id:t}),children:l})]})};t.Z=(0,s.memo)(d)},11136:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(11527),r=n(12549);var i=n(99122).ZP.div.withConfig({componentId:"sc-1e4b8b1d-0"})`
  height: 100%;
  width: 100%;

  &.drop {
    &::before {
      color: #ffad33;
      content: "Drop SWF/SPL file here";
      display: flex;
      font-size: 16px;
      font-weight: 600;
      height: 100%;
      left: 0;
      place-content: center;
      place-items: center;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  ruffle-player {
    height: 100%;
    width: 100%;
  }
`,o=n(73422),l=n(89771),s=n(40618),c=n(53081),d=n(50959),u=n(7047);var f=e=>{let{containerRef:t,id:n,setLoading:a,url:r}=e;const{linkElement:i,processes:{[n]:{libs:f=[]}={}}={}}=(0,s.z)(),[p,m]=(0,d.useState)(),{appendFileToTitle:h}=(0,o.Z)(n),{readFile:b}=(0,l.o)(),y=(0,d.useCallback)((async()=>{t.current?.classList.remove("drop");try{await(p?.load({data:await b(r)}))}catch{}h((0,c.basename)(r,(0,c.extname)(r)))}),[h,t,p,b,r]);(0,d.useEffect)((()=>{(0,u.mb)(f).then((()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},m(window.RufflePlayer.newest().createPlayer()),r||t.current?.classList.add("drop"))}))}),[t,f,r]),(0,d.useEffect)((()=>(t.current&&p&&(t.current.append(p),i(n,"peekElement",p),a(!1)),()=>p?.remove())),[t,n,i,p,a]),(0,d.useEffect)((()=>{t.current&&p&&r&&y()}),[t,y,p,r])};var p=e=>{let{id:t}=e;return(0,a.jsx)(r.Z,{StyledComponent:i,id:t,useHook:f})}},22214:function(e,t,n){var a=n(22631),r=n(78303),i=n(36677),o=n(89771),l=n(40618),s=n(78546),c=n(53081),d=n(50959),u=n(5506),f=n(7047);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:p,onDragLeave:m,onDragOver:h,updatePositions:b}=e;const{url:y}=(0,l.z)(),{iconPositions:v,sortOrders:w,setIconPositions:g}=(0,s.k)(),{mkdirRecursive:k,updateFolder:$,writeFile:L}=(0,o.o)(),x=(0,d.useCallback)((async(e,t,n)=>{if(p)if(t){const a=(0,c.join)(u.Ll,e);await k(u.Ll),await L(a,t,!0)&&(n===i.v.UPDATE_URL&&y(p,a),$(u.Ll,e))}else n===i.v.UPDATE_URL&&y(p,e)}),[p,k,$,y,L]),{openTransferDialog:C}=(0,a.Z)();return{onDragLeave:m,onDragOver:e=>{h?.(e),(0,f.nK)(e)},onDrop:e=>{if(!u.my.has((0,f.RT)(n))){if(b&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,r.p4)(e);if(0===t.length&&""===a)return;const i={x:e.clientX,y:e.clientY};let o=[];if(a){try{o=JSON.parse(a)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(v[a]);return(0,c.basename)(a)})),(0,f.vi)(n,e.target,v,w,i,o,g)}(0,r.WG)(e,t||x,n,C,Boolean(p))}}}}},73422:function(e,t,n){var a=n(40618),r=n(76566),i=n(50959),o=n(5506);t.Z=e=>{const{title:t}=(0,a.z)(),[n]=e.split(o.CC),{title:l}=r.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)(((n,a)=>{const r=n?` - ${n}${a?` ${o.xy}`:""}`:"";t(e,`${l}${r}`)}),[e,l,t]),prependFileToTitle:(0,i.useCallback)(((n,a,r)=>{const i=n?`${a?`${o.xy} `:""}${n}${r?" ":" - "}`:"";t(e,`${i}${l}`)}),[e,l,t])}}}}]);