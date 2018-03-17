// Compiled by ClojureScript 1.10.145 {}
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
klipse.lang.clojure.io.load_ns = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.lang.clojure.io","load-ns"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (_,p__16127,src_cb){
var map__16128 = p__16127;
var map__16128__$1 = ((((!((map__16128 == null)))?(((((map__16128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16128):map__16128);
var name = cljs.core.get.call(null,map__16128__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__16128__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__16128__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
klipse.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
klipse.lang.clojure.io.the_ns_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/",new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),"https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"], null);
klipse.lang.clojure.io.skip_ns_cljs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.tools.reader","cljs.tools.reader",-831293977,null),null,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null], null), null);
klipse.lang.clojure.io.cache_buster_QMARK_ = (function klipse$lang$clojure$io$cache_buster_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"cache-buster","cache-buster",-1567170482).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var args__4500__auto__ = [];
var len__4497__auto___16245 = arguments.length;
var i__4498__auto___16246 = (0);
while(true){
if((i__4498__auto___16246 < len__4497__auto___16245)){
args__4500__auto__.push((arguments[i__4498__auto___16246]));

var G__16247 = (i__4498__auto___16246 + (1));
i__4498__auto___16246 = G__16247;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((4) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((4)),(0),null)):null);
return klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4501__auto__);
});

klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__16135){
var map__16136 = p__16135;
var map__16136__$1 = ((((!((map__16136 == null)))?(((((map__16136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16136):map__16136);
var transform = cljs.core.get.call(null,map__16136__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__16136__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,map__16136,map__16136__$1,transform,can_recover_QMARK_){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,map__16136,map__16136__$1,transform,can_recover_QMARK_){
return (function (state_16202){
var state_val_16203 = (state_16202[(1)]);
if((state_val_16203 === (7))){
var inst_16151 = (state_16202[(7)]);
var inst_16151__$1 = (state_16202[(2)]);
var inst_16153 = (inst_16151__$1 == null);
var inst_16154 = cljs.core.not.call(null,inst_16153);
var state_16202__$1 = (function (){var statearr_16204 = state_16202;
(statearr_16204[(7)] = inst_16151__$1);

return statearr_16204;
})();
if(inst_16154){
var statearr_16205_16248 = state_16202__$1;
(statearr_16205_16248[(1)] = (8));

} else {
var statearr_16206_16249 = state_16202__$1;
(statearr_16206_16249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (20))){
var state_16202__$1 = state_16202;
var statearr_16207_16250 = state_16202__$1;
(statearr_16207_16250[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_16207_16250[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (1))){
var inst_16138 = filenames;
var state_16202__$1 = (function (){var statearr_16208 = state_16202;
(statearr_16208[(8)] = inst_16138);

return statearr_16208;
})();
var statearr_16209_16251 = state_16202__$1;
(statearr_16209_16251[(2)] = null);

(statearr_16209_16251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (24))){
var inst_16196 = src_cb.call(null,null);
var state_16202__$1 = state_16202;
var statearr_16210_16252 = state_16202__$1;
(statearr_16210_16252[(2)] = inst_16196);

(statearr_16210_16252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (4))){
var inst_16138 = (state_16202[(8)]);
var inst_16143 = (state_16202[(9)]);
var inst_16143__$1 = cljs.core.first.call(null,inst_16138);
var inst_16144 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_16145 = klipse.lang.clojure.io.filename_of.call(null,inst_16143__$1,inst_16144);
var inst_16146 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_16147 = [false];
var inst_16148 = cljs.core.PersistentHashMap.fromArrays(inst_16146,inst_16147);
var inst_16149 = cljs_http.client.get.call(null,inst_16145,inst_16148);
var state_16202__$1 = (function (){var statearr_16211 = state_16202;
(statearr_16211[(9)] = inst_16143__$1);

return statearr_16211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16202__$1,(7),inst_16149);
} else {
if((state_val_16203 === (15))){
var inst_16151 = (state_16202[(7)]);
var state_16202__$1 = state_16202;
var statearr_16212_16253 = state_16202__$1;
(statearr_16212_16253[(2)] = inst_16151);

(statearr_16212_16253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (21))){
var state_16202__$1 = state_16202;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_16213_16254 = state_16202__$1;
(statearr_16213_16254[(1)] = (23));

} else {
var statearr_16214_16255 = state_16202__$1;
(statearr_16214_16255[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (13))){
var inst_16164 = (state_16202[(2)]);
var state_16202__$1 = state_16202;
var statearr_16215_16256 = state_16202__$1;
(statearr_16215_16256[(2)] = inst_16164);

(statearr_16215_16256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (22))){
var inst_16200 = (state_16202[(2)]);
var state_16202__$1 = state_16202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16202__$1,inst_16200);
} else {
if((state_val_16203 === (6))){
var inst_16189 = (state_16202[(2)]);
var state_16202__$1 = state_16202;
var statearr_16216_16257 = state_16202__$1;
(statearr_16216_16257[(2)] = inst_16189);

(statearr_16216_16257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (25))){
var inst_16198 = (state_16202[(2)]);
var state_16202__$1 = (function (){var statearr_16217 = state_16202;
(statearr_16217[(10)] = inst_16198);

return statearr_16217;
})();
var statearr_16218_16258 = state_16202__$1;
(statearr_16218_16258[(2)] = false);

(statearr_16218_16258[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (17))){
var inst_16143 = (state_16202[(9)]);
var inst_16174 = (state_16202[(11)]);
var inst_16177 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_16178 = transform.call(null,inst_16174);
var inst_16179 = [lang,inst_16178,inst_16143];
var inst_16180 = cljs.core.PersistentHashMap.fromArrays(inst_16177,inst_16179);
var inst_16181 = src_cb.call(null,inst_16180);
var state_16202__$1 = (function (){var statearr_16219 = state_16202;
(statearr_16219[(12)] = inst_16181);

return statearr_16219;
})();
var statearr_16220_16259 = state_16202__$1;
(statearr_16220_16259[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_16220_16259[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (3))){
var inst_16191 = (state_16202[(2)]);
var state_16202__$1 = state_16202;
if(cljs.core.truth_(inst_16191)){
var statearr_16221_16260 = state_16202__$1;
(statearr_16221_16260[(1)] = (20));

} else {
var statearr_16222_16261 = state_16202__$1;
(statearr_16222_16261[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (12))){
var state_16202__$1 = state_16202;
var statearr_16223_16262 = state_16202__$1;
(statearr_16223_16262[(2)] = false);

(statearr_16223_16262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (2))){
var inst_16138 = (state_16202[(8)]);
var inst_16140 = cljs.core.seq.call(null,inst_16138);
var state_16202__$1 = state_16202;
if(inst_16140){
var statearr_16224_16263 = state_16202__$1;
(statearr_16224_16263[(1)] = (4));

} else {
var statearr_16225_16264 = state_16202__$1;
(statearr_16225_16264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (23))){
var state_16202__$1 = state_16202;
var statearr_16226_16265 = state_16202__$1;
(statearr_16226_16265[(2)] = null);

(statearr_16226_16265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (19))){
var inst_16186 = (state_16202[(2)]);
var state_16202__$1 = state_16202;
var statearr_16227_16266 = state_16202__$1;
(statearr_16227_16266[(2)] = inst_16186);

(statearr_16227_16266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (11))){
var state_16202__$1 = state_16202;
var statearr_16228_16267 = state_16202__$1;
(statearr_16228_16267[(2)] = true);

(statearr_16228_16267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (9))){
var state_16202__$1 = state_16202;
var statearr_16229_16268 = state_16202__$1;
(statearr_16229_16268[(2)] = false);

(statearr_16229_16268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (5))){
var state_16202__$1 = state_16202;
var statearr_16230_16269 = state_16202__$1;
(statearr_16230_16269[(2)] = null);

(statearr_16230_16269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (14))){
var inst_16151 = (state_16202[(7)]);
var inst_16169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16151);
var state_16202__$1 = state_16202;
var statearr_16231_16270 = state_16202__$1;
(statearr_16231_16270[(2)] = inst_16169);

(statearr_16231_16270[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (16))){
var inst_16172 = (state_16202[(2)]);
var inst_16173 = cljs.core.get.call(null,inst_16172,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_16174 = cljs.core.get.call(null,inst_16172,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_16175 = cljs.core._EQ_.call(null,(200),inst_16173);
var state_16202__$1 = (function (){var statearr_16232 = state_16202;
(statearr_16232[(11)] = inst_16174);

return statearr_16232;
})();
if(inst_16175){
var statearr_16233_16271 = state_16202__$1;
(statearr_16233_16271[(1)] = (17));

} else {
var statearr_16234_16272 = state_16202__$1;
(statearr_16234_16272[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (10))){
var inst_16167 = (state_16202[(2)]);
var state_16202__$1 = state_16202;
if(cljs.core.truth_(inst_16167)){
var statearr_16235_16273 = state_16202__$1;
(statearr_16235_16273[(1)] = (14));

} else {
var statearr_16236_16274 = state_16202__$1;
(statearr_16236_16274[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (18))){
var inst_16138 = (state_16202[(8)]);
var inst_16183 = cljs.core.rest.call(null,inst_16138);
var inst_16138__$1 = inst_16183;
var state_16202__$1 = (function (){var statearr_16237 = state_16202;
(statearr_16237[(8)] = inst_16138__$1);

return statearr_16237;
})();
var statearr_16238_16275 = state_16202__$1;
(statearr_16238_16275[(2)] = null);

(statearr_16238_16275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (8))){
var inst_16151 = (state_16202[(7)]);
var inst_16156 = inst_16151.cljs$lang$protocol_mask$partition0$;
var inst_16157 = (inst_16156 & (64));
var inst_16158 = inst_16151.cljs$core$ISeq$;
var inst_16159 = (cljs.core.PROTOCOL_SENTINEL === inst_16158);
var inst_16160 = ((inst_16157) || (inst_16159));
var state_16202__$1 = state_16202;
if(cljs.core.truth_(inst_16160)){
var statearr_16239_16276 = state_16202__$1;
(statearr_16239_16276[(1)] = (11));

} else {
var statearr_16240_16277 = state_16202__$1;
(statearr_16240_16277[(1)] = (12));

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
});})(c__13848__auto__,map__16136,map__16136__$1,transform,can_recover_QMARK_))
;
return ((function (switch__13825__auto__,c__13848__auto__,map__16136,map__16136__$1,transform,can_recover_QMARK_){
return (function() {
var klipse$lang$clojure$io$state_machine__13826__auto__ = null;
var klipse$lang$clojure$io$state_machine__13826__auto____0 = (function (){
var statearr_16241 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16241[(0)] = klipse$lang$clojure$io$state_machine__13826__auto__);

(statearr_16241[(1)] = (1));

return statearr_16241;
});
var klipse$lang$clojure$io$state_machine__13826__auto____1 = (function (state_16202){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16242){if((e16242 instanceof Object)){
var ex__13829__auto__ = e16242;
var statearr_16243_16278 = state_16202;
(statearr_16243_16278[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16279 = state_16202;
state_16202 = G__16279;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__13826__auto__ = function(state_16202){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__13826__auto____1.call(this,state_16202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__13826__auto____0;
klipse$lang$clojure$io$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__13826__auto____1;
return klipse$lang$clojure$io$state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,map__16136,map__16136__$1,transform,can_recover_QMARK_))
})();
var state__13850__auto__ = (function (){var statearr_16244 = f__13849__auto__.call(null);
(statearr_16244[(6)] = c__13848__auto__);

return statearr_16244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,map__16136,map__16136__$1,transform,can_recover_QMARK_))
);

return c__13848__auto__;
});

klipse.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

klipse.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq16130){
var G__16131 = cljs.core.first.call(null,seq16130);
var seq16130__$1 = cljs.core.next.call(null,seq16130);
var G__16132 = cljs.core.first.call(null,seq16130__$1);
var seq16130__$2 = cljs.core.next.call(null,seq16130__$1);
var G__16133 = cljs.core.first.call(null,seq16130__$2);
var seq16130__$3 = cljs.core.next.call(null,seq16130__$2);
var G__16134 = cljs.core.first.call(null,seq16130__$3);
var seq16130__$4 = cljs.core.next.call(null,seq16130__$3);
return klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic(G__16131,G__16132,G__16133,G__16134,seq16130__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse.lang.clojure.io.external_libs_files = (function klipse$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4292__auto__ = (function klipse$lang$clojure$io$external_libs_files_$_iter__16280(s__16281){
return (new cljs.core.LazySeq(null,(function (){
var s__16281__$1 = s__16281;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16281__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var lib = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__16281__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function klipse$lang$clojure$io$external_libs_files_$_iter__16280_$_iter__16282(s__16283){
return (new cljs.core.LazySeq(null,((function (s__16281__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__16283__$1 = s__16283;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16283__$1);
if(temp__5457__auto____$1){
var s__16283__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16283__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__16283__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__16285 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__16284 = (0);
while(true){
if((i__16284 < size__4291__auto__)){
var suffix = cljs.core._nth.call(null,c__4290__auto__,i__16284);
cljs.core.chunk_append.call(null,b__16285,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__16286 = (i__16284 + (1));
i__16284 = G__16286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16285),klipse$lang$clojure$io$external_libs_files_$_iter__16280_$_iter__16282.call(null,cljs.core.chunk_rest.call(null,s__16283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16285),null);
}
} else {
var suffix = cljs.core.first.call(null,s__16283__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse$lang$clojure$io$external_libs_files_$_iter__16280_$_iter__16282.call(null,cljs.core.rest.call(null,s__16283__$2)));
}
} else {
return null;
}
break;
}
});})(s__16281__$1,lib,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__16281__$1,lib,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,suffixes));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,klipse$lang$clojure$io$external_libs_files_$_iter__16280.call(null,cljs.core.rest.call(null,s__16281__$1)));
} else {
var G__16287 = cljs.core.rest.call(null,s__16281__$1);
s__16281__$1 = G__16287;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,external_libs);
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

var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16334){
var state_val_16335 = (state_16334[(1)]);
if((state_val_16335 === (1))){
var inst_16289 = klipse.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_16334__$1 = (function (){var statearr_16336 = state_16334;
(statearr_16336[(7)] = inst_16289);

return statearr_16336;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_16337_16352 = state_16334__$1;
(statearr_16337_16352[(1)] = (2));

} else {
var statearr_16338_16353 = state_16334__$1;
(statearr_16338_16353[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16335 === (2))){
var state_16334__$1 = state_16334;
var statearr_16339_16354 = state_16334__$1;
(statearr_16339_16354[(2)] = "$macros");

(statearr_16339_16354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16335 === (3))){
var state_16334__$1 = state_16334;
var statearr_16340_16355 = state_16334__$1;
(statearr_16340_16355[(2)] = "");

(statearr_16340_16355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16335 === (4))){
var inst_16289 = (state_16334[(7)]);
var inst_16293 = (state_16334[(8)]);
var inst_16295 = (state_16334[(9)]);
var inst_16296 = (state_16334[(10)]);
var inst_16293__$1 = (state_16334[(2)]);
var inst_16294 = klipse.lang.clojure.io.cached_ns_root.call(null);
var inst_16295__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16294),"/"].join('');
var inst_16296__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16295__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16289),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16293__$1),".js"].join('');
var inst_16297 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16295__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16289),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16293__$1),".cache.json"].join('');
var inst_16298 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_16299 = klipse.lang.clojure.io.filename_of.call(null,inst_16296__$1,inst_16298);
var inst_16300 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_16301 = [false];
var inst_16302 = cljs.core.PersistentHashMap.fromArrays(inst_16300,inst_16301);
var inst_16303 = cljs_http.client.get.call(null,inst_16299,inst_16302);
var state_16334__$1 = (function (){var statearr_16341 = state_16334;
(statearr_16341[(11)] = inst_16297);

(statearr_16341[(8)] = inst_16293__$1);

(statearr_16341[(9)] = inst_16295__$1);

(statearr_16341[(10)] = inst_16296__$1);

return statearr_16341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16334__$1,(5),inst_16303);
} else {
if((state_val_16335 === (5))){
var inst_16297 = (state_16334[(11)]);
var inst_16305 = (state_16334[(2)]);
var inst_16306 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_16307 = klipse.lang.clojure.io.filename_of.call(null,inst_16297,inst_16306);
var inst_16308 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_16309 = [false];
var inst_16310 = cljs.core.PersistentHashMap.fromArrays(inst_16308,inst_16309);
var inst_16311 = cljs_http.client.get.call(null,inst_16307,inst_16310);
var state_16334__$1 = (function (){var statearr_16342 = state_16334;
(statearr_16342[(12)] = inst_16305);

return statearr_16342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16334__$1,(6),inst_16311);
} else {
if((state_val_16335 === (6))){
var inst_16297 = (state_16334[(11)]);
var inst_16289 = (state_16334[(7)]);
var inst_16305 = (state_16334[(12)]);
var inst_16293 = (state_16334[(8)]);
var inst_16295 = (state_16334[(9)]);
var inst_16313 = (state_16334[(13)]);
var inst_16296 = (state_16334[(10)]);
var inst_16313__$1 = (state_16334[(2)]);
var inst_16314 = (function (){var nn = inst_16289;
var suffix = inst_16293;
var root = inst_16295;
var src_filename = inst_16296;
var cache_filename = inst_16297;
var src = inst_16305;
var cache = inst_16313__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_16297,inst_16289,inst_16305,inst_16293,inst_16295,inst_16313,inst_16296,inst_16313__$1,state_val_16335,c__13848__auto__){
return (function (p1__16288_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__16288_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_16297,inst_16289,inst_16305,inst_16293,inst_16295,inst_16313,inst_16296,inst_16313__$1,state_val_16335,c__13848__auto__))
})();
var inst_16315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16316 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_16313__$1);
var inst_16317 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_16305);
var inst_16318 = [inst_16316,inst_16317];
var inst_16319 = (new cljs.core.PersistentVector(null,2,(5),inst_16315,inst_16318,null));
var inst_16320 = cljs.core.every_QMARK_.call(null,inst_16314,inst_16319);
var state_16334__$1 = (function (){var statearr_16343 = state_16334;
(statearr_16343[(13)] = inst_16313__$1);

return statearr_16343;
})();
if(inst_16320){
var statearr_16344_16356 = state_16334__$1;
(statearr_16344_16356[(1)] = (7));

} else {
var statearr_16345_16357 = state_16334__$1;
(statearr_16345_16357[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16335 === (7))){
var inst_16305 = (state_16334[(12)]);
var inst_16313 = (state_16334[(13)]);
var inst_16322 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_16323 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16313);
var inst_16324 = klipse.lang.clojure.io.edn.call(null,inst_16323);
var inst_16325 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16305);
var inst_16326 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_16324,inst_16325];
var inst_16327 = cljs.core.PersistentHashMap.fromArrays(inst_16322,inst_16326);
var inst_16328 = src_cb.call(null,inst_16327);
var state_16334__$1 = state_16334;
var statearr_16346_16358 = state_16334__$1;
(statearr_16346_16358[(2)] = inst_16328);

(statearr_16346_16358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16335 === (8))){
var inst_16330 = src_cb.call(null,null);
var state_16334__$1 = state_16334;
var statearr_16347_16359 = state_16334__$1;
(statearr_16347_16359[(2)] = inst_16330);

(statearr_16347_16359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16335 === (9))){
var inst_16332 = (state_16334[(2)]);
var state_16334__$1 = state_16334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16334__$1,inst_16332);
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
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto__ = null;
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto____0 = (function (){
var statearr_16348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16348[(0)] = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto__);

(statearr_16348[(1)] = (1));

return statearr_16348;
});
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto____1 = (function (state_16334){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16349){if((e16349 instanceof Object)){
var ex__13829__auto__ = e16349;
var statearr_16350_16360 = state_16334;
(statearr_16350_16360[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16361 = state_16334;
state_16334 = G__16361;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto__ = function(state_16334){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto____1.call(this,state_16334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto____0;
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto____1;
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16351 = f__13849__auto__.call(null);
(statearr_16351[(6)] = c__13848__auto__);

return statearr_16351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
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
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__16362,src_cb_original){
var map__16363 = p__16362;
var map__16363__$1 = ((((!((map__16363 == null)))?(((((map__16363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16363):map__16363);
var name = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",723719092,null)))?src_cb_original:((function (map__16363,map__16363__$1,name,path){
return (function() { 
var G__16365__delegate = function (args){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("src-cb: patch cljs.spec.test/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse.lang.clojure.include.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",-804885435,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__16365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16366__i = 0, G__16366__a = new Array(arguments.length -  0);
while (G__16366__i < G__16366__a.length) {G__16366__a[G__16366__i] = arguments[G__16366__i + 0]; ++G__16366__i;}
  args = new cljs.core.IndexedSeq(G__16366__a,0,null);
} 
return G__16365__delegate.call(this,args);};
G__16365.cljs$lang$maxFixedArity = 0;
G__16365.cljs$lang$applyTo = (function (arglist__16367){
var args = cljs.core.seq(arglist__16367);
return G__16365__delegate(args);
});
G__16365.cljs$core$IFn$_invoke$arity$variadic = G__16365__delegate;
return G__16365;
})()
;})(map__16363,map__16363__$1,name,path))
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
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__16369,src_cb){
var map__16370 = p__16369;
var map__16370__$1 = ((((!((map__16370 == null)))?(((((map__16370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16370):map__16370);
var path = cljs.core.get.call(null,map__16370__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__16370,map__16370__$1,path){
return (function (p1__16368_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16368_SHARP_)].join('');
});})(path__$1,map__16370,map__16370__$1,path))
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
if(cljs.core.truth_((function (){var or__3922__auto__ = klipse.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__3911__auto__){
return (window["React"]);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__3911__auto__){
return (window["ReactDOMServer"]);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var and__3911__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__3911__auto__){
return (window["ReactDOM"]);
} else {
return and__3911__auto__;
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
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__16373,src_cb){
var map__16374 = p__16373;
var map__16374__$1 = ((((!((map__16374 == null)))?(((((map__16374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16374):map__16374);
var name = cljs.core.get.call(null,map__16374__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__16374__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__16374,map__16374__$1,name,path){
return (function (p1__16372_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.clojure.io.cache_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16372_SHARP_),".cache.json"].join('');
});})(_,map__16374,map__16374__$1,name,path))
,klipse.lang.clojure.io.cljs_suffixes);
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,_,filenames,map__16374,map__16374__$1,name,path){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,_,filenames,map__16374,map__16374__$1,name,path){
return (function (state_16388){
var state_val_16389 = (state_16388[(1)]);
if((state_val_16389 === (1))){
var inst_16376 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_16388__$1 = state_16388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16388__$1,(2),inst_16376);
} else {
if((state_val_16389 === (2))){
var inst_16378 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
if(cljs.core.truth_(inst_16378)){
var statearr_16390_16441 = state_16388__$1;
(statearr_16390_16441[(1)] = (3));

} else {
var statearr_16391_16442 = state_16388__$1;
(statearr_16391_16442[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16389 === (3))){
var state_16388__$1 = state_16388;
var statearr_16392_16443 = state_16388__$1;
(statearr_16392_16443[(2)] = null);

(statearr_16392_16443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16389 === (4))){
var inst_16381 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_16382 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_16383 = cljs.core.PersistentHashMap.fromArrays(inst_16381,inst_16382);
var inst_16384 = src_cb.call(null,inst_16383);
var state_16388__$1 = state_16388;
var statearr_16393_16444 = state_16388__$1;
(statearr_16393_16444[(2)] = inst_16384);

(statearr_16393_16444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16389 === (5))){
var inst_16386 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16388__$1,inst_16386);
} else {
return null;
}
}
}
}
}
});})(c__13848__auto__,_,filenames,map__16374,map__16374__$1,name,path))
;
return ((function (switch__13825__auto__,c__13848__auto__,_,filenames,map__16374,map__16374__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__13826__auto__ = null;
var klipse$lang$clojure$io$state_machine__13826__auto____0 = (function (){
var statearr_16394 = [null,null,null,null,null,null,null];
(statearr_16394[(0)] = klipse$lang$clojure$io$state_machine__13826__auto__);

(statearr_16394[(1)] = (1));

return statearr_16394;
});
var klipse$lang$clojure$io$state_machine__13826__auto____1 = (function (state_16388){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16395){if((e16395 instanceof Object)){
var ex__13829__auto__ = e16395;
var statearr_16396_16445 = state_16388;
(statearr_16396_16445[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16446 = state_16388;
state_16388 = G__16446;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__13826__auto__ = function(state_16388){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__13826__auto____1.call(this,state_16388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__13826__auto____0;
klipse$lang$clojure$io$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__13826__auto____1;
return klipse$lang$clojure$io$state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,_,filenames,map__16374,map__16374__$1,name,path))
})();
var state__13850__auto__ = (function (){var statearr_16397 = f__13849__auto__.call(null);
(statearr_16397[(6)] = c__13848__auto__);

return statearr_16397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,_,filenames,map__16374,map__16374__$1,name,path))
);

return c__13848__auto__;
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

var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,prefix,filenames,map__16374,map__16374__$1,name,path){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,prefix,filenames,map__16374,map__16374__$1,name,path){
return (function (state_16408){
var state_val_16409 = (state_16408[(1)]);
if((state_val_16409 === (1))){
var inst_16398 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16408__$1,(2),inst_16398);
} else {
if((state_val_16409 === (2))){
var inst_16400 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
if(cljs.core.truth_(inst_16400)){
var statearr_16410_16447 = state_16408__$1;
(statearr_16410_16447[(1)] = (3));

} else {
var statearr_16411_16448 = state_16408__$1;
(statearr_16411_16448[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (3))){
var state_16408__$1 = state_16408;
var statearr_16412_16449 = state_16408__$1;
(statearr_16412_16449[(2)] = null);

(statearr_16412_16449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (4))){
var inst_16403 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".js"].join('');
var inst_16404 = klipse.lang.clojure.io.try_to_load_ns.call(null,inst_16403,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_16408__$1 = state_16408;
var statearr_16413_16450 = state_16408__$1;
(statearr_16413_16450[(2)] = inst_16404);

(statearr_16413_16450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (5))){
var inst_16406 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16408__$1,inst_16406);
} else {
return null;
}
}
}
}
}
});})(c__13848__auto__,prefix,filenames,map__16374,map__16374__$1,name,path))
;
return ((function (switch__13825__auto__,c__13848__auto__,prefix,filenames,map__16374,map__16374__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__13826__auto__ = null;
var klipse$lang$clojure$io$state_machine__13826__auto____0 = (function (){
var statearr_16414 = [null,null,null,null,null,null,null];
(statearr_16414[(0)] = klipse$lang$clojure$io$state_machine__13826__auto__);

(statearr_16414[(1)] = (1));

return statearr_16414;
});
var klipse$lang$clojure$io$state_machine__13826__auto____1 = (function (state_16408){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16415){if((e16415 instanceof Object)){
var ex__13829__auto__ = e16415;
var statearr_16416_16451 = state_16408;
(statearr_16416_16451[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16452 = state_16408;
state_16408 = G__16452;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__13826__auto__ = function(state_16408){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__13826__auto____1.call(this,state_16408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__13826__auto____0;
klipse$lang$clojure$io$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__13826__auto____1;
return klipse$lang$clojure$io$state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,prefix,filenames,map__16374,map__16374__$1,name,path))
})();
var state__13850__auto__ = (function (){var statearr_16417 = f__13849__auto__.call(null);
(statearr_16417[(6)] = c__13848__auto__);

return statearr_16417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,prefix,filenames,map__16374,map__16374__$1,name,path))
);

return c__13848__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse.lang.clojure.io.external_libs_files.call(null,external_libs,klipse.lang.clojure.io.cljs_suffixes,path);
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,filenames,map__16374,map__16374__$1,name,path){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,filenames,map__16374,map__16374__$1,name,path){
return (function (state_16431){
var state_val_16432 = (state_16431[(1)]);
if((state_val_16432 === (1))){
var inst_16418 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16431__$1,(2),inst_16418);
} else {
if((state_val_16432 === (2))){
var inst_16420 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
if(cljs.core.truth_(inst_16420)){
var statearr_16433_16453 = state_16431__$1;
(statearr_16433_16453[(1)] = (3));

} else {
var statearr_16434_16454 = state_16431__$1;
(statearr_16434_16454[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (3))){
var state_16431__$1 = state_16431;
var statearr_16435_16455 = state_16431__$1;
(statearr_16435_16455[(2)] = null);

(statearr_16435_16455[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (4))){
var inst_16423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16424 = [".js"];
var inst_16425 = (new cljs.core.PersistentVector(null,1,(5),inst_16423,inst_16424,null));
var inst_16426 = klipse.lang.clojure.io.external_libs_files.call(null,external_libs,inst_16425,path);
var inst_16427 = klipse.lang.clojure.io.try_to_load_ns.call(null,inst_16426,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_16431__$1 = state_16431;
var statearr_16436_16456 = state_16431__$1;
(statearr_16436_16456[(2)] = inst_16427);

(statearr_16436_16456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (5))){
var inst_16429 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16431__$1,inst_16429);
} else {
return null;
}
}
}
}
}
});})(c__13848__auto__,filenames,map__16374,map__16374__$1,name,path))
;
return ((function (switch__13825__auto__,c__13848__auto__,filenames,map__16374,map__16374__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__13826__auto__ = null;
var klipse$lang$clojure$io$state_machine__13826__auto____0 = (function (){
var statearr_16437 = [null,null,null,null,null,null,null];
(statearr_16437[(0)] = klipse$lang$clojure$io$state_machine__13826__auto__);

(statearr_16437[(1)] = (1));

return statearr_16437;
});
var klipse$lang$clojure$io$state_machine__13826__auto____1 = (function (state_16431){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16438){if((e16438 instanceof Object)){
var ex__13829__auto__ = e16438;
var statearr_16439_16457 = state_16431;
(statearr_16439_16457[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16458 = state_16431;
state_16431 = G__16458;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__13826__auto__ = function(state_16431){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__13826__auto____1.call(this,state_16431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__13826__auto____0;
klipse$lang$clojure$io$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__13826__auto____1;
return klipse$lang$clojure$io$state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,filenames,map__16374,map__16374__$1,name,path))
})();
var state__13850__auto__ = (function (){var statearr_16440 = f__13849__auto__.call(null);
(statearr_16440[(6)] = c__13848__auto__);

return statearr_16440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,filenames,map__16374,map__16374__$1,name,path))
);

return c__13848__auto__;
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
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__16460,src_cb){
var map__16461 = p__16460;
var map__16461__$1 = ((((!((map__16461 == null)))?(((((map__16461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16461):map__16461);
var name = cljs.core.get.call(null,map__16461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__16461__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__16461,map__16461__$1,name,path){
return (function (p1__16459_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(closure_github_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16459_SHARP_),".js"].join('');
});})(closure_github_path,map__16461,map__16461__$1,name,path))
,cljs.core.juxt.call(null,klipse.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse.lang.clojure.io.another_goog_path,klipse.lang.clojure.io.simple_goog_path).call(null,path));
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
