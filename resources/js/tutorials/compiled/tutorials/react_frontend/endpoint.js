// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.endpoint');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
tutorials.react_frontend.endpoint.station_id = "KMAAMHER21";
tutorials.react_frontend.endpoint.process_data = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__27986_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__27986_SHARP_),(200));
})),cljs.core.map.call(null,(function (p1__27987_SHARP_){
return cljs.core.get_in.call(null,p1__27987_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"stations","stations",-19744730),cljs.core.keyword.call(null,tutorials.react_frontend.endpoint.station_id)], null));
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
return (function (state_27997){
var state_val_27998 = (state_27997[(1)]);
if((state_val_27998 === (1))){
var inst_27990 = ["http://stationdata.wunderground.com/cgi-bin/stationlookup?station=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tutorials.react_frontend.endpoint.station_id),"&units=english&v=2.0&format=json"].join('');
var inst_27991 = cljs_http.client.get.call(null,inst_27990);
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27997__$1,(2),inst_27991);
} else {
if((state_val_27998 === (2))){
var inst_27993 = (state_27997[(2)]);
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27997__$1,(3),tutorials.react_frontend.endpoint.data_processing_ch,inst_27993);
} else {
if((state_val_27998 === (3))){
var inst_27995 = (state_27997[(2)]);
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27997__$1,inst_27995);
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
var statearr_27999 = [null,null,null,null,null,null,null];
(statearr_27999[(0)] = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__);

(statearr_27999[(1)] = (1));

return statearr_27999;
});
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1 = (function (state_27997){
while(true){
var ret_value__23332__auto__ = (function (){try{while(true){
var result__23333__auto__ = switch__23330__auto__.call(null,state_27997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23333__auto__;
}
break;
}
}catch (e28000){if((e28000 instanceof Object)){
var ex__23334__auto__ = e28000;
var statearr_28001_28003 = state_27997;
(statearr_28001_28003[(5)] = ex__23334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28004 = state_27997;
state_27997 = G__28004;
continue;
} else {
return ret_value__23332__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__ = function(state_27997){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1.call(this,state_27997);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0;
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1;
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__;
})()
;})(switch__23330__auto__,c__23353__auto__))
})();
var state__23355__auto__ = (function (){var statearr_28002 = f__23354__auto__.call(null);
(statearr_28002[(6)] = c__23353__auto__);

return statearr_28002;
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
return (function (state_28019){
var state_val_28020 = (state_28019[(1)]);
if((state_val_28020 === (1))){
var state_28019__$1 = state_28019;
var statearr_28021_28033 = state_28019__$1;
(statearr_28021_28033[(2)] = null);

(statearr_28021_28033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (2))){
var inst_28006 = cljs.core.deref.call(null,tutorials.react_frontend.endpoint.running);
var state_28019__$1 = state_28019;
if(cljs.core.truth_(inst_28006)){
var statearr_28022_28034 = state_28019__$1;
(statearr_28022_28034[(1)] = (4));

} else {
var statearr_28023_28035 = state_28019__$1;
(statearr_28023_28035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (3))){
var inst_28017 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28019__$1,inst_28017);
} else {
if((state_val_28020 === (4))){
var inst_28008 = tutorials.react_frontend.endpoint.request_wind_data.call(null);
var inst_28009 = cljs.core.async.timeout.call(null,(1000));
var state_28019__$1 = (function (){var statearr_28024 = state_28019;
(statearr_28024[(7)] = inst_28008);

return statearr_28024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28019__$1,(7),inst_28009);
} else {
if((state_val_28020 === (5))){
var state_28019__$1 = state_28019;
var statearr_28025_28036 = state_28019__$1;
(statearr_28025_28036[(2)] = null);

(statearr_28025_28036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (6))){
var inst_28015 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
var statearr_28026_28037 = state_28019__$1;
(statearr_28026_28037[(2)] = inst_28015);

(statearr_28026_28037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (7))){
var inst_28011 = (state_28019[(2)]);
var state_28019__$1 = (function (){var statearr_28027 = state_28019;
(statearr_28027[(8)] = inst_28011);

return statearr_28027;
})();
var statearr_28028_28038 = state_28019__$1;
(statearr_28028_28038[(2)] = null);

(statearr_28028_28038[(1)] = (2));


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
var statearr_28029 = [null,null,null,null,null,null,null,null,null];
(statearr_28029[(0)] = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__);

(statearr_28029[(1)] = (1));

return statearr_28029;
});
var tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1 = (function (state_28019){
while(true){
var ret_value__23332__auto__ = (function (){try{while(true){
var result__23333__auto__ = switch__23330__auto__.call(null,state_28019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23333__auto__;
}
break;
}
}catch (e28030){if((e28030 instanceof Object)){
var ex__23334__auto__ = e28030;
var statearr_28031_28039 = state_28019;
(statearr_28031_28039[(5)] = ex__23334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28040 = state_28019;
state_28019 = G__28040;
continue;
} else {
return ret_value__23332__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__ = function(state_28019){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1.call(this,state_28019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0;
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1;
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__;
})()
;})(switch__23330__auto__,c__23353__auto__))
})();
var state__23355__auto__ = (function (){var statearr_28032 = f__23354__auto__.call(null);
(statearr_28032[(6)] = c__23353__auto__);

return statearr_28032;
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

//# sourceMappingURL=endpoint.js.map?rel=1521322082786
