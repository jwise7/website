"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[25],{"../components/repl/components/preview.marko":(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var s=n("../../node_modules/marko/dist/runtime/vdom/index.js"),o=n("../../node_modules/path-browserify/index.js"),r=n.n(o),a=n("../../node_modules/prettier/standalone.js"),l=(n("../../node_modules/prettier/parser-html.js"),n("../../node_modules/prettier/parser-babel.js")),i=n.n(l),d=n("../utils/highlight.js"),m=n.n(d),u=n("../utils/compiler/index.js"),c=n("../../node_modules/memfs/lib/index.js"),p=n("../../node_modules/@marko/tags-api-preview/dist/components/return/index-browser.mjs"),f=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-function/index-browser.mjs"),v=n("../../node_modules/@marko/tags-api-preview/dist/util/replace-assignments/index.mjs"),_=n("../../node_modules/marko/dist/runtime/vdom/helpers/v-element.js"),h=n.n(_),w=n("../../node_modules/marko/dist/runtime/helpers/class-value.js"),y=n.n(w),g=n("../../node_modules/@marko/tags-api-preview/dist/transform/native-tag-var/index-browser.mjs"),b=n("../../node_modules/@marko/tags-api-preview/dist/translate/native-tag-handlers/index-browser.mjs"),k=n("../../node_modules/marko/dist/runtime/vdom/helpers/attrs.js"),j=n.n(k),x=n("../../node_modules/@marko/tags-api-preview/dist/translate/track-rendering/index.mjs"),T=n("../../node_modules/marko/dist/runtime/components/renderer.js"),S=n.n(T),C=n("../../node_modules/marko/dist/runtime/components/registry/index-browser.js"),E=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),L=n.n(E);const F="AzL9TbmU",I=(0,s.t)(F),O=I;(0,C.r)(F,(()=>I));const A={onCreate(){this.state={}}};I._=S()((function(e,t,n,s,o){(0,x.begin)();try{var r=s;const o=e,i=(0,g.default)(r,"0");var a={};t.e("iframe",j()((0,b.default)({...o},n,"iframe",a)),"@0",s,0,4,{...a});const d=(0,g.default)(r,"1");var l={};t.e("iframe",j()((0,b.default)({...o,style:"display:none"},n,"iframe",l)),"@1",s,0,4,{...l}),e._return&&e._return({default:{next:()=>"none"===i().style.display?i():d(),swap(){const e="none"===i().style.display,t=e?d():i(),n=e?i():d();return t.srcdoc=t.srcdoc,t.style.display="none",n.style.display="",n}}},1)}finally{(0,x.end)()}}),{t:F},A),I.Component=L()(A,I._);var M=n("../../node_modules/marko/dist/runtime/helpers/render-tag.js"),N=n.n(M),D=n("../../node_modules/@marko/tags-api-preview/dist/components/_instance/index.marko"),U=n("../../node_modules/@marko/tags-api-preview/dist/components/effect/index.mjs");const z="P9JdgJzT",J=(0,s.t)(z),R=J,W=h()("small",null,"6",null,1,0).t("Open the dev tools to view the full error.");(0,C.r)(z,(()=>J));const B={onCreate(){this.state={}}};J._=S()((function(e,t,n,s,o){(0,x.begin)();try{var l,d=s,_=o,h=e=>l=e;const{type:w,files:g,selectedFile:b,getTranslator:k,debounce:j,onSelectError:T,onSyntaxError:S}=e,C=d.elId("@0"),E=r().join("/",C,b.path),L=r().join("/",C,g[0].path),F="0"in _?_[0]:_[0]=null,I=e=>d.setState("0",e),A="1"in _?_[1]:_[1]=null,M=e=>d.setState("1",e),z=/(.+?)(?:\((\d+),(\d+)\)|:(\d+)): (.*(?=\s+\d+ | ))/;t.be("div",{class:y()(["preview-error",F&&"preview-error-active"])},"0",s,null,1),F&&(t.be("h1",{class:"error-name"},"1",s,null,1),t.t(F.name,s),F.file&&(t.t(" :  ",s),t.be("a",null,"2",s,null,0,{onclick:n.d("click",(function(){T(F)}),!1)}),t.t(F.file.slice(1),s),t.t("(",s),t.t(F.line,s),t.t(",",s),t.t(F.column,s),t.t(")",s),t.ee()),t.ee(),t.be("div",null,"3",s,null,0),t.t(F.message,s),t.ee(),E!==F.file&&(F.codeFrame?(t.be("pre",null,"4",s,null,0),t.be("code",null,"5",s,null,0),t.t(F.codeFrame,s),t.ee(),t.ee()):t.n(W,s))),t.ee(),"preview"===w?N()(D.default,{renderBody:(e,t,n,s)=>{var o=t,r=(0,p.default)(n);N()(O,{class:"preview-output",_return:r},e,o,"8");const{default:a}=r();h(a)}},t,n,"7"):(t.be("div",{class:"preview-compiled"},"9",s,null,1),t.h(A,s),t.ee()),(0,U.default)(s,(0,f.cache)((0,f.cached)(d,[j,g,C,w,L,k,l,E,S])||function(){let e,t;async function n(){for(const e of g){const n=r().join("/",C,e.path);c.vol.mkdirSync(r().dirname(n),{recursive:!0}),c.vol.writeFileSync(n,e.content)}try{if("preview"===w||"html"===w){const s=await(0,u.g)({entry:L,markoOptions:{output:"vdom",translator:k&&k()}});if("preview"===w){const{contentWindow:o,contentDocument:d}=l.next();o.__INTERNAL_MODULES__=window.__INTERNAL_MODULES__;const p=(0,o.eval)(s.js),f=d.createElement("style");f.innerHTML=s.css,d.head.appendChild(f),k?p.default({},d.body):(await p.render({})).appendTo(d.body),l.swap()}}else{const _=w.startsWith("compiled-html")?"html":"vdom",h=await(0,u.M)({entry:E,markoOptions:{output:_,translator:k&&k()}});(0,v.default)(M,m()("javascript",(0,a.format)(h.replaceAll(`${C}/`,""),{parser:"babel",plugins:[i()]})))}(0,v.default)(I,null)}catch(y){function b(){const e="SyntaxError"===y.name&&z.exec(y.message);if(e){let[t,n,s,o,a,l]=e;a&&(s=a,o=0),n=r().resolve(n),s=parseInt(s,10),o=parseInt(o,10)+1;const i=y.message.slice(t.length),d=(0,v.default)(I,{name:y.name,file:n,message:l,line:s,column:o,codeFrame:i});n===E&&S&&S(d)}else(0,v.default)(I,y),console.error(y)}j?t=setTimeout(b,1e3):b()}}return j?e=setTimeout(n,100):n(),()=>{clearTimeout(e),clearTimeout(t);try{c.vol.rmdirSync(C,{recursive:!0})}catch(e){}}}))}finally{(0,x.end)()}}),{t:z},B),J.Component=L()(B,J._)}}]);
//# sourceMappingURL=25.031865cb.js.map