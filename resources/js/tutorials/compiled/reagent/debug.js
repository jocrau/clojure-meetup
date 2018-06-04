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
var G__21973__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21974__i = 0, G__21974__a = new Array(arguments.length -  0);
while (G__21974__i < G__21974__a.length) {G__21974__a[G__21974__i] = arguments[G__21974__i + 0]; ++G__21974__i;}
  args = new cljs.core.IndexedSeq(G__21974__a,0,null);
} 
return G__21973__delegate.call(this,args);};
G__21973.cljs$lang$maxFixedArity = 0;
G__21973.cljs$lang$applyTo = (function (arglist__21975){
var args = cljs.core.seq(arglist__21975);
return G__21973__delegate(args);
});
G__21973.cljs$core$IFn$_invoke$arity$variadic = G__21973__delegate;
return G__21973;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21976__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21977__i = 0, G__21977__a = new Array(arguments.length -  0);
while (G__21977__i < G__21977__a.length) {G__21977__a[G__21977__i] = arguments[G__21977__i + 0]; ++G__21977__i;}
  args = new cljs.core.IndexedSeq(G__21977__a,0,null);
} 
return G__21976__delegate.call(this,args);};
G__21976.cljs$lang$maxFixedArity = 0;
G__21976.cljs$lang$applyTo = (function (arglist__21978){
var args = cljs.core.seq(arglist__21978);
return G__21976__delegate(args);
});
G__21976.cljs$core$IFn$_invoke$arity$variadic = G__21976__delegate;
return G__21976;
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

//# sourceMappingURL=debug.js.map?rel=1528126805369
