// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.lang.clojure.include');
goog.require('cljs.core');
goog.require('cljs.js');
if(typeof klipse.lang.clojure.include.create_state_eval !== 'undefined'){
} else {
klipse.lang.clojure.include.create_state_eval = cljs.core.memoize.call(null,cljs.js.empty_state);
}
klipse.lang.clojure.include.eval_form = (function klipse$lang$clojure$include$eval_form(var_args){
var G__38440 = arguments.length;
switch (G__38440) {
case 1:
return klipse.lang.clojure.include.eval_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse.lang.clojure.include.eval_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse.lang.clojure.include.eval_form.cljs$core$IFn$_invoke$arity$1 = (function (form){
return klipse.lang.clojure.include.eval_form.call(null,cljs.core._STAR_ns_STAR_.name);
});

klipse.lang.clojure.include.eval_form.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.call(null,null);
cljs.js.eval.call(null,klipse.lang.clojure.include.create_state_eval.call(null),form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (result){
return (function (p__38441){
var map__38442 = p__38441;
var map__38442__$1 = ((((!((map__38442 == null)))?((((map__38442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38442):map__38442);
var value = cljs.core.get.call(null,map__38442__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__38442__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return error;
} else {
return cljs.core.reset_BANG_.call(null,result,value);
}
});})(result))
);

return cljs.core.deref.call(null,result);
});

klipse.lang.clojure.include.eval_form.cljs$lang$maxFixedArity = 2;

klipse.lang.clojure.include.def_a_var = (function klipse$lang$clojure$include$def_a_var(var_args){
var G__38446 = arguments.length;
switch (G__38446) {
case 2:
return klipse.lang.clojure.include.def_a_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return klipse.lang.clojure.include.def_a_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse.lang.clojure.include.def_a_var.cljs$core$IFn$_invoke$arity$2 = (function (ns,name){
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__38447 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__38447);
} else {
return G__38447;
}
})());
if(cljs.core.truth_(temp__5457__auto__)){
var the_ns = temp__5457__auto__;
return klipse.lang.clojure.include.eval_form.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse.lang.clojure.include.def_a_var.cljs$core$IFn$_invoke$arity$3 = (function (ns,name,val){
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__38448 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__38448);
} else {
return G__38448;
}
})());
if(cljs.core.truth_(temp__5457__auto__)){
var the_ns = temp__5457__auto__;
return klipse.lang.clojure.include.eval_form.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse.lang.clojure.include.def_a_var.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=include.js.map
