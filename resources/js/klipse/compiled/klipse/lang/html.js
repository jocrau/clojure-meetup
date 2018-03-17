// Compiled by ClojureScript 1.10.145 {}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__13848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13848__auto__){
return (function (){
var f__13849__auto__ = (function (){var switch__13825__auto__ = ((function (c__13848__auto__){
return (function (state_16891){
var state_val_16892 = (state_16891[(1)]);
if((state_val_16892 === (1))){
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16891__$1,exp);
} else {
return null;
}
});})(c__13848__auto__))
;
return ((function (switch__13825__auto__,c__13848__auto__){
return (function() {
var klipse$lang$html$my_eval_$_state_machine__13826__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__13826__auto____0 = (function (){
var statearr_16893 = [null,null,null,null,null,null,null];
(statearr_16893[(0)] = klipse$lang$html$my_eval_$_state_machine__13826__auto__);

(statearr_16893[(1)] = (1));

return statearr_16893;
});
var klipse$lang$html$my_eval_$_state_machine__13826__auto____1 = (function (state_16891){
while(true){
var ret_value__13827__auto__ = (function (){try{while(true){
var result__13828__auto__ = switch__13825__auto__.call(null,state_16891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13828__auto__;
}
break;
}
}catch (e16894){if((e16894 instanceof Object)){
var ex__13829__auto__ = e16894;
var statearr_16895_16897 = state_16891;
(statearr_16895_16897[(5)] = ex__13829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16898 = state_16891;
state_16891 = G__16898;
continue;
} else {
return ret_value__13827__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__13826__auto__ = function(state_16891){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__13826__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__13826__auto____1.call(this,state_16891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$html$my_eval_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__13826__auto____0;
klipse$lang$html$my_eval_$_state_machine__13826__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__13826__auto____1;
return klipse$lang$html$my_eval_$_state_machine__13826__auto__;
})()
;})(switch__13825__auto__,c__13848__auto__))
})();
var state__13850__auto__ = (function (){var statearr_16896 = f__13849__auto__.call(null);
(statearr_16896[(6)] = c__13848__auto__);

return statearr_16896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13850__auto__);
});})(c__13848__auto__))
);

return c__13848__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map
