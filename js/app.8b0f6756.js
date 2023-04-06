(()=>{"use strict";var e={5177:(e,t,n)=>{var a=n(8880),r=n(7106),o=n(3673);function l(e,t,n,a,r,l){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i)}const i=(0,o.aZ)({name:"App"});var s=n(4260);const c=(0,s.Z)(i,[["render",l]]),u=c;var m=n(4584),p=n(3340),d=n(8339),h=n(2323);const f={class:"text-xxs q-mt-xs"};function b(e,t,n,a,r,l){const i=(0,o.up)("q-btn"),s=(0,o.up)("q-toolbar"),c=(0,o.up)("q-header"),u=(0,o.up)("router-view"),m=(0,o.up)("q-page-container"),p=(0,o.up)("q-icon"),d=(0,o.up)("q-route-tab"),b=(0,o.up)("q-tabs"),g=(0,o.up)("q-footer"),v=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(v,{view:"lHh lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"text-white q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"justify-between q-px-xs"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"header_title",onClick:t[0]||(t[0]=(...e)=>l.goHome&&l.goHome(...e))},"Galaxy Attack"),(0,o._)("div",null,[(0,o.Wm)(i,{label:"登艦",rounded:"",class:"btn_header q-px-sm",icon:"img:statics/img/header/aircraft.png",to:{name:"login"}})])])),_:1})])),_:1}),((0,o.wg)(),(0,o.j4)(o.Ob,null,[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})],1024)),(0,o.Wm)(g,{class:"bg-footers text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{"no-caps":"","active-color":"yellow","indicator-color":"transparent",modelValue:r.tab,"onUpdate:modelValue":t[1]||(t[1]=e=>r.tab=e),class:"tabs_footer"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.navData,(e=>((0,o.wg)(),(0,o.j4)(d,{key:e.key,name:e.key,to:{name:e.key},onClick:l.checkAuth},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{name:`img:statics/img/menuIcon/${e.img}`,size:"50px",class:"footer-icon q-mt-sm"},null,8,["name"]),(0,o._)("p",f,(0,h.zw)(e.name),1)])),_:2},1032,["name","to","onClick"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})}n(5663);var g=n(741);const v={name:"MainLayout",data(){return{tab:"home",alert:!1,navData:[{key:"bulletin",name:"更新消息",img:"MenuIcon_Post.png"},{key:"rober",name:"道具",img:"MenuIcon_equipment.png"},{key:"trade",name:"航線",img:"MenuIcon_trade.png"},{key:"mine",name:"資訊",img:"MenuIcon_My.png"},{key:"partner",name:"艦隊公會",img:"MenuIcon_partner.png"}]}},computed:{...(0,g.rn)(["authorization"]),lang(){const e={"en-us":"EN","zh-tw":"繁中"};return e[this.$i18n.locale]||"語言"}},methods:{setLang(e){this.$i18n.locale=e,localStorage.setItem("locale",e)},checkAuth(){this.authorization||(this.alert=!0)},goHome(){this.$router.push({name:"home"})}}};var y=n(3066),w=n(3812),k=n(9570),_=n(4607),P=n(2652),x=n(1762),C=n(2496),j=n(2770),q=n(4554),O=n(4722),T=n(7518),A=n.n(T);const Z=(0,s.Z)(v,[["render",b]]),E=Z;A()(v,"components",{QLayout:y.Z,QHeader:w.Z,QToolbar:k.Z,QBtn:_.Z,QPageContainer:P.Z,QFooter:x.Z,QTabs:C.Z,QRouteTab:j.Z,QIcon:q.Z,QTab:O.Z});const M=[{path:"/",component:E,children:[{path:"",name:"home",component:()=>Promise.all([n.e(736),n.e(961)]).then(n.bind(n,6961))},{path:"login",name:"login",component:()=>Promise.all([n.e(736),n.e(453)]).then(n.bind(n,3453))},{path:"register",name:"register",component:()=>Promise.all([n.e(736),n.e(102)]).then(n.bind(n,5102))},{path:"bulletin",name:"bulletin",component:()=>Promise.all([n.e(736),n.e(126)]).then(n.bind(n,6126))},{path:"mall",name:"mall",component:()=>Promise.all([n.e(736),n.e(353)]).then(n.bind(n,353)),children:[{path:"rober",name:"rober",component:()=>Promise.all([n.e(736),n.e(211)]).then(n.bind(n,4211))},{path:"myRober",name:"myRober",component:()=>Promise.all([n.e(736),n.e(18)]).then(n.bind(n,9018))}],redirect:{name:"props"}},{path:"trade",name:"trade",component:()=>Promise.all([n.e(736),n.e(873)]).then(n.bind(n,1873)),children:[{path:"sale",name:"sale",component:()=>Promise.all([n.e(736),n.e(902)]).then(n.bind(n,902))},{path:"map",name:"map",component:()=>Promise.all([n.e(736),n.e(498)]).then(n.bind(n,1498))}],redirect:{name:"sale"}},{path:"partner",name:"partner",component:()=>Promise.all([n.e(736),n.e(758)]).then(n.bind(n,4758))},{path:"mine",name:"mine",component:()=>Promise.all([n.e(736),n.e(361)]).then(n.bind(n,361))}]},{path:"/:catchAll(.*)*",component:()=>n.e(341).then(n.bind(n,6341))}],Q=M,S=(0,p.BC)((function(){const e=d.PO,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:Q,history:e("/galaxy_attack/")});return t}));async function I(e,t){const a="function"===typeof m["default"]?await(0,m["default"])({}):m["default"],{storeKey:o}=await Promise.resolve().then(n.bind(n,4584)),l="function"===typeof S?await S({store:a}):S;a.$router=l;const i=e(u);return i.use(r.Z,t),{app:i,store:a,storeKey:o,router:l}}const L={config:{}},N="/galaxy_attack/",W=/\/\//,H=e=>(N+e).replace(W,"/");async function $({app:e,router:t,store:n,storeKey:a},r){let o=!1;const l=e=>{try{return H(t.resolve(e).href)}catch(n){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=l(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let u=0;!1===o&&u<r.length;u++)try{await r[u]({app:e,router:t,store:n,ssrContext:null,redirect:i,urlPath:s,publicPath:N})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&(e.use(t),e.use(n,a),e.mount("#q-app"))}I(a.ri,L).then((e=>Promise.all([Promise.resolve().then(n.bind(n,5474))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));$(e,n)}))))},5474:(e,t,n)=>{n.r(t),n.d(t,{api:()=>l,default:()=>i});var a=n(3340),r=n(52),o=n.n(r);const l=o().create({baseURL:"https://api.example.com"}),i=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=l}))},4584:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(3340),r=n(741);const o=(0,a.h)((function(){const e=(0,r.MT)({modules:{},strict:!1});return e}))}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,a,r,o)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,r,o]=e[u],i=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{18:"28ad3c4b",102:"6cffeae8",126:"5d7d45c9",211:"fb48639e",341:"41b70237",353:"60e54e5f",361:"817a374c",453:"48432b87",498:"bcab3836",758:"d59658bc",873:"47378819",902:"c816c22b",961:"55136636"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{18:"940f87d5",126:"6c0a6e98",143:"840b43a2",211:"5d61173a",353:"95a96b04",361:"e37a5571",498:"7619b1af",736:"9d84c1e6",758:"e67ce0b3",902:"54eb2816",961:"2ea67ece"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="galaxy_attack:";n.l=(a,r,o,l)=>{if(e[a])e[a].push(r);else{var i,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+o){i=m;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[r];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(n))),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/galaxy_attack/"})(),(()=>{var e=(e,t,n,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=o=>{if(r.onerror=r.onload=null,"load"===o.type)n();else{var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,r.parentNode.removeChild(r),a(s)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){r=l[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=a=>new Promise(((r,o)=>{var l=n.miniCssF(a),i=n.p+l;if(t(l,i))return r();e(a,i,r,o)})),r={143:0};n.f.miniCss=(e,t)=>{var n={18:1,126:1,211:1,353:1,361:1,498:1,758:1,902:1,961:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,a)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise(((n,a)=>r=e[t]=[n,a]));a.push(r[2]=o);var l=n.p+n.u(t),i=new Error,s=a=>{if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,r[1](i)}};n.l(l,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,[l,i,s]=a,c=0;if(l.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(t&&t(a);c<l.length;c++)o=l[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=globalThis["webpackChunkgalaxy_attack"]=globalThis["webpackChunkgalaxy_attack"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=n.O(void 0,[736],(()=>n(5177)));a=n.O(a)})();