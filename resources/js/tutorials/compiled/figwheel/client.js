// Compiled by ClojureScript 1.10.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e33445){if((e33445 instanceof Error)){
var e = e33445;
return "Error: Unable to stringify";
} else {
throw e33445;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33448 = arguments.length;
switch (G__33448) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33446_SHARP_){
if(typeof p1__33446_SHARP_ === 'string'){
return p1__33446_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33446_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33451 = arguments.length;
var i__4498__auto___33452 = (0);
while(true){
if((i__4498__auto___33452 < len__4497__auto___33451)){
args__4500__auto__.push((arguments[i__4498__auto___33452]));

var G__33453 = (i__4498__auto___33452 + (1));
i__4498__auto___33452 = G__33453;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33450){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33450));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33455 = arguments.length;
var i__4498__auto___33456 = (0);
while(true){
if((i__4498__auto___33456 < len__4497__auto___33455)){
args__4500__auto__.push((arguments[i__4498__auto___33456]));

var G__33457 = (i__4498__auto___33456 + (1));
i__4498__auto___33456 = G__33457;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33454){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33454));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33458){
var map__33459 = p__33458;
var map__33459__$1 = ((((!((map__33459 == null)))?(((((map__33459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33459):map__33459);
var message = cljs.core.get.call(null,map__33459__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33459__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23380__auto___33538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___33538,ch){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___33538,ch){
return (function (state_33510){
var state_val_33511 = (state_33510[(1)]);
if((state_val_33511 === (7))){
var inst_33506 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33512_33539 = state_33510__$1;
(statearr_33512_33539[(2)] = inst_33506);

(statearr_33512_33539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (1))){
var state_33510__$1 = state_33510;
var statearr_33513_33540 = state_33510__$1;
(statearr_33513_33540[(2)] = null);

(statearr_33513_33540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (4))){
var inst_33463 = (state_33510[(7)]);
var inst_33463__$1 = (state_33510[(2)]);
var state_33510__$1 = (function (){var statearr_33514 = state_33510;
(statearr_33514[(7)] = inst_33463__$1);

return statearr_33514;
})();
if(cljs.core.truth_(inst_33463__$1)){
var statearr_33515_33541 = state_33510__$1;
(statearr_33515_33541[(1)] = (5));

} else {
var statearr_33516_33542 = state_33510__$1;
(statearr_33516_33542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (15))){
var inst_33470 = (state_33510[(8)]);
var inst_33485 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33470);
var inst_33486 = cljs.core.first.call(null,inst_33485);
var inst_33487 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33486);
var inst_33488 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33487)].join('');
var inst_33489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33488);
var state_33510__$1 = state_33510;
var statearr_33517_33543 = state_33510__$1;
(statearr_33517_33543[(2)] = inst_33489);

(statearr_33517_33543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (13))){
var inst_33494 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33518_33544 = state_33510__$1;
(statearr_33518_33544[(2)] = inst_33494);

(statearr_33518_33544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (6))){
var state_33510__$1 = state_33510;
var statearr_33519_33545 = state_33510__$1;
(statearr_33519_33545[(2)] = null);

(statearr_33519_33545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (17))){
var inst_33492 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33520_33546 = state_33510__$1;
(statearr_33520_33546[(2)] = inst_33492);

(statearr_33520_33546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (3))){
var inst_33508 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33510__$1,inst_33508);
} else {
if((state_val_33511 === (12))){
var inst_33469 = (state_33510[(9)]);
var inst_33483 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33469,opts);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33483)){
var statearr_33521_33547 = state_33510__$1;
(statearr_33521_33547[(1)] = (15));

} else {
var statearr_33522_33548 = state_33510__$1;
(statearr_33522_33548[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (2))){
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33510__$1,(4),ch);
} else {
if((state_val_33511 === (11))){
var inst_33470 = (state_33510[(8)]);
var inst_33475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33476 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33470);
var inst_33477 = cljs.core.async.timeout.call(null,(1000));
var inst_33478 = [inst_33476,inst_33477];
var inst_33479 = (new cljs.core.PersistentVector(null,2,(5),inst_33475,inst_33478,null));
var state_33510__$1 = state_33510;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33510__$1,(14),inst_33479);
} else {
if((state_val_33511 === (9))){
var inst_33470 = (state_33510[(8)]);
var inst_33496 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33497 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33470);
var inst_33498 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33497);
var inst_33499 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33498)].join('');
var inst_33500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33499);
var state_33510__$1 = (function (){var statearr_33523 = state_33510;
(statearr_33523[(10)] = inst_33496);

return statearr_33523;
})();
var statearr_33524_33549 = state_33510__$1;
(statearr_33524_33549[(2)] = inst_33500);

(statearr_33524_33549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (5))){
var inst_33463 = (state_33510[(7)]);
var inst_33465 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33466 = (new cljs.core.PersistentArrayMap(null,2,inst_33465,null));
var inst_33467 = (new cljs.core.PersistentHashSet(null,inst_33466,null));
var inst_33468 = figwheel.client.focus_msgs.call(null,inst_33467,inst_33463);
var inst_33469 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33468);
var inst_33470 = cljs.core.first.call(null,inst_33468);
var inst_33471 = figwheel.client.autoload_QMARK_.call(null);
var state_33510__$1 = (function (){var statearr_33525 = state_33510;
(statearr_33525[(9)] = inst_33469);

(statearr_33525[(8)] = inst_33470);

return statearr_33525;
})();
if(cljs.core.truth_(inst_33471)){
var statearr_33526_33550 = state_33510__$1;
(statearr_33526_33550[(1)] = (8));

} else {
var statearr_33527_33551 = state_33510__$1;
(statearr_33527_33551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (14))){
var inst_33481 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33528_33552 = state_33510__$1;
(statearr_33528_33552[(2)] = inst_33481);

(statearr_33528_33552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (16))){
var state_33510__$1 = state_33510;
var statearr_33529_33553 = state_33510__$1;
(statearr_33529_33553[(2)] = null);

(statearr_33529_33553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (10))){
var inst_33502 = (state_33510[(2)]);
var state_33510__$1 = (function (){var statearr_33530 = state_33510;
(statearr_33530[(11)] = inst_33502);

return statearr_33530;
})();
var statearr_33531_33554 = state_33510__$1;
(statearr_33531_33554[(2)] = null);

(statearr_33531_33554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (8))){
var inst_33469 = (state_33510[(9)]);
var inst_33473 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33469,opts);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33473)){
var statearr_33532_33555 = state_33510__$1;
(statearr_33532_33555[(1)] = (11));

} else {
var statearr_33533_33556 = state_33510__$1;
(statearr_33533_33556[(1)] = (12));

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
});})(c__23380__auto___33538,ch))
;
return ((function (switch__23223__auto__,c__23380__auto___33538,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23224__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23224__auto____0 = (function (){
var statearr_33534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23224__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23224__auto____1 = (function (state_33510){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_33510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e33535){if((e33535 instanceof Object)){
var ex__23227__auto__ = e33535;
var statearr_33536_33557 = state_33510;
(statearr_33536_33557[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33558 = state_33510;
state_33510 = G__33558;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23224__auto__ = function(state_33510){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23224__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23224__auto____1.call(this,state_33510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23224__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23224__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___33538,ch))
})();
var state__23382__auto__ = (function (){var statearr_33537 = f__23381__auto__.call(null);
(statearr_33537[(6)] = c__23380__auto___33538);

return statearr_33537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___33538,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33559_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33559_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33563 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33563){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33561 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33562 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33561,_STAR_print_fn_STAR_33562,sb,base_path_33563){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_33561,_STAR_print_fn_STAR_33562,sb,base_path_33563))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33562;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33561;
}}catch (e33560){if((e33560 instanceof Error)){
var e = e33560;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33563], null));
} else {
var e = e33560;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33563))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33564){
var map__33565 = p__33564;
var map__33565__$1 = ((((!((map__33565 == null)))?(((((map__33565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33565):map__33565);
var opts = map__33565__$1;
var build_id = cljs.core.get.call(null,map__33565__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33565,map__33565__$1,opts,build_id){
return (function (p__33567){
var vec__33568 = p__33567;
var seq__33569 = cljs.core.seq.call(null,vec__33568);
var first__33570 = cljs.core.first.call(null,seq__33569);
var seq__33569__$1 = cljs.core.next.call(null,seq__33569);
var map__33571 = first__33570;
var map__33571__$1 = ((((!((map__33571 == null)))?(((((map__33571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33571):map__33571);
var msg = map__33571__$1;
var msg_name = cljs.core.get.call(null,map__33571__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33569__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33568,seq__33569,first__33570,seq__33569__$1,map__33571,map__33571__$1,msg,msg_name,_,map__33565,map__33565__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33568,seq__33569,first__33570,seq__33569__$1,map__33571,map__33571__$1,msg,msg_name,_,map__33565,map__33565__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33565,map__33565__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33573){
var vec__33574 = p__33573;
var seq__33575 = cljs.core.seq.call(null,vec__33574);
var first__33576 = cljs.core.first.call(null,seq__33575);
var seq__33575__$1 = cljs.core.next.call(null,seq__33575);
var map__33577 = first__33576;
var map__33577__$1 = ((((!((map__33577 == null)))?(((((map__33577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33577):map__33577);
var msg = map__33577__$1;
var msg_name = cljs.core.get.call(null,map__33577__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33575__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33579){
var map__33580 = p__33579;
var map__33580__$1 = ((((!((map__33580 == null)))?(((((map__33580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33580):map__33580);
var on_compile_warning = cljs.core.get.call(null,map__33580__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33580__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33580,map__33580__$1,on_compile_warning,on_compile_fail){
return (function (p__33582){
var vec__33583 = p__33582;
var seq__33584 = cljs.core.seq.call(null,vec__33583);
var first__33585 = cljs.core.first.call(null,seq__33584);
var seq__33584__$1 = cljs.core.next.call(null,seq__33584);
var map__33586 = first__33585;
var map__33586__$1 = ((((!((map__33586 == null)))?(((((map__33586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33586):map__33586);
var msg = map__33586__$1;
var msg_name = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33584__$1;
var pred__33588 = cljs.core._EQ_;
var expr__33589 = msg_name;
if(cljs.core.truth_(pred__33588.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33589))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33588.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33589))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33580,map__33580__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__,msg_hist,msg_names,msg){
return (function (state_33678){
var state_val_33679 = (state_33678[(1)]);
if((state_val_33679 === (7))){
var inst_33598 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33598)){
var statearr_33680_33727 = state_33678__$1;
(statearr_33680_33727[(1)] = (8));

} else {
var statearr_33681_33728 = state_33678__$1;
(statearr_33681_33728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (20))){
var inst_33672 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33682_33729 = state_33678__$1;
(statearr_33682_33729[(2)] = inst_33672);

(statearr_33682_33729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (27))){
var inst_33668 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33683_33730 = state_33678__$1;
(statearr_33683_33730[(2)] = inst_33668);

(statearr_33683_33730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (1))){
var inst_33591 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33591)){
var statearr_33684_33731 = state_33678__$1;
(statearr_33684_33731[(1)] = (2));

} else {
var statearr_33685_33732 = state_33678__$1;
(statearr_33685_33732[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (24))){
var inst_33670 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33686_33733 = state_33678__$1;
(statearr_33686_33733[(2)] = inst_33670);

(statearr_33686_33733[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (4))){
var inst_33676 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33678__$1,inst_33676);
} else {
if((state_val_33679 === (15))){
var inst_33674 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33687_33734 = state_33678__$1;
(statearr_33687_33734[(2)] = inst_33674);

(statearr_33687_33734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (21))){
var inst_33627 = (state_33678[(2)]);
var inst_33628 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33629 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33628);
var state_33678__$1 = (function (){var statearr_33688 = state_33678;
(statearr_33688[(7)] = inst_33627);

return statearr_33688;
})();
var statearr_33689_33735 = state_33678__$1;
(statearr_33689_33735[(2)] = inst_33629);

(statearr_33689_33735[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (31))){
var inst_33657 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33657)){
var statearr_33690_33736 = state_33678__$1;
(statearr_33690_33736[(1)] = (34));

} else {
var statearr_33691_33737 = state_33678__$1;
(statearr_33691_33737[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (32))){
var inst_33666 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33692_33738 = state_33678__$1;
(statearr_33692_33738[(2)] = inst_33666);

(statearr_33692_33738[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (33))){
var inst_33653 = (state_33678[(2)]);
var inst_33654 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33655 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33654);
var state_33678__$1 = (function (){var statearr_33693 = state_33678;
(statearr_33693[(8)] = inst_33653);

return statearr_33693;
})();
var statearr_33694_33739 = state_33678__$1;
(statearr_33694_33739[(2)] = inst_33655);

(statearr_33694_33739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (13))){
var inst_33612 = figwheel.client.heads_up.clear.call(null);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(16),inst_33612);
} else {
if((state_val_33679 === (22))){
var inst_33633 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33634 = figwheel.client.heads_up.append_warning_message.call(null,inst_33633);
var state_33678__$1 = state_33678;
var statearr_33695_33740 = state_33678__$1;
(statearr_33695_33740[(2)] = inst_33634);

(statearr_33695_33740[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (36))){
var inst_33664 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33696_33741 = state_33678__$1;
(statearr_33696_33741[(2)] = inst_33664);

(statearr_33696_33741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (29))){
var inst_33644 = (state_33678[(2)]);
var inst_33645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33646 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33645);
var state_33678__$1 = (function (){var statearr_33697 = state_33678;
(statearr_33697[(9)] = inst_33644);

return statearr_33697;
})();
var statearr_33698_33742 = state_33678__$1;
(statearr_33698_33742[(2)] = inst_33646);

(statearr_33698_33742[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (6))){
var inst_33593 = (state_33678[(10)]);
var state_33678__$1 = state_33678;
var statearr_33699_33743 = state_33678__$1;
(statearr_33699_33743[(2)] = inst_33593);

(statearr_33699_33743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (28))){
var inst_33640 = (state_33678[(2)]);
var inst_33641 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33642 = figwheel.client.heads_up.display_warning.call(null,inst_33641);
var state_33678__$1 = (function (){var statearr_33700 = state_33678;
(statearr_33700[(11)] = inst_33640);

return statearr_33700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(29),inst_33642);
} else {
if((state_val_33679 === (25))){
var inst_33638 = figwheel.client.heads_up.clear.call(null);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(28),inst_33638);
} else {
if((state_val_33679 === (34))){
var inst_33659 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(37),inst_33659);
} else {
if((state_val_33679 === (17))){
var inst_33618 = (state_33678[(2)]);
var inst_33619 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33620 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33619);
var state_33678__$1 = (function (){var statearr_33701 = state_33678;
(statearr_33701[(12)] = inst_33618);

return statearr_33701;
})();
var statearr_33702_33744 = state_33678__$1;
(statearr_33702_33744[(2)] = inst_33620);

(statearr_33702_33744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (3))){
var inst_33610 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33610)){
var statearr_33703_33745 = state_33678__$1;
(statearr_33703_33745[(1)] = (13));

} else {
var statearr_33704_33746 = state_33678__$1;
(statearr_33704_33746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (12))){
var inst_33606 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33705_33747 = state_33678__$1;
(statearr_33705_33747[(2)] = inst_33606);

(statearr_33705_33747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (2))){
var inst_33593 = (state_33678[(10)]);
var inst_33593__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33678__$1 = (function (){var statearr_33706 = state_33678;
(statearr_33706[(10)] = inst_33593__$1);

return statearr_33706;
})();
if(cljs.core.truth_(inst_33593__$1)){
var statearr_33707_33748 = state_33678__$1;
(statearr_33707_33748[(1)] = (5));

} else {
var statearr_33708_33749 = state_33678__$1;
(statearr_33708_33749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (23))){
var inst_33636 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33636)){
var statearr_33709_33750 = state_33678__$1;
(statearr_33709_33750[(1)] = (25));

} else {
var statearr_33710_33751 = state_33678__$1;
(statearr_33710_33751[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (35))){
var state_33678__$1 = state_33678;
var statearr_33711_33752 = state_33678__$1;
(statearr_33711_33752[(2)] = null);

(statearr_33711_33752[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (19))){
var inst_33631 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33631)){
var statearr_33712_33753 = state_33678__$1;
(statearr_33712_33753[(1)] = (22));

} else {
var statearr_33713_33754 = state_33678__$1;
(statearr_33713_33754[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (11))){
var inst_33602 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33714_33755 = state_33678__$1;
(statearr_33714_33755[(2)] = inst_33602);

(statearr_33714_33755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (9))){
var inst_33604 = figwheel.client.heads_up.clear.call(null);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(12),inst_33604);
} else {
if((state_val_33679 === (5))){
var inst_33595 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33678__$1 = state_33678;
var statearr_33715_33756 = state_33678__$1;
(statearr_33715_33756[(2)] = inst_33595);

(statearr_33715_33756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (14))){
var inst_33622 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33622)){
var statearr_33716_33757 = state_33678__$1;
(statearr_33716_33757[(1)] = (18));

} else {
var statearr_33717_33758 = state_33678__$1;
(statearr_33717_33758[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (26))){
var inst_33648 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33678__$1 = state_33678;
if(cljs.core.truth_(inst_33648)){
var statearr_33718_33759 = state_33678__$1;
(statearr_33718_33759[(1)] = (30));

} else {
var statearr_33719_33760 = state_33678__$1;
(statearr_33719_33760[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (16))){
var inst_33614 = (state_33678[(2)]);
var inst_33615 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33616 = figwheel.client.heads_up.display_exception.call(null,inst_33615);
var state_33678__$1 = (function (){var statearr_33720 = state_33678;
(statearr_33720[(13)] = inst_33614);

return statearr_33720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(17),inst_33616);
} else {
if((state_val_33679 === (30))){
var inst_33650 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33651 = figwheel.client.heads_up.display_warning.call(null,inst_33650);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(33),inst_33651);
} else {
if((state_val_33679 === (10))){
var inst_33608 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33721_33761 = state_33678__$1;
(statearr_33721_33761[(2)] = inst_33608);

(statearr_33721_33761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (18))){
var inst_33624 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33625 = figwheel.client.heads_up.display_exception.call(null,inst_33624);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(21),inst_33625);
} else {
if((state_val_33679 === (37))){
var inst_33661 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33722_33762 = state_33678__$1;
(statearr_33722_33762[(2)] = inst_33661);

(statearr_33722_33762[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (8))){
var inst_33600 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(11),inst_33600);
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
}
}
}
}
}
}
}
});})(c__23380__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23223__auto__,c__23380__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto____0 = (function (){
var statearr_33723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33723[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto__);

(statearr_33723[(1)] = (1));

return statearr_33723;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto____1 = (function (state_33678){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_33678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e33724){if((e33724 instanceof Object)){
var ex__23227__auto__ = e33724;
var statearr_33725_33763 = state_33678;
(statearr_33725_33763[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33764 = state_33678;
state_33678 = G__33764;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto__ = function(state_33678){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto____1.call(this,state_33678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__,msg_hist,msg_names,msg))
})();
var state__23382__auto__ = (function (){var statearr_33726 = f__23381__auto__.call(null);
(statearr_33726[(6)] = c__23380__auto__);

return statearr_33726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__,msg_hist,msg_names,msg))
);

return c__23380__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23380__auto___33793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___33793,ch){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___33793,ch){
return (function (state_33779){
var state_val_33780 = (state_33779[(1)]);
if((state_val_33780 === (1))){
var state_33779__$1 = state_33779;
var statearr_33781_33794 = state_33779__$1;
(statearr_33781_33794[(2)] = null);

(statearr_33781_33794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33780 === (2))){
var state_33779__$1 = state_33779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33779__$1,(4),ch);
} else {
if((state_val_33780 === (3))){
var inst_33777 = (state_33779[(2)]);
var state_33779__$1 = state_33779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33779__$1,inst_33777);
} else {
if((state_val_33780 === (4))){
var inst_33767 = (state_33779[(7)]);
var inst_33767__$1 = (state_33779[(2)]);
var state_33779__$1 = (function (){var statearr_33782 = state_33779;
(statearr_33782[(7)] = inst_33767__$1);

return statearr_33782;
})();
if(cljs.core.truth_(inst_33767__$1)){
var statearr_33783_33795 = state_33779__$1;
(statearr_33783_33795[(1)] = (5));

} else {
var statearr_33784_33796 = state_33779__$1;
(statearr_33784_33796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33780 === (5))){
var inst_33767 = (state_33779[(7)]);
var inst_33769 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33767);
var state_33779__$1 = state_33779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33779__$1,(8),inst_33769);
} else {
if((state_val_33780 === (6))){
var state_33779__$1 = state_33779;
var statearr_33785_33797 = state_33779__$1;
(statearr_33785_33797[(2)] = null);

(statearr_33785_33797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33780 === (7))){
var inst_33775 = (state_33779[(2)]);
var state_33779__$1 = state_33779;
var statearr_33786_33798 = state_33779__$1;
(statearr_33786_33798[(2)] = inst_33775);

(statearr_33786_33798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33780 === (8))){
var inst_33771 = (state_33779[(2)]);
var state_33779__$1 = (function (){var statearr_33787 = state_33779;
(statearr_33787[(8)] = inst_33771);

return statearr_33787;
})();
var statearr_33788_33799 = state_33779__$1;
(statearr_33788_33799[(2)] = null);

(statearr_33788_33799[(1)] = (2));


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
});})(c__23380__auto___33793,ch))
;
return ((function (switch__23223__auto__,c__23380__auto___33793,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23224__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23224__auto____0 = (function (){
var statearr_33789 = [null,null,null,null,null,null,null,null,null];
(statearr_33789[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23224__auto__);

(statearr_33789[(1)] = (1));

return statearr_33789;
});
var figwheel$client$heads_up_plugin_$_state_machine__23224__auto____1 = (function (state_33779){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_33779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e33790){if((e33790 instanceof Object)){
var ex__23227__auto__ = e33790;
var statearr_33791_33800 = state_33779;
(statearr_33791_33800[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33801 = state_33779;
state_33779 = G__33801;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23224__auto__ = function(state_33779){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23224__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23224__auto____1.call(this,state_33779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23224__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23224__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___33793,ch))
})();
var state__23382__auto__ = (function (){var statearr_33792 = f__23381__auto__.call(null);
(statearr_33792[(6)] = c__23380__auto___33793);

return statearr_33792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___33793,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__){
return (function (state_33807){
var state_val_33808 = (state_33807[(1)]);
if((state_val_33808 === (1))){
var inst_33802 = cljs.core.async.timeout.call(null,(3000));
var state_33807__$1 = state_33807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33807__$1,(2),inst_33802);
} else {
if((state_val_33808 === (2))){
var inst_33804 = (state_33807[(2)]);
var inst_33805 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33807__$1 = (function (){var statearr_33809 = state_33807;
(statearr_33809[(7)] = inst_33804);

return statearr_33809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33807__$1,inst_33805);
} else {
return null;
}
}
});})(c__23380__auto__))
;
return ((function (switch__23223__auto__,c__23380__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23224__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23224__auto____0 = (function (){
var statearr_33810 = [null,null,null,null,null,null,null,null];
(statearr_33810[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23224__auto__);

(statearr_33810[(1)] = (1));

return statearr_33810;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23224__auto____1 = (function (state_33807){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_33807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e33811){if((e33811 instanceof Object)){
var ex__23227__auto__ = e33811;
var statearr_33812_33814 = state_33807;
(statearr_33812_33814[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33815 = state_33807;
state_33807 = G__33815;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23224__auto__ = function(state_33807){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23224__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23224__auto____1.call(this,state_33807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23224__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23224__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__))
})();
var state__23382__auto__ = (function (){var statearr_33813 = f__23381__auto__.call(null);
(statearr_33813[(6)] = c__23380__auto__);

return statearr_33813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__))
);

return c__23380__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__,figwheel_version,temp__5457__auto__){
return (function (state_33822){
var state_val_33823 = (state_33822[(1)]);
if((state_val_33823 === (1))){
var inst_33816 = cljs.core.async.timeout.call(null,(2000));
var state_33822__$1 = state_33822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33822__$1,(2),inst_33816);
} else {
if((state_val_33823 === (2))){
var inst_33818 = (state_33822[(2)]);
var inst_33819 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33820 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33819);
var state_33822__$1 = (function (){var statearr_33824 = state_33822;
(statearr_33824[(7)] = inst_33818);

return statearr_33824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33822__$1,inst_33820);
} else {
return null;
}
}
});})(c__23380__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23223__auto__,c__23380__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto____0 = (function (){
var statearr_33825 = [null,null,null,null,null,null,null,null];
(statearr_33825[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto__);

(statearr_33825[(1)] = (1));

return statearr_33825;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto____1 = (function (state_33822){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_33822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e33826){if((e33826 instanceof Object)){
var ex__23227__auto__ = e33826;
var statearr_33827_33829 = state_33822;
(statearr_33827_33829[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33830 = state_33822;
state_33822 = G__33830;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto__ = function(state_33822){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto____1.call(this,state_33822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23382__auto__ = (function (){var statearr_33828 = f__23381__auto__.call(null);
(statearr_33828[(6)] = c__23380__auto__);

return statearr_33828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__,figwheel_version,temp__5457__auto__))
);

return c__23380__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33831){
var map__33832 = p__33831;
var map__33832__$1 = ((((!((map__33832 == null)))?(((((map__33832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33832):map__33832);
var file = cljs.core.get.call(null,map__33832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33832__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33832__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33834 = "";
var G__33834__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33834),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33834);
var G__33834__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33834__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33834__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33834__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33834__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33835){
var map__33836 = p__33835;
var map__33836__$1 = ((((!((map__33836 == null)))?(((((map__33836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33836):map__33836);
var ed = map__33836__$1;
var formatted_exception = cljs.core.get.call(null,map__33836__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33836__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33836__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33838_33842 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33839_33843 = null;
var count__33840_33844 = (0);
var i__33841_33845 = (0);
while(true){
if((i__33841_33845 < count__33840_33844)){
var msg_33846 = cljs.core._nth.call(null,chunk__33839_33843,i__33841_33845);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33846);


var G__33847 = seq__33838_33842;
var G__33848 = chunk__33839_33843;
var G__33849 = count__33840_33844;
var G__33850 = (i__33841_33845 + (1));
seq__33838_33842 = G__33847;
chunk__33839_33843 = G__33848;
count__33840_33844 = G__33849;
i__33841_33845 = G__33850;
continue;
} else {
var temp__5457__auto___33851 = cljs.core.seq.call(null,seq__33838_33842);
if(temp__5457__auto___33851){
var seq__33838_33852__$1 = temp__5457__auto___33851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33838_33852__$1)){
var c__4319__auto___33853 = cljs.core.chunk_first.call(null,seq__33838_33852__$1);
var G__33854 = cljs.core.chunk_rest.call(null,seq__33838_33852__$1);
var G__33855 = c__4319__auto___33853;
var G__33856 = cljs.core.count.call(null,c__4319__auto___33853);
var G__33857 = (0);
seq__33838_33842 = G__33854;
chunk__33839_33843 = G__33855;
count__33840_33844 = G__33856;
i__33841_33845 = G__33857;
continue;
} else {
var msg_33858 = cljs.core.first.call(null,seq__33838_33852__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33858);


var G__33859 = cljs.core.next.call(null,seq__33838_33852__$1);
var G__33860 = null;
var G__33861 = (0);
var G__33862 = (0);
seq__33838_33842 = G__33859;
chunk__33839_33843 = G__33860;
count__33840_33844 = G__33861;
i__33841_33845 = G__33862;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33863){
var map__33864 = p__33863;
var map__33864__$1 = ((((!((map__33864 == null)))?(((((map__33864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33864):map__33864);
var w = map__33864__$1;
var message = cljs.core.get.call(null,map__33864__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"/Users/jocrau/.cljs/.aot_cache/1.10.145/C5B0645/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"/Users/jocrau/.cljs/.aot_cache/1.10.145/C5B0645/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33866 = cljs.core.seq.call(null,plugins);
var chunk__33867 = null;
var count__33868 = (0);
var i__33869 = (0);
while(true){
if((i__33869 < count__33868)){
var vec__33870 = cljs.core._nth.call(null,chunk__33867,i__33869);
var k = cljs.core.nth.call(null,vec__33870,(0),null);
var plugin = cljs.core.nth.call(null,vec__33870,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33876 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33866,chunk__33867,count__33868,i__33869,pl_33876,vec__33870,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33876.call(null,msg_hist);
});})(seq__33866,chunk__33867,count__33868,i__33869,pl_33876,vec__33870,k,plugin))
);
} else {
}


var G__33877 = seq__33866;
var G__33878 = chunk__33867;
var G__33879 = count__33868;
var G__33880 = (i__33869 + (1));
seq__33866 = G__33877;
chunk__33867 = G__33878;
count__33868 = G__33879;
i__33869 = G__33880;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33866);
if(temp__5457__auto__){
var seq__33866__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33866__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33866__$1);
var G__33881 = cljs.core.chunk_rest.call(null,seq__33866__$1);
var G__33882 = c__4319__auto__;
var G__33883 = cljs.core.count.call(null,c__4319__auto__);
var G__33884 = (0);
seq__33866 = G__33881;
chunk__33867 = G__33882;
count__33868 = G__33883;
i__33869 = G__33884;
continue;
} else {
var vec__33873 = cljs.core.first.call(null,seq__33866__$1);
var k = cljs.core.nth.call(null,vec__33873,(0),null);
var plugin = cljs.core.nth.call(null,vec__33873,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33885 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33866,chunk__33867,count__33868,i__33869,pl_33885,vec__33873,k,plugin,seq__33866__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33885.call(null,msg_hist);
});})(seq__33866,chunk__33867,count__33868,i__33869,pl_33885,vec__33873,k,plugin,seq__33866__$1,temp__5457__auto__))
);
} else {
}


var G__33886 = cljs.core.next.call(null,seq__33866__$1);
var G__33887 = null;
var G__33888 = (0);
var G__33889 = (0);
seq__33866 = G__33886;
chunk__33867 = G__33887;
count__33868 = G__33888;
i__33869 = G__33889;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33891 = arguments.length;
switch (G__33891) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33892_33897 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33893_33898 = null;
var count__33894_33899 = (0);
var i__33895_33900 = (0);
while(true){
if((i__33895_33900 < count__33894_33899)){
var msg_33901 = cljs.core._nth.call(null,chunk__33893_33898,i__33895_33900);
figwheel.client.socket.handle_incoming_message.call(null,msg_33901);


var G__33902 = seq__33892_33897;
var G__33903 = chunk__33893_33898;
var G__33904 = count__33894_33899;
var G__33905 = (i__33895_33900 + (1));
seq__33892_33897 = G__33902;
chunk__33893_33898 = G__33903;
count__33894_33899 = G__33904;
i__33895_33900 = G__33905;
continue;
} else {
var temp__5457__auto___33906 = cljs.core.seq.call(null,seq__33892_33897);
if(temp__5457__auto___33906){
var seq__33892_33907__$1 = temp__5457__auto___33906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33892_33907__$1)){
var c__4319__auto___33908 = cljs.core.chunk_first.call(null,seq__33892_33907__$1);
var G__33909 = cljs.core.chunk_rest.call(null,seq__33892_33907__$1);
var G__33910 = c__4319__auto___33908;
var G__33911 = cljs.core.count.call(null,c__4319__auto___33908);
var G__33912 = (0);
seq__33892_33897 = G__33909;
chunk__33893_33898 = G__33910;
count__33894_33899 = G__33911;
i__33895_33900 = G__33912;
continue;
} else {
var msg_33913 = cljs.core.first.call(null,seq__33892_33907__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33913);


var G__33914 = cljs.core.next.call(null,seq__33892_33907__$1);
var G__33915 = null;
var G__33916 = (0);
var G__33917 = (0);
seq__33892_33897 = G__33914;
chunk__33893_33898 = G__33915;
count__33894_33899 = G__33916;
i__33895_33900 = G__33917;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33922 = arguments.length;
var i__4498__auto___33923 = (0);
while(true){
if((i__4498__auto___33923 < len__4497__auto___33922)){
args__4500__auto__.push((arguments[i__4498__auto___33923]));

var G__33924 = (i__4498__auto___33923 + (1));
i__4498__auto___33923 = G__33924;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33919){
var map__33920 = p__33919;
var map__33920__$1 = ((((!((map__33920 == null)))?(((((map__33920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33920):map__33920);
var opts = map__33920__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33918){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33918));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33925){if((e33925 instanceof Error)){
var e = e33925;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33925;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33926){
var map__33927 = p__33926;
var map__33927__$1 = ((((!((map__33927 == null)))?(((((map__33927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33927):map__33927);
var msg_name = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521209066897
