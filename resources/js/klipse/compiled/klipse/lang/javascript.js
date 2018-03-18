// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.lang.javascript');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.javascript.known_external_libs = new cljs.core.PersistentArrayMap(null, 3, ["immutable","https://raw.githubusercontent.com/facebook/immutable-js/master/dist/immutable.min.js","jQuery","https://code.jquery.com/jquery-2.2.4.js","underscore","http://underscorejs.org/underscore-min.js"], null);
klipse.lang.javascript.external_lib_path = (function klipse$lang$javascript$external_lib_path(lib_name_or_url){
return cljs.core.get.call(null,klipse.lang.javascript.known_external_libs,lib_name_or_url,lib_name_or_url);
});
klipse.lang.javascript.beautify = (function klipse$lang$javascript$beautify(js_exp){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prettyFormat(js_exp))].join('');
}catch (e38315){if((e38315 instanceof Object)){
var o = e38315;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_exp)].join('');
} else {
throw e38315;

}
}});
klipse.lang.javascript.append_to_chan = (function klipse$lang$javascript$append_to_chan(c){
return (function() { 
var G__38316__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",cljs.core.map.call(null,klipse.lang.javascript.beautify,args)));

cljs.core.async.put_BANG_.call(null,c,"\n");

return undefined;
};
var G__38316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38317__i = 0, G__38317__a = new Array(arguments.length -  0);
while (G__38317__i < G__38317__a.length) {G__38317__a[G__38317__i] = arguments[G__38317__i + 0]; ++G__38317__i;}
  args = new cljs.core.IndexedSeq(G__38317__a,0,null);
} 
return G__38316__delegate.call(this,args);};
G__38316.cljs$lang$maxFixedArity = 0;
G__38316.cljs$lang$applyTo = (function (arglist__38318){
var args = cljs.core.seq(arglist__38318);
return G__38316__delegate(args);
});
G__38316.cljs$core$IFn$_invoke$arity$variadic = G__38316__delegate;
return G__38316;
})()
;
});
/**
 * Evals an expression where the window.console object is lexically bound to an object that puts the console output on a channel.
 *   Returns the empty string.
 *   It works fine also with asynchronous code.
 */
klipse.lang.javascript.eval_with_logger_BANG_ = (function klipse$lang$javascript$eval_with_logger_BANG_(c,exp){
var logger = klipse.lang.javascript.append_to_chan.call(null,c);
var wrapped_exp = ["(function(console) {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),"}(window.klipse_snippet_console))"].join('');
klipse_snippet_console = ({"log": logger});

klipse.utils.eval_in_global_scope.call(null,wrapped_exp);

return "";
});
klipse.lang.javascript.str_eval_js_async = (function klipse$lang$javascript$str_eval_js_async(exp,p__38319){
var map__38320 = p__38319;
var map__38320__$1 = ((((!((map__38320 == null)))?((((map__38320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38320):map__38320);
var async_code_QMARK_ = cljs.core.get.call(null,map__38320__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__38320__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__38320__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[javascript] evaluating",exp);
} else {
}

var c__24600__auto___38404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___38404,c,map__38320,map__38320__$1,async_code_QMARK_,external_libs,container_id){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___38404,c,map__38320,map__38320__$1,async_code_QMARK_,external_libs,container_id){
return (function (state_38375){
var state_val_38376 = (state_38375[(1)]);
if((state_val_38376 === (7))){
var inst_38334 = (state_38375[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38375,null,null,null,(6));
var inst_38339 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_38334);
var state_38375__$1 = state_38375;
if(inst_38339){
var statearr_38377_38405 = state_38375__$1;
(statearr_38377_38405[(1)] = (8));

} else {
var statearr_38378_38406 = state_38375__$1;
(statearr_38378_38406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (1))){
var inst_38322 = clojure.string.blank_QMARK_.call(null,exp);
var state_38375__$1 = state_38375;
if(inst_38322){
var statearr_38379_38407 = state_38375__$1;
(statearr_38379_38407[(1)] = (2));

} else {
var statearr_38380_38408 = state_38375__$1;
(statearr_38380_38408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (4))){
var inst_38373 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38375__$1,inst_38373);
} else {
if((state_val_38376 === (15))){
var inst_38350 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_38351 = console.log = inst_38350;
var state_38375__$1 = (function (){var statearr_38381 = state_38375;
(statearr_38381[(8)] = inst_38351);

return statearr_38381;
})();
var statearr_38382_38409 = state_38375__$1;
(statearr_38382_38409[(2)] = null);

(statearr_38382_38409[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38375,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_38375__$1 = state_38375;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_38383_38410 = state_38375__$1;
(statearr_38383_38410[(1)] = (14));

} else {
var statearr_38384_38411 = state_38375__$1;
(statearr_38384_38411[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (6))){
var inst_38371 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
var statearr_38385_38412 = state_38375__$1;
(statearr_38385_38412[(2)] = inst_38371);

(statearr_38385_38412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (17))){
var inst_38360 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
var statearr_38386_38413 = state_38375__$1;
(statearr_38386_38413[(2)] = inst_38360);

(statearr_38386_38413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (3))){
var inst_38326 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_38330 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_38331 = klipse.utils.load_scripts.call(null,inst_38330,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),true);
var state_38375__$1 = (function (){var statearr_38387 = state_38375;
(statearr_38387[(9)] = inst_38326);

return statearr_38387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38375__$1,(5),inst_38331);
} else {
if((state_val_38376 === (12))){
var inst_38341 = (state_38375[(2)]);
var inst_38342 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38341)].join('');
var state_38375__$1 = state_38375;
var statearr_38388_38414 = state_38375__$1;
(statearr_38388_38414[(2)] = inst_38342);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (2))){
var inst_38324 = cljs.core.async.put_BANG_.call(null,c,"");
var state_38375__$1 = state_38375;
var statearr_38389_38415 = state_38375__$1;
(statearr_38389_38415[(2)] = inst_38324);

(statearr_38389_38415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38375,null,null,(18),(17));
var inst_38357 = klipse.utils.eval_in_global_scope.call(null,exp);
var inst_38358 = klipse.lang.javascript.beautify.call(null,inst_38357);
var state_38375__$1 = state_38375;
var statearr_38390_38416 = state_38375__$1;
(statearr_38390_38416[(2)] = inst_38358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (11))){
var inst_38364 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
var statearr_38391_38417 = state_38375__$1;
(statearr_38391_38417[(2)] = inst_38364);

(statearr_38391_38417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (9))){
var inst_38335 = (state_38375[(10)]);
var inst_38336 = (state_38375[(11)]);
var inst_38366 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38336),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38335)].join('');
var state_38375__$1 = state_38375;
var statearr_38392_38418 = state_38375__$1;
(statearr_38392_38418[(2)] = inst_38366);

(statearr_38392_38418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (5))){
var inst_38333 = (state_38375[(2)]);
var inst_38334 = cljs.core.nth.call(null,inst_38333,(0),null);
var inst_38335 = cljs.core.nth.call(null,inst_38333,(1),null);
var inst_38336 = cljs.core.nth.call(null,inst_38333,(2),null);
var state_38375__$1 = (function (){var statearr_38393 = state_38375;
(statearr_38393[(7)] = inst_38334);

(statearr_38393[(10)] = inst_38335);

(statearr_38393[(11)] = inst_38336);

return statearr_38393;
})();
var statearr_38394_38419 = state_38375__$1;
(statearr_38394_38419[(2)] = null);

(statearr_38394_38419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (14))){
var inst_38347 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_38375__$1 = state_38375;
var statearr_38395_38420 = state_38375__$1;
(statearr_38395_38420[(2)] = inst_38347);

(statearr_38395_38420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (16))){
var inst_38362 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
var statearr_38396_38421 = state_38375__$1;
(statearr_38396_38421[(2)] = inst_38362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (10))){
var inst_38368 = (state_38375[(2)]);
var inst_38369 = cljs.core.async.put_BANG_.call(null,c,inst_38368);
var state_38375__$1 = state_38375;
var statearr_38397_38422 = state_38375__$1;
(statearr_38397_38422[(2)] = inst_38369);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (18))){
var inst_38352 = (state_38375[(2)]);
var inst_38353 = console.log = console.log;
var state_38375__$1 = (function (){var statearr_38398 = state_38375;
(statearr_38398[(12)] = inst_38352);

(statearr_38398[(13)] = inst_38353);

return statearr_38398;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (8))){
var state_38375__$1 = state_38375;
var statearr_38399_38423 = state_38375__$1;
(statearr_38399_38423[(2)] = null);

(statearr_38399_38423[(1)] = (13));


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
}
}
}
}
}
}
});})(c__24600__auto___38404,c,map__38320,map__38320__$1,async_code_QMARK_,external_libs,container_id))
;
return ((function (switch__24510__auto__,c__24600__auto___38404,c,map__38320,map__38320__$1,async_code_QMARK_,external_libs,container_id){
return (function() {
var klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto__ = null;
var klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto____0 = (function (){
var statearr_38400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38400[(0)] = klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto__);

(statearr_38400[(1)] = (1));

return statearr_38400;
});
var klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto____1 = (function (state_38375){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38401){if((e38401 instanceof Object)){
var ex__24514__auto__ = e38401;
var statearr_38402_38424 = state_38375;
(statearr_38402_38424[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38425 = state_38375;
state_38375 = G__38425;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto__ = function(state_38375){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto____1.call(this,state_38375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto____0;
klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto____1;
return klipse$lang$javascript$str_eval_js_async_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___38404,c,map__38320,map__38320__$1,async_code_QMARK_,external_libs,container_id))
})();
var state__24602__auto__ = (function (){var statearr_38403 = f__24601__auto__.call(null);
(statearr_38403[(6)] = c__24600__auto___38404);

return statearr_38403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___38404,c,map__38320,map__38320__$1,async_code_QMARK_,external_libs,container_id))
);


return c;
});
klipse.lang.javascript.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript","selector_eval_js",klipse.lang.javascript.opts);
klipse.lang.javascript.babel = (function klipse$lang$javascript$babel(src){
return ((function (){var obj_SHARP_ = Babel;
var fn_SHARP_ = (obj_SHARP_["transform"]);
return fn_SHARP_.call(obj_SHARP_,src,({"presets": ["es2017","stage-2","stage-3"]}));
})()["code"]);
});
klipse.lang.javascript.eval_es2017 = (function klipse$lang$javascript$eval_es2017(exp,p__38426){
var map__38427 = p__38426;
var map__38427__$1 = ((((!((map__38427 == null)))?((((map__38427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38427):map__38427);
var async_code_QMARK_ = cljs.core.get.call(null,map__38427__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var container_id = cljs.core.get.call(null,map__38427__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[javascript es2017] evaluating",exp);
} else {
}

try{if(clojure.string.blank_QMARK_.call(null,exp)){
cljs.core.async.put_BANG_.call(null,c,"");
} else {
klipse.utils.setup_container_BANG_.call(null,container_id);

var transpiled_exp_38431 = klipse.lang.javascript.babel.call(null,exp);
cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(async_code_QMARK_)?klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,transpiled_exp_38431):(function (){var console_log38430 = console.log;
console.log = klipse.lang.javascript.append_to_chan.call(null,c);

try{return klipse.lang.javascript.beautify.call(null,klipse.utils.eval_in_global_scope.call(null,transpiled_exp_38431));
}finally {console.log = console_log38430;
}})()));
}
}catch (e38429){var o_38432 = e38429;
cljs.core.async.put_BANG_.call(null,c,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_38432)].join(''));
}
return c;
});
klipse.lang.javascript.es2017_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.eval_es2017,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js"),klipse.common.registry.scripts_src.call(null,"babel.min.js"),klipse.common.registry.scripts_src.call(null,"babel_polyfill.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-es2017","selector_es2017",klipse.lang.javascript.es2017_opts);

//# sourceMappingURL=javascript.js.map
