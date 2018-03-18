// Compiled by ClojureScript 1.9.946 {}
goog.provide('rewrite_clj.node.comment');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.comment.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.comment.CommentNode = (function (s,__meta,__extmap,__hash){
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.comment.CommentNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k31684,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__31688 = k31684;
var G__31688__$1 = (((G__31688 instanceof cljs.core.Keyword))?G__31688.fqn:null);
switch (G__31688__$1) {
case "s":
return self__.s;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31684,else__9607__auto__);

}
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#rewrite-clj.node.comment.CommentNode{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31683){
var self__ = this;
var G__31683__$1 = this;
return (new cljs.core.RecordIter((0),G__31683__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (495469178 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31685,other31686){
var self__ = this;
var this31685__$1 = this;
return (!((other31686 == null))) && ((this31685__$1.constructor === other31686.constructor)) && (cljs.core._EQ_.call(null,this31685__$1.s,other31686.s)) && (cljs.core._EQ_.call(null,this31685__$1.__extmap,other31686.__extmap));
});

rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"comment","comment",532206069);
});

rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation"));
});

rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((1) + cljs.core.count.call(null,self__.s));
});

rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [";",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s)].join('');
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__31683){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__31689 = cljs.core.keyword_identical_QMARK_;
var expr__31690 = k__9612__auto__;
if(cljs.core.truth_(pred__31689.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__31690))){
return (new rewrite_clj.node.comment.CommentNode(G__31683,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__31683),null));
}
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__31683){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.s,G__31683,self__.__extmap,self__.__hash));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rewrite_clj.node.comment.CommentNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
});

rewrite_clj.node.comment.CommentNode.cljs$lang$type = true;

rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.comment/CommentNode");
});

rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"rewrite-clj.node.comment/CommentNode");
});

rewrite_clj.node.comment.__GT_CommentNode = (function rewrite_clj$node$comment$__GT_CommentNode(s){
return (new rewrite_clj.node.comment.CommentNode(s,null,null,null));
});

rewrite_clj.node.comment.map__GT_CommentNode = (function rewrite_clj$node$comment$map__GT_CommentNode(G__31687){
return (new rewrite_clj.node.comment.CommentNode(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__31687),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31687,new cljs.core.Keyword(null,"s","s",1705939918))),null));
});

/**
 * Create node representing an EDN comment.
 */
rewrite_clj.node.comment.comment_node = (function rewrite_clj$node$comment$comment_node(s){
return rewrite_clj.node.comment.__GT_CommentNode.call(null,s);
});
/**
 * Check whether a node represents a comment.
 */
rewrite_clj.node.comment.comment_QMARK_ = (function rewrite_clj$node$comment$comment_QMARK_(node){
return cljs.core._EQ_.call(null,rewrite_clj.node.protocols.tag.call(null,node),new cljs.core.Keyword(null,"comment","comment",532206069));
});

//# sourceMappingURL=comment.js.map
