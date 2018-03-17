// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.endpoint');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
tutorials.react_frontend.endpoint.station_id = "KMAAMHER21";
tutorials.react_frontend.endpoint.process_data = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__26151_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__26151_SHARP_),(200));
})),cljs.core.map.call(null,(function (p1__26152_SHARP_){
return cljs.core.get_in.call(null,p1__26152_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"stations","stations",-19744730),cljs.core.keyword.call(null,tutorials.react_frontend.endpoint.station_id)], null));
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
return (function (state_26160){
var state_val_26161 = (state_26160[(1)]);
if((state_val_26161 === (1))){
var inst_26153 = ["http://stationdata.wunderground.com/cgi-bin/stationlookup?station=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tutorials.react_frontend.endpoint.station_id),"&units=english&v=2.0&format=json"].join('');
var inst_26154 = cljs_http.client.get.call(null,inst_26153);
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26160__$1,(2),inst_26154);
} else {
if((state_val_26161 === (2))){
var inst_26156 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26160__$1,(3),tutorials.react_frontend.endpoint.data_processing_ch,inst_26156);
} else {
if((state_val_26161 === (3))){
var inst_26158 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26160__$1,inst_26158);
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
var statearr_26162 = [null,null,null,null,null,null,null];
(statearr_26162[(0)] = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__);

(statearr_26162[(1)] = (1));

return statearr_26162;
});
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1 = (function (state_26160){
while(true){
var ret_value__23332__auto__ = (function (){try{while(true){
var result__23333__auto__ = switch__23330__auto__.call(null,state_26160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23333__auto__;
}
break;
}
}catch (e26163){if((e26163 instanceof Object)){
var ex__23334__auto__ = e26163;
var statearr_26164_26166 = state_26160;
(statearr_26164_26166[(5)] = ex__23334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26167 = state_26160;
state_26160 = G__26167;
continue;
} else {
return ret_value__23332__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__ = function(state_26160){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1.call(this,state_26160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____0;
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto____1;
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23331__auto__;
})()
;})(switch__23330__auto__,c__23353__auto__))
})();
var state__23355__auto__ = (function (){var statearr_26165 = f__23354__auto__.call(null);
(statearr_26165[(6)] = c__23353__auto__);

return statearr_26165;
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
return (function (state_26182){
var state_val_26183 = (state_26182[(1)]);
if((state_val_26183 === (1))){
var state_26182__$1 = state_26182;
var statearr_26184_26196 = state_26182__$1;
(statearr_26184_26196[(2)] = null);

(statearr_26184_26196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (2))){
var inst_26169 = cljs.core.deref.call(null,tutorials.react_frontend.endpoint.running);
var state_26182__$1 = state_26182;
if(cljs.core.truth_(inst_26169)){
var statearr_26185_26197 = state_26182__$1;
(statearr_26185_26197[(1)] = (4));

} else {
var statearr_26186_26198 = state_26182__$1;
(statearr_26186_26198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (3))){
var inst_26180 = (state_26182[(2)]);
var state_26182__$1 = state_26182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26182__$1,inst_26180);
} else {
if((state_val_26183 === (4))){
var inst_26171 = tutorials.react_frontend.endpoint.request_wind_data.call(null);
var inst_26172 = cljs.core.async.timeout.call(null,(3000));
var state_26182__$1 = (function (){var statearr_26187 = state_26182;
(statearr_26187[(7)] = inst_26171);

return statearr_26187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26182__$1,(7),inst_26172);
} else {
if((state_val_26183 === (5))){
var state_26182__$1 = state_26182;
var statearr_26188_26199 = state_26182__$1;
(statearr_26188_26199[(2)] = null);

(statearr_26188_26199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (6))){
var inst_26178 = (state_26182[(2)]);
var state_26182__$1 = state_26182;
var statearr_26189_26200 = state_26182__$1;
(statearr_26189_26200[(2)] = inst_26178);

(statearr_26189_26200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (7))){
var inst_26174 = (state_26182[(2)]);
var state_26182__$1 = (function (){var statearr_26190 = state_26182;
(statearr_26190[(8)] = inst_26174);

return statearr_26190;
})();
var statearr_26191_26201 = state_26182__$1;
(statearr_26191_26201[(2)] = null);

(statearr_26191_26201[(1)] = (2));


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
var statearr_26192 = [null,null,null,null,null,null,null,null,null];
(statearr_26192[(0)] = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__);

(statearr_26192[(1)] = (1));

return statearr_26192;
});
var tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1 = (function (state_26182){
while(true){
var ret_value__23332__auto__ = (function (){try{while(true){
var result__23333__auto__ = switch__23330__auto__.call(null,state_26182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23333__auto__;
}
break;
}
}catch (e26193){if((e26193 instanceof Object)){
var ex__23334__auto__ = e26193;
var statearr_26194_26202 = state_26182;
(statearr_26194_26202[(5)] = ex__23334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26203 = state_26182;
state_26182 = G__26203;
continue;
} else {
return ret_value__23332__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__ = function(state_26182){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1.call(this,state_26182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____0;
tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto____1;
return tutorials$react_frontend$endpoint$start_$_state_machine__23331__auto__;
})()
;})(switch__23330__auto__,c__23353__auto__))
})();
var state__23355__auto__ = (function (){var statearr_26195 = f__23354__auto__.call(null);
(statearr_26195[(6)] = c__23353__auto__);

return statearr_26195;
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

//# sourceMappingURL=endpoint.js.map?rel=1521309839757
