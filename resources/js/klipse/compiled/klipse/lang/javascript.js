// Compiled by ClojureScript 1.10.145 {}
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
}catch (e15970){if((e15970 instanceof Object)){
var o = e15970;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_exp)].join('');
} else {
throw e15970;

}
}});
klipse.lang.javascript.append_to_chan = (function klipse$lang$javascript$append_to_chan(c){
return (function() { 
var G__15971__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",cljs.core.map.call(null,klipse.lang.javascript.beautify,args)));

cljs.core.async.put_BANG_.call(null,c,"\n");

return undefined;
};
var G__15971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15972__i = 0, G__15972__a = new Array(arguments.length -  0);
while (G__15972__i < G__15972__a.length) {G__15972__a[G__15972__i] = arguments[G__15972__i + 0]; ++G__15972__i;}
  args = new cljs.core.IndexedSeq(G__15972__a,0,null);
} 
return G__15971__delegate.call(this,args);};
G__15971.cljs$lang$maxFixedArity = 0;
G__15971.cljs$lang$applyTo = (function (arglist__15973){
var args = cljs.core.seq(arglist__15973);
return G__15971__delegate(args);
});
G__15971.cljs$core$IFn$_invoke$arity$variadic = G__15971__delegate;
return G__15971;
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
klipse.lang.javascript.str_eval_js_async = (function klipse$lang$javascript$str_eval_js_async(exp,p__15974){
var map__15975 = p__15974;
var map__15975__$1 = ((((!((map__15975 == null)))?(((((map__15975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15975):map__15975);
var async_code_QMARK_ = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__15975__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[javascript] evaluating",exp);
} else {
}

var c__13848__auto___16059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto___16059,c,map__15975,map__15975__$1,async_code_QMARK_,external_libs,container_id){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto___16059,c,map__15975,map__15975__$1,async_code_QMARK_,external_libs,container_id){
return (function (state_16030){
var state_val_16031 = (state_16030[(1)]);
if((state_val_16031 === (7))){
var inst_15989 = (state_16030[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16030,null,null,null,(6));
var inst_15994 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_15989);
var state_16030__$1 = state_16030;
if(inst_15994){
var statearr_16032_16060 = state_16030__$1;
(statearr_16032_16060[(1)] = (8));

} else {
var statearr_16033_16061 = state_16030__$1;
(statearr_16033_16061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (1))){
var inst_15977 = clojure.string.blank_QMARK_.call(null,exp);
var state_16030__$1 = state_16030;
if(inst_15977){
var statearr_16034_16062 = state_16030__$1;
(statearr_16034_16062[(1)] = (2));

} else {
var statearr_16035_16063 = state_16030__$1;
(statearr_16035_16063[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (4))){
var inst_16028 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16030__$1,inst_16028);
} else {
if((state_val_16031 === (15))){
var inst_16005 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_16006 = console.log = inst_16005;
var state_16030__$1 = (function (){var statearr_16036 = state_16030;
(statearr_16036[(8)] = inst_16006);

return statearr_16036;
})();
var statearr_16037_16064 = state_16030__$1;
(statearr_16037_16064[(2)] = null);

(statearr_16037_16064[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16030,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_16030__$1 = state_16030;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_16038_16065 = state_16030__$1;
(statearr_16038_16065[(1)] = (14));

} else {
var statearr_16039_16066 = state_16030__$1;
(statearr_16039_16066[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (6))){
var inst_16026 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16040_16067 = state_16030__$1;
(statearr_16040_16067[(2)] = inst_16026);

(statearr_16040_16067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (17))){
var inst_16015 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16041_16068 = state_16030__$1;
(statearr_16041_16068[(2)] = inst_16015);

(statearr_16041_16068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (3))){
var inst_15981 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_15985 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_15986 = klipse.utils.load_scripts.call(null,inst_15985,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),true);
var state_16030__$1 = (function (){var statearr_16042 = state_16030;
(statearr_16042[(9)] = inst_15981);

return statearr_16042;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16030__$1,(5),inst_15986);
} else {
if((state_val_16031 === (12))){
var inst_15996 = (state_16030[(2)]);
var inst_15997 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15996)].join('');
var state_16030__$1 = state_16030;
var statearr_16043_16069 = state_16030__$1;
(statearr_16043_16069[(2)] = inst_15997);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (2))){
var inst_15979 = cljs.core.async.put_BANG_.call(null,c,"");
var state_16030__$1 = state_16030;
var statearr_16044_16070 = state_16030__$1;
(statearr_16044_16070[(2)] = inst_15979);

(statearr_16044_16070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16030,null,null,(18),(17));
var inst_16012 = klipse.utils.eval_in_global_scope.call(null,exp);
var inst_16013 = klipse.lang.javascript.beautify.call(null,inst_16012);
var state_16030__$1 = state_16030;
var statearr_16045_16071 = state_16030__$1;
(statearr_16045_16071[(2)] = inst_16013);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (11))){
var inst_16019 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16046_16072 = state_16030__$1;
(statearr_16046_16072[(2)] = inst_16019);

(statearr_16046_16072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (9))){
var inst_15991 = (state_16030[(10)]);
var inst_15990 = (state_16030[(11)]);
var inst_16021 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15991),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15990)].join('');
var state_16030__$1 = state_16030;
var statearr_16047_16073 = state_16030__$1;
(statearr_16047_16073[(2)] = inst_16021);

(statearr_16047_16073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (5))){
var inst_15988 = (state_16030[(2)]);
var inst_15989 = cljs.core.nth.call(null,inst_15988,(0),null);
var inst_15990 = cljs.core.nth.call(null,inst_15988,(1),null);
var inst_15991 = cljs.core.nth.call(null,inst_15988,(2),null);
var state_16030__$1 = (function (){var statearr_16048 = state_16030;
(statearr_16048[(10)] = inst_15991);

(statearr_16048[(7)] = inst_15989);

(statearr_16048[(11)] = inst_15990);

return statearr_16048;
})();
var statearr_16049_16074 = state_16030__$1;
(statearr_16049_16074[(2)] = null);

(statearr_16049_16074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (14))){
var inst_16002 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_16030__$1 = state_16030;
var statearr_16050_16075 = state_16030__$1;
(statearr_16050_16075[(2)] = inst_16002);

(statearr_16050_16075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (16))){
var inst_16017 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16051_16076 = state_16030__$1;
(statearr_16051_16076[(2)] = inst_16017);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (10))){
var inst_16023 = (state_16030[(2)]);
var inst_16024 = cljs.core.async.put_BANG_.call(null,c,inst_16023);
var state_16030__$1 = state_16030;
var statearr_16052_16077 = state_16030__$1;
(statearr_16052_16077[(2)] = inst_16024);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (18))){
var inst_16007 = (state_16030[(2)]);
var inst_16008 = console.log = console.log;
var state_16030__$1 = (function (){var statearr_16053 = state_16030;
(statearr_16053[(12)] = inst_16008);

(statearr_16053[(13)] = inst_16007);

return statearr_16053;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (8))){
var state_16030__$1 = state_16030;
var statearr_16054_16078 = state_16030__$1;
(statearr_16054_16078[(2)] = null);

(statearr_16054_16078[(1)] = (13));


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
});})(c__13848__auto___16059,c,map__15975,map__15975__$1,async_code_QMARK_,external_libs,container_id))
;
return ((function (switch__13825__auto__,c__13848__auto___16059,c,map__15975,map__15975__$1,async_code_QMARK_,external_libs,container_id){
return (function() {
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto__ = null;
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto____0 = (function (){
var statearr_16055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16055[(0)] = klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto__);

(statearr_16055[(1)] = (1));

return statearr_16055;
});
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto____1 = (function (state_16030){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16056){if((e16056 instanceof Object)){
var ex__13829__auto__ = e16056;
var statearr_16057_16079 = state_16030;
(statearr_16057_16079[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16080 = state_16030;
state_16030 = G__16080;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto__ = function(state_16030){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto____1.call(this,state_16030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto____0;
klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto____1;
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto___16059,c,map__15975,map__15975__$1,async_code_QMARK_,external_libs,container_id))
})();
var state__13850__auto__ = (function (){var statearr_16058 = f__13849__auto__.call(null);
(statearr_16058[(6)] = c__13848__auto___16059);

return statearr_16058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto___16059,c,map__15975,map__15975__$1,async_code_QMARK_,external_libs,container_id))
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
klipse.lang.javascript.eval_es2017 = (function klipse$lang$javascript$eval_es2017(exp,p__16081){
var map__16082 = p__16081;
var map__16082__$1 = ((((!((map__16082 == null)))?(((((map__16082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16082):map__16082);
var async_code_QMARK_ = cljs.core.get.call(null,map__16082__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var container_id = cljs.core.get.call(null,map__16082__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[javascript es2017] evaluating",exp);
} else {
}

try{if(clojure.string.blank_QMARK_.call(null,exp)){
cljs.core.async.put_BANG_.call(null,c,"");
} else {
klipse.utils.setup_container_BANG_.call(null,container_id);

var transpiled_exp_16086 = klipse.lang.javascript.babel.call(null,exp);
cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(async_code_QMARK_)?klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,transpiled_exp_16086):(function (){var console_log16085 = console.log;
console.log = klipse.lang.javascript.append_to_chan.call(null,c);

try{return klipse.lang.javascript.beautify.call(null,klipse.utils.eval_in_global_scope.call(null,transpiled_exp_16086));
}finally {console.log = console_log16085;
}})()));
}
}catch (e16084){var o_16087 = e16084;
cljs.core.async.put_BANG_.call(null,c,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_16087)].join(''));
}
return c;
});
klipse.lang.javascript.es2017_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.eval_es2017,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js"),klipse.common.registry.scripts_src.call(null,"babel.min.js"),klipse.common.registry.scripts_src.call(null,"babel_polyfill.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-es2017","selector_es2017",klipse.lang.javascript.es2017_opts);

//# sourceMappingURL=javascript.js.map
