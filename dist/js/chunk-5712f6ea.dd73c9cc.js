(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5712f6ea"],{"248a":function(t,s,e){"use strict";e("ca67")},"2a9b":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"span"},[t._v(t._s(t.title))]),e("van-button",{staticStyle:{float:"right","margin-top":"-3px"},attrs:{icon:"replay",size:"small",round:"",type:"info",disabled:t.isnetxt},on:{click:t.hendlnext}},[t._v("下一条")]),e("van-cell",{staticClass:"cell",attrs:{border:!1,title:t.list.content,value:t.list.type}}),e("div",{staticClass:"showbutton"},[e("h2",[t._v("答案："),e("span",{domProps:{textContent:t._s(t.answer)}})]),e("van-switch",{attrs:{"inactive-color":"#333",disabled:!t.checked,size:"20px"},on:{change:t.answershow},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.checked,expression:"!checked"}],staticClass:"describe"},[e("van-divider",{style:{color:"#95a5a6",borderColor:"#34495e"},attrs:{"content-position":"left"}},[t._v("描述")]),e("div",[t._v(" "+t._s(t.list.reason)+" ")])],1)],1),e("div",{staticClass:"resultbutton"},[e("van-badge",{attrs:{content:t.count.dui,max:t.max}},[e("van-button",{attrs:{icon:"success",round:"",disabled:t.issuccess,type:"primary"},on:{click:t.hendlsuccess}})],1),e("van-badge",{attrs:{content:t.count.cuo,max:t.max}},[e("van-button",{attrs:{icon:"cross",round:"",disabled:t.iscross,type:"danger"},on:{click:t.hendlcrosss}})],1)],1),e("van-cell",{staticClass:"count"},[e("div",{staticClass:"dui"},[t._v("当前对了"+t._s(t.count.dui)+"条")]),e("el-divider",{staticClass:"divider",attrs:{direction:"vertical"}}),e("div",[t._v("当前错了"+t._s(t.count.cuo)+"条")])],1)],1),e("div",{staticClass:"subject"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.overlayimgdui,expression:"overlayimgdui"}]},[e("van-overlay",{staticClass:"overlayshow",attrs:{show:t.overlayshow}},[e("img",{staticClass:"successimg",attrs:{src:"https://s3.bmp.ovh/imgs/2022/01/d3302a597f508828.png",alt:""}}),e("h2",[t._v("恭喜你回答正确!")]),e("div",{staticClass:"returnbutton"},[e("van-button",{attrs:{color:"#f1c40f"},on:{click:t.Change_title}},[t._v("我要换题")]),e("van-button",{attrs:{color:"#f1c40f"},on:{click:t.handelreturn}},[t._v("返回首页")])],1)])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.overlayimgcuo,expression:"overlayimgcuo"}]},[e("van-overlay",{staticClass:"overlayshow",attrs:{show:t.overlayshow}},[e("img",{staticClass:"crossimg",attrs:{src:"https://s3.bmp.ovh/imgs/2022/01/16628126002cc535.png",alt:""}}),e("h2",[t._v("很遗憾，猜错啦!")]),e("div",{staticClass:"returnbutton"},[e("van-button",{attrs:{color:"#f1c40f"},on:{click:t.Change_title}},[t._v("我要换题")]),e("van-button",{attrs:{color:"#f1c40f"},on:{click:t.handelreturn}},[t._v("返回首页")])],1)])],1)])],1)},a=[],n=e("5530"),c=(e("d81d"),e("b0c0"),e("2f62")),o={props:{title:{type:String,default:""},list:{type:Object,default:function(){return{content:"今日游戏已上线，注意休息，改日再来"}}}},data:function(){return{overlayimgdui:!0,overlayimgcuo:!0,overlayshow:!1,isnetxt:!0,checked:!0,max:99,answer:"******",issuccess:!0,iscross:!0,count:{dui:0,cuo:0}}},created:function(){var t=this;this.newactions.map((function(s){s.name===t.title&&(t.count=s.count)}))},methods:{handelreturn:function(){this.overlayshow=!1,console.log(this.issuccess,"fanhui")},Change_title:function(){this.overlayshow=!1,this.hendlnext()},hendlnext:function(){var t=this;this.newactions.map((function(s){s.name===t.title&&t.$emit("getaxiosdata")})),this.isnetxt=!0,this.checked=!0,this.issuccess=!0,this.iscross=!0,this.answer="******"},answershow:function(){!1===this.checked?(this.answer=this.list.answer,this.issuccess=!1,this.iscross=!1):this.checked=!1},hendlsuccess:function(){var t=this;!1===this.issuccess&&setTimeout((function(){t.overlayimgcuo=!1,t.overlayimgdui=!0,t.overlayshow=!0}),500),console.log(this.issuccess,"this.issuccess1111"),this.iscross=!0,this.issuccess=!0,this.count.dui++,this.isnetxt=!1},hendlcrosss:function(){var t=this;console.log(this.iscross,"this.iscross123"),setTimeout((function(){t.overlayimgdui=!1,t.overlayimgcuo=!0,t.overlayshow=!0}),500),this.iscross=!0,this.issuccess=!0,this.count.cuo++,this.isnetxt=!1}},computed:Object(n["a"])({},Object(c["b"])(["newactions"]))},r=o,l=(e("cfaa"),e("2877")),u=Object(l["a"])(r,i,a,!1,null,"1bc5ac95",null);s["a"]=u.exports},"2cd7":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Publicnav",{attrs:{title:t.title}}),e("Publiccard",{attrs:{title:t.title,list:t.list},on:{getaxiosdata:t.getaxiosdata}})],1)},a=[],n=(e("a4d3"),e("e01a"),e("2a9b")),c=e("e1ec"),o={data:function(){return{title:"猜灯谜",index:0,list:{answer:"",content:"",reason:"",type:""}}},created:function(){this.getaxiosdata()},methods:{getaxiosdata:function(){var t=this;this.axios.get("http://api.tianapi.com/caizimi/index?key=e58b55d2ff6f695d8f5ad68674332c5c").then((function(s){var e=s.data;t.list.answer=e.newslist[t.index].answer,t.list.content=e.newslist[t.index].riddle,t.list.reason=e.newslist[t.index].description,t.list.type=e.newslist[t.index].type,console.log(t.list.content,"data"),console.log(t.list,"data")}))}},components:{Publicnav:c["a"],Publiccard:n["a"]}},r=o,l=e("2877"),u=Object(l["a"])(r,i,a,!1,null,"9e2aae50",null);s["default"]=u.exports},"6c9f":function(t,s,e){},b0c0:function(t,s,e){var i=e("83ab"),a=e("5e77").EXISTS,n=e("e330"),c=e("9bf2").f,o=Function.prototype,r=n(o.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=n(l.exec),d="name";i&&!a&&c(o,d,{configurable:!0,get:function(){try{return u(l,r(this))[1]}catch(t){return""}}})},ca67:function(t,s,e){},cfaa:function(t,s,e){"use strict";e("6c9f")},d81d:function(t,s,e){"use strict";var i=e("23e7"),a=e("b727").map,n=e("1dde"),c=n("map");i({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,s,e){"use strict";var i=e("23e7"),a=e("83ab"),n=e("da84"),c=e("e330"),o=e("1a2d"),r=e("1626"),l=e("3a9b"),u=e("577e"),d=e("9bf2").f,h=e("e893"),v=n.Symbol,f=v&&v.prototype;if(a&&r(v)&&(!("description"in f)||void 0!==v().description)){var p={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),s=l(f,this)?new v(t):void 0===t?v():v(t);return""===t&&(p[s]=!0),s};h(m,v),m.prototype=f,f.constructor=m;var b="Symbol(test)"==String(v("test")),w=c(f.toString),g=c(f.valueOf),y=/^Symbol\((.*)\)[^)]+$/,x=c("".replace),_=c("".slice);d(f,"description",{configurable:!0,get:function(){var t=g(this),s=w(t);if(o(p,t))return"";var e=b?_(s,7,-1):x(s,y,"$1");return""===e?void 0:e}}),i({global:!0,forced:!0},{Symbol:m})}},e1ec:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("van-nav-bar",{attrs:{title:t.title,"left-text":"首页","left-arrow":""},on:{"click-left":t.click_left,"click-right":t.click_right},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"apps-o",size:"25"}})]},proxy:!0}])}),e("van-action-sheet",{attrs:{title:"选 择 其 他 游 戏",actions:t.actions,"close-on-click-action":"","close-on-click-overlay":!1,"lock-scroll":!1,"close-on-popstate":!0},on:{select:t.handelselect},model:{value:t.sheetshow,callback:function(s){t.sheetshow=s},expression:"sheetshow"}},[e("van-button",{staticClass:"report",attrs:{type:"info",block:"",round:""},on:{click:t.close_sheet}},[t._v("查看结果报表")])],1),e("van-overlay",{attrs:{"lock-scroll":!1,show:t.show},on:{click:function(s){t.show=!1}}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"block",on:{click:function(t){t.stopPropagation()}}},[e("van-cell",[e("div",{staticClass:"duicuocell"},[t._v(" 对错数据统计 ")])]),t._l(t.newactions,(function(s,i){return e("van-collapse",{key:i,model:{value:t.activeNames,callback:function(s){t.activeNames=s},expression:"activeNames"}},[e("van-collapse-item",{attrs:{disabled:"",title:s.name,name:"0",size:"26px"}},[e("div",{staticClass:"result_Total"},[e("span",[t._v("对"+t._s(s.count.dui)+"条")]),e("el-divider",{staticClass:"divider",attrs:{direction:"vertical"}}),e("span",[t._v("错"+t._s(s.count.cuo)+"条")])],1)])],1)}))],2)])]),e("div")],1)},a=[],n=e("5530"),c=e("2f62"),o={props:{title:{type:String,default:""}},data:function(){return{activeNames:["0"],show:!1,sheetshow:!1,actions:[]}},methods:{handelselect:function(t,s){this.$route.path===t.to&&this.$toast({message:"您选择的已是当前页面",icon:"https://s3.bmp.ovh/imgs/2022/01/f47b039587ad84f8.png"}),this.$router.push(t.to),console.log(s,"name"),console.log(t,"Action")},click_left:function(){this.$router.push("/home")},click_right:function(){this.actions=this.newactions,this.sheetshow=!0},close_sheet:function(){var t=this;setTimeout((function(){t.show=!0}),400),this.sheetshow=!1}},computed:Object(n["a"])({},Object(c["b"])(["newactions"]))},r=o,l=(e("248a"),e("2877")),u=Object(l["a"])(r,i,a,!1,null,"793fb0cf",null);s["a"]=u.exports}}]);
//# sourceMappingURL=chunk-5712f6ea.dd73c9cc.js.map