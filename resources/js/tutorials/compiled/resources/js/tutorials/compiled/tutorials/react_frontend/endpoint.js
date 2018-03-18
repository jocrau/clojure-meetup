// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.endpoint');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
tutorials.react_frontend.endpoint.station_id = "KMAAMHER21";
tutorials.react_frontend.endpoint.process_data = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__24227_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__24227_SHARP_),(200));
})),cljs.core.map.call(null,(function (p1__24228_SHARP_){
return cljs.core.get_in.call(null,p1__24228_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"stations","stations",-19744730),cljs.core.keyword.call(null,tutorials.react_frontend.endpoint.station_id)], null));
})));
if(typeof tutorials.react_frontend.endpoint.data_processing_ch !== 'undefined'){
} else {
tutorials.react_frontend.endpoint.data_processing_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)),tutorials.react_frontend.endpoint.process_data);
}
tutorials.react_frontend.endpoint.request_wind_data = (function tutorials$react_frontend$endpoint$request_wind_data(){
var c__23286__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23286__auto__){
return (function (){
var f__23287__auto__ = (function (){var switch__23263__auto__ = ((function (c__23286__auto__){
return (function (state_24236){
var state_val_24237 = (state_24236[(1)]);
if((state_val_24237 === (1))){
var inst_24229 = ["http://stationdata.wunderground.com/cgi-bin/stationlookup?station=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tutorials.react_frontend.endpoint.station_id),"&units=english&v=2.0&format=json"].join('');
var inst_24230 = cljs_http.client.get.call(null,inst_24229);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(2),inst_24230);
} else {
if((state_val_24237 === (2))){
var inst_24232 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24236__$1,(3),tutorials.react_frontend.endpoint.data_processing_ch,inst_24232);
} else {
if((state_val_24237 === (3))){
var inst_24234 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24236__$1,inst_24234);
} else {
return null;
}
}
}
});})(c__23286__auto__))
;
return ((function (switch__23263__auto__,c__23286__auto__){
return (function() {
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__ = null;
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____0 = (function (){
var statearr_24238 = [null,null,null,null,null,null,null];
(statearr_24238[(0)] = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__);

(statearr_24238[(1)] = (1));

return statearr_24238;
});
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____1 = (function (state_24236){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_24236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e24239){if((e24239 instanceof Object)){
var ex__23267__auto__ = e24239;
var statearr_24240_24242 = state_24236;
(statearr_24240_24242[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24243 = state_24236;
state_24236 = G__24243;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__ = function(state_24236){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____1.call(this,state_24236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____0;
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____1;
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23286__auto__))
})();
var state__23288__auto__ = (function (){var statearr_24241 = f__23287__auto__.call(null);
(statearr_24241[(6)] = c__23286__auto__);

return statearr_24241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23288__auto__);
});})(c__23286__auto__))
);

return c__23286__auto__;
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

var c__23286__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23286__auto__){
return (function (){
var f__23287__auto__ = (function (){var switch__23263__auto__ = ((function (c__23286__auto__){
return (function (state_24258){
var state_val_24259 = (state_24258[(1)]);
if((state_val_24259 === (1))){
var state_24258__$1 = state_24258;
var statearr_24260_24272 = state_24258__$1;
(statearr_24260_24272[(2)] = null);

(statearr_24260_24272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (2))){
var inst_24245 = cljs.core.deref.call(null,tutorials.react_frontend.endpoint.running);
var state_24258__$1 = state_24258;
if(cljs.core.truth_(inst_24245)){
var statearr_24261_24273 = state_24258__$1;
(statearr_24261_24273[(1)] = (4));

} else {
var statearr_24262_24274 = state_24258__$1;
(statearr_24262_24274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (3))){
var inst_24256 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24258__$1,inst_24256);
} else {
if((state_val_24259 === (4))){
var inst_24247 = tutorials.react_frontend.endpoint.request_wind_data.call(null);
var inst_24248 = cljs.core.async.timeout.call(null,(1000));
var state_24258__$1 = (function (){var statearr_24263 = state_24258;
(statearr_24263[(7)] = inst_24247);

return statearr_24263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24258__$1,(7),inst_24248);
} else {
if((state_val_24259 === (5))){
var state_24258__$1 = state_24258;
var statearr_24264_24275 = state_24258__$1;
(statearr_24264_24275[(2)] = null);

(statearr_24264_24275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (6))){
var inst_24254 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24265_24276 = state_24258__$1;
(statearr_24265_24276[(2)] = inst_24254);

(statearr_24265_24276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (7))){
var inst_24250 = (state_24258[(2)]);
var state_24258__$1 = (function (){var statearr_24266 = state_24258;
(statearr_24266[(8)] = inst_24250);

return statearr_24266;
})();
var statearr_24267_24277 = state_24258__$1;
(statearr_24267_24277[(2)] = null);

(statearr_24267_24277[(1)] = (2));


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
});})(c__23286__auto__))
;
return ((function (switch__23263__auto__,c__23286__auto__){
return (function() {
var tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__ = null;
var tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____0 = (function (){
var statearr_24268 = [null,null,null,null,null,null,null,null,null];
(statearr_24268[(0)] = tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__);

(statearr_24268[(1)] = (1));

return statearr_24268;
});
var tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____1 = (function (state_24258){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_24258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e24269){if((e24269 instanceof Object)){
var ex__23267__auto__ = e24269;
var statearr_24270_24278 = state_24258;
(statearr_24270_24278[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24279 = state_24258;
state_24258 = G__24279;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__ = function(state_24258){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____1.call(this,state_24258);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____0;
tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____1;
return tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23286__auto__))
})();
var state__23288__auto__ = (function (){var statearr_24271 = f__23287__auto__.call(null);
(statearr_24271[(6)] = c__23286__auto__);

return statearr_24271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23288__auto__);
});})(c__23286__auto__))
);

return c__23286__auto__;
}
});
tutorials.react_frontend.endpoint.stop = (function tutorials$react_frontend$endpoint$stop(){
return cljs.core.reset_BANG_.call(null,tutorials.react_frontend.endpoint.running,false);
});

//# sourceMappingURL=endpoint.js.map?rel=1521369994768
