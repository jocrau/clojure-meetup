// Compiled by ClojureScript 1.10.145 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('module$Users$jocrau$dev$workspaces$clojure_meetup$node_modules$react_dom$index');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return module$Users$jocrau$dev$workspaces$clojure_meetup$node_modules$react_dom$index["default"].unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_22514 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return module$Users$jocrau$dev$workspaces$clojure_meetup$node_modules$react_dom$index["default"].render(comp.call(null),container,((function (_STAR_always_update_STAR_22514){
return (function (){
var _STAR_always_update_STAR_22515 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22515;
}});})(_STAR_always_update_STAR_22514))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22514;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22517 = arguments.length;
switch (G__22517) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$Users$jocrau$dev$workspaces$clojure_meetup$node_modules$react_dom$index["default"].findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__22519_22523 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__22520_22524 = null;
var count__22521_22525 = (0);
var i__22522_22526 = (0);
while(true){
if((i__22522_22526 < count__22521_22525)){
var v_22527 = cljs.core._nth.call(null,chunk__22520_22524,i__22522_22526);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22527);


var G__22528 = seq__22519_22523;
var G__22529 = chunk__22520_22524;
var G__22530 = count__22521_22525;
var G__22531 = (i__22522_22526 + (1));
seq__22519_22523 = G__22528;
chunk__22520_22524 = G__22529;
count__22521_22525 = G__22530;
i__22522_22526 = G__22531;
continue;
} else {
var temp__5457__auto___22532 = cljs.core.seq.call(null,seq__22519_22523);
if(temp__5457__auto___22532){
var seq__22519_22533__$1 = temp__5457__auto___22532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22519_22533__$1)){
var c__4319__auto___22534 = cljs.core.chunk_first.call(null,seq__22519_22533__$1);
var G__22535 = cljs.core.chunk_rest.call(null,seq__22519_22533__$1);
var G__22536 = c__4319__auto___22534;
var G__22537 = cljs.core.count.call(null,c__4319__auto___22534);
var G__22538 = (0);
seq__22519_22523 = G__22535;
chunk__22520_22524 = G__22536;
count__22521_22525 = G__22537;
i__22522_22526 = G__22538;
continue;
} else {
var v_22539 = cljs.core.first.call(null,seq__22519_22533__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22539);


var G__22540 = cljs.core.next.call(null,seq__22519_22533__$1);
var G__22541 = null;
var G__22542 = (0);
var G__22543 = (0);
seq__22519_22523 = G__22540;
chunk__22520_22524 = G__22541;
count__22521_22525 = G__22542;
i__22522_22526 = G__22543;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1528126809021
