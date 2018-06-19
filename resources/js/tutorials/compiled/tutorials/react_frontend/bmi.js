// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.bmi');
goog.require('cljs.core');
goog.require('reagent.core');
tutorials.react_frontend.bmi.calc_bmi = (function tutorials$react_frontend$bmi$calc_bmi(height,weight){
return (weight / Math.pow((height / (100)),(2)));
});
tutorials.react_frontend.bmi.calc_weight = (function tutorials$react_frontend$bmi$calc_weight(bmi,height){
var h = (height / (100));
return ((bmi * h) * h);
});
tutorials.react_frontend.bmi.slider = (function tutorials$react_frontend$bmi$slider(p__26906){
var map__26907 = p__26906;
var map__26907__$1 = ((((!((map__26907 == null)))?(((((map__26907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26907):map__26907);
var min = cljs.core.get.call(null,map__26907__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__26907__$1,new cljs.core.Keyword(null,"max","max",61366548));
var value = cljs.core.get.call(null,map__26907__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__26907__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26907,map__26907__$1,min,max,value,on_change){
return (function (event){
var new_value = event.target.value;
return on_change.call(null,new_value);
});})(map__26907,map__26907__$1,min,max,value,on_change))
], null)], null);
});
tutorials.react_frontend.bmi.bmi_component = (function tutorials$react_frontend$bmi$bmi_component(){
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80),new cljs.core.Keyword(null,"bmi","bmi",1421979636),tutorials.react_frontend.bmi.calc_bmi.call(null,(180),(80))], null));
return ((function (state){
return (function (){
var map__26909 = cljs.core.deref.call(null,state);
var map__26909__$1 = ((((!((map__26909 == null)))?(((((map__26909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26909):map__26909);
var weight = cljs.core.get.call(null,map__26909__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__26909__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__26909__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__26910 = (function (){var pred__26914 = cljs.core._GT_;
var expr__26915 = bmi;
if(cljs.core.truth_(pred__26914.call(null,18.5,expr__26915))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null);
} else {
if(cljs.core.truth_(pred__26914.call(null,(25),expr__26915))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null);
} else {
if(cljs.core.truth_(pred__26914.call(null,(30),expr__26915))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null);
}
}
}
})();
var color = cljs.core.nth.call(null,vec__26910,(0),null);
var diagnose = cljs.core.nth.call(null,vec__26910,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"BMI Calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorials.react_frontend.bmi.slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(100),new cljs.core.Keyword(null,"max","max",61366548),(220),new cljs.core.Keyword(null,"value","value",305978217),height,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26909,map__26909__$1,weight,height,bmi,vec__26910,color,diagnose,state){
return (function (new_value){
return cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),new_value,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,new cljs.core.Keyword(null,"bmi","bmi",1421979636),tutorials.react_frontend.bmi.calc_bmi.call(null,new_value,weight)], null));
});})(map__26909,map__26909__$1,weight,height,bmi,vec__26910,color,diagnose,state))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorials.react_frontend.bmi.slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(30),new cljs.core.Keyword(null,"max","max",61366548),(150),new cljs.core.Keyword(null,"value","value",305978217),weight,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26909,map__26909__$1,weight,height,bmi,vec__26910,color,diagnose,state){
return (function (new_value){
return cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"weight","weight",-1262796205),new_value,new cljs.core.Keyword(null,"bmi","bmi",1421979636),tutorials.react_frontend.bmi.calc_bmi.call(null,height,new_value)], null));
});})(map__26909,map__26909__$1,weight,height,bmi,vec__26910,color,diagnose,state))
], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tutorials.react_frontend.bmi.slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(10),new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"value","value",305978217),bmi,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26909,map__26909__$1,weight,height,bmi,vec__26910,color,diagnose,state){
return (function (new_value){
return cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"weight","weight",-1262796205),tutorials.react_frontend.bmi.calc_weight.call(null,new_value,height),new cljs.core.Keyword(null,"bmi","bmi",1421979636),new_value], null));
});})(map__26909,map__26909__$1,weight,height,bmi,vec__26910,color,diagnose,state))
], null)], null)], null)], null);
});
;})(state))
});

//# sourceMappingURL=bmi.js.map?rel=1529426535395
