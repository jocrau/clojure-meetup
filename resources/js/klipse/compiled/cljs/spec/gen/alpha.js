// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27388 = arguments.length;
var i__10196__auto___27389 = (0);
while(true){
if((i__10196__auto___27389 < len__10195__auto___27388)){
args__10202__auto__.push((arguments[i__10196__auto___27389]));

var G__27390 = (i__10196__auto___27389 + (1));
i__10196__auto___27389 = G__27390;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq27387){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27387));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27392 = arguments.length;
var i__10196__auto___27393 = (0);
while(true){
if((i__10196__auto___27393 < len__10195__auto___27392)){
args__10202__auto__.push((arguments[i__10196__auto___27393]));

var G__27394 = (i__10196__auto___27393 + (1));
i__10196__auto___27393 = G__27394;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq27391){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27391));
});

var g_QMARK__27395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_27396 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__27395){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__27395))
,null));
var mkg_27397 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__27395,g_27396){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__27395,g_27396))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__27395,g_27396,mkg_27397){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__27395).call(null,x);
});})(g_QMARK__27395,g_27396,mkg_27397))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__27395,g_27396,mkg_27397){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_27397).call(null,gfn);
});})(g_QMARK__27395,g_27396,mkg_27397))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__27395,g_27396,mkg_27397){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_27396).call(null,generator);
});})(g_QMARK__27395,g_27396,mkg_27397))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27359__auto___27417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__27359__auto___27417){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27418 = arguments.length;
var i__10196__auto___27419 = (0);
while(true){
if((i__10196__auto___27419 < len__10195__auto___27418)){
args__10202__auto__.push((arguments[i__10196__auto___27419]));

var G__27420 = (i__10196__auto___27419 + (1));
i__10196__auto___27419 = G__27420;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27417))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27417),args);
});})(g__27359__auto___27417))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__27359__auto___27417){
return (function (seq27398){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27398));
});})(g__27359__auto___27417))
;


var g__27359__auto___27421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__27359__auto___27421){
return (function cljs$spec$gen$alpha$list(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27422 = arguments.length;
var i__10196__auto___27423 = (0);
while(true){
if((i__10196__auto___27423 < len__10195__auto___27422)){
args__10202__auto__.push((arguments[i__10196__auto___27423]));

var G__27424 = (i__10196__auto___27423 + (1));
i__10196__auto___27423 = G__27424;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27421))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27421),args);
});})(g__27359__auto___27421))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__27359__auto___27421){
return (function (seq27399){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27399));
});})(g__27359__auto___27421))
;


var g__27359__auto___27425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__27359__auto___27425){
return (function cljs$spec$gen$alpha$map(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27426 = arguments.length;
var i__10196__auto___27427 = (0);
while(true){
if((i__10196__auto___27427 < len__10195__auto___27426)){
args__10202__auto__.push((arguments[i__10196__auto___27427]));

var G__27428 = (i__10196__auto___27427 + (1));
i__10196__auto___27427 = G__27428;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27425))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27425),args);
});})(g__27359__auto___27425))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__27359__auto___27425){
return (function (seq27400){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27400));
});})(g__27359__auto___27425))
;


var g__27359__auto___27429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__27359__auto___27429){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27430 = arguments.length;
var i__10196__auto___27431 = (0);
while(true){
if((i__10196__auto___27431 < len__10195__auto___27430)){
args__10202__auto__.push((arguments[i__10196__auto___27431]));

var G__27432 = (i__10196__auto___27431 + (1));
i__10196__auto___27431 = G__27432;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27429))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27429),args);
});})(g__27359__auto___27429))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__27359__auto___27429){
return (function (seq27401){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27401));
});})(g__27359__auto___27429))
;


var g__27359__auto___27433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__27359__auto___27433){
return (function cljs$spec$gen$alpha$set(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27434 = arguments.length;
var i__10196__auto___27435 = (0);
while(true){
if((i__10196__auto___27435 < len__10195__auto___27434)){
args__10202__auto__.push((arguments[i__10196__auto___27435]));

var G__27436 = (i__10196__auto___27435 + (1));
i__10196__auto___27435 = G__27436;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27433))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27433),args);
});})(g__27359__auto___27433))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__27359__auto___27433){
return (function (seq27402){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27402));
});})(g__27359__auto___27433))
;


var g__27359__auto___27437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__27359__auto___27437){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27438 = arguments.length;
var i__10196__auto___27439 = (0);
while(true){
if((i__10196__auto___27439 < len__10195__auto___27438)){
args__10202__auto__.push((arguments[i__10196__auto___27439]));

var G__27440 = (i__10196__auto___27439 + (1));
i__10196__auto___27439 = G__27440;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27437))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27437),args);
});})(g__27359__auto___27437))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__27359__auto___27437){
return (function (seq27403){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27403));
});})(g__27359__auto___27437))
;


var g__27359__auto___27441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__27359__auto___27441){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27442 = arguments.length;
var i__10196__auto___27443 = (0);
while(true){
if((i__10196__auto___27443 < len__10195__auto___27442)){
args__10202__auto__.push((arguments[i__10196__auto___27443]));

var G__27444 = (i__10196__auto___27443 + (1));
i__10196__auto___27443 = G__27444;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27441))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27441),args);
});})(g__27359__auto___27441))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__27359__auto___27441){
return (function (seq27404){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27404));
});})(g__27359__auto___27441))
;


var g__27359__auto___27445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__27359__auto___27445){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27446 = arguments.length;
var i__10196__auto___27447 = (0);
while(true){
if((i__10196__auto___27447 < len__10195__auto___27446)){
args__10202__auto__.push((arguments[i__10196__auto___27447]));

var G__27448 = (i__10196__auto___27447 + (1));
i__10196__auto___27447 = G__27448;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27445))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27445),args);
});})(g__27359__auto___27445))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__27359__auto___27445){
return (function (seq27405){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27405));
});})(g__27359__auto___27445))
;


var g__27359__auto___27449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__27359__auto___27449){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27450 = arguments.length;
var i__10196__auto___27451 = (0);
while(true){
if((i__10196__auto___27451 < len__10195__auto___27450)){
args__10202__auto__.push((arguments[i__10196__auto___27451]));

var G__27452 = (i__10196__auto___27451 + (1));
i__10196__auto___27451 = G__27452;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27449))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27449),args);
});})(g__27359__auto___27449))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__27359__auto___27449){
return (function (seq27406){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27406));
});})(g__27359__auto___27449))
;


var g__27359__auto___27453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__27359__auto___27453){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27454 = arguments.length;
var i__10196__auto___27455 = (0);
while(true){
if((i__10196__auto___27455 < len__10195__auto___27454)){
args__10202__auto__.push((arguments[i__10196__auto___27455]));

var G__27456 = (i__10196__auto___27455 + (1));
i__10196__auto___27455 = G__27456;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27453))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27453),args);
});})(g__27359__auto___27453))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__27359__auto___27453){
return (function (seq27407){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27407));
});})(g__27359__auto___27453))
;


var g__27359__auto___27457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__27359__auto___27457){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27458 = arguments.length;
var i__10196__auto___27459 = (0);
while(true){
if((i__10196__auto___27459 < len__10195__auto___27458)){
args__10202__auto__.push((arguments[i__10196__auto___27459]));

var G__27460 = (i__10196__auto___27459 + (1));
i__10196__auto___27459 = G__27460;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27457))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27457),args);
});})(g__27359__auto___27457))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__27359__auto___27457){
return (function (seq27408){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27408));
});})(g__27359__auto___27457))
;


var g__27359__auto___27461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__27359__auto___27461){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27462 = arguments.length;
var i__10196__auto___27463 = (0);
while(true){
if((i__10196__auto___27463 < len__10195__auto___27462)){
args__10202__auto__.push((arguments[i__10196__auto___27463]));

var G__27464 = (i__10196__auto___27463 + (1));
i__10196__auto___27463 = G__27464;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27461))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27461),args);
});})(g__27359__auto___27461))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__27359__auto___27461){
return (function (seq27409){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27409));
});})(g__27359__auto___27461))
;


var g__27359__auto___27465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__27359__auto___27465){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27466 = arguments.length;
var i__10196__auto___27467 = (0);
while(true){
if((i__10196__auto___27467 < len__10195__auto___27466)){
args__10202__auto__.push((arguments[i__10196__auto___27467]));

var G__27468 = (i__10196__auto___27467 + (1));
i__10196__auto___27467 = G__27468;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27465))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27465),args);
});})(g__27359__auto___27465))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__27359__auto___27465){
return (function (seq27410){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27410));
});})(g__27359__auto___27465))
;


var g__27359__auto___27469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__27359__auto___27469){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27470 = arguments.length;
var i__10196__auto___27471 = (0);
while(true){
if((i__10196__auto___27471 < len__10195__auto___27470)){
args__10202__auto__.push((arguments[i__10196__auto___27471]));

var G__27472 = (i__10196__auto___27471 + (1));
i__10196__auto___27471 = G__27472;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27469))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27469),args);
});})(g__27359__auto___27469))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__27359__auto___27469){
return (function (seq27411){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27411));
});})(g__27359__auto___27469))
;


var g__27359__auto___27473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__27359__auto___27473){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27474 = arguments.length;
var i__10196__auto___27475 = (0);
while(true){
if((i__10196__auto___27475 < len__10195__auto___27474)){
args__10202__auto__.push((arguments[i__10196__auto___27475]));

var G__27476 = (i__10196__auto___27475 + (1));
i__10196__auto___27475 = G__27476;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27473))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27473),args);
});})(g__27359__auto___27473))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__27359__auto___27473){
return (function (seq27412){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27412));
});})(g__27359__auto___27473))
;


var g__27359__auto___27477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__27359__auto___27477){
return (function cljs$spec$gen$alpha$return(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27478 = arguments.length;
var i__10196__auto___27479 = (0);
while(true){
if((i__10196__auto___27479 < len__10195__auto___27478)){
args__10202__auto__.push((arguments[i__10196__auto___27479]));

var G__27480 = (i__10196__auto___27479 + (1));
i__10196__auto___27479 = G__27480;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27477))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27477),args);
});})(g__27359__auto___27477))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__27359__auto___27477){
return (function (seq27413){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27413));
});})(g__27359__auto___27477))
;


var g__27359__auto___27481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__27359__auto___27481){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27482 = arguments.length;
var i__10196__auto___27483 = (0);
while(true){
if((i__10196__auto___27483 < len__10195__auto___27482)){
args__10202__auto__.push((arguments[i__10196__auto___27483]));

var G__27484 = (i__10196__auto___27483 + (1));
i__10196__auto___27483 = G__27484;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27481))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27481),args);
});})(g__27359__auto___27481))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27359__auto___27481){
return (function (seq27414){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27414));
});})(g__27359__auto___27481))
;


var g__27359__auto___27485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__27359__auto___27485){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27486 = arguments.length;
var i__10196__auto___27487 = (0);
while(true){
if((i__10196__auto___27487 < len__10195__auto___27486)){
args__10202__auto__.push((arguments[i__10196__auto___27487]));

var G__27488 = (i__10196__auto___27487 + (1));
i__10196__auto___27487 = G__27488;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27485))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27485),args);
});})(g__27359__auto___27485))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__27359__auto___27485){
return (function (seq27415){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27415));
});})(g__27359__auto___27485))
;


var g__27359__auto___27489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__27359__auto___27489){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27490 = arguments.length;
var i__10196__auto___27491 = (0);
while(true){
if((i__10196__auto___27491 < len__10195__auto___27490)){
args__10202__auto__.push((arguments[i__10196__auto___27491]));

var G__27492 = (i__10196__auto___27491 + (1));
i__10196__auto___27491 = G__27492;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27359__auto___27489))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27359__auto___27489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27359__auto___27489),args);
});})(g__27359__auto___27489))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__27359__auto___27489){
return (function (seq27416){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27416));
});})(g__27359__auto___27489))
;

var g__27372__auto___27514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__27372__auto___27514){
return (function cljs$spec$gen$alpha$any(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27515 = arguments.length;
var i__10196__auto___27516 = (0);
while(true){
if((i__10196__auto___27516 < len__10195__auto___27515)){
args__10202__auto__.push((arguments[i__10196__auto___27516]));

var G__27517 = (i__10196__auto___27516 + (1));
i__10196__auto___27516 = G__27517;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27514))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27514){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27514);
});})(g__27372__auto___27514))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__27372__auto___27514){
return (function (seq27493){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27493));
});})(g__27372__auto___27514))
;


var g__27372__auto___27518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__27372__auto___27518){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27519 = arguments.length;
var i__10196__auto___27520 = (0);
while(true){
if((i__10196__auto___27520 < len__10195__auto___27519)){
args__10202__auto__.push((arguments[i__10196__auto___27520]));

var G__27521 = (i__10196__auto___27520 + (1));
i__10196__auto___27520 = G__27521;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27518))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27518){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27518);
});})(g__27372__auto___27518))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__27372__auto___27518){
return (function (seq27494){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27494));
});})(g__27372__auto___27518))
;


var g__27372__auto___27522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__27372__auto___27522){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27523 = arguments.length;
var i__10196__auto___27524 = (0);
while(true){
if((i__10196__auto___27524 < len__10195__auto___27523)){
args__10202__auto__.push((arguments[i__10196__auto___27524]));

var G__27525 = (i__10196__auto___27524 + (1));
i__10196__auto___27524 = G__27525;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27522))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27522){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27522);
});})(g__27372__auto___27522))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__27372__auto___27522){
return (function (seq27495){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27495));
});})(g__27372__auto___27522))
;


var g__27372__auto___27526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__27372__auto___27526){
return (function cljs$spec$gen$alpha$char(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27527 = arguments.length;
var i__10196__auto___27528 = (0);
while(true){
if((i__10196__auto___27528 < len__10195__auto___27527)){
args__10202__auto__.push((arguments[i__10196__auto___27528]));

var G__27529 = (i__10196__auto___27528 + (1));
i__10196__auto___27528 = G__27529;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27526))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27526){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27526);
});})(g__27372__auto___27526))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__27372__auto___27526){
return (function (seq27496){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27496));
});})(g__27372__auto___27526))
;


var g__27372__auto___27530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__27372__auto___27530){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27531 = arguments.length;
var i__10196__auto___27532 = (0);
while(true){
if((i__10196__auto___27532 < len__10195__auto___27531)){
args__10202__auto__.push((arguments[i__10196__auto___27532]));

var G__27533 = (i__10196__auto___27532 + (1));
i__10196__auto___27532 = G__27533;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27530))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27530){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27530);
});})(g__27372__auto___27530))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__27372__auto___27530){
return (function (seq27497){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27497));
});})(g__27372__auto___27530))
;


var g__27372__auto___27534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__27372__auto___27534){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27535 = arguments.length;
var i__10196__auto___27536 = (0);
while(true){
if((i__10196__auto___27536 < len__10195__auto___27535)){
args__10202__auto__.push((arguments[i__10196__auto___27536]));

var G__27537 = (i__10196__auto___27536 + (1));
i__10196__auto___27536 = G__27537;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27534))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27534){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27534);
});})(g__27372__auto___27534))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__27372__auto___27534){
return (function (seq27498){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27498));
});})(g__27372__auto___27534))
;


var g__27372__auto___27538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__27372__auto___27538){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27539 = arguments.length;
var i__10196__auto___27540 = (0);
while(true){
if((i__10196__auto___27540 < len__10195__auto___27539)){
args__10202__auto__.push((arguments[i__10196__auto___27540]));

var G__27541 = (i__10196__auto___27540 + (1));
i__10196__auto___27540 = G__27541;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27538))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27538){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27538);
});})(g__27372__auto___27538))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__27372__auto___27538){
return (function (seq27499){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27499));
});})(g__27372__auto___27538))
;


var g__27372__auto___27542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__27372__auto___27542){
return (function cljs$spec$gen$alpha$double(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27543 = arguments.length;
var i__10196__auto___27544 = (0);
while(true){
if((i__10196__auto___27544 < len__10195__auto___27543)){
args__10202__auto__.push((arguments[i__10196__auto___27544]));

var G__27545 = (i__10196__auto___27544 + (1));
i__10196__auto___27544 = G__27545;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27542))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27542){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27542);
});})(g__27372__auto___27542))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__27372__auto___27542){
return (function (seq27500){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27500));
});})(g__27372__auto___27542))
;


var g__27372__auto___27546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__27372__auto___27546){
return (function cljs$spec$gen$alpha$int(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27547 = arguments.length;
var i__10196__auto___27548 = (0);
while(true){
if((i__10196__auto___27548 < len__10195__auto___27547)){
args__10202__auto__.push((arguments[i__10196__auto___27548]));

var G__27549 = (i__10196__auto___27548 + (1));
i__10196__auto___27548 = G__27549;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27546))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27546){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27546);
});})(g__27372__auto___27546))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__27372__auto___27546){
return (function (seq27501){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27501));
});})(g__27372__auto___27546))
;


var g__27372__auto___27550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__27372__auto___27550){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27551 = arguments.length;
var i__10196__auto___27552 = (0);
while(true){
if((i__10196__auto___27552 < len__10195__auto___27551)){
args__10202__auto__.push((arguments[i__10196__auto___27552]));

var G__27553 = (i__10196__auto___27552 + (1));
i__10196__auto___27552 = G__27553;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27550))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27550){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27550);
});})(g__27372__auto___27550))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__27372__auto___27550){
return (function (seq27502){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27502));
});})(g__27372__auto___27550))
;


var g__27372__auto___27554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__27372__auto___27554){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27555 = arguments.length;
var i__10196__auto___27556 = (0);
while(true){
if((i__10196__auto___27556 < len__10195__auto___27555)){
args__10202__auto__.push((arguments[i__10196__auto___27556]));

var G__27557 = (i__10196__auto___27556 + (1));
i__10196__auto___27556 = G__27557;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27554))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27554){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27554);
});})(g__27372__auto___27554))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__27372__auto___27554){
return (function (seq27503){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27503));
});})(g__27372__auto___27554))
;


var g__27372__auto___27558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__27372__auto___27558){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27559 = arguments.length;
var i__10196__auto___27560 = (0);
while(true){
if((i__10196__auto___27560 < len__10195__auto___27559)){
args__10202__auto__.push((arguments[i__10196__auto___27560]));

var G__27561 = (i__10196__auto___27560 + (1));
i__10196__auto___27560 = G__27561;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27558))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27558){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27558);
});})(g__27372__auto___27558))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__27372__auto___27558){
return (function (seq27504){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27504));
});})(g__27372__auto___27558))
;


var g__27372__auto___27562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__27372__auto___27562){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27563 = arguments.length;
var i__10196__auto___27564 = (0);
while(true){
if((i__10196__auto___27564 < len__10195__auto___27563)){
args__10202__auto__.push((arguments[i__10196__auto___27564]));

var G__27565 = (i__10196__auto___27564 + (1));
i__10196__auto___27564 = G__27565;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27562))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27562){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27562);
});})(g__27372__auto___27562))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__27372__auto___27562){
return (function (seq27505){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27505));
});})(g__27372__auto___27562))
;


var g__27372__auto___27566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__27372__auto___27566){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27567 = arguments.length;
var i__10196__auto___27568 = (0);
while(true){
if((i__10196__auto___27568 < len__10195__auto___27567)){
args__10202__auto__.push((arguments[i__10196__auto___27568]));

var G__27569 = (i__10196__auto___27568 + (1));
i__10196__auto___27568 = G__27569;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27566))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27566){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27566);
});})(g__27372__auto___27566))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__27372__auto___27566){
return (function (seq27506){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27506));
});})(g__27372__auto___27566))
;


var g__27372__auto___27570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__27372__auto___27570){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27571 = arguments.length;
var i__10196__auto___27572 = (0);
while(true){
if((i__10196__auto___27572 < len__10195__auto___27571)){
args__10202__auto__.push((arguments[i__10196__auto___27572]));

var G__27573 = (i__10196__auto___27572 + (1));
i__10196__auto___27572 = G__27573;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27570))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27570){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27570);
});})(g__27372__auto___27570))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__27372__auto___27570){
return (function (seq27507){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27507));
});})(g__27372__auto___27570))
;


var g__27372__auto___27574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__27372__auto___27574){
return (function cljs$spec$gen$alpha$string(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27575 = arguments.length;
var i__10196__auto___27576 = (0);
while(true){
if((i__10196__auto___27576 < len__10195__auto___27575)){
args__10202__auto__.push((arguments[i__10196__auto___27576]));

var G__27577 = (i__10196__auto___27576 + (1));
i__10196__auto___27576 = G__27577;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27574))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27574){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27574);
});})(g__27372__auto___27574))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__27372__auto___27574){
return (function (seq27508){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27508));
});})(g__27372__auto___27574))
;


var g__27372__auto___27578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__27372__auto___27578){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27579 = arguments.length;
var i__10196__auto___27580 = (0);
while(true){
if((i__10196__auto___27580 < len__10195__auto___27579)){
args__10202__auto__.push((arguments[i__10196__auto___27580]));

var G__27581 = (i__10196__auto___27580 + (1));
i__10196__auto___27580 = G__27581;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27578))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27578){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27578);
});})(g__27372__auto___27578))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__27372__auto___27578){
return (function (seq27509){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27509));
});})(g__27372__auto___27578))
;


var g__27372__auto___27582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__27372__auto___27582){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27583 = arguments.length;
var i__10196__auto___27584 = (0);
while(true){
if((i__10196__auto___27584 < len__10195__auto___27583)){
args__10202__auto__.push((arguments[i__10196__auto___27584]));

var G__27585 = (i__10196__auto___27584 + (1));
i__10196__auto___27584 = G__27585;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27582))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27582){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27582);
});})(g__27372__auto___27582))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__27372__auto___27582){
return (function (seq27510){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27510));
});})(g__27372__auto___27582))
;


var g__27372__auto___27586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__27372__auto___27586){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27587 = arguments.length;
var i__10196__auto___27588 = (0);
while(true){
if((i__10196__auto___27588 < len__10195__auto___27587)){
args__10202__auto__.push((arguments[i__10196__auto___27588]));

var G__27589 = (i__10196__auto___27588 + (1));
i__10196__auto___27588 = G__27589;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27586))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27586){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27586);
});})(g__27372__auto___27586))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__27372__auto___27586){
return (function (seq27511){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27511));
});})(g__27372__auto___27586))
;


var g__27372__auto___27590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__27372__auto___27590){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27591 = arguments.length;
var i__10196__auto___27592 = (0);
while(true){
if((i__10196__auto___27592 < len__10195__auto___27591)){
args__10202__auto__.push((arguments[i__10196__auto___27592]));

var G__27593 = (i__10196__auto___27592 + (1));
i__10196__auto___27592 = G__27593;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27590))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27590){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27590);
});})(g__27372__auto___27590))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__27372__auto___27590){
return (function (seq27512){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27512));
});})(g__27372__auto___27590))
;


var g__27372__auto___27594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__27372__auto___27594){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27595 = arguments.length;
var i__10196__auto___27596 = (0);
while(true){
if((i__10196__auto___27596 < len__10195__auto___27595)){
args__10202__auto__.push((arguments[i__10196__auto___27596]));

var G__27597 = (i__10196__auto___27596 + (1));
i__10196__auto___27596 = G__27597;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});})(g__27372__auto___27594))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27372__auto___27594){
return (function (args){
return cljs.core.deref.call(null,g__27372__auto___27594);
});})(g__27372__auto___27594))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__27372__auto___27594){
return (function (seq27513){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27513));
});})(g__27372__auto___27594))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__10202__auto__ = [];
var len__10195__auto___27600 = arguments.length;
var i__10196__auto___27601 = (0);
while(true){
if((i__10196__auto___27601 < len__10195__auto___27600)){
args__10202__auto__.push((arguments[i__10196__auto___27601]));

var G__27602 = (i__10196__auto___27601 + (1));
i__10196__auto___27601 = G__27602;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__27598_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27598_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq27599){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27599));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__27603_SHARP_){
return (new Date(p1__27603_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
