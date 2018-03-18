// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.echarts');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('tutorials.react_frontend.endpoint');
if(typeof tutorials.react_frontend.echarts.specification !== 'undefined'){
} else {
tutorials.react_frontend.echarts.specification = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null),new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"ECharts Example"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"animation","animation",-1248293244),false,new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sales"], null)], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),true,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",-576705889),true], null),new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Sales",new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(17),(36),(10),(10),(20),(25)], null)], null)], null)], null)], null));
}
tutorials.react_frontend.echarts.chart = (function tutorials$react_frontend$echarts$chart(){
var canvas = reagent.core.atom.call(null,null);
var previous_value = reagent.core.atom.call(null,(0));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (canvas,previous_value){
return (function (this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorials.react_frontend.echarts.specification))], null)], null);
});})(canvas,previous_value))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (canvas,previous_value){
return (function (this$){
return cljs.core.reset_BANG_.call(null,previous_value,cljs.core.get_in.call(null,cljs.core.deref.call(null,tutorials.react_frontend.echarts.specification),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"series","series",600710694),(0),new cljs.core.Keyword(null,"data","data",-232669377),(0)], null),(0)));
});})(canvas,previous_value))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (canvas,previous_value){
return (function (this$){
cljs.core.reset_BANG_.call(null,canvas,echarts.init(reagent.core.dom_node.call(null,this$)));

return cljs.core.deref.call(null,canvas).setOption(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorials.react_frontend.echarts.specification))));
});})(canvas,previous_value))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (canvas,previous_value){
return (function (this$){
return cljs.core.deref.call(null,canvas).setOption(cljs.core.clj__GT_js.call(null,cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tutorials.react_frontend.echarts.specification)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"series","series",600710694),(0),new cljs.core.Keyword(null,"data","data",-232669377),(1)], null),cljs.core.deref.call(null,previous_value))),true);
});})(canvas,previous_value))
], null));
});

//# sourceMappingURL=echarts.js.map?rel=1521330018341
