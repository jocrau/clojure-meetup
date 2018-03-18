// Compiled by ClojureScript 1.9.946 {}
goog.provide('rewrite_clj.node.keyword');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rewrite_clj.node.keyword.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.keyword.KeywordNode = (function (k,namespaced_QMARK_,__meta,__extmap,__hash){
this.k = k;
this.namespaced_QMARK_ = namespaced_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.keyword.KeywordNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k31663,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__31667 = k31663;
var G__31667__$1 = (((G__31667 instanceof cljs.core.Keyword))?G__31667.fqn:null);
switch (G__31667__$1) {
case "k":
return self__.k;

break;
case "namespaced?":
return self__.namespaced_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31663,else__9607__auto__);

}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#rewrite-clj.node.keyword.KeywordNode{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_],null))], null),self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31662){
var self__ = this;
var G__31662__$1 = this;
return (new cljs.core.RecordIter((0),G__31662__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-1681863292 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31664,other31665){
var self__ = this;
var this31664__$1 = this;
return (!((other31665 == null))) && ((this31664__$1.constructor === other31665.constructor)) && (cljs.core._EQ_.call(null,this31664__$1.k,other31665.k)) && (cljs.core._EQ_.call(null,this31664__$1.namespaced_QMARK_,other31665.namespaced_QMARK_)) && (cljs.core._EQ_.call(null,this31664__$1.__extmap,other31665.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__8904__auto__ = self__.namespaced_QMARK_;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not.call(null,cljs.core.namespace.call(null,self__.k));
} else {
return and__8904__auto__;
}
})())){
throw (new Error("Namespaced keywords not supported !"));
} else {
return self__.k;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c = (cljs.core.count.call(null,cljs.core.name.call(null,self__.k)) + (1));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return (c + (1));
} else {
var temp__5455__auto__ = cljs.core.namespace.call(null,self__.k);
if(cljs.core.truth_(temp__5455__auto__)){
var nspace = temp__5455__auto__;
return (((1) + c) + cljs.core.count.call(null,nspace));
} else {
return c;
}
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = cljs.core.pr_str.call(null,self__.k);
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
} else {
return v;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__31662){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__31668 = cljs.core.keyword_identical_QMARK_;
var expr__31669 = k__9612__auto__;
if(cljs.core.truth_(pred__31668.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__31669))){
return (new rewrite_clj.node.keyword.KeywordNode(G__31662,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31668.call(null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),expr__31669))){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,G__31662,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__31662),null));
}
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_],null))], null),self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__31662){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,G__31662,self__.__extmap,self__.__hash));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rewrite_clj.node.keyword.KeywordNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"namespaced?","namespaced?",763218650,null)], null);
});

rewrite_clj.node.keyword.KeywordNode.cljs$lang$type = true;

rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.keyword/KeywordNode");
});

rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"rewrite-clj.node.keyword/KeywordNode");
});

rewrite_clj.node.keyword.__GT_KeywordNode = (function rewrite_clj$node$keyword$__GT_KeywordNode(k,namespaced_QMARK_){
return (new rewrite_clj.node.keyword.KeywordNode(k,namespaced_QMARK_,null,null,null));
});

rewrite_clj.node.keyword.map__GT_KeywordNode = (function rewrite_clj$node$keyword$map__GT_KeywordNode(G__31666){
return (new rewrite_clj.node.keyword.KeywordNode(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__31666),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877).cljs$core$IFn$_invoke$arity$1(G__31666),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31666,new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877))),null));
});

/**
 * Create node representing a keyword. If `namespaced?` is given as `true`
 * a keyword à la `::x` or `::ns/x` (i.e. namespaced/aliased) is generated.
 */
rewrite_clj.node.keyword.keyword_node = (function rewrite_clj$node$keyword$keyword_node(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31678 = arguments.length;
var i__10196__auto___31679 = (0);
while(true){
if((i__10196__auto___31679 < len__10195__auto___31678)){
args__10202__auto__.push((arguments[i__10196__auto___31679]));

var G__31680 = (i__10196__auto___31679 + (1));
i__10196__auto___31679 = G__31680;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__31674){
var vec__31675 = p__31674;
var namespaced_QMARK_ = cljs.core.nth.call(null,vec__31675,(0),null);
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? k)"));
}

return rewrite_clj.node.keyword.__GT_KeywordNode.call(null,k,namespaced_QMARK_);
});

rewrite_clj.node.keyword.keyword_node.cljs$lang$maxFixedArity = (1);

rewrite_clj.node.keyword.keyword_node.cljs$lang$applyTo = (function (seq31672){
var G__31673 = cljs.core.first.call(null,seq31672);
var seq31672__$1 = cljs.core.next.call(null,seq31672);
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic(G__31673,seq31672__$1);
});


//# sourceMappingURL=keyword.js.map
