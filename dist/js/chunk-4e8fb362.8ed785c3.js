(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e8fb362"],{"129a":function(s,t,e){},"2a9b":function(s,t,e){"use strict";var c=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"span"},[s._v(s._s(s.title))]),e("van-button",{staticStyle:{float:"right","margin-top":"-3px"},attrs:{icon:"replay",size:"small",round:"",type:"info",disabled:s.isnetxt},on:{click:s.hendlnext}},[s._v("下一条")]),e("van-cell",{staticClass:"cell",attrs:{border:!1,title:"头上长树杈，身上有白花，四腿跑得快，生长在山野。",value:"打一动物"}}),e("div",{staticClass:"showbutton"},[e("h2",[s._v("答案："),e("span",{domProps:{textContent:s._s(s.answer)}})]),e("van-switch",{attrs:{"inactive-color":"#333",disabled:!s.checked,size:"20px"},on:{change:s.answershow},model:{value:s.checked,callback:function(t){s.checked=t},expression:"checked"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!s.checked,expression:"!checked"}],staticClass:"describe"},[e("van-divider",{style:{color:"#95a5a6",borderColor:"#34495e"},attrs:{"content-position":"left"}},[s._v("描述")]),e("div",[s._v(' "梅花鹿，有着像树枝的鹿角，跳跃能力很强，尤其善长攀登陡坡，那连续大跨度的跳跃，速度轻快敏捷。"')])],1)],1),e("div",{staticClass:"resultbutton"},[e("van-badge",{attrs:{content:s.successkey,max:s.max}},[e("van-button",{attrs:{icon:"success",round:"",disabled:s.issuccess,type:"primary"},on:{click:s.hendlsuccess}})],1),e("van-badge",{attrs:{content:s.crosskey,max:s.max}},[e("van-button",{attrs:{icon:"cross",round:"",disabled:s.iscross,type:"danger"},on:{click:s.hendlcrosss}})],1)],1)]),e("div",{staticClass:"subject"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.overlayimgdui,expression:"overlayimgdui"}]},[e("van-overlay",{staticClass:"overlayshow",attrs:{show:s.overlayshow}},[e("img",{staticClass:"successimg",attrs:{src:"https://s3.bmp.ovh/imgs/2022/01/d3302a597f508828.png",alt:""}}),e("h2",[s._v("恭喜你回答正确!")]),e("div",{staticClass:"returnbutton"},[e("van-button",{attrs:{color:"#f1c40f"},on:{click:s.Change_title}},[s._v("我要换题")]),e("van-button",{attrs:{color:"#f1c40f"},on:{click:s.handelreturn}},[s._v("返回首页")])],1)])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:s.overlayimgcuo,expression:"overlayimgcuo"}]},[e("van-overlay",{staticClass:"overlayshow",attrs:{show:s.overlayshow}},[e("img",{staticClass:"crossimg",attrs:{src:"https://s3.bmp.ovh/imgs/2022/01/16628126002cc535.png",alt:""}}),e("h2",[s._v("很遗憾，猜错啦!")]),e("div",{staticClass:"returnbutton"},[e("van-button",{attrs:{color:"#f1c40f"},on:{click:s.Change_title}},[s._v("我要换题")]),e("van-button",{attrs:{color:"#f1c40f"},on:{click:s.handelreturn}},[s._v("返回首页")])],1)])],1)])],1)},i=[],a={props:{title:{type:String,default:""}},data:function(){return{overlayimgdui:!0,overlayimgcuo:!0,overlayshow:!1,isnetxt:!0,checked:!0,successkey:0,crosskey:0,max:99,answer:"******",issuccess:!0,iscross:!0}},methods:{handelreturn:function(){this.overlayshow=!1,console.log(this.issuccess,"fanhui")},Change_title:function(){this.overlayshow=!1,this.hendlnext()},hendlnext:function(){this.isnetxt=!0,this.checked=!0,this.issuccess=!0,this.iscross=!0,this.answer="******"},answershow:function(){!1===this.checked?(this.answer="梅花鹿",this.issuccess=!1,this.iscross=!1):this.checked=!1},hendlsuccess:function(){var s=this;!1===this.issuccess&&setTimeout((function(){s.overlayimgcuo=!1,s.overlayimgdui=!0,s.overlayshow=!0}),500),console.log(this.issuccess,"this.issuccess1111"),this.iscross=!0,this.issuccess=!0,this.successkey++,this.isnetxt=!1},hendlcrosss:function(){var s=this;console.log(this.iscross,"this.iscross123"),setTimeout((function(){s.overlayimgdui=!1,s.overlayimgcuo=!0,s.overlayshow=!0}),500),this.iscross=!0,this.issuccess=!0,this.crosskey++,this.isnetxt=!1}}},o=a,n=(e("6a81"),e("2877")),l=Object(n["a"])(o,c,i,!1,null,"d22f5820",null);t["a"]=l.exports},"6a81":function(s,t,e){"use strict";e("ce7a1")},c3ae:function(s,t,e){"use strict";e("129a")},ce7a1:function(s,t,e){},e1ec:function(s,t,e){"use strict";var c=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("van-nav-bar",{attrs:{title:s.title,"left-text":"首页","left-arrow":""},on:{"click-left":s.click_left,"click-right":s.click_right},scopedSlots:s._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"apps-o",size:"25"}})]},proxy:!0}])}),e("van-action-sheet",{attrs:{title:"选 择 其 他 游 戏",actions:s.actions,"close-on-click-action":"","close-on-click-overlay":!1,"lock-scroll":!1,"close-on-popstate":!0},on:{select:s.handelselect},model:{value:s.sheetshow,callback:function(t){s.sheetshow=t},expression:"sheetshow"}},[e("van-button",{staticClass:"report",attrs:{type:"info",block:"",round:""},on:{click:s.close_sheet}},[s._v("查看结果报表")])],1),e("van-overlay",{attrs:{show:s.show},on:{click:function(t){s.show=!1}}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"block",on:{click:function(s){s.stopPropagation()}}},[e("van-cell",[e("div",{staticClass:"duicuocell"},[s._v(" 对错数据统计 ")])]),s._l(s.newactions,(function(t,c){return e("van-collapse",{key:c,model:{value:s.activeNames,callback:function(t){s.activeNames=t},expression:"activeNames"}},[e("van-collapse-item",{attrs:{title:t.name,name:"0",size:"26px"}},[e("div",{staticClass:"result_Total"},[e("span",[s._v("对0条")]),e("el-divider",{staticClass:"divider",attrs:{direction:"vertical"}}),e("span",[s._v("错0条")])],1)])],1)}))],2)])]),e("div")],1)},i=[],a=e("5530"),o=e("2f62"),n={props:{title:{type:String,default:""}},data:function(){return{activeNames:["0"],show:!1,sheetshow:!1,actions:[]}},methods:{handelselect:function(s,t){this.$route.path===s.to&&this.$toast({message:"您选择的已是当前页面",icon:"https://s3.bmp.ovh/imgs/2022/01/fe465aa1bfd86717.jpg"}),this.$router.push(s.to),console.log(t,"name"),console.log(s,"Action")},click_left:function(){this.$router.push("/home")},click_right:function(){this.actions=this.newactions,this.sheetshow=!0},close_sheet:function(){var s=this;setTimeout((function(){s.show=!0}),400),this.sheetshow=!1}},computed:Object(a["a"])({},Object(o["b"])(["newactions"]))},l=n,r=(e("c3ae"),e("2877")),h=Object(r["a"])(l,c,i,!1,null,"25bdd027",null);t["a"]=h.exports},e26d:function(s,t,e){"use strict";e.r(t);var c=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("Publicnav",{attrs:{title:s.title}}),e("Publiccard",{attrs:{title:s.title}})],1)},i=[],a=e("2a9b"),o=e("e1ec"),n={data:function(){return{title:"脑筋急转弯"}},components:{Publicnav:o["a"],Publiccard:a["a"]}},l=n,r=e("2877"),h=Object(r["a"])(l,c,i,!1,null,"24076b18",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-4e8fb362.8ed785c3.js.map