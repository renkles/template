(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)i=o[u],n[i]&&m.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);g&&g(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},n={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-40a14f00":"2949e582","chunk-42082822":"300a62d5","chunk-d0ed50b8":"7b2d1bd8"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-40a14f00":1,"chunk-42082822":1,"chunk-d0ed50b8":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise(function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-40a14f00":"673512eb","chunk-42082822":"13852613","chunk-d0ed50b8":"83bd5cb5"}[t]+".css",i=c.p+s,n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===s||l===i))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],l=o.getAttribute("data-href");if(l===s||l===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||i,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.request=s,a(n)},m.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(m)}).then(function(){i[t]=0}));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=r);var l,u=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,c.nc&&m.setAttribute("nonce",c.nc),m.src=o(t),l=function(e){m.onerror=m.onload=null,clearTimeout(g);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");r.type=s,r.request=i,a[1](r)}n[t]=void 0}};var g=setTimeout(function(){l({type:"timeout",target:m})},12e4);m.onerror=m.onload=l,u.appendChild(m)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var g=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"136e":function(t,e,a){"use strict";var s=a("ebf1"),i=a.n(s);i.a},"1add":function(t,e,a){"use strict";var s=a("69e3"),i=a.n(s);i.a},"2ac0":function(t,e,a){"use strict";var s=a("2e8b"),i=a.n(s);i.a},"2e8b":function(t,e,a){},3929:function(t,e,a){"use strict";var s=a("4b87"),i=a.n(s);i.a},"454d":function(t,e,a){"use strict";var s=a("69c2"),i=a.n(s);i.a},"4b87":function(t,e,a){},"534f":function(t,e,a){"use strict";var s=a("7c69"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("loading",{class:{loadingEnd:t.isEnd,loadingHide:t.isHide},attrs:{progress:t.loaded}}),a("mainMenu",{class:{open:t.menuShowing}}),a("mainNav",{attrs:{isShowing:t.menuShowing}}),a("keep-alive",[a("router-view")],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading"},[t._m(0),a("div",{staticClass:"bar"},[a("div",{staticClass:"progress",style:{width:t.barWidth}})])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base"},[a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"})])}],c={name:"loading",props:["progress"],data:function(){return{barWidth:"0"}},watch:{progress:function(t){this.barWidth=100*t+"%"}}},l=c,u=(a("a594"),a("2877")),m=Object(u["a"])(l,r,o,!1,null,"f790ecc2",null);m.options.__file="loading.vue";var g=m.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainMenu",on:{click:t.changeMenu}},[a("span",{staticClass:"menu_line"})])},v=[],f={name:"mainMenu",methods:{changeMenu:function(){this.$store.commit("changeRouters")}}},h=f,p=(a("136e"),Object(u["a"])(h,d,v,!1,null,"3f490a46",null));p.options.__file="mainMenu.vue";var b=p.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav_box",class:{active:t.showMenu}},[a("div",{staticClass:"mainNav",class:{active:t.showNav}},[a("ul",{staticClass:"nav_block",on:{click:t.changeRouter}},[a("li",{staticClass:"nav_center"},[a("div",{staticClass:"welcome_img",style:{backgroundImage:t.images[0]}}),a("p",{staticClass:"welcome_text"},[t._v("welcome !")])]),a("li",{staticClass:"nav_item"},[a("router-link",{staticClass:"link_image",style:{backgroundImage:t.images[1]},attrs:{to:"/"}})],1),a("li",{staticClass:"nav_item"},[a("router-link",{staticClass:"link_image",style:{backgroundImage:t.images[2]},attrs:{to:"/helloWorld1"}})],1),a("li",{staticClass:"nav_item"},[a("router-link",{staticClass:"link_image",style:{backgroundImage:t.images[3]},attrs:{to:"/helloWorld2"}})],1),a("li",{staticClass:"nav_item"},[a("router-link",{staticClass:"link_image",style:{backgroundImage:t.images[4]},attrs:{to:"/helloWorld3"}})],1)])]),a("routerLoading",{class:{hide:t.hideRouterLoading}})],1)},C=[],y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"router_loading"},[a("div",{staticClass:"spinner"},[a("div",{staticClass:"rect"}),a("div",{staticClass:"rect"}),a("div",{staticClass:"rect"}),a("div",{staticClass:"rect"}),a("div",{staticClass:"rect"})])])}],w={name:"routerLoading"},S=w,x=(a("8c5f"),Object(u["a"])(S,y,k,!1,null,"22d9493a",null));x.options.__file="routerLoading.vue";var I=x.exports,j={name:"mainNav",components:{routerLoading:I},data:function(){return{images:["url('./images/welcome.jpg')","url('./images/resume.png')","url('./images/hello.png')","url('./images/resume.png')","url('./images/resume.png')"],loadImages:["./images/welcome.jpg","./images/resume.png","./images/hello.png","./images/resume.png","./images/resume.png"],showMenu:!1,showNav:!1,hideRouterLoading:!1}},props:["isShowing"],watch:{isShowing:function(t){this.showMenu=t,t&&this.hideLoading()}},methods:{changeRouter:function(t){"A"===t.target.nodeName&&this.$store.commit("changeRouters")},hideLoading:function(){for(var t=0,e=this.loadImages.length,a=this,s=0,i=[];s<e;s++)i[s]=new Image,i[s].src=this.loadImages[s],i[s].onload=function(){t++,t===e&&(a.hideRouterLoading=!0,a.showNav=!0)}}}},E=j,$=(a("c72a"),Object(u["a"])(E,_,C,!1,null,"ad128092",null));$.options.__file="mainNav.vue";var N=$.exports,z={components:{mainMenu:b,mainNav:N,loading:g},data:function(){return{loaded:0,images:["./images/resume/4.jpg","./images/resume/css.png","./images/resume/html.png","./images/resume/javascript.png","./images/resume/php.png","./images/resume/vue.png","./images/resume/js-1.png","./images/resume/js-2.png","./images/resume/weChart.jpg","./images/resume/qq.jpg","./images/resume/bg-1.jpg","./images/resume/bg-2.jpg","./images/resume/bg-3.jpg","./images/resume/bg-4.jpg","./images/resume/bg-5.jpg"],isHide:!1,isEnd:!1,loadingTime:800}},computed:{menuShowing:function(){return this.$store.state.menuShowing}},mounted:function(){this.getProgress(),document.onreadystatechange=this.hideLoading},methods:{hideLoading:function(){if("complete"===document.readyState){var t=this;this.isEnd=!0,setTimeout(function(){t.isHide=!0},this.loadingTime)}},getProgress:function(){for(var t=1,e=this.images.length,a=this,s=0,i=[];s<e;s++)i[s]=new Image,i[s].src=this.images[s],i[s].onload=function(){t++,a.loaded=(t/e).toFixed(2)}}}},W=z,O=(a("7c55"),Object(u["a"])(W,i,n,!1,null,null,null));O.options.__file="App.vue";var T=O.exports,L=a("8c4f"),M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error"},[a("p",{staticClass:"text"},[t._v("抱歉，网络出现异常！")])])}],P={name:"routerError"},B=P,A=(a("c014"),Object(u["a"])(B,M,q,!1,null,"80b901ea",null));A.options.__file="routerError.vue";var H=A.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[a("profile-nav"),a("nav-bar"),a("div",{staticClass:"container",style:t.move},[a("main-information"),a("about-me",{class:{active:2===t.pageNum}}),a("my-skill",{class:{active:3===t.pageNum}}),a("my-works"),a("contact",{class:{active:5===t.pageNum}})],1)],1)},R=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("ul",{staticClass:"nav_bar",on:{click:t.changePage}},[a("li",{staticClass:"nav_item",class:{active:1===t.pageNum},attrs:{"data-id":"1"}},[t._m(0)]),a("li",{staticClass:"nav_item",class:{active:2===t.pageNum},attrs:{"data-id":"2"}},[t._m(1)]),a("li",{staticClass:"nav_item",class:{active:3===t.pageNum},attrs:{"data-id":"3"}},[t._m(2)]),a("li",{staticClass:"nav_item",class:{active:4===t.pageNum},attrs:{"data-id":"4"}},[t._m(3)]),a("li",{staticClass:"nav_item",class:{active:5===t.pageNum},attrs:{"data-id":"5"}},[t._m(4)])])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"icon"},[t._v("")])])}],X={name:"navBar",computed:{pageNum:function(){return this.$store.state.pageNum},isScrolling:function(){return this.$store.state.isScrolling}},methods:{changePage:function(t){if("LI"===t.target.nodeName){var e=parseInt(t.target.dataset.id);e===this.pageNum||this.isScrolling||this.$store.commit("changePages",e)}}}},J=X,Q=(a("ba06"),Object(u["a"])(J,D,F,!1,null,"0df1c92b",null));Q.options.__file="navBar.vue";var G=Q.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile_nav"},[a("div",{staticClass:"resume_logo"},[a("div",{staticClass:"logo_square",style:{backgroundImage:t.headImage}}),t._m(0)])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"logo_text"},[a("b",{staticClass:"font"},[t._v("R")]),t._v("esume")])}],V={name:"profileNav",data:function(){return{headImage:"url('./images/resume/4.jpg')"}}},Z=V,tt=(a("534f"),Object(u["a"])(Z,K,U,!1,null,"02984642",null));tt.options.__file="profileNav.vue";var et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("bgImg",{attrs:{bgImg:t.bgImage}}),a("div",{staticClass:"square_before"},[a("div"),a("div"),a("div"),a("div",{attrs:{"data-background":"transform"},on:{mouseenter:t.transformStart,mouseleave:t.transformEnd}},[a("i",{staticClass:"icon"},[t._v("")]),a("p",{staticClass:"cube",style:{backgroundImage:t.cubeImage[0]}})]),a("div",{attrs:{"data-background":"image"}},[a("img",{attrs:{src:t.personalImage[0]}})]),a("div"),a("div",{attrs:{"data-background":"transform"},on:{mouseenter:t.transformStart,mouseleave:t.transformEnd}},[a("i",{staticClass:"icon"},[t._v("")]),a("p",{staticClass:"cube",style:{backgroundImage:t.cubeImage[1]}})]),a("div"),a("div"),a("div",{attrs:{"data-background":"image"}},[a("img",{attrs:{src:t.personalImage[1]}})]),a("div",{attrs:{"data-background":"transform"},on:{mouseenter:t.transformStart,mouseleave:t.transformEnd}},[a("i",{staticClass:"icon"},[t._v("")]),a("p",{staticClass:"cube",style:{backgroundImage:t.cubeImage[2]}})]),a("div"),a("div",{attrs:{"data-background":"image"}},[a("img",{attrs:{src:t.personalImage[2]}})]),a("div",{attrs:{"data-background":"transform"},on:{mouseenter:t.transformStart,mouseleave:t.transformEnd}},[a("i",{staticClass:"icon"},[t._v("")]),a("p",{staticClass:"cube",style:{backgroundImage:t.cubeImage[3]}})]),a("div"),a("div"),a("div"),a("div",{attrs:{"data-background":"transform"},on:{mouseenter:t.transformStart,mouseleave:t.transformEnd}},[a("i",{staticClass:"icon"},[t._v("")]),a("p",{staticClass:"cube",style:{backgroundImage:t.cubeImage[4]}})])]),t._m(0),a("div",{staticClass:"square_sm"},[a("div"),a("div"),a("div",{attrs:{"data-background":"scale"}},[a("i",{staticClass:"sm_icon"},[t._v("")]),a("p",{staticClass:"scale_color",style:{backgroundColor:t.iconColor[0]}})]),a("div"),a("div"),a("div",{attrs:{"data-background":"scale"}},[a("i",{staticClass:"sm_icon"},[t._v("")]),a("p",{staticClass:"scale_color",style:{backgroundColor:t.iconColor[1]}})]),a("div"),a("div",{attrs:{"data-background":"scale"}},[a("i",{staticClass:"sm_icon"},[t._v("")]),a("p",{staticClass:"scale_color",style:{backgroundColor:t.iconColor[2]}})]),a("div",{attrs:{"data-background":"scale"}},[a("i",{staticClass:"sm_icon"},[t._v("")]),a("p",{staticClass:"scale_color",style:{backgroundColor:t.iconColor[3]}})]),a("div",{attrs:{"data-background":"scale"}},[a("i",{staticClass:"sm_icon"},[t._v("")]),a("p",{staticClass:"scale_color",style:{backgroundColor:t.iconColor[4]}})]),a("div",{attrs:{"data-background":"scale"}},[a("i",{staticClass:"sm_icon"},[t._v("")]),a("p",{staticClass:"scale_color",style:{backgroundColor:t.iconColor[5]}})])])],1)},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"square_after"},[a("div",{staticClass:"title"},[a("span",[t._v("just")]),a("div",[t._v("Profile")])]),a("div",{staticClass:"line_1"}),a("div",{staticClass:"line_2"}),a("div",{staticClass:"line_3"}),a("div",{staticClass:"line_4"}),a("div",{staticClass:"line_5"}),a("div",{staticClass:"line_6"}),a("div",{staticClass:"line_7"}),a("div",{staticClass:"line_8"}),a("div",{staticClass:"line_9"})])}],it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg_img",style:{backgroundImage:t.bgImg}})},nt=[],rt={name:"bgImg",props:{bgImg:String}},ot=rt,ct=(a("6588"),Object(u["a"])(ot,it,nt,!1,null,"dcef3b0e",null));ct.options.__file="bgImg.vue";var lt=ct.exports,ut={name:"mainInformation",components:{bgImg:lt},data:function(){return{bgImage:"url('./images/resume/bg-1.jpg')",iconColor:["#F07E27","#64B41A","#FA5D67","#E5BF21","#C115FA","#0098FC"],cubeImage:['url("./images/resume/vue.png")','url("./images/resume/css.png")','url("./images/resume/html.png")','url("./images/resume/php.png")','url("./images/resume/javascript.png")'],personalImage:["./images/resume/4.jpg","./images/resume/4.jpg","./images/resume/4.jpg"]}},methods:{transformStart:function(t){this.changeClass(t,t.target,"in")},transformEnd:function(t){this.changeClass(t,t.target,"out")},changeClass:function(t,e,a){var s=this.getDirection(t,e),i=s+"_"+a;e.className=i},getDirection:function(t,e){var a=e.getBoundingClientRect(),s=[Math.round(a.x+a.width/2),Math.round(a.y+a.height/2)];return t.clientX<=s[0]&&t.clientY<=s[1]?"lt":t.clientX>s[0]&&t.clientY<=s[1]?"rt":t.clientX<=s[0]&&t.clientY>s[1]?"lb":t.clientX>s[0]&&t.clientY>s[1]?"rb":void 0}}},mt=ut,gt=(a("1add"),Object(u["a"])(mt,at,st,!1,null,"65a1f0cb",null));gt.options.__file="mainInformation.vue";var dt=gt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("bgImg",{attrs:{bgImg:t.bgImage}}),t._m(0)],1)},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module"},[a("h3",{staticClass:"title"},[t._v("\n      关于我\n      "),a("p",{staticClass:"line_lf"}),a("p",{staticClass:"line_rt"})]),a("p",{staticClass:"content"},[t._v("段落是文章中最基本的单位。内容上它具有一个相对完整的意思；在文章中，段具有换行的标。段是由句子或句群组成的，在文章中用于体现作者的思路发展或全篇文章的层次。有的段落只有一个句子，称为独句段，独句段一般是文章的开头段、结尾段、过渡段强调段等特殊的段落。多数段落包括不止一个句子或句群，叫多句段。中文段落开头前一般空两个格。")]),a("div",{staticClass:"squares"},[a("div",{staticClass:"group"},[a("div",{staticClass:"cube"},[a("p",[a("i",{staticClass:"icon"},[t._v("")]),a("span",{staticClass:"tip"},[t._v("年龄/26岁")])])]),a("div",{staticClass:"cube"},[a("p",[a("i",{staticClass:"icon"},[t._v("")]),a("span",{staticClass:"tip"},[t._v("学历/大专")])])])]),a("div",{staticClass:"group"},[a("div",{staticClass:"cube"},[a("p",[a("i",{staticClass:"icon"},[t._v("")]),a("span",{staticClass:"tip"},[t._v("坐标/南通")])])]),a("div",{staticClass:"cube"},[a("p",[a("i",{staticClass:"icon"},[t._v("")]),a("span",{staticClass:"tip"},[t._v("状态/待业")])])])])])])}],ht={name:"aboutMe",components:{bgImg:lt},data:function(){return{bgImage:"url('./images/resume/bg-2.jpg')"}}},pt=ht,bt=(a("2ac0"),Object(u["a"])(pt,vt,ft,!1,null,"7e54258c",null));bt.options.__file="aboutMe.vue";var _t=bt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("bgImg",{attrs:{bgImg:t.bgImage}}),a("div",{staticClass:"module"},[t._m(0),a("div",{staticClass:"chart_block"},[a("div",{staticClass:"chart_lf",style:{backgroundImage:t.skillImages[0]}}),a("div",{staticClass:"chart_rt",style:{backgroundImage:t.skillImages[1]}}),a("div",{attrs:{id:"myChart"}})]),t._m(1)])],1)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[t._v("\n      技术栈\n      "),a("p",{staticClass:"line_lf"}),a("p",{staticClass:"line_rt"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content_block"},[a("ul",[a("li",{staticClass:"content_item"},[t._v("段落是文章中最基本的单位。内容上它具有一个相对完整的意思；在文章中，段具有换行的标。段是由句子或句群组成的，在文章中用于体现作者的思路发展或全篇文章的层次")]),a("li",{staticClass:"content_item"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit veritatis!")]),a("li",{staticClass:"content_item"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit veritatis!")]),a("li",{staticClass:"content_item"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit veritatis!")]),a("li",{staticClass:"content_item"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit veritatis!")])])])}],kt=a("3eba");a("23ee"),a("d28f");var wt={name:"mySkill",components:{bgImg:lt},data:function(){return{skills:[{id:0,name:"前端",x:0,y:0,symbolSize:60,itemStyle:{color:"#2F4554"}},{id:1,name:"框架",x:60,y:10,symbolSize:50,category:0},{id:11,name:"vue",x:90,y:-8,symbolSize:40,category:0},{id:111,name:"vuex",x:75,y:-4,symbolSize:30,category:0},{id:112,name:"axios",x:105,y:-4,symbolSize:30,category:0},{id:113,name:"router",x:100,y:-20,symbolSize:30,category:0},{id:114,name:"ssr",x:90,y:7,symbolSize:30,category:0},{id:115,name:"vue-CLI",x:80,y:-23,symbolSize:40,category:0},{id:12,name:"bootstrap",x:35,y:-10,symbolSize:40,category:0},{id:121,name:"栅格布局",x:22,y:0,symbolSize:30,category:0},{id:122,name:"响应式导航条",x:38,y:5,symbolSize:30,category:0},{id:2,name:"库",x:10,y:-25,symbolSize:50,category:1},{id:21,name:"jquery",x:45,y:-30,symbolSize:40,category:1},{id:211,name:"jq-mobile",x:66,y:-50,symbolSize:30,category:1},{id:212,name:"jq-ui",x:48,y:-47,symbolSize:30,category:1},{id:213,name:"jq-plugins",x:30,y:-45,symbolSize:30,category:1},{id:22,name:"echarts",x:2,y:-45,symbolSize:40,category:1},{id:221,name:"数据可视化",x:25,y:-60,symbolSize:30,category:1},{id:3,name:"工具",x:-15,y:20,symbolSize:50,category:2},{id:31,name:"webpack",x:-35,y:30,symbolSize:40,category:2},{id:311,name:"loaders",x:-55,y:40,symbolSize:30,category:2},{id:312,name:"plugins",x:-55,y:26,symbolSize:30,category:2},{id:32,name:"npm",x:12,y:23,symbolSize:40,category:2},{id:33,name:"git",x:0,y:36,symbolSize:40,category:2},{id:4,name:"预处理",x:-30,y:1,symbolSize:50,category:3},{id:41,name:"babel",x:-50,y:10,symbolSize:40,category:3},{id:42,name:"less",x:-50,y:-8,symbolSize:40,category:3},{id:5,name:"语言",x:-30,y:-25,symbolSize:50,category:4},{id:51,name:"html",x:-40,y:-55,symbolSize:40,category:4},{id:52,name:"css",x:-48,y:-38,symbolSize:40,category:4},{id:53,name:"php",x:-60,y:-65,symbolSize:40,category:4},{id:531,name:"MySQL",x:-78,y:-50,symbolSize:40,category:4},{id:54,name:"javascript",x:-60,y:-50,symbolSize:40,category:4},{id:541,name:"es6+",x:-65,y:-33,symbolSize:40,category:4}],links:[{source:"1",target:"0"},{source:"2",target:"0"},{source:"3",target:"0"},{source:"4",target:"0"},{source:"5",target:"0"},{source:"11",target:"1"},{source:"12",target:"1"},{source:"21",target:"2"},{source:"22",target:"2"},{source:"31",target:"3"},{source:"32",target:"3"},{source:"33",target:"3"},{source:"41",target:"4"},{source:"42",target:"4"},{source:"51",target:"5"},{source:"52",target:"5"},{source:"53",target:"5"},{source:"54",target:"5"},{source:"111",target:"11"},{source:"112",target:"11"},{source:"113",target:"11"},{source:"114",target:"11"},{source:"111",target:"115"},{source:"112",target:"115"},{source:"113",target:"115"},{source:"114",target:"115"},{source:"115",target:"11"},{source:"121",target:"12"},{source:"122",target:"12"},{source:"211",target:"21"},{source:"212",target:"21"},{source:"213",target:"21"},{source:"221",target:"22"},{source:"311",target:"31"},{source:"312",target:"31"},{source:"531",target:"53"},{source:"541",target:"54"},{source:"541",target:"41"},{source:"41",target:"541"},{source:"42",target:"52"},{source:"54",target:"52"},{source:"52",target:"54"},{source:"54",target:"51"},{source:"51",target:"54"},{source:"52",target:"42"},{source:"531",target:"5"},{source:"541",target:"5"},{source:"32",target:"11"},{source:"32",target:"12"},{source:"32",target:"21"},{source:"32",target:"22"},{source:"32",target:"31"},{source:"31",target:"32"}],skillImages:['url("./images/resume/js-1.png")','url("./images/resume/js-2.png")'],bgImage:"url('./images/resume/bg-3.jpg')"}},mounted:function(){this.draw()},methods:{draw:function(){var t=kt.init(document.getElementById("myChart"));t.setOption({legend:{type:"plain",bottom:"4%",textStyle:{fontWeight:"bold"}},animationDuration:1500,series:[{type:"graph",layout:"none",roam:!1,itemStyle:{normal:{borderColor:"#fff",borderWidth:1,shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.3)"}},focusNodeAdjacency:!0,label:{show:!0},lineStyle:{color:"source",curveness:.4,width:2},emphasis:{lineStyle:{width:10}},categories:[{name:"框架",itemStyle:{color:"#C95F71"}},{name:"库",itemStyle:{color:"#61A0A8"}},{name:"工具",itemStyle:{color:"#868689"}},{name:"编译",itemStyle:{color:"#BDA29A"}},{name:"语言",itemStyle:{color:"#C99546"}}],data:this.skills,links:this.links}]})}}},St=wt,xt=(a("a211"),Object(u["a"])(St,Ct,yt,!1,null,"b98393ce",null));xt.options.__file="mySkill.vue";var It=xt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("bgImg",{attrs:{bgImg:t.bgImage}}),a("div",{staticClass:"module"},[t._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"works",style:{transform:t.transform}},[a("div",{staticClass:"work"},[a("div",{staticClass:"work_img",style:{backgroundImage:t.workImg[0]}}),a("a",{staticClass:"work_btn",attrs:{href:"https://renkles.github.io/demo/xiaomi/index.html",target:"_blank"}},[t._v("点击预览")])]),a("div",{staticClass:"work"},[a("div",{staticClass:"work_img",style:{backgroundImage:t.workImg[1]}}),a("a",{staticClass:"work_btn",attrs:{href:"https://renkles.github.io/demo/checheng/html/home.html",target:"_blank"}},[t._v("点击预览")])]),a("div",{staticClass:"work"},[a("div",{staticClass:"work_img",style:{backgroundImage:t.workImg[2]}}),a("a",{staticClass:"work_btn",attrs:{href:"https://renkles.github.io/demo/xiaomi/index.html",target:"_blank"}},[t._v("点击预览")])]),a("div",{staticClass:"work"},[a("div",{staticClass:"work_img",style:{backgroundImage:t.workImg[3]}}),a("a",{staticClass:"work_btn",attrs:{href:"https://renkles.github.io/demo/checheng/html/home.html",target:"_blank"}},[t._v("点击预览")])])]),a("div",{staticClass:"change_btn",on:{click:t.turn}},[a("p",{staticClass:"turning",class:{active:0===t.page},attrs:{"data-id":"0"}}),a("p",{staticClass:"turning",class:{active:1===t.page},attrs:{"data-id":"1"}}),a("p",{staticClass:"turning",class:{active:2===t.page},attrs:{"data-id":"2"}}),a("p",{staticClass:"turning",class:{active:3===t.page},attrs:{"data-id":"3"}})])])])],1)},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[t._v("\n      作品集\n      "),a("p",{staticClass:"line_lf"}),a("p",{staticClass:"line_rt"})])}],$t={name:"myWorks",components:{bgImg:lt},data:function(){return{page:0,transform:void 0,bgImage:"url('./images/resume/bg-4.jpg')",workImg:["url('./images/resume/xiaomi.png')","url('./images/resume/che.png')","url('./images/resume/xiaomi.png')","url('./images/resume/che.png')"]}},methods:{turn:function(t){"P"===t.target.nodeName&&(this.page=parseInt(t.target.dataset.id),this.transform="rotateY(".concat(-90*this.page,"deg)"))}}},Nt=$t,zt=(a("61e3"),Object(u["a"])(Nt,jt,Et,!1,null,"ef20b37c",null));zt.options.__file="myWorks.vue";var Wt=zt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("bgImg",{attrs:{bgImg:t.bgImage}}),a("div",{staticClass:"module"},[t._m(0),t._m(1),a("div",{staticClass:"square"},[a("div",{staticClass:"cube"},[a("i",{staticClass:"icon"},[t._v("")]),a("div",{staticClass:"content_item"},[a("img",{attrs:{src:t.contentImages[0]}})])]),t._m(2),a("div",{staticClass:"cube"},[a("i",{staticClass:"icon"},[t._v("")]),a("div",{staticClass:"content_item"},[a("img",{attrs:{src:t.contentImages[1]}})])])])])],1)},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[t._v("\n      联系我\n      "),a("p",{staticClass:"line_lf"}),a("p",{staticClass:"line_rt"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v("注重效率，偏爱敏捷开发")]),a("p",[t._v("喜欢尝试，期待新鲜事物")]),a("p",[t._v("前端即兴趣，兴趣即未来")]),a("p",[t._v("行路有良友，便是捷径")]),a("p",[t._v("带上我吧，一起看到更大的世界")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cube"},[a("i",{staticClass:"icon"},[t._v("")]),a("div",{staticClass:"content_item"},[a("b",[t._v("邮箱：906116588 @qq.com")])])])}],Lt={name:"contact",components:{bgImg:lt},data:function(){return{bgImage:"url('./images/resume/bg-5.jpg')",contentImages:["./images/resume/weChart.jpg","./images/resume/qq.jpg"]}}},Mt=Lt,qt=(a("3929"),Object(u["a"])(Mt,Ot,Tt,!1,null,"d01edf16",null));qt.options.__file="contact.vue";var Pt=qt.exports,Bt={name:"app",components:{navBar:G,profileNav:et,mainInformation:dt,aboutMe:_t,mySkill:It,myWorks:Wt,contact:Pt},data:function(){return{move:{transform:"translateY(0px)",transition:void 0,timing:"cubic-bezier(1,0,1,1)"}}},computed:{screenHeight:function(){return this.$store.state.screenHeight},screenWidth:function(){return this.$store.state.screenWidth},pageNum:function(){return this.$store.state.pageNum},isScrolling:function(){return this.$store.state.isScrolling},scrollTime:function(){return this.$store.state.scrollTime}},mounted:function(){var t=this;window.onresize=function(){t.$store.commit("init")},window.addEventListener&&window.addEventListener("DOMMouseScroll",this.scroll,!1),window.onmousewheel=document.onmousewheel=this.scroll},watch:{pageNum:function(t){this.screenWidth>768?(this.move.transform="translateY(".concat((t-1)*this.screenHeight*-1,"px)"),this.move.transition="transform ".concat(this.scrollTime,"ms ").concat(this.move.timing)):(this.move.transform="translateY(0px)",this.move.transition=void 0)},screenHeight:function(t){this.screenWidth>768?this.pageNum>1&&(this.move.transform="translateY(".concat((this.pageNum-1)*t*-1,"px)"),this.move.transition=void 0):(this.move.transform="translateY(0px)",this.move.transition=void 0)},screenWidth:function(t){t<768?(this.move.transform="translateY(0px)",this.move.transition=void 0):(this.move.transform="translateY(".concat((this.pageNum-1)*this.screenHeight*-1,"px)"),this.move.transition=void 0)}},methods:{scroll:function(t){window.onmousewheel=void 0,t=t||window.event,t.wheelDelta&&this.screenWidth>768?(t.wheelDelta>0&&!this.isScrolling&&this.$store.commit("scrollTop"),t.wheelDelta<0&&!this.isScrolling&&this.$store.commit("scrollBottom")):t.detail&&this.screenWidth>768&&(t.detail>0&&!this.isScrolling&&this.$store.commit("scrollTop"),t.detail<0&&!this.isScrolling&&this.$store.commit("scrollBottom"))}}},At=Bt,Ht=(a("454d"),Object(u["a"])(At,Y,R,!1,null,"1114af87",null));Ht.options.__file="profile.vue";var Yt=Ht.exports,Rt=function(){return Xt(a.e("chunk-40a14f00").then(a.bind(null,"96c6")))},Dt=function(){return Xt(a.e("chunk-42082822").then(a.bind(null,"523c")))},Ft=function(){return Xt(a.e("chunk-d0ed50b8").then(a.bind(null,"a3fd")))};function Xt(t){var e=function(){return{component:t,loading:I,error:H,delay:200,timeout:3e4}};return Promise.resolve({functional:!0,render:function(t,a){var s=a.data,i=a.children;return t(e,s,i)}})}s["a"].use(L["a"]);var Jt=new L["a"]({routes:[{path:"/",name:"profile",component:Yt},{path:"/helloWorld1",name:"helloWorld1",component:Rt},{path:"/helloWorld2",name:"helloWorld2",component:Dt},{path:"/helloWorld3",name:"helloWorld3",component:Ft}]}),Qt=a("2f62");s["a"].use(Qt["a"]);var Gt=new Qt["a"].Store({state:{menuShowing:!1,screenHeight:document.body.clientHeight,screenWidth:document.body.clientWidth,pageNum:1,isScrolling:!1,scrollTime:800},mutations:{init:function(t){t.screenHeight=document.body.clientHeight,t.screenWidth=document.body.clientWidth},scrollTop:function(t){t.pageNum>1&&(t.pageNum=t.pageNum-1,t.isScrolling=!0,setTimeout(function(){t.isScrolling=!1},t.scrollTime))},scrollBottom:function(t){t.pageNum<5&&(t.pageNum=t.pageNum+1,t.isScrolling=!0,setTimeout(function(){t.isScrolling=!1},t.scrollTime))},changePages:function(t,e){t.pageNum=e,t.isScrolling=!0,setTimeout(function(){t.isScrolling=!1},t.scrollTime)},changeRouters:function(t){t.menuShowing=!t.menuShowing}}});s["a"].config.productionTip=!1,new s["a"]({router:Jt,store:Gt,render:function(t){return t(T)}}).$mount("#app")},"61e3":function(t,e,a){"use strict";var s=a("fa2e"),i=a.n(s);i.a},6588:function(t,e,a){"use strict";var s=a("8ec0"),i=a.n(s);i.a},"69c2":function(t,e,a){},"69e3":function(t,e,a){},"7a03":function(t,e,a){},"7c55":function(t,e,a){"use strict";var s=a("d3dd"),i=a.n(s);i.a},"7c69":function(t,e,a){},"8c5f":function(t,e,a){"use strict";var s=a("7a03"),i=a.n(s);i.a},"8ec0":function(t,e,a){},a211:function(t,e,a){"use strict";var s=a("fe79"),i=a.n(s);i.a},a594:function(t,e,a){"use strict";var s=a("e783"),i=a.n(s);i.a},ba06:function(t,e,a){"use strict";var s=a("f447"),i=a.n(s);i.a},c014:function(t,e,a){"use strict";var s=a("f914"),i=a.n(s);i.a},c506:function(t,e,a){},c72a:function(t,e,a){"use strict";var s=a("c506"),i=a.n(s);i.a},d3dd:function(t,e,a){},e783:function(t,e,a){},ebf1:function(t,e,a){},f447:function(t,e,a){},f914:function(t,e,a){},fa2e:function(t,e,a){},fe79:function(t,e,a){}});
//# sourceMappingURL=app.b1d2351a.js.map