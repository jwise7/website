(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[683],{"../components/repl/index.marko":(e,t,n)=>{"use strict";n.d(t,{Z:()=>ne});var o=n("../../node_modules/marko/dist/runtime/vdom/index.js"),s=n("../../node_modules/@marko/tags-api-preview/dist/util/replace-assignments/index.mjs"),a=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-function/index-browser.mjs"),l=n("../../node_modules/@marko/tags-api-preview/dist/transform/native-tag-var/index-browser.mjs"),i=n("../../node_modules/@marko/tags-api-preview/dist/components/lifecycle/index.mjs"),r=n("../../node_modules/@marko/tags-api-preview/dist/components/_instance/index.marko"),d=n("../../node_modules/marko/dist/runtime/helpers/render-tag.js"),c=n.n(d),u=n("../../node_modules/marko/dist/runtime/helpers/class-value.js"),m=n.n(u),p=n("../../node_modules/@marko/tags-api-preview/dist/translate/track-rendering/index.mjs"),f=n("../../node_modules/marko/dist/runtime/components/renderer.js"),h=n.n(f),v=n("../../node_modules/marko/dist/runtime/components/registry/index-browser.js"),g=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),b=n.n(g);const y="6o3N4O4f",w=(0,o.t)(y),k=w;(0,v.r)(y,(()=>w));const _={onCreate(){this.state={}}};w._=h()((function(e,t,n,o,d){(0,p.begin)();try{var u=o,f=d;const{selectedIndexChange:h,filesChange:v,files:g,selectedIndex:b}=e,y=v||(e=>u.setState("0",e)),w=v?g:"0"in f?f[0]:f[0]=g,k=h||(e=>u.setState("1",e)),_=h?b:"1"in f?f[1]:f[1]=b,x=w[_];t.be("div",{class:"file-tabs"},"0",o,null,1);{const e="2"in f?f[2]:f[2]=1,d=e=>u.setState("2",e);let p=0;for(const e of w){let o=p++;const d=`[${o}]`;c()(r.default,{renderBody:(t,n,u,p)=>{var f=n,h=u;const v="0"in p?p[0]:p[0]=!1,g=e=>u.setState("0",e),b=x===e,C=o>0;t.be("div",{class:m()(["file-tab",{selected:b}])},"2"+d,h,null,1,{onclick:f.d("click",(function(){b?(0,s.default)(g,!0):((0,s.default)(g,!1),(0,s.default)(k,o))}),!1)}),v&&b&&C?c()(r.default,{renderBody:(t,n,r,d)=>{var c=n,u=r;const m="0"in d?d[0]:d[0]=e.name,p=(0,a.cache)((0,a.cached)(r,[m,w])||function(){const t={...e,name:m,path:e.path.replace(e.name,m)};(0,s.default)(y,[...w.slice(0,o),t,...w.slice(o+1)]),(0,s.default)(g,!1)}),f=(0,l.default)(r,"0");var h=e=>r.setState("0",e);t.e("input",{type:"text",size:m.length,value:m},"@0",u,0,0,{pa:[h&&"value"],onblur:c.d("blur",p,!1),onkeydown:c.d("keydown",(function(e){"Enter"===e.code&&p()}),!1),oninput:c.d("input",(e=>{h(e.target.value)}),!1)}),(0,i.default)(u,{onMount:(0,a.cache)((0,a.cached)(r,[m])||function(){f().focus(),f().setSelectionRange(0,m.indexOf("."))})})}},t,f,"3"+d):t.t(e.name,h),C&&(t.be("button",{class:"file-close"},"4"+d,h,null,1,{onclick:f.d("click",(function(t){window.confirm(`Delete ${e.path}?`)&&(_>=o&&(0,s.default)(k,_-1),(0,s.default)(y,[...w.slice(0,o),...w.slice(o+1)])),t.stopPropagation()}),!1)}),t.t("×",h),t.ee()),t.ee()}},t,n,"1"+d)}t.be("button",{class:"new-file"},"5",o,null,1,{onclick:n.d("click",(function(){const t={name:`Component${e}.marko`,path:`/components/Component${e}.marko`,content:""},n=w.length;(0,s.default)(y,w.concat(t)),(0,s.default)(k,n),(0,s.default)(d,e+1)}),!1)}),t.t("+",o),t.ee()}t.ee()}finally{(0,p.end)()}}),{t:y},_),w.Component=b()(_,w._);var x=n("../../node_modules/marko/dist/runtime/helpers/dynamic-tag.js"),C=n.n(x);const j="QAUP5peK",S=(0,o.t)(j),L=S;(0,v.r)(j,(()=>S));const B={};S._=h()((function(e,t,n,o,s){(0,p.begin)();try{const{actions:s,body:a}=e;t.be("div",{class:"pane"},"0",o,null,1),t.be("div",{class:"pane-actions"},"1",o,null,1),C()(t,s.renderBody,null,null,null,null,n,"2"),t.ee(),t.e("div",{class:"pane-divider"},"3",o,0,1),t.be("div",{class:"pane-body"},"4",o,null,1),C()(t,a.renderBody,null,null,null,null,n,"5"),t.ee(),t.ee()}finally{(0,p.end)()}}),{t:j,i:!0},B),S.Component=b()(B,S._);var T=n("../../node_modules/marko/dist/runtime/vdom/helpers/v-element.js"),E=n.n(T),M=n("../../node_modules/@marko/tags-api-preview/dist/components/effect/index.mjs");const A="rRMAwOPg",O=(0,o.t)(A),H=O;(0,v.r)(A,(()=>O));const q={onCreate(){this.state={}}};O._=h()((function(e,t,n,o,s){(0,p.begin)();try{var i=o;const{value:s,valueChange:r,renderBody:d,class:c}=e,u=(0,l.default)(i,"0");t.be("select",{class:m()(c)},"@0",o,null,1,{onchange:n.d("change",(function(e){r(e.target.value)}),!1)}),C()(t,d,null,null,null,null,n,"0"),t.ee(),(0,M.default)(o,(0,a.cache)((0,a.cached)(i,[s,d,r])||function(){u().value=s}))}finally{(0,p.end)()}}),{t:A},q),O.Component=b()(q,O._);var I=n("../../node_modules/lz-string/libs/lz-string.js"),P=n("../../node_modules/@marko/tags-api-preview/dist/translate/native-tag-handlers/index-browser.mjs"),F=n("../../node_modules/marko/dist/runtime/vdom/helpers/attrs.js"),R=n.n(F);const $="ftG9dvL8",D=(0,o.t)($),V=D,Y=E()("span",null,"1",null,1,0).t("Open in playground ");(0,v.r)($,(()=>D));const z={};D._=h()((function(e,t,n,o,s){(0,p.begin)();try{const{files:s,...l}=e;var a={};t.be("a",R()((0,P.default)({...l,href:`/playground/#${(0,I.compressToEncodedURIComponent)(JSON.stringify(s))}`,target:"_top",class:"playground-link"},n,"a",a)),"0",o,null,4,{...a}),t.n(Y,o),t.t("↗",o),t.ee()}finally{(0,p.end)()}}),{t:$,i:!0},z),D.Component=b()(z,D._);var N=n("../../node_modules/@marko/tags-api-preview/dist/components/return/index-browser.mjs");const Z="dL815V5K",K=(0,o.t)(Z),Q=K;(0,v.r)(Z,(()=>K));const U={onCreate(){this.state={}}};K._=h()((function(e,t,n,o,l){(0,p.begin)();try{var i=o,r=l;const{default:t,fallback:n}=e,d="0"in r?r[0]:r[0]=window.matchMedia(t).matches,c=e=>i.setState("0",e);(0,M.default)(o,(0,a.cache)((0,a.cached)(i,[t])||function(){const e=window.matchMedia(t),n=()=>(0,s.default)(c,!!e.matches);return e.addEventListener("change",n),(0,s.default)(c,!!e.matches),()=>e.removeEventListener("change",n)})),e._return&&e._return({default:d},1)}finally{(0,p.end)()}}),{t:Z},U),K.Component=b()(U,K._);const X="V970f081",G=(0,o.t)(X),J=G;(0,v.r)(X,(()=>G));const W={onCreate(){this.state={}}};G._=h()((function(e,t,n,o,i){(0,p.begin)();try{var d=o,u=i;const{left:g,right:b}=e,y="0"in u?u[0]:u[0]=.5,w=e=>d.setState("0",e),k="1"in u?u[1]:u[1]=!1,_=e=>d.setState("1",e);var f=(0,N.default)(d);c()(Q,{default:"(max-aspect-ratio: 1/1)",_return:f},t,n,"0");const{default:x}=f(),j=(0,l.default)(d,"0");t.be("div",{class:m()(["panes",k&&"resizing"])},"@0",o,null,1);var h={};t.be("div",R()((0,P.default)({...g,style:`flex-grow:${y}`},n,"div",h)),"1",o,null,4,{...h}),C()(t,g.renderBody,null,null,null,null,n,"2"),t.ee(),t.be("div",{class:"divider"},"3",o,null,1),t.e("div",{class:"inner"},"4",o,0,1,{onmousedown:n.d("mousedown",(function(e){(0,s.default)(_,!0),e.preventDefault(),e.stopPropagation()}),!1)}),t.ee();var v={};t.be("div",R()((0,P.default)({...b,style:"flex-grow:"+(1-y)},n,"div",v)),"5",o,null,4,{...v}),C()(t,b.renderBody,null,null,null,null,n,"6"),t.ee(),t.ee(),k&&c()(r.default,{renderBody:(e,t,n,o)=>{var l=n;(0,M.default)(l,(0,a.cache)((0,a.cached)(n,[x])||function(){const e=e=>{if(e.buttons||e.which){const t=j().getBoundingClientRect(),n=x?(e.clientY-t.top)/t.height:(e.clientX-t.left)/t.width;n>0&&(0,s.default)(w,Math.min(.8,Math.max(.2,n)))}else(0,s.default)(_,!1)};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)}))}},t,n,"7")}finally{(0,p.end)()}}),{t:X},W),G.Component=b()(W,G._);const ee="Y/QiYO60",te=(0,o.t)(ee),ne=te,oe=E()("option",{value:"preview"},"7",null,1,0).t("App Preview"),se=E()("option",{value:"compiled-html"},"8",null,1,0).t("Compiled (HTML)"),ae=E()("option",{value:"compiled-vdom"},"9",null,1,0).t("Compiled (DOM)");(0,v.r)(ee,(()=>te));const le={onCreate(){this.state={}}};te._=h()((function(e,t,o,l,d){(0,p.begin)();try{var u=l,m=d;const{filesChange:f,getTranslator:h,files:v}=e,g="0"in m?m[0]:m[0]=0,b=e=>u.setState("0",e),y="1"in m?m[1]:m[1]="preview",w=e=>u.setState("1",e),_="2"in m?m[2]:m[2]=!1,x=e=>u.setState("2",e),j=v[g];c()(J,{left:{class:"editor-container",renderBody:e=>{c()(L,{actions:{renderBody:e=>{c()(k,{files:v,filesChange:f,selectedIndex:g,selectedIndexChange:b},e,o,"2")}},body:{renderBody:e=>{c()(r.default,{renderBody:(e,t,o,l)=>{var r=t,d=o;const c="0"in l?l[0]:l[0]=null,u=e=>o.setState("0",e);C()(e,c,(()=>({value:j.content,filename:j.path,valueChange:(0,a.cache)((0,a.cached)(o,[j,v,g])||function(e){const t={...j,content:e};(0,s.default)(f,[...v.slice(0,g),t,...v.slice(g+1)]),(0,s.default)(x,!0)})})),null,null,null,r,"4"),(0,i.default)(d,{onMount:async()=>{const e=await Promise.all([n.e(103),n.e(400),n.e(109),n.e(888),n.e(176)]).then(n.bind(n,"../components/repl/components/editor.marko"));await e.loading,(0,s.default)(u,e)}})}},e,o,"3")}}},e,o,"1")}},right:{renderBody:e=>{c()(L,{actions:{renderBody:e=>{c()(H,{value:y,valueChange:function(e){(0,s.default)(w,e),(0,s.default)(x,!1)},class:"preview-select",renderBody:e=>{e.n(oe,l),e.n(se,l),e.n(ae,l)}},e,o,"6"),c()(V,{files:v},e,o,"10")}},body:{renderBody:e=>{c()(r.default,{renderBody:(e,t,o,a)=>{var l=t,r=o;const d="0"in a?a[0]:a[0]=null,c=e=>o.setState("0",e);C()(e,d,(()=>({type:y,files:v,selectedFile:j,getTranslator:h,debounce:_})),null,null,null,l,"12"),(0,i.default)(r,{onMount:async()=>{(0,s.default)(c,await Promise.all([n.e(103),n.e(641),n.e(400),n.e(648),n.e(888),n.e(546),n.e(25)]).then(n.bind(n,"../components/repl/components/preview.marko")))}})}},e,o,"11")}}},e,o,"5")}}},t,o,"0")}finally{(0,p.end)()}}),{t:ee},le),te.Component=b()(le,te._)},"./tutorials/[name]/index.marko?browser-entry":(e,t,n)=>{"use strict";var o=n("../../node_modules/marko/dist/runtime/components/index.js"),s=(n("../components/app-layout/favicon.png"),n("../logos/marko.svg"),n("../components/app-layout/components/layout-header/component-browser.js")),a=n.n(s),l=n("../components/app-layout/components/layout-sidebar/components/version-switcher/component-browser.js"),i=n.n(l),r=n("../components/app-layout/components/layout-sidebar/component-browser.js"),d=n.n(r),c=(n("../components/app-footer/openjsf.svg"),n("../components/app-footer/osi.svg"),n("../components/app-footer/ebay.svg"),n("../logos/discord.svg"),n("../../node_modules/marko/dist/runtime/vdom/index.js")),u=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-function/index-browser.mjs"),m=n("../../node_modules/@marko/tags-api-preview/dist/util/replace-assignments/index.mjs"),p=n("../components/repl/index.marko"),f=n("../../node_modules/marko/dist/runtime/helpers/render-tag.js"),h=n.n(f),v=n("../../node_modules/@marko/tags-api-preview/dist/translate/track-rendering/index.mjs"),g=n("../../node_modules/marko/dist/runtime/components/renderer.js"),b=n.n(g),y=n("../../node_modules/marko/dist/runtime/components/registry/index-browser.js"),w=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),k=n.n(w);const _="Rs+7ZDSn",x=(0,c.t)(_);(0,y.r)(_,(()=>x));const C={onCreate(){this.state={}}};x._=b()((function(e,t,n,o,s){(0,v.begin)();try{var a=o,l=s;const{tutorial:i}=e,r="0"in l?l[0]:l[0]=0,d=e=>a.setState("0",e),c=i.steps.length,f=i.steps[r],g=(0,u.cache)((0,u.cached)(a,[i])||function(e){(0,m.default)(d,e),(0,m.default)(y,i.steps[e].before)}),b="1"in l?l[1]:l[1]=f.before,y=e=>a.setState("1",e);t.be("div",{class:"tutorial-container"},"0",o,null,1),t.be("div",{class:"tutorial-content"},"1",o,null,1),t.be("header",{class:"tutorial-header"},"2",o,null,1),t.be("span",null,"3",o,null,0),t.t(i.title,o),t.ee(),t.be("span",null,"4",o,null,0),t.t("Step ",o),t.t(r+1,o),t.t("/",o),t.t(c,o),t.ee(),t.be("span",null,"5",o,null,0),t.be("button",{disabled:0===r},"6",o,null,0,{onclick:n.d("click",(function(){g(r-1)}),!1)}),t.t("Prev",o),t.ee(),t.be("button",{disabled:r+1===c},"7",o,null,0,{onclick:n.d("click",(function(){g(r+1)}),!1)}),t.t("Next",o),t.ee(),t.ee(),t.ee(),t.be("div",{class:"tutorial-body"},"8",o,null,1),t.be("h1",null,"9",o,null,0),t.t(f.title,o),t.ee(),t.h(f.content,o),t.ee(),t.be("button",{hidden:!f.after},"10",o,null,0,{onclick:n.d("click",(function(){(0,m.default)(y,f.after)}),!1)}),t.t("Solve",o),t.ee(),t.be("button",{disabled:b===f.before},"11",o,null,0,{onclick:n.d("click",(function(){(0,m.default)(y,f.before)}),!1)}),t.t("Reset",o),t.ee(),t.ee(),h()(p.Z,{files:b,filesChange:y},t,n,"12"),t.ee()}finally{(0,v.end)()}}),{t:_},C),x.Component=k()(C,x._),(0,o.register)("OIKmBXjW",a()),(0,o.register)("07hv1F0+",i()),(0,o.register)("mFesaajv",d()),(0,o.init)()},"../components/app-layout/components/layout-header/component-browser.js":(e,t,n)=>{var o=n("../components/app-layout/components/layout-header/events.js"),s="headspace--fixed",a="headspace--hidden";e.exports={onMount(){o.emit("create",this);var e,t=0,n=this.getEl("header").offsetHeight,s=(this.getEl("banner")||{offsetHeight:0}).offsetHeight,a=(e=()=>{var e=window.pageYOffset;e<=s?this.reset():!this.paused&&e>n&&(Math.abs(e-t)>=3||e>t&&t<=n)&&(e>t?this.hide():this.fix()),t=e},()=>window.requestAnimationFrame(e));a(),window.addEventListener("scroll",a,{passive:!0})},reset(){this.removeClass(s),this.removeClass(a),o.emit("reset")},fix(){this.addClass(s),this.removeClass(a),o.emit("fix")},hide(){this.addClass(a),o.emit("hide")},addClass(e){this.getEl("header").classList.add(e)},removeClass(e){this.getEl("header").classList.remove(e)},pause(){this.paused=!0},resume(){setTimeout((()=>window.requestAnimationFrame((()=>{this.paused=!1}))))},toggleMenu(){o.emit("toggle-menu")}}},"../components/app-layout/components/layout-header/events.js":(e,t,n)=>{var o=n("../../node_modules/events/events.js");e.exports=new o},"../components/app-layout/components/layout-sidebar/component-browser.js":(e,t,n)=>{var o,s=n("../components/app-layout/components/layout-header/events.js"),{filter:a}=[];e.exports={onMount(){this.listenForHeaderChanges(),this.initScrollSpy()},initScrollSpy(){var e=[...document.querySelectorAll(".doc-content .heading")],t=!1;e.length&&this.subscribeTo(window).on("scroll",(()=>{t||(t=!0,setTimeout((()=>{var n,o,s=window.innerHeight/3;e.map((e=>{var{top:t}=e.getBoundingClientRect();(null==o||t<s&&Math.abs(t)<Math.abs(o))&&(o=t,n=e)}));var l=n.id,i=this.el.querySelector('a[href="#'+l+'"]')||this.el.querySelector("a.selected"),r=i,d=r.nextSibling;for(d&&d.querySelectorAll("a[href^='#']").forEach((e=>e.classList.remove("selected")));r;){var c=r.closest("ol"),u=c&&a.call(c.querySelectorAll(":scope > li > a[href^='#']"),(e=>e!==r));u&&u.forEach((e=>e.classList.remove("selected"))),r.classList.add("selected"),r=c&&c.previousElementSibling}this.scrollAnchorIntoView(i),t=!1}),50))}))},listenForHeaderChanges(){this.el.querySelectorAll("a[href^='#']").forEach((e=>{this.subscribeTo(e).on("click",(()=>{o.hide(),o.pause(),o.resume(),this.hide()}))}));var e=[...this.el.querySelectorAll("a.selected")].pop();e&&this.subscribeTo(e).on("click",(e=>{window.scrollTo(0,0),o.reset(),e.preventDefault()})),this.subscribeTo(s).on("reset",(()=>{this.el.classList.remove("no-header","fixed"),setTimeout((()=>this.el.classList.remove("transition")),0)})).on("fix",(()=>{this.el.classList.remove("no-header"),this.el.classList.add("fixed"),setTimeout((()=>this.el.classList.add("transition")),0)})).on("hide",(()=>{this.el.classList.add("no-header","fixed"),setTimeout((()=>this.el.classList.add("transition")),0)})).on("toggle-menu",(()=>{this.el.classList.toggle("show")})).on("create",(e=>{window.pageYOffset>e.el.offsetHeight&&this.el.classList.add("no-header","fixed")}))},scrollAnchorIntoView(e){for(var t,n=this.getEl("sidebar"),o=n.scrollTop,s=n.offsetHeight,a=o+s,l=e.closest("li");(t=l.parentNode.closest("ol"))&&t.offsetHeight<s;)l=t;var i=l.offsetTop,r=l.offsetHeight;i>o&&i+r<a||(n.scrollTop=i+r/2-s/2)},hide(){this.el.classList.remove("show")}}},"../components/app-layout/components/layout-sidebar/components/version-switcher/component-browser.js":e=>{e.exports={switchVersion(e){var t=e.target.value;"current"!==t&&(e.target.value="current",window.location.href=t)}}},"../components/app-footer/ebay.svg":(e,t,n)=>{"use strict";n.p},"../components/app-footer/openjsf.svg":(e,t,n)=>{"use strict";n.p},"../components/app-footer/osi.svg":(e,t,n)=>{"use strict";n.p},"../components/app-layout/favicon.png":(e,t,n)=>{"use strict";n.p},"../logos/discord.svg":(e,t,n)=>{"use strict";n.p},"../logos/marko.svg":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"91bc26e5.svg"}},e=>{e.O(0,[323,519],(()=>("./tutorials/[name]/index.marko?browser-entry",e(e.s="./tutorials/[name]/index.marko?browser-entry")))),e.O()}]);
//# sourceMappingURL=683.5a9995c5.js.map