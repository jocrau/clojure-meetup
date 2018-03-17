// Compiled by ClojureScript 1.10.145 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21995__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21996__i = 0, G__21996__a = new Array(arguments.length -  0);
while (G__21996__i < G__21996__a.length) {G__21996__a[G__21996__i] = arguments[G__21996__i + 0]; ++G__21996__i;}
  args = new cljs.core.IndexedSeq(G__21996__a,0,null);
} 
return G__21995__delegate.call(this,args);};
G__21995.cljs$lang$maxFixedArity = 0;
G__21995.cljs$lang$applyTo = (function (arglist__21997){
var args = cljs.core.seq(arglist__21997);
return G__21995__delegate(args);
});
G__21995.cljs$core$IFn$_invoke$arity$variadic = G__21995__delegate;
return G__21995;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21998__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21999__i = 0, G__21999__a = new Array(arguments.length -  0);
while (G__21999__i < G__21999__a.length) {G__21999__a[G__21999__i] = arguments[G__21999__i + 0]; ++G__21999__i;}
  args = new cljs.core.IndexedSeq(G__21999__a,0,null);
} 
return G__21998__delegate.call(this,args);};
G__21998.cljs$lang$maxFixedArity = 0;
G__21998.cljs$lang$applyTo = (function (arglist__22000){
var args = cljs.core.seq(arglist__22000);
return G__21998__delegate(args);
});
G__21998.cljs$core$IFn$_invoke$arity$variadic = G__21998__delegate;
return G__21998;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1521146628617
