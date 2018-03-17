// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.endpoint');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
tutorials.react_frontend.endpoint.station_id = "KMAAMHER21";
tutorials.react_frontend.endpoint.process_data = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__26095_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__26095_SHARP_),(200));
})),cljs.core.map.call(null,(function (p1__26096_SHARP_){
return cljs.core.get_in.call(null,p1__26096_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"stations","stations",-19744730),cljs.core.keyword.call(null,tutorials.react_frontend.endpoint.station_id)], null));
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
return (function (state_26104){
var state_val_26105 = (state_26104[(1)]);
if((state_val_26105 === (1))){
var inst_26097 = ["http://stationdata.wunderground.com/cgi-bin/stationlookup?station=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tutorials.react_frontend.endpoint.station_id),"&units=english&v=2.0&format=json"].join('');
var inst_26098 = cljs_http.client.get.call(null,inst_26097);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26104__$1,(2),inst_26098);
} else {
if((state_val_26105 === (2))){
var inst_26100 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26104__$1,(3),tutorials.react_frontend.endpoint.data_processing_ch,inst_26100);
} else {
if((state_val_26105 === (3))){
var inst_26102 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26104__$1,inst_26102);
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
var statearr_26106 = [null,null,null,null,null,null,null];
(statearr_26106[(0)] = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__);

(statearr_26106[(1)] = (1));

return statearr_26106;
});
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1 = (function (state_26104){
while(true){
var ret_value__23332__auto__ = (function (){try{while(true){
var result__23333__auto__ = switch__23330__auto__.call(null,state_26104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23333__auto__;
}
break;
}
}catch (e26107){if((e26107 instanceof Object)){
var ex__23334__auto__ = e26107;
var statearr_26108_26110 = state_26104;
(statearr_26108_26110[(5)] = ex__23334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26111 = state_26104;
state_26104 = G__26111;
continue;
} else {
return ret_value__23332__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__ = function(state_26104){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1.call(this,state_26104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0;
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1;
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__;
})()
;})(switch__23330__auto__,c__23353__auto__))
})();
var state__23355__auto__ = (function (){var statearr_26109 = f__23354__auto__.call(null);
(statearr_26109[(6)] = c__23353__auto__);

return statearr_26109;
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
return (function (state_26126){
var state_val_26127 = (state_26126[(1)]);
if((state_val_26127 === (1))){
var state_26126__$1 = state_26126;
var statearr_26128_26140 = state_26126__$1;
(statearr_26128_26140[(2)] = null);

(statearr_26128_26140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (2))){
var inst_26113 = cljs.core.deref.call(null,tutorials.react_frontend.endpoint.running);
var state_26126__$1 = state_26126;
if(cljs.core.truth_(inst_26113)){
var statearr_26129_26141 = state_26126__$1;
(statearr_26129_26141[(1)] = (4));

} else {
var statearr_26130_26142 = state_26126__$1;
(statearr_26130_26142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (3))){
var inst_26124 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26126__$1,inst_26124);
} else {
if((state_val_26127 === (4))){
var inst_26115 = tutorials.react_frontend.endpoint.request_wind_data.call(null);
var inst_26116 = cljs.core.async.timeout.call(null,(3000));
var state_26126__$1 = (function (){var statearr_26131 = state_26126;
(statearr_26131[(7)] = inst_26115);

return statearr_26131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(7),inst_26116);
} else {
if((state_val_26127 === (5))){
var state_26126__$1 = state_26126;
var statearr_26132_26143 = state_26126__$1;
(statearr_26132_26143[(2)] = null);

(statearr_26132_26143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (6))){
var inst_26122 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26133_26144 = state_26126__$1;
(statearr_26133_26144[(2)] = inst_26122);

(statearr_26133_26144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (7))){
var inst_26118 = (state_26126[(2)]);
var state_26126__$1 = (function (){var statearr_26134 = state_26126;
(statearr_26134[(8)] = inst_26118);

return statearr_26134;
})();
var statearr_26135_26145 = state_26126__$1;
(statearr_26135_26145[(2)] = null);

(statearr_26135_26145[(1)] = (2));


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
var statearr_26136 = [null,null,null,null,null,null,null,null,null];
(statearr_26136[(0)] = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__);

(statearr_26136[(1)] = (1));

return statearr_26136;
});
var tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1 = (function (state_26126){
while(true){
var ret_value__23332__auto__ = (function (){try{while(true){
var result__23333__auto__ = switch__23330__auto__.call(null,state_26126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23333__auto__;
}
break;
}
}catch (e26137){if((e26137 instanceof Object)){
var ex__23334__auto__ = e26137;
var statearr_26138_26146 = state_26126;
(statearr_26138_26146[(5)] = ex__23334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26147 = state_26126;
state_26126 = G__26147;
continue;
} else {
return ret_value__23332__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__ = function(state_26126){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1.call(this,state_26126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0;
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1;
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__;
})()
;})(switch__23330__auto__,c__23353__auto__))
})();
var state__23355__auto__ = (function (){var statearr_26139 = f__23354__auto__.call(null);
(statearr_26139[(6)] = c__23353__auto__);

return statearr_26139;
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

//# sourceMappingURL=endpoint.js.map?rel=1521309837201
