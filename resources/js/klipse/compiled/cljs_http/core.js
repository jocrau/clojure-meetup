// Compiled by ClojureScript 1.10.145 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__27167){
var vec__27168 = p__27167;
var k = cljs.core.nth.call(null,vec__27168,(0),null);
var v = cljs.core.nth.call(null,vec__27168,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__27171 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__27171)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__27171)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__27171)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__27171)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__27171)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__27171)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27171)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__27172){
var map__27173 = p__27172;
var map__27173__$1 = ((((!((map__27173 == null)))?(((((map__27173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27173):map__27173);
var request = map__27173__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__27173__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__27173__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__27173__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__27175 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__27175,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__27175,response_type);

G__27175.setTimeoutInterval(timeout);

G__27175.setWithCredentials(send_credentials);

return G__27175;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__27176){
var map__27177 = p__27176;
var map__27177__$1 = ((((!((map__27177 == null)))?(((((map__27177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27177):map__27177);
var request = map__27177__$1;
var request_method = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__3922__auto__ = request_method;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_27201 = ((function (channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__27179_27202 = xhr;
G__27179_27202.setProgressEventsEnabled(true);

G__27179_27202.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_27201,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__27179_27202.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_27201,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__23380__auto___27203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___27203,channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___27203,channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_27190){
var state_val_27191 = (state_27190[(1)]);
if((state_val_27191 === (1))){
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27190__$1,(2),cancel);
} else {
if((state_val_27191 === (2))){
var inst_27181 = (state_27190[(2)]);
var inst_27182 = xhr.isComplete();
var inst_27183 = cljs.core.not.call(null,inst_27182);
var state_27190__$1 = (function (){var statearr_27192 = state_27190;
(statearr_27192[(7)] = inst_27181);

return statearr_27192;
})();
if(inst_27183){
var statearr_27193_27204 = state_27190__$1;
(statearr_27193_27204[(1)] = (3));

} else {
var statearr_27194_27205 = state_27190__$1;
(statearr_27194_27205[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (3))){
var inst_27185 = xhr.abort();
var state_27190__$1 = state_27190;
var statearr_27195_27206 = state_27190__$1;
(statearr_27195_27206[(2)] = inst_27185);

(statearr_27195_27206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (4))){
var state_27190__$1 = state_27190;
var statearr_27196_27207 = state_27190__$1;
(statearr_27196_27207[(2)] = null);

(statearr_27196_27207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (5))){
var inst_27188 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27190__$1,inst_27188);
} else {
return null;
}
}
}
}
}
});})(c__23380__auto___27203,channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__23223__auto__,c__23380__auto___27203,channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__23224__auto__ = null;
var cljs_http$core$xhr_$_state_machine__23224__auto____0 = (function (){
var statearr_27197 = [null,null,null,null,null,null,null,null];
(statearr_27197[(0)] = cljs_http$core$xhr_$_state_machine__23224__auto__);

(statearr_27197[(1)] = (1));

return statearr_27197;
});
var cljs_http$core$xhr_$_state_machine__23224__auto____1 = (function (state_27190){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_27190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e27198){if((e27198 instanceof Object)){
var ex__23227__auto__ = e27198;
var statearr_27199_27208 = state_27190;
(statearr_27199_27208[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27209 = state_27190;
state_27190 = G__27209;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__23224__auto__ = function(state_27190){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__23224__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__23224__auto____1.call(this,state_27190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__23224__auto____0;
cljs_http$core$xhr_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__23224__auto____1;
return cljs_http$core$xhr_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___27203,channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__23382__auto__ = (function (){var statearr_27200 = f__23381__auto__.call(null);
(statearr_27200[(6)] = c__23380__auto___27203);

return statearr_27200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___27203,channel,request_url,method,headers__$1,xhr,map__27177,map__27177__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__27210){
var map__27211 = p__27210;
var map__27211__$1 = ((((!((map__27211 == null)))?(((((map__27211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27211):map__27211);
var request = map__27211__$1;
var timeout = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_27224 = jsonp.send(null,((function (channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_27224], null));

if(cljs.core.truth_(cancel)){
var c__23380__auto___27225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___27225,req_27224,channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___27225,req_27224,channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_27217){
var state_val_27218 = (state_27217[(1)]);
if((state_val_27218 === (1))){
var state_27217__$1 = state_27217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27217__$1,(2),cancel);
} else {
if((state_val_27218 === (2))){
var inst_27214 = (state_27217[(2)]);
var inst_27215 = jsonp.cancel(req_27224);
var state_27217__$1 = (function (){var statearr_27219 = state_27217;
(statearr_27219[(7)] = inst_27214);

return statearr_27219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27217__$1,inst_27215);
} else {
return null;
}
}
});})(c__23380__auto___27225,req_27224,channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__23223__auto__,c__23380__auto___27225,req_27224,channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__23224__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__23224__auto____0 = (function (){
var statearr_27220 = [null,null,null,null,null,null,null,null];
(statearr_27220[(0)] = cljs_http$core$jsonp_$_state_machine__23224__auto__);

(statearr_27220[(1)] = (1));

return statearr_27220;
});
var cljs_http$core$jsonp_$_state_machine__23224__auto____1 = (function (state_27217){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_27217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e27221){if((e27221 instanceof Object)){
var ex__23227__auto__ = e27221;
var statearr_27222_27226 = state_27217;
(statearr_27222_27226[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27227 = state_27217;
state_27217 = G__27227;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__23224__auto__ = function(state_27217){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__23224__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__23224__auto____1.call(this,state_27217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__23224__auto____0;
cljs_http$core$jsonp_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__23224__auto____1;
return cljs_http$core$jsonp_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___27225,req_27224,channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__23382__auto__ = (function (){var statearr_27223 = f__23381__auto__.call(null);
(statearr_27223[(6)] = c__23380__auto___27225);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___27225,req_27224,channel,jsonp,map__27211,map__27211__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__27228){
var map__27229 = p__27228;
var map__27229__$1 = ((((!((map__27229 == null)))?(((((map__27229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27229):map__27229);
var request = map__27229__$1;
var request_method = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1521209061161
