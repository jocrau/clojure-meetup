// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.plugin');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('klipse.args_from_element');
goog.require('klipse.klipse_editors');
goog.require('klipse.utils');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('gadjett.collections');
klipse.plugin.out_placeholder = "the evaluation will appear here (soon)...";
klipse.plugin.snippet_counter = cljs.core.atom.call(null,(0));
klipse.plugin.snippet_num_BANG_ = (function klipse$plugin$snippet_num_BANG_(){
var res = cljs.core.deref.call(null,klipse.plugin.snippet_counter);
cljs.core.swap_BANG_.call(null,klipse.plugin.snippet_counter,cljs.core.inc);

return res;
});
klipse.plugin.calc_editor_args_from_element = (function klipse$plugin$calc_editor_args_from_element(element,global_idle_msec,min_idle_msec,global_editor_type){
var map__37864 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__37864__$1 = ((((!((map__37864 == null)))?((((map__37864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37864):map__37864);
var idle_msec = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__9268__auto__ = min_idle_msec;
var y__9269__auto__ = idle_msec;
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__37866 = the_type;
switch (G__37866) {
case "code-mirror":
return new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768);

break;
case "dom":
return new cljs.core.Keyword(null,"dom","dom",-1236537922);

break;
case "html":
return new cljs.core.Keyword(null,"html","html",-998796897);

break;
default:
return new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768);

}
}
});
klipse.plugin.load_external_scripts = (function klipse$plugin$load_external_scripts(scripts,no_dynamic_scritps_QMARK_){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_37897){
var state_val_37898 = (state_37897[(1)]);
if((state_val_37898 === (1))){
var state_37897__$1 = state_37897;
if(cljs.core.truth_(no_dynamic_scritps_QMARK_)){
var statearr_37899_37912 = state_37897__$1;
(statearr_37899_37912[(1)] = (2));

} else {
var statearr_37900_37913 = state_37897__$1;
(statearr_37900_37913[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37898 === (2))){
var inst_37869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37870 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_37871 = (new cljs.core.PersistentVector(null,2,(5),inst_37869,inst_37870,null));
var state_37897__$1 = state_37897;
var statearr_37901_37914 = state_37897__$1;
(statearr_37901_37914[(2)] = inst_37871);

(statearr_37901_37914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37898 === (3))){
var inst_37876 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_37897__$1 = state_37897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37897__$1,(5),inst_37876);
} else {
if((state_val_37898 === (4))){
var inst_37895 = (state_37897[(2)]);
var state_37897__$1 = state_37897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37897__$1,inst_37895);
} else {
if((state_val_37898 === (5))){
var inst_37878 = (state_37897[(2)]);
var inst_37879 = cljs.core.nth.call(null,inst_37878,(0),null);
var inst_37880 = cljs.core.nth.call(null,inst_37878,(1),null);
var inst_37881 = cljs.core.nth.call(null,inst_37878,(2),null);
var inst_37882 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_37879);
var state_37897__$1 = (function (){var statearr_37902 = state_37897;
(statearr_37902[(7)] = inst_37880);

(statearr_37902[(8)] = inst_37881);

return statearr_37902;
})();
if(inst_37882){
var statearr_37903_37915 = state_37897__$1;
(statearr_37903_37915[(1)] = (6));

} else {
var statearr_37904_37916 = state_37897__$1;
(statearr_37904_37916[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37898 === (6))){
var inst_37884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37885 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_37886 = (new cljs.core.PersistentVector(null,2,(5),inst_37884,inst_37885,null));
var state_37897__$1 = state_37897;
var statearr_37905_37917 = state_37897__$1;
(statearr_37905_37917[(2)] = inst_37886);

(statearr_37905_37917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37898 === (7))){
var inst_37880 = (state_37897[(7)]);
var inst_37881 = (state_37897[(8)]);
var inst_37888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37889 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37881),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37880)].join('');
var inst_37890 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_37889];
var inst_37891 = (new cljs.core.PersistentVector(null,2,(5),inst_37888,inst_37890,null));
var state_37897__$1 = state_37897;
var statearr_37906_37918 = state_37897__$1;
(statearr_37906_37918[(2)] = inst_37891);

(statearr_37906_37918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37898 === (8))){
var inst_37893 = (state_37897[(2)]);
var state_37897__$1 = state_37897;
var statearr_37907_37919 = state_37897__$1;
(statearr_37907_37919[(2)] = inst_37893);

(statearr_37907_37919[(1)] = (4));


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
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$plugin$load_external_scripts_$_state_machine__24511__auto__ = null;
var klipse$plugin$load_external_scripts_$_state_machine__24511__auto____0 = (function (){
var statearr_37908 = [null,null,null,null,null,null,null,null,null];
(statearr_37908[(0)] = klipse$plugin$load_external_scripts_$_state_machine__24511__auto__);

(statearr_37908[(1)] = (1));

return statearr_37908;
});
var klipse$plugin$load_external_scripts_$_state_machine__24511__auto____1 = (function (state_37897){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37909){if((e37909 instanceof Object)){
var ex__24514__auto__ = e37909;
var statearr_37910_37920 = state_37897;
(statearr_37910_37920[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37921 = state_37897;
state_37897 = G__37921;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__24511__auto__ = function(state_37897){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__24511__auto____1.call(this,state_37897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$load_external_scripts_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__24511__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__24511__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_37911 = f__24601__auto__.call(null);
(statearr_37911[(6)] = c__24600__auto__);

return statearr_37911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__37924,p__37925){
var map__37926 = p__37924;
var map__37926__$1 = ((((!((map__37926 == null)))?((((map__37926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37926):map__37926);
var no_dynamic_scripts = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var eval_idle_msec = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var minimalistic_ui = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var editor_type = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var print_length = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var beautify_strings = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var codemirror_options_in = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var codemirror_options_out = cljs.core.get.call(null,map__37926__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var map__37927 = p__37925;
var map__37927__$1 = ((((!((map__37927 == null)))?((((map__37927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37927):map__37927);
var lang_opts = map__37927__$1;
var eval_fn = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__37927__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (state_38011){
var state_val_38012 = (state_38011[(1)]);
if((state_val_38012 === (7))){
var state_38011__$1 = state_38011;
var statearr_38013_38061 = state_38011__$1;
(statearr_38013_38061[(2)] = false);

(statearr_38013_38061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (20))){
var inst_37980 = (state_38011[(7)]);
var state_38011__$1 = state_38011;
var statearr_38014_38062 = state_38011__$1;
(statearr_38014_38062[(2)] = inst_37980);

(statearr_38014_38062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (27))){
var inst_37979 = (state_38011[(8)]);
var inst_37998 = (state_38011[(2)]);
var inst_37999 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_37979);
var state_38011__$1 = (function (){var statearr_38015 = state_38011;
(statearr_38015[(9)] = inst_37998);

return statearr_38015;
})();
if(inst_37999){
var statearr_38016_38063 = state_38011__$1;
(statearr_38016_38063[(1)] = (28));

} else {
var statearr_38017_38064 = state_38011__$1;
(statearr_38017_38064[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (1))){
var state_38011__$1 = state_38011;
if(cljs.core.truth_(element)){
var statearr_38018_38065 = state_38011__$1;
(statearr_38018_38065[(1)] = (2));

} else {
var statearr_38019_38066 = state_38011__$1;
(statearr_38019_38066[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (24))){
var inst_37979 = (state_38011[(8)]);
var inst_37991 = (state_38011[(2)]);
var inst_37992 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_37993 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_37979);
var state_38011__$1 = (function (){var statearr_38020 = state_38011;
(statearr_38020[(10)] = inst_37992);

(statearr_38020[(11)] = inst_37991);

return statearr_38020;
})();
if(inst_37993){
var statearr_38021_38067 = state_38011__$1;
(statearr_38021_38067[(1)] = (25));

} else {
var statearr_38022_38068 = state_38011__$1;
(statearr_38022_38068[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (4))){
var inst_38009 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38011__$1,inst_38009);
} else {
if((state_val_38012 === (15))){
var inst_37966 = (state_38011[(12)]);
var state_38011__$1 = state_38011;
var statearr_38023_38069 = state_38011__$1;
(statearr_38023_38069[(2)] = inst_37966);

(statearr_38023_38069[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (21))){
var inst_37979 = (state_38011[(8)]);
var inst_37986 = (state_38011[(2)]);
var inst_37987 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_37979);
var state_38011__$1 = (function (){var statearr_38024 = state_38011;
(statearr_38024[(13)] = inst_37986);

return statearr_38024;
})();
if(inst_37987){
var statearr_38025_38070 = state_38011__$1;
(statearr_38025_38070[(1)] = (22));

} else {
var statearr_38026_38071 = state_38011__$1;
(statearr_38026_38071[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (13))){
var inst_37943 = (state_38011[(14)]);
var state_38011__$1 = state_38011;
var statearr_38027_38072 = state_38011__$1;
(statearr_38027_38072[(2)] = inst_37943);

(statearr_38027_38072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (22))){
var state_38011__$1 = state_38011;
var statearr_38028_38073 = state_38011__$1;
(statearr_38028_38073[(2)] = beautify_QMARK_);

(statearr_38028_38073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (29))){
var state_38011__$1 = state_38011;
var statearr_38029_38074 = state_38011__$1;
(statearr_38029_38074[(2)] = false);

(statearr_38029_38074[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (6))){
var inst_37943 = (state_38011[(14)]);
var inst_37948 = inst_37943.cljs$lang$protocol_mask$partition0$;
var inst_37949 = (inst_37948 & (64));
var inst_37950 = inst_37943.cljs$core$ISeq$;
var inst_37951 = (cljs.core.PROTOCOL_SENTINEL === inst_37950);
var inst_37952 = (inst_37949) || (inst_37951);
var state_38011__$1 = state_38011;
if(cljs.core.truth_(inst_37952)){
var statearr_38030_38075 = state_38011__$1;
(statearr_38030_38075[(1)] = (9));

} else {
var statearr_38031_38076 = state_38011__$1;
(statearr_38031_38076[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (28))){
var state_38011__$1 = state_38011;
var statearr_38032_38077 = state_38011__$1;
(statearr_38032_38077[(2)] = beautify_output_QMARK_);

(statearr_38032_38077[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (25))){
var inst_37939 = (state_38011[(15)]);
var state_38011__$1 = state_38011;
var statearr_38033_38078 = state_38011__$1;
(statearr_38033_38078[(2)] = inst_37939);

(statearr_38033_38078[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (17))){
var inst_37973 = (state_38011[(2)]);
var inst_37974 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_37973);
var inst_37975 = gadjett.collections.collify.call(null,external_scripts);
var inst_37976 = klipse.plugin.load_external_scripts.call(null,inst_37975,no_dynamic_scripts);
var state_38011__$1 = (function (){var statearr_38034 = state_38011;
(statearr_38034[(16)] = inst_37974);

return statearr_38034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38011__$1,(18),inst_37976);
} else {
if((state_val_38012 === (3))){
var state_38011__$1 = state_38011;
var statearr_38035_38079 = state_38011__$1;
(statearr_38035_38079[(2)] = null);

(statearr_38035_38079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (12))){
var inst_37943 = (state_38011[(14)]);
var inst_37961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37943);
var state_38011__$1 = state_38011;
var statearr_38036_38080 = state_38011__$1;
(statearr_38036_38080[(2)] = inst_37961);

(statearr_38036_38080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (2))){
var inst_37938 = (state_38011[(17)]);
var inst_37935 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_37936 = [eval_context,print_length,beautify_strings];
var inst_37937 = cljs.core.PersistentHashMap.fromArrays(inst_37935,inst_37936);
var inst_37938__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_37937);
var inst_37939 = (function (){var eval_args = inst_37938__$1;
return ((function (eval_args,inst_37938,inst_37935,inst_37936,inst_37937,inst_37938__$1,state_val_38012,c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (p1__37922_SHARP_,p2__37923_SHARP_){
return eval_fn.call(null,p1__37922_SHARP_,cljs.core.merge.call(null,eval_args,p2__37923_SHARP_));
});
;})(eval_args,inst_37938,inst_37935,inst_37936,inst_37937,inst_37938__$1,state_val_38012,c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var inst_37940 = klipse.args_from_element.content.call(null,element,comment_str);
var state_38011__$1 = (function (){var statearr_38037 = state_38011;
(statearr_38037[(15)] = inst_37939);

(statearr_38037[(17)] = inst_37938__$1);

return statearr_38037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38011__$1,(5),inst_37940);
} else {
if((state_val_38012 === (23))){
var state_38011__$1 = state_38011;
var statearr_38038_38081 = state_38011__$1;
(statearr_38038_38081[(2)] = false);

(statearr_38038_38081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (19))){
var state_38011__$1 = state_38011;
var statearr_38039_38082 = state_38011__$1;
(statearr_38039_38082[(2)] = klipse.plugin.out_placeholder);

(statearr_38039_38082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (11))){
var inst_37956 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
var statearr_38040_38083 = state_38011__$1;
(statearr_38040_38083[(2)] = inst_37956);

(statearr_38040_38083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (9))){
var state_38011__$1 = state_38011;
var statearr_38041_38084 = state_38011__$1;
(statearr_38041_38084[(2)] = true);

(statearr_38041_38084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (5))){
var inst_37943 = (state_38011[(14)]);
var inst_37942 = (state_38011[(2)]);
var inst_37943__$1 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_37945 = (inst_37943__$1 == null);
var inst_37946 = cljs.core.not.call(null,inst_37945);
var state_38011__$1 = (function (){var statearr_38042 = state_38011;
(statearr_38042[(18)] = inst_37942);

(statearr_38042[(14)] = inst_37943__$1);

return statearr_38042;
})();
if(inst_37946){
var statearr_38043_38085 = state_38011__$1;
(statearr_38043_38085[(1)] = (6));

} else {
var statearr_38044_38086 = state_38011__$1;
(statearr_38044_38086[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (14))){
var inst_37964 = (state_38011[(19)]);
var inst_37966 = (state_38011[(12)]);
var inst_37964__$1 = (state_38011[(2)]);
var inst_37965 = cljs.core.get.call(null,inst_37964__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_37966__$1 = cljs.core.get.call(null,inst_37964__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_37967 = cljs.core.get.call(null,inst_37964__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_37968 = cljs.core.get.call(null,inst_37964__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_37969 = cljs.core.get.call(null,inst_37964__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_38011__$1 = (function (){var statearr_38045 = state_38011;
(statearr_38045[(20)] = inst_37965);

(statearr_38045[(19)] = inst_37964__$1);

(statearr_38045[(21)] = inst_37968);

(statearr_38045[(22)] = inst_37967);

(statearr_38045[(12)] = inst_37966__$1);

(statearr_38045[(23)] = inst_37969);

return statearr_38045;
})();
if(cljs.core.truth_(inst_37966__$1)){
var statearr_38046_38087 = state_38011__$1;
(statearr_38046_38087[(1)] = (15));

} else {
var statearr_38047_38088 = state_38011__$1;
(statearr_38047_38088[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (26))){
var inst_37942 = (state_38011[(18)]);
var inst_37965 = (state_38011[(20)]);
var inst_37964 = (state_38011[(19)]);
var inst_37968 = (state_38011[(21)]);
var inst_37967 = (state_38011[(22)]);
var inst_37980 = (state_38011[(7)]);
var inst_37974 = (state_38011[(16)]);
var inst_37979 = (state_38011[(8)]);
var inst_37939 = (state_38011[(15)]);
var inst_37978 = (state_38011[(24)]);
var inst_37938 = (state_38011[(17)]);
var inst_37969 = (state_38011[(23)]);
var inst_37996 = (function (){var the_editor_type = inst_37974;
var eval_fn_with_args = inst_37939;
var map__37931 = inst_37964;
var idle_msec = inst_37965;
var loop_msec = inst_37967;
var load_error = inst_37980;
var async_code_QMARK_ = inst_37968;
var load_status = inst_37979;
var eval_args = inst_37938;
var source_code = inst_37942;
var vec__37932 = inst_37978;
var preamble = inst_37969;
return ((function (the_editor_type,eval_fn_with_args,map__37931,idle_msec,loop_msec,load_error,async_code_QMARK_,load_status,eval_args,source_code,vec__37932,preamble,inst_37942,inst_37965,inst_37964,inst_37968,inst_37967,inst_37980,inst_37974,inst_37979,inst_37939,inst_37978,inst_37938,inst_37969,state_val_38012,c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
return cljs.core.async.chan.call(null);
});
;})(the_editor_type,eval_fn_with_args,map__37931,idle_msec,loop_msec,load_error,async_code_QMARK_,load_status,eval_args,source_code,vec__37932,preamble,inst_37942,inst_37965,inst_37964,inst_37968,inst_37967,inst_37980,inst_37974,inst_37979,inst_37939,inst_37978,inst_37938,inst_37969,state_val_38012,c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state_38011__$1 = state_38011;
var statearr_38048_38089 = state_38011__$1;
(statearr_38048_38089[(2)] = inst_37996);

(statearr_38048_38089[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (16))){
var state_38011__$1 = state_38011;
var statearr_38049_38090 = state_38011__$1;
(statearr_38049_38090[(2)] = default_editor);

(statearr_38049_38090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (30))){
var inst_37942 = (state_38011[(18)]);
var inst_37965 = (state_38011[(20)]);
var inst_37986 = (state_38011[(13)]);
var inst_37998 = (state_38011[(9)]);
var inst_37968 = (state_38011[(21)]);
var inst_37967 = (state_38011[(22)]);
var inst_37974 = (state_38011[(16)]);
var inst_37981 = (state_38011[(25)]);
var inst_37992 = (state_38011[(10)]);
var inst_37969 = (state_38011[(23)]);
var inst_37991 = (state_38011[(11)]);
var inst_38003 = (state_38011[(2)]);
var inst_38004 = [inst_37986,inst_37991,inst_37965,inst_37967,element,editor_out_mode,inst_37968,inst_37942,inst_37969,codemirror_options_out,editor_in_mode,inst_37992,inst_37998,no_result,codemirror_options_in,inst_38003];
var inst_38005 = cljs.core.PersistentHashMap.fromArrays(inst_37981,inst_38004);
var inst_38006 = klipse.klipse_editors.create_editor.call(null,inst_37974,inst_38005);
var state_38011__$1 = state_38011;
var statearr_38050_38091 = state_38011__$1;
(statearr_38050_38091[(2)] = inst_38006);

(statearr_38050_38091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (10))){
var state_38011__$1 = state_38011;
var statearr_38051_38092 = state_38011__$1;
(statearr_38051_38092[(2)] = false);

(statearr_38051_38092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (18))){
var inst_37979 = (state_38011[(8)]);
var inst_37978 = (state_38011[(24)]);
var inst_37978__$1 = (state_38011[(2)]);
var inst_37979__$1 = cljs.core.nth.call(null,inst_37978__$1,(0),null);
var inst_37980 = cljs.core.nth.call(null,inst_37978__$1,(1),null);
var inst_37981 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_37982 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_37979__$1);
var state_38011__$1 = (function (){var statearr_38052 = state_38011;
(statearr_38052[(7)] = inst_37980);

(statearr_38052[(8)] = inst_37979__$1);

(statearr_38052[(24)] = inst_37978__$1);

(statearr_38052[(25)] = inst_37981);

return statearr_38052;
})();
if(inst_37982){
var statearr_38053_38093 = state_38011__$1;
(statearr_38053_38093[(1)] = (19));

} else {
var statearr_38054_38094 = state_38011__$1;
(statearr_38054_38094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (8))){
var inst_37959 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
if(cljs.core.truth_(inst_37959)){
var statearr_38055_38095 = state_38011__$1;
(statearr_38055_38095[(1)] = (12));

} else {
var statearr_38056_38096 = state_38011__$1;
(statearr_38056_38096[(1)] = (13));

}

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
});})(c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
;
return ((function (switch__24510__auto__,c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto____0 = (function (){
var statearr_38057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38057[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto__);

(statearr_38057[(1)] = (1));

return statearr_38057;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto____1 = (function (state_38011){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38058){if((e38058 instanceof Object)){
var ex__24514__auto__ = e38058;
var statearr_38059_38097 = state_38011;
(statearr_38059_38097[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38098 = state_38011;
state_38011 = G__38098;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto__ = function(state_38011){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto____1.call(this,state_38011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state__24602__auto__ = (function (){var statearr_38060 = f__24601__auto__.call(null);
(statearr_38060[(6)] = c__24600__auto__);

return statearr_38060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,map__37926,map__37926__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__37927,map__37927__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
);

return c__24600__auto__;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Symbol("goog.dom","isElement","goog.dom/isElement",-1707224949,null),goog.dom.isElement);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"str","str",1089608819)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.string_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__38099_SHARP_){
return (cljs.core._EQ_.call(null,p1__38099_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__38099_SHARP_,false));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38100){
return cljs.core.map_QMARK_.call(null,G__38100);
}),(function (G__38100){
return cljs.core.contains_QMARK_.call(null,G__38100,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__38100){
return cljs.core.contains_QMARK_.call(null,G__38100,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__38100){
return cljs.core.contains_QMARK_.call(null,G__38100,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__38100){
return cljs.core.contains_QMARK_.call(null,G__38100,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__38100){
return (cljs.core.map_QMARK_.call(null,G__38100)) && (cljs.core.contains_QMARK_.call(null,G__38100,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (cljs.core.contains_QMARK_.call(null,G__38100,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (cljs.core.contains_QMARK_.call(null,G__38100,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__38100,new cljs.core.Keyword(null,"comment-str","comment-str",130143853)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38101){
return cljs.core.map_QMARK_.call(null,G__38101);
})], null),(function (G__38101){
return cljs.core.map_QMARK_.call(null,G__38101);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("klipse.plugin","klipsify-with-opts","klipse.plugin/klipsify-with-opts",331340081,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * To be called from outside.
 *   Klipsifies a snippet.
 *   Returns a channel that will be ready when the snippet is evaluated.
 */
klipse.plugin.klipsify = (function klipse$plugin$klipsify(element,general_settings,mode){
var temp__5455__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5455__auto__)){
var opts = temp__5455__auto__;
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,opts,temp__5455__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,opts,temp__5455__auto__){
return (function (state_38109){
var state_val_38110 = (state_38109[(1)]);
if((state_val_38110 === (1))){
var inst_38102 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts);
var state_38109__$1 = state_38109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38109__$1,(3),inst_38102);
} else {
if((state_val_38110 === (2))){
var inst_38107 = (state_38109[(2)]);
var state_38109__$1 = state_38109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38109__$1,inst_38107);
} else {
if((state_val_38110 === (3))){
var inst_38104 = (state_38109[(2)]);
var inst_38105 = inst_38104.call(null);
var state_38109__$1 = state_38109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38109__$1,(2),inst_38105);
} else {
return null;
}
}
}
});})(c__24600__auto__,opts,temp__5455__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__,opts,temp__5455__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__24511__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__24511__auto____0 = (function (){
var statearr_38111 = [null,null,null,null,null,null,null];
(statearr_38111[(0)] = klipse$plugin$klipsify_$_state_machine__24511__auto__);

(statearr_38111[(1)] = (1));

return statearr_38111;
});
var klipse$plugin$klipsify_$_state_machine__24511__auto____1 = (function (state_38109){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38112){if((e38112 instanceof Object)){
var ex__24514__auto__ = e38112;
var statearr_38113_38125 = state_38109;
(statearr_38113_38125[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38126 = state_38109;
state_38109 = G__38126;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__24511__auto__ = function(state_38109){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__24511__auto____1.call(this,state_38109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__24511__auto____0;
klipse$plugin$klipsify_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__24511__auto____1;
return klipse$plugin$klipsify_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,opts,temp__5455__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38114 = f__24601__auto__.call(null);
(statearr_38114[(6)] = c__24600__auto__);

return statearr_38114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,opts,temp__5455__auto__))
);

return c__24600__auto__;
} else {
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,temp__5455__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,temp__5455__auto__){
return (function (state_38119){
var state_val_38120 = (state_38119[(1)]);
if((state_val_38120 === (1))){
var inst_38115 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_38116 = cljs.core.keys.call(null,inst_38115);
var inst_38117 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_38116);
var state_38119__$1 = state_38119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38119__$1,inst_38117);
} else {
return null;
}
});})(c__24600__auto__,temp__5455__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__,temp__5455__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__24511__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__24511__auto____0 = (function (){
var statearr_38121 = [null,null,null,null,null,null,null];
(statearr_38121[(0)] = klipse$plugin$klipsify_$_state_machine__24511__auto__);

(statearr_38121[(1)] = (1));

return statearr_38121;
});
var klipse$plugin$klipsify_$_state_machine__24511__auto____1 = (function (state_38119){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38122){if((e38122 instanceof Object)){
var ex__24514__auto__ = e38122;
var statearr_38123_38127 = state_38119;
(statearr_38123_38127[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38128 = state_38119;
state_38119 = G__38128;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__24511__auto__ = function(state_38119){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__24511__auto____1.call(this,state_38119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__24511__auto____0;
klipse$plugin$klipsify_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__24511__auto____1;
return klipse$plugin$klipsify_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,temp__5455__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38124 = f__24601__auto__.call(null);
(statearr_38124[(6)] = c__24600__auto__);

return statearr_38124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,temp__5455__auto__))
);

return c__24600__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify', klipse.plugin.klipsify);
klipse.plugin.klipsify_no_eval = (function klipse$plugin$klipsify_no_eval(element,general_settings,mode){
var temp__5455__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5455__auto__)){
var opts = temp__5455__auto__;
return klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts);
} else {
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,temp__5455__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,temp__5455__auto__){
return (function (state_38131){
var state_val_38132 = (state_38131[(1)]);
if((state_val_38132 === (1))){
var inst_38129 = (function (){return ((function (state_val_38132,c__24600__auto__,temp__5455__auto__){
return (function (){
var c__24600__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto____$1,state_val_38132,c__24600__auto__,temp__5455__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto____$1,state_val_38132,c__24600__auto__,temp__5455__auto__){
return (function (state_38137){
var state_val_38138 = (state_38137[(1)]);
if((state_val_38138 === (1))){
var inst_38133 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_38134 = cljs.core.keys.call(null,inst_38133);
var inst_38135 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_38134);
var state_38137__$1 = state_38137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38137__$1,inst_38135);
} else {
return null;
}
});})(c__24600__auto____$1,state_val_38132,c__24600__auto__,temp__5455__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto____$1,state_val_38132,c__24600__auto__,temp__5455__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____0 = (function (){
var statearr_38139 = [null,null,null,null,null,null,null];
(statearr_38139[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__);

(statearr_38139[(1)] = (1));

return statearr_38139;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____1 = (function (state_38137){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38140){if((e38140 instanceof Object)){
var ex__24514__auto__ = e38140;
var statearr_38141_38147 = state_38137;
(statearr_38141_38147[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38148 = state_38137;
state_38137 = G__38148;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__ = function(state_38137){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____1.call(this,state_38137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto____$1,state_val_38132,c__24600__auto__,temp__5455__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38142 = f__24601__auto__.call(null);
(statearr_38142[(6)] = c__24600__auto____$1);

return statearr_38142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto____$1,state_val_38132,c__24600__auto__,temp__5455__auto__))
);

return c__24600__auto____$1;
});
;})(state_val_38132,c__24600__auto__,temp__5455__auto__))
})();
var state_38131__$1 = state_38131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38131__$1,inst_38129);
} else {
return null;
}
});})(c__24600__auto__,temp__5455__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__,temp__5455__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____0 = (function (){
var statearr_38143 = [null,null,null,null,null,null,null];
(statearr_38143[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__);

(statearr_38143[(1)] = (1));

return statearr_38143;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____1 = (function (state_38131){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38144){if((e38144 instanceof Object)){
var ex__24514__auto__ = e38144;
var statearr_38145_38149 = state_38131;
(statearr_38145_38149[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38150 = state_38131;
state_38131 = G__38150;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__ = function(state_38131){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____1.call(this,state_38131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,temp__5455__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38146 = f__24601__auto__.call(null);
(statearr_38146[(6)] = c__24600__auto__);

return statearr_38146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,temp__5455__auto__))
);

return c__24600__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify_no_eval', klipse.plugin.klipsify_no_eval);
klipse.plugin.edit_elements = (function klipse$plugin$edit_elements(elements,general_settings,modes){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_38177){
var state_val_38178 = (state_38177[(1)]);
if((state_val_38178 === (7))){
var inst_38158 = (state_38177[(7)]);
var inst_38157 = (state_38177[(8)]);
var inst_38160 = klipse.plugin.klipsify_no_eval.call(null,inst_38157,general_settings,inst_38158);
var state_38177__$1 = state_38177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38177__$1,(10),inst_38160);
} else {
if((state_val_38178 === (1))){
var inst_38151 = cljs.core.PersistentVector.EMPTY;
var inst_38152 = elements;
var inst_38153 = inst_38151;
var state_38177__$1 = (function (){var statearr_38179 = state_38177;
(statearr_38179[(9)] = inst_38153);

(statearr_38179[(10)] = inst_38152);

return statearr_38179;
})();
var statearr_38180_38198 = state_38177__$1;
(statearr_38180_38198[(2)] = null);

(statearr_38180_38198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38178 === (4))){
var inst_38158 = (state_38177[(7)]);
var inst_38152 = (state_38177[(10)]);
var inst_38157 = (state_38177[(8)]);
var inst_38157__$1 = cljs.core.first.call(null,inst_38152);
var inst_38158__$1 = modes.call(null,inst_38157__$1);
var state_38177__$1 = (function (){var statearr_38181 = state_38177;
(statearr_38181[(7)] = inst_38158__$1);

(statearr_38181[(8)] = inst_38157__$1);

return statearr_38181;
})();
if(cljs.core.truth_(inst_38158__$1)){
var statearr_38182_38199 = state_38177__$1;
(statearr_38182_38199[(1)] = (7));

} else {
var statearr_38183_38200 = state_38177__$1;
(statearr_38183_38200[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38178 === (6))){
var inst_38173 = (state_38177[(2)]);
var state_38177__$1 = state_38177;
var statearr_38184_38201 = state_38177__$1;
(statearr_38184_38201[(2)] = inst_38173);

(statearr_38184_38201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38178 === (3))){
var inst_38175 = (state_38177[(2)]);
var state_38177__$1 = state_38177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38177__$1,inst_38175);
} else {
if((state_val_38178 === (2))){
var inst_38152 = (state_38177[(10)]);
var inst_38155 = cljs.core.seq.call(null,inst_38152);
var state_38177__$1 = state_38177;
if(inst_38155){
var statearr_38185_38202 = state_38177__$1;
(statearr_38185_38202[(1)] = (4));

} else {
var statearr_38186_38203 = state_38177__$1;
(statearr_38186_38203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38178 === (9))){
var inst_38170 = (state_38177[(2)]);
var state_38177__$1 = state_38177;
var statearr_38187_38204 = state_38177__$1;
(statearr_38187_38204[(2)] = inst_38170);

(statearr_38187_38204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38178 === (5))){
var inst_38153 = (state_38177[(9)]);
var state_38177__$1 = state_38177;
var statearr_38189_38205 = state_38177__$1;
(statearr_38189_38205[(2)] = inst_38153);

(statearr_38189_38205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38178 === (10))){
var inst_38153 = (state_38177[(9)]);
var inst_38152 = (state_38177[(10)]);
var inst_38162 = (state_38177[(2)]);
var inst_38163 = cljs.core.rest.call(null,inst_38152);
var inst_38164 = cljs.core.conj.call(null,inst_38153,inst_38162);
var inst_38152__$1 = inst_38163;
var inst_38153__$1 = inst_38164;
var state_38177__$1 = (function (){var statearr_38190 = state_38177;
(statearr_38190[(9)] = inst_38153__$1);

(statearr_38190[(10)] = inst_38152__$1);

return statearr_38190;
})();
var statearr_38191_38206 = state_38177__$1;
(statearr_38191_38206[(2)] = null);

(statearr_38191_38206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38178 === (8))){
var inst_38153 = (state_38177[(9)]);
var inst_38152 = (state_38177[(10)]);
var inst_38167 = cljs.core.rest.call(null,inst_38152);
var tmp38188 = inst_38153;
var inst_38152__$1 = inst_38167;
var inst_38153__$1 = tmp38188;
var state_38177__$1 = (function (){var statearr_38192 = state_38177;
(statearr_38192[(9)] = inst_38153__$1);

(statearr_38192[(10)] = inst_38152__$1);

return statearr_38192;
})();
var statearr_38193_38207 = state_38177__$1;
(statearr_38193_38207[(2)] = null);

(statearr_38193_38207[(1)] = (2));


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
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$plugin$edit_elements_$_state_machine__24511__auto__ = null;
var klipse$plugin$edit_elements_$_state_machine__24511__auto____0 = (function (){
var statearr_38194 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38194[(0)] = klipse$plugin$edit_elements_$_state_machine__24511__auto__);

(statearr_38194[(1)] = (1));

return statearr_38194;
});
var klipse$plugin$edit_elements_$_state_machine__24511__auto____1 = (function (state_38177){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38195){if((e38195 instanceof Object)){
var ex__24514__auto__ = e38195;
var statearr_38196_38208 = state_38177;
(statearr_38196_38208[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38209 = state_38177;
state_38177 = G__38209;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__24511__auto__ = function(state_38177){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__24511__auto____1.call(this,state_38177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$edit_elements_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__24511__auto____0;
klipse$plugin$edit_elements_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__24511__auto____1;
return klipse$plugin$edit_elements_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38197 = f__24601__auto__.call(null);
(statearr_38197[(6)] = c__24600__auto__);

return statearr_38197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,general_settings,modes){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_38258){
var state_val_38259 = (state_38258[(1)]);
if((state_val_38259 === (7))){
var inst_38254 = (state_38258[(2)]);
var state_38258__$1 = state_38258;
var statearr_38260_38286 = state_38258__$1;
(statearr_38260_38286[(2)] = inst_38254);

(statearr_38260_38286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (1))){
var inst_38210 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_38258__$1 = state_38258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38258__$1,(2),inst_38210);
} else {
if((state_val_38259 === (4))){
var inst_38256 = (state_38258[(2)]);
var state_38258__$1 = state_38258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38258__$1,inst_38256);
} else {
if((state_val_38259 === (15))){
var inst_38233 = (state_38258[(7)]);
var inst_38245 = (state_38258[(2)]);
var inst_38246 = cljs.core.next.call(null,inst_38233);
var inst_38218 = inst_38246;
var inst_38219 = null;
var inst_38220 = (0);
var inst_38221 = (0);
var state_38258__$1 = (function (){var statearr_38261 = state_38258;
(statearr_38261[(8)] = inst_38221);

(statearr_38261[(9)] = inst_38245);

(statearr_38261[(10)] = inst_38220);

(statearr_38261[(11)] = inst_38218);

(statearr_38261[(12)] = inst_38219);

return statearr_38261;
})();
var statearr_38262_38287 = state_38258__$1;
(statearr_38262_38287[(2)] = null);

(statearr_38262_38287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (13))){
var inst_38233 = (state_38258[(7)]);
var inst_38242 = cljs.core.first.call(null,inst_38233);
var inst_38243 = inst_38242.call(null);
var state_38258__$1 = state_38258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38258__$1,(15),inst_38243);
} else {
if((state_val_38259 === (6))){
var inst_38218 = (state_38258[(11)]);
var inst_38233 = (state_38258[(7)]);
var inst_38233__$1 = cljs.core.seq.call(null,inst_38218);
var state_38258__$1 = (function (){var statearr_38263 = state_38258;
(statearr_38263[(7)] = inst_38233__$1);

return statearr_38263;
})();
if(inst_38233__$1){
var statearr_38264_38288 = state_38258__$1;
(statearr_38264_38288[(1)] = (9));

} else {
var statearr_38265_38289 = state_38258__$1;
(statearr_38265_38289[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (3))){
var inst_38221 = (state_38258[(8)]);
var inst_38220 = (state_38258[(10)]);
var inst_38223 = (inst_38221 < inst_38220);
var inst_38224 = inst_38223;
var state_38258__$1 = state_38258;
if(cljs.core.truth_(inst_38224)){
var statearr_38266_38290 = state_38258__$1;
(statearr_38266_38290[(1)] = (5));

} else {
var statearr_38267_38291 = state_38258__$1;
(statearr_38267_38291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (12))){
var inst_38233 = (state_38258[(7)]);
var inst_38237 = cljs.core.chunk_first.call(null,inst_38233);
var inst_38238 = cljs.core.chunk_rest.call(null,inst_38233);
var inst_38239 = cljs.core.count.call(null,inst_38237);
var inst_38218 = inst_38238;
var inst_38219 = inst_38237;
var inst_38220 = inst_38239;
var inst_38221 = (0);
var state_38258__$1 = (function (){var statearr_38268 = state_38258;
(statearr_38268[(8)] = inst_38221);

(statearr_38268[(10)] = inst_38220);

(statearr_38268[(11)] = inst_38218);

(statearr_38268[(12)] = inst_38219);

return statearr_38268;
})();
var statearr_38269_38292 = state_38258__$1;
(statearr_38269_38292[(2)] = null);

(statearr_38269_38292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (2))){
var inst_38212 = (state_38258[(2)]);
var inst_38217 = cljs.core.seq.call(null,inst_38212);
var inst_38218 = inst_38217;
var inst_38219 = null;
var inst_38220 = (0);
var inst_38221 = (0);
var state_38258__$1 = (function (){var statearr_38270 = state_38258;
(statearr_38270[(8)] = inst_38221);

(statearr_38270[(10)] = inst_38220);

(statearr_38270[(11)] = inst_38218);

(statearr_38270[(12)] = inst_38219);

return statearr_38270;
})();
var statearr_38271_38293 = state_38258__$1;
(statearr_38271_38293[(2)] = null);

(statearr_38271_38293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (11))){
var inst_38252 = (state_38258[(2)]);
var state_38258__$1 = state_38258;
var statearr_38272_38294 = state_38258__$1;
(statearr_38272_38294[(2)] = inst_38252);

(statearr_38272_38294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (9))){
var inst_38233 = (state_38258[(7)]);
var inst_38235 = cljs.core.chunked_seq_QMARK_.call(null,inst_38233);
var state_38258__$1 = state_38258;
if(inst_38235){
var statearr_38273_38295 = state_38258__$1;
(statearr_38273_38295[(1)] = (12));

} else {
var statearr_38274_38296 = state_38258__$1;
(statearr_38274_38296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (5))){
var inst_38221 = (state_38258[(8)]);
var inst_38219 = (state_38258[(12)]);
var inst_38226 = cljs.core._nth.call(null,inst_38219,inst_38221);
var inst_38227 = inst_38226.call(null);
var state_38258__$1 = state_38258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38258__$1,(8),inst_38227);
} else {
if((state_val_38259 === (14))){
var inst_38249 = (state_38258[(2)]);
var state_38258__$1 = state_38258;
var statearr_38278_38297 = state_38258__$1;
(statearr_38278_38297[(2)] = inst_38249);

(statearr_38278_38297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (10))){
var state_38258__$1 = state_38258;
var statearr_38279_38298 = state_38258__$1;
(statearr_38279_38298[(2)] = null);

(statearr_38279_38298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38259 === (8))){
var inst_38221 = (state_38258[(8)]);
var inst_38220 = (state_38258[(10)]);
var inst_38218 = (state_38258[(11)]);
var inst_38219 = (state_38258[(12)]);
var inst_38229 = (state_38258[(2)]);
var inst_38230 = (inst_38221 + (1));
var tmp38275 = inst_38220;
var tmp38276 = inst_38218;
var tmp38277 = inst_38219;
var inst_38218__$1 = tmp38276;
var inst_38219__$1 = tmp38277;
var inst_38220__$1 = tmp38275;
var inst_38221__$1 = inst_38230;
var state_38258__$1 = (function (){var statearr_38280 = state_38258;
(statearr_38280[(8)] = inst_38221__$1);

(statearr_38280[(10)] = inst_38220__$1);

(statearr_38280[(11)] = inst_38218__$1);

(statearr_38280[(13)] = inst_38229);

(statearr_38280[(12)] = inst_38219__$1);

return statearr_38280;
})();
var statearr_38281_38299 = state_38258__$1;
(statearr_38281_38299[(2)] = null);

(statearr_38281_38299[(1)] = (3));


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
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$plugin$klipsify_elements_$_state_machine__24511__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__24511__auto____0 = (function (){
var statearr_38282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38282[(0)] = klipse$plugin$klipsify_elements_$_state_machine__24511__auto__);

(statearr_38282[(1)] = (1));

return statearr_38282;
});
var klipse$plugin$klipsify_elements_$_state_machine__24511__auto____1 = (function (state_38258){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38283){if((e38283 instanceof Object)){
var ex__24514__auto__ = e38283;
var statearr_38284_38300 = state_38258;
(statearr_38284_38300[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38301 = state_38258;
state_38258 = G__38301;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__24511__auto__ = function(state_38258){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__24511__auto____1.call(this,state_38258);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_elements_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__24511__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__24511__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38285 = f__24601__auto__.call(null);
(statearr_38285[(6)] = c__24600__auto__);

return statearr_38285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.plugin.snippets_selector = (function klipse$plugin$snippets_selector(settings,selector_names){
return clojure.string.join.call(null,",",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,settings,selector_names)));
});
klipse.plugin.seq_from_selector = (function klipse$plugin$seq_from_selector(selector){
return cljs.core.array_seq.call(null,document.querySelectorAll(selector));
});
klipse.plugin.elements__GT_mode = (function klipse$plugin$elements__GT_mode(settings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9798__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__38302(s__38303){
return (new cljs.core.LazySeq(null,(function (){
var s__38303__$1 = s__38303;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38303__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var selector_name = cljs.core.first.call(null,xs__6012__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__9794__auto__ = ((function (s__38303__$1,selector,selector_name,xs__6012__auto__,temp__5457__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__38302_$_iter__38304(s__38305){
return (new cljs.core.LazySeq(null,((function (s__38303__$1,selector,selector_name,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__38305__$1 = s__38305;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__38305__$1);
if(temp__5457__auto____$1){
var s__38305__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38305__$2)){
var c__9796__auto__ = cljs.core.chunk_first.call(null,s__38305__$2);
var size__9797__auto__ = cljs.core.count.call(null,c__9796__auto__);
var b__38307 = cljs.core.chunk_buffer.call(null,size__9797__auto__);
if((function (){var i__38306 = (0);
while(true){
if((i__38306 < size__9797__auto__)){
var element = cljs.core._nth.call(null,c__9796__auto__,i__38306);
cljs.core.chunk_append.call(null,b__38307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__38308 = (i__38306 + (1));
i__38306 = G__38308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38307),klipse$plugin$elements__GT_mode_$_iter__38302_$_iter__38304.call(null,cljs.core.chunk_rest.call(null,s__38305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38307),null);
}
} else {
var element = cljs.core.first.call(null,s__38305__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__38302_$_iter__38304.call(null,cljs.core.rest.call(null,s__38305__$2)));
}
} else {
return null;
}
break;
}
});})(s__38303__$1,selector,selector_name,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__38303__$1,selector,selector_name,xs__6012__auto__,temp__5457__auto__))
;
var fs__9795__auto__ = cljs.core.seq.call(null,iterys__9794__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__9795__auto__){
return cljs.core.concat.call(null,fs__9795__auto__,klipse$plugin$elements__GT_mode_$_iter__38302.call(null,cljs.core.rest.call(null,s__38303__$1)));
} else {
var G__38309 = cljs.core.rest.call(null,s__38303__$1);
s__38303__$1 = G__38309;
continue;
}
} else {
var G__38310 = cljs.core.rest.call(null,s__38303__$1);
s__38303__$1 = G__38310;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9798__auto__.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode)));
})());
});
klipse.plugin.init_clj = (function klipse$plugin$init_clj(settings){
var map__38311 = clojure.walk.keywordize_keys.call(null,settings);
var map__38311__$1 = ((((!((map__38311 == null)))?((((map__38311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38311):map__38311);
var keywordized_settings = map__38311__$1;
var secured_eval = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
var modes = klipse.plugin.elements__GT_mode.call(null,settings);
var elements = klipse.plugin.seq_from_selector.call(null,klipse.plugin.snippets_selector.call(null,settings,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode))));
if(cljs.core.truth_(secured_eval)){
klipse.utils.securize_eval_BANG_.call(null,security_forbidden_symbols);
} else {
}

return klipse.plugin.klipsify_elements.call(null,elements,keywordized_settings,modes);
});
goog.exportSymbol('klipse.plugin.init_clj', klipse.plugin.init_clj);
klipse.plugin.init = (function klipse$plugin$init(js_settings){
return klipse.plugin.init_clj.call(null,cljs.core.js__GT_clj.call(null,js_settings,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false));
});
goog.exportSymbol('klipse.plugin.init', klipse.plugin.init);

//# sourceMappingURL=plugin.js.map
