(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[598],{"../../node_modules/marko/components-browser.marko":(o,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s,getComponentForEl:()=>s.getComponentForEl,init:()=>s.init,register:()=>s.register});var s=t("../../node_modules/marko/dist/runtime/components/index.js")},"../components/code-block-marko/index.marko?browser-entry":(o,e,t)=>{"use strict";var s=t("../../node_modules/marko/dist/runtime/components/index.js"),n=t("../components/code-block-marko/component-browser.js"),r=t.n(n);(0,s.register)("UUumdCIE",r()),(0,s.init)()},"../components/code-block-marko/component-browser.js":(o,e,t)=>{const{getComponentForEl:s}=t("../../node_modules/marko/components-browser.marko"),n=t("../utils/localstorage.js");o.exports={changeSyntax(){const o=s(document.querySelector(".site-header")),e=document.body.scrollTop||document.documentElement.scrollTop,t=this.el.offsetTop;o.pause(),"concise"===n.get("syntax")?(n.set("syntax","html"),document.body.classList.remove("concise")):(n.set("syntax","concise"),document.body.classList.add("concise"));const r=e-t+this.el.offsetTop;document.documentElement.scrollTop=r,document.body.scrollTop=r,setTimeout((()=>o.resume()))}}},"../utils/localstorage.js":(o,e)=>{function t(o){return`markojs-website:${o}`}e.get=o=>localStorage.getItem(t(o)),e.set=(o,e)=>localStorage.setItem(t(o),e),e.getMarkoWebsiteKey=t}},o=>{o.O(0,[323],(()=>("../components/code-block-marko/index.marko?browser-entry",o(o.s="../components/code-block-marko/index.marko?browser-entry")))),o.O()}]);
//# sourceMappingURL=598.6b6c14f3.js.map