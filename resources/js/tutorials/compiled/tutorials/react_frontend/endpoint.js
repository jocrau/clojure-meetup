// Compiled by ClojureScript 1.10.145 {}
goog.provide('tutorials.react_frontend.endpoint');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
tutorials.react_frontend.endpoint.station_id = "KMAAMHER21";
tutorials.react_frontend.endpoint.process_data = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__24848_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__24848_SHARP_),(200));
})),cljs.core.map.call(null,(function (p1__24849_SHARP_){
return cljs.core.get_in.call(null,p1__24849_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"stations","stations",-19744730),cljs.core.keyword.call(null,tutorials.react_frontend.endpoint.station_id)], null));
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
return (function (state_24857){
var state_val_24858 = (state_24857[(1)]);
if((state_val_24858 === (1))){
var inst_24850 = ["http://stationdata.wunderground.com/cgi-bin/stationlookup?station=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tutorials.react_frontend.endpoint.station_id),"&units=english&v=2.0&format=json"].join('');
var inst_24851 = cljs_http.client.get.call(null,inst_24850);
var state_24857__$1 = state_24857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24857__$1,(2),inst_24851);
} else {
if((state_val_24858 === (2))){
var inst_24853 = (state_24857[(2)]);
var state_24857__$1 = state_24857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24857__$1,(3),tutorials.react_frontend.endpoint.data_processing_ch,inst_24853);
} else {
if((state_val_24858 === (3))){
var inst_24855 = (state_24857[(2)]);
var state_24857__$1 = state_24857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24857__$1,inst_24855);
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
var statearr_24859 = [null,null,null,null,null,null,null];
(statearr_24859[(0)] = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__);

(statearr_24859[(1)] = (1));

return statearr_24859;
});
var tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____1 = (function (state_24857){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_24857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e24860){if((e24860 instanceof Object)){
var ex__23267__auto__ = e24860;
var statearr_24861_24863 = state_24857;
(statearr_24861_24863[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24864 = state_24857;
state_24857 = G__24864;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__ = function(state_24857){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____1.call(this,state_24857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____0;
tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto____1;
return tutorials$react_frontend$endpoint$request_wind_data_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23286__auto__))
})();
var state__23288__auto__ = (function (){var statearr_24862 = f__23287__auto__.call(null);
(statearr_24862[(6)] = c__23286__auto__);

return statearr_24862;
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
return (function (state_24879){
var state_val_24880 = (state_24879[(1)]);
if((state_val_24880 === (1))){
var state_24879__$1 = state_24879;
var statearr_24881_24893 = state_24879__$1;
(statearr_24881_24893[(2)] = null);

(statearr_24881_24893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24880 === (2))){
var inst_24866 = cljs.core.deref.call(null,tutorials.react_frontend.endpoint.running);
var state_24879__$1 = state_24879;
if(cljs.core.truth_(inst_24866)){
var statearr_24882_24894 = state_24879__$1;
(statearr_24882_24894[(1)] = (4));

} else {
var statearr_24883_24895 = state_24879__$1;
(statearr_24883_24895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24880 === (3))){
var inst_24877 = (state_24879[(2)]);
var state_24879__$1 = state_24879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24879__$1,inst_24877);
} else {
if((state_val_24880 === (4))){
var inst_24868 = tutorials.react_frontend.endpoint.request_wind_data.call(null);
var inst_24869 = cljs.core.async.timeout.call(null,(1000));
var state_24879__$1 = (function (){var statearr_24884 = state_24879;
(statearr_24884[(7)] = inst_24868);

return statearr_24884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24879__$1,(7),inst_24869);
} else {
if((state_val_24880 === (5))){
var state_24879__$1 = state_24879;
var statearr_24885_24896 = state_24879__$1;
(statearr_24885_24896[(2)] = null);

(statearr_24885_24896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24880 === (6))){
var inst_24875 = (state_24879[(2)]);
var state_24879__$1 = state_24879;
var statearr_24886_24897 = state_24879__$1;
(statearr_24886_24897[(2)] = inst_24875);

(statearr_24886_24897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24880 === (7))){
var inst_24871 = (state_24879[(2)]);
var state_24879__$1 = (function (){var statearr_24887 = state_24879;
(statearr_24887[(8)] = inst_24871);

return statearr_24887;
})();
var statearr_24888_24898 = state_24879__$1;
(statearr_24888_24898[(2)] = null);

(statearr_24888_24898[(1)] = (2));


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
var statearr_24889 = [null,null,null,null,null,null,null,null,null];
(statearr_24889[(0)] = tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__);

(statearr_24889[(1)] = (1));

return statearr_24889;
});
var tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____1 = (function (state_24879){
while(true){
var ret_value__23265__auto__ = (function (){try{while(true){
var result__23266__auto__ = switch__23263__auto__.call(null,state_24879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23266__auto__;
}
break;
}
}catch (e24890){if((e24890 instanceof Object)){
var ex__23267__auto__ = e24890;
var statearr_24891_24899 = state_24879;
(statearr_24891_24899[(5)] = ex__23267__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24900 = state_24879;
state_24879 = G__24900;
continue;
} else {
return ret_value__23265__auto__;
}
break;
}
});
tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__ = function(state_24879){
switch(arguments.length){
case 0:
return tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____0.call(this);
case 1:
return tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____1.call(this,state_24879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$0 = tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____0;
tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__.cljs$core$IFn$_invoke$arity$1 = tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto____1;
return tutorials$react_frontend$endpoint$start_$_state_machine__23264__auto__;
})()
;})(switch__23263__auto__,c__23286__auto__))
})();
var state__23288__auto__ = (function (){var statearr_24892 = f__23287__auto__.call(null);
(statearr_24892[(6)] = c__23286__auto__);

return statearr_24892;
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

//# sourceMappingURL=endpoint.js.map?rel=1521370188293
