(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7caa519c"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");function r(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(l){return void n(l)}a.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var s=t.apply(e,n);function a(t){r(s,o,i,a,c,"next",t)}function c(t){r(s,o,i,a,c,"throw",t)}a(void 0)}))}}},"248a":function(t,e,n){"use strict";n("ca67")},"2a9b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"span"},[t._v(t._s(t.title))]),n("van-button",{staticStyle:{float:"right","margin-top":"-3px"},attrs:{icon:"replay",size:"small",round:"",type:"info",disabled:t.isnetxt},on:{click:t.hendlnext}},[t._v("下一条")]),n("div",[n("van-cell",{directives:[{name:"show",rawName:"v-show",value:""!=t.list.content,expression:"list.content != ''"}],staticClass:"cell",attrs:{border:!1,title:t.list.content,value:t.list.type}}),n("van-cell",{directives:[{name:"show",rawName:"v-show",value:""==t.list.content,expression:"list.content == ''"}]},[n("h3",[t._v("今日游戏已上限，注意休息，改日再来！")])])],1),n("div",{staticClass:"showbutton"},[n("h2",[t._v("答案： "),n("span",{domProps:{textContent:t._s(t.answer)}})]),n("van-switch",{attrs:{"inactive-color":"#333",disabled:!t.checked,size:"20px"},on:{change:t.answershow},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.checked,expression:"!checked"}],staticClass:"describe"},[n("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.list.reason,expression:"list.reason != ''"}]},[n("van-divider",{style:{color:"#95a5a6",borderColor:"#34495e"},attrs:{"content-position":"left"}},[t._v("描述")]),t._v(" "+t._s(t.list.reason)+" ")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.list.study,expression:"list.study != ''"}]},[n("van-divider",{style:{color:"#95a5a6",borderColor:"#34495e"},attrs:{"content-position":"left"}},[t._v("例句")]),t._v(" "+t._s(t.list.study)+" ")],1)])],1),n("div",{staticClass:"resultbutton"},[n("van-badge",{attrs:{content:t.count.dui,max:t.max}},[n("van-button",{attrs:{icon:"success",round:"",disabled:t.issuccess,type:"primary"},on:{click:t.hendlsuccess}})],1),n("van-badge",{attrs:{content:t.count.cuo,max:t.max}},[n("van-button",{attrs:{icon:"cross",round:"",disabled:t.iscross,type:"danger"},on:{click:t.hendlcrosss}})],1)],1),n("van-cell",{staticClass:"count"},[n("div",{staticClass:"dui"},[t._v("当前对了"+t._s(t.count.dui)+"条")]),n("el-divider",{staticClass:"divider",attrs:{direction:"vertical"}}),n("div",[t._v("当前错了"+t._s(t.count.cuo)+"条")])],1)],1),n("div",{staticClass:"subject"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.overlayimgdui,expression:"overlayimgdui"}]},[n("van-overlay",{staticClass:"overlayshow",attrs:{show:t.overlayshow}},[n("img",{staticClass:"successimg",attrs:{src:"https://s3.bmp.ovh/imgs/2022/01/d3302a597f508828.png",alt:""}}),n("h2",[t._v("恭喜你回答正确!")]),n("div",{staticClass:"returnbutton"},[n("van-button",{attrs:{color:"#f1c40f"},on:{click:t.Change_title}},[t._v("我要换题")]),n("van-button",{attrs:{color:"#f1c40f"},on:{click:t.handelreturn}},[t._v("返回首页")])],1)])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.overlayimgcuo,expression:"overlayimgcuo"}]},[n("van-overlay",{staticClass:"overlayshow",attrs:{show:t.overlayshow}},[n("img",{staticClass:"crossimg",attrs:{src:"https://s3.bmp.ovh/imgs/2022/01/16628126002cc535.png",alt:""}}),n("h2",[t._v("很遗憾，猜错啦!")]),n("div",{staticClass:"returnbutton"},[n("van-button",{attrs:{color:"#f1c40f"},on:{click:t.Change_title}},[t._v("我要换题")]),n("van-button",{attrs:{color:"#f1c40f"},on:{click:t.handelreturn}},[t._v("返回首页")])],1)])],1)])],1)},o=[],i=n("5530"),s=(n("d81d"),n("b0c0"),n("2f62")),a={props:{title:{type:String,default:""},list:{type:Object,default:function(){return{content:"今日游戏已上线，注意休息，改日再来"}}}},data:function(){return{overlayimgdui:!0,overlayimgcuo:!0,overlayshow:!1,isnetxt:!0,checked:!0,max:99,answer:"******",issuccess:!0,iscross:!0,count:{dui:0,cuo:0}}},created:function(){var t=this;this.newactions.map((function(e){e.name===t.title&&(t.count=e.count)})),console.log(this.list.content)},methods:{handelreturn:function(){this.overlayshow=!1,console.log(this.issuccess,"fanhui")},Change_title:function(){this.overlayshow=!1,this.hendlnext()},hendlnext:function(){var t=this;this.newactions.map((function(e){e.name===t.title&&t.$emit("getaxiosdata")})),this.isnetxt=!0,this.checked=!0,this.issuccess=!0,this.iscross=!0,this.answer="******"},answershow:function(){""===this.list.content&&(this.checked=!0),!1===this.checked?(void 0!=this.list.pinyin?this.answer=this.list.answer+" "+this.list.pinyin:this.answer=this.list.answer,this.issuccess=!1,this.iscross=!1):this.checked=!1},hendlsuccess:function(){var t=this;!1===this.issuccess&&setTimeout((function(){t.overlayimgcuo=!1,t.overlayimgdui=!0,t.overlayshow=!0}),500),console.log(this.issuccess,"this.issuccess1111"),this.iscross=!0,this.issuccess=!0,this.count.dui++,this.isnetxt=!1},hendlcrosss:function(){var t=this;console.log(this.iscross,"this.iscross123"),setTimeout((function(){t.overlayimgdui=!1,t.overlayimgcuo=!0,t.overlayshow=!0}),500),this.iscross=!0,this.issuccess=!0,this.count.cuo++,this.isnetxt=!1}},computed:Object(i["a"])({},Object(s["b"])(["newactions"]))},c=a,l=(n("d842"),n("2877")),u=Object(l["a"])(c,r,o,!1,null,"723a5b60",null);e["a"]=u.exports},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),s=new O(r||[]);return i._invoke=L(t,n,s),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h="suspendedStart",v="suspendedYield",f="executing",d="completed",p={};function y(){}function m(){}function w(){}var g={};c(g,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==n&&r.call(x,i)&&(g=x);var _=w.prototype=y.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(o,i,s,a){var c=u(t[o],t,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(t,e,n){var r=h;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=E(s,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?d:v,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=w,c(_,"constructor",w),c(w,"constructor",m),m.displayName=c(w,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(C.prototype),c(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var s=new C(l(e,n,r,o),i);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},k(_),c(_,a,"Generator"),c(_,i,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),l=r.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},b0c0:function(t,e,n){var r=n("83ab"),o=n("5e77").EXISTS,i=n("e330"),s=n("9bf2").f,a=Function.prototype,c=i(a.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=i(l.exec),h="name";r&&!o&&s(a,h,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(t){return""}}})},c678:function(t,e,n){},ca67:function(t,e,n){},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde"),s=i("map");r({target:"Array",proto:!0,forced:!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},d842:function(t,e,n){"use strict";n("c678")},e1ec:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.title,"left-text":"首页","left-arrow":""},on:{"click-left":t.click_left,"click-right":t.click_right},scopedSlots:t._u([{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"apps-o",size:"25"}})]},proxy:!0}])}),n("van-action-sheet",{attrs:{title:"选 择 其 他 游 戏",actions:t.actions,"close-on-click-action":"","close-on-click-overlay":!1,"lock-scroll":!1,"close-on-popstate":!0},on:{select:t.handelselect},model:{value:t.sheetshow,callback:function(e){t.sheetshow=e},expression:"sheetshow"}},[n("van-button",{staticClass:"report",attrs:{type:"info",block:"",round:""},on:{click:t.close_sheet}},[t._v("查看结果报表")])],1),n("van-overlay",{attrs:{"lock-scroll":!1,show:t.show},on:{click:function(e){t.show=!1}}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"block",on:{click:function(t){t.stopPropagation()}}},[n("van-cell",[n("div",{staticClass:"duicuocell"},[t._v(" 对错数据统计 ")])]),t._l(t.newactions,(function(e,r){return n("van-collapse",{key:r,model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("van-collapse-item",{attrs:{disabled:"",title:e.name,name:"0",size:"26px"}},[n("div",{staticClass:"result_Total"},[n("span",[t._v("对"+t._s(e.count.dui)+"条")]),n("el-divider",{staticClass:"divider",attrs:{direction:"vertical"}}),n("span",[t._v("错"+t._s(e.count.cuo)+"条")])],1)])],1)}))],2)])]),n("div")],1)},o=[],i=n("5530"),s=n("2f62"),a={props:{title:{type:String,default:""}},data:function(){return{activeNames:["0"],show:!1,sheetshow:!1,actions:[]}},methods:{handelselect:function(t,e){this.$route.path===t.to&&this.$toast({message:"您选择的已是当前页面",icon:"https://s3.bmp.ovh/imgs/2022/01/f47b039587ad84f8.png"}),this.$router.push(t.to),console.log(e,"name"),console.log(t,"Action")},click_left:function(){this.$router.push("/home")},click_right:function(){this.actions=this.newactions,this.sheetshow=!0},close_sheet:function(){var t=this;setTimeout((function(){t.show=!0}),400),this.sheetshow=!1}},computed:Object(i["a"])({},Object(s["b"])(["newactions"]))},c=a,l=(n("248a"),n("2877")),u=Object(l["a"])(c,r,o,!1,null,"793fb0cf",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-7caa519c.b8189d85.js.map