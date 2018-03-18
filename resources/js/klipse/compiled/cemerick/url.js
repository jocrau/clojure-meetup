// Compiled by ClojureScript 1.9.946 {}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__26817 = string;
var G__26817__$1 = (((G__26817 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26817)].join(''));
var G__26817__$2 = (((G__26817__$1 == null))?null:encodeURIComponent(G__26817__$1));
if((G__26817__$2 == null)){
return null;
} else {
return G__26817__$2.replace("+","%20");
}
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__26818 = string;
var G__26818__$1 = (((G__26818 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26818)].join(''));
if((G__26818__$1 == null)){
return null;
} else {
return decodeURIComponent(G__26818__$1);
}
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__26819 = cljs.core.seq.call(null,m);
var G__26819__$1 = (((G__26819 == null))?null:cljs.core.sort.call(null,G__26819));
var G__26819__$2 = (((G__26819__$1 == null))?null:cljs.core.map.call(null,((function (G__26819,G__26819__$1){
return (function (p__26820){
var vec__26821 = p__26820;
var k = cljs.core.nth.call(null,vec__26821,(0),null);
var v = cljs.core.nth.call(null,vec__26821,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode.call(null,cljs.core.name.call(null,k)),"=",cemerick.url.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''))], null);
});})(G__26819,G__26819__$1))
,G__26819__$1));
var G__26819__$3 = (((G__26819__$2 == null))?null:cljs.core.interpose.call(null,"&",G__26819__$2));
var G__26819__$4 = (((G__26819__$3 == null))?null:cljs.core.flatten.call(null,G__26819__$3));
if((G__26819__$4 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.str,G__26819__$4);
}
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.call(null,(2),cljs.core.concat.call(null,clojure.string.split.call(null,param,/=/),cljs.core.repeat.call(null,"")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(!(clojure.string.blank_QMARK_.call(null,qstr))){
var G__26824 = clojure.string.split.call(null,qstr,/&/);
var G__26824__$1 = (((G__26824 == null))?null:cljs.core.seq.call(null,G__26824));
var G__26824__$2 = (((G__26824__$1 == null))?null:cljs.core.mapcat.call(null,cemerick.url.split_param,G__26824__$1));
var G__26824__$3 = (((G__26824__$2 == null))?null:cljs.core.map.call(null,cemerick.url.url_decode,G__26824__$2));
if((G__26824__$3 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,G__26824__$3);
}
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.call(null,null,port)) && (cljs.core.not_EQ_.call(null,(-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.call(null,protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.call(null,protocol,"https"))))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join('');
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cemerick.url.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds.call(null,self__.username,self__.password);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(creds),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(creds)?"@":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemerick.url.port_str.call(null,self__.protocol,self__.port)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq.call(null,self__.query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query.call(null,self__.query)))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(self__.anchor)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k26826,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__26830 = k26826;
var G__26830__$1 = (((G__26830 instanceof cljs.core.Keyword))?G__26830.fqn:null);
switch (G__26830__$1) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26826,else__9607__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#cemerick.url.URL{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26825){
var self__ = this;
var G__26825__$1 = this;
return (new cljs.core.RecordIter((0),G__26825__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-797987557 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26827,other26828){
var self__ = this;
var this26827__$1 = this;
return (!((other26828 == null))) && ((this26827__$1.constructor === other26828.constructor)) && (cljs.core._EQ_.call(null,this26827__$1.protocol,other26828.protocol)) && (cljs.core._EQ_.call(null,this26827__$1.username,other26828.username)) && (cljs.core._EQ_.call(null,this26827__$1.password,other26828.password)) && (cljs.core._EQ_.call(null,this26827__$1.host,other26828.host)) && (cljs.core._EQ_.call(null,this26827__$1.port,other26828.port)) && (cljs.core._EQ_.call(null,this26827__$1.path,other26828.path)) && (cljs.core._EQ_.call(null,this26827__$1.query,other26828.query)) && (cljs.core._EQ_.call(null,this26827__$1.anchor,other26828.anchor)) && (cljs.core._EQ_.call(null,this26827__$1.__extmap,other26828.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__26825){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__26831 = cljs.core.keyword_identical_QMARK_;
var expr__26832 = k__9612__auto__;
if(cljs.core.truth_(pred__26831.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__26832))){
return (new cemerick.url.URL(G__26825,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26831.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__26832))){
return (new cemerick.url.URL(self__.protocol,G__26825,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26831.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__26832))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__26825,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26831.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__26832))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__26825,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26831.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__26832))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__26825,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26831.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__26832))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__26825,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26831.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__26832))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__26825,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26831.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__26832))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__26825,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__26825),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__26825){
var self__ = this;
var this__9603__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__26825,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"anchor","anchor",-1104797280,null)], null);
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__26829){
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__26829),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__26829),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__26829),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__26829),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__26829),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__26829),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__26829),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__26829),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__26829,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489))),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.call(null,s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__26835 = clojure.string.split.call(null,(function (){var or__8916__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.call(null,vec__26835,(0),null);
var pass = cljs.core.nth.call(null,vec__26835,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__8904__auto__ = cljs.core.seq.call(null,user);
if(and__8904__auto__){
return user;
} else {
return and__8904__auto__;
}
})(),(function (){var and__8904__auto__ = cljs.core.seq.call(null,pass);
if(and__8904__auto__){
return pass;
} else {
return and__8904__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default.call(null,url__$1.getPort(),null,(-1)),pathetic.core.normalize.call(null,url__$1.getPath()),cemerick.url.query__GT_map.call(null,cemerick.url.translate_default.call(null,url__$1.getQuery(),"",null)),cemerick.url.translate_default.call(null,url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record. 
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(var_args){
var G__26841 = arguments.length;
switch (G__26841) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___26843 = arguments.length;
var i__10196__auto___26844 = (0);
while(true){
if((i__10196__auto___26844 < len__10195__auto___26843)){
args_arr__10218__auto__.push((arguments[i__10196__auto___26844]));

var G__26845 = (i__10196__auto___26844 + (1));
i__10196__auto___26844 = G__26845;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10219__auto__);

}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_.call(null,url);
}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.call(null,base_url));
return cljs.core.assoc.call(null,base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize.call(null,cljs.core.reduce.call(null,pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
});

cemerick.url.url.cljs$lang$applyTo = (function (seq26839){
var G__26840 = cljs.core.first.call(null,seq26839);
var seq26839__$1 = cljs.core.next.call(null,seq26839);
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic(G__26840,seq26839__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=url.js.map
