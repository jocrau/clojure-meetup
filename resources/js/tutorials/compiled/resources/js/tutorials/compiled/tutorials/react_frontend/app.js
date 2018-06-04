// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tutorials.react_frontend.bmi');
goog.require('tutorials.react_frontend.todo');
goog.require('tutorials.react_frontend.echarts');
goog.require('tutorials.react_frontend.weather');
cljs.core.enable_console_print_BANG_.call(null);
tutorials.react_frontend.app.tabs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bmi","bmi",1421979636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"BMI Calculator",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorials.react_frontend.bmi.bmi_component], null)], null),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"ToDo App",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorials.react_frontend.todo.todo_app], null)], null),new cljs.core.Keyword(null,"charts","charts",555258811),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Charts",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorials.react_frontend.echarts.chart], null)], null),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Dashboard",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorials.react_frontend.weather.dashboard], null)], null)], null);
if(typeof tutorials.react_frontend.app.current_tab_id !== 'undefined'){
} else {
tutorials.react_frontend.app.current_tab_id = reagent.core.atom.call(null,cljs.core.ffirst.call(null,tutorials.react_frontend.app.tabs));
}
tutorials.react_frontend.app.navbar = (function tutorials$react_frontend$app$navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.navbar-left","ul.nav.navbar-nav.navbar-left",2047252324),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__46163){
var vec__46164 = p__46163;
var tab_id = cljs.core.nth.call(null,vec__46164,(0),null);
var map__46167 = cljs.core.nth.call(null,vec__46164,(1),null);
var map__46167__$1 = ((((!((map__46167 == null)))?(((((map__46167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46167):map__46167);
var label = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tutorials.react_frontend.app.current_tab_id),tab_id))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__46164,tab_id,map__46167,map__46167__$1,label){
return (function (){
return cljs.core.reset_BANG_.call(null,tutorials.react_frontend.app.current_tab_id,tab_id);
});})(vec__46164,tab_id,map__46167,map__46167__$1,label))
], null),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab_id], null));
}),tutorials.react_frontend.app.tabs))], null);
});
tutorials.react_frontend.app.content = (function tutorials$react_frontend$app$content(){
return cljs.core.get_in.call(null,tutorials.react_frontend.app.tabs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,tutorials.react_frontend.app.current_tab_id),new cljs.core.Keyword(null,"content","content",15833224)], null));
});
