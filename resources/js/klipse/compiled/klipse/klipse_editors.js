// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.klipse_editors');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljs.spec.alpha');
goog.require('klipse.utils');
goog.require('klipse.dom_utils');
goog.require('cljs.core.async');
goog.require('klipse.ui.editors.common');
goog.require('klipse.ui.editors.editor');
klipse.klipse_editors.create_state = (function klipse$klipse_editors$create_state(var_args){
var args__10202__auto__ = [];
var len__10195__auto___37388 = arguments.length;
var i__10196__auto___37389 = (0);
while(true){
if((i__10196__auto___37389 < len__10195__auto___37388)){
args__10202__auto__.push((arguments[i__10196__auto___37389]));

var G__37390 = (i__10196__auto___37389 + (1));
i__10196__auto___37389 = G__37390;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__37385){
var map__37386 = p__37385;
var map__37386__$1 = ((((!((map__37386 == null)))?((((map__37386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37386):map__37386);
var result_element = cljs.core.get.call(null,map__37386__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__37386__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__37386__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
});

klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0);

klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq37384){
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37384));
});

klipse.klipse_editors.klipse_result_attrs = (function klipse$klipse_editors$klipse_result_attrs(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-result",new cljs.core.Keyword(null,"id","id",-1388402092),["klipse-result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
klipse.klipse_editors.klipse_container_attrs = (function klipse$klipse_editors$klipse_container_attrs(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-container",new cljs.core.Keyword(null,"id","id",-1388402092),["klipse-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
/**
 * 
 *   Evaluates the `value` - with `preamble` prepended to it.
 *   If `setter` is defined, call `setter` with the result of the evaluation.
 *   Block until the first evaluation.
 *   Call `setter` with subsequent evaluations asynchronously. Subsequent evaluations don't include `preamble`.
 *   (Subsequent evaluations occur with `server-eval` where printing results are written on the channel, one after the other.
 *   In the case of client side evaluation, the channel is closed after the first message on the channel (this is done implicitly by `go`).
 *   
 */
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__37391,state){
var map__37392 = p__37391;
var map__37392__$1 = ((((!((map__37392 == null)))?((((map__37392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37392):map__37392);
var loop_msec = cljs.core.get.call(null,map__37392__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__37392__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("Evaluating: ",src_code);
} else {
}

var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function (state_37505){
var state_val_37506 = (state_37505[(1)]);
if((state_val_37506 === (7))){
var inst_37404 = (state_37505[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37505,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_37404__$1 = cljs.core.deref.call(null,state);
var inst_37406 = (inst_37404__$1 == null);
var inst_37407 = cljs.core.not.call(null,inst_37406);
var state_37505__$1 = (function (){var statearr_37507 = state_37505;
(statearr_37507[(7)] = inst_37404__$1);

return statearr_37507;
})();
if(inst_37407){
var statearr_37508_37569 = state_37505__$1;
(statearr_37508_37569[(1)] = (8));

} else {
var statearr_37509_37570 = state_37505__$1;
(statearr_37509_37570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (20))){
var inst_37397 = (state_37505[(8)]);
var inst_37442 = (state_37505[(9)]);
var inst_37442__$1 = (state_37505[(2)]);
var inst_37443 = inst_37397.call(null,inst_37442__$1);
var state_37505__$1 = (function (){var statearr_37510 = state_37505;
(statearr_37510[(9)] = inst_37442__$1);

(statearr_37510[(10)] = inst_37443);

return statearr_37510;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_37511_37571 = state_37505__$1;
(statearr_37511_37571[(1)] = (21));

} else {
var statearr_37512_37572 = state_37505__$1;
(statearr_37512_37572[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (1))){
var state_37505__$1 = state_37505;
if(cljs.core.truth_(unsafe_setter)){
var statearr_37513_37573 = state_37505__$1;
(statearr_37513_37573[(1)] = (2));

} else {
var statearr_37514_37574 = state_37505__$1;
(statearr_37514_37574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (4))){
var inst_37397 = (state_37505[(2)]);
var state_37505__$1 = (function (){var statearr_37515 = state_37505;
(statearr_37515[(8)] = inst_37397);

return statearr_37515;
})();
var statearr_37516_37575 = state_37505__$1;
(statearr_37516_37575[(2)] = null);

(statearr_37516_37575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (15))){
var inst_37404 = (state_37505[(7)]);
var state_37505__$1 = state_37505;
var statearr_37517_37576 = state_37505__$1;
(statearr_37517_37576[(2)] = inst_37404);

(statearr_37517_37576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (21))){
var inst_37397 = (state_37505[(8)]);
var inst_37442 = (state_37505[(9)]);
var inst_37440 = (state_37505[(11)]);
var inst_37427 = (state_37505[(12)]);
var inst_37426 = (state_37505[(13)]);
var inst_37425 = (state_37505[(14)]);
var inst_37475 = cljs.core.async.chan.call(null,(1));
var inst_37476 = (function (){var setter = inst_37397;
var map__37403 = inst_37425;
var cmd_chan = inst_37426;
var eval_counter = inst_37427;
var evaluation_chan = inst_37440;
var first_result = inst_37442;
var c__24600__auto____$1 = inst_37475;
return ((function (setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37475,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37475,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function (state_37473){
var state_val_37474 = (state_37473[(1)]);
if((state_val_37474 === (1))){
var state_37473__$1 = state_37473;
var statearr_37518_37577 = state_37473__$1;
(statearr_37518_37577[(2)] = null);

(statearr_37518_37577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (2))){
var inst_37449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37450 = cljs.core.async.timeout.call(null,loop_msec);
var inst_37451 = [cmd_chan,inst_37450];
var inst_37452 = (new cljs.core.PersistentVector(null,2,(5),inst_37449,inst_37451,null));
var state_37473__$1 = state_37473;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37473__$1,(4),inst_37452);
} else {
if((state_val_37474 === (3))){
var inst_37471 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37473__$1,inst_37471);
} else {
if((state_val_37474 === (4))){
var inst_37454 = (state_37473[(2)]);
var inst_37455 = cljs.core.nth.call(null,inst_37454,(0),null);
var inst_37456 = cljs.core.nth.call(null,inst_37454,(1),null);
var inst_37457 = cljs.core._EQ_.call(null,inst_37456,cmd_chan);
var inst_37458 = cljs.core._EQ_.call(null,inst_37455,new cljs.core.Keyword(null,"reset","reset",-800929946));
var inst_37459 = (inst_37457) && (inst_37458);
var state_37473__$1 = state_37473;
if(cljs.core.truth_(inst_37459)){
var statearr_37519_37578 = state_37473__$1;
(statearr_37519_37578[(1)] = (5));

} else {
var statearr_37520_37579 = state_37473__$1;
(statearr_37520_37579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (5))){
var state_37473__$1 = state_37473;
var statearr_37521_37580 = state_37473__$1;
(statearr_37521_37580[(2)] = null);

(statearr_37521_37580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (6))){
var inst_37462 = cljs.core.deref.call(null,state);
var inst_37463 = eval_fn.call(null,src_code,inst_37462);
var state_37473__$1 = state_37473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37473__$1,(8),inst_37463);
} else {
if((state_val_37474 === (7))){
var inst_37469 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
var statearr_37522_37581 = state_37473__$1;
(statearr_37522_37581[(2)] = inst_37469);

(statearr_37522_37581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (8))){
var inst_37465 = (state_37473[(2)]);
var inst_37466 = setter.call(null,inst_37465);
var state_37473__$1 = (function (){var statearr_37523 = state_37473;
(statearr_37523[(7)] = inst_37466);

return statearr_37523;
})();
var statearr_37524_37582 = state_37473__$1;
(statearr_37524_37582[(2)] = null);

(statearr_37524_37582[(1)] = (2));


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
});})(setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37475,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
;
return ((function (switch__24510__auto__,setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37475,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0 = (function (){
var statearr_37525 = [null,null,null,null,null,null,null,null];
(statearr_37525[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__);

(statearr_37525[(1)] = (1));

return statearr_37525;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1 = (function (state_37473){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37526){if((e37526 instanceof Object)){
var ex__24514__auto__ = e37526;
var statearr_37527_37583 = state_37473;
(statearr_37527_37583[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37584 = state_37473;
state_37473 = G__37584;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__ = function(state_37473){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1.call(this,state_37473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37475,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
})();
var state__24602__auto__ = (function (){var statearr_37528 = f__24601__auto__.call(null);
(statearr_37528[(6)] = c__24600__auto____$1);

return statearr_37528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});
;})(setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37475,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
})();
var inst_37477 = cljs.core.async.impl.dispatch.run.call(null,inst_37476);
var state_37505__$1 = (function (){var statearr_37529 = state_37505;
(statearr_37529[(15)] = inst_37477);

return statearr_37529;
})();
var statearr_37530_37585 = state_37505__$1;
(statearr_37530_37585[(2)] = inst_37475);

(statearr_37530_37585[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (13))){
var inst_37417 = (state_37505[(2)]);
var state_37505__$1 = state_37505;
var statearr_37531_37586 = state_37505__$1;
(statearr_37531_37586[(2)] = inst_37417);

(statearr_37531_37586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (22))){
var state_37505__$1 = state_37505;
var statearr_37532_37587 = state_37505__$1;
(statearr_37532_37587[(2)] = null);

(statearr_37532_37587[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (6))){
var inst_37397 = (state_37505[(8)]);
var inst_37398 = (state_37505[(2)]);
var inst_37399 = inst_37397.call(null,inst_37398);
var state_37505__$1 = state_37505;
var statearr_37533_37588 = state_37505__$1;
(statearr_37533_37588[(2)] = inst_37399);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37505__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (17))){
var state_37505__$1 = state_37505;
var statearr_37534_37589 = state_37505__$1;
(statearr_37534_37589[(2)] = null);

(statearr_37534_37589[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (3))){
var state_37505__$1 = state_37505;
var statearr_37535_37590 = state_37505__$1;
(statearr_37535_37590[(2)] = cljs.core.any_QMARK_);

(statearr_37535_37590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (12))){
var state_37505__$1 = state_37505;
var statearr_37536_37591 = state_37505__$1;
(statearr_37536_37591[(2)] = false);

(statearr_37536_37591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (2))){
var state_37505__$1 = state_37505;
var statearr_37537_37592 = state_37505__$1;
(statearr_37537_37592[(2)] = unsafe_setter);

(statearr_37537_37592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (23))){
var inst_37397 = (state_37505[(8)]);
var inst_37442 = (state_37505[(9)]);
var inst_37440 = (state_37505[(11)]);
var inst_37427 = (state_37505[(12)]);
var inst_37426 = (state_37505[(13)]);
var inst_37425 = (state_37505[(14)]);
var inst_37480 = (state_37505[(2)]);
var inst_37499 = cljs.core.async.chan.call(null,(1));
var inst_37500 = (function (){var setter = inst_37397;
var map__37403 = inst_37425;
var cmd_chan = inst_37426;
var eval_counter = inst_37427;
var evaluation_chan = inst_37440;
var first_result = inst_37442;
var c__24600__auto____$1 = inst_37499;
return ((function (setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37480,inst_37499,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37480,inst_37499,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function (state_37497){
var state_val_37498 = (state_37497[(1)]);
if((state_val_37498 === (1))){
var inst_37481 = first_result;
var state_37497__$1 = (function (){var statearr_37538 = state_37497;
(statearr_37538[(7)] = inst_37481);

return statearr_37538;
})();
var statearr_37539_37593 = state_37497__$1;
(statearr_37539_37593[(2)] = null);

(statearr_37539_37593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37498 === (2))){
var state_37497__$1 = state_37497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37497__$1,(4),evaluation_chan);
} else {
if((state_val_37498 === (3))){
var inst_37495 = (state_37497[(2)]);
var state_37497__$1 = state_37497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37497__$1,inst_37495);
} else {
if((state_val_37498 === (4))){
var inst_37481 = (state_37497[(7)]);
var inst_37484 = (state_37497[(2)]);
var inst_37485 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37481),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37484)].join('');
var inst_37486 = (inst_37484 == null);
var inst_37487 = cljs.core.not.call(null,inst_37486);
var state_37497__$1 = (function (){var statearr_37540 = state_37497;
(statearr_37540[(8)] = inst_37485);

return statearr_37540;
})();
if(inst_37487){
var statearr_37541_37594 = state_37497__$1;
(statearr_37541_37594[(1)] = (5));

} else {
var statearr_37542_37595 = state_37497__$1;
(statearr_37542_37595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37498 === (5))){
var inst_37485 = (state_37497[(8)]);
var inst_37489 = setter.call(null,inst_37485);
var inst_37481 = inst_37485;
var state_37497__$1 = (function (){var statearr_37543 = state_37497;
(statearr_37543[(9)] = inst_37489);

(statearr_37543[(7)] = inst_37481);

return statearr_37543;
})();
var statearr_37544_37596 = state_37497__$1;
(statearr_37544_37596[(2)] = null);

(statearr_37544_37596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37498 === (6))){
var state_37497__$1 = state_37497;
var statearr_37545_37597 = state_37497__$1;
(statearr_37545_37597[(2)] = null);

(statearr_37545_37597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37498 === (7))){
var inst_37493 = (state_37497[(2)]);
var state_37497__$1 = state_37497;
var statearr_37546_37598 = state_37497__$1;
(statearr_37546_37598[(2)] = inst_37493);

(statearr_37546_37598[(1)] = (3));


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
});})(setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37480,inst_37499,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
;
return ((function (switch__24510__auto__,setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37480,inst_37499,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0 = (function (){
var statearr_37547 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37547[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__);

(statearr_37547[(1)] = (1));

return statearr_37547;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1 = (function (state_37497){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37548){if((e37548 instanceof Object)){
var ex__24514__auto__ = e37548;
var statearr_37549_37599 = state_37497;
(statearr_37549_37599[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37600 = state_37497;
state_37497 = G__37600;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__ = function(state_37497){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1.call(this,state_37497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37480,inst_37499,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
})();
var state__24602__auto__ = (function (){var statearr_37550 = f__24601__auto__.call(null);
(statearr_37550[(6)] = c__24600__auto____$1);

return statearr_37550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});
;})(setter,map__37403,cmd_chan,eval_counter,evaluation_chan,first_result,c__24600__auto____$1,inst_37397,inst_37442,inst_37440,inst_37427,inst_37426,inst_37425,inst_37480,inst_37499,state_val_37506,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
})();
var inst_37501 = cljs.core.async.impl.dispatch.run.call(null,inst_37500);
var state_37505__$1 = (function (){var statearr_37551 = state_37505;
(statearr_37551[(16)] = inst_37501);

(statearr_37551[(17)] = inst_37480);

return statearr_37551;
})();
var statearr_37552_37601 = state_37505__$1;
(statearr_37552_37601[(2)] = inst_37499);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37505__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (19))){
var inst_37440 = (state_37505[(11)]);
var inst_37433 = (state_37505[(2)]);
var inst_37434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37435 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_37436 = (new cljs.core.PersistentVector(null,1,(5),inst_37434,inst_37435,null));
var inst_37437 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_37436,cljs.core.inc);
var inst_37438 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_37439 = cljs.core.deref.call(null,state);
var inst_37440__$1 = eval_fn.call(null,inst_37438,inst_37439);
var state_37505__$1 = (function (){var statearr_37553 = state_37505;
(statearr_37553[(11)] = inst_37440__$1);

(statearr_37553[(18)] = inst_37437);

(statearr_37553[(19)] = inst_37433);

return statearr_37553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37505__$1,(20),inst_37440__$1);
} else {
if((state_val_37506 === (11))){
var state_37505__$1 = state_37505;
var statearr_37554_37602 = state_37505__$1;
(statearr_37554_37602[(2)] = true);

(statearr_37554_37602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (9))){
var state_37505__$1 = state_37505;
var statearr_37555_37603 = state_37505__$1;
(statearr_37555_37603[(2)] = false);

(statearr_37555_37603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (5))){
var inst_37503 = (state_37505[(2)]);
var state_37505__$1 = state_37505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37505__$1,inst_37503);
} else {
if((state_val_37506 === (14))){
var inst_37404 = (state_37505[(7)]);
var inst_37422 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37404);
var state_37505__$1 = state_37505;
var statearr_37556_37604 = state_37505__$1;
(statearr_37556_37604[(2)] = inst_37422);

(statearr_37556_37604[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (16))){
var inst_37427 = (state_37505[(12)]);
var inst_37425 = (state_37505[(14)]);
var inst_37425__$1 = (state_37505[(2)]);
var inst_37426 = cljs.core.get.call(null,inst_37425__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_37427__$1 = cljs.core.get.call(null,inst_37425__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_37428 = (inst_37427__$1 === (0));
var state_37505__$1 = (function (){var statearr_37557 = state_37505;
(statearr_37557[(12)] = inst_37427__$1);

(statearr_37557[(13)] = inst_37426);

(statearr_37557[(14)] = inst_37425__$1);

return statearr_37557;
})();
if(cljs.core.truth_(inst_37428)){
var statearr_37558_37605 = state_37505__$1;
(statearr_37558_37605[(1)] = (17));

} else {
var statearr_37559_37606 = state_37505__$1;
(statearr_37559_37606[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (10))){
var inst_37420 = (state_37505[(2)]);
var state_37505__$1 = state_37505;
if(cljs.core.truth_(inst_37420)){
var statearr_37560_37607 = state_37505__$1;
(statearr_37560_37607[(1)] = (14));

} else {
var statearr_37561_37608 = state_37505__$1;
(statearr_37561_37608[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (18))){
var inst_37426 = (state_37505[(13)]);
var inst_37431 = cljs.core.async.put_BANG_.call(null,inst_37426,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_37505__$1 = state_37505;
var statearr_37562_37609 = state_37505__$1;
(statearr_37562_37609[(2)] = inst_37431);

(statearr_37562_37609[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (8))){
var inst_37404 = (state_37505[(7)]);
var inst_37409 = inst_37404.cljs$lang$protocol_mask$partition0$;
var inst_37410 = (inst_37409 & (64));
var inst_37411 = inst_37404.cljs$core$ISeq$;
var inst_37412 = (cljs.core.PROTOCOL_SENTINEL === inst_37411);
var inst_37413 = (inst_37410) || (inst_37412);
var state_37505__$1 = state_37505;
if(cljs.core.truth_(inst_37413)){
var statearr_37563_37610 = state_37505__$1;
(statearr_37563_37610[(1)] = (11));

} else {
var statearr_37564_37611 = state_37505__$1;
(statearr_37564_37611[(1)] = (12));

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
});})(c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
;
return ((function (switch__24510__auto__,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0 = (function (){
var statearr_37565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37565[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__);

(statearr_37565[(1)] = (1));

return statearr_37565;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1 = (function (state_37505){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37566){if((e37566 instanceof Object)){
var ex__24514__auto__ = e37566;
var statearr_37567_37612 = state_37505;
(statearr_37567_37612[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37613 = state_37505;
state_37505 = G__37613;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__ = function(state_37505){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1.call(this,state_37505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
})();
var state__24602__auto__ = (function (){var statearr_37568 = f__24601__auto__.call(null);
(statearr_37568[(6)] = c__24600__auto__);

return statearr_37568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,map__37392,map__37392__$1,loop_msec,preamble))
);

return c__24600__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?((function (editor_args){
return (function (p1__37614_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__37614_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
});})(editor_args))
:null),snippet_args,state);
});
klipse.klipse_editors.eval_in_dom_editor = (function klipse$klipse_editors$eval_in_dom_editor(eval_fn,result_element,source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,(function (){var or__8916__auto__ = klipse.dom_utils.value.call(null,source);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (source["textContent"]);
}
})(),(cljs.core.truth_(result_element)?cljs.core.partial.call(null,goog.dom.setTextContent,result_element):null),snippet_args,state);
});
klipse.klipse_editors.wrap_result_in_html = (function klipse$klipse_editors$wrap_result_in_html(elem,res){
var wrapped_res = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,res),Error))?["<div class=\"klipse-error\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"</div>"].join(''):res);
var o_SHARP_ = elem;
(o_SHARP_["innerHTML"] = wrapped_res);

return o_SHARP_;
});
klipse.klipse_editors.eval_in_html_editor = (function klipse$klipse_editors$eval_in_html_editor(eval_fn,result_element,editor_source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?cljs.core.partial.call(null,klipse.klipse_editors.wrap_result_in_html,result_element):null),snippet_args,state);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("klipse.klipse-editors","editor-options","klipse.klipse-editors/editor-options",1970701494,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword(null,"options-out","options-out",781271031)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
klipse.klipse_editors.default_editor_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true], null);
klipse.klipse_editors.editor_options = (function klipse$klipse_editors$editor_options(editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cljs.core.assoc.call(null,klipse.klipse_editors.default_editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),editor_in_mode),codemirror_options_in),cljs.core.merge.call(null,cljs.core.assoc.call(null,klipse.klipse_editors.default_editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),editor_out_mode,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true),codemirror_options_out)], null);
});
if(typeof klipse.klipse_editors.create_editor !== 'undefined'){
} else {
klipse.klipse_editors.create_editor = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.klipse-editors","create-editor"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function (type,_){
return type;
});})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__37615){
var map__37616 = p__37615;
var map__37616__$1 = ((((!((map__37616 == null)))?((((map__37616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37616):map__37616);
var editor_args = map__37616__$1;
var eval_fn = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var source_code = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__37618 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__37618,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__37618,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_);
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__37618,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__37616,map__37616__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});})(vec__37618,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__37616,map__37616__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null));

return ((function (vec__37618,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__37616,map__37616__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});
;})(vec__37618,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__37616,map__37616__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
klipse.klipse_editors.editors = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.klipse_editors.add_editor = (function klipse$klipse_editors$add_editor(editor,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.editors,cljs.core.assoc,snippet_num,editor);

var o_SHARP_ = window;
(o_SHARP_["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return o_SHARP_;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__37621){
var map__37622 = p__37621;
var map__37622__$1 = ((((!((map__37622 == null)))?((((map__37622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37622):map__37622);
var editor_args = map__37622__$1;
var eval_fn = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var source_code = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__37624 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__37624,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__37624,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),"klipse-result"));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),"klipse-snippet");
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__37624,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__37622,map__37622__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});})(vec__37624,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__37622,map__37622__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null));

klipse.klipse_editors.add_editor.call(null,in_editor,snippet_num);

return ((function (vec__37624,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__37622,map__37622__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});
;})(vec__37624,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__37622,map__37622__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__37627){
var map__37628 = p__37627;
var map__37628__$1 = ((((!((map__37628 == null)))?((((map__37628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37628):map__37628);
var editor_args = map__37628__$1;
var eval_fn = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var out_editor_options = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"out-editor-options","out-editor-options",-95308421));
var no_result = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_txt = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var idle_msec = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var source_code = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var in_editor_options = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"in-editor-options","in-editor-options",-1444530378));
var snippet_num = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.dom_utils.add_event_listener.call(null,element,"input",((function (container,result_element,snippet_args,state,map__37628,map__37628__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});})(container,result_element,snippet_args,state,map__37628,map__37628__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
);

return ((function (container,result_element,snippet_args,state,map__37628,map__37628__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});
;})(container,result_element,snippet_args,state,map__37628,map__37628__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
}));

//# sourceMappingURL=klipse_editors.js.map
