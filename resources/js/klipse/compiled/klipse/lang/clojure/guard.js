// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.lang.clojure.guard');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.analyzer');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
/**
 * each time the watchdog has a chance to run, this var is set with the current time
 */
klipse.lang.clojure.guard._STAR_watchdog_tick_STAR_ = (0);
klipse.lang.clojure.guard.min_max_eval_duration = (3000);
/**
 * The number of msec for the watchdog period.
 *          This value has to be much lower than min-max-eval-duration.
 */
klipse.lang.clojure.guard.watchdog_period = (klipse.lang.clojure.guard.min_max_eval_duration / (10));
klipse.lang.clojure.guard.tick = (function klipse$lang$clojure$guard$tick(){
return klipse.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null);
});
/**
 * reset the *watchdog-tick* to the current time once in a while
 */
klipse.lang.clojure.guard.run_watchdog_STAR_ = (function klipse$lang$clojure$guard$run_watchdog_STAR_(){
klipse.lang.clojure.guard.tick.call(null);

var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_37641){
var state_val_37642 = (state_37641[(1)]);
if((state_val_37642 === (1))){
var state_37641__$1 = state_37641;
var statearr_37643_37650 = state_37641__$1;
(statearr_37643_37650[(2)] = null);

(statearr_37643_37650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (2))){
var inst_37633 = cljs.core.async.timeout.call(null,klipse.lang.clojure.guard.watchdog_period);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(4),inst_37633);
} else {
if((state_val_37642 === (3))){
var inst_37639 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37641__$1,inst_37639);
} else {
if((state_val_37642 === (4))){
var inst_37635 = (state_37641[(2)]);
var inst_37636 = klipse.lang.clojure.guard.tick.call(null);
var state_37641__$1 = (function (){var statearr_37644 = state_37641;
(statearr_37644[(7)] = inst_37635);

(statearr_37644[(8)] = inst_37636);

return statearr_37644;
})();
var statearr_37645_37651 = state_37641__$1;
(statearr_37645_37651[(2)] = null);

(statearr_37645_37651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto____0 = (function (){
var statearr_37646 = [null,null,null,null,null,null,null,null,null];
(statearr_37646[(0)] = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto__);

(statearr_37646[(1)] = (1));

return statearr_37646;
});
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto____1 = (function (state_37641){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37647){if((e37647 instanceof Object)){
var ex__24514__auto__ = e37647;
var statearr_37648_37652 = state_37641;
(statearr_37648_37652[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37653 = state_37641;
state_37641 = G__37653;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto__ = function(state_37641){
switch(arguments.length){
case 0:
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto____1.call(this,state_37641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto____0;
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto____1;
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_37649 = f__24601__auto__.call(null);
(statearr_37649[(6)] = c__24600__auto__);

return statearr_37649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.lang.clojure.guard.run_watchdog_once = klipse.utils.runonce.call(null,klipse.lang.clojure.guard.run_watchdog_STAR_);
klipse.lang.clojure.guard.watchdog = (function klipse$lang$clojure$guard$watchdog(){
klipse.lang.clojure.guard.tick.call(null);

return klipse.lang.clojure.guard.run_watchdog_once.call(null);
});
klipse.lang.clojure.guard.guard = (function klipse$lang$clojure$guard$guard(max_eval_duration){
if(((cljs.core.system_time.call(null) - klipse.lang.clojure.guard._STAR_watchdog_tick_STAR_) > max_eval_duration)){
if(cljs.core.truth_(confirm(["A KLIPSE snippet has been running for more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration)," milliseconds. This is often because of a long-running computation or infinite loop. Would you like to interrupt the snippet? \n OK to interrupt the evaluation.\n Cancel to continue."].join('')))){
throw ["Infinite Loop"].join('');
} else {
}

return klipse.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null);
} else {
return null;
}
});
goog.exportSymbol('klipse.lang.clojure.guard.guard', klipse.lang.clojure.guard.guard);
/**
 * same as cljs.compiler/emits with insertion of a `guard()` call before if and recur (emitted as continue) statement.
 * 
 *   Limitations:
 *   1. It doesn't prevent infinite loop in imported code e.g. (reduce + (range)
 *   
 */
klipse.lang.clojure.guard.my_emits = (function klipse$lang$clojure$guard$my_emits(var_args){
var args__10202__auto__ = [];
var len__10195__auto___37661 = arguments.length;
var i__10196__auto___37662 = (0);
while(true){
if((i__10196__auto___37662 < len__10195__auto___37661)){
args__10202__auto__.push((arguments[i__10196__auto___37662]));

var G__37663 = (i__10196__auto___37662 + (1));
i__10196__auto___37662 = G__37663;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__8904__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__8904__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__8904__auto__;
}
})())){
cljs.core.print.call(null,["klipse.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__37657_37664 = cljs.core.seq.call(null,xs);
var chunk__37658_37665 = null;
var count__37659_37666 = (0);
var i__37660_37667 = (0);
while(true){
if((i__37660_37667 < count__37659_37666)){
var x_37668 = cljs.core._nth.call(null,chunk__37658_37665,i__37660_37667);
if((x_37668 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_37668)){
cljs.compiler.emit.call(null,x_37668);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_37668)){
cljs.core.apply.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration,x_37668);
} else {
if(goog.isFunction(x_37668)){
x_37668.call(null);
} else {
var s_37669 = cljs.core.print_str.call(null,x_37668);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__37657_37664,chunk__37658_37665,count__37659_37666,i__37660_37667,s_37669,x_37668){
return (function (p1__37654_SHARP_){
return (p1__37654_SHARP_ + cljs.core.count.call(null,s_37669));
});})(seq__37657_37664,chunk__37658_37665,count__37659_37666,i__37660_37667,s_37669,x_37668))
);
}

cljs.core.print.call(null,s_37669);

}
}
}
}

var G__37670 = seq__37657_37664;
var G__37671 = chunk__37658_37665;
var G__37672 = count__37659_37666;
var G__37673 = (i__37660_37667 + (1));
seq__37657_37664 = G__37670;
chunk__37658_37665 = G__37671;
count__37659_37666 = G__37672;
i__37660_37667 = G__37673;
continue;
} else {
var temp__5457__auto___37674 = cljs.core.seq.call(null,seq__37657_37664);
if(temp__5457__auto___37674){
var seq__37657_37675__$1 = temp__5457__auto___37674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37657_37675__$1)){
var c__9847__auto___37676 = cljs.core.chunk_first.call(null,seq__37657_37675__$1);
var G__37677 = cljs.core.chunk_rest.call(null,seq__37657_37675__$1);
var G__37678 = c__9847__auto___37676;
var G__37679 = cljs.core.count.call(null,c__9847__auto___37676);
var G__37680 = (0);
seq__37657_37664 = G__37677;
chunk__37658_37665 = G__37678;
count__37659_37666 = G__37679;
i__37660_37667 = G__37680;
continue;
} else {
var x_37681 = cljs.core.first.call(null,seq__37657_37675__$1);
if((x_37681 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_37681)){
cljs.compiler.emit.call(null,x_37681);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_37681)){
cljs.core.apply.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration,x_37681);
} else {
if(goog.isFunction(x_37681)){
x_37681.call(null);
} else {
var s_37682 = cljs.core.print_str.call(null,x_37681);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__37657_37664,chunk__37658_37665,count__37659_37666,i__37660_37667,s_37682,x_37681,seq__37657_37675__$1,temp__5457__auto___37674){
return (function (p1__37654_SHARP_){
return (p1__37654_SHARP_ + cljs.core.count.call(null,s_37682));
});})(seq__37657_37664,chunk__37658_37665,count__37659_37666,i__37660_37667,s_37682,x_37681,seq__37657_37675__$1,temp__5457__auto___37674))
);
}

cljs.core.print.call(null,s_37682);

}
}
}
}

var G__37683 = cljs.core.next.call(null,seq__37657_37675__$1);
var G__37684 = null;
var G__37685 = (0);
var G__37686 = (0);
seq__37657_37664 = G__37683;
chunk__37658_37665 = G__37684;
count__37659_37666 = G__37685;
i__37660_37667 = G__37686;
continue;
}
} else {
}
}
break;
}

return null;
});

klipse.lang.clojure.guard.my_emits.cljs$lang$maxFixedArity = (1);

klipse.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq37655){
var G__37656 = cljs.core.first.call(null,seq37655);
var seq37655__$1 = cljs.core.next.call(null,seq37655);
return klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic(G__37656,seq37655__$1);
});


//# sourceMappingURL=guard.js.map
