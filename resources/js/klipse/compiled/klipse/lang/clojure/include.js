// Compiled by ClojureScript 1.10.145 {}
goog.provide('klipse.lang.clojure.include');
goog.require('cljs.core');
goog.require('cljs.js');
if(typeof klipse.lang.clojure.include.create_state_eval !== 'undefined'){
} else {
klipse.lang.clojure.include.create_state_eval = cljs.core.memoize.call(null,cljs.js.empty_state);
}
klipse.lang.clojure.include.eval_form = (function klipse$lang$clojure$include$eval_form(var_args){
var G__16115 = arguments.length;
switch (G__16115) {
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
return (function (p__16116){
var map__16117 = p__16116;
var map__16117__$1 = ((((!((map__16117 == null)))?(((((map__16117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16117):map__16117);
var value = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__16121 = arguments.length;
switch (G__16121) {
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
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__16122 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__16122);
} else {
return G__16122;
}
})());
if(cljs.core.truth_(temp__5457__auto__)){
var the_ns = temp__5457__auto__;
return klipse.lang.clojure.include.eval_form.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse.lang.clojure.include.def_a_var.cljs$core$IFn$_invoke$arity$3 = (function (ns,name,val){
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__16123 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__16123);
} else {
return G__16123;
}
})());
if(cljs.core.truth_(temp__5457__auto__)){
var the_ns = temp__5457__auto__;
return klipse.lang.clojure.include.eval_form.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse.lang.clojure.include.def_a_var.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=include.js.map
