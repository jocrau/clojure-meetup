// Compiled by ClojureScript 1.10.145 {}
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
var map__25702 = s;
var map__25702__$1 = ((((!((map__25702 == null)))?(((((map__25702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25702):map__25702);
var name = cljs.core.get.call(null,map__25702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__25702__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__25705 = info;
var map__25706 = G__25705;
var map__25706__$1 = ((((!((map__25706 == null)))?(((((map__25706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25706):map__25706);
var shadow = cljs.core.get.call(null,map__25706__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__25705__$1 = G__25705;
while(true){
var d__$2 = d__$1;
var map__25708 = G__25705__$1;
var map__25708__$1 = ((((!((map__25708 == null)))?(((((map__25708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25708):map__25708);
var shadow__$1 = cljs.core.get.call(null,map__25708__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__25710 = (d__$2 + (1));
var G__25711 = shadow__$1;
d__$1 = G__25710;
G__25705__$1 = G__25711;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__25712){
var map__25713 = p__25712;
var map__25713__$1 = ((((!((map__25713 == null)))?(((((map__25713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25713):map__25713);
var name_var = map__25713__$1;
var name = cljs.core.get.call(null,map__25713__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__25713__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__25715 = info;
var map__25715__$1 = ((((!((map__25715 == null)))?(((((map__25715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25715):map__25715);
var ns = cljs.core.get.call(null,map__25715__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__25715__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__25718 = arguments.length;
switch (G__25718) {
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
if(((field === true) || ((depth === (0))))){
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
var G__25720 = cp;
switch (G__25720) {
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
if(((((31) < cp)) && ((cp < (127))))){
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
var seq__25722_25726 = cljs.core.seq.call(null,s);
var chunk__25723_25727 = null;
var count__25724_25728 = (0);
var i__25725_25729 = (0);
while(true){
if((i__25725_25729 < count__25724_25728)){
var c_25730 = cljs.core._nth.call(null,chunk__25723_25727,i__25725_25729);
sb.append(cljs.compiler.escape_char.call(null,c_25730));


var G__25731 = seq__25722_25726;
var G__25732 = chunk__25723_25727;
var G__25733 = count__25724_25728;
var G__25734 = (i__25725_25729 + (1));
seq__25722_25726 = G__25731;
chunk__25723_25727 = G__25732;
count__25724_25728 = G__25733;
i__25725_25729 = G__25734;
continue;
} else {
var temp__5457__auto___25735 = cljs.core.seq.call(null,seq__25722_25726);
if(temp__5457__auto___25735){
var seq__25722_25736__$1 = temp__5457__auto___25735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25722_25736__$1)){
var c__4319__auto___25737 = cljs.core.chunk_first.call(null,seq__25722_25736__$1);
var G__25738 = cljs.core.chunk_rest.call(null,seq__25722_25736__$1);
var G__25739 = c__4319__auto___25737;
var G__25740 = cljs.core.count.call(null,c__4319__auto___25737);
var G__25741 = (0);
seq__25722_25726 = G__25738;
chunk__25723_25727 = G__25739;
count__25724_25728 = G__25740;
i__25725_25729 = G__25741;
continue;
} else {
var c_25742 = cljs.core.first.call(null,seq__25722_25736__$1);
sb.append(cljs.compiler.escape_char.call(null,c_25742));


var G__25743 = cljs.core.next.call(null,seq__25722_25736__$1);
var G__25744 = null;
var G__25745 = (0);
var G__25746 = (0);
seq__25722_25726 = G__25743;
chunk__25723_25727 = G__25744;
count__25724_25728 = G__25745;
i__25725_25729 = G__25746;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__22567__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__22567__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__25747_25752 = ast;
var map__25747_25753__$1 = ((((!((map__25747_25752 == null)))?(((((map__25747_25752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25747_25752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25747_25752):map__25747_25752);
var env_25754 = cljs.core.get.call(null,map__25747_25753__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_25754))){
var map__25749_25755 = env_25754;
var map__25749_25756__$1 = ((((!((map__25749_25755 == null)))?(((((map__25749_25755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25749_25755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25749_25755):map__25749_25755);
var line_25757 = cljs.core.get.call(null,map__25749_25756__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25758 = cljs.core.get.call(null,map__25749_25756__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__25749_25755,map__25749_25756__$1,line_25757,column_25758,map__25747_25752,map__25747_25753__$1,env_25754,val__22567__auto__){
return (function (m){
var minfo = (function (){var G__25751 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__25751,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__25751;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_25757 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__25749_25755,map__25749_25756__$1,line_25757,column_25758,map__25747_25752,map__25747_25753__$1,env_25754,val__22567__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_25758)?(column_25758 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__25749_25755,map__25749_25756__$1,line_25757,column_25758,map__25747_25752,map__25747_25753__$1,env_25754,val__22567__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__25749_25755,map__25749_25756__$1,line_25757,column_25758,map__25747_25752,map__25747_25753__$1,env_25754,val__22567__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__25749_25755,map__25749_25756__$1,line_25757,column_25758,map__25747_25752,map__25747_25753__$1,env_25754,val__22567__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__25749_25755,map__25749_25756__$1,line_25757,column_25758,map__25747_25752,map__25747_25753__$1,env_25754,val__22567__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__22567__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4500__auto__ = [];
var len__4497__auto___25765 = arguments.length;
var i__4498__auto___25766 = (0);
while(true){
if((i__4498__auto___25766 < len__4497__auto___25765)){
args__4500__auto__.push((arguments[i__4498__auto___25766]));

var G__25767 = (i__4498__auto___25766 + (1));
i__4498__auto___25766 = G__25767;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__25761_25768 = cljs.core.seq.call(null,xs);
var chunk__25762_25769 = null;
var count__25763_25770 = (0);
var i__25764_25771 = (0);
while(true){
if((i__25764_25771 < count__25763_25770)){
var x_25772 = cljs.core._nth.call(null,chunk__25762_25769,i__25764_25771);
if((x_25772 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_25772)){
cljs.compiler.emit.call(null,x_25772);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_25772)){
cljs.core.apply.call(null,cljs.compiler.emits,x_25772);
} else {
if(goog.isFunction(x_25772)){
x_25772.call(null);
} else {
var s_25773 = cljs.core.print_str.call(null,x_25772);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__25761_25768,chunk__25762_25769,count__25763_25770,i__25764_25771,s_25773,x_25772){
return (function (p1__25759_SHARP_){
return (p1__25759_SHARP_ + cljs.core.count.call(null,s_25773));
});})(seq__25761_25768,chunk__25762_25769,count__25763_25770,i__25764_25771,s_25773,x_25772))
);
}

cljs.core.print.call(null,s_25773);

}
}
}
}


var G__25774 = seq__25761_25768;
var G__25775 = chunk__25762_25769;
var G__25776 = count__25763_25770;
var G__25777 = (i__25764_25771 + (1));
seq__25761_25768 = G__25774;
chunk__25762_25769 = G__25775;
count__25763_25770 = G__25776;
i__25764_25771 = G__25777;
continue;
} else {
var temp__5457__auto___25778 = cljs.core.seq.call(null,seq__25761_25768);
if(temp__5457__auto___25778){
var seq__25761_25779__$1 = temp__5457__auto___25778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25761_25779__$1)){
var c__4319__auto___25780 = cljs.core.chunk_first.call(null,seq__25761_25779__$1);
var G__25781 = cljs.core.chunk_rest.call(null,seq__25761_25779__$1);
var G__25782 = c__4319__auto___25780;
var G__25783 = cljs.core.count.call(null,c__4319__auto___25780);
var G__25784 = (0);
seq__25761_25768 = G__25781;
chunk__25762_25769 = G__25782;
count__25763_25770 = G__25783;
i__25764_25771 = G__25784;
continue;
} else {
var x_25785 = cljs.core.first.call(null,seq__25761_25779__$1);
if((x_25785 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_25785)){
cljs.compiler.emit.call(null,x_25785);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_25785)){
cljs.core.apply.call(null,cljs.compiler.emits,x_25785);
} else {
if(goog.isFunction(x_25785)){
x_25785.call(null);
} else {
var s_25786 = cljs.core.print_str.call(null,x_25785);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__25761_25768,chunk__25762_25769,count__25763_25770,i__25764_25771,s_25786,x_25785,seq__25761_25779__$1,temp__5457__auto___25778){
return (function (p1__25759_SHARP_){
return (p1__25759_SHARP_ + cljs.core.count.call(null,s_25786));
});})(seq__25761_25768,chunk__25762_25769,count__25763_25770,i__25764_25771,s_25786,x_25785,seq__25761_25779__$1,temp__5457__auto___25778))
);
}

cljs.core.print.call(null,s_25786);

}
}
}
}


var G__25787 = cljs.core.next.call(null,seq__25761_25779__$1);
var G__25788 = null;
var G__25789 = (0);
var G__25790 = (0);
seq__25761_25768 = G__25787;
chunk__25762_25769 = G__25788;
count__25763_25770 = G__25789;
i__25764_25771 = G__25790;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq25760){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25760));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4500__auto__ = [];
var len__4497__auto___25796 = arguments.length;
var i__4498__auto___25797 = (0);
while(true){
if((i__4498__auto___25797 < len__4497__auto___25796)){
args__4500__auto__.push((arguments[i__4498__auto___25797]));

var G__25798 = (i__4498__auto___25797 + (1));
i__4498__auto___25797 = G__25798;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_25792_25799 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_25792_25799;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__25793){
var map__25794 = p__25793;
var map__25794__$1 = ((((!((map__25794 == null)))?(((((map__25794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25794):map__25794);
var m = map__25794__$1;
var gen_line = cljs.core.get.call(null,map__25794__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq25791){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25791));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_25800_25802 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_25801_25803 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_25800_25802,_STAR_print_fn_STAR_25801_25803,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_25800_25802,_STAR_print_fn_STAR_25801_25803,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25801_25803;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25800_25802;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
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
var vec__25804 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__25804,(0),null);
var flags = cljs.core.nth.call(null,vec__25804,(1),null);
var pattern = cljs.core.nth.call(null,vec__25804,(2),null);
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
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
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
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__25808){
var map__25809 = p__25808;
var map__25809__$1 = ((((!((map__25809 == null)))?(((((map__25809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25809):map__25809);
var ast = map__25809__$1;
var info = cljs.core.get.call(null,map__25809__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__25809__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__25809__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__25811 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__25811__$1 = ((((!((map__25811 == null)))?(((((map__25811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25811):map__25811);
var cenv = map__25811__$1;
var options = cljs.core.get.call(null,map__25811__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3922__auto__ = js_module_name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var reserved = (function (){var G__25813 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__25813,cljs.analyzer.es5_allowed);
} else {
return G__25813;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__25814 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__25814,reserved);
} else {
return G__25814;
}
})();
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__25815_25816 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__25815_25817__$1 = (((G__25815_25816 instanceof cljs.core.Keyword))?G__25815_25816.fqn:null);
switch (G__25815_25817__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__25819){
var map__25820 = p__25819;
var map__25820__$1 = ((((!((map__25820 == null)))?(((((map__25820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25820):map__25820);
var arg = map__25820__$1;
var env = cljs.core.get.call(null,map__25820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__25820__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__25820__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__25820__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__25822 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__25822__$1 = ((((!((map__25822 == null)))?(((((map__25822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25822):map__25822);
var name = cljs.core.get.call(null,map__25822__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__25824){
var map__25825 = p__25824;
var map__25825__$1 = ((((!((map__25825 == null)))?(((((map__25825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25825):map__25825);
var expr = cljs.core.get.call(null,map__25825__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__25825__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__25825__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__25827_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__25827_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__25828){
var map__25829 = p__25828;
var map__25829__$1 = ((((!((map__25829 == null)))?(((((map__25829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25829):map__25829);
var env = cljs.core.get.call(null,map__25829__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__25829__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__25829__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__25831){
var map__25832 = p__25831;
var map__25832__$1 = ((((!((map__25832 == null)))?(((((map__25832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25832):map__25832);
var items = cljs.core.get.call(null,map__25832__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__25832__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__25834){
var map__25835 = p__25834;
var map__25835__$1 = ((((!((map__25835 == null)))?(((((map__25835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25835):map__25835);
var items = cljs.core.get.call(null,map__25835__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__25835__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_25837 = cljs.core.count.call(null,items);
if((cnt_25837 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_25837,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__25838_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__25838_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__25839){
var map__25840 = p__25839;
var map__25840__$1 = ((((!((map__25840 == null)))?(((((map__25840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25840):map__25840);
var items = cljs.core.get.call(null,map__25840__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__25840__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__25842){
var map__25843 = p__25842;
var map__25843__$1 = ((((!((map__25843 == null)))?(((((map__25843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25843):map__25843);
var items = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___25861 = cljs.core.seq.call(null,items);
if(temp__5457__auto___25861){
var items_25862__$1 = temp__5457__auto___25861;
var vec__25845_25863 = items_25862__$1;
var seq__25846_25864 = cljs.core.seq.call(null,vec__25845_25863);
var first__25847_25865 = cljs.core.first.call(null,seq__25846_25864);
var seq__25846_25866__$1 = cljs.core.next.call(null,seq__25846_25864);
var vec__25848_25867 = first__25847_25865;
var k_25868 = cljs.core.nth.call(null,vec__25848_25867,(0),null);
var v_25869 = cljs.core.nth.call(null,vec__25848_25867,(1),null);
var r_25870 = seq__25846_25866__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_25868),"\": ",v_25869);

var seq__25851_25871 = cljs.core.seq.call(null,r_25870);
var chunk__25852_25872 = null;
var count__25853_25873 = (0);
var i__25854_25874 = (0);
while(true){
if((i__25854_25874 < count__25853_25873)){
var vec__25855_25875 = cljs.core._nth.call(null,chunk__25852_25872,i__25854_25874);
var k_25876__$1 = cljs.core.nth.call(null,vec__25855_25875,(0),null);
var v_25877__$1 = cljs.core.nth.call(null,vec__25855_25875,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_25876__$1),"\": ",v_25877__$1);


var G__25878 = seq__25851_25871;
var G__25879 = chunk__25852_25872;
var G__25880 = count__25853_25873;
var G__25881 = (i__25854_25874 + (1));
seq__25851_25871 = G__25878;
chunk__25852_25872 = G__25879;
count__25853_25873 = G__25880;
i__25854_25874 = G__25881;
continue;
} else {
var temp__5457__auto___25882__$1 = cljs.core.seq.call(null,seq__25851_25871);
if(temp__5457__auto___25882__$1){
var seq__25851_25883__$1 = temp__5457__auto___25882__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25851_25883__$1)){
var c__4319__auto___25884 = cljs.core.chunk_first.call(null,seq__25851_25883__$1);
var G__25885 = cljs.core.chunk_rest.call(null,seq__25851_25883__$1);
var G__25886 = c__4319__auto___25884;
var G__25887 = cljs.core.count.call(null,c__4319__auto___25884);
var G__25888 = (0);
seq__25851_25871 = G__25885;
chunk__25852_25872 = G__25886;
count__25853_25873 = G__25887;
i__25854_25874 = G__25888;
continue;
} else {
var vec__25858_25889 = cljs.core.first.call(null,seq__25851_25883__$1);
var k_25890__$1 = cljs.core.nth.call(null,vec__25858_25889,(0),null);
var v_25891__$1 = cljs.core.nth.call(null,vec__25858_25889,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_25890__$1),"\": ",v_25891__$1);


var G__25892 = cljs.core.next.call(null,seq__25851_25883__$1);
var G__25893 = null;
var G__25894 = (0);
var G__25895 = (0);
seq__25851_25871 = G__25892;
chunk__25852_25872 = G__25893;
count__25853_25873 = G__25894;
i__25854_25874 = G__25895;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__25896){
var map__25897 = p__25896;
var map__25897__$1 = ((((!((map__25897 == null)))?(((((map__25897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25897):map__25897);
var items = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__25899){
var map__25900 = p__25899;
var map__25900__$1 = ((((!((map__25900 == null)))?(((((map__25900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25900):map__25900);
var form = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__25902){
var map__25903 = p__25902;
var map__25903__$1 = ((((!((map__25903 == null)))?(((((map__25903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25903):map__25903);
var op = cljs.core.get.call(null,map__25903__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__25903__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__25903__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__3911__auto__){
var and__3911__auto____$1 = form;
if(cljs.core.truth_(and__3911__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__25905){
var map__25906 = p__25905;
var map__25906__$1 = ((((!((map__25906 == null)))?(((((map__25906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25906):map__25906);
var op = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (((form === false) || ((form == null)))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__25908){
var map__25909 = p__25908;
var map__25909__$1 = ((((!((map__25909 == null)))?(((((map__25909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25909):map__25909);
var test = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3922__auto__ = unchecked;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__25911){
var map__25912 = p__25911;
var map__25912__$1 = ((((!((map__25912 == null)))?(((((map__25912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25912):map__25912);
var v = cljs.core.get.call(null,map__25912__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__25912__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__25912__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__25912__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__25912__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__25914_25932 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__25915_25933 = null;
var count__25916_25934 = (0);
var i__25917_25935 = (0);
while(true){
if((i__25917_25935 < count__25916_25934)){
var vec__25918_25936 = cljs.core._nth.call(null,chunk__25915_25933,i__25917_25935);
var ts_25937 = cljs.core.nth.call(null,vec__25918_25936,(0),null);
var then_25938 = cljs.core.nth.call(null,vec__25918_25936,(1),null);
var seq__25921_25939 = cljs.core.seq.call(null,ts_25937);
var chunk__25922_25940 = null;
var count__25923_25941 = (0);
var i__25924_25942 = (0);
while(true){
if((i__25924_25942 < count__25923_25941)){
var test_25943 = cljs.core._nth.call(null,chunk__25922_25940,i__25924_25942);
cljs.compiler.emitln.call(null,"case ",test_25943,":");


var G__25944 = seq__25921_25939;
var G__25945 = chunk__25922_25940;
var G__25946 = count__25923_25941;
var G__25947 = (i__25924_25942 + (1));
seq__25921_25939 = G__25944;
chunk__25922_25940 = G__25945;
count__25923_25941 = G__25946;
i__25924_25942 = G__25947;
continue;
} else {
var temp__5457__auto___25948 = cljs.core.seq.call(null,seq__25921_25939);
if(temp__5457__auto___25948){
var seq__25921_25949__$1 = temp__5457__auto___25948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25921_25949__$1)){
var c__4319__auto___25950 = cljs.core.chunk_first.call(null,seq__25921_25949__$1);
var G__25951 = cljs.core.chunk_rest.call(null,seq__25921_25949__$1);
var G__25952 = c__4319__auto___25950;
var G__25953 = cljs.core.count.call(null,c__4319__auto___25950);
var G__25954 = (0);
seq__25921_25939 = G__25951;
chunk__25922_25940 = G__25952;
count__25923_25941 = G__25953;
i__25924_25942 = G__25954;
continue;
} else {
var test_25955 = cljs.core.first.call(null,seq__25921_25949__$1);
cljs.compiler.emitln.call(null,"case ",test_25955,":");


var G__25956 = cljs.core.next.call(null,seq__25921_25949__$1);
var G__25957 = null;
var G__25958 = (0);
var G__25959 = (0);
seq__25921_25939 = G__25956;
chunk__25922_25940 = G__25957;
count__25923_25941 = G__25958;
i__25924_25942 = G__25959;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_25938);
} else {
cljs.compiler.emitln.call(null,then_25938);
}

cljs.compiler.emitln.call(null,"break;");


var G__25960 = seq__25914_25932;
var G__25961 = chunk__25915_25933;
var G__25962 = count__25916_25934;
var G__25963 = (i__25917_25935 + (1));
seq__25914_25932 = G__25960;
chunk__25915_25933 = G__25961;
count__25916_25934 = G__25962;
i__25917_25935 = G__25963;
continue;
} else {
var temp__5457__auto___25964 = cljs.core.seq.call(null,seq__25914_25932);
if(temp__5457__auto___25964){
var seq__25914_25965__$1 = temp__5457__auto___25964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25914_25965__$1)){
var c__4319__auto___25966 = cljs.core.chunk_first.call(null,seq__25914_25965__$1);
var G__25967 = cljs.core.chunk_rest.call(null,seq__25914_25965__$1);
var G__25968 = c__4319__auto___25966;
var G__25969 = cljs.core.count.call(null,c__4319__auto___25966);
var G__25970 = (0);
seq__25914_25932 = G__25967;
chunk__25915_25933 = G__25968;
count__25916_25934 = G__25969;
i__25917_25935 = G__25970;
continue;
} else {
var vec__25925_25971 = cljs.core.first.call(null,seq__25914_25965__$1);
var ts_25972 = cljs.core.nth.call(null,vec__25925_25971,(0),null);
var then_25973 = cljs.core.nth.call(null,vec__25925_25971,(1),null);
var seq__25928_25974 = cljs.core.seq.call(null,ts_25972);
var chunk__25929_25975 = null;
var count__25930_25976 = (0);
var i__25931_25977 = (0);
while(true){
if((i__25931_25977 < count__25930_25976)){
var test_25978 = cljs.core._nth.call(null,chunk__25929_25975,i__25931_25977);
cljs.compiler.emitln.call(null,"case ",test_25978,":");


var G__25979 = seq__25928_25974;
var G__25980 = chunk__25929_25975;
var G__25981 = count__25930_25976;
var G__25982 = (i__25931_25977 + (1));
seq__25928_25974 = G__25979;
chunk__25929_25975 = G__25980;
count__25930_25976 = G__25981;
i__25931_25977 = G__25982;
continue;
} else {
var temp__5457__auto___25983__$1 = cljs.core.seq.call(null,seq__25928_25974);
if(temp__5457__auto___25983__$1){
var seq__25928_25984__$1 = temp__5457__auto___25983__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25928_25984__$1)){
var c__4319__auto___25985 = cljs.core.chunk_first.call(null,seq__25928_25984__$1);
var G__25986 = cljs.core.chunk_rest.call(null,seq__25928_25984__$1);
var G__25987 = c__4319__auto___25985;
var G__25988 = cljs.core.count.call(null,c__4319__auto___25985);
var G__25989 = (0);
seq__25928_25974 = G__25986;
chunk__25929_25975 = G__25987;
count__25930_25976 = G__25988;
i__25931_25977 = G__25989;
continue;
} else {
var test_25990 = cljs.core.first.call(null,seq__25928_25984__$1);
cljs.compiler.emitln.call(null,"case ",test_25990,":");


var G__25991 = cljs.core.next.call(null,seq__25928_25984__$1);
var G__25992 = null;
var G__25993 = (0);
var G__25994 = (0);
seq__25928_25974 = G__25991;
chunk__25929_25975 = G__25992;
count__25930_25976 = G__25993;
i__25931_25977 = G__25994;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_25973);
} else {
cljs.compiler.emitln.call(null,then_25973);
}

cljs.compiler.emitln.call(null,"break;");


var G__25995 = cljs.core.next.call(null,seq__25914_25965__$1);
var G__25996 = null;
var G__25997 = (0);
var G__25998 = (0);
seq__25914_25932 = G__25995;
chunk__25915_25933 = G__25996;
count__25916_25934 = G__25997;
i__25917_25935 = G__25998;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__25999){
var map__26000 = p__25999;
var map__26000__$1 = ((((!((map__26000 == null)))?(((((map__26000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26000):map__26000);
var throw$ = cljs.core.get.call(null,map__26000__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__26000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__26003 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__26003,(0),null);
var rstr = cljs.core.nth.call(null,vec__26003,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__26003,fstr,rstr,ret_t,axstr){
return (function (p1__26002_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26002_SHARP_);
});})(idx,vec__26003,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__26006 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26006),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__26006;
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
return (function (p1__26007_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26007_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__26008 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26009 = cljs.core.seq.call(null,vec__26008);
var first__26010 = cljs.core.first.call(null,seq__26009);
var seq__26009__$1 = cljs.core.next.call(null,seq__26009);
var p = first__26010;
var first__26010__$1 = cljs.core.first.call(null,seq__26009__$1);
var seq__26009__$2 = cljs.core.next.call(null,seq__26009__$1);
var ts = first__26010__$1;
var first__26010__$2 = cljs.core.first.call(null,seq__26009__$2);
var seq__26009__$3 = cljs.core.next.call(null,seq__26009__$2);
var n = first__26010__$2;
var xs = seq__26009__$3;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__26011 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26012 = cljs.core.seq.call(null,vec__26011);
var first__26013 = cljs.core.first.call(null,seq__26012);
var seq__26012__$1 = cljs.core.next.call(null,seq__26012);
var p = first__26013;
var first__26013__$1 = cljs.core.first.call(null,seq__26012__$1);
var seq__26012__$2 = cljs.core.next.call(null,seq__26012__$1);
var ts = first__26013__$1;
var xs = seq__26012__$2;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
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
var G__26016 = arguments.length;
switch (G__26016) {
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
var vec__26024 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__26014_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__26014_SHARP_);
} else {
return p1__26014_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__26025 = cljs.core.seq.call(null,vec__26024);
var first__26026 = cljs.core.first.call(null,seq__26025);
var seq__26025__$1 = cljs.core.next.call(null,seq__26025);
var x = first__26026;
var ys = seq__26025__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__26027 = cljs.core.seq.call(null,ys);
var chunk__26028 = null;
var count__26029 = (0);
var i__26030 = (0);
while(true){
if((i__26030 < count__26029)){
var next_line = cljs.core._nth.call(null,chunk__26028,i__26030);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__26036 = seq__26027;
var G__26037 = chunk__26028;
var G__26038 = count__26029;
var G__26039 = (i__26030 + (1));
seq__26027 = G__26036;
chunk__26028 = G__26037;
count__26029 = G__26038;
i__26030 = G__26039;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26027);
if(temp__5457__auto__){
var seq__26027__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26027__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26027__$1);
var G__26040 = cljs.core.chunk_rest.call(null,seq__26027__$1);
var G__26041 = c__4319__auto__;
var G__26042 = cljs.core.count.call(null,c__4319__auto__);
var G__26043 = (0);
seq__26027 = G__26040;
chunk__26028 = G__26041;
count__26029 = G__26042;
i__26030 = G__26043;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__26027__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__26044 = cljs.core.next.call(null,seq__26027__$1);
var G__26045 = null;
var G__26046 = (0);
var G__26047 = (0);
seq__26027 = G__26044;
chunk__26028 = G__26045;
count__26029 = G__26046;
i__26030 = G__26047;
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

var seq__26031_26048 = cljs.core.seq.call(null,docs__$2);
var chunk__26032_26049 = null;
var count__26033_26050 = (0);
var i__26034_26051 = (0);
while(true){
if((i__26034_26051 < count__26033_26050)){
var e_26052 = cljs.core._nth.call(null,chunk__26032_26049,i__26034_26051);
if(cljs.core.truth_(e_26052)){
print_comment_lines.call(null,e_26052);
} else {
}


var G__26053 = seq__26031_26048;
var G__26054 = chunk__26032_26049;
var G__26055 = count__26033_26050;
var G__26056 = (i__26034_26051 + (1));
seq__26031_26048 = G__26053;
chunk__26032_26049 = G__26054;
count__26033_26050 = G__26055;
i__26034_26051 = G__26056;
continue;
} else {
var temp__5457__auto___26057 = cljs.core.seq.call(null,seq__26031_26048);
if(temp__5457__auto___26057){
var seq__26031_26058__$1 = temp__5457__auto___26057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26031_26058__$1)){
var c__4319__auto___26059 = cljs.core.chunk_first.call(null,seq__26031_26058__$1);
var G__26060 = cljs.core.chunk_rest.call(null,seq__26031_26058__$1);
var G__26061 = c__4319__auto___26059;
var G__26062 = cljs.core.count.call(null,c__4319__auto___26059);
var G__26063 = (0);
seq__26031_26048 = G__26060;
chunk__26032_26049 = G__26061;
count__26033_26050 = G__26062;
i__26034_26051 = G__26063;
continue;
} else {
var e_26064 = cljs.core.first.call(null,seq__26031_26058__$1);
if(cljs.core.truth_(e_26064)){
print_comment_lines.call(null,e_26064);
} else {
}


var G__26065 = cljs.core.next.call(null,seq__26031_26058__$1);
var G__26066 = null;
var G__26067 = (0);
var G__26068 = (0);
seq__26031_26048 = G__26065;
chunk__26032_26049 = G__26066;
count__26033_26050 = G__26067;
i__26034_26051 = G__26068;
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
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3911__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__26070_SHARP_){
return goog.string.startsWith(p1__26070_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = opts;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3911__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__26071){
var map__26072 = p__26071;
var map__26072__$1 = ((((!((map__26072 == null)))?(((((map__26072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26072):map__26072);
var name = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3922__auto__ = init;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3911__auto__){
return test;
} else {
return and__3911__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__26074){
var map__26075 = p__26074;
var map__26075__$1 = ((((!((map__26075 == null)))?(((((map__26075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26075):map__26075);
var name = cljs.core.get.call(null,map__26075__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__26075__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__26075__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__26077_26095 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__26078_26096 = null;
var count__26079_26097 = (0);
var i__26080_26098 = (0);
while(true){
if((i__26080_26098 < count__26079_26097)){
var vec__26081_26099 = cljs.core._nth.call(null,chunk__26078_26096,i__26080_26098);
var i_26100 = cljs.core.nth.call(null,vec__26081_26099,(0),null);
var param_26101 = cljs.core.nth.call(null,vec__26081_26099,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26101);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__26102 = seq__26077_26095;
var G__26103 = chunk__26078_26096;
var G__26104 = count__26079_26097;
var G__26105 = (i__26080_26098 + (1));
seq__26077_26095 = G__26102;
chunk__26078_26096 = G__26103;
count__26079_26097 = G__26104;
i__26080_26098 = G__26105;
continue;
} else {
var temp__5457__auto___26106 = cljs.core.seq.call(null,seq__26077_26095);
if(temp__5457__auto___26106){
var seq__26077_26107__$1 = temp__5457__auto___26106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26077_26107__$1)){
var c__4319__auto___26108 = cljs.core.chunk_first.call(null,seq__26077_26107__$1);
var G__26109 = cljs.core.chunk_rest.call(null,seq__26077_26107__$1);
var G__26110 = c__4319__auto___26108;
var G__26111 = cljs.core.count.call(null,c__4319__auto___26108);
var G__26112 = (0);
seq__26077_26095 = G__26109;
chunk__26078_26096 = G__26110;
count__26079_26097 = G__26111;
i__26080_26098 = G__26112;
continue;
} else {
var vec__26084_26113 = cljs.core.first.call(null,seq__26077_26107__$1);
var i_26114 = cljs.core.nth.call(null,vec__26084_26113,(0),null);
var param_26115 = cljs.core.nth.call(null,vec__26084_26113,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26115);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__26116 = cljs.core.next.call(null,seq__26077_26107__$1);
var G__26117 = null;
var G__26118 = (0);
var G__26119 = (0);
seq__26077_26095 = G__26116;
chunk__26078_26096 = G__26117;
count__26079_26097 = G__26118;
i__26080_26098 = G__26119;
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

var seq__26087_26120 = cljs.core.seq.call(null,params);
var chunk__26088_26121 = null;
var count__26089_26122 = (0);
var i__26090_26123 = (0);
while(true){
if((i__26090_26123 < count__26089_26122)){
var param_26124 = cljs.core._nth.call(null,chunk__26088_26121,i__26090_26123);
cljs.compiler.emit.call(null,param_26124);

if(cljs.core._EQ_.call(null,param_26124,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26125 = seq__26087_26120;
var G__26126 = chunk__26088_26121;
var G__26127 = count__26089_26122;
var G__26128 = (i__26090_26123 + (1));
seq__26087_26120 = G__26125;
chunk__26088_26121 = G__26126;
count__26089_26122 = G__26127;
i__26090_26123 = G__26128;
continue;
} else {
var temp__5457__auto___26129 = cljs.core.seq.call(null,seq__26087_26120);
if(temp__5457__auto___26129){
var seq__26087_26130__$1 = temp__5457__auto___26129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26087_26130__$1)){
var c__4319__auto___26131 = cljs.core.chunk_first.call(null,seq__26087_26130__$1);
var G__26132 = cljs.core.chunk_rest.call(null,seq__26087_26130__$1);
var G__26133 = c__4319__auto___26131;
var G__26134 = cljs.core.count.call(null,c__4319__auto___26131);
var G__26135 = (0);
seq__26087_26120 = G__26132;
chunk__26088_26121 = G__26133;
count__26089_26122 = G__26134;
i__26090_26123 = G__26135;
continue;
} else {
var param_26136 = cljs.core.first.call(null,seq__26087_26130__$1);
cljs.compiler.emit.call(null,param_26136);

if(cljs.core._EQ_.call(null,param_26136,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26137 = cljs.core.next.call(null,seq__26087_26130__$1);
var G__26138 = null;
var G__26139 = (0);
var G__26140 = (0);
seq__26087_26120 = G__26137;
chunk__26088_26121 = G__26138;
count__26089_26122 = G__26139;
i__26090_26123 = G__26140;
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

var seq__26091_26141 = cljs.core.seq.call(null,params);
var chunk__26092_26142 = null;
var count__26093_26143 = (0);
var i__26094_26144 = (0);
while(true){
if((i__26094_26144 < count__26093_26143)){
var param_26145 = cljs.core._nth.call(null,chunk__26092_26142,i__26094_26144);
cljs.compiler.emit.call(null,param_26145);

if(cljs.core._EQ_.call(null,param_26145,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26146 = seq__26091_26141;
var G__26147 = chunk__26092_26142;
var G__26148 = count__26093_26143;
var G__26149 = (i__26094_26144 + (1));
seq__26091_26141 = G__26146;
chunk__26092_26142 = G__26147;
count__26093_26143 = G__26148;
i__26094_26144 = G__26149;
continue;
} else {
var temp__5457__auto___26150 = cljs.core.seq.call(null,seq__26091_26141);
if(temp__5457__auto___26150){
var seq__26091_26151__$1 = temp__5457__auto___26150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26091_26151__$1)){
var c__4319__auto___26152 = cljs.core.chunk_first.call(null,seq__26091_26151__$1);
var G__26153 = cljs.core.chunk_rest.call(null,seq__26091_26151__$1);
var G__26154 = c__4319__auto___26152;
var G__26155 = cljs.core.count.call(null,c__4319__auto___26152);
var G__26156 = (0);
seq__26091_26141 = G__26153;
chunk__26092_26142 = G__26154;
count__26093_26143 = G__26155;
i__26094_26144 = G__26156;
continue;
} else {
var param_26157 = cljs.core.first.call(null,seq__26091_26151__$1);
cljs.compiler.emit.call(null,param_26157);

if(cljs.core._EQ_.call(null,param_26157,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26158 = cljs.core.next.call(null,seq__26091_26151__$1);
var G__26159 = null;
var G__26160 = (0);
var G__26161 = (0);
seq__26091_26141 = G__26158;
chunk__26092_26142 = G__26159;
count__26093_26143 = G__26160;
i__26094_26144 = G__26161;
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
var seq__26162 = cljs.core.seq.call(null,params);
var chunk__26163 = null;
var count__26164 = (0);
var i__26165 = (0);
while(true){
if((i__26165 < count__26164)){
var param = cljs.core._nth.call(null,chunk__26163,i__26165);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26166 = seq__26162;
var G__26167 = chunk__26163;
var G__26168 = count__26164;
var G__26169 = (i__26165 + (1));
seq__26162 = G__26166;
chunk__26163 = G__26167;
count__26164 = G__26168;
i__26165 = G__26169;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26162);
if(temp__5457__auto__){
var seq__26162__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26162__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26162__$1);
var G__26170 = cljs.core.chunk_rest.call(null,seq__26162__$1);
var G__26171 = c__4319__auto__;
var G__26172 = cljs.core.count.call(null,c__4319__auto__);
var G__26173 = (0);
seq__26162 = G__26170;
chunk__26163 = G__26171;
count__26164 = G__26172;
i__26165 = G__26173;
continue;
} else {
var param = cljs.core.first.call(null,seq__26162__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26174 = cljs.core.next.call(null,seq__26162__$1);
var G__26175 = null;
var G__26176 = (0);
var G__26177 = (0);
seq__26162 = G__26174;
chunk__26163 = G__26175;
count__26164 = G__26176;
i__26165 = G__26177;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__26178){
var map__26179 = p__26178;
var map__26179__$1 = ((((!((map__26179 == null)))?(((((map__26179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26179):map__26179);
var type = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
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
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__26181){
var map__26182 = p__26181;
var map__26182__$1 = ((((!((map__26182 == null)))?(((((map__26182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26182):map__26182);
var f = map__26182__$1;
var type = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_26192__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_26193 = cljs.compiler.munge.call(null,name_26192__$1);
var delegate_name_26194 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_26193),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_26194," = function (");

var seq__26184_26195 = cljs.core.seq.call(null,params);
var chunk__26185_26196 = null;
var count__26186_26197 = (0);
var i__26187_26198 = (0);
while(true){
if((i__26187_26198 < count__26186_26197)){
var param_26199 = cljs.core._nth.call(null,chunk__26185_26196,i__26187_26198);
cljs.compiler.emit.call(null,param_26199);

if(cljs.core._EQ_.call(null,param_26199,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26200 = seq__26184_26195;
var G__26201 = chunk__26185_26196;
var G__26202 = count__26186_26197;
var G__26203 = (i__26187_26198 + (1));
seq__26184_26195 = G__26200;
chunk__26185_26196 = G__26201;
count__26186_26197 = G__26202;
i__26187_26198 = G__26203;
continue;
} else {
var temp__5457__auto___26204 = cljs.core.seq.call(null,seq__26184_26195);
if(temp__5457__auto___26204){
var seq__26184_26205__$1 = temp__5457__auto___26204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26184_26205__$1)){
var c__4319__auto___26206 = cljs.core.chunk_first.call(null,seq__26184_26205__$1);
var G__26207 = cljs.core.chunk_rest.call(null,seq__26184_26205__$1);
var G__26208 = c__4319__auto___26206;
var G__26209 = cljs.core.count.call(null,c__4319__auto___26206);
var G__26210 = (0);
seq__26184_26195 = G__26207;
chunk__26185_26196 = G__26208;
count__26186_26197 = G__26209;
i__26187_26198 = G__26210;
continue;
} else {
var param_26211 = cljs.core.first.call(null,seq__26184_26205__$1);
cljs.compiler.emit.call(null,param_26211);

if(cljs.core._EQ_.call(null,param_26211,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26212 = cljs.core.next.call(null,seq__26184_26205__$1);
var G__26213 = null;
var G__26214 = (0);
var G__26215 = (0);
seq__26184_26195 = G__26212;
chunk__26185_26196 = G__26213;
count__26186_26197 = G__26214;
i__26187_26198 = G__26215;
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

cljs.compiler.emitln.call(null,"var ",mname_26193," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_26216 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_26216,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_26194,".call(this,");

var seq__26188_26217 = cljs.core.seq.call(null,params);
var chunk__26189_26218 = null;
var count__26190_26219 = (0);
var i__26191_26220 = (0);
while(true){
if((i__26191_26220 < count__26190_26219)){
var param_26221 = cljs.core._nth.call(null,chunk__26189_26218,i__26191_26220);
cljs.compiler.emit.call(null,param_26221);

if(cljs.core._EQ_.call(null,param_26221,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26222 = seq__26188_26217;
var G__26223 = chunk__26189_26218;
var G__26224 = count__26190_26219;
var G__26225 = (i__26191_26220 + (1));
seq__26188_26217 = G__26222;
chunk__26189_26218 = G__26223;
count__26190_26219 = G__26224;
i__26191_26220 = G__26225;
continue;
} else {
var temp__5457__auto___26226 = cljs.core.seq.call(null,seq__26188_26217);
if(temp__5457__auto___26226){
var seq__26188_26227__$1 = temp__5457__auto___26226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26188_26227__$1)){
var c__4319__auto___26228 = cljs.core.chunk_first.call(null,seq__26188_26227__$1);
var G__26229 = cljs.core.chunk_rest.call(null,seq__26188_26227__$1);
var G__26230 = c__4319__auto___26228;
var G__26231 = cljs.core.count.call(null,c__4319__auto___26228);
var G__26232 = (0);
seq__26188_26217 = G__26229;
chunk__26189_26218 = G__26230;
count__26190_26219 = G__26231;
i__26191_26220 = G__26232;
continue;
} else {
var param_26233 = cljs.core.first.call(null,seq__26188_26227__$1);
cljs.compiler.emit.call(null,param_26233);

if(cljs.core._EQ_.call(null,param_26233,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26234 = cljs.core.next.call(null,seq__26188_26227__$1);
var G__26235 = null;
var G__26236 = (0);
var G__26237 = (0);
seq__26188_26217 = G__26234;
chunk__26189_26218 = G__26235;
count__26190_26219 = G__26236;
i__26191_26220 = G__26237;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_26193,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_26193,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_26192__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_26193,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_26194,";");

cljs.compiler.emitln.call(null,"return ",mname_26193,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__26241){
var map__26242 = p__26241;
var map__26242__$1 = ((((!((map__26242 == null)))?(((((map__26242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26242):map__26242);
var name = cljs.core.get.call(null,map__26242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__26242__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__26242__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__26242__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__26242__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__26242__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__26242__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__26242,map__26242__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26238_SHARP_){
var and__3911__auto__ = p1__26238_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__26238_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__26242,map__26242__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_26277__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_26278 = cljs.compiler.munge.call(null,name_26277__$1);
var maxparams_26279 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_26280 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_26277__$1,mname_26278,maxparams_26279,loop_locals,map__26242,map__26242__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_26278),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_26277__$1,mname_26278,maxparams_26279,loop_locals,map__26242,map__26242__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_26281 = cljs.core.sort_by.call(null,((function (name_26277__$1,mname_26278,maxparams_26279,mmap_26280,loop_locals,map__26242,map__26242__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26239_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26239_SHARP_)));
});})(name_26277__$1,mname_26278,maxparams_26279,mmap_26280,loop_locals,map__26242,map__26242__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_26280));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_26278," = null;");

var seq__26244_26282 = cljs.core.seq.call(null,ms_26281);
var chunk__26245_26283 = null;
var count__26246_26284 = (0);
var i__26247_26285 = (0);
while(true){
if((i__26247_26285 < count__26246_26284)){
var vec__26248_26286 = cljs.core._nth.call(null,chunk__26245_26283,i__26247_26285);
var n_26287 = cljs.core.nth.call(null,vec__26248_26286,(0),null);
var meth_26288 = cljs.core.nth.call(null,vec__26248_26286,(1),null);
cljs.compiler.emits.call(null,"var ",n_26287," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26288))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_26288);
} else {
cljs.compiler.emit_fn_method.call(null,meth_26288);
}

cljs.compiler.emitln.call(null,";");


var G__26289 = seq__26244_26282;
var G__26290 = chunk__26245_26283;
var G__26291 = count__26246_26284;
var G__26292 = (i__26247_26285 + (1));
seq__26244_26282 = G__26289;
chunk__26245_26283 = G__26290;
count__26246_26284 = G__26291;
i__26247_26285 = G__26292;
continue;
} else {
var temp__5457__auto___26293 = cljs.core.seq.call(null,seq__26244_26282);
if(temp__5457__auto___26293){
var seq__26244_26294__$1 = temp__5457__auto___26293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26244_26294__$1)){
var c__4319__auto___26295 = cljs.core.chunk_first.call(null,seq__26244_26294__$1);
var G__26296 = cljs.core.chunk_rest.call(null,seq__26244_26294__$1);
var G__26297 = c__4319__auto___26295;
var G__26298 = cljs.core.count.call(null,c__4319__auto___26295);
var G__26299 = (0);
seq__26244_26282 = G__26296;
chunk__26245_26283 = G__26297;
count__26246_26284 = G__26298;
i__26247_26285 = G__26299;
continue;
} else {
var vec__26251_26300 = cljs.core.first.call(null,seq__26244_26294__$1);
var n_26301 = cljs.core.nth.call(null,vec__26251_26300,(0),null);
var meth_26302 = cljs.core.nth.call(null,vec__26251_26300,(1),null);
cljs.compiler.emits.call(null,"var ",n_26301," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26302))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_26302);
} else {
cljs.compiler.emit_fn_method.call(null,meth_26302);
}

cljs.compiler.emitln.call(null,";");


var G__26303 = cljs.core.next.call(null,seq__26244_26294__$1);
var G__26304 = null;
var G__26305 = (0);
var G__26306 = (0);
seq__26244_26282 = G__26303;
chunk__26245_26283 = G__26304;
count__26246_26284 = G__26305;
i__26247_26285 = G__26306;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_26278," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_26279),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_26279)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_26279));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__26254_26307 = cljs.core.seq.call(null,ms_26281);
var chunk__26255_26308 = null;
var count__26256_26309 = (0);
var i__26257_26310 = (0);
while(true){
if((i__26257_26310 < count__26256_26309)){
var vec__26258_26311 = cljs.core._nth.call(null,chunk__26255_26308,i__26257_26310);
var n_26312 = cljs.core.nth.call(null,vec__26258_26311,(0),null);
var meth_26313 = cljs.core.nth.call(null,vec__26258_26311,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26313))){
cljs.compiler.emitln.call(null,"default:");

var restarg_26314 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_26314," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_26315 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_26314," = new cljs.core.IndexedSeq(",a_26315,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_26312,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_26279)),(((cljs.core.count.call(null,maxparams_26279) > (1)))?", ":null),restarg_26314,");");
} else {
var pcnt_26316 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_26313));
cljs.compiler.emitln.call(null,"case ",pcnt_26316,":");

cljs.compiler.emitln.call(null,"return ",n_26312,".call(this",(((pcnt_26316 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_26316,maxparams_26279)),null,(1),null)),(2),null))),");");
}


var G__26317 = seq__26254_26307;
var G__26318 = chunk__26255_26308;
var G__26319 = count__26256_26309;
var G__26320 = (i__26257_26310 + (1));
seq__26254_26307 = G__26317;
chunk__26255_26308 = G__26318;
count__26256_26309 = G__26319;
i__26257_26310 = G__26320;
continue;
} else {
var temp__5457__auto___26321 = cljs.core.seq.call(null,seq__26254_26307);
if(temp__5457__auto___26321){
var seq__26254_26322__$1 = temp__5457__auto___26321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26254_26322__$1)){
var c__4319__auto___26323 = cljs.core.chunk_first.call(null,seq__26254_26322__$1);
var G__26324 = cljs.core.chunk_rest.call(null,seq__26254_26322__$1);
var G__26325 = c__4319__auto___26323;
var G__26326 = cljs.core.count.call(null,c__4319__auto___26323);
var G__26327 = (0);
seq__26254_26307 = G__26324;
chunk__26255_26308 = G__26325;
count__26256_26309 = G__26326;
i__26257_26310 = G__26327;
continue;
} else {
var vec__26261_26328 = cljs.core.first.call(null,seq__26254_26322__$1);
var n_26329 = cljs.core.nth.call(null,vec__26261_26328,(0),null);
var meth_26330 = cljs.core.nth.call(null,vec__26261_26328,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26330))){
cljs.compiler.emitln.call(null,"default:");

var restarg_26331 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_26331," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_26332 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_26331," = new cljs.core.IndexedSeq(",a_26332,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_26329,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_26279)),(((cljs.core.count.call(null,maxparams_26279) > (1)))?", ":null),restarg_26331,");");
} else {
var pcnt_26333 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_26330));
cljs.compiler.emitln.call(null,"case ",pcnt_26333,":");

cljs.compiler.emitln.call(null,"return ",n_26329,".call(this",(((pcnt_26333 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_26333,maxparams_26279)),null,(1),null)),(2),null))),");");
}


var G__26334 = cljs.core.next.call(null,seq__26254_26322__$1);
var G__26335 = null;
var G__26336 = (0);
var G__26337 = (0);
seq__26254_26307 = G__26334;
chunk__26255_26308 = G__26335;
count__26256_26309 = G__26336;
i__26257_26310 = G__26337;
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
cljs.compiler.emitln.call(null,mname_26278,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_26278,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_26277__$1,mname_26278,maxparams_26279,mmap_26280,ms_26281,loop_locals,map__26242,map__26242__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__26240_SHARP_){
var vec__26264 = p1__26240_SHARP_;
var n = cljs.core.nth.call(null,vec__26264,(0),null);
var m = cljs.core.nth.call(null,vec__26264,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_26277__$1,mname_26278,maxparams_26279,mmap_26280,ms_26281,loop_locals,map__26242,map__26242__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_26281),".cljs$lang$applyTo;");
} else {
}

var seq__26267_26338 = cljs.core.seq.call(null,ms_26281);
var chunk__26268_26339 = null;
var count__26269_26340 = (0);
var i__26270_26341 = (0);
while(true){
if((i__26270_26341 < count__26269_26340)){
var vec__26271_26342 = cljs.core._nth.call(null,chunk__26268_26339,i__26270_26341);
var n_26343 = cljs.core.nth.call(null,vec__26271_26342,(0),null);
var meth_26344 = cljs.core.nth.call(null,vec__26271_26342,(1),null);
var c_26345 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_26344));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26344))){
cljs.compiler.emitln.call(null,mname_26278,".cljs$core$IFn$_invoke$arity$variadic = ",n_26343,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_26278,".cljs$core$IFn$_invoke$arity$",c_26345," = ",n_26343,";");
}


var G__26346 = seq__26267_26338;
var G__26347 = chunk__26268_26339;
var G__26348 = count__26269_26340;
var G__26349 = (i__26270_26341 + (1));
seq__26267_26338 = G__26346;
chunk__26268_26339 = G__26347;
count__26269_26340 = G__26348;
i__26270_26341 = G__26349;
continue;
} else {
var temp__5457__auto___26350 = cljs.core.seq.call(null,seq__26267_26338);
if(temp__5457__auto___26350){
var seq__26267_26351__$1 = temp__5457__auto___26350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26267_26351__$1)){
var c__4319__auto___26352 = cljs.core.chunk_first.call(null,seq__26267_26351__$1);
var G__26353 = cljs.core.chunk_rest.call(null,seq__26267_26351__$1);
var G__26354 = c__4319__auto___26352;
var G__26355 = cljs.core.count.call(null,c__4319__auto___26352);
var G__26356 = (0);
seq__26267_26338 = G__26353;
chunk__26268_26339 = G__26354;
count__26269_26340 = G__26355;
i__26270_26341 = G__26356;
continue;
} else {
var vec__26274_26357 = cljs.core.first.call(null,seq__26267_26351__$1);
var n_26358 = cljs.core.nth.call(null,vec__26274_26357,(0),null);
var meth_26359 = cljs.core.nth.call(null,vec__26274_26357,(1),null);
var c_26360 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_26359));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_26359))){
cljs.compiler.emitln.call(null,mname_26278,".cljs$core$IFn$_invoke$arity$variadic = ",n_26358,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_26278,".cljs$core$IFn$_invoke$arity$",c_26360," = ",n_26358,";");
}


var G__26361 = cljs.core.next.call(null,seq__26267_26351__$1);
var G__26362 = null;
var G__26363 = (0);
var G__26364 = (0);
seq__26267_26338 = G__26361;
chunk__26268_26339 = G__26362;
count__26269_26340 = G__26363;
i__26270_26341 = G__26364;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_26278,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__26365){
var map__26366 = p__26365;
var map__26366__$1 = ((((!((map__26366 == null)))?(((((map__26366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26366):map__26366);
var statements = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__26366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__26368_26372 = cljs.core.seq.call(null,statements);
var chunk__26369_26373 = null;
var count__26370_26374 = (0);
var i__26371_26375 = (0);
while(true){
if((i__26371_26375 < count__26370_26374)){
var s_26376 = cljs.core._nth.call(null,chunk__26369_26373,i__26371_26375);
cljs.compiler.emitln.call(null,s_26376);


var G__26377 = seq__26368_26372;
var G__26378 = chunk__26369_26373;
var G__26379 = count__26370_26374;
var G__26380 = (i__26371_26375 + (1));
seq__26368_26372 = G__26377;
chunk__26369_26373 = G__26378;
count__26370_26374 = G__26379;
i__26371_26375 = G__26380;
continue;
} else {
var temp__5457__auto___26381 = cljs.core.seq.call(null,seq__26368_26372);
if(temp__5457__auto___26381){
var seq__26368_26382__$1 = temp__5457__auto___26381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26368_26382__$1)){
var c__4319__auto___26383 = cljs.core.chunk_first.call(null,seq__26368_26382__$1);
var G__26384 = cljs.core.chunk_rest.call(null,seq__26368_26382__$1);
var G__26385 = c__4319__auto___26383;
var G__26386 = cljs.core.count.call(null,c__4319__auto___26383);
var G__26387 = (0);
seq__26368_26372 = G__26384;
chunk__26369_26373 = G__26385;
count__26370_26374 = G__26386;
i__26371_26375 = G__26387;
continue;
} else {
var s_26388 = cljs.core.first.call(null,seq__26368_26382__$1);
cljs.compiler.emitln.call(null,s_26388);


var G__26389 = cljs.core.next.call(null,seq__26368_26382__$1);
var G__26390 = null;
var G__26391 = (0);
var G__26392 = (0);
seq__26368_26372 = G__26389;
chunk__26369_26373 = G__26390;
count__26370_26374 = G__26391;
i__26371_26375 = G__26392;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__26393){
var map__26394 = p__26393;
var map__26394__$1 = ((((!((map__26394 == null)))?(((((map__26394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26394):map__26394);
var env = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__26396,is_loop){
var map__26397 = p__26396;
var map__26397__$1 = ((((!((map__26397 == null)))?(((((map__26397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26397):map__26397);
var bindings = cljs.core.get.call(null,map__26397__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__26397__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__26397__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_26399_26408 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_26399_26408,context,map__26397,map__26397__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_26399_26408,context,map__26397,map__26397__$1,bindings,expr,env))
,bindings):null));

try{var seq__26400_26409 = cljs.core.seq.call(null,bindings);
var chunk__26401_26410 = null;
var count__26402_26411 = (0);
var i__26403_26412 = (0);
while(true){
if((i__26403_26412 < count__26402_26411)){
var map__26404_26413 = cljs.core._nth.call(null,chunk__26401_26410,i__26403_26412);
var map__26404_26414__$1 = ((((!((map__26404_26413 == null)))?(((((map__26404_26413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26404_26413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26404_26413):map__26404_26413);
var binding_26415 = map__26404_26414__$1;
var init_26416 = cljs.core.get.call(null,map__26404_26414__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_26415);

cljs.compiler.emitln.call(null," = ",init_26416,";");


var G__26417 = seq__26400_26409;
var G__26418 = chunk__26401_26410;
var G__26419 = count__26402_26411;
var G__26420 = (i__26403_26412 + (1));
seq__26400_26409 = G__26417;
chunk__26401_26410 = G__26418;
count__26402_26411 = G__26419;
i__26403_26412 = G__26420;
continue;
} else {
var temp__5457__auto___26421 = cljs.core.seq.call(null,seq__26400_26409);
if(temp__5457__auto___26421){
var seq__26400_26422__$1 = temp__5457__auto___26421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26400_26422__$1)){
var c__4319__auto___26423 = cljs.core.chunk_first.call(null,seq__26400_26422__$1);
var G__26424 = cljs.core.chunk_rest.call(null,seq__26400_26422__$1);
var G__26425 = c__4319__auto___26423;
var G__26426 = cljs.core.count.call(null,c__4319__auto___26423);
var G__26427 = (0);
seq__26400_26409 = G__26424;
chunk__26401_26410 = G__26425;
count__26402_26411 = G__26426;
i__26403_26412 = G__26427;
continue;
} else {
var map__26406_26428 = cljs.core.first.call(null,seq__26400_26422__$1);
var map__26406_26429__$1 = ((((!((map__26406_26428 == null)))?(((((map__26406_26428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26406_26428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26406_26428):map__26406_26428);
var binding_26430 = map__26406_26429__$1;
var init_26431 = cljs.core.get.call(null,map__26406_26429__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_26430);

cljs.compiler.emitln.call(null," = ",init_26431,";");


var G__26432 = cljs.core.next.call(null,seq__26400_26422__$1);
var G__26433 = null;
var G__26434 = (0);
var G__26435 = (0);
seq__26400_26409 = G__26432;
chunk__26401_26410 = G__26433;
count__26402_26411 = G__26434;
i__26403_26412 = G__26435;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_26399_26408;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__26436){
var map__26437 = p__26436;
var map__26437__$1 = ((((!((map__26437 == null)))?(((((map__26437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26437):map__26437);
var frame = cljs.core.get.call(null,map__26437__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__26437__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__26437__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___26439 = cljs.core.count.call(null,exprs);
var i_26440 = (0);
while(true){
if((i_26440 < n__4376__auto___26439)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_26440)," = ",exprs.call(null,i_26440),";");

var G__26441 = (i_26440 + (1));
i_26440 = G__26441;
continue;
} else {
}
break;
}

var n__4376__auto___26442 = cljs.core.count.call(null,exprs);
var i_26443 = (0);
while(true){
if((i_26443 < n__4376__auto___26442)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_26443))," = ",temps.call(null,i_26443),";");

var G__26444 = (i_26443 + (1));
i_26443 = G__26444;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__26445){
var map__26446 = p__26445;
var map__26446__$1 = ((((!((map__26446 == null)))?(((((map__26446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26446):map__26446);
var bindings = cljs.core.get.call(null,map__26446__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__26446__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__26446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__26448_26456 = cljs.core.seq.call(null,bindings);
var chunk__26449_26457 = null;
var count__26450_26458 = (0);
var i__26451_26459 = (0);
while(true){
if((i__26451_26459 < count__26450_26458)){
var map__26452_26460 = cljs.core._nth.call(null,chunk__26449_26457,i__26451_26459);
var map__26452_26461__$1 = ((((!((map__26452_26460 == null)))?(((((map__26452_26460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26452_26460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26452_26460):map__26452_26460);
var binding_26462 = map__26452_26461__$1;
var init_26463 = cljs.core.get.call(null,map__26452_26461__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_26462)," = ",init_26463,";");


var G__26464 = seq__26448_26456;
var G__26465 = chunk__26449_26457;
var G__26466 = count__26450_26458;
var G__26467 = (i__26451_26459 + (1));
seq__26448_26456 = G__26464;
chunk__26449_26457 = G__26465;
count__26450_26458 = G__26466;
i__26451_26459 = G__26467;
continue;
} else {
var temp__5457__auto___26468 = cljs.core.seq.call(null,seq__26448_26456);
if(temp__5457__auto___26468){
var seq__26448_26469__$1 = temp__5457__auto___26468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26448_26469__$1)){
var c__4319__auto___26470 = cljs.core.chunk_first.call(null,seq__26448_26469__$1);
var G__26471 = cljs.core.chunk_rest.call(null,seq__26448_26469__$1);
var G__26472 = c__4319__auto___26470;
var G__26473 = cljs.core.count.call(null,c__4319__auto___26470);
var G__26474 = (0);
seq__26448_26456 = G__26471;
chunk__26449_26457 = G__26472;
count__26450_26458 = G__26473;
i__26451_26459 = G__26474;
continue;
} else {
var map__26454_26475 = cljs.core.first.call(null,seq__26448_26469__$1);
var map__26454_26476__$1 = ((((!((map__26454_26475 == null)))?(((((map__26454_26475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26454_26475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26454_26475):map__26454_26475);
var binding_26477 = map__26454_26476__$1;
var init_26478 = cljs.core.get.call(null,map__26454_26476__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_26477)," = ",init_26478,";");


var G__26479 = cljs.core.next.call(null,seq__26448_26469__$1);
var G__26480 = null;
var G__26481 = (0);
var G__26482 = (0);
seq__26448_26456 = G__26479;
chunk__26449_26457 = G__26480;
count__26450_26458 = G__26481;
i__26451_26459 = G__26482;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__26485){
var map__26486 = p__26485;
var map__26486__$1 = ((((!((map__26486 == null)))?(((((map__26486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26486):map__26486);
var expr = map__26486__$1;
var f = cljs.core.get.call(null,map__26486__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__26486__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__26486__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3911__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3911__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3911__auto__ = protocol;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = tag;
if(cljs.core.truth_(and__3911__auto____$1)){
var or__3922__auto__ = (function (){var and__3911__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto____$2){
var and__3911__auto____$3 = protocol;
if(cljs.core.truth_(and__3911__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3911__auto____$3;
}
} else {
return and__3911__auto____$2;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto____$2 = (function (){var or__3922__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3911__auto____$2)){
var or__3922__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var and__3911__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3911__auto____$3){
var and__3911__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3911__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3911__auto____$4;
}
} else {
return and__3911__auto____$3;
}
}
} else {
return and__3911__auto____$2;
}
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3922__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__26488 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (arity > mfa);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__26486,map__26486__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__26486,map__26486__$1,expr,f,args,env){
return (function (p1__26483_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__26483_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__26486,map__26486__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__26486,map__26486__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__26486,map__26486__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__26486,map__26486__$1,expr,f,args,env){
return (function (p1__26484_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__26484_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__26486,map__26486__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__26486,map__26486__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__26488,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__26488,(1),null);
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_26491 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_26491,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_26492 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_26492,args)),(((mfa_26492 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_26492,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = js_QMARK_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_26493 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_26493," ? ",f__$1,fprop_26493,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_26493," ? ",f__$1,fprop_26493,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__26494){
var map__26495 = p__26494;
var map__26495__$1 = ((((!((map__26495 == null)))?(((((map__26495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26495):map__26495);
var ctor = cljs.core.get.call(null,map__26495__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__26495__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__26495__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__26497){
var map__26498 = p__26497;
var map__26498__$1 = ((((!((map__26498 == null)))?(((((map__26498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26498):map__26498);
var target = cljs.core.get.call(null,map__26498__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__26498__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__26498__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__26500 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__26500__$1 = ((((!((map__26500 == null)))?(((((map__26500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26500):map__26500);
var options = cljs.core.get.call(null,map__26500__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__26500__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__26501 = options;
var map__26501__$1 = ((((!((map__26501 == null)))?(((((map__26501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26501):map__26501);
var target = cljs.core.get.call(null,map__26501__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__26501__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__26502 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__26508 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__26508__$1 = ((((!((map__26508 == null)))?(((((map__26508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26508):map__26508);
var node_libs = cljs.core.get.call(null,map__26508__$1,true);
var libs_to_load = cljs.core.get.call(null,map__26508__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__26502,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__26502,(1),null);
var map__26505 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__26505__$1 = ((((!((map__26505 == null)))?(((((map__26505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26505):map__26505);
var global_exports_libs = cljs.core.get.call(null,map__26505__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__26505__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__26511_26527 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__26512_26528 = null;
var count__26513_26529 = (0);
var i__26514_26530 = (0);
while(true){
if((i__26514_26530 < count__26513_26529)){
var lib_26531 = cljs.core._nth.call(null,chunk__26512_26528,i__26514_26530);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_26531)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_26531),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_26531),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_26531),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_26531),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_26531),"');");

}
}
}


var G__26532 = seq__26511_26527;
var G__26533 = chunk__26512_26528;
var G__26534 = count__26513_26529;
var G__26535 = (i__26514_26530 + (1));
seq__26511_26527 = G__26532;
chunk__26512_26528 = G__26533;
count__26513_26529 = G__26534;
i__26514_26530 = G__26535;
continue;
} else {
var temp__5457__auto___26536 = cljs.core.seq.call(null,seq__26511_26527);
if(temp__5457__auto___26536){
var seq__26511_26537__$1 = temp__5457__auto___26536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26511_26537__$1)){
var c__4319__auto___26538 = cljs.core.chunk_first.call(null,seq__26511_26537__$1);
var G__26539 = cljs.core.chunk_rest.call(null,seq__26511_26537__$1);
var G__26540 = c__4319__auto___26538;
var G__26541 = cljs.core.count.call(null,c__4319__auto___26538);
var G__26542 = (0);
seq__26511_26527 = G__26539;
chunk__26512_26528 = G__26540;
count__26513_26529 = G__26541;
i__26514_26530 = G__26542;
continue;
} else {
var lib_26543 = cljs.core.first.call(null,seq__26511_26537__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_26543)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_26543),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_26543),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_26543),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_26543),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_26543),"');");

}
}
}


var G__26544 = cljs.core.next.call(null,seq__26511_26537__$1);
var G__26545 = null;
var G__26546 = (0);
var G__26547 = (0);
seq__26511_26527 = G__26544;
chunk__26512_26528 = G__26545;
count__26513_26529 = G__26546;
i__26514_26530 = G__26547;
continue;
}
} else {
}
}
break;
}

var seq__26515_26548 = cljs.core.seq.call(null,node_libs);
var chunk__26516_26549 = null;
var count__26517_26550 = (0);
var i__26518_26551 = (0);
while(true){
if((i__26518_26551 < count__26517_26550)){
var lib_26552 = cljs.core._nth.call(null,chunk__26516_26549,i__26518_26551);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_26552)," = require('",lib_26552,"');");


var G__26553 = seq__26515_26548;
var G__26554 = chunk__26516_26549;
var G__26555 = count__26517_26550;
var G__26556 = (i__26518_26551 + (1));
seq__26515_26548 = G__26553;
chunk__26516_26549 = G__26554;
count__26517_26550 = G__26555;
i__26518_26551 = G__26556;
continue;
} else {
var temp__5457__auto___26557 = cljs.core.seq.call(null,seq__26515_26548);
if(temp__5457__auto___26557){
var seq__26515_26558__$1 = temp__5457__auto___26557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26515_26558__$1)){
var c__4319__auto___26559 = cljs.core.chunk_first.call(null,seq__26515_26558__$1);
var G__26560 = cljs.core.chunk_rest.call(null,seq__26515_26558__$1);
var G__26561 = c__4319__auto___26559;
var G__26562 = cljs.core.count.call(null,c__4319__auto___26559);
var G__26563 = (0);
seq__26515_26548 = G__26560;
chunk__26516_26549 = G__26561;
count__26517_26550 = G__26562;
i__26518_26551 = G__26563;
continue;
} else {
var lib_26564 = cljs.core.first.call(null,seq__26515_26558__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_26564)," = require('",lib_26564,"');");


var G__26565 = cljs.core.next.call(null,seq__26515_26558__$1);
var G__26566 = null;
var G__26567 = (0);
var G__26568 = (0);
seq__26515_26548 = G__26565;
chunk__26516_26549 = G__26566;
count__26517_26550 = G__26567;
i__26518_26551 = G__26568;
continue;
}
} else {
}
}
break;
}

var seq__26519_26569 = cljs.core.seq.call(null,global_exports_libs);
var chunk__26520_26570 = null;
var count__26521_26571 = (0);
var i__26522_26572 = (0);
while(true){
if((i__26522_26572 < count__26521_26571)){
var lib_26573 = cljs.core._nth.call(null,chunk__26520_26570,i__26522_26572);
var map__26523_26574 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_26573));
var map__26523_26575__$1 = ((((!((map__26523_26574 == null)))?(((((map__26523_26574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26523_26574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26523_26574):map__26523_26574);
var global_exports_26576 = cljs.core.get.call(null,map__26523_26575__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_26573)," = goog.global.",cljs.core.get.call(null,global_exports_26576,cljs.core.symbol.call(null,lib_26573)),";");


var G__26577 = seq__26519_26569;
var G__26578 = chunk__26520_26570;
var G__26579 = count__26521_26571;
var G__26580 = (i__26522_26572 + (1));
seq__26519_26569 = G__26577;
chunk__26520_26570 = G__26578;
count__26521_26571 = G__26579;
i__26522_26572 = G__26580;
continue;
} else {
var temp__5457__auto___26581 = cljs.core.seq.call(null,seq__26519_26569);
if(temp__5457__auto___26581){
var seq__26519_26582__$1 = temp__5457__auto___26581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26519_26582__$1)){
var c__4319__auto___26583 = cljs.core.chunk_first.call(null,seq__26519_26582__$1);
var G__26584 = cljs.core.chunk_rest.call(null,seq__26519_26582__$1);
var G__26585 = c__4319__auto___26583;
var G__26586 = cljs.core.count.call(null,c__4319__auto___26583);
var G__26587 = (0);
seq__26519_26569 = G__26584;
chunk__26520_26570 = G__26585;
count__26521_26571 = G__26586;
i__26522_26572 = G__26587;
continue;
} else {
var lib_26588 = cljs.core.first.call(null,seq__26519_26582__$1);
var map__26525_26589 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_26588));
var map__26525_26590__$1 = ((((!((map__26525_26589 == null)))?(((((map__26525_26589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26525_26589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26525_26589):map__26525_26589);
var global_exports_26591 = cljs.core.get.call(null,map__26525_26590__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_26588)," = goog.global.",cljs.core.get.call(null,global_exports_26591,cljs.core.symbol.call(null,lib_26588)),";");


var G__26592 = cljs.core.next.call(null,seq__26519_26582__$1);
var G__26593 = null;
var G__26594 = (0);
var G__26595 = (0);
seq__26519_26569 = G__26592;
chunk__26520_26570 = G__26593;
count__26521_26571 = G__26594;
i__26522_26572 = G__26595;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__26596){
var map__26597 = p__26596;
var map__26597__$1 = ((((!((map__26597 == null)))?(((((map__26597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26597):map__26597);
var name = cljs.core.get.call(null,map__26597__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__26597__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__26597__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__26597__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__26597__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__26597__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__26597__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__26599){
var map__26600 = p__26599;
var map__26600__$1 = ((((!((map__26600 == null)))?(((((map__26600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26600):map__26600);
var name = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__26602){
var map__26603 = p__26602;
var map__26603__$1 = ((((!((map__26603 == null)))?(((((map__26603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26603):map__26603);
var t = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__26605_26623 = cljs.core.seq.call(null,protocols);
var chunk__26606_26624 = null;
var count__26607_26625 = (0);
var i__26608_26626 = (0);
while(true){
if((i__26608_26626 < count__26607_26625)){
var protocol_26627 = cljs.core._nth.call(null,chunk__26606_26624,i__26608_26626);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26627)].join('')),"}");


var G__26628 = seq__26605_26623;
var G__26629 = chunk__26606_26624;
var G__26630 = count__26607_26625;
var G__26631 = (i__26608_26626 + (1));
seq__26605_26623 = G__26628;
chunk__26606_26624 = G__26629;
count__26607_26625 = G__26630;
i__26608_26626 = G__26631;
continue;
} else {
var temp__5457__auto___26632 = cljs.core.seq.call(null,seq__26605_26623);
if(temp__5457__auto___26632){
var seq__26605_26633__$1 = temp__5457__auto___26632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26605_26633__$1)){
var c__4319__auto___26634 = cljs.core.chunk_first.call(null,seq__26605_26633__$1);
var G__26635 = cljs.core.chunk_rest.call(null,seq__26605_26633__$1);
var G__26636 = c__4319__auto___26634;
var G__26637 = cljs.core.count.call(null,c__4319__auto___26634);
var G__26638 = (0);
seq__26605_26623 = G__26635;
chunk__26606_26624 = G__26636;
count__26607_26625 = G__26637;
i__26608_26626 = G__26638;
continue;
} else {
var protocol_26639 = cljs.core.first.call(null,seq__26605_26633__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26639)].join('')),"}");


var G__26640 = cljs.core.next.call(null,seq__26605_26633__$1);
var G__26641 = null;
var G__26642 = (0);
var G__26643 = (0);
seq__26605_26623 = G__26640;
chunk__26606_26624 = G__26641;
count__26607_26625 = G__26642;
i__26608_26626 = G__26643;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__26609_26644 = cljs.core.seq.call(null,fields__$1);
var chunk__26610_26645 = null;
var count__26611_26646 = (0);
var i__26612_26647 = (0);
while(true){
if((i__26612_26647 < count__26611_26646)){
var fld_26648 = cljs.core._nth.call(null,chunk__26610_26645,i__26612_26647);
cljs.compiler.emitln.call(null,"this.",fld_26648," = ",fld_26648,";");


var G__26649 = seq__26609_26644;
var G__26650 = chunk__26610_26645;
var G__26651 = count__26611_26646;
var G__26652 = (i__26612_26647 + (1));
seq__26609_26644 = G__26649;
chunk__26610_26645 = G__26650;
count__26611_26646 = G__26651;
i__26612_26647 = G__26652;
continue;
} else {
var temp__5457__auto___26653 = cljs.core.seq.call(null,seq__26609_26644);
if(temp__5457__auto___26653){
var seq__26609_26654__$1 = temp__5457__auto___26653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26609_26654__$1)){
var c__4319__auto___26655 = cljs.core.chunk_first.call(null,seq__26609_26654__$1);
var G__26656 = cljs.core.chunk_rest.call(null,seq__26609_26654__$1);
var G__26657 = c__4319__auto___26655;
var G__26658 = cljs.core.count.call(null,c__4319__auto___26655);
var G__26659 = (0);
seq__26609_26644 = G__26656;
chunk__26610_26645 = G__26657;
count__26611_26646 = G__26658;
i__26612_26647 = G__26659;
continue;
} else {
var fld_26660 = cljs.core.first.call(null,seq__26609_26654__$1);
cljs.compiler.emitln.call(null,"this.",fld_26660," = ",fld_26660,";");


var G__26661 = cljs.core.next.call(null,seq__26609_26654__$1);
var G__26662 = null;
var G__26663 = (0);
var G__26664 = (0);
seq__26609_26644 = G__26661;
chunk__26610_26645 = G__26662;
count__26611_26646 = G__26663;
i__26612_26647 = G__26664;
continue;
}
} else {
}
}
break;
}

var seq__26613_26665 = cljs.core.seq.call(null,pmasks);
var chunk__26614_26666 = null;
var count__26615_26667 = (0);
var i__26616_26668 = (0);
while(true){
if((i__26616_26668 < count__26615_26667)){
var vec__26617_26669 = cljs.core._nth.call(null,chunk__26614_26666,i__26616_26668);
var pno_26670 = cljs.core.nth.call(null,vec__26617_26669,(0),null);
var pmask_26671 = cljs.core.nth.call(null,vec__26617_26669,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_26670,"$ = ",pmask_26671,";");


var G__26672 = seq__26613_26665;
var G__26673 = chunk__26614_26666;
var G__26674 = count__26615_26667;
var G__26675 = (i__26616_26668 + (1));
seq__26613_26665 = G__26672;
chunk__26614_26666 = G__26673;
count__26615_26667 = G__26674;
i__26616_26668 = G__26675;
continue;
} else {
var temp__5457__auto___26676 = cljs.core.seq.call(null,seq__26613_26665);
if(temp__5457__auto___26676){
var seq__26613_26677__$1 = temp__5457__auto___26676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26613_26677__$1)){
var c__4319__auto___26678 = cljs.core.chunk_first.call(null,seq__26613_26677__$1);
var G__26679 = cljs.core.chunk_rest.call(null,seq__26613_26677__$1);
var G__26680 = c__4319__auto___26678;
var G__26681 = cljs.core.count.call(null,c__4319__auto___26678);
var G__26682 = (0);
seq__26613_26665 = G__26679;
chunk__26614_26666 = G__26680;
count__26615_26667 = G__26681;
i__26616_26668 = G__26682;
continue;
} else {
var vec__26620_26683 = cljs.core.first.call(null,seq__26613_26677__$1);
var pno_26684 = cljs.core.nth.call(null,vec__26620_26683,(0),null);
var pmask_26685 = cljs.core.nth.call(null,vec__26620_26683,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_26684,"$ = ",pmask_26685,";");


var G__26686 = cljs.core.next.call(null,seq__26613_26677__$1);
var G__26687 = null;
var G__26688 = (0);
var G__26689 = (0);
seq__26613_26665 = G__26686;
chunk__26614_26666 = G__26687;
count__26615_26667 = G__26688;
i__26616_26668 = G__26689;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__26690){
var map__26691 = p__26690;
var map__26691__$1 = ((((!((map__26691 == null)))?(((((map__26691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26691):map__26691);
var t = cljs.core.get.call(null,map__26691__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__26691__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__26691__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__26691__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__26691__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__26693_26711 = cljs.core.seq.call(null,protocols);
var chunk__26694_26712 = null;
var count__26695_26713 = (0);
var i__26696_26714 = (0);
while(true){
if((i__26696_26714 < count__26695_26713)){
var protocol_26715 = cljs.core._nth.call(null,chunk__26694_26712,i__26696_26714);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26715)].join('')),"}");


var G__26716 = seq__26693_26711;
var G__26717 = chunk__26694_26712;
var G__26718 = count__26695_26713;
var G__26719 = (i__26696_26714 + (1));
seq__26693_26711 = G__26716;
chunk__26694_26712 = G__26717;
count__26695_26713 = G__26718;
i__26696_26714 = G__26719;
continue;
} else {
var temp__5457__auto___26720 = cljs.core.seq.call(null,seq__26693_26711);
if(temp__5457__auto___26720){
var seq__26693_26721__$1 = temp__5457__auto___26720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26693_26721__$1)){
var c__4319__auto___26722 = cljs.core.chunk_first.call(null,seq__26693_26721__$1);
var G__26723 = cljs.core.chunk_rest.call(null,seq__26693_26721__$1);
var G__26724 = c__4319__auto___26722;
var G__26725 = cljs.core.count.call(null,c__4319__auto___26722);
var G__26726 = (0);
seq__26693_26711 = G__26723;
chunk__26694_26712 = G__26724;
count__26695_26713 = G__26725;
i__26696_26714 = G__26726;
continue;
} else {
var protocol_26727 = cljs.core.first.call(null,seq__26693_26721__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_26727)].join('')),"}");


var G__26728 = cljs.core.next.call(null,seq__26693_26721__$1);
var G__26729 = null;
var G__26730 = (0);
var G__26731 = (0);
seq__26693_26711 = G__26728;
chunk__26694_26712 = G__26729;
count__26695_26713 = G__26730;
i__26696_26714 = G__26731;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__26697_26732 = cljs.core.seq.call(null,fields__$1);
var chunk__26698_26733 = null;
var count__26699_26734 = (0);
var i__26700_26735 = (0);
while(true){
if((i__26700_26735 < count__26699_26734)){
var fld_26736 = cljs.core._nth.call(null,chunk__26698_26733,i__26700_26735);
cljs.compiler.emitln.call(null,"this.",fld_26736," = ",fld_26736,";");


var G__26737 = seq__26697_26732;
var G__26738 = chunk__26698_26733;
var G__26739 = count__26699_26734;
var G__26740 = (i__26700_26735 + (1));
seq__26697_26732 = G__26737;
chunk__26698_26733 = G__26738;
count__26699_26734 = G__26739;
i__26700_26735 = G__26740;
continue;
} else {
var temp__5457__auto___26741 = cljs.core.seq.call(null,seq__26697_26732);
if(temp__5457__auto___26741){
var seq__26697_26742__$1 = temp__5457__auto___26741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26697_26742__$1)){
var c__4319__auto___26743 = cljs.core.chunk_first.call(null,seq__26697_26742__$1);
var G__26744 = cljs.core.chunk_rest.call(null,seq__26697_26742__$1);
var G__26745 = c__4319__auto___26743;
var G__26746 = cljs.core.count.call(null,c__4319__auto___26743);
var G__26747 = (0);
seq__26697_26732 = G__26744;
chunk__26698_26733 = G__26745;
count__26699_26734 = G__26746;
i__26700_26735 = G__26747;
continue;
} else {
var fld_26748 = cljs.core.first.call(null,seq__26697_26742__$1);
cljs.compiler.emitln.call(null,"this.",fld_26748," = ",fld_26748,";");


var G__26749 = cljs.core.next.call(null,seq__26697_26742__$1);
var G__26750 = null;
var G__26751 = (0);
var G__26752 = (0);
seq__26697_26732 = G__26749;
chunk__26698_26733 = G__26750;
count__26699_26734 = G__26751;
i__26700_26735 = G__26752;
continue;
}
} else {
}
}
break;
}

var seq__26701_26753 = cljs.core.seq.call(null,pmasks);
var chunk__26702_26754 = null;
var count__26703_26755 = (0);
var i__26704_26756 = (0);
while(true){
if((i__26704_26756 < count__26703_26755)){
var vec__26705_26757 = cljs.core._nth.call(null,chunk__26702_26754,i__26704_26756);
var pno_26758 = cljs.core.nth.call(null,vec__26705_26757,(0),null);
var pmask_26759 = cljs.core.nth.call(null,vec__26705_26757,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_26758,"$ = ",pmask_26759,";");


var G__26760 = seq__26701_26753;
var G__26761 = chunk__26702_26754;
var G__26762 = count__26703_26755;
var G__26763 = (i__26704_26756 + (1));
seq__26701_26753 = G__26760;
chunk__26702_26754 = G__26761;
count__26703_26755 = G__26762;
i__26704_26756 = G__26763;
continue;
} else {
var temp__5457__auto___26764 = cljs.core.seq.call(null,seq__26701_26753);
if(temp__5457__auto___26764){
var seq__26701_26765__$1 = temp__5457__auto___26764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26701_26765__$1)){
var c__4319__auto___26766 = cljs.core.chunk_first.call(null,seq__26701_26765__$1);
var G__26767 = cljs.core.chunk_rest.call(null,seq__26701_26765__$1);
var G__26768 = c__4319__auto___26766;
var G__26769 = cljs.core.count.call(null,c__4319__auto___26766);
var G__26770 = (0);
seq__26701_26753 = G__26767;
chunk__26702_26754 = G__26768;
count__26703_26755 = G__26769;
i__26704_26756 = G__26770;
continue;
} else {
var vec__26708_26771 = cljs.core.first.call(null,seq__26701_26765__$1);
var pno_26772 = cljs.core.nth.call(null,vec__26708_26771,(0),null);
var pmask_26773 = cljs.core.nth.call(null,vec__26708_26771,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_26772,"$ = ",pmask_26773,";");


var G__26774 = cljs.core.next.call(null,seq__26701_26765__$1);
var G__26775 = null;
var G__26776 = (0);
var G__26777 = (0);
seq__26701_26753 = G__26774;
chunk__26702_26754 = G__26775;
count__26703_26755 = G__26776;
i__26704_26756 = G__26777;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__26778){
var map__26779 = p__26778;
var map__26779__$1 = ((((!((map__26779 == null)))?(((((map__26779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26779):map__26779);
var target = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__26781){
var map__26782 = p__26781;
var map__26782__$1 = ((((!((map__26782 == null)))?(((((map__26782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26782):map__26782);
var op = cljs.core.get.call(null,map__26782__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__26782__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__26782__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__26782__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__26782__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__25694__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25694__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__26787 = cljs.core.seq.call(null,table);
var chunk__26788 = null;
var count__26789 = (0);
var i__26790 = (0);
while(true){
if((i__26790 < count__26789)){
var vec__26791 = cljs.core._nth.call(null,chunk__26788,i__26790);
var sym = cljs.core.nth.call(null,vec__26791,(0),null);
var value = cljs.core.nth.call(null,vec__26791,(1),null);
var ns_26797 = cljs.core.namespace.call(null,sym);
var name_26798 = cljs.core.name.call(null,sym);
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


var G__26799 = seq__26787;
var G__26800 = chunk__26788;
var G__26801 = count__26789;
var G__26802 = (i__26790 + (1));
seq__26787 = G__26799;
chunk__26788 = G__26800;
count__26789 = G__26801;
i__26790 = G__26802;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26787);
if(temp__5457__auto__){
var seq__26787__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26787__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26787__$1);
var G__26803 = cljs.core.chunk_rest.call(null,seq__26787__$1);
var G__26804 = c__4319__auto__;
var G__26805 = cljs.core.count.call(null,c__4319__auto__);
var G__26806 = (0);
seq__26787 = G__26803;
chunk__26788 = G__26804;
count__26789 = G__26805;
i__26790 = G__26806;
continue;
} else {
var vec__26794 = cljs.core.first.call(null,seq__26787__$1);
var sym = cljs.core.nth.call(null,vec__26794,(0),null);
var value = cljs.core.nth.call(null,vec__26794,(1),null);
var ns_26807 = cljs.core.namespace.call(null,sym);
var name_26808 = cljs.core.name.call(null,sym);
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


var G__26809 = cljs.core.next.call(null,seq__26787__$1);
var G__26810 = null;
var G__26811 = (0);
var G__26812 = (0);
seq__26787 = G__26809;
chunk__26788 = G__26810;
count__26789 = G__26811;
i__26790 = G__26812;
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
var G__26814 = arguments.length;
switch (G__26814) {
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
var k_26819 = cljs.core.first.call(null,ks);
var vec__26815_26820 = cljs.core.conj.call(null,prefix,k_26819);
var top_26821 = cljs.core.nth.call(null,vec__26815_26820,(0),null);
var prefix_SINGLEQUOTE__26822 = vec__26815_26820;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_26819)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__26822) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_26821)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_26821))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__26822)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_26821);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__26822)),";");
}
} else {
}

var m_26823 = cljs.core.get.call(null,externs,k_26819);
if(cljs.core.empty_QMARK_.call(null,m_26823)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__26822,m_26823,top_level,known_externs);
}

var G__26824 = cljs.core.next.call(null,ks);
ks = G__26824;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1521297424203
