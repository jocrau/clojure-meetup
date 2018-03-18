// Compiled by ClojureScript 1.9.946 {}
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
klipse.lang.clojure.display = (function klipse$lang$clojure$display(value,p__38790){
var map__38791 = p__38790;
var map__38791__$1 = ((((!((map__38791 == null)))?((((map__38791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38791):map__38791);
var print_length = cljs.core.get.call(null,map__38791__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__38791__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var _STAR_print_length_STAR_38793 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = print_length;

try{var sb__10043__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38794_38796 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38795_38797 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38794_38796,_STAR_print_fn_STAR_38795_38797,sb__10043__auto__,_STAR_print_length_STAR_38793,map__38791,map__38791__$1,print_length,beautify_strings){
return (function (x__10044__auto__){
return sb__10043__auto__.append(x__10044__auto__);
});})(_STAR_print_newline_STAR_38794_38796,_STAR_print_fn_STAR_38795_38797,sb__10043__auto__,_STAR_print_length_STAR_38793,map__38791,map__38791__$1,print_length,beautify_strings))
;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__8904__auto__ = typeof value === 'string';
if(and__8904__auto__){
return beautify_strings;
} else {
return and__8904__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38795_38797;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38794_38796;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10043__auto__)].join('');
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_38793;
}});
klipse.lang.clojure.update_current_ns = (function klipse$lang$clojure$update_current_ns(p__38798){
var map__38799 = p__38798;
var map__38799__$1 = ((((!((map__38799 == null)))?((((map__38799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38799):map__38799);
var ns = cljs.core.get.call(null,map__38799__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__38799__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__38799__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__38799__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__38799__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__38799__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse.lang.clojure.result_as_str = (function klipse$lang$clojure$result_as_str(p__38801,opts){
var map__38802 = p__38801;
var map__38802__$1 = ((((!((map__38802 == null)))?((((map__38802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38802):map__38802);
var args = map__38802__$1;
var ns = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__38802__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
} else {
cljs.core.reset_BANG_.call(null,klipse.lang.clojure.current_ns,ns);
}

var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse.lang.clojure.display.call(null,value,opts):cljs.core.pr_str.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.read_result = (function klipse$lang$clojure$read_result(p__38804){
var map__38805 = p__38804;
var map__38805__$1 = ((((!((map__38805 == null)))?((((map__38805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38805):map__38805);
var form = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.advanced_compile = (function klipse$lang$clojure$advanced_compile(code){
return code;
});
klipse.lang.clojure.convert_compile_res = (function klipse$lang$clojure$convert_compile_res(p__38807){
var map__38808 = p__38807;
var map__38808__$1 = ((((!((map__38808 == null)))?((((map__38808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38808):map__38808);
var foo = map__38808__$1;
var value = cljs.core.get.call(null,map__38808__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__38808__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.my_eval = (function klipse$lang$clojure$my_eval(p__38810){
var map__38811 = p__38810;
var map__38811__$1 = ((((!((map__38811 == null)))?((((map__38811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38811):map__38811);
var args = map__38811__$1;
var file = cljs.core.get.call(null,map__38811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__38811__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__38811__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__38811__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__38811__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__38811__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse.lang.clojure.eval_for_compilation = (function klipse$lang$clojure$eval_for_compilation(p__38813){
var map__38814 = p__38813;
var map__38814__$1 = ((((!((map__38814 == null)))?((((map__38814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38814):map__38814);
var source = cljs.core.get.call(null,map__38814__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse.lang.clojure.original_emits = cljs.compiler.emits;
klipse.lang.clojure.core_compile_an_exp = (function klipse$lang$clojure$core_compile_an_exp(s,p__38816){
var map__38817 = p__38816;
var map__38817__$1 = ((((!((map__38817 == null)))?((((map__38817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38817):map__38817);
var static_fns = cljs.core.get.call(null,map__38817__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__38817__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__38817__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__38817__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__9268__auto__ = max_eval_duration;
var y__9269__auto__ = klipse.lang.clojure.guard.min_max_eval_duration;
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse.lang.clojure.original_emits);
var emits38819_38820 = cljs.compiler.emits;
cljs.compiler.emits = the_emits;

try{cljs.js.eval_str.call(null,klipse.lang.clojure.include.create_state_eval.call(null),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,klipse.lang.clojure.current_ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = klipse.lang.clojure.include.create_state_eval.call(null),new cljs.core.Keyword(null,"verbose","verbose",1694226060),klipse.utils.verbose_QMARK_.call(null),new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse.lang.clojure.io.load_ns,external_libs)], null),((function (emits38819_38820,c,max_eval_duration__$1,the_emits,map__38817,map__38817__$1,static_fns,external_libs,max_eval_duration,compile_display_guard){
return (function (res){
klipse.lang.clojure.update_current_ns.call(null,res);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits38819_38820,c,max_eval_duration__$1,the_emits,map__38817,map__38817__$1,static_fns,external_libs,max_eval_duration,compile_display_guard))
);
}finally {cljs.compiler.emits = emits38819_38820;
}
return c;
});
klipse.lang.clojure.core_eval_an_exp = (function klipse$lang$clojure$core_eval_an_exp(s,p__38821){
var map__38822 = p__38821;
var map__38822__$1 = ((((!((map__38822 == null)))?((((map__38822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38822):map__38822);
var static_fns = cljs.core.get.call(null,map__38822__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__38822__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__38822__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse.lang.clojure.guard.min_max_eval_duration);
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__9268__auto__ = max_eval_duration;
var y__9269__auto__ = klipse.lang.clojure.guard.min_max_eval_duration;
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})();
var emits38824_38825 = cljs.compiler.emits;
cljs.compiler.emits = cljs.core.partial.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration__$1);

try{cljs.js.eval_str.call(null,klipse.lang.clojure.include.create_state_eval.call(null),s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,klipse.lang.clojure.current_ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),klipse.utils.verbose_QMARK_.call(null),new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = klipse.lang.clojure.include.create_state_eval.call(null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse.lang.clojure.io.load_ns,external_libs)], null),((function (emits38824_38825,c,max_eval_duration__$1,map__38822,map__38822__$1,static_fns,external_libs,max_eval_duration){
return (function (res){
klipse.lang.clojure.update_current_ns.call(null,res);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits38824_38825,c,max_eval_duration__$1,map__38822,map__38822__$1,static_fns,external_libs,max_eval_duration))
);
}finally {cljs.compiler.emits = emits38824_38825;
}
return c;
});
klipse.lang.clojure.split_expressions = (function klipse$lang$clojure$split_expressions(s){
return cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\s*/),cljs.core.map.call(null,rewrite_clj.node.string,rewrite_clj.node.children.call(null,rewrite_clj.parser.parse_string_all.call(null,s))));
});
klipse.lang.clojure.populate_err = (function klipse$lang$clojure$populate_err(res,p__38826){
var map__38827 = p__38826;
var map__38827__$1 = ((((!((map__38827 == null)))?((((map__38827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38827):map__38827);
var result_element = cljs.core.get.call(null,map__38827__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__38827__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__8904__auto__ = container;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__8904__auto__;
}
})())){
goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))].join(''));
} else {
}

return res;
});
klipse.lang.clojure.core_eval = (function klipse$lang$clojure$core_eval(s,opts){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_38863){
var state_val_38864 = (state_38863[(1)]);
if((state_val_38864 === (7))){
var inst_38838 = (state_38863[(7)]);
var inst_38843 = cljs.core.first.call(null,inst_38838);
var inst_38844 = klipse.lang.clojure.core_eval_an_exp.call(null,inst_38843,opts);
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38863__$1,(10),inst_38844);
} else {
if((state_val_38864 === (1))){
var state_38863__$1 = state_38863;
var statearr_38865_38885 = state_38863__$1;
(statearr_38865_38885[(2)] = null);

(statearr_38865_38885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38863,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_38837 = klipse.lang.clojure.split_expressions.call(null,s);
var inst_38838 = inst_38837;
var inst_38839 = null;
var state_38863__$1 = (function (){var statearr_38866 = state_38863;
(statearr_38866[(8)] = inst_38839);

(statearr_38866[(7)] = inst_38838);

return statearr_38866;
})();
var statearr_38867_38886 = state_38863__$1;
(statearr_38867_38886[(2)] = null);

(statearr_38867_38886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (13))){
var inst_38854 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38868_38887 = state_38863__$1;
(statearr_38868_38887[(2)] = inst_38854);

(statearr_38868_38887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (6))){
var inst_38859 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38869_38888 = state_38863__$1;
(statearr_38869_38888[(2)] = inst_38859);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (3))){
var inst_38829 = (state_38863[(2)]);
var inst_38830 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_38831 = [inst_38829];
var inst_38832 = cljs.core.PersistentHashMap.fromArrays(inst_38830,inst_38831);
var inst_38833 = klipse.lang.clojure.populate_err.call(null,inst_38832,opts);
var state_38863__$1 = state_38863;
var statearr_38870_38889 = state_38863__$1;
(statearr_38870_38889[(2)] = inst_38833);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (12))){
var inst_38846 = (state_38863[(9)]);
var inst_38838 = (state_38863[(7)]);
var inst_38851 = cljs.core.rest.call(null,inst_38838);
var inst_38838__$1 = inst_38851;
var inst_38839 = inst_38846;
var state_38863__$1 = (function (){var statearr_38871 = state_38863;
(statearr_38871[(8)] = inst_38839);

(statearr_38871[(7)] = inst_38838__$1);

return statearr_38871;
})();
var statearr_38872_38890 = state_38863__$1;
(statearr_38872_38890[(2)] = null);

(statearr_38872_38890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (2))){
var inst_38861 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38863__$1,inst_38861);
} else {
if((state_val_38864 === (11))){
var inst_38846 = (state_38863[(9)]);
var inst_38849 = klipse.lang.clojure.populate_err.call(null,inst_38846,opts);
var state_38863__$1 = state_38863;
var statearr_38873_38891 = state_38863__$1;
(statearr_38873_38891[(2)] = inst_38849);

(statearr_38873_38891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (9))){
var inst_38857 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38874_38892 = state_38863__$1;
(statearr_38874_38892[(2)] = inst_38857);

(statearr_38874_38892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (5))){
var inst_38838 = (state_38863[(7)]);
var inst_38841 = cljs.core.seq.call(null,inst_38838);
var state_38863__$1 = state_38863;
if(inst_38841){
var statearr_38875_38893 = state_38863__$1;
(statearr_38875_38893[(1)] = (7));

} else {
var statearr_38876_38894 = state_38863__$1;
(statearr_38876_38894[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (10))){
var inst_38846 = (state_38863[(9)]);
var inst_38846__$1 = (state_38863[(2)]);
var inst_38847 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_38846__$1);
var state_38863__$1 = (function (){var statearr_38877 = state_38863;
(statearr_38877[(9)] = inst_38846__$1);

return statearr_38877;
})();
if(cljs.core.truth_(inst_38847)){
var statearr_38878_38895 = state_38863__$1;
(statearr_38878_38895[(1)] = (11));

} else {
var statearr_38879_38896 = state_38863__$1;
(statearr_38879_38896[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (8))){
var inst_38839 = (state_38863[(8)]);
var state_38863__$1 = state_38863;
var statearr_38880_38897 = state_38863__$1;
(statearr_38880_38897[(2)] = inst_38839);

(statearr_38880_38897[(1)] = (9));


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
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$core_eval_$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$core_eval_$_state_machine__24511__auto____0 = (function (){
var statearr_38881 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38881[(0)] = klipse$lang$clojure$core_eval_$_state_machine__24511__auto__);

(statearr_38881[(1)] = (1));

return statearr_38881;
});
var klipse$lang$clojure$core_eval_$_state_machine__24511__auto____1 = (function (state_38863){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38882){if((e38882 instanceof Object)){
var ex__24514__auto__ = e38882;
var statearr_38883_38898 = state_38863;
(statearr_38883_38898[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38899 = state_38863;
state_38863 = G__38899;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$core_eval_$_state_machine__24511__auto__ = function(state_38863){
switch(arguments.length){
case 0:
return klipse$lang$clojure$core_eval_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$core_eval_$_state_machine__24511__auto____1.call(this,state_38863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$core_eval_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$core_eval_$_state_machine__24511__auto____0;
klipse$lang$clojure$core_eval_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$core_eval_$_state_machine__24511__auto____1;
return klipse$lang$clojure$core_eval_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38884 = f__24601__auto__.call(null);
(statearr_38884[(6)] = c__24600__auto__);

return statearr_38884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
/**
 * receives a string.
 *   returns true if the expression is a string of an ns-form like (ns my.foo...) or (require 'my.foo).
 *   
 */
klipse.lang.clojure.ns_exp_QMARK_ = (function klipse$lang$clojure$ns_exp_QMARK_(exp){
var form = cljs.reader.read_string.call(null,exp);
var and__8904__auto__ = cljs.core.seq_QMARK_.call(null,form);
if(and__8904__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"import","import",241030818,null),null,new cljs.core.Symbol(null,"use-macros","use-macros",734893134,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"use","use",-205850897,null),null,new cljs.core.Symbol(null,"require","require",1172530194,null),null,new cljs.core.Symbol(null,"require-macros","require-macros",-1946488353,null),null,new cljs.core.Symbol(null,"refer-clojure","refer-clojure",-1840651329,null),null], null), null).call(null,cljs.core.first.call(null,form));
} else {
return and__8904__auto__;
}
});
klipse.lang.clojure.core_compile = (function klipse$lang$clojure$core_compile(s,opts){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_38937){
var state_val_38938 = (state_38937[(1)]);
if((state_val_38938 === (7))){
var inst_38908 = (state_38937[(7)]);
var inst_38913 = cljs.core.first.call(null,inst_38908);
var inst_38914 = klipse.lang.clojure.core_compile_an_exp.call(null,inst_38913,opts);
var state_38937__$1 = state_38937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38937__$1,(10),inst_38914);
} else {
if((state_val_38938 === (1))){
var state_38937__$1 = state_38937;
var statearr_38939_38959 = state_38937__$1;
(statearr_38939_38959[(2)] = null);

(statearr_38939_38959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38937,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_38907 = klipse.lang.clojure.split_expressions.call(null,s);
var inst_38908 = inst_38907;
var inst_38909 = "";
var state_38937__$1 = (function (){var statearr_38940 = state_38937;
(statearr_38940[(7)] = inst_38908);

(statearr_38940[(8)] = inst_38909);

return statearr_38940;
})();
var statearr_38941_38960 = state_38937__$1;
(statearr_38941_38960[(2)] = null);

(statearr_38941_38960[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (13))){
var inst_38925 = (state_38937[(2)]);
var state_38937__$1 = state_38937;
var statearr_38942_38961 = state_38937__$1;
(statearr_38942_38961[(2)] = inst_38925);

(statearr_38942_38961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (6))){
var inst_38933 = (state_38937[(2)]);
var state_38937__$1 = state_38937;
var statearr_38943_38962 = state_38937__$1;
(statearr_38943_38962[(2)] = inst_38933);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (3))){
var inst_38900 = (state_38937[(2)]);
var inst_38901 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_38902 = [inst_38900];
var inst_38903 = cljs.core.PersistentHashMap.fromArrays(inst_38901,inst_38902);
var state_38937__$1 = state_38937;
var statearr_38944_38963 = state_38937__$1;
(statearr_38944_38963[(2)] = inst_38903);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (12))){
var inst_38916 = (state_38937[(9)]);
var inst_38908 = (state_38937[(7)]);
var inst_38909 = (state_38937[(8)]);
var inst_38920 = cljs.core.rest.call(null,inst_38908);
var inst_38921 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_38916);
var inst_38922 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38909),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38921)].join('');
var inst_38908__$1 = inst_38920;
var inst_38909__$1 = inst_38922;
var state_38937__$1 = (function (){var statearr_38945 = state_38937;
(statearr_38945[(7)] = inst_38908__$1);

(statearr_38945[(8)] = inst_38909__$1);

return statearr_38945;
})();
var statearr_38946_38964 = state_38937__$1;
(statearr_38946_38964[(2)] = null);

(statearr_38946_38964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (2))){
var inst_38935 = (state_38937[(2)]);
var state_38937__$1 = state_38937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38937__$1,inst_38935);
} else {
if((state_val_38938 === (11))){
var inst_38916 = (state_38937[(9)]);
var state_38937__$1 = state_38937;
var statearr_38947_38965 = state_38937__$1;
(statearr_38947_38965[(2)] = inst_38916);

(statearr_38947_38965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (9))){
var inst_38931 = (state_38937[(2)]);
var state_38937__$1 = state_38937;
var statearr_38948_38966 = state_38937__$1;
(statearr_38948_38966[(2)] = inst_38931);

(statearr_38948_38966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (5))){
var inst_38908 = (state_38937[(7)]);
var inst_38911 = cljs.core.seq.call(null,inst_38908);
var state_38937__$1 = state_38937;
if(inst_38911){
var statearr_38949_38967 = state_38937__$1;
(statearr_38949_38967[(1)] = (7));

} else {
var statearr_38950_38968 = state_38937__$1;
(statearr_38950_38968[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (10))){
var inst_38916 = (state_38937[(9)]);
var inst_38916__$1 = (state_38937[(2)]);
var inst_38917 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_38916__$1);
var state_38937__$1 = (function (){var statearr_38951 = state_38937;
(statearr_38951[(9)] = inst_38916__$1);

return statearr_38951;
})();
if(cljs.core.truth_(inst_38917)){
var statearr_38952_38969 = state_38937__$1;
(statearr_38952_38969[(1)] = (11));

} else {
var statearr_38953_38970 = state_38937__$1;
(statearr_38953_38970[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38938 === (8))){
var inst_38909 = (state_38937[(8)]);
var inst_38927 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_38928 = [inst_38909];
var inst_38929 = cljs.core.PersistentHashMap.fromArrays(inst_38927,inst_38928);
var state_38937__$1 = state_38937;
var statearr_38954_38971 = state_38937__$1;
(statearr_38954_38971[(2)] = inst_38929);

(statearr_38954_38971[(1)] = (9));


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
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$core_compile_$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$core_compile_$_state_machine__24511__auto____0 = (function (){
var statearr_38955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38955[(0)] = klipse$lang$clojure$core_compile_$_state_machine__24511__auto__);

(statearr_38955[(1)] = (1));

return statearr_38955;
});
var klipse$lang$clojure$core_compile_$_state_machine__24511__auto____1 = (function (state_38937){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38956){if((e38956 instanceof Object)){
var ex__24514__auto__ = e38956;
var statearr_38957_38972 = state_38937;
(statearr_38957_38972[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38973 = state_38937;
state_38937 = G__38973;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$core_compile_$_state_machine__24511__auto__ = function(state_38937){
switch(arguments.length){
case 0:
return klipse$lang$clojure$core_compile_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$core_compile_$_state_machine__24511__auto____1.call(this,state_38937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$core_compile_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$core_compile_$_state_machine__24511__auto____0;
klipse$lang$clojure$core_compile_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$core_compile_$_state_machine__24511__auto____1;
return klipse$lang$clojure$core_compile_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38958 = f__24601__auto__.call(null);
(statearr_38958[(6)] = c__24600__auto__);

return statearr_38958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.lang.clojure.eval_async = (function klipse$lang$clojure$eval_async(s,opts){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_38979){
var state_val_38980 = (state_38979[(1)]);
if((state_val_38980 === (1))){
var inst_38974 = klipse.lang.clojure.core_eval.call(null,s,opts);
var state_38979__$1 = state_38979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38979__$1,(2),inst_38974);
} else {
if((state_val_38980 === (2))){
var inst_38976 = (state_38979[(2)]);
var inst_38977 = klipse.lang.clojure.result_as_str.call(null,inst_38976,opts);
var state_38979__$1 = state_38979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38979__$1,inst_38977);
} else {
return null;
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$eval_async_$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$eval_async_$_state_machine__24511__auto____0 = (function (){
var statearr_38981 = [null,null,null,null,null,null,null];
(statearr_38981[(0)] = klipse$lang$clojure$eval_async_$_state_machine__24511__auto__);

(statearr_38981[(1)] = (1));

return statearr_38981;
});
var klipse$lang$clojure$eval_async_$_state_machine__24511__auto____1 = (function (state_38979){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38982){if((e38982 instanceof Object)){
var ex__24514__auto__ = e38982;
var statearr_38983_38985 = state_38979;
(statearr_38983_38985[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38986 = state_38979;
state_38979 = G__38986;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$eval_async_$_state_machine__24511__auto__ = function(state_38979){
switch(arguments.length){
case 0:
return klipse$lang$clojure$eval_async_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$eval_async_$_state_machine__24511__auto____1.call(this,state_38979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$eval_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$eval_async_$_state_machine__24511__auto____0;
klipse$lang$clojure$eval_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$eval_async_$_state_machine__24511__auto____1;
return klipse$lang$clojure$eval_async_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38984 = f__24601__auto__.call(null);
(statearr_38984[(6)] = c__24600__auto__);

return statearr_38984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
/**
 * used for testing
 */
klipse.lang.clojure.eval = (function klipse$lang$clojure$eval(var_args){
var G__38988 = arguments.length;
switch (G__38988) {
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
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_38994){
var state_val_38995 = (state_38994[(1)]);
if((state_val_38995 === (1))){
var inst_38989 = klipse.lang.clojure.core_eval.call(null,s,opts);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(2),inst_38989);
} else {
if((state_val_38995 === (2))){
var inst_38991 = (state_38994[(2)]);
var inst_38992 = klipse.lang.clojure.read_result.call(null,inst_38991);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38994__$1,inst_38992);
} else {
return null;
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$state_machine__24511__auto__ = null;
var klipse$lang$clojure$state_machine__24511__auto____0 = (function (){
var statearr_38996 = [null,null,null,null,null,null,null];
(statearr_38996[(0)] = klipse$lang$clojure$state_machine__24511__auto__);

(statearr_38996[(1)] = (1));

return statearr_38996;
});
var klipse$lang$clojure$state_machine__24511__auto____1 = (function (state_38994){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38997){if((e38997 instanceof Object)){
var ex__24514__auto__ = e38997;
var statearr_38998_39001 = state_38994;
(statearr_38998_39001[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39002 = state_38994;
state_38994 = G__39002;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$state_machine__24511__auto__ = function(state_38994){
switch(arguments.length){
case 0:
return klipse$lang$clojure$state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$state_machine__24511__auto____1.call(this,state_38994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$state_machine__24511__auto____0;
klipse$lang$clojure$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$state_machine__24511__auto____1;
return klipse$lang$clojure$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38999 = f__24601__auto__.call(null);
(statearr_38999[(6)] = c__24600__auto__);

return statearr_38999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});

klipse.lang.clojure.eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javacript
 */
klipse.lang.clojure.eval_and_callback = (function klipse$lang$clojure$eval_and_callback(s,cb){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_39009){
var state_val_39010 = (state_39009[(1)]);
if((state_val_39010 === (1))){
var inst_39003 = klipse.lang.clojure.eval.call(null,s);
var state_39009__$1 = state_39009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39009__$1,(2),inst_39003);
} else {
if((state_val_39010 === (2))){
var inst_39005 = (state_39009[(2)]);
var inst_39006 = cljs.core.clj__GT_js.call(null,inst_39005);
var inst_39007 = cb.call(null,inst_39006);
var state_39009__$1 = state_39009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39009__$1,inst_39007);
} else {
return null;
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto____0 = (function (){
var statearr_39011 = [null,null,null,null,null,null,null];
(statearr_39011[(0)] = klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto__);

(statearr_39011[(1)] = (1));

return statearr_39011;
});
var klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto____1 = (function (state_39009){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_39009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e39012){if((e39012 instanceof Object)){
var ex__24514__auto__ = e39012;
var statearr_39013_39015 = state_39009;
(statearr_39013_39015[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39016 = state_39009;
state_39009 = G__39016;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto__ = function(state_39009){
switch(arguments.length){
case 0:
return klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto____1.call(this,state_39009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto____0;
klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto____1;
return klipse$lang$clojure$eval_and_callback_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_39014 = f__24601__auto__.call(null);
(statearr_39014[(6)] = c__24600__auto__);

return statearr_39014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
/**
 * useful for testing and js export
 */
klipse.lang.clojure.str_compile = (function klipse$lang$clojure$str_compile(var_args){
var G__39018 = arguments.length;
switch (G__39018) {
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
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_39024){
var state_val_39025 = (state_39024[(1)]);
if((state_val_39025 === (1))){
var inst_39019 = klipse.lang.clojure.core_compile.call(null,exp,opts);
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39024__$1,(2),inst_39019);
} else {
if((state_val_39025 === (2))){
var inst_39021 = (state_39024[(2)]);
var inst_39022 = klipse.lang.clojure.convert_compile_res.call(null,inst_39021);
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39024__$1,inst_39022);
} else {
return null;
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$state_machine__24511__auto__ = null;
var klipse$lang$clojure$state_machine__24511__auto____0 = (function (){
var statearr_39026 = [null,null,null,null,null,null,null];
(statearr_39026[(0)] = klipse$lang$clojure$state_machine__24511__auto__);

(statearr_39026[(1)] = (1));

return statearr_39026;
});
var klipse$lang$clojure$state_machine__24511__auto____1 = (function (state_39024){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_39024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e39027){if((e39027 instanceof Object)){
var ex__24514__auto__ = e39027;
var statearr_39028_39031 = state_39024;
(statearr_39028_39031[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39032 = state_39024;
state_39024 = G__39032;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$state_machine__24511__auto__ = function(state_39024){
switch(arguments.length){
case 0:
return klipse$lang$clojure$state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$state_machine__24511__auto____1.call(this,state_39024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$state_machine__24511__auto____0;
klipse$lang$clojure$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$state_machine__24511__auto____1;
return klipse$lang$clojure$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_39029 = f__24601__auto__.call(null);
(statearr_39029[(6)] = c__24600__auto__);

return statearr_39029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});

klipse.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse.lang.clojure.compile_async = (function klipse$lang$clojure$compile_async(exp,opts){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_39038){
var state_val_39039 = (state_39038[(1)]);
if((state_val_39039 === (1))){
var inst_39033 = klipse.lang.clojure.core_compile.call(null,exp,opts);
var state_39038__$1 = state_39038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39038__$1,(2),inst_39033);
} else {
if((state_val_39039 === (2))){
var inst_39035 = (state_39038[(2)]);
var inst_39036 = klipse.lang.clojure.convert_compile_res.call(null,inst_39035);
var state_39038__$1 = state_39038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39038__$1,inst_39036);
} else {
return null;
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$compile_async_$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$compile_async_$_state_machine__24511__auto____0 = (function (){
var statearr_39040 = [null,null,null,null,null,null,null];
(statearr_39040[(0)] = klipse$lang$clojure$compile_async_$_state_machine__24511__auto__);

(statearr_39040[(1)] = (1));

return statearr_39040;
});
var klipse$lang$clojure$compile_async_$_state_machine__24511__auto____1 = (function (state_39038){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_39038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e39041){if((e39041 instanceof Object)){
var ex__24514__auto__ = e39041;
var statearr_39042_39044 = state_39038;
(statearr_39042_39044[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39045 = state_39038;
state_39038 = G__39045;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$compile_async_$_state_machine__24511__auto__ = function(state_39038){
switch(arguments.length){
case 0:
return klipse$lang$clojure$compile_async_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$compile_async_$_state_machine__24511__auto____1.call(this,state_39038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$compile_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$compile_async_$_state_machine__24511__auto____0;
klipse$lang$clojure$compile_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$compile_async_$_state_machine__24511__auto____1;
return klipse$lang$clojure$compile_async_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_39043 = f__24601__auto__.call(null);
(statearr_39043[(6)] = c__24600__auto__);

return statearr_39043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.lang.clojure.str_compile_async = (function klipse$lang$clojure$str_compile_async(exp,opts){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_39052){
var state_val_39053 = (state_39052[(1)]);
if((state_val_39053 === (1))){
var inst_39046 = klipse.lang.clojure.compile_async.call(null,exp,opts);
var state_39052__$1 = state_39052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39052__$1,(2),inst_39046);
} else {
if((state_val_39053 === (2))){
var inst_39048 = (state_39052[(2)]);
var inst_39049 = cljs.core.second.call(null,inst_39048);
var inst_39050 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39049)].join('');
var state_39052__$1 = state_39052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39052__$1,inst_39050);
} else {
return null;
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto____0 = (function (){
var statearr_39054 = [null,null,null,null,null,null,null];
(statearr_39054[(0)] = klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto__);

(statearr_39054[(1)] = (1));

return statearr_39054;
});
var klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto____1 = (function (state_39052){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_39052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e39055){if((e39055 instanceof Object)){
var ex__24514__auto__ = e39055;
var statearr_39056_39058 = state_39052;
(statearr_39056_39058[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39059 = state_39052;
state_39052 = G__39059;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto__ = function(state_39052){
switch(arguments.length){
case 0:
return klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto____1.call(this,state_39052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto____0;
klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto____1;
return klipse$lang$clojure$str_compile_async_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_39057 = f__24601__auto__.call(null);
(statearr_39057[(6)] = c__24600__auto__);

return statearr_39057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.lang.clojure.str_eval_async = (function klipse$lang$clojure$str_eval_async(exp,p__39061){
var map__39062 = p__39061;
var map__39062__$1 = ((((!((map__39062 == null)))?((((map__39062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39062):map__39062);
var opts = map__39062__$1;
var container_id = cljs.core.get.call(null,map__39062__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[clojure] evaluating",exp);
} else {
}

var c__24600__auto___39104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___39104,c,map__39062,map__39062__$1,opts,container_id){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___39104,c,map__39062,map__39062__$1,opts,container_id){
return (function (state_39090){
var state_val_39091 = (state_39090[(1)]);
if((state_val_39091 === (1))){
var inst_39064 = clojure.string.blank_QMARK_.call(null,exp);
var state_39090__$1 = state_39090;
if(inst_39064){
var statearr_39092_39105 = state_39090__$1;
(statearr_39092_39105[(1)] = (2));

} else {
var statearr_39093_39106 = state_39090__$1;
(statearr_39093_39106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39091 === (2))){
var inst_39066 = cljs.core.async.put_BANG_.call(null,c,"");
var state_39090__$1 = state_39090;
var statearr_39094_39107 = state_39090__$1;
(statearr_39094_39107[(2)] = inst_39066);

(statearr_39094_39107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39091 === (3))){
var inst_39068 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_39071 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_39072 = (function (){var _STAR_print_newline_STAR_39069 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39070 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_newline_STAR_39069,_STAR_print_fn_STAR_39070,inst_39068,inst_39071,state_val_39091,c__24600__auto___39104,c,map__39062,map__39062__$1,opts,container_id){
return (function (p1__39060_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__39060_SHARP_);
});
;})(_STAR_print_newline_STAR_39069,_STAR_print_fn_STAR_39070,inst_39068,inst_39071,state_val_39091,c__24600__auto___39104,c,map__39062,map__39062__$1,opts,container_id))
})();
var inst_39073 = cljs.core._STAR_print_fn_STAR_ = inst_39072;
var state_39090__$1 = (function (){var statearr_39095 = state_39090;
(statearr_39095[(7)] = inst_39071);

(statearr_39095[(8)] = inst_39068);

(statearr_39095[(9)] = inst_39073);

return statearr_39095;
})();
var statearr_39096_39108 = state_39090__$1;
(statearr_39096_39108[(2)] = null);

(statearr_39096_39108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39091 === (4))){
var inst_39088 = (state_39090[(2)]);
var state_39090__$1 = state_39090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39090__$1,inst_39088);
} else {
if((state_val_39091 === (5))){
var inst_39086 = (state_39090[(2)]);
var state_39090__$1 = state_39090;
var statearr_39097_39109 = state_39090__$1;
(statearr_39097_39109[(2)] = inst_39086);

(statearr_39097_39109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39091 === (6))){
var inst_39074 = (state_39090[(2)]);
var inst_39075 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_39076 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_39090__$1 = (function (){var statearr_39098 = state_39090;
(statearr_39098[(10)] = inst_39075);

(statearr_39098[(11)] = inst_39076);

(statearr_39098[(12)] = inst_39074);

return statearr_39098;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39090__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39091 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39090,null,null,(6),(5));
var inst_39080 = klipse.lang.clojure.eval_async.call(null,exp,opts);
var state_39090__$1 = state_39090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39090__$1,(8),inst_39080);
} else {
if((state_val_39091 === (8))){
var inst_39082 = (state_39090[(2)]);
var inst_39083 = cljs.core.second.call(null,inst_39082);
var inst_39084 = cljs.core.async.put_BANG_.call(null,c,inst_39083);
var state_39090__$1 = state_39090;
var statearr_39099_39110 = state_39090__$1;
(statearr_39099_39110[(2)] = inst_39084);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39090__$1);

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
});})(c__24600__auto___39104,c,map__39062,map__39062__$1,opts,container_id))
;
return ((function (switch__24510__auto__,c__24600__auto___39104,c,map__39062,map__39062__$1,opts,container_id){
return (function() {
var klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto____0 = (function (){
var statearr_39100 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39100[(0)] = klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto__);

(statearr_39100[(1)] = (1));

return statearr_39100;
});
var klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto____1 = (function (state_39090){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_39090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e39101){if((e39101 instanceof Object)){
var ex__24514__auto__ = e39101;
var statearr_39102_39111 = state_39090;
(statearr_39102_39111[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39112 = state_39090;
state_39090 = G__39112;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto__ = function(state_39090){
switch(arguments.length){
case 0:
return klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto____1.call(this,state_39090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto____0;
klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto____1;
return klipse$lang$clojure$str_eval_async_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___39104,c,map__39062,map__39062__$1,opts,container_id))
})();
var state__24602__auto__ = (function (){var statearr_39103 = f__24601__auto__.call(null);
(statearr_39103[(6)] = c__24600__auto___39104);

return statearr_39103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___39104,c,map__39062,map__39062__$1,opts,container_id))
);


return c;
});
klipse.lang.clojure.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clojure.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.lang.clojure.compile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure"),klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clojure.str_compile_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clojure","selector",klipse.lang.clojure.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-clojurescript","selector_js",klipse.lang.clojure.compile_opts);

//# sourceMappingURL=clojure.js.map
