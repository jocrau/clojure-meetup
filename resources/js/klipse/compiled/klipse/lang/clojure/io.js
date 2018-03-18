// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.lang.clojure.io');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('klipse.utils');
goog.require('klipse.lang.clojure.include');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
klipse.lang.clojure.io.edn = (function klipse$lang$clojure$io$edn(json){
return cljs_http.util.transit_decode.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,json)),new cljs.core.Keyword(null,"json","json",1279968570),null);
});
klipse.lang.clojure.io.macro_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null);
klipse.lang.clojure.io.cljs_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc"], null);
if(typeof klipse.lang.clojure.io.load_ns !== 'undefined'){
} else {
/**
 * 
 *   Each runtime environment provides a different way to load a library.
 *   Received two arguments - a map and a callback function:
 *   The map will have the following keys:
 * 
 *  :name   - the name of the library (a symbol)
 *  :macros - modifier signaling a macros namespace load
 *  :path   - munged relative library path (a string)
 * 
 *  It is up to the implementor to correctly resolve the corresponding .cljs,
 *  .cljc, or .js resource (the order must be respected).
 *  If :macros is true, resolution should only consider .clj or .cljc resources (the order must be respected).
 *   Upon resolution the callback should be invoked with a map containing the following keys:
 * 
 *  :lang       - the language, :clj or :js
 *  :source     - the source of the library (a string)
 *  :file       - optional, the file path, it will be added to AST's :file keyword (but not in :meta)
 *  :cache      - optional, if a :clj namespace has been precompiled to :js, can give an analysis cache for faster loads.
 *  :source-map - optional, if a :clj namespace has been precompiled to :js, can give a V3 source map JSON
 * 
 *  If the resource could not be resolved, the callback should be invoked with
 *  nil.
 */
klipse.lang.clojure.io.load_ns = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.lang.clojure.io","load-ns"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function (_,p__38452,src_cb){
var map__38453 = p__38452;
var map__38453__$1 = ((((!((map__38453 == null)))?((((map__38453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38453):map__38453);
var name = cljs.core.get.call(null,map__38453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__38453__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__38453__$1,new cljs.core.Keyword(null,"path","path",-188191168));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,macros,path], null);

if(cljs.core.truth_(macros)){
return new cljs.core.Keyword(null,"macro","macro",-867863404);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\..*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return new cljs.core.Keyword(null,"goog","goog",-1711135452);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\.gist-.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return new cljs.core.Keyword(null,"gist","gist",96143031);
} else {
return new cljs.core.Keyword(null,"cljs","cljs",1492417629);

}
}
}
});})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
klipse.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
klipse.lang.clojure.io.the_ns_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/",new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),"https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"], null);
klipse.lang.clojure.io.skip_ns_cljs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.tools.reader","cljs.tools.reader",-831293977,null),null,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null], null), null);
klipse.lang.clojure.io.cache_buster_QMARK_ = (function klipse$lang$clojure$io$cache_buster_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"cache-buster","cache-buster",-1567170482).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "false";
}
})()));
});
klipse.lang.clojure.io.filename_of = (function klipse$lang$clojure$io$filename_of(s,cache_buster_QMARK_){
if(cljs.core.truth_(cache_buster_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
} else {
return s;
}
});
/**
 * Tries to load one namespace from filenames.
 *   Will call the src-cb upon first success.
 *   If can-recover? is false, will call src-cb with nil if it cannot load any namespace.
 *   Returns :success if a nampespace was loaded otherwise, returns nil.
 *   
 */
klipse.lang.clojure.io.try_to_load_ns = (function klipse$lang$clojure$io$try_to_load_ns(var_args){
var args__10202__auto__ = [];
var len__10195__auto___38570 = arguments.length;
var i__10196__auto___38571 = (0);
while(true){
if((i__10196__auto___38571 < len__10195__auto___38570)){
args__10202__auto__.push((arguments[i__10196__auto___38571]));

var G__38572 = (i__10196__auto___38571 + (1));
i__10196__auto___38571 = G__38572;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((4) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((4)),(0),null)):null);
return klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10203__auto__);
});

klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__38460){
var map__38461 = p__38460;
var map__38461__$1 = ((((!((map__38461 == null)))?((((map__38461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38461):map__38461);
var transform = cljs.core.get.call(null,map__38461__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__38461__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,map__38461,map__38461__$1,transform,can_recover_QMARK_){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,map__38461,map__38461__$1,transform,can_recover_QMARK_){
return (function (state_38527){
var state_val_38528 = (state_38527[(1)]);
if((state_val_38528 === (7))){
var inst_38476 = (state_38527[(7)]);
var inst_38476__$1 = (state_38527[(2)]);
var inst_38478 = (inst_38476__$1 == null);
var inst_38479 = cljs.core.not.call(null,inst_38478);
var state_38527__$1 = (function (){var statearr_38529 = state_38527;
(statearr_38529[(7)] = inst_38476__$1);

return statearr_38529;
})();
if(inst_38479){
var statearr_38530_38573 = state_38527__$1;
(statearr_38530_38573[(1)] = (8));

} else {
var statearr_38531_38574 = state_38527__$1;
(statearr_38531_38574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (20))){
var state_38527__$1 = state_38527;
var statearr_38532_38575 = state_38527__$1;
(statearr_38532_38575[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_38532_38575[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (1))){
var inst_38463 = filenames;
var state_38527__$1 = (function (){var statearr_38533 = state_38527;
(statearr_38533[(8)] = inst_38463);

return statearr_38533;
})();
var statearr_38534_38576 = state_38527__$1;
(statearr_38534_38576[(2)] = null);

(statearr_38534_38576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (24))){
var inst_38521 = src_cb.call(null,null);
var state_38527__$1 = state_38527;
var statearr_38535_38577 = state_38527__$1;
(statearr_38535_38577[(2)] = inst_38521);

(statearr_38535_38577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (4))){
var inst_38468 = (state_38527[(9)]);
var inst_38463 = (state_38527[(8)]);
var inst_38468__$1 = cljs.core.first.call(null,inst_38463);
var inst_38469 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_38470 = klipse.lang.clojure.io.filename_of.call(null,inst_38468__$1,inst_38469);
var inst_38471 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_38472 = [false];
var inst_38473 = cljs.core.PersistentHashMap.fromArrays(inst_38471,inst_38472);
var inst_38474 = cljs_http.client.get.call(null,inst_38470,inst_38473);
var state_38527__$1 = (function (){var statearr_38536 = state_38527;
(statearr_38536[(9)] = inst_38468__$1);

return statearr_38536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38527__$1,(7),inst_38474);
} else {
if((state_val_38528 === (15))){
var inst_38476 = (state_38527[(7)]);
var state_38527__$1 = state_38527;
var statearr_38537_38578 = state_38527__$1;
(statearr_38537_38578[(2)] = inst_38476);

(statearr_38537_38578[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (21))){
var state_38527__$1 = state_38527;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_38538_38579 = state_38527__$1;
(statearr_38538_38579[(1)] = (23));

} else {
var statearr_38539_38580 = state_38527__$1;
(statearr_38539_38580[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (13))){
var inst_38489 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
var statearr_38540_38581 = state_38527__$1;
(statearr_38540_38581[(2)] = inst_38489);

(statearr_38540_38581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (22))){
var inst_38525 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38527__$1,inst_38525);
} else {
if((state_val_38528 === (6))){
var inst_38514 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
var statearr_38541_38582 = state_38527__$1;
(statearr_38541_38582[(2)] = inst_38514);

(statearr_38541_38582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (25))){
var inst_38523 = (state_38527[(2)]);
var state_38527__$1 = (function (){var statearr_38542 = state_38527;
(statearr_38542[(10)] = inst_38523);

return statearr_38542;
})();
var statearr_38543_38583 = state_38527__$1;
(statearr_38543_38583[(2)] = false);

(statearr_38543_38583[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (17))){
var inst_38468 = (state_38527[(9)]);
var inst_38499 = (state_38527[(11)]);
var inst_38502 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_38503 = transform.call(null,inst_38499);
var inst_38504 = [lang,inst_38503,inst_38468];
var inst_38505 = cljs.core.PersistentHashMap.fromArrays(inst_38502,inst_38504);
var inst_38506 = src_cb.call(null,inst_38505);
var state_38527__$1 = (function (){var statearr_38544 = state_38527;
(statearr_38544[(12)] = inst_38506);

return statearr_38544;
})();
var statearr_38545_38584 = state_38527__$1;
(statearr_38545_38584[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_38545_38584[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (3))){
var inst_38516 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
if(cljs.core.truth_(inst_38516)){
var statearr_38546_38585 = state_38527__$1;
(statearr_38546_38585[(1)] = (20));

} else {
var statearr_38547_38586 = state_38527__$1;
(statearr_38547_38586[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (12))){
var state_38527__$1 = state_38527;
var statearr_38548_38587 = state_38527__$1;
(statearr_38548_38587[(2)] = false);

(statearr_38548_38587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (2))){
var inst_38463 = (state_38527[(8)]);
var inst_38465 = cljs.core.seq.call(null,inst_38463);
var state_38527__$1 = state_38527;
if(inst_38465){
var statearr_38549_38588 = state_38527__$1;
(statearr_38549_38588[(1)] = (4));

} else {
var statearr_38550_38589 = state_38527__$1;
(statearr_38550_38589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (23))){
var state_38527__$1 = state_38527;
var statearr_38551_38590 = state_38527__$1;
(statearr_38551_38590[(2)] = null);

(statearr_38551_38590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (19))){
var inst_38511 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
var statearr_38552_38591 = state_38527__$1;
(statearr_38552_38591[(2)] = inst_38511);

(statearr_38552_38591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (11))){
var state_38527__$1 = state_38527;
var statearr_38553_38592 = state_38527__$1;
(statearr_38553_38592[(2)] = true);

(statearr_38553_38592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (9))){
var state_38527__$1 = state_38527;
var statearr_38554_38593 = state_38527__$1;
(statearr_38554_38593[(2)] = false);

(statearr_38554_38593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (5))){
var state_38527__$1 = state_38527;
var statearr_38555_38594 = state_38527__$1;
(statearr_38555_38594[(2)] = null);

(statearr_38555_38594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (14))){
var inst_38476 = (state_38527[(7)]);
var inst_38494 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38476);
var state_38527__$1 = state_38527;
var statearr_38556_38595 = state_38527__$1;
(statearr_38556_38595[(2)] = inst_38494);

(statearr_38556_38595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (16))){
var inst_38497 = (state_38527[(2)]);
var inst_38498 = cljs.core.get.call(null,inst_38497,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_38499 = cljs.core.get.call(null,inst_38497,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_38500 = cljs.core._EQ_.call(null,(200),inst_38498);
var state_38527__$1 = (function (){var statearr_38557 = state_38527;
(statearr_38557[(11)] = inst_38499);

return statearr_38557;
})();
if(inst_38500){
var statearr_38558_38596 = state_38527__$1;
(statearr_38558_38596[(1)] = (17));

} else {
var statearr_38559_38597 = state_38527__$1;
(statearr_38559_38597[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (10))){
var inst_38492 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
if(cljs.core.truth_(inst_38492)){
var statearr_38560_38598 = state_38527__$1;
(statearr_38560_38598[(1)] = (14));

} else {
var statearr_38561_38599 = state_38527__$1;
(statearr_38561_38599[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (18))){
var inst_38463 = (state_38527[(8)]);
var inst_38508 = cljs.core.rest.call(null,inst_38463);
var inst_38463__$1 = inst_38508;
var state_38527__$1 = (function (){var statearr_38562 = state_38527;
(statearr_38562[(8)] = inst_38463__$1);

return statearr_38562;
})();
var statearr_38563_38600 = state_38527__$1;
(statearr_38563_38600[(2)] = null);

(statearr_38563_38600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (8))){
var inst_38476 = (state_38527[(7)]);
var inst_38481 = inst_38476.cljs$lang$protocol_mask$partition0$;
var inst_38482 = (inst_38481 & (64));
var inst_38483 = inst_38476.cljs$core$ISeq$;
var inst_38484 = (cljs.core.PROTOCOL_SENTINEL === inst_38483);
var inst_38485 = (inst_38482) || (inst_38484);
var state_38527__$1 = state_38527;
if(cljs.core.truth_(inst_38485)){
var statearr_38564_38601 = state_38527__$1;
(statearr_38564_38601[(1)] = (11));

} else {
var statearr_38565_38602 = state_38527__$1;
(statearr_38565_38602[(1)] = (12));

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
}
}
});})(c__24600__auto__,map__38461,map__38461__$1,transform,can_recover_QMARK_))
;
return ((function (switch__24510__auto__,c__24600__auto__,map__38461,map__38461__$1,transform,can_recover_QMARK_){
return (function() {
var klipse$lang$clojure$io$state_machine__24511__auto__ = null;
var klipse$lang$clojure$io$state_machine__24511__auto____0 = (function (){
var statearr_38566 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38566[(0)] = klipse$lang$clojure$io$state_machine__24511__auto__);

(statearr_38566[(1)] = (1));

return statearr_38566;
});
var klipse$lang$clojure$io$state_machine__24511__auto____1 = (function (state_38527){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38567){if((e38567 instanceof Object)){
var ex__24514__auto__ = e38567;
var statearr_38568_38603 = state_38527;
(statearr_38568_38603[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38604 = state_38527;
state_38527 = G__38604;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__24511__auto__ = function(state_38527){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__24511__auto____1.call(this,state_38527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__24511__auto____0;
klipse$lang$clojure$io$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__24511__auto____1;
return klipse$lang$clojure$io$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,map__38461,map__38461__$1,transform,can_recover_QMARK_))
})();
var state__24602__auto__ = (function (){var statearr_38569 = f__24601__auto__.call(null);
(statearr_38569[(6)] = c__24600__auto__);

return statearr_38569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,map__38461,map__38461__$1,transform,can_recover_QMARK_))
);

return c__24600__auto__;
});

klipse.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

klipse.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq38455){
var G__38456 = cljs.core.first.call(null,seq38455);
var seq38455__$1 = cljs.core.next.call(null,seq38455);
var G__38457 = cljs.core.first.call(null,seq38455__$1);
var seq38455__$2 = cljs.core.next.call(null,seq38455__$1);
var G__38458 = cljs.core.first.call(null,seq38455__$2);
var seq38455__$3 = cljs.core.next.call(null,seq38455__$2);
var G__38459 = cljs.core.first.call(null,seq38455__$3);
var seq38455__$4 = cljs.core.next.call(null,seq38455__$3);
return klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic(G__38456,G__38457,G__38458,G__38459,seq38455__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse.lang.clojure.io.external_libs_files = (function klipse$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__9798__auto__ = (function klipse$lang$clojure$io$external_libs_files_$_iter__38605(s__38606){
return (new cljs.core.LazySeq(null,(function (){
var s__38606__$1 = s__38606;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38606__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var lib = cljs.core.first.call(null,xs__6012__auto__);
var iterys__9794__auto__ = ((function (s__38606__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function klipse$lang$clojure$io$external_libs_files_$_iter__38605_$_iter__38607(s__38608){
return (new cljs.core.LazySeq(null,((function (s__38606__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__38608__$1 = s__38608;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__38608__$1);
if(temp__5457__auto____$1){
var s__38608__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38608__$2)){
var c__9796__auto__ = cljs.core.chunk_first.call(null,s__38608__$2);
var size__9797__auto__ = cljs.core.count.call(null,c__9796__auto__);
var b__38610 = cljs.core.chunk_buffer.call(null,size__9797__auto__);
if((function (){var i__38609 = (0);
while(true){
if((i__38609 < size__9797__auto__)){
var suffix = cljs.core._nth.call(null,c__9796__auto__,i__38609);
cljs.core.chunk_append.call(null,b__38610,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__38611 = (i__38609 + (1));
i__38609 = G__38611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38610),klipse$lang$clojure$io$external_libs_files_$_iter__38605_$_iter__38607.call(null,cljs.core.chunk_rest.call(null,s__38608__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38610),null);
}
} else {
var suffix = cljs.core.first.call(null,s__38608__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse$lang$clojure$io$external_libs_files_$_iter__38605_$_iter__38607.call(null,cljs.core.rest.call(null,s__38608__$2)));
}
} else {
return null;
}
break;
}
});})(s__38606__$1,lib,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__38606__$1,lib,xs__6012__auto__,temp__5457__auto__))
;
var fs__9795__auto__ = cljs.core.seq.call(null,iterys__9794__auto__.call(null,suffixes));
if(fs__9795__auto__){
return cljs.core.concat.call(null,fs__9795__auto__,klipse$lang$clojure$io$external_libs_files_$_iter__38605.call(null,cljs.core.rest.call(null,s__38606__$1)));
} else {
var G__38612 = cljs.core.rest.call(null,s__38606__$1);
s__38606__$1 = G__38612;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9798__auto__.call(null,external_libs);
});
klipse.lang.clojure.io.name__GT_cached_resource = (function klipse$lang$clojure$io$name__GT_cached_resource(name){
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name))].join(''),/\./,"_SLASH_");
});
klipse.lang.clojure.io.cached_ns_root = (function klipse$lang$clojure$io$cached_ns_root(){
return new cljs.core.Keyword(null,"cached_ns_root","cached_ns_root",-1077014575).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),"https://viebel.github.io/klipse/cache-cljs/");
});
klipse.lang.clojure.io.load_ns_from_cache = (function klipse$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns-from-cache:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"macro: ",macro_QMARK_);
} else {
}

var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_38659){
var state_val_38660 = (state_38659[(1)]);
if((state_val_38660 === (1))){
var inst_38614 = klipse.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_38659__$1 = (function (){var statearr_38661 = state_38659;
(statearr_38661[(7)] = inst_38614);

return statearr_38661;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_38662_38677 = state_38659__$1;
(statearr_38662_38677[(1)] = (2));

} else {
var statearr_38663_38678 = state_38659__$1;
(statearr_38663_38678[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (2))){
var state_38659__$1 = state_38659;
var statearr_38664_38679 = state_38659__$1;
(statearr_38664_38679[(2)] = "$macros");

(statearr_38664_38679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (3))){
var state_38659__$1 = state_38659;
var statearr_38665_38680 = state_38659__$1;
(statearr_38665_38680[(2)] = "");

(statearr_38665_38680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (4))){
var inst_38618 = (state_38659[(8)]);
var inst_38614 = (state_38659[(7)]);
var inst_38621 = (state_38659[(9)]);
var inst_38620 = (state_38659[(10)]);
var inst_38618__$1 = (state_38659[(2)]);
var inst_38619 = klipse.lang.clojure.io.cached_ns_root.call(null);
var inst_38620__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38619),"/"].join('');
var inst_38621__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38620__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38614),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38618__$1),".js"].join('');
var inst_38622 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38620__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38614),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38618__$1),".cache.json"].join('');
var inst_38623 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_38624 = klipse.lang.clojure.io.filename_of.call(null,inst_38621__$1,inst_38623);
var inst_38625 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_38626 = [false];
var inst_38627 = cljs.core.PersistentHashMap.fromArrays(inst_38625,inst_38626);
var inst_38628 = cljs_http.client.get.call(null,inst_38624,inst_38627);
var state_38659__$1 = (function (){var statearr_38666 = state_38659;
(statearr_38666[(8)] = inst_38618__$1);

(statearr_38666[(11)] = inst_38622);

(statearr_38666[(9)] = inst_38621__$1);

(statearr_38666[(10)] = inst_38620__$1);

return statearr_38666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38659__$1,(5),inst_38628);
} else {
if((state_val_38660 === (5))){
var inst_38622 = (state_38659[(11)]);
var inst_38630 = (state_38659[(2)]);
var inst_38631 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_38632 = klipse.lang.clojure.io.filename_of.call(null,inst_38622,inst_38631);
var inst_38633 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_38634 = [false];
var inst_38635 = cljs.core.PersistentHashMap.fromArrays(inst_38633,inst_38634);
var inst_38636 = cljs_http.client.get.call(null,inst_38632,inst_38635);
var state_38659__$1 = (function (){var statearr_38667 = state_38659;
(statearr_38667[(12)] = inst_38630);

return statearr_38667;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38659__$1,(6),inst_38636);
} else {
if((state_val_38660 === (6))){
var inst_38618 = (state_38659[(8)]);
var inst_38630 = (state_38659[(12)]);
var inst_38614 = (state_38659[(7)]);
var inst_38622 = (state_38659[(11)]);
var inst_38638 = (state_38659[(13)]);
var inst_38621 = (state_38659[(9)]);
var inst_38620 = (state_38659[(10)]);
var inst_38638__$1 = (state_38659[(2)]);
var inst_38639 = (function (){var nn = inst_38614;
var suffix = inst_38618;
var root = inst_38620;
var src_filename = inst_38621;
var cache_filename = inst_38622;
var src = inst_38630;
var cache = inst_38638__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_38618,inst_38630,inst_38614,inst_38622,inst_38638,inst_38621,inst_38620,inst_38638__$1,state_val_38660,c__24600__auto__){
return (function (p1__38613_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__38613_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_38618,inst_38630,inst_38614,inst_38622,inst_38638,inst_38621,inst_38620,inst_38638__$1,state_val_38660,c__24600__auto__))
})();
var inst_38640 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38641 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_38638__$1);
var inst_38642 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_38630);
var inst_38643 = [inst_38641,inst_38642];
var inst_38644 = (new cljs.core.PersistentVector(null,2,(5),inst_38640,inst_38643,null));
var inst_38645 = cljs.core.every_QMARK_.call(null,inst_38639,inst_38644);
var state_38659__$1 = (function (){var statearr_38668 = state_38659;
(statearr_38668[(13)] = inst_38638__$1);

return statearr_38668;
})();
if(inst_38645){
var statearr_38669_38681 = state_38659__$1;
(statearr_38669_38681[(1)] = (7));

} else {
var statearr_38670_38682 = state_38659__$1;
(statearr_38670_38682[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (7))){
var inst_38630 = (state_38659[(12)]);
var inst_38638 = (state_38659[(13)]);
var inst_38647 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_38648 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38638);
var inst_38649 = klipse.lang.clojure.io.edn.call(null,inst_38648);
var inst_38650 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38630);
var inst_38651 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_38649,inst_38650];
var inst_38652 = cljs.core.PersistentHashMap.fromArrays(inst_38647,inst_38651);
var inst_38653 = src_cb.call(null,inst_38652);
var state_38659__$1 = state_38659;
var statearr_38671_38683 = state_38659__$1;
(statearr_38671_38683[(2)] = inst_38653);

(statearr_38671_38683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (8))){
var inst_38655 = src_cb.call(null,null);
var state_38659__$1 = state_38659;
var statearr_38672_38684 = state_38659__$1;
(statearr_38672_38684[(2)] = inst_38655);

(statearr_38672_38684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (9))){
var inst_38657 = (state_38659[(2)]);
var state_38659__$1 = state_38659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38659__$1,inst_38657);
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
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto__ = null;
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto____0 = (function (){
var statearr_38673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38673[(0)] = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto__);

(statearr_38673[(1)] = (1));

return statearr_38673;
});
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto____1 = (function (state_38659){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38674){if((e38674 instanceof Object)){
var ex__24514__auto__ = e38674;
var statearr_38675_38685 = state_38659;
(statearr_38675_38685[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38686 = state_38659;
state_38659 = G__38686;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto__ = function(state_38659){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto____1.call(this,state_38659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto____0;
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto____1;
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_38676 = f__24601__auto__.call(null);
(statearr_38676[(6)] = c__24600__auto__);

return statearr_38676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.lang.clojure.io.cached_macro_ns_regexp = (function klipse$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),/cljs\.reader|cljs\.core\.[async|match].*|clojure\.math\.macros|gadjett\.core|cljs\.test|clojure.test.check.*|reagent\..*|om\..*|cljs\.spec.*|cljs-time\..*|re-frame\..*|net\.cgrand\.macrovich|reagent-forms\..*|ajax\.macros|poppea/);
});
klipse.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse.lang.clojure.io.cached_macro_ns_regexp.call(null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
klipse.lang.clojure.io.cached_ns_regexp = (function klipse$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),/cljs\.stacktrace|cljs\.core\.[async|match].*|cljs\.spec.*|clojure.math\.combinatorics|clojure.test.check.*|reagent\..*|om\..*|clojure\.data|cljs-time\..*|re-frame\..*|day8\.re-frame\..*|reagent-forms\..*|re-frisk\..*|re-frisk-shell\..*|datafrisk\..*|ajax\..*|cljs\.tools\.reader\..*/);
});
klipse.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse.lang.clojure.io.cached_ns_regexp.call(null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__38687,src_cb_original){
var map__38688 = p__38687;
var map__38688__$1 = ((((!((map__38688 == null)))?((((map__38688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38688):map__38688);
var name = cljs.core.get.call(null,map__38688__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__38688__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",723719092,null)))?src_cb_original:((function (map__38688,map__38688__$1,name,path){
return (function() { 
var G__38690__delegate = function (args){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("src-cb: patch cljs.spec.test/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse.lang.clojure.include.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",-804885435,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__38690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38691__i = 0, G__38691__a = new Array(arguments.length -  0);
while (G__38691__i < G__38691__a.length) {G__38691__a[G__38691__i] = arguments[G__38691__i + 0]; ++G__38691__i;}
  args = new cljs.core.IndexedSeq(G__38691__a,0,null);
} 
return G__38690__delegate.call(this,args);};
G__38690.cljs$lang$maxFixedArity = 0;
G__38690.cljs$lang$applyTo = (function (arglist__38692){
var args = cljs.core.seq(arglist__38692);
return G__38690__delegate(args);
});
G__38690.cljs$core$IFn$_invoke$arity$variadic = G__38690__delegate;
return G__38690;
})()
;})(map__38688,map__38688__$1,name,path))
);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro :",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

if(cljs.core.truth_(klipse.lang.clojure.io.skip_ns_macros.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro skipping:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.cached_macro_ns_QMARK_.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro cached:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return klipse.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,true);
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.the_ns_map.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro known:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse.lang.clojure.io.macro_suffixes);
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
} else {
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro external-libs:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var filenames = klipse.lang.clojure.io.external_libs_files.call(null,external_libs,klipse.lang.clojure.io.macro_suffixes,path);
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}
}
}));
klipse.lang.clojure.io.cache_url = "https://storage.googleapis.com/app.klipse.tech/fig/js/";
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__38694,src_cb){
var map__38695 = p__38694;
var map__38695__$1 = ((((!((map__38695 == null)))?((((map__38695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38695):map__38695);
var path = cljs.core.get.call(null,map__38695__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__38695,map__38695__$1,path){
return (function (p1__38693_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38693_SHARP_)].join('');
});})(path__$1,map__38695,map__38695__$1,path))
,klipse.lang.clojure.io.cljs_suffixes);
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}));
klipse.lang.clojure.io.bundled_ns_ignore_regexp = (function klipse$lang$clojure$io$bundled_ns_ignore_regexp(){
return new cljs.core.Keyword(null,"clojure_bundled_ns_ignore_regexp","clojure_bundled_ns_ignore_regexp",-1479622333).cljs$core$IFn$_invoke$arity$1(klipse.utils.klipse_settings.call(null));
});
klipse.lang.clojure.io.custom_bundled_ns_ignore_QMARK_ = (function klipse$lang$clojure$io$custom_bundled_ns_ignore_QMARK_(name){
var temp__5457__auto__ = klipse.lang.clojure.io.bundled_ns_ignore_regexp.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var regexp = temp__5457__auto__;
return cljs.core.re_matches.call(null,regexp,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
return null;
}
});
klipse.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_ = (function klipse$lang$clojure$io$buggy_bundled_ns_ignore_QMARK_(name){
return cljs.core.re_matches.call(null,/.*reagent.*|cljs.core.async.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
/**
 * Checks whether a namespace is present at run-time
 */
klipse.lang.clojure.io.bundled_ns_QMARK_ = (function klipse$lang$clojure$io$bundled_ns_QMARK_(name){
if(cljs.core.truth_((function (){var or__8916__auto__ = klipse.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return klipse.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name))].join(''));
}
});
klipse.lang.clojure.io.cljsjs_QMARK_ = (function klipse$lang$clojure$io$cljsjs_QMARK_(name){
return cljs.core.re_matches.call(null,/cljsjs\..*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
klipse.lang.clojure.io.cljsjs_libname = (function klipse$lang$clojure$io$cljsjs_libname(name){
var $ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var $__$1 = cljs.core.re_matches.call(null,/cljsjs\.(.*)/,$);
var $__$2 = cljs.core.second.call(null,$__$1);
return clojure.string.replace.call(null,$__$2,/\./,"-");
});
/**
 * some cljsjs packages are already loaded e.g react in klipse app
 */
klipse.lang.clojure.io.bundled_cljsjs_ns_QMARK_ = (function klipse$lang$clojure$io$bundled_cljsjs_ns_QMARK_(name){
var or__8916__auto__ = (function (){var and__8904__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__8904__auto__){
return (window["React"]);
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = (function (){var and__8904__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__8904__auto__){
return (window["ReactDOMServer"]);
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
var and__8904__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__8904__auto__){
return (window["ReactDOM"]);
} else {
return and__8904__auto__;
}
}
}
});
/**
 * Try to load the js file corresponding to a cljsjs package.
 *   For that, we have to convert the package name into a full path - hosted on this git repo: https://github.com/viebel/cljsjs-hosted
 *   
 */
klipse.lang.clojure.io.try_to_load_cljsjs_ns = (function klipse$lang$clojure$io$try_to_load_cljsjs_ns(name,src_cb){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.log("load-ns :cljs try-to-load-cljsjs-ns",name);
} else {
}

if(cljs.core.truth_(klipse.lang.clojure.io.bundled_cljsjs_ns_QMARK_.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns bundled-cljsjs-ns",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var root_path = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null),null,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null),null,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null),null], null), null).call(null,name))?"https://viebel.github.io/cljsjs-hosted/cljsjs-klipse-only/":"https://viebel.github.io/cljsjs-hosted/cljsjs/");
var lib_name = klipse.lang.clojure.io.cljsjs_libname.call(null,name);
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join('')], null);
return klipse.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__38698,src_cb){
var map__38699 = p__38698;
var map__38699__$1 = ((((!((map__38699 == null)))?((((map__38699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38699):map__38699);
var name = cljs.core.get.call(null,map__38699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__38699__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs :",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"external-libs: ",external_libs);
} else {
}

if(cljs.core.truth_(klipse.lang.clojure.io.skip_ns_cljs.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs skipping",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.bundled_ns_QMARK_.call(null,name))){
var _ = (cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))?console.log("load-ns :cljs bundled",name):null);
var filenames = cljs.core.map.call(null,((function (_,map__38699,map__38699__$1,name,path){
return (function (p1__38697_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.clojure.io.cache_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38697_SHARP_),".cache.json"].join('');
});})(_,map__38699,map__38699__$1,name,path))
,klipse.lang.clojure.io.cljs_suffixes);
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,_,filenames,map__38699,map__38699__$1,name,path){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,_,filenames,map__38699,map__38699__$1,name,path){
return (function (state_38713){
var state_val_38714 = (state_38713[(1)]);
if((state_val_38714 === (1))){
var inst_38701 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_38713__$1 = state_38713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38713__$1,(2),inst_38701);
} else {
if((state_val_38714 === (2))){
var inst_38703 = (state_38713[(2)]);
var state_38713__$1 = state_38713;
if(cljs.core.truth_(inst_38703)){
var statearr_38715_38766 = state_38713__$1;
(statearr_38715_38766[(1)] = (3));

} else {
var statearr_38716_38767 = state_38713__$1;
(statearr_38716_38767[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38714 === (3))){
var state_38713__$1 = state_38713;
var statearr_38717_38768 = state_38713__$1;
(statearr_38717_38768[(2)] = null);

(statearr_38717_38768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38714 === (4))){
var inst_38706 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_38707 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_38708 = cljs.core.PersistentHashMap.fromArrays(inst_38706,inst_38707);
var inst_38709 = src_cb.call(null,inst_38708);
var state_38713__$1 = state_38713;
var statearr_38718_38769 = state_38713__$1;
(statearr_38718_38769[(2)] = inst_38709);

(statearr_38718_38769[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38714 === (5))){
var inst_38711 = (state_38713[(2)]);
var state_38713__$1 = state_38713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38713__$1,inst_38711);
} else {
return null;
}
}
}
}
}
});})(c__24600__auto__,_,filenames,map__38699,map__38699__$1,name,path))
;
return ((function (switch__24510__auto__,c__24600__auto__,_,filenames,map__38699,map__38699__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__24511__auto__ = null;
var klipse$lang$clojure$io$state_machine__24511__auto____0 = (function (){
var statearr_38719 = [null,null,null,null,null,null,null];
(statearr_38719[(0)] = klipse$lang$clojure$io$state_machine__24511__auto__);

(statearr_38719[(1)] = (1));

return statearr_38719;
});
var klipse$lang$clojure$io$state_machine__24511__auto____1 = (function (state_38713){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38720){if((e38720 instanceof Object)){
var ex__24514__auto__ = e38720;
var statearr_38721_38770 = state_38713;
(statearr_38721_38770[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38771 = state_38713;
state_38713 = G__38771;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__24511__auto__ = function(state_38713){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__24511__auto____1.call(this,state_38713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__24511__auto____0;
klipse$lang$clojure$io$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__24511__auto____1;
return klipse$lang$clojure$io$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,_,filenames,map__38699,map__38699__$1,name,path))
})();
var state__24602__auto__ = (function (){var statearr_38722 = f__24601__auto__.call(null);
(statearr_38722[(6)] = c__24600__auto__);

return statearr_38722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,_,filenames,map__38699,map__38699__$1,name,path))
);

return c__24600__auto__;
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.cached_cljs_ns_QMARK_.call(null,name))){
return klipse.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,false);
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.cljsjs_QMARK_.call(null,name))){
return klipse.lang.clojure.io.try_to_load_cljsjs_ns.call(null,name,src_cb);
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.the_ns_map.call(null,name))){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse.lang.clojure.io.cljs_suffixes);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs from external libs",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,prefix,filenames,map__38699,map__38699__$1,name,path){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,prefix,filenames,map__38699,map__38699__$1,name,path){
return (function (state_38733){
var state_val_38734 = (state_38733[(1)]);
if((state_val_38734 === (1))){
var inst_38723 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_38733__$1 = state_38733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38733__$1,(2),inst_38723);
} else {
if((state_val_38734 === (2))){
var inst_38725 = (state_38733[(2)]);
var state_38733__$1 = state_38733;
if(cljs.core.truth_(inst_38725)){
var statearr_38735_38772 = state_38733__$1;
(statearr_38735_38772[(1)] = (3));

} else {
var statearr_38736_38773 = state_38733__$1;
(statearr_38736_38773[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38734 === (3))){
var state_38733__$1 = state_38733;
var statearr_38737_38774 = state_38733__$1;
(statearr_38737_38774[(2)] = null);

(statearr_38737_38774[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38734 === (4))){
var inst_38728 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".js"].join('');
var inst_38729 = klipse.lang.clojure.io.try_to_load_ns.call(null,inst_38728,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_38733__$1 = state_38733;
var statearr_38738_38775 = state_38733__$1;
(statearr_38738_38775[(2)] = inst_38729);

(statearr_38738_38775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38734 === (5))){
var inst_38731 = (state_38733[(2)]);
var state_38733__$1 = state_38733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38733__$1,inst_38731);
} else {
return null;
}
}
}
}
}
});})(c__24600__auto__,prefix,filenames,map__38699,map__38699__$1,name,path))
;
return ((function (switch__24510__auto__,c__24600__auto__,prefix,filenames,map__38699,map__38699__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__24511__auto__ = null;
var klipse$lang$clojure$io$state_machine__24511__auto____0 = (function (){
var statearr_38739 = [null,null,null,null,null,null,null];
(statearr_38739[(0)] = klipse$lang$clojure$io$state_machine__24511__auto__);

(statearr_38739[(1)] = (1));

return statearr_38739;
});
var klipse$lang$clojure$io$state_machine__24511__auto____1 = (function (state_38733){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38740){if((e38740 instanceof Object)){
var ex__24514__auto__ = e38740;
var statearr_38741_38776 = state_38733;
(statearr_38741_38776[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38777 = state_38733;
state_38733 = G__38777;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__24511__auto__ = function(state_38733){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__24511__auto____1.call(this,state_38733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__24511__auto____0;
klipse$lang$clojure$io$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__24511__auto____1;
return klipse$lang$clojure$io$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,prefix,filenames,map__38699,map__38699__$1,name,path))
})();
var state__24602__auto__ = (function (){var statearr_38742 = f__24601__auto__.call(null);
(statearr_38742[(6)] = c__24600__auto__);

return statearr_38742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,prefix,filenames,map__38699,map__38699__$1,name,path))
);

return c__24600__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse.lang.clojure.io.external_libs_files.call(null,external_libs,klipse.lang.clojure.io.cljs_suffixes,path);
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,filenames,map__38699,map__38699__$1,name,path){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,filenames,map__38699,map__38699__$1,name,path){
return (function (state_38756){
var state_val_38757 = (state_38756[(1)]);
if((state_val_38757 === (1))){
var inst_38743 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_38756__$1 = state_38756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38756__$1,(2),inst_38743);
} else {
if((state_val_38757 === (2))){
var inst_38745 = (state_38756[(2)]);
var state_38756__$1 = state_38756;
if(cljs.core.truth_(inst_38745)){
var statearr_38758_38778 = state_38756__$1;
(statearr_38758_38778[(1)] = (3));

} else {
var statearr_38759_38779 = state_38756__$1;
(statearr_38759_38779[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38757 === (3))){
var state_38756__$1 = state_38756;
var statearr_38760_38780 = state_38756__$1;
(statearr_38760_38780[(2)] = null);

(statearr_38760_38780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38757 === (4))){
var inst_38748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38749 = [".js"];
var inst_38750 = (new cljs.core.PersistentVector(null,1,(5),inst_38748,inst_38749,null));
var inst_38751 = klipse.lang.clojure.io.external_libs_files.call(null,external_libs,inst_38750,path);
var inst_38752 = klipse.lang.clojure.io.try_to_load_ns.call(null,inst_38751,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_38756__$1 = state_38756;
var statearr_38761_38781 = state_38756__$1;
(statearr_38761_38781[(2)] = inst_38752);

(statearr_38761_38781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38757 === (5))){
var inst_38754 = (state_38756[(2)]);
var state_38756__$1 = state_38756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38756__$1,inst_38754);
} else {
return null;
}
}
}
}
}
});})(c__24600__auto__,filenames,map__38699,map__38699__$1,name,path))
;
return ((function (switch__24510__auto__,c__24600__auto__,filenames,map__38699,map__38699__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__24511__auto__ = null;
var klipse$lang$clojure$io$state_machine__24511__auto____0 = (function (){
var statearr_38762 = [null,null,null,null,null,null,null];
(statearr_38762[(0)] = klipse$lang$clojure$io$state_machine__24511__auto__);

(statearr_38762[(1)] = (1));

return statearr_38762;
});
var klipse$lang$clojure$io$state_machine__24511__auto____1 = (function (state_38756){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_38756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e38763){if((e38763 instanceof Object)){
var ex__24514__auto__ = e38763;
var statearr_38764_38782 = state_38756;
(statearr_38764_38782[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38783 = state_38756;
state_38756 = G__38783;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__24511__auto__ = function(state_38756){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__24511__auto____1.call(this,state_38756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__24511__auto____0;
klipse$lang$clojure$io$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__24511__auto____1;
return klipse$lang$clojure$io$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,filenames,map__38699,map__38699__$1,name,path))
})();
var state__24602__auto__ = (function (){var statearr_38765 = f__24601__auto__.call(null);
(statearr_38765[(6)] = c__24600__auto__);

return statearr_38765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,filenames,map__38699,map__38699__$1,name,path))
);

return c__24600__auto__;
} else {
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs nothing can be done",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,null);

}
}
}
}
}
}
}));
klipse.lang.clojure.io.fix_goog_path = (function klipse$lang$clojure$io$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
klipse.lang.clojure.io.simple_goog_path = (function klipse$lang$clojure$io$simple_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var butlast_parts = cljs.core.butlast.call(null,parts);
var new_parts = cljs.core.concat.call(null,butlast_parts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,butlast_parts)], null));
return clojure.string.join.call(null,"/",new_parts);
});
klipse.lang.clojure.io.another_goog_path = (function klipse$lang$clojure$io$another_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,"",cljs.core.take_last.call(null,(2),parts))], null));
return clojure.string.join.call(null,"/",new_parts);
});
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__38785,src_cb){
var map__38786 = p__38785;
var map__38786__$1 = ((((!((map__38786 == null)))?((((map__38786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38786):map__38786);
var name = cljs.core.get.call(null,map__38786__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__38786__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__38786,map__38786__$1,name,path){
return (function (p1__38784_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(closure_github_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38784_SHARP_),".js"].join('');
});})(closure_github_path,map__38786,map__38786__$1,name,path))
,cljs.core.juxt.call(null,klipse.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse.lang.clojure.io.another_goog_path,klipse.lang.clojure.io.simple_goog_path).call(null,path));
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
