// Compiled by ClojureScript 1.9.946 {}
goog.provide('rewrite_clj.node.stringz');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('cljs.tools.reader');
goog.require('clojure.string');
rewrite_clj.node.stringz.wrap_string = (function rewrite_clj$node$stringz$wrap_string(v){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\""].join('');
});
rewrite_clj.node.stringz.join_lines = (function rewrite_clj$node$stringz$join_lines(lines){
return clojure.string.join.call(null,"\n",lines);
});

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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {rewrite_clj.node.stringz.Object}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.stringz.StringNode = (function (lines,__meta,__extmap,__hash){
this.lines = lines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.stringz.StringNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k28755,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__28759 = k28755;
var G__28759__$1 = (((G__28759 instanceof cljs.core.Keyword))?G__28759.fqn:null);
switch (G__28759__$1) {
case "lines":
return self__.lines;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28755,else__9607__auto__);

}
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#rewrite-clj.node.stringz.StringNode{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines],null))], null),self__.__extmap));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28754){
var self__ = this;
var G__28754__$1 = this;
return (new cljs.core.RecordIter((0),G__28754__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1538615006 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28756,other28757){
var self__ = this;
var this28756__$1 = this;
return (!((other28757 == null))) && ((this28756__$1.constructor === other28757.constructor)) && (cljs.core._EQ_.call(null,this28756__$1.lines,other28757.lines)) && (cljs.core._EQ_.call(null,this28756__$1.__extmap,other28757.__extmap));
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.next.call(null,self__.lines)){
return new cljs.core.Keyword(null,"multi-line","multi-line",240640676);
} else {
return new cljs.core.Keyword(null,"token","token",-1211463215);
}
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.stringz.join_lines.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.tools.reader.read_string,rewrite_clj.node.stringz.wrap_string),self__.lines));
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((2) + cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,self__.lines)));
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.stringz.wrap_string.call(null,rewrite_clj.node.stringz.join_lines.call(null,self__.lines));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",-700165781),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__28754){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__28760 = cljs.core.keyword_identical_QMARK_;
var expr__28761 = k__9612__auto__;
if(cljs.core.truth_(pred__28760.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781),expr__28761))){
return (new rewrite_clj.node.stringz.StringNode(G__28754,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__28754),null));
}
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines],null))], null),self__.__extmap));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__28754){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rewrite_clj.node.stringz.StringNode(self__.lines,G__28754,self__.__extmap,self__.__hash));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rewrite_clj.node.stringz.StringNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lines","lines",940365746,null)], null);
});

rewrite_clj.node.stringz.StringNode.cljs$lang$type = true;

rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.stringz/StringNode");
});

rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"rewrite-clj.node.stringz/StringNode");
});

rewrite_clj.node.stringz.__GT_StringNode = (function rewrite_clj$node$stringz$__GT_StringNode(lines){
return (new rewrite_clj.node.stringz.StringNode(lines,null,null,null));
});

rewrite_clj.node.stringz.map__GT_StringNode = (function rewrite_clj$node$stringz$map__GT_StringNode(G__28758){
return (new rewrite_clj.node.stringz.StringNode(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(G__28758),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__28758,new cljs.core.Keyword(null,"lines","lines",-700165781))),null));
});

/**
 * Create node representing a string value.
 * Takes either a seq of strings or a single one.
 */
rewrite_clj.node.stringz.string_node = (function rewrite_clj$node$stringz$string_node(lines){
if(typeof lines === 'string'){
return rewrite_clj.node.stringz.__GT_StringNode.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines], null));
} else {
return rewrite_clj.node.stringz.__GT_StringNode.call(null,lines);
}
});

//# sourceMappingURL=stringz.js.map
