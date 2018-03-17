// Compiled by ClojureScript 1.10.145 {}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj_SHARP_ = Babel;
var fn_SHARP_ = (obj_SHARP_["transform"]);
return fn_SHARP_.call(obj_SHARP_,src,({"presets": ["react"]}));
})()["code"]);
});
klipse.lang.jsx.eval_jsx = (function klipse$lang$jsx$eval_jsx(exp,p__15361){
var map__15362 = p__15361;
var map__15362__$1 = ((((!((map__15362 == null)))?(((((map__15362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15362):map__15362);
var container_id = cljs.core.get.call(null,map__15362__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__,map__15362,map__15362__$1,container_id){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__,map__15362,map__15362__$1,container_id){
return (function (state_15376){
var state_val_15377 = (state_15376[(1)]);
if((state_val_15377 === (1))){
var state_15376__$1 = state_15376;
var statearr_15378_15386 = state_15376__$1;
(statearr_15378_15386[(2)] = null);

(statearr_15378_15386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15377 === (2))){
var inst_15374 = (state_15376[(2)]);
var state_15376__$1 = state_15376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15376__$1,inst_15374);
} else {
if((state_val_15377 === (3))){
var inst_15364 = (state_15376[(2)]);
var inst_15365 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15364)].join('');
var state_15376__$1 = state_15376;
var statearr_15379_15387 = state_15376__$1;
(statearr_15379_15387[(2)] = inst_15365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15377 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15376,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_15369 = document.getElementById(container_id);
var inst_15370 = (window["klipse_container"] = inst_15369);
var inst_15371 = klipse.lang.jsx.babel.call(null,exp);
var inst_15372 = klipse.utils.eval_in_global_scope.call(null,inst_15371);
var state_15376__$1 = (function (){var statearr_15380 = state_15376;
(statearr_15380[(7)] = inst_15372);

(statearr_15380[(8)] = inst_15370);

return statearr_15380;
})();
var statearr_15381_15388 = state_15376__$1;
(statearr_15381_15388[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__13848__auto__,map__15362,map__15362__$1,container_id))
;
return ((function (switch__13825__auto__,c__13848__auto__,map__15362,map__15362__$1,container_id){
return (function() {
var klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto__ = null;
var klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto____0 = (function (){
var statearr_15382 = [null,null,null,null,null,null,null,null,null];
(statearr_15382[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto__);

(statearr_15382[(1)] = (1));

return statearr_15382;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto____1 = (function (state_15376){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15383){if((e15383 instanceof Object)){
var ex__13829__auto__ = e15383;
var statearr_15384_15389 = state_15376;
(statearr_15384_15389[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15390 = state_15376;
state_15376 = G__15390;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto__ = function(state_15376){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto____1.call(this,state_15376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__,map__15362,map__15362__$1,container_id))
})();
var state__13850__auto__ = (function (){var statearr_15385 = f__13849__auto__.call(null);
(statearr_15385[(6)] = c__13848__auto__);

return statearr_15385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__,map__15362,map__15362__$1,container_id))
);

return c__13848__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__15391){
var map__15392 = p__15391;
var map__15392__$1 = ((((!((map__15392 == null)))?(((((map__15392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15392):map__15392);
var container_id = cljs.core.get.call(null,map__15392__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e15394){var e = e15394;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15397){
var state_val_15398 = (state_15397[(1)]);
if((state_val_15398 === (1))){
var inst_15395 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_15397__$1 = state_15397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15397__$1,inst_15395);
} else {
return null;
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__13826__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__13826__auto____0 = (function (){
var statearr_15399 = [null,null,null,null,null,null,null];
(statearr_15399[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__13826__auto__);

(statearr_15399[(1)] = (1));

return statearr_15399;
});
var klipse$lang$jsx$render_jsx_$_state_machine__13826__auto____1 = (function (state_15397){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15400){if((e15400 instanceof Object)){
var ex__13829__auto__ = e15400;
var statearr_15401_15403 = state_15397;
(statearr_15401_15403[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15404 = state_15397;
state_15397 = G__15404;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__13826__auto__ = function(state_15397){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__13826__auto____1.call(this,state_15397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$render_jsx_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__13826__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__13826__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15402 = f__13849__auto__.call(null);
(statearr_15402[(6)] = c__13848__auto__);

return statearr_15402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__15405){
var map__15406 = p__15405;
var map__15406__$1 = ((((!((map__15406 == null)))?(((((map__15406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15406):map__15406);
var container_id = cljs.core.get.call(null,map__15406__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e15408){var e = e15408;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15411){
var state_val_15412 = (state_15411[(1)]);
if((state_val_15412 === (1))){
var inst_15409 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_15411__$1 = state_15411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15411__$1,inst_15409);
} else {
return null;
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__13826__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__13826__auto____0 = (function (){
var statearr_15413 = [null,null,null,null,null,null,null];
(statearr_15413[(0)] = klipse$lang$jsx$render_react_$_state_machine__13826__auto__);

(statearr_15413[(1)] = (1));

return statearr_15413;
});
var klipse$lang$jsx$render_react_$_state_machine__13826__auto____1 = (function (state_15411){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15414){if((e15414 instanceof Object)){
var ex__13829__auto__ = e15414;
var statearr_15415_15417 = state_15411;
(statearr_15415_15417[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15418 = state_15411;
state_15411 = G__15418;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__13826__auto__ = function(state_15411){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__13826__auto____1.call(this,state_15411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$render_react_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__13826__auto____0;
klipse$lang$jsx$render_react_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__13826__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15416 = f__13849__auto__.call(null);
(statearr_15416[(6)] = c__13848__auto__);

return statearr_15416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_15428){
var state_val_15429 = (state_15428[(1)]);
if((state_val_15429 === (1))){
var state_15428__$1 = state_15428;
var statearr_15430_15437 = state_15428__$1;
(statearr_15430_15437[(2)] = null);

(statearr_15430_15437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (2))){
var inst_15426 = (state_15428[(2)]);
var state_15428__$1 = state_15428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15428__$1,inst_15426);
} else {
if((state_val_15429 === (3))){
var inst_15419 = (state_15428[(2)]);
var inst_15420 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15419)].join('');
var state_15428__$1 = state_15428;
var statearr_15431_15438 = state_15428__$1;
(statearr_15431_15438[(2)] = inst_15420);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15428__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15428,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_15424 = klipse.lang.jsx.babel.call(null,exp);
var state_15428__$1 = state_15428;
var statearr_15432_15439 = state_15428__$1;
(statearr_15432_15439[(2)] = inst_15424);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15428__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto__ = null;
var klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto____0 = (function (){
var statearr_15433 = [null,null,null,null,null,null,null];
(statearr_15433[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto__);

(statearr_15433[(1)] = (1));

return statearr_15433;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto____1 = (function (state_15428){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_15428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e15434){if((e15434 instanceof Object)){
var ex__13829__auto__ = e15434;
var statearr_15435_15440 = state_15428;
(statearr_15435_15440[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15441 = state_15428;
state_15428 = G__15441;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto__ = function(state_15428){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto____1.call(this,state_15428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_15436 = f__13849__auto__.call(null);
(statearr_15436[(6)] = c__13848__auto__);

return statearr_15436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.lang.jsx.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.eval_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.transpile_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_jsx,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_react_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_react,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-jsx","selector_jsx",klipse.lang.jsx.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-jsx","selector_transpile_jsx",klipse.lang.jsx.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-jsx","selector_render_jsx",klipse.lang.jsx.render_opts);
klipse.common.registry.register_mode.call(null,"render-react","selector_react",klipse.lang.jsx.render_react_opts);

//# sourceMappingURL=jsx.js.map
