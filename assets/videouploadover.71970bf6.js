import{l as ke,E as B,_ as me}from"./base.4e5ddddf.js";import{E as Ee}from"./el-button.e782fc58.js";import{a0 as $,ar as Ie,b as pe,d as W,i as ue,a as ne,bz as ve,bA as Ce,bB as Se,H as ge,u as be,bg as ze,I as h,bC as Le,S as xe,c as y,W as ce,ay as we,a3 as ye,o as _,q as de,f,w as C,h as w,n as g,j as e,k as fe,M as Ne,E as L,B as Be,e as z,J as se,bD as $e,br as Fe,bE as Te,P as Oe,s as Ae,bF as Re,bG as De,K as Ve,g as Me,v as Ye,r as ae,T as He,bh as Pe,bH as Xe,l as _e,aE as We,$ as je,a8 as Ke,D as qe,t as Ge,bI as Je,ac as Ue,bJ as Ze,ae as Qe,af as et,ag as tt}from"./index.1a1a61e1.js";import{a as R}from"./index.e9a1c656.js";import{m as he,u as at}from"./index.8800db4f.js";import{E as A}from"./aria.66f3f71c.js";import{d as st}from"./debounce.81e7d05c.js";const nt=(n,c)=>{if(!$||!n||!c)return!1;const s=n.getBoundingClientRect();let d;return c instanceof Element?d=c.getBoundingClientRect():d={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},s.top<d.bottom&&s.bottom>d.top&&s.right>d.left&&s.left<d.right};var ot="Expected a function";function re(n,c,s){var d=!0,l=!0;if(typeof n!="function")throw new TypeError(ot);return Ie(s)&&(d="leading"in s?!!s.leading:d,l="trailing"in s?!!s.trailing:l),st(n,c,{leading:d,maxWait:c,trailing:l})}const lt=(n,c)=>{if(!$)return!1;const s={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(c)],d=ke(n,s);return["scroll","auto","overlay"].some(l=>d.includes(l))},it=(n,c)=>{if(!$)return;let s=n;for(;s;){if([window,document,document.documentElement].includes(s))return window;if(lt(s,c))return s;s=s.parentNode}return s},rt=pe({urlList:{type:W(Array),default:()=>he([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:W(String)}}),ut={close:()=>!0,switch:n=>ue(n),rotate:n=>ue(n)},ct=["src","crossorigin"],dt=ne({name:"ElImageViewer"}),ft=ne({...dt,props:rt,emits:ut,setup(n,{expose:c,emit:s}){var d;const l=n,p={CONTAIN:{name:"contain",icon:ve(Ce)},ORIGINAL:{name:"original",icon:ve(Se)}},{t:D}=ge(),i=be("image-viewer"),{nextZIndex:V}=ze(),x=h(),N=h([]),F=Le(),k=h(!0),v=h(l.initialIndex),T=xe(p.CONTAIN),r=h({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),M=h((d=l.zIndex)!=null?d:V()),oe=y(()=>{const{urlList:a}=l;return a.length<=1}),j=y(()=>v.value===0),K=y(()=>v.value===l.urlList.length-1),Y=y(()=>l.urlList[v.value]),le=y(()=>[i.e("btn"),i.e("prev"),i.is("disabled",!l.infinite&&j.value)]),q=y(()=>[i.e("btn"),i.e("next"),i.is("disabled",!l.infinite&&K.value)]),H=y(()=>{const{scale:a,deg:o,offsetX:u,offsetY:E,enableTransition:S}=r.value;let b=u/a,I=E/a;switch(o%360){case 90:case-270:[b,I]=[I,-b];break;case 180:case-180:[b,I]=[-b,-I];break;case 270:case-90:[b,I]=[-I,b];break}const O={transform:`scale(${a}) rotate(${o}deg) translate(${b}px, ${I}px)`,transition:S?"transform .3s":""};return T.value.name===p.CONTAIN.name&&(O.maxWidth=O.maxHeight="100%"),O});function P(){G(),s("close")}function ie(){const a=re(u=>{switch(u.code){case A.esc:l.closeOnPressEscape&&P();break;case A.space:ee();break;case A.left:te();break;case A.up:m("zoomIn");break;case A.right:t();break;case A.down:m("zoomOut");break}}),o=re(u=>{const E=u.deltaY||u.deltaX;m(E<0?"zoomIn":"zoomOut",{zoomRate:l.zoomRate,enableTransition:!1})});F.run(()=>{R(document,"keydown",a),R(document,"wheel",o)})}function G(){F.stop()}function J(){k.value=!1}function U(a){k.value=!1,a.target.alt=D("el.image.error")}function Z(a){if(k.value||a.button!==0||!x.value)return;r.value.enableTransition=!1;const{offsetX:o,offsetY:u}=r.value,E=a.pageX,S=a.pageY,b=re(O=>{r.value={...r.value,offsetX:o+O.pageX-E,offsetY:u+O.pageY-S}}),I=R(document,"mousemove",b);R(document,"mouseup",()=>{I()}),a.preventDefault()}function Q(){r.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ee(){if(k.value)return;const a=Xe(p),o=Object.values(p),u=T.value.name,S=(o.findIndex(b=>b.name===u)+1)%a.length;T.value=p[a[S]],Q()}function X(a){const o=l.urlList.length;v.value=(a+o)%o}function te(){j.value&&!l.infinite||X(v.value-1)}function t(){K.value&&!l.infinite||X(v.value+1)}function m(a,o={}){if(k.value)return;const{minScale:u,maxScale:E}=l,{zoomRate:S,rotateDeg:b,enableTransition:I}={zoomRate:l.zoomRate,rotateDeg:90,enableTransition:!0,...o};switch(a){case"zoomOut":r.value.scale>u&&(r.value.scale=Number.parseFloat((r.value.scale/S).toFixed(3)));break;case"zoomIn":r.value.scale<E&&(r.value.scale=Number.parseFloat((r.value.scale*S).toFixed(3)));break;case"clockwise":r.value.deg+=b,s("rotate",r.value.deg);break;case"anticlockwise":r.value.deg-=b,s("rotate",r.value.deg);break}r.value.enableTransition=I}return ce(Y,()=>{we(()=>{const a=N.value[0];a!=null&&a.complete||(k.value=!0)})}),ce(v,a=>{Q(),s("switch",a)}),ye(()=>{var a,o;ie(),(o=(a=x.value)==null?void 0:a.focus)==null||o.call(a)}),c({setActiveItem:X}),(a,o)=>(_(),de(Pe,{to:"body",disabled:!a.teleported},[f(He,{name:"viewer-fade",appear:""},{default:C(()=>[w("div",{ref_key:"wrapper",ref:x,tabindex:-1,class:g(e(i).e("wrapper")),style:fe({zIndex:M.value})},[w("div",{class:g(e(i).e("mask")),onClick:o[0]||(o[0]=Ne(u=>a.hideOnClickModal&&P(),["self"]))},null,2),L(" CLOSE "),w("span",{class:g([e(i).e("btn"),e(i).e("close")]),onClick:P},[f(e(B),null,{default:C(()=>[f(e(Be))]),_:1})],2),L(" ARROW "),e(oe)?L("v-if",!0):(_(),z(se,{key:0},[w("span",{class:g(e(le)),onClick:te},[f(e(B),null,{default:C(()=>[f(e($e))]),_:1})],2),w("span",{class:g(e(q)),onClick:t},[f(e(B),null,{default:C(()=>[f(e(Fe))]),_:1})],2)],64)),L(" ACTIONS "),w("div",{class:g([e(i).e("btn"),e(i).e("actions")])},[w("div",{class:g(e(i).e("actions__inner"))},[f(e(B),{onClick:o[1]||(o[1]=u=>m("zoomOut"))},{default:C(()=>[f(e(Te))]),_:1}),f(e(B),{onClick:o[2]||(o[2]=u=>m("zoomIn"))},{default:C(()=>[f(e(Oe))]),_:1}),w("i",{class:g(e(i).e("actions__divider"))},null,2),f(e(B),{onClick:ee},{default:C(()=>[(_(),de(Ae(e(T).icon)))]),_:1}),w("i",{class:g(e(i).e("actions__divider"))},null,2),f(e(B),{onClick:o[3]||(o[3]=u=>m("anticlockwise"))},{default:C(()=>[f(e(Re))]),_:1}),f(e(B),{onClick:o[4]||(o[4]=u=>m("clockwise"))},{default:C(()=>[f(e(De))]),_:1})],2)],2),L(" CANVAS "),w("div",{class:g(e(i).e("canvas"))},[(_(!0),z(se,null,Ve(a.urlList,(u,E)=>Me((_(),z("img",{ref_for:!0,ref:S=>N.value[E]=S,key:u,src:u,style:fe(e(H)),class:g(e(i).e("img")),crossorigin:a.crossorigin,onLoad:J,onError:U,onMousedown:Z},null,46,ct)),[[Ye,E===v.value]])),128))],2),ae(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var vt=me(ft,[["__file","image-viewer.vue"]]);const mt=_e(vt),pt=pe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:W([String,Object])},previewSrcList:{type:W(Array),default:()=>he([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:W(String)}}),gt={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>ue(n),close:()=>!0,show:()=>!0},bt=["src","loading","crossorigin"],wt={key:0},yt=ne({name:"ElImage",inheritAttrs:!1}),_t=ne({...yt,props:pt,emits:gt,setup(n,{emit:c}){const s=n;let d="";const{t:l}=ge(),p=be("image"),D=We(),i=at(),V=h(),x=h(!1),N=h(!0),F=h(!1),k=h(),v=h(),T=$&&"loading"in HTMLImageElement.prototype;let r,M;const oe=y(()=>[p.e("inner"),Y.value&&p.e("preview"),N.value&&p.is("loading")]),j=y(()=>D.style),K=y(()=>{const{fit:t}=s;return $&&t?{objectFit:t}:{}}),Y=y(()=>{const{previewSrcList:t}=s;return Array.isArray(t)&&t.length>0}),le=y(()=>{const{previewSrcList:t,initialIndex:m}=s;let a=m;return m>t.length-1&&(a=0),a}),q=y(()=>s.loading==="eager"?!1:!T&&s.loading==="lazy"||s.lazy),H=()=>{!$||(N.value=!0,x.value=!1,V.value=s.src)};function P(t){N.value=!1,x.value=!1,c("load",t)}function ie(t){N.value=!1,x.value=!0,c("error",t)}function G(){nt(k.value,v.value)&&(H(),Z())}const J=Je(G,200,!0);async function U(){var t;if(!$)return;await we();const{scrollContainer:m}=s;Ke(m)?v.value=m:qe(m)&&m!==""?v.value=(t=document.querySelector(m))!=null?t:void 0:k.value&&(v.value=it(k.value)),v.value&&(r=R(v,"scroll",J),setTimeout(()=>G(),100))}function Z(){!$||!v.value||!J||(r==null||r(),v.value=void 0)}function Q(t){if(!!t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function ee(){!Y.value||(M=R("wheel",Q,{passive:!1}),d=document.body.style.overflow,document.body.style.overflow="hidden",F.value=!0,c("show"))}function X(){M==null||M(),document.body.style.overflow=d,F.value=!1,c("close")}function te(t){c("switch",t)}return ce(()=>s.src,()=>{q.value?(N.value=!0,x.value=!1,Z(),U()):H()}),ye(()=>{q.value?U():H()}),(t,m)=>(_(),z("div",{ref_key:"container",ref:k,class:g([e(p).b(),t.$attrs.class]),style:fe(e(j))},[x.value?ae(t.$slots,"error",{key:0},()=>[w("div",{class:g(e(p).e("error"))},Ge(e(l)("el.image.error")),3)]):(_(),z(se,{key:1},[V.value!==void 0?(_(),z("img",je({key:0},e(i),{src:V.value,loading:t.loading,style:e(K),class:e(oe),crossorigin:t.crossorigin,onClick:ee,onLoad:P,onError:ie}),null,16,bt)):L("v-if",!0),N.value?(_(),z("div",{key:1,class:g(e(p).e("wrapper"))},[ae(t.$slots,"placeholder",{},()=>[w("div",{class:g(e(p).e("placeholder"))},null,2)])],2)):L("v-if",!0)],64)),e(Y)?(_(),z(se,{key:2},[F.value?(_(),de(e(mt),{key:0,"z-index":t.zIndex,"initial-index":e(le),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:X,onSwitch:te},{default:C(()=>[t.$slots.viewer?(_(),z("div",wt,[ae(t.$slots,"viewer")])):L("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):L("v-if",!0)],64)):L("v-if",!0)],6))}});var ht=me(_t,[["__file","image.vue"]]);const kt=_e(ht);const Et={name:"LeftRightSplit",methods:{startDetection(){alert("\u5F00\u59CB\u68C0\u6D4B\uFF01")}}};const It=n=>(et("data-v-bfd31e58"),n=n(),tt(),n),Ct={class:"container"},St={class:"left"},zt=It(()=>w("p",{class:"text"},"\u4E0A\u4F20\u7684\u89C6\u9891\u5982\u4E0B\uFF1A",-1)),Lt=Ze('<div class="right" data-v-bfd31e58><p class="result-text" data-v-bfd31e58>\u68C0\u6D4B\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="fake-video" data-v-bfd31e58>\u4F2A\u9020\u89C6\u9891</div><p class="evaluation-text" data-v-bfd31e58>\u8BC4\u4EF7\u6307\u6807\uFF1A</p><div class="metrics" data-v-bfd31e58><div class="metric" data-v-bfd31e58>\u53EF\u9760\u6027</div><div class="divider" data-v-bfd31e58></div><div class="metric" data-v-bfd31e58>\u8BEF\u5DEE</div><div class="divider" data-v-bfd31e58></div><div class="metric" data-v-bfd31e58>\u538B\u7F29\u6027</div><div class="divider" data-v-bfd31e58></div><div class="metric" data-v-bfd31e58>\u566A\u97F3</div><div class="divider" data-v-bfd31e58></div></div></div>',1);function xt(n,c,s,d,l,p){const D=kt,i=Ee;return _(),z("div",Ct,[w("div",St,[zt,f(D,{src:"src/assets/img/viewimg.png",alt:"Uploaded video thumbnail",class:"image-preview"}),f(i,{type:"primary",onClick:p.startDetection,class:"button"},{default:C(()=>[Qe("\u5F00\u59CB\u68C0\u6D4B")]),_:1},8,["onClick"])]),Lt])}const Rt=Ue(Et,[["render",xt],["__scopeId","data-v-bfd31e58"]]);export{Rt as default};
