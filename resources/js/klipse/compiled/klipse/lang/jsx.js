// Compiled by ClojureScript 1.9.946 {}
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
klipse.lang.jsx.eval_jsx = (function klipse$lang$jsx$eval_jsx(exp,p__37706){
var map__37707 = p__37706;
var map__37707__$1 = ((((!((map__37707 == null)))?((((map__37707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37707):map__37707);
var container_id = cljs.core.get.call(null,map__37707__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,map__37707,map__37707__$1,container_id){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,map__37707,map__37707__$1,container_id){
return (function (state_37721){
var state_val_37722 = (state_37721[(1)]);
if((state_val_37722 === (1))){
var state_37721__$1 = state_37721;
var statearr_37723_37731 = state_37721__$1;
(statearr_37723_37731[(2)] = null);

(statearr_37723_37731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (2))){
var inst_37719 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37721__$1,inst_37719);
} else {
if((state_val_37722 === (3))){
var inst_37709 = (state_37721[(2)]);
var inst_37710 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37709)].join('');
var state_37721__$1 = state_37721;
var statearr_37724_37732 = state_37721__$1;
(statearr_37724_37732[(2)] = inst_37710);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37721__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37721,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_37714 = document.getElementById(container_id);
var inst_37715 = (window["klipse_container"] = inst_37714);
var inst_37716 = klipse.lang.jsx.babel.call(null,exp);
var inst_37717 = klipse.utils.eval_in_global_scope.call(null,inst_37716);
var state_37721__$1 = (function (){var statearr_37725 = state_37721;
(statearr_37725[(7)] = inst_37717);

(statearr_37725[(8)] = inst_37715);

return statearr_37725;
})();
var statearr_37726_37733 = state_37721__$1;
(statearr_37726_37733[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37721__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24600__auto__,map__37707,map__37707__$1,container_id))
;
return ((function (switch__24510__auto__,c__24600__auto__,map__37707,map__37707__$1,container_id){
return (function() {
var klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto__ = null;
var klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto____0 = (function (){
var statearr_37727 = [null,null,null,null,null,null,null,null,null];
(statearr_37727[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto__);

(statearr_37727[(1)] = (1));

return statearr_37727;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto____1 = (function (state_37721){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37728){if((e37728 instanceof Object)){
var ex__24514__auto__ = e37728;
var statearr_37729_37734 = state_37721;
(statearr_37729_37734[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37735 = state_37721;
state_37721 = G__37735;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto__ = function(state_37721){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto____1.call(this,state_37721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,map__37707,map__37707__$1,container_id))
})();
var state__24602__auto__ = (function (){var statearr_37730 = f__24601__auto__.call(null);
(statearr_37730[(6)] = c__24600__auto__);

return statearr_37730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,map__37707,map__37707__$1,container_id))
);

return c__24600__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__37736){
var map__37737 = p__37736;
var map__37737__$1 = ((((!((map__37737 == null)))?((((map__37737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37737):map__37737);
var container_id = cljs.core.get.call(null,map__37737__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e37739){var e = e37739;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_37742){
var state_val_37743 = (state_37742[(1)]);
if((state_val_37743 === (1))){
var inst_37740 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37742__$1,inst_37740);
} else {
return null;
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__24511__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__24511__auto____0 = (function (){
var statearr_37744 = [null,null,null,null,null,null,null];
(statearr_37744[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__24511__auto__);

(statearr_37744[(1)] = (1));

return statearr_37744;
});
var klipse$lang$jsx$render_jsx_$_state_machine__24511__auto____1 = (function (state_37742){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37745){if((e37745 instanceof Object)){
var ex__24514__auto__ = e37745;
var statearr_37746_37748 = state_37742;
(statearr_37746_37748[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37749 = state_37742;
state_37742 = G__37749;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__24511__auto__ = function(state_37742){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__24511__auto____1.call(this,state_37742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$render_jsx_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__24511__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__24511__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_37747 = f__24601__auto__.call(null);
(statearr_37747[(6)] = c__24600__auto__);

return statearr_37747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__37750){
var map__37751 = p__37750;
var map__37751__$1 = ((((!((map__37751 == null)))?((((map__37751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37751):map__37751);
var container_id = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e37753){var e = e37753;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_37756){
var state_val_37757 = (state_37756[(1)]);
if((state_val_37757 === (1))){
var inst_37754 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_37756__$1 = state_37756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37756__$1,inst_37754);
} else {
return null;
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__24511__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__24511__auto____0 = (function (){
var statearr_37758 = [null,null,null,null,null,null,null];
(statearr_37758[(0)] = klipse$lang$jsx$render_react_$_state_machine__24511__auto__);

(statearr_37758[(1)] = (1));

return statearr_37758;
});
var klipse$lang$jsx$render_react_$_state_machine__24511__auto____1 = (function (state_37756){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37759){if((e37759 instanceof Object)){
var ex__24514__auto__ = e37759;
var statearr_37760_37762 = state_37756;
(statearr_37760_37762[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37763 = state_37756;
state_37756 = G__37763;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__24511__auto__ = function(state_37756){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__24511__auto____1.call(this,state_37756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$render_react_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__24511__auto____0;
klipse$lang$jsx$render_react_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__24511__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_37761 = f__24601__auto__.call(null);
(statearr_37761[(6)] = c__24600__auto__);

return statearr_37761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_37773){
var state_val_37774 = (state_37773[(1)]);
if((state_val_37774 === (1))){
var state_37773__$1 = state_37773;
var statearr_37775_37782 = state_37773__$1;
(statearr_37775_37782[(2)] = null);

(statearr_37775_37782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (2))){
var inst_37771 = (state_37773[(2)]);
var state_37773__$1 = state_37773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37773__$1,inst_37771);
} else {
if((state_val_37774 === (3))){
var inst_37764 = (state_37773[(2)]);
var inst_37765 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37764)].join('');
var state_37773__$1 = state_37773;
var statearr_37776_37783 = state_37773__$1;
(statearr_37776_37783[(2)] = inst_37765);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37773__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37773,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_37769 = klipse.lang.jsx.babel.call(null,exp);
var state_37773__$1 = state_37773;
var statearr_37777_37784 = state_37773__$1;
(statearr_37777_37784[(2)] = inst_37769);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37773__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto__ = null;
var klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto____0 = (function (){
var statearr_37778 = [null,null,null,null,null,null,null];
(statearr_37778[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto__);

(statearr_37778[(1)] = (1));

return statearr_37778;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto____1 = (function (state_37773){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_37773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e37779){if((e37779 instanceof Object)){
var ex__24514__auto__ = e37779;
var statearr_37780_37785 = state_37773;
(statearr_37780_37785[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37786 = state_37773;
state_37773 = G__37786;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto__ = function(state_37773){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto____1.call(this,state_37773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_37781 = f__24601__auto__.call(null);
(statearr_37781[(6)] = c__24600__auto__);

return statearr_37781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
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
