// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.endpoint');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
tutorials.react_frontend.endpoint.station_id = "KMAAMHER21";
tutorials.react_frontend.endpoint.process_data = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__28345_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__28345_SHARP_),(200));
})),cljs.core.map.call(null,(function (p1__28346_SHARP_){
return cljs.core.get_in.call(null,p1__28346_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"stations","stations",-19744730),cljs.core.keyword.call(null,tutorials.react_frontend.endpoint.station_id)], null));
})));
if(typeof tutorials.react_frontend.endpoint.data_processing_ch !== 'undefined'){
} else {
tutorials.react_frontend.endpoint.data_processing_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)),tutorials.react_frontend.endpoint.process_data);
}
tutorials.react_frontend.endpoint.request_wind_data = (function tutorials$react_frontend$endpoint$request_wind_data(){
var c__23353__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23353__auto__){
return (function (){
var f__23354__auto__ = (function (){var switch__23330__auto__ = ((function (c__23353__auto__){
return (function (state_28354){
var state_val_28355 = (state_28354[(1)]);
if((state_val_28355 === (1))){
var inst_28347 = ["http://stationdata.wunderground.com/cgi-bin/stationlookup?station=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tutorials.react_frontend.endpoint.station_id),"&units=english&v=2.0&format=json"].join('');
var inst_28348 = cljs_http.client.get.call(null,inst_28347);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28354__$1,(2),inst_28348);
} else {
if((state_val_28355 === (2))){
var inst_28350 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28354__$1,(3),tutorials.react_frontend.endpoint.data_processing_ch,inst_28350);
} else {
if((state_val_28355 === (3))){
var inst_28352 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28354__$1,inst_28352);
} else {
return null;
}
}
}
});})(c__23353__auto__))
;
return ((function (switch__23330__auto__,c__23353__auto__){
return (function() {
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__ = null;
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0 = (function (){
var statearr_28356 = [null,null,null,null,null,null,null];
(statearr_28356[(0)] = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__);

(statearr_28356[(1)] = (1));

return statearr_28356;
});
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1 = (function (state_28354){
while(true){
var ret_value__23332__auto__ = (function (){try{while(true){
var result__23333__auto__ = switch__23330__auto__.call(null,state_28354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23333__auto__;
}
break;
}
}catch (e28357){if((e28357 instanceof Object)){
var ex__23334__auto__ = e28357;
var statearr_28358_28360 = state_28354;
(statearr_28358_28360[(5)] = ex__23334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28361 = state_28354;
state_28354 = G__28361;
continue;
} else {
return ret_value__23332__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__ = function(state_28354){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1.call(this,state_28354);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0;
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1;
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__;
})()
;})(switch__23330__auto__,c__23353__auto__))
})();
var state__23355__auto__ = (function (){var statearr_28359 = f__23354__auto__.call(null);
(statearr_28359[(6)] = c__23353__auto__);

return statearr_28359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23355__auto__);
});})(c__23353__auto__))
);

return c__23353__auto__;
});
if(typeof tutorials.react_frontend.endpoint.running !== 'undefined'){
} else {
tutorials.react_frontend.endpoint.running = cljs.core.atom.call(null,false);
}
tutorials.react_frontend.endpoint.start = (function tutorials$react_frontend$endpoint$start(){
if(cljs.core.truth_(cljs.core.deref.call(null,tutorials.react_frontend.endpoint.running))){
return null;
} else {
cljs.core.reset_BANG_.call(null,tutorials.react_frontend.endpoint.running,true);

var c__23353__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23353__auto__){
return (function (){
var f__23354__auto__ = (function (){var switch__23330__auto__ = ((function (c__23353__auto__){
return (function (state_28376){
var state_val_28377 = (state_28376[(1)]);
if((state_val_28377 === (1))){
var state_28376__$1 = state_28376;
var statearr_28378_28390 = state_28376__$1;
(statearr_28378_28390[(2)] = null);

(statearr_28378_28390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (2))){
var inst_28363 = cljs.core.deref.call(null,tutorials.react_frontend.endpoint.running);
var state_28376__$1 = state_28376;
if(cljs.core.truth_(inst_28363)){
var statearr_28379_28391 = state_28376__$1;
(statearr_28379_28391[(1)] = (4));

} else {
var statearr_28380_28392 = state_28376__$1;
(statearr_28380_28392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (3))){
var inst_28374 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28376__$1,inst_28374);
} else {
if((state_val_28377 === (4))){
var inst_28365 = tutorials.react_frontend.endpoint.request_wind_data.call(null);
var inst_28366 = cljs.core.async.timeout.call(null,(1000));
var state_28376__$1 = (function (){var statearr_28381 = state_28376;
(statearr_28381[(7)] = inst_28365);

return statearr_28381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28376__$1,(7),inst_28366);
} else {
if((state_val_28377 === (5))){
var state_28376__$1 = state_28376;
var statearr_28382_28393 = state_28376__$1;
(statearr_28382_28393[(2)] = null);

(statearr_28382_28393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (6))){
var inst_28372 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28383_28394 = state_28376__$1;
(statearr_28383_28394[(2)] = inst_28372);

(statearr_28383_28394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (7))){
var inst_28368 = (state_28376[(2)]);
var state_28376__$1 = (function (){var statearr_28384 = state_28376;
(statearr_28384[(8)] = inst_28368);

return statearr_28384;
})();
var statearr_28385_28395 = state_28376__$1;
(statearr_28385_28395[(2)] = null);

(statearr_28385_28395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23353__auto__))
;
return ((function (switch__23330__auto__,c__23353__auto__){
return (function() {
var tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__ = null;
var tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0 = (function (){
var statearr_28386 = [null,null,null,null,null,null,null,null,null];
(statearr_28386[(0)] = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__);

(statearr_28386[(1)] = (1));

return statearr_28386;
});
var tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1 = (function (state_28376){
while(true){
var ret_value__23332__auto__ = (function (){try{while(true){
var result__23333__auto__ = switch__23330__auto__.call(null,state_28376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23333__auto__;
}
break;
}
}catch (e28387){if((e28387 instanceof Object)){
var ex__23334__auto__ = e28387;
var statearr_28388_28396 = state_28376;
(statearr_28388_28396[(5)] = ex__23334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28397 = state_28376;
state_28376 = G__28397;
continue;
} else {
return ret_value__23332__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__ = function(state_28376){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1.call(this,state_28376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0;
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1;
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__;
})()
;})(switch__23330__auto__,c__23353__auto__))
})();
var state__23355__auto__ = (function (){var statearr_28389 = f__23354__auto__.call(null);
(statearr_28389[(6)] = c__23353__auto__);

return statearr_28389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23355__auto__);
});})(c__23353__auto__))
);

return c__23353__auto__;
}
});
tutorials.react_frontend.endpoint.stop = (function tutorials$react_frontend$endpoint$stop(){
return cljs.core.reset_BANG_.call(null,tutorials.react_frontend.endpoint.running,false);
});

//# sourceMappingURL=endpoint.js.map?rel=1521328704760
