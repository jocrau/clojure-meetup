// Compiled by ClojureScript 1.10.145 {}
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
var args__4500__auto__ = [];
var len__4497__auto___14398 = arguments.length;
var i__4498__auto___14399 = (0);
while(true){
if((i__4498__auto___14399 < len__4497__auto___14398)){
args__4500__auto__.push((arguments[i__4498__auto___14399]));

var G__14400 = (i__4498__auto___14399 + (1));
i__4498__auto___14399 = G__14400;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__14395){
var map__14396 = p__14395;
var map__14396__$1 = ((((!((map__14396 == null)))?(((((map__14396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14396):map__14396);
var result_element = cljs.core.get.call(null,map__14396__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__14396__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__14396__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
});

klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0);

klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq14394){
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14394));
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
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__14401,state){
var map__14402 = p__14401;
var map__14402__$1 = ((((!((map__14402 == null)))?(((((map__14402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14402):map__14402);
var loop_msec = cljs.core.get.call(null,map__14402__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__14402__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("Evaluating: ",src_code);
} else {
}

var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function (state_14515){
var state_val_14516 = (state_14515[(1)]);
if((state_val_14516 === (7))){
var inst_14414 = (state_14515[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14515,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_14414__$1 = cljs.core.deref.call(null,state);
var inst_14416 = (inst_14414__$1 == null);
var inst_14417 = cljs.core.not.call(null,inst_14416);
var state_14515__$1 = (function (){var statearr_14517 = state_14515;
(statearr_14517[(7)] = inst_14414__$1);

return statearr_14517;
})();
if(inst_14417){
var statearr_14518_14579 = state_14515__$1;
(statearr_14518_14579[(1)] = (8));

} else {
var statearr_14519_14580 = state_14515__$1;
(statearr_14519_14580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (20))){
var inst_14452 = (state_14515[(8)]);
var inst_14407 = (state_14515[(9)]);
var inst_14452__$1 = (state_14515[(2)]);
var inst_14453 = inst_14407.call(null,inst_14452__$1);
var state_14515__$1 = (function (){var statearr_14520 = state_14515;
(statearr_14520[(8)] = inst_14452__$1);

(statearr_14520[(10)] = inst_14453);

return statearr_14520;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_14521_14581 = state_14515__$1;
(statearr_14521_14581[(1)] = (21));

} else {
var statearr_14522_14582 = state_14515__$1;
(statearr_14522_14582[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (1))){
var state_14515__$1 = state_14515;
if(cljs.core.truth_(unsafe_setter)){
var statearr_14523_14583 = state_14515__$1;
(statearr_14523_14583[(1)] = (2));

} else {
var statearr_14524_14584 = state_14515__$1;
(statearr_14524_14584[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (4))){
var inst_14407 = (state_14515[(2)]);
var state_14515__$1 = (function (){var statearr_14525 = state_14515;
(statearr_14525[(9)] = inst_14407);

return statearr_14525;
})();
var statearr_14526_14585 = state_14515__$1;
(statearr_14526_14585[(2)] = null);

(statearr_14526_14585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (15))){
var inst_14414 = (state_14515[(7)]);
var state_14515__$1 = state_14515;
var statearr_14527_14586 = state_14515__$1;
(statearr_14527_14586[(2)] = inst_14414);

(statearr_14527_14586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (21))){
var inst_14436 = (state_14515[(11)]);
var inst_14450 = (state_14515[(12)]);
var inst_14435 = (state_14515[(13)]);
var inst_14437 = (state_14515[(14)]);
var inst_14452 = (state_14515[(8)]);
var inst_14407 = (state_14515[(9)]);
var inst_14485 = cljs.core.async.chan.call(null,(1));
var inst_14486 = (function (){var setter = inst_14407;
var map__14413 = inst_14435;
var cmd_chan = inst_14436;
var eval_counter = inst_14437;
var evaluation_chan = inst_14450;
var first_result = inst_14452;
var c__13848__auto____$1 = inst_14485;
return ((function (setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14485,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14485,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function (state_14483){
var state_val_14484 = (state_14483[(1)]);
if((state_val_14484 === (1))){
var state_14483__$1 = state_14483;
var statearr_14528_14587 = state_14483__$1;
(statearr_14528_14587[(2)] = null);

(statearr_14528_14587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (2))){
var inst_14459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14460 = cljs.core.async.timeout.call(null,loop_msec);
var inst_14461 = [cmd_chan,inst_14460];
var inst_14462 = (new cljs.core.PersistentVector(null,2,(5),inst_14459,inst_14461,null));
var state_14483__$1 = state_14483;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14483__$1,(4),inst_14462);
} else {
if((state_val_14484 === (3))){
var inst_14481 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14483__$1,inst_14481);
} else {
if((state_val_14484 === (4))){
var inst_14464 = (state_14483[(2)]);
var inst_14465 = cljs.core.nth.call(null,inst_14464,(0),null);
var inst_14466 = cljs.core.nth.call(null,inst_14464,(1),null);
var inst_14467 = cljs.core._EQ_.call(null,inst_14466,cmd_chan);
var inst_14468 = cljs.core._EQ_.call(null,inst_14465,new cljs.core.Keyword(null,"reset","reset",-800929946));
var inst_14469 = ((inst_14467) && (inst_14468));
var state_14483__$1 = state_14483;
if(cljs.core.truth_(inst_14469)){
var statearr_14529_14588 = state_14483__$1;
(statearr_14529_14588[(1)] = (5));

} else {
var statearr_14530_14589 = state_14483__$1;
(statearr_14530_14589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (5))){
var state_14483__$1 = state_14483;
var statearr_14531_14590 = state_14483__$1;
(statearr_14531_14590[(2)] = null);

(statearr_14531_14590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (6))){
var inst_14472 = cljs.core.deref.call(null,state);
var inst_14473 = eval_fn.call(null,src_code,inst_14472);
var state_14483__$1 = state_14483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14483__$1,(8),inst_14473);
} else {
if((state_val_14484 === (7))){
var inst_14479 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
var statearr_14532_14591 = state_14483__$1;
(statearr_14532_14591[(2)] = inst_14479);

(statearr_14532_14591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (8))){
var inst_14475 = (state_14483[(2)]);
var inst_14476 = setter.call(null,inst_14475);
var state_14483__$1 = (function (){var statearr_14533 = state_14483;
(statearr_14533[(7)] = inst_14476);

return statearr_14533;
})();
var statearr_14534_14592 = state_14483__$1;
(statearr_14534_14592[(2)] = null);

(statearr_14534_14592[(1)] = (2));


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
});})(setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14485,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
;
return ((function (switch__13825__auto__,setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14485,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0 = (function (){
var statearr_14535 = [null,null,null,null,null,null,null,null];
(statearr_14535[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__);

(statearr_14535[(1)] = (1));

return statearr_14535;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1 = (function (state_14483){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_14483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e14536){if((e14536 instanceof Object)){
var ex__13829__auto__ = e14536;
var statearr_14537_14593 = state_14483;
(statearr_14537_14593[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14594 = state_14483;
state_14483 = G__14594;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__ = function(state_14483){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1.call(this,state_14483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14485,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
})();
var state__13850__auto__ = (function (){var statearr_14538 = f__13849__auto__.call(null);
(statearr_14538[(6)] = c__13848__auto____$1);

return statearr_14538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});
;})(setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14485,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
})();
var inst_14487 = cljs.core.async.impl.dispatch.run.call(null,inst_14486);
var state_14515__$1 = (function (){var statearr_14539 = state_14515;
(statearr_14539[(15)] = inst_14487);

return statearr_14539;
})();
var statearr_14540_14595 = state_14515__$1;
(statearr_14540_14595[(2)] = inst_14485);

(statearr_14540_14595[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (13))){
var inst_14427 = (state_14515[(2)]);
var state_14515__$1 = state_14515;
var statearr_14541_14596 = state_14515__$1;
(statearr_14541_14596[(2)] = inst_14427);

(statearr_14541_14596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (22))){
var state_14515__$1 = state_14515;
var statearr_14542_14597 = state_14515__$1;
(statearr_14542_14597[(2)] = null);

(statearr_14542_14597[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (6))){
var inst_14407 = (state_14515[(9)]);
var inst_14408 = (state_14515[(2)]);
var inst_14409 = inst_14407.call(null,inst_14408);
var state_14515__$1 = state_14515;
var statearr_14543_14598 = state_14515__$1;
(statearr_14543_14598[(2)] = inst_14409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (17))){
var state_14515__$1 = state_14515;
var statearr_14544_14599 = state_14515__$1;
(statearr_14544_14599[(2)] = null);

(statearr_14544_14599[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (3))){
var state_14515__$1 = state_14515;
var statearr_14545_14600 = state_14515__$1;
(statearr_14545_14600[(2)] = cljs.core.any_QMARK_);

(statearr_14545_14600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (12))){
var state_14515__$1 = state_14515;
var statearr_14546_14601 = state_14515__$1;
(statearr_14546_14601[(2)] = false);

(statearr_14546_14601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (2))){
var state_14515__$1 = state_14515;
var statearr_14547_14602 = state_14515__$1;
(statearr_14547_14602[(2)] = unsafe_setter);

(statearr_14547_14602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (23))){
var inst_14436 = (state_14515[(11)]);
var inst_14450 = (state_14515[(12)]);
var inst_14435 = (state_14515[(13)]);
var inst_14437 = (state_14515[(14)]);
var inst_14452 = (state_14515[(8)]);
var inst_14407 = (state_14515[(9)]);
var inst_14490 = (state_14515[(2)]);
var inst_14509 = cljs.core.async.chan.call(null,(1));
var inst_14510 = (function (){var setter = inst_14407;
var map__14413 = inst_14435;
var cmd_chan = inst_14436;
var eval_counter = inst_14437;
var evaluation_chan = inst_14450;
var first_result = inst_14452;
var c__13848__auto____$1 = inst_14509;
return ((function (setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14490,inst_14509,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14490,inst_14509,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function (state_14507){
var state_val_14508 = (state_14507[(1)]);
if((state_val_14508 === (1))){
var inst_14491 = first_result;
var state_14507__$1 = (function (){var statearr_14548 = state_14507;
(statearr_14548[(7)] = inst_14491);

return statearr_14548;
})();
var statearr_14549_14603 = state_14507__$1;
(statearr_14549_14603[(2)] = null);

(statearr_14549_14603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (2))){
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14507__$1,(4),evaluation_chan);
} else {
if((state_val_14508 === (3))){
var inst_14505 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14507__$1,inst_14505);
} else {
if((state_val_14508 === (4))){
var inst_14491 = (state_14507[(7)]);
var inst_14494 = (state_14507[(2)]);
var inst_14495 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14491),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14494)].join('');
var inst_14496 = (inst_14494 == null);
var inst_14497 = cljs.core.not.call(null,inst_14496);
var state_14507__$1 = (function (){var statearr_14550 = state_14507;
(statearr_14550[(8)] = inst_14495);

return statearr_14550;
})();
if(inst_14497){
var statearr_14551_14604 = state_14507__$1;
(statearr_14551_14604[(1)] = (5));

} else {
var statearr_14552_14605 = state_14507__$1;
(statearr_14552_14605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (5))){
var inst_14495 = (state_14507[(8)]);
var inst_14499 = setter.call(null,inst_14495);
var inst_14491 = inst_14495;
var state_14507__$1 = (function (){var statearr_14553 = state_14507;
(statearr_14553[(7)] = inst_14491);

(statearr_14553[(9)] = inst_14499);

return statearr_14553;
})();
var statearr_14554_14606 = state_14507__$1;
(statearr_14554_14606[(2)] = null);

(statearr_14554_14606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (6))){
var state_14507__$1 = state_14507;
var statearr_14555_14607 = state_14507__$1;
(statearr_14555_14607[(2)] = null);

(statearr_14555_14607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (7))){
var inst_14503 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
var statearr_14556_14608 = state_14507__$1;
(statearr_14556_14608[(2)] = inst_14503);

(statearr_14556_14608[(1)] = (3));


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
});})(setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14490,inst_14509,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
;
return ((function (switch__13825__auto__,setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14490,inst_14509,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0 = (function (){
var statearr_14557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14557[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__);

(statearr_14557[(1)] = (1));

return statearr_14557;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1 = (function (state_14507){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_14507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e14558){if((e14558 instanceof Object)){
var ex__13829__auto__ = e14558;
var statearr_14559_14609 = state_14507;
(statearr_14559_14609[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14610 = state_14507;
state_14507 = G__14610;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__ = function(state_14507){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1.call(this,state_14507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14490,inst_14509,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
})();
var state__13850__auto__ = (function (){var statearr_14560 = f__13849__auto__.call(null);
(statearr_14560[(6)] = c__13848__auto____$1);

return statearr_14560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});
;})(setter,map__14413,cmd_chan,eval_counter,evaluation_chan,first_result,c__13848__auto____$1,inst_14436,inst_14450,inst_14435,inst_14437,inst_14452,inst_14407,inst_14490,inst_14509,state_val_14516,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
})();
var inst_14511 = cljs.core.async.impl.dispatch.run.call(null,inst_14510);
var state_14515__$1 = (function (){var statearr_14561 = state_14515;
(statearr_14561[(16)] = inst_14490);

(statearr_14561[(17)] = inst_14511);

return statearr_14561;
})();
var statearr_14562_14611 = state_14515__$1;
(statearr_14562_14611[(2)] = inst_14509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (19))){
var inst_14450 = (state_14515[(12)]);
var inst_14443 = (state_14515[(2)]);
var inst_14444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14445 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_14446 = (new cljs.core.PersistentVector(null,1,(5),inst_14444,inst_14445,null));
var inst_14447 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_14446,cljs.core.inc);
var inst_14448 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_14449 = cljs.core.deref.call(null,state);
var inst_14450__$1 = eval_fn.call(null,inst_14448,inst_14449);
var state_14515__$1 = (function (){var statearr_14563 = state_14515;
(statearr_14563[(12)] = inst_14450__$1);

(statearr_14563[(18)] = inst_14447);

(statearr_14563[(19)] = inst_14443);

return statearr_14563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14515__$1,(20),inst_14450__$1);
} else {
if((state_val_14516 === (11))){
var state_14515__$1 = state_14515;
var statearr_14564_14612 = state_14515__$1;
(statearr_14564_14612[(2)] = true);

(statearr_14564_14612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (9))){
var state_14515__$1 = state_14515;
var statearr_14565_14613 = state_14515__$1;
(statearr_14565_14613[(2)] = false);

(statearr_14565_14613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (5))){
var inst_14513 = (state_14515[(2)]);
var state_14515__$1 = state_14515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14515__$1,inst_14513);
} else {
if((state_val_14516 === (14))){
var inst_14414 = (state_14515[(7)]);
var inst_14432 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14414);
var state_14515__$1 = state_14515;
var statearr_14566_14614 = state_14515__$1;
(statearr_14566_14614[(2)] = inst_14432);

(statearr_14566_14614[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (16))){
var inst_14435 = (state_14515[(13)]);
var inst_14437 = (state_14515[(14)]);
var inst_14435__$1 = (state_14515[(2)]);
var inst_14436 = cljs.core.get.call(null,inst_14435__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_14437__$1 = cljs.core.get.call(null,inst_14435__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_14438 = (inst_14437__$1 === (0));
var state_14515__$1 = (function (){var statearr_14567 = state_14515;
(statearr_14567[(11)] = inst_14436);

(statearr_14567[(13)] = inst_14435__$1);

(statearr_14567[(14)] = inst_14437__$1);

return statearr_14567;
})();
if(cljs.core.truth_(inst_14438)){
var statearr_14568_14615 = state_14515__$1;
(statearr_14568_14615[(1)] = (17));

} else {
var statearr_14569_14616 = state_14515__$1;
(statearr_14569_14616[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (10))){
var inst_14430 = (state_14515[(2)]);
var state_14515__$1 = state_14515;
if(cljs.core.truth_(inst_14430)){
var statearr_14570_14617 = state_14515__$1;
(statearr_14570_14617[(1)] = (14));

} else {
var statearr_14571_14618 = state_14515__$1;
(statearr_14571_14618[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (18))){
var inst_14436 = (state_14515[(11)]);
var inst_14441 = cljs.core.async.put_BANG_.call(null,inst_14436,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_14515__$1 = state_14515;
var statearr_14572_14619 = state_14515__$1;
(statearr_14572_14619[(2)] = inst_14441);

(statearr_14572_14619[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (8))){
var inst_14414 = (state_14515[(7)]);
var inst_14419 = inst_14414.cljs$lang$protocol_mask$partition0$;
var inst_14420 = (inst_14419 & (64));
var inst_14421 = inst_14414.cljs$core$ISeq$;
var inst_14422 = (cljs.core.PROTOCOL_SENTINEL === inst_14421);
var inst_14423 = ((inst_14420) || (inst_14422));
var state_14515__$1 = state_14515;
if(cljs.core.truth_(inst_14423)){
var statearr_14573_14620 = state_14515__$1;
(statearr_14573_14620[(1)] = (11));

} else {
var statearr_14574_14621 = state_14515__$1;
(statearr_14574_14621[(1)] = (12));

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
});})(c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
;
return ((function (switch__13825__auto__,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0 = (function (){
var statearr_14575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14575[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__);

(statearr_14575[(1)] = (1));

return statearr_14575;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1 = (function (state_14515){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_14515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e14576){if((e14576 instanceof Object)){
var ex__13829__auto__ = e14576;
var statearr_14577_14622 = state_14515;
(statearr_14577_14622[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14623 = state_14515;
state_14515 = G__14623;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__ = function(state_14515){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1.call(this,state_14515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
})();
var state__13850__auto__ = (function (){var statearr_14578 = f__13849__auto__.call(null);
(statearr_14578[(6)] = c__13848__auto__);

return statearr_14578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,map__14402,map__14402__$1,loop_msec,preamble))
);

return c__13848__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?((function (editor_args){
return (function (p1__14624_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__14624_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
});})(editor_args))
:null),snippet_args,state);
});
klipse.klipse_editors.eval_in_dom_editor = (function klipse$klipse_editors$eval_in_dom_editor(eval_fn,result_element,source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,(function (){var or__3922__auto__ = klipse.dom_utils.value.call(null,source);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
klipse.klipse_editors.create_editor = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.klipse-editors","create-editor"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (type,_){
return type;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__14625){
var map__14626 = p__14625;
var map__14626__$1 = ((((!((map__14626 == null)))?(((((map__14626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14626):map__14626);
var editor_args = map__14626__$1;
var eval_fn = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var source_code = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__14628 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__14628,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__14628,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_);
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__14628,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__14626,map__14626__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});})(vec__14628,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__14626,map__14626__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null));

return ((function (vec__14628,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__14626,map__14626__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});
;})(vec__14628,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__14626,map__14626__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
klipse.klipse_editors.editors = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.klipse_editors.add_editor = (function klipse$klipse_editors$add_editor(editor,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.editors,cljs.core.assoc,snippet_num,editor);

var o_SHARP_ = window;
(o_SHARP_["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return o_SHARP_;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__14631){
var map__14632 = p__14631;
var map__14632__$1 = ((((!((map__14632 == null)))?(((((map__14632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14632):map__14632);
var editor_args = map__14632__$1;
var eval_fn = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var source_code = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__14634 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__14634,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__14634,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),"klipse-result"));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),"klipse-snippet");
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__14634,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__14632,map__14632__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});})(vec__14634,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__14632,map__14632__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null));

klipse.klipse_editors.add_editor.call(null,in_editor,snippet_num);

return ((function (vec__14634,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__14632,map__14632__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});
;})(vec__14634,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__14632,map__14632__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__14637){
var map__14638 = p__14637;
var map__14638__$1 = ((((!((map__14638 == null)))?(((((map__14638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14638):map__14638);
var editor_args = map__14638__$1;
var eval_fn = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var out_editor_options = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"out-editor-options","out-editor-options",-95308421));
var no_result = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_txt = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var idle_msec = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var source_code = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var in_editor_options = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"in-editor-options","in-editor-options",-1444530378));
var snippet_num = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.dom_utils.add_event_listener.call(null,element,"input",((function (container,result_element,snippet_args,state,map__14638,map__14638__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});})(container,result_element,snippet_args,state,map__14638,map__14638__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
);

return ((function (container,result_element,snippet_args,state,map__14638,map__14638__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});
;})(container,result_element,snippet_args,state,map__14638,map__14638__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
}));

//# sourceMappingURL=klipse_editors.js.map
