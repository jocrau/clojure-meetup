// Compiled by ClojureScript 1.10.145 {}
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
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,counter){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,counter){
return (function (state_13964){
var state_val_13965 = (state_13964[(1)]);
if((state_val_13965 === (1))){
var inst_13951 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_13952 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_13964__$1 = (function (){var statearr_13966 = state_13964;
(statearr_13966[(7)] = inst_13951);

return statearr_13966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13964__$1,(2),inst_13952);
} else {
if((state_val_13965 === (2))){
var inst_13954 = (state_13964[(2)]);
var inst_13955 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_13956 = cljs.core.deref.call(null,counter);
var inst_13957 = (inst_13956 === (0));
var state_13964__$1 = (function (){var statearr_13967 = state_13964;
(statearr_13967[(8)] = inst_13955);

(statearr_13967[(9)] = inst_13954);

return statearr_13967;
})();
if(cljs.core.truth_(inst_13957)){
var statearr_13968_13991 = state_13964__$1;
(statearr_13968_13991[(1)] = (3));

} else {
var statearr_13969_13992 = state_13964__$1;
(statearr_13969_13992[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (3))){
var inst_13959 = func.call(null);
var state_13964__$1 = state_13964;
var statearr_13970_13993 = state_13964__$1;
(statearr_13970_13993[(2)] = inst_13959);

(statearr_13970_13993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (4))){
var state_13964__$1 = state_13964;
var statearr_13971_13994 = state_13964__$1;
(statearr_13971_13994[(2)] = null);

(statearr_13971_13994[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (5))){
var inst_13962 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13964__$1,inst_13962);
} else {
return null;
}
}
}
}
}
});})(c__13848__auto__,counter))
;
return ((function (switch__13825__auto__,c__13848__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__13826__auto__ = null;
var klipse$utils$debounce_$_state_machine__13826__auto____0 = (function (){
var statearr_13972 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13972[(0)] = klipse$utils$debounce_$_state_machine__13826__auto__);

(statearr_13972[(1)] = (1));

return statearr_13972;
});
var klipse$utils$debounce_$_state_machine__13826__auto____1 = (function (state_13964){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_13964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e13973){if((e13973 instanceof Object)){
var ex__13829__auto__ = e13973;
var statearr_13974_13995 = state_13964;
(statearr_13974_13995[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13996 = state_13964;
state_13964 = G__13996;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__13826__auto__ = function(state_13964){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__13826__auto____1.call(this,state_13964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$debounce_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__13826__auto____0;
klipse$utils$debounce_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__13826__auto____1;
return klipse$utils$debounce_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,counter))
})();
var state__13850__auto__ = (function (){var statearr_13975 = f__13849__auto__.call(null);
(statearr_13975[(6)] = c__13848__auto__);

return statearr_13975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,counter))
);

return c__13848__auto__;
});})(counter))
,((function (counter){
return (function (){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,counter){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,counter){
return (function (state_13983){
var state_val_13984 = (state_13983[(1)]);
if((state_val_13984 === (1))){
var inst_13976 = func.call(null);
var inst_13977 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_13978 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_13983__$1 = (function (){var statearr_13985 = state_13983;
(statearr_13985[(7)] = inst_13977);

(statearr_13985[(8)] = inst_13976);

return statearr_13985;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13983__$1,(2),inst_13978);
} else {
if((state_val_13984 === (2))){
var inst_13980 = (state_13983[(2)]);
var inst_13981 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var state_13983__$1 = (function (){var statearr_13986 = state_13983;
(statearr_13986[(9)] = inst_13980);

return statearr_13986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13983__$1,inst_13981);
} else {
return null;
}
}
});})(c__13848__auto__,counter))
;
return ((function (switch__13825__auto__,c__13848__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__13826__auto__ = null;
var klipse$utils$debounce_$_state_machine__13826__auto____0 = (function (){
var statearr_13987 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13987[(0)] = klipse$utils$debounce_$_state_machine__13826__auto__);

(statearr_13987[(1)] = (1));

return statearr_13987;
});
var klipse$utils$debounce_$_state_machine__13826__auto____1 = (function (state_13983){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_13983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e13988){if((e13988 instanceof Object)){
var ex__13829__auto__ = e13988;
var statearr_13989_13997 = state_13983;
(statearr_13989_13997[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13998 = state_13983;
state_13983 = G__13998;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__13826__auto__ = function(state_13983){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__13826__auto____1.call(this,state_13983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$debounce_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__13826__auto____0;
klipse$utils$debounce_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__13826__auto____1;
return klipse$utils$debounce_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,counter))
})();
var state__13850__auto__ = (function (){var statearr_13990 = f__13849__auto__.call(null);
(statearr_13990[(6)] = c__13848__auto__);

return statearr_13990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,counter))
);

return c__13848__auto__;
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
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_14042){
var state_val_14043 = (state_14042[(1)]);
if((state_val_14043 === (7))){
var state_14042__$1 = state_14042;
var statearr_14044_14071 = state_14042__$1;
(statearr_14044_14071[(2)] = false);

(statearr_14044_14071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (1))){
var state_14042__$1 = state_14042;
if(cljs.core.truth_(gist_id)){
var statearr_14045_14072 = state_14042__$1;
(statearr_14045_14072[(1)] = (2));

} else {
var statearr_14046_14073 = state_14042__$1;
(statearr_14046_14073[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (4))){
var inst_14040 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14042__$1,inst_14040);
} else {
if((state_val_14043 === (15))){
var inst_14001 = (state_14042[(7)]);
var inst_14029 = (state_14042[(8)]);
var inst_14034 = ["\"","Wrong gist path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14001),"\n","gist-id= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"\n","http status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14029),"\""].join('');
var state_14042__$1 = state_14042;
var statearr_14047_14074 = state_14042__$1;
(statearr_14047_14074[(2)] = inst_14034);

(statearr_14047_14074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (13))){
var inst_14007 = (state_14042[(9)]);
var state_14042__$1 = state_14042;
var statearr_14048_14075 = state_14042__$1;
(statearr_14048_14075[(2)] = inst_14007);

(statearr_14048_14075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (6))){
var inst_14007 = (state_14042[(9)]);
var inst_14012 = inst_14007.cljs$lang$protocol_mask$partition0$;
var inst_14013 = (inst_14012 & (64));
var inst_14014 = inst_14007.cljs$core$ISeq$;
var inst_14015 = (cljs.core.PROTOCOL_SENTINEL === inst_14014);
var inst_14016 = ((inst_14013) || (inst_14015));
var state_14042__$1 = state_14042;
if(cljs.core.truth_(inst_14016)){
var statearr_14049_14076 = state_14042__$1;
(statearr_14049_14076[(1)] = (9));

} else {
var statearr_14050_14077 = state_14042__$1;
(statearr_14050_14077[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (17))){
var inst_14037 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
var statearr_14051_14078 = state_14042__$1;
(statearr_14051_14078[(2)] = inst_14037);

(statearr_14051_14078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (3))){
var state_14042__$1 = state_14042;
var statearr_14052_14079 = state_14042__$1;
(statearr_14052_14079[(2)] = null);

(statearr_14052_14079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (12))){
var inst_14007 = (state_14042[(9)]);
var inst_14025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14007);
var state_14042__$1 = state_14042;
var statearr_14053_14080 = state_14042__$1;
(statearr_14053_14080[(2)] = inst_14025);

(statearr_14053_14080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (2))){
var inst_14001 = (state_14042[(7)]);
var inst_14001__$1 = klipse.utils.gist_path_raw.call(null,gist_id);
var inst_14002 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_14003 = [false];
var inst_14004 = cljs.core.PersistentHashMap.fromArrays(inst_14002,inst_14003);
var inst_14005 = cljs_http.client.get.call(null,inst_14001__$1,inst_14004);
var state_14042__$1 = (function (){var statearr_14054 = state_14042;
(statearr_14054[(7)] = inst_14001__$1);

return statearr_14054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14042__$1,(5),inst_14005);
} else {
if((state_val_14043 === (11))){
var inst_14020 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
var statearr_14055_14081 = state_14042__$1;
(statearr_14055_14081[(2)] = inst_14020);

(statearr_14055_14081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (9))){
var state_14042__$1 = state_14042;
var statearr_14056_14082 = state_14042__$1;
(statearr_14056_14082[(2)] = true);

(statearr_14056_14082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (5))){
var inst_14007 = (state_14042[(9)]);
var inst_14007__$1 = (state_14042[(2)]);
var inst_14009 = (inst_14007__$1 == null);
var inst_14010 = cljs.core.not.call(null,inst_14009);
var state_14042__$1 = (function (){var statearr_14057 = state_14042;
(statearr_14057[(9)] = inst_14007__$1);

return statearr_14057;
})();
if(inst_14010){
var statearr_14058_14083 = state_14042__$1;
(statearr_14058_14083[(1)] = (6));

} else {
var statearr_14059_14084 = state_14042__$1;
(statearr_14059_14084[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (14))){
var inst_14029 = (state_14042[(8)]);
var inst_14028 = (state_14042[(2)]);
var inst_14029__$1 = cljs.core.get.call(null,inst_14028,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_14030 = cljs.core.get.call(null,inst_14028,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_14031 = cljs.core._EQ_.call(null,inst_14029__$1,(200));
var inst_14032 = !(inst_14031);
var state_14042__$1 = (function (){var statearr_14060 = state_14042;
(statearr_14060[(10)] = inst_14030);

(statearr_14060[(8)] = inst_14029__$1);

return statearr_14060;
})();
if(inst_14032){
var statearr_14061_14085 = state_14042__$1;
(statearr_14061_14085[(1)] = (15));

} else {
var statearr_14062_14086 = state_14042__$1;
(statearr_14062_14086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (16))){
var inst_14030 = (state_14042[(10)]);
var state_14042__$1 = state_14042;
var statearr_14063_14087 = state_14042__$1;
(statearr_14063_14087[(2)] = inst_14030);

(statearr_14063_14087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (10))){
var state_14042__$1 = state_14042;
var statearr_14064_14088 = state_14042__$1;
(statearr_14064_14088[(2)] = false);

(statearr_14064_14088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (8))){
var inst_14023 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
if(cljs.core.truth_(inst_14023)){
var statearr_14065_14089 = state_14042__$1;
(statearr_14065_14089[(1)] = (12));

} else {
var statearr_14066_14090 = state_14042__$1;
(statearr_14066_14090[(1)] = (13));

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
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$utils$read_input_from_gist_$_state_machine__13826__auto__ = null;
var klipse$utils$read_input_from_gist_$_state_machine__13826__auto____0 = (function (){
var statearr_14067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14067[(0)] = klipse$utils$read_input_from_gist_$_state_machine__13826__auto__);

(statearr_14067[(1)] = (1));

return statearr_14067;
});
var klipse$utils$read_input_from_gist_$_state_machine__13826__auto____1 = (function (state_14042){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_14042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e14068){if((e14068 instanceof Object)){
var ex__13829__auto__ = e14068;
var statearr_14069_14091 = state_14042;
(statearr_14069_14091[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14092 = state_14042;
state_14042 = G__14092;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$utils$read_input_from_gist_$_state_machine__13826__auto__ = function(state_14042){
switch(arguments.length){
case 0:
return klipse$utils$read_input_from_gist_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$utils$read_input_from_gist_$_state_machine__13826__auto____1.call(this,state_14042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$read_input_from_gist_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$read_input_from_gist_$_state_machine__13826__auto____0;
klipse$utils$read_input_from_gist_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$read_input_from_gist_$_state_machine__13826__auto____1;
return klipse$utils$read_input_from_gist_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_14070 = f__13849__auto__.call(null);
(statearr_14070[(6)] = c__13848__auto__);

return statearr_14070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.utils.runonce = (function klipse$utils$runonce(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__14093__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__14093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14094__i = 0, G__14094__a = new Array(arguments.length -  0);
while (G__14094__i < G__14094__a.length) {G__14094__a[G__14094__i] = arguments[G__14094__i + 0]; ++G__14094__i;}
  args = new cljs.core.IndexedSeq(G__14094__a,0,null);
} 
return G__14093__delegate.call(this,args);};
G__14093.cljs$lang$maxFixedArity = 0;
G__14093.cljs$lang$applyTo = (function (arglist__14095){
var args = cljs.core.seq(arglist__14095);
return G__14093__delegate(args);
});
G__14093.cljs$core$IFn$_invoke$arity$variadic = G__14093__delegate;
return G__14093;
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
var G__14132__delegate = function (args){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,ran){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,ran){
return (function (state_14116){
var state_val_14117 = (state_14116[(1)]);
if((state_val_14117 === (1))){
var inst_14096 = cljs.core.deref.call(null,ran);
var inst_14097 = cljs.core.not.call(null,inst_14096);
var state_14116__$1 = state_14116;
if(inst_14097){
var statearr_14118_14133 = state_14116__$1;
(statearr_14118_14133[(1)] = (2));

} else {
var statearr_14119_14134 = state_14116__$1;
(statearr_14119_14134[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14117 === (2))){
var inst_14099 = cljs.core.apply.call(null,f,args);
var state_14116__$1 = state_14116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14116__$1,(5),inst_14099);
} else {
if((state_val_14117 === (3))){
var inst_14110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14111 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_14112 = (new cljs.core.PersistentVector(null,1,(5),inst_14110,inst_14111,null));
var state_14116__$1 = state_14116;
var statearr_14120_14135 = state_14116__$1;
(statearr_14120_14135[(2)] = inst_14112);

(statearr_14120_14135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14117 === (4))){
var inst_14114 = (state_14116[(2)]);
var state_14116__$1 = state_14116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14116__$1,inst_14114);
} else {
if((state_val_14117 === (5))){
var inst_14101 = (state_14116[(7)]);
var inst_14101__$1 = (state_14116[(2)]);
var inst_14102 = cljs.core.first.call(null,inst_14101__$1);
var inst_14103 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_14102);
var state_14116__$1 = (function (){var statearr_14121 = state_14116;
(statearr_14121[(7)] = inst_14101__$1);

return statearr_14121;
})();
if(inst_14103){
var statearr_14122_14136 = state_14116__$1;
(statearr_14122_14136[(1)] = (6));

} else {
var statearr_14123_14137 = state_14116__$1;
(statearr_14123_14137[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14117 === (6))){
var inst_14105 = cljs.core.reset_BANG_.call(null,ran,true);
var state_14116__$1 = state_14116;
var statearr_14124_14138 = state_14116__$1;
(statearr_14124_14138[(2)] = inst_14105);

(statearr_14124_14138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14117 === (7))){
var state_14116__$1 = state_14116;
var statearr_14125_14139 = state_14116__$1;
(statearr_14125_14139[(2)] = null);

(statearr_14125_14139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14117 === (8))){
var inst_14101 = (state_14116[(7)]);
var inst_14108 = (state_14116[(2)]);
var state_14116__$1 = (function (){var statearr_14126 = state_14116;
(statearr_14126[(8)] = inst_14108);

return statearr_14126;
})();
var statearr_14127_14140 = state_14116__$1;
(statearr_14127_14140[(2)] = inst_14101);

(statearr_14127_14140[(1)] = (4));


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
});})(c__13848__auto__,ran))
;
return ((function (switch__13825__auto__,c__13848__auto__,ran){
return (function() {
var klipse$utils$runonce_async_$_state_machine__13826__auto__ = null;
var klipse$utils$runonce_async_$_state_machine__13826__auto____0 = (function (){
var statearr_14128 = [null,null,null,null,null,null,null,null,null];
(statearr_14128[(0)] = klipse$utils$runonce_async_$_state_machine__13826__auto__);

(statearr_14128[(1)] = (1));

return statearr_14128;
});
var klipse$utils$runonce_async_$_state_machine__13826__auto____1 = (function (state_14116){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_14116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e14129){if((e14129 instanceof Object)){
var ex__13829__auto__ = e14129;
var statearr_14130_14141 = state_14116;
(statearr_14130_14141[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14142 = state_14116;
state_14116 = G__14142;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$utils$runonce_async_$_state_machine__13826__auto__ = function(state_14116){
switch(arguments.length){
case 0:
return klipse$utils$runonce_async_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$utils$runonce_async_$_state_machine__13826__auto____1.call(this,state_14116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$runonce_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$runonce_async_$_state_machine__13826__auto____0;
klipse$utils$runonce_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$runonce_async_$_state_machine__13826__auto____1;
return klipse$utils$runonce_async_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,ran))
})();
var state__13850__auto__ = (function (){var statearr_14131 = f__13849__auto__.call(null);
(statearr_14131[(6)] = c__13848__auto__);

return statearr_14131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,ran))
);

return c__13848__auto__;
};
var G__14132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14143__i = 0, G__14143__a = new Array(arguments.length -  0);
while (G__14143__i < G__14143__a.length) {G__14143__a[G__14143__i] = arguments[G__14143__i + 0]; ++G__14143__i;}
  args = new cljs.core.IndexedSeq(G__14143__a,0,null);
} 
return G__14132__delegate.call(this,args);};
G__14132.cljs$lang$maxFixedArity = 0;
G__14132.cljs$lang$applyTo = (function (arglist__14144){
var args = cljs.core.seq(arglist__14144);
return G__14132__delegate(args);
});
G__14132.cljs$core$IFn$_invoke$arity$variadic = G__14132__delegate;
return G__14132;
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
var G__14181__delegate = function (args){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,ran){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,ran){
return (function (state_14165){
var state_val_14166 = (state_14165[(1)]);
if((state_val_14166 === (1))){
var inst_14145 = cljs.core.deref.call(null,ran);
var inst_14146 = cljs.core.contains_QMARK_.call(null,inst_14145,args);
var inst_14147 = !(inst_14146);
var state_14165__$1 = state_14165;
if(inst_14147){
var statearr_14167_14182 = state_14165__$1;
(statearr_14167_14182[(1)] = (2));

} else {
var statearr_14168_14183 = state_14165__$1;
(statearr_14168_14183[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (2))){
var inst_14149 = cljs.core.apply.call(null,f,args);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14165__$1,(5),inst_14149);
} else {
if((state_val_14166 === (3))){
var inst_14160 = cljs.core.deref.call(null,ran);
var inst_14161 = cljs.core.get.call(null,inst_14160,args);
var state_14165__$1 = state_14165;
var statearr_14169_14184 = state_14165__$1;
(statearr_14169_14184[(2)] = inst_14161);

(statearr_14169_14184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (4))){
var inst_14163 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14165__$1,inst_14163);
} else {
if((state_val_14166 === (5))){
var inst_14151 = (state_14165[(7)]);
var inst_14151__$1 = (state_14165[(2)]);
var inst_14152 = cljs.core.first.call(null,inst_14151__$1);
var inst_14153 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_14152);
var state_14165__$1 = (function (){var statearr_14170 = state_14165;
(statearr_14170[(7)] = inst_14151__$1);

return statearr_14170;
})();
if(inst_14153){
var statearr_14171_14185 = state_14165__$1;
(statearr_14171_14185[(1)] = (6));

} else {
var statearr_14172_14186 = state_14165__$1;
(statearr_14172_14186[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (6))){
var inst_14151 = (state_14165[(7)]);
var inst_14155 = cljs.core.swap_BANG_.call(null,ran,cljs.core.assoc,args,inst_14151);
var state_14165__$1 = state_14165;
var statearr_14173_14187 = state_14165__$1;
(statearr_14173_14187[(2)] = inst_14155);

(statearr_14173_14187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (7))){
var state_14165__$1 = state_14165;
var statearr_14174_14188 = state_14165__$1;
(statearr_14174_14188[(2)] = null);

(statearr_14174_14188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (8))){
var inst_14151 = (state_14165[(7)]);
var inst_14158 = (state_14165[(2)]);
var state_14165__$1 = (function (){var statearr_14175 = state_14165;
(statearr_14175[(8)] = inst_14158);

return statearr_14175;
})();
var statearr_14176_14189 = state_14165__$1;
(statearr_14176_14189[(2)] = inst_14151);

(statearr_14176_14189[(1)] = (4));


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
});})(c__13848__auto__,ran))
;
return ((function (switch__13825__auto__,c__13848__auto__,ran){
return (function() {
var klipse$utils$memoize_async_$_state_machine__13826__auto__ = null;
var klipse$utils$memoize_async_$_state_machine__13826__auto____0 = (function (){
var statearr_14177 = [null,null,null,null,null,null,null,null,null];
(statearr_14177[(0)] = klipse$utils$memoize_async_$_state_machine__13826__auto__);

(statearr_14177[(1)] = (1));

return statearr_14177;
});
var klipse$utils$memoize_async_$_state_machine__13826__auto____1 = (function (state_14165){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_14165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e14178){if((e14178 instanceof Object)){
var ex__13829__auto__ = e14178;
var statearr_14179_14190 = state_14165;
(statearr_14179_14190[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14191 = state_14165;
state_14165 = G__14191;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$utils$memoize_async_$_state_machine__13826__auto__ = function(state_14165){
switch(arguments.length){
case 0:
return klipse$utils$memoize_async_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$utils$memoize_async_$_state_machine__13826__auto____1.call(this,state_14165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$memoize_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$memoize_async_$_state_machine__13826__auto____0;
klipse$utils$memoize_async_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$memoize_async_$_state_machine__13826__auto____1;
return klipse$utils$memoize_async_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,ran))
})();
var state__13850__auto__ = (function (){var statearr_14180 = f__13849__auto__.call(null);
(statearr_14180[(6)] = c__13848__auto__);

return statearr_14180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,ran))
);

return c__13848__auto__;
};
var G__14181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14192__i = 0, G__14192__a = new Array(arguments.length -  0);
while (G__14192__i < G__14192__a.length) {G__14192__a[G__14192__i] = arguments[G__14192__i + 0]; ++G__14192__i;}
  args = new cljs.core.IndexedSeq(G__14192__a,0,null);
} 
return G__14181__delegate.call(this,args);};
G__14181.cljs$lang$maxFixedArity = 0;
G__14181.cljs$lang$applyTo = (function (arglist__14193){
var args = cljs.core.seq(arglist__14193);
return G__14181__delegate(args);
});
G__14181.cljs$core$IFn$_invoke$arity$variadic = G__14181__delegate;
return G__14181;
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
var o_SHARP__14194 = window;
(o_SHARP__14194["eval"] = ((function (o_SHARP__14194,original_eval){
return (function (src){
return original_eval.call(null,["with (klipse_eval_sandbox){ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"}"].join(''));
});})(o_SHARP__14194,original_eval))
);


klipse.utils.eval_in_global_scope = eval;

var o_SHARP__14195 = window;
(o_SHARP__14195["klipse_unsecured_eval"] = original_eval);


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
return (function (){var or__3922__auto__ = (window["klipse_unsecured_eval"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return eval;
}
})().call(null,s);
});
klipse.utils.load_script = (function klipse$utils$load_script(var_args){
var args__4500__auto__ = [];
var len__4497__auto___14283 = arguments.length;
var i__4498__auto___14284 = (0);
while(true){
if((i__4498__auto___14284 < len__4497__auto___14283)){
args__4500__auto__.push((arguments[i__4498__auto___14284]));

var G__14285 = (i__4498__auto___14284 + (1));
i__4498__auto___14284 = G__14285;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic = (function (script,p__14198){
var map__14199 = p__14198;
var map__14199__$1 = ((((!((map__14199 == null)))?(((((map__14199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14199):map__14199);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__14199__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,map__14199,map__14199__$1,secured_eval_QMARK_){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,map__14199,map__14199__$1,secured_eval_QMARK_){
return (function (state_14252){
var state_val_14253 = (state_14252[(1)]);
if((state_val_14253 === (7))){
var state_14252__$1 = state_14252;
var statearr_14254_14286 = state_14252__$1;
(statearr_14254_14286[(2)] = false);

(statearr_14254_14286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (1))){
var inst_14201 = console.info("loading:",script);
var inst_14203 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_14204 = [false];
var inst_14205 = cljs.core.PersistentHashMap.fromArrays(inst_14203,inst_14204);
var inst_14206 = cljs_http.client.get.call(null,script,inst_14205);
var state_14252__$1 = (function (){var statearr_14255 = state_14252;
(statearr_14255[(7)] = inst_14201);

return statearr_14255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14252__$1,(2),inst_14206);
} else {
if((state_val_14253 === (4))){
var state_14252__$1 = state_14252;
var statearr_14256_14287 = state_14252__$1;
(statearr_14256_14287[(2)] = false);

(statearr_14256_14287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (15))){
var inst_14231 = (state_14252[(8)]);
var inst_14236 = klipse.utils.eval_in_global_scope.call(null,inst_14231);
var state_14252__$1 = state_14252;
var statearr_14257_14288 = state_14252__$1;
(statearr_14257_14288[(2)] = inst_14236);

(statearr_14257_14288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (13))){
var inst_14230 = (state_14252[(9)]);
var inst_14246 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14247 = [inst_14230,script];
var inst_14248 = (new cljs.core.PersistentVector(null,2,(5),inst_14246,inst_14247,null));
var state_14252__$1 = state_14252;
var statearr_14258_14289 = state_14252__$1;
(statearr_14258_14289[(2)] = inst_14248);

(statearr_14258_14289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (6))){
var state_14252__$1 = state_14252;
var statearr_14259_14290 = state_14252__$1;
(statearr_14259_14290[(2)] = true);

(statearr_14259_14290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (17))){
var inst_14240 = (state_14252[(2)]);
var inst_14241 = console.info("evaluation done:",script);
var inst_14242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14243 = [new cljs.core.Keyword(null,"ok","ok",967785236),script];
var inst_14244 = (new cljs.core.PersistentVector(null,2,(5),inst_14242,inst_14243,null));
var state_14252__$1 = (function (){var statearr_14260 = state_14252;
(statearr_14260[(10)] = inst_14241);

(statearr_14260[(11)] = inst_14240);

return statearr_14260;
})();
var statearr_14261_14291 = state_14252__$1;
(statearr_14261_14291[(2)] = inst_14244);

(statearr_14261_14291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (3))){
var inst_14208 = (state_14252[(12)]);
var inst_14213 = inst_14208.cljs$lang$protocol_mask$partition0$;
var inst_14214 = (inst_14213 & (64));
var inst_14215 = inst_14208.cljs$core$ISeq$;
var inst_14216 = (cljs.core.PROTOCOL_SENTINEL === inst_14215);
var inst_14217 = ((inst_14214) || (inst_14216));
var state_14252__$1 = state_14252;
if(cljs.core.truth_(inst_14217)){
var statearr_14262_14292 = state_14252__$1;
(statearr_14262_14292[(1)] = (6));

} else {
var statearr_14263_14293 = state_14252__$1;
(statearr_14263_14293[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (12))){
var inst_14234 = console.info("evaluating:",script);
var state_14252__$1 = (function (){var statearr_14264 = state_14252;
(statearr_14264[(13)] = inst_14234);

return statearr_14264;
})();
if(cljs.core.truth_(secured_eval_QMARK_)){
var statearr_14265_14294 = state_14252__$1;
(statearr_14265_14294[(1)] = (15));

} else {
var statearr_14266_14295 = state_14252__$1;
(statearr_14266_14295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (2))){
var inst_14208 = (state_14252[(12)]);
var inst_14208__$1 = (state_14252[(2)]);
var inst_14210 = (inst_14208__$1 == null);
var inst_14211 = cljs.core.not.call(null,inst_14210);
var state_14252__$1 = (function (){var statearr_14267 = state_14252;
(statearr_14267[(12)] = inst_14208__$1);

return statearr_14267;
})();
if(inst_14211){
var statearr_14268_14296 = state_14252__$1;
(statearr_14268_14296[(1)] = (3));

} else {
var statearr_14269_14297 = state_14252__$1;
(statearr_14269_14297[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (11))){
var inst_14230 = (state_14252[(9)]);
var inst_14229 = (state_14252[(2)]);
var inst_14230__$1 = cljs.core.get.call(null,inst_14229,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_14231 = cljs.core.get.call(null,inst_14229,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_14232 = cljs.core._EQ_.call(null,(200),inst_14230__$1);
var state_14252__$1 = (function (){var statearr_14270 = state_14252;
(statearr_14270[(9)] = inst_14230__$1);

(statearr_14270[(8)] = inst_14231);

return statearr_14270;
})();
if(inst_14232){
var statearr_14271_14298 = state_14252__$1;
(statearr_14271_14298[(1)] = (12));

} else {
var statearr_14272_14299 = state_14252__$1;
(statearr_14272_14299[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (9))){
var inst_14208 = (state_14252[(12)]);
var inst_14226 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14208);
var state_14252__$1 = state_14252;
var statearr_14273_14300 = state_14252__$1;
(statearr_14273_14300[(2)] = inst_14226);

(statearr_14273_14300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (5))){
var inst_14224 = (state_14252[(2)]);
var state_14252__$1 = state_14252;
if(cljs.core.truth_(inst_14224)){
var statearr_14274_14301 = state_14252__$1;
(statearr_14274_14301[(1)] = (9));

} else {
var statearr_14275_14302 = state_14252__$1;
(statearr_14275_14302[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (14))){
var inst_14250 = (state_14252[(2)]);
var state_14252__$1 = state_14252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14252__$1,inst_14250);
} else {
if((state_val_14253 === (16))){
var inst_14231 = (state_14252[(8)]);
var inst_14238 = klipse.utils.unsecured_eval_in_global_scope.call(null,inst_14231);
var state_14252__$1 = state_14252;
var statearr_14276_14303 = state_14252__$1;
(statearr_14276_14303[(2)] = inst_14238);

(statearr_14276_14303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (10))){
var inst_14208 = (state_14252[(12)]);
var state_14252__$1 = state_14252;
var statearr_14277_14304 = state_14252__$1;
(statearr_14277_14304[(2)] = inst_14208);

(statearr_14277_14304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14253 === (8))){
var inst_14221 = (state_14252[(2)]);
var state_14252__$1 = state_14252;
var statearr_14278_14305 = state_14252__$1;
(statearr_14278_14305[(2)] = inst_14221);

(statearr_14278_14305[(1)] = (5));


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
});})(c__13848__auto__,map__14199,map__14199__$1,secured_eval_QMARK_))
;
return ((function (switch__13825__auto__,c__13848__auto__,map__14199,map__14199__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__13826__auto__ = null;
var klipse$utils$state_machine__13826__auto____0 = (function (){
var statearr_14279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14279[(0)] = klipse$utils$state_machine__13826__auto__);

(statearr_14279[(1)] = (1));

return statearr_14279;
});
var klipse$utils$state_machine__13826__auto____1 = (function (state_14252){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_14252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e14280){if((e14280 instanceof Object)){
var ex__13829__auto__ = e14280;
var statearr_14281_14306 = state_14252;
(statearr_14281_14306[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14307 = state_14252;
state_14252 = G__14307;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$utils$state_machine__13826__auto__ = function(state_14252){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__13826__auto____0.call(this);
case 1:
return klipse$utils$state_machine__13826__auto____1.call(this,state_14252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__13826__auto____0;
klipse$utils$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__13826__auto____1;
return klipse$utils$state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,map__14199,map__14199__$1,secured_eval_QMARK_))
})();
var state__13850__auto__ = (function (){var statearr_14282 = f__13849__auto__.call(null);
(statearr_14282[(6)] = c__13848__auto__);

return statearr_14282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,map__14199,map__14199__$1,secured_eval_QMARK_))
);

return c__13848__auto__;
});

klipse.utils.load_script.cljs$lang$maxFixedArity = (1);

klipse.utils.load_script.cljs$lang$applyTo = (function (seq14196){
var G__14197 = cljs.core.first.call(null,seq14196);
var seq14196__$1 = cljs.core.next.call(null,seq14196);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic(G__14197,seq14196__$1);
});

klipse.utils.load_script_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_script);
klipse.utils.load_scripts = (function klipse$utils$load_scripts(var_args){
var args__4500__auto__ = [];
var len__4497__auto___14366 = arguments.length;
var i__4498__auto___14367 = (0);
while(true){
if((i__4498__auto___14367 < len__4497__auto___14366)){
args__4500__auto__.push((arguments[i__4498__auto___14367]));

var G__14368 = (i__4498__auto___14367 + (1));
i__4498__auto___14367 = G__14368;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (scripts,p__14310){
var map__14311 = p__14310;
var map__14311__$1 = ((((!((map__14311 == null)))?(((((map__14311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14311):map__14311);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__14311__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,map__14311,map__14311__$1,secured_eval_QMARK_){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,map__14311,map__14311__$1,secured_eval_QMARK_){
return (function (state_14346){
var state_val_14347 = (state_14346[(1)]);
if((state_val_14347 === (7))){
var inst_14325 = (state_14346[(7)]);
var inst_14324 = (state_14346[(2)]);
var inst_14325__$1 = cljs.core.nth.call(null,inst_14324,(0),null);
var inst_14326 = cljs.core.nth.call(null,inst_14324,(1),null);
var inst_14327 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_14325__$1);
var state_14346__$1 = (function (){var statearr_14348 = state_14346;
(statearr_14348[(7)] = inst_14325__$1);

(statearr_14348[(8)] = inst_14326);

return statearr_14348;
})();
if(inst_14327){
var statearr_14349_14369 = state_14346__$1;
(statearr_14349_14369[(1)] = (8));

} else {
var statearr_14350_14370 = state_14346__$1;
(statearr_14350_14370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14347 === (1))){
var inst_14313 = scripts;
var state_14346__$1 = (function (){var statearr_14351 = state_14346;
(statearr_14351[(9)] = inst_14313);

return statearr_14351;
})();
var statearr_14352_14371 = state_14346__$1;
(statearr_14352_14371[(2)] = null);

(statearr_14352_14371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14347 === (4))){
var inst_14313 = (state_14346[(9)]);
var inst_14320 = cljs.core.first.call(null,inst_14313);
var inst_14321 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14320)].join('');
var inst_14322 = klipse.utils.load_script_mem.call(null,inst_14321,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),secured_eval_QMARK_);
var state_14346__$1 = state_14346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14346__$1,(7),inst_14322);
} else {
if((state_val_14347 === (6))){
var inst_14342 = (state_14346[(2)]);
var state_14346__$1 = state_14346;
var statearr_14353_14372 = state_14346__$1;
(statearr_14353_14372[(2)] = inst_14342);

(statearr_14353_14372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14347 === (3))){
var inst_14344 = (state_14346[(2)]);
var state_14346__$1 = state_14346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14346__$1,inst_14344);
} else {
if((state_val_14347 === (2))){
var inst_14313 = (state_14346[(9)]);
var inst_14315 = cljs.core.seq.call(null,inst_14313);
var state_14346__$1 = state_14346;
if(inst_14315){
var statearr_14354_14373 = state_14346__$1;
(statearr_14354_14373[(1)] = (4));

} else {
var statearr_14355_14374 = state_14346__$1;
(statearr_14355_14374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14347 === (9))){
var state_14346__$1 = state_14346;
var statearr_14356_14375 = state_14346__$1;
(statearr_14356_14375[(2)] = null);

(statearr_14356_14375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14347 === (5))){
var inst_14338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14339 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_14340 = (new cljs.core.PersistentVector(null,1,(5),inst_14338,inst_14339,null));
var state_14346__$1 = state_14346;
var statearr_14357_14376 = state_14346__$1;
(statearr_14357_14376[(2)] = inst_14340);

(statearr_14357_14376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14347 === (10))){
var inst_14325 = (state_14346[(7)]);
var inst_14326 = (state_14346[(8)]);
var inst_14333 = (state_14346[(2)]);
var inst_14334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14335 = [inst_14325,inst_14326];
var inst_14336 = (new cljs.core.PersistentVector(null,2,(5),inst_14334,inst_14335,null));
var state_14346__$1 = (function (){var statearr_14358 = state_14346;
(statearr_14358[(10)] = inst_14333);

return statearr_14358;
})();
var statearr_14359_14377 = state_14346__$1;
(statearr_14359_14377[(2)] = inst_14336);

(statearr_14359_14377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14347 === (8))){
var inst_14313 = (state_14346[(9)]);
var inst_14329 = cljs.core.rest.call(null,inst_14313);
var inst_14313__$1 = inst_14329;
var state_14346__$1 = (function (){var statearr_14360 = state_14346;
(statearr_14360[(9)] = inst_14313__$1);

return statearr_14360;
})();
var statearr_14361_14378 = state_14346__$1;
(statearr_14361_14378[(2)] = null);

(statearr_14361_14378[(1)] = (2));


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
});})(c__13848__auto__,map__14311,map__14311__$1,secured_eval_QMARK_))
;
return ((function (switch__13825__auto__,c__13848__auto__,map__14311,map__14311__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__13826__auto__ = null;
var klipse$utils$state_machine__13826__auto____0 = (function (){
var statearr_14362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14362[(0)] = klipse$utils$state_machine__13826__auto__);

(statearr_14362[(1)] = (1));

return statearr_14362;
});
var klipse$utils$state_machine__13826__auto____1 = (function (state_14346){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_14346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e14363){if((e14363 instanceof Object)){
var ex__13829__auto__ = e14363;
var statearr_14364_14379 = state_14346;
(statearr_14364_14379[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14380 = state_14346;
state_14346 = G__14380;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$utils$state_machine__13826__auto__ = function(state_14346){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__13826__auto____0.call(this);
case 1:
return klipse$utils$state_machine__13826__auto____1.call(this,state_14346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__13826__auto____0;
klipse$utils$state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__13826__auto____1;
return klipse$utils$state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,map__14311,map__14311__$1,secured_eval_QMARK_))
})();
var state__13850__auto__ = (function (){var statearr_14365 = f__13849__auto__.call(null);
(statearr_14365[(6)] = c__13848__auto__);

return statearr_14365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,map__14311,map__14311__$1,secured_eval_QMARK_))
);

return c__13848__auto__;
});

klipse.utils.load_scripts.cljs$lang$maxFixedArity = (1);

klipse.utils.load_scripts.cljs$lang$applyTo = (function (seq14308){
var G__14309 = cljs.core.first.call(null,seq14308);
var seq14308__$1 = cljs.core.next.call(null,seq14308);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic(G__14309,seq14308__$1);
});

klipse.utils.load_scripts_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_scripts);
klipse.utils.verbose_QMARK_ = (function klipse$utils$verbose_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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

var obj_SHARP__14381 = body;
var fn_SHARP__14382 = (obj_SHARP__14381["appendChild"]);
fn_SHARP__14382.call(obj_SHARP__14381,node);

return c;
});
klipse.utils.add_script_tag_once_BANG_ = klipse.utils.runonce.call(null,klipse.utils.add_script_tag_BANG_);

//# sourceMappingURL=utils.js.map
