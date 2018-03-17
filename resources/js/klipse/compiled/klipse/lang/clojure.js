// Compiled by ClojureScript 1.10.145 {}
goog.provide('klipse.lang.clojure');
goog.require('cljs.core');
goog.require('klipse.lang.clojure.bundled_namespaces');
goog.require('gadjett.core_fn');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('clojure.string');
goog.require('klipse.lang.clojure.include');
goog.require('klipse.lang.clojure.guard');
goog.require('cljs.pprint');
goog.require('cljs.analyzer');
goog.require('cljs.reader');
goog.require('cljs.compiler');
goog.require('klipse.common.registry');
goog.require('klipse.lang.clojure.io');
goog.require('cljs.core.async');
goog.require('cljs.env');
goog.require('cljs.js');
window.cljs.user = {};
if(typeof klipse.lang.clojure.current_ns !== 'undefined'){
} else {
klipse.lang.clojure.current_ns = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
}
klipse.lang.clojure.display = (function klipse$lang$clojure$display(value,p__16559){
var map__16560 = p__16559;
var map__16560__$1 = ((((!((map__16560 == null)))?(((((map__16560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16560):map__16560);
var print_length = cljs.core.get.call(null,map__16560__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__16560__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var _STAR_print_length_STAR_16562 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = print_length;

try{var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16563_16565 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16564_16566 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16563_16565,_STAR_print_fn_STAR_16564_16566,sb__4430__auto__,_STAR_print_length_STAR_16562,map__16560,map__16560__$1,print_length,beautify_strings){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_16563_16565,_STAR_print_fn_STAR_16564_16566,sb__4430__auto__,_STAR_print_length_STAR_16562,map__16560,map__16560__$1,print_length,beautify_strings))
;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = typeof value === 'string';
if(and__3911__auto__){
return beautify_strings;
} else {
return and__3911__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16564_16566;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16563_16565;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_16562;
}});
klipse.lang.clojure.update_current_ns = (function klipse$lang$clojure$update_current_ns(p__16567){
var map__16568 = p__16567;
var map__16568__$1 = ((((!((map__16568 == null)))?(((((map__16568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16568):map__16568);
var ns = cljs.core.get.call(null,map__16568__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__16568__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__16568__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__16568__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__16568__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__16568__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
return null;
} else {
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("update-current-ns:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''));
} else {
}

return cljs.core.reset_BANG_.call(null,klipse.lang.clojure.current_ns,ns);
}
});
klipse.lang.clojure.result_as_str = (function klipse$lang$clojure$result_as_str(p__16570,opts){
var map__16571 = p__16570;
var map__16571__$1 = ((((!((map__16571 == null)))?(((((map__16571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16571):map__16571);
var args = map__16571__$1;
var ns = cljs.core.get.call(null,map__16571__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__16571__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__16571__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__16571__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__16571__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__16571__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
} else {
cljs.core.reset_BANG_.call(null,klipse.lang.clojure.current_ns,ns);
}

var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse.lang.clojure.display.call(null,value,opts):cljs.core.pr_str.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.read_result = (function klipse$lang$clojure$read_result(p__16573){
var map__16574 = p__16573;
var map__16574__$1 = ((((!((map__16574 == null)))?(((((map__16574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16574):map__16574);
var form = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.advanced_compile = (function klipse$lang$clojure$advanced_compile(code){
return code;
});
klipse.lang.clojure.convert_compile_res = (function klipse$lang$clojure$convert_compile_res(p__16576){
var map__16577 = p__16576;
var map__16577__$1 = ((((!((map__16577 == null)))?(((((map__16577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16577):map__16577);
var foo = map__16577__$1;
var value = cljs.core.get.call(null,map__16577__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__16577__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.my_eval = (function klipse$lang$clojure$my_eval(p__16579){
var map__16580 = p__16579;
var map__16580__$1 = ((((!((map__16580 == null)))?(((((map__16580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16580):map__16580);
var args = map__16580__$1;
var file = cljs.core.get.call(null,map__16580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__16580__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__16580__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__16580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__16580__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__16580__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse.lang.clojure.eval_for_compilation = (function klipse$lang$clojure$eval_for_compilation(p__16582){
var map__16583 = p__16582;
var map__16583__$1 = ((((!((map__16583 == null)))?(((((map__16583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16583):map__16583);
var source = cljs.core.get.call(null,map__16583__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse.lang.clojure.original_emits = cljs.compiler.emits;
klipse.lang.clojure.core_compile_an_exp = (function klipse$lang$clojure$core_compile_an_exp(s,p__16585){
var map__16586 = p__16585;
var map__16586__$1 = ((((!((map__16586 == null)))?(((((map__16586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16586):map__16586);
var static_fns = cljs.core.get.call(null,map__16586__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__16586__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__16586__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__16586__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse.lang.clojure.original_emits);
var emits16588_16589 = cljs.compiler.emits;
cljs.compiler.emits = the_emits;

try{cljs.js.eval_str.call(null,klipse.lang.clojure.include.create_state_eval.call(null),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,klipse.lang.clojure.current_ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = klipse.lang.clojure.include.create_state_eval.call(null),new cljs.core.Keyword(null,"verbose","verbose",1694226060),klipse.utils.verbose_QMARK_.call(null),new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse.lang.clojure.io.load_ns,external_libs)], null),((function (emits16588_16589,c,max_eval_duration__$1,the_emits,map__16586,map__16586__$1,static_fns,external_libs,max_eval_duration,compile_display_guard){
return (function (res){
klipse.lang.clojure.update_current_ns.call(null,res);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits16588_16589,c,max_eval_duration__$1,the_emits,map__16586,map__16586__$1,static_fns,external_libs,max_eval_duration,compile_display_guard))
);
}finally {cljs.compiler.emits = emits16588_16589;
}
return c;
});
klipse.lang.clojure.core_eval_an_exp = (function klipse$lang$clojure$core_eval_an_exp(s,p__16590){
var map__16591 = p__16590;
var map__16591__$1 = ((((!((map__16591 == null)))?(((((map__16591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16591):map__16591);
var static_fns = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse.lang.clojure.guard.min_max_eval_duration);
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var emits16593_16594 = cljs.compiler.emits;
cljs.compiler.emits = cljs.core.partial.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration__$1);

try{cljs.js.eval_str.call(null,klipse.lang.clojure.include.create_state_eval.call(null),s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,klipse.lang.clojure.current_ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),klipse.utils.verbose_QMARK_.call(null),new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = klipse.lang.clojure.include.create_state_eval.call(null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse.lang.clojure.io.load_ns,external_libs)], null),((function (emits16593_16594,c,max_eval_duration__$1,map__16591,map__16591__$1,static_fns,external_libs,max_eval_duration){
return (function (res){
klipse.lang.clojure.update_current_ns.call(null,res);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits16593_16594,c,max_eval_duration__$1,map__16591,map__16591__$1,static_fns,external_libs,max_eval_duration))
);
}finally {cljs.compiler.emits = emits16593_16594;
}
return c;
});
klipse.lang.clojure.split_expressions = (function klipse$lang$clojure$split_expressions(s){
return cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\s*/),cljs.core.map.call(null,rewrite_clj.node.string,rewrite_clj.node.children.call(null,rewrite_clj.parser.parse_string_all.call(null,s))));
});
klipse.lang.clojure.populate_err = (function klipse$lang$clojure$populate_err(res,p__16595){
var map__16596 = p__16595;
var map__16596__$1 = ((((!((map__16596 == null)))?(((((map__16596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16596):map__16596);
var result_element = cljs.core.get.call(null,map__16596__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__16596__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__3911__auto__ = container;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__3911__auto__;
}
})())){
goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))].join(''));
} else {
}

return res;
});
klipse.lang.clojure.core_eval = (function klipse$lang$clojure$core_eval(s,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16632){
var state_val_16633 = (state_16632[(1)]);
if((state_val_16633 === (7))){
var inst_16607 = (state_16632[(7)]);
var inst_16612 = cljs.core.first.call(null,inst_16607);
var inst_16613 = klipse.lang.clojure.core_eval_an_exp.call(null,inst_16612,opts);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16632__$1,(10),inst_16613);
} else {
if((state_val_16633 === (1))){
var state_16632__$1 = state_16632;
var statearr_16634_16654 = state_16632__$1;
(statearr_16634_16654[(2)] = null);

(statearr_16634_16654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16632,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16606 = klipse.lang.clojure.split_expressions.call(null,s);
var inst_16607 = inst_16606;
var inst_16608 = null;
var state_16632__$1 = (function (){var statearr_16635 = state_16632;
(statearr_16635[(7)] = inst_16607);

(statearr_16635[(8)] = inst_16608);

return statearr_16635;
})();
var statearr_16636_16655 = state_16632__$1;
(statearr_16636_16655[(2)] = null);

(statearr_16636_16655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (13))){
var inst_16623 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16637_16656 = state_16632__$1;
(statearr_16637_16656[(2)] = inst_16623);

(statearr_16637_16656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (6))){
var inst_16628 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16638_16657 = state_16632__$1;
(statearr_16638_16657[(2)] = inst_16628);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16632__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (3))){
var inst_16598 = (state_16632[(2)]);
var inst_16599 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_16600 = [inst_16598];
var inst_16601 = cljs.core.PersistentHashMap.fromArrays(inst_16599,inst_16600);
var inst_16602 = klipse.lang.clojure.populate_err.call(null,inst_16601,opts);
var state_16632__$1 = state_16632;
var statearr_16639_16658 = state_16632__$1;
(statearr_16639_16658[(2)] = inst_16602);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16632__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (12))){
var inst_16607 = (state_16632[(7)]);
var inst_16615 = (state_16632[(9)]);
var inst_16620 = cljs.core.rest.call(null,inst_16607);
var inst_16607__$1 = inst_16620;
var inst_16608 = inst_16615;
var state_16632__$1 = (function (){var statearr_16640 = state_16632;
(statearr_16640[(7)] = inst_16607__$1);

(statearr_16640[(8)] = inst_16608);

return statearr_16640;
})();
var statearr_16641_16659 = state_16632__$1;
(statearr_16641_16659[(2)] = null);

(statearr_16641_16659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (2))){
var inst_16630 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16632__$1,inst_16630);
} else {
if((state_val_16633 === (11))){
var inst_16615 = (state_16632[(9)]);
var inst_16618 = klipse.lang.clojure.populate_err.call(null,inst_16615,opts);
var state_16632__$1 = state_16632;
var statearr_16642_16660 = state_16632__$1;
(statearr_16642_16660[(2)] = inst_16618);

(statearr_16642_16660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (9))){
var inst_16626 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16643_16661 = state_16632__$1;
(statearr_16643_16661[(2)] = inst_16626);

(statearr_16643_16661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (5))){
var inst_16607 = (state_16632[(7)]);
var inst_16610 = cljs.core.seq.call(null,inst_16607);
var state_16632__$1 = state_16632;
if(inst_16610){
var statearr_16644_16662 = state_16632__$1;
(statearr_16644_16662[(1)] = (7));

} else {
var statearr_16645_16663 = state_16632__$1;
(statearr_16645_16663[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (10))){
var inst_16615 = (state_16632[(9)]);
var inst_16615__$1 = (state_16632[(2)]);
var inst_16616 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_16615__$1);
var state_16632__$1 = (function (){var statearr_16646 = state_16632;
(statearr_16646[(9)] = inst_16615__$1);

return statearr_16646;
})();
if(cljs.core.truth_(inst_16616)){
var statearr_16647_16664 = state_16632__$1;
(statearr_16647_16664[(1)] = (11));

} else {
var statearr_16648_16665 = state_16632__$1;
(statearr_16648_16665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (8))){
var inst_16608 = (state_16632[(8)]);
var state_16632__$1 = state_16632;
var statearr_16649_16666 = state_16632__$1;
(statearr_16649_16666[(2)] = inst_16608);

(statearr_16649_16666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$core_eval_$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$core_eval_$_state_machine__13826__auto____0 = (function (){
var statearr_16650 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16650[(0)] = klipse$lang$clojure$core_eval_$_state_machine__13826__auto__);

(statearr_16650[(1)] = (1));

return statearr_16650;
});
var klipse$lang$clojure$core_eval_$_state_machine__13826__auto____1 = (function (state_16632){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16651){if((e16651 instanceof Object)){
var ex__13829__auto__ = e16651;
var statearr_16652_16667 = state_16632;
(statearr_16652_16667[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16668 = state_16632;
state_16632 = G__16668;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$core_eval_$_state_machine__13826__auto__ = function(state_16632){
switch(arguments.length){
case 0:
return klipse$lang$clojure$core_eval_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$core_eval_$_state_machine__13826__auto____1.call(this,state_16632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$core_eval_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$core_eval_$_state_machine__13826__auto____0;
klipse$lang$clojure$core_eval_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$core_eval_$_state_machine__13826__auto____1;
return klipse$lang$clojure$core_eval_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16653 = f__13849__auto__.call(null);
(statearr_16653[(6)] = c__13848__auto__);

return statearr_16653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
/**
 * receives a string.
 *   returns true if the expression is a string of an ns-form like (ns my.foo...) or (require 'my.foo).
 *   
 */
klipse.lang.clojure.ns_exp_QMARK_ = (function klipse$lang$clojure$ns_exp_QMARK_(exp){
var form = cljs.reader.read_string.call(null,exp);
var and__3911__auto__ = cljs.core.seq_QMARK_.call(null,form);
if(and__3911__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"import","import",241030818,null),null,new cljs.core.Symbol(null,"use-macros","use-macros",734893134,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"use","use",-205850897,null),null,new cljs.core.Symbol(null,"require","require",1172530194,null),null,new cljs.core.Symbol(null,"require-macros","require-macros",-1946488353,null),null,new cljs.core.Symbol(null,"refer-clojure","refer-clojure",-1840651329,null),null], null), null).call(null,cljs.core.first.call(null,form));
} else {
return and__3911__auto__;
}
});
klipse.lang.clojure.core_compile = (function klipse$lang$clojure$core_compile(s,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16706){
var state_val_16707 = (state_16706[(1)]);
if((state_val_16707 === (7))){
var inst_16677 = (state_16706[(7)]);
var inst_16682 = cljs.core.first.call(null,inst_16677);
var inst_16683 = klipse.lang.clojure.core_compile_an_exp.call(null,inst_16682,opts);
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16706__$1,(10),inst_16683);
} else {
if((state_val_16707 === (1))){
var state_16706__$1 = state_16706;
var statearr_16708_16728 = state_16706__$1;
(statearr_16708_16728[(2)] = null);

(statearr_16708_16728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16706,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16676 = klipse.lang.clojure.split_expressions.call(null,s);
var inst_16677 = inst_16676;
var inst_16678 = "";
var state_16706__$1 = (function (){var statearr_16709 = state_16706;
(statearr_16709[(8)] = inst_16678);

(statearr_16709[(7)] = inst_16677);

return statearr_16709;
})();
var statearr_16710_16729 = state_16706__$1;
(statearr_16710_16729[(2)] = null);

(statearr_16710_16729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (13))){
var inst_16694 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16711_16730 = state_16706__$1;
(statearr_16711_16730[(2)] = inst_16694);

(statearr_16711_16730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (6))){
var inst_16702 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16712_16731 = state_16706__$1;
(statearr_16712_16731[(2)] = inst_16702);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16706__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (3))){
var inst_16669 = (state_16706[(2)]);
var inst_16670 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_16671 = [inst_16669];
var inst_16672 = cljs.core.PersistentHashMap.fromArrays(inst_16670,inst_16671);
var state_16706__$1 = state_16706;
var statearr_16713_16732 = state_16706__$1;
(statearr_16713_16732[(2)] = inst_16672);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16706__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (12))){
var inst_16685 = (state_16706[(9)]);
var inst_16678 = (state_16706[(8)]);
var inst_16677 = (state_16706[(7)]);
var inst_16689 = cljs.core.rest.call(null,inst_16677);
var inst_16690 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_16685);
var inst_16691 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16678),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16690)].join('');
var inst_16677__$1 = inst_16689;
var inst_16678__$1 = inst_16691;
var state_16706__$1 = (function (){var statearr_16714 = state_16706;
(statearr_16714[(8)] = inst_16678__$1);

(statearr_16714[(7)] = inst_16677__$1);

return statearr_16714;
})();
var statearr_16715_16733 = state_16706__$1;
(statearr_16715_16733[(2)] = null);

(statearr_16715_16733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (2))){
var inst_16704 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16706__$1,inst_16704);
} else {
if((state_val_16707 === (11))){
var inst_16685 = (state_16706[(9)]);
var state_16706__$1 = state_16706;
var statearr_16716_16734 = state_16706__$1;
(statearr_16716_16734[(2)] = inst_16685);

(statearr_16716_16734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (9))){
var inst_16700 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16717_16735 = state_16706__$1;
(statearr_16717_16735[(2)] = inst_16700);

(statearr_16717_16735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (5))){
var inst_16677 = (state_16706[(7)]);
var inst_16680 = cljs.core.seq.call(null,inst_16677);
var state_16706__$1 = state_16706;
if(inst_16680){
var statearr_16718_16736 = state_16706__$1;
(statearr_16718_16736[(1)] = (7));

} else {
var statearr_16719_16737 = state_16706__$1;
(statearr_16719_16737[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (10))){
var inst_16685 = (state_16706[(9)]);
var inst_16685__$1 = (state_16706[(2)]);
var inst_16686 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_16685__$1);
var state_16706__$1 = (function (){var statearr_16720 = state_16706;
(statearr_16720[(9)] = inst_16685__$1);

return statearr_16720;
})();
if(cljs.core.truth_(inst_16686)){
var statearr_16721_16738 = state_16706__$1;
(statearr_16721_16738[(1)] = (11));

} else {
var statearr_16722_16739 = state_16706__$1;
(statearr_16722_16739[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (8))){
var inst_16678 = (state_16706[(8)]);
var inst_16696 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_16697 = [inst_16678];
var inst_16698 = cljs.core.PersistentHashMap.fromArrays(inst_16696,inst_16697);
var state_16706__$1 = state_16706;
var statearr_16723_16740 = state_16706__$1;
(statearr_16723_16740[(2)] = inst_16698);

(statearr_16723_16740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$core_compile_$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$core_compile_$_state_machine__13826__auto____0 = (function (){
var statearr_16724 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16724[(0)] = klipse$lang$clojure$core_compile_$_state_machine__13826__auto__);

(statearr_16724[(1)] = (1));

return statearr_16724;
});
var klipse$lang$clojure$core_compile_$_state_machine__13826__auto____1 = (function (state_16706){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16725){if((e16725 instanceof Object)){
var ex__13829__auto__ = e16725;
var statearr_16726_16741 = state_16706;
(statearr_16726_16741[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16742 = state_16706;
state_16706 = G__16742;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$core_compile_$_state_machine__13826__auto__ = function(state_16706){
switch(arguments.length){
case 0:
return klipse$lang$clojure$core_compile_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$core_compile_$_state_machine__13826__auto____1.call(this,state_16706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$core_compile_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$core_compile_$_state_machine__13826__auto____0;
klipse$lang$clojure$core_compile_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$core_compile_$_state_machine__13826__auto____1;
return klipse$lang$clojure$core_compile_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16727 = f__13849__auto__.call(null);
(statearr_16727[(6)] = c__13848__auto__);

return statearr_16727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.lang.clojure.eval_async = (function klipse$lang$clojure$eval_async(s,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16748){
var state_val_16749 = (state_16748[(1)]);
if((state_val_16749 === (1))){
var inst_16743 = klipse.lang.clojure.core_eval.call(null,s,opts);
var state_16748__$1 = state_16748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16748__$1,(2),inst_16743);
} else {
if((state_val_16749 === (2))){
var inst_16745 = (state_16748[(2)]);
var inst_16746 = klipse.lang.clojure.result_as_str.call(null,inst_16745,opts);
var state_16748__$1 = state_16748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16748__$1,inst_16746);
} else {
return null;
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$eval_async_$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$eval_async_$_state_machine__13826__auto____0 = (function (){
var statearr_16750 = [null,null,null,null,null,null,null];
(statearr_16750[(0)] = klipse$lang$clojure$eval_async_$_state_machine__13826__auto__);

(statearr_16750[(1)] = (1));

return statearr_16750;
});
var klipse$lang$clojure$eval_async_$_state_machine__13826__auto____1 = (function (state_16748){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16751){if((e16751 instanceof Object)){
var ex__13829__auto__ = e16751;
var statearr_16752_16754 = state_16748;
(statearr_16752_16754[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16755 = state_16748;
state_16748 = G__16755;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$eval_async_$_state_machine__13826__auto__ = function(state_16748){
switch(arguments.length){
case 0:
return klipse$lang$clojure$eval_async_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$eval_async_$_state_machine__13826__auto____1.call(this,state_16748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$eval_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$eval_async_$_state_machine__13826__auto____0;
klipse$lang$clojure$eval_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$eval_async_$_state_machine__13826__auto____1;
return klipse$lang$clojure$eval_async_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16753 = f__13849__auto__.call(null);
(statearr_16753[(6)] = c__13848__auto__);

return statearr_16753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
/**
 * used for testing
 */
klipse.lang.clojure.eval = (function klipse$lang$clojure$eval(var_args){
var G__16757 = arguments.length;
switch (G__16757) {
case 1:
return klipse.lang.clojure.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse.lang.clojure.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse.lang.clojure.eval.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse.lang.clojure.eval.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
});

klipse.lang.clojure.eval.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16763){
var state_val_16764 = (state_16763[(1)]);
if((state_val_16764 === (1))){
var inst_16758 = klipse.lang.clojure.core_eval.call(null,s,opts);
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16763__$1,(2),inst_16758);
} else {
if((state_val_16764 === (2))){
var inst_16760 = (state_16763[(2)]);
var inst_16761 = klipse.lang.clojure.read_result.call(null,inst_16760);
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16763__$1,inst_16761);
} else {
return null;
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$state_machine__13826__auto__ = null;
var klipse$lang$clojure$state_machine__13826__auto____0 = (function (){
var statearr_16765 = [null,null,null,null,null,null,null];
(statearr_16765[(0)] = klipse$lang$clojure$state_machine__13826__auto__);

(statearr_16765[(1)] = (1));

return statearr_16765;
});
var klipse$lang$clojure$state_machine__13826__auto____1 = (function (state_16763){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16766){if((e16766 instanceof Object)){
var ex__13829__auto__ = e16766;
var statearr_16767_16770 = state_16763;
(statearr_16767_16770[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16771 = state_16763;
state_16763 = G__16771;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$state_machine__13826__auto__ = function(state_16763){
switch(arguments.length){
case 0:
return klipse$lang$clojure$state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$state_machine__13826__auto____1.call(this,state_16763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$state_machine__13826__auto____0;
klipse$lang$clojure$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$state_machine__13826__auto____1;
return klipse$lang$clojure$state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16768 = f__13849__auto__.call(null);
(statearr_16768[(6)] = c__13848__auto__);

return statearr_16768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});

klipse.lang.clojure.eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javacript
 */
klipse.lang.clojure.eval_and_callback = (function klipse$lang$clojure$eval_and_callback(s,cb){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16778){
var state_val_16779 = (state_16778[(1)]);
if((state_val_16779 === (1))){
var inst_16772 = klipse.lang.clojure.eval.call(null,s);
var state_16778__$1 = state_16778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16778__$1,(2),inst_16772);
} else {
if((state_val_16779 === (2))){
var inst_16774 = (state_16778[(2)]);
var inst_16775 = cljs.core.clj__GT_js.call(null,inst_16774);
var inst_16776 = cb.call(null,inst_16775);
var state_16778__$1 = state_16778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16778__$1,inst_16776);
} else {
return null;
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto____0 = (function (){
var statearr_16780 = [null,null,null,null,null,null,null];
(statearr_16780[(0)] = klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto__);

(statearr_16780[(1)] = (1));

return statearr_16780;
});
var klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto____1 = (function (state_16778){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16781){if((e16781 instanceof Object)){
var ex__13829__auto__ = e16781;
var statearr_16782_16784 = state_16778;
(statearr_16782_16784[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16785 = state_16778;
state_16778 = G__16785;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto__ = function(state_16778){
switch(arguments.length){
case 0:
return klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto____1.call(this,state_16778);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto____0;
klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto____1;
return klipse$lang$clojure$eval_and_callback_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16783 = f__13849__auto__.call(null);
(statearr_16783[(6)] = c__13848__auto__);

return statearr_16783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
/**
 * useful for testing and js export
 */
klipse.lang.clojure.str_compile = (function klipse$lang$clojure$str_compile(var_args){
var G__16787 = arguments.length;
switch (G__16787) {
case 1:
return klipse.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1 = (function (exp){
return klipse.lang.clojure.str_compile.call(null,exp,cljs.core.PersistentArrayMap.EMPTY);
});

klipse.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2 = (function (exp,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16793){
var state_val_16794 = (state_16793[(1)]);
if((state_val_16794 === (1))){
var inst_16788 = klipse.lang.clojure.core_compile.call(null,exp,opts);
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16793__$1,(2),inst_16788);
} else {
if((state_val_16794 === (2))){
var inst_16790 = (state_16793[(2)]);
var inst_16791 = klipse.lang.clojure.convert_compile_res.call(null,inst_16790);
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16793__$1,inst_16791);
} else {
return null;
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$state_machine__13826__auto__ = null;
var klipse$lang$clojure$state_machine__13826__auto____0 = (function (){
var statearr_16795 = [null,null,null,null,null,null,null];
(statearr_16795[(0)] = klipse$lang$clojure$state_machine__13826__auto__);

(statearr_16795[(1)] = (1));

return statearr_16795;
});
var klipse$lang$clojure$state_machine__13826__auto____1 = (function (state_16793){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16796){if((e16796 instanceof Object)){
var ex__13829__auto__ = e16796;
var statearr_16797_16800 = state_16793;
(statearr_16797_16800[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16801 = state_16793;
state_16793 = G__16801;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$state_machine__13826__auto__ = function(state_16793){
switch(arguments.length){
case 0:
return klipse$lang$clojure$state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$state_machine__13826__auto____1.call(this,state_16793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$state_machine__13826__auto____0;
klipse$lang$clojure$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$state_machine__13826__auto____1;
return klipse$lang$clojure$state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16798 = f__13849__auto__.call(null);
(statearr_16798[(6)] = c__13848__auto__);

return statearr_16798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});

klipse.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse.lang.clojure.compile_async = (function klipse$lang$clojure$compile_async(exp,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16807){
var state_val_16808 = (state_16807[(1)]);
if((state_val_16808 === (1))){
var inst_16802 = klipse.lang.clojure.core_compile.call(null,exp,opts);
var state_16807__$1 = state_16807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16807__$1,(2),inst_16802);
} else {
if((state_val_16808 === (2))){
var inst_16804 = (state_16807[(2)]);
var inst_16805 = klipse.lang.clojure.convert_compile_res.call(null,inst_16804);
var state_16807__$1 = state_16807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16807__$1,inst_16805);
} else {
return null;
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$compile_async_$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$compile_async_$_state_machine__13826__auto____0 = (function (){
var statearr_16809 = [null,null,null,null,null,null,null];
(statearr_16809[(0)] = klipse$lang$clojure$compile_async_$_state_machine__13826__auto__);

(statearr_16809[(1)] = (1));

return statearr_16809;
});
var klipse$lang$clojure$compile_async_$_state_machine__13826__auto____1 = (function (state_16807){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16810){if((e16810 instanceof Object)){
var ex__13829__auto__ = e16810;
var statearr_16811_16813 = state_16807;
(statearr_16811_16813[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16814 = state_16807;
state_16807 = G__16814;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$compile_async_$_state_machine__13826__auto__ = function(state_16807){
switch(arguments.length){
case 0:
return klipse$lang$clojure$compile_async_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$compile_async_$_state_machine__13826__auto____1.call(this,state_16807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$compile_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$compile_async_$_state_machine__13826__auto____0;
klipse$lang$clojure$compile_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$compile_async_$_state_machine__13826__auto____1;
return klipse$lang$clojure$compile_async_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16812 = f__13849__auto__.call(null);
(statearr_16812[(6)] = c__13848__auto__);

return statearr_16812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.lang.clojure.str_compile_async = (function klipse$lang$clojure$str_compile_async(exp,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16821){
var state_val_16822 = (state_16821[(1)]);
if((state_val_16822 === (1))){
var inst_16815 = klipse.lang.clojure.compile_async.call(null,exp,opts);
var state_16821__$1 = state_16821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16821__$1,(2),inst_16815);
} else {
if((state_val_16822 === (2))){
var inst_16817 = (state_16821[(2)]);
var inst_16818 = cljs.core.second.call(null,inst_16817);
var inst_16819 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16818)].join('');
var state_16821__$1 = state_16821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16821__$1,inst_16819);
} else {
return null;
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto____0 = (function (){
var statearr_16823 = [null,null,null,null,null,null,null];
(statearr_16823[(0)] = klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto__);

(statearr_16823[(1)] = (1));

return statearr_16823;
});
var klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto____1 = (function (state_16821){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16824){if((e16824 instanceof Object)){
var ex__13829__auto__ = e16824;
var statearr_16825_16827 = state_16821;
(statearr_16825_16827[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16828 = state_16821;
state_16821 = G__16828;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto__ = function(state_16821){
switch(arguments.length){
case 0:
return klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto____1.call(this,state_16821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto____0;
klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto____1;
return klipse$lang$clojure$str_compile_async_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16826 = f__13849__auto__.call(null);
(statearr_16826[(6)] = c__13848__auto__);

return statearr_16826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.lang.clojure.str_eval_async = (function klipse$lang$clojure$str_eval_async(exp,p__16830){
var map__16831 = p__16830;
var map__16831__$1 = ((((!((map__16831 == null)))?(((((map__16831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16831):map__16831);
var opts = map__16831__$1;
var container_id = cljs.core.get.call(null,map__16831__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[clojure] evaluating",exp);
} else {
}

var c__13848__auto___16873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto___16873,c,map__16831,map__16831__$1,opts,container_id){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto___16873,c,map__16831,map__16831__$1,opts,container_id){
return (function (state_16859){
var state_val_16860 = (state_16859[(1)]);
if((state_val_16860 === (1))){
var inst_16833 = clojure.string.blank_QMARK_.call(null,exp);
var state_16859__$1 = state_16859;
if(inst_16833){
var statearr_16861_16874 = state_16859__$1;
(statearr_16861_16874[(1)] = (2));

} else {
var statearr_16862_16875 = state_16859__$1;
(statearr_16862_16875[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (2))){
var inst_16835 = cljs.core.async.put_BANG_.call(null,c,"");
var state_16859__$1 = state_16859;
var statearr_16863_16876 = state_16859__$1;
(statearr_16863_16876[(2)] = inst_16835);

(statearr_16863_16876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (3))){
var inst_16837 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_16840 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_16841 = (function (){var _STAR_print_newline_STAR_16838 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16839 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_newline_STAR_16838,_STAR_print_fn_STAR_16839,inst_16837,inst_16840,state_val_16860,c__13848__auto___16873,c,map__16831,map__16831__$1,opts,container_id){
return (function (p1__16829_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__16829_SHARP_);
});
;})(_STAR_print_newline_STAR_16838,_STAR_print_fn_STAR_16839,inst_16837,inst_16840,state_val_16860,c__13848__auto___16873,c,map__16831,map__16831__$1,opts,container_id))
})();
var inst_16842 = cljs.core._STAR_print_fn_STAR_ = inst_16841;
var state_16859__$1 = (function (){var statearr_16864 = state_16859;
(statearr_16864[(7)] = inst_16842);

(statearr_16864[(8)] = inst_16840);

(statearr_16864[(9)] = inst_16837);

return statearr_16864;
})();
var statearr_16865_16877 = state_16859__$1;
(statearr_16865_16877[(2)] = null);

(statearr_16865_16877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (4))){
var inst_16857 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16859__$1,inst_16857);
} else {
if((state_val_16860 === (5))){
var inst_16855 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16866_16878 = state_16859__$1;
(statearr_16866_16878[(2)] = inst_16855);

(statearr_16866_16878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (6))){
var inst_16843 = (state_16859[(2)]);
var inst_16844 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_16845 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_16859__$1 = (function (){var statearr_16867 = state_16859;
(statearr_16867[(10)] = inst_16845);

(statearr_16867[(11)] = inst_16844);

(statearr_16867[(12)] = inst_16843);

return statearr_16867;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16859__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16860 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16859,null,null,(6),(5));
var inst_16849 = klipse.lang.clojure.eval_async.call(null,exp,opts);
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16859__$1,(8),inst_16849);
} else {
if((state_val_16860 === (8))){
var inst_16851 = (state_16859[(2)]);
var inst_16852 = cljs.core.second.call(null,inst_16851);
var inst_16853 = cljs.core.async.put_BANG_.call(null,c,inst_16852);
var state_16859__$1 = state_16859;
var statearr_16868_16879 = state_16859__$1;
(statearr_16868_16879[(2)] = inst_16853);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16859__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__13848__auto___16873,c,map__16831,map__16831__$1,opts,container_id))
;
return ((function (switch__13825__auto__,c__13848__auto___16873,c,map__16831,map__16831__$1,opts,container_id){
return (function() {
var klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto____0 = (function (){
var statearr_16869 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16869[(0)] = klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto__);

(statearr_16869[(1)] = (1));

return statearr_16869;
});
var klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto____1 = (function (state_16859){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16870){if((e16870 instanceof Object)){
var ex__13829__auto__ = e16870;
var statearr_16871_16880 = state_16859;
(statearr_16871_16880[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16881 = state_16859;
state_16859 = G__16881;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto__ = function(state_16859){
switch(arguments.length){
case 0:
return klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto____1.call(this,state_16859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto____0;
klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto____1;
return klipse$lang$clojure$str_eval_async_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto___16873,c,map__16831,map__16831__$1,opts,container_id))
})();
var state__13850__auto__ = (function (){var statearr_16872 = f__13849__auto__.call(null);
(statearr_16872[(6)] = c__13848__auto___16873);

return statearr_16872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto___16873,c,map__16831,map__16831__$1,opts,container_id))
);


return c;
});
klipse.lang.clojure.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clojure.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.lang.clojure.compile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure"),klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clojure.str_compile_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clojure","selector",klipse.lang.clojure.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-clojurescript","selector_js",klipse.lang.clojure.compile_opts);

//# sourceMappingURL=clojure.js.map
