"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7360],{7360:function(n,i,t){t.r(i),t.d(i,{libs:function(){return s},runStableDiffusion:function(){return e}});var a=t(76022);const s=["/System/tvm/tvmjs_runtime.wasi.js","/System/tvm/tvmjs.bundle.js","/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js","/Program Files/StableDiffusion/stable_diffusion.js"],e=async function(n,i){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t||(window.tvmjsGlobalEnv=window.tvmjsGlobalEnv||{},await(0,a.mb)(s)),globalThis.tvmjsGlobalEnv.getTokenizer=async()=>(globalThis.tvmjsGlobalEnv.initialized||await globalThis.Tokenizer.init(),globalThis.tvmjsGlobalEnv.initialized=!0,new globalThis.Tokenizer.TokenizerWasm(await(await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())),globalThis.tvmjsGlobalEnv.canvas=globalThis.tvmjsGlobalEnv.canvas||i;const{prompts:e}=n;globalThis.tvmjsGlobalEnv.prompts=e?.length?e:[["A photo of an astronaut riding a horse on mars",""]],await globalThis.tvmjsGlobalEnv.asyncOnGenerate()};i.default=function(n){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!n)return;const t=document.createElement("canvas");t.height=window.innerHeight,t.width=window.innerWidth,n.append(t),e(i,t)}}}]);