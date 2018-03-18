// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_39122){
var state_val_39123 = (state_39122[(1)]);
if((state_val_39123 === (1))){
var state_39122__$1 = state_39122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39122__$1,exp);
} else {
return null;
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var klipse$lang$html$my_eval_$_state_machine__24511__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__24511__auto____0 = (function (){
var statearr_39124 = [null,null,null,null,null,null,null];
(statearr_39124[(0)] = klipse$lang$html$my_eval_$_state_machine__24511__auto__);

(statearr_39124[(1)] = (1));

return statearr_39124;
});
var klipse$lang$html$my_eval_$_state_machine__24511__auto____1 = (function (state_39122){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_39122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e39125){if((e39125 instanceof Object)){
var ex__24514__auto__ = e39125;
var statearr_39126_39128 = state_39122;
(statearr_39126_39128[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39129 = state_39122;
state_39122 = G__39129;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__24511__auto__ = function(state_39122){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__24511__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__24511__auto____1.call(this,state_39122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$html$my_eval_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__24511__auto____0;
klipse$lang$html$my_eval_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__24511__auto____1;
return klipse$lang$html$my_eval_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_39127 = f__24601__auto__.call(null);
(statearr_39127[(6)] = c__24600__auto__);

return statearr_39127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map
