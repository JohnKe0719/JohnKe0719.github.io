(function(){"use strict";var e={8307:function(e,n,t){var o=t(8935),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],s=t(1001),u={},a=(0,s.Z)(u,r,i,!1,null,null,null),c=a.exports,l=t(563);(0,l.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=t(2809),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("h1",[e._v("距離吃爆肉次方倒數:")]),t("p",{attrs:{id:"remain-time"}},[e._v(e._s(e.remainTime))])])},v=[],h={name:"HomeView",components:{},data(){return{remainTime:""}},created(){this.eatTimeCountDown()},methods:{eatTimeCountDown(){const e=new Date("2022-04-17 12:00:00 +08:00").getTime(),n=Date.now(),t=e-n;this.remainTime=this.convertMillisecond(t),setTimeout(this.eatTimeCountDown,1e3)},convertMillisecond(e){let n=Math.floor(e/1e3),t=Math.floor(n/60),o=Math.floor(t/60);const r=Math.floor(o/24);return n%=60,t=n>=30?t+1:t,t%=60,o%=24,`距離吃爆肉次方倒數: ${r}天 ${o}小時 ${t}分鐘 ${n}秒`}}},m=h,p=(0,s.Z)(m,d,v,!1,null,null,null),w=p.exports;o.Z.use(f.Z);const g=[{path:"/",name:"home",component:w}],b=new f.Z({mode:"history",base:"/",routes:g});var _=b,y=t(4665);o.Z.use(y.ZP);var O=new y.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});o.Z.config.productionTip=!1,new o.Z({router:_,store:O,render:e=>e(c)}).$mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(u=!1,i<s&&(s=i));if(u){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,s=o[0],u=o[1],a=o[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var l=a(t)}for(n&&n(o);c<s.length;c++)i=s[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkeat_time_count_down"]=self["webpackChunkeat_time_count_down"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(8307)}));o=t.O(o)})();
//# sourceMappingURL=app.fbd2b5f2.js.map