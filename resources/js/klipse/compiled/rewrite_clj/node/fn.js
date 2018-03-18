// Compiled by ClojureScript 1.9.946 {}
goog.provide('rewrite_clj.node.fn');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('clojure.walk');
/**
 * Construct function form.
 */
rewrite_clj.node.fn.construct_fn = (function rewrite_clj$node$fn$construct_fn(syms,vararg,body){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.concat.call(null,syms,(cljs.core.truth_(vararg)?cljs.core._conj.call(null,(function (){var x__9870__auto__ = vararg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"&","&",-2144855648,null)):null)));
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null));
});
/**
 * Get index based on the substring following the parameter's `%`.
 * Zero means vararg.
 */
rewrite_clj.node.fn.sym_index = (function rewrite_clj$node$fn$sym_index(n){
if(cljs.core._EQ_.call(null,n,"&")){
return (0);
} else {
if(cljs.core._EQ_.call(null,n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,n))){
return parseInt(n);
} else {
throw (new Error("arg literal must be %, %& or %integer."));

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_clj.node.fn.symbol__GT_gensym = (function rewrite_clj$node$fn$symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name.call(null,sym);
if(cljs.core._EQ_.call(null,nm.indexOf("%"),(0))){
var i = rewrite_clj.node.fn.sym_index.call(null,cljs.core.subs.call(null,nm,(1)));
cljs.core.swap_BANG_.call(null,max_n,cljs.core.max,i);

return cljs.core.nth.call(null,sym_seq,i);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_clj.node.fn.fn_walk = (function rewrite_clj$node$fn$fn_walk(form){
var syms = (function (){var iter__9798__auto__ = (function rewrite_clj$node$fn$fn_walk_$_iter__31606(s__31607){
return (new cljs.core.LazySeq(null,(function (){
var s__31607__$1 = s__31607;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__31607__$1);
if(temp__5457__auto__){
var s__31607__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31607__$2)){
var c__9796__auto__ = cljs.core.chunk_first.call(null,s__31607__$2);
var size__9797__auto__ = cljs.core.count.call(null,c__9796__auto__);
var b__31609 = cljs.core.chunk_buffer.call(null,size__9797__auto__);
if((function (){var i__31608 = (0);
while(true){
if((i__31608 < size__9797__auto__)){
var i = cljs.core._nth.call(null,c__9796__auto__,i__31608);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
cljs.core.chunk_append.call(null,b__31609,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"#"].join('')));

var G__31610 = (i__31608 + (1));
i__31608 = G__31610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31609),rewrite_clj$node$fn$fn_walk_$_iter__31606.call(null,cljs.core.chunk_rest.call(null,s__31607__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31609),null);
}
} else {
var i = cljs.core.first.call(null,s__31607__$2);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
return cljs.core.cons.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"#"].join('')),rewrite_clj$node$fn$fn_walk_$_iter__31606.call(null,cljs.core.rest.call(null,s__31607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9798__auto__.call(null,cljs.core.range.call(null));
})();
var vararg_QMARK_ = false;
var max_n = cljs.core.atom.call(null,(0));
var body = clojure.walk.prewalk.call(null,((function (syms,vararg_QMARK_,max_n){
return (function (p1__31605_SHARP_){
var or__8916__auto__ = rewrite_clj.node.fn.symbol__GT_gensym.call(null,syms,vararg_QMARK_,max_n,p1__31605_SHARP_);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return p1__31605_SHARP_;
}
});})(syms,vararg_QMARK_,max_n))
,form);
return rewrite_clj.node.fn.construct_fn.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,max_n),cljs.core.rest.call(null,syms)),null,body);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.fn.Object}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k31612,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__31616 = k31612;
var G__31616__$1 = (((G__31616 instanceof cljs.core.Keyword))?G__31616.fqn:null);
switch (G__31616__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31612,else__9607__auto__);

}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#rewrite-clj.node.fn.FnNode{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31611){
var self__ = this;
var G__31611__$1 = this;
return (new cljs.core.RecordIter((0),G__31611__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-1740346885 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31613,other31614){
var self__ = this;
var this31613__$1 = this;
return (!((other31614 == null))) && ((this31613__$1.constructor === other31614.constructor)) && (cljs.core._EQ_.call(null,this31613__$1.children,other31614.children)) && (cljs.core._EQ_.call(null,this31613__$1.__extmap,other31614.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.fn.fn_walk.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((3) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children)),")"].join('');
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__31611){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__31617 = cljs.core.keyword_identical_QMARK_;
var expr__31618 = k__9612__auto__;
if(cljs.core.truth_(pred__31617.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__31618))){
return (new rewrite_clj.node.fn.FnNode(G__31611,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__31611),null));
}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__31611){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,G__31611,self__.__extmap,self__.__hash));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rewrite_clj.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.fn.FnNode.cljs$lang$type = true;

rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.fn/FnNode");
});

rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"rewrite-clj.node.fn/FnNode");
});

rewrite_clj.node.fn.__GT_FnNode = (function rewrite_clj$node$fn$__GT_FnNode(children){
return (new rewrite_clj.node.fn.FnNode(children,null,null,null));
});

rewrite_clj.node.fn.map__GT_FnNode = (function rewrite_clj$node$fn$map__GT_FnNode(G__31615){
return (new rewrite_clj.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__31615),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31615,new cljs.core.Keyword(null,"children","children",-940561982))),null));
});

/**
 * Create node representing an anonymous function.
 */
rewrite_clj.node.fn.fn_node = (function rewrite_clj$node$fn$fn_node(children){
return rewrite_clj.node.fn.__GT_FnNode.call(null,children);
});

//# sourceMappingURL=fn.js.map
