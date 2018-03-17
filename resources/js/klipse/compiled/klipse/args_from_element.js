// Compiled by ClojureScript 1.10.145 {}
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
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15462){
var state_val_15463 = (state_15462[(1)]);
if((state_val_15463 === (1))){
var inst_15445 = (state_15462[(7)]);
var inst_15444 = (element["dataset"]);
var inst_15445__$1 = (inst_15444["gistId"]);
var state_15462__$1 = (function (){var statearr_15464 = state_15462;
(statearr_15464[(7)] = inst_15445__$1);

return statearr_15464;
})();
if(cljs.core.truth_(inst_15445__$1)){
var statearr_15465_15478 = state_15462__$1;
(statearr_15465_15478[(1)] = (2));

} else {
var statearr_15466_15479 = state_15462__$1;
(statearr_15466_15479[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15463 === (2))){
var inst_15445 = (state_15462[(7)]);
var state_15462__$1 = state_15462;
var statearr_15467_15480 = state_15462__$1;
(statearr_15467_15480[(2)] = inst_15445);

(statearr_15467_15480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15463 === (3))){
var state_15462__$1 = state_15462;
var statearr_15468_15481 = state_15462__$1;
(statearr_15468_15481[(2)] = null);

(statearr_15468_15481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15463 === (4))){
var inst_15449 = (state_15462[(8)]);
var inst_15449__$1 = (state_15462[(2)]);
var state_15462__$1 = (function (){var statearr_15469 = state_15462;
(statearr_15469[(8)] = inst_15449__$1);

return statearr_15469;
})();
if(cljs.core.truth_(inst_15449__$1)){
var statearr_15470_15482 = state_15462__$1;
(statearr_15470_15482[(1)] = (5));

} else {
var statearr_15471_15483 = state_15462__$1;
(statearr_15471_15483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15463 === (5))){
var inst_15449 = (state_15462[(8)]);
var inst_15451 = klipse.utils.read_input_from_gist.call(null,inst_15449);
var state_15462__$1 = state_15462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15462__$1,(8),inst_15451);
} else {
if((state_val_15463 === (6))){
var state_15462__$1 = state_15462;
var statearr_15472_15484 = state_15462__$1;
(statearr_15472_15484[(2)] = null);

(statearr_15472_15484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15463 === (7))){
var inst_15460 = (state_15462[(2)]);
var state_15462__$1 = state_15462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15462__$1,inst_15460);
} else {
if((state_val_15463 === (8))){
var inst_15449 = (state_15462[(8)]);
var inst_15453 = (state_15462[(2)]);
var inst_15454 = klipse.utils.gist_path_page.call(null,inst_15449);
var inst_15455 = ["loaded from gist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15454)].join('');
var inst_15456 = klipse.args_from_element.comment_out.call(null,inst_15455,comment_str);
var inst_15457 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15456),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15453)].join('');
var state_15462__$1 = state_15462;
var statearr_15473_15485 = state_15462__$1;
(statearr_15473_15485[(2)] = inst_15457);

(statearr_15473_15485[(1)] = (7));


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
var klipse$args_from_element$content_from_gist_$_state_machine__13826__auto__ = null;
var klipse$args_from_element$content_from_gist_$_state_machine__13826__auto____0 = (function (){
var statearr_15474 = [null,null,null,null,null,null,null,null,null];
(statearr_15474[(0)] = klipse$args_from_element$content_from_gist_$_state_machine__13826__auto__);

(statearr_15474[(1)] = (1));

return statearr_15474;
});
var klipse$args_from_element$content_from_gist_$_state_machine__13826__auto____1 = (function (state_15462){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15475){if((e15475 instanceof Object)){
var ex__13829__auto__ = e15475;
var statearr_15476_15486 = state_15462;
(statearr_15476_15486[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15487 = state_15462;
state_15462 = G__15487;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$args_from_element$content_from_gist_$_state_machine__13826__auto__ = function(state_15462){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_from_gist_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$args_from_element$content_from_gist_$_state_machine__13826__auto____1.call(this,state_15462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$args_from_element$content_from_gist_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_from_gist_$_state_machine__13826__auto____0;
klipse$args_from_element$content_from_gist_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_from_gist_$_state_machine__13826__auto____1;
return klipse$args_from_element$content_from_gist_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15477 = f__13849__auto__.call(null);
(statearr_15477[(6)] = c__13848__auto__);

return statearr_15477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.args_from_element.content = (function klipse$args_from_element$content(element,comment_str){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15497){
var state_val_15498 = (state_15497[(1)]);
if((state_val_15498 === (1))){
var inst_15488 = klipse.args_from_element.content_from_gist.call(null,element,comment_str);
var state_15497__$1 = state_15497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15497__$1,(2),inst_15488);
} else {
if((state_val_15498 === (2))){
var inst_15490 = (state_15497[(7)]);
var inst_15490__$1 = (state_15497[(2)]);
var state_15497__$1 = (function (){var statearr_15499 = state_15497;
(statearr_15499[(7)] = inst_15490__$1);

return statearr_15499;
})();
if(cljs.core.truth_(inst_15490__$1)){
var statearr_15500_15508 = state_15497__$1;
(statearr_15500_15508[(1)] = (3));

} else {
var statearr_15501_15509 = state_15497__$1;
(statearr_15501_15509[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (3))){
var inst_15490 = (state_15497[(7)]);
var state_15497__$1 = state_15497;
var statearr_15502_15510 = state_15497__$1;
(statearr_15502_15510[(2)] = inst_15490);

(statearr_15502_15510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (4))){
var inst_15493 = (element["textContent"]);
var state_15497__$1 = state_15497;
var statearr_15503_15511 = state_15497__$1;
(statearr_15503_15511[(2)] = inst_15493);

(statearr_15503_15511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (5))){
var inst_15495 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15497__$1,inst_15495);
} else {
return null;
}
}
}
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$args_from_element$content_$_state_machine__13826__auto__ = null;
var klipse$args_from_element$content_$_state_machine__13826__auto____0 = (function (){
var statearr_15504 = [null,null,null,null,null,null,null,null];
(statearr_15504[(0)] = klipse$args_from_element$content_$_state_machine__13826__auto__);

(statearr_15504[(1)] = (1));

return statearr_15504;
});
var klipse$args_from_element$content_$_state_machine__13826__auto____1 = (function (state_15497){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15505){if((e15505 instanceof Object)){
var ex__13829__auto__ = e15505;
var statearr_15506_15512 = state_15497;
(statearr_15506_15512[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15513 = state_15497;
state_15497 = G__15513;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$args_from_element$content_$_state_machine__13826__auto__ = function(state_15497){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$args_from_element$content_$_state_machine__13826__auto____1.call(this,state_15497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$args_from_element$content_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_$_state_machine__13826__auto____0;
klipse$args_from_element$content_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_$_state_machine__13826__auto____1;
return klipse$args_from_element$content_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15507 = f__13849__auto__.call(null);
(statearr_15507[(6)] = c__13848__auto__);

return statearr_15507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.args_from_element.eval_args_from_element = (function klipse$args_from_element$eval_args_from_element(element,p__15514){
var map__15515 = p__15514;
var map__15515__$1 = ((((!((map__15515 == null)))?(((((map__15515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15515):map__15515);
var print_length = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var eval_context = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"eval-context","eval-context",536255614));
var my_dataset = (element["dataset"]);
var static_fns = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["staticFns"]),false);
var async_code_QMARK_ = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["asyncCode"]),false);
var verbose = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["verbose"]),false);
var compile_display_guard = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["compileDisplayGuard"]),false);
var eval_context__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalContext"]),eval_context);
var max_eval_duration = (my_dataset["maxEvalDuration"]);
var print_length__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["printLength"]),print_length);
var beautify_strings__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["beautifyStrings"]),beautify_strings);
var external_libs = klipse.args_from_element.string__GT_array.call(null,(function (){var or__3922__auto__ = (my_dataset["externalLibs"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var preamble = (function (){var or__3922__auto__ = (my_dataset["preamble"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})();
var idle_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalIdleMsec"]),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),editor_type], null));
});

//# sourceMappingURL=args_from_element.js.map
