// Compiled by ClojureScript 1.10.145 {}
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
return cljs.core.reduce.call(null,(function (m,p__24474){
var vec__24475 = p__24474;
var i = cljs.core.nth.call(null,vec__24475,(0),null);
var v = cljs.core.nth.call(null,vec__24475,(1),null);
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
var vec__24478 = seg;
var gcol = cljs.core.nth.call(null,vec__24478,(0),null);
var source = cljs.core.nth.call(null,vec__24478,(1),null);
var line = cljs.core.nth.call(null,vec__24478,(2),null);
var col = cljs.core.nth.call(null,vec__24478,(3),null);
var name = cljs.core.nth.call(null,vec__24478,(4),null);
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
var vec__24481 = seg;
var gcol = cljs.core.nth.call(null,vec__24481,(0),null);
var source = cljs.core.nth.call(null,vec__24481,(1),null);
var line = cljs.core.nth.call(null,vec__24481,(2),null);
var col = cljs.core.nth.call(null,vec__24481,(3),null);
var name = cljs.core.nth.call(null,vec__24481,(4),null);
var vec__24484 = relseg;
var rgcol = cljs.core.nth.call(null,vec__24484,(0),null);
var rsource = cljs.core.nth.call(null,vec__24484,(1),null);
var rline = cljs.core.nth.call(null,vec__24484,(2),null);
var rcol = cljs.core.nth.call(null,vec__24484,(3),null);
var rname = cljs.core.nth.call(null,vec__24484,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3922__auto__ = source;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3922__auto__ = col;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var map__24487 = segmap;
var map__24487__$1 = ((((!((map__24487 == null)))?(((((map__24487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24487):map__24487);
var gcol = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__24487,map__24487__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__24487,map__24487__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__24487,map__24487__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__24487,map__24487__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__24487,map__24487__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__24487,map__24487__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__24490 = arguments.length;
switch (G__24490) {
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
var vec__24491 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__24495 = cljs.core.next.call(null,segs__$1);
var G__24496 = nrelseg;
var G__24497 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__24495;
relseg__$1 = G__24496;
result__$1 = G__24497;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__24491,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__24491,(1),null);
var G__24498 = (gline + (1));
var G__24499 = cljs.core.next.call(null,lines__$1);
var G__24500 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__24501 = result__$1;
gline = G__24498;
lines__$1 = G__24499;
relseg = G__24500;
result = G__24501;
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
var map__24503 = segmap;
var map__24503__$1 = ((((!((map__24503 == null)))?(((((map__24503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24503):map__24503);
var gcol = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__24503,map__24503__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__24503,map__24503__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__24502_SHARP_){
return cljs.core.conj.call(null,p1__24502_SHARP_,d__$1);
});})(map__24503,map__24503__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__24503,map__24503__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__24506 = arguments.length;
switch (G__24506) {
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
var vec__24507 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__24511 = cljs.core.next.call(null,segs__$1);
var G__24512 = nrelseg;
var G__24513 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__24511;
relseg__$1 = G__24512;
result__$1 = G__24513;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__24507,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__24507,(1),null);
var G__24514 = (gline + (1));
var G__24515 = cljs.core.next.call(null,lines__$1);
var G__24516 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__24517 = result__$1;
gline = G__24514;
lines__$1 = G__24515;
relseg = G__24516;
result = G__24517;
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
return (function (p__24518){
var vec__24519 = p__24518;
var _ = cljs.core.nth.call(null,vec__24519,(0),null);
var source = cljs.core.nth.call(null,vec__24519,(1),null);
var line = cljs.core.nth.call(null,vec__24519,(2),null);
var col = cljs.core.nth.call(null,vec__24519,(3),null);
var name = cljs.core.nth.call(null,vec__24519,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__24522){
var vec__24523 = p__24522;
var gcol = cljs.core.nth.call(null,vec__24523,(0),null);
var sidx = cljs.core.nth.call(null,vec__24523,(1),null);
var line = cljs.core.nth.call(null,vec__24523,(2),null);
var col = cljs.core.nth.call(null,vec__24523,(3),null);
var name = cljs.core.nth.call(null,vec__24523,(4),null);
var seg = vec__24523;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__24523,gcol,sidx,line,col,name,seg,relseg){
return (function (p__24526){
var vec__24527 = p__24526;
var _ = cljs.core.nth.call(null,vec__24527,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__24527,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__24527,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__24527,(3),null);
var lname = cljs.core.nth.call(null,vec__24527,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__24523,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var seq__24533 = cljs.core.seq.call(null,infos);
var chunk__24534 = null;
var count__24535 = (0);
var i__24536 = (0);
while(true){
if((i__24536 < count__24535)){
var info = cljs.core._nth.call(null,chunk__24534,i__24536);
var segv_24615 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_24616 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_24617 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_24616 > (lc_24617 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__24533,chunk__24534,count__24535,i__24536,segv_24615,gline_24616,lc_24617,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_24616 - (lc_24617 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_24615], null));
});})(seq__24533,chunk__24534,count__24535,i__24536,segv_24615,gline_24616,lc_24617,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__24533,chunk__24534,count__24535,i__24536,segv_24615,gline_24616,lc_24617,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24616], null),cljs.core.conj,segv_24615);
});})(seq__24533,chunk__24534,count__24535,i__24536,segv_24615,gline_24616,lc_24617,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__24618 = seq__24533;
var G__24619 = chunk__24534;
var G__24620 = count__24535;
var G__24621 = (i__24536 + (1));
seq__24533 = G__24618;
chunk__24534 = G__24619;
count__24535 = G__24620;
i__24536 = G__24621;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24533);
if(temp__5457__auto__){
var seq__24533__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24533__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24533__$1);
var G__24622 = cljs.core.chunk_rest.call(null,seq__24533__$1);
var G__24623 = c__4319__auto__;
var G__24624 = cljs.core.count.call(null,c__4319__auto__);
var G__24625 = (0);
seq__24533 = G__24622;
chunk__24534 = G__24623;
count__24535 = G__24624;
i__24536 = G__24625;
continue;
} else {
var info = cljs.core.first.call(null,seq__24533__$1);
var segv_24626 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_24627 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_24628 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_24627 > (lc_24628 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__24533,chunk__24534,count__24535,i__24536,segv_24626,gline_24627,lc_24628,info,seq__24533__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_24627 - (lc_24628 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_24626], null));
});})(seq__24533,chunk__24534,count__24535,i__24536,segv_24626,gline_24627,lc_24628,info,seq__24533__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__24533,chunk__24534,count__24535,i__24536,segv_24626,gline_24627,lc_24628,info,seq__24533__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24627], null),cljs.core.conj,segv_24626);
});})(seq__24533,chunk__24534,count__24535,i__24536,segv_24626,gline_24627,lc_24628,info,seq__24533__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__24629 = cljs.core.next.call(null,seq__24533__$1);
var G__24630 = null;
var G__24631 = (0);
var G__24632 = (0);
seq__24533 = G__24629;
chunk__24534 = G__24630;
count__24535 = G__24631;
i__24536 = G__24632;
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
var seq__24537_24633 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__24538_24634 = null;
var count__24539_24635 = (0);
var i__24540_24636 = (0);
while(true){
if((i__24540_24636 < count__24539_24635)){
var vec__24541_24637 = cljs.core._nth.call(null,chunk__24538_24634,i__24540_24636);
var source_idx_24638 = cljs.core.nth.call(null,vec__24541_24637,(0),null);
var vec__24544_24639 = cljs.core.nth.call(null,vec__24541_24637,(1),null);
var __24640 = cljs.core.nth.call(null,vec__24544_24639,(0),null);
var lines_24641__$1 = cljs.core.nth.call(null,vec__24544_24639,(1),null);
var seq__24547_24642 = cljs.core.seq.call(null,lines_24641__$1);
var chunk__24548_24643 = null;
var count__24549_24644 = (0);
var i__24550_24645 = (0);
while(true){
if((i__24550_24645 < count__24549_24644)){
var vec__24551_24646 = cljs.core._nth.call(null,chunk__24548_24643,i__24550_24645);
var line_24647 = cljs.core.nth.call(null,vec__24551_24646,(0),null);
var cols_24648 = cljs.core.nth.call(null,vec__24551_24646,(1),null);
var seq__24554_24649 = cljs.core.seq.call(null,cols_24648);
var chunk__24555_24650 = null;
var count__24556_24651 = (0);
var i__24557_24652 = (0);
while(true){
if((i__24557_24652 < count__24556_24651)){
var vec__24558_24653 = cljs.core._nth.call(null,chunk__24555_24650,i__24557_24652);
var col_24654 = cljs.core.nth.call(null,vec__24558_24653,(0),null);
var infos_24655 = cljs.core.nth.call(null,vec__24558_24653,(1),null);
encode_cols.call(null,infos_24655,source_idx_24638,line_24647,col_24654);


var G__24656 = seq__24554_24649;
var G__24657 = chunk__24555_24650;
var G__24658 = count__24556_24651;
var G__24659 = (i__24557_24652 + (1));
seq__24554_24649 = G__24656;
chunk__24555_24650 = G__24657;
count__24556_24651 = G__24658;
i__24557_24652 = G__24659;
continue;
} else {
var temp__5457__auto___24660 = cljs.core.seq.call(null,seq__24554_24649);
if(temp__5457__auto___24660){
var seq__24554_24661__$1 = temp__5457__auto___24660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24554_24661__$1)){
var c__4319__auto___24662 = cljs.core.chunk_first.call(null,seq__24554_24661__$1);
var G__24663 = cljs.core.chunk_rest.call(null,seq__24554_24661__$1);
var G__24664 = c__4319__auto___24662;
var G__24665 = cljs.core.count.call(null,c__4319__auto___24662);
var G__24666 = (0);
seq__24554_24649 = G__24663;
chunk__24555_24650 = G__24664;
count__24556_24651 = G__24665;
i__24557_24652 = G__24666;
continue;
} else {
var vec__24561_24667 = cljs.core.first.call(null,seq__24554_24661__$1);
var col_24668 = cljs.core.nth.call(null,vec__24561_24667,(0),null);
var infos_24669 = cljs.core.nth.call(null,vec__24561_24667,(1),null);
encode_cols.call(null,infos_24669,source_idx_24638,line_24647,col_24668);


var G__24670 = cljs.core.next.call(null,seq__24554_24661__$1);
var G__24671 = null;
var G__24672 = (0);
var G__24673 = (0);
seq__24554_24649 = G__24670;
chunk__24555_24650 = G__24671;
count__24556_24651 = G__24672;
i__24557_24652 = G__24673;
continue;
}
} else {
}
}
break;
}


var G__24674 = seq__24547_24642;
var G__24675 = chunk__24548_24643;
var G__24676 = count__24549_24644;
var G__24677 = (i__24550_24645 + (1));
seq__24547_24642 = G__24674;
chunk__24548_24643 = G__24675;
count__24549_24644 = G__24676;
i__24550_24645 = G__24677;
continue;
} else {
var temp__5457__auto___24678 = cljs.core.seq.call(null,seq__24547_24642);
if(temp__5457__auto___24678){
var seq__24547_24679__$1 = temp__5457__auto___24678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24547_24679__$1)){
var c__4319__auto___24680 = cljs.core.chunk_first.call(null,seq__24547_24679__$1);
var G__24681 = cljs.core.chunk_rest.call(null,seq__24547_24679__$1);
var G__24682 = c__4319__auto___24680;
var G__24683 = cljs.core.count.call(null,c__4319__auto___24680);
var G__24684 = (0);
seq__24547_24642 = G__24681;
chunk__24548_24643 = G__24682;
count__24549_24644 = G__24683;
i__24550_24645 = G__24684;
continue;
} else {
var vec__24564_24685 = cljs.core.first.call(null,seq__24547_24679__$1);
var line_24686 = cljs.core.nth.call(null,vec__24564_24685,(0),null);
var cols_24687 = cljs.core.nth.call(null,vec__24564_24685,(1),null);
var seq__24567_24688 = cljs.core.seq.call(null,cols_24687);
var chunk__24568_24689 = null;
var count__24569_24690 = (0);
var i__24570_24691 = (0);
while(true){
if((i__24570_24691 < count__24569_24690)){
var vec__24571_24692 = cljs.core._nth.call(null,chunk__24568_24689,i__24570_24691);
var col_24693 = cljs.core.nth.call(null,vec__24571_24692,(0),null);
var infos_24694 = cljs.core.nth.call(null,vec__24571_24692,(1),null);
encode_cols.call(null,infos_24694,source_idx_24638,line_24686,col_24693);


var G__24695 = seq__24567_24688;
var G__24696 = chunk__24568_24689;
var G__24697 = count__24569_24690;
var G__24698 = (i__24570_24691 + (1));
seq__24567_24688 = G__24695;
chunk__24568_24689 = G__24696;
count__24569_24690 = G__24697;
i__24570_24691 = G__24698;
continue;
} else {
var temp__5457__auto___24699__$1 = cljs.core.seq.call(null,seq__24567_24688);
if(temp__5457__auto___24699__$1){
var seq__24567_24700__$1 = temp__5457__auto___24699__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24567_24700__$1)){
var c__4319__auto___24701 = cljs.core.chunk_first.call(null,seq__24567_24700__$1);
var G__24702 = cljs.core.chunk_rest.call(null,seq__24567_24700__$1);
var G__24703 = c__4319__auto___24701;
var G__24704 = cljs.core.count.call(null,c__4319__auto___24701);
var G__24705 = (0);
seq__24567_24688 = G__24702;
chunk__24568_24689 = G__24703;
count__24569_24690 = G__24704;
i__24570_24691 = G__24705;
continue;
} else {
var vec__24574_24706 = cljs.core.first.call(null,seq__24567_24700__$1);
var col_24707 = cljs.core.nth.call(null,vec__24574_24706,(0),null);
var infos_24708 = cljs.core.nth.call(null,vec__24574_24706,(1),null);
encode_cols.call(null,infos_24708,source_idx_24638,line_24686,col_24707);


var G__24709 = cljs.core.next.call(null,seq__24567_24700__$1);
var G__24710 = null;
var G__24711 = (0);
var G__24712 = (0);
seq__24567_24688 = G__24709;
chunk__24568_24689 = G__24710;
count__24569_24690 = G__24711;
i__24570_24691 = G__24712;
continue;
}
} else {
}
}
break;
}


var G__24713 = cljs.core.next.call(null,seq__24547_24679__$1);
var G__24714 = null;
var G__24715 = (0);
var G__24716 = (0);
seq__24547_24642 = G__24713;
chunk__24548_24643 = G__24714;
count__24549_24644 = G__24715;
i__24550_24645 = G__24716;
continue;
}
} else {
}
}
break;
}


var G__24717 = seq__24537_24633;
var G__24718 = chunk__24538_24634;
var G__24719 = count__24539_24635;
var G__24720 = (i__24540_24636 + (1));
seq__24537_24633 = G__24717;
chunk__24538_24634 = G__24718;
count__24539_24635 = G__24719;
i__24540_24636 = G__24720;
continue;
} else {
var temp__5457__auto___24721 = cljs.core.seq.call(null,seq__24537_24633);
if(temp__5457__auto___24721){
var seq__24537_24722__$1 = temp__5457__auto___24721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24537_24722__$1)){
var c__4319__auto___24723 = cljs.core.chunk_first.call(null,seq__24537_24722__$1);
var G__24724 = cljs.core.chunk_rest.call(null,seq__24537_24722__$1);
var G__24725 = c__4319__auto___24723;
var G__24726 = cljs.core.count.call(null,c__4319__auto___24723);
var G__24727 = (0);
seq__24537_24633 = G__24724;
chunk__24538_24634 = G__24725;
count__24539_24635 = G__24726;
i__24540_24636 = G__24727;
continue;
} else {
var vec__24577_24728 = cljs.core.first.call(null,seq__24537_24722__$1);
var source_idx_24729 = cljs.core.nth.call(null,vec__24577_24728,(0),null);
var vec__24580_24730 = cljs.core.nth.call(null,vec__24577_24728,(1),null);
var __24731 = cljs.core.nth.call(null,vec__24580_24730,(0),null);
var lines_24732__$1 = cljs.core.nth.call(null,vec__24580_24730,(1),null);
var seq__24583_24733 = cljs.core.seq.call(null,lines_24732__$1);
var chunk__24584_24734 = null;
var count__24585_24735 = (0);
var i__24586_24736 = (0);
while(true){
if((i__24586_24736 < count__24585_24735)){
var vec__24587_24737 = cljs.core._nth.call(null,chunk__24584_24734,i__24586_24736);
var line_24738 = cljs.core.nth.call(null,vec__24587_24737,(0),null);
var cols_24739 = cljs.core.nth.call(null,vec__24587_24737,(1),null);
var seq__24590_24740 = cljs.core.seq.call(null,cols_24739);
var chunk__24591_24741 = null;
var count__24592_24742 = (0);
var i__24593_24743 = (0);
while(true){
if((i__24593_24743 < count__24592_24742)){
var vec__24594_24744 = cljs.core._nth.call(null,chunk__24591_24741,i__24593_24743);
var col_24745 = cljs.core.nth.call(null,vec__24594_24744,(0),null);
var infos_24746 = cljs.core.nth.call(null,vec__24594_24744,(1),null);
encode_cols.call(null,infos_24746,source_idx_24729,line_24738,col_24745);


var G__24747 = seq__24590_24740;
var G__24748 = chunk__24591_24741;
var G__24749 = count__24592_24742;
var G__24750 = (i__24593_24743 + (1));
seq__24590_24740 = G__24747;
chunk__24591_24741 = G__24748;
count__24592_24742 = G__24749;
i__24593_24743 = G__24750;
continue;
} else {
var temp__5457__auto___24751__$1 = cljs.core.seq.call(null,seq__24590_24740);
if(temp__5457__auto___24751__$1){
var seq__24590_24752__$1 = temp__5457__auto___24751__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24590_24752__$1)){
var c__4319__auto___24753 = cljs.core.chunk_first.call(null,seq__24590_24752__$1);
var G__24754 = cljs.core.chunk_rest.call(null,seq__24590_24752__$1);
var G__24755 = c__4319__auto___24753;
var G__24756 = cljs.core.count.call(null,c__4319__auto___24753);
var G__24757 = (0);
seq__24590_24740 = G__24754;
chunk__24591_24741 = G__24755;
count__24592_24742 = G__24756;
i__24593_24743 = G__24757;
continue;
} else {
var vec__24597_24758 = cljs.core.first.call(null,seq__24590_24752__$1);
var col_24759 = cljs.core.nth.call(null,vec__24597_24758,(0),null);
var infos_24760 = cljs.core.nth.call(null,vec__24597_24758,(1),null);
encode_cols.call(null,infos_24760,source_idx_24729,line_24738,col_24759);


var G__24761 = cljs.core.next.call(null,seq__24590_24752__$1);
var G__24762 = null;
var G__24763 = (0);
var G__24764 = (0);
seq__24590_24740 = G__24761;
chunk__24591_24741 = G__24762;
count__24592_24742 = G__24763;
i__24593_24743 = G__24764;
continue;
}
} else {
}
}
break;
}


var G__24765 = seq__24583_24733;
var G__24766 = chunk__24584_24734;
var G__24767 = count__24585_24735;
var G__24768 = (i__24586_24736 + (1));
seq__24583_24733 = G__24765;
chunk__24584_24734 = G__24766;
count__24585_24735 = G__24767;
i__24586_24736 = G__24768;
continue;
} else {
var temp__5457__auto___24769__$1 = cljs.core.seq.call(null,seq__24583_24733);
if(temp__5457__auto___24769__$1){
var seq__24583_24770__$1 = temp__5457__auto___24769__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24583_24770__$1)){
var c__4319__auto___24771 = cljs.core.chunk_first.call(null,seq__24583_24770__$1);
var G__24772 = cljs.core.chunk_rest.call(null,seq__24583_24770__$1);
var G__24773 = c__4319__auto___24771;
var G__24774 = cljs.core.count.call(null,c__4319__auto___24771);
var G__24775 = (0);
seq__24583_24733 = G__24772;
chunk__24584_24734 = G__24773;
count__24585_24735 = G__24774;
i__24586_24736 = G__24775;
continue;
} else {
var vec__24600_24776 = cljs.core.first.call(null,seq__24583_24770__$1);
var line_24777 = cljs.core.nth.call(null,vec__24600_24776,(0),null);
var cols_24778 = cljs.core.nth.call(null,vec__24600_24776,(1),null);
var seq__24603_24779 = cljs.core.seq.call(null,cols_24778);
var chunk__24604_24780 = null;
var count__24605_24781 = (0);
var i__24606_24782 = (0);
while(true){
if((i__24606_24782 < count__24605_24781)){
var vec__24607_24783 = cljs.core._nth.call(null,chunk__24604_24780,i__24606_24782);
var col_24784 = cljs.core.nth.call(null,vec__24607_24783,(0),null);
var infos_24785 = cljs.core.nth.call(null,vec__24607_24783,(1),null);
encode_cols.call(null,infos_24785,source_idx_24729,line_24777,col_24784);


var G__24786 = seq__24603_24779;
var G__24787 = chunk__24604_24780;
var G__24788 = count__24605_24781;
var G__24789 = (i__24606_24782 + (1));
seq__24603_24779 = G__24786;
chunk__24604_24780 = G__24787;
count__24605_24781 = G__24788;
i__24606_24782 = G__24789;
continue;
} else {
var temp__5457__auto___24790__$2 = cljs.core.seq.call(null,seq__24603_24779);
if(temp__5457__auto___24790__$2){
var seq__24603_24791__$1 = temp__5457__auto___24790__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24603_24791__$1)){
var c__4319__auto___24792 = cljs.core.chunk_first.call(null,seq__24603_24791__$1);
var G__24793 = cljs.core.chunk_rest.call(null,seq__24603_24791__$1);
var G__24794 = c__4319__auto___24792;
var G__24795 = cljs.core.count.call(null,c__4319__auto___24792);
var G__24796 = (0);
seq__24603_24779 = G__24793;
chunk__24604_24780 = G__24794;
count__24605_24781 = G__24795;
i__24606_24782 = G__24796;
continue;
} else {
var vec__24610_24797 = cljs.core.first.call(null,seq__24603_24791__$1);
var col_24798 = cljs.core.nth.call(null,vec__24610_24797,(0),null);
var infos_24799 = cljs.core.nth.call(null,vec__24610_24797,(1),null);
encode_cols.call(null,infos_24799,source_idx_24729,line_24777,col_24798);


var G__24800 = cljs.core.next.call(null,seq__24603_24791__$1);
var G__24801 = null;
var G__24802 = (0);
var G__24803 = (0);
seq__24603_24779 = G__24800;
chunk__24604_24780 = G__24801;
count__24605_24781 = G__24802;
i__24606_24782 = G__24803;
continue;
}
} else {
}
}
break;
}


var G__24804 = cljs.core.next.call(null,seq__24583_24770__$1);
var G__24805 = null;
var G__24806 = (0);
var G__24807 = (0);
seq__24583_24733 = G__24804;
chunk__24584_24734 = G__24805;
count__24585_24735 = G__24806;
i__24586_24736 = G__24807;
continue;
}
} else {
}
}
break;
}


var G__24808 = cljs.core.next.call(null,seq__24537_24722__$1);
var G__24809 = null;
var G__24810 = (0);
var G__24811 = (0);
seq__24537_24633 = G__24808;
chunk__24538_24634 = G__24809;
count__24539_24635 = G__24810;
i__24540_24636 = G__24811;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__24613 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24530_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24530_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24531_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__24531_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24532_SHARP_){
return clojure.string.join.call(null,",",p1__24532_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__24614 = G__24613;
goog.object.set(G__24614,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__24614;
} else {
return G__24613;
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
var vec__24812 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__24812,(0),null);
var col_map = cljs.core.nth.call(null,vec__24812,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__24815 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__24815,(0),null);
var infos = cljs.core.nth.call(null,vec__24815,(1),null);
var G__24821 = cljs.core.next.call(null,col_map_seq);
var G__24822 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__24815,col,infos,vec__24812,line,col_map){
return (function (v,p__24818){
var map__24819 = p__24818;
var map__24819__$1 = ((((!((map__24819 == null)))?(((((map__24819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24819):map__24819);
var gline = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__24815,col,infos,vec__24812,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__24821;
new_cols = G__24822;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__24823 = cljs.core.next.call(null,line_map_seq);
var G__24824 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__24823;
new_lines = G__24824;
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
var seq__24825_24887 = cljs.core.seq.call(null,reverse_map);
var chunk__24826_24888 = null;
var count__24827_24889 = (0);
var i__24828_24890 = (0);
while(true){
if((i__24828_24890 < count__24827_24889)){
var vec__24829_24891 = cljs.core._nth.call(null,chunk__24826_24888,i__24828_24890);
var line_24892 = cljs.core.nth.call(null,vec__24829_24891,(0),null);
var columns_24893 = cljs.core.nth.call(null,vec__24829_24891,(1),null);
var seq__24832_24894 = cljs.core.seq.call(null,columns_24893);
var chunk__24833_24895 = null;
var count__24834_24896 = (0);
var i__24835_24897 = (0);
while(true){
if((i__24835_24897 < count__24834_24896)){
var vec__24836_24898 = cljs.core._nth.call(null,chunk__24833_24895,i__24835_24897);
var column_24899 = cljs.core.nth.call(null,vec__24836_24898,(0),null);
var column_info_24900 = cljs.core.nth.call(null,vec__24836_24898,(1),null);
var seq__24839_24901 = cljs.core.seq.call(null,column_info_24900);
var chunk__24840_24902 = null;
var count__24841_24903 = (0);
var i__24842_24904 = (0);
while(true){
if((i__24842_24904 < count__24841_24903)){
var map__24843_24905 = cljs.core._nth.call(null,chunk__24840_24902,i__24842_24904);
var map__24843_24906__$1 = ((((!((map__24843_24905 == null)))?(((((map__24843_24905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24843_24905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24843_24905):map__24843_24905);
var gline_24907 = cljs.core.get.call(null,map__24843_24906__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24908 = cljs.core.get.call(null,map__24843_24906__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24909 = cljs.core.get.call(null,map__24843_24906__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24907], null),cljs.core.fnil.call(null,((function (seq__24839_24901,chunk__24840_24902,count__24841_24903,i__24842_24904,seq__24832_24894,chunk__24833_24895,count__24834_24896,i__24835_24897,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24843_24905,map__24843_24906__$1,gline_24907,gcol_24908,name_24909,vec__24836_24898,column_24899,column_info_24900,vec__24829_24891,line_24892,columns_24893,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24908], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24892,new cljs.core.Keyword(null,"col","col",-1959363084),column_24899,new cljs.core.Keyword(null,"name","name",1843675177),name_24909], null));
});})(seq__24839_24901,chunk__24840_24902,count__24841_24903,i__24842_24904,seq__24832_24894,chunk__24833_24895,count__24834_24896,i__24835_24897,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24843_24905,map__24843_24906__$1,gline_24907,gcol_24908,name_24909,vec__24836_24898,column_24899,column_info_24900,vec__24829_24891,line_24892,columns_24893,inverted))
,cljs.core.sorted_map.call(null)));


var G__24910 = seq__24839_24901;
var G__24911 = chunk__24840_24902;
var G__24912 = count__24841_24903;
var G__24913 = (i__24842_24904 + (1));
seq__24839_24901 = G__24910;
chunk__24840_24902 = G__24911;
count__24841_24903 = G__24912;
i__24842_24904 = G__24913;
continue;
} else {
var temp__5457__auto___24914 = cljs.core.seq.call(null,seq__24839_24901);
if(temp__5457__auto___24914){
var seq__24839_24915__$1 = temp__5457__auto___24914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24839_24915__$1)){
var c__4319__auto___24916 = cljs.core.chunk_first.call(null,seq__24839_24915__$1);
var G__24917 = cljs.core.chunk_rest.call(null,seq__24839_24915__$1);
var G__24918 = c__4319__auto___24916;
var G__24919 = cljs.core.count.call(null,c__4319__auto___24916);
var G__24920 = (0);
seq__24839_24901 = G__24917;
chunk__24840_24902 = G__24918;
count__24841_24903 = G__24919;
i__24842_24904 = G__24920;
continue;
} else {
var map__24845_24921 = cljs.core.first.call(null,seq__24839_24915__$1);
var map__24845_24922__$1 = ((((!((map__24845_24921 == null)))?(((((map__24845_24921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24845_24921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24845_24921):map__24845_24921);
var gline_24923 = cljs.core.get.call(null,map__24845_24922__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24924 = cljs.core.get.call(null,map__24845_24922__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24925 = cljs.core.get.call(null,map__24845_24922__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24923], null),cljs.core.fnil.call(null,((function (seq__24839_24901,chunk__24840_24902,count__24841_24903,i__24842_24904,seq__24832_24894,chunk__24833_24895,count__24834_24896,i__24835_24897,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24845_24921,map__24845_24922__$1,gline_24923,gcol_24924,name_24925,seq__24839_24915__$1,temp__5457__auto___24914,vec__24836_24898,column_24899,column_info_24900,vec__24829_24891,line_24892,columns_24893,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24924], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24892,new cljs.core.Keyword(null,"col","col",-1959363084),column_24899,new cljs.core.Keyword(null,"name","name",1843675177),name_24925], null));
});})(seq__24839_24901,chunk__24840_24902,count__24841_24903,i__24842_24904,seq__24832_24894,chunk__24833_24895,count__24834_24896,i__24835_24897,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24845_24921,map__24845_24922__$1,gline_24923,gcol_24924,name_24925,seq__24839_24915__$1,temp__5457__auto___24914,vec__24836_24898,column_24899,column_info_24900,vec__24829_24891,line_24892,columns_24893,inverted))
,cljs.core.sorted_map.call(null)));


var G__24926 = cljs.core.next.call(null,seq__24839_24915__$1);
var G__24927 = null;
var G__24928 = (0);
var G__24929 = (0);
seq__24839_24901 = G__24926;
chunk__24840_24902 = G__24927;
count__24841_24903 = G__24928;
i__24842_24904 = G__24929;
continue;
}
} else {
}
}
break;
}


var G__24930 = seq__24832_24894;
var G__24931 = chunk__24833_24895;
var G__24932 = count__24834_24896;
var G__24933 = (i__24835_24897 + (1));
seq__24832_24894 = G__24930;
chunk__24833_24895 = G__24931;
count__24834_24896 = G__24932;
i__24835_24897 = G__24933;
continue;
} else {
var temp__5457__auto___24934 = cljs.core.seq.call(null,seq__24832_24894);
if(temp__5457__auto___24934){
var seq__24832_24935__$1 = temp__5457__auto___24934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24832_24935__$1)){
var c__4319__auto___24936 = cljs.core.chunk_first.call(null,seq__24832_24935__$1);
var G__24937 = cljs.core.chunk_rest.call(null,seq__24832_24935__$1);
var G__24938 = c__4319__auto___24936;
var G__24939 = cljs.core.count.call(null,c__4319__auto___24936);
var G__24940 = (0);
seq__24832_24894 = G__24937;
chunk__24833_24895 = G__24938;
count__24834_24896 = G__24939;
i__24835_24897 = G__24940;
continue;
} else {
var vec__24847_24941 = cljs.core.first.call(null,seq__24832_24935__$1);
var column_24942 = cljs.core.nth.call(null,vec__24847_24941,(0),null);
var column_info_24943 = cljs.core.nth.call(null,vec__24847_24941,(1),null);
var seq__24850_24944 = cljs.core.seq.call(null,column_info_24943);
var chunk__24851_24945 = null;
var count__24852_24946 = (0);
var i__24853_24947 = (0);
while(true){
if((i__24853_24947 < count__24852_24946)){
var map__24854_24948 = cljs.core._nth.call(null,chunk__24851_24945,i__24853_24947);
var map__24854_24949__$1 = ((((!((map__24854_24948 == null)))?(((((map__24854_24948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24854_24948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24854_24948):map__24854_24948);
var gline_24950 = cljs.core.get.call(null,map__24854_24949__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24951 = cljs.core.get.call(null,map__24854_24949__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24952 = cljs.core.get.call(null,map__24854_24949__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24950], null),cljs.core.fnil.call(null,((function (seq__24850_24944,chunk__24851_24945,count__24852_24946,i__24853_24947,seq__24832_24894,chunk__24833_24895,count__24834_24896,i__24835_24897,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24854_24948,map__24854_24949__$1,gline_24950,gcol_24951,name_24952,vec__24847_24941,column_24942,column_info_24943,seq__24832_24935__$1,temp__5457__auto___24934,vec__24829_24891,line_24892,columns_24893,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24951], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24892,new cljs.core.Keyword(null,"col","col",-1959363084),column_24942,new cljs.core.Keyword(null,"name","name",1843675177),name_24952], null));
});})(seq__24850_24944,chunk__24851_24945,count__24852_24946,i__24853_24947,seq__24832_24894,chunk__24833_24895,count__24834_24896,i__24835_24897,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24854_24948,map__24854_24949__$1,gline_24950,gcol_24951,name_24952,vec__24847_24941,column_24942,column_info_24943,seq__24832_24935__$1,temp__5457__auto___24934,vec__24829_24891,line_24892,columns_24893,inverted))
,cljs.core.sorted_map.call(null)));


var G__24953 = seq__24850_24944;
var G__24954 = chunk__24851_24945;
var G__24955 = count__24852_24946;
var G__24956 = (i__24853_24947 + (1));
seq__24850_24944 = G__24953;
chunk__24851_24945 = G__24954;
count__24852_24946 = G__24955;
i__24853_24947 = G__24956;
continue;
} else {
var temp__5457__auto___24957__$1 = cljs.core.seq.call(null,seq__24850_24944);
if(temp__5457__auto___24957__$1){
var seq__24850_24958__$1 = temp__5457__auto___24957__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24850_24958__$1)){
var c__4319__auto___24959 = cljs.core.chunk_first.call(null,seq__24850_24958__$1);
var G__24960 = cljs.core.chunk_rest.call(null,seq__24850_24958__$1);
var G__24961 = c__4319__auto___24959;
var G__24962 = cljs.core.count.call(null,c__4319__auto___24959);
var G__24963 = (0);
seq__24850_24944 = G__24960;
chunk__24851_24945 = G__24961;
count__24852_24946 = G__24962;
i__24853_24947 = G__24963;
continue;
} else {
var map__24856_24964 = cljs.core.first.call(null,seq__24850_24958__$1);
var map__24856_24965__$1 = ((((!((map__24856_24964 == null)))?(((((map__24856_24964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24856_24964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24856_24964):map__24856_24964);
var gline_24966 = cljs.core.get.call(null,map__24856_24965__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_24967 = cljs.core.get.call(null,map__24856_24965__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_24968 = cljs.core.get.call(null,map__24856_24965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24966], null),cljs.core.fnil.call(null,((function (seq__24850_24944,chunk__24851_24945,count__24852_24946,i__24853_24947,seq__24832_24894,chunk__24833_24895,count__24834_24896,i__24835_24897,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24856_24964,map__24856_24965__$1,gline_24966,gcol_24967,name_24968,seq__24850_24958__$1,temp__5457__auto___24957__$1,vec__24847_24941,column_24942,column_info_24943,seq__24832_24935__$1,temp__5457__auto___24934,vec__24829_24891,line_24892,columns_24893,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_24967], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24892,new cljs.core.Keyword(null,"col","col",-1959363084),column_24942,new cljs.core.Keyword(null,"name","name",1843675177),name_24968], null));
});})(seq__24850_24944,chunk__24851_24945,count__24852_24946,i__24853_24947,seq__24832_24894,chunk__24833_24895,count__24834_24896,i__24835_24897,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24856_24964,map__24856_24965__$1,gline_24966,gcol_24967,name_24968,seq__24850_24958__$1,temp__5457__auto___24957__$1,vec__24847_24941,column_24942,column_info_24943,seq__24832_24935__$1,temp__5457__auto___24934,vec__24829_24891,line_24892,columns_24893,inverted))
,cljs.core.sorted_map.call(null)));


var G__24969 = cljs.core.next.call(null,seq__24850_24958__$1);
var G__24970 = null;
var G__24971 = (0);
var G__24972 = (0);
seq__24850_24944 = G__24969;
chunk__24851_24945 = G__24970;
count__24852_24946 = G__24971;
i__24853_24947 = G__24972;
continue;
}
} else {
}
}
break;
}


var G__24973 = cljs.core.next.call(null,seq__24832_24935__$1);
var G__24974 = null;
var G__24975 = (0);
var G__24976 = (0);
seq__24832_24894 = G__24973;
chunk__24833_24895 = G__24974;
count__24834_24896 = G__24975;
i__24835_24897 = G__24976;
continue;
}
} else {
}
}
break;
}


var G__24977 = seq__24825_24887;
var G__24978 = chunk__24826_24888;
var G__24979 = count__24827_24889;
var G__24980 = (i__24828_24890 + (1));
seq__24825_24887 = G__24977;
chunk__24826_24888 = G__24978;
count__24827_24889 = G__24979;
i__24828_24890 = G__24980;
continue;
} else {
var temp__5457__auto___24981 = cljs.core.seq.call(null,seq__24825_24887);
if(temp__5457__auto___24981){
var seq__24825_24982__$1 = temp__5457__auto___24981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24825_24982__$1)){
var c__4319__auto___24983 = cljs.core.chunk_first.call(null,seq__24825_24982__$1);
var G__24984 = cljs.core.chunk_rest.call(null,seq__24825_24982__$1);
var G__24985 = c__4319__auto___24983;
var G__24986 = cljs.core.count.call(null,c__4319__auto___24983);
var G__24987 = (0);
seq__24825_24887 = G__24984;
chunk__24826_24888 = G__24985;
count__24827_24889 = G__24986;
i__24828_24890 = G__24987;
continue;
} else {
var vec__24858_24988 = cljs.core.first.call(null,seq__24825_24982__$1);
var line_24989 = cljs.core.nth.call(null,vec__24858_24988,(0),null);
var columns_24990 = cljs.core.nth.call(null,vec__24858_24988,(1),null);
var seq__24861_24991 = cljs.core.seq.call(null,columns_24990);
var chunk__24862_24992 = null;
var count__24863_24993 = (0);
var i__24864_24994 = (0);
while(true){
if((i__24864_24994 < count__24863_24993)){
var vec__24865_24995 = cljs.core._nth.call(null,chunk__24862_24992,i__24864_24994);
var column_24996 = cljs.core.nth.call(null,vec__24865_24995,(0),null);
var column_info_24997 = cljs.core.nth.call(null,vec__24865_24995,(1),null);
var seq__24868_24998 = cljs.core.seq.call(null,column_info_24997);
var chunk__24869_24999 = null;
var count__24870_25000 = (0);
var i__24871_25001 = (0);
while(true){
if((i__24871_25001 < count__24870_25000)){
var map__24872_25002 = cljs.core._nth.call(null,chunk__24869_24999,i__24871_25001);
var map__24872_25003__$1 = ((((!((map__24872_25002 == null)))?(((((map__24872_25002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24872_25002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24872_25002):map__24872_25002);
var gline_25004 = cljs.core.get.call(null,map__24872_25003__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25005 = cljs.core.get.call(null,map__24872_25003__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25006 = cljs.core.get.call(null,map__24872_25003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25004], null),cljs.core.fnil.call(null,((function (seq__24868_24998,chunk__24869_24999,count__24870_25000,i__24871_25001,seq__24861_24991,chunk__24862_24992,count__24863_24993,i__24864_24994,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24872_25002,map__24872_25003__$1,gline_25004,gcol_25005,name_25006,vec__24865_24995,column_24996,column_info_24997,vec__24858_24988,line_24989,columns_24990,seq__24825_24982__$1,temp__5457__auto___24981,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25005], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24989,new cljs.core.Keyword(null,"col","col",-1959363084),column_24996,new cljs.core.Keyword(null,"name","name",1843675177),name_25006], null));
});})(seq__24868_24998,chunk__24869_24999,count__24870_25000,i__24871_25001,seq__24861_24991,chunk__24862_24992,count__24863_24993,i__24864_24994,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24872_25002,map__24872_25003__$1,gline_25004,gcol_25005,name_25006,vec__24865_24995,column_24996,column_info_24997,vec__24858_24988,line_24989,columns_24990,seq__24825_24982__$1,temp__5457__auto___24981,inverted))
,cljs.core.sorted_map.call(null)));


var G__25007 = seq__24868_24998;
var G__25008 = chunk__24869_24999;
var G__25009 = count__24870_25000;
var G__25010 = (i__24871_25001 + (1));
seq__24868_24998 = G__25007;
chunk__24869_24999 = G__25008;
count__24870_25000 = G__25009;
i__24871_25001 = G__25010;
continue;
} else {
var temp__5457__auto___25011__$1 = cljs.core.seq.call(null,seq__24868_24998);
if(temp__5457__auto___25011__$1){
var seq__24868_25012__$1 = temp__5457__auto___25011__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24868_25012__$1)){
var c__4319__auto___25013 = cljs.core.chunk_first.call(null,seq__24868_25012__$1);
var G__25014 = cljs.core.chunk_rest.call(null,seq__24868_25012__$1);
var G__25015 = c__4319__auto___25013;
var G__25016 = cljs.core.count.call(null,c__4319__auto___25013);
var G__25017 = (0);
seq__24868_24998 = G__25014;
chunk__24869_24999 = G__25015;
count__24870_25000 = G__25016;
i__24871_25001 = G__25017;
continue;
} else {
var map__24874_25018 = cljs.core.first.call(null,seq__24868_25012__$1);
var map__24874_25019__$1 = ((((!((map__24874_25018 == null)))?(((((map__24874_25018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24874_25018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24874_25018):map__24874_25018);
var gline_25020 = cljs.core.get.call(null,map__24874_25019__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25021 = cljs.core.get.call(null,map__24874_25019__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25022 = cljs.core.get.call(null,map__24874_25019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25020], null),cljs.core.fnil.call(null,((function (seq__24868_24998,chunk__24869_24999,count__24870_25000,i__24871_25001,seq__24861_24991,chunk__24862_24992,count__24863_24993,i__24864_24994,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24874_25018,map__24874_25019__$1,gline_25020,gcol_25021,name_25022,seq__24868_25012__$1,temp__5457__auto___25011__$1,vec__24865_24995,column_24996,column_info_24997,vec__24858_24988,line_24989,columns_24990,seq__24825_24982__$1,temp__5457__auto___24981,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25021], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24989,new cljs.core.Keyword(null,"col","col",-1959363084),column_24996,new cljs.core.Keyword(null,"name","name",1843675177),name_25022], null));
});})(seq__24868_24998,chunk__24869_24999,count__24870_25000,i__24871_25001,seq__24861_24991,chunk__24862_24992,count__24863_24993,i__24864_24994,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24874_25018,map__24874_25019__$1,gline_25020,gcol_25021,name_25022,seq__24868_25012__$1,temp__5457__auto___25011__$1,vec__24865_24995,column_24996,column_info_24997,vec__24858_24988,line_24989,columns_24990,seq__24825_24982__$1,temp__5457__auto___24981,inverted))
,cljs.core.sorted_map.call(null)));


var G__25023 = cljs.core.next.call(null,seq__24868_25012__$1);
var G__25024 = null;
var G__25025 = (0);
var G__25026 = (0);
seq__24868_24998 = G__25023;
chunk__24869_24999 = G__25024;
count__24870_25000 = G__25025;
i__24871_25001 = G__25026;
continue;
}
} else {
}
}
break;
}


var G__25027 = seq__24861_24991;
var G__25028 = chunk__24862_24992;
var G__25029 = count__24863_24993;
var G__25030 = (i__24864_24994 + (1));
seq__24861_24991 = G__25027;
chunk__24862_24992 = G__25028;
count__24863_24993 = G__25029;
i__24864_24994 = G__25030;
continue;
} else {
var temp__5457__auto___25031__$1 = cljs.core.seq.call(null,seq__24861_24991);
if(temp__5457__auto___25031__$1){
var seq__24861_25032__$1 = temp__5457__auto___25031__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24861_25032__$1)){
var c__4319__auto___25033 = cljs.core.chunk_first.call(null,seq__24861_25032__$1);
var G__25034 = cljs.core.chunk_rest.call(null,seq__24861_25032__$1);
var G__25035 = c__4319__auto___25033;
var G__25036 = cljs.core.count.call(null,c__4319__auto___25033);
var G__25037 = (0);
seq__24861_24991 = G__25034;
chunk__24862_24992 = G__25035;
count__24863_24993 = G__25036;
i__24864_24994 = G__25037;
continue;
} else {
var vec__24876_25038 = cljs.core.first.call(null,seq__24861_25032__$1);
var column_25039 = cljs.core.nth.call(null,vec__24876_25038,(0),null);
var column_info_25040 = cljs.core.nth.call(null,vec__24876_25038,(1),null);
var seq__24879_25041 = cljs.core.seq.call(null,column_info_25040);
var chunk__24880_25042 = null;
var count__24881_25043 = (0);
var i__24882_25044 = (0);
while(true){
if((i__24882_25044 < count__24881_25043)){
var map__24883_25045 = cljs.core._nth.call(null,chunk__24880_25042,i__24882_25044);
var map__24883_25046__$1 = ((((!((map__24883_25045 == null)))?(((((map__24883_25045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24883_25045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24883_25045):map__24883_25045);
var gline_25047 = cljs.core.get.call(null,map__24883_25046__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25048 = cljs.core.get.call(null,map__24883_25046__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25049 = cljs.core.get.call(null,map__24883_25046__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25047], null),cljs.core.fnil.call(null,((function (seq__24879_25041,chunk__24880_25042,count__24881_25043,i__24882_25044,seq__24861_24991,chunk__24862_24992,count__24863_24993,i__24864_24994,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24883_25045,map__24883_25046__$1,gline_25047,gcol_25048,name_25049,vec__24876_25038,column_25039,column_info_25040,seq__24861_25032__$1,temp__5457__auto___25031__$1,vec__24858_24988,line_24989,columns_24990,seq__24825_24982__$1,temp__5457__auto___24981,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25048], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24989,new cljs.core.Keyword(null,"col","col",-1959363084),column_25039,new cljs.core.Keyword(null,"name","name",1843675177),name_25049], null));
});})(seq__24879_25041,chunk__24880_25042,count__24881_25043,i__24882_25044,seq__24861_24991,chunk__24862_24992,count__24863_24993,i__24864_24994,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24883_25045,map__24883_25046__$1,gline_25047,gcol_25048,name_25049,vec__24876_25038,column_25039,column_info_25040,seq__24861_25032__$1,temp__5457__auto___25031__$1,vec__24858_24988,line_24989,columns_24990,seq__24825_24982__$1,temp__5457__auto___24981,inverted))
,cljs.core.sorted_map.call(null)));


var G__25050 = seq__24879_25041;
var G__25051 = chunk__24880_25042;
var G__25052 = count__24881_25043;
var G__25053 = (i__24882_25044 + (1));
seq__24879_25041 = G__25050;
chunk__24880_25042 = G__25051;
count__24881_25043 = G__25052;
i__24882_25044 = G__25053;
continue;
} else {
var temp__5457__auto___25054__$2 = cljs.core.seq.call(null,seq__24879_25041);
if(temp__5457__auto___25054__$2){
var seq__24879_25055__$1 = temp__5457__auto___25054__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24879_25055__$1)){
var c__4319__auto___25056 = cljs.core.chunk_first.call(null,seq__24879_25055__$1);
var G__25057 = cljs.core.chunk_rest.call(null,seq__24879_25055__$1);
var G__25058 = c__4319__auto___25056;
var G__25059 = cljs.core.count.call(null,c__4319__auto___25056);
var G__25060 = (0);
seq__24879_25041 = G__25057;
chunk__24880_25042 = G__25058;
count__24881_25043 = G__25059;
i__24882_25044 = G__25060;
continue;
} else {
var map__24885_25061 = cljs.core.first.call(null,seq__24879_25055__$1);
var map__24885_25062__$1 = ((((!((map__24885_25061 == null)))?(((((map__24885_25061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24885_25061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24885_25061):map__24885_25061);
var gline_25063 = cljs.core.get.call(null,map__24885_25062__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25064 = cljs.core.get.call(null,map__24885_25062__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25065 = cljs.core.get.call(null,map__24885_25062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25063], null),cljs.core.fnil.call(null,((function (seq__24879_25041,chunk__24880_25042,count__24881_25043,i__24882_25044,seq__24861_24991,chunk__24862_24992,count__24863_24993,i__24864_24994,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24885_25061,map__24885_25062__$1,gline_25063,gcol_25064,name_25065,seq__24879_25055__$1,temp__5457__auto___25054__$2,vec__24876_25038,column_25039,column_info_25040,seq__24861_25032__$1,temp__5457__auto___25031__$1,vec__24858_24988,line_24989,columns_24990,seq__24825_24982__$1,temp__5457__auto___24981,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25064], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_24989,new cljs.core.Keyword(null,"col","col",-1959363084),column_25039,new cljs.core.Keyword(null,"name","name",1843675177),name_25065], null));
});})(seq__24879_25041,chunk__24880_25042,count__24881_25043,i__24882_25044,seq__24861_24991,chunk__24862_24992,count__24863_24993,i__24864_24994,seq__24825_24887,chunk__24826_24888,count__24827_24889,i__24828_24890,map__24885_25061,map__24885_25062__$1,gline_25063,gcol_25064,name_25065,seq__24879_25055__$1,temp__5457__auto___25054__$2,vec__24876_25038,column_25039,column_info_25040,seq__24861_25032__$1,temp__5457__auto___25031__$1,vec__24858_24988,line_24989,columns_24990,seq__24825_24982__$1,temp__5457__auto___24981,inverted))
,cljs.core.sorted_map.call(null)));


var G__25066 = cljs.core.next.call(null,seq__24879_25055__$1);
var G__25067 = null;
var G__25068 = (0);
var G__25069 = (0);
seq__24879_25041 = G__25066;
chunk__24880_25042 = G__25067;
count__24881_25043 = G__25068;
i__24882_25044 = G__25069;
continue;
}
} else {
}
}
break;
}


var G__25070 = cljs.core.next.call(null,seq__24861_25032__$1);
var G__25071 = null;
var G__25072 = (0);
var G__25073 = (0);
seq__24861_24991 = G__25070;
chunk__24862_24992 = G__25071;
count__24863_24993 = G__25072;
i__24864_24994 = G__25073;
continue;
}
} else {
}
}
break;
}


var G__25074 = cljs.core.next.call(null,seq__24825_24982__$1);
var G__25075 = null;
var G__25076 = (0);
var G__25077 = (0);
seq__24825_24887 = G__25074;
chunk__24826_24888 = G__25075;
count__24827_24889 = G__25076;
i__24828_24890 = G__25077;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1521297423293
