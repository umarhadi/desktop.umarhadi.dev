"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{0:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var n=r(11527),a=r(11188);const i=`${a.sC}/AI Images`,o="0 0.5px 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",s={"/caption":{action:"CAPTIONING",icon:"\ud83d\udcdd",label:"Captioning"},"/classify":{action:"CLASSIFYING",icon:"\ud83c\udff7\ufe0f",label:"Classifying"},"/draw":{action:"DRAWING",icon:"\ud83c\udfa8",label:"Drawing"},"/summarize":{action:"SUMMARY",icon:"\ud83d\udccb",label:"Summarizing"},"/translate":{action:"TRANSLATION",icon:"\ud83c\udf10",label:"Translating"},"/wallpaper":{action:"DRAWING",icon:"\ud83d\uddbc\ufe0f",label:"Creating Wallpaper"}},c={401:"Valid API key required.",404:"Model not found.",429:"Rate limit reached."},l=150,u=()=>{const e=Math.random();let t=l;return e<.3?t=30:e<.6?t=37.5:e<.9&&(t=50),Math.random()*(t-1+1)+1},p=()=>(0,n.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"})}),d=()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001C14.366 2.693 14.2 1.643 13.616 0h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847L2.372 4.657c.745 1.568 1.375 2.434.847 3.707C2.692 9.635 1.635 9.802 0 10.384v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"})}),g=()=>(0,n.jsxs)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M338.7 174.6 135.3 378.3c-12.5 12.5-12.5 32.8 0 45.3l180.1 180.3c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l22.6-22.6L203 400.9l158.2-158.4c12.5-12.5 12.5-32.8 0-45.3l-22.5-22.6z"}),(0,n.jsx)("path",{d:"M654.5 369.4h-496c-17.7 0-32 14.3-32 32s14.3 32 32 32h496c97.2 0 176 78.8 176 176s-78.8 176-176 176h-496c-17.7 0-32 14.3-32 32s14.3 32 32 32h496c132.5 0 240-107.5 240-240s-107.5-240-240-240z"})]});var b=r(74965),h=r(22235);var m=b.ZP.div.withConfig({componentId:"sc-286a71c7-0"})`
  background-color: rgb(68, 70, 84);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  > button {
    fill: rgba(200, 200, 200, 75%);
    margin: 3px;
    padding: 4px;
    position: absolute;
    right: ${a.BQ}px;
    width: 24px;
    z-index: 1;

    &:hover {
      fill: rgba(200, 200, 200, 100%);
    }
  }

  .sub-margin {
    margin: -2px;
  }

  > ul {
    ${(0,h.Z)(a.BQ)};

    height: 100%;
    overflow-y: scroll;
    padding-bottom: 84px;
    position: relative;
  }
`;var x=b.ZP.li.withConfig({componentId:"sc-be59d8ad-0"})`
  padding-bottom: 15px;

  figure {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    padding-left: 15px;

    figcaption {
      color: rgba(236, 236, 241);
      padding-left: 5px;

      b {
        font-weight: 600;
      }
    }
  }
`;var f=b.ZP.div.withConfig({componentId:"sc-374ce36d-0"})`
  align-items: flex-end;
  background-color: rgb(52, 53, 65);
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  right: ${a.BQ}px;

  .status {
    background-color: rgb(52, 53, 65);
    border-top-right-radius: 5px;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    max-width: 95%;
    overflow: hidden;
    padding: 5px 10px;
    position: absolute;
    text-overflow: ellipsis;
    top: -26px;
    white-space: nowrap;
    width: fit-content;
  }

  textarea {
    background-color: rgb(64, 65, 79);
    border: 5px solid rgb(64, 65, 79);
    border-radius: 24px;
    box-shadow: ${o};
    color: #fff;
    font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
    font-size: 16px;
    height: 40px;
    line-height: 20px;
    margin: 22px;
    overflow: hidden;
    padding: 4px 40px 4px 16px;
    resize: none;
    width: 100%;

    &::placeholder {
      color: rgba(200, 200, 200, 75%);
    }
  }

  button {
    bottom: 25px;
    cursor: pointer;
    opacity: ${e=>{let{$hideSend:t}=e;return t?"0%":"100%"}};
    pointer-events: ${e=>{let{$hideSend:t}=e;return t?"none":"all"}};
    position: absolute;
    right: 28px;
    transition: opacity 0.1s ease-in-out;
    width: min-content;

    &:hover {
      background-color: rgb(52, 53, 65);
      border-radius: 50%;
    }

    svg {
      color: rgb(0, 132, 255);
      margin: 8px 8px 3px 6px;
      pointer-events: none;
      width: 20px;
    }
  }
`;var w=b.ZP.span.withConfig({componentId:"sc-3590d550-0"})`
  height: 32px;
  opacity: ${e=>{let{$showLoading:t}=e;return t?"100%":"0%"}};
  position: absolute;
  right: 24px;
  top: 18px;
  transition: opacity 0.1s ease-in-out;
  width: 32px;

  &::after {
    animation: ellipsis steps(4, end) 900ms infinite;
    color: rgb(142, 142, 160);
    content: "";
    font-size: 25px;
    letter-spacing: 0.5px;
  }

  @keyframes ellipsis {
    0% {
      content: ".";
    }
    50% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
`;var k=b.ZP.li.withConfig({componentId:"sc-8b6cb6a4-0"})`
  background-size: cover;
  border-radius: 18px;
  box-shadow: ${o};
  cursor: ${e=>{let{$image:t}=e;return t?void 0:"text"}};
  font-size: 16px;
  height: ${e=>{let{$image:t}=e;return t?"256px":void 0}};
  line-height: 20px;
  margin: 20px;
  max-width: calc(100% - 40px);
  overflow-wrap: break-word;
  padding: 10px 15px;
  user-select: text;
  white-space: break-spaces;
  width: ${e=>{let{$image:t}=e;return t?"256px":"max-content"}};

  ${e=>{let{$image:t,$type:r}=e;return"assistant"===r&&b.iv`
      background: ${t?`url(${t})`:"linear-gradient(90deg, rgb(248, 249, 253), rgb(245, 248, 253))"};
      background-size: contain;
      color: #000;
      margin-left: 56px;
      margin-right: auto;
      max-width: calc(100% - 78px);
      position: relative;

      &::before {
        background-color: black;
        background-image: url("/favicon.ico");
        background-size: contain;
        border-radius: 50%;
        content: "";
        height: 31px;
        left: -40px;
        position: absolute;
        top: 9px;
        width: 31px;
      }

      .cursor {
        display: contents;
        font-size: 14px;
      }

      > span {
        cursor: text;
        display: flex;
        flex-direction: column;
        gap: 10px;
        user-select: text;

        code {
          background-color: rgb(25, 25, 25);
          border-radius: 6px;
          color: rgb(250, 250, 250);
          cursor: text;
          font-size: 12px;
          padding: 2px 5px;
          user-select: text;
        }

        p {
          cursor: text;
          user-select: text;
        }

        pre > code {
          display: block;
          font-size: 14px;
          padding: 10px;
          white-space: pre-wrap;
        }

        ol,
        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: auto;
          user-select: text;
          li {
            user-select: text;
          }
        }
      }
    `}}

  ${e=>{let{$isCommand:t,$type:r}=e;return"user"===r&&b.iv`
      background: linear-gradient(
        90deg,
        ${t?"rgb(224, 40, 234)":"rgb(40, 112, 234)"},
        ${t?"rgb(148, 27, 239)":"rgb(27, 74, 239)"}
      );
      color: #fff;
      margin-left: auto;
    `}}
`;var A=b.ZP.li.withConfig({componentId:"sc-6128ecab-0"})`
  background-color: rgb(70, 59, 63);
  border: 1px solid rgb(124, 70, 43);
  border-radius: 10px;
  color: rgb(248, 236, 234);
  font-size: 16px;
  margin: 25px;
  outline: 1px solid rgb(73, 48, 40);
  padding: 15px;
`,y=r(32790),v=r(21424),$=r(54537),S=r(67435),C=r(52225),M=r(57996),E=r(66328),L=r(3416),I=r(8798),T=r(55872).Buffer;const z={text:"Hello, I'm an AI assistant. How can I help you?",type:"assistant"},j={chat:"textGeneration",conversational:"facebook/blenderbot-400M-distill",imageToText:"Salesforce/blip-image-captioning-large",summarization:"philschmid/bart-large-cnn-samsum",textGeneration:"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",textToImage:"stabilityai/stable-diffusion-2-1",translation:"t5-base",zeroShotClassification:"facebook/bart-large-mnli"},P={"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5":{assistantStartToken:"<|assistant|>",endToken:"<|endoftext|>",userStartToken:"<|prompter|>"}},B=(e,t)=>{const{assistantStartToken:r,endToken:n,userStartToken:a}=P[j.textGeneration];return`${[...t,{text:e,type:"user"}].filter((e=>{let{type:t}=e;return"system"!==t})).map((e=>{let{text:t,type:i}=e;return`${"assistant"===i?r:a}${t}${n}`})).join("")}${r}`},R={wait_for_model:!0};var _=r(55872).Buffer;const H={model:"gpt-3.5-turbo",n:1,temperature:.8},O="https://api.openai.com/v1/chat/completions",W="https://api.openai.com/v1/images/generations",N={content:"You are a helpful assistant.",role:"system"},U={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"};const Z={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"};class F{destroy(){this.reset()}constructor(e){this.model="",this.worker=void 0,this.isChatting=!1,this.greeting=Z,this.model=e}async init(){return window.webLLM=window.webLLM||{},window.webLLM[this.model]=window.webLLM[this.model]||new Worker(r.tu(new URL(r.p+r.u(6097),r.b)),{name:this.model,type:void 0}),this.worker=window.webLLM[this.model],this.worker.postMessage({model:this.model,type:"init"}),Promise.resolve()}async chat(e,t,r,n,a,i){return this.isChatting||(this.isChatting=!0,i&&this.worker?.postMessage({prompt:i,type:"system"})),setTimeout((()=>{this.worker?.postMessage({prompt:e,type:"chat"})}),100),new Promise((e=>{this.worker?.addEventListener("message",(t=>{let{data:r}=t;const n=a||console.info;"string"===typeof r?(e(r),n("","")):"object"===typeof r&&n(r.type,r.message)}))}))}async classify(e,t){return Promise.resolve("")}async draw(e){return Promise.resolve()}async imageToText(e,t,r){return Promise.resolve("")}reset(){this.worker?.postMessage({type:"reset"})}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}}var G=r(4468),D=r(50959);const Q={HuggingFace:class{checkError(e){e.message.includes("Rate limit reached")&&this.setError(429)}constructor(e,t){this.inference={},this.greeting=z,this.apiKey=e,this.setError=t}async init(){await(0,I.mb)(["Program Files/HuggingFace/inference.min.js"]),window.HfInference&&(this.inference=new window.HfInference(this.apiKey))}async chat(e,t,r,n){let a="";const i=j[j.chat];try{({generated_text:a=""}="conversational"===j.chat?await this.inference.conversational({inputs:{generated_responses:r,past_user_inputs:t,text:e},model:i},R):await this.inference.textGeneration({inputs:B(e,n),model:i,parameters:{max_new_tokens:100,return_full_text:!1}},R))}catch(o){this.checkError(o)}return a}async classify(e,t){try{const[{labels:[r],scores:[n]}]=await this.inference.zeroShotClassification({inputs:[e],model:j.zeroShotClassification,parameters:{candidate_labels:t}},R);return`${r} (${(100*n).toFixed(1)}%)`}catch(r){this.checkError(r)}return""}async draw(e){try{const t=await this.inference.textToImage({inputs:e,model:j.textToImage,negative_prompt:"blurry"},R);return T.from(await t.arrayBuffer())}catch(t){return this.checkError(t)}}async imageToText(e,t,r){try{const[{generated_text:n}]=await this.inference.request({data:new File([(0,I.V4)(r,t)],e,{type:t}),model:j.imageToText},{...R,binary:!0});return n}catch(n){this.checkError(n)}return""}async summarization(e){try{return(await this.inference.summarization({inputs:e,model:j.summarization,parameters:{max_length:100}},R)).summary_text}catch(t){this.checkError(t)}return""}async translation(e){try{return(await this.inference.translation({inputs:e,model:j.translation},R)).translation_text}catch(t){this.checkError(t)}return""}},OpenAI:class{getHeaders(){return{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},method:"POST"}}constructor(e,t){this.apiKey="",this.greeting=U,this.apiKey=e,this.setError=t}async init(){return Promise.resolve()}async chat(e,t,r,n,a,i){i&&N.content!==i&&(N.content=i);const o=(n||[]).map((e=>{let{text:t,type:r}=e;return{content:t,role:r}})),s=await fetch(O,{body:JSON.stringify({messages:[N,...o,{content:e,role:"user"}],...H}),...this.getHeaders()});if(s?.ok){const e=await s.json(),[{message:t,finish_reason:r}]=e?.choices||[];if(t){const{content:e}=t;if("stop"===r)return e;if("length"===r)return`${e}\n\n[Incomplete Response]`;if("content_filter"===r)return`${e}\n\n[Content Filtered]`}}return s?.status&&this.setError(s?.status),""}async classify(e,t){return Promise.resolve("")}async draw(e){const t=await fetch(W,{body:JSON.stringify({n:1,prompt:e,response_format:"b64_json",size:"256x256"}),...this.getHeaders()});if(t?.ok){const e=(await t.json())?.data?.[0]?.b64_json;return e?_.from(e,"base64"):void 0}t?.status&&this.setError(t?.status)}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}},"WebLLM [RedPajama 3B]":F,"WebLLM [Vicuna 7B]":F};var K=r(68584),V=r(78663);var Y=e=>{let{id:t}=e;const{aiApi:r,setAiApi:o,setWallpaper:l}=(0,L.k)(),{readFile:b,mkdirRecursive:h,writeFile:T}=(0,S.o)(),{close:z,open:j,processes:{[t]:P},title:B,url:R}=(0,M.z)(),{url:_}=P||{},[H,O]=(0,D.useMemo)((()=>r.split(":")),[r]),{engine:W,error:N,name:U,resetError:Z}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[r,n]=(0,D.useState)(0),i=(0,G.Z)(),[o,s]=(0,D.useState)("");return(0,D.useEffect)((()=>{if("boolean"===typeof i){const[e]=a.OG.split(":");let r=e;t&&t in Q?r=t.startsWith("WebLLM")&&!i?a.wB:t:r.startsWith("WebLLM")&&!i&&(r=a.wB),s(r)}}),[t,i]),{engine:(0,D.useMemo)((()=>o?new Q[o](t===o?e:"",n):void 0),[o,e,t]),error:r,name:o,resetError:()=>n(0)}}(H.startsWith("WebLLM")?H:O,H),F=(0,D.useRef)(null),Y=(0,D.useRef)(null),[J,q]=(0,D.useState)(""),[X,ee]=(0,D.useState)([]),te=(0,D.useRef)(!1),re=(0,D.useCallback)((function(e){let[t,...r]=e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=r.length>0;ee((e=>{if(n)return[...e,{text:t,type:"assistant",writing:a}];const r=[...e],i=r.findIndex((e=>{let{writing:t}=e;return t}));return r[i]={text:`${r[i].text}${t}`,type:"assistant",writing:a},r})),a&&setTimeout((()=>re(r)),u())}),[]),ne=(0,D.useCallback)((e=>{const{image:t,text:r,type:n}=e;r&&("assistant"!==n||t?ee((t=>[...t,e])):re([...r],!0))}),[re]),[ae,ie]=(0,D.useState)(!1),oe=(0,D.useCallback)((async e=>{if(!e)return"";ie(!0);const t=await e;return ie(!1),t}),[]),[se,ce]=(0,D.useState)(""),le=(0,D.useCallback)(((e,t)=>{ce(e&&t?`${e} ${t}`:"")}),[]),[ue,pe]=(0,D.useState)(""),[de,ge]=(0,D.useState)(),be=(0,D.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:de;if(!t)return;const r=new SpeechSynthesisUtterance(e);r.voice=t,r.pitch=.9,r.rate=1.5,r.volume=.5,window.speechSynthesis.speak(r)}),[de]),he=(0,D.useCallback)((e=>{if(!W)return;const[t,r]=X.map((e=>e.command&&"user"===e.type?{...e,text:`${e.command.replace("/","").toUpperCase()}: ${e.text}`}:e.image&&"assistant"===e.type?{...e,text:`IMAGE: ${e.text}`}:e)).reduce(((e,t)=>{let[r,n]=e,{text:a,type:i}=t;return"assistant"===i?[[...r,a],n]:[r,[...n,a]]}),[[],[]]),n=e.trim();oe(W.chat(n,r,t,X,le,ue)).then((async e=>{e&&(window.marked?.parse||await(0,I.mb)(["/Program Files/Marked/marked.min.js"]),ne({text:window.marked.parse(e.trim(),{headerIds:!1}),type:"assistant"}),de&&be(e))})),ne({text:n,type:"user"})}),[W,ne,X,be,le,ue,de,oe]),[me,xe]=(0,D.useState)([]),fe=(0,D.useCallback)((async(e,t,r)=>{const n=Date.now();ie(!0),xe((r=>[...r,{command:e,text:t,timestamp:n}]));const a=await r;return xe((e=>e.filter((e=>{let{timestamp:t}=e;return t!==n})))),ie(!1),a}),[]),we=(0,D.useCallback)(((e,t,r)=>{const[n,...a]=t.split(" "),i=a.join(" ");ne({command:n,text:i,type:"user"}),fe(n,i,e).then((e=>e&&ne({command:n,..."string"===typeof e?{text:`${r||"RESPONSE"}: ${e.trim()}`}:{image:(0,I.YS)(e),text:i},type:"assistant"})))}),[ne,fe]),ke=(0,D.useCallback)((()=>{Y.current&&(Y.current.style.height="0px",Y.current.style.height=`${Math.max(40,Y.current.scrollHeight+10)}px`)}),[]),Ae=(0,D.useCallback)((async(e,t,r)=>{try{const n=(0,K.join)(i,`${(0,v.gL)(e)} (${(0,I.gE)()}).jpg`);await h(i),await T(n,t,!0),r&&l(n)}catch{}}),[h,l,T]),ye=(0,D.useCallback)((async()=>{if(Y.current&&W){if(Y.current.value.startsWith("/")){const[e,...t]=Y.current.value.split(" "),r=t.join(" ");switch(e){case"/classify":we(W.classify(r,Object.keys(s).map((e=>e.replace("/",""))).filter((e=>"classify"!==e))),Y.current.value,"CLASSIFYING");break;case"/draw":case"/wallpaper":we(W.draw(r).then((t=>(t&&Ae(r,t,"/wallpaper"===e),t))),Y.current.value,"DRAWING");break;case"/caption":we(W.imageToText((0,K.basename)(r),(0,y.bh)(r),await b(r)),Y.current.value,"CAPTIONING");break;case"/summarize":we(W.summarization(r),Y.current.value,"SUMMARY");break;case"/translate":we(W.translation(r),Y.current.value,"TRANSLATION");break;default:he(Y.current.value)}}else he(Y.current.value);Z(),Y.current.value="",q(""),ke()}}),[W,we,b,Z,Ae,he,ke]),ve=(0,D.useMemo)((()=>X.some((e=>{let{writing:t}=e;return t}))),[X]),$e=ae||ve,Se=J&&!$e,{contextMenu:Ce}=(0,C.H)(),[Me,Ee]=(0,D.useState)([]),{onContextMenuCapture:Le}=(0,D.useMemo)((()=>Ce?.((()=>1===X.length?[{label:"Set AI Engine",menu:["HuggingFace","OpenAI","WebLLM [RedPajama 3B]","WebLLM [Vicuna 7B]"].map((e=>({action:()=>{o(`${e}:${e.startsWith("WebLLM")?"":prompt("API Key")||""}`),z(t),setTimeout((()=>j(t.split(a.CC)[0])),1.5*a.jx.WINDOW)},checked:U===e,label:e})))},..."OpenAI"===U?[{action:()=>{pe(prompt("System Prompt")||"")},label:"Set System Prompt"}]:[],...Me.length>0?[{label:"Set Text-to-Speech",menu:Me.map((e=>({action:()=>{ge(e),be(X[0].text,e)},checked:e===de,label:e.name})))}]:[]]:[]))),[z,Ce,t,X,U,j,o,be,de,Me]),Ie=(0,D.useCallback)((()=>{ee((e=>[e[0]])),W?.reset?.()}),[W]);return(0,D.useEffect)((()=>{if(W&&"speechSynthesis"in window){const e=window.speechSynthesis.getVoices();0===e.length?setTimeout((()=>Ee(window.speechSynthesis.getVoices())),500):Ee(e)}}),[W]),(0,D.useEffect)((()=>{U&&B(t,`${E.Z.Chat.title} (${U})`)}),[t,U,B]),(0,D.useEffect)((()=>{F.current&&X.length>0&&F.current.scrollTo(0,F.current.scrollHeight)}),[X]),(0,D.useEffect)((()=>(W&&!te.current&&(te.current=!0,W.init().then((()=>ne(W.greeting))),Y.current?.focus(a.eS)),()=>{te.current&&W?.destroy?.()})),[W,ne]),(0,D.useEffect)((()=>{if(_&&Y.current&&a.lM.has((0,I.RT)(_))){const e=`${J?"":"/caption "}${J}${J?" ":""}${_}`;Y.current.value=e,q(e),ke(),R(t,"")}}),[t,J,R,ke,_]),(0,n.jsxs)(m,{...(0,$.Z)({id:t}),children:[1===X.length?(0,n.jsx)(V.Z,{onClick:Le,children:(0,n.jsx)(d,{})}):X.length>1&&!$e&&(0,n.jsx)(V.Z,{className:"sub-margin",onClick:Ie,title:"Reset Chat",children:(0,n.jsx)(g,{})}),(0,n.jsxs)("ul",{ref:F,children:[X.map(((e,t)=>{let{command:r,image:a,text:i,type:o,writing:c}=e;const l="assistant"===o,u=r||!l?i:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:`${i}${c?"<span class='cursor'>|</span>":""}`}});return(0,n.jsxs)(k,{$image:a,$isCommand:Boolean(r),$type:o,title:a?i:"",children:[r&&!l?`${s[r].icon} `:"",a?"":u]},t)})),Boolean(N&&c[N])&&(0,n.jsx)(A,{children:c[N]}),me.map((e=>{let{command:t,text:r}=e;return(0,n.jsx)(x,{children:(0,n.jsxs)("figure",{children:[s[t].icon,(0,n.jsxs)("figcaption",{children:[s[t].label,": ",(0,n.jsx)("b",{children:r}),"..."]})]})},`${t}-${r}`)}))]}),(0,n.jsxs)(f,{$hideSend:!Se,children:[se&&(0,n.jsx)("div",{className:"status",children:se}),(0,n.jsx)("textarea",{ref:Y,onInput:e=>{const{nativeEvent:t,target:r}=e;r instanceof HTMLTextAreaElement&&t instanceof InputEvent&&(["insertFromPaste","deleteByCut"].includes(t.inputType)&&q(r.value),ke())},onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()},onKeyUp:e=>{const{key:t,target:r,shiftKey:n}=e;if(!(r instanceof HTMLTextAreaElement))return;const a="Enter"===t;r.value&&a?n?(r.value+="\n",ke()):Se&&ye():q(r.value)},placeholder:"Ask me anything..."}),(0,n.jsx)(w,{$showLoading:$e}),(0,n.jsx)(V.Z,{onClick:ye,children:(0,n.jsx)(p,{})})]})]})}},54537:function(e,t,r){var n=r(99987),a=r(21424),i=r(87674),o=r(67435),s=r(57996),c=r(3416),l=r(68584),u=r(50959),p=r(11188),d=r(8798);t.Z=e=>{let{callback:t,directory:r=p.Ll,id:g,onDragLeave:b,onDragOver:h,updatePositions:m}=e;const{url:x}=(0,s.z)(),{iconPositions:f,sortOrders:w,setIconPositions:k}=(0,c.k)(),{mkdirRecursive:A,updateFolder:y,writeFile:v}=(0,o.o)(),$=(0,u.useCallback)((async(e,t,r)=>{if(g)if(t){const n=(0,l.join)(p.Ll,e);await A(p.Ll),await v(n,t,!0)&&(r===i.v.UPDATE_URL&&x(g,n),y(p.Ll,e))}else r===i.v.UPDATE_URL&&x(g,e)}),[g,A,y,x,v]),{openTransferDialog:S}=(0,n.Z)();return{onDragLeave:b,onDragOver:e=>{h?.(e),(0,d.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,a.p4)(e);if(0===t.length&&""===n)return;const i={x:e.clientX,y:e.clientY};let o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(r)&&(0,l.basename)(e)===(0,l.relative)(r,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!f[`${r}/${e}`])return e;let t=0,n="";do{t+=1,n=`${r}/${(0,l.basename)(e,(0,l.extname)(e))} (${t})${(0,l.extname)(e)}`}while(f[n]);return(0,l.basename)(n)})),(0,d.vi)(r,e.target,f,w,i,o,k)}(0,a.WG)(e,t||$,r,S,Boolean(g))}}}},4468:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(50959);const a=()=>{const[e,t]=(0,n.useState)(),r=(0,n.useCallback)((async()=>t(await(async()=>{if("undefined"===typeof navigator)return!1;if(!("gpu"in navigator))return!1;let e;try{e=await navigator.gpu.requestAdapter()}catch{return!1}return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,n.useEffect)((()=>{r()}),[r]),e}},22235:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(74965);const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",c={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${c[l].thumb} ${c[l].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${c[l].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${c[l].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${c[l].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${c[l].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${c[l].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${c[l].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${c[l].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${c[l].buttonHover};
    }

    &:active {
      background-color: ${c[l].active};
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
    background-image: url(${a});
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
    background-image: url(${o});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${s});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${c[l].blendMode};
  }
`}}}]);