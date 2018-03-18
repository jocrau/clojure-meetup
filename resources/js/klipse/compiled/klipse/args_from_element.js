// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.args_from_element');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('gadjett.collections');
klipse.args_from_element.read_string_or_val = (function klipse$args_from_element$read_string_or_val(value,not_found){
if(cljs.core.truth_(value)){
return cljs.reader.read_string.call(null,value);
} else {
return not_found;
}
});
klipse.args_from_element.string__GT_array = (function klipse$args_from_element$string__GT_array(s){
if(cljs.core.truth_(s)){
return cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,s,","));
} else {
return null;
}
});
klipse.args_from_element.comment_out = (function klipse$args_from_element$comment_out(src,comment_str){
if(typeof comment_str === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join('');
} else {
return comment_str.call(null,src);
}
});
klipse.args_from_element.content_from_gist = (function klipse$args_from_element$content_from_gist(element,comment_str){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_37807){
var state_val_37808 = (state_37807[(1)]);
if((state_val_37808 === (1))){
var inst_37790 = (state_37807[(7)]);
var inst_37789 = (element["dataset"]);
var inst_37790__$1 = (inst_37789["gistId"]);
var state_37807__$1 = (function (){var statearr_37809 = state_37807;
(statearr_37809[(7)] = inst_37790__$1);

return statearr_37809;
})();
if(cljs.core.truth_(inst_37790__$1)){
var statearr_37810_37823 = state_37807__$1;
(statearr_37810_37823[(1)] = (2));

} else {
var statearr_37811_37824 = state_37807__$1;
(statearr_37811_37824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (2))){
var inst_37790 = (state_37807[(7)]);
var state_37807__$1 = state_37807;
var statearr_37812_37825 = state_37807__$1;
(statearr_37812_37825[(2)] = inst_37790);

(statearr_37812_37825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (3))){
var state_37807__$1 = state_37807;
var statearr_37813_37826 = state_37807__$1;
(statearr_37813_37826[(2)] = null);

(statearr_37813_37826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (4))){
var inst_37794 = (state_37807[(8)]);
var inst_37794__$1 = (state_37807[(2)]);
var state_37807__$1 = (function (){var statearr_37814 = state_37807;
(statearr_37814[(8)] = inst_37794__$1);

return statearr_37814;
})();
if(cljs.core.truth_(inst_37794__$1)){
var statearr_37815_37827 = state_37807__$1;
(statearr_37815_37827[(1)] = (5));

} else {
var statearr_37816_37828 = state_37807__$1;
(statearr_37816_37828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (5))){
var inst_37794 = (state_37807[(8)]);
var inst_37796 = klipse.utils.read_input_from_gist.call(null,inst_37794);
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37807__$1,(8),inst_37796);
} else {
if((state_val_37808 === (6))){
var state_37807__$1 = state_37807;
var statearr_37817_37829 = state_37807__$1;
(statearr_37817_37829[(2)] = null);

(statearr_37817_37829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (7))){
var inst_37805 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37807__$1,inst_37805);
} else {
if((state_val_37808 === (8))){
var inst_37794 = (state_37807[(8)]);
var inst_37798 = (state_37807[(2)]);
var inst_37799 = klipse.utils.gist_path_page.call(null,inst_37794);
var inst_37800 = ["loaded from gist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37799)].join('');
var inst_37801 = klipse.args_from_element.comment_out.call(null,inst_37800,comment_str);
var inst_37802 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37801),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37798)].join('');
var state_37807__$1 = state_37807;
var statearr_37818_37830 = state_37807__$1;
(statearr_37818_37830[(2)] = inst_37802);

(statearr_37818_37830[(1)] = (7));


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
var klipse$args_from_element$content_from_gist_$_state_machine__24511__auto__ = null;
var klipse$args_from_element$content_from_gist_$_state_machine__24511__auto____0 = (function (){
var statearr_37819 = [null,null,null,null,null,null,null,null,null];
(statearr_37819[(0)] = klipse$args_from_element$content_from_gist_$_state_machine__24511__auto__);

(statearr_37819[(1)] = (1));

return statearr_37819;
});
var klipse$args_from_element$content_from_gist_$_state_machine__24511__auto____1 = (function (state_37807){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37820){if((e37820 instanceof Object)){
var ex__24514__auto__ = e37820;
var statearr_37821_37831 = state_37807;
(statearr_37821_37831[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37832 = state_37807;
state_37807 = G__37832;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$args_from_element$content_from_gist_$_state_machine__24511__auto__ = function(state_37807){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_from_gist_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$args_from_element$content_from_gist_$_state_machine__24511__auto____1.call(this,state_37807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$args_from_element$content_from_gist_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_from_gist_$_state_machine__24511__auto____0;
klipse$args_from_element$content_from_gist_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_from_gist_$_state_machine__24511__auto____1;
return klipse$args_from_element$content_from_gist_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_37822 = f__24601__auto__.call(null);
(statearr_37822[(6)] = c__24600__auto__);

return statearr_37822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.args_from_element.content = (function klipse$args_from_element$content(element,comment_str){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_37842){
var state_val_37843 = (state_37842[(1)]);
if((state_val_37843 === (1))){
var inst_37833 = klipse.args_from_element.content_from_gist.call(null,element,comment_str);
var state_37842__$1 = state_37842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37842__$1,(2),inst_37833);
} else {
if((state_val_37843 === (2))){
var inst_37835 = (state_37842[(7)]);
var inst_37835__$1 = (state_37842[(2)]);
var state_37842__$1 = (function (){var statearr_37844 = state_37842;
(statearr_37844[(7)] = inst_37835__$1);

return statearr_37844;
})();
if(cljs.core.truth_(inst_37835__$1)){
var statearr_37845_37853 = state_37842__$1;
(statearr_37845_37853[(1)] = (3));

} else {
var statearr_37846_37854 = state_37842__$1;
(statearr_37846_37854[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (3))){
var inst_37835 = (state_37842[(7)]);
var state_37842__$1 = state_37842;
var statearr_37847_37855 = state_37842__$1;
(statearr_37847_37855[(2)] = inst_37835);

(statearr_37847_37855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (4))){
var inst_37838 = (element["textContent"]);
var state_37842__$1 = state_37842;
var statearr_37848_37856 = state_37842__$1;
(statearr_37848_37856[(2)] = inst_37838);

(statearr_37848_37856[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (5))){
var inst_37840 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37842__$1,inst_37840);
} else {
return null;
}
}
}
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$args_from_element$content_$_state_machine__24511__auto__ = null;
var klipse$args_from_element$content_$_state_machine__24511__auto____0 = (function (){
var statearr_37849 = [null,null,null,null,null,null,null,null];
(statearr_37849[(0)] = klipse$args_from_element$content_$_state_machine__24511__auto__);

(statearr_37849[(1)] = (1));

return statearr_37849;
});
var klipse$args_from_element$content_$_state_machine__24511__auto____1 = (function (state_37842){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37850){if((e37850 instanceof Object)){
var ex__24514__auto__ = e37850;
var statearr_37851_37857 = state_37842;
(statearr_37851_37857[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37858 = state_37842;
state_37842 = G__37858;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$args_from_element$content_$_state_machine__24511__auto__ = function(state_37842){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$args_from_element$content_$_state_machine__24511__auto____1.call(this,state_37842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$args_from_element$content_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_$_state_machine__24511__auto____0;
klipse$args_from_element$content_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_$_state_machine__24511__auto____1;
return klipse$args_from_element$content_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_37852 = f__24601__auto__.call(null);
(statearr_37852[(6)] = c__24600__auto__);

return statearr_37852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.args_from_element.eval_args_from_element = (function klipse$args_from_element$eval_args_from_element(element,p__37859){
var map__37860 = p__37859;
var map__37860__$1 = ((((!((map__37860 == null)))?((((map__37860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37860):map__37860);
var print_length = cljs.core.get.call(null,map__37860__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__37860__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var eval_context = cljs.core.get.call(null,map__37860__$1,new cljs.core.Keyword(null,"eval-context","eval-context",536255614));
var my_dataset = (element["dataset"]);
var static_fns = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["staticFns"]),false);
var async_code_QMARK_ = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["asyncCode"]),false);
var verbose = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["verbose"]),false);
var compile_display_guard = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["compileDisplayGuard"]),false);
var eval_context__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalContext"]),eval_context);
var max_eval_duration = (my_dataset["maxEvalDuration"]);
var print_length__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["printLength"]),print_length);
var beautify_strings__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["beautifyStrings"]),beautify_strings);
var external_libs = klipse.args_from_element.string__GT_array.call(null,(function (){var or__8916__auto__ = (my_dataset["externalLibs"]);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return null;
}
})());
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010)],[external_libs,static_fns,beautify_strings__$1,async_code_QMARK_,verbose,compile_display_guard,print_length__$1,eval_context__$1,max_eval_duration]);
});
klipse.args_from_element.editor_args_from_element = (function klipse$args_from_element$editor_args_from_element(element){
var my_dataset = (element["dataset"]);
var editor_type = (my_dataset["editorType"]);
var loop_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["loopMsec"]),null);
var preamble = (function (){var or__8916__auto__ = (my_dataset["preamble"]);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "";
}
})();
var idle_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalIdleMsec"]),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),editor_type], null));
});

//# sourceMappingURL=args_from_element.js.map
