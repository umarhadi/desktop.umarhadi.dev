"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9246],{49246:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function d(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}function g(e){return{}.toString.call(e).includes("Object")}function p(e){return"function"===typeof e}r.d(t,{_m:function(){return Y}});var h=d((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),y={changes:function(e,t){return g(t)||h("changeType"),Object.keys(t).some((function(t){return r=e,n=t,!Object.prototype.hasOwnProperty.call(r,n);var r,n}))&&h("changeField"),t},selector:function(e){p(e)||h("selectorType")},handler:function(e){p(e)||g(e)||h("handlerType"),g(e)&&Object.values(e).some((function(e){return!p(e)}))&&h("handlersType")},initial:function(e){var t;e||h("initialIsRequired"),g(e)||h("initialType"),t=e,Object.keys(t).length||h("initialContent")}};function m(e,t){return p(t)?t(e.current):t}function v(e,t){return e.current=s(s({},e.current),t),t}function b(e,t,r){return p(t)?t(e.current):Object.keys(r).forEach((function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])})),r}var w={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.initial(e),y.handler(t);var r={current:e},n=d(b)(r,t),o=d(v)(r),i=d(y.changes)(e),c=d(m)(r);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return y.selector(e),e(r.current)}function a(e){f(n,o,i,c)(e)}return[u,a]}},O=w,j={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}};var M=function(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}};var E=function(e){return{}.toString.call(e).includes("Object")};var P={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},R=M((function(e,t){throw new Error(e[t]||e.default)}))(P),k={config:function(e){return e||R("configIsRequired"),E(e)||R("configType"),e.urls?(console.warn(P.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},S=k,C=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};var T=function e(t,r){return Object.keys(r).forEach((function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))})),i(i({},t),r)},x={type:"cancelation",msg:"operation is manually canceled"};var I,A,V=function(e){var t=!1,r=new Promise((function(r,n){e.then((function(e){return t?n(x):r(e)})),e.catch(n)}));return r.cancel=function(){return t=!0},r},D=O.create({config:j,isInitialized:!1,resolve:null,reject:null,monaco:null}),L=(A=2,function(e){if(Array.isArray(e))return e}(I=D)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(a){o=!0,i=a}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(I,A)||function(e,t){if(e){if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(I,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),_=L[0],N=L[1];function q(e){return document.body.appendChild(e)}function z(e){var t=_((function(e){return{config:e.config,reject:e.reject}})),r=function(e){var t=document.createElement("script");return e&&(t.src=e),t}("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function F(){var e=_((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){U(t),e.resolve(t)}),(function(t){e.reject(t)}))}function U(e){_().monaco||N({monaco:e})}var B=new Promise((function(e,t){return N({resolve:e,reject:t})})),W={config:function(e){var t=S.config(e),r=t.monaco,n=c(t,["monaco"]);N((function(e){return{config:T(e.config,n),monaco:r}}))},init:function(){var e=_((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(N({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),V(B);if(window.monaco&&window.monaco.editor)return U(window.monaco),e.resolve(window.monaco),V(B);C(q,z)(F)}return V(B)},__getMonacoInstance:function(){return _((function(e){return e.monaco}))}},Y=W,$=r(50959),G={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},H={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}};var J=function({children:e}){return $.createElement("div",{style:H.container},e)};var K=function({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:c}){return $.createElement("section",{style:{...G.wrapper,width:e,height:t},...c},!r&&$.createElement(J,null,n),$.createElement("div",{ref:o,style:{...G.fullWidth,...!r&&G.hide},className:i}))},Q=(0,$.memo)(K);var X=function(e){(0,$.useEffect)(e,[])};var Z=function(e,t,r=!0){let n=(0,$.useRef)(!0);(0,$.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)};function ee(){}function te(e,t,r,n){return function(e,t){return e.editor.getModel(re(e,t))}(e,n)||function(e,t,r,n){return e.editor.createModel(t,r,n?re(e,n):void 0)}(e,t,r,n)}function re(e,t){return e.Uri.parse(t)}var ne=function({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:u=!1,keepCurrentModifiedModel:a=!1,theme:l="light",loading:s="Loading...",options:f={},height:d="100%",width:g="100%",className:p,wrapperProps:h={},beforeMount:y=ee,onMount:m=ee}){let[v,b]=(0,$.useState)(!1),[w,O]=(0,$.useState)(!0),j=(0,$.useRef)(null),M=(0,$.useRef)(null),E=(0,$.useRef)(null),P=(0,$.useRef)(m),R=(0,$.useRef)(y),k=(0,$.useRef)(!1);X((()=>{let e=Y.init();return e.then((e=>(M.current=e)&&O(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>j.current?function(){let e=j.current?.getModel();u||e?.original?.dispose(),a||e?.modified?.dispose(),j.current?.dispose()}():e.cancel()})),Z((()=>{let e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],v),Z((()=>{j.current?.getModel()?.original.setValue(e||"")}),[e],v),Z((()=>{let{original:e,modified:t}=j.current.getModel();M.current.editor.setModelLanguage(e,n||r||"text"),M.current.editor.setModelLanguage(t,o||r||"text")}),[r,n,o],v),Z((()=>{M.current?.editor.setTheme(l)}),[l],v),Z((()=>{j.current?.updateOptions(f)}),[f],v);let S=(0,$.useCallback)((()=>{if(!M.current)return;R.current(M.current);let u=te(M.current,e||"",n||r||"text",i||""),a=te(M.current,t||"",o||r||"text",c||"");j.current?.setModel({original:u,modified:a})}),[r,t,o,e,n,i,c]),C=(0,$.useCallback)((()=>{!k.current&&E.current&&(j.current=M.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...f}),S(),M.current?.editor.setTheme(l),b(!0),k.current=!0)}),[f,l,S]);return(0,$.useEffect)((()=>{v&&P.current(j.current,M.current)}),[v]),(0,$.useEffect)((()=>{!w&&!v&&C()}),[w,v,C]),Z((()=>{if(j.current&&M.current){let t=j.current.getOriginalEditor(),o=te(M.current,e||"",n||r||"text",i||"");o!==t.getModel()&&t.setModel(o)}}),[i],v),Z((()=>{if(j.current&&M.current){let e=j.current.getModifiedEditor(),n=te(M.current,t||"",o||r||"text",c||"");n!==e.getModel()&&e.setModel(n)}}),[c],v),$.createElement(Q,{width:g,height:d,isEditorReady:v,loading:s,_ref:E,className:p,wrapperProps:h})};(0,$.memo)(ne);var oe=function(e){let t=(0,$.useRef)();return(0,$.useEffect)((()=>{t.current=e}),[e]),t.current},ie=new Map;var ce=function({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:c="light",line:u,loading:a="Loading...",options:l={},overrideServices:s={},saveViewState:f=!0,keepCurrentModel:d=!1,width:g="100%",height:p="100%",className:h,wrapperProps:y={},beforeMount:m=ee,onMount:v=ee,onChange:b,onValidate:w=ee}){let[O,j]=(0,$.useState)(!1),[M,E]=(0,$.useState)(!0),P=(0,$.useRef)(null),R=(0,$.useRef)(null),k=(0,$.useRef)(null),S=(0,$.useRef)(v),C=(0,$.useRef)(m),T=(0,$.useRef)(),x=(0,$.useRef)(n),I=oe(i),A=(0,$.useRef)(!1),V=(0,$.useRef)(!1);X((()=>{let e=Y.init();return e.then((e=>(P.current=e)&&E(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>R.current?(T.current?.dispose(),d?f&&ie.set(i,R.current.saveViewState()):R.current.getModel()?.dispose(),void R.current.dispose()):e.cancel()})),Z((()=>{let c=te(P.current,e||n||"",t||o||"",i||r||"");c!==R.current?.getModel()&&(f&&ie.set(I,R.current?.saveViewState()),R.current?.setModel(c),f&&R.current?.restoreViewState(ie.get(i)))}),[i],O),Z((()=>{R.current?.updateOptions(l)}),[l],O),Z((()=>{!R.current||void 0===n||(R.current.getOption(P.current.editor.EditorOption.readOnly)?R.current.setValue(n):n!==R.current.getValue()&&(V.current=!0,R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),R.current.pushUndoStop(),V.current=!1))}),[n],O),Z((()=>{let e=R.current?.getModel();e&&o&&P.current?.editor.setModelLanguage(e,o)}),[o],O),Z((()=>{void 0!==u&&R.current?.revealLine(u)}),[u],O),Z((()=>{P.current?.editor.setTheme(c)}),[c],O);let D=(0,$.useCallback)((()=>{if(k.current&&P.current&&!A.current){C.current(P.current);let u=i||r,a=te(P.current,n||e||"",t||o||"",u||"");R.current=P.current?.editor.create(k.current,{model:a,automaticLayout:!0,...l},s),f&&R.current.restoreViewState(ie.get(u)),P.current.editor.setTheme(c),j(!0),A.current=!0}}),[e,t,r,n,o,i,l,s,f,c]);return(0,$.useEffect)((()=>{O&&S.current(R.current,P.current)}),[O]),(0,$.useEffect)((()=>{!M&&!O&&D()}),[M,O,D]),x.current=n,(0,$.useEffect)((()=>{O&&b&&(T.current?.dispose(),T.current=R.current?.onDidChangeModelContent((e=>{V.current||b(R.current.getValue(),e)})))}),[O,b]),(0,$.useEffect)((()=>{if(O){let e=P.current.editor.onDidChangeMarkers((e=>{let t=R.current.getModel()?.uri;if(t&&e.find((e=>e.path===t.path))){let e=P.current.editor.getModelMarkers({resource:t});w?.(e)}}));return()=>{e?.dispose()}}return()=>{}}),[O,w]),$.createElement(Q,{width:g,height:p,isEditorReady:O,loading:a,_ref:k,className:h,wrapperProps:y})};(0,$.memo)(ce)}}]);