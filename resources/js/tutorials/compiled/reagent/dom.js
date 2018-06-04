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
var _STAR_always_update_STAR_22546 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return module$Users$jocrau$dev$workspaces$clojure_meetup$node_modules$react_dom$index["default"].render(comp.call(null),container,((function (_STAR_always_update_STAR_22546){
return (function (){
var _STAR_always_update_STAR_22547 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22547;
}});})(_STAR_always_update_STAR_22546))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22546;
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
var G__22549 = arguments.length;
switch (G__22549) {
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

var seq__22551_22555 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__22552_22556 = null;
var count__22553_22557 = (0);
var i__22554_22558 = (0);
while(true){
if((i__22554_22558 < count__22553_22557)){
var v_22559 = cljs.core._nth.call(null,chunk__22552_22556,i__22554_22558);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22559);


var G__22560 = seq__22551_22555;
var G__22561 = chunk__22552_22556;
var G__22562 = count__22553_22557;
var G__22563 = (i__22554_22558 + (1));
seq__22551_22555 = G__22560;
chunk__22552_22556 = G__22561;
count__22553_22557 = G__22562;
i__22554_22558 = G__22563;
continue;
} else {
var temp__5457__auto___22564 = cljs.core.seq.call(null,seq__22551_22555);
if(temp__5457__auto___22564){
var seq__22551_22565__$1 = temp__5457__auto___22564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22551_22565__$1)){
var c__4319__auto___22566 = cljs.core.chunk_first.call(null,seq__22551_22565__$1);
var G__22567 = cljs.core.chunk_rest.call(null,seq__22551_22565__$1);
var G__22568 = c__4319__auto___22566;
var G__22569 = cljs.core.count.call(null,c__4319__auto___22566);
var G__22570 = (0);
seq__22551_22555 = G__22567;
chunk__22552_22556 = G__22568;
count__22553_22557 = G__22569;
i__22554_22558 = G__22570;
continue;
} else {
var v_22571 = cljs.core.first.call(null,seq__22551_22565__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22571);


var G__22572 = cljs.core.next.call(null,seq__22551_22565__$1);
var G__22573 = null;
var G__22574 = (0);
var G__22575 = (0);
seq__22551_22555 = G__22572;
chunk__22552_22556 = G__22573;
count__22553_22557 = G__22574;
i__22554_22558 = G__22575;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1528126809080
