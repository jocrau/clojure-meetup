// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.utils');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cemerick.url');
klipse.utils.current_url = (function klipse$utils$current_url(){
return cemerick.url.url.call(null,(location["href"]));
});
klipse.utils.url_parameters_STAR_ = (function klipse$utils$url_parameters_STAR_(){
return clojure.walk.keywordize_keys.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(klipse.utils.current_url.call(null)));
});
klipse.utils.url_parameters = cljs.core.memoize.call(null,klipse.utils.url_parameters_STAR_);
/**
 * Returns the current url with an additional parameter.
 *   If the parameter already exists, it is overridden.
 */
klipse.utils.add_url_parameter = (function klipse$utils$add_url_parameter(base_url,key,value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in.call(null,base_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.name.call(null,key)], null),value))].join('');
});
klipse.utils.create_url_with_input = (function klipse$utils$create_url_with_input(base_url,input){
return klipse.utils.add_url_parameter.call(null,(cljs.core.truth_(base_url)?cemerick.url.url.call(null,base_url):klipse.utils.current_url.call(null)),new cljs.core.Keyword(null,"cljs_in","cljs_in",1284321894),input);
});
klipse.utils.debounce = (function klipse$utils$debounce(func,wait_in_ms){
var counter = cljs.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (counter){
return (function (){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,counter){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,counter){
return (function (state_36954){
var state_val_36955 = (state_36954[(1)]);
if((state_val_36955 === (1))){
var inst_36941 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_36942 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_36954__$1 = (function (){var statearr_36956 = state_36954;
(statearr_36956[(7)] = inst_36941);

return statearr_36956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36954__$1,(2),inst_36942);
} else {
if((state_val_36955 === (2))){
var inst_36944 = (state_36954[(2)]);
var inst_36945 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_36946 = cljs.core.deref.call(null,counter);
var inst_36947 = (inst_36946 === (0));
var state_36954__$1 = (function (){var statearr_36957 = state_36954;
(statearr_36957[(8)] = inst_36944);

(statearr_36957[(9)] = inst_36945);

return statearr_36957;
})();
if(cljs.core.truth_(inst_36947)){
var statearr_36958_36981 = state_36954__$1;
(statearr_36958_36981[(1)] = (3));

} else {
var statearr_36959_36982 = state_36954__$1;
(statearr_36959_36982[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (3))){
var inst_36949 = func.call(null);
var state_36954__$1 = state_36954;
var statearr_36960_36983 = state_36954__$1;
(statearr_36960_36983[(2)] = inst_36949);

(statearr_36960_36983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (4))){
var state_36954__$1 = state_36954;
var statearr_36961_36984 = state_36954__$1;
(statearr_36961_36984[(2)] = null);

(statearr_36961_36984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (5))){
var inst_36952 = (state_36954[(2)]);
var state_36954__$1 = state_36954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36954__$1,inst_36952);
} else {
return null;
}
}
}
}
}
});})(c__24600__auto__,counter))
;
return ((function (switch__24510__auto__,c__24600__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__24511__auto__ = null;
var klipse$utils$debounce_$_state_machine__24511__auto____0 = (function (){
var statearr_36962 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36962[(0)] = klipse$utils$debounce_$_state_machine__24511__auto__);

(statearr_36962[(1)] = (1));

return statearr_36962;
});
var klipse$utils$debounce_$_state_machine__24511__auto____1 = (function (state_36954){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_36954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e36963){if((e36963 instanceof Object)){
var ex__24514__auto__ = e36963;
var statearr_36964_36985 = state_36954;
(statearr_36964_36985[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36986 = state_36954;
state_36954 = G__36986;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__24511__auto__ = function(state_36954){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__24511__auto____1.call(this,state_36954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$debounce_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__24511__auto____0;
klipse$utils$debounce_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__24511__auto____1;
return klipse$utils$debounce_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,counter))
})();
var state__24602__auto__ = (function (){var statearr_36965 = f__24601__auto__.call(null);
(statearr_36965[(6)] = c__24600__auto__);

return statearr_36965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,counter))
);

return c__24600__auto__;
});})(counter))
,((function (counter){
return (function (){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,counter){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,counter){
return (function (state_36973){
var state_val_36974 = (state_36973[(1)]);
if((state_val_36974 === (1))){
var inst_36966 = func.call(null);
var inst_36967 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_36968 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_36973__$1 = (function (){var statearr_36975 = state_36973;
(statearr_36975[(7)] = inst_36966);

(statearr_36975[(8)] = inst_36967);

return statearr_36975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36973__$1,(2),inst_36968);
} else {
if((state_val_36974 === (2))){
var inst_36970 = (state_36973[(2)]);
var inst_36971 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var state_36973__$1 = (function (){var statearr_36976 = state_36973;
(statearr_36976[(9)] = inst_36970);

return statearr_36976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36973__$1,inst_36971);
} else {
return null;
}
}
});})(c__24600__auto__,counter))
;
return ((function (switch__24510__auto__,c__24600__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__24511__auto__ = null;
var klipse$utils$debounce_$_state_machine__24511__auto____0 = (function (){
var statearr_36977 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36977[(0)] = klipse$utils$debounce_$_state_machine__24511__auto__);

(statearr_36977[(1)] = (1));

return statearr_36977;
});
var klipse$utils$debounce_$_state_machine__24511__auto____1 = (function (state_36973){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_36973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e36978){if((e36978 instanceof Object)){
var ex__24514__auto__ = e36978;
var statearr_36979_36987 = state_36973;
(statearr_36979_36987[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36988 = state_36973;
state_36973 = G__36988;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__24511__auto__ = function(state_36973){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__24511__auto____1.call(this,state_36973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$debounce_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__24511__auto____0;
klipse$utils$debounce_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__24511__auto____1;
return klipse$utils$debounce_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,counter))
})();
var state__24602__auto__ = (function (){var statearr_36980 = f__24601__auto__.call(null);
(statearr_36980[(6)] = c__24600__auto__);

return statearr_36980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,counter))
);

return c__24600__auto__;
});})(counter))
], null);
});
klipse.utils.gist_path_raw = (function klipse$utils$gist_path_raw(gist_id){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"/raw","?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
});
klipse.utils.gist_path_page = (function klipse$utils$gist_path_page(gist_id){
return ["https://gist.github.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id)].join('');
});
klipse.utils.read_input_from_gist = (function klipse$utils$read_input_from_gist(gist_id){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_37032){
var state_val_37033 = (state_37032[(1)]);
if((state_val_37033 === (7))){
var state_37032__$1 = state_37032;
var statearr_37034_37061 = state_37032__$1;
(statearr_37034_37061[(2)] = false);

(statearr_37034_37061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (1))){
var state_37032__$1 = state_37032;
if(cljs.core.truth_(gist_id)){
var statearr_37035_37062 = state_37032__$1;
(statearr_37035_37062[(1)] = (2));

} else {
var statearr_37036_37063 = state_37032__$1;
(statearr_37036_37063[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (4))){
var inst_37030 = (state_37032[(2)]);
var state_37032__$1 = state_37032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37032__$1,inst_37030);
} else {
if((state_val_37033 === (15))){
var inst_36991 = (state_37032[(7)]);
var inst_37019 = (state_37032[(8)]);
var inst_37024 = ["\"","Wrong gist path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36991),"\n","gist-id= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"\n","http status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37019),"\""].join('');
var state_37032__$1 = state_37032;
var statearr_37037_37064 = state_37032__$1;
(statearr_37037_37064[(2)] = inst_37024);

(statearr_37037_37064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (13))){
var inst_36997 = (state_37032[(9)]);
var state_37032__$1 = state_37032;
var statearr_37038_37065 = state_37032__$1;
(statearr_37038_37065[(2)] = inst_36997);

(statearr_37038_37065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (6))){
var inst_36997 = (state_37032[(9)]);
var inst_37002 = inst_36997.cljs$lang$protocol_mask$partition0$;
var inst_37003 = (inst_37002 & (64));
var inst_37004 = inst_36997.cljs$core$ISeq$;
var inst_37005 = (cljs.core.PROTOCOL_SENTINEL === inst_37004);
var inst_37006 = (inst_37003) || (inst_37005);
var state_37032__$1 = state_37032;
if(cljs.core.truth_(inst_37006)){
var statearr_37039_37066 = state_37032__$1;
(statearr_37039_37066[(1)] = (9));

} else {
var statearr_37040_37067 = state_37032__$1;
(statearr_37040_37067[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (17))){
var inst_37027 = (state_37032[(2)]);
var state_37032__$1 = state_37032;
var statearr_37041_37068 = state_37032__$1;
(statearr_37041_37068[(2)] = inst_37027);

(statearr_37041_37068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (3))){
var state_37032__$1 = state_37032;
var statearr_37042_37069 = state_37032__$1;
(statearr_37042_37069[(2)] = null);

(statearr_37042_37069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (12))){
var inst_36997 = (state_37032[(9)]);
var inst_37015 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36997);
var state_37032__$1 = state_37032;
var statearr_37043_37070 = state_37032__$1;
(statearr_37043_37070[(2)] = inst_37015);

(statearr_37043_37070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (2))){
var inst_36991 = (state_37032[(7)]);
var inst_36991__$1 = klipse.utils.gist_path_raw.call(null,gist_id);
var inst_36992 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_36993 = [false];
var inst_36994 = cljs.core.PersistentHashMap.fromArrays(inst_36992,inst_36993);
var inst_36995 = cljs_http.client.get.call(null,inst_36991__$1,inst_36994);
var state_37032__$1 = (function (){var statearr_37044 = state_37032;
(statearr_37044[(7)] = inst_36991__$1);

return statearr_37044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37032__$1,(5),inst_36995);
} else {
if((state_val_37033 === (11))){
var inst_37010 = (state_37032[(2)]);
var state_37032__$1 = state_37032;
var statearr_37045_37071 = state_37032__$1;
(statearr_37045_37071[(2)] = inst_37010);

(statearr_37045_37071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (9))){
var state_37032__$1 = state_37032;
var statearr_37046_37072 = state_37032__$1;
(statearr_37046_37072[(2)] = true);

(statearr_37046_37072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (5))){
var inst_36997 = (state_37032[(9)]);
var inst_36997__$1 = (state_37032[(2)]);
var inst_36999 = (inst_36997__$1 == null);
var inst_37000 = cljs.core.not.call(null,inst_36999);
var state_37032__$1 = (function (){var statearr_37047 = state_37032;
(statearr_37047[(9)] = inst_36997__$1);

return statearr_37047;
})();
if(inst_37000){
var statearr_37048_37073 = state_37032__$1;
(statearr_37048_37073[(1)] = (6));

} else {
var statearr_37049_37074 = state_37032__$1;
(statearr_37049_37074[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (14))){
var inst_37019 = (state_37032[(8)]);
var inst_37018 = (state_37032[(2)]);
var inst_37019__$1 = cljs.core.get.call(null,inst_37018,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_37020 = cljs.core.get.call(null,inst_37018,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_37021 = cljs.core._EQ_.call(null,inst_37019__$1,(200));
var inst_37022 = !(inst_37021);
var state_37032__$1 = (function (){var statearr_37050 = state_37032;
(statearr_37050[(10)] = inst_37020);

(statearr_37050[(8)] = inst_37019__$1);

return statearr_37050;
})();
if(inst_37022){
var statearr_37051_37075 = state_37032__$1;
(statearr_37051_37075[(1)] = (15));

} else {
var statearr_37052_37076 = state_37032__$1;
(statearr_37052_37076[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (16))){
var inst_37020 = (state_37032[(10)]);
var state_37032__$1 = state_37032;
var statearr_37053_37077 = state_37032__$1;
(statearr_37053_37077[(2)] = inst_37020);

(statearr_37053_37077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (10))){
var state_37032__$1 = state_37032;
var statearr_37054_37078 = state_37032__$1;
(statearr_37054_37078[(2)] = false);

(statearr_37054_37078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37033 === (8))){
var inst_37013 = (state_37032[(2)]);
var state_37032__$1 = state_37032;
if(cljs.core.truth_(inst_37013)){
var statearr_37055_37079 = state_37032__$1;
(statearr_37055_37079[(1)] = (12));

} else {
var statearr_37056_37080 = state_37032__$1;
(statearr_37056_37080[(1)] = (13));

}

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
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$utils$read_input_from_gist_$_state_machine__24511__auto__ = null;
var klipse$utils$read_input_from_gist_$_state_machine__24511__auto____0 = (function (){
var statearr_37057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37057[(0)] = klipse$utils$read_input_from_gist_$_state_machine__24511__auto__);

(statearr_37057[(1)] = (1));

return statearr_37057;
});
var klipse$utils$read_input_from_gist_$_state_machine__24511__auto____1 = (function (state_37032){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37058){if((e37058 instanceof Object)){
var ex__24514__auto__ = e37058;
var statearr_37059_37081 = state_37032;
(statearr_37059_37081[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37082 = state_37032;
state_37032 = G__37082;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$utils$read_input_from_gist_$_state_machine__24511__auto__ = function(state_37032){
switch(arguments.length){
case 0:
return klipse$utils$read_input_from_gist_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$utils$read_input_from_gist_$_state_machine__24511__auto____1.call(this,state_37032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$read_input_from_gist_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$read_input_from_gist_$_state_machine__24511__auto____0;
klipse$utils$read_input_from_gist_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$read_input_from_gist_$_state_machine__24511__auto____1;
return klipse$utils$read_input_from_gist_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_37060 = f__24601__auto__.call(null);
(statearr_37060[(6)] = c__24600__auto__);

return statearr_37060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.utils.runonce = (function klipse$utils$runonce(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__37083__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__37083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37084__i = 0, G__37084__a = new Array(arguments.length -  0);
while (G__37084__i < G__37084__a.length) {G__37084__a[G__37084__i] = arguments[G__37084__i + 0]; ++G__37084__i;}
  args = new cljs.core.IndexedSeq(G__37084__a,0,null);
} 
return G__37083__delegate.call(this,args);};
G__37083.cljs$lang$maxFixedArity = 0;
G__37083.cljs$lang$applyTo = (function (arglist__37085){
var args = cljs.core.seq(arglist__37085);
return G__37083__delegate(args);
});
G__37083.cljs$core$IFn$_invoke$arity$variadic = G__37083__delegate;
return G__37083;
})()
;
;})(ran))
});
/**
 * Returns a function that will run `f` only once.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return [:ok].
 *   `f` must return a channel.
 */
klipse.utils.runonce_async = (function klipse$utils$runonce_async(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__37122__delegate = function (args){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,ran){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,ran){
return (function (state_37106){
var state_val_37107 = (state_37106[(1)]);
if((state_val_37107 === (1))){
var inst_37086 = cljs.core.deref.call(null,ran);
var inst_37087 = cljs.core.not.call(null,inst_37086);
var state_37106__$1 = state_37106;
if(inst_37087){
var statearr_37108_37123 = state_37106__$1;
(statearr_37108_37123[(1)] = (2));

} else {
var statearr_37109_37124 = state_37106__$1;
(statearr_37109_37124[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37107 === (2))){
var inst_37089 = cljs.core.apply.call(null,f,args);
var state_37106__$1 = state_37106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37106__$1,(5),inst_37089);
} else {
if((state_val_37107 === (3))){
var inst_37100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37101 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_37102 = (new cljs.core.PersistentVector(null,1,(5),inst_37100,inst_37101,null));
var state_37106__$1 = state_37106;
var statearr_37110_37125 = state_37106__$1;
(statearr_37110_37125[(2)] = inst_37102);

(statearr_37110_37125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37107 === (4))){
var inst_37104 = (state_37106[(2)]);
var state_37106__$1 = state_37106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37106__$1,inst_37104);
} else {
if((state_val_37107 === (5))){
var inst_37091 = (state_37106[(7)]);
var inst_37091__$1 = (state_37106[(2)]);
var inst_37092 = cljs.core.first.call(null,inst_37091__$1);
var inst_37093 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_37092);
var state_37106__$1 = (function (){var statearr_37111 = state_37106;
(statearr_37111[(7)] = inst_37091__$1);

return statearr_37111;
})();
if(inst_37093){
var statearr_37112_37126 = state_37106__$1;
(statearr_37112_37126[(1)] = (6));

} else {
var statearr_37113_37127 = state_37106__$1;
(statearr_37113_37127[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37107 === (6))){
var inst_37095 = cljs.core.reset_BANG_.call(null,ran,true);
var state_37106__$1 = state_37106;
var statearr_37114_37128 = state_37106__$1;
(statearr_37114_37128[(2)] = inst_37095);

(statearr_37114_37128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37107 === (7))){
var state_37106__$1 = state_37106;
var statearr_37115_37129 = state_37106__$1;
(statearr_37115_37129[(2)] = null);

(statearr_37115_37129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37107 === (8))){
var inst_37091 = (state_37106[(7)]);
var inst_37098 = (state_37106[(2)]);
var state_37106__$1 = (function (){var statearr_37116 = state_37106;
(statearr_37116[(8)] = inst_37098);

return statearr_37116;
})();
var statearr_37117_37130 = state_37106__$1;
(statearr_37117_37130[(2)] = inst_37091);

(statearr_37117_37130[(1)] = (4));


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
}
});})(c__24600__auto__,ran))
;
return ((function (switch__24510__auto__,c__24600__auto__,ran){
return (function() {
var klipse$utils$runonce_async_$_state_machine__24511__auto__ = null;
var klipse$utils$runonce_async_$_state_machine__24511__auto____0 = (function (){
var statearr_37118 = [null,null,null,null,null,null,null,null,null];
(statearr_37118[(0)] = klipse$utils$runonce_async_$_state_machine__24511__auto__);

(statearr_37118[(1)] = (1));

return statearr_37118;
});
var klipse$utils$runonce_async_$_state_machine__24511__auto____1 = (function (state_37106){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37119){if((e37119 instanceof Object)){
var ex__24514__auto__ = e37119;
var statearr_37120_37131 = state_37106;
(statearr_37120_37131[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37132 = state_37106;
state_37106 = G__37132;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$utils$runonce_async_$_state_machine__24511__auto__ = function(state_37106){
switch(arguments.length){
case 0:
return klipse$utils$runonce_async_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$utils$runonce_async_$_state_machine__24511__auto____1.call(this,state_37106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$runonce_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$runonce_async_$_state_machine__24511__auto____0;
klipse$utils$runonce_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$runonce_async_$_state_machine__24511__auto____1;
return klipse$utils$runonce_async_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,ran))
})();
var state__24602__auto__ = (function (){var statearr_37121 = f__24601__auto__.call(null);
(statearr_37121[(6)] = c__24600__auto__);

return statearr_37121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,ran))
);

return c__24600__auto__;
};
var G__37122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37133__i = 0, G__37133__a = new Array(arguments.length -  0);
while (G__37133__i < G__37133__a.length) {G__37133__a[G__37133__i] = arguments[G__37133__i + 0]; ++G__37133__i;}
  args = new cljs.core.IndexedSeq(G__37133__a,0,null);
} 
return G__37122__delegate.call(this,args);};
G__37122.cljs$lang$maxFixedArity = 0;
G__37122.cljs$lang$applyTo = (function (arglist__37134){
var args = cljs.core.seq(arglist__37134);
return G__37122__delegate(args);
});
G__37122.cljs$core$IFn$_invoke$arity$variadic = G__37122__delegate;
return G__37122;
})()
;
;})(ran))
});
/**
 * Returns a memoized version of f.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return the cached results.
 *   `f` must return a channel.
 */
klipse.utils.memoize_async = (function klipse$utils$memoize_async(f){
var ran = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (ran){
return (function() { 
var G__37171__delegate = function (args){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,ran){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,ran){
return (function (state_37155){
var state_val_37156 = (state_37155[(1)]);
if((state_val_37156 === (1))){
var inst_37135 = cljs.core.deref.call(null,ran);
var inst_37136 = cljs.core.contains_QMARK_.call(null,inst_37135,args);
var inst_37137 = !(inst_37136);
var state_37155__$1 = state_37155;
if(inst_37137){
var statearr_37157_37172 = state_37155__$1;
(statearr_37157_37172[(1)] = (2));

} else {
var statearr_37158_37173 = state_37155__$1;
(statearr_37158_37173[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (2))){
var inst_37139 = cljs.core.apply.call(null,f,args);
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37155__$1,(5),inst_37139);
} else {
if((state_val_37156 === (3))){
var inst_37150 = cljs.core.deref.call(null,ran);
var inst_37151 = cljs.core.get.call(null,inst_37150,args);
var state_37155__$1 = state_37155;
var statearr_37159_37174 = state_37155__$1;
(statearr_37159_37174[(2)] = inst_37151);

(statearr_37159_37174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (4))){
var inst_37153 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37155__$1,inst_37153);
} else {
if((state_val_37156 === (5))){
var inst_37141 = (state_37155[(7)]);
var inst_37141__$1 = (state_37155[(2)]);
var inst_37142 = cljs.core.first.call(null,inst_37141__$1);
var inst_37143 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_37142);
var state_37155__$1 = (function (){var statearr_37160 = state_37155;
(statearr_37160[(7)] = inst_37141__$1);

return statearr_37160;
})();
if(inst_37143){
var statearr_37161_37175 = state_37155__$1;
(statearr_37161_37175[(1)] = (6));

} else {
var statearr_37162_37176 = state_37155__$1;
(statearr_37162_37176[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (6))){
var inst_37141 = (state_37155[(7)]);
var inst_37145 = cljs.core.swap_BANG_.call(null,ran,cljs.core.assoc,args,inst_37141);
var state_37155__$1 = state_37155;
var statearr_37163_37177 = state_37155__$1;
(statearr_37163_37177[(2)] = inst_37145);

(statearr_37163_37177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (7))){
var state_37155__$1 = state_37155;
var statearr_37164_37178 = state_37155__$1;
(statearr_37164_37178[(2)] = null);

(statearr_37164_37178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (8))){
var inst_37141 = (state_37155[(7)]);
var inst_37148 = (state_37155[(2)]);
var state_37155__$1 = (function (){var statearr_37165 = state_37155;
(statearr_37165[(8)] = inst_37148);

return statearr_37165;
})();
var statearr_37166_37179 = state_37155__$1;
(statearr_37166_37179[(2)] = inst_37141);

(statearr_37166_37179[(1)] = (4));


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
}
});})(c__24600__auto__,ran))
;
return ((function (switch__24510__auto__,c__24600__auto__,ran){
return (function() {
var klipse$utils$memoize_async_$_state_machine__24511__auto__ = null;
var klipse$utils$memoize_async_$_state_machine__24511__auto____0 = (function (){
var statearr_37167 = [null,null,null,null,null,null,null,null,null];
(statearr_37167[(0)] = klipse$utils$memoize_async_$_state_machine__24511__auto__);

(statearr_37167[(1)] = (1));

return statearr_37167;
});
var klipse$utils$memoize_async_$_state_machine__24511__auto____1 = (function (state_37155){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37168){if((e37168 instanceof Object)){
var ex__24514__auto__ = e37168;
var statearr_37169_37180 = state_37155;
(statearr_37169_37180[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37181 = state_37155;
state_37155 = G__37181;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$utils$memoize_async_$_state_machine__24511__auto__ = function(state_37155){
switch(arguments.length){
case 0:
return klipse$utils$memoize_async_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$utils$memoize_async_$_state_machine__24511__auto____1.call(this,state_37155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$memoize_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$memoize_async_$_state_machine__24511__auto____0;
klipse$utils$memoize_async_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$memoize_async_$_state_machine__24511__auto____1;
return klipse$utils$memoize_async_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,ran))
})();
var state__24602__auto__ = (function (){var statearr_37170 = f__24601__auto__.call(null);
(statearr_37170[(6)] = c__24600__auto__);

return statearr_37170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,ran))
);

return c__24600__auto__;
};
var G__37171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37182__i = 0, G__37182__a = new Array(arguments.length -  0);
while (G__37182__i < G__37182__a.length) {G__37182__a[G__37182__i] = arguments[G__37182__i + 0]; ++G__37182__i;}
  args = new cljs.core.IndexedSeq(G__37182__a,0,null);
} 
return G__37171__delegate.call(this,args);};
G__37171.cljs$lang$maxFixedArity = 0;
G__37171.cljs$lang$applyTo = (function (arglist__37183){
var args = cljs.core.seq(arglist__37183);
return G__37171__delegate(args);
});
G__37171.cljs$core$IFn$_invoke$arity$variadic = G__37171__delegate;
return G__37171;
})()
;
;})(ran))
});
klipse.utils.default_permitted_symbols = (function klipse$utils$default_permitted_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["console","setTimeout","setInterval","Math","Date"], null);
});
klipse.utils.default_forbidden_symbols = (function klipse$utils$default_forbidden_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["document","XMLHttpRequest","eval","window","Function"], null);
});
klipse.utils.secured_eval = false;
klipse.utils.eval_in_global_scope = eval;
klipse.utils.securize_eval_BANG__STAR_ = (function klipse$utils$securize_eval_BANG__STAR_(the_forbidden_symbols){
klipse.utils.secured_eval = true;

var original_eval = eval;
var o_SHARP__37184 = window;
(o_SHARP__37184["eval"] = ((function (o_SHARP__37184,original_eval){
return (function (src){
return original_eval.call(null,["with (klipse_eval_sandbox){ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"}"].join(''));
});})(o_SHARP__37184,original_eval))
);


klipse.utils.eval_in_global_scope = eval;

var o_SHARP__37185 = window;
(o_SHARP__37185["klipse_unsecured_eval"] = original_eval);


var o_SHARP_ = window;
(o_SHARP_["klipse_eval_sandbox"] = cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,the_forbidden_symbols,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY))));

return o_SHARP_;
});
klipse.utils.securize_eval_BANG_ = klipse.utils.runonce.call(null,klipse.utils.securize_eval_BANG__STAR_);
klipse.utils.setup_container_BANG_ = (function klipse$utils$setup_container_BANG_(container_id){
if(klipse.utils.secured_eval){
return null;
} else {
(window["klipse_container"] = document.getElementById(container_id));

return (window["klipse_container_id"] = container_id);
}
});
klipse.utils.unsecured_eval_in_global_scope = (function klipse$utils$unsecured_eval_in_global_scope(s){
return (function (){var or__8916__auto__ = (window["klipse_unsecured_eval"]);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return eval;
}
})().call(null,s);
});
klipse.utils.load_script = (function klipse$utils$load_script(var_args){
var args__10202__auto__ = [];
var len__10195__auto___37273 = arguments.length;
var i__10196__auto___37274 = (0);
while(true){
if((i__10196__auto___37274 < len__10195__auto___37273)){
args__10202__auto__.push((arguments[i__10196__auto___37274]));

var G__37275 = (i__10196__auto___37274 + (1));
i__10196__auto___37274 = G__37275;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic = (function (script,p__37188){
var map__37189 = p__37188;
var map__37189__$1 = ((((!((map__37189 == null)))?((((map__37189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37189):map__37189);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__37189__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,map__37189,map__37189__$1,secured_eval_QMARK_){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,map__37189,map__37189__$1,secured_eval_QMARK_){
return (function (state_37242){
var state_val_37243 = (state_37242[(1)]);
if((state_val_37243 === (7))){
var state_37242__$1 = state_37242;
var statearr_37244_37276 = state_37242__$1;
(statearr_37244_37276[(2)] = false);

(statearr_37244_37276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (1))){
var inst_37191 = console.info("loading:",script);
var inst_37193 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_37194 = [false];
var inst_37195 = cljs.core.PersistentHashMap.fromArrays(inst_37193,inst_37194);
var inst_37196 = cljs_http.client.get.call(null,script,inst_37195);
var state_37242__$1 = (function (){var statearr_37245 = state_37242;
(statearr_37245[(7)] = inst_37191);

return statearr_37245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37242__$1,(2),inst_37196);
} else {
if((state_val_37243 === (4))){
var state_37242__$1 = state_37242;
var statearr_37246_37277 = state_37242__$1;
(statearr_37246_37277[(2)] = false);

(statearr_37246_37277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (15))){
var inst_37221 = (state_37242[(8)]);
var inst_37226 = klipse.utils.eval_in_global_scope.call(null,inst_37221);
var state_37242__$1 = state_37242;
var statearr_37247_37278 = state_37242__$1;
(statearr_37247_37278[(2)] = inst_37226);

(statearr_37247_37278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (13))){
var inst_37220 = (state_37242[(9)]);
var inst_37236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37237 = [inst_37220,script];
var inst_37238 = (new cljs.core.PersistentVector(null,2,(5),inst_37236,inst_37237,null));
var state_37242__$1 = state_37242;
var statearr_37248_37279 = state_37242__$1;
(statearr_37248_37279[(2)] = inst_37238);

(statearr_37248_37279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (6))){
var state_37242__$1 = state_37242;
var statearr_37249_37280 = state_37242__$1;
(statearr_37249_37280[(2)] = true);

(statearr_37249_37280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (17))){
var inst_37230 = (state_37242[(2)]);
var inst_37231 = console.info("evaluation done:",script);
var inst_37232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37233 = [new cljs.core.Keyword(null,"ok","ok",967785236),script];
var inst_37234 = (new cljs.core.PersistentVector(null,2,(5),inst_37232,inst_37233,null));
var state_37242__$1 = (function (){var statearr_37250 = state_37242;
(statearr_37250[(10)] = inst_37230);

(statearr_37250[(11)] = inst_37231);

return statearr_37250;
})();
var statearr_37251_37281 = state_37242__$1;
(statearr_37251_37281[(2)] = inst_37234);

(statearr_37251_37281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (3))){
var inst_37198 = (state_37242[(12)]);
var inst_37203 = inst_37198.cljs$lang$protocol_mask$partition0$;
var inst_37204 = (inst_37203 & (64));
var inst_37205 = inst_37198.cljs$core$ISeq$;
var inst_37206 = (cljs.core.PROTOCOL_SENTINEL === inst_37205);
var inst_37207 = (inst_37204) || (inst_37206);
var state_37242__$1 = state_37242;
if(cljs.core.truth_(inst_37207)){
var statearr_37252_37282 = state_37242__$1;
(statearr_37252_37282[(1)] = (6));

} else {
var statearr_37253_37283 = state_37242__$1;
(statearr_37253_37283[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (12))){
var inst_37224 = console.info("evaluating:",script);
var state_37242__$1 = (function (){var statearr_37254 = state_37242;
(statearr_37254[(13)] = inst_37224);

return statearr_37254;
})();
if(cljs.core.truth_(secured_eval_QMARK_)){
var statearr_37255_37284 = state_37242__$1;
(statearr_37255_37284[(1)] = (15));

} else {
var statearr_37256_37285 = state_37242__$1;
(statearr_37256_37285[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (2))){
var inst_37198 = (state_37242[(12)]);
var inst_37198__$1 = (state_37242[(2)]);
var inst_37200 = (inst_37198__$1 == null);
var inst_37201 = cljs.core.not.call(null,inst_37200);
var state_37242__$1 = (function (){var statearr_37257 = state_37242;
(statearr_37257[(12)] = inst_37198__$1);

return statearr_37257;
})();
if(inst_37201){
var statearr_37258_37286 = state_37242__$1;
(statearr_37258_37286[(1)] = (3));

} else {
var statearr_37259_37287 = state_37242__$1;
(statearr_37259_37287[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (11))){
var inst_37220 = (state_37242[(9)]);
var inst_37219 = (state_37242[(2)]);
var inst_37220__$1 = cljs.core.get.call(null,inst_37219,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_37221 = cljs.core.get.call(null,inst_37219,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_37222 = cljs.core._EQ_.call(null,(200),inst_37220__$1);
var state_37242__$1 = (function (){var statearr_37260 = state_37242;
(statearr_37260[(8)] = inst_37221);

(statearr_37260[(9)] = inst_37220__$1);

return statearr_37260;
})();
if(inst_37222){
var statearr_37261_37288 = state_37242__$1;
(statearr_37261_37288[(1)] = (12));

} else {
var statearr_37262_37289 = state_37242__$1;
(statearr_37262_37289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (9))){
var inst_37198 = (state_37242[(12)]);
var inst_37216 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37198);
var state_37242__$1 = state_37242;
var statearr_37263_37290 = state_37242__$1;
(statearr_37263_37290[(2)] = inst_37216);

(statearr_37263_37290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (5))){
var inst_37214 = (state_37242[(2)]);
var state_37242__$1 = state_37242;
if(cljs.core.truth_(inst_37214)){
var statearr_37264_37291 = state_37242__$1;
(statearr_37264_37291[(1)] = (9));

} else {
var statearr_37265_37292 = state_37242__$1;
(statearr_37265_37292[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (14))){
var inst_37240 = (state_37242[(2)]);
var state_37242__$1 = state_37242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37242__$1,inst_37240);
} else {
if((state_val_37243 === (16))){
var inst_37221 = (state_37242[(8)]);
var inst_37228 = klipse.utils.unsecured_eval_in_global_scope.call(null,inst_37221);
var state_37242__$1 = state_37242;
var statearr_37266_37293 = state_37242__$1;
(statearr_37266_37293[(2)] = inst_37228);

(statearr_37266_37293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (10))){
var inst_37198 = (state_37242[(12)]);
var state_37242__$1 = state_37242;
var statearr_37267_37294 = state_37242__$1;
(statearr_37267_37294[(2)] = inst_37198);

(statearr_37267_37294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (8))){
var inst_37211 = (state_37242[(2)]);
var state_37242__$1 = state_37242;
var statearr_37268_37295 = state_37242__$1;
(statearr_37268_37295[(2)] = inst_37211);

(statearr_37268_37295[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto__,map__37189,map__37189__$1,secured_eval_QMARK_))
;
return ((function (switch__24510__auto__,c__24600__auto__,map__37189,map__37189__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__24511__auto__ = null;
var klipse$utils$state_machine__24511__auto____0 = (function (){
var statearr_37269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37269[(0)] = klipse$utils$state_machine__24511__auto__);

(statearr_37269[(1)] = (1));

return statearr_37269;
});
var klipse$utils$state_machine__24511__auto____1 = (function (state_37242){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37270){if((e37270 instanceof Object)){
var ex__24514__auto__ = e37270;
var statearr_37271_37296 = state_37242;
(statearr_37271_37296[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37297 = state_37242;
state_37242 = G__37297;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$utils$state_machine__24511__auto__ = function(state_37242){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__24511__auto____0.call(this);
case 1:
return klipse$utils$state_machine__24511__auto____1.call(this,state_37242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__24511__auto____0;
klipse$utils$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__24511__auto____1;
return klipse$utils$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,map__37189,map__37189__$1,secured_eval_QMARK_))
})();
var state__24602__auto__ = (function (){var statearr_37272 = f__24601__auto__.call(null);
(statearr_37272[(6)] = c__24600__auto__);

return statearr_37272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,map__37189,map__37189__$1,secured_eval_QMARK_))
);

return c__24600__auto__;
});

klipse.utils.load_script.cljs$lang$maxFixedArity = (1);

klipse.utils.load_script.cljs$lang$applyTo = (function (seq37186){
var G__37187 = cljs.core.first.call(null,seq37186);
var seq37186__$1 = cljs.core.next.call(null,seq37186);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic(G__37187,seq37186__$1);
});

klipse.utils.load_script_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_script);
klipse.utils.load_scripts = (function klipse$utils$load_scripts(var_args){
var args__10202__auto__ = [];
var len__10195__auto___37356 = arguments.length;
var i__10196__auto___37357 = (0);
while(true){
if((i__10196__auto___37357 < len__10195__auto___37356)){
args__10202__auto__.push((arguments[i__10196__auto___37357]));

var G__37358 = (i__10196__auto___37357 + (1));
i__10196__auto___37357 = G__37358;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (scripts,p__37300){
var map__37301 = p__37300;
var map__37301__$1 = ((((!((map__37301 == null)))?((((map__37301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37301):map__37301);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__37301__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,map__37301,map__37301__$1,secured_eval_QMARK_){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,map__37301,map__37301__$1,secured_eval_QMARK_){
return (function (state_37336){
var state_val_37337 = (state_37336[(1)]);
if((state_val_37337 === (7))){
var inst_37315 = (state_37336[(7)]);
var inst_37314 = (state_37336[(2)]);
var inst_37315__$1 = cljs.core.nth.call(null,inst_37314,(0),null);
var inst_37316 = cljs.core.nth.call(null,inst_37314,(1),null);
var inst_37317 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_37315__$1);
var state_37336__$1 = (function (){var statearr_37338 = state_37336;
(statearr_37338[(7)] = inst_37315__$1);

(statearr_37338[(8)] = inst_37316);

return statearr_37338;
})();
if(inst_37317){
var statearr_37339_37359 = state_37336__$1;
(statearr_37339_37359[(1)] = (8));

} else {
var statearr_37340_37360 = state_37336__$1;
(statearr_37340_37360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37337 === (1))){
var inst_37303 = scripts;
var state_37336__$1 = (function (){var statearr_37341 = state_37336;
(statearr_37341[(9)] = inst_37303);

return statearr_37341;
})();
var statearr_37342_37361 = state_37336__$1;
(statearr_37342_37361[(2)] = null);

(statearr_37342_37361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37337 === (4))){
var inst_37303 = (state_37336[(9)]);
var inst_37310 = cljs.core.first.call(null,inst_37303);
var inst_37311 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37310)].join('');
var inst_37312 = klipse.utils.load_script_mem.call(null,inst_37311,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),secured_eval_QMARK_);
var state_37336__$1 = state_37336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37336__$1,(7),inst_37312);
} else {
if((state_val_37337 === (6))){
var inst_37332 = (state_37336[(2)]);
var state_37336__$1 = state_37336;
var statearr_37343_37362 = state_37336__$1;
(statearr_37343_37362[(2)] = inst_37332);

(statearr_37343_37362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37337 === (3))){
var inst_37334 = (state_37336[(2)]);
var state_37336__$1 = state_37336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37336__$1,inst_37334);
} else {
if((state_val_37337 === (2))){
var inst_37303 = (state_37336[(9)]);
var inst_37305 = cljs.core.seq.call(null,inst_37303);
var state_37336__$1 = state_37336;
if(inst_37305){
var statearr_37344_37363 = state_37336__$1;
(statearr_37344_37363[(1)] = (4));

} else {
var statearr_37345_37364 = state_37336__$1;
(statearr_37345_37364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37337 === (9))){
var state_37336__$1 = state_37336;
var statearr_37346_37365 = state_37336__$1;
(statearr_37346_37365[(2)] = null);

(statearr_37346_37365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37337 === (5))){
var inst_37328 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37329 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_37330 = (new cljs.core.PersistentVector(null,1,(5),inst_37328,inst_37329,null));
var state_37336__$1 = state_37336;
var statearr_37347_37366 = state_37336__$1;
(statearr_37347_37366[(2)] = inst_37330);

(statearr_37347_37366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37337 === (10))){
var inst_37315 = (state_37336[(7)]);
var inst_37316 = (state_37336[(8)]);
var inst_37323 = (state_37336[(2)]);
var inst_37324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37325 = [inst_37315,inst_37316];
var inst_37326 = (new cljs.core.PersistentVector(null,2,(5),inst_37324,inst_37325,null));
var state_37336__$1 = (function (){var statearr_37348 = state_37336;
(statearr_37348[(10)] = inst_37323);

return statearr_37348;
})();
var statearr_37349_37367 = state_37336__$1;
(statearr_37349_37367[(2)] = inst_37326);

(statearr_37349_37367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37337 === (8))){
var inst_37303 = (state_37336[(9)]);
var inst_37319 = cljs.core.rest.call(null,inst_37303);
var inst_37303__$1 = inst_37319;
var state_37336__$1 = (function (){var statearr_37350 = state_37336;
(statearr_37350[(9)] = inst_37303__$1);

return statearr_37350;
})();
var statearr_37351_37368 = state_37336__$1;
(statearr_37351_37368[(2)] = null);

(statearr_37351_37368[(1)] = (2));


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
}
}
}
});})(c__24600__auto__,map__37301,map__37301__$1,secured_eval_QMARK_))
;
return ((function (switch__24510__auto__,c__24600__auto__,map__37301,map__37301__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__24511__auto__ = null;
var klipse$utils$state_machine__24511__auto____0 = (function (){
var statearr_37352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37352[(0)] = klipse$utils$state_machine__24511__auto__);

(statearr_37352[(1)] = (1));

return statearr_37352;
});
var klipse$utils$state_machine__24511__auto____1 = (function (state_37336){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37353){if((e37353 instanceof Object)){
var ex__24514__auto__ = e37353;
var statearr_37354_37369 = state_37336;
(statearr_37354_37369[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37370 = state_37336;
state_37336 = G__37370;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$utils$state_machine__24511__auto__ = function(state_37336){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__24511__auto____0.call(this);
case 1:
return klipse$utils$state_machine__24511__auto____1.call(this,state_37336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__24511__auto____0;
klipse$utils$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__24511__auto____1;
return klipse$utils$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,map__37301,map__37301__$1,secured_eval_QMARK_))
})();
var state__24602__auto__ = (function (){var statearr_37355 = f__24601__auto__.call(null);
(statearr_37355[(6)] = c__24600__auto__);

return statearr_37355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,map__37301,map__37301__$1,secured_eval_QMARK_))
);

return c__24600__auto__;
});

klipse.utils.load_scripts.cljs$lang$maxFixedArity = (1);

klipse.utils.load_scripts.cljs$lang$applyTo = (function (seq37298){
var G__37299 = cljs.core.first.call(null,seq37298);
var seq37298__$1 = cljs.core.next.call(null,seq37298);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic(G__37299,seq37298__$1);
});

klipse.utils.load_scripts_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_scripts);
klipse.utils.verbose_QMARK_ = (function klipse$utils$verbose_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "false";
}
})()));
});
klipse.utils.klipse_settings_STAR_ = (function klipse$utils$klipse_settings_STAR_(){
return cljs.core.js__GT_clj.call(null,(window["klipse_settings"]),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
klipse.utils.klipse_settings = cljs.core.memoize.call(null,klipse.utils.klipse_settings_STAR_);
klipse.utils.add_script_tag_BANG_ = (function klipse$utils$add_script_tag_BANG_(url){
var c = cljs.core.async.chan.call(null);
var node = document.createElement("script");
var body = (document["body"]);
(node["src"] = url);

(node["onerror"] = ((function (node,body,c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),url], null));
});})(node,body,c))
);

(node["onload"] = ((function (node,body,c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),url], null));
});})(node,body,c))
);

(node["type"] = "text/javascript");

var obj_SHARP__37371 = body;
var fn_SHARP__37372 = (obj_SHARP__37371["appendChild"]);
fn_SHARP__37372.call(obj_SHARP__37371,node);

return c;
});
klipse.utils.add_script_tag_once_BANG_ = klipse.utils.runonce.call(null,klipse.utils.add_script_tag_BANG_);

//# sourceMappingURL=utils.js.map
