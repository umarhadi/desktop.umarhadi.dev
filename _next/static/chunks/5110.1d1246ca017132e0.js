"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{26014:function(e,t,r){var n=r(11527),o=r(83609),i=r(431),a=r(12901),l=r.n(a),c=r(50959);const s=l()((()=>r.e(6022).then(r.bind(r,46022))),{loadableGenerated:{webpack:()=>[46022]}});t.Z=e=>{let{id:t,useHook:r,StyledComponent:a,children:l}=e;const{processes:{[t]:{url:b=""}={}}}=(0,i.z)(),u=(0,c.useRef)(null),[d,g]=(0,c.useState)(!0),A=(0,c.useMemo)((()=>({contain:"strict",visibility:d?"hidden":"visible"})),[d]);return r(t,b,u,g,d),(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(s,{}),(0,n.jsx)(a,{ref:u,style:A,...(0,o.Z)({id:t}),children:l})]})}},45110:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(11527),o=r(26014),i=r(34256),a=r(68617),l=r(90810);var c=i.ZP.div.withConfig({componentId:"sc-96c8037f-0"})`
  canvas[style*="cursor: none;"] {
    cursor: default !important;
  }

  canvas {
    height: 100%;
    width: 100%;
  }

  ol {
    ${(0,a.Z)(l.BQ)};

    background-color: rgb(32, 33, 36);
    color: rgb(232, 234, 237);
    font-family: "Lucida Grande", sans-serif, monospace;
    font-size: 13px;
    height: 100%;
    line-height: 19px;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;

    li {
      border-bottom: 1px solid rgb(58, 58, 58);
      padding: 0 25px;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`,s=r(87121);const{height:b=0,width:u=0}=s.Z.BoxedWine.defaultSize||{},d={"inline-default-ondemand-root-overlay":"/wine1.7.55-v8-min-online",ondemand:"root",resolution:`${u}x${b}`,root:"/fullWine1.7.55-v8"},g=e=>[...Object.entries(d),...Object.entries(e)].map((e=>{let[t,r]=e;return`${t}=${r}`})).join("&");var A=r(18766),m=r(56285),p=r(431),h=r(87730),k=r(50959),v=r(12876),f=r(55872).Buffer;var w=(e,t,n,o)=>{const{appendFileToTitle:i}=(0,A.Z)(e),{processes:{[e]:{libs:a=[]}={}}={}}=(0,p.z)(),{readFile:l}=(0,m.o)(),c=(0,k.useRef)(),s=(0,k.useRef)(),b=(0,k.useCallback)((async()=>{let e={},c=t?await l(t):f.from("");const b=(0,v.RT)(t),u=".exe"===b,{zipAsync:d}=await r.e(5627).then(r.bind(r,65627));let A=(0,h.basename)(t,b);const m=async()=>f.from(await d({[(0,h.basename)(t)]:c}));if(u)c=await m();else if(t){const{unzip:e}=await r.e(5627).then(r.bind(r,65627));try{A=(e=>{const t=Object.entries(e),[[r]=[]]=t.filter((e=>{let[t]=e;return t.toLowerCase().endsWith(".exe")})).sort(((e,t)=>{let[,r]=e,[,n]=t;return n.length-r.length}));return r})(await e(c))||""}catch{c=await m(),A=""}}e={...c?{"app-payload":c.toString("base64")}:{},...A?{p:A}:{}},s.current||(n.current?.prepend(document.createElement("ol")),s.current=window.setInterval((()=>{(0,v.H5)(n.current?.querySelector("canvas"))&&(clearInterval(s.current),s.current=void 0,n.current?.querySelector("ol")?.remove())}),100)),window.BoxedWineConfig={...window.BoxedWineConfig,consoleLog:e=>{const t=n.current?.querySelector("ol");if(t){const r=document.createElement("li");r.textContent=e,t.append(r),t.scrollTop=t.scrollHeight,setTimeout((()=>t.scrollTo(0,t.scrollHeight)),10)}},urlParams:g(e)},(0,v.mb)(a).then((()=>{t&&i(A||(0,h.basename)(t));try{window.BoxedWineShell((()=>o(!1)))}catch{}}))}),[i,n,a,l,o,t]);(0,k.useEffect)((()=>(c.current!==t&&(c.current=t,b()),()=>{window.BoxedWineConfig={...window.BoxedWineConfig,isRunning:!1}})),[b,t])};var x=e=>{let{id:t}=e;return(0,n.jsx)(o.Z,{StyledComponent:c,id:t,useHook:w,children:(0,n.jsx)("canvas",{id:"boxedWineCanvas",onContextMenu:v.nK})})}},83609:function(e,t,r){var n=r(18213),o=r(5894),i=r(80968),a=r(56285),l=r(431),c=r(69455),s=r(87730),b=r(50959),u=r(90810),d=r(12876);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:g,onDragLeave:A,onDragOver:m,updatePositions:p}=e;const{url:h}=(0,l.z)(),{iconPositions:k,sortOrders:v,setIconPositions:f}=(0,c.k)(),{mkdirRecursive:w,updateFolder:x,writeFile:$}=(0,a.o)(),y=(0,b.useCallback)((async(e,t,r)=>{if(g)if(t){const n=(0,s.join)(u.Ll,e);await w(u.Ll),await $(n,t,!0)&&(r===i.v.UPDATE_URL&&h(g,n),x(u.Ll,e))}else r===i.v.UPDATE_URL&&h(g,e)}),[g,w,x,h,$]),{openTransferDialog:C}=(0,n.Z)();return{onDragLeave:A,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:e=>{if(!u.my.has((0,s.extname)(r))){if(p&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,o.p4)(e);if(0===t.length&&""===n)return;const i={x:e.clientX,y:e.clientY};let a=[];if(n){try{a=JSON.parse(n)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(r)&&(0,s.basename)(e)===(0,s.relative)(r,e))return;a=a.map((e=>(0,s.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!k[`${r}/${e}`])return e;let t=0,n="";do{t+=1,n=`${r}/${(0,s.basename)(e,(0,s.extname)(e))} (${t})${(0,s.extname)(e)}`}while(k[n]);return(0,s.basename)(n)})),(0,d.vi)(r,e.target,k,v,i,a,f)}(0,o.WG)(e,t||y,r,C,Boolean(g))}}}}},18766:function(e,t,r){var n=r(431),o=r(87121),i=r(50959),a=r(90810);t.Z=e=>{const{title:t}=(0,n.z)(),[r]=e.split(a.CC),{title:l}=o.Z[r]||{};return{appendFileToTitle:(0,i.useCallback)(((r,n)=>{const o=r?` - ${r}${n?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)}),[e,l,t]),prependFileToTitle:(0,i.useCallback)(((r,n)=>{const o=r?`${n?`${a.xy} `:""}${r} - `:"";t(e,`${o}${l}`)}),[e,l,t])}}},68617:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(34256);const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",c={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${c[s].thumb} ${c[s].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${c[s].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${c[s].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${c[s].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${c[s].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${c[s].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${c[s].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${c[s].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${c[s].buttonHover};
    }

    &:active {
      background-color: ${c[s].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===r?"center":`${r}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${o});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${i});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${a});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${l});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${c[s].blendMode};
  }
`}}}]);