// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__8904__auto__ = v;
if(cljs.core.truth_(and__8904__auto__)){
return (v > (0));
} else {
return and__8904__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__26590_SHARP_,p2__26589_SHARP_){
var vec__26591 = clojure.string.split.call(null,p2__26589_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__26591,(0),null);
var v = cljs.core.nth.call(null,vec__26591,(1),null);
return cljs.core.assoc.call(null,p1__26590_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__26594_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__26594_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__26595){
var vec__26596 = p__26595;
var k = cljs.core.nth.call(null,vec__26596,(0),null);
var v = cljs.core.nth.call(null,vec__26596,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__26599_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26599_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__8904__auto__){
var and__8904__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__8904__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__26600_SHARP_){
return cljs_http.client.decode_body.call(null,p1__26600_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26607 = arguments.length;
var i__10196__auto___26608 = (0);
while(true){
if((i__10196__auto___26608 < len__10195__auto___26607)){
args__10202__auto__.push((arguments[i__10196__auto___26608]));

var G__26609 = (i__10196__auto___26608 + (1));
i__10196__auto___26608 = G__26609;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26603){
var vec__26604 = p__26603;
var default_headers = cljs.core.nth.call(null,vec__26604,(0),null);
return ((function (vec__26604,default_headers){
return (function (request){
var temp__5455__auto__ = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var default_headers__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__26604,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq26601){
var G__26602 = cljs.core.first.call(null,seq26601);
var seq26601__$1 = cljs.core.next.call(null,seq26601);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__26602,seq26601__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26616 = arguments.length;
var i__10196__auto___26617 = (0);
while(true){
if((i__10196__auto___26617 < len__10195__auto___26616)){
args__10202__auto__.push((arguments[i__10196__auto___26617]));

var G__26618 = (i__10196__auto___26617 + (1));
i__10196__auto___26617 = G__26618;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26612){
var vec__26613 = p__26612;
var accept = cljs.core.nth.call(null,vec__26613,(0),null);
return ((function (vec__26613,accept){
return (function (request){
var temp__5455__auto__ = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var accept__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__26613,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq26610){
var G__26611 = cljs.core.first.call(null,seq26610);
var seq26610__$1 = cljs.core.next.call(null,seq26610);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__26611,seq26610__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26625 = arguments.length;
var i__10196__auto___26626 = (0);
while(true){
if((i__10196__auto___26626 < len__10195__auto___26625)){
args__10202__auto__.push((arguments[i__10196__auto___26626]));

var G__26627 = (i__10196__auto___26626 + (1));
i__10196__auto___26626 = G__26627;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26621){
var vec__26622 = p__26621;
var content_type = cljs.core.nth.call(null,vec__26622,(0),null);
return ((function (vec__26622,content_type){
return (function (request){
var temp__5455__auto__ = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var content_type__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__26622,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq26619){
var G__26620 = cljs.core.first.call(null,seq26619);
var seq26619__$1 = cljs.core.next.call(null,seq26619);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__26620,seq26619__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var map__26628 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__26628__$1 = ((((!((map__26628 == null)))?((((map__26628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26628):map__26628);
var encoding = cljs.core.get.call(null,map__26628__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__26628__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__26632 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__26632__$1 = ((((!((map__26632 == null)))?((((map__26632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26632):map__26632);
var decoding = cljs.core.get.call(null,map__26632__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__26632__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__26632,map__26632__$1,decoding,decoding_opts){
return (function (p1__26630_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__26630_SHARP_,decoding,decoding_opts);
});})(map__26632,map__26632__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__26632,map__26632__$1,decoding,decoding_opts,transit_decode){
return (function (p1__26631_SHARP_){
return cljs_http.client.decode_body.call(null,p1__26631_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__26632,map__26632__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__26634_SHARP_){
return cljs_http.client.decode_body.call(null,p1__26634_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__26635){
var map__26636 = p__26635;
var map__26636__$1 = ((((!((map__26636 == null)))?((((map__26636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26636):map__26636);
var req = map__26636__$1;
var query_params = cljs.core.get.call(null,map__26636__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__26638){
var map__26639 = p__26638;
var map__26639__$1 = ((((!((map__26639 == null)))?((((map__26639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26639):map__26639);
var request = map__26639__$1;
var form_params = cljs.core.get.call(null,map__26639__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__26639__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__26639__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__8904__auto__ = form_params;
if(cljs.core.truth_(and__8904__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__8904__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__26641_26651 = cljs.core.seq.call(null,params);
var chunk__26642_26652 = null;
var count__26643_26653 = (0);
var i__26644_26654 = (0);
while(true){
if((i__26644_26654 < count__26643_26653)){
var vec__26645_26655 = cljs.core._nth.call(null,chunk__26642_26652,i__26644_26654);
var k_26656 = cljs.core.nth.call(null,vec__26645_26655,(0),null);
var v_26657 = cljs.core.nth.call(null,vec__26645_26655,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_26657)){
form_data.append(cljs.core.name.call(null,k_26656),cljs.core.first.call(null,v_26657),cljs.core.second.call(null,v_26657));
} else {
form_data.append(cljs.core.name.call(null,k_26656),v_26657);
}

var G__26658 = seq__26641_26651;
var G__26659 = chunk__26642_26652;
var G__26660 = count__26643_26653;
var G__26661 = (i__26644_26654 + (1));
seq__26641_26651 = G__26658;
chunk__26642_26652 = G__26659;
count__26643_26653 = G__26660;
i__26644_26654 = G__26661;
continue;
} else {
var temp__5457__auto___26662 = cljs.core.seq.call(null,seq__26641_26651);
if(temp__5457__auto___26662){
var seq__26641_26663__$1 = temp__5457__auto___26662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26641_26663__$1)){
var c__9847__auto___26664 = cljs.core.chunk_first.call(null,seq__26641_26663__$1);
var G__26665 = cljs.core.chunk_rest.call(null,seq__26641_26663__$1);
var G__26666 = c__9847__auto___26664;
var G__26667 = cljs.core.count.call(null,c__9847__auto___26664);
var G__26668 = (0);
seq__26641_26651 = G__26665;
chunk__26642_26652 = G__26666;
count__26643_26653 = G__26667;
i__26644_26654 = G__26668;
continue;
} else {
var vec__26648_26669 = cljs.core.first.call(null,seq__26641_26663__$1);
var k_26670 = cljs.core.nth.call(null,vec__26648_26669,(0),null);
var v_26671 = cljs.core.nth.call(null,vec__26648_26669,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_26671)){
form_data.append(cljs.core.name.call(null,k_26670),cljs.core.first.call(null,v_26671),cljs.core.second.call(null,v_26671));
} else {
form_data.append(cljs.core.name.call(null,k_26670),v_26671);
}

var G__26672 = cljs.core.next.call(null,seq__26641_26663__$1);
var G__26673 = null;
var G__26674 = (0);
var G__26675 = (0);
seq__26641_26651 = G__26672;
chunk__26642_26652 = G__26673;
count__26643_26653 = G__26674;
i__26644_26654 = G__26675;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__26676){
var map__26677 = p__26676;
var map__26677__$1 = ((((!((map__26677 == null)))?((((map__26677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26677):map__26677);
var request = map__26677__$1;
var multipart_params = cljs.core.get.call(null,map__26677__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__26677__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__8904__auto__ = multipart_params;
if(cljs.core.truth_(and__8904__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__8904__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5455__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__26679_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__26679_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__26681){
var map__26682 = p__26681;
var map__26682__$1 = ((((!((map__26682 == null)))?((((map__26682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26682):map__26682);
var req = map__26682__$1;
var query_params = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5455__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5455__auto__,map__26682,map__26682__$1,req,query_params){
return (function (p1__26680_SHARP_){
return cljs.core.merge.call(null,p1__26680_SHARP_,query_params);
});})(spec,temp__5455__auto__,map__26682,map__26682__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26690 = arguments.length;
var i__10196__auto___26691 = (0);
while(true){
if((i__10196__auto___26691 < len__10195__auto___26690)){
args__10202__auto__.push((arguments[i__10196__auto___26691]));

var G__26692 = (i__10196__auto___26691 + (1));
i__10196__auto___26691 = G__26692;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26686){
var vec__26687 = p__26686;
var credentials = cljs.core.nth.call(null,vec__26687,(0),null);
return ((function (vec__26687,credentials){
return (function (req){
var credentials__$1 = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__26687,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq26684){
var G__26685 = cljs.core.first.call(null,seq26684);
var seq26684__$1 = cljs.core.next.call(null,seq26684);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__26685,seq26684__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5455__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var oauth_token = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var custom_channel = temp__5455__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26699 = arguments.length;
var i__10196__auto___26700 = (0);
while(true){
if((i__10196__auto___26700 < len__10195__auto___26699)){
args__10202__auto__.push((arguments[i__10196__auto___26700]));

var G__26701 = (i__10196__auto___26700 + (1));
i__10196__auto___26700 = G__26701;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26695){
var vec__26696 = p__26695;
var req = cljs.core.nth.call(null,vec__26696,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq26693){
var G__26694 = cljs.core.first.call(null,seq26693);
var seq26693__$1 = cljs.core.next.call(null,seq26693);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__26694,seq26693__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26708 = arguments.length;
var i__10196__auto___26709 = (0);
while(true){
if((i__10196__auto___26709 < len__10195__auto___26708)){
args__10202__auto__.push((arguments[i__10196__auto___26709]));

var G__26710 = (i__10196__auto___26709 + (1));
i__10196__auto___26709 = G__26710;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26704){
var vec__26705 = p__26704;
var req = cljs.core.nth.call(null,vec__26705,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq26702){
var G__26703 = cljs.core.first.call(null,seq26702);
var seq26702__$1 = cljs.core.next.call(null,seq26702);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__26703,seq26702__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26717 = arguments.length;
var i__10196__auto___26718 = (0);
while(true){
if((i__10196__auto___26718 < len__10195__auto___26717)){
args__10202__auto__.push((arguments[i__10196__auto___26718]));

var G__26719 = (i__10196__auto___26718 + (1));
i__10196__auto___26718 = G__26719;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26713){
var vec__26714 = p__26713;
var req = cljs.core.nth.call(null,vec__26714,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq26711){
var G__26712 = cljs.core.first.call(null,seq26711);
var seq26711__$1 = cljs.core.next.call(null,seq26711);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__26712,seq26711__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26726 = arguments.length;
var i__10196__auto___26727 = (0);
while(true){
if((i__10196__auto___26727 < len__10195__auto___26726)){
args__10202__auto__.push((arguments[i__10196__auto___26727]));

var G__26728 = (i__10196__auto___26727 + (1));
i__10196__auto___26727 = G__26728;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26722){
var vec__26723 = p__26722;
var req = cljs.core.nth.call(null,vec__26723,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq26720){
var G__26721 = cljs.core.first.call(null,seq26720);
var seq26720__$1 = cljs.core.next.call(null,seq26720);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__26721,seq26720__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26735 = arguments.length;
var i__10196__auto___26736 = (0);
while(true){
if((i__10196__auto___26736 < len__10195__auto___26735)){
args__10202__auto__.push((arguments[i__10196__auto___26736]));

var G__26737 = (i__10196__auto___26736 + (1));
i__10196__auto___26736 = G__26737;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26731){
var vec__26732 = p__26731;
var req = cljs.core.nth.call(null,vec__26732,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq26729){
var G__26730 = cljs.core.first.call(null,seq26729);
var seq26729__$1 = cljs.core.next.call(null,seq26729);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__26730,seq26729__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26744 = arguments.length;
var i__10196__auto___26745 = (0);
while(true){
if((i__10196__auto___26745 < len__10195__auto___26744)){
args__10202__auto__.push((arguments[i__10196__auto___26745]));

var G__26746 = (i__10196__auto___26745 + (1));
i__10196__auto___26745 = G__26746;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26740){
var vec__26741 = p__26740;
var req = cljs.core.nth.call(null,vec__26741,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq26738){
var G__26739 = cljs.core.first.call(null,seq26738);
var seq26738__$1 = cljs.core.next.call(null,seq26738);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__26739,seq26738__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26753 = arguments.length;
var i__10196__auto___26754 = (0);
while(true){
if((i__10196__auto___26754 < len__10195__auto___26753)){
args__10202__auto__.push((arguments[i__10196__auto___26754]));

var G__26755 = (i__10196__auto___26754 + (1));
i__10196__auto___26754 = G__26755;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26749){
var vec__26750 = p__26749;
var req = cljs.core.nth.call(null,vec__26750,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq26747){
var G__26748 = cljs.core.first.call(null,seq26747);
var seq26747__$1 = cljs.core.next.call(null,seq26747);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__26748,seq26747__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26762 = arguments.length;
var i__10196__auto___26763 = (0);
while(true){
if((i__10196__auto___26763 < len__10195__auto___26762)){
args__10202__auto__.push((arguments[i__10196__auto___26763]));

var G__26764 = (i__10196__auto___26763 + (1));
i__10196__auto___26763 = G__26764;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26758){
var vec__26759 = p__26758;
var req = cljs.core.nth.call(null,vec__26759,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq26756){
var G__26757 = cljs.core.first.call(null,seq26756);
var seq26756__$1 = cljs.core.next.call(null,seq26756);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__26757,seq26756__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__10202__auto__ = [];
var len__10195__auto___26771 = arguments.length;
var i__10196__auto___26772 = (0);
while(true){
if((i__10196__auto___26772 < len__10195__auto___26771)){
args__10202__auto__.push((arguments[i__10196__auto___26772]));

var G__26773 = (i__10196__auto___26772 + (1));
i__10196__auto___26772 = G__26773;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26767){
var vec__26768 = p__26767;
var req = cljs.core.nth.call(null,vec__26768,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq26765){
var G__26766 = cljs.core.first.call(null,seq26765);
var seq26765__$1 = cljs.core.next.call(null,seq26765);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__26766,seq26765__$1);
});


//# sourceMappingURL=client.js.map
