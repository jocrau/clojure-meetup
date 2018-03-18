// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__29772){
var vec__29773 = p__29772;
var i = cljs.core.nth.call(null,vec__29773,(0),null);
var v = cljs.core.nth.call(null,vec__29773,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__29776 = seg;
var gcol = cljs.core.nth.call(null,vec__29776,(0),null);
var source = cljs.core.nth.call(null,vec__29776,(1),null);
var line = cljs.core.nth.call(null,vec__29776,(2),null);
var col = cljs.core.nth.call(null,vec__29776,(3),null);
var name = cljs.core.nth.call(null,vec__29776,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__29779 = seg;
var gcol = cljs.core.nth.call(null,vec__29779,(0),null);
var source = cljs.core.nth.call(null,vec__29779,(1),null);
var line = cljs.core.nth.call(null,vec__29779,(2),null);
var col = cljs.core.nth.call(null,vec__29779,(3),null);
var name = cljs.core.nth.call(null,vec__29779,(4),null);
var vec__29782 = relseg;
var rgcol = cljs.core.nth.call(null,vec__29782,(0),null);
var rsource = cljs.core.nth.call(null,vec__29782,(1),null);
var rline = cljs.core.nth.call(null,vec__29782,(2),null);
var rcol = cljs.core.nth.call(null,vec__29782,(3),null);
var rname = cljs.core.nth.call(null,vec__29782,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8916__auto__ = source;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8916__auto__ = line;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8916__auto__ = col;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8916__auto__ = name;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__29785 = segmap;
var map__29785__$1 = ((((!((map__29785 == null)))?((((map__29785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29785):map__29785);
var gcol = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__29785,map__29785__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__29785,map__29785__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__29785,map__29785__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__29785,map__29785__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__29785,map__29785__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__29785,map__29785__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__29788 = arguments.length;
switch (G__29788) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__29789 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__29793 = cljs.core.next.call(null,segs__$1);
var G__29794 = nrelseg;
var G__29795 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__29793;
relseg__$1 = G__29794;
result__$1 = G__29795;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__29789,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__29789,(1),null);
var G__29796 = (gline + (1));
var G__29797 = cljs.core.next.call(null,lines__$1);
var G__29798 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__29799 = result__$1;
gline = G__29796;
lines__$1 = G__29797;
relseg = G__29798;
result = G__29799;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__29801 = segmap;
var map__29801__$1 = ((((!((map__29801 == null)))?((((map__29801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29801):map__29801);
var gcol = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__29801,map__29801__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__29801,map__29801__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__29800_SHARP_){
return cljs.core.conj.call(null,p1__29800_SHARP_,d__$1);
});})(map__29801,map__29801__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__29801,map__29801__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__29804 = arguments.length;
switch (G__29804) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__29805 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__29809 = cljs.core.next.call(null,segs__$1);
var G__29810 = nrelseg;
var G__29811 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__29809;
relseg__$1 = G__29810;
result__$1 = G__29811;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__29805,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__29805,(1),null);
var G__29812 = (gline + (1));
var G__29813 = cljs.core.next.call(null,lines__$1);
var G__29814 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__29815 = result__$1;
gline = G__29812;
lines__$1 = G__29813;
relseg = G__29814;
result = G__29815;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__29816){
var vec__29817 = p__29816;
var _ = cljs.core.nth.call(null,vec__29817,(0),null);
var source = cljs.core.nth.call(null,vec__29817,(1),null);
var line = cljs.core.nth.call(null,vec__29817,(2),null);
var col = cljs.core.nth.call(null,vec__29817,(3),null);
var name = cljs.core.nth.call(null,vec__29817,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__29820){
var vec__29821 = p__29820;
var gcol = cljs.core.nth.call(null,vec__29821,(0),null);
var sidx = cljs.core.nth.call(null,vec__29821,(1),null);
var line = cljs.core.nth.call(null,vec__29821,(2),null);
var col = cljs.core.nth.call(null,vec__29821,(3),null);
var name = cljs.core.nth.call(null,vec__29821,(4),null);
var seg = vec__29821;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__29821,gcol,sidx,line,col,name,seg,relseg){
return (function (p__29824){
var vec__29825 = p__29824;
var _ = cljs.core.nth.call(null,vec__29825,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29825,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__29825,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__29825,(3),null);
var lname = cljs.core.nth.call(null,vec__29825,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8916__auto__ = name;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__29821,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__29831 = cljs.core.seq.call(null,infos);
var chunk__29832 = null;
var count__29833 = (0);
var i__29834 = (0);
while(true){
if((i__29834 < count__29833)){
var info = cljs.core._nth.call(null,chunk__29832,i__29834);
var segv_29913 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_29914 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_29915 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_29914 > (lc_29915 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__29831,chunk__29832,count__29833,i__29834,segv_29913,gline_29914,lc_29915,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_29914 - (lc_29915 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_29913], null));
});})(seq__29831,chunk__29832,count__29833,i__29834,segv_29913,gline_29914,lc_29915,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__29831,chunk__29832,count__29833,i__29834,segv_29913,gline_29914,lc_29915,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29914], null),cljs.core.conj,segv_29913);
});})(seq__29831,chunk__29832,count__29833,i__29834,segv_29913,gline_29914,lc_29915,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__29916 = seq__29831;
var G__29917 = chunk__29832;
var G__29918 = count__29833;
var G__29919 = (i__29834 + (1));
seq__29831 = G__29916;
chunk__29832 = G__29917;
count__29833 = G__29918;
i__29834 = G__29919;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29831);
if(temp__5457__auto__){
var seq__29831__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29831__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__29831__$1);
var G__29920 = cljs.core.chunk_rest.call(null,seq__29831__$1);
var G__29921 = c__9847__auto__;
var G__29922 = cljs.core.count.call(null,c__9847__auto__);
var G__29923 = (0);
seq__29831 = G__29920;
chunk__29832 = G__29921;
count__29833 = G__29922;
i__29834 = G__29923;
continue;
} else {
var info = cljs.core.first.call(null,seq__29831__$1);
var segv_29924 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_29925 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_29926 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_29925 > (lc_29926 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__29831,chunk__29832,count__29833,i__29834,segv_29924,gline_29925,lc_29926,info,seq__29831__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_29925 - (lc_29926 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_29924], null));
});})(seq__29831,chunk__29832,count__29833,i__29834,segv_29924,gline_29925,lc_29926,info,seq__29831__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__29831,chunk__29832,count__29833,i__29834,segv_29924,gline_29925,lc_29926,info,seq__29831__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29925], null),cljs.core.conj,segv_29924);
});})(seq__29831,chunk__29832,count__29833,i__29834,segv_29924,gline_29925,lc_29926,info,seq__29831__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__29927 = cljs.core.next.call(null,seq__29831__$1);
var G__29928 = null;
var G__29929 = (0);
var G__29930 = (0);
seq__29831 = G__29927;
chunk__29832 = G__29928;
count__29833 = G__29929;
i__29834 = G__29930;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__29835_29931 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__29836_29932 = null;
var count__29837_29933 = (0);
var i__29838_29934 = (0);
while(true){
if((i__29838_29934 < count__29837_29933)){
var vec__29839_29935 = cljs.core._nth.call(null,chunk__29836_29932,i__29838_29934);
var source_idx_29936 = cljs.core.nth.call(null,vec__29839_29935,(0),null);
var vec__29842_29937 = cljs.core.nth.call(null,vec__29839_29935,(1),null);
var __29938 = cljs.core.nth.call(null,vec__29842_29937,(0),null);
var lines_29939__$1 = cljs.core.nth.call(null,vec__29842_29937,(1),null);
var seq__29845_29940 = cljs.core.seq.call(null,lines_29939__$1);
var chunk__29846_29941 = null;
var count__29847_29942 = (0);
var i__29848_29943 = (0);
while(true){
if((i__29848_29943 < count__29847_29942)){
var vec__29849_29944 = cljs.core._nth.call(null,chunk__29846_29941,i__29848_29943);
var line_29945 = cljs.core.nth.call(null,vec__29849_29944,(0),null);
var cols_29946 = cljs.core.nth.call(null,vec__29849_29944,(1),null);
var seq__29852_29947 = cljs.core.seq.call(null,cols_29946);
var chunk__29853_29948 = null;
var count__29854_29949 = (0);
var i__29855_29950 = (0);
while(true){
if((i__29855_29950 < count__29854_29949)){
var vec__29856_29951 = cljs.core._nth.call(null,chunk__29853_29948,i__29855_29950);
var col_29952 = cljs.core.nth.call(null,vec__29856_29951,(0),null);
var infos_29953 = cljs.core.nth.call(null,vec__29856_29951,(1),null);
encode_cols.call(null,infos_29953,source_idx_29936,line_29945,col_29952);

var G__29954 = seq__29852_29947;
var G__29955 = chunk__29853_29948;
var G__29956 = count__29854_29949;
var G__29957 = (i__29855_29950 + (1));
seq__29852_29947 = G__29954;
chunk__29853_29948 = G__29955;
count__29854_29949 = G__29956;
i__29855_29950 = G__29957;
continue;
} else {
var temp__5457__auto___29958 = cljs.core.seq.call(null,seq__29852_29947);
if(temp__5457__auto___29958){
var seq__29852_29959__$1 = temp__5457__auto___29958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29852_29959__$1)){
var c__9847__auto___29960 = cljs.core.chunk_first.call(null,seq__29852_29959__$1);
var G__29961 = cljs.core.chunk_rest.call(null,seq__29852_29959__$1);
var G__29962 = c__9847__auto___29960;
var G__29963 = cljs.core.count.call(null,c__9847__auto___29960);
var G__29964 = (0);
seq__29852_29947 = G__29961;
chunk__29853_29948 = G__29962;
count__29854_29949 = G__29963;
i__29855_29950 = G__29964;
continue;
} else {
var vec__29859_29965 = cljs.core.first.call(null,seq__29852_29959__$1);
var col_29966 = cljs.core.nth.call(null,vec__29859_29965,(0),null);
var infos_29967 = cljs.core.nth.call(null,vec__29859_29965,(1),null);
encode_cols.call(null,infos_29967,source_idx_29936,line_29945,col_29966);

var G__29968 = cljs.core.next.call(null,seq__29852_29959__$1);
var G__29969 = null;
var G__29970 = (0);
var G__29971 = (0);
seq__29852_29947 = G__29968;
chunk__29853_29948 = G__29969;
count__29854_29949 = G__29970;
i__29855_29950 = G__29971;
continue;
}
} else {
}
}
break;
}

var G__29972 = seq__29845_29940;
var G__29973 = chunk__29846_29941;
var G__29974 = count__29847_29942;
var G__29975 = (i__29848_29943 + (1));
seq__29845_29940 = G__29972;
chunk__29846_29941 = G__29973;
count__29847_29942 = G__29974;
i__29848_29943 = G__29975;
continue;
} else {
var temp__5457__auto___29976 = cljs.core.seq.call(null,seq__29845_29940);
if(temp__5457__auto___29976){
var seq__29845_29977__$1 = temp__5457__auto___29976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29845_29977__$1)){
var c__9847__auto___29978 = cljs.core.chunk_first.call(null,seq__29845_29977__$1);
var G__29979 = cljs.core.chunk_rest.call(null,seq__29845_29977__$1);
var G__29980 = c__9847__auto___29978;
var G__29981 = cljs.core.count.call(null,c__9847__auto___29978);
var G__29982 = (0);
seq__29845_29940 = G__29979;
chunk__29846_29941 = G__29980;
count__29847_29942 = G__29981;
i__29848_29943 = G__29982;
continue;
} else {
var vec__29862_29983 = cljs.core.first.call(null,seq__29845_29977__$1);
var line_29984 = cljs.core.nth.call(null,vec__29862_29983,(0),null);
var cols_29985 = cljs.core.nth.call(null,vec__29862_29983,(1),null);
var seq__29865_29986 = cljs.core.seq.call(null,cols_29985);
var chunk__29866_29987 = null;
var count__29867_29988 = (0);
var i__29868_29989 = (0);
while(true){
if((i__29868_29989 < count__29867_29988)){
var vec__29869_29990 = cljs.core._nth.call(null,chunk__29866_29987,i__29868_29989);
var col_29991 = cljs.core.nth.call(null,vec__29869_29990,(0),null);
var infos_29992 = cljs.core.nth.call(null,vec__29869_29990,(1),null);
encode_cols.call(null,infos_29992,source_idx_29936,line_29984,col_29991);

var G__29993 = seq__29865_29986;
var G__29994 = chunk__29866_29987;
var G__29995 = count__29867_29988;
var G__29996 = (i__29868_29989 + (1));
seq__29865_29986 = G__29993;
chunk__29866_29987 = G__29994;
count__29867_29988 = G__29995;
i__29868_29989 = G__29996;
continue;
} else {
var temp__5457__auto___29997__$1 = cljs.core.seq.call(null,seq__29865_29986);
if(temp__5457__auto___29997__$1){
var seq__29865_29998__$1 = temp__5457__auto___29997__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29865_29998__$1)){
var c__9847__auto___29999 = cljs.core.chunk_first.call(null,seq__29865_29998__$1);
var G__30000 = cljs.core.chunk_rest.call(null,seq__29865_29998__$1);
var G__30001 = c__9847__auto___29999;
var G__30002 = cljs.core.count.call(null,c__9847__auto___29999);
var G__30003 = (0);
seq__29865_29986 = G__30000;
chunk__29866_29987 = G__30001;
count__29867_29988 = G__30002;
i__29868_29989 = G__30003;
continue;
} else {
var vec__29872_30004 = cljs.core.first.call(null,seq__29865_29998__$1);
var col_30005 = cljs.core.nth.call(null,vec__29872_30004,(0),null);
var infos_30006 = cljs.core.nth.call(null,vec__29872_30004,(1),null);
encode_cols.call(null,infos_30006,source_idx_29936,line_29984,col_30005);

var G__30007 = cljs.core.next.call(null,seq__29865_29998__$1);
var G__30008 = null;
var G__30009 = (0);
var G__30010 = (0);
seq__29865_29986 = G__30007;
chunk__29866_29987 = G__30008;
count__29867_29988 = G__30009;
i__29868_29989 = G__30010;
continue;
}
} else {
}
}
break;
}

var G__30011 = cljs.core.next.call(null,seq__29845_29977__$1);
var G__30012 = null;
var G__30013 = (0);
var G__30014 = (0);
seq__29845_29940 = G__30011;
chunk__29846_29941 = G__30012;
count__29847_29942 = G__30013;
i__29848_29943 = G__30014;
continue;
}
} else {
}
}
break;
}

var G__30015 = seq__29835_29931;
var G__30016 = chunk__29836_29932;
var G__30017 = count__29837_29933;
var G__30018 = (i__29838_29934 + (1));
seq__29835_29931 = G__30015;
chunk__29836_29932 = G__30016;
count__29837_29933 = G__30017;
i__29838_29934 = G__30018;
continue;
} else {
var temp__5457__auto___30019 = cljs.core.seq.call(null,seq__29835_29931);
if(temp__5457__auto___30019){
var seq__29835_30020__$1 = temp__5457__auto___30019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29835_30020__$1)){
var c__9847__auto___30021 = cljs.core.chunk_first.call(null,seq__29835_30020__$1);
var G__30022 = cljs.core.chunk_rest.call(null,seq__29835_30020__$1);
var G__30023 = c__9847__auto___30021;
var G__30024 = cljs.core.count.call(null,c__9847__auto___30021);
var G__30025 = (0);
seq__29835_29931 = G__30022;
chunk__29836_29932 = G__30023;
count__29837_29933 = G__30024;
i__29838_29934 = G__30025;
continue;
} else {
var vec__29875_30026 = cljs.core.first.call(null,seq__29835_30020__$1);
var source_idx_30027 = cljs.core.nth.call(null,vec__29875_30026,(0),null);
var vec__29878_30028 = cljs.core.nth.call(null,vec__29875_30026,(1),null);
var __30029 = cljs.core.nth.call(null,vec__29878_30028,(0),null);
var lines_30030__$1 = cljs.core.nth.call(null,vec__29878_30028,(1),null);
var seq__29881_30031 = cljs.core.seq.call(null,lines_30030__$1);
var chunk__29882_30032 = null;
var count__29883_30033 = (0);
var i__29884_30034 = (0);
while(true){
if((i__29884_30034 < count__29883_30033)){
var vec__29885_30035 = cljs.core._nth.call(null,chunk__29882_30032,i__29884_30034);
var line_30036 = cljs.core.nth.call(null,vec__29885_30035,(0),null);
var cols_30037 = cljs.core.nth.call(null,vec__29885_30035,(1),null);
var seq__29888_30038 = cljs.core.seq.call(null,cols_30037);
var chunk__29889_30039 = null;
var count__29890_30040 = (0);
var i__29891_30041 = (0);
while(true){
if((i__29891_30041 < count__29890_30040)){
var vec__29892_30042 = cljs.core._nth.call(null,chunk__29889_30039,i__29891_30041);
var col_30043 = cljs.core.nth.call(null,vec__29892_30042,(0),null);
var infos_30044 = cljs.core.nth.call(null,vec__29892_30042,(1),null);
encode_cols.call(null,infos_30044,source_idx_30027,line_30036,col_30043);

var G__30045 = seq__29888_30038;
var G__30046 = chunk__29889_30039;
var G__30047 = count__29890_30040;
var G__30048 = (i__29891_30041 + (1));
seq__29888_30038 = G__30045;
chunk__29889_30039 = G__30046;
count__29890_30040 = G__30047;
i__29891_30041 = G__30048;
continue;
} else {
var temp__5457__auto___30049__$1 = cljs.core.seq.call(null,seq__29888_30038);
if(temp__5457__auto___30049__$1){
var seq__29888_30050__$1 = temp__5457__auto___30049__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29888_30050__$1)){
var c__9847__auto___30051 = cljs.core.chunk_first.call(null,seq__29888_30050__$1);
var G__30052 = cljs.core.chunk_rest.call(null,seq__29888_30050__$1);
var G__30053 = c__9847__auto___30051;
var G__30054 = cljs.core.count.call(null,c__9847__auto___30051);
var G__30055 = (0);
seq__29888_30038 = G__30052;
chunk__29889_30039 = G__30053;
count__29890_30040 = G__30054;
i__29891_30041 = G__30055;
continue;
} else {
var vec__29895_30056 = cljs.core.first.call(null,seq__29888_30050__$1);
var col_30057 = cljs.core.nth.call(null,vec__29895_30056,(0),null);
var infos_30058 = cljs.core.nth.call(null,vec__29895_30056,(1),null);
encode_cols.call(null,infos_30058,source_idx_30027,line_30036,col_30057);

var G__30059 = cljs.core.next.call(null,seq__29888_30050__$1);
var G__30060 = null;
var G__30061 = (0);
var G__30062 = (0);
seq__29888_30038 = G__30059;
chunk__29889_30039 = G__30060;
count__29890_30040 = G__30061;
i__29891_30041 = G__30062;
continue;
}
} else {
}
}
break;
}

var G__30063 = seq__29881_30031;
var G__30064 = chunk__29882_30032;
var G__30065 = count__29883_30033;
var G__30066 = (i__29884_30034 + (1));
seq__29881_30031 = G__30063;
chunk__29882_30032 = G__30064;
count__29883_30033 = G__30065;
i__29884_30034 = G__30066;
continue;
} else {
var temp__5457__auto___30067__$1 = cljs.core.seq.call(null,seq__29881_30031);
if(temp__5457__auto___30067__$1){
var seq__29881_30068__$1 = temp__5457__auto___30067__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29881_30068__$1)){
var c__9847__auto___30069 = cljs.core.chunk_first.call(null,seq__29881_30068__$1);
var G__30070 = cljs.core.chunk_rest.call(null,seq__29881_30068__$1);
var G__30071 = c__9847__auto___30069;
var G__30072 = cljs.core.count.call(null,c__9847__auto___30069);
var G__30073 = (0);
seq__29881_30031 = G__30070;
chunk__29882_30032 = G__30071;
count__29883_30033 = G__30072;
i__29884_30034 = G__30073;
continue;
} else {
var vec__29898_30074 = cljs.core.first.call(null,seq__29881_30068__$1);
var line_30075 = cljs.core.nth.call(null,vec__29898_30074,(0),null);
var cols_30076 = cljs.core.nth.call(null,vec__29898_30074,(1),null);
var seq__29901_30077 = cljs.core.seq.call(null,cols_30076);
var chunk__29902_30078 = null;
var count__29903_30079 = (0);
var i__29904_30080 = (0);
while(true){
if((i__29904_30080 < count__29903_30079)){
var vec__29905_30081 = cljs.core._nth.call(null,chunk__29902_30078,i__29904_30080);
var col_30082 = cljs.core.nth.call(null,vec__29905_30081,(0),null);
var infos_30083 = cljs.core.nth.call(null,vec__29905_30081,(1),null);
encode_cols.call(null,infos_30083,source_idx_30027,line_30075,col_30082);

var G__30084 = seq__29901_30077;
var G__30085 = chunk__29902_30078;
var G__30086 = count__29903_30079;
var G__30087 = (i__29904_30080 + (1));
seq__29901_30077 = G__30084;
chunk__29902_30078 = G__30085;
count__29903_30079 = G__30086;
i__29904_30080 = G__30087;
continue;
} else {
var temp__5457__auto___30088__$2 = cljs.core.seq.call(null,seq__29901_30077);
if(temp__5457__auto___30088__$2){
var seq__29901_30089__$1 = temp__5457__auto___30088__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29901_30089__$1)){
var c__9847__auto___30090 = cljs.core.chunk_first.call(null,seq__29901_30089__$1);
var G__30091 = cljs.core.chunk_rest.call(null,seq__29901_30089__$1);
var G__30092 = c__9847__auto___30090;
var G__30093 = cljs.core.count.call(null,c__9847__auto___30090);
var G__30094 = (0);
seq__29901_30077 = G__30091;
chunk__29902_30078 = G__30092;
count__29903_30079 = G__30093;
i__29904_30080 = G__30094;
continue;
} else {
var vec__29908_30095 = cljs.core.first.call(null,seq__29901_30089__$1);
var col_30096 = cljs.core.nth.call(null,vec__29908_30095,(0),null);
var infos_30097 = cljs.core.nth.call(null,vec__29908_30095,(1),null);
encode_cols.call(null,infos_30097,source_idx_30027,line_30075,col_30096);

var G__30098 = cljs.core.next.call(null,seq__29901_30089__$1);
var G__30099 = null;
var G__30100 = (0);
var G__30101 = (0);
seq__29901_30077 = G__30098;
chunk__29902_30078 = G__30099;
count__29903_30079 = G__30100;
i__29904_30080 = G__30101;
continue;
}
} else {
}
}
break;
}

var G__30102 = cljs.core.next.call(null,seq__29881_30068__$1);
var G__30103 = null;
var G__30104 = (0);
var G__30105 = (0);
seq__29881_30031 = G__30102;
chunk__29882_30032 = G__30103;
count__29883_30033 = G__30104;
i__29884_30034 = G__30105;
continue;
}
} else {
}
}
break;
}

var G__30106 = cljs.core.next.call(null,seq__29835_30020__$1);
var G__30107 = null;
var G__30108 = (0);
var G__30109 = (0);
seq__29835_29931 = G__30106;
chunk__29836_29932 = G__30107;
count__29837_29933 = G__30108;
i__29838_29934 = G__30109;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__29911 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29828_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29828_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29829_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__29829_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29830_SHARP_){
return clojure.string.join.call(null,",",p1__29830_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__29912 = G__29911;
goog.object.set(G__29912,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__29912;
} else {
return G__29911;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__30110 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__30110,(0),null);
var col_map = cljs.core.nth.call(null,vec__30110,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__30113 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__30113,(0),null);
var infos = cljs.core.nth.call(null,vec__30113,(1),null);
var G__30119 = cljs.core.next.call(null,col_map_seq);
var G__30120 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__30113,col,infos,vec__30110,line,col_map){
return (function (v,p__30116){
var map__30117 = p__30116;
var map__30117__$1 = ((((!((map__30117 == null)))?((((map__30117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30117):map__30117);
var gline = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__30113,col,infos,vec__30110,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__30119;
new_cols = G__30120;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__30121 = cljs.core.next.call(null,line_map_seq);
var G__30122 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__30121;
new_lines = G__30122;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__30123_30185 = cljs.core.seq.call(null,reverse_map);
var chunk__30124_30186 = null;
var count__30125_30187 = (0);
var i__30126_30188 = (0);
while(true){
if((i__30126_30188 < count__30125_30187)){
var vec__30127_30189 = cljs.core._nth.call(null,chunk__30124_30186,i__30126_30188);
var line_30190 = cljs.core.nth.call(null,vec__30127_30189,(0),null);
var columns_30191 = cljs.core.nth.call(null,vec__30127_30189,(1),null);
var seq__30130_30192 = cljs.core.seq.call(null,columns_30191);
var chunk__30131_30193 = null;
var count__30132_30194 = (0);
var i__30133_30195 = (0);
while(true){
if((i__30133_30195 < count__30132_30194)){
var vec__30134_30196 = cljs.core._nth.call(null,chunk__30131_30193,i__30133_30195);
var column_30197 = cljs.core.nth.call(null,vec__30134_30196,(0),null);
var column_info_30198 = cljs.core.nth.call(null,vec__30134_30196,(1),null);
var seq__30137_30199 = cljs.core.seq.call(null,column_info_30198);
var chunk__30138_30200 = null;
var count__30139_30201 = (0);
var i__30140_30202 = (0);
while(true){
if((i__30140_30202 < count__30139_30201)){
var map__30141_30203 = cljs.core._nth.call(null,chunk__30138_30200,i__30140_30202);
var map__30141_30204__$1 = ((((!((map__30141_30203 == null)))?((((map__30141_30203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30141_30203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30141_30203):map__30141_30203);
var gline_30205 = cljs.core.get.call(null,map__30141_30204__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30206 = cljs.core.get.call(null,map__30141_30204__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30207 = cljs.core.get.call(null,map__30141_30204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30205], null),cljs.core.fnil.call(null,((function (seq__30137_30199,chunk__30138_30200,count__30139_30201,i__30140_30202,seq__30130_30192,chunk__30131_30193,count__30132_30194,i__30133_30195,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30141_30203,map__30141_30204__$1,gline_30205,gcol_30206,name_30207,vec__30134_30196,column_30197,column_info_30198,vec__30127_30189,line_30190,columns_30191,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30206], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30190,new cljs.core.Keyword(null,"col","col",-1959363084),column_30197,new cljs.core.Keyword(null,"name","name",1843675177),name_30207], null));
});})(seq__30137_30199,chunk__30138_30200,count__30139_30201,i__30140_30202,seq__30130_30192,chunk__30131_30193,count__30132_30194,i__30133_30195,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30141_30203,map__30141_30204__$1,gline_30205,gcol_30206,name_30207,vec__30134_30196,column_30197,column_info_30198,vec__30127_30189,line_30190,columns_30191,inverted))
,cljs.core.sorted_map.call(null)));

var G__30208 = seq__30137_30199;
var G__30209 = chunk__30138_30200;
var G__30210 = count__30139_30201;
var G__30211 = (i__30140_30202 + (1));
seq__30137_30199 = G__30208;
chunk__30138_30200 = G__30209;
count__30139_30201 = G__30210;
i__30140_30202 = G__30211;
continue;
} else {
var temp__5457__auto___30212 = cljs.core.seq.call(null,seq__30137_30199);
if(temp__5457__auto___30212){
var seq__30137_30213__$1 = temp__5457__auto___30212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30137_30213__$1)){
var c__9847__auto___30214 = cljs.core.chunk_first.call(null,seq__30137_30213__$1);
var G__30215 = cljs.core.chunk_rest.call(null,seq__30137_30213__$1);
var G__30216 = c__9847__auto___30214;
var G__30217 = cljs.core.count.call(null,c__9847__auto___30214);
var G__30218 = (0);
seq__30137_30199 = G__30215;
chunk__30138_30200 = G__30216;
count__30139_30201 = G__30217;
i__30140_30202 = G__30218;
continue;
} else {
var map__30143_30219 = cljs.core.first.call(null,seq__30137_30213__$1);
var map__30143_30220__$1 = ((((!((map__30143_30219 == null)))?((((map__30143_30219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30143_30219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30143_30219):map__30143_30219);
var gline_30221 = cljs.core.get.call(null,map__30143_30220__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30222 = cljs.core.get.call(null,map__30143_30220__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30223 = cljs.core.get.call(null,map__30143_30220__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30221], null),cljs.core.fnil.call(null,((function (seq__30137_30199,chunk__30138_30200,count__30139_30201,i__30140_30202,seq__30130_30192,chunk__30131_30193,count__30132_30194,i__30133_30195,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30143_30219,map__30143_30220__$1,gline_30221,gcol_30222,name_30223,seq__30137_30213__$1,temp__5457__auto___30212,vec__30134_30196,column_30197,column_info_30198,vec__30127_30189,line_30190,columns_30191,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30222], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30190,new cljs.core.Keyword(null,"col","col",-1959363084),column_30197,new cljs.core.Keyword(null,"name","name",1843675177),name_30223], null));
});})(seq__30137_30199,chunk__30138_30200,count__30139_30201,i__30140_30202,seq__30130_30192,chunk__30131_30193,count__30132_30194,i__30133_30195,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30143_30219,map__30143_30220__$1,gline_30221,gcol_30222,name_30223,seq__30137_30213__$1,temp__5457__auto___30212,vec__30134_30196,column_30197,column_info_30198,vec__30127_30189,line_30190,columns_30191,inverted))
,cljs.core.sorted_map.call(null)));

var G__30224 = cljs.core.next.call(null,seq__30137_30213__$1);
var G__30225 = null;
var G__30226 = (0);
var G__30227 = (0);
seq__30137_30199 = G__30224;
chunk__30138_30200 = G__30225;
count__30139_30201 = G__30226;
i__30140_30202 = G__30227;
continue;
}
} else {
}
}
break;
}

var G__30228 = seq__30130_30192;
var G__30229 = chunk__30131_30193;
var G__30230 = count__30132_30194;
var G__30231 = (i__30133_30195 + (1));
seq__30130_30192 = G__30228;
chunk__30131_30193 = G__30229;
count__30132_30194 = G__30230;
i__30133_30195 = G__30231;
continue;
} else {
var temp__5457__auto___30232 = cljs.core.seq.call(null,seq__30130_30192);
if(temp__5457__auto___30232){
var seq__30130_30233__$1 = temp__5457__auto___30232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30130_30233__$1)){
var c__9847__auto___30234 = cljs.core.chunk_first.call(null,seq__30130_30233__$1);
var G__30235 = cljs.core.chunk_rest.call(null,seq__30130_30233__$1);
var G__30236 = c__9847__auto___30234;
var G__30237 = cljs.core.count.call(null,c__9847__auto___30234);
var G__30238 = (0);
seq__30130_30192 = G__30235;
chunk__30131_30193 = G__30236;
count__30132_30194 = G__30237;
i__30133_30195 = G__30238;
continue;
} else {
var vec__30145_30239 = cljs.core.first.call(null,seq__30130_30233__$1);
var column_30240 = cljs.core.nth.call(null,vec__30145_30239,(0),null);
var column_info_30241 = cljs.core.nth.call(null,vec__30145_30239,(1),null);
var seq__30148_30242 = cljs.core.seq.call(null,column_info_30241);
var chunk__30149_30243 = null;
var count__30150_30244 = (0);
var i__30151_30245 = (0);
while(true){
if((i__30151_30245 < count__30150_30244)){
var map__30152_30246 = cljs.core._nth.call(null,chunk__30149_30243,i__30151_30245);
var map__30152_30247__$1 = ((((!((map__30152_30246 == null)))?((((map__30152_30246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30152_30246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30152_30246):map__30152_30246);
var gline_30248 = cljs.core.get.call(null,map__30152_30247__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30249 = cljs.core.get.call(null,map__30152_30247__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30250 = cljs.core.get.call(null,map__30152_30247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30248], null),cljs.core.fnil.call(null,((function (seq__30148_30242,chunk__30149_30243,count__30150_30244,i__30151_30245,seq__30130_30192,chunk__30131_30193,count__30132_30194,i__30133_30195,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30152_30246,map__30152_30247__$1,gline_30248,gcol_30249,name_30250,vec__30145_30239,column_30240,column_info_30241,seq__30130_30233__$1,temp__5457__auto___30232,vec__30127_30189,line_30190,columns_30191,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30249], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30190,new cljs.core.Keyword(null,"col","col",-1959363084),column_30240,new cljs.core.Keyword(null,"name","name",1843675177),name_30250], null));
});})(seq__30148_30242,chunk__30149_30243,count__30150_30244,i__30151_30245,seq__30130_30192,chunk__30131_30193,count__30132_30194,i__30133_30195,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30152_30246,map__30152_30247__$1,gline_30248,gcol_30249,name_30250,vec__30145_30239,column_30240,column_info_30241,seq__30130_30233__$1,temp__5457__auto___30232,vec__30127_30189,line_30190,columns_30191,inverted))
,cljs.core.sorted_map.call(null)));

var G__30251 = seq__30148_30242;
var G__30252 = chunk__30149_30243;
var G__30253 = count__30150_30244;
var G__30254 = (i__30151_30245 + (1));
seq__30148_30242 = G__30251;
chunk__30149_30243 = G__30252;
count__30150_30244 = G__30253;
i__30151_30245 = G__30254;
continue;
} else {
var temp__5457__auto___30255__$1 = cljs.core.seq.call(null,seq__30148_30242);
if(temp__5457__auto___30255__$1){
var seq__30148_30256__$1 = temp__5457__auto___30255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30148_30256__$1)){
var c__9847__auto___30257 = cljs.core.chunk_first.call(null,seq__30148_30256__$1);
var G__30258 = cljs.core.chunk_rest.call(null,seq__30148_30256__$1);
var G__30259 = c__9847__auto___30257;
var G__30260 = cljs.core.count.call(null,c__9847__auto___30257);
var G__30261 = (0);
seq__30148_30242 = G__30258;
chunk__30149_30243 = G__30259;
count__30150_30244 = G__30260;
i__30151_30245 = G__30261;
continue;
} else {
var map__30154_30262 = cljs.core.first.call(null,seq__30148_30256__$1);
var map__30154_30263__$1 = ((((!((map__30154_30262 == null)))?((((map__30154_30262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30154_30262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30154_30262):map__30154_30262);
var gline_30264 = cljs.core.get.call(null,map__30154_30263__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30265 = cljs.core.get.call(null,map__30154_30263__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30266 = cljs.core.get.call(null,map__30154_30263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30264], null),cljs.core.fnil.call(null,((function (seq__30148_30242,chunk__30149_30243,count__30150_30244,i__30151_30245,seq__30130_30192,chunk__30131_30193,count__30132_30194,i__30133_30195,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30154_30262,map__30154_30263__$1,gline_30264,gcol_30265,name_30266,seq__30148_30256__$1,temp__5457__auto___30255__$1,vec__30145_30239,column_30240,column_info_30241,seq__30130_30233__$1,temp__5457__auto___30232,vec__30127_30189,line_30190,columns_30191,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30265], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30190,new cljs.core.Keyword(null,"col","col",-1959363084),column_30240,new cljs.core.Keyword(null,"name","name",1843675177),name_30266], null));
});})(seq__30148_30242,chunk__30149_30243,count__30150_30244,i__30151_30245,seq__30130_30192,chunk__30131_30193,count__30132_30194,i__30133_30195,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30154_30262,map__30154_30263__$1,gline_30264,gcol_30265,name_30266,seq__30148_30256__$1,temp__5457__auto___30255__$1,vec__30145_30239,column_30240,column_info_30241,seq__30130_30233__$1,temp__5457__auto___30232,vec__30127_30189,line_30190,columns_30191,inverted))
,cljs.core.sorted_map.call(null)));

var G__30267 = cljs.core.next.call(null,seq__30148_30256__$1);
var G__30268 = null;
var G__30269 = (0);
var G__30270 = (0);
seq__30148_30242 = G__30267;
chunk__30149_30243 = G__30268;
count__30150_30244 = G__30269;
i__30151_30245 = G__30270;
continue;
}
} else {
}
}
break;
}

var G__30271 = cljs.core.next.call(null,seq__30130_30233__$1);
var G__30272 = null;
var G__30273 = (0);
var G__30274 = (0);
seq__30130_30192 = G__30271;
chunk__30131_30193 = G__30272;
count__30132_30194 = G__30273;
i__30133_30195 = G__30274;
continue;
}
} else {
}
}
break;
}

var G__30275 = seq__30123_30185;
var G__30276 = chunk__30124_30186;
var G__30277 = count__30125_30187;
var G__30278 = (i__30126_30188 + (1));
seq__30123_30185 = G__30275;
chunk__30124_30186 = G__30276;
count__30125_30187 = G__30277;
i__30126_30188 = G__30278;
continue;
} else {
var temp__5457__auto___30279 = cljs.core.seq.call(null,seq__30123_30185);
if(temp__5457__auto___30279){
var seq__30123_30280__$1 = temp__5457__auto___30279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30123_30280__$1)){
var c__9847__auto___30281 = cljs.core.chunk_first.call(null,seq__30123_30280__$1);
var G__30282 = cljs.core.chunk_rest.call(null,seq__30123_30280__$1);
var G__30283 = c__9847__auto___30281;
var G__30284 = cljs.core.count.call(null,c__9847__auto___30281);
var G__30285 = (0);
seq__30123_30185 = G__30282;
chunk__30124_30186 = G__30283;
count__30125_30187 = G__30284;
i__30126_30188 = G__30285;
continue;
} else {
var vec__30156_30286 = cljs.core.first.call(null,seq__30123_30280__$1);
var line_30287 = cljs.core.nth.call(null,vec__30156_30286,(0),null);
var columns_30288 = cljs.core.nth.call(null,vec__30156_30286,(1),null);
var seq__30159_30289 = cljs.core.seq.call(null,columns_30288);
var chunk__30160_30290 = null;
var count__30161_30291 = (0);
var i__30162_30292 = (0);
while(true){
if((i__30162_30292 < count__30161_30291)){
var vec__30163_30293 = cljs.core._nth.call(null,chunk__30160_30290,i__30162_30292);
var column_30294 = cljs.core.nth.call(null,vec__30163_30293,(0),null);
var column_info_30295 = cljs.core.nth.call(null,vec__30163_30293,(1),null);
var seq__30166_30296 = cljs.core.seq.call(null,column_info_30295);
var chunk__30167_30297 = null;
var count__30168_30298 = (0);
var i__30169_30299 = (0);
while(true){
if((i__30169_30299 < count__30168_30298)){
var map__30170_30300 = cljs.core._nth.call(null,chunk__30167_30297,i__30169_30299);
var map__30170_30301__$1 = ((((!((map__30170_30300 == null)))?((((map__30170_30300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30170_30300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30170_30300):map__30170_30300);
var gline_30302 = cljs.core.get.call(null,map__30170_30301__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30303 = cljs.core.get.call(null,map__30170_30301__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30304 = cljs.core.get.call(null,map__30170_30301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30302], null),cljs.core.fnil.call(null,((function (seq__30166_30296,chunk__30167_30297,count__30168_30298,i__30169_30299,seq__30159_30289,chunk__30160_30290,count__30161_30291,i__30162_30292,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30170_30300,map__30170_30301__$1,gline_30302,gcol_30303,name_30304,vec__30163_30293,column_30294,column_info_30295,vec__30156_30286,line_30287,columns_30288,seq__30123_30280__$1,temp__5457__auto___30279,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30303], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30287,new cljs.core.Keyword(null,"col","col",-1959363084),column_30294,new cljs.core.Keyword(null,"name","name",1843675177),name_30304], null));
});})(seq__30166_30296,chunk__30167_30297,count__30168_30298,i__30169_30299,seq__30159_30289,chunk__30160_30290,count__30161_30291,i__30162_30292,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30170_30300,map__30170_30301__$1,gline_30302,gcol_30303,name_30304,vec__30163_30293,column_30294,column_info_30295,vec__30156_30286,line_30287,columns_30288,seq__30123_30280__$1,temp__5457__auto___30279,inverted))
,cljs.core.sorted_map.call(null)));

var G__30305 = seq__30166_30296;
var G__30306 = chunk__30167_30297;
var G__30307 = count__30168_30298;
var G__30308 = (i__30169_30299 + (1));
seq__30166_30296 = G__30305;
chunk__30167_30297 = G__30306;
count__30168_30298 = G__30307;
i__30169_30299 = G__30308;
continue;
} else {
var temp__5457__auto___30309__$1 = cljs.core.seq.call(null,seq__30166_30296);
if(temp__5457__auto___30309__$1){
var seq__30166_30310__$1 = temp__5457__auto___30309__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30166_30310__$1)){
var c__9847__auto___30311 = cljs.core.chunk_first.call(null,seq__30166_30310__$1);
var G__30312 = cljs.core.chunk_rest.call(null,seq__30166_30310__$1);
var G__30313 = c__9847__auto___30311;
var G__30314 = cljs.core.count.call(null,c__9847__auto___30311);
var G__30315 = (0);
seq__30166_30296 = G__30312;
chunk__30167_30297 = G__30313;
count__30168_30298 = G__30314;
i__30169_30299 = G__30315;
continue;
} else {
var map__30172_30316 = cljs.core.first.call(null,seq__30166_30310__$1);
var map__30172_30317__$1 = ((((!((map__30172_30316 == null)))?((((map__30172_30316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30172_30316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30172_30316):map__30172_30316);
var gline_30318 = cljs.core.get.call(null,map__30172_30317__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30319 = cljs.core.get.call(null,map__30172_30317__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30320 = cljs.core.get.call(null,map__30172_30317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30318], null),cljs.core.fnil.call(null,((function (seq__30166_30296,chunk__30167_30297,count__30168_30298,i__30169_30299,seq__30159_30289,chunk__30160_30290,count__30161_30291,i__30162_30292,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30172_30316,map__30172_30317__$1,gline_30318,gcol_30319,name_30320,seq__30166_30310__$1,temp__5457__auto___30309__$1,vec__30163_30293,column_30294,column_info_30295,vec__30156_30286,line_30287,columns_30288,seq__30123_30280__$1,temp__5457__auto___30279,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30319], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30287,new cljs.core.Keyword(null,"col","col",-1959363084),column_30294,new cljs.core.Keyword(null,"name","name",1843675177),name_30320], null));
});})(seq__30166_30296,chunk__30167_30297,count__30168_30298,i__30169_30299,seq__30159_30289,chunk__30160_30290,count__30161_30291,i__30162_30292,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30172_30316,map__30172_30317__$1,gline_30318,gcol_30319,name_30320,seq__30166_30310__$1,temp__5457__auto___30309__$1,vec__30163_30293,column_30294,column_info_30295,vec__30156_30286,line_30287,columns_30288,seq__30123_30280__$1,temp__5457__auto___30279,inverted))
,cljs.core.sorted_map.call(null)));

var G__30321 = cljs.core.next.call(null,seq__30166_30310__$1);
var G__30322 = null;
var G__30323 = (0);
var G__30324 = (0);
seq__30166_30296 = G__30321;
chunk__30167_30297 = G__30322;
count__30168_30298 = G__30323;
i__30169_30299 = G__30324;
continue;
}
} else {
}
}
break;
}

var G__30325 = seq__30159_30289;
var G__30326 = chunk__30160_30290;
var G__30327 = count__30161_30291;
var G__30328 = (i__30162_30292 + (1));
seq__30159_30289 = G__30325;
chunk__30160_30290 = G__30326;
count__30161_30291 = G__30327;
i__30162_30292 = G__30328;
continue;
} else {
var temp__5457__auto___30329__$1 = cljs.core.seq.call(null,seq__30159_30289);
if(temp__5457__auto___30329__$1){
var seq__30159_30330__$1 = temp__5457__auto___30329__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30159_30330__$1)){
var c__9847__auto___30331 = cljs.core.chunk_first.call(null,seq__30159_30330__$1);
var G__30332 = cljs.core.chunk_rest.call(null,seq__30159_30330__$1);
var G__30333 = c__9847__auto___30331;
var G__30334 = cljs.core.count.call(null,c__9847__auto___30331);
var G__30335 = (0);
seq__30159_30289 = G__30332;
chunk__30160_30290 = G__30333;
count__30161_30291 = G__30334;
i__30162_30292 = G__30335;
continue;
} else {
var vec__30174_30336 = cljs.core.first.call(null,seq__30159_30330__$1);
var column_30337 = cljs.core.nth.call(null,vec__30174_30336,(0),null);
var column_info_30338 = cljs.core.nth.call(null,vec__30174_30336,(1),null);
var seq__30177_30339 = cljs.core.seq.call(null,column_info_30338);
var chunk__30178_30340 = null;
var count__30179_30341 = (0);
var i__30180_30342 = (0);
while(true){
if((i__30180_30342 < count__30179_30341)){
var map__30181_30343 = cljs.core._nth.call(null,chunk__30178_30340,i__30180_30342);
var map__30181_30344__$1 = ((((!((map__30181_30343 == null)))?((((map__30181_30343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30181_30343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30181_30343):map__30181_30343);
var gline_30345 = cljs.core.get.call(null,map__30181_30344__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30346 = cljs.core.get.call(null,map__30181_30344__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30347 = cljs.core.get.call(null,map__30181_30344__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30345], null),cljs.core.fnil.call(null,((function (seq__30177_30339,chunk__30178_30340,count__30179_30341,i__30180_30342,seq__30159_30289,chunk__30160_30290,count__30161_30291,i__30162_30292,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30181_30343,map__30181_30344__$1,gline_30345,gcol_30346,name_30347,vec__30174_30336,column_30337,column_info_30338,seq__30159_30330__$1,temp__5457__auto___30329__$1,vec__30156_30286,line_30287,columns_30288,seq__30123_30280__$1,temp__5457__auto___30279,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30346], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30287,new cljs.core.Keyword(null,"col","col",-1959363084),column_30337,new cljs.core.Keyword(null,"name","name",1843675177),name_30347], null));
});})(seq__30177_30339,chunk__30178_30340,count__30179_30341,i__30180_30342,seq__30159_30289,chunk__30160_30290,count__30161_30291,i__30162_30292,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30181_30343,map__30181_30344__$1,gline_30345,gcol_30346,name_30347,vec__30174_30336,column_30337,column_info_30338,seq__30159_30330__$1,temp__5457__auto___30329__$1,vec__30156_30286,line_30287,columns_30288,seq__30123_30280__$1,temp__5457__auto___30279,inverted))
,cljs.core.sorted_map.call(null)));

var G__30348 = seq__30177_30339;
var G__30349 = chunk__30178_30340;
var G__30350 = count__30179_30341;
var G__30351 = (i__30180_30342 + (1));
seq__30177_30339 = G__30348;
chunk__30178_30340 = G__30349;
count__30179_30341 = G__30350;
i__30180_30342 = G__30351;
continue;
} else {
var temp__5457__auto___30352__$2 = cljs.core.seq.call(null,seq__30177_30339);
if(temp__5457__auto___30352__$2){
var seq__30177_30353__$1 = temp__5457__auto___30352__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30177_30353__$1)){
var c__9847__auto___30354 = cljs.core.chunk_first.call(null,seq__30177_30353__$1);
var G__30355 = cljs.core.chunk_rest.call(null,seq__30177_30353__$1);
var G__30356 = c__9847__auto___30354;
var G__30357 = cljs.core.count.call(null,c__9847__auto___30354);
var G__30358 = (0);
seq__30177_30339 = G__30355;
chunk__30178_30340 = G__30356;
count__30179_30341 = G__30357;
i__30180_30342 = G__30358;
continue;
} else {
var map__30183_30359 = cljs.core.first.call(null,seq__30177_30353__$1);
var map__30183_30360__$1 = ((((!((map__30183_30359 == null)))?((((map__30183_30359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30183_30359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30183_30359):map__30183_30359);
var gline_30361 = cljs.core.get.call(null,map__30183_30360__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30362 = cljs.core.get.call(null,map__30183_30360__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30363 = cljs.core.get.call(null,map__30183_30360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30361], null),cljs.core.fnil.call(null,((function (seq__30177_30339,chunk__30178_30340,count__30179_30341,i__30180_30342,seq__30159_30289,chunk__30160_30290,count__30161_30291,i__30162_30292,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30183_30359,map__30183_30360__$1,gline_30361,gcol_30362,name_30363,seq__30177_30353__$1,temp__5457__auto___30352__$2,vec__30174_30336,column_30337,column_info_30338,seq__30159_30330__$1,temp__5457__auto___30329__$1,vec__30156_30286,line_30287,columns_30288,seq__30123_30280__$1,temp__5457__auto___30279,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30362], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30287,new cljs.core.Keyword(null,"col","col",-1959363084),column_30337,new cljs.core.Keyword(null,"name","name",1843675177),name_30363], null));
});})(seq__30177_30339,chunk__30178_30340,count__30179_30341,i__30180_30342,seq__30159_30289,chunk__30160_30290,count__30161_30291,i__30162_30292,seq__30123_30185,chunk__30124_30186,count__30125_30187,i__30126_30188,map__30183_30359,map__30183_30360__$1,gline_30361,gcol_30362,name_30363,seq__30177_30353__$1,temp__5457__auto___30352__$2,vec__30174_30336,column_30337,column_info_30338,seq__30159_30330__$1,temp__5457__auto___30329__$1,vec__30156_30286,line_30287,columns_30288,seq__30123_30280__$1,temp__5457__auto___30279,inverted))
,cljs.core.sorted_map.call(null)));

var G__30364 = cljs.core.next.call(null,seq__30177_30353__$1);
var G__30365 = null;
var G__30366 = (0);
var G__30367 = (0);
seq__30177_30339 = G__30364;
chunk__30178_30340 = G__30365;
count__30179_30341 = G__30366;
i__30180_30342 = G__30367;
continue;
}
} else {
}
}
break;
}

var G__30368 = cljs.core.next.call(null,seq__30159_30330__$1);
var G__30369 = null;
var G__30370 = (0);
var G__30371 = (0);
seq__30159_30289 = G__30368;
chunk__30160_30290 = G__30369;
count__30161_30291 = G__30370;
i__30162_30292 = G__30371;
continue;
}
} else {
}
}
break;
}

var G__30372 = cljs.core.next.call(null,seq__30123_30280__$1);
var G__30373 = null;
var G__30374 = (0);
var G__30375 = (0);
seq__30123_30185 = G__30372;
chunk__30124_30186 = G__30373;
count__30125_30187 = G__30374;
i__30126_30188 = G__30375;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
