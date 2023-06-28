"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4669],{84669:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(11527),i=n(90810);const o=[{icon:"/System/Icons/Favicons/google.webp",name:"Google",url:"https://www.google.com/webhp?igu=1"},{icon:"/System/Icons/Favicons/wikipedia.webp",name:"Wikipedia",url:"https://www.wikipedia.org/"},{icon:"/System/Icons/Favicons/archive.webp",name:"Internet Archive",url:"https://archive.org/"},{icon:i.Yg,name:"Umar Hadi Siswanto",url:"https://umarhadi.dev/"}];var s=n(50959);const c=(0,s.memo)((e=>{let{direction:t}=e;const n=(0,s.useMemo)((()=>"right"===t?{transform:"scaleX(-1)"}:void 0),[t]);return(0,r.jsx)("svg",{style:n,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})})),l=(0,s.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})}))),a=(0,s.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})));var d=n(86692).ZP.div.withConfig({componentId:"sc-8ce3e3c2-0"})`
  iframe {
    background-color: ${e=>{let{$hasSrcDoc:t}=e;return t?"#fff":"initial"}};
    border: 0;
    height: calc(100% - 36px - 33px);
    width: 100%;
  }

  nav {
    background-color: rgb(87, 87, 87);
    display: flex;
    padding: 4px 0;
    place-content: center;
    place-items: center;

    div {
      display: flex;
      justify-content: space-around;
      min-width: 102px;
      padding-left: 6px;
      width: 102px;
    }

    button {
      border-radius: 50%;
      display: flex;
      height: 28px;
      place-content: center;
      place-items: center;
      transition: background 0.2s ease-in-out;
      width: 28px;

      svg {
        fill: rgb(240, 240, 240);
        height: 22px;
        width: 22px;
      }

      &:hover {
        background-color: rgb(103, 103, 103);
      }

      &:active {
        background-color: rgb(110, 110, 110);
      }

      &:disabled {
        background-color: inherit;

        svg {
          fill: rgb(152, 152, 152);
        }
      }
    }

    &:not(:first-child) {
      border-bottom: 1px solid rgb(118, 115, 118);
      height: 33px;
      justify-content: left;
      padding: 0 8px;

      button {
        margin-bottom: 4px;
        margin-right: 4px;
      }
    }

    input {
      background-color: rgb(64, 62, 65);
      border-radius: 18px;
      color: rgb(255, 255, 255);
      font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
      font-size: 13px;
      height: 28px;
      letter-spacing: 0.2px;
      line-height: 26px;
      margin: 0 6px;
      padding: 0 13px;
      width: 100%;

      &:focus {
        outline: 2px solid rgb(138, 180, 248);
      }
    }
  }
`,u=n(18766),p=n(56285),h=n(431),g=n(87121),x=n(67887),f=n(24370),m=n(29054),w=n(12876);var v=e=>{let{id:t}=e;const{icon:n,linkElement:v,url:b,processes:{[t]:k}}=(0,h.z)(),{prependFileToTitle:j}=(0,u.Z)(t),{url:y=""}=k||{},S=y||"https://github.com/umarhadi",{canGoBack:$,canGoForward:C,history:F,moveHistory:Z,position:E}=(0,x.Z)(S,t),{exists:z,readFile:B}=(0,p.o)(),I=(0,s.useRef)(null),L=(0,s.useRef)(null),[R,T]=(0,s.useState)(!1),[G,H]=(0,s.useState)(""),P=e=>{Z(e),I.current&&(I.current.value=F[E+e])},A=(0,s.useRef)(""),D=(0,s.useCallback)((async e=>{const{contentWindow:r}=L.current||{};if(r?.location){const s=[".htm",".html"].includes((0,w.RT)(e))&&await z(e);if(T(!0),H(""),s&&H((await B(e)).toString()),n(t,g.Z.Browser.icon),!s){const s=await(0,w.Qv)(e);if(r.location.replace(s),s.startsWith(w.z8))j(`${e} - Google Search`);else{const{name:t=""}=o?.find((t=>{let{url:n}=t;return n===e}))||{};j(t)}if(e.startsWith("ipfs://"))n(t,"/System/Icons/Favicons/ipfs.webp");else{const e=new Image,r=`${new URL(s).origin}${i.Yg}`;e.addEventListener("error",(()=>{const{icon:e}=o?.find((e=>{let{url:t}=e;return t===s}))||{};e&&n(t,e)}),i.K7),e.addEventListener("load",(()=>n(t,r)),i.K7),e.src=r}}}}),[z,t,j,B,n]);return(0,s.useEffect)((()=>{k&&F[E]!==A.current&&(A.current=F[E],D(F[E]))}),[F,E,k,D]),(0,s.useEffect)((()=>{L?.current&&v(t,"peekElement",L.current)}),[t,v]),(0,r.jsxs)(d,{$hasSrcDoc:Boolean(G),children:[(0,r.jsxs)("nav",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(f.Z,{disabled:!$,onClick:()=>P(-1),...(0,w.PS)("Click to go back"),children:(0,r.jsx)(c,{direction:"left"})}),(0,r.jsx)(f.Z,{disabled:!C,onClick:()=>P(1),...(0,w.PS)("Click to go forward"),children:(0,r.jsx)(c,{direction:"right"})}),(0,r.jsx)(f.Z,{disabled:R,onClick:()=>D(F[E]),...(0,w.PS)("Reload this page"),children:R?(0,r.jsx)(a,{}):(0,r.jsx)(l,{})})]}),(0,r.jsx)("input",{ref:I,defaultValue:S,enterKeyHint:"go",onFocusCapture:()=>I.current?.select(),onKeyDown:e=>{let{key:n}=e;I.current&&"Enter"===n&&(b(t,I.current.value),window.getSelection()?.removeAllRanges(),I.current.blur())},type:"text"})]}),(0,r.jsx)("nav",{children:o.map((e=>{let{name:n,icon:i,url:o}=e;return(0,r.jsx)(f.Z,{onClick:()=>{I.current&&(I.current.value=o),b(t,o)},...(0,w.PS)(`${n}\n${o}`),children:(0,r.jsx)(m.Z,{alt:n,imgSize:16,src:i})},n)}))}),(0,r.jsx)("iframe",{ref:L,onLoad:()=>T(!1),srcDoc:G||void 0,title:t,...i.v0})]})}},18766:function(e,t,n){var r=n(431),i=n(87121),o=n(50959),s=n(90810);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(s.CC),{title:c}=i.Z[n]||{};return{appendFileToTitle:(0,o.useCallback)(((n,r)=>{const i=n?` - ${n}${r?` ${s.xy}`:""}`:"";t(e,`${c}${i}`)}),[e,c,t]),prependFileToTitle:(0,o.useCallback)(((n,r,i)=>{const o=n?`${r?`${s.xy} `:""}${n}${i?" ":" - "}`:"";t(e,`${o}${c}`)}),[e,c,t])}}},67887:function(e,t,n){var r=n(431),i=n(50959);t.Z=(e,t)=>{const{url:n}=(0,r.z)(),[o,s]=(0,i.useState)(e),[c,l]=(0,i.useState)((()=>[e])),[a,d]=(0,i.useState)(0),u=(0,i.useCallback)((e=>{const r=a+e;d(r),s(c[r]),n(t,c[r])}),[n,c,t,a]);return(0,i.useEffect)((()=>{e!==o&&(d(a+1),s(e),l([...c.slice(0,a+1),e]))}),[o,c,a,e]),{canGoBack:a>0,canGoForward:a<c.length-1,currentUrl:o,history:c,moveHistory:u,position:a}}}}]);