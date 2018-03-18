// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__30394 = s;
var map__30394__$1 = ((((!((map__30394 == null)))?((((map__30394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30394):map__30394);
var name = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__30397 = info;
var map__30398 = G__30397;
var map__30398__$1 = ((((!((map__30398 == null)))?((((map__30398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30398):map__30398);
var shadow = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__30397__$1 = G__30397;
while(true){
var d__$2 = d__$1;
var map__30400 = G__30397__$1;
var map__30400__$1 = ((((!((map__30400 == null)))?((((map__30400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30400):map__30400);
var shadow__$1 = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__30402 = (d__$2 + (1));
var G__30403 = shadow__$1;
d__$1 = G__30402;
G__30397__$1 = G__30403;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__30404){
var map__30405 = p__30404;
var map__30405__$1 = ((((!((map__30405 == null)))?((((map__30405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30405):map__30405);
var name_var = map__30405__$1;
var name = cljs.core.get.call(null,map__30405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__30405__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__30407 = info;
var map__30407__$1 = ((((!((map__30407 == null)))?((((map__30407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30407):map__30407);
var ns = cljs.core.get.call(null,map__30407__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__30407__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__30410 = arguments.length;
switch (G__30410) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__30412 = cp;
switch (G__30412) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__30414_30418 = cljs.core.seq.call(null,s);
var chunk__30415_30419 = null;
var count__30416_30420 = (0);
var i__30417_30421 = (0);
while(true){
if((i__30417_30421 < count__30416_30420)){
var c_30422 = cljs.core._nth.call(null,chunk__30415_30419,i__30417_30421);
sb.append(cljs.compiler.escape_char.call(null,c_30422));

var G__30423 = seq__30414_30418;
var G__30424 = chunk__30415_30419;
var G__30425 = count__30416_30420;
var G__30426 = (i__30417_30421 + (1));
seq__30414_30418 = G__30423;
chunk__30415_30419 = G__30424;
count__30416_30420 = G__30425;
i__30417_30421 = G__30426;
continue;
} else {
var temp__5457__auto___30427 = cljs.core.seq.call(null,seq__30414_30418);
if(temp__5457__auto___30427){
var seq__30414_30428__$1 = temp__5457__auto___30427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30414_30428__$1)){
var c__9847__auto___30429 = cljs.core.chunk_first.call(null,seq__30414_30428__$1);
var G__30430 = cljs.core.chunk_rest.call(null,seq__30414_30428__$1);
var G__30431 = c__9847__auto___30429;
var G__30432 = cljs.core.count.call(null,c__9847__auto___30429);
var G__30433 = (0);
seq__30414_30418 = G__30430;
chunk__30415_30419 = G__30431;
count__30416_30420 = G__30432;
i__30417_30421 = G__30433;
continue;
} else {
var c_30434 = cljs.core.first.call(null,seq__30414_30428__$1);
sb.append(cljs.compiler.escape_char.call(null,c_30434));

var G__30435 = cljs.core.next.call(null,seq__30414_30428__$1);
var G__30436 = null;
var G__30437 = (0);
var G__30438 = (0);
seq__30414_30418 = G__30435;
chunk__30415_30419 = G__30436;
count__30416_30420 = G__30437;
i__30417_30421 = G__30438;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__28791__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__28791__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__30439_30444 = ast;
var map__30439_30445__$1 = ((((!((map__30439_30444 == null)))?((((map__30439_30444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30439_30444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30439_30444):map__30439_30444);
var env_30446 = cljs.core.get.call(null,map__30439_30445__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_30446))){
var map__30441_30447 = env_30446;
var map__30441_30448__$1 = ((((!((map__30441_30447 == null)))?((((map__30441_30447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30441_30447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30441_30447):map__30441_30447);
var line_30449 = cljs.core.get.call(null,map__30441_30448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30450 = cljs.core.get.call(null,map__30441_30448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__30441_30447,map__30441_30448__$1,line_30449,column_30450,map__30439_30444,map__30439_30445__$1,env_30446,val__28791__auto__){
return (function (m){
var minfo = (function (){var G__30443 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__30443,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__30443;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_30449 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__30441_30447,map__30441_30448__$1,line_30449,column_30450,map__30439_30444,map__30439_30445__$1,env_30446,val__28791__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_30450)?(column_30450 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__30441_30447,map__30441_30448__$1,line_30449,column_30450,map__30439_30444,map__30439_30445__$1,env_30446,val__28791__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__30441_30447,map__30441_30448__$1,line_30449,column_30450,map__30439_30444,map__30439_30445__$1,env_30446,val__28791__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__30441_30447,map__30441_30448__$1,line_30449,column_30450,map__30439_30444,map__30439_30445__$1,env_30446,val__28791__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__30441_30447,map__30441_30448__$1,line_30449,column_30450,map__30439_30444,map__30439_30445__$1,env_30446,val__28791__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__28791__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__10202__auto__ = [];
var len__10195__auto___30457 = arguments.length;
var i__10196__auto___30458 = (0);
while(true){
if((i__10196__auto___30458 < len__10195__auto___30457)){
args__10202__auto__.push((arguments[i__10196__auto___30458]));

var G__30459 = (i__10196__auto___30458 + (1));
i__10196__auto___30458 = G__30459;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__30453_30460 = cljs.core.seq.call(null,xs);
var chunk__30454_30461 = null;
var count__30455_30462 = (0);
var i__30456_30463 = (0);
while(true){
if((i__30456_30463 < count__30455_30462)){
var x_30464 = cljs.core._nth.call(null,chunk__30454_30461,i__30456_30463);
if((x_30464 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_30464)){
cljs.compiler.emit.call(null,x_30464);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_30464)){
cljs.core.apply.call(null,cljs.compiler.emits,x_30464);
} else {
if(goog.isFunction(x_30464)){
x_30464.call(null);
} else {
var s_30465 = cljs.core.print_str.call(null,x_30464);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__30453_30460,chunk__30454_30461,count__30455_30462,i__30456_30463,s_30465,x_30464){
return (function (p1__30451_SHARP_){
return (p1__30451_SHARP_ + cljs.core.count.call(null,s_30465));
});})(seq__30453_30460,chunk__30454_30461,count__30455_30462,i__30456_30463,s_30465,x_30464))
);
}

cljs.core.print.call(null,s_30465);

}
}
}
}

var G__30466 = seq__30453_30460;
var G__30467 = chunk__30454_30461;
var G__30468 = count__30455_30462;
var G__30469 = (i__30456_30463 + (1));
seq__30453_30460 = G__30466;
chunk__30454_30461 = G__30467;
count__30455_30462 = G__30468;
i__30456_30463 = G__30469;
continue;
} else {
var temp__5457__auto___30470 = cljs.core.seq.call(null,seq__30453_30460);
if(temp__5457__auto___30470){
var seq__30453_30471__$1 = temp__5457__auto___30470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30453_30471__$1)){
var c__9847__auto___30472 = cljs.core.chunk_first.call(null,seq__30453_30471__$1);
var G__30473 = cljs.core.chunk_rest.call(null,seq__30453_30471__$1);
var G__30474 = c__9847__auto___30472;
var G__30475 = cljs.core.count.call(null,c__9847__auto___30472);
var G__30476 = (0);
seq__30453_30460 = G__30473;
chunk__30454_30461 = G__30474;
count__30455_30462 = G__30475;
i__30456_30463 = G__30476;
continue;
} else {
var x_30477 = cljs.core.first.call(null,seq__30453_30471__$1);
if((x_30477 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_30477)){
cljs.compiler.emit.call(null,x_30477);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_30477)){
cljs.core.apply.call(null,cljs.compiler.emits,x_30477);
} else {
if(goog.isFunction(x_30477)){
x_30477.call(null);
} else {
var s_30478 = cljs.core.print_str.call(null,x_30477);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__30453_30460,chunk__30454_30461,count__30455_30462,i__30456_30463,s_30478,x_30477,seq__30453_30471__$1,temp__5457__auto___30470){
return (function (p1__30451_SHARP_){
return (p1__30451_SHARP_ + cljs.core.count.call(null,s_30478));
});})(seq__30453_30460,chunk__30454_30461,count__30455_30462,i__30456_30463,s_30478,x_30477,seq__30453_30471__$1,temp__5457__auto___30470))
);
}

cljs.core.print.call(null,s_30478);

}
}
}
}

var G__30479 = cljs.core.next.call(null,seq__30453_30471__$1);
var G__30480 = null;
var G__30481 = (0);
var G__30482 = (0);
seq__30453_30460 = G__30479;
chunk__30454_30461 = G__30480;
count__30455_30462 = G__30481;
i__30456_30463 = G__30482;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq30452){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30452));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__10202__auto__ = [];
var len__10195__auto___30488 = arguments.length;
var i__10196__auto___30489 = (0);
while(true){
if((i__10196__auto___30489 < len__10195__auto___30488)){
args__10202__auto__.push((arguments[i__10196__auto___30489]));

var G__30490 = (i__10196__auto___30489 + (1));
i__10196__auto___30489 = G__30490;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_30484_30491 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_30484_30491;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__30485){
var map__30486 = p__30485;
var map__30486__$1 = ((((!((map__30486 == null)))?((((map__30486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30486):map__30486);
var m = map__30486__$1;
var gen_line = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq30483){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30483));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__10043__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30492_30494 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30493_30495 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30492_30494,_STAR_print_fn_STAR_30493_30495,sb__10043__auto__){
return (function (x__10044__auto__){
return sb__10043__auto__.append(x__10044__auto__);
});})(_STAR_print_newline_STAR_30492_30494,_STAR_print_fn_STAR_30493_30495,sb__10043__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30493_30495;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30492_30494;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10043__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__30496 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__30496,(0),null);
var flags = cljs.core.nth.call(null,vec__30496,(1),null);
var pattern = cljs.core.nth.call(null,vec__30496,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__8904__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8904__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__8904__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8904__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__30500){
var map__30501 = p__30500;
var map__30501__$1 = ((((!((map__30501 == null)))?((((map__30501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30501):map__30501);
var ast = map__30501__$1;
var info = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__30503 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__30503__$1 = ((((!((map__30503 == null)))?((((map__30503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30503):map__30503);
var cenv = map__30503__$1;
var options = cljs.core.get.call(null,map__30503__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__8916__auto__ = js_module_name;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__30505 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__8904__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__8904__auto__;
}
})())){
return clojure.set.difference.call(null,G__30505,cljs.analyzer.es5_allowed);
} else {
return G__30505;
}
})();
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__30506 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__30506,reserved);
} else {
return G__30506;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__30507){
var map__30508 = p__30507;
var map__30508__$1 = ((((!((map__30508 == null)))?((((map__30508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30508):map__30508);
var arg = map__30508__$1;
var env = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__30510 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__30510__$1 = ((((!((map__30510 == null)))?((((map__30510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30510):map__30510);
var name = cljs.core.get.call(null,map__30510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__30512){
var map__30513 = p__30512;
var map__30513__$1 = ((((!((map__30513 == null)))?((((map__30513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30513):map__30513);
var expr = cljs.core.get.call(null,map__30513__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__30513__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__30513__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__30515_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30515_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__30516){
var map__30517 = p__30516;
var map__30517__$1 = ((((!((map__30517 == null)))?((((map__30517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30517):map__30517);
var env = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__30519){
var map__30520 = p__30519;
var map__30520__$1 = ((((!((map__30520 == null)))?((((map__30520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520):map__30520);
var items = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__30522){
var map__30523 = p__30522;
var map__30523__$1 = ((((!((map__30523 == null)))?((((map__30523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30523):map__30523);
var items = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_30525 = cljs.core.count.call(null,items);
if((cnt_30525 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_30525,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__30526_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30526_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__30527){
var map__30528 = p__30527;
var map__30528__$1 = ((((!((map__30528 == null)))?((((map__30528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528):map__30528);
var items = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__30530){
var map__30531 = p__30530;
var map__30531__$1 = ((((!((map__30531 == null)))?((((map__30531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30531):map__30531);
var items = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___30549 = cljs.core.seq.call(null,items);
if(temp__5457__auto___30549){
var items_30550__$1 = temp__5457__auto___30549;
var vec__30533_30551 = items_30550__$1;
var seq__30534_30552 = cljs.core.seq.call(null,vec__30533_30551);
var first__30535_30553 = cljs.core.first.call(null,seq__30534_30552);
var seq__30534_30554__$1 = cljs.core.next.call(null,seq__30534_30552);
var vec__30536_30555 = first__30535_30553;
var k_30556 = cljs.core.nth.call(null,vec__30536_30555,(0),null);
var v_30557 = cljs.core.nth.call(null,vec__30536_30555,(1),null);
var r_30558 = seq__30534_30554__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_30556),"\": ",v_30557);

var seq__30539_30559 = cljs.core.seq.call(null,r_30558);
var chunk__30540_30560 = null;
var count__30541_30561 = (0);
var i__30542_30562 = (0);
while(true){
if((i__30542_30562 < count__30541_30561)){
var vec__30543_30563 = cljs.core._nth.call(null,chunk__30540_30560,i__30542_30562);
var k_30564__$1 = cljs.core.nth.call(null,vec__30543_30563,(0),null);
var v_30565__$1 = cljs.core.nth.call(null,vec__30543_30563,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_30564__$1),"\": ",v_30565__$1);

var G__30566 = seq__30539_30559;
var G__30567 = chunk__30540_30560;
var G__30568 = count__30541_30561;
var G__30569 = (i__30542_30562 + (1));
seq__30539_30559 = G__30566;
chunk__30540_30560 = G__30567;
count__30541_30561 = G__30568;
i__30542_30562 = G__30569;
continue;
} else {
var temp__5457__auto___30570__$1 = cljs.core.seq.call(null,seq__30539_30559);
if(temp__5457__auto___30570__$1){
var seq__30539_30571__$1 = temp__5457__auto___30570__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30539_30571__$1)){
var c__9847__auto___30572 = cljs.core.chunk_first.call(null,seq__30539_30571__$1);
var G__30573 = cljs.core.chunk_rest.call(null,seq__30539_30571__$1);
var G__30574 = c__9847__auto___30572;
var G__30575 = cljs.core.count.call(null,c__9847__auto___30572);
var G__30576 = (0);
seq__30539_30559 = G__30573;
chunk__30540_30560 = G__30574;
count__30541_30561 = G__30575;
i__30542_30562 = G__30576;
continue;
} else {
var vec__30546_30577 = cljs.core.first.call(null,seq__30539_30571__$1);
var k_30578__$1 = cljs.core.nth.call(null,vec__30546_30577,(0),null);
var v_30579__$1 = cljs.core.nth.call(null,vec__30546_30577,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_30578__$1),"\": ",v_30579__$1);

var G__30580 = cljs.core.next.call(null,seq__30539_30571__$1);
var G__30581 = null;
var G__30582 = (0);
var G__30583 = (0);
seq__30539_30559 = G__30580;
chunk__30540_30560 = G__30581;
count__30541_30561 = G__30582;
i__30542_30562 = G__30583;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__30584){
var map__30585 = p__30584;
var map__30585__$1 = ((((!((map__30585 == null)))?((((map__30585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30585):map__30585);
var items = cljs.core.get.call(null,map__30585__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__30585__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__30585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30585__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__30587){
var map__30588 = p__30587;
var map__30588__$1 = ((((!((map__30588 == null)))?((((map__30588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30588):map__30588);
var form = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__30590){
var map__30591 = p__30590;
var map__30591__$1 = ((((!((map__30591 == null)))?((((map__30591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30591):map__30591);
var op = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__8916__auto__ = (function (){var and__8904__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8904__auto__){
var and__8904__auto____$1 = form;
if(cljs.core.truth_(and__8904__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var and__8904__auto__ = !((const_expr == null));
if(and__8904__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__8904__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__30593){
var map__30594 = p__30593;
var map__30594__$1 = ((((!((map__30594 == null)))?((((map__30594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);
var op = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__8916__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__8916__auto__){
return or__8916__auto__;
} else {
var and__8904__auto__ = !((const_expr == null));
if(and__8904__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__8904__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__8916__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__30596){
var map__30597 = p__30596;
var map__30597__$1 = ((((!((map__30597 == null)))?((((map__30597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30597):map__30597);
var test = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__8916__auto__ = unchecked;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__30599){
var map__30600 = p__30599;
var map__30600__$1 = ((((!((map__30600 == null)))?((((map__30600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30600):map__30600);
var v = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__30602_30620 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__30603_30621 = null;
var count__30604_30622 = (0);
var i__30605_30623 = (0);
while(true){
if((i__30605_30623 < count__30604_30622)){
var vec__30606_30624 = cljs.core._nth.call(null,chunk__30603_30621,i__30605_30623);
var ts_30625 = cljs.core.nth.call(null,vec__30606_30624,(0),null);
var then_30626 = cljs.core.nth.call(null,vec__30606_30624,(1),null);
var seq__30609_30627 = cljs.core.seq.call(null,ts_30625);
var chunk__30610_30628 = null;
var count__30611_30629 = (0);
var i__30612_30630 = (0);
while(true){
if((i__30612_30630 < count__30611_30629)){
var test_30631 = cljs.core._nth.call(null,chunk__30610_30628,i__30612_30630);
cljs.compiler.emitln.call(null,"case ",test_30631,":");

var G__30632 = seq__30609_30627;
var G__30633 = chunk__30610_30628;
var G__30634 = count__30611_30629;
var G__30635 = (i__30612_30630 + (1));
seq__30609_30627 = G__30632;
chunk__30610_30628 = G__30633;
count__30611_30629 = G__30634;
i__30612_30630 = G__30635;
continue;
} else {
var temp__5457__auto___30636 = cljs.core.seq.call(null,seq__30609_30627);
if(temp__5457__auto___30636){
var seq__30609_30637__$1 = temp__5457__auto___30636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30609_30637__$1)){
var c__9847__auto___30638 = cljs.core.chunk_first.call(null,seq__30609_30637__$1);
var G__30639 = cljs.core.chunk_rest.call(null,seq__30609_30637__$1);
var G__30640 = c__9847__auto___30638;
var G__30641 = cljs.core.count.call(null,c__9847__auto___30638);
var G__30642 = (0);
seq__30609_30627 = G__30639;
chunk__30610_30628 = G__30640;
count__30611_30629 = G__30641;
i__30612_30630 = G__30642;
continue;
} else {
var test_30643 = cljs.core.first.call(null,seq__30609_30637__$1);
cljs.compiler.emitln.call(null,"case ",test_30643,":");

var G__30644 = cljs.core.next.call(null,seq__30609_30637__$1);
var G__30645 = null;
var G__30646 = (0);
var G__30647 = (0);
seq__30609_30627 = G__30644;
chunk__30610_30628 = G__30645;
count__30611_30629 = G__30646;
i__30612_30630 = G__30647;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_30626);
} else {
cljs.compiler.emitln.call(null,then_30626);
}

cljs.compiler.emitln.call(null,"break;");

var G__30648 = seq__30602_30620;
var G__30649 = chunk__30603_30621;
var G__30650 = count__30604_30622;
var G__30651 = (i__30605_30623 + (1));
seq__30602_30620 = G__30648;
chunk__30603_30621 = G__30649;
count__30604_30622 = G__30650;
i__30605_30623 = G__30651;
continue;
} else {
var temp__5457__auto___30652 = cljs.core.seq.call(null,seq__30602_30620);
if(temp__5457__auto___30652){
var seq__30602_30653__$1 = temp__5457__auto___30652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30602_30653__$1)){
var c__9847__auto___30654 = cljs.core.chunk_first.call(null,seq__30602_30653__$1);
var G__30655 = cljs.core.chunk_rest.call(null,seq__30602_30653__$1);
var G__30656 = c__9847__auto___30654;
var G__30657 = cljs.core.count.call(null,c__9847__auto___30654);
var G__30658 = (0);
seq__30602_30620 = G__30655;
chunk__30603_30621 = G__30656;
count__30604_30622 = G__30657;
i__30605_30623 = G__30658;
continue;
} else {
var vec__30613_30659 = cljs.core.first.call(null,seq__30602_30653__$1);
var ts_30660 = cljs.core.nth.call(null,vec__30613_30659,(0),null);
var then_30661 = cljs.core.nth.call(null,vec__30613_30659,(1),null);
var seq__30616_30662 = cljs.core.seq.call(null,ts_30660);
var chunk__30617_30663 = null;
var count__30618_30664 = (0);
var i__30619_30665 = (0);
while(true){
if((i__30619_30665 < count__30618_30664)){
var test_30666 = cljs.core._nth.call(null,chunk__30617_30663,i__30619_30665);
cljs.compiler.emitln.call(null,"case ",test_30666,":");

var G__30667 = seq__30616_30662;
var G__30668 = chunk__30617_30663;
var G__30669 = count__30618_30664;
var G__30670 = (i__30619_30665 + (1));
seq__30616_30662 = G__30667;
chunk__30617_30663 = G__30668;
count__30618_30664 = G__30669;
i__30619_30665 = G__30670;
continue;
} else {
var temp__5457__auto___30671__$1 = cljs.core.seq.call(null,seq__30616_30662);
if(temp__5457__auto___30671__$1){
var seq__30616_30672__$1 = temp__5457__auto___30671__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30616_30672__$1)){
var c__9847__auto___30673 = cljs.core.chunk_first.call(null,seq__30616_30672__$1);
var G__30674 = cljs.core.chunk_rest.call(null,seq__30616_30672__$1);
var G__30675 = c__9847__auto___30673;
var G__30676 = cljs.core.count.call(null,c__9847__auto___30673);
var G__30677 = (0);
seq__30616_30662 = G__30674;
chunk__30617_30663 = G__30675;
count__30618_30664 = G__30676;
i__30619_30665 = G__30677;
continue;
} else {
var test_30678 = cljs.core.first.call(null,seq__30616_30672__$1);
cljs.compiler.emitln.call(null,"case ",test_30678,":");

var G__30679 = cljs.core.next.call(null,seq__30616_30672__$1);
var G__30680 = null;
var G__30681 = (0);
var G__30682 = (0);
seq__30616_30662 = G__30679;
chunk__30617_30663 = G__30680;
count__30618_30664 = G__30681;
i__30619_30665 = G__30682;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_30661);
} else {
cljs.compiler.emitln.call(null,then_30661);
}

cljs.compiler.emitln.call(null,"break;");

var G__30683 = cljs.core.next.call(null,seq__30602_30653__$1);
var G__30684 = null;
var G__30685 = (0);
var G__30686 = (0);
seq__30602_30620 = G__30683;
chunk__30603_30621 = G__30684;
count__30604_30622 = G__30685;
i__30605_30623 = G__30686;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__30687){
var map__30688 = p__30687;
var map__30688__$1 = ((((!((map__30688 == null)))?((((map__30688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30688):map__30688);
var throw$ = cljs.core.get.call(null,map__30688__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__30688__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__30691 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__30691,(0),null);
var rstr = cljs.core.nth.call(null,vec__30691,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__30691,fstr,rstr,ret_t,axstr){
return (function (p1__30690_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__30690_SHARP_);
});})(idx,vec__30691,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__30694 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30694),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__30694;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__30695_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__30695_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__30696 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__30697 = cljs.core.seq.call(null,vec__30696);
var first__30698 = cljs.core.first.call(null,seq__30697);
var seq__30697__$1 = cljs.core.next.call(null,seq__30697);
var p = first__30698;
var first__30698__$1 = cljs.core.first.call(null,seq__30697__$1);
var seq__30697__$2 = cljs.core.next.call(null,seq__30697__$1);
var ts = first__30698__$1;
var first__30698__$2 = cljs.core.first.call(null,seq__30697__$2);
var seq__30697__$3 = cljs.core.next.call(null,seq__30697__$2);
var n = first__30698__$2;
var xs = seq__30697__$3;
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__8904__auto__){
var and__8904__auto____$1 = ts;
if(cljs.core.truth_(and__8904__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__30699 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__30700 = cljs.core.seq.call(null,vec__30699);
var first__30701 = cljs.core.first.call(null,seq__30700);
var seq__30700__$1 = cljs.core.next.call(null,seq__30700);
var p = first__30701;
var first__30701__$1 = cljs.core.first.call(null,seq__30700__$1);
var seq__30700__$2 = cljs.core.next.call(null,seq__30700__$1);
var ts = first__30701__$1;
var xs = seq__30700__$2;
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__8904__auto__){
var and__8904__auto____$1 = ts;
if(cljs.core.truth_(and__8904__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__30704 = arguments.length;
switch (G__30704) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__30712 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__30702_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__30702_SHARP_);
} else {
return p1__30702_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__30713 = cljs.core.seq.call(null,vec__30712);
var first__30714 = cljs.core.first.call(null,seq__30713);
var seq__30713__$1 = cljs.core.next.call(null,seq__30713);
var x = first__30714;
var ys = seq__30713__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__30715 = cljs.core.seq.call(null,ys);
var chunk__30716 = null;
var count__30717 = (0);
var i__30718 = (0);
while(true){
if((i__30718 < count__30717)){
var next_line = cljs.core._nth.call(null,chunk__30716,i__30718);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__30724 = seq__30715;
var G__30725 = chunk__30716;
var G__30726 = count__30717;
var G__30727 = (i__30718 + (1));
seq__30715 = G__30724;
chunk__30716 = G__30725;
count__30717 = G__30726;
i__30718 = G__30727;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30715);
if(temp__5457__auto__){
var seq__30715__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30715__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__30715__$1);
var G__30728 = cljs.core.chunk_rest.call(null,seq__30715__$1);
var G__30729 = c__9847__auto__;
var G__30730 = cljs.core.count.call(null,c__9847__auto__);
var G__30731 = (0);
seq__30715 = G__30728;
chunk__30716 = G__30729;
count__30717 = G__30730;
i__30718 = G__30731;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__30715__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__30732 = cljs.core.next.call(null,seq__30715__$1);
var G__30733 = null;
var G__30734 = (0);
var G__30735 = (0);
seq__30715 = G__30732;
chunk__30716 = G__30733;
count__30717 = G__30734;
i__30718 = G__30735;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__30719_30736 = cljs.core.seq.call(null,docs__$2);
var chunk__30720_30737 = null;
var count__30721_30738 = (0);
var i__30722_30739 = (0);
while(true){
if((i__30722_30739 < count__30721_30738)){
var e_30740 = cljs.core._nth.call(null,chunk__30720_30737,i__30722_30739);
if(cljs.core.truth_(e_30740)){
print_comment_lines.call(null,e_30740);
} else {
}

var G__30741 = seq__30719_30736;
var G__30742 = chunk__30720_30737;
var G__30743 = count__30721_30738;
var G__30744 = (i__30722_30739 + (1));
seq__30719_30736 = G__30741;
chunk__30720_30737 = G__30742;
count__30721_30738 = G__30743;
i__30722_30739 = G__30744;
continue;
} else {
var temp__5457__auto___30745 = cljs.core.seq.call(null,seq__30719_30736);
if(temp__5457__auto___30745){
var seq__30719_30746__$1 = temp__5457__auto___30745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30719_30746__$1)){
var c__9847__auto___30747 = cljs.core.chunk_first.call(null,seq__30719_30746__$1);
var G__30748 = cljs.core.chunk_rest.call(null,seq__30719_30746__$1);
var G__30749 = c__9847__auto___30747;
var G__30750 = cljs.core.count.call(null,c__9847__auto___30747);
var G__30751 = (0);
seq__30719_30736 = G__30748;
chunk__30720_30737 = G__30749;
count__30721_30738 = G__30750;
i__30722_30739 = G__30751;
continue;
} else {
var e_30752 = cljs.core.first.call(null,seq__30719_30746__$1);
if(cljs.core.truth_(e_30752)){
print_comment_lines.call(null,e_30752);
} else {
}

var G__30753 = cljs.core.next.call(null,seq__30719_30746__$1);
var G__30754 = null;
var G__30755 = (0);
var G__30756 = (0);
seq__30719_30736 = G__30753;
chunk__30720_30737 = G__30754;
count__30721_30738 = G__30755;
i__30722_30739 = G__30756;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__8904__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__30758_SHARP_){
return goog.string.startsWith(p1__30758_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8904__auto__)){
var and__8904__auto____$1 = opts;
if(cljs.core.truth_(and__8904__auto____$1)){
var and__8904__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8904__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__8904__auto____$2;
}
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__30759){
var map__30760 = p__30759;
var map__30760__$1 = ((((!((map__30760 == null)))?((((map__30760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30760):map__30760);
var name = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8916__auto__ = init;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8904__auto__){
return test;
} else {
return and__8904__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__30762){
var map__30763 = p__30762;
var map__30763__$1 = ((((!((map__30763 == null)))?((((map__30763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30763):map__30763);
var name = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__30765_30783 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__30766_30784 = null;
var count__30767_30785 = (0);
var i__30768_30786 = (0);
while(true){
if((i__30768_30786 < count__30767_30785)){
var vec__30769_30787 = cljs.core._nth.call(null,chunk__30766_30784,i__30768_30786);
var i_30788 = cljs.core.nth.call(null,vec__30769_30787,(0),null);
var param_30789 = cljs.core.nth.call(null,vec__30769_30787,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_30789);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__30790 = seq__30765_30783;
var G__30791 = chunk__30766_30784;
var G__30792 = count__30767_30785;
var G__30793 = (i__30768_30786 + (1));
seq__30765_30783 = G__30790;
chunk__30766_30784 = G__30791;
count__30767_30785 = G__30792;
i__30768_30786 = G__30793;
continue;
} else {
var temp__5457__auto___30794 = cljs.core.seq.call(null,seq__30765_30783);
if(temp__5457__auto___30794){
var seq__30765_30795__$1 = temp__5457__auto___30794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30765_30795__$1)){
var c__9847__auto___30796 = cljs.core.chunk_first.call(null,seq__30765_30795__$1);
var G__30797 = cljs.core.chunk_rest.call(null,seq__30765_30795__$1);
var G__30798 = c__9847__auto___30796;
var G__30799 = cljs.core.count.call(null,c__9847__auto___30796);
var G__30800 = (0);
seq__30765_30783 = G__30797;
chunk__30766_30784 = G__30798;
count__30767_30785 = G__30799;
i__30768_30786 = G__30800;
continue;
} else {
var vec__30772_30801 = cljs.core.first.call(null,seq__30765_30795__$1);
var i_30802 = cljs.core.nth.call(null,vec__30772_30801,(0),null);
var param_30803 = cljs.core.nth.call(null,vec__30772_30801,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_30803);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__30804 = cljs.core.next.call(null,seq__30765_30795__$1);
var G__30805 = null;
var G__30806 = (0);
var G__30807 = (0);
seq__30765_30783 = G__30804;
chunk__30766_30784 = G__30805;
count__30767_30785 = G__30806;
i__30768_30786 = G__30807;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__30775_30808 = cljs.core.seq.call(null,params);
var chunk__30776_30809 = null;
var count__30777_30810 = (0);
var i__30778_30811 = (0);
while(true){
if((i__30778_30811 < count__30777_30810)){
var param_30812 = cljs.core._nth.call(null,chunk__30776_30809,i__30778_30811);
cljs.compiler.emit.call(null,param_30812);

if(cljs.core._EQ_.call(null,param_30812,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30813 = seq__30775_30808;
var G__30814 = chunk__30776_30809;
var G__30815 = count__30777_30810;
var G__30816 = (i__30778_30811 + (1));
seq__30775_30808 = G__30813;
chunk__30776_30809 = G__30814;
count__30777_30810 = G__30815;
i__30778_30811 = G__30816;
continue;
} else {
var temp__5457__auto___30817 = cljs.core.seq.call(null,seq__30775_30808);
if(temp__5457__auto___30817){
var seq__30775_30818__$1 = temp__5457__auto___30817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30775_30818__$1)){
var c__9847__auto___30819 = cljs.core.chunk_first.call(null,seq__30775_30818__$1);
var G__30820 = cljs.core.chunk_rest.call(null,seq__30775_30818__$1);
var G__30821 = c__9847__auto___30819;
var G__30822 = cljs.core.count.call(null,c__9847__auto___30819);
var G__30823 = (0);
seq__30775_30808 = G__30820;
chunk__30776_30809 = G__30821;
count__30777_30810 = G__30822;
i__30778_30811 = G__30823;
continue;
} else {
var param_30824 = cljs.core.first.call(null,seq__30775_30818__$1);
cljs.compiler.emit.call(null,param_30824);

if(cljs.core._EQ_.call(null,param_30824,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30825 = cljs.core.next.call(null,seq__30775_30818__$1);
var G__30826 = null;
var G__30827 = (0);
var G__30828 = (0);
seq__30775_30808 = G__30825;
chunk__30776_30809 = G__30826;
count__30777_30810 = G__30827;
i__30778_30811 = G__30828;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__30779_30829 = cljs.core.seq.call(null,params);
var chunk__30780_30830 = null;
var count__30781_30831 = (0);
var i__30782_30832 = (0);
while(true){
if((i__30782_30832 < count__30781_30831)){
var param_30833 = cljs.core._nth.call(null,chunk__30780_30830,i__30782_30832);
cljs.compiler.emit.call(null,param_30833);

if(cljs.core._EQ_.call(null,param_30833,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30834 = seq__30779_30829;
var G__30835 = chunk__30780_30830;
var G__30836 = count__30781_30831;
var G__30837 = (i__30782_30832 + (1));
seq__30779_30829 = G__30834;
chunk__30780_30830 = G__30835;
count__30781_30831 = G__30836;
i__30782_30832 = G__30837;
continue;
} else {
var temp__5457__auto___30838 = cljs.core.seq.call(null,seq__30779_30829);
if(temp__5457__auto___30838){
var seq__30779_30839__$1 = temp__5457__auto___30838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30779_30839__$1)){
var c__9847__auto___30840 = cljs.core.chunk_first.call(null,seq__30779_30839__$1);
var G__30841 = cljs.core.chunk_rest.call(null,seq__30779_30839__$1);
var G__30842 = c__9847__auto___30840;
var G__30843 = cljs.core.count.call(null,c__9847__auto___30840);
var G__30844 = (0);
seq__30779_30829 = G__30841;
chunk__30780_30830 = G__30842;
count__30781_30831 = G__30843;
i__30782_30832 = G__30844;
continue;
} else {
var param_30845 = cljs.core.first.call(null,seq__30779_30839__$1);
cljs.compiler.emit.call(null,param_30845);

if(cljs.core._EQ_.call(null,param_30845,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30846 = cljs.core.next.call(null,seq__30779_30839__$1);
var G__30847 = null;
var G__30848 = (0);
var G__30849 = (0);
seq__30779_30829 = G__30846;
chunk__30780_30830 = G__30847;
count__30781_30831 = G__30848;
i__30782_30832 = G__30849;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__30850 = cljs.core.seq.call(null,params);
var chunk__30851 = null;
var count__30852 = (0);
var i__30853 = (0);
while(true){
if((i__30853 < count__30852)){
var param = cljs.core._nth.call(null,chunk__30851,i__30853);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30854 = seq__30850;
var G__30855 = chunk__30851;
var G__30856 = count__30852;
var G__30857 = (i__30853 + (1));
seq__30850 = G__30854;
chunk__30851 = G__30855;
count__30852 = G__30856;
i__30853 = G__30857;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30850);
if(temp__5457__auto__){
var seq__30850__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30850__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__30850__$1);
var G__30858 = cljs.core.chunk_rest.call(null,seq__30850__$1);
var G__30859 = c__9847__auto__;
var G__30860 = cljs.core.count.call(null,c__9847__auto__);
var G__30861 = (0);
seq__30850 = G__30858;
chunk__30851 = G__30859;
count__30852 = G__30860;
i__30853 = G__30861;
continue;
} else {
var param = cljs.core.first.call(null,seq__30850__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30862 = cljs.core.next.call(null,seq__30850__$1);
var G__30863 = null;
var G__30864 = (0);
var G__30865 = (0);
seq__30850 = G__30862;
chunk__30851 = G__30863;
count__30852 = G__30864;
i__30853 = G__30865;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30866){
var map__30867 = p__30866;
var map__30867__$1 = ((((!((map__30867 == null)))?((((map__30867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30867):map__30867);
var type = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30869){
var map__30870 = p__30869;
var map__30870__$1 = ((((!((map__30870 == null)))?((((map__30870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30870):map__30870);
var f = map__30870__$1;
var type = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30880__$1 = (function (){var or__8916__auto__ = name;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30881 = cljs.compiler.munge.call(null,name_30880__$1);
var delegate_name_30882 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30881),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30882," = function (");

var seq__30872_30883 = cljs.core.seq.call(null,params);
var chunk__30873_30884 = null;
var count__30874_30885 = (0);
var i__30875_30886 = (0);
while(true){
if((i__30875_30886 < count__30874_30885)){
var param_30887 = cljs.core._nth.call(null,chunk__30873_30884,i__30875_30886);
cljs.compiler.emit.call(null,param_30887);

if(cljs.core._EQ_.call(null,param_30887,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30888 = seq__30872_30883;
var G__30889 = chunk__30873_30884;
var G__30890 = count__30874_30885;
var G__30891 = (i__30875_30886 + (1));
seq__30872_30883 = G__30888;
chunk__30873_30884 = G__30889;
count__30874_30885 = G__30890;
i__30875_30886 = G__30891;
continue;
} else {
var temp__5457__auto___30892 = cljs.core.seq.call(null,seq__30872_30883);
if(temp__5457__auto___30892){
var seq__30872_30893__$1 = temp__5457__auto___30892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30872_30893__$1)){
var c__9847__auto___30894 = cljs.core.chunk_first.call(null,seq__30872_30893__$1);
var G__30895 = cljs.core.chunk_rest.call(null,seq__30872_30893__$1);
var G__30896 = c__9847__auto___30894;
var G__30897 = cljs.core.count.call(null,c__9847__auto___30894);
var G__30898 = (0);
seq__30872_30883 = G__30895;
chunk__30873_30884 = G__30896;
count__30874_30885 = G__30897;
i__30875_30886 = G__30898;
continue;
} else {
var param_30899 = cljs.core.first.call(null,seq__30872_30893__$1);
cljs.compiler.emit.call(null,param_30899);

if(cljs.core._EQ_.call(null,param_30899,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30900 = cljs.core.next.call(null,seq__30872_30893__$1);
var G__30901 = null;
var G__30902 = (0);
var G__30903 = (0);
seq__30872_30883 = G__30900;
chunk__30873_30884 = G__30901;
count__30874_30885 = G__30902;
i__30875_30886 = G__30903;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_30881," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30904 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30904,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30882,".call(this,");

var seq__30876_30905 = cljs.core.seq.call(null,params);
var chunk__30877_30906 = null;
var count__30878_30907 = (0);
var i__30879_30908 = (0);
while(true){
if((i__30879_30908 < count__30878_30907)){
var param_30909 = cljs.core._nth.call(null,chunk__30877_30906,i__30879_30908);
cljs.compiler.emit.call(null,param_30909);

if(cljs.core._EQ_.call(null,param_30909,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30910 = seq__30876_30905;
var G__30911 = chunk__30877_30906;
var G__30912 = count__30878_30907;
var G__30913 = (i__30879_30908 + (1));
seq__30876_30905 = G__30910;
chunk__30877_30906 = G__30911;
count__30878_30907 = G__30912;
i__30879_30908 = G__30913;
continue;
} else {
var temp__5457__auto___30914 = cljs.core.seq.call(null,seq__30876_30905);
if(temp__5457__auto___30914){
var seq__30876_30915__$1 = temp__5457__auto___30914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30876_30915__$1)){
var c__9847__auto___30916 = cljs.core.chunk_first.call(null,seq__30876_30915__$1);
var G__30917 = cljs.core.chunk_rest.call(null,seq__30876_30915__$1);
var G__30918 = c__9847__auto___30916;
var G__30919 = cljs.core.count.call(null,c__9847__auto___30916);
var G__30920 = (0);
seq__30876_30905 = G__30917;
chunk__30877_30906 = G__30918;
count__30878_30907 = G__30919;
i__30879_30908 = G__30920;
continue;
} else {
var param_30921 = cljs.core.first.call(null,seq__30876_30915__$1);
cljs.compiler.emit.call(null,param_30921);

if(cljs.core._EQ_.call(null,param_30921,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__30922 = cljs.core.next.call(null,seq__30876_30915__$1);
var G__30923 = null;
var G__30924 = (0);
var G__30925 = (0);
seq__30876_30905 = G__30922;
chunk__30877_30906 = G__30923;
count__30878_30907 = G__30924;
i__30879_30908 = G__30925;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30881,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30881,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30880__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30881,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30882,";");

cljs.compiler.emitln.call(null,"return ",mname_30881,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30929){
var map__30930 = p__30929;
var map__30930__$1 = ((((!((map__30930 == null)))?((((map__30930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30930):map__30930);
var name = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30930,map__30930__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30926_SHARP_){
var and__8904__auto__ = p1__30926_SHARP_;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30926_SHARP_));
} else {
return and__8904__auto__;
}
});})(map__30930,map__30930__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_30965__$1 = (function (){var or__8916__auto__ = name;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30966 = cljs.compiler.munge.call(null,name_30965__$1);
var maxparams_30967 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30968 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30965__$1,mname_30966,maxparams_30967,loop_locals,map__30930,map__30930__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30966),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30965__$1,mname_30966,maxparams_30967,loop_locals,map__30930,map__30930__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_30969 = cljs.core.sort_by.call(null,((function (name_30965__$1,mname_30966,maxparams_30967,mmap_30968,loop_locals,map__30930,map__30930__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30927_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30927_SHARP_)));
});})(name_30965__$1,mname_30966,maxparams_30967,mmap_30968,loop_locals,map__30930,map__30930__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30968));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30966," = null;");

var seq__30932_30970 = cljs.core.seq.call(null,ms_30969);
var chunk__30933_30971 = null;
var count__30934_30972 = (0);
var i__30935_30973 = (0);
while(true){
if((i__30935_30973 < count__30934_30972)){
var vec__30936_30974 = cljs.core._nth.call(null,chunk__30933_30971,i__30935_30973);
var n_30975 = cljs.core.nth.call(null,vec__30936_30974,(0),null);
var meth_30976 = cljs.core.nth.call(null,vec__30936_30974,(1),null);
cljs.compiler.emits.call(null,"var ",n_30975," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30976))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30976);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30976);
}

cljs.compiler.emitln.call(null,";");

var G__30977 = seq__30932_30970;
var G__30978 = chunk__30933_30971;
var G__30979 = count__30934_30972;
var G__30980 = (i__30935_30973 + (1));
seq__30932_30970 = G__30977;
chunk__30933_30971 = G__30978;
count__30934_30972 = G__30979;
i__30935_30973 = G__30980;
continue;
} else {
var temp__5457__auto___30981 = cljs.core.seq.call(null,seq__30932_30970);
if(temp__5457__auto___30981){
var seq__30932_30982__$1 = temp__5457__auto___30981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30932_30982__$1)){
var c__9847__auto___30983 = cljs.core.chunk_first.call(null,seq__30932_30982__$1);
var G__30984 = cljs.core.chunk_rest.call(null,seq__30932_30982__$1);
var G__30985 = c__9847__auto___30983;
var G__30986 = cljs.core.count.call(null,c__9847__auto___30983);
var G__30987 = (0);
seq__30932_30970 = G__30984;
chunk__30933_30971 = G__30985;
count__30934_30972 = G__30986;
i__30935_30973 = G__30987;
continue;
} else {
var vec__30939_30988 = cljs.core.first.call(null,seq__30932_30982__$1);
var n_30989 = cljs.core.nth.call(null,vec__30939_30988,(0),null);
var meth_30990 = cljs.core.nth.call(null,vec__30939_30988,(1),null);
cljs.compiler.emits.call(null,"var ",n_30989," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_30990))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30990);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30990);
}

cljs.compiler.emitln.call(null,";");

var G__30991 = cljs.core.next.call(null,seq__30932_30982__$1);
var G__30992 = null;
var G__30993 = (0);
var G__30994 = (0);
seq__30932_30970 = G__30991;
chunk__30933_30971 = G__30992;
count__30934_30972 = G__30993;
i__30935_30973 = G__30994;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30966," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30967),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30967)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30967));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30942_30995 = cljs.core.seq.call(null,ms_30969);
var chunk__30943_30996 = null;
var count__30944_30997 = (0);
var i__30945_30998 = (0);
while(true){
if((i__30945_30998 < count__30944_30997)){
var vec__30946_30999 = cljs.core._nth.call(null,chunk__30943_30996,i__30945_30998);
var n_31000 = cljs.core.nth.call(null,vec__30946_30999,(0),null);
var meth_31001 = cljs.core.nth.call(null,vec__30946_30999,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31001))){
cljs.compiler.emitln.call(null,"default:");

var restarg_31002 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_31002," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_31003 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_31002," = new cljs.core.IndexedSeq(",a_31003,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_31000,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30967)),(((cljs.core.count.call(null,maxparams_30967) > (1)))?", ":null),restarg_31002,");");
} else {
var pcnt_31004 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31001));
cljs.compiler.emitln.call(null,"case ",pcnt_31004,":");

cljs.compiler.emitln.call(null,"return ",n_31000,".call(this",(((pcnt_31004 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_31004,maxparams_30967));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),",")),");");
}

var G__31005 = seq__30942_30995;
var G__31006 = chunk__30943_30996;
var G__31007 = count__30944_30997;
var G__31008 = (i__30945_30998 + (1));
seq__30942_30995 = G__31005;
chunk__30943_30996 = G__31006;
count__30944_30997 = G__31007;
i__30945_30998 = G__31008;
continue;
} else {
var temp__5457__auto___31009 = cljs.core.seq.call(null,seq__30942_30995);
if(temp__5457__auto___31009){
var seq__30942_31010__$1 = temp__5457__auto___31009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30942_31010__$1)){
var c__9847__auto___31011 = cljs.core.chunk_first.call(null,seq__30942_31010__$1);
var G__31012 = cljs.core.chunk_rest.call(null,seq__30942_31010__$1);
var G__31013 = c__9847__auto___31011;
var G__31014 = cljs.core.count.call(null,c__9847__auto___31011);
var G__31015 = (0);
seq__30942_30995 = G__31012;
chunk__30943_30996 = G__31013;
count__30944_30997 = G__31014;
i__30945_30998 = G__31015;
continue;
} else {
var vec__30949_31016 = cljs.core.first.call(null,seq__30942_31010__$1);
var n_31017 = cljs.core.nth.call(null,vec__30949_31016,(0),null);
var meth_31018 = cljs.core.nth.call(null,vec__30949_31016,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31018))){
cljs.compiler.emitln.call(null,"default:");

var restarg_31019 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_31019," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_31020 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_31019," = new cljs.core.IndexedSeq(",a_31020,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_31017,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30967)),(((cljs.core.count.call(null,maxparams_30967) > (1)))?", ":null),restarg_31019,");");
} else {
var pcnt_31021 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31018));
cljs.compiler.emitln.call(null,"case ",pcnt_31021,":");

cljs.compiler.emitln.call(null,"return ",n_31017,".call(this",(((pcnt_31021 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_31021,maxparams_30967));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),",")),");");
}

var G__31022 = cljs.core.next.call(null,seq__30942_31010__$1);
var G__31023 = null;
var G__31024 = (0);
var G__31025 = (0);
seq__30942_30995 = G__31022;
chunk__30943_30996 = G__31023;
count__30944_30997 = G__31024;
i__30945_30998 = G__31025;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_30966,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30966,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30965__$1,mname_30966,maxparams_30967,mmap_30968,ms_30969,loop_locals,map__30930,map__30930__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30928_SHARP_){
var vec__30952 = p1__30928_SHARP_;
var n = cljs.core.nth.call(null,vec__30952,(0),null);
var m = cljs.core.nth.call(null,vec__30952,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30965__$1,mname_30966,maxparams_30967,mmap_30968,ms_30969,loop_locals,map__30930,map__30930__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_30969),".cljs$lang$applyTo;");
} else {
}

var seq__30955_31026 = cljs.core.seq.call(null,ms_30969);
var chunk__30956_31027 = null;
var count__30957_31028 = (0);
var i__30958_31029 = (0);
while(true){
if((i__30958_31029 < count__30957_31028)){
var vec__30959_31030 = cljs.core._nth.call(null,chunk__30956_31027,i__30958_31029);
var n_31031 = cljs.core.nth.call(null,vec__30959_31030,(0),null);
var meth_31032 = cljs.core.nth.call(null,vec__30959_31030,(1),null);
var c_31033 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31032));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31032))){
cljs.compiler.emitln.call(null,mname_30966,".cljs$core$IFn$_invoke$arity$variadic = ",n_31031,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30966,".cljs$core$IFn$_invoke$arity$",c_31033," = ",n_31031,";");
}

var G__31034 = seq__30955_31026;
var G__31035 = chunk__30956_31027;
var G__31036 = count__30957_31028;
var G__31037 = (i__30958_31029 + (1));
seq__30955_31026 = G__31034;
chunk__30956_31027 = G__31035;
count__30957_31028 = G__31036;
i__30958_31029 = G__31037;
continue;
} else {
var temp__5457__auto___31038 = cljs.core.seq.call(null,seq__30955_31026);
if(temp__5457__auto___31038){
var seq__30955_31039__$1 = temp__5457__auto___31038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30955_31039__$1)){
var c__9847__auto___31040 = cljs.core.chunk_first.call(null,seq__30955_31039__$1);
var G__31041 = cljs.core.chunk_rest.call(null,seq__30955_31039__$1);
var G__31042 = c__9847__auto___31040;
var G__31043 = cljs.core.count.call(null,c__9847__auto___31040);
var G__31044 = (0);
seq__30955_31026 = G__31041;
chunk__30956_31027 = G__31042;
count__30957_31028 = G__31043;
i__30958_31029 = G__31044;
continue;
} else {
var vec__30962_31045 = cljs.core.first.call(null,seq__30955_31039__$1);
var n_31046 = cljs.core.nth.call(null,vec__30962_31045,(0),null);
var meth_31047 = cljs.core.nth.call(null,vec__30962_31045,(1),null);
var c_31048 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_31047));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_31047))){
cljs.compiler.emitln.call(null,mname_30966,".cljs$core$IFn$_invoke$arity$variadic = ",n_31046,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30966,".cljs$core$IFn$_invoke$arity$",c_31048," = ",n_31046,";");
}

var G__31049 = cljs.core.next.call(null,seq__30955_31039__$1);
var G__31050 = null;
var G__31051 = (0);
var G__31052 = (0);
seq__30955_31026 = G__31049;
chunk__30956_31027 = G__31050;
count__30957_31028 = G__31051;
i__30958_31029 = G__31052;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30966,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__31053){
var map__31054 = p__31053;
var map__31054__$1 = ((((!((map__31054 == null)))?((((map__31054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31054):map__31054);
var statements = cljs.core.get.call(null,map__31054__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__31054__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__31054__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8904__auto__ = statements;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8904__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__31056_31060 = cljs.core.seq.call(null,statements);
var chunk__31057_31061 = null;
var count__31058_31062 = (0);
var i__31059_31063 = (0);
while(true){
if((i__31059_31063 < count__31058_31062)){
var s_31064 = cljs.core._nth.call(null,chunk__31057_31061,i__31059_31063);
cljs.compiler.emitln.call(null,s_31064);

var G__31065 = seq__31056_31060;
var G__31066 = chunk__31057_31061;
var G__31067 = count__31058_31062;
var G__31068 = (i__31059_31063 + (1));
seq__31056_31060 = G__31065;
chunk__31057_31061 = G__31066;
count__31058_31062 = G__31067;
i__31059_31063 = G__31068;
continue;
} else {
var temp__5457__auto___31069 = cljs.core.seq.call(null,seq__31056_31060);
if(temp__5457__auto___31069){
var seq__31056_31070__$1 = temp__5457__auto___31069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31056_31070__$1)){
var c__9847__auto___31071 = cljs.core.chunk_first.call(null,seq__31056_31070__$1);
var G__31072 = cljs.core.chunk_rest.call(null,seq__31056_31070__$1);
var G__31073 = c__9847__auto___31071;
var G__31074 = cljs.core.count.call(null,c__9847__auto___31071);
var G__31075 = (0);
seq__31056_31060 = G__31072;
chunk__31057_31061 = G__31073;
count__31058_31062 = G__31074;
i__31059_31063 = G__31075;
continue;
} else {
var s_31076 = cljs.core.first.call(null,seq__31056_31070__$1);
cljs.compiler.emitln.call(null,s_31076);

var G__31077 = cljs.core.next.call(null,seq__31056_31070__$1);
var G__31078 = null;
var G__31079 = (0);
var G__31080 = (0);
seq__31056_31060 = G__31077;
chunk__31057_31061 = G__31078;
count__31058_31062 = G__31079;
i__31059_31063 = G__31080;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__8904__auto__ = statements;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8904__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__31081){
var map__31082 = p__31081;
var map__31082__$1 = ((((!((map__31082 == null)))?((((map__31082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31082):map__31082);
var env = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8916__auto__ = name;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__31084,is_loop){
var map__31085 = p__31084;
var map__31085__$1 = ((((!((map__31085 == null)))?((((map__31085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31085):map__31085);
var bindings = cljs.core.get.call(null,map__31085__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__31085__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__31085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_31087_31096 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_31087_31096,context,map__31085,map__31085__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_31087_31096,context,map__31085,map__31085__$1,bindings,expr,env))
,bindings):null));

try{var seq__31088_31097 = cljs.core.seq.call(null,bindings);
var chunk__31089_31098 = null;
var count__31090_31099 = (0);
var i__31091_31100 = (0);
while(true){
if((i__31091_31100 < count__31090_31099)){
var map__31092_31101 = cljs.core._nth.call(null,chunk__31089_31098,i__31091_31100);
var map__31092_31102__$1 = ((((!((map__31092_31101 == null)))?((((map__31092_31101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31092_31101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31092_31101):map__31092_31101);
var binding_31103 = map__31092_31102__$1;
var init_31104 = cljs.core.get.call(null,map__31092_31102__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_31103);

cljs.compiler.emitln.call(null," = ",init_31104,";");

var G__31105 = seq__31088_31097;
var G__31106 = chunk__31089_31098;
var G__31107 = count__31090_31099;
var G__31108 = (i__31091_31100 + (1));
seq__31088_31097 = G__31105;
chunk__31089_31098 = G__31106;
count__31090_31099 = G__31107;
i__31091_31100 = G__31108;
continue;
} else {
var temp__5457__auto___31109 = cljs.core.seq.call(null,seq__31088_31097);
if(temp__5457__auto___31109){
var seq__31088_31110__$1 = temp__5457__auto___31109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31088_31110__$1)){
var c__9847__auto___31111 = cljs.core.chunk_first.call(null,seq__31088_31110__$1);
var G__31112 = cljs.core.chunk_rest.call(null,seq__31088_31110__$1);
var G__31113 = c__9847__auto___31111;
var G__31114 = cljs.core.count.call(null,c__9847__auto___31111);
var G__31115 = (0);
seq__31088_31097 = G__31112;
chunk__31089_31098 = G__31113;
count__31090_31099 = G__31114;
i__31091_31100 = G__31115;
continue;
} else {
var map__31094_31116 = cljs.core.first.call(null,seq__31088_31110__$1);
var map__31094_31117__$1 = ((((!((map__31094_31116 == null)))?((((map__31094_31116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31094_31116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31094_31116):map__31094_31116);
var binding_31118 = map__31094_31117__$1;
var init_31119 = cljs.core.get.call(null,map__31094_31117__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_31118);

cljs.compiler.emitln.call(null," = ",init_31119,";");

var G__31120 = cljs.core.next.call(null,seq__31088_31110__$1);
var G__31121 = null;
var G__31122 = (0);
var G__31123 = (0);
seq__31088_31097 = G__31120;
chunk__31089_31098 = G__31121;
count__31090_31099 = G__31122;
i__31091_31100 = G__31123;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_31087_31096;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__31124){
var map__31125 = p__31124;
var map__31125__$1 = ((((!((map__31125 == null)))?((((map__31125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31125):map__31125);
var frame = cljs.core.get.call(null,map__31125__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__31125__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__31125__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9961__auto___31127 = cljs.core.count.call(null,exprs);
var i_31128 = (0);
while(true){
if((i_31128 < n__9961__auto___31127)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_31128)," = ",exprs.call(null,i_31128),";");

var G__31129 = (i_31128 + (1));
i_31128 = G__31129;
continue;
} else {
}
break;
}

var n__9961__auto___31130 = cljs.core.count.call(null,exprs);
var i_31131 = (0);
while(true){
if((i_31131 < n__9961__auto___31130)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_31131))," = ",temps.call(null,i_31131),";");

var G__31132 = (i_31131 + (1));
i_31131 = G__31132;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__31133){
var map__31134 = p__31133;
var map__31134__$1 = ((((!((map__31134 == null)))?((((map__31134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31134):map__31134);
var bindings = cljs.core.get.call(null,map__31134__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__31134__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__31134__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__31136_31144 = cljs.core.seq.call(null,bindings);
var chunk__31137_31145 = null;
var count__31138_31146 = (0);
var i__31139_31147 = (0);
while(true){
if((i__31139_31147 < count__31138_31146)){
var map__31140_31148 = cljs.core._nth.call(null,chunk__31137_31145,i__31139_31147);
var map__31140_31149__$1 = ((((!((map__31140_31148 == null)))?((((map__31140_31148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31140_31148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31140_31148):map__31140_31148);
var binding_31150 = map__31140_31149__$1;
var init_31151 = cljs.core.get.call(null,map__31140_31149__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_31150)," = ",init_31151,";");

var G__31152 = seq__31136_31144;
var G__31153 = chunk__31137_31145;
var G__31154 = count__31138_31146;
var G__31155 = (i__31139_31147 + (1));
seq__31136_31144 = G__31152;
chunk__31137_31145 = G__31153;
count__31138_31146 = G__31154;
i__31139_31147 = G__31155;
continue;
} else {
var temp__5457__auto___31156 = cljs.core.seq.call(null,seq__31136_31144);
if(temp__5457__auto___31156){
var seq__31136_31157__$1 = temp__5457__auto___31156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31136_31157__$1)){
var c__9847__auto___31158 = cljs.core.chunk_first.call(null,seq__31136_31157__$1);
var G__31159 = cljs.core.chunk_rest.call(null,seq__31136_31157__$1);
var G__31160 = c__9847__auto___31158;
var G__31161 = cljs.core.count.call(null,c__9847__auto___31158);
var G__31162 = (0);
seq__31136_31144 = G__31159;
chunk__31137_31145 = G__31160;
count__31138_31146 = G__31161;
i__31139_31147 = G__31162;
continue;
} else {
var map__31142_31163 = cljs.core.first.call(null,seq__31136_31157__$1);
var map__31142_31164__$1 = ((((!((map__31142_31163 == null)))?((((map__31142_31163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31142_31163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31142_31163):map__31142_31163);
var binding_31165 = map__31142_31164__$1;
var init_31166 = cljs.core.get.call(null,map__31142_31164__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_31165)," = ",init_31166,";");

var G__31167 = cljs.core.next.call(null,seq__31136_31157__$1);
var G__31168 = null;
var G__31169 = (0);
var G__31170 = (0);
seq__31136_31144 = G__31167;
chunk__31137_31145 = G__31168;
count__31138_31146 = G__31169;
i__31139_31147 = G__31170;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__31173){
var map__31174 = p__31173;
var map__31174__$1 = ((((!((map__31174 == null)))?((((map__31174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31174):map__31174);
var expr = map__31174__$1;
var f = cljs.core.get.call(null,map__31174__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__31174__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8904__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8904__auto__){
var and__8904__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8904__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8904__auto__ = protocol;
if(cljs.core.truth_(and__8904__auto__)){
var and__8904__auto____$1 = tag;
if(cljs.core.truth_(and__8904__auto____$1)){
var or__8916__auto__ = (function (){var and__8904__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8904__auto____$2){
var and__8904__auto____$3 = protocol;
if(cljs.core.truth_(and__8904__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8904__auto____$3;
}
} else {
return and__8904__auto____$2;
}
})();
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var and__8904__auto____$2 = (function (){var or__8916__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8916__auto____$1){
return or__8916__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8904__auto____$2)){
var or__8916__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__8916__auto____$1){
return or__8916__auto____$1;
} else {
var and__8904__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__8904__auto____$3){
var and__8904__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__8904__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__8904__auto____$4;
}
} else {
return and__8904__auto____$3;
}
}
} else {
return and__8904__auto____$2;
}
}
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8916__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8916__auto__){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__31176 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8904__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8904__auto__)){
return (arity > mfa);
} else {
return and__8904__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31174,map__31174__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31174,map__31174__$1,expr,f,args,env){
return (function (p1__31171_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__31171_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31174,map__31174__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31174,map__31174__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31174,map__31174__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31174,map__31174__$1,expr,f,args,env){
return (function (p1__31172_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__31172_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31174,map__31174__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__31174,map__31174__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__31176,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__31176,(1),null);
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_31179 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_31179,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_31180 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_31180,args)),(((mfa_31180 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_31180,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__8916__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = js_QMARK_;
if(or__8916__auto____$1){
return or__8916__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_31181 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_31181," ? ",f__$1,fprop_31181,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_31181," ? ",f__$1,fprop_31181,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__31182){
var map__31183 = p__31182;
var map__31183__$1 = ((((!((map__31183 == null)))?((((map__31183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183):map__31183);
var ctor = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__31185){
var map__31186 = p__31185;
var map__31186__$1 = ((((!((map__31186 == null)))?((((map__31186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31186):map__31186);
var target = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__31188 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__31188__$1 = ((((!((map__31188 == null)))?((((map__31188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31188):map__31188);
var options = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__31189 = options;
var map__31189__$1 = ((((!((map__31189 == null)))?((((map__31189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189):map__31189);
var target = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__31190 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__31196 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__31196__$1 = ((((!((map__31196 == null)))?((((map__31196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31196):map__31196);
var node_libs = cljs.core.get.call(null,map__31196__$1,true);
var libs_to_load = cljs.core.get.call(null,map__31196__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__31190,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__31190,(1),null);
var map__31193 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__31193__$1 = ((((!((map__31193 == null)))?((((map__31193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31193):map__31193);
var global_exports_libs = cljs.core.get.call(null,map__31193__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__31193__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__31199_31215 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__31200_31216 = null;
var count__31201_31217 = (0);
var i__31202_31218 = (0);
while(true){
if((i__31202_31218 < count__31201_31217)){
var lib_31219 = cljs.core._nth.call(null,chunk__31200_31216,i__31202_31218);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_31219)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8916__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31219),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31219),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8916__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31219),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31219),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31219),"');");

}
}
}

var G__31220 = seq__31199_31215;
var G__31221 = chunk__31200_31216;
var G__31222 = count__31201_31217;
var G__31223 = (i__31202_31218 + (1));
seq__31199_31215 = G__31220;
chunk__31200_31216 = G__31221;
count__31201_31217 = G__31222;
i__31202_31218 = G__31223;
continue;
} else {
var temp__5457__auto___31224 = cljs.core.seq.call(null,seq__31199_31215);
if(temp__5457__auto___31224){
var seq__31199_31225__$1 = temp__5457__auto___31224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31199_31225__$1)){
var c__9847__auto___31226 = cljs.core.chunk_first.call(null,seq__31199_31225__$1);
var G__31227 = cljs.core.chunk_rest.call(null,seq__31199_31225__$1);
var G__31228 = c__9847__auto___31226;
var G__31229 = cljs.core.count.call(null,c__9847__auto___31226);
var G__31230 = (0);
seq__31199_31215 = G__31227;
chunk__31200_31216 = G__31228;
count__31201_31217 = G__31229;
i__31202_31218 = G__31230;
continue;
} else {
var lib_31231 = cljs.core.first.call(null,seq__31199_31225__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_31231)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8916__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31231),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31231),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8916__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_31231),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31231),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_31231),"');");

}
}
}

var G__31232 = cljs.core.next.call(null,seq__31199_31225__$1);
var G__31233 = null;
var G__31234 = (0);
var G__31235 = (0);
seq__31199_31215 = G__31232;
chunk__31200_31216 = G__31233;
count__31201_31217 = G__31234;
i__31202_31218 = G__31235;
continue;
}
} else {
}
}
break;
}

var seq__31203_31236 = cljs.core.seq.call(null,node_libs);
var chunk__31204_31237 = null;
var count__31205_31238 = (0);
var i__31206_31239 = (0);
while(true){
if((i__31206_31239 < count__31205_31238)){
var lib_31240 = cljs.core._nth.call(null,chunk__31204_31237,i__31206_31239);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_31240)," = require('",lib_31240,"');");

var G__31241 = seq__31203_31236;
var G__31242 = chunk__31204_31237;
var G__31243 = count__31205_31238;
var G__31244 = (i__31206_31239 + (1));
seq__31203_31236 = G__31241;
chunk__31204_31237 = G__31242;
count__31205_31238 = G__31243;
i__31206_31239 = G__31244;
continue;
} else {
var temp__5457__auto___31245 = cljs.core.seq.call(null,seq__31203_31236);
if(temp__5457__auto___31245){
var seq__31203_31246__$1 = temp__5457__auto___31245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31203_31246__$1)){
var c__9847__auto___31247 = cljs.core.chunk_first.call(null,seq__31203_31246__$1);
var G__31248 = cljs.core.chunk_rest.call(null,seq__31203_31246__$1);
var G__31249 = c__9847__auto___31247;
var G__31250 = cljs.core.count.call(null,c__9847__auto___31247);
var G__31251 = (0);
seq__31203_31236 = G__31248;
chunk__31204_31237 = G__31249;
count__31205_31238 = G__31250;
i__31206_31239 = G__31251;
continue;
} else {
var lib_31252 = cljs.core.first.call(null,seq__31203_31246__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_31252)," = require('",lib_31252,"');");

var G__31253 = cljs.core.next.call(null,seq__31203_31246__$1);
var G__31254 = null;
var G__31255 = (0);
var G__31256 = (0);
seq__31203_31236 = G__31253;
chunk__31204_31237 = G__31254;
count__31205_31238 = G__31255;
i__31206_31239 = G__31256;
continue;
}
} else {
}
}
break;
}

var seq__31207_31257 = cljs.core.seq.call(null,global_exports_libs);
var chunk__31208_31258 = null;
var count__31209_31259 = (0);
var i__31210_31260 = (0);
while(true){
if((i__31210_31260 < count__31209_31259)){
var lib_31261 = cljs.core._nth.call(null,chunk__31208_31258,i__31210_31260);
var map__31211_31262 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_31261));
var map__31211_31263__$1 = ((((!((map__31211_31262 == null)))?((((map__31211_31262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31211_31262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31211_31262):map__31211_31262);
var global_exports_31264 = cljs.core.get.call(null,map__31211_31263__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_31261)," = goog.global.",cljs.core.get.call(null,global_exports_31264,cljs.core.symbol.call(null,lib_31261)),";");

var G__31265 = seq__31207_31257;
var G__31266 = chunk__31208_31258;
var G__31267 = count__31209_31259;
var G__31268 = (i__31210_31260 + (1));
seq__31207_31257 = G__31265;
chunk__31208_31258 = G__31266;
count__31209_31259 = G__31267;
i__31210_31260 = G__31268;
continue;
} else {
var temp__5457__auto___31269 = cljs.core.seq.call(null,seq__31207_31257);
if(temp__5457__auto___31269){
var seq__31207_31270__$1 = temp__5457__auto___31269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31207_31270__$1)){
var c__9847__auto___31271 = cljs.core.chunk_first.call(null,seq__31207_31270__$1);
var G__31272 = cljs.core.chunk_rest.call(null,seq__31207_31270__$1);
var G__31273 = c__9847__auto___31271;
var G__31274 = cljs.core.count.call(null,c__9847__auto___31271);
var G__31275 = (0);
seq__31207_31257 = G__31272;
chunk__31208_31258 = G__31273;
count__31209_31259 = G__31274;
i__31210_31260 = G__31275;
continue;
} else {
var lib_31276 = cljs.core.first.call(null,seq__31207_31270__$1);
var map__31213_31277 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_31276));
var map__31213_31278__$1 = ((((!((map__31213_31277 == null)))?((((map__31213_31277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31213_31277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31213_31277):map__31213_31277);
var global_exports_31279 = cljs.core.get.call(null,map__31213_31278__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_31276)," = goog.global.",cljs.core.get.call(null,global_exports_31279,cljs.core.symbol.call(null,lib_31276)),";");

var G__31280 = cljs.core.next.call(null,seq__31207_31270__$1);
var G__31281 = null;
var G__31282 = (0);
var G__31283 = (0);
seq__31207_31257 = G__31280;
chunk__31208_31258 = G__31281;
count__31209_31259 = G__31282;
i__31210_31260 = G__31283;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__31284){
var map__31285 = p__31284;
var map__31285__$1 = ((((!((map__31285 == null)))?((((map__31285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31285):map__31285);
var name = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__31287){
var map__31288 = p__31287;
var map__31288__$1 = ((((!((map__31288 == null)))?((((map__31288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31288):map__31288);
var name = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__31290){
var map__31291 = p__31290;
var map__31291__$1 = ((((!((map__31291 == null)))?((((map__31291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31291):map__31291);
var t = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__31293_31311 = cljs.core.seq.call(null,protocols);
var chunk__31294_31312 = null;
var count__31295_31313 = (0);
var i__31296_31314 = (0);
while(true){
if((i__31296_31314 < count__31295_31313)){
var protocol_31315 = cljs.core._nth.call(null,chunk__31294_31312,i__31296_31314);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31315)].join('')),"}");

var G__31316 = seq__31293_31311;
var G__31317 = chunk__31294_31312;
var G__31318 = count__31295_31313;
var G__31319 = (i__31296_31314 + (1));
seq__31293_31311 = G__31316;
chunk__31294_31312 = G__31317;
count__31295_31313 = G__31318;
i__31296_31314 = G__31319;
continue;
} else {
var temp__5457__auto___31320 = cljs.core.seq.call(null,seq__31293_31311);
if(temp__5457__auto___31320){
var seq__31293_31321__$1 = temp__5457__auto___31320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31293_31321__$1)){
var c__9847__auto___31322 = cljs.core.chunk_first.call(null,seq__31293_31321__$1);
var G__31323 = cljs.core.chunk_rest.call(null,seq__31293_31321__$1);
var G__31324 = c__9847__auto___31322;
var G__31325 = cljs.core.count.call(null,c__9847__auto___31322);
var G__31326 = (0);
seq__31293_31311 = G__31323;
chunk__31294_31312 = G__31324;
count__31295_31313 = G__31325;
i__31296_31314 = G__31326;
continue;
} else {
var protocol_31327 = cljs.core.first.call(null,seq__31293_31321__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31327)].join('')),"}");

var G__31328 = cljs.core.next.call(null,seq__31293_31321__$1);
var G__31329 = null;
var G__31330 = (0);
var G__31331 = (0);
seq__31293_31311 = G__31328;
chunk__31294_31312 = G__31329;
count__31295_31313 = G__31330;
i__31296_31314 = G__31331;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__31297_31332 = cljs.core.seq.call(null,fields__$1);
var chunk__31298_31333 = null;
var count__31299_31334 = (0);
var i__31300_31335 = (0);
while(true){
if((i__31300_31335 < count__31299_31334)){
var fld_31336 = cljs.core._nth.call(null,chunk__31298_31333,i__31300_31335);
cljs.compiler.emitln.call(null,"this.",fld_31336," = ",fld_31336,";");

var G__31337 = seq__31297_31332;
var G__31338 = chunk__31298_31333;
var G__31339 = count__31299_31334;
var G__31340 = (i__31300_31335 + (1));
seq__31297_31332 = G__31337;
chunk__31298_31333 = G__31338;
count__31299_31334 = G__31339;
i__31300_31335 = G__31340;
continue;
} else {
var temp__5457__auto___31341 = cljs.core.seq.call(null,seq__31297_31332);
if(temp__5457__auto___31341){
var seq__31297_31342__$1 = temp__5457__auto___31341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31297_31342__$1)){
var c__9847__auto___31343 = cljs.core.chunk_first.call(null,seq__31297_31342__$1);
var G__31344 = cljs.core.chunk_rest.call(null,seq__31297_31342__$1);
var G__31345 = c__9847__auto___31343;
var G__31346 = cljs.core.count.call(null,c__9847__auto___31343);
var G__31347 = (0);
seq__31297_31332 = G__31344;
chunk__31298_31333 = G__31345;
count__31299_31334 = G__31346;
i__31300_31335 = G__31347;
continue;
} else {
var fld_31348 = cljs.core.first.call(null,seq__31297_31342__$1);
cljs.compiler.emitln.call(null,"this.",fld_31348," = ",fld_31348,";");

var G__31349 = cljs.core.next.call(null,seq__31297_31342__$1);
var G__31350 = null;
var G__31351 = (0);
var G__31352 = (0);
seq__31297_31332 = G__31349;
chunk__31298_31333 = G__31350;
count__31299_31334 = G__31351;
i__31300_31335 = G__31352;
continue;
}
} else {
}
}
break;
}

var seq__31301_31353 = cljs.core.seq.call(null,pmasks);
var chunk__31302_31354 = null;
var count__31303_31355 = (0);
var i__31304_31356 = (0);
while(true){
if((i__31304_31356 < count__31303_31355)){
var vec__31305_31357 = cljs.core._nth.call(null,chunk__31302_31354,i__31304_31356);
var pno_31358 = cljs.core.nth.call(null,vec__31305_31357,(0),null);
var pmask_31359 = cljs.core.nth.call(null,vec__31305_31357,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31358,"$ = ",pmask_31359,";");

var G__31360 = seq__31301_31353;
var G__31361 = chunk__31302_31354;
var G__31362 = count__31303_31355;
var G__31363 = (i__31304_31356 + (1));
seq__31301_31353 = G__31360;
chunk__31302_31354 = G__31361;
count__31303_31355 = G__31362;
i__31304_31356 = G__31363;
continue;
} else {
var temp__5457__auto___31364 = cljs.core.seq.call(null,seq__31301_31353);
if(temp__5457__auto___31364){
var seq__31301_31365__$1 = temp__5457__auto___31364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31301_31365__$1)){
var c__9847__auto___31366 = cljs.core.chunk_first.call(null,seq__31301_31365__$1);
var G__31367 = cljs.core.chunk_rest.call(null,seq__31301_31365__$1);
var G__31368 = c__9847__auto___31366;
var G__31369 = cljs.core.count.call(null,c__9847__auto___31366);
var G__31370 = (0);
seq__31301_31353 = G__31367;
chunk__31302_31354 = G__31368;
count__31303_31355 = G__31369;
i__31304_31356 = G__31370;
continue;
} else {
var vec__31308_31371 = cljs.core.first.call(null,seq__31301_31365__$1);
var pno_31372 = cljs.core.nth.call(null,vec__31308_31371,(0),null);
var pmask_31373 = cljs.core.nth.call(null,vec__31308_31371,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31372,"$ = ",pmask_31373,";");

var G__31374 = cljs.core.next.call(null,seq__31301_31365__$1);
var G__31375 = null;
var G__31376 = (0);
var G__31377 = (0);
seq__31301_31353 = G__31374;
chunk__31302_31354 = G__31375;
count__31303_31355 = G__31376;
i__31304_31356 = G__31377;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__31378){
var map__31379 = p__31378;
var map__31379__$1 = ((((!((map__31379 == null)))?((((map__31379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31379):map__31379);
var t = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__31381_31399 = cljs.core.seq.call(null,protocols);
var chunk__31382_31400 = null;
var count__31383_31401 = (0);
var i__31384_31402 = (0);
while(true){
if((i__31384_31402 < count__31383_31401)){
var protocol_31403 = cljs.core._nth.call(null,chunk__31382_31400,i__31384_31402);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31403)].join('')),"}");

var G__31404 = seq__31381_31399;
var G__31405 = chunk__31382_31400;
var G__31406 = count__31383_31401;
var G__31407 = (i__31384_31402 + (1));
seq__31381_31399 = G__31404;
chunk__31382_31400 = G__31405;
count__31383_31401 = G__31406;
i__31384_31402 = G__31407;
continue;
} else {
var temp__5457__auto___31408 = cljs.core.seq.call(null,seq__31381_31399);
if(temp__5457__auto___31408){
var seq__31381_31409__$1 = temp__5457__auto___31408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31381_31409__$1)){
var c__9847__auto___31410 = cljs.core.chunk_first.call(null,seq__31381_31409__$1);
var G__31411 = cljs.core.chunk_rest.call(null,seq__31381_31409__$1);
var G__31412 = c__9847__auto___31410;
var G__31413 = cljs.core.count.call(null,c__9847__auto___31410);
var G__31414 = (0);
seq__31381_31399 = G__31411;
chunk__31382_31400 = G__31412;
count__31383_31401 = G__31413;
i__31384_31402 = G__31414;
continue;
} else {
var protocol_31415 = cljs.core.first.call(null,seq__31381_31409__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31415)].join('')),"}");

var G__31416 = cljs.core.next.call(null,seq__31381_31409__$1);
var G__31417 = null;
var G__31418 = (0);
var G__31419 = (0);
seq__31381_31399 = G__31416;
chunk__31382_31400 = G__31417;
count__31383_31401 = G__31418;
i__31384_31402 = G__31419;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__31385_31420 = cljs.core.seq.call(null,fields__$1);
var chunk__31386_31421 = null;
var count__31387_31422 = (0);
var i__31388_31423 = (0);
while(true){
if((i__31388_31423 < count__31387_31422)){
var fld_31424 = cljs.core._nth.call(null,chunk__31386_31421,i__31388_31423);
cljs.compiler.emitln.call(null,"this.",fld_31424," = ",fld_31424,";");

var G__31425 = seq__31385_31420;
var G__31426 = chunk__31386_31421;
var G__31427 = count__31387_31422;
var G__31428 = (i__31388_31423 + (1));
seq__31385_31420 = G__31425;
chunk__31386_31421 = G__31426;
count__31387_31422 = G__31427;
i__31388_31423 = G__31428;
continue;
} else {
var temp__5457__auto___31429 = cljs.core.seq.call(null,seq__31385_31420);
if(temp__5457__auto___31429){
var seq__31385_31430__$1 = temp__5457__auto___31429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31385_31430__$1)){
var c__9847__auto___31431 = cljs.core.chunk_first.call(null,seq__31385_31430__$1);
var G__31432 = cljs.core.chunk_rest.call(null,seq__31385_31430__$1);
var G__31433 = c__9847__auto___31431;
var G__31434 = cljs.core.count.call(null,c__9847__auto___31431);
var G__31435 = (0);
seq__31385_31420 = G__31432;
chunk__31386_31421 = G__31433;
count__31387_31422 = G__31434;
i__31388_31423 = G__31435;
continue;
} else {
var fld_31436 = cljs.core.first.call(null,seq__31385_31430__$1);
cljs.compiler.emitln.call(null,"this.",fld_31436," = ",fld_31436,";");

var G__31437 = cljs.core.next.call(null,seq__31385_31430__$1);
var G__31438 = null;
var G__31439 = (0);
var G__31440 = (0);
seq__31385_31420 = G__31437;
chunk__31386_31421 = G__31438;
count__31387_31422 = G__31439;
i__31388_31423 = G__31440;
continue;
}
} else {
}
}
break;
}

var seq__31389_31441 = cljs.core.seq.call(null,pmasks);
var chunk__31390_31442 = null;
var count__31391_31443 = (0);
var i__31392_31444 = (0);
while(true){
if((i__31392_31444 < count__31391_31443)){
var vec__31393_31445 = cljs.core._nth.call(null,chunk__31390_31442,i__31392_31444);
var pno_31446 = cljs.core.nth.call(null,vec__31393_31445,(0),null);
var pmask_31447 = cljs.core.nth.call(null,vec__31393_31445,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31446,"$ = ",pmask_31447,";");

var G__31448 = seq__31389_31441;
var G__31449 = chunk__31390_31442;
var G__31450 = count__31391_31443;
var G__31451 = (i__31392_31444 + (1));
seq__31389_31441 = G__31448;
chunk__31390_31442 = G__31449;
count__31391_31443 = G__31450;
i__31392_31444 = G__31451;
continue;
} else {
var temp__5457__auto___31452 = cljs.core.seq.call(null,seq__31389_31441);
if(temp__5457__auto___31452){
var seq__31389_31453__$1 = temp__5457__auto___31452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31389_31453__$1)){
var c__9847__auto___31454 = cljs.core.chunk_first.call(null,seq__31389_31453__$1);
var G__31455 = cljs.core.chunk_rest.call(null,seq__31389_31453__$1);
var G__31456 = c__9847__auto___31454;
var G__31457 = cljs.core.count.call(null,c__9847__auto___31454);
var G__31458 = (0);
seq__31389_31441 = G__31455;
chunk__31390_31442 = G__31456;
count__31391_31443 = G__31457;
i__31392_31444 = G__31458;
continue;
} else {
var vec__31396_31459 = cljs.core.first.call(null,seq__31389_31453__$1);
var pno_31460 = cljs.core.nth.call(null,vec__31396_31459,(0),null);
var pmask_31461 = cljs.core.nth.call(null,vec__31396_31459,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31460,"$ = ",pmask_31461,";");

var G__31462 = cljs.core.next.call(null,seq__31389_31453__$1);
var G__31463 = null;
var G__31464 = (0);
var G__31465 = (0);
seq__31389_31441 = G__31462;
chunk__31390_31442 = G__31463;
count__31391_31443 = G__31464;
i__31392_31444 = G__31465;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__31466){
var map__31467 = p__31466;
var map__31467__$1 = ((((!((map__31467 == null)))?((((map__31467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31467):map__31467);
var target = cljs.core.get.call(null,map__31467__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__31467__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__31467__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__31467__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31467__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__31469){
var map__31470 = p__31469;
var map__31470__$1 = ((((!((map__31470 == null)))?((((map__31470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31470):map__31470);
var op = cljs.core.get.call(null,map__31470__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__31470__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__31470__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__31470__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__31470__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8904__auto__ = code;
if(cljs.core.truth_(and__8904__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__8904__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__30386__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__30386__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__31475 = cljs.core.seq.call(null,table);
var chunk__31476 = null;
var count__31477 = (0);
var i__31478 = (0);
while(true){
if((i__31478 < count__31477)){
var vec__31479 = cljs.core._nth.call(null,chunk__31476,i__31478);
var sym = cljs.core.nth.call(null,vec__31479,(0),null);
var value = cljs.core.nth.call(null,vec__31479,(1),null);
var ns_31485 = cljs.core.namespace.call(null,sym);
var name_31486 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__31487 = seq__31475;
var G__31488 = chunk__31476;
var G__31489 = count__31477;
var G__31490 = (i__31478 + (1));
seq__31475 = G__31487;
chunk__31476 = G__31488;
count__31477 = G__31489;
i__31478 = G__31490;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31475);
if(temp__5457__auto__){
var seq__31475__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31475__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__31475__$1);
var G__31491 = cljs.core.chunk_rest.call(null,seq__31475__$1);
var G__31492 = c__9847__auto__;
var G__31493 = cljs.core.count.call(null,c__9847__auto__);
var G__31494 = (0);
seq__31475 = G__31491;
chunk__31476 = G__31492;
count__31477 = G__31493;
i__31478 = G__31494;
continue;
} else {
var vec__31482 = cljs.core.first.call(null,seq__31475__$1);
var sym = cljs.core.nth.call(null,vec__31482,(0),null);
var value = cljs.core.nth.call(null,vec__31482,(1),null);
var ns_31495 = cljs.core.namespace.call(null,sym);
var name_31496 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__31497 = cljs.core.next.call(null,seq__31475__$1);
var G__31498 = null;
var G__31499 = (0);
var G__31500 = (0);
seq__31475 = G__31497;
chunk__31476 = G__31498;
count__31477 = G__31499;
i__31478 = G__31500;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__31502 = arguments.length;
switch (G__31502) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_31507 = cljs.core.first.call(null,ks);
var vec__31503_31508 = cljs.core.conj.call(null,prefix,k_31507);
var top_31509 = cljs.core.nth.call(null,vec__31503_31508,(0),null);
var prefix_SINGLEQUOTE__31510 = vec__31503_31508;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_31507)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__31510) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_31509)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_31509)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__31510)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_31509);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__31510)),";");
}
} else {
}

var m_31511 = cljs.core.get.call(null,externs,k_31507);
if(cljs.core.empty_QMARK_.call(null,m_31511)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__31510,m_31511,top_level,known_externs);
}

var G__31512 = cljs.core.next.call(null,ks);
ks = G__31512;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
