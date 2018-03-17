// Compiled by ClojureScript 1.10.145 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
goog.require('devtools.context');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___27638 = arguments.length;
var i__4498__auto___27639 = (0);
while(true){
if((i__4498__auto___27639 < len__4497__auto___27638)){
args__4500__auto__.push((arguments[i__4498__auto___27639]));

var G__27640 = (i__4498__auto___27639 + (1));
i__4498__auto___27639 = G__27640;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__27633){
var vec__27634 = p__27633;
var context = cljs.core.nth.call(null,vec__27634,(0),null);
var footer = cljs.core.nth.call(null,vec__27634,(1),null);
var console = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__3922__auto__ = e.message;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console["groupCollapsed"]);
var log = (console["log"]);
var group_end = (console["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console,header);

log.apply(console,details);

return group_end.call(console);
}catch (e27637){var e__$1 = e27637;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq27631){
var G__27632 = cljs.core.first.call(null,seq27631);
var seq27631__$1 = cljs.core.next.call(null,seq27631);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27632,seq27631__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1521146639634
