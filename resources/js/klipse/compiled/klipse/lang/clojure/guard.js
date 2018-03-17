// Compiled by ClojureScript 1.10.145 {}
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

var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15296){
var state_val_15297 = (state_15296[(1)]);
if((state_val_15297 === (1))){
var state_15296__$1 = state_15296;
var statearr_15298_15305 = state_15296__$1;
(statearr_15298_15305[(2)] = null);

(statearr_15298_15305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (2))){
var inst_15288 = cljs.core.async.timeout.call(null,klipse.lang.clojure.guard.watchdog_period);
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15296__$1,(4),inst_15288);
} else {
if((state_val_15297 === (3))){
var inst_15294 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15296__$1,inst_15294);
} else {
if((state_val_15297 === (4))){
var inst_15290 = (state_15296[(2)]);
var inst_15291 = klipse.lang.clojure.guard.tick.call(null);
var state_15296__$1 = (function (){var statearr_15299 = state_15296;
(statearr_15299[(7)] = inst_15291);

(statearr_15299[(8)] = inst_15290);

return statearr_15299;
})();
var statearr_15300_15306 = state_15296__$1;
(statearr_15300_15306[(2)] = null);

(statearr_15300_15306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto____0 = (function (){
var statearr_15301 = [null,null,null,null,null,null,null,null,null];
(statearr_15301[(0)] = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto__);

(statearr_15301[(1)] = (1));

return statearr_15301;
});
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto____1 = (function (state_15296){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15302){if((e15302 instanceof Object)){
var ex__13829__auto__ = e15302;
var statearr_15303_15307 = state_15296;
(statearr_15303_15307[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15308 = state_15296;
state_15296 = G__15308;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto__ = function(state_15296){
switch(arguments.length){
case 0:
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto____1.call(this,state_15296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto____0;
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto____1;
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15304 = f__13849__auto__.call(null);
(statearr_15304[(6)] = c__13848__auto__);

return statearr_15304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
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
var args__4500__auto__ = [];
var len__4497__auto___15316 = arguments.length;
var i__4498__auto___15317 = (0);
while(true){
if((i__4498__auto___15317 < len__4497__auto___15316)){
args__4500__auto__.push((arguments[i__4498__auto___15317]));

var G__15318 = (i__4498__auto___15317 + (1));
i__4498__auto___15317 = G__15318;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__3911__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__3911__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__3911__auto__;
}
})())){
cljs.core.print.call(null,["klipse.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__15312_15319 = cljs.core.seq.call(null,xs);
var chunk__15313_15320 = null;
var count__15314_15321 = (0);
var i__15315_15322 = (0);
while(true){
if((i__15315_15322 < count__15314_15321)){
var x_15323 = cljs.core._nth.call(null,chunk__15313_15320,i__15315_15322);
if((x_15323 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15323)){
cljs.compiler.emit.call(null,x_15323);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15323)){
cljs.core.apply.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration,x_15323);
} else {
if(goog.isFunction(x_15323)){
x_15323.call(null);
} else {
var s_15324 = cljs.core.print_str.call(null,x_15323);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15312_15319,chunk__15313_15320,count__15314_15321,i__15315_15322,s_15324,x_15323){
return (function (p1__15309_SHARP_){
return (p1__15309_SHARP_ + cljs.core.count.call(null,s_15324));
});})(seq__15312_15319,chunk__15313_15320,count__15314_15321,i__15315_15322,s_15324,x_15323))
);
}

cljs.core.print.call(null,s_15324);

}
}
}
}


var G__15325 = seq__15312_15319;
var G__15326 = chunk__15313_15320;
var G__15327 = count__15314_15321;
var G__15328 = (i__15315_15322 + (1));
seq__15312_15319 = G__15325;
chunk__15313_15320 = G__15326;
count__15314_15321 = G__15327;
i__15315_15322 = G__15328;
continue;
} else {
var temp__5457__auto___15329 = cljs.core.seq.call(null,seq__15312_15319);
if(temp__5457__auto___15329){
var seq__15312_15330__$1 = temp__5457__auto___15329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15312_15330__$1)){
var c__4319__auto___15331 = cljs.core.chunk_first.call(null,seq__15312_15330__$1);
var G__15332 = cljs.core.chunk_rest.call(null,seq__15312_15330__$1);
var G__15333 = c__4319__auto___15331;
var G__15334 = cljs.core.count.call(null,c__4319__auto___15331);
var G__15335 = (0);
seq__15312_15319 = G__15332;
chunk__15313_15320 = G__15333;
count__15314_15321 = G__15334;
i__15315_15322 = G__15335;
continue;
} else {
var x_15336 = cljs.core.first.call(null,seq__15312_15330__$1);
if((x_15336 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15336)){
cljs.compiler.emit.call(null,x_15336);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15336)){
cljs.core.apply.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration,x_15336);
} else {
if(goog.isFunction(x_15336)){
x_15336.call(null);
} else {
var s_15337 = cljs.core.print_str.call(null,x_15336);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15312_15319,chunk__15313_15320,count__15314_15321,i__15315_15322,s_15337,x_15336,seq__15312_15330__$1,temp__5457__auto___15329){
return (function (p1__15309_SHARP_){
return (p1__15309_SHARP_ + cljs.core.count.call(null,s_15337));
});})(seq__15312_15319,chunk__15313_15320,count__15314_15321,i__15315_15322,s_15337,x_15336,seq__15312_15330__$1,temp__5457__auto___15329))
);
}

cljs.core.print.call(null,s_15337);

}
}
}
}


var G__15338 = cljs.core.next.call(null,seq__15312_15330__$1);
var G__15339 = null;
var G__15340 = (0);
var G__15341 = (0);
seq__15312_15319 = G__15338;
chunk__15313_15320 = G__15339;
count__15314_15321 = G__15340;
i__15315_15322 = G__15341;
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

klipse.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq15310){
var G__15311 = cljs.core.first.call(null,seq15310);
var seq15310__$1 = cljs.core.next.call(null,seq15310);
return klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic(G__15311,seq15310__$1);
});


//# sourceMappingURL=guard.js.map
