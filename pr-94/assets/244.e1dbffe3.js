(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[244],{"../components/repl/index.marko":(e,t,n)=>{"use strict";n.d(t,{Z:()=>se});var o=n("../../node_modules/marko/dist/runtime/vdom/index.js"),s=n("../../node_modules/@marko/tags-api-preview/dist/util/replace-assignments/index.mjs"),a=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-values/index-browser.mjs"),l=n("../../node_modules/@marko/tags-api-preview/dist/transform/native-tag-var/index-browser.mjs"),i=n("../../node_modules/@marko/tags-api-preview/dist/components/lifecycle/index.mjs"),r=n("../../node_modules/@marko/tags-api-preview/dist/components/_instance/index.marko"),d=n("../../node_modules/marko/dist/runtime/helpers/render-tag.js"),c=n.n(d),u=n("../../node_modules/marko/dist/runtime/helpers/class-value.js"),m=n.n(u),p=n("../../node_modules/@marko/tags-api-preview/dist/translate/track-rendering/index.mjs"),h=n("../../node_modules/marko/dist/runtime/components/renderer.js"),f=n.n(h),v=n("../../node_modules/marko/dist/runtime/components/registry.js"),g=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),y=n.n(g);const w="6o3N4O4f",b=(0,o.t)(w),k=b;(0,v.r)(w,(()=>b));const _={onCreate(){this.state={}}};b._=f()((function(e,t,n,o,d,u){(0,p.begin)();try{var h=o,f=d;const{selectedIndexChange:u,filesChange:p,files:v,selectedIndex:g}=e,y=p||(e=>h.setState("0",e)),w=p?v:"0"in f?f[0]:f[0]=v,b=u||(e=>h.setState("1",e)),k=u?g:"1"in f?f[1]:f[1]=g,_=w[k];t.be("div",{class:"file-tabs"},"0",o,null,1);{const e="2"in f?f[2]:f[2]=1,d=e=>h.setState("2",e);let u=0;for(const e of w){let o=u++;const d=`[${o}]`;c()(r.default,{renderBody:(t,n,u,p)=>{var h=n,f=u;const v="0"in p?p[0]:p[0]=!1,g=e=>u.setState("0",e),C=_===e,j=o>0;t.be("div",{class:m()(["file-tab",{selected:C}])},"2"+d,f,null,1,{onclick:h.d("click",(function(){C?(0,s.default)(g,!0):((0,s.default)(g,!1),(0,s.default)(b,o))}),!1)}),v&&C&&j?c()(r.default,{renderBody:(t,n,r,d)=>{var c=n,u=r;const m="0"in d?d[0]:d[0]=e.name,p=(0,a.cache)((0,a.cached)(r,[m,w.slice])||function(){const t={...e,name:m,path:e.path.replace(e.name,m)};(0,s.default)(y,[...w.slice(0,o),t,...w.slice(o+1)]),(0,s.default)(g,!1)}),h=(0,l.default)(r,"0");var f=e=>r.setState("0",e);t.e("input",{type:"text",size:m.length,value:m},"@0",u,0,0,{pa:[f&&"value"],onblur:c.d("blur",p,!1),onkeydown:c.d("keydown",(function(e){"Enter"===e.code&&p()}),!1),oninput:c.d("input",(e=>{f(e.target.value)}),!1)}),(0,i.default)(u,{onMount:(0,a.cache)((0,a.cached)(r,[m.indexOf])||function(){h().focus(),h().setSelectionRange(0,m.indexOf("."))})})}},t,h,"3"+d):t.t(e.name,f),j&&(t.be("button",{class:"file-close"},"4"+d,f,null,1,{onclick:h.d("click",(function(t){window.confirm(`Delete ${e.path}?`)&&(k>=o&&(0,s.default)(b,k-1),(0,s.default)(y,[...w.slice(0,o),...w.slice(o+1)])),t.stopPropagation()}),!1)}),t.t("×",f),t.ee()),t.ee()}},t,n,"1"+d)}t.be("button",{class:"new-file"},"5",o,null,1,{onclick:n.d("click",(function(){const t={name:`Component${e}.marko`,path:`/components/Component${e}.marko`,content:""},n=w.length;(0,s.default)(y,w.concat(t)),(0,s.default)(b,n),(0,s.default)(d,e+1)}),!1)}),t.t("+",o),t.ee()}t.ee()}finally{(0,p.end)()}}),{t:w},_),b.Component=y()(_,b._);var C=n("../../node_modules/marko/dist/runtime/helpers/self-iterator.js"),j=n.n(C),x=n("../../node_modules/marko/dist/runtime/helpers/dynamic-tag.js"),S=n.n(x);const L="QAUP5peK",T=(0,o.t)(L),B=T;(0,v.r)(L,(()=>T));const E={};T._=f()((function(e,t,n,o,s,a){(0,p.begin)();try{const{actions:s,body:a}=e;t.be("div",{class:"pane"},"0",o,null,1),t.be("div",{class:"pane-actions"},"1",o,null,1),S()(t,s.renderBody,null,null,null,null,n,"2"),t.ee(),t.e("div",{class:"pane-divider"},"3",o,0,1),t.be("div",{class:"pane-body"},"4",o,null,1),S()(t,a.renderBody,null,null,null,null,n,"5"),t.ee(),t.ee()}finally{(0,p.end)()}}),{t:L,i:!0},E),T.Component=y()(E,T._);var O=n("../../node_modules/marko/dist/runtime/vdom/helpers/v-element.js"),M=n.n(O),H=n("../../node_modules/@marko/tags-api-preview/dist/components/effect/index.mjs");const A="rRMAwOPg",I=(0,o.t)(A),q=I;(0,v.r)(A,(()=>I));const F={onCreate(){this.state={}}};I._=f()((function(e,t,n,o,s,i){(0,p.begin)();try{var r=o;const{value:s,valueChange:i,renderBody:d,class:c}=e,u=(0,l.default)(r,"0");t.be("select",{class:m()(c)},"@0",o,null,1,{onchange:n.d("change",(function(e){i(e.target.value)}),!1)}),S()(t,d,null,null,null,null,n,"0"),t.ee(),(0,H.default)(o,(0,a.cache)((0,a.cached)(r,[s,d,i])||function(){u().value=s}))}finally{(0,p.end)()}}),{t:A},F),I.Component=y()(F,I._);var U=n("../../node_modules/lz-string/libs/lz-string.js"),P=n("../../node_modules/@marko/tags-api-preview/dist/translate/native-tag-handlers/index-browser.mjs"),R=n("../../node_modules/marko/dist/runtime/vdom/helpers/attrs.js"),z=n.n(R);const N="ftG9dvL8",$=(0,o.t)(N),D=$,Y=M()("span",null,"1",null,1,0).t("Open in playground ");(0,v.r)(N,(()=>$));const V={};$._=f()((function(e,t,n,o,s,a){(0,p.begin)();try{const{files:s,...a}=e;var l={};t.be("a",z()((0,P.default)({...a,href:`/playground/#${(0,U.compressToEncodedURIComponent)(JSON.stringify(s))}`,target:"_top",class:"playground-link"},n,"a",l)),"0",o,null,4,{...l}),t.n(Y,o),t.t("↗",o),t.ee()}finally{(0,p.end)()}}),{t:N,i:!0},V),$.Component=y()(V,$._);var Z=n("../../node_modules/@marko/tags-api-preview/dist/components/return/index-browser.mjs");const J="dL815V5K",K=(0,o.t)(J),Q=K;(0,v.r)(J,(()=>K));const X={onCreate(){this.state={}}};K._=f()((function(e,t,n,o,l,i){(0,p.begin)();try{var r=o,d=l;const{value:t,fallback:n}=e,i="0"in d?d[0]:d[0]=window.matchMedia(t).matches,c=e=>r.setState("0",e);(0,H.default)(o,(0,a.cache)((0,a.cached)(r,[t])||function(){const e=window.matchMedia(t),n=()=>(0,s.default)(c,!!e.matches);return e.addEventListener("change",n),(0,s.default)(c,!!e.matches),()=>e.removeEventListener("change",n)})),e._return&&e._return({value:i},1)}finally{(0,p.end)()}}),{t:J},X),K.Component=y()(X,K._);const G="V970f081",W=(0,o.t)(G),ee=W;(0,v.r)(G,(()=>W));const te={onCreate(){this.state={}}};W._=f()((function(e,t,n,o,i,d){(0,p.begin)();try{var u=o,h=i;const{left:d,right:p}=e,y="0"in h?h[0]:h[0]=.5,w=e=>u.setState("0",e),b="1"in h?h[1]:h[1]=!1,k=e=>u.setState("1",e);var f=(0,Z.default)(u);c()(Q,{value:"(max-aspect-ratio: 1/1)",_return:f},t,n,"0");const{value:_}=f(),C=(0,l.default)(u,"0");t.be("div",{class:m()(["panes",b&&"resizing"])},"@0",o,null,1);var v={};t.be("div",z()((0,P.default)({...d,style:`flex-grow:${y}`},n,"div",v)),"1",o,null,4,{...v}),S()(t,d.renderBody,null,null,null,null,n,"2"),t.ee(),t.be("div",{class:"divider"},"3",o,null,1),t.e("div",{class:"inner"},"4",o,0,1,{onmousedown:n.d("mousedown",(function(e){(0,s.default)(k,!0),e.preventDefault(),e.stopPropagation()}),!1)}),t.ee();var g={};t.be("div",z()((0,P.default)({...p,style:"flex-grow:"+(1-y)},n,"div",g)),"5",o,null,4,{...g}),S()(t,p.renderBody,null,null,null,null,n,"6"),t.ee(),t.ee(),b&&c()(r.default,{renderBody:(e,t,n,o)=>{var l=n;(0,H.default)(l,(0,a.cache)((0,a.cached)(n,[_])||function(){const e=e=>{if(e.buttons||e.which){const t=C().getBoundingClientRect(),n=_?(e.clientY-t.top)/t.height:(e.clientX-t.left)/t.width;n>0&&(0,s.default)(w,Math.min(.8,Math.max(.2,n)))}else(0,s.default)(k,!1)};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)}))}},t,n,"7")}finally{(0,p.end)()}}),{t:G},te),W.Component=y()(te,W._);const ne="Y/QiYO60",oe=(0,o.t)(ne),se=oe,ae=M()("option",{value:"preview"},"8",null,1,0).t("App Preview"),le=M()("option",{value:"compiled-html"},"9",null,1,0).t("Compiled (HTML)"),ie=M()("option",{value:"compiled-vdom"},"10",null,1,0).t("Compiled (DOM)");(0,v.r)(ne,(()=>oe));const re={onCreate(){this.state={}}};oe._=f()((function(e,t,o,l,d,u){(0,p.begin)();try{var m=l,h=d;const{filesChange:u,getCompilerOptions:p,files:f}=e,v="0"in h?h[0]:h[0]=0,g=e=>m.setState("0",e),y="1"in h?h[1]:h[1]="preview",w=e=>m.setState("1",e),b="2"in h?h[2]:h[2]=!1,_=e=>m.setState("2",e),C=f[v];c()(ee,{left:{class:"editor-container",renderBody:e=>{c()(B,{actions:{renderBody:e=>{c()(k,{files:f,filesChange:u,selectedIndex:v,selectedIndexChange:g},e,o,"2")},[Symbol.iterator]:j()},body:{renderBody:e=>{c()(r.default,{renderBody:(e,t,o,l)=>{var d=t,m=o;const p="0"in l?l[0]:l[0]=null,h=e=>o.setState("0",e);p&&c()(r.default,{renderBody:(e,t,n,o)=>{var l=t;S()(e,p,(()=>({value:C.content,filename:C.path,valueChange:(0,a.cache)((0,a.cached)(n,[C,f.slice,v])||function(e){const t={...C,content:e};(0,s.default)(u,[...f.slice(0,v),t,...f.slice(v+1)]),(0,s.default)(_,!0)})})),null,null,null,l,"5")}},e,d,"4"),(0,i.default)(m,{onMount:(0,a.cache)((0,a.cached)(o,[])||(async()=>{const e=await Promise.all([n.e(103),n.e(410),n.e(109),n.e(888),n.e(176)]).then(n.bind(n,"../components/repl/components/editor.marko"));await e.loading,(0,s.default)(h,e)}))})}},e,o,"3")},[Symbol.iterator]:j()}},e,o,"1")},[Symbol.iterator]:j()},right:{renderBody:e=>{c()(B,{actions:{renderBody:e=>{c()(q,{value:y,valueChange:function(e){(0,s.default)(w,e),(0,s.default)(_,!1)},class:"preview-select",renderBody:e=>{e.n(ae,l),e.n(le,l),e.n(ie,l)}},e,o,"7"),c()(D,{files:f},e,o,"11")},[Symbol.iterator]:j()},body:{renderBody:e=>{c()(r.default,{renderBody:(e,t,o,l)=>{var r=t,d=o;const c="0"in l?l[0]:l[0]=null,u=e=>o.setState("0",e);S()(e,c,(()=>({type:y,files:f,selectedFile:C,getCompilerOptions:p,debounce:b})),null,null,null,r,"13"),(0,i.default)(d,{onMount:(0,a.cache)((0,a.cached)(o,[])||(async()=>{(0,s.default)(u,await Promise.all([n.e(103),n.e(641),n.e(410),n.e(170),n.e(888),n.e(790),n.e(25)]).then(n.bind(n,"../components/repl/components/preview.marko")))}))})}},e,o,"12")},[Symbol.iterator]:j()}},e,o,"6")},[Symbol.iterator]:j()}},t,o,"0")}finally{(0,p.end)()}}),{t:ne},re),oe.Component=y()(re,oe._)},"./playground/components/hash-value.marko":(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n("../../node_modules/marko/dist/runtime/vdom/index.js"),s=n("../../node_modules/lz-string/libs/lz-string.js"),a=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-values/index-browser.mjs"),l=n("../../node_modules/@marko/tags-api-preview/dist/util/replace-assignments/index.mjs"),i=n("../../node_modules/@marko/tags-api-preview/dist/components/lifecycle/index.mjs"),r=n("../../node_modules/@marko/tags-api-preview/dist/translate/track-rendering/index.mjs"),d=n("../../node_modules/marko/dist/runtime/components/renderer.js"),c=n.n(d),u=n("../../node_modules/marko/dist/runtime/components/registry.js"),m=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),p=n.n(m);const h="41NMzc7K",f=(0,o.t)(h),v=f;(0,u.r)(h,(()=>f));const g={onCreate(){this.state={}}};f._=c()((function(e,t,n,o,d,c){(0,r.begin)();try{var u=o,m=d;const{value:t}=e,n="0"in m?m[0]:m[0]=function(){try{return JSON.parse((0,s.decompressFromEncodedURIComponent)(window.location.hash.slice(1)))}catch(e){console.error(e)}}()||t,r=e=>u.setState("0",e);(0,i.default)(o,{onMount:(0,a.cache)((0,a.cached)(u,[])||function(){window.addEventListener("hashchange",this.handler=()=>{try{this.isUpdating?this.isUpdating=!1:(0,l.default)(r,JSON.parse((0,s.decompressFromEncodedURIComponent)(window.location.hash.slice(1))))}catch(e){console.error(e)}})}),onUpdate:(0,a.cache)((0,a.cached)(u,[n])||function(){this.isUpdating=!0,window.location.hash=(0,s.compressToEncodedURIComponent)(JSON.stringify(n))}),onDestroy:(0,a.cache)((0,a.cached)(u,[])||function(){window.removeEventListener("hashchange",this.handler)})}),e._return&&e._return({value:n,valueChange:r},1)}finally{(0,r.end)()}}),{t:h},g),f.Component=p()(g,f._)},"./playground/index.marko?browser-entry":(e,t,n)=>{"use strict";var o=n("../../node_modules/marko/dist/runtime/components/index.js"),s=(n("../components/app-layout/favicon.png"),n("../logos/marko.svg"),n("../components/app-layout/components/layout-header/component-browser.js")),a=n.n(s),l=n("../components/app-layout/components/layout-sidebar/components/version-switcher/component-browser.js"),i=n.n(l),r=n("../components/app-layout/components/layout-sidebar/component-browser.js"),d=n.n(r),c=(n("../components/app-footer/openjsf.svg"),n("../components/app-footer/osi.svg"),n("../components/app-footer/ebay.svg"),n("../logos/discord.svg"),n("../../node_modules/marko/dist/runtime/vdom/index.js")),u=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-values/index-browser.mjs"),m=n("../../node_modules/@marko/tags-api-preview/dist/components/return/index-browser.mjs"),p=n("./playground/components/hash-value.marko"),h=n("../../node_modules/marko/dist/runtime/helpers/render-tag.js"),f=n.n(h),v=n("../components/repl/index.marko"),g=n("../../node_modules/@marko/tags-api-preview/dist/translate/track-rendering/index.mjs"),y=n("../../node_modules/marko/dist/runtime/components/renderer.js"),w=n.n(y),b=n("../../node_modules/marko/dist/runtime/components/registry.js"),k=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),_=n.n(k);const C="/+j3nP/e",j=(0,c.t)(C);(0,b.r)(C,(()=>j));const x={onCreate(){this.state={}}};j._=w()((function(e,t,n,o,s,a){(0,g.begin)();try{var l=o,i=(0,m.default)(l);f()(p.Z,{value:(0,u.cache)((0,u.cached)(l,[])||[{name:"index.marko",path:"/components/index.marko",content:"<let/count=0/>\n<button onClick() { count++ }>\n  ${count}\n</button>"}]),_return:i},t,n,"0");const{valueChange:e,value:s}=i();f()(v.Z,{files:s,filesChange:e},t,n,"1")}finally{(0,g.end)()}}),{t:C},x),j.Component=_()(x,j._),(0,o.register)("OIKmBXjW",a()),(0,o.register)("07hv1F0+",i()),(0,o.register)("mFesaajv",d()),(0,o.init)()},"../components/app-layout/components/layout-header/component-browser.js":(e,t,n)=>{var o=n("../components/app-layout/components/layout-header/events.js"),s="headspace--fixed",a="headspace--hidden";e.exports={onMount(){o.emit("create",this);var e,t=0,n=this.getEl("header").offsetHeight,s=(this.getEl("banner")||{offsetHeight:0}).offsetHeight,a=(e=()=>{var e=window.pageYOffset;e<=s?this.reset():!this.paused&&e>n&&(Math.abs(e-t)>=3||e>t&&t<=n)&&(e>t?this.hide():this.fix()),t=e},()=>window.requestAnimationFrame(e));a(),window.addEventListener("scroll",a)},reset(){this.removeClass(s),this.removeClass(a),o.emit("reset")},fix(){this.addClass(s),this.removeClass(a),o.emit("fix")},hide(){this.addClass(a),o.emit("hide")},addClass(e){this.getEl("header").classList.add(e)},removeClass(e){this.getEl("header").classList.remove(e)},pause(){this.paused=!0},resume(){setTimeout((()=>window.requestAnimationFrame((()=>{this.paused=!1}))))},toggleMenu(){o.emit("toggle-menu")}}},"../components/app-layout/components/layout-header/events.js":(e,t,n)=>{var o=n("../../node_modules/events/events.js");e.exports=new o},"../components/app-layout/components/layout-sidebar/component-browser.js":(e,t,n)=>{var o,s=n("../components/app-layout/components/layout-header/events.js"),a=[].forEach,l=[].filter,i=[].slice;e.exports={onMount(){this.preventOverscroll(),this.listenForHeaderChanges(),this.initScrollSpy()},initScrollSpy(){var e=[1,2,3,4,5,6].map((e=>".doc-content h"+e)).join(","),t=i.call(document.querySelectorAll(e)),n=!1;t.length&&this.subscribeTo(window).on("scroll",(()=>{n||(n=!0,setTimeout((()=>{var e,o,s=window.innerHeight/3;t.map((t=>{var n=t.getBoundingClientRect().top;(null==o||n<s&&Math.abs(n)<Math.abs(o))&&(o=n,e=t)}));var i=e.id,r=this.el.querySelector('a[href="#'+i+'"]')||this.el.querySelector("a.selected"),d=r,c=d.nextSibling;for(c&&a.call(c.querySelectorAll("a[href^=\\#]"),(e=>e.classList.remove("selected")));d;){var u=d.closest("ul"),m=u&&l.call(u.querySelectorAll(":scope > li > a[href^=\\#]"),(e=>e!==d));m&&m.forEach((e=>e.classList.remove("selected"))),d.classList.add("selected"),d=u&&u.previousElementSibling}this.scrollAnchorIntoView(r),n=!1}),50))}))},listenForHeaderChanges(){a.call(this.el.querySelectorAll("a[href^=\\#]"),(e=>{this.subscribeTo(e).on("click",(()=>{o.hide(),o.pause(),o.resume(),this.hide()}))}));var e=i.call(this.el.querySelectorAll("a.selected")).pop();e&&this.subscribeTo(e).on("click",(e=>{window.scrollTo(0,0),o.reset(),e.preventDefault()})),this.subscribeTo(s).on("reset",(()=>{this.el.classList.remove("no-header"),this.el.classList.remove("fixed"),setTimeout((()=>this.el.classList.remove("transition")),0)})).on("fix",(()=>{this.el.classList.remove("no-header"),this.el.classList.add("fixed"),setTimeout((()=>this.el.classList.add("transition")),0)})).on("hide",(()=>{this.el.classList.add("no-header"),this.el.classList.add("fixed"),setTimeout((()=>this.el.classList.add("transition")),0)})).on("toggle-menu",(()=>{this.el.classList.contains("show")?(this.el.classList.remove("show"),document.body.style.overflow=""):this.el.classList.add("show")})).on("create",(e=>{o=e,window.pageYOffset>o.el.offsetHeight&&(this.el.classList.add("no-header"),this.el.classList.add("fixed"))}))},preventOverscroll(){var e=this.getEl("sidebar");this.subscribeTo(document.body).on("wheel",(t=>{var n=t.deltaY,o=e.scrollTop+n,s=e.scrollHeight-e.offsetHeight,a=o<=0,l=o>=s;(n<0&&a||n>0&&l)&&(t.target===e||e.contains(t.target))&&(a&&0!=e.scrollTop?e.scrollTop=0:l&&e.scrollTop!=s&&(e.scrollTop=s),t.preventDefault())}))},scrollAnchorIntoView(e){for(var t,n=this.getEl("sidebar"),o=(e.offsetTop,n.scrollTop),s=n.offsetHeight,a=o+s,l=e.closest("li");(t=l.parentNode.closest("ul"))&&t.offsetHeight<s;)l=t;var i=l.offsetTop,r=l.offsetHeight;i>o&&i+r<a||(n.scrollTop=i+r/2-s/2)},hide(){this.el.classList.remove("show"),document.body.style.overflow=""}}},"../components/app-layout/components/layout-sidebar/components/version-switcher/component-browser.js":e=>{e.exports={switchVersion(e){var t=e.target.value;"current"!==t&&(e.target.value="current",window.location.href=t)}}},"../components/app-footer/ebay.svg":(e,t,n)=>{"use strict";n.p},"../components/app-footer/openjsf.svg":(e,t,n)=>{"use strict";n.p},"../components/app-footer/osi.svg":(e,t,n)=>{"use strict";n.p},"../components/app-layout/favicon.png":(e,t,n)=>{"use strict";n.p},"../logos/discord.svg":(e,t,n)=>{"use strict";n.p},"../logos/marko.svg":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"91bc26e5.svg"}},e=>{e.O(0,[323,863],(()=>("./playground/index.marko?browser-entry",e(e.s="./playground/index.marko?browser-entry")))),e.O()}]);
//# sourceMappingURL=244.e1dbffe3.js.map