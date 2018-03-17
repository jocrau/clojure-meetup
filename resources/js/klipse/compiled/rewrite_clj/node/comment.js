// Compiled by ClojureScript 1.10.145 {}
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

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k15017,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__15021 = k15017;
var G__15021__$1 = (((G__15021 instanceof cljs.core.Keyword))?G__15021.fqn:null);
switch (G__15021__$1) {
case "s":
return self__.s;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15017,else__4175__auto__);

}
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#rewrite-clj.node.comment.CommentNode{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15016){
var self__ = this;
var G__15016__$1 = this;
return (new cljs.core.RecordIter((0),G__15016__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (495469178 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15018,other15019){
var self__ = this;
var this15018__$1 = this;
return ((!((other15019 == null))) && ((this15018__$1.constructor === other15019.constructor)) && (cljs.core._EQ_.call(null,this15018__$1.s,other15019.s)) && (cljs.core._EQ_.call(null,this15018__$1.__extmap,other15019.__extmap)));
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

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__15016){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__15022 = cljs.core.keyword_identical_QMARK_;
var expr__15023 = k__4180__auto__;
if(cljs.core.truth_(pred__15022.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__15023))){
return (new rewrite_clj.node.comment.CommentNode(G__15016,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__15016),null));
}
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null))], null),self__.__extmap));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__15016){
var self__ = this;
var this__4171__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.s,G__15016,self__.__extmap,self__.__hash));
});

rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

rewrite_clj.node.comment.CommentNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
});

rewrite_clj.node.comment.CommentNode.cljs$lang$type = true;

rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.comment/CommentNode",null,(1),null));
});

rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"rewrite-clj.node.comment/CommentNode");
});

/**
 * Positional factory function for rewrite-clj.node.comment/CommentNode.
 */
rewrite_clj.node.comment.__GT_CommentNode = (function rewrite_clj$node$comment$__GT_CommentNode(s){
return (new rewrite_clj.node.comment.CommentNode(s,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.comment/CommentNode, taking a map of keywords to field values.
 */
rewrite_clj.node.comment.map__GT_CommentNode = (function rewrite_clj$node$comment$map__GT_CommentNode(G__15020){
return (new rewrite_clj.node.comment.CommentNode(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__15020),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__15020,new cljs.core.Keyword(null,"s","s",1705939918))),null));
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
