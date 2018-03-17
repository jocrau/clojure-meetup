// Compiled by ClojureScript 1.10.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31735_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31735_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31736 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31737 = null;
var count__31738 = (0);
var i__31739 = (0);
while(true){
if((i__31739 < count__31738)){
var n = cljs.core._nth.call(null,chunk__31737,i__31739);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31740 = seq__31736;
var G__31741 = chunk__31737;
var G__31742 = count__31738;
var G__31743 = (i__31739 + (1));
seq__31736 = G__31740;
chunk__31737 = G__31741;
count__31738 = G__31742;
i__31739 = G__31743;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31736);
if(temp__5457__auto__){
var seq__31736__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31736__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31736__$1);
var G__31744 = cljs.core.chunk_rest.call(null,seq__31736__$1);
var G__31745 = c__4319__auto__;
var G__31746 = cljs.core.count.call(null,c__4319__auto__);
var G__31747 = (0);
seq__31736 = G__31744;
chunk__31737 = G__31745;
count__31738 = G__31746;
i__31739 = G__31747;
continue;
} else {
var n = cljs.core.first.call(null,seq__31736__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31748 = cljs.core.next.call(null,seq__31736__$1);
var G__31749 = null;
var G__31750 = (0);
var G__31751 = (0);
seq__31736 = G__31748;
chunk__31737 = G__31749;
count__31738 = G__31750;
i__31739 = G__31751;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31752){
var vec__31753 = p__31752;
var _ = cljs.core.nth.call(null,vec__31753,(0),null);
var v = cljs.core.nth.call(null,vec__31753,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__31756){
var vec__31757 = p__31756;
var k = cljs.core.nth.call(null,vec__31757,(0),null);
var v = cljs.core.nth.call(null,vec__31757,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31769_31777 = cljs.core.seq.call(null,deps);
var chunk__31770_31778 = null;
var count__31771_31779 = (0);
var i__31772_31780 = (0);
while(true){
if((i__31772_31780 < count__31771_31779)){
var dep_31781 = cljs.core._nth.call(null,chunk__31770_31778,i__31772_31780);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_31781;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31781));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31781,(depth + (1)),state);
} else {
}


var G__31782 = seq__31769_31777;
var G__31783 = chunk__31770_31778;
var G__31784 = count__31771_31779;
var G__31785 = (i__31772_31780 + (1));
seq__31769_31777 = G__31782;
chunk__31770_31778 = G__31783;
count__31771_31779 = G__31784;
i__31772_31780 = G__31785;
continue;
} else {
var temp__5457__auto___31786 = cljs.core.seq.call(null,seq__31769_31777);
if(temp__5457__auto___31786){
var seq__31769_31787__$1 = temp__5457__auto___31786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31769_31787__$1)){
var c__4319__auto___31788 = cljs.core.chunk_first.call(null,seq__31769_31787__$1);
var G__31789 = cljs.core.chunk_rest.call(null,seq__31769_31787__$1);
var G__31790 = c__4319__auto___31788;
var G__31791 = cljs.core.count.call(null,c__4319__auto___31788);
var G__31792 = (0);
seq__31769_31777 = G__31789;
chunk__31770_31778 = G__31790;
count__31771_31779 = G__31791;
i__31772_31780 = G__31792;
continue;
} else {
var dep_31793 = cljs.core.first.call(null,seq__31769_31787__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_31793;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31793));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31793,(depth + (1)),state);
} else {
}


var G__31794 = cljs.core.next.call(null,seq__31769_31787__$1);
var G__31795 = null;
var G__31796 = (0);
var G__31797 = (0);
seq__31769_31777 = G__31794;
chunk__31770_31778 = G__31795;
count__31771_31779 = G__31796;
i__31772_31780 = G__31797;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31773){
var vec__31774 = p__31773;
var seq__31775 = cljs.core.seq.call(null,vec__31774);
var first__31776 = cljs.core.first.call(null,seq__31775);
var seq__31775__$1 = cljs.core.next.call(null,seq__31775);
var x = first__31776;
var xs = seq__31775__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31774,seq__31775,first__31776,seq__31775__$1,x,xs,get_deps__$1){
return (function (p1__31760_SHARP_){
return clojure.set.difference.call(null,p1__31760_SHARP_,x);
});})(vec__31774,seq__31775,first__31776,seq__31775__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31798 = cljs.core.seq.call(null,provides);
var chunk__31799 = null;
var count__31800 = (0);
var i__31801 = (0);
while(true){
if((i__31801 < count__31800)){
var prov = cljs.core._nth.call(null,chunk__31799,i__31801);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31802_31810 = cljs.core.seq.call(null,requires);
var chunk__31803_31811 = null;
var count__31804_31812 = (0);
var i__31805_31813 = (0);
while(true){
if((i__31805_31813 < count__31804_31812)){
var req_31814 = cljs.core._nth.call(null,chunk__31803_31811,i__31805_31813);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31814,prov);


var G__31815 = seq__31802_31810;
var G__31816 = chunk__31803_31811;
var G__31817 = count__31804_31812;
var G__31818 = (i__31805_31813 + (1));
seq__31802_31810 = G__31815;
chunk__31803_31811 = G__31816;
count__31804_31812 = G__31817;
i__31805_31813 = G__31818;
continue;
} else {
var temp__5457__auto___31819 = cljs.core.seq.call(null,seq__31802_31810);
if(temp__5457__auto___31819){
var seq__31802_31820__$1 = temp__5457__auto___31819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31802_31820__$1)){
var c__4319__auto___31821 = cljs.core.chunk_first.call(null,seq__31802_31820__$1);
var G__31822 = cljs.core.chunk_rest.call(null,seq__31802_31820__$1);
var G__31823 = c__4319__auto___31821;
var G__31824 = cljs.core.count.call(null,c__4319__auto___31821);
var G__31825 = (0);
seq__31802_31810 = G__31822;
chunk__31803_31811 = G__31823;
count__31804_31812 = G__31824;
i__31805_31813 = G__31825;
continue;
} else {
var req_31826 = cljs.core.first.call(null,seq__31802_31820__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31826,prov);


var G__31827 = cljs.core.next.call(null,seq__31802_31820__$1);
var G__31828 = null;
var G__31829 = (0);
var G__31830 = (0);
seq__31802_31810 = G__31827;
chunk__31803_31811 = G__31828;
count__31804_31812 = G__31829;
i__31805_31813 = G__31830;
continue;
}
} else {
}
}
break;
}


var G__31831 = seq__31798;
var G__31832 = chunk__31799;
var G__31833 = count__31800;
var G__31834 = (i__31801 + (1));
seq__31798 = G__31831;
chunk__31799 = G__31832;
count__31800 = G__31833;
i__31801 = G__31834;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31798);
if(temp__5457__auto__){
var seq__31798__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31798__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31798__$1);
var G__31835 = cljs.core.chunk_rest.call(null,seq__31798__$1);
var G__31836 = c__4319__auto__;
var G__31837 = cljs.core.count.call(null,c__4319__auto__);
var G__31838 = (0);
seq__31798 = G__31835;
chunk__31799 = G__31836;
count__31800 = G__31837;
i__31801 = G__31838;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31798__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31806_31839 = cljs.core.seq.call(null,requires);
var chunk__31807_31840 = null;
var count__31808_31841 = (0);
var i__31809_31842 = (0);
while(true){
if((i__31809_31842 < count__31808_31841)){
var req_31843 = cljs.core._nth.call(null,chunk__31807_31840,i__31809_31842);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31843,prov);


var G__31844 = seq__31806_31839;
var G__31845 = chunk__31807_31840;
var G__31846 = count__31808_31841;
var G__31847 = (i__31809_31842 + (1));
seq__31806_31839 = G__31844;
chunk__31807_31840 = G__31845;
count__31808_31841 = G__31846;
i__31809_31842 = G__31847;
continue;
} else {
var temp__5457__auto___31848__$1 = cljs.core.seq.call(null,seq__31806_31839);
if(temp__5457__auto___31848__$1){
var seq__31806_31849__$1 = temp__5457__auto___31848__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31806_31849__$1)){
var c__4319__auto___31850 = cljs.core.chunk_first.call(null,seq__31806_31849__$1);
var G__31851 = cljs.core.chunk_rest.call(null,seq__31806_31849__$1);
var G__31852 = c__4319__auto___31850;
var G__31853 = cljs.core.count.call(null,c__4319__auto___31850);
var G__31854 = (0);
seq__31806_31839 = G__31851;
chunk__31807_31840 = G__31852;
count__31808_31841 = G__31853;
i__31809_31842 = G__31854;
continue;
} else {
var req_31855 = cljs.core.first.call(null,seq__31806_31849__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31855,prov);


var G__31856 = cljs.core.next.call(null,seq__31806_31849__$1);
var G__31857 = null;
var G__31858 = (0);
var G__31859 = (0);
seq__31806_31839 = G__31856;
chunk__31807_31840 = G__31857;
count__31808_31841 = G__31858;
i__31809_31842 = G__31859;
continue;
}
} else {
}
}
break;
}


var G__31860 = cljs.core.next.call(null,seq__31798__$1);
var G__31861 = null;
var G__31862 = (0);
var G__31863 = (0);
seq__31798 = G__31860;
chunk__31799 = G__31861;
count__31800 = G__31862;
i__31801 = G__31863;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31864_31868 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31865_31869 = null;
var count__31866_31870 = (0);
var i__31867_31871 = (0);
while(true){
if((i__31867_31871 < count__31866_31870)){
var ns_31872 = cljs.core._nth.call(null,chunk__31865_31869,i__31867_31871);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31872);


var G__31873 = seq__31864_31868;
var G__31874 = chunk__31865_31869;
var G__31875 = count__31866_31870;
var G__31876 = (i__31867_31871 + (1));
seq__31864_31868 = G__31873;
chunk__31865_31869 = G__31874;
count__31866_31870 = G__31875;
i__31867_31871 = G__31876;
continue;
} else {
var temp__5457__auto___31877 = cljs.core.seq.call(null,seq__31864_31868);
if(temp__5457__auto___31877){
var seq__31864_31878__$1 = temp__5457__auto___31877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31864_31878__$1)){
var c__4319__auto___31879 = cljs.core.chunk_first.call(null,seq__31864_31878__$1);
var G__31880 = cljs.core.chunk_rest.call(null,seq__31864_31878__$1);
var G__31881 = c__4319__auto___31879;
var G__31882 = cljs.core.count.call(null,c__4319__auto___31879);
var G__31883 = (0);
seq__31864_31868 = G__31880;
chunk__31865_31869 = G__31881;
count__31866_31870 = G__31882;
i__31867_31871 = G__31883;
continue;
} else {
var ns_31884 = cljs.core.first.call(null,seq__31864_31878__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31884);


var G__31885 = cljs.core.next.call(null,seq__31864_31878__$1);
var G__31886 = null;
var G__31887 = (0);
var G__31888 = (0);
seq__31864_31868 = G__31885;
chunk__31865_31869 = G__31886;
count__31866_31870 = G__31887;
i__31867_31871 = G__31888;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31889__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31890__i = 0, G__31890__a = new Array(arguments.length -  0);
while (G__31890__i < G__31890__a.length) {G__31890__a[G__31890__i] = arguments[G__31890__i + 0]; ++G__31890__i;}
  args = new cljs.core.IndexedSeq(G__31890__a,0,null);
} 
return G__31889__delegate.call(this,args);};
G__31889.cljs$lang$maxFixedArity = 0;
G__31889.cljs$lang$applyTo = (function (arglist__31891){
var args = cljs.core.seq(arglist__31891);
return G__31889__delegate(args);
});
G__31889.cljs$core$IFn$_invoke$arity$variadic = G__31889__delegate;
return G__31889;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__31892_SHARP_,p2__31893_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31892_SHARP_)].join('')),p2__31893_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__31894_SHARP_,p2__31895_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31894_SHARP_)].join(''),p2__31895_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31896 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31896.addCallback(((function (G__31896){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31896))
);

G__31896.addErrback(((function (G__31896){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31896))
);

return G__31896;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31897){if((e31897 instanceof Error)){
var e = e31897;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31897;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31898){if((e31898 instanceof Error)){
var e = e31898;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31898;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31899 = cljs.core._EQ_;
var expr__31900 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31899.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31900))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31899.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31900))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31899.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31900))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31899,expr__31900){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31899,expr__31900))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31902,callback){
var map__31903 = p__31902;
var map__31903__$1 = ((((!((map__31903 == null)))?(((((map__31903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31903):map__31903);
var file_msg = map__31903__$1;
var request_url = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31903,map__31903__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31903,map__31903__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__){
return (function (state_31941){
var state_val_31942 = (state_31941[(1)]);
if((state_val_31942 === (7))){
var inst_31937 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31943_31969 = state_31941__$1;
(statearr_31943_31969[(2)] = inst_31937);

(statearr_31943_31969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (1))){
var state_31941__$1 = state_31941;
var statearr_31944_31970 = state_31941__$1;
(statearr_31944_31970[(2)] = null);

(statearr_31944_31970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (4))){
var inst_31907 = (state_31941[(7)]);
var inst_31907__$1 = (state_31941[(2)]);
var state_31941__$1 = (function (){var statearr_31945 = state_31941;
(statearr_31945[(7)] = inst_31907__$1);

return statearr_31945;
})();
if(cljs.core.truth_(inst_31907__$1)){
var statearr_31946_31971 = state_31941__$1;
(statearr_31946_31971[(1)] = (5));

} else {
var statearr_31947_31972 = state_31941__$1;
(statearr_31947_31972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (15))){
var inst_31922 = (state_31941[(8)]);
var inst_31920 = (state_31941[(9)]);
var inst_31924 = inst_31922.call(null,inst_31920);
var state_31941__$1 = state_31941;
var statearr_31948_31973 = state_31941__$1;
(statearr_31948_31973[(2)] = inst_31924);

(statearr_31948_31973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (13))){
var inst_31931 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31949_31974 = state_31941__$1;
(statearr_31949_31974[(2)] = inst_31931);

(statearr_31949_31974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (6))){
var state_31941__$1 = state_31941;
var statearr_31950_31975 = state_31941__$1;
(statearr_31950_31975[(2)] = null);

(statearr_31950_31975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (17))){
var inst_31928 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31951_31976 = state_31941__$1;
(statearr_31951_31976[(2)] = inst_31928);

(statearr_31951_31976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (3))){
var inst_31939 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31941__$1,inst_31939);
} else {
if((state_val_31942 === (12))){
var state_31941__$1 = state_31941;
var statearr_31952_31977 = state_31941__$1;
(statearr_31952_31977[(2)] = null);

(statearr_31952_31977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (2))){
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31942 === (11))){
var inst_31912 = (state_31941[(10)]);
var inst_31918 = figwheel.client.file_reloading.blocking_load.call(null,inst_31912);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31941__$1,(14),inst_31918);
} else {
if((state_val_31942 === (9))){
var inst_31912 = (state_31941[(10)]);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31912)){
var statearr_31953_31978 = state_31941__$1;
(statearr_31953_31978[(1)] = (11));

} else {
var statearr_31954_31979 = state_31941__$1;
(statearr_31954_31979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (5))){
var inst_31907 = (state_31941[(7)]);
var inst_31913 = (state_31941[(11)]);
var inst_31912 = cljs.core.nth.call(null,inst_31907,(0),null);
var inst_31913__$1 = cljs.core.nth.call(null,inst_31907,(1),null);
var state_31941__$1 = (function (){var statearr_31955 = state_31941;
(statearr_31955[(10)] = inst_31912);

(statearr_31955[(11)] = inst_31913__$1);

return statearr_31955;
})();
if(cljs.core.truth_(inst_31913__$1)){
var statearr_31956_31980 = state_31941__$1;
(statearr_31956_31980[(1)] = (8));

} else {
var statearr_31957_31981 = state_31941__$1;
(statearr_31957_31981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (14))){
var inst_31912 = (state_31941[(10)]);
var inst_31922 = (state_31941[(8)]);
var inst_31920 = (state_31941[(2)]);
var inst_31921 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31922__$1 = cljs.core.get.call(null,inst_31921,inst_31912);
var state_31941__$1 = (function (){var statearr_31958 = state_31941;
(statearr_31958[(8)] = inst_31922__$1);

(statearr_31958[(9)] = inst_31920);

return statearr_31958;
})();
if(cljs.core.truth_(inst_31922__$1)){
var statearr_31959_31982 = state_31941__$1;
(statearr_31959_31982[(1)] = (15));

} else {
var statearr_31960_31983 = state_31941__$1;
(statearr_31960_31983[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (16))){
var inst_31920 = (state_31941[(9)]);
var inst_31926 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31920);
var state_31941__$1 = state_31941;
var statearr_31961_31984 = state_31941__$1;
(statearr_31961_31984[(2)] = inst_31926);

(statearr_31961_31984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (10))){
var inst_31933 = (state_31941[(2)]);
var state_31941__$1 = (function (){var statearr_31962 = state_31941;
(statearr_31962[(12)] = inst_31933);

return statearr_31962;
})();
var statearr_31963_31985 = state_31941__$1;
(statearr_31963_31985[(2)] = null);

(statearr_31963_31985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (8))){
var inst_31913 = (state_31941[(11)]);
var inst_31915 = eval(inst_31913);
var state_31941__$1 = state_31941;
var statearr_31964_31986 = state_31941__$1;
(statearr_31964_31986[(2)] = inst_31915);

(statearr_31964_31986[(1)] = (10));


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
});})(c__23380__auto__))
;
return ((function (switch__23223__auto__,c__23380__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23224__auto__ = null;
var figwheel$client$file_reloading$state_machine__23224__auto____0 = (function (){
var statearr_31965 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31965[(0)] = figwheel$client$file_reloading$state_machine__23224__auto__);

(statearr_31965[(1)] = (1));

return statearr_31965;
});
var figwheel$client$file_reloading$state_machine__23224__auto____1 = (function (state_31941){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_31941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e31966){if((e31966 instanceof Object)){
var ex__23227__auto__ = e31966;
var statearr_31967_31987 = state_31941;
(statearr_31967_31987[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31988 = state_31941;
state_31941 = G__31988;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23224__auto__ = function(state_31941){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23224__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23224__auto____1.call(this,state_31941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23224__auto____0;
figwheel$client$file_reloading$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23224__auto____1;
return figwheel$client$file_reloading$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__))
})();
var state__23382__auto__ = (function (){var statearr_31968 = f__23381__auto__.call(null);
(statearr_31968[(6)] = c__23380__auto__);

return statearr_31968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__))
);

return c__23380__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31990 = arguments.length;
switch (G__31990) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31992,callback){
var map__31993 = p__31992;
var map__31993__$1 = ((((!((map__31993 == null)))?(((((map__31993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31993):map__31993);
var file_msg = map__31993__$1;
var namespace = cljs.core.get.call(null,map__31993__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31993,map__31993__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31993,map__31993__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31995){
var map__31996 = p__31995;
var map__31996__$1 = ((((!((map__31996 == null)))?(((((map__31996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31996):map__31996);
var file_msg = map__31996__$1;
var namespace = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31998){
var map__31999 = p__31998;
var map__31999__$1 = ((((!((map__31999 == null)))?(((((map__31999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31999):map__31999);
var file_msg = map__31999__$1;
var namespace = cljs.core.get.call(null,map__31999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32001,callback){
var map__32002 = p__32001;
var map__32002__$1 = ((((!((map__32002 == null)))?(((((map__32002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32002):map__32002);
var file_msg = map__32002__$1;
var request_url = cljs.core.get.call(null,map__32002__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32002__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23380__auto___32052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___32052,out){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___32052,out){
return (function (state_32037){
var state_val_32038 = (state_32037[(1)]);
if((state_val_32038 === (1))){
var inst_32011 = cljs.core.seq.call(null,files);
var inst_32012 = cljs.core.first.call(null,inst_32011);
var inst_32013 = cljs.core.next.call(null,inst_32011);
var inst_32014 = files;
var state_32037__$1 = (function (){var statearr_32039 = state_32037;
(statearr_32039[(7)] = inst_32014);

(statearr_32039[(8)] = inst_32012);

(statearr_32039[(9)] = inst_32013);

return statearr_32039;
})();
var statearr_32040_32053 = state_32037__$1;
(statearr_32040_32053[(2)] = null);

(statearr_32040_32053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (2))){
var inst_32014 = (state_32037[(7)]);
var inst_32020 = (state_32037[(10)]);
var inst_32019 = cljs.core.seq.call(null,inst_32014);
var inst_32020__$1 = cljs.core.first.call(null,inst_32019);
var inst_32021 = cljs.core.next.call(null,inst_32019);
var inst_32022 = (inst_32020__$1 == null);
var inst_32023 = cljs.core.not.call(null,inst_32022);
var state_32037__$1 = (function (){var statearr_32041 = state_32037;
(statearr_32041[(10)] = inst_32020__$1);

(statearr_32041[(11)] = inst_32021);

return statearr_32041;
})();
if(inst_32023){
var statearr_32042_32054 = state_32037__$1;
(statearr_32042_32054[(1)] = (4));

} else {
var statearr_32043_32055 = state_32037__$1;
(statearr_32043_32055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (3))){
var inst_32035 = (state_32037[(2)]);
var state_32037__$1 = state_32037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32037__$1,inst_32035);
} else {
if((state_val_32038 === (4))){
var inst_32020 = (state_32037[(10)]);
var inst_32025 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32020);
var state_32037__$1 = state_32037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32037__$1,(7),inst_32025);
} else {
if((state_val_32038 === (5))){
var inst_32031 = cljs.core.async.close_BANG_.call(null,out);
var state_32037__$1 = state_32037;
var statearr_32044_32056 = state_32037__$1;
(statearr_32044_32056[(2)] = inst_32031);

(statearr_32044_32056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (6))){
var inst_32033 = (state_32037[(2)]);
var state_32037__$1 = state_32037;
var statearr_32045_32057 = state_32037__$1;
(statearr_32045_32057[(2)] = inst_32033);

(statearr_32045_32057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (7))){
var inst_32021 = (state_32037[(11)]);
var inst_32027 = (state_32037[(2)]);
var inst_32028 = cljs.core.async.put_BANG_.call(null,out,inst_32027);
var inst_32014 = inst_32021;
var state_32037__$1 = (function (){var statearr_32046 = state_32037;
(statearr_32046[(7)] = inst_32014);

(statearr_32046[(12)] = inst_32028);

return statearr_32046;
})();
var statearr_32047_32058 = state_32037__$1;
(statearr_32047_32058[(2)] = null);

(statearr_32047_32058[(1)] = (2));


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
});})(c__23380__auto___32052,out))
;
return ((function (switch__23223__auto__,c__23380__auto___32052,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto____0 = (function (){
var statearr_32048 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32048[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto__);

(statearr_32048[(1)] = (1));

return statearr_32048;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto____1 = (function (state_32037){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_32037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e32049){if((e32049 instanceof Object)){
var ex__23227__auto__ = e32049;
var statearr_32050_32059 = state_32037;
(statearr_32050_32059[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32060 = state_32037;
state_32037 = G__32060;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto__ = function(state_32037){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto____1.call(this,state_32037);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___32052,out))
})();
var state__23382__auto__ = (function (){var statearr_32051 = f__23381__auto__.call(null);
(statearr_32051[(6)] = c__23380__auto___32052);

return statearr_32051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___32052,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32061,opts){
var map__32062 = p__32061;
var map__32062__$1 = ((((!((map__32062 == null)))?(((((map__32062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32062):map__32062);
var eval_body = cljs.core.get.call(null,map__32062__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32064){var e = e32064;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32065_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32065_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32066){
var vec__32067 = p__32066;
var k = cljs.core.nth.call(null,vec__32067,(0),null);
var v = cljs.core.nth.call(null,vec__32067,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32070){
var vec__32071 = p__32070;
var k = cljs.core.nth.call(null,vec__32071,(0),null);
var v = cljs.core.nth.call(null,vec__32071,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32077,p__32078){
var map__32079 = p__32077;
var map__32079__$1 = ((((!((map__32079 == null)))?(((((map__32079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32079):map__32079);
var opts = map__32079__$1;
var before_jsload = cljs.core.get.call(null,map__32079__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32079__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32079__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32080 = p__32078;
var map__32080__$1 = ((((!((map__32080 == null)))?(((((map__32080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32080):map__32080);
var msg = map__32080__$1;
var files = cljs.core.get.call(null,map__32080__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32080__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32080__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32234){
var state_val_32235 = (state_32234[(1)]);
if((state_val_32235 === (7))){
var inst_32097 = (state_32234[(7)]);
var inst_32094 = (state_32234[(8)]);
var inst_32096 = (state_32234[(9)]);
var inst_32095 = (state_32234[(10)]);
var inst_32102 = cljs.core._nth.call(null,inst_32095,inst_32097);
var inst_32103 = figwheel.client.file_reloading.eval_body.call(null,inst_32102,opts);
var inst_32104 = (inst_32097 + (1));
var tmp32236 = inst_32094;
var tmp32237 = inst_32096;
var tmp32238 = inst_32095;
var inst_32094__$1 = tmp32236;
var inst_32095__$1 = tmp32238;
var inst_32096__$1 = tmp32237;
var inst_32097__$1 = inst_32104;
var state_32234__$1 = (function (){var statearr_32239 = state_32234;
(statearr_32239[(7)] = inst_32097__$1);

(statearr_32239[(8)] = inst_32094__$1);

(statearr_32239[(9)] = inst_32096__$1);

(statearr_32239[(11)] = inst_32103);

(statearr_32239[(10)] = inst_32095__$1);

return statearr_32239;
})();
var statearr_32240_32323 = state_32234__$1;
(statearr_32240_32323[(2)] = null);

(statearr_32240_32323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (20))){
var inst_32137 = (state_32234[(12)]);
var inst_32145 = figwheel.client.file_reloading.sort_files.call(null,inst_32137);
var state_32234__$1 = state_32234;
var statearr_32241_32324 = state_32234__$1;
(statearr_32241_32324[(2)] = inst_32145);

(statearr_32241_32324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (27))){
var state_32234__$1 = state_32234;
var statearr_32242_32325 = state_32234__$1;
(statearr_32242_32325[(2)] = null);

(statearr_32242_32325[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (1))){
var inst_32086 = (state_32234[(13)]);
var inst_32083 = before_jsload.call(null,files);
var inst_32084 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32085 = (function (){return ((function (inst_32086,inst_32083,inst_32084,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32074_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32074_SHARP_);
});
;})(inst_32086,inst_32083,inst_32084,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32086__$1 = cljs.core.filter.call(null,inst_32085,files);
var inst_32087 = cljs.core.not_empty.call(null,inst_32086__$1);
var state_32234__$1 = (function (){var statearr_32243 = state_32234;
(statearr_32243[(14)] = inst_32084);

(statearr_32243[(13)] = inst_32086__$1);

(statearr_32243[(15)] = inst_32083);

return statearr_32243;
})();
if(cljs.core.truth_(inst_32087)){
var statearr_32244_32326 = state_32234__$1;
(statearr_32244_32326[(1)] = (2));

} else {
var statearr_32245_32327 = state_32234__$1;
(statearr_32245_32327[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (24))){
var state_32234__$1 = state_32234;
var statearr_32246_32328 = state_32234__$1;
(statearr_32246_32328[(2)] = null);

(statearr_32246_32328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (39))){
var inst_32187 = (state_32234[(16)]);
var state_32234__$1 = state_32234;
var statearr_32247_32329 = state_32234__$1;
(statearr_32247_32329[(2)] = inst_32187);

(statearr_32247_32329[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (46))){
var inst_32229 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32248_32330 = state_32234__$1;
(statearr_32248_32330[(2)] = inst_32229);

(statearr_32248_32330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (4))){
var inst_32131 = (state_32234[(2)]);
var inst_32132 = cljs.core.List.EMPTY;
var inst_32133 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32132);
var inst_32134 = (function (){return ((function (inst_32131,inst_32132,inst_32133,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32075_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32075_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32075_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32075_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_32131,inst_32132,inst_32133,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32135 = cljs.core.filter.call(null,inst_32134,files);
var inst_32136 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32137 = cljs.core.concat.call(null,inst_32135,inst_32136);
var state_32234__$1 = (function (){var statearr_32249 = state_32234;
(statearr_32249[(17)] = inst_32131);

(statearr_32249[(12)] = inst_32137);

(statearr_32249[(18)] = inst_32133);

return statearr_32249;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32250_32331 = state_32234__$1;
(statearr_32250_32331[(1)] = (16));

} else {
var statearr_32251_32332 = state_32234__$1;
(statearr_32251_32332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (15))){
var inst_32121 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32252_32333 = state_32234__$1;
(statearr_32252_32333[(2)] = inst_32121);

(statearr_32252_32333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (21))){
var inst_32147 = (state_32234[(19)]);
var inst_32147__$1 = (state_32234[(2)]);
var inst_32148 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32147__$1);
var state_32234__$1 = (function (){var statearr_32253 = state_32234;
(statearr_32253[(19)] = inst_32147__$1);

return statearr_32253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32234__$1,(22),inst_32148);
} else {
if((state_val_32235 === (31))){
var inst_32232 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32234__$1,inst_32232);
} else {
if((state_val_32235 === (32))){
var inst_32187 = (state_32234[(16)]);
var inst_32192 = inst_32187.cljs$lang$protocol_mask$partition0$;
var inst_32193 = (inst_32192 & (64));
var inst_32194 = inst_32187.cljs$core$ISeq$;
var inst_32195 = (cljs.core.PROTOCOL_SENTINEL === inst_32194);
var inst_32196 = ((inst_32193) || (inst_32195));
var state_32234__$1 = state_32234;
if(cljs.core.truth_(inst_32196)){
var statearr_32254_32334 = state_32234__$1;
(statearr_32254_32334[(1)] = (35));

} else {
var statearr_32255_32335 = state_32234__$1;
(statearr_32255_32335[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (40))){
var inst_32209 = (state_32234[(20)]);
var inst_32208 = (state_32234[(2)]);
var inst_32209__$1 = cljs.core.get.call(null,inst_32208,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32210 = cljs.core.get.call(null,inst_32208,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32211 = cljs.core.not_empty.call(null,inst_32209__$1);
var state_32234__$1 = (function (){var statearr_32256 = state_32234;
(statearr_32256[(21)] = inst_32210);

(statearr_32256[(20)] = inst_32209__$1);

return statearr_32256;
})();
if(cljs.core.truth_(inst_32211)){
var statearr_32257_32336 = state_32234__$1;
(statearr_32257_32336[(1)] = (41));

} else {
var statearr_32258_32337 = state_32234__$1;
(statearr_32258_32337[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (33))){
var state_32234__$1 = state_32234;
var statearr_32259_32338 = state_32234__$1;
(statearr_32259_32338[(2)] = false);

(statearr_32259_32338[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (13))){
var inst_32107 = (state_32234[(22)]);
var inst_32111 = cljs.core.chunk_first.call(null,inst_32107);
var inst_32112 = cljs.core.chunk_rest.call(null,inst_32107);
var inst_32113 = cljs.core.count.call(null,inst_32111);
var inst_32094 = inst_32112;
var inst_32095 = inst_32111;
var inst_32096 = inst_32113;
var inst_32097 = (0);
var state_32234__$1 = (function (){var statearr_32260 = state_32234;
(statearr_32260[(7)] = inst_32097);

(statearr_32260[(8)] = inst_32094);

(statearr_32260[(9)] = inst_32096);

(statearr_32260[(10)] = inst_32095);

return statearr_32260;
})();
var statearr_32261_32339 = state_32234__$1;
(statearr_32261_32339[(2)] = null);

(statearr_32261_32339[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (22))){
var inst_32147 = (state_32234[(19)]);
var inst_32155 = (state_32234[(23)]);
var inst_32151 = (state_32234[(24)]);
var inst_32150 = (state_32234[(25)]);
var inst_32150__$1 = (state_32234[(2)]);
var inst_32151__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32150__$1);
var inst_32152 = (function (){var all_files = inst_32147;
var res_SINGLEQUOTE_ = inst_32150__$1;
var res = inst_32151__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32147,inst_32155,inst_32151,inst_32150,inst_32150__$1,inst_32151__$1,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32076_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32076_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32147,inst_32155,inst_32151,inst_32150,inst_32150__$1,inst_32151__$1,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32153 = cljs.core.filter.call(null,inst_32152,inst_32150__$1);
var inst_32154 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32155__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32154);
var inst_32156 = cljs.core.not_empty.call(null,inst_32155__$1);
var state_32234__$1 = (function (){var statearr_32262 = state_32234;
(statearr_32262[(26)] = inst_32153);

(statearr_32262[(23)] = inst_32155__$1);

(statearr_32262[(24)] = inst_32151__$1);

(statearr_32262[(25)] = inst_32150__$1);

return statearr_32262;
})();
if(cljs.core.truth_(inst_32156)){
var statearr_32263_32340 = state_32234__$1;
(statearr_32263_32340[(1)] = (23));

} else {
var statearr_32264_32341 = state_32234__$1;
(statearr_32264_32341[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (36))){
var state_32234__$1 = state_32234;
var statearr_32265_32342 = state_32234__$1;
(statearr_32265_32342[(2)] = false);

(statearr_32265_32342[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (41))){
var inst_32209 = (state_32234[(20)]);
var inst_32213 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32214 = cljs.core.map.call(null,inst_32213,inst_32209);
var inst_32215 = cljs.core.pr_str.call(null,inst_32214);
var inst_32216 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32215)].join('');
var inst_32217 = figwheel.client.utils.log.call(null,inst_32216);
var state_32234__$1 = state_32234;
var statearr_32266_32343 = state_32234__$1;
(statearr_32266_32343[(2)] = inst_32217);

(statearr_32266_32343[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (43))){
var inst_32210 = (state_32234[(21)]);
var inst_32220 = (state_32234[(2)]);
var inst_32221 = cljs.core.not_empty.call(null,inst_32210);
var state_32234__$1 = (function (){var statearr_32267 = state_32234;
(statearr_32267[(27)] = inst_32220);

return statearr_32267;
})();
if(cljs.core.truth_(inst_32221)){
var statearr_32268_32344 = state_32234__$1;
(statearr_32268_32344[(1)] = (44));

} else {
var statearr_32269_32345 = state_32234__$1;
(statearr_32269_32345[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (29))){
var inst_32153 = (state_32234[(26)]);
var inst_32187 = (state_32234[(16)]);
var inst_32147 = (state_32234[(19)]);
var inst_32155 = (state_32234[(23)]);
var inst_32151 = (state_32234[(24)]);
var inst_32150 = (state_32234[(25)]);
var inst_32183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32186 = (function (){var all_files = inst_32147;
var res_SINGLEQUOTE_ = inst_32150;
var res = inst_32151;
var files_not_loaded = inst_32153;
var dependencies_that_loaded = inst_32155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32153,inst_32187,inst_32147,inst_32155,inst_32151,inst_32150,inst_32183,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32185){
var map__32270 = p__32185;
var map__32270__$1 = ((((!((map__32270 == null)))?(((((map__32270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32270):map__32270);
var namespace = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32153,inst_32187,inst_32147,inst_32155,inst_32151,inst_32150,inst_32183,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32187__$1 = cljs.core.group_by.call(null,inst_32186,inst_32153);
var inst_32189 = (inst_32187__$1 == null);
var inst_32190 = cljs.core.not.call(null,inst_32189);
var state_32234__$1 = (function (){var statearr_32272 = state_32234;
(statearr_32272[(16)] = inst_32187__$1);

(statearr_32272[(28)] = inst_32183);

return statearr_32272;
})();
if(inst_32190){
var statearr_32273_32346 = state_32234__$1;
(statearr_32273_32346[(1)] = (32));

} else {
var statearr_32274_32347 = state_32234__$1;
(statearr_32274_32347[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (44))){
var inst_32210 = (state_32234[(21)]);
var inst_32223 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32210);
var inst_32224 = cljs.core.pr_str.call(null,inst_32223);
var inst_32225 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32224)].join('');
var inst_32226 = figwheel.client.utils.log.call(null,inst_32225);
var state_32234__$1 = state_32234;
var statearr_32275_32348 = state_32234__$1;
(statearr_32275_32348[(2)] = inst_32226);

(statearr_32275_32348[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (6))){
var inst_32128 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32276_32349 = state_32234__$1;
(statearr_32276_32349[(2)] = inst_32128);

(statearr_32276_32349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (28))){
var inst_32153 = (state_32234[(26)]);
var inst_32180 = (state_32234[(2)]);
var inst_32181 = cljs.core.not_empty.call(null,inst_32153);
var state_32234__$1 = (function (){var statearr_32277 = state_32234;
(statearr_32277[(29)] = inst_32180);

return statearr_32277;
})();
if(cljs.core.truth_(inst_32181)){
var statearr_32278_32350 = state_32234__$1;
(statearr_32278_32350[(1)] = (29));

} else {
var statearr_32279_32351 = state_32234__$1;
(statearr_32279_32351[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (25))){
var inst_32151 = (state_32234[(24)]);
var inst_32167 = (state_32234[(2)]);
var inst_32168 = cljs.core.not_empty.call(null,inst_32151);
var state_32234__$1 = (function (){var statearr_32280 = state_32234;
(statearr_32280[(30)] = inst_32167);

return statearr_32280;
})();
if(cljs.core.truth_(inst_32168)){
var statearr_32281_32352 = state_32234__$1;
(statearr_32281_32352[(1)] = (26));

} else {
var statearr_32282_32353 = state_32234__$1;
(statearr_32282_32353[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (34))){
var inst_32203 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
if(cljs.core.truth_(inst_32203)){
var statearr_32283_32354 = state_32234__$1;
(statearr_32283_32354[(1)] = (38));

} else {
var statearr_32284_32355 = state_32234__$1;
(statearr_32284_32355[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (17))){
var state_32234__$1 = state_32234;
var statearr_32285_32356 = state_32234__$1;
(statearr_32285_32356[(2)] = recompile_dependents);

(statearr_32285_32356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (3))){
var state_32234__$1 = state_32234;
var statearr_32286_32357 = state_32234__$1;
(statearr_32286_32357[(2)] = null);

(statearr_32286_32357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (12))){
var inst_32124 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32287_32358 = state_32234__$1;
(statearr_32287_32358[(2)] = inst_32124);

(statearr_32287_32358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (2))){
var inst_32086 = (state_32234[(13)]);
var inst_32093 = cljs.core.seq.call(null,inst_32086);
var inst_32094 = inst_32093;
var inst_32095 = null;
var inst_32096 = (0);
var inst_32097 = (0);
var state_32234__$1 = (function (){var statearr_32288 = state_32234;
(statearr_32288[(7)] = inst_32097);

(statearr_32288[(8)] = inst_32094);

(statearr_32288[(9)] = inst_32096);

(statearr_32288[(10)] = inst_32095);

return statearr_32288;
})();
var statearr_32289_32359 = state_32234__$1;
(statearr_32289_32359[(2)] = null);

(statearr_32289_32359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (23))){
var inst_32153 = (state_32234[(26)]);
var inst_32147 = (state_32234[(19)]);
var inst_32155 = (state_32234[(23)]);
var inst_32151 = (state_32234[(24)]);
var inst_32150 = (state_32234[(25)]);
var inst_32158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32160 = (function (){var all_files = inst_32147;
var res_SINGLEQUOTE_ = inst_32150;
var res = inst_32151;
var files_not_loaded = inst_32153;
var dependencies_that_loaded = inst_32155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32153,inst_32147,inst_32155,inst_32151,inst_32150,inst_32158,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32159){
var map__32290 = p__32159;
var map__32290__$1 = ((((!((map__32290 == null)))?(((((map__32290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32290):map__32290);
var request_url = cljs.core.get.call(null,map__32290__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32153,inst_32147,inst_32155,inst_32151,inst_32150,inst_32158,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32161 = cljs.core.reverse.call(null,inst_32155);
var inst_32162 = cljs.core.map.call(null,inst_32160,inst_32161);
var inst_32163 = cljs.core.pr_str.call(null,inst_32162);
var inst_32164 = figwheel.client.utils.log.call(null,inst_32163);
var state_32234__$1 = (function (){var statearr_32292 = state_32234;
(statearr_32292[(31)] = inst_32158);

return statearr_32292;
})();
var statearr_32293_32360 = state_32234__$1;
(statearr_32293_32360[(2)] = inst_32164);

(statearr_32293_32360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (35))){
var state_32234__$1 = state_32234;
var statearr_32294_32361 = state_32234__$1;
(statearr_32294_32361[(2)] = true);

(statearr_32294_32361[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (19))){
var inst_32137 = (state_32234[(12)]);
var inst_32143 = figwheel.client.file_reloading.expand_files.call(null,inst_32137);
var state_32234__$1 = state_32234;
var statearr_32295_32362 = state_32234__$1;
(statearr_32295_32362[(2)] = inst_32143);

(statearr_32295_32362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (11))){
var state_32234__$1 = state_32234;
var statearr_32296_32363 = state_32234__$1;
(statearr_32296_32363[(2)] = null);

(statearr_32296_32363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (9))){
var inst_32126 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32297_32364 = state_32234__$1;
(statearr_32297_32364[(2)] = inst_32126);

(statearr_32297_32364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (5))){
var inst_32097 = (state_32234[(7)]);
var inst_32096 = (state_32234[(9)]);
var inst_32099 = (inst_32097 < inst_32096);
var inst_32100 = inst_32099;
var state_32234__$1 = state_32234;
if(cljs.core.truth_(inst_32100)){
var statearr_32298_32365 = state_32234__$1;
(statearr_32298_32365[(1)] = (7));

} else {
var statearr_32299_32366 = state_32234__$1;
(statearr_32299_32366[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (14))){
var inst_32107 = (state_32234[(22)]);
var inst_32116 = cljs.core.first.call(null,inst_32107);
var inst_32117 = figwheel.client.file_reloading.eval_body.call(null,inst_32116,opts);
var inst_32118 = cljs.core.next.call(null,inst_32107);
var inst_32094 = inst_32118;
var inst_32095 = null;
var inst_32096 = (0);
var inst_32097 = (0);
var state_32234__$1 = (function (){var statearr_32300 = state_32234;
(statearr_32300[(7)] = inst_32097);

(statearr_32300[(8)] = inst_32094);

(statearr_32300[(32)] = inst_32117);

(statearr_32300[(9)] = inst_32096);

(statearr_32300[(10)] = inst_32095);

return statearr_32300;
})();
var statearr_32301_32367 = state_32234__$1;
(statearr_32301_32367[(2)] = null);

(statearr_32301_32367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (45))){
var state_32234__$1 = state_32234;
var statearr_32302_32368 = state_32234__$1;
(statearr_32302_32368[(2)] = null);

(statearr_32302_32368[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (26))){
var inst_32153 = (state_32234[(26)]);
var inst_32147 = (state_32234[(19)]);
var inst_32155 = (state_32234[(23)]);
var inst_32151 = (state_32234[(24)]);
var inst_32150 = (state_32234[(25)]);
var inst_32170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32172 = (function (){var all_files = inst_32147;
var res_SINGLEQUOTE_ = inst_32150;
var res = inst_32151;
var files_not_loaded = inst_32153;
var dependencies_that_loaded = inst_32155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32153,inst_32147,inst_32155,inst_32151,inst_32150,inst_32170,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32171){
var map__32303 = p__32171;
var map__32303__$1 = ((((!((map__32303 == null)))?(((((map__32303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32303):map__32303);
var namespace = cljs.core.get.call(null,map__32303__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32153,inst_32147,inst_32155,inst_32151,inst_32150,inst_32170,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32173 = cljs.core.map.call(null,inst_32172,inst_32151);
var inst_32174 = cljs.core.pr_str.call(null,inst_32173);
var inst_32175 = figwheel.client.utils.log.call(null,inst_32174);
var inst_32176 = (function (){var all_files = inst_32147;
var res_SINGLEQUOTE_ = inst_32150;
var res = inst_32151;
var files_not_loaded = inst_32153;
var dependencies_that_loaded = inst_32155;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32153,inst_32147,inst_32155,inst_32151,inst_32150,inst_32170,inst_32172,inst_32173,inst_32174,inst_32175,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32153,inst_32147,inst_32155,inst_32151,inst_32150,inst_32170,inst_32172,inst_32173,inst_32174,inst_32175,state_val_32235,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32177 = setTimeout(inst_32176,(10));
var state_32234__$1 = (function (){var statearr_32305 = state_32234;
(statearr_32305[(33)] = inst_32175);

(statearr_32305[(34)] = inst_32170);

return statearr_32305;
})();
var statearr_32306_32369 = state_32234__$1;
(statearr_32306_32369[(2)] = inst_32177);

(statearr_32306_32369[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (16))){
var state_32234__$1 = state_32234;
var statearr_32307_32370 = state_32234__$1;
(statearr_32307_32370[(2)] = reload_dependents);

(statearr_32307_32370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (38))){
var inst_32187 = (state_32234[(16)]);
var inst_32205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32187);
var state_32234__$1 = state_32234;
var statearr_32308_32371 = state_32234__$1;
(statearr_32308_32371[(2)] = inst_32205);

(statearr_32308_32371[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (30))){
var state_32234__$1 = state_32234;
var statearr_32309_32372 = state_32234__$1;
(statearr_32309_32372[(2)] = null);

(statearr_32309_32372[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (10))){
var inst_32107 = (state_32234[(22)]);
var inst_32109 = cljs.core.chunked_seq_QMARK_.call(null,inst_32107);
var state_32234__$1 = state_32234;
if(inst_32109){
var statearr_32310_32373 = state_32234__$1;
(statearr_32310_32373[(1)] = (13));

} else {
var statearr_32311_32374 = state_32234__$1;
(statearr_32311_32374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (18))){
var inst_32141 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
if(cljs.core.truth_(inst_32141)){
var statearr_32312_32375 = state_32234__$1;
(statearr_32312_32375[(1)] = (19));

} else {
var statearr_32313_32376 = state_32234__$1;
(statearr_32313_32376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (42))){
var state_32234__$1 = state_32234;
var statearr_32314_32377 = state_32234__$1;
(statearr_32314_32377[(2)] = null);

(statearr_32314_32377[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (37))){
var inst_32200 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32315_32378 = state_32234__$1;
(statearr_32315_32378[(2)] = inst_32200);

(statearr_32315_32378[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (8))){
var inst_32094 = (state_32234[(8)]);
var inst_32107 = (state_32234[(22)]);
var inst_32107__$1 = cljs.core.seq.call(null,inst_32094);
var state_32234__$1 = (function (){var statearr_32316 = state_32234;
(statearr_32316[(22)] = inst_32107__$1);

return statearr_32316;
})();
if(inst_32107__$1){
var statearr_32317_32379 = state_32234__$1;
(statearr_32317_32379[(1)] = (10));

} else {
var statearr_32318_32380 = state_32234__$1;
(statearr_32318_32380[(1)] = (11));

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
});})(c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23223__auto__,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto____0 = (function (){
var statearr_32319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32319[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto__);

(statearr_32319[(1)] = (1));

return statearr_32319;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto____1 = (function (state_32234){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_32234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e32320){if((e32320 instanceof Object)){
var ex__23227__auto__ = e32320;
var statearr_32321_32381 = state_32234;
(statearr_32321_32381[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32382 = state_32234;
state_32234 = G__32382;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto__ = function(state_32234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto____1.call(this,state_32234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23382__auto__ = (function (){var statearr_32322 = f__23381__auto__.call(null);
(statearr_32322[(6)] = c__23380__auto__);

return statearr_32322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__,map__32079,map__32079__$1,opts,before_jsload,on_jsload,reload_dependents,map__32080,map__32080__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23380__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32385,link){
var map__32386 = p__32385;
var map__32386__$1 = ((((!((map__32386 == null)))?(((((map__32386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32386):map__32386);
var file = cljs.core.get.call(null,map__32386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__32386,map__32386__$1,file){
return (function (p1__32383_SHARP_,p2__32384_SHARP_){
if(cljs.core._EQ_.call(null,p1__32383_SHARP_,p2__32384_SHARP_)){
return p1__32383_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__32386,map__32386__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32389){
var map__32390 = p__32389;
var map__32390__$1 = ((((!((map__32390 == null)))?(((((map__32390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32390):map__32390);
var match_length = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32388_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32388_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32392_SHARP_,p2__32393_SHARP_){
return cljs.core.assoc.call(null,p1__32392_SHARP_,cljs.core.get.call(null,p2__32393_SHARP_,key),p2__32393_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32394 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32394);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32394);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32395,p__32396){
var map__32397 = p__32395;
var map__32397__$1 = ((((!((map__32397 == null)))?(((((map__32397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32397):map__32397);
var on_cssload = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32398 = p__32396;
var map__32398__$1 = ((((!((map__32398 == null)))?(((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32398):map__32398);
var files_msg = map__32398__$1;
var files = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521209065624
