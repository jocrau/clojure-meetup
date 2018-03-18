// Compiled by ClojureScript 1.9.946 {}
goog.provide('rewrite_clj.node.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
/**
 * This function is applied to every newline string.
 */
rewrite_clj.node.whitespace._STAR_newline_fn_STAR_ = cljs.core.identity;
/**
 * This function is applied to every newline string and should produce
 * the eventual character count.
 */
rewrite_clj.node.whitespace._STAR_count_fn_STAR_ = cljs.core.count;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.whitespace.Object}
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
rewrite_clj.node.whitespace.WhitespaceNode = (function (whitespace,__meta,__extmap,__hash){
this.whitespace = whitespace;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k31530,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__31534 = k31530;
var G__31534__$1 = (((G__31534 instanceof cljs.core.Keyword))?G__31534.fqn:null);
switch (G__31534__$1) {
case "whitespace":
return self__.whitespace;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31530,else__9607__auto__);

}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#rewrite-clj.node.whitespace.WhitespaceNode{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31529){
var self__ = this;
var G__31529__$1 = this;
return (new cljs.core.RecordIter((0),G__31529__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1595850179 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31531,other31532){
var self__ = this;
var this31531__$1 = this;
return (!((other31532 == null))) && ((this31531__$1.constructor === other31532.constructor)) && (cljs.core._EQ_.call(null,this31531__$1.whitespace,other31532.whitespace)) && (cljs.core._EQ_.call(null,this31531__$1.__extmap,other31532.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation"));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.whitespace);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.whitespace;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__31529){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__31535 = cljs.core.keyword_identical_QMARK_;
var expr__31536 = k__9612__auto__;
if(cljs.core.truth_(pred__31535.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__31536))){
return (new rewrite_clj.node.whitespace.WhitespaceNode(G__31529,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__31529),null));
}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__31529){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,G__31529,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rewrite_clj.node.whitespace.WhitespaceNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"whitespace","whitespace",300496044,null)], null);
});

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$type = true;

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.whitespace/WhitespaceNode");
});

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"rewrite-clj.node.whitespace/WhitespaceNode");
});

rewrite_clj.node.whitespace.__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$__GT_WhitespaceNode(whitespace){
return (new rewrite_clj.node.whitespace.WhitespaceNode(whitespace,null,null,null));
});

rewrite_clj.node.whitespace.map__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$map__GT_WhitespaceNode(G__31533){
return (new rewrite_clj.node.whitespace.WhitespaceNode(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483).cljs$core$IFn$_invoke$arity$1(G__31533),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31533,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.whitespace.Object}
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
rewrite_clj.node.whitespace.NewlineNode = (function (newlines,__meta,__extmap,__hash){
this.newlines = newlines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.whitespace.NewlineNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k31540,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__31544 = k31540;
var G__31544__$1 = (((G__31544 instanceof cljs.core.Keyword))?G__31544.fqn:null);
switch (G__31544__$1) {
case "newlines":
return self__.newlines;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31540,else__9607__auto__);

}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#rewrite-clj.node.whitespace.NewlineNode{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31539){
var self__ = this;
var G__31539__$1 = this;
return (new cljs.core.RecordIter((0),G__31539__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (979711303 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31541,other31542){
var self__ = this;
var this31541__$1 = this;
return (!((other31542 == null))) && ((this31541__$1.constructor === other31542.constructor)) && (cljs.core._EQ_.call(null,this31541__$1.newlines,other31542.newlines)) && (cljs.core._EQ_.call(null,this31541__$1.__extmap,other31542.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"newline","newline",1790071323);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation"));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.whitespace._STAR_count_fn_STAR_.call(null,self__.newlines);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.whitespace._STAR_newline_fn_STAR_.call(null,self__.newlines);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__31539){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__31545 = cljs.core.keyword_identical_QMARK_;
var expr__31546 = k__9612__auto__;
if(cljs.core.truth_(pred__31545.call(null,new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__31546))){
return (new rewrite_clj.node.whitespace.NewlineNode(G__31539,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__31539),null));
}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__31539){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,G__31539,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rewrite_clj.node.whitespace.NewlineNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newlines","newlines",455080009,null)], null);
});

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$type = true;

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.whitespace/NewlineNode");
});

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"rewrite-clj.node.whitespace/NewlineNode");
});

rewrite_clj.node.whitespace.__GT_NewlineNode = (function rewrite_clj$node$whitespace$__GT_NewlineNode(newlines){
return (new rewrite_clj.node.whitespace.NewlineNode(newlines,null,null,null));
});

rewrite_clj.node.whitespace.map__GT_NewlineNode = (function rewrite_clj$node$whitespace$map__GT_NewlineNode(G__31543){
return (new rewrite_clj.node.whitespace.NewlineNode(new cljs.core.Keyword(null,"newlines","newlines",-1185451518).cljs$core$IFn$_invoke$arity$1(G__31543),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31543,new cljs.core.Keyword(null,"newlines","newlines",-1185451518))),null));
});

/**
 * Create whitespace node.
 */
rewrite_clj.node.whitespace.whitespace_node = (function rewrite_clj$node$whitespace$whitespace_node(s){
return rewrite_clj.node.whitespace.__GT_WhitespaceNode.call(null,s);
});
/**
 * Create newline node.
 */
rewrite_clj.node.whitespace.newline_node = (function rewrite_clj$node$whitespace$newline_node(s){
return rewrite_clj.node.whitespace.__GT_NewlineNode.call(null,s);
});
/**
 * Check whether a character represents a linebreak.
 */
rewrite_clj.node.whitespace.newline_QMARK_ = (function rewrite_clj$node$whitespace$newline_QMARK_(c){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null),c);
});
/**
 * Convert a string of whitespace to whitespace/newline nodes.
 */
rewrite_clj.node.whitespace.whitespace_nodes = (function rewrite_clj$node$whitespace$whitespace_nodes(s){
return cljs.core.map.call(null,(function (char_seq){
var s__$1 = cljs.core.apply.call(null,cljs.core.str,char_seq);
if(cljs.core.truth_(rewrite_clj.node.whitespace.newline_QMARK_.call(null,cljs.core.first.call(null,char_seq)))){
return rewrite_clj.node.whitespace.newline_node.call(null,s__$1);
} else {
return rewrite_clj.node.whitespace.whitespace_node.call(null,s__$1);
}
}),cljs.core.partition_by.call(null,rewrite_clj.node.whitespace.newline_QMARK_,s));
});
/**
 * Create node representing the given number of spaces.
 */
rewrite_clj.node.whitespace.spaces = (function rewrite_clj$node$whitespace$spaces(n){
return rewrite_clj.node.whitespace.whitespace_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n," ")));
});
/**
 * Create node representing the given number of newline characters.
 */
rewrite_clj.node.whitespace.newlines = (function rewrite_clj$node$whitespace$newlines(n){
return rewrite_clj.node.whitespace.newline_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"\n")));
});
var comma_31549 = rewrite_clj.node.whitespace.whitespace_node.call(null,", ");
/**
 * Interleave the given seq of nodes with `", "` nodes.
 */
rewrite_clj.node.whitespace.comma_separated = ((function (comma_31549){
return (function rewrite_clj$node$whitespace$comma_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,comma_31549)));
});})(comma_31549))
;
var nl_31550 = rewrite_clj.node.whitespace.newline_node.call(null,"\n");
/**
 * Interleave the given seq of nodes with newline nodes.
 */
rewrite_clj.node.whitespace.line_separated = ((function (nl_31550){
return (function rewrite_clj$node$whitespace$line_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,nl_31550)));
});})(nl_31550))
;
var space_31551 = rewrite_clj.node.whitespace.whitespace_node.call(null," ");
/**
 * Interleave the given seq of nodes with `" "` nodes.
 */
rewrite_clj.node.whitespace.space_separated = ((function (space_31551){
return (function rewrite_clj$node$whitespace$space_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,space_31551)));
});})(space_31551))
;
/**
 * Check whether a node represents whitespace.
 */
rewrite_clj.node.whitespace.whitespace_QMARK_ = (function rewrite_clj$node$whitespace$whitespace_QMARK_(node){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),rewrite_clj.node.protocols.tag.call(null,node));
});
/**
 * Check whether a ndoe represents linebreaks.
 */
rewrite_clj.node.whitespace.linebreak_QMARK_ = (function rewrite_clj$node$whitespace$linebreak_QMARK_(node){
return cljs.core._EQ_.call(null,rewrite_clj.node.protocols.tag.call(null,node),new cljs.core.Keyword(null,"newline","newline",1790071323));
});

//# sourceMappingURL=whitespace.js.map
