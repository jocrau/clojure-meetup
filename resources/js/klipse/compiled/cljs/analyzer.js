// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.env');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_checked_arrays_STAR_ = false;
cljs.analyzer._STAR_check_alias_dupes_STAR_ = true;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_fn_invoke_direct_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558),cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer._STAR_file_defs_STAR_ = null;
/**
 * The namespace of the constants table as a symbol.
 */
cljs.analyzer.constants_ns_sym = new cljs.core.Symbol(null,"cljs.core.constants","cljs.core.constants",2057417066,null);
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = cljs.core.atom.call(null,false);
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.unchecked_arrays_QMARK_ = (function cljs$analyzer$unchecked_arrays_QMARK_(){
return cljs.core._STAR_unchecked_arrays_STAR_;
});
/**
 * Returns false-y, :warn, or :error based on configuration and the
 * current value of *unchecked-arrays*.
 */
cljs.analyzer.checked_arrays = (function cljs$analyzer$checked_arrays(){
if((cljs.core.not.call(null,new cljs.core.Keyword(null,"advanced","advanced",-451287892).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))) && (!(cljs.core._STAR_unchecked_arrays_STAR_))){
return cljs.analyzer._STAR_checked_arrays_STAR_;
} else {
return null;
}
});
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 63, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"await",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"constructor",null,"in",null,"enum",null], null), null);
cljs.analyzer.es5_allowed = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["default",null], null), null);
cljs.analyzer.SENTINEL = {};
cljs.analyzer.gets = (function cljs$analyzer$gets(var_args){
var G__28853 = arguments.length;
switch (G__28853) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.call(null,m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;

cljs.analyzer.CLJ_NIL_SYM = new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null);
cljs.analyzer.NUMBER_SYM = new cljs.core.Symbol(null,"number","number",-1084057331,null);
cljs.analyzer.STRING_SYM = new cljs.core.Symbol(null,"string","string",-349010059,null);
cljs.analyzer.BOOLEAN_SYM = new cljs.core.Symbol(null,"boolean","boolean",-278886877,null);
cljs.analyzer.JS_STAR_SYM = new cljs.core.Symbol(null,"js*","js*",-1134233646,null);
cljs.analyzer.DOT_SYM = new cljs.core.Symbol(null,".",".",1975675962,null);
cljs.analyzer.NEW_SYM = new cljs.core.Symbol(null,"new","new",-444906321,null);
cljs.analyzer.CLJS_CORE_SYM = new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null);
cljs.analyzer.CLJS_CORE_MACROS_SYM = new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null);
cljs.analyzer.IGNORE_SYM = new cljs.core.Symbol(null,"ignore","ignore",8989494,null);
cljs.analyzer.ANY_SYM = new cljs.core.Symbol(null,"any","any",-948528346,null);
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISeq$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IVector$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss)].join(''));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 *   provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(var_args){
var G__28860 = arguments.length;
switch (G__28860) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.call(null,ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns),".","/")),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,ext))].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;

cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(var_args){
var G__28863 = arguments.length;
switch (G__28863) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.call(null,x,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)),cljs.core.memoize.call(null,get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = memo_get_deps.call(null,x);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28864_28879 = cljs.core.seq.call(null,deps);
var chunk__28865_28880 = null;
var count__28866_28881 = (0);
var i__28867_28882 = (0);
while(true){
if((i__28867_28882 < count__28866_28881)){
var dep_28883 = cljs.core._nth.call(null,chunk__28865_28880,i__28867_28882);
cljs.analyzer.topo_sort.call(null,dep_28883,(depth + (1)),state,memo_get_deps);

var G__28884 = seq__28864_28879;
var G__28885 = chunk__28865_28880;
var G__28886 = count__28866_28881;
var G__28887 = (i__28867_28882 + (1));
seq__28864_28879 = G__28884;
chunk__28865_28880 = G__28885;
count__28866_28881 = G__28886;
i__28867_28882 = G__28887;
continue;
} else {
var temp__5457__auto___28888 = cljs.core.seq.call(null,seq__28864_28879);
if(temp__5457__auto___28888){
var seq__28864_28889__$1 = temp__5457__auto___28888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28864_28889__$1)){
var c__9847__auto___28890 = cljs.core.chunk_first.call(null,seq__28864_28889__$1);
var G__28891 = cljs.core.chunk_rest.call(null,seq__28864_28889__$1);
var G__28892 = c__9847__auto___28890;
var G__28893 = cljs.core.count.call(null,c__9847__auto___28890);
var G__28894 = (0);
seq__28864_28879 = G__28891;
chunk__28865_28880 = G__28892;
count__28866_28881 = G__28893;
i__28867_28882 = G__28894;
continue;
} else {
var dep_28895 = cljs.core.first.call(null,seq__28864_28889__$1);
cljs.analyzer.topo_sort.call(null,dep_28895,(depth + (1)),state,memo_get_deps);

var G__28896 = cljs.core.next.call(null,seq__28864_28889__$1);
var G__28897 = null;
var G__28898 = (0);
var G__28899 = (0);
seq__28864_28879 = G__28896;
chunk__28865_28880 = G__28897;
count__28866_28881 = G__28898;
i__28867_28882 = G__28899;
continue;
}
} else {
}
}
break;
}

var seq__28868_28900 = cljs.core.seq.call(null,cljs.core.subseq.call(null,cljs.core.deref.call(null,state),cljs.core._LT_,depth));
var chunk__28869_28901 = null;
var count__28870_28902 = (0);
var i__28871_28903 = (0);
while(true){
if((i__28871_28903 < count__28870_28902)){
var vec__28872_28904 = cljs.core._nth.call(null,chunk__28869_28901,i__28871_28903);
var _LT_depth_28905 = cljs.core.nth.call(null,vec__28872_28904,(0),null);
var __28906 = cljs.core.nth.call(null,vec__28872_28904,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_28905], null),clojure.set.difference,deps);

var G__28907 = seq__28868_28900;
var G__28908 = chunk__28869_28901;
var G__28909 = count__28870_28902;
var G__28910 = (i__28871_28903 + (1));
seq__28868_28900 = G__28907;
chunk__28869_28901 = G__28908;
count__28870_28902 = G__28909;
i__28871_28903 = G__28910;
continue;
} else {
var temp__5457__auto___28911 = cljs.core.seq.call(null,seq__28868_28900);
if(temp__5457__auto___28911){
var seq__28868_28912__$1 = temp__5457__auto___28911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28868_28912__$1)){
var c__9847__auto___28913 = cljs.core.chunk_first.call(null,seq__28868_28912__$1);
var G__28914 = cljs.core.chunk_rest.call(null,seq__28868_28912__$1);
var G__28915 = c__9847__auto___28913;
var G__28916 = cljs.core.count.call(null,c__9847__auto___28913);
var G__28917 = (0);
seq__28868_28900 = G__28914;
chunk__28869_28901 = G__28915;
count__28870_28902 = G__28916;
i__28871_28903 = G__28917;
continue;
} else {
var vec__28875_28918 = cljs.core.first.call(null,seq__28868_28912__$1);
var _LT_depth_28919 = cljs.core.nth.call(null,vec__28875_28918,(0),null);
var __28920 = cljs.core.nth.call(null,vec__28875_28918,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_28919], null),clojure.set.difference,deps);

var G__28921 = cljs.core.next.call(null,seq__28868_28912__$1);
var G__28922 = null;
var G__28923 = (0);
var G__28924 = (0);
seq__28868_28900 = G__28921;
chunk__28869_28901 = G__28922;
count__28870_28902 = G__28923;
i__28871_28903 = G__28924;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;


cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword(null,"op","op",-1882987955)));
});
if(typeof cljs.analyzer.error_message !== 'undefined'){
} else {
cljs.analyzer.error_message = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","error-message"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function() { 
var G__28925__delegate = function (warning_type,_){
return warning_type;
};
var G__28925 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__28926__i = 0, G__28926__a = new Array(arguments.length -  1);
while (G__28926__i < G__28926__a.length) {G__28926__a[G__28926__i] = arguments[G__28926__i + 1]; ++G__28926__i;}
  _ = new cljs.core.IndexedSeq(G__28926__a,0,null);
} 
return G__28925__delegate.call(this,warning_type,_);};
G__28925.cljs$lang$maxFixedArity = 1;
G__28925.cljs$lang$applyTo = (function (arglist__28927){
var warning_type = cljs.core.first(arglist__28927);
var _ = cljs.core.rest(arglist__28927);
return G__28925__delegate(warning_type,_);
});
G__28925.cljs$core$IFn$_invoke$arity$variadic = G__28925__delegate;
return G__28925;
})()
;})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),(function (warning_type,info){
return ["Preamble resource file not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),(function (warning_type,info){
return ["Required namespace not provided for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",new cljs.core.Keyword(null,"unprovided","unprovided",-652330764).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205).cljs$core$IFn$_invoke$arity$1(info))?"Can't take value of macro ":"Use of undeclared Var ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(info)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),(function (warning_type,p__28928){
var map__28929 = p__28928;
var map__28929__$1 = ((((!((map__28929 == null)))?((((map__28929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28929):map__28929);
var info = map__28929__$1;
var ns_sym = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return ["No such namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljs","cljs",1492417629))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583))),", or JavaScript source providing \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_provide),"\""].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430),(function (warning_type,p__28931){
var map__28932 = p__28931;
var map__28932__$1 = ((((!((map__28932 == null)))?((((map__28932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28932):map__28932);
var info = map__28932__$1;
var ns_sym = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return ["No such macros namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"clj","clj",-660495428)))," or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," not declared ^:dynamic"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"redef","redef",1032704258),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," already refers to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join('')))," being replaced by: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join('')))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(info))," is being replaced"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join('')))," no longer fn, references are stale"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),(function (warning_type,info){
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"argc","argc",-1452839519).cljs$core$IFn$_invoke$arity$1(info)),") passed to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8916__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info))))," is deprecated."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),(function (warning_type,info){
return ["Invalid :refer, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lib","lib",191808726).cljs$core$IFn$_invoke$arity$1(info)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," does not exist"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," is deprecated"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),(function (warning_type,info){
return ["Can't resolve protocol symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),(function (warning_type,info){
return ["Symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," is not a protocol"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),(function (warning_type,info){
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840).cljs$core$IFn$_invoke$arity$1(info))){
return ["Bad method signature in protocol implementation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," does not declare method called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return ["Bad method signature in protocol implementation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))," does not declare arity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949).cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),(function (warning_type,info){
return ["Duplicated methods in protocol implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," implemented multiple times"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," declares method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," with variadic signature (&)"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," implements method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," with variadic signature (&)"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),(function (warning_type,info){
return ["Ignoring target object \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(info))),"\" passed in recur to protocol method head"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have more than 1 variadic overload"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have fixed arity function with more params than variadic function"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have 2 overloads with same arity"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),(function (warning_type,info){
return ["Extending an existing JavaScript type - use a different symbol name ","instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075).cljs$core$IFn$_invoke$arity$1(info))," e.g ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(info)),", all arguments must be numbers, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(info))," instead."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),(function (warning_type,p__28934){
var map__28935 = p__28934;
var map__28935__$1 = ((((!((map__28935 == null)))?((((map__28935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28935):map__28935);
var name = cljs.core.get.call(null,map__28935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var types = cljs.core.get.call(null,map__28935__$1,new cljs.core.Keyword(null,"types","types",590030639));
var G__28937 = name;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),G__28937)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types))))?[" (consider ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys"))," for object access)"].join(''):null))].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),G__28937)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types))))?[" (consider ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys"))," for object access)"].join(''):null))].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),G__28937)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types)))))?" (consider goog.object/set for object access)":null))].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),G__28937)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types)))))?" (consider goog.object/set for object access)":null))].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28937)].join('')));

}
}
}
}
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),(function (warning_type,info){
return ["Cannot invoke type constructor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info))))," as function "].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," is a single segment namespace"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),(function (warning_type,p__28939){
var map__28940 = p__28939;
var map__28940__$1 = ((((!((map__28940 == null)))?((((map__28940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28940):map__28940);
var info = map__28940__$1;
var name = cljs.core.get.call(null,map__28940__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var munged = cljs.core.munge.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,((function (map__28940,map__28940__$1,info,name){
return (function (p1__28938_SHARP_){
if(cljs.core.truth_(cljs.analyzer.js_reserved.call(null,p1__28938_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28938_SHARP_),"$"].join('');
} else {
return p1__28938_SHARP_;
}
});})(map__28940,map__28940__$1,info,name))
,clojure.string.split.call(null,cljs.core.name.call(null,name),/\./))));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," contains a reserved JavaScript keyword,"," the corresponding Google Closure namespace will be munged to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),(function (warning_type,p__28942){
var map__28943 = p__28942;
var map__28943__$1 = ((((!((map__28943 == null)))?((((map__28943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28943):map__28943);
var info = map__28943__$1;
var ns = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var var$ = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," clashes with var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),(function (warning_type,p__28945){
var map__28946 = p__28945;
var map__28946__$1 = ((((!((map__28946 == null)))?((((map__28946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28946):map__28946);
var info = map__28946__$1;
var protocol = cljs.core.get.call(null,map__28946__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var method = cljs.core.get.call(null,map__28946__$1,new cljs.core.Keyword(null,"method","method",55703592));
return ["Bad extend-type method shape for protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),", method arities must be grouped together"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),(function (warning_type,p__28948){
var map__28949 = p__28948;
var map__28949__$1 = ((((!((map__28949 == null)))?((((map__28949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28949):map__28949);
var info = map__28949__$1;
var module_type = cljs.core.get.call(null,map__28949__$1,new cljs.core.Keyword(null,"module-type","module-type",1392760304));
var file = cljs.core.get.call(null,map__28949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported JavaScript module type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_type)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),(function (warning_type,p__28951){
var map__28952 = p__28951;
var map__28952__$1 = ((((!((map__28952 == null)))?((((map__28952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28952):map__28952);
var preprocess = cljs.core.get.call(null,map__28952__$1,new cljs.core.Keyword(null,"preprocess","preprocess",1208285012));
var file = cljs.core.get.call(null,map__28952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported preprocess value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preprocess)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),(function (warning_type,p__28954){
var map__28955 = p__28954;
var map__28955__$1 = ((((!((map__28955 == null)))?((((map__28955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28955):map__28955);
var name = cljs.core.get.call(null,map__28955__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," is shadowed by a local"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),(function (warning_type,p__28957){
var map__28958 = p__28957;
var map__28958__$1 = ((((!((map__28958 == null)))?((((map__28958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28958):map__28958);
var warn_type = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"warn-type","warn-type",-790105219));
var form = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var type = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var property = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var G__28960 = warn_type;
var G__28960__$1 = (((G__28960 instanceof cljs.core.Keyword))?G__28960.fqn:null);
switch (G__28960__$1) {
case "target":
return ["Cannot infer target type in expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),""].join('');

break;
case "property":
return ["Cannot resolve property ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)," for inferred type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," in expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
case "object":
return ["Adding extern to Object for property ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)," due to ","ambiguous expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28960__$1)].join('')));

}
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__5457__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
var _STAR_print_fn_STAR_28962 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.println.call(null,cljs.analyzer.message.call(null,env,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28962;
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.repeat_char = (function cljs$analyzer$repeat_char(c,n){
var ret = c;
var n__$1 = n;
while(true){
if((n__$1 > (0))){
var G__28963 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
var G__28964 = (n__$1 - (1));
ret = G__28963;
n__$1 = G__28964;
continue;
} else {
return ret;
}
break;
}
});
cljs.analyzer.hex_format = (function cljs$analyzer$hex_format(s,pad){
var hex = s.charCodeAt((0)).toString((16));
var len = hex.length;
var hex__$1 = (((len < pad))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.repeat_char.call(null,"0",(pad - len))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join(''):hex);
return ["_u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex__$1),"_"].join('');
});
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error(["constant type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,value))," not supported"].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),(1)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
var name__$1 = ((cljs.core._EQ_.call(null,".",name))?"_DOT_":clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.munge.call(null,clojure.string.replace.call(null,name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,((function (prefix,name){
return (function (p1__28965_SHARP_){
return cljs.analyzer.hex_format.call(null,p1__28965_SHARP_,(4));
});})(prefix,name))
));
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
var G__28967 = arguments.length;
switch (G__28967) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.call(null,null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__28968 = cljs.core.update_in.call(null,cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889)], null),(function (table){
if(cljs.core.truth_(cljs.core.get.call(null,table,val))){
return table;
} else {
return cljs.core.assoc.call(null,table,val,cljs.analyzer.gen_constant_id.call(null,val));
}
}));
if(cljs.core.truth_(env)){
return cljs.core.update_in.call(null,G__28968,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770)], null),((function (G__28968){
return (function (p__28969){
var map__28970 = p__28969;
var map__28970__$1 = ((((!((map__28970 == null)))?((((map__28970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28970):map__28970);
var constants = map__28970__$1;
var seen = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY);
var G__28972 = constants;
if(!(cljs.core.contains_QMARK_.call(null,seen,val))){
return cljs.core.assoc.call(null,G__28972,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,val),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.call(null,order,val));
} else {
return G__28972;
}
});})(G__28968))
);
} else {
return G__28968;
}
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t_cljs$analyzer28974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.analyzer.t_cljs$analyzer28974 = (function (meta28975){
this.meta28975 = meta28975;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.analyzer.t_cljs$analyzer28974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28976,meta28975__$1){
var self__ = this;
var _28976__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer28974(meta28975__$1));
});

cljs.analyzer.t_cljs$analyzer28974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28976){
var self__ = this;
var _28976__$1 = this;
return self__.meta28975;
});

cljs.analyzer.t_cljs$analyzer28974.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t_cljs$analyzer28974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28975","meta28975",-1777953807,null)], null);
});

cljs.analyzer.t_cljs$analyzer28974.cljs$lang$type = true;

cljs.analyzer.t_cljs$analyzer28974.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer28974";

cljs.analyzer.t_cljs$analyzer28974.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.analyzer/t_cljs$analyzer28974");
});

cljs.analyzer.__GT_t_cljs$analyzer28974 = (function cljs$analyzer$__GT_t_cljs$analyzer28974(meta28975){
return (new cljs.analyzer.t_cljs$analyzer28974(meta28975));
});

}

return (new cljs.analyzer.t_cljs$analyzer28974(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var G__28978 = arguments.length;
switch (G__28978) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.call(null,cljs.env._STAR_compiler_STAR_,key);
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var temp__5459__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cenv),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),key], null));
if((temp__5459__auto__ == null)){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null);
} else {
return null;
}
} else {
var ns = temp__5459__auto__;
return ns;
}
});

cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2;

cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__8916__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__8916__auto__ = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(var_args){
var G__28981 = arguments.length;
switch (G__28981) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.call(null,ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__8916__auto__ = (cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)) == null);
if(or__8916__auto__){
return or__8916__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28982){
var vec__28983 = p__28982;
var k = cljs.core.nth.call(null,vec__28983,(0),null);
var v = cljs.core.nth.call(null,vec__28983,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta.call(null,v);
var ns__$1 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.call(null,vm,new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),new cljs.core.Keyword(null,"macro","macro",-867863404),true);
})()], null);
}),cljs.core.filter.call(null,(function (p__28986){
var vec__28987 = p__28986;
var _ = cljs.core.nth.call(null,vec__28987,(0),null);
var v = cljs.core.nth.call(null,vec__28987,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_.call(null,ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;

/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__28791__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__28791__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (val__28791__auto__){
return (function (p1__28991_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28991_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),p1__28991_SHARP_], null)],null));
});})(val__28791__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__28791__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var G__28993 = arguments.length;
switch (G__28993) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.analyzer.source_info.call(null,null,env);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
var G__28994 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,name,env)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.call(null,G__28994,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912)], null)));
} else {
return G__28994;
}
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;

cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[" in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null)))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__28996 = cljs.core.seq.call(null,cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__28997 = null;
var count__28998 = (0);
var i__28999 = (0);
while(true){
if((i__28999 < count__28998)){
var handler = cljs.core._nth.call(null,chunk__28997,i__28999);
handler.call(null,warning_type,env,extra);

var G__29000 = seq__28996;
var G__29001 = chunk__28997;
var G__29002 = count__28998;
var G__29003 = (i__28999 + (1));
seq__28996 = G__29000;
chunk__28997 = G__29001;
count__28998 = G__29002;
i__28999 = G__29003;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28996);
if(temp__5457__auto__){
var seq__28996__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28996__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__28996__$1);
var G__29004 = cljs.core.chunk_rest.call(null,seq__28996__$1);
var G__29005 = c__9847__auto__;
var G__29006 = cljs.core.count.call(null,c__9847__auto__);
var G__29007 = (0);
seq__28996 = G__29004;
chunk__28997 = G__29005;
count__28998 = G__29006;
i__28999 = G__29007;
continue;
} else {
var handler = cljs.core.first.call(null,seq__28996__$1);
handler.call(null,warning_type,env,extra);

var G__29008 = cljs.core.next.call(null,seq__28996__$1);
var G__29009 = null;
var G__29010 = (0);
var G__29011 = (0);
seq__28996 = G__29008;
chunk__28997 = G__29009;
count__28998 = G__29010;
i__28999 = G__29011;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.error = (function cljs$analyzer$error(var_args){
var G__29013 = arguments.length;
switch (G__29013) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.call(null,env,msg,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.call(null,cljs.analyzer.message.call(null,env,msg),cljs.core.assoc.call(null,cljs.analyzer.source_info.call(null,env),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349)),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;

cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,ex)));
});
cljs.analyzer.implicit_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"String","String",-2070057435,null),null,new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),null,new cljs.core.Symbol(null,"goog","goog",-70603925,null),null,new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),null,new cljs.core.Symbol(null,"Math","Math",2033287572,null),null,new cljs.core.Symbol(null,"goog.array","goog.array",-671977860,null),null], null), null);
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_.call(null,cljs.analyzer.implicit_nses,prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),env__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix__$1,new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205),!((cljs.analyzer.get_expander.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)].join('')),env__$1) == null))], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 *   not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix))){
return null;
} else {
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env);
return (!((cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))) || (!((cljs.core.get.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null)));
}
});
cljs.analyzer.internal_js_module_exists_QMARK_ = (function cljs$analyzer$internal_js_module_exists_QMARK_(js_module_index,module){
return cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p__29016){
var vec__29017 = p__29016;
var k = cljs.core.nth.call(null,vec__29017,(0),null);
var v = cljs.core.nth.call(null,vec__29017,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)], null);
})),js_module_index),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module)].join(''));
});
cljs.analyzer.js_module_exists_QMARK__STAR_ = cljs.core.memoize.call(null,cljs.analyzer.internal_js_module_exists_QMARK_);
cljs.analyzer.js_module_exists_QMARK_ = (function cljs$analyzer$js_module_exists_QMARK_(module){
return cljs.analyzer.js_module_exists_QMARK__STAR_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931)], null)),module);
});
cljs.analyzer.node_module_dep_QMARK_ = (function cljs$analyzer$node_module_dep_QMARK_(module){
try{return (cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs")) && (cljs.core.boolean$.call(null,require.resolve([cljs.core.str.cljs$core$IFn$_invoke$arity$1(module)].join(''))));
}catch (e29020){var _ = e29020;
return false;
}});
cljs.analyzer.dep_has_global_exports_QMARK_ = (function cljs$analyzer$dep_has_global_exports_QMARK_(module){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module)].join(''),new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592)], null)),cljs.core.symbol.call(null,module));
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(var_args){
var G__29022 = arguments.length;
switch (G__29022) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning.call(null,env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,warn);
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
var suffix_str = (((!((".." === sufstr))) && (/\./.test(sufstr)))?cljs.core.first.call(null,clojure.string.split.call(null,sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.call(null,suffix_str);
if((!(cljs.analyzer.implicit_import_QMARK_.call(null,env,prefix,suffix__$1))) && (!(cljs.analyzer.loaded_js_ns_QMARK_.call(null,env,prefix))) && (!((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),prefix)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),suffix__$1)))) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),suffix__$1) == null)) && (cljs.core.not.call(null,cljs.analyzer.js_module_exists_QMARK_.call(null,prefix)))){
return missing_fn.call(null,env,prefix,suffix__$1);
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;

cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.call(null,env__$1,["Unable to resolve var: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)," in this context"].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(var_args){
var G__29025 = arguments.length;
switch (G__29025) {
case 2:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,not_found){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,not_found);
});

cljs.analyzer.resolve_ns_alias.cljs$lang$maxFixedArity = 3;

cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(var_args){
var G__29028 = arguments.length;
switch (G__29028) {
case 2:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_macro_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,not_found){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,not_found);
});

cljs.analyzer.resolve_macro_ns_alias.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),ns_sym)) && ((cljs.core.get.call(null,cljs.analyzer.implicit_nses,ns_sym) == null)) && ((cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_sym) == null)) && (cljs.core.not.call(null,cljs.analyzer.js_module_exists_QMARK_.call(null,ns_sym)))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),ns_sym,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__8904__auto__ = (function (){var or__8916__auto__ = !((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym) == null));
if(or__8916__auto__){
return or__8916__auto__;
} else {
var temp__5459__auto__ = cljs.analyzer.get_expander.call(null,sym,env);
if((temp__5459__auto__ == null)){
return false;
} else {
var mac = temp__5459__auto__;
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mac));
return cljs.core._EQ_.call(null,ns.getName(),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null));
}
}
})();
if(and__8904__auto__){
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym));
} else {
return and__8904__auto__;
}
});
/**
 * Is sym public?
 */
cljs.analyzer.public_name_QMARK_ = (function cljs$analyzer$public_name_QMARK_(ns,sym){
var var_ast = (function (){var or__8916__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,ns)),"$macros"].join('')),new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
}
})();
return (!((var_ast == null))) && (cljs.core.not.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(var_ast);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"anonymous","anonymous",447897231).cljs$core$IFn$_invoke$arity$1(var_ast);
}
})()));
});
cljs.analyzer.js_tag_QMARK_ = (function cljs$analyzer$js_tag_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),x)) || (cljs.core._EQ_.call(null,"js",cljs.core.namespace.call(null,x))));
});
cljs.analyzer.normalize_js_tag = (function cljs$analyzer$normalize_js_tag(x){
if(!(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),x))){
return cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.name.call(null,x),/\./))),new cljs.core.Symbol(null,"prototype","prototype",519166522,null))], null));
} else {
return x;
}
});
cljs.analyzer.alias__GT_type = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol(null,"Object","Object",61210754,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol(null,"String","String",-2070057435,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"Number","Number",-508146185,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol(null,"Array","Array",-423496279,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"Function","Function",-749895448,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"Boolean","Boolean",1661141587,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null)], null);
cljs.analyzer.has_extern_QMARK__STAR_ = (function cljs$analyzer$has_extern_QMARK__STAR_(var_args){
var G__29031 = arguments.length;
switch (G__29031) {
case 2:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var pre__$1 = (function (){var temp__5459__auto__ = cljs.core.find.call(null,cljs.core.get_in.call(null,externs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Window","Window",-138860255,null),new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null)),cljs.core.first.call(null,pre));
if((temp__5459__auto__ == null)){
return pre;
} else {
var me = temp__5459__auto__;
var temp__5459__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,me)));
if((temp__5459__auto____$1 == null)){
return pre;
} else {
var tag = temp__5459__auto____$1;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre));
}
}
})();
return cljs.analyzer.has_extern_QMARK__STAR_.call(null,pre__$1,externs,externs);
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (pre,externs,top){
while(true){
if(cljs.core.empty_QMARK_.call(null,pre)){
return true;
} else {
var x = cljs.core.first.call(null,pre);
var me = cljs.core.find.call(null,externs,x);
if(cljs.core.not.call(null,me)){
return false;
} else {
var vec__29032 = me;
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29032,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29032,(1),null);
var xmeta = cljs.core.meta.call(null,x_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Function","Function",-749895448,null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(xmeta));
if(and__8904__auto__){
return new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(xmeta);
} else {
return and__8904__auto__;
}
})())){
var or__8916__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre)),externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.analyzer.has_extern_QMARK__STAR_.call(null,cljs.core.next.call(null,pre),externs_SINGLEQUOTE_,top);
}
} else {
var G__29036 = cljs.core.next.call(null,pre);
var G__29037 = externs_SINGLEQUOTE_;
var G__29038 = top;
pre = G__29036;
externs = G__29037;
top = G__29038;
continue;
}

}

}
break;
}
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$lang$maxFixedArity = 3;

cljs.analyzer.has_extern_QMARK_ = (function cljs$analyzer$has_extern_QMARK_(var_args){
var G__29040 = arguments.length;
switch (G__29040) {
case 1:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.has_extern_QMARK_.call(null,pre,cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239)));
});

cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var or__8916__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.call(null,pre,externs);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pre)))?(function (){var x = cljs.core.first.call(null,pre);
var or__8916__auto____$1 = cljs.core.get_in.call(null,externs,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Window","Window",-138860255,null),new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),x));
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
return cljs.core.get_in.call(null,externs,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Number","Number",-508146185,null)], null),x));
}
})():null);
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
return clojure.string.starts_with_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pre))].join(''),"cljs$");
}
}
});

cljs.analyzer.has_extern_QMARK_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.js_tag = (function cljs$analyzer$js_tag(var_args){
var G__29043 = arguments.length;
switch (G__29043) {
case 1:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.js_tag.call(null,pre,new cljs.core.Keyword(null,"tag","tag",-1290361223));
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2 = (function (pre,tag_type){
return cljs.analyzer.js_tag.call(null,pre,tag_type,cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239)));
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3 = (function (pre,tag_type,externs){
return cljs.analyzer.js_tag.call(null,pre,tag_type,externs,externs);
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4 = (function (pre,tag_type,externs,top){
var temp__5457__auto__ = cljs.core.find.call(null,externs,cljs.core.first.call(null,pre));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__29044 = temp__5457__auto__;
var p = cljs.core.nth.call(null,vec__29044,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29044,(1),null);
var me = vec__29044;
var tag = tag_type.call(null,cljs.core.meta.call(null,p));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pre),(1))){
if(cljs.core.truth_(tag)){
return cljs.core.symbol.call(null,"js",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.alias__GT_type.call(null,tag,tag))].join(''));
} else {
return null;
}
} else {
var or__8916__auto__ = cljs.analyzer.js_tag.call(null,cljs.core.next.call(null,pre),tag_type,externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.analyzer.js_tag.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre)),tag_type,cljs.core.get.call(null,top,tag),top);
}
}
} else {
return null;
}
});

cljs.analyzer.js_tag.cljs$lang$maxFixedArity = 4;

cljs.analyzer.dotted_symbol_QMARK_ = (function cljs$analyzer$dotted_symbol_QMARK_(sym){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('');
return (goog.string.contains(s,".")) && (!(goog.string.contains(s,"..")));
});
cljs.analyzer.munge_node_lib = (function cljs$analyzer$munge_node_lib(name){
return ["node$module$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),/[.\\/]/,"\\$")))].join('');
});
cljs.analyzer.munge_global_export = (function cljs$analyzer$munge_global_export(name){
return ["global$module$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),/[.\\/]/,"\\$")))].join('');
});
/**
 * Takes a namespace and an unqualified symbol and potentially returns a new
 *   symbol to be used in lieu of the original.
 */
cljs.analyzer.resolve_alias = (function cljs$analyzer$resolve_alias(ns,sym){
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),ns);
if(and__8904__auto__){
var and__8904__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),null,new cljs.core.Symbol(null,"aset","aset",900773178,null),null], null), null).call(null,sym);
if(cljs.core.truth_(and__8904__auto____$1)){
return cljs.analyzer.checked_arrays.call(null);
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})())){
return cljs.core.get_in.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"checked-aget","checked-aget",950823006,null),new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"checked-aset","checked-aset",1556136760,null)], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"checked-aget'","checked-aget'",212330530,null),new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"checked-aset'","checked-aset'",-510930777,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.checked_arrays.call(null),sym], null));
} else {
return sym;
}
});
cljs.analyzer.ns__GT_module_type = (function cljs$analyzer$ns__GT_module_type(ns){
if(cljs.core.truth_(cljs.analyzer.js_module_exists_QMARK_.call(null,ns))){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
if(cljs.analyzer.node_module_dep_QMARK_.call(null,ns)){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
if(cljs.core.truth_(cljs.analyzer.dep_has_global_exports_QMARK_.call(null,ns))){
return new cljs.core.Keyword(null,"global","global",93595047);
} else {
return null;
}
}
}
});
if(typeof cljs.analyzer.resolve_STAR_ !== 'undefined'){
} else {
cljs.analyzer.resolve_STAR_ = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","resolve*"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function (sym,full_ns,current_ns){
return cljs.analyzer.ns__GT_module_type.call(null,full_ns);
});})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (sym,full_ns,current_ns){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,sym))].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"node","node",581201198),(function (sym,full_ns,current_ns){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.munge_node_lib.call(null,full_ns)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,sym))].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"global","global",93595047),(function (sym,full_ns,current_ns){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.munge_global_export.call(null,full_ns)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,sym))].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (sym,full_ns,current_ns){
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,sym))].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null));
}));
cljs.analyzer.required_QMARK_ = (function cljs$analyzer$required_QMARK_(ns,env){
return (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"requires","requires",-1201390927)))),ns)) || (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"uses","uses",232664692)))),ns));
});
/**
 * Returns true if ns is a required namespace and a JavaScript module that
 * might be invokeable as a function.
 */
cljs.analyzer.invokeable_ns_QMARK_ = (function cljs$analyzer$invokeable_ns_QMARK_(ns,env){
var ns__$1 = cljs.analyzer.resolve_ns_alias.call(null,env,ns);
var and__8904__auto__ = cljs.analyzer.required_QMARK_.call(null,ns__$1,env);
if(cljs.core.truth_(and__8904__auto__)){
var or__8916__auto__ = cljs.analyzer.js_module_exists_QMARK_.call(null,ns__$1);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = cljs.analyzer.node_module_dep_QMARK_.call(null,ns__$1);
if(or__8916__auto____$1){
return or__8916__auto____$1;
} else {
return cljs.analyzer.dep_has_global_exports_QMARK_.call(null,ns__$1);
}
}
} else {
return and__8904__auto__;
}
});
cljs.analyzer.resolve_invokeable_ns = (function cljs$analyzer$resolve_invokeable_ns(ns,current_ns,env){
var ns__$1 = cljs.analyzer.resolve_ns_alias.call(null,env,ns);
var module_type = cljs.analyzer.ns__GT_module_type.call(null,ns__$1);
var G__29048 = module_type;
var G__29048__$1 = (((G__29048 instanceof cljs.core.Keyword))?G__29048.fqn:null);
switch (G__29048__$1) {
case "js":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,(function (){var or__8916__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1);
}
})()),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null);

break;
case "node":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns)].join(''),cljs.analyzer.munge_node_lib.call(null,cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1))),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);

break;
case "global":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns)].join(''),cljs.analyzer.munge_global_export.call(null,cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1))),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29048__$1)].join('')));

}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(var_args){
var G__29051 = arguments.length;
switch (G__29051) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.call(null,env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
if(("js" === cljs.core.namespace.call(null,sym))){
if(cljs.core.contains_QMARK_.call(null,locals,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),sym], null));
} else {
}

var pre = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./)));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.call(null,pre))){
} else {
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sym,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.with_meta.call(null,(function (){var or__8916__auto__ = cljs.analyzer.js_tag.call(null,pre);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
return new cljs.core.Symbol(null,"js","js",-886355190,null);
}
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),pre], null))], null),(function (){var temp__5457__auto__ = cljs.analyzer.js_tag.call(null,pre,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990));
if(cljs.core.truth_(temp__5457__auto__)){
var ret_tag = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-fn-var","js-fn-var",-565665358),true,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag], null);
} else {
return null;
}
})());
} else {
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('');
var lb = cljs.core.get.call(null,locals,sym);
var current_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
if(!((lb == null))){
return lb;
} else {
if(!((cljs.core.namespace.call(null,sym) == null))){
var ns = cljs.core.namespace.call(null,sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1,(function (){var or__8916__auto__ = (function (){var and__8904__auto__ = cljs.analyzer.js_module_exists_QMARK_.call(null,ns__$1);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177));
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.symbol.call(null,ns__$1);
}
})());
if(!((confirm == null))){
if(cljs.core.not_EQ_.call(null,current_ns,full_ns)){
cljs.analyzer.confirm_ns.call(null,env,full_ns);
} else {
}

confirm.call(null,env,full_ns,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
} else {
}

return cljs.analyzer.resolve_STAR_.call(null,sym,full_ns,current_ns);
} else {
if(cljs.core.truth_(cljs.analyzer.dotted_symbol_QMARK_.call(null,sym))){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(0),idx));
var suffix = cljs.core.subs.call(null,s,(idx + (1)));
var temp__5459__auto__ = cljs.core.get.call(null,locals,prefix);
if((temp__5459__auto__ == null)){
var temp__5459__auto____$1 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),prefix);
if((temp__5459__auto____$1 == null)){
var temp__5459__auto____$2 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),prefix);
if((temp__5459__auto____$2 == null)){
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,suffix)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core._EQ_.call(null,"",prefix))?cljs.core.symbol.call(null,suffix):cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''),suffix)),new cljs.core.Keyword(null,"ns","ns",441598760),prefix], null));
} else {
var info = temp__5459__auto____$2;
return cljs.core.merge.call(null,info,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null));
}
} else {
var full_ns = temp__5459__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns)].join(''),suffix)], null);
}
} else {
var lb__$1 = temp__5459__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lb__$1))].join(''),suffix)], null);
}
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"uses","uses",232664692),sym) == null))){
var full_ns = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"uses","uses",232664692),sym);
return cljs.analyzer.resolve_STAR_.call(null,sym,full_ns,current_ns);
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"renames","renames",343278368),sym) == null))){
var qualified_symbol = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"renames","renames",343278368),sym);
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.analyzer.resolve_STAR_.call(null,sym__$1,full_ns,current_ns);
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym) == null))){
var G__29053 = env;
var G__29054 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym);
var G__29055 = confirm;
env = G__29053;
sym = G__29054;
confirm = G__29055;
continue;
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym) == null))){
if(!((confirm == null))){
confirm.call(null,env,current_ns,sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null));
} else {
if(cljs.analyzer.core_name_QMARK_.call(null,env,sym)){
if(!((confirm == null))){
confirm.call(null,env,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null));
} else {
if(cljs.core.truth_(cljs.analyzer.invokeable_ns_QMARK_.call(null,s,env))){
return cljs.analyzer.resolve_invokeable_ns.call(null,s,current_ns,env);
} else {
if(!((confirm == null))){
confirm.call(null,env,current_ns,sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null));

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
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not.call(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)))){
return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.call(null,env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__29056 = cljs.core.seq.call(null,names);
var chunk__29057 = null;
var count__29058 = (0);
var i__29059 = (0);
while(true){
if((i__29059 < count__29058)){
var name = cljs.core._nth.call(null,chunk__29057,i__29059);
var env_29060__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_29061 = cljs.analyzer.resolve_existing_var.call(null,env_29060__$1,name);
if(cljs.core.truth_((function (){var and__8904__auto__ = ev_29061;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_29061));
} else {
return and__8904__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_29060__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_29061,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_29061)], null));
} else {
}

var G__29062 = seq__29056;
var G__29063 = chunk__29057;
var G__29064 = count__29058;
var G__29065 = (i__29059 + (1));
seq__29056 = G__29062;
chunk__29057 = G__29063;
count__29058 = G__29064;
i__29059 = G__29065;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29056);
if(temp__5457__auto__){
var seq__29056__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29056__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__29056__$1);
var G__29066 = cljs.core.chunk_rest.call(null,seq__29056__$1);
var G__29067 = c__9847__auto__;
var G__29068 = cljs.core.count.call(null,c__9847__auto__);
var G__29069 = (0);
seq__29056 = G__29066;
chunk__29057 = G__29067;
count__29058 = G__29068;
i__29059 = G__29069;
continue;
} else {
var name = cljs.core.first.call(null,seq__29056__$1);
var env_29070__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_29071 = cljs.analyzer.resolve_existing_var.call(null,env_29070__$1,name);
if(cljs.core.truth_((function (){var and__8904__auto__ = ev_29071;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_29071));
} else {
return and__8904__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_29070__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_29071,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_29071)], null));
} else {
}

var G__29072 = cljs.core.next.call(null,seq__29056__$1);
var G__29073 = null;
var G__29074 = (0);
var G__29075 = (0);
seq__29056 = G__29072;
chunk__29057 = G__29073;
count__29058 = G__29074;
i__29059 = G__29075;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927));
if(!((cljs.core.namespace.call(null,sym) == null))){
var ns__$1 = cljs.core.namespace.call(null,sym);
var ns__$2 = ((cljs.core._EQ_.call(null,"clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias.call(null,env,ns__$2);
var full_ns__$1 = ((!(clojure.string.ends_with_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns)].join(''),"$macros")))?cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),"$macros"].join('')):full_ns);
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null));
} else {
if(!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null)) == null))){
var full_ns = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
if(!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null)) == null))){
var qualified_symbol = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null));
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym__$1], null));
} else {
var ns__$1 = ((!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null)) == null)))?ns:((cljs.analyzer.core_name_QMARK_.call(null,env,sym))?cljs.analyzer.CLJS_CORE_MACROS_SYM:null));
if(!((ns__$1 == null))){
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
} else {
return null;
}

}
}
}
});


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 22, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"var","var",870848730,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer._STAR_allow_ns_STAR_ = true;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var temp__5459__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(e);
if((temp__5459__auto__ == null)){
var temp__5459__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
if((temp__5459__auto____$1 == null)){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e)));
} else {
var tag = temp__5459__auto____$1;
return tag;
}
} else {
var tag = temp__5459__auto__;
return tag;
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count.call(null,params);
return cljs.core.some.call(null,((function (methods$,c){
return (function (m){
var and__8904__auto__ = (function (){var or__8916__auto__ = (new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__8916__auto__){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__8904__auto__)){
return m;
} else {
return and__8904__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((!((t == null))) && ((t instanceof cljs.core.Symbol))){
var var$ = cljs.analyzer.resolve_var.call(null,env,t);
var temp__5459__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5459__auto__ == null)){
var temp__5459__auto____$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$));
if((temp__5459__auto____$1 == null)){
var temp__5459__auto____$2 = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5459__auto____$2 == null)){
return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null),null], null), null),t);
} else {
var proto = temp__5459__auto____$2;
return proto;
}
} else {
var type = temp__5459__auto____$1;
return type;
}
} else {
var type = temp__5459__auto__;
return type;
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),null], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__29076 = e;
var map__29076__$1 = ((((!((map__29076 == null)))?((((map__29076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29076):map__29076);
var map__29077 = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"test","test",577538877));
var map__29077__$1 = ((((!((map__29077 == null)))?((((map__29077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29077):map__29077);
var op = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var then_tag = cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(e));
if((cljs.core.keyword_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(e));
if((cljs.core.symbol_identical_QMARK_.call(null,then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_.call(null,else_tag,cljs.analyzer.IGNORE_SYM))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_.call(null,then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if(((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,then_tag) == null))) || (cljs.analyzer.type_QMARK_.call(null,env,then_tag))) && ((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,else_tag) == null))) || (cljs.analyzer.type_QMARK_.call(null,env,else_tag)))){
return new cljs.core.Symbol(null,"clj","clj",980036099,null);
} else {
if((!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null))) && (!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,then_tag))?then_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([then_tag]));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,else_tag))?else_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([else_tag]));
return cljs.core.into.call(null,then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,e){
var map__29080 = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(e);
var map__29080__$1 = ((((!((map__29080 == null)))?((((map__29080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29080):map__29080);
var f = map__29080__$1;
var info = cljs.core.get.call(null,map__29080__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var temp__5459__auto__ = (((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info) === true) || (new cljs.core.Keyword(null,"js-fn-var","js-fn-var",-565665358).cljs$core$IFn$_invoke$arity$1(info) === true))?new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(info):((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info)))?new cljs.core.Symbol(null,"js","js",-886355190,null):null));
if((temp__5459__auto__ == null)){
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(e);
var me = cljs.core.assoc.call(null,cljs.analyzer.find_matching_method.call(null,f,args),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"method","method",55703592));
var temp__5459__auto____$1 = cljs.analyzer.infer_tag.call(null,env,me);
if((temp__5459__auto____$1 == null)){
return cljs.analyzer.ANY_SYM;
} else {
var ret_tag = temp__5459__auto____$1;
return ret_tag;
}
} else {
var ret_tag = temp__5459__auto__;
return ret_tag;
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var temp__5459__auto__ = cljs.analyzer.get_tag.call(null,e);
if((temp__5459__auto__ == null)){
var G__29082 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e);
var G__29082__$1 = (((G__29082 instanceof cljs.core.Keyword))?G__29082.fqn:null);
switch (G__29082__$1) {
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "let":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "loop":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(e));

break;
case "method":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "def":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));

break;
case "invoke":
return cljs.analyzer.infer_invoke.call(null,env,e);

break;
case "if":
return cljs.analyzer.infer_if.call(null,env,e);

break;
case "constant":
var G__29083 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.call(null,true,G__29083)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.call(null,false,G__29083)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "var":
var temp__5459__auto____$1 = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e);
if((temp__5459__auto____$1 == null)){
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
} else {
var init = temp__5459__auto____$1;
return cljs.analyzer.infer_tag.call(null,env,init);
}

break;
case "dot":
return cljs.analyzer.ANY_SYM;

break;
case "js":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
} else {
var tag = temp__5459__auto__;
return tag;
}
});
if(typeof cljs.analyzer.parse !== 'undefined'){
} else {
cljs.analyzer.parse = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","parse"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function() { 
var G__29085__delegate = function (op,rest){
return op;
};
var G__29085 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__29086__i = 0, G__29086__a = new Array(arguments.length -  1);
while (G__29086__i < G__29086__a.length) {G__29086__a[G__29086__i] = arguments[G__29086__i + 1]; ++G__29086__i;}
  rest = new cljs.core.IndexedSeq(G__29086__a,0,null);
} 
return G__29085__delegate.call(this,op,rest);};
G__29085.cljs$lang$maxFixedArity = 1;
G__29085.cljs$lang$applyTo = (function (arglist__29087){
var op = cljs.core.first(arglist__29087);
var rest = cljs.core.rest(arglist__29087);
return G__29085__delegate(op,rest);
});
G__29085.cljs$core$IFn$_invoke$arity$variadic = G__29085__delegate;
return G__29085;
})()
;})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.analyzer.var_meta = (function cljs$analyzer$var_meta(var_args){
var G__29091 = arguments.length;
switch (G__29091) {
case 1:
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1 = (function (var$){
return cljs.analyzer.var_meta.call(null,var$,null);
});

cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2 = (function (var$,expr_env){
var sym = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$);
var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null);
var m = cljs.core.merge.call(null,(function (){var user_meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys.call(null,user_meta);
return cljs.core.zipmap.call(null,uks,cljs.core.map.call(null,((function (user_meta,uks,sym,ks){
return (function (p1__29088_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.get.call(null,user_meta,p1__29088_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(user_meta,uks,sym,ks))
,uks));
})(),cljs.core.assoc.call(null,cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,((function (sym,ks){
return (function (p1__29089_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.get.call(null,var$,p1__29089_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(sym,ks))
,ks)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Keyword(null,"test","test",577538877),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__9870__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$test",".-cljs$lang$test",718963148,null)),(function (){var x__9870__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists)))?cljs.core.second.call(null,arglists):arglists);
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.with_meta,arglists_SINGLEQUOTE_,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838).cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
})()));
if(cljs.core.truth_(expr_env)){
return cljs.analyzer.analyze.call(null,expr_env,m);
} else {
return m;
}
});

cljs.analyzer.var_meta.cljs$lang$maxFixedArity = 2;

cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var env__$1 = cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783));
var var$ = cljs.analyzer.resolve_var.call(null,env__$1,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
var expr_env = cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var temp__5461__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5461__auto__ == null)){
return null;
} else {
var var_ns = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),cljs.analyzer.analyze.call(null,expr_env,sym),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.analyzer.analyze.call(null,expr_env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,var_ns),cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.analyzer.var_meta.call(null,var$,expr_env)], null);
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__29093,_,___$1){
var vec__29094 = p__29093;
var ___$2 = cljs.core.nth.call(null,vec__29094,(0),null);
var sym = cljs.core.nth.call(null,vec__29094,(1),null);
var form = vec__29094;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),cljs.analyzer.var_ast.call(null,env,sym));
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__29097,name,_){
var vec__29098 = p__29097;
var ___$1 = cljs.core.nth.call(null,vec__29098,(0),null);
var test = cljs.core.nth.call(null,vec__29098,(1),null);
var then = cljs.core.nth.call(null,vec__29098,(2),null);
var else$ = cljs.core.nth.call(null,vec__29098,(3),null);
var form = vec__29098;
if((cljs.core.count.call(null,form) < (3))){
throw cljs.analyzer.error.call(null,env,"Too few arguments to if");
} else {
}

if((cljs.core.count.call(null,form) > (4))){
throw cljs.analyzer.error.call(null,env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_29101 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29101;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_29102 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return cljs.analyzer.analyze.call(null,env,then);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_29102;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_29103 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return cljs.analyzer.analyze.call(null,env,else$);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_29103;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),test_expr,new cljs.core.Keyword(null,"then","then",460598070),then_expr,new cljs.core.Keyword(null,"else","else",-1508377146),else_expr,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),cljs.core._STAR_unchecked_if_STAR_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__29106,name,_){
var vec__29107 = p__29106;
var ___$1 = cljs.core.nth.call(null,vec__29107,(0),null);
var sym = cljs.core.nth.call(null,vec__29107,(1),null);
var tests = cljs.core.nth.call(null,vec__29107,(2),null);
var thens = cljs.core.nth.call(null,vec__29107,(3),null);
var default$ = cljs.core.nth.call(null,vec__29107,(4),null);
var form = vec__29107;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","case* must switch on symbol","\n","(symbol? sym)"].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error(["Assert failed: ","case* tests must be grouped in vectors","\n","(every? vector? tests)"].join('')));
}

var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var v = (function (){var _STAR_recur_frames_STAR_29110 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,expr_env,sym);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29110;
}})();
var tests__$1 = cljs.core.mapv.call(null,((function (expr_env,v,vec__29107,___$1,sym,tests,thens,default$,form){
return (function (p1__29104_SHARP_){
return cljs.core.mapv.call(null,((function (expr_env,v,vec__29107,___$1,sym,tests,thens,default$,form){
return (function (t){
return cljs.analyzer.analyze.call(null,expr_env,t);
});})(expr_env,v,vec__29107,___$1,sym,tests,thens,default$,form))
,p1__29104_SHARP_);
});})(expr_env,v,vec__29107,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,vec__29107,___$1,sym,tests,thens,default$,form){
return (function (p1__29105_SHARP_){
return cljs.analyzer.analyze.call(null,env,p1__29105_SHARP_);
});})(expr_env,v,tests__$1,vec__29107,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = cljs.analyzer.analyze.call(null,env,default$);
if(cljs.core.every_QMARK_.call(null,((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__29107,___$1,sym,tests,thens,default$,form){
return (function (t){
var or__8916__auto__ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var and__8904__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(t));
if(and__8904__auto__){
return cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__8904__auto__;
}
}
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__29107,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.call(null,cljs.core.concat,tests__$1))){
} else {
throw (new Error(["Assert failed: ","case* tests must be numbers, strings, or constants","\n","(every? (fn [t] (or (-> t :info :const) (and (= :constant (:op t)) ((some-fn number? string? char?) (:form t))))) (apply concat tests))"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case*","case*",716180697),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"tests","tests",-1041085625),tests__$1,new cljs.core.Keyword(null,"thens","thens",226631442),thens__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__29111,name,_){
var vec__29112 = p__29111;
var ___$1 = cljs.core.nth.call(null,vec__29112,(0),null);
var throw$ = cljs.core.nth.call(null,vec__29112,(1),null);
var form = vec__29112;
var throw_expr = (function (){var _STAR_recur_frames_STAR_29115 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),throw$);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29115;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"throw","throw",-1044625833),throw_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__29120,name,_){
var vec__29121 = p__29120;
var seq__29122 = cljs.core.seq.call(null,vec__29121);
var first__29123 = cljs.core.first.call(null,seq__29122);
var seq__29122__$1 = cljs.core.next.call(null,seq__29122);
var ___$1 = first__29123;
var body = seq__29122__$1;
var form = vec__29121;
var catchenv = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),((function (vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form){
return (function (p1__29116_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),p1__29116_SHARP_)){
return new cljs.core.Keyword(null,"return","return",-1891502105);
} else {
return p1__29116_SHARP_;
}
});})(vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form){
return (function (p1__29117_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__29117_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
});})(catchenv,vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.call(null,catch_QMARK_,((function (catchenv,catch_QMARK_,vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form){
return (function (p1__29118_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__29118_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
});})(catchenv,catch_QMARK_,vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form){
return (function (p1__29119_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__29119_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
});})(catchenv,catch_QMARK_,default_QMARK_,vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form))
);
var map__29124 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"forms","forms",2045992350),body,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),null,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),null], null);
while(true){
if(cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser))){
var vec__29125 = new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser);
var seq__29126 = cljs.core.seq.call(null,vec__29125);
var first__29127 = cljs.core.first.call(null,seq__29126);
var seq__29126__$1 = cljs.core.next.call(null,seq__29126);
var form__$1 = first__29127;
var forms_STAR_ = seq__29126__$1;
var parser_STAR_ = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"forms","forms",2045992350),forms_STAR_);
var G__29128 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser);
var G__29128__$1 = (((G__29128 instanceof cljs.core.Keyword))?G__29128.fqn:null);
switch (G__29128__$1) {
case "start":
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__29138 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"catches","catches",-1478797617));
parser = G__29138;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__29139 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__29139;
continue;
} else {
var G__29140 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,form__$1);
parser = G__29140;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_(default_QMARK_.call(null,form__$1))){
var G__29141 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__29141;
continue;
} else {
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__29142 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138)], null),cljs.core.conj,form__$1);
parser = G__29142;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__29143 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__29143;
continue;
} else {
throw cljs.analyzer.error.call(null,env,"Invalid try form");

}
}
}

break;
case "finally":
var G__29144 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188));
parser = G__29144;
continue;

break;
case "done":
throw cljs.analyzer.error.call(null,env,"Unexpected form after finally");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29128__$1)].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__29124__$1 = ((((!((map__29124 == null)))?((((map__29124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29124):map__29124);
var body__$1 = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cblocks = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138));
var dblock = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"dblock","dblock",-1325623381));
var fblock = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"fblock","fblock",-1236607426));
var finally$ = ((cljs.core.seq.call(null,fblock))?cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.rest.call(null,fblock))))):null);
var e = (cljs.core.truth_((function (){var or__8916__auto__ = cljs.core.seq.call(null,cblocks);
if(or__8916__auto__){
return or__8916__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.call(null,"e"):null);
var default$ = (function (){var temp__5455__auto__ = dblock;
if(cljs.core.truth_(temp__5455__auto__)){
var vec__29130 = temp__5455__auto__;
var seq__29131 = cljs.core.seq.call(null,vec__29130);
var first__29132 = cljs.core.first.call(null,seq__29131);
var seq__29131__$1 = cljs.core.next.call(null,seq__29131);
var ___$2 = first__29132;
var first__29132__$1 = cljs.core.first.call(null,seq__29131__$1);
var seq__29131__$2 = cljs.core.next.call(null,seq__29131__$1);
var ___$3 = first__29132__$1;
var first__29132__$2 = cljs.core.first.call(null,seq__29131__$2);
var seq__29131__$3 = cljs.core.next.call(null,seq__29131__$2);
var name__$1 = first__29132__$2;
var cb = seq__29131__$3;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = name__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cb)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
})();
var cblock = ((cljs.core.seq.call(null,cblocks))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core.mapcat.call(null,((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__29124,map__29124__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form){
return (function (p__29133){
var vec__29134 = p__29133;
var seq__29135 = cljs.core.seq.call(null,vec__29134);
var first__29136 = cljs.core.first.call(null,seq__29135);
var seq__29135__$1 = cljs.core.next.call(null,seq__29135);
var ___$2 = first__29136;
var first__29136__$1 = cljs.core.first.call(null,seq__29135__$1);
var seq__29135__$2 = cljs.core.next.call(null,seq__29135__$1);
var type = first__29136__$1;
var first__29136__$2 = cljs.core.first.call(null,seq__29135__$2);
var seq__29135__$3 = cljs.core.next.call(null,seq__29135__$2);
var name__$1 = first__29136__$2;
var cb = seq__29135__$3;
if(cljs.core.truth_(name__$1)){
if(cljs.core.not.call(null,cljs.core.namespace.call(null,name__$1))){
} else {
throw (new Error(["Assert failed: ","Can't qualify symbol in catch","\n","(not (namespace name))"].join('')));
}
} else {
}

return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),(function (){var x__9870__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = name__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cb)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__29124,map__29124__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__29121,seq__29122,first__29123,seq__29122__$1,___$1,body,form))
,cblocks),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__9870__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):default$);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.call(null,locals,e,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,e,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,catchenv,new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1),cblock):null);
var try$ = cljs.analyzer.analyze.call(null,(cljs.core.truth_((function (){var or__8916__auto__ = e;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return finally$;
}
})())?catchenv:env),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"try","try",1380742522),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"try","try",1380742522),try$,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$,new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"catch","catch",1038065524),catch$,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [try$,catch$,finally$], null)], null);
}));
cljs.analyzer.valid_proto = (function cljs$analyzer$valid_proto(x){
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
});
cljs.analyzer.elide_env = (function cljs$analyzer$elide_env(env,ast,opts){
return cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"env","env",-1815813235));
});
cljs.analyzer.replace_env_pass = (function cljs$analyzer$replace_env_pass(new_env){
return (function (env,ast,opts){
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"env","env",-1815813235),new_env);
});
});
cljs.analyzer.constant_value_QMARK_ = (function cljs$analyzer$constant_value_QMARK_(p__29145){
var map__29146 = p__29145;
var map__29146__$1 = ((((!((map__29146 == null)))?((((map__29146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29146):map__29146);
var ast = map__29146__$1;
var op = cljs.core.get.call(null,map__29146__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var or__8916__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),op);
if(or__8916__auto__){
return or__8916__auto__;
} else {
var and__8904__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null).call(null,op);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.analyzer.constant_value_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__8904__auto__;
}
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"def","def",597100991,null),(function (op,env,form,_,___$1){
if((cljs.core.count.call(null,form) > (4))){
throw cljs.analyzer.error.call(null,env,"Too many arguments to def");
} else {
}

var pfn = (function() {
var G__29153 = null;
var G__29153__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
});
var G__29153__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
var G__29153__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
G__29153 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__29153__2.call(this,___$2,sym);
case 3:
return G__29153__3.call(this,___$2,sym,doc);
case 4:
return G__29153__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__29153.cljs$core$IFn$_invoke$arity$2 = G__29153__2;
G__29153.cljs$core$IFn$_invoke$arity$3 = G__29153__3;
G__29153.cljs$core$IFn$_invoke$arity$4 = G__29153__4;
return G__29153;
})()
;
var args = cljs.core.apply.call(null,pfn,form);
var sym = new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(args);
var const_QMARK_ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var sym_meta = cljs.core.meta.call(null,sym);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var protocol = cljs.analyzer.valid_proto.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)));
var dynamic = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var sym_ns = cljs.core.namespace.call(null,sym);
var sym__$1 = (cljs.core.truth_((function (){var and__8904__auto__ = sym_ns;
if(cljs.core.truth_(and__8904__auto__)){
return !(cljs.core.symbol_identical_QMARK_.call(null,cljs.core.symbol.call(null,sym_ns),ns_name));
} else {
return and__8904__auto__;
}
})())?(function(){throw cljs.analyzer.error.call(null,env,["Can't def ns-qualified name in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_ns)].join(''))})():((!((sym_ns == null)))?cljs.core.symbol.call(null,cljs.core.name.call(null,sym)):sym
));
if(!((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns], null)) == null))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join('')),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''))], null));
} else {
}

if(!((new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1)) == null))){
throw cljs.analyzer.error.call(null,env,"Can't redefine a constant");
} else {
}

var temp__5461__auto___29154 = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if((temp__5461__auto___29154 == null)){
} else {
var doc_29155 = temp__5461__auto___29154;
if(typeof doc_29155 === 'string'){
} else {
throw cljs.analyzer.error.call(null,env,"Too many arguments to def");
}
}

var temp__5461__auto___29156 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5461__auto___29156 == null)){
} else {
var v_29157 = temp__5461__auto___29156;
if(cljs.core.truth_((function (){var and__8904__auto__ = !(cljs.analyzer._STAR_allow_redef_STAR_);
if(and__8904__auto__){
var and__8904__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_29157));
if(and__8904__auto____$1){
var and__8904__auto____$2 = cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__8904__auto____$2){
var and__8904__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__8904__auto____$3)){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_),sym__$1);
} else {
return and__8904__auto____$3;
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
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v_29157)], null));
} else {
}
}

var env__$1 = ((((cljs.core.not_EQ_.call(null,ns_name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))) && (cljs.analyzer.core_name_QMARK_.call(null,env,sym__$1))) || (!((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"uses","uses",232664692),sym__$1], null)) == null))))?(function (){var ev = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),cljs.core.with_meta.call(null,sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
var conj_to_set = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
if(cljs.analyzer.public_name_QMARK_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),sym__$1)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef","redef",1032704258),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name], null));
} else {
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),conj_to_set,sym__$1);

return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),conj_to_set,sym__$1);
})():env);
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1));
var init_expr = ((cljs.core.contains_QMARK_.call(null,args,new cljs.core.Keyword(null,"init","init",-1875481434)))?(function (){
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),sym_meta,((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1)));

var _STAR_recur_frames_STAR_29149 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var _STAR_allow_ns_STAR_29150 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args),sym__$1);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_29150;
}}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29149;
}})()
:null);
var fn_var_QMARK_ = (!((init_expr == null))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"fn","fn",-1175266204)));
var tag__$1 = ((fn_var_QMARK_)?(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return tag;
}
})():(function (){var or__8916__auto__ = tag;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr);
}
})());
var export_as = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var export_val = temp__5457__auto__;
if(cljs.core._EQ_.call(null,true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
}
})();
var temp__5461__auto___29158 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5461__auto___29158 == null)){
} else {
var v_29159 = temp__5461__auto___29158;
if((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1)))) && ((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(v_29159) === true) && (!(fn_var_QMARK_)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1], null));
} else {
}
}

if(((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null)) == null)) || (cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta)))){
if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym__$1);
} else {
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),(function (){var G__29151 = sym_meta;
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.call(null,G__29151,new cljs.core.Keyword(null,"test","test",577538877),true);
} else {
return G__29151;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,sym_meta,new cljs.core.Keyword(null,"test","test",577538877)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878)], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,const_QMARK_,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (f){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,const_QMARK_,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null):null),(cljs.core.truth_(const_QMARK_)?(function (){var const_expr = (function (){var _STAR_passes_STAR_29152 = cljs.analyzer._STAR_passes_STAR_;
cljs.analyzer._STAR_passes_STAR_ = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));

try{return cljs.analyzer.analyze.call(null,env__$1,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args));
}finally {cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_29152;
}})();
if(cljs.core.truth_(cljs.analyzer.constant_value_QMARK_.call(null,const_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),const_expr], null);
} else {
return null;
}
})():null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),protocol], null):null),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var protocol_symbol = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),protocol_symbol,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol_symbol)),new cljs.core.Keyword(null,"impls","impls",-1314014853),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),((fn_var_QMARK_)?(function (){var params = cljs.core.map.call(null,((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,const_QMARK_,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (p1__29148_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__29148_SHARP_)));
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,const_QMARK_,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),cljs.core.not.call(null,new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(sym_meta)),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__5459__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),params,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.meta,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
} else {
var top_fn_meta = temp__5459__auto__;
return top_fn_meta;
}
})());
})():null),(((fn_var_QMARK_) && (!((tag__$1 == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):(cljs.core.truth_(tag__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null):null))));
} else {
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"name","name",1843675177),var_name,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.assoc.call(null,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"def-var","def-var",-698214377),true),sym__$1),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797)),new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"init","init",-1875481434),init_expr], null),((new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env__$1) === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-ast","var-ast",1200379319),cljs.analyzer.var_ast.call(null,env__$1,sym__$1)], null):null),(function (){var temp__5461__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__5461__auto__ == null)){
return null;
} else {
var test = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test)], null);
}
})(),((!((tag__$1 == null)))?((fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null)):null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),((!((export_as == null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export","export",214356590),export_as], null):null),((!((init_expr == null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__29160,name){
var vec__29161 = p__29160;
var locals = cljs.core.nth.call(null,vec__29161,(0),null);
var params = cljs.core.nth.call(null,vec__29161,(1),null);
if(cljs.core.truth_(cljs.core.namespace.call(null,name))){
throw cljs.analyzer.error.call(null,env,["Can't use qualified name as parameter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var line = cljs.analyzer.get_line.call(null,name,env);
var column = cljs.analyzer.get_col.call(null,name,env);
var nmeta = cljs.core.meta.call(null,name);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = ((!((locals == null)))?locals.call(null,name):null);
var env__$1 = cljs.core.merge.call(null,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null));
var param = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803)],[name,true,new cljs.core.Keyword(null,"var","var",-769682797),env__$1,column,line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow], null),tag,shadow]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,locals,name,param),cljs.core.conj.call(null,params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
var _STAR_recur_frames_STAR_29164 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29164;
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type,analyze_body_QMARK_){
var param_names = cljs.core.first.call(null,form);
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var param_names__$1 = cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var body = cljs.core.next.call(null,form);
var step = cljs.analyzer.analyze_fn_method_param.call(null,env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__29165 = cljs.core.reduce.call(null,step,step_init,param_names__$1);
var locals__$1 = cljs.core.nth.call(null,vec__29165,(0),null);
var params = cljs.core.nth.call(null,vec__29165,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast.call(null,params):params);
var fixed_arity = cljs.core.count.call(null,params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.atom.call(null,null)], null);
var recur_frames = cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1);
var body_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
var expr = (cljs.core.truth_(analyze_body_QMARK_)?cljs.analyzer.analyze_fn_method_body.call(null,body_env,body_form,recur_frames):null);
var recurs = cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(recur_frame));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),fixed_arity,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"recurs","recurs",-1959309309),recurs], null);
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if(!((name == null))){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.core.get.call(null,locals,name);
var shadow__$1 = (((shadow == null))?cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),name], null)):null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531),true,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),fn_scope,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow__$1], null)], null);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
var ret_tag = ((!((tag == null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag], null):null);
return cljs.core.merge.call(null,name_var,ret_tag);
} else {
return null;
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__29168_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv,locals,p1__29168_SHARP_,type,true);
}),meths));
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
return cljs.analyzer.analyze_fn_methods_pass2_STAR_.call(null,menv,locals,type,meths);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__29170,name,_){
var vec__29171 = p__29170;
var seq__29172 = cljs.core.seq.call(null,vec__29171);
var first__29173 = cljs.core.first.call(null,seq__29172);
var seq__29172__$1 = cljs.core.next.call(null,seq__29172);
var ___$1 = first__29173;
var args = seq__29172__$1;
var form = vec__29171;
var named_fn_QMARK_ = (cljs.core.first.call(null,args) instanceof cljs.core.Symbol);
var vec__29174 = ((named_fn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq.call(null,args)], null));
var name__$1 = cljs.core.nth.call(null,vec__29174,(0),null);
var meths = cljs.core.nth.call(null,vec__29174,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?(function (){var x__9870__auto__ = meths;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})():meths);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var.call(null,env,locals,name__$1);
var env__$1 = ((!((name__$1 == null)))?cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859)], null),cljs.core.conj,name_var):env);
var locals__$1 = (((!((locals == null))) && (named_fn_QMARK_))?cljs.core.assoc.call(null,locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta.call(null,form);
var type = new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026).cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = (((cljs.core.count.call(null,meths__$1) > (1)))?cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)):env__$1);
var menv__$1 = cljs.core.merge.call(null,menv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),proto_impl,new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),proto_inline], null));
var methods$ = cljs.core.map.call(null,((function (named_fn_QMARK_,vec__29174,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__29171,seq__29172,first__29173,seq__29172__$1,___$1,args,form){
return (function (p1__29169_SHARP_){
var _STAR_allow_ns_STAR_29177 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{return cljs.analyzer.analyze_fn_method.call(null,menv__$1,locals__$1,p1__29169_SHARP_,type,(name__$1 == null));
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_29177;
}});})(named_fn_QMARK_,vec__29174,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__29171,seq__29172,first__29173,seq__29172__$1,___$1,args,form))
,meths__$1);
var mfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),methods$));
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.Keyword(null,"variadic","variadic",882626057),methods$));
var locals__$2 = ((named_fn_QMARK_)?cljs.core.update_in.call(null,locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$)):locals__$1);
var methods$__$1 = ((!((name__$1 == null)))?(function (){var _STAR_allow_ns_STAR_29178 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{return cljs.analyzer.analyze_fn_methods_pass2.call(null,menv__$1,locals__$2,type,meths__$1);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_29178;
}})():methods$);
var form__$1 = cljs.core.vary_meta.call(null,form,cljs.core.dissoc,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742));
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),methods$__$1);
var ast = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)],[children,proto_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,proto_impl,new cljs.core.Keyword(null,"fn","fn",-1175266204),env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]);
var variadic_methods_29179 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"variadic","variadic",882626057),methods$__$1);
var variadic_params_29180 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,variadic_methods_29179)));
var param_counts_29181 = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"params","params",710516235)),methods$__$1);
if(((1) < cljs.core.count.call(null,variadic_methods_29179))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

if(!(((variadic_params_29180 === (0))) || ((variadic_params_29180 === ((1) + mfa))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts_29181),param_counts_29181)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

return cljs.analyzer.analyze_wrap_meta.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__29182,name,_){
var vec__29183 = p__29182;
var seq__29184 = cljs.core.seq.call(null,vec__29183);
var first__29185 = cljs.core.first.call(null,seq__29184);
var seq__29184__$1 = cljs.core.next.call(null,seq__29184);
var ___$1 = first__29185;
var first__29185__$1 = cljs.core.first.call(null,seq__29184__$1);
var seq__29184__$2 = cljs.core.next.call(null,seq__29184__$1);
var bindings = first__29185__$1;
var exprs = seq__29184__$2;
var form = vec__29183;
if((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings)))){
} else {
throw cljs.analyzer.error.call(null,env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),cljs.core.partition.call(null,(2),bindings)));
var names = cljs.core.keys.call(null,n__GT_fexpr);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var vec__29186 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__29183,seq__29184,first__29185,seq__29184__$1,___$1,first__29185__$1,seq__29184__$2,bindings,exprs,form){
return (function (p__29192,n){
var vec__29193 = p__29192;
var map__29196 = cljs.core.nth.call(null,vec__29193,(0),null);
var map__29196__$1 = ((((!((map__29196 == null)))?((((map__29196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29196):map__29196);
var env__$1 = map__29196__$1;
var locals = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
var bes = cljs.core.nth.call(null,vec__29193,(1),null);
var ret_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_29198 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));

try{return cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,n));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_29198;
}})();
var be = (function (){var G__29199 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[n,new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col.call(null,n,env__$1),cljs.analyzer.get_line.call(null,n,env__$1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),true,locals.call(null,n),true]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.call(null,G__29199,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag);
} else {
return G__29199;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),n], null),be),cljs.core.conj.call(null,bes,be)], null);
});})(n__GT_fexpr,names,context,vec__29183,seq__29184,first__29185,seq__29184__$1,___$1,first__29185__$1,seq__29184__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.call(null,vec__29186,(0),null);
var bes = cljs.core.nth.call(null,vec__29186,(1),null);
var meth_env__$1 = cljs.core.assoc.call(null,meth_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var vec__29189 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__29186,meth_env,bes,meth_env__$1,vec__29183,seq__29184,first__29185,seq__29184__$1,___$1,first__29185__$1,seq__29184__$2,bindings,exprs,form){
return (function (p__29200,p__29201){
var vec__29202 = p__29200;
var meth_env__$2 = cljs.core.nth.call(null,vec__29202,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__29202,(1),null);
var map__29205 = p__29201;
var map__29205__$1 = ((((!((map__29205 == null)))?((((map__29205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29205):map__29205);
var be = map__29205__$1;
var name__$1 = cljs.core.get.call(null,map__29205__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var shadow = cljs.core.get.call(null,map__29205__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var env__$1 = cljs.core.assoc_in.call(null,meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),shadow);
var fexpr = cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,name__$1));
var be_SINGLEQUOTE_ = cljs.core.assoc.call(null,be,new cljs.core.Keyword(null,"init","init",-1875481434),fexpr,new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.call(null,bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__29186,meth_env,bes,meth_env__$1,vec__29183,seq__29184,first__29185,seq__29184__$1,___$1,first__29185__$1,seq__29184__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.call(null,vec__29189,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__29189,(1),null);
var expr = cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,meth_env__$2,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs))));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"letfn","letfn",-2121022354),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes__$1,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),bes__$1)),expr)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.seq.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__29207_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),p1__29207_SHARP_);
}),cljs.core.butlast.call(null,exprs))));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR_29208 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_do_statements_STAR_.call(null,env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29208;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__29209,_,___$1){
var vec__29210 = p__29209;
var seq__29211 = cljs.core.seq.call(null,vec__29210);
var first__29212 = cljs.core.first.call(null,seq__29211);
var seq__29211__$1 = cljs.core.next.call(null,seq__29211);
var ___$2 = first__29212;
var exprs = seq__29211__$1;
var form = vec__29210;
var statements = cljs.analyzer.analyze_do_statements.call(null,env,exprs);
if((cljs.core.count.call(null,exprs) <= (1))){
var ret = cljs.analyzer.analyze.call(null,env,cljs.core.first.call(null,exprs));
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
var ret_env = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)):cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105)));
var ret = cljs.analyzer.analyze.call(null,ret_env,cljs.core.last.call(null,exprs));
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR_29213 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze.call(null,env,init);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_29213;
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var temp__5459__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
if((temp__5459__auto__ == null)){
var temp__5459__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr);
if((temp__5459__auto____$1 == null)){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(init_expr));
} else {
var tag = temp__5459__auto____$1;
return tag;
}
} else {
var tag = temp__5459__auto__;
return tag;
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.call(null,encl_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var bindings__$1 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),bindings));
while(true){
var temp__5459__auto__ = cljs.core.first.call(null,bindings__$1);
if((temp__5459__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
} else {
var vec__29214 = temp__5459__auto__;
var name = cljs.core.nth.call(null,vec__29214,(0),null);
var init = cljs.core.nth.call(null,vec__29214,(1),null);
if((!((cljs.core.namespace.call(null,name) == null))) || (goog.string.contains([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"."))){
throw cljs.analyzer.error.call(null,encl_env,["Invalid local name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init.call(null,env,init,cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line.call(null,name,env);
var col = cljs.analyzer.get_col.call(null,name,env);
var be = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[init_expr,name,true,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),name.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env))], null),cljs.analyzer.get_let_tag.call(null,name,init_expr),name.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env)),true]);
var be__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.call(null,be,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))], null)):be);
var G__29217 = cljs.core.conj.call(null,bes,be__$1);
var G__29218 = cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null),be__$1);
var G__29219 = cljs.core.next.call(null,bindings__$1);
bes = G__29217;
env = G__29218;
bindings__$1 = G__29219;
continue;
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings){
var _STAR_recur_frames_STAR_29220 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_let_bindings_STAR_.call(null,encl_env,bindings);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29220;
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs))));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR_29221 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_29222 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze_let_body_STAR_.call(null,env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_29222;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29221;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__29223,is_loop){
var vec__29224 = p__29223;
var seq__29225 = cljs.core.seq.call(null,vec__29224);
var first__29226 = cljs.core.first.call(null,seq__29225);
var seq__29225__$1 = cljs.core.next.call(null,seq__29225);
var _ = first__29226;
var first__29226__$1 = cljs.core.first.call(null,seq__29225__$1);
var seq__29225__$2 = cljs.core.next.call(null,seq__29225__$1);
var bindings = first__29226__$1;
var exprs = seq__29225__$2;
var form = vec__29224;
if((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings)))){
} else {
throw cljs.analyzer.error.call(null,encl_env,"bindings must be vector of even number of elements");
}

var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__29227 = cljs.analyzer.analyze_let_bindings.call(null,encl_env,bindings);
var bes = cljs.core.nth.call(null,vec__29227,(0),null);
var env = cljs.core.nth.call(null,vec__29227,(1),null);
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),bes,new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.atom.call(null,null)], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:((!((cljs.analyzer._STAR_loop_lets_STAR_ == null)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var expr = cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets);
var op = ((is_loop === true)?new cljs.core.Keyword(null,"loop","loop",-395552849):new cljs.core.Keyword(null,"let","let",-1282412701));
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),bes)),expr);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),encl_env,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,false);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,true);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__29231,_,___$1){
var vec__29232 = p__29231;
var seq__29233 = cljs.core.seq.call(null,vec__29232);
var first__29234 = cljs.core.first.call(null,seq__29233);
var seq__29233__$1 = cljs.core.next.call(null,seq__29233);
var ___$2 = first__29234;
var exprs = seq__29233__$1;
var form = vec__29232;
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first.call(null,cljs.analyzer._STAR_recur_frames_STAR_);
var add_implicit_target_object_QMARK_ = (function (){var and__8904__auto__ = new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,exprs),(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)) - (1)));
} else {
return and__8904__auto__;
}
})();
var exprs__$1 = (function (){var G__29235 = exprs;
if(cljs.core.truth_(add_implicit_target_object_QMARK_)){
return cljs.core.cons.call(null,null,G__29235);
} else {
return G__29235;
}
})();
var exprs__$2 = (function (){var _STAR_recur_frames_STAR_29236 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_29236,context,frame,add_implicit_target_object_QMARK_,exprs__$1,vec__29232,seq__29233,first__29234,seq__29233__$1,___$2,exprs,form){
return (function (p1__29230_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),p1__29230_SHARP_);
});})(_STAR_recur_frames_STAR_29236,context,frame,add_implicit_target_object_QMARK_,exprs__$1,vec__29232,seq__29233,first__29234,seq__29233__$1,___$2,exprs,form))
,exprs__$1));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29236;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.call(null,env,"Can't recur here");
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,exprs__$2),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.call(null,env,"recur argument count mismatch");
}

if(cljs.core.truth_((function (){var and__8904__auto__ = new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not.call(null,add_implicit_target_object_QMARK_);
} else {
return and__8904__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,exprs__$2))], null));
} else {
}

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(frame),true);

return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"exprs","exprs",1795829094),exprs__$2,new cljs.core.Keyword(null,"children","children",-940561982),exprs__$2);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__29237,___$1,___$2){
var vec__29238 = p__29237;
var ___$3 = cljs.core.nth.call(null,vec__29238,(0),null);
var x = cljs.core.nth.call(null,vec__29238,(1),null);
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true),x);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__29242,___$1,___$2){
var vec__29243 = p__29242;
var seq__29244 = cljs.core.seq.call(null,vec__29243);
var first__29245 = cljs.core.first.call(null,seq__29244);
var seq__29244__$1 = cljs.core.next.call(null,seq__29244);
var ___$3 = first__29245;
var first__29245__$1 = cljs.core.first.call(null,seq__29244__$1);
var seq__29244__$2 = cljs.core.next.call(null,seq__29244__$1);
var ctor = first__29245__$1;
var args = seq__29244__$2;
var form = vec__29243;
var _STAR_recur_frames_STAR_29246 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ctorexpr = cljs.analyzer.analyze.call(null,enve,ctor);
var ctor_var = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ctorexpr),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.analyzer.resolve_existing_var.call(null,env,ctor):null);
var record_args = (cljs.core.truth_((function (){var and__8904__auto__ = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)));
} else {
return and__8904__auto__;
}
})())?cljs.core.repeat.call(null,(3),cljs.analyzer.analyze.call(null,enve,null)):null);
var argexprs = cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_29246,vec__29243,seq__29244,first__29245,seq__29244__$1,___$3,first__29245__$1,seq__29244__$2,ctor,args,form){
return (function (p1__29241_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__29241_SHARP_);
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_29246,vec__29243,seq__29244,first__29245,seq__29244__$1,___$3,first__29245__$1,seq__29244__$2,ctor,args,form))
,args)),record_args);
var known_num_fields = new cljs.core.Keyword(null,"num-fields","num-fields",1529154024).cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count.call(null,args);
if((cljs.core.not.call(null,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)))) && (!((known_num_fields == null))) && (cljs.core.not_EQ_.call(null,known_num_fields,argc))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"argc","argc",-1452839519),argc,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctorexpr,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctorexpr], null),argexprs),new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__8916__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null).call(null,name);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return name;
}
})()], null);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29246;
}}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__29247,___$1,___$2){
var vec__29248 = p__29247;
var ___$3 = cljs.core.nth.call(null,vec__29248,(0),null);
var target = cljs.core.nth.call(null,vec__29248,(1),null);
var val = cljs.core.nth.call(null,vec__29248,(2),null);
var alt = cljs.core.nth.call(null,vec__29248,(3),null);
var form = vec__29248;
var vec__29251 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = target;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.call(null,vec__29251,(0),null);
var val__$1 = cljs.core.nth.call(null,vec__29251,(1),null);
var _STAR_recur_frames_STAR_29254 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = (((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null))) && ((val__$1 === true) || (val__$1 === false)))?(function (){
cljs.core._STAR_unchecked_if_STAR_ = val__$1;

return new cljs.core.Keyword("cljs.analyzer","set-unchecked-if","cljs.analyzer/set-unchecked-if",1413639250);
})()
:(((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*unchecked-arrays*","*unchecked-arrays*",-381849911,null))) && ((val__$1 === true) || (val__$1 === false)))?(function (){
cljs.core._STAR_unchecked_arrays_STAR_ = val__$1;

return new cljs.core.Keyword("cljs.analyzer","set-unchecked-arrays","cljs.analyzer/set-unchecked-arrays",2053080937);
})()
:((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*warn-on-infer*","*warn-on-infer*",1890277318,null)))?(function (){
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.assoc.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),true);

return new cljs.core.Keyword("cljs.analyzer","set-warn-on-infer","cljs.analyzer/set-warn-on-infer",1143377544);
})()
:(((target__$1 instanceof cljs.core.Symbol))?(function (){
if(!((new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),target__$1)) == null))){
throw cljs.analyzer.error.call(null,env,"Can't set! a constant");
} else {
}

var local_29255 = target__$1.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.truth_((function (){var or__8916__auto__ = (local_29255 == null);
if(or__8916__auto__){
return or__8916__auto__;
} else {
var and__8904__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(local_29255);
if(cljs.core.truth_(and__8904__auto__)){
var or__8916__auto____$1 = new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(local_29255);
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
var or__8916__auto____$2 = new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(local_29255);
if(cljs.core.truth_(or__8916__auto____$2)){
return or__8916__auto____$2;
} else {
return new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(local_29255);
}
}
} else {
return and__8904__auto__;
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,"Can't set! local var or non-mutable field");
}

return cljs.analyzer.analyze_symbol.call(null,enve,target__$1);
})()
:((cljs.core.seq_QMARK_.call(null,target__$1))?(function (){var targetexpr = cljs.analyzer.analyze_seq.call(null,enve,target__$1,null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(targetexpr))){
return targetexpr;
} else {
return null;
}
})():null)
))));
var valexpr = cljs.analyzer.analyze.call(null,enve,val__$1);
if(cljs.core.truth_(targetexpr)){
} else {
throw cljs.analyzer.error.call(null,env,"set! target must be a field or a symbol naming a var");
}

if(!((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","set-warn-on-infer","cljs.analyzer/set-warn-on-infer",1143377544),null,new cljs.core.Keyword("cljs.analyzer","set-unchecked-arrays","cljs.analyzer/set-unchecked-arrays",2053080937),null,new cljs.core.Keyword("cljs.analyzer","set-unchecked-if","cljs.analyzer/set-unchecked-if",1413639250),null], null), null).call(null,targetexpr) == null))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"val","val",128701612),valexpr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr,valexpr], null)], null);

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29254;
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
if((dep instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cljs.analyzer/foreign-dep? expected symbol got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dep))].join('')),"\n","(symbol? dep)"].join('')));
}

var js_index = new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var temp__5459__auto__ = cljs.core.find.call(null,js_index,cljs.core.name.call(null,dep));
if((temp__5459__auto__ == null)){
return false;
} else {
var vec__29256 = temp__5459__auto__;
var _ = cljs.core.nth.call(null,vec__29256,(0),null);
var map__29259 = cljs.core.nth.call(null,vec__29256,(1),null);
var map__29259__$1 = ((((!((map__29259 == null)))?((((map__29259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29259):map__29259);
var foreign = cljs.core.get.call(null,map__29259__$1,new cljs.core.Keyword(null,"foreign","foreign",990521149));
return foreign;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
var G__29263 = arguments.length;
switch (G__29263) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.call(null,lib,deps,env,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var _STAR_cljs_dep_set_STAR_29264 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR_29264,compiler){
return (function (p1__29261_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__29261_SHARP_));
});})(_STAR_cljs_dep_set_STAR_29264,compiler))
,deps)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Circular dependency detected, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')),"\n","(every? (fn* [p1__29261#] (not (contains? *cljs-dep-set* p1__29261#))) deps)"].join('')));
}

var seq__29265 = cljs.core.seq.call(null,deps);
var chunk__29266 = null;
var count__29267 = (0);
var i__29268 = (0);
while(true){
if((i__29268 < count__29267)){
var dep = cljs.core._nth.call(null,chunk__29266,i__29268);
if(cljs.core.truth_((function (){var or__8916__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep));
if(or__8916__auto____$1){
return or__8916__auto____$1;
} else {
var or__8916__auto____$2 = cljs.analyzer.node_module_dep_QMARK_.call(null,dep);
if(or__8916__auto____$2){
return or__8916__auto____$2;
} else {
return cljs.analyzer.js_module_exists_QMARK_.call(null,cljs.core.name.call(null,dep));
}
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)));
}

var G__29270 = seq__29265;
var G__29271 = chunk__29266;
var G__29272 = count__29267;
var G__29273 = (i__29268 + (1));
seq__29265 = G__29270;
chunk__29266 = G__29271;
count__29267 = G__29272;
i__29268 = G__29273;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29265);
if(temp__5457__auto__){
var seq__29265__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29265__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__29265__$1);
var G__29274 = cljs.core.chunk_rest.call(null,seq__29265__$1);
var G__29275 = c__9847__auto__;
var G__29276 = cljs.core.count.call(null,c__9847__auto__);
var G__29277 = (0);
seq__29265 = G__29274;
chunk__29266 = G__29275;
count__29267 = G__29276;
i__29268 = G__29277;
continue;
} else {
var dep = cljs.core.first.call(null,seq__29265__$1);
if(cljs.core.truth_((function (){var or__8916__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep));
if(or__8916__auto____$1){
return or__8916__auto____$1;
} else {
var or__8916__auto____$2 = cljs.analyzer.node_module_dep_QMARK_.call(null,dep);
if(or__8916__auto____$2){
return or__8916__auto____$2;
} else {
return cljs.analyzer.js_module_exists_QMARK_.call(null,cljs.core.name.call(null,dep));
}
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)));
}

var G__29278 = cljs.core.next.call(null,seq__29265__$1);
var G__29279 = null;
var G__29280 = (0);
var G__29281 = (0);
seq__29265 = G__29278;
chunk__29266 = G__29279;
count__29267 = G__29280;
i__29268 = G__29281;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_29264;
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;

cljs.analyzer.missing_use_QMARK_ = (function cljs$analyzer$missing_use_QMARK_(lib,sym,cenv){
var js_lib = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.name.call(null,lib)], null));
return (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),lib,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150)),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150))) && (!(cljs.core._EQ_.call(null,cljs.core.get.call(null,js_lib,new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"goog","goog",-1711135452)))) && (cljs.core.not.call(null,cljs.core.get.call(null,js_lib,new cljs.core.Keyword(null,"closure-lib","closure-lib",2105917916)))) && (!(cljs.analyzer.node_module_dep_QMARK_.call(null,lib))) && (cljs.core.not.call(null,cljs.analyzer.dep_has_global_exports_QMARK_.call(null,lib)));
});
cljs.analyzer.missing_rename_QMARK_ = (function cljs$analyzer$missing_rename_QMARK_(sym,cenv){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym__$1,cenv);
});
cljs.analyzer.missing_use_macro_QMARK_ = (function cljs$analyzer$missing_use_macro_QMARK_(lib,sym){
if((lib instanceof cljs.core.Symbol)){
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return ((the_ns == null)) || ((the_ns.findInternedVar(sym) == null));
} else {
return null;
}
});
cljs.analyzer.missing_rename_macro_QMARK_ = (function cljs$analyzer$missing_rename_macro_QMARK_(sym){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return ((the_ns == null)) || ((the_ns.findInternedVar(sym__$1) == null));
});
cljs.analyzer.missing_uses = (function cljs$analyzer$missing_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__29282){
var vec__29283 = p__29282;
var sym = cljs.core.nth.call(null,vec__29283,(0),null);
var lib = cljs.core.nth.call(null,vec__29283,(1),null);
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv);
});})(cenv))
,uses));
});
cljs.analyzer.missing_renames = (function cljs$analyzer$missing_renames(renames,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__29286){
var vec__29287 = p__29286;
var _ = cljs.core.nth.call(null,vec__29287,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__29287,(1),null);
return cljs.analyzer.missing_rename_QMARK_.call(null,qualified_sym,cenv);
});})(cenv))
,renames));
});
cljs.analyzer.missing_use_macros = (function cljs$analyzer$missing_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__29290){
var vec__29291 = p__29290;
var sym = cljs.core.nth.call(null,vec__29291,(0),null);
var lib = cljs.core.nth.call(null,vec__29291,(1),null);
return cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym);
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_use_macros = (function cljs$analyzer$inferred_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__29294){
var vec__29295 = p__29294;
var sym = cljs.core.nth.call(null,vec__29295,(0),null);
var lib = cljs.core.nth.call(null,vec__29295,(1),null);
return cljs.core.not.call(null,cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym));
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_rename_macros = (function cljs$analyzer$inferred_rename_macros(rename_macros,env){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__29298){
var vec__29299 = p__29298;
var _ = cljs.core.nth.call(null,vec__29299,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__29299,(1),null);
return cljs.core.not.call(null,cljs.analyzer.missing_rename_macro_QMARK_.call(null,qualified_sym));
}),rename_macros));
});
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var seq__29302 = cljs.core.seq.call(null,uses);
var chunk__29303 = null;
var count__29304 = (0);
var i__29305 = (0);
while(true){
if((i__29305 < count__29304)){
var vec__29306 = cljs.core._nth.call(null,chunk__29303,i__29305);
var sym = cljs.core.nth.call(null,vec__29306,(0),null);
var lib = cljs.core.nth.call(null,vec__29306,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null)));
} else {
}

var G__29312 = seq__29302;
var G__29313 = chunk__29303;
var G__29314 = count__29304;
var G__29315 = (i__29305 + (1));
seq__29302 = G__29312;
chunk__29303 = G__29313;
count__29304 = G__29314;
i__29305 = G__29315;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29302);
if(temp__5457__auto__){
var seq__29302__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29302__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__29302__$1);
var G__29316 = cljs.core.chunk_rest.call(null,seq__29302__$1);
var G__29317 = c__9847__auto__;
var G__29318 = cljs.core.count.call(null,c__9847__auto__);
var G__29319 = (0);
seq__29302 = G__29316;
chunk__29303 = G__29317;
count__29304 = G__29318;
i__29305 = G__29319;
continue;
} else {
var vec__29309 = cljs.core.first.call(null,seq__29302__$1);
var sym = cljs.core.nth.call(null,vec__29309,(0),null);
var lib = cljs.core.nth.call(null,vec__29309,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null)));
} else {
}

var G__29320 = cljs.core.next.call(null,seq__29302__$1);
var G__29321 = null;
var G__29322 = (0);
var G__29323 = (0);
seq__29302 = G__29320;
chunk__29303 = G__29321;
count__29304 = G__29322;
i__29305 = G__29323;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(var_args){
var G__29325 = arguments.length;
switch (G__29325) {
case 2:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2 = (function (use_macros,env){
return cljs.analyzer.check_use_macros.call(null,use_macros,null,env);
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3 = (function (use_macros,missing_uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var seq__29326_29337 = cljs.core.seq.call(null,use_macros);
var chunk__29327_29338 = null;
var count__29328_29339 = (0);
var i__29329_29340 = (0);
while(true){
if((i__29329_29340 < count__29328_29339)){
var vec__29330_29341 = cljs.core._nth.call(null,chunk__29327_29338,i__29329_29340);
var sym_29342 = cljs.core.nth.call(null,vec__29330_29341,(0),null);
var lib_29343 = cljs.core.nth.call(null,vec__29330_29341,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_29343,sym_29342))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_29343,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_29342], null)));
} else {
}

var G__29344 = seq__29326_29337;
var G__29345 = chunk__29327_29338;
var G__29346 = count__29328_29339;
var G__29347 = (i__29329_29340 + (1));
seq__29326_29337 = G__29344;
chunk__29327_29338 = G__29345;
count__29328_29339 = G__29346;
i__29329_29340 = G__29347;
continue;
} else {
var temp__5457__auto___29348 = cljs.core.seq.call(null,seq__29326_29337);
if(temp__5457__auto___29348){
var seq__29326_29349__$1 = temp__5457__auto___29348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29326_29349__$1)){
var c__9847__auto___29350 = cljs.core.chunk_first.call(null,seq__29326_29349__$1);
var G__29351 = cljs.core.chunk_rest.call(null,seq__29326_29349__$1);
var G__29352 = c__9847__auto___29350;
var G__29353 = cljs.core.count.call(null,c__9847__auto___29350);
var G__29354 = (0);
seq__29326_29337 = G__29351;
chunk__29327_29338 = G__29352;
count__29328_29339 = G__29353;
i__29329_29340 = G__29354;
continue;
} else {
var vec__29333_29355 = cljs.core.first.call(null,seq__29326_29349__$1);
var sym_29356 = cljs.core.nth.call(null,vec__29333_29355,(0),null);
var lib_29357 = cljs.core.nth.call(null,vec__29333_29355,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_29357,sym_29356))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_29357,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_29356], null)));
} else {
}

var G__29358 = cljs.core.next.call(null,seq__29326_29349__$1);
var G__29359 = null;
var G__29360 = (0);
var G__29361 = (0);
seq__29326_29337 = G__29358;
chunk__29327_29338 = G__29359;
count__29328_29339 = G__29360;
i__29329_29340 = G__29361;
continue;
}
} else {
}
}
break;
}

cljs.analyzer.check_uses.call(null,cljs.analyzer.missing_use_macros.call(null,missing_uses,env),env);

return cljs.analyzer.inferred_use_macros.call(null,missing_uses,env);
});

cljs.analyzer.check_use_macros.cljs$lang$maxFixedArity = 3;

cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__29365,env){
var map__29366 = p__29365;
var map__29366__$1 = ((((!((map__29366 == null)))?((((map__29366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29366):map__29366);
var ast = map__29366__$1;
var name = cljs.core.get.call(null,map__29366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var uses = cljs.core.get.call(null,map__29366__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__29366__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var missing_uses = (((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq.call(null,uses)))?cljs.analyzer.missing_uses.call(null,uses,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,uses,cljs.core.keys.call(null,missing_uses));
var remove_missing_uses = ((function (missing_uses,maybe_macros,map__29366,map__29366__$1,ast,name,uses,use_macros){
return (function (p1__29362_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__29362_SHARP_,cljs.core.keys.call(null,missing_uses));
});})(missing_uses,maybe_macros,map__29366,map__29366__$1,ast,name,uses,use_macros))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),((function (missing_uses,maybe_macros,remove_missing_uses,map__29366,map__29366__$1,ast,name,uses,use_macros){
return (function (p1__29363_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__29363_SHARP_,cljs.analyzer.check_use_macros.call(null,use_macros,missing_uses,env)),cljs.analyzer.inferred_use_macros.call(null,maybe_macros,env));
});})(missing_uses,maybe_macros,remove_missing_uses,map__29366,map__29366__$1,ast,name,uses,use_macros))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__29366,map__29366__$1,ast,name,uses,use_macros){
return (function (p1__29364_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__29364_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),cljs.core.merge,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
});})(missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__29366,map__29366__$1,ast,name,uses,use_macros))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__29371,env){
var map__29372 = p__29371;
var map__29372__$1 = ((((!((map__29372 == null)))?((((map__29372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372):map__29372);
var ast = map__29372__$1;
var name = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var renames = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var missing_renames = (((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq.call(null,renames)))?cljs.analyzer.missing_renames.call(null,renames,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,renames,cljs.core.keys.call(null,missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros.call(null,missing_renames,env);
var remove_missing_renames = ((function (missing_renames,maybe_macros,missing_rename_macros,map__29372,map__29372__$1,ast,name,renames){
return (function (p1__29368_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__29368_SHARP_,cljs.core.keys.call(null,missing_renames));
});})(missing_renames,maybe_macros,missing_rename_macros,map__29372,map__29372__$1,ast,name,renames))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__29372,map__29372__$1,ast,name,renames){
return (function (p1__29369_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__29369_SHARP_,missing_rename_macros),cljs.analyzer.inferred_rename_macros.call(null,maybe_macros,env));
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__29372,map__29372__$1,ast,name,renames))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__29372,map__29372__$1,ast,name,renames){
return (function (p1__29370_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__29370_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),cljs.core.merge,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__29372,map__29372__$1,ast,name,renames))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"; offending spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,spec))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if(((spec instanceof cljs.core.Symbol)) || (typeof spec === 'string') || (cljs.core.sequential_QMARK_.call(null,spec))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_.call(null,spec)){
if(((cljs.core.first.call(null,spec) instanceof cljs.core.Symbol)) || (typeof cljs.core.first.call(null,spec) === 'string')){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as alias, :refer (names) and :rename {from to} options supported in :require"));
}

if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),cljs.core.next.call(null,spec))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as, :refer and :rename options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies.call(null,cljs.core.next.call(null,spec));
return ((fs.call(null,new cljs.core.Keyword(null,"as","as",1148689641),(0)) <= (1))) && ((fs.call(null,new cljs.core.Keyword(null,"refer","refer",-964295553),(0)) <= (1)));
})()){
return null;
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.call(null,(function (s,p__29375){
var vec__29376 = p__29375;
var seq__29377 = cljs.core.seq.call(null,vec__29376);
var first__29378 = cljs.core.first.call(null,seq__29377);
var seq__29377__$1 = cljs.core.next.call(null,seq__29377);
var k = first__29378;
var filters = seq__29377__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440))){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(s))){
throw cljs.analyzer.error.call(null,env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

var valid_kws = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null], null), null);
var xs = (function (){var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY], null);
var err = !(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,filters)));
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,"Only [:refer-clojure :exclude (names)] and optionally `:rename {from to}` specs supported");
} else {
if(!((fs == null))){
var kw = cljs.core.first.call(null,fs);
if(cljs.core.truth_(valid_kws.call(null,kw))){
var refs = cljs.core.second.call(null,fs);
if(!(((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,valid_kws,vec__29376,seq__29377,first__29378,seq__29377__$1,k,filters){
return (function (p1__29374_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__29374_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__29376,seq__29377,first__29378,seq__29377__$1,k,filters))
,refs))))){
var G__29379 = fs;
var G__29380 = ret;
var G__29381 = true;
fs = G__29379;
ret = G__29380;
err = G__29381;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))){
var G__29382 = cljs.core.nnext.call(null,fs);
var G__29383 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.into,refs);
var G__29384 = false;
fs = G__29382;
ret = G__29383;
err = G__29384;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))){
var G__29385 = cljs.core.nnext.call(null,fs);
var G__29386 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),cljs.core.merge,refs);
var G__29387 = false;
fs = G__29385;
ret = G__29386;
err = G__29387;
continue;
} else {
return null;
}
}
}
} else {
var G__29388 = fs;
var G__29389 = ret;
var G__29390 = true;
fs = G__29388;
ret = G__29389;
err = G__29390;
continue;
}
} else {
return ret;

}
}
break;
}
})();
return cljs.core.merge_with.call(null,cljs.core.into,s,xs);
} else {
return s;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY], null),args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__29392){
var vec__29393 = p__29392;
var seq__29394 = cljs.core.seq.call(null,vec__29393);
var first__29395 = cljs.core.first.call(null,seq__29394);
var seq__29394__$1 = cljs.core.next.call(null,seq__29394);
var lib = first__29395;
var filters = seq__29394__$1;
var spec = vec__29393;
if(((lib instanceof cljs.core.Symbol)) && (cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
}

var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
var err = false;
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
} else {
if(!((fs == null))){
var kw = cljs.core.first.call(null,fs);
var only_QMARK_ = cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"only","only",1907811652));
if((only_QMARK_) || (cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613)))){
if(!((cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw)]),ret) == null))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :only and :rename options may only be specified once in :use / :use-macros"));
} else {
var refs = cljs.core.second.call(null,fs);
if(!(((only_QMARK_) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,only_QMARK_,vec__29393,seq__29394,first__29395,seq__29394__$1,lib,filters,spec){
return (function (p1__29391_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__29391_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__29393,seq__29394,first__29395,seq__29394__$1,lib,filters,spec))
,refs))))){
var G__29396 = fs;
var G__29397 = ret;
var G__29398 = true;
fs = G__29396;
ret = G__29397;
err = G__29398;
continue;
} else {
var G__29399 = cljs.core.nnext.call(null,fs);
var G__29400 = cljs.core.into.call(null,ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw),refs], null));
var G__29401 = false;
fs = G__29399;
ret = G__29400;
err = G__29401;
continue;
}
}
} else {
var G__29402 = fs;
var G__29403 = ret;
var G__29404 = true;
fs = G__29402;
ret = G__29403;
err = G__29404;
continue;
}
} else {
if(!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),ret) == null))){
return ret;
} else {
var G__29405 = fs;
var G__29406 = ret;
var G__29407 = true;
fs = G__29405;
ret = G__29406;
err = G__29407;
continue;
}

}
}
break;
}
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if(((spec instanceof cljs.core.Symbol)) || (typeof spec === 'string')){
var G__29423 = env;
var G__29424 = macros_QMARK_;
var G__29425 = deps;
var G__29426 = aliases;
var G__29427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__29423;
macros_QMARK_ = G__29424;
deps = G__29425;
aliases = G__29426;
spec = G__29427;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec.call(null,env,macros_QMARK_,spec);

var vec__29408 = spec;
var seq__29409 = cljs.core.seq.call(null,vec__29408);
var first__29410 = cljs.core.first.call(null,seq__29409);
var seq__29409__$1 = cljs.core.next.call(null,seq__29409);
var lib = first__29410;
var opts = seq__29409__$1;
var vec__29411 = (function (){var temp__5459__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join(''),new cljs.core.Keyword(null,"name","name",1843675177));
if((temp__5459__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,null], null);
} else {
var js_module_name = temp__5459__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,js_module_name),lib], null);
}
})();
var lib__$1 = cljs.core.nth.call(null,vec__29411,(0),null);
var js_module_provides = cljs.core.nth.call(null,vec__29411,(1),null);
var map__29414 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__29414__$1 = ((((!((map__29414 == null)))?((((map__29414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29414):map__29414);
var alias = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"as","as",1148689641),((typeof lib__$1 === 'string')?cljs.core.symbol.call(null,cljs.core.munge.call(null,lib__$1)):lib__$1));
var referred = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var renamed = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var referred_without_renamed = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,renamed)),referred));
var vec__29415 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.Keyword(null,"rename","rename",1508157613)], null));
var rk = cljs.core.nth.call(null,vec__29415,(0),null);
var uk = cljs.core.nth.call(null,vec__29415,(1),null);
var renk = cljs.core.nth.call(null,vec__29415,(2),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(!((alias == null))){
var alias_type_29428 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.Keyword(null,"macros","macros",811339431):new cljs.core.Keyword(null,"fns","fns",1185138786));
var lib_SINGLEQUOTE__29429 = alias_type_29428.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aliases)).call(null,alias);
if((!((lib_SINGLEQUOTE__29429 == null))) && (cljs.core.not_EQ_.call(null,lib__$1,lib_SINGLEQUOTE__29429))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.call(null,aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_29428], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null),(cljs.core.truth_(js_module_provides)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_module_provides,lib__$1], null):null));
} else {
}

if(((cljs.core.sequential_QMARK_.call(null,referred)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,referred))) || ((referred == null))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(cljs.core.truth_(macros_QMARK_)){
} else {
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.call(null,((!((alias == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([rk,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib__$1]),cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib__$1]),(cljs.core.truth_(js_module_provides)?cljs.core.PersistentArrayMap.createAsIfByAssoc([js_module_provides,lib__$1]):null))]):null),((!((referred_without_renamed == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([uk,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,referred_without_renamed,cljs.core.repeat.call(null,lib__$1)))]):null),((!((renamed == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([renk,cljs.core.reduce.call(null,((function (env,macros_QMARK_,deps,aliases,spec,vec__29408,seq__29409,first__29410,seq__29409__$1,lib,opts,vec__29411,lib__$1,js_module_provides,map__29414,map__29414__$1,alias,referred,renamed,referred_without_renamed,vec__29415,rk,uk,renk){
return (function (m,p__29419){
var vec__29420 = p__29419;
var original = cljs.core.nth.call(null,vec__29420,(0),null);
var renamed__$1 = cljs.core.nth.call(null,vec__29420,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([original]),referred))){
} else {
throw cljs.analyzer.error.call(null,env,["Renamed symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)," not referred"].join(''));
}

return cljs.core.assoc.call(null,m,renamed__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(env,macros_QMARK_,deps,aliases,spec,vec__29408,seq__29409,first__29410,seq__29409__$1,lib,opts,vec__29411,lib__$1,js_module_provides,map__29414,map__29414__$1,alias,referred,renamed,referred_without_renamed,vec__29415,rk,uk,renk))
,cljs.core.PersistentArrayMap.EMPTY,renamed)]):null));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((cljs.core.sequential_QMARK_.call(null,spec)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,spec))) || (((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,spec) == null)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__29430_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__29430_SHARP_,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,spec)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29430_SHARP_)].join(''))],null));
}),cljs.core.rest.call(null,spec))):cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.call(null,cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),/\./))),spec]));
var seq__29431_29441 = cljs.core.seq.call(null,import_map);
var chunk__29432_29442 = null;
var count__29433_29443 = (0);
var i__29434_29444 = (0);
while(true){
if((i__29434_29444 < count__29433_29443)){
var vec__29435_29445 = cljs.core._nth.call(null,chunk__29432_29442,i__29434_29444);
var __29446 = cljs.core.nth.call(null,vec__29435_29445,(0),null);
var spec_29447__$1 = cljs.core.nth.call(null,vec__29435_29445,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_29447__$1);

var G__29448 = seq__29431_29441;
var G__29449 = chunk__29432_29442;
var G__29450 = count__29433_29443;
var G__29451 = (i__29434_29444 + (1));
seq__29431_29441 = G__29448;
chunk__29432_29442 = G__29449;
count__29433_29443 = G__29450;
i__29434_29444 = G__29451;
continue;
} else {
var temp__5457__auto___29452 = cljs.core.seq.call(null,seq__29431_29441);
if(temp__5457__auto___29452){
var seq__29431_29453__$1 = temp__5457__auto___29452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29431_29453__$1)){
var c__9847__auto___29454 = cljs.core.chunk_first.call(null,seq__29431_29453__$1);
var G__29455 = cljs.core.chunk_rest.call(null,seq__29431_29453__$1);
var G__29456 = c__9847__auto___29454;
var G__29457 = cljs.core.count.call(null,c__9847__auto___29454);
var G__29458 = (0);
seq__29431_29441 = G__29455;
chunk__29432_29442 = G__29456;
count__29433_29443 = G__29457;
i__29434_29444 = G__29458;
continue;
} else {
var vec__29438_29459 = cljs.core.first.call(null,seq__29431_29453__$1);
var __29460 = cljs.core.nth.call(null,vec__29438_29459,(0),null);
var spec_29461__$1 = cljs.core.nth.call(null,vec__29438_29459,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_29461__$1);

var G__29462 = cljs.core.next.call(null,seq__29431_29453__$1);
var G__29463 = null;
var G__29464 = (0);
var G__29465 = (0);
seq__29431_29441 = G__29462;
chunk__29432_29442 = G__29463;
count__29433_29443 = G__29464;
i__29434_29444 = G__29465;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import","import",-1399500709),import_map,new cljs.core.Keyword(null,"require","require",-468001333),import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.analyzer._STAR_macro_infer_STAR_){
var ns = ((cljs.core.sequential_QMARK_.call(null,form))?cljs.core.first.call(null,form):form);
var map__29466 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
var map__29466__$1 = ((((!((map__29466 == null)))?((((map__29466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29466):map__29466);
var use_macros = cljs.core.get.call(null,map__29466__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__29466__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__8916__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.vals.call(null,require_macros));
}
} else {
return null;
}
});
/**
 * Given a symbol that starts with clojure as the first segment return the
 * same symbol with the first segment replaced with cljs
 */
cljs.analyzer.clj_ns__GT_cljs_ns = (function cljs$analyzer$clj_ns__GT_cljs_ns(sym){
var segs = clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./);
if(cljs.core._EQ_.call(null,"clojure",cljs.core.first.call(null,segs))){
return cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.cons.call(null,"cljs",cljs.core.next.call(null,segs))));
} else {
return sym;
}
});
cljs.analyzer.canonicalize_specs = (function cljs$analyzer$canonicalize_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
var spec = cljs.core.second.call(null,quoted_spec_or_kw);
if((cljs.core.vector_QMARK_.call(null,spec)) || (cljs.core.map_QMARK_.call(null,spec))){
return spec;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
}
}
});
return cljs.core.map.call(null,canonicalize,specs);
});
cljs.analyzer.canonicalize_import_specs = (function cljs$analyzer$canonicalize_import_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_import_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
return cljs.core.second.call(null,quoted_spec_or_kw);
}
});
return cljs.core.map.call(null,canonicalize,specs);
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__29469 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29470){
var vec__29471 = p__29470;
var seq__29472 = cljs.core.seq.call(null,vec__29471);
var first__29473 = cljs.core.first.call(null,seq__29472);
var seq__29472__$1 = cljs.core.next.call(null,seq__29472);
var k = first__29473;
var specs = seq__29472__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__29469__$1 = ((((!((map__29469 == null)))?((((map__29469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29469):map__29469);
var indexed = map__29469__$1;
var require = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953),null], null), null);
var remove_from_spec = ((function (map__29469,map__29469__$1,indexed,require,sugar_keys){
return (function (pred,spec){
while(true){
if(cljs.core.not.call(null,(function (){var and__8904__auto__ = cljs.core.sequential_QMARK_.call(null,spec);
if(and__8904__auto__){
return cljs.core.some.call(null,pred,spec);
} else {
return and__8904__auto__;
}
})())){
return spec;
} else {
var vec__29475 = cljs.core.split_with.call(null,cljs.core.complement.call(null,pred),spec);
var l = cljs.core.nth.call(null,vec__29475,(0),null);
var r = cljs.core.nth.call(null,vec__29475,(1),null);
var G__29481 = pred;
var G__29482 = cljs.core.concat.call(null,l,cljs.core.drop.call(null,(2),r));
pred = G__29481;
spec = G__29482;
continue;
}
break;
}
});})(map__29469,map__29469__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.core.map.call(null,((function (map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953))){
return new cljs.core.Keyword(null,"refer","refer",-964295553);
} else {
return x;
}
});})(map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__29468_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null).call(null,p1__29468_SHARP_);
});})(map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.call(null,((function (map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
return replace_refer_macros.call(null,remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rename","rename",1508157613),null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null], null), null),x))));
} else {
return x;
}
});})(map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.call(null,((function (map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
var or__8916__auto__ = (function (){var and__8904__auto__ = cljs.core.sequential_QMARK_.call(null,x);
if(and__8904__auto__){
return cljs.core.some.call(null,sugar_keys,x);
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = reload_spec_QMARK_.call(null,x);
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_.call(null,x);
}
}
});})(map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.call(null,remove_from_spec,sugar_keys);
var temp__5459__auto__ = cljs.core.seq.call(null,to_macro_specs.call(null,require));
if((temp__5459__auto__ == null)){
return args;
} else {
var require_specs = temp__5459__auto__;
return cljs.core.map.call(null,((function (require_specs,temp__5459__auto__,map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
var vec__29478 = x;
var k = cljs.core.nth.call(null,vec__29478,(0),null);
var v = cljs.core.nth.call(null,vec__29478,(1),null);
return cljs.core.cons.call(null,k,cljs.core.map.call(null,remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__5459__auto__,map__29469,map__29469__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.call(null,indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.call(null,(function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.butlast.call(null,xs))),cljs.core.symbol.call(null,cljs.core.last.call(null,xs))], null);
}),cljs.core.drop.call(null,(2),cljs.core.reductions.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__29483 = cljs.core.seq.call(null,to_check);
var chunk__29484 = null;
var count__29485 = (0);
var i__29486 = (0);
while(true){
if((i__29486 < count__29485)){
var vec__29487 = cljs.core._nth.call(null,chunk__29484,i__29486);
var clash_ns = cljs.core.nth.call(null,vec__29487,(0),null);
var name = cljs.core.nth.call(null,vec__29487,(1),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null));
} else {
}

var G__29493 = seq__29483;
var G__29494 = chunk__29484;
var G__29495 = count__29485;
var G__29496 = (i__29486 + (1));
seq__29483 = G__29493;
chunk__29484 = G__29494;
count__29485 = G__29495;
i__29486 = G__29496;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29483);
if(temp__5457__auto__){
var seq__29483__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29483__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__29483__$1);
var G__29497 = cljs.core.chunk_rest.call(null,seq__29483__$1);
var G__29498 = c__9847__auto__;
var G__29499 = cljs.core.count.call(null,c__9847__auto__);
var G__29500 = (0);
seq__29483 = G__29497;
chunk__29484 = G__29498;
count__29485 = G__29499;
i__29486 = G__29500;
continue;
} else {
var vec__29490 = cljs.core.first.call(null,seq__29483__$1);
var clash_ns = cljs.core.nth.call(null,vec__29490,(0),null);
var name = cljs.core.nth.call(null,vec__29490,(1),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null));
} else {
}

var G__29501 = cljs.core.next.call(null,seq__29483__$1);
var G__29502 = null;
var G__29503 = (0);
var G__29504 = (0);
seq__29483 = G__29501;
chunk__29484 = G__29502;
count__29485 = G__29503;
i__29486 = G__29504;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.not.call(null,goog.string.endsWith(name_str,"$macros"))){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_str),"$macros"].join(''));
} else {
return name;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__29507,___$1,opts){
var vec__29508 = p__29507;
var seq__29509 = cljs.core.seq.call(null,vec__29508);
var first__29510 = cljs.core.first.call(null,seq__29509);
var seq__29509__$1 = cljs.core.next.call(null,seq__29509);
var ___$2 = first__29510;
var first__29510__$1 = cljs.core.first.call(null,seq__29509__$1);
var seq__29509__$2 = cljs.core.next.call(null,seq__29509__$1);
var name = first__29510__$1;
var args = seq__29509__$2;
var form = vec__29508;
if(cljs.analyzer._STAR_allow_ns_STAR_){
} else {
throw cljs.analyzer.error.call(null,env,"Namespace declarations must appear at the top-level.");
}

if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__29511 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__29511);
} else {
return G__29511;
}
})();
var segments_29537 = clojure.string.split.call(null,cljs.core.name.call(null,name__$1),/\./);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments_29537))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

if(!((cljs.core.some.call(null,cljs.analyzer.js_reserved,segments_29537) == null))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

cljs.analyzer.find_def_clash.call(null,env,name__$1,segments_29537);

var docstring = ((typeof cljs.core.first.call(null,args) === 'string')?cljs.core.first.call(null,args):null);
var mdocstr = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name__$1));
var args__$1 = ((!((docstring == null)))?cljs.core.next.call(null,args):args);
var metadata = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1)))?cljs.core.first.call(null,args__$1):null);
var form_meta = cljs.core.meta.call(null,form);
var args__$2 = cljs.analyzer.desugar_ns_specs.call(null,((!((metadata == null)))?cljs.core.next.call(null,args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.call(null,name__$1,cljs.core.merge,metadata);
var map__29512 = cljs.analyzer.parse_ns_excludes.call(null,env,args__$2);
var map__29512__$1 = ((((!((map__29512 == null)))?((((map__29512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29512):map__29512);
var excludes = cljs.core.get.call(null,map__29512__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__29512__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (m,p__29518){
var vec__29519 = p__29518;
var original = cljs.core.nth.call(null,vec__29519,(0),null);
var renamed = cljs.core.nth.call(null,vec__29519,(1),null);
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var aliases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.call(null,cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null));
var reload = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null));
var reloads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var map__29513 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (m,p__29522){
var vec__29523 = p__29522;
var seq__29524 = cljs.core.seq.call(null,vec__29523);
var first__29525 = cljs.core.first.call(null,seq__29524);
var seq__29524__$1 = cljs.core.next.call(null,seq__29524);
var k = first__29525;
var libs = seq__29524__$1;
var libspec = vec__29523;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,["Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported. Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)," instead."].join(''));
}

if(cljs.core.truth_(cljs.core.deref.call(null,valid_forms).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,["Only one ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," form is allowed per namespace definition"].join(''));
}

cljs.core.swap_BANG_.call(null,valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if(!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs) == null))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if(!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs) == null))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

var temp__5457__auto___29538 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__29523,seq__29524,first__29525,seq__29524__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (p1__29505_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__29505_SHARP_));
});})(vec__29523,seq__29524,first__29525,seq__29524__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
,libs));
if(temp__5457__auto___29538){
var xs_29539 = temp__5457__auto___29538;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_29539),cljs.core.map.call(null,((function (xs_29539,temp__5457__auto___29538,vec__29523,seq__29524,first__29525,seq__29524__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (p1__29506_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__29506_SHARP_));
});})(xs_29539,temp__5457__auto___29538,vec__29523,seq__29524,first__29525,seq__29524__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
,xs_29539)));
} else {
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (p__29526){
var vec__29527 = p__29526;
var r = cljs.core.nth.call(null,vec__29527,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
,args__$2));
var map__29513__$1 = ((((!((map__29513 == null)))?((((map__29513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29513):map__29513);
var params = map__29513__$1;
var uses = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
var vec__29514 = cljs.core.map.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__29513,map__29513__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (spec_map){
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
var ns = cljs.core.symbol.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)].join(''),(0),(cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)].join('')) - (7))));
return cljs.core.reduce.call(null,((function (ns,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__29513,map__29513__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (m,p__29531){
var vec__29532 = p__29531;
var k = cljs.core.nth.call(null,vec__29532,(0),null);
var v = cljs.core.nth.call(null,vec__29532,(1),null);
var G__29535 = m;
if(!(cljs.core.symbol_identical_QMARK_.call(null,v,ns))){
return cljs.core.assoc.call(null,G__29535,k,v);
} else {
return G__29535;
}
});})(ns,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__29513,map__29513__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,spec_map);
} else {
return spec_map;
}
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__29513,map__29513__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [require_macros,use_macros], null));
var require_macros__$1 = cljs.core.nth.call(null,vec__29514,(0),null);
var use_macros__$1 = cljs.core.nth.call(null,vec__29514,(1),null);
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"doc","doc",1913296891)],[rename_macros,cljs.core.merge.call(null,renames,core_renames__$1),use_macros__$1,excludes,name__$2,imports,requires,uses,require_macros__$1,(function (){var or__8916__auto__ = docstring;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return mdocstr;
}
})()]);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null),cljs.core.merge,ns_info);

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__29536 = ns_info;
var G__29536__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__29536,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__29536,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__29513,map__29513__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__29514,require_macros__$1,use_macros__$1,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
});})(G__29536,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__29513,map__29513__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__29514,require_macros__$1,use_macros__$1,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
):G__29536);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__29536__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__29536,G__29536__$1,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__29513,map__29513__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__29514,require_macros__$1,use_macros__$1,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
});})(G__29536,G__29536__$1,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__29512,map__29512__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__29513,map__29513__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__29514,require_macros__$1,use_macros__$1,name__$1,vec__29508,seq__29509,first__29510,seq__29509__$1,___$2,first__29510__$1,seq__29509__$2,name,args,form))
);
} else {
return G__29536__$1;
}
})());
}));
cljs.analyzer.check_duplicate_aliases = (function cljs$analyzer$check_duplicate_aliases(env,old,new$){
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(old);
var seq__29540 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null));
var chunk__29541 = null;
var count__29542 = (0);
var i__29543 = (0);
while(true){
if((i__29543 < count__29542)){
var k = cljs.core._nth.call(null,chunk__29541,i__29543);
var old_aliases_29552 = cljs.core.get.call(null,old,k);
var new_aliases_29553 = cljs.core.get.call(null,new$,k);
var temp__5461__auto___29554 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_29553)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__29540,chunk__29541,count__29542,i__29543,old_aliases_29552,new_aliases_29553,k,ns_name){
return (function (p__29544){
var vec__29545 = p__29544;
var k__$1 = cljs.core.nth.call(null,vec__29545,(0),null);
var v = cljs.core.nth.call(null,vec__29545,(1),null);
var entry = vec__29545;
return (cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_29553,k__$1)));
});})(seq__29540,chunk__29541,count__29542,i__29543,old_aliases_29552,new_aliases_29553,k,ns_name))
,old_aliases_29552)));
if((temp__5461__auto___29554 == null)){
} else {
var alias_29555 = temp__5461__auto___29554;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_29555)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_29552,alias_29555))].join(''));
}

var G__29556 = seq__29540;
var G__29557 = chunk__29541;
var G__29558 = count__29542;
var G__29559 = (i__29543 + (1));
seq__29540 = G__29556;
chunk__29541 = G__29557;
count__29542 = G__29558;
i__29543 = G__29559;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29540);
if(temp__5457__auto__){
var seq__29540__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29540__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__29540__$1);
var G__29560 = cljs.core.chunk_rest.call(null,seq__29540__$1);
var G__29561 = c__9847__auto__;
var G__29562 = cljs.core.count.call(null,c__9847__auto__);
var G__29563 = (0);
seq__29540 = G__29560;
chunk__29541 = G__29561;
count__29542 = G__29562;
i__29543 = G__29563;
continue;
} else {
var k = cljs.core.first.call(null,seq__29540__$1);
var old_aliases_29564 = cljs.core.get.call(null,old,k);
var new_aliases_29565 = cljs.core.get.call(null,new$,k);
var temp__5461__auto___29566 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_29565)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__29540,chunk__29541,count__29542,i__29543,old_aliases_29564,new_aliases_29565,k,seq__29540__$1,temp__5457__auto__,ns_name){
return (function (p__29548){
var vec__29549 = p__29548;
var k__$1 = cljs.core.nth.call(null,vec__29549,(0),null);
var v = cljs.core.nth.call(null,vec__29549,(1),null);
var entry = vec__29549;
return (cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_29565,k__$1)));
});})(seq__29540,chunk__29541,count__29542,i__29543,old_aliases_29564,new_aliases_29565,k,seq__29540__$1,temp__5457__auto__,ns_name))
,old_aliases_29564)));
if((temp__5461__auto___29566 == null)){
} else {
var alias_29567 = temp__5461__auto___29566;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_29567)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_29564,alias_29567))].join(''));
}

var G__29568 = cljs.core.next.call(null,seq__29540__$1);
var G__29569 = null;
var G__29570 = (0);
var G__29571 = (0);
seq__29540 = G__29568;
chunk__29541 = G__29569;
count__29542 = G__29570;
i__29543 = G__29571;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),(function (_,env,p__29575,___$1,opts){
var vec__29576 = p__29575;
var ___$2 = cljs.core.nth.call(null,vec__29576,(0),null);
var quoted_specs = cljs.core.nth.call(null,vec__29576,(1),null);
var form = vec__29576;
var temp__5457__auto___29596 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29576,___$2,quoted_specs,form){
return (function (p1__29572_SHARP_){
return (cljs.core.seq_QMARK_.call(null,p1__29572_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,p1__29572_SHARP_)));
});})(vec__29576,___$2,quoted_specs,form))
,cljs.core.remove.call(null,cljs.core.keyword_QMARK_,quoted_specs)));
if(cljs.core.truth_(temp__5457__auto___29596)){
var not_quoted_29597 = temp__5457__auto___29596;
throw cljs.analyzer.error.call(null,env,["Arguments to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,quoted_specs)))," must be quoted. Offending spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_quoted_29597)].join(''));
} else {
}

if(cljs.analyzer._STAR_allow_ns_STAR_){
} else {
throw cljs.analyzer.error.call(null,env,["Calls to `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,quoted_specs))),"` must appear at the top-level."].join(''));
}

var specs = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.first.call(null,quoted_specs)))?cljs.analyzer.canonicalize_import_specs.call(null,quoted_specs):cljs.analyzer.canonicalize_specs.call(null,quoted_specs));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var args = cljs.analyzer.desugar_ns_specs.call(null,(function (){var x__9870__auto__ = specs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})());
var map__29579 = cljs.analyzer.parse_ns_excludes.call(null,env,args);
var map__29579__$1 = ((((!((map__29579 == null)))?((((map__29579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579):map__29579);
var excludes = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,((function (specs,name,args,map__29579,map__29579__$1,excludes,core_renames,vec__29576,___$2,quoted_specs,form){
return (function (m,p__29582){
var vec__29583 = p__29582;
var original = cljs.core.nth.call(null,vec__29583,(0),null);
var renamed = cljs.core.nth.call(null,vec__29583,(1),null);
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(specs,name,args,map__29579,map__29579__$1,excludes,core_renames,vec__29576,___$2,quoted_specs,form))
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var aliases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.call(null,cljs.analyzer.parse_import_spec,env,deps)], null);
var reload = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null));
var reloads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var map__29580 = cljs.core.reduce.call(null,((function (specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__29576,___$2,quoted_specs,form){
return (function (m,p__29586){
var vec__29587 = p__29586;
var seq__29588 = cljs.core.seq.call(null,vec__29587);
var first__29589 = cljs.core.first.call(null,seq__29588);
var seq__29588__$1 = cljs.core.next.call(null,seq__29588);
var k = first__29589;
var libs = seq__29588__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if(!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs) == null))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if(!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs) == null))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

var temp__5461__auto___29598 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__29587,seq__29588,first__29589,seq__29588__$1,k,libs,specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__29576,___$2,quoted_specs,form){
return (function (p1__29573_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__29573_SHARP_));
});})(vec__29587,seq__29588,first__29589,seq__29588__$1,k,libs,specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__29576,___$2,quoted_specs,form))
,libs));
if((temp__5461__auto___29598 == null)){
} else {
var xs_29599 = temp__5461__auto___29598;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_29599),cljs.core.map.call(null,((function (xs_29599,temp__5461__auto___29598,vec__29587,seq__29588,first__29589,seq__29588__$1,k,libs,specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__29576,___$2,quoted_specs,form){
return (function (p1__29574_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__29574_SHARP_));
});})(xs_29599,temp__5461__auto___29598,vec__29587,seq__29588,first__29589,seq__29588__$1,k,libs,specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__29576,___$2,quoted_specs,form))
,xs_29599)));
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
});})(specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__29576,___$2,quoted_specs,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__29576,___$2,quoted_specs,form){
return (function (p__29590){
var vec__29591 = p__29590;
var r = cljs.core.nth.call(null,vec__29591,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__29576,___$2,quoted_specs,form))
,args));
var map__29580__$1 = ((((!((map__29580 == null)))?((((map__29580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29580):map__29580);
var params = map__29580__$1;
var uses = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
cljs.analyzer._STAR_cljs_ns_STAR_ = name;

var require_info = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"require-macros","require-macros",707947416)],[rename_macros,cljs.core.merge.call(null,renames,core_renames__$1),use_macros,excludes,name,imports,requires,uses,require_macros]);
var ns_info = (function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name], null));
if((cljs.core.count.call(null,ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"imports","imports",-1249933394)], null);
return cljs.core.merge.call(null,ns_info_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),excludes], null),cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.select_keys.call(null,ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys.call(null,require_info,merge_keys)));
} else {
return require_info;
}
})();
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name], null),cljs.core.merge,ns_info);

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns*","ns*",200417856),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__29595 = require_info;
var G__29595__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__29595,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__29595,require_info,ns_info,specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__29580,map__29580__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__29576,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
});})(G__29595,require_info,ns_info,specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__29580,map__29580__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__29576,___$2,quoted_specs,form))
):G__29595);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__29595__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__29595,G__29595__$1,require_info,ns_info,specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__29580,map__29580__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__29576,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
});})(G__29595,G__29595__$1,require_info,ns_info,specs,name,args,map__29579,map__29579__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__29580,map__29580__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__29576,___$2,quoted_specs,form))
);
} else {
return G__29595__$1;
}
})());
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__29600){
var vec__29601 = p__29600;
var _ = cljs.core.nth.call(null,vec__29601,(0),null);
var tsym = cljs.core.nth.call(null,vec__29601,(1),null);
var fields = cljs.core.nth.call(null,vec__29601,(2),null);
var pmasks = cljs.core.nth.call(null,vec__29601,(3),null);
var body = cljs.core.nth.call(null,vec__29601,(4),null);
var form = vec__29601;
var t = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tsym));
var locals = cljs.core.reduce.call(null,((function (t,vec__29601,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.call(null,m,fld,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"mutable","mutable",875778266),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),new cljs.core.Keyword(null,"shadow","shadow",873231803)],[fld,true,cljs.analyzer.get_col.call(null,fld,env),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),cljs.analyzer.get_line.call(null,fld,env),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),m.call(null,fld)]));
});})(t,vec__29601,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),op))?cljs.core.concat.call(null,fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null)):fields));
var protocols = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),tsym], null),((function (t,locals,protocols,vec__29601,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.call(null,(function (){var or__8916__auto__ = m;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),t,new cljs.core.Keyword(null,"type","type",1174270348),true,new cljs.core.Keyword(null,"num-fields","num-fields",1529154024),cljs.core.count.call(null,fields),new cljs.core.Keyword(null,"record","record",-779106859),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),op));
return cljs.core.merge.call(null,m__$1,cljs.core.dissoc.call(null,cljs.core.meta.call(null,tsym),new cljs.core.Keyword(null,"protocols","protocols",-5615896)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols], null),cljs.analyzer.source_info.call(null,tsym,env));
});})(t,locals,protocols,vec__29601,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698),pmasks,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.disj.call(null,protocols,new cljs.core.Symbol("cljs.core","Object","cljs.core/Object",-345545431,null)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783),locals),body)], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),env,form);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__29604_SHARP_){
return cljs.core.boolean$.call(null,(function (){var and__8904__auto__ = (p1__29604_SHARP_ instanceof cljs.core.Symbol);
if(and__8904__auto__){
return cljs.core.re_matches.call(null,/^-.*/,cljs.core.name.call(null,p1__29604_SHARP_));
} else {
return and__8904__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__29605){
var vec__29606 = p__29605;
var target = cljs.core.nth.call(null,vec__29606,(0),null);
var member = cljs.core.nth.call(null,vec__29606,(1),null);
var args = cljs.core.nth.call(null,vec__29606,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642):new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
),(cljs.core.truth_(cljs.analyzer.property_symbol_QMARK_.call(null,member))?new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886):(((member instanceof cljs.core.Symbol))?new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902):((cljs.core.seq_QMARK_.call(null,member))?new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923):new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642)
))),(((args == null))?cljs.core.List.EMPTY:new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","build-dot-form"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function (p1__29609_SHARP_){
return cljs.analyzer.classify_dot_form.call(null,p1__29609_SHARP_);
});})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),cljs.core.List.EMPTY], null),(function (p__29610){
var vec__29611 = p__29610;
var target = cljs.core.nth.call(null,vec__29611,(0),null);
var prop = cljs.core.nth.call(null,vec__29611,(1),null);
var _ = cljs.core.nth.call(null,vec__29611,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","access","cljs.analyzer/access",-1639036494),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.symbol.call(null,cljs.core.name.call(null,prop).substring((1)))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923)], null),(function (p__29614){
var vec__29615 = p__29614;
var target = cljs.core.nth.call(null,vec__29615,(0),null);
var prop = cljs.core.nth.call(null,vec__29615,(1),null);
var args = cljs.core.nth.call(null,vec__29615,(2),null);
throw (new Error(["Cannot provide arguments ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)," on property access ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 *   compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),meth,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.first.call(null,meth),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
});
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)], null),(function (p__29618){
var vec__29619 = p__29618;
var target = cljs.core.nth.call(null,vec__29619,(0),null);
var meth = cljs.core.nth.call(null,vec__29619,(1),null);
var args = cljs.core.nth.call(null,vec__29619,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),cljs.core.List.EMPTY], null),(function (p__29622){
var vec__29623 = p__29622;
var target = cljs.core.nth.call(null,vec__29623,(0),null);
var meth = cljs.core.nth.call(null,vec__29623,(1),null);
var args = cljs.core.nth.call(null,vec__29623,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923),cljs.core.List.EMPTY], null),(function (p__29626){
var vec__29627 = p__29626;
var target = cljs.core.nth.call(null,vec__29627,(0),null);
var meth_expr = cljs.core.nth.call(null,vec__29627,(1),null);
var _ = cljs.core.nth.call(null,vec__29627,(2),null);
return cljs.analyzer.build_method_call.call(null,target,cljs.core.first.call(null,meth_expr),cljs.core.rest.call(null,meth_expr));
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.Keyword(null,"default","default",-1987822328),(function (dot_form){
throw (new Error(["Unknown dot form of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,".",".",1975675962,null),dot_form))," with classification ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.classify_dot_form.call(null,dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__29631 = cljs.analyzer.build_dot_form.call(null,v);
var map__29631__$1 = ((((!((map__29631 == null)))?((((map__29631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29631):map__29631);
var dot_action = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601));
var target__$1 = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"method","method",55703592));
var field__$1 = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var args = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = cljs.analyzer.analyze.call(null,enve,target__$1);
var form_meta = cljs.core.meta.call(null,form);
var target_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(targetexpr);
var prop = (function (){var or__8916__auto__ = field__$1;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return method;
}
})();
var tag = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = (function (){var and__8904__auto__ = cljs.analyzer.js_tag_QMARK_.call(null,target_tag);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.vary_meta.call(null,cljs.analyzer.normalize_js_tag.call(null,target_tag),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null),cljs.core.fnil.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Object","Object",61210754,null)], null)),prop);
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
return null;
}
}
})();
if(!(clojure.string.starts_with_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join(''),"cljs$"))){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),cljs.core.first.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"property","property",-1114278232),prop], null));
} else {
}

if(cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),target_tag)){
if(cljs.core.truth_((function (){var or__8916__auto__ = (target_tag == null);
if(or__8916__auto__){
return or__8916__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"any","any",-948528346,null),null], null), null).call(null,target_tag);
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

var vec__29633_29638 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.identity).call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)));
var pre_SINGLEQUOTE__29639 = cljs.core.nth.call(null,vec__29633_29638,(0),null);
var pre_29640 = cljs.core.nth.call(null,vec__29633_29638,(1),null);
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.analyzer.has_extern_QMARK_.call(null,pre_SINGLEQUOTE__29639);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not.call(null,cljs.analyzer.has_extern_QMARK_.call(null,pre_29640));
} else {
return and__8904__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.symbol.call(null,"js",clojure.string.join.call(null,".",(function (){var G__29636 = pre_SINGLEQUOTE__29639;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),cljs.core.last.call(null,pre_SINGLEQUOTE__29639))){
return cljs.core.butlast.call(null,G__29636);
} else {
return G__29636;
}
})())),new cljs.core.Keyword(null,"property","property",-1114278232),prop], null));
} else {
}
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_.call(null,tag))){
var pre_29641 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.call(null,pre_29641))){
} else {
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre_29641),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
}

var G__29637 = dot_action;
var G__29637__$1 = (((G__29637 instanceof cljs.core.Keyword))?G__29637.fqn:null);
switch (G__29637__$1) {
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"field","field",-1302436500),field__$1,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_.call(null,tag))?(function (){var or__8916__auto__ = cljs.analyzer.js_tag.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)),new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return tag;
}
})():tag)], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.map.call(null,((function (G__29637,G__29637__$1,v,map__29631,map__29631__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag){
return (function (p1__29630_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__29630_SHARP_);
});})(G__29637,G__29637__$1,v,map__29631,map__29631__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag))
,args);
var children = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),argexprs);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_.call(null,tag))?(function (){var or__8916__auto__ = cljs.analyzer.js_tag.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)),new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Symbol(null,"js","js",-886355190,null);
}
})():tag)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29637__$1)].join('')));

}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__29643,___$1,___$2){
var vec__29644 = p__29643;
var seq__29645 = cljs.core.seq.call(null,vec__29644);
var first__29646 = cljs.core.first.call(null,seq__29645);
var seq__29645__$1 = cljs.core.next.call(null,seq__29645);
var ___$3 = first__29646;
var first__29646__$1 = cljs.core.first.call(null,seq__29645__$1);
var seq__29645__$2 = cljs.core.next.call(null,seq__29645__$1);
var target = first__29646__$1;
var vec__29647 = seq__29645__$2;
var seq__29648 = cljs.core.seq.call(null,vec__29647);
var first__29649 = cljs.core.first.call(null,seq__29648);
var seq__29648__$1 = cljs.core.next.call(null,seq__29648);
var field = first__29649;
var member_PLUS_ = seq__29648__$1;
var form = vec__29644;
var _STAR_recur_frames_STAR_29650 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_dot.call(null,env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29650;
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta.call(null,form);
var temp__5459__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
if((temp__5459__auto__ == null)){
if(new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
return null;
}
} else {
var tag = temp__5459__auto__;
return tag;
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
var x__9870__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
} else {
var end = s.indexOf("}",idx);
var inner = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.subs.call(null,s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx){
return (function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs.core.cons.call(null,inner,cljs.analyzer.js_star_interp.call(null,env,cljs.core.subs.call(null,s,(end + (1))))));
});})(end,inner,idx))
,null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
var x__9870__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx){
return (function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs.analyzer.js_star_seg.call(null,cljs.core.subs.call(null,s,(end + (1)))));
});})(end,idx))
,null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"long","long",1469079434,null),null,new cljs.core.Symbol(null,"double","double",-1769548886,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),t)){
return true;
} else {
if(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_.call(null,t))){
return true;
} else {
if(((t instanceof cljs.core.Symbol)) && (!((cljs.core.get.call(null,cljs.analyzer.NUMERIC_SET,t) == null)))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,t)){
return (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"number","number",-1084057331,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"long","long",1469079434,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"double","double",-1769548886,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"js","js",-886355190,null)));
} else {
return null;
}
}

}
}
}
});
cljs.analyzer.array_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"floats","floats",513591110,null),null,new cljs.core.Symbol(null,"longs","longs",-1017696020,null),null,new cljs.core.Symbol(null,"objects","objects",-554722035,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null),null,new cljs.core.Symbol(null,"chars","chars",545901210,null),null,new cljs.core.Symbol(null,"ints","ints",-1761239845,null),null,new cljs.core.Symbol(null,"shorts","shorts",107738238,null),null,new cljs.core.Symbol(null,"bytes","bytes",-1478569089,null),null], null), null);
cljs.analyzer.array_type_QMARK_ = (function cljs$analyzer$array_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),t)){
return true;
} else {
if(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_.call(null,t))){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"any","any",-948528346,null),t)){
return true;
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.array_types,t)){
return true;
} else {
return cljs.core.boolean$.call(null,((cljs.analyzer.cljs_set_QMARK_.call(null,t))?(function (){var or__8916__auto__ = cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null));
if(or__8916__auto__){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__8916__auto____$1){
return or__8916__auto____$1;
} else {
return cljs.core.some.call(null,cljs.analyzer.array_types,t);
}
}
})():null));

}
}
}
}
}
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var argexprs = cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve){
return (function (p1__29651_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__29651_SHARP_);
});})(enve))
,args));
var form_meta = cljs.core.meta.call(null,form);
var segs = cljs.analyzer.js_star_seg.call(null,jsform);
var tag = cljs.analyzer.get_js_tag.call(null,form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
var validate = ((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (warning_type,valid_types_QMARK_){
var types = cljs.core.map.call(null,((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (p1__29652_SHARP_){
return cljs.analyzer.infer_tag.call(null,env,p1__29652_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.truth_(valid_types_QMARK_.call(null,types))){
return null;
} else {
return cljs.analyzer.warning.call(null,warning_type,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,types)], null));
}
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
;
var op_match_QMARK_ = ((function (enve,argexprs,form_meta,segs,tag,js_op,numeric,validate){
return (function (sym){
return cljs.core.symbol_identical_QMARK_.call(null,sym,new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta));
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric,validate))
;
if(numeric === true){
validate.call(null,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),((function (enve,argexprs,form_meta,segs,tag,js_op,numeric,validate,op_match_QMARK_){
return (function (p1__29653_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,p1__29653_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric,validate,op_match_QMARK_))
);
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"segs","segs",-1940299576),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"js-op","js-op",-1046277897),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)],[argexprs,argexprs,numeric,segs,new cljs.core.Keyword(null,"js","js",1768080579),env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR_29654 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_js_star_STAR_.call(null,env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29654;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__29655,_,___$1){
var vec__29656 = p__29655;
var seq__29657 = cljs.core.seq.call(null,vec__29656);
var first__29658 = cljs.core.first.call(null,seq__29657);
var seq__29657__$1 = cljs.core.next.call(null,seq__29657);
var ___$2 = first__29658;
var first__29658__$1 = cljs.core.first.call(null,seq__29657__$1);
var seq__29657__$2 = cljs.core.next.call(null,seq__29657__$1);
var jsform = first__29658__$1;
var args = seq__29657__$2;
var form = vec__29656;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.call(null,env,"Invalid js* form");
}

if(!((args == null))){
return cljs.analyzer.analyze_js_star.call(null,env,jsform,args,form);
} else {
var code = cljs.core.apply.call(null,cljs.core.str,cljs.analyzer.js_star_interp.call(null,env,jsform));
var tag = cljs.analyzer.get_js_tag.call(null,form);
var form_meta = cljs.core.meta.call(null,form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),numeric], null);
}
}));
/**
 * Mark a form as being analyzed. Assumes x satisfies IMeta. Useful to suppress
 *   warnings that will have been caught by a first compiler pass.
 */
cljs.analyzer.analyzed = (function cljs$analyzer$analyzed(x){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true);
});
/**
 * Returns boolean if the form has already been marked as analyzed.
 */
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(x){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x)));
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_.call(null,(function (p1__29659_SHARP_){
return ((p1__29659_SHARP_ == null)) || ((p1__29659_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__29659_SHARP_ === 'string') || (typeof p1__29659_SHARP_ === 'number') || (p1__29659_SHARP_ === true) || (p1__29659_SHARP_ === false);
}),exprs);
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([argc]),cljs.core.map.call(null,cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__29661){
var vec__29662 = p__29661;
var seq__29663 = cljs.core.seq.call(null,vec__29662);
var first__29664 = cljs.core.first.call(null,seq__29663);
var seq__29663__$1 = cljs.core.next.call(null,seq__29663);
var f = first__29664;
var args = seq__29663__$1;
var form = vec__29662;
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var fexpr = cljs.analyzer.analyze.call(null,enve,f);
var argc = cljs.core.count.call(null,args);
var fn_var_QMARK_ = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(fexpr));
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var HO_invoke_QMARK_ = (cljs.core.boolean$.call(null,cljs.analyzer._STAR_cljs_static_fns_STAR_)) && (cljs.core.not.call(null,fn_var_QMARK_)) && (!(kw_QMARK_)) && (!(cljs.analyzer.analyzed_QMARK_.call(null,f)));
var bind_f_expr_QMARK_ = (HO_invoke_QMARK_) && (!((f instanceof cljs.core.Symbol)));
var bind_args_QMARK_ = (HO_invoke_QMARK_) && (!(cljs.analyzer.all_values_QMARK_.call(null,args)));
if(cljs.core.truth_(fn_var_QMARK_)){
var map__29665_29668 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr);
var map__29665_29669__$1 = ((((!((map__29665_29668 == null)))?((((map__29665_29668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29665_29668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29665_29668):map__29665_29668);
var variadic_29670 = cljs.core.get.call(null,map__29665_29669__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var max_fixed_arity_29671 = cljs.core.get.call(null,map__29665_29669__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params_29672 = cljs.core.get.call(null,map__29665_29669__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var name_29673 = cljs.core.get.call(null,map__29665_29669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns_29674 = cljs.core.get.call(null,map__29665_29669__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var macro_29675 = cljs.core.get.call(null,map__29665_29669__$1,new cljs.core.Keyword(null,"macro","macro",-867863404));
if((cljs.core.not.call(null,(function (){var and__8904__auto__ = goog.string.endsWith([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns)].join(''),"$macros");
if(cljs.core.truth_(and__8904__auto__)){
return (cljs.core.symbol_identical_QMARK_.call(null,cur_ns,ns_29674)) && (macro_29675 === true);
} else {
return and__8904__auto__;
}
})())) && (!(cljs.analyzer.valid_arity_QMARK_.call(null,argc,method_params_29672))) && ((!(variadic_29670)) || ((variadic_29670) && ((argc < max_fixed_arity_29671))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_29673,new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}
} else {
}

if((kw_QMARK_) && (!((((1) === argc)) || (((2) === argc))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.first.call(null,form),new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}

var deprecated_QMARK__29676 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__29677 = new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
if((cljs.core.boolean$.call(null,deprecated_QMARK__29676)) && (!(cljs.core.boolean$.call(null,no_warn_QMARK__29677)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if(!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr)) == null))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if((bind_args_QMARK_) || (bind_f_expr_QMARK_)){
var arg_syms = ((bind_args_QMARK_)?cljs.core.take.call(null,argc,cljs.core.repeatedly.call(null,cljs.core.gensym)):null);
var f_sym = ((bind_f_expr_QMARK_)?cljs.core.gensym.call(null,"fexpr__"):null);
var bindings = (function (){var G__29667 = cljs.core.PersistentVector.EMPTY;
var G__29667__$1 = ((bind_args_QMARK_)?cljs.core.into.call(null,G__29667,cljs.core.interleave.call(null,arg_syms,args)):G__29667);
if(bind_f_expr_QMARK_){
return cljs.core.conj.call(null,G__29667__$1,f_sym,cljs.analyzer.analyzed.call(null,f));
} else {
return G__29667__$1;
}
})();
return cljs.analyzer.analyze.call(null,env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.analyzer.analyzed.call(null,((bind_f_expr_QMARK_)?f_sym:f));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),((bind_args_QMARK_)?arg_syms:args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
} else {
var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,HO_invoke_QMARK_,bind_f_expr_QMARK_,bind_args_QMARK_,vec__29662,seq__29663,first__29664,seq__29663__$1,f,args,form){
return (function (p1__29660_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__29660_SHARP_);
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,HO_invoke_QMARK_,bind_f_expr_QMARK_,bind_args_QMARK_,vec__29662,seq__29663,first__29664,seq__29663__$1,f,args,form))
;
var argexprs = cljs.core.map.call(null,ana_expr,args);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"f","f",-1597136552),fexpr,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.vec.call(null,argexprs),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_29678 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29678;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)], null));
} else {
var map__29679 = cljs.core.meta.call(null,sym);
var map__29679__$1 = ((((!((map__29679 == null)))?((((map__29679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29679):map__29679);
var line = cljs.core.get.call(null,map__29679__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29679__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var env__$1 = ((!((line == null)))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"line","line",212345235),line):env);
var env__$2 = ((!((column == null)))?cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"column","column",2078222095),column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$2,new cljs.core.Keyword(null,"form","form",-1624062471),sym], null);
var lcls = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env__$2);
var temp__5459__auto__ = cljs.core.get.call(null,lcls,sym);
if((temp__5459__auto__ == null)){
var sym_meta = cljs.core.meta.call(null,sym);
var sym_ns = cljs.core.namespace.call(null,sym);
var cur_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$2)))].join('');
var sym__$1 = (cljs.core.truth_((function (){var and__8904__auto__ = sym_ns;
if(cljs.core.truth_(and__8904__auto__)){
var and__8904__auto____$1 = cljs.core.not_EQ_.call(null,sym_ns,"cljs.core");
if(and__8904__auto____$1){
var and__8904__auto____$2 = goog.string.endsWith(cur_ns,"$macros");
if(cljs.core.truth_(and__8904__auto____$2)){
return (cljs.core.not.call(null,goog.string.endsWith(sym_ns,"$macros"))) && (cljs.core._EQ_.call(null,sym_ns,cljs.core.subs.call(null,cur_ns,(0),(cljs.core.count.call(null,cur_ns) - (7)))));
} else {
return and__8904__auto____$2;
}
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})())?cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_ns),"$macros"].join(''),cljs.core.name.call(null,sym)):sym);
var info = ((!(cljs.core.contains_QMARK_.call(null,sym_meta,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162))))?cljs.analyzer.resolve_existing_var.call(null,env__$2,sym__$1):cljs.analyzer.resolve_var.call(null,env__$2,sym__$1));
if(!(new cljs.core.Keyword(null,"def-var","def-var",-698214377).cljs$core$IFn$_invoke$arity$1(env__$2) === true)){
return cljs.core.merge.call(null,cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"info","info",-317069002),info),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5457__auto__)){
var const_expr = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),const_expr], null);
} else {
return null;
}
})());
} else {
var info__$1 = cljs.analyzer.resolve_var.call(null,env__$2,sym__$1);
return cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"info","info",-317069002),info__$1);
}
} else {
var lb = temp__5459__auto__;
return cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"info","info",-317069002),lb);
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
return (!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null))) || (!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null)));
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
return (!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null))) || (!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null)));
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
var res = (function (){var or__8916__auto__ = cljs.analyzer.resolve_macro_ns_alias.call(null,env,nstr,null);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.call(null,env,nstr,null);
}
})();
var nstr__$1 = ((!((res == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)].join(''):nstr);
if(("clojure.core" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
} else {
if(cljs.core.truth_(goog.string.contains(nstr__$1,"."))){
return cljs.core.find_macros_ns.call(null,cljs.core.symbol.call(null,nstr__$1));
} else {
var G__29681 = env;
var G__29681__$1 = (((G__29681 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__29681));
var G__29681__$2 = (((G__29681__$1 == null))?null:new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(G__29681__$1));
var G__29681__$3 = (((G__29681__$2 == null))?null:cljs.core.get.call(null,G__29681__$2,cljs.core.symbol.call(null,nstr__$1)));
if((G__29681__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns.call(null,G__29681__$3);
}

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783),sym) == null))) || ((cljs.analyzer.excluded_QMARK_.call(null,env,sym)) && (!(cljs.analyzer.used_QMARK_.call(null,env,sym))))){
return null;
} else {
var nstr = cljs.core.namespace.call(null,sym);
if(!((nstr == null))){
var ns = cljs.analyzer.get_expander_ns.call(null,env,nstr);
if(!((ns == null))){
return ns.findInternedVar(cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
} else {
return null;
}
} else {
if(!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym) == null))){
var qualified_symbol = cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym);
var nsym = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym__$1);
} else {
var nsym = cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym);
if((!((nsym == null))) && ((nsym instanceof cljs.core.Symbol))){
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}

}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_.call(null,sym,env);
if((!((mvar == null))) && (mvar.isMacro())){
return mvar;
} else {
return null;
}
});
var cached_var_29682 = (new cljs.core.Delay((function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null)),new cljs.core.Symbol(null,"macroexpand-check","macroexpand-check",699092091,null));
}),null));
cljs.analyzer.get_macroexpand_check_var = ((function (cached_var_29682){
return (function cljs$analyzer$get_macroexpand_check_var(){
if(!((cljs.core.find_ns_obj.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null)) == null))){
return cljs.core.deref.call(null,cached_var_29682);
} else {
return null;
}
});})(cached_var_29682))
;
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first.call(null,form);
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.specials,op)){
return form;
} else {
var temp__5459__auto__ = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander.call(null,op,env):null);
if((temp__5459__auto__ == null)){
if((op instanceof cljs.core.Symbol)){
var opname = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');
if(("." === opname.charAt((0)))){
var vec__29683 = cljs.core.next.call(null,form);
var seq__29684 = cljs.core.seq.call(null,vec__29683);
var first__29685 = cljs.core.first.call(null,seq__29684);
var seq__29684__$1 = cljs.core.next.call(null,seq__29684);
var target = first__29685;
var args = seq__29684__$1;
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.DOT_SYM,target,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(1))),args),cljs.core.meta.call(null,form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.NEW_SYM,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(0),(cljs.core.count.call(null,opname) - (1)))),cljs.core.next.call(null,form)),cljs.core.meta.call(null,form));
} else {
return form;

}
}
} else {
return form;
}
} else {
var mac_var = temp__5459__auto__;
var mchk = cljs.analyzer.get_macroexpand_check_var.call(null);
var _ = ((!((mchk == null)))?mchk.call(null,mac_var,cljs.core.next.call(null,form)):null);
var form_SINGLEQUOTE_ = cljs.core.apply.call(null,cljs.core.deref.call(null,mac_var),form,env,cljs.core.rest.call(null,form));
if(cljs.analyzer.cljs_seq_QMARK_.call(null,form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first.call(null,form_SINGLEQUOTE_);
var sym = cljs.core.first.call(null,form);
if(cljs.core.symbol_identical_QMARK_.call(null,sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = ((!((cljs.core.namespace.call(null,sym) == null)))?sym:cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),sym__$1], null);
var numeric = (function (){var mac_var_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,mac_var.sym));
var mac_var_name = cljs.core.symbol.call(null,cljs.core.name.call(null,mac_var.sym));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),mac_var_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),mac_var_name,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword("cljs.analyzer","numeric","cljs.analyzer/numeric",1415704188)], null));
})();
var js_op__$1 = ((numeric === true)?cljs.core.assoc.call(null,js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),true):js_op);
return cljs.core.vary_meta.call(null,form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
var val__28791__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__28791__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_.call(null,env,form);
}catch (e29686){var err__28827__auto__ = e29686;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__28827__auto__)){
throw err__28827__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__28827__auto__.message,err__28827__auto__);
}
}}finally {if((val__28791__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.specials,op)){
return cljs.analyzer.parse.call(null,op,env,form,name,opts);
} else {
return cljs.analyzer.parse_invoke.call(null,env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_.call(null,op,env,form,name,opts);
}catch (e29687){var err__28827__auto__ = e29687;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__28827__auto__)){
throw err__28827__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__28827__auto__.message,err__28827__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
var G__29689 = arguments.length;
switch (G__29689) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.call(null,env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
return cljs.analyzer.analyze_list.call(null,env,form);
} else {
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var line__$1 = (((line == null))?new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env):line);
var col = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var col__$1 = (((col == null))?new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env):col);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"column","column",2078222095),col__$1);
var op = cljs.core.first.call(null,form);
if((op == null)){
throw cljs.analyzer.error.call(null,env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1.call(null,env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap.call(null,op,env__$1,form,name,opts);
} else {
return cljs.analyzer.analyze.call(null,env__$1,mform,name,opts);
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;

cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ks = (function (){var _STAR_recur_frames_STAR_29693 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_29693,expr_env){
return (function (p1__29691_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__29691_SHARP_);
});})(_STAR_recur_frames_STAR_29693,expr_env))
,cljs.core.keys.call(null,form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29693;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_29694 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_29694,expr_env,ks){
return (function (p1__29692_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__29692_SHARP_);
});})(_STAR_recur_frames_STAR_29694,expr_env,ks))
,cljs.core.vals.call(null,form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29694;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),ks,new cljs.core.Keyword(null,"vals","vals",768058733),vs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.interleave.call(null,ks,vs)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IMap","cljs.core/IMap",1407777598,null)], null));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_29696 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_29696,expr_env){
return (function (p1__29695_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__29695_SHARP_);
});})(_STAR_recur_frames_STAR_29696,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29696;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null)], null));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_29698 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_29698,expr_env){
return (function (p1__29697_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__29697_SHARP_);
});})(_STAR_recur_frames_STAR_29698,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29698;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IVector","cljs.core/IVector",1711112835,null)], null));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_29700 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_29700,expr_env){
return (function (p1__29699_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__29699_SHARP_);
});})(_STAR_recur_frames_STAR_29700,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29700;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","ISet","cljs.core/ISet",2003412810,null)], null));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = ((cljs.core.map_QMARK_.call(null,val))?cljs.core.zipmap.call(null,cljs.core.keys.call(null,val),(function (){var _STAR_recur_frames_STAR_29703 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_29703,val,expr_env){
return (function (p1__29701_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__29701_SHARP_);
});})(_STAR_recur_frames_STAR_29703,val,expr_env))
,cljs.core.vals.call(null,val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29703;
}})()):(function (){var _STAR_recur_frames_STAR_29704 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_29704,val,expr_env){
return (function (p1__29702_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__29702_SHARP_);
});})(_STAR_recur_frames_STAR_29704,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29704;
}})());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-value","js-value",-758336661),new cljs.core.Keyword(null,"js-type","js-type",539386702),((cljs.core.map_QMARK_.call(null,val))?new cljs.core.Keyword(null,"object","object",1474613949):new cljs.core.Keyword(null,"array","array",-2080713842)),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core.map_QMARK_.call(null,val))?new cljs.core.Symbol(null,"object","object",-1179821820,null):new cljs.core.Symbol(null,"array","array",-440182315,null))], null);
});
cljs.analyzer.analyze_record = (function cljs$analyzer$analyze_record(env,x){
var items = (function (){var _STAR_recur_frames_STAR_29709 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_29709;
}})();
var vec__29706 = cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,x)),/\//));
var ns = cljs.core.nth.call(null,vec__29706,(0),null);
var name = cljs.core.nth.call(null,vec__29706,(1),null);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"record-value","record-value",-367500392),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"source","source",-433931539));
});
cljs.analyzer.elide_analyzer_meta = (function cljs$analyzer$elide_analyzer_meta(m){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_analyzer_meta.call(null,cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,form)));
if(!((cljs.core.seq.call(null,m) == null))){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in.call(null,expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"context","context",-830191113)], null),new cljs.core.Keyword(null,"expr","expr",745722291));
var meta_expr = cljs.analyzer.analyze_map.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"meta","meta",1499536964),meta_expr,new cljs.core.Keyword(null,"expr","expr",745722291),expr__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_expr,expr__$1], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,ast,_){
if((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ast) == null)){
var temp__5459__auto__ = cljs.analyzer.infer_tag.call(null,env,ast);
if((temp__5459__auto__ == null)){
return ast;
} else {
var tag = temp__5459__auto__;
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag);
}
} else {
return ast;
}
});
cljs.analyzer.repl_self_require_QMARK_ = (function cljs$analyzer$repl_self_require_QMARK_(env,deps){
var and__8904__auto__ = new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__8904__auto__;
}
});
cljs.analyzer.invoke_arg_type_validators = (function (){var aget_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (p1__29710_SHARP_){
return (cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__29710_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.rest.call(null,p1__29710_SHARP_)));
}),new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
var aset_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),((function (aget_validator){
return (function (p1__29711_SHARP_){
return (cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__29711_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__29711_SHARP_))));
});})(aget_validator))
,new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),aget_validator,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),aset_validator,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),aget_validator,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),aset_validator], null);
})();
cljs.analyzer.check_invoke_arg_types = (function cljs$analyzer$check_invoke_arg_types(env,p__29712,opts){
var map__29713 = p__29712;
var map__29713__$1 = ((((!((map__29713 == null)))?((((map__29713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29713):map__29713);
var ast = map__29713__$1;
var op = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if((!(cljs.analyzer.analyzed_QMARK_.call(null,ast))) && (cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),op))){
var temp__5461__auto___29720 = cljs.core.find.call(null,cljs.analyzer.invoke_arg_type_validators,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(ast))));
if((temp__5461__auto___29720 == null)){
} else {
var vec__29715_29721 = temp__5461__auto___29720;
var name_29722 = cljs.core.nth.call(null,vec__29715_29721,(0),null);
var map__29718_29723 = cljs.core.nth.call(null,vec__29715_29721,(1),null);
var map__29718_29724__$1 = ((((!((map__29718_29723 == null)))?((((map__29718_29723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29718_29723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29718_29723):map__29718_29723);
var valid_QMARK__29725 = cljs.core.get.call(null,map__29718_29724__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var warning_type_29726 = cljs.core.get.call(null,map__29718_29724__$1,new cljs.core.Keyword(null,"warning-type","warning-type",1711103595));
var types_29727 = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(valid_QMARK__29725.call(null,types_29727))){
} else {
cljs.analyzer.warning.call(null,warning_type_29726,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_29722,new cljs.core.Keyword(null,"types","types",590030639),types_29727], null));
}
}
} else {
}

return cljs.analyzer.analyzed.call(null,ast);
});
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol.call(null,env,form);
} else {
if((cljs.analyzer.cljs_seq_QMARK_.call(null,form)) && (!((cljs.core.seq.call(null,form) == null)))){
return cljs.analyzer.analyze_seq.call(null,env,form,name,opts);
} else {
if(cljs.core.record_QMARK_.call(null,form)){
return cljs.analyzer.analyze_record.call(null,env,form);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,form)){
return cljs.analyzer.analyze_map.call(null,env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,form)){
return cljs.analyzer.analyze_vector.call(null,env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,form)){
return cljs.analyzer.analyze_set.call(null,env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword.call(null,env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value.call(null,env,form);
} else {
if(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,form)){
return cljs.analyzer.analyze_list.call(null,env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:null)))));
var G__29728 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.call(null,G__29728,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag);
} else {
return G__29728;
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
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type,cljs.analyzer.check_invoke_arg_types], null):passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq.call(null,form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form.call(null,env,form__$1,name,opts);
return cljs.core.reduce.call(null,((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return pass.call(null,env,ast__$1,opts);
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
cljs.analyzer.warnings_for = (function cljs$analyzer$warnings_for(form){
if(cljs.analyzer.analyzed_QMARK_.call(null,form)){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
} else {
return cljs.analyzer._STAR_cljs_warnings_STAR_;
}
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 *   (one of :statement, :expr, :return), :ns (a symbol naming the
 *   compilation ns)}, and form, returns an expression object (a map
 *   containing at least :form, :op and :env keys). If expr has any (immediately)
 *   nested exprs, must have :children [exprs...] entry. This will
 *   facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(var_args){
var G__29730 = arguments.length;
switch (G__29730) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.call(null,env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.call(null,env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__28791__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__28791__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{try{var _STAR_cljs_warnings_STAR_29732 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_alias_map_STAR_29733 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.analyzer.warnings_for.call(null,form);

cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__8916__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_29733;

cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_29732;
}}catch (e29731){var err__28827__auto__ = e29731;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__28827__auto__)){
throw err__28827__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__28827__auto__.message,err__28827__auto__);
}
}}finally {if((val__28791__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;

/**
 * Given a compiler state and a map from fully qualified symbols to constant
 *   EDN values, update the compiler state marking these vars as const to support
 *   direct substitution of these vars in source.
 */
cljs.analyzer.add_consts = (function cljs$analyzer$add_consts(compiler_state,constants_map){
return cljs.core.reduce_kv.call(null,(function (compiler_state__$1,sym,value){
var ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
return cljs.core.update_in.call(null,compiler_state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),(function (){var _STAR_passes_STAR_29735 = cljs.analyzer._STAR_passes_STAR_;
cljs.analyzer._STAR_passes_STAR_ = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.empty_env.call(null),value);
}finally {cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_29735;
}})()], null));
}),compiler_state,constants_map);
});
cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(sym){
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core.not.call(null,cljs.core.namespace.call(null,sym));
if(and__8904__auto__){
return cljs.analyzer.dotted_symbol_QMARK_.call(null,sym);
} else {
return and__8904__auto__;
}
})())){
return sym;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),sym));
}
});
var registry_ref_29736 = (new cljs.core.Delay((function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"registry-ref","registry-ref",1975823941,null));
}),null));
var speced_vars_29737 = (new cljs.core.Delay(((function (registry_ref_29736){
return (function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"-speced-vars","-speced-vars",1758723085,null));
});})(registry_ref_29736))
,null));
cljs.analyzer.get_spec_vars = ((function (registry_ref_29736,speced_vars_29737){
return (function cljs$analyzer$get_spec_vars(){
if(!((cljs.core.find_ns_obj.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)) == null))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414),cljs.core.deref.call(null,registry_ref_29736),new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988),cljs.core.deref.call(null,speced_vars_29737)], null);
} else {
return null;
}
});})(registry_ref_29736,speced_vars_29737))
;
/**
 * Dumps registered speced vars for a given namespace into the compiler
 *   environment.
 */
cljs.analyzer.dump_specs = (function cljs$analyzer$dump_specs(ns){
var spec_vars = cljs.analyzer.get_spec_vars.call(null);
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cljs.core.merge,(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414).cljs$core$IFn$_invoke$arity$1(spec_vars);
if(cljs.core.truth_(temp__5457__auto__)){
var registry_ref = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,((function (registry_ref,temp__5457__auto__,spec_vars,ns_str){
return (function (p__29739){
var vec__29740 = p__29739;
var k = cljs.core.nth.call(null,vec__29740,(0),null);
var _ = cljs.core.nth.call(null,vec__29740,(1),null);
return cljs.core._EQ_.call(null,ns_str,cljs.core.namespace.call(null,k));
});})(registry_ref,temp__5457__auto__,spec_vars,ns_str))
),cljs.core.deref.call(null,cljs.core.deref.call(null,registry_ref)))], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988).cljs$core$IFn$_invoke$arity$1(spec_vars);
if(cljs.core.truth_(temp__5457__auto__)){
var speced_vars = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","speced-vars","cljs.spec/speced-vars",1010010387),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,((function (speced_vars,temp__5457__auto__,spec_vars,ns_str){
return (function (p1__29738_SHARP_){
return cljs.core._EQ_.call(null,ns_str,cljs.core.namespace.call(null,p1__29738_SHARP_));
});})(speced_vars,temp__5457__auto__,spec_vars,ns_str))
),cljs.core.deref.call(null,cljs.core.deref.call(null,speced_vars)))], null);
} else {
return null;
}
})());
});
/**
 * Registers speced vars found in a namespace analysis cache.
 */
cljs.analyzer.register_specs = (function cljs$analyzer$register_specs(cached_ns){
var map__29743 = cljs.analyzer.get_spec_vars.call(null);
var map__29743__$1 = ((((!((map__29743 == null)))?((((map__29743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29743):map__29743);
var registry_ref = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414));
var speced_vars = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988));
var temp__5457__auto___29745 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915).cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5457__auto___29745){
var registry_29746 = temp__5457__auto___29745;
if(cljs.core.truth_(registry_ref)){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,registry_ref),cljs.core.merge,registry_29746);
} else {
}
} else {
}

var temp__5457__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","speced-vars","cljs.spec/speced-vars",1010010387).cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5457__auto__){
var vars = temp__5457__auto__;
if(cljs.core.truth_(speced_vars)){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,speced_vars),cljs.core.into,vars);
} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.analyze_form_seq = (function cljs$analyzer$analyze_form_seq(var_args){
var G__29748 = arguments.length;
switch (G__29748) {
case 1:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1 = (function (forms){
return cljs.analyzer.analyze_form_seq.call(null,forms,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2 = (function (forms,opts){
var env = cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"build-options","build-options",1183685779),opts);
var _STAR_file_defs_STAR_29749 = cljs.analyzer._STAR_file_defs_STAR_;
var _STAR_cljs_ns_STAR_29750 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR_29751 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_alias_map_STAR_29752 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.analyzer._STAR_file_defs_STAR_ = null;

cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);

cljs.analyzer._STAR_cljs_file_STAR_ = null;

cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__8916__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{var ns = null;
var forms__$1 = forms;
while(true){
if(!((forms__$1 == null))){
var form = cljs.core.first.call(null,forms__$1);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ast = cljs.analyzer.analyze.call(null,env__$1,form,null,opts);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"ns","ns",441598760))){
var G__29754 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
var G__29755 = cljs.core.next.call(null,forms__$1);
ns = G__29754;
forms__$1 = G__29755;
continue;
} else {
var G__29756 = ns;
var G__29757 = cljs.core.next.call(null,forms__$1);
ns = G__29756;
forms__$1 = G__29757;
continue;
}
} else {
return ns;
}
break;
}
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_29752;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_29751;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_29750;

cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR_29749;
}});

cljs.analyzer.analyze_form_seq.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=analyzer.js.map
