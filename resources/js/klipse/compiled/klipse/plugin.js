// Compiled by ClojureScript 1.10.145 {}
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
var map__15519 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__15519__$1 = ((((!((map__15519 == null)))?(((((map__15519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15519):map__15519);
var idle_msec = cljs.core.get.call(null,map__15519__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__15519__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__15519__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__15519__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__15519__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__4006__auto__ = min_idle_msec;
var y__4007__auto__ = idle_msec;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__15521 = the_type;
switch (G__15521) {
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
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15552){
var state_val_15553 = (state_15552[(1)]);
if((state_val_15553 === (1))){
var state_15552__$1 = state_15552;
if(cljs.core.truth_(no_dynamic_scritps_QMARK_)){
var statearr_15554_15567 = state_15552__$1;
(statearr_15554_15567[(1)] = (2));

} else {
var statearr_15555_15568 = state_15552__$1;
(statearr_15555_15568[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (2))){
var inst_15524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15525 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_15526 = (new cljs.core.PersistentVector(null,2,(5),inst_15524,inst_15525,null));
var state_15552__$1 = state_15552;
var statearr_15556_15569 = state_15552__$1;
(statearr_15556_15569[(2)] = inst_15526);

(statearr_15556_15569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (3))){
var inst_15531 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_15552__$1 = state_15552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15552__$1,(5),inst_15531);
} else {
if((state_val_15553 === (4))){
var inst_15550 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15552__$1,inst_15550);
} else {
if((state_val_15553 === (5))){
var inst_15533 = (state_15552[(2)]);
var inst_15534 = cljs.core.nth.call(null,inst_15533,(0),null);
var inst_15535 = cljs.core.nth.call(null,inst_15533,(1),null);
var inst_15536 = cljs.core.nth.call(null,inst_15533,(2),null);
var inst_15537 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_15534);
var state_15552__$1 = (function (){var statearr_15557 = state_15552;
(statearr_15557[(7)] = inst_15536);

(statearr_15557[(8)] = inst_15535);

return statearr_15557;
})();
if(inst_15537){
var statearr_15558_15570 = state_15552__$1;
(statearr_15558_15570[(1)] = (6));

} else {
var statearr_15559_15571 = state_15552__$1;
(statearr_15559_15571[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (6))){
var inst_15539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15540 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_15541 = (new cljs.core.PersistentVector(null,2,(5),inst_15539,inst_15540,null));
var state_15552__$1 = state_15552;
var statearr_15560_15572 = state_15552__$1;
(statearr_15560_15572[(2)] = inst_15541);

(statearr_15560_15572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (7))){
var inst_15536 = (state_15552[(7)]);
var inst_15535 = (state_15552[(8)]);
var inst_15543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15544 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15536),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15535)].join('');
var inst_15545 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_15544];
var inst_15546 = (new cljs.core.PersistentVector(null,2,(5),inst_15543,inst_15545,null));
var state_15552__$1 = state_15552;
var statearr_15561_15573 = state_15552__$1;
(statearr_15561_15573[(2)] = inst_15546);

(statearr_15561_15573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (8))){
var inst_15548 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15562_15574 = state_15552__$1;
(statearr_15562_15574[(2)] = inst_15548);

(statearr_15562_15574[(1)] = (4));


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
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$plugin$load_external_scripts_$_state_machine__13826__auto__ = null;
var klipse$plugin$load_external_scripts_$_state_machine__13826__auto____0 = (function (){
var statearr_15563 = [null,null,null,null,null,null,null,null,null];
(statearr_15563[(0)] = klipse$plugin$load_external_scripts_$_state_machine__13826__auto__);

(statearr_15563[(1)] = (1));

return statearr_15563;
});
var klipse$plugin$load_external_scripts_$_state_machine__13826__auto____1 = (function (state_15552){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15564){if((e15564 instanceof Object)){
var ex__13829__auto__ = e15564;
var statearr_15565_15575 = state_15552;
(statearr_15565_15575[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15576 = state_15552;
state_15552 = G__15576;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__13826__auto__ = function(state_15552){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__13826__auto____1.call(this,state_15552);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$load_external_scripts_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__13826__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__13826__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15566 = f__13849__auto__.call(null);
(statearr_15566[(6)] = c__13848__auto__);

return statearr_15566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__15579,p__15580){
var map__15581 = p__15579;
var map__15581__$1 = ((((!((map__15581 == null)))?(((((map__15581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15581):map__15581);
var no_dynamic_scripts = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var eval_idle_msec = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var minimalistic_ui = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var editor_type = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var print_length = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var beautify_strings = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var codemirror_options_in = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var codemirror_options_out = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var map__15582 = p__15580;
var map__15582__$1 = ((((!((map__15582 == null)))?(((((map__15582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15582):map__15582);
var lang_opts = map__15582__$1;
var eval_fn = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (state_15666){
var state_val_15667 = (state_15666[(1)]);
if((state_val_15667 === (7))){
var state_15666__$1 = state_15666;
var statearr_15668_15716 = state_15666__$1;
(statearr_15668_15716[(2)] = false);

(statearr_15668_15716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (20))){
var inst_15635 = (state_15666[(7)]);
var state_15666__$1 = state_15666;
var statearr_15669_15717 = state_15666__$1;
(statearr_15669_15717[(2)] = inst_15635);

(statearr_15669_15717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (27))){
var inst_15634 = (state_15666[(8)]);
var inst_15653 = (state_15666[(2)]);
var inst_15654 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_15634);
var state_15666__$1 = (function (){var statearr_15670 = state_15666;
(statearr_15670[(9)] = inst_15653);

return statearr_15670;
})();
if(inst_15654){
var statearr_15671_15718 = state_15666__$1;
(statearr_15671_15718[(1)] = (28));

} else {
var statearr_15672_15719 = state_15666__$1;
(statearr_15672_15719[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (1))){
var state_15666__$1 = state_15666;
if(cljs.core.truth_(element)){
var statearr_15673_15720 = state_15666__$1;
(statearr_15673_15720[(1)] = (2));

} else {
var statearr_15674_15721 = state_15666__$1;
(statearr_15674_15721[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (24))){
var inst_15634 = (state_15666[(8)]);
var inst_15646 = (state_15666[(2)]);
var inst_15647 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_15648 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_15634);
var state_15666__$1 = (function (){var statearr_15675 = state_15666;
(statearr_15675[(10)] = inst_15646);

(statearr_15675[(11)] = inst_15647);

return statearr_15675;
})();
if(inst_15648){
var statearr_15676_15722 = state_15666__$1;
(statearr_15676_15722[(1)] = (25));

} else {
var statearr_15677_15723 = state_15666__$1;
(statearr_15677_15723[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (4))){
var inst_15664 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15666__$1,inst_15664);
} else {
if((state_val_15667 === (15))){
var inst_15621 = (state_15666[(12)]);
var state_15666__$1 = state_15666;
var statearr_15678_15724 = state_15666__$1;
(statearr_15678_15724[(2)] = inst_15621);

(statearr_15678_15724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (21))){
var inst_15634 = (state_15666[(8)]);
var inst_15641 = (state_15666[(2)]);
var inst_15642 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_15634);
var state_15666__$1 = (function (){var statearr_15679 = state_15666;
(statearr_15679[(13)] = inst_15641);

return statearr_15679;
})();
if(inst_15642){
var statearr_15680_15725 = state_15666__$1;
(statearr_15680_15725[(1)] = (22));

} else {
var statearr_15681_15726 = state_15666__$1;
(statearr_15681_15726[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (13))){
var inst_15598 = (state_15666[(14)]);
var state_15666__$1 = state_15666;
var statearr_15682_15727 = state_15666__$1;
(statearr_15682_15727[(2)] = inst_15598);

(statearr_15682_15727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (22))){
var state_15666__$1 = state_15666;
var statearr_15683_15728 = state_15666__$1;
(statearr_15683_15728[(2)] = beautify_QMARK_);

(statearr_15683_15728[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (29))){
var state_15666__$1 = state_15666;
var statearr_15684_15729 = state_15666__$1;
(statearr_15684_15729[(2)] = false);

(statearr_15684_15729[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (6))){
var inst_15598 = (state_15666[(14)]);
var inst_15603 = inst_15598.cljs$lang$protocol_mask$partition0$;
var inst_15604 = (inst_15603 & (64));
var inst_15605 = inst_15598.cljs$core$ISeq$;
var inst_15606 = (cljs.core.PROTOCOL_SENTINEL === inst_15605);
var inst_15607 = ((inst_15604) || (inst_15606));
var state_15666__$1 = state_15666;
if(cljs.core.truth_(inst_15607)){
var statearr_15685_15730 = state_15666__$1;
(statearr_15685_15730[(1)] = (9));

} else {
var statearr_15686_15731 = state_15666__$1;
(statearr_15686_15731[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (28))){
var state_15666__$1 = state_15666;
var statearr_15687_15732 = state_15666__$1;
(statearr_15687_15732[(2)] = beautify_output_QMARK_);

(statearr_15687_15732[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (25))){
var inst_15594 = (state_15666[(15)]);
var state_15666__$1 = state_15666;
var statearr_15688_15733 = state_15666__$1;
(statearr_15688_15733[(2)] = inst_15594);

(statearr_15688_15733[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (17))){
var inst_15628 = (state_15666[(2)]);
var inst_15629 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_15628);
var inst_15630 = gadjett.collections.collify.call(null,external_scripts);
var inst_15631 = klipse.plugin.load_external_scripts.call(null,inst_15630,no_dynamic_scripts);
var state_15666__$1 = (function (){var statearr_15689 = state_15666;
(statearr_15689[(16)] = inst_15629);

return statearr_15689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15666__$1,(18),inst_15631);
} else {
if((state_val_15667 === (3))){
var state_15666__$1 = state_15666;
var statearr_15690_15734 = state_15666__$1;
(statearr_15690_15734[(2)] = null);

(statearr_15690_15734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (12))){
var inst_15598 = (state_15666[(14)]);
var inst_15616 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15598);
var state_15666__$1 = state_15666;
var statearr_15691_15735 = state_15666__$1;
(statearr_15691_15735[(2)] = inst_15616);

(statearr_15691_15735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (2))){
var inst_15593 = (state_15666[(17)]);
var inst_15590 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_15591 = [eval_context,print_length,beautify_strings];
var inst_15592 = cljs.core.PersistentHashMap.fromArrays(inst_15590,inst_15591);
var inst_15593__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_15592);
var inst_15594 = (function (){var eval_args = inst_15593__$1;
return ((function (eval_args,inst_15593,inst_15590,inst_15591,inst_15592,inst_15593__$1,state_val_15667,c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (p1__15577_SHARP_,p2__15578_SHARP_){
return eval_fn.call(null,p1__15577_SHARP_,cljs.core.merge.call(null,eval_args,p2__15578_SHARP_));
});
;})(eval_args,inst_15593,inst_15590,inst_15591,inst_15592,inst_15593__$1,state_val_15667,c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var inst_15595 = klipse.args_from_element.content.call(null,element,comment_str);
var state_15666__$1 = (function (){var statearr_15692 = state_15666;
(statearr_15692[(15)] = inst_15594);

(statearr_15692[(17)] = inst_15593__$1);

return statearr_15692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15666__$1,(5),inst_15595);
} else {
if((state_val_15667 === (23))){
var state_15666__$1 = state_15666;
var statearr_15693_15736 = state_15666__$1;
(statearr_15693_15736[(2)] = false);

(statearr_15693_15736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (19))){
var state_15666__$1 = state_15666;
var statearr_15694_15737 = state_15666__$1;
(statearr_15694_15737[(2)] = klipse.plugin.out_placeholder);

(statearr_15694_15737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (11))){
var inst_15611 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15695_15738 = state_15666__$1;
(statearr_15695_15738[(2)] = inst_15611);

(statearr_15695_15738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (9))){
var state_15666__$1 = state_15666;
var statearr_15696_15739 = state_15666__$1;
(statearr_15696_15739[(2)] = true);

(statearr_15696_15739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (5))){
var inst_15598 = (state_15666[(14)]);
var inst_15597 = (state_15666[(2)]);
var inst_15598__$1 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_15600 = (inst_15598__$1 == null);
var inst_15601 = cljs.core.not.call(null,inst_15600);
var state_15666__$1 = (function (){var statearr_15697 = state_15666;
(statearr_15697[(18)] = inst_15597);

(statearr_15697[(14)] = inst_15598__$1);

return statearr_15697;
})();
if(inst_15601){
var statearr_15698_15740 = state_15666__$1;
(statearr_15698_15740[(1)] = (6));

} else {
var statearr_15699_15741 = state_15666__$1;
(statearr_15699_15741[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (14))){
var inst_15621 = (state_15666[(12)]);
var inst_15619 = (state_15666[(19)]);
var inst_15619__$1 = (state_15666[(2)]);
var inst_15620 = cljs.core.get.call(null,inst_15619__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_15621__$1 = cljs.core.get.call(null,inst_15619__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_15622 = cljs.core.get.call(null,inst_15619__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_15623 = cljs.core.get.call(null,inst_15619__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_15624 = cljs.core.get.call(null,inst_15619__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_15666__$1 = (function (){var statearr_15700 = state_15666;
(statearr_15700[(12)] = inst_15621__$1);

(statearr_15700[(20)] = inst_15623);

(statearr_15700[(21)] = inst_15620);

(statearr_15700[(22)] = inst_15624);

(statearr_15700[(23)] = inst_15622);

(statearr_15700[(19)] = inst_15619__$1);

return statearr_15700;
})();
if(cljs.core.truth_(inst_15621__$1)){
var statearr_15701_15742 = state_15666__$1;
(statearr_15701_15742[(1)] = (15));

} else {
var statearr_15702_15743 = state_15666__$1;
(statearr_15702_15743[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (26))){
var inst_15594 = (state_15666[(15)]);
var inst_15629 = (state_15666[(16)]);
var inst_15593 = (state_15666[(17)]);
var inst_15623 = (state_15666[(20)]);
var inst_15620 = (state_15666[(21)]);
var inst_15597 = (state_15666[(18)]);
var inst_15624 = (state_15666[(22)]);
var inst_15633 = (state_15666[(24)]);
var inst_15635 = (state_15666[(7)]);
var inst_15622 = (state_15666[(23)]);
var inst_15634 = (state_15666[(8)]);
var inst_15619 = (state_15666[(19)]);
var inst_15651 = (function (){var the_editor_type = inst_15629;
var eval_fn_with_args = inst_15594;
var idle_msec = inst_15620;
var loop_msec = inst_15622;
var load_error = inst_15635;
var async_code_QMARK_ = inst_15623;
var load_status = inst_15634;
var eval_args = inst_15593;
var map__15586 = inst_15619;
var source_code = inst_15597;
var preamble = inst_15624;
var vec__15587 = inst_15633;
return ((function (the_editor_type,eval_fn_with_args,idle_msec,loop_msec,load_error,async_code_QMARK_,load_status,eval_args,map__15586,source_code,preamble,vec__15587,inst_15594,inst_15629,inst_15593,inst_15623,inst_15620,inst_15597,inst_15624,inst_15633,inst_15635,inst_15622,inst_15634,inst_15619,state_val_15667,c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
return cljs.core.async.chan.call(null);
});
;})(the_editor_type,eval_fn_with_args,idle_msec,loop_msec,load_error,async_code_QMARK_,load_status,eval_args,map__15586,source_code,preamble,vec__15587,inst_15594,inst_15629,inst_15593,inst_15623,inst_15620,inst_15597,inst_15624,inst_15633,inst_15635,inst_15622,inst_15634,inst_15619,state_val_15667,c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state_15666__$1 = state_15666;
var statearr_15703_15744 = state_15666__$1;
(statearr_15703_15744[(2)] = inst_15651);

(statearr_15703_15744[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (16))){
var state_15666__$1 = state_15666;
var statearr_15704_15745 = state_15666__$1;
(statearr_15704_15745[(2)] = default_editor);

(statearr_15704_15745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (30))){
var inst_15629 = (state_15666[(16)]);
var inst_15646 = (state_15666[(10)]);
var inst_15623 = (state_15666[(20)]);
var inst_15620 = (state_15666[(21)]);
var inst_15647 = (state_15666[(11)]);
var inst_15597 = (state_15666[(18)]);
var inst_15624 = (state_15666[(22)]);
var inst_15653 = (state_15666[(9)]);
var inst_15622 = (state_15666[(23)]);
var inst_15641 = (state_15666[(13)]);
var inst_15636 = (state_15666[(25)]);
var inst_15658 = (state_15666[(2)]);
var inst_15659 = [inst_15641,inst_15646,inst_15620,inst_15622,element,editor_out_mode,inst_15623,inst_15597,inst_15624,codemirror_options_out,editor_in_mode,inst_15647,inst_15653,no_result,codemirror_options_in,inst_15658];
var inst_15660 = cljs.core.PersistentHashMap.fromArrays(inst_15636,inst_15659);
var inst_15661 = klipse.klipse_editors.create_editor.call(null,inst_15629,inst_15660);
var state_15666__$1 = state_15666;
var statearr_15705_15746 = state_15666__$1;
(statearr_15705_15746[(2)] = inst_15661);

(statearr_15705_15746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (10))){
var state_15666__$1 = state_15666;
var statearr_15706_15747 = state_15666__$1;
(statearr_15706_15747[(2)] = false);

(statearr_15706_15747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (18))){
var inst_15633 = (state_15666[(24)]);
var inst_15634 = (state_15666[(8)]);
var inst_15633__$1 = (state_15666[(2)]);
var inst_15634__$1 = cljs.core.nth.call(null,inst_15633__$1,(0),null);
var inst_15635 = cljs.core.nth.call(null,inst_15633__$1,(1),null);
var inst_15636 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_15637 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_15634__$1);
var state_15666__$1 = (function (){var statearr_15707 = state_15666;
(statearr_15707[(24)] = inst_15633__$1);

(statearr_15707[(7)] = inst_15635);

(statearr_15707[(8)] = inst_15634__$1);

(statearr_15707[(25)] = inst_15636);

return statearr_15707;
})();
if(inst_15637){
var statearr_15708_15748 = state_15666__$1;
(statearr_15708_15748[(1)] = (19));

} else {
var statearr_15709_15749 = state_15666__$1;
(statearr_15709_15749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (8))){
var inst_15614 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
if(cljs.core.truth_(inst_15614)){
var statearr_15710_15750 = state_15666__$1;
(statearr_15710_15750[(1)] = (12));

} else {
var statearr_15711_15751 = state_15666__$1;
(statearr_15711_15751[(1)] = (13));

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
});})(c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
;
return ((function (switch__13825__auto__,c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto____0 = (function (){
var statearr_15712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15712[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto__);

(statearr_15712[(1)] = (1));

return statearr_15712;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto____1 = (function (state_15666){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15713){if((e15713 instanceof Object)){
var ex__13829__auto__ = e15713;
var statearr_15714_15752 = state_15666;
(statearr_15714_15752[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15753 = state_15666;
state_15666 = G__15753;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto__ = function(state_15666){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto____1.call(this,state_15666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state__13850__auto__ = (function (){var statearr_15715 = f__13849__auto__.call(null);
(statearr_15715[(6)] = c__13848__auto__);

return statearr_15715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,map__15581,map__15581__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__15582,map__15582__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
);

return c__13848__auto__;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Symbol("goog.dom","isElement","goog.dom/isElement",-1707224949,null),goog.dom.isElement);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"str","str",1089608819)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.string_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__15754_SHARP_){
return ((cljs.core._EQ_.call(null,p1__15754_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__15754_SHARP_,false)));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15755){
return cljs.core.map_QMARK_.call(null,G__15755);
}),(function (G__15755){
return cljs.core.contains_QMARK_.call(null,G__15755,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__15755){
return cljs.core.contains_QMARK_.call(null,G__15755,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__15755){
return cljs.core.contains_QMARK_.call(null,G__15755,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__15755){
return cljs.core.contains_QMARK_.call(null,G__15755,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__15755){
return ((cljs.core.map_QMARK_.call(null,G__15755)) && (cljs.core.contains_QMARK_.call(null,G__15755,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (cljs.core.contains_QMARK_.call(null,G__15755,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (cljs.core.contains_QMARK_.call(null,G__15755,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__15755,new cljs.core.Keyword(null,"comment-str","comment-str",130143853))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15756){
return cljs.core.map_QMARK_.call(null,G__15756);
})], null),(function (G__15756){
return cljs.core.map_QMARK_.call(null,G__15756);
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
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,opts,temp__5455__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,opts,temp__5455__auto__){
return (function (state_15764){
var state_val_15765 = (state_15764[(1)]);
if((state_val_15765 === (1))){
var inst_15757 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts);
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15764__$1,(3),inst_15757);
} else {
if((state_val_15765 === (2))){
var inst_15762 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15764__$1,inst_15762);
} else {
if((state_val_15765 === (3))){
var inst_15759 = (state_15764[(2)]);
var inst_15760 = inst_15759.call(null);
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15764__$1,(2),inst_15760);
} else {
return null;
}
}
}
});})(c__13848__auto__,opts,temp__5455__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__,opts,temp__5455__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__13826__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__13826__auto____0 = (function (){
var statearr_15766 = [null,null,null,null,null,null,null];
(statearr_15766[(0)] = klipse$plugin$klipsify_$_state_machine__13826__auto__);

(statearr_15766[(1)] = (1));

return statearr_15766;
});
var klipse$plugin$klipsify_$_state_machine__13826__auto____1 = (function (state_15764){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15767){if((e15767 instanceof Object)){
var ex__13829__auto__ = e15767;
var statearr_15768_15780 = state_15764;
(statearr_15768_15780[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15781 = state_15764;
state_15764 = G__15781;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__13826__auto__ = function(state_15764){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__13826__auto____1.call(this,state_15764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__13826__auto____0;
klipse$plugin$klipsify_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__13826__auto____1;
return klipse$plugin$klipsify_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,opts,temp__5455__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15769 = f__13849__auto__.call(null);
(statearr_15769[(6)] = c__13848__auto__);

return statearr_15769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,opts,temp__5455__auto__))
);

return c__13848__auto__;
} else {
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,temp__5455__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,temp__5455__auto__){
return (function (state_15774){
var state_val_15775 = (state_15774[(1)]);
if((state_val_15775 === (1))){
var inst_15770 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_15771 = cljs.core.keys.call(null,inst_15770);
var inst_15772 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_15771);
var state_15774__$1 = state_15774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15774__$1,inst_15772);
} else {
return null;
}
});})(c__13848__auto__,temp__5455__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__,temp__5455__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__13826__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__13826__auto____0 = (function (){
var statearr_15776 = [null,null,null,null,null,null,null];
(statearr_15776[(0)] = klipse$plugin$klipsify_$_state_machine__13826__auto__);

(statearr_15776[(1)] = (1));

return statearr_15776;
});
var klipse$plugin$klipsify_$_state_machine__13826__auto____1 = (function (state_15774){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15777){if((e15777 instanceof Object)){
var ex__13829__auto__ = e15777;
var statearr_15778_15782 = state_15774;
(statearr_15778_15782[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15783 = state_15774;
state_15774 = G__15783;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__13826__auto__ = function(state_15774){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__13826__auto____1.call(this,state_15774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__13826__auto____0;
klipse$plugin$klipsify_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__13826__auto____1;
return klipse$plugin$klipsify_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,temp__5455__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15779 = f__13849__auto__.call(null);
(statearr_15779[(6)] = c__13848__auto__);

return statearr_15779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,temp__5455__auto__))
);

return c__13848__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify', klipse.plugin.klipsify);
klipse.plugin.klipsify_no_eval = (function klipse$plugin$klipsify_no_eval(element,general_settings,mode){
var temp__5455__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5455__auto__)){
var opts = temp__5455__auto__;
return klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts);
} else {
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,temp__5455__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,temp__5455__auto__){
return (function (state_15786){
var state_val_15787 = (state_15786[(1)]);
if((state_val_15787 === (1))){
var inst_15784 = (function (){return ((function (state_val_15787,c__13848__auto__,temp__5455__auto__){
return (function (){
var c__13848__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto____$1,state_val_15787,c__13848__auto__,temp__5455__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto____$1,state_val_15787,c__13848__auto__,temp__5455__auto__){
return (function (state_15792){
var state_val_15793 = (state_15792[(1)]);
if((state_val_15793 === (1))){
var inst_15788 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_15789 = cljs.core.keys.call(null,inst_15788);
var inst_15790 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_15789);
var state_15792__$1 = state_15792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15792__$1,inst_15790);
} else {
return null;
}
});})(c__13848__auto____$1,state_val_15787,c__13848__auto__,temp__5455__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto____$1,state_val_15787,c__13848__auto__,temp__5455__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____0 = (function (){
var statearr_15794 = [null,null,null,null,null,null,null];
(statearr_15794[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__);

(statearr_15794[(1)] = (1));

return statearr_15794;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____1 = (function (state_15792){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15795){if((e15795 instanceof Object)){
var ex__13829__auto__ = e15795;
var statearr_15796_15802 = state_15792;
(statearr_15796_15802[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15803 = state_15792;
state_15792 = G__15803;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__ = function(state_15792){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____1.call(this,state_15792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto____$1,state_val_15787,c__13848__auto__,temp__5455__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15797 = f__13849__auto__.call(null);
(statearr_15797[(6)] = c__13848__auto____$1);

return statearr_15797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto____$1,state_val_15787,c__13848__auto__,temp__5455__auto__))
);

return c__13848__auto____$1;
});
;})(state_val_15787,c__13848__auto__,temp__5455__auto__))
})();
var state_15786__$1 = state_15786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15786__$1,inst_15784);
} else {
return null;
}
});})(c__13848__auto__,temp__5455__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__,temp__5455__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____0 = (function (){
var statearr_15798 = [null,null,null,null,null,null,null];
(statearr_15798[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__);

(statearr_15798[(1)] = (1));

return statearr_15798;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____1 = (function (state_15786){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15799){if((e15799 instanceof Object)){
var ex__13829__auto__ = e15799;
var statearr_15800_15804 = state_15786;
(statearr_15800_15804[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15805 = state_15786;
state_15786 = G__15805;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__ = function(state_15786){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____1.call(this,state_15786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,temp__5455__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15801 = f__13849__auto__.call(null);
(statearr_15801[(6)] = c__13848__auto__);

return statearr_15801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,temp__5455__auto__))
);

return c__13848__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify_no_eval', klipse.plugin.klipsify_no_eval);
klipse.plugin.edit_elements = (function klipse$plugin$edit_elements(elements,general_settings,modes){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15832){
var state_val_15833 = (state_15832[(1)]);
if((state_val_15833 === (7))){
var inst_15813 = (state_15832[(7)]);
var inst_15812 = (state_15832[(8)]);
var inst_15815 = klipse.plugin.klipsify_no_eval.call(null,inst_15812,general_settings,inst_15813);
var state_15832__$1 = state_15832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15832__$1,(10),inst_15815);
} else {
if((state_val_15833 === (1))){
var inst_15806 = cljs.core.PersistentVector.EMPTY;
var inst_15807 = elements;
var inst_15808 = inst_15806;
var state_15832__$1 = (function (){var statearr_15834 = state_15832;
(statearr_15834[(9)] = inst_15807);

(statearr_15834[(10)] = inst_15808);

return statearr_15834;
})();
var statearr_15835_15853 = state_15832__$1;
(statearr_15835_15853[(2)] = null);

(statearr_15835_15853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15833 === (4))){
var inst_15813 = (state_15832[(7)]);
var inst_15807 = (state_15832[(9)]);
var inst_15812 = (state_15832[(8)]);
var inst_15812__$1 = cljs.core.first.call(null,inst_15807);
var inst_15813__$1 = modes.call(null,inst_15812__$1);
var state_15832__$1 = (function (){var statearr_15836 = state_15832;
(statearr_15836[(7)] = inst_15813__$1);

(statearr_15836[(8)] = inst_15812__$1);

return statearr_15836;
})();
if(cljs.core.truth_(inst_15813__$1)){
var statearr_15837_15854 = state_15832__$1;
(statearr_15837_15854[(1)] = (7));

} else {
var statearr_15838_15855 = state_15832__$1;
(statearr_15838_15855[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15833 === (6))){
var inst_15828 = (state_15832[(2)]);
var state_15832__$1 = state_15832;
var statearr_15839_15856 = state_15832__$1;
(statearr_15839_15856[(2)] = inst_15828);

(statearr_15839_15856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15833 === (3))){
var inst_15830 = (state_15832[(2)]);
var state_15832__$1 = state_15832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15832__$1,inst_15830);
} else {
if((state_val_15833 === (2))){
var inst_15807 = (state_15832[(9)]);
var inst_15810 = cljs.core.seq.call(null,inst_15807);
var state_15832__$1 = state_15832;
if(inst_15810){
var statearr_15840_15857 = state_15832__$1;
(statearr_15840_15857[(1)] = (4));

} else {
var statearr_15841_15858 = state_15832__$1;
(statearr_15841_15858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15833 === (9))){
var inst_15825 = (state_15832[(2)]);
var state_15832__$1 = state_15832;
var statearr_15842_15859 = state_15832__$1;
(statearr_15842_15859[(2)] = inst_15825);

(statearr_15842_15859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15833 === (5))){
var inst_15808 = (state_15832[(10)]);
var state_15832__$1 = state_15832;
var statearr_15844_15860 = state_15832__$1;
(statearr_15844_15860[(2)] = inst_15808);

(statearr_15844_15860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15833 === (10))){
var inst_15807 = (state_15832[(9)]);
var inst_15808 = (state_15832[(10)]);
var inst_15817 = (state_15832[(2)]);
var inst_15818 = cljs.core.rest.call(null,inst_15807);
var inst_15819 = cljs.core.conj.call(null,inst_15808,inst_15817);
var inst_15807__$1 = inst_15818;
var inst_15808__$1 = inst_15819;
var state_15832__$1 = (function (){var statearr_15845 = state_15832;
(statearr_15845[(9)] = inst_15807__$1);

(statearr_15845[(10)] = inst_15808__$1);

return statearr_15845;
})();
var statearr_15846_15861 = state_15832__$1;
(statearr_15846_15861[(2)] = null);

(statearr_15846_15861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15833 === (8))){
var inst_15807 = (state_15832[(9)]);
var inst_15808 = (state_15832[(10)]);
var inst_15822 = cljs.core.rest.call(null,inst_15807);
var tmp15843 = inst_15808;
var inst_15807__$1 = inst_15822;
var inst_15808__$1 = tmp15843;
var state_15832__$1 = (function (){var statearr_15847 = state_15832;
(statearr_15847[(9)] = inst_15807__$1);

(statearr_15847[(10)] = inst_15808__$1);

return statearr_15847;
})();
var statearr_15848_15862 = state_15832__$1;
(statearr_15848_15862[(2)] = null);

(statearr_15848_15862[(1)] = (2));


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
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$plugin$edit_elements_$_state_machine__13826__auto__ = null;
var klipse$plugin$edit_elements_$_state_machine__13826__auto____0 = (function (){
var statearr_15849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15849[(0)] = klipse$plugin$edit_elements_$_state_machine__13826__auto__);

(statearr_15849[(1)] = (1));

return statearr_15849;
});
var klipse$plugin$edit_elements_$_state_machine__13826__auto____1 = (function (state_15832){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15850){if((e15850 instanceof Object)){
var ex__13829__auto__ = e15850;
var statearr_15851_15863 = state_15832;
(statearr_15851_15863[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15864 = state_15832;
state_15832 = G__15864;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__13826__auto__ = function(state_15832){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__13826__auto____1.call(this,state_15832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$edit_elements_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__13826__auto____0;
klipse$plugin$edit_elements_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__13826__auto____1;
return klipse$plugin$edit_elements_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15852 = f__13849__auto__.call(null);
(statearr_15852[(6)] = c__13848__auto__);

return statearr_15852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,general_settings,modes){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15913){
var state_val_15914 = (state_15913[(1)]);
if((state_val_15914 === (7))){
var inst_15909 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_15915_15941 = state_15913__$1;
(statearr_15915_15941[(2)] = inst_15909);

(statearr_15915_15941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (1))){
var inst_15865 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_15913__$1 = state_15913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15913__$1,(2),inst_15865);
} else {
if((state_val_15914 === (4))){
var inst_15911 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15913__$1,inst_15911);
} else {
if((state_val_15914 === (15))){
var inst_15888 = (state_15913[(7)]);
var inst_15900 = (state_15913[(2)]);
var inst_15901 = cljs.core.next.call(null,inst_15888);
var inst_15873 = inst_15901;
var inst_15874 = null;
var inst_15875 = (0);
var inst_15876 = (0);
var state_15913__$1 = (function (){var statearr_15916 = state_15913;
(statearr_15916[(8)] = inst_15873);

(statearr_15916[(9)] = inst_15875);

(statearr_15916[(10)] = inst_15876);

(statearr_15916[(11)] = inst_15874);

(statearr_15916[(12)] = inst_15900);

return statearr_15916;
})();
var statearr_15917_15942 = state_15913__$1;
(statearr_15917_15942[(2)] = null);

(statearr_15917_15942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (13))){
var inst_15888 = (state_15913[(7)]);
var inst_15897 = cljs.core.first.call(null,inst_15888);
var inst_15898 = inst_15897.call(null);
var state_15913__$1 = state_15913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15913__$1,(15),inst_15898);
} else {
if((state_val_15914 === (6))){
var inst_15888 = (state_15913[(7)]);
var inst_15873 = (state_15913[(8)]);
var inst_15888__$1 = cljs.core.seq.call(null,inst_15873);
var state_15913__$1 = (function (){var statearr_15918 = state_15913;
(statearr_15918[(7)] = inst_15888__$1);

return statearr_15918;
})();
if(inst_15888__$1){
var statearr_15919_15943 = state_15913__$1;
(statearr_15919_15943[(1)] = (9));

} else {
var statearr_15920_15944 = state_15913__$1;
(statearr_15920_15944[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (3))){
var inst_15875 = (state_15913[(9)]);
var inst_15876 = (state_15913[(10)]);
var inst_15878 = (inst_15876 < inst_15875);
var inst_15879 = inst_15878;
var state_15913__$1 = state_15913;
if(cljs.core.truth_(inst_15879)){
var statearr_15921_15945 = state_15913__$1;
(statearr_15921_15945[(1)] = (5));

} else {
var statearr_15922_15946 = state_15913__$1;
(statearr_15922_15946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (12))){
var inst_15888 = (state_15913[(7)]);
var inst_15892 = cljs.core.chunk_first.call(null,inst_15888);
var inst_15893 = cljs.core.chunk_rest.call(null,inst_15888);
var inst_15894 = cljs.core.count.call(null,inst_15892);
var inst_15873 = inst_15893;
var inst_15874 = inst_15892;
var inst_15875 = inst_15894;
var inst_15876 = (0);
var state_15913__$1 = (function (){var statearr_15923 = state_15913;
(statearr_15923[(8)] = inst_15873);

(statearr_15923[(9)] = inst_15875);

(statearr_15923[(10)] = inst_15876);

(statearr_15923[(11)] = inst_15874);

return statearr_15923;
})();
var statearr_15924_15947 = state_15913__$1;
(statearr_15924_15947[(2)] = null);

(statearr_15924_15947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (2))){
var inst_15867 = (state_15913[(2)]);
var inst_15872 = cljs.core.seq.call(null,inst_15867);
var inst_15873 = inst_15872;
var inst_15874 = null;
var inst_15875 = (0);
var inst_15876 = (0);
var state_15913__$1 = (function (){var statearr_15925 = state_15913;
(statearr_15925[(8)] = inst_15873);

(statearr_15925[(9)] = inst_15875);

(statearr_15925[(10)] = inst_15876);

(statearr_15925[(11)] = inst_15874);

return statearr_15925;
})();
var statearr_15926_15948 = state_15913__$1;
(statearr_15926_15948[(2)] = null);

(statearr_15926_15948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (11))){
var inst_15907 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_15927_15949 = state_15913__$1;
(statearr_15927_15949[(2)] = inst_15907);

(statearr_15927_15949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (9))){
var inst_15888 = (state_15913[(7)]);
var inst_15890 = cljs.core.chunked_seq_QMARK_.call(null,inst_15888);
var state_15913__$1 = state_15913;
if(inst_15890){
var statearr_15928_15950 = state_15913__$1;
(statearr_15928_15950[(1)] = (12));

} else {
var statearr_15929_15951 = state_15913__$1;
(statearr_15929_15951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (5))){
var inst_15876 = (state_15913[(10)]);
var inst_15874 = (state_15913[(11)]);
var inst_15881 = cljs.core._nth.call(null,inst_15874,inst_15876);
var inst_15882 = inst_15881.call(null);
var state_15913__$1 = state_15913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15913__$1,(8),inst_15882);
} else {
if((state_val_15914 === (14))){
var inst_15904 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_15933_15952 = state_15913__$1;
(statearr_15933_15952[(2)] = inst_15904);

(statearr_15933_15952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (10))){
var state_15913__$1 = state_15913;
var statearr_15934_15953 = state_15913__$1;
(statearr_15934_15953[(2)] = null);

(statearr_15934_15953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (8))){
var inst_15873 = (state_15913[(8)]);
var inst_15875 = (state_15913[(9)]);
var inst_15876 = (state_15913[(10)]);
var inst_15874 = (state_15913[(11)]);
var inst_15884 = (state_15913[(2)]);
var inst_15885 = (inst_15876 + (1));
var tmp15930 = inst_15873;
var tmp15931 = inst_15875;
var tmp15932 = inst_15874;
var inst_15873__$1 = tmp15930;
var inst_15874__$1 = tmp15932;
var inst_15875__$1 = tmp15931;
var inst_15876__$1 = inst_15885;
var state_15913__$1 = (function (){var statearr_15935 = state_15913;
(statearr_15935[(8)] = inst_15873__$1);

(statearr_15935[(9)] = inst_15875__$1);

(statearr_15935[(10)] = inst_15876__$1);

(statearr_15935[(11)] = inst_15874__$1);

(statearr_15935[(13)] = inst_15884);

return statearr_15935;
})();
var statearr_15936_15954 = state_15913__$1;
(statearr_15936_15954[(2)] = null);

(statearr_15936_15954[(1)] = (3));


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
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$plugin$klipsify_elements_$_state_machine__13826__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__13826__auto____0 = (function (){
var statearr_15937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15937[(0)] = klipse$plugin$klipsify_elements_$_state_machine__13826__auto__);

(statearr_15937[(1)] = (1));

return statearr_15937;
});
var klipse$plugin$klipsify_elements_$_state_machine__13826__auto____1 = (function (state_15913){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15938){if((e15938 instanceof Object)){
var ex__13829__auto__ = e15938;
var statearr_15939_15955 = state_15913;
(statearr_15939_15955[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15956 = state_15913;
state_15913 = G__15956;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__13826__auto__ = function(state_15913){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__13826__auto____1.call(this,state_15913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_elements_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__13826__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__13826__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15940 = f__13849__auto__.call(null);
(statearr_15940[(6)] = c__13848__auto__);

return statearr_15940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.plugin.snippets_selector = (function klipse$plugin$snippets_selector(settings,selector_names){
return clojure.string.join.call(null,",",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,settings,selector_names)));
});
klipse.plugin.seq_from_selector = (function klipse$plugin$seq_from_selector(selector){
return cljs.core.array_seq.call(null,document.querySelectorAll(selector));
});
klipse.plugin.elements__GT_mode = (function klipse$plugin$elements__GT_mode(settings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__15957(s__15958){
return (new cljs.core.LazySeq(null,(function (){
var s__15958__$1 = s__15958;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15958__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var selector_name = cljs.core.first.call(null,xs__6012__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__4288__auto__ = ((function (s__15958__$1,selector,selector_name,xs__6012__auto__,temp__5457__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__15957_$_iter__15959(s__15960){
return (new cljs.core.LazySeq(null,((function (s__15958__$1,selector,selector_name,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__15960__$1 = s__15960;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__15960__$1);
if(temp__5457__auto____$1){
var s__15960__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15960__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__15960__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__15962 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__15961 = (0);
while(true){
if((i__15961 < size__4291__auto__)){
var element = cljs.core._nth.call(null,c__4290__auto__,i__15961);
cljs.core.chunk_append.call(null,b__15962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__15963 = (i__15961 + (1));
i__15961 = G__15963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15962),klipse$plugin$elements__GT_mode_$_iter__15957_$_iter__15959.call(null,cljs.core.chunk_rest.call(null,s__15960__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15962),null);
}
} else {
var element = cljs.core.first.call(null,s__15960__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__15957_$_iter__15959.call(null,cljs.core.rest.call(null,s__15960__$2)));
}
} else {
return null;
}
break;
}
});})(s__15958__$1,selector,selector_name,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__15958__$1,selector,selector_name,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,klipse$plugin$elements__GT_mode_$_iter__15957.call(null,cljs.core.rest.call(null,s__15958__$1)));
} else {
var G__15964 = cljs.core.rest.call(null,s__15958__$1);
s__15958__$1 = G__15964;
continue;
}
} else {
var G__15965 = cljs.core.rest.call(null,s__15958__$1);
s__15958__$1 = G__15965;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode)));
})());
});
klipse.plugin.init_clj = (function klipse$plugin$init_clj(settings){
var map__15966 = clojure.walk.keywordize_keys.call(null,settings);
var map__15966__$1 = ((((!((map__15966 == null)))?(((((map__15966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15966):map__15966);
var keywordized_settings = map__15966__$1;
var secured_eval = cljs.core.get.call(null,map__15966__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__15966__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
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
