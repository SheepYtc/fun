(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dde00"],{"82f6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Publicnav",{attrs:{title:t.title}}),n("Publiccard",{attrs:{title:t.title,list:t.list},on:{getaxiosdata:t.getaxiosdata}})],1)},i=[],s=n("5530"),c=n("1da1"),r=(n("96cf"),n("2a9b")),o=n("e1ec"),u=n("2f62"),d={data:function(){return{title:"歇后语",index:0,list:{answer:"",content:"",reason:"",type:"打歇后语",study:""}}},created:function(){this.getaxiosdata()},methods:{getaxiosdata:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("https://api.tianapi.com/xiehou/index?key=e58b55d2ff6f695d8f5ad68674332c5c&num=1");case 2:n=e.sent,a=n.data,t.list.content=a.newslist[t.index].quest,t.list.answer=a.newslist[t.index].result;case 6:case"end":return e.stop()}}),e)})))()}},components:{Publicnav:o["a"],Publiccard:r["a"]},computed:Object(s["a"])({},Object(u["b"])(["newactions"]))},l=d,f=n("2877"),p=Object(f["a"])(l,a,i,!1,null,"70477c5a",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0dde00.5a85e21e.js.map