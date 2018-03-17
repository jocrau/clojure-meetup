// Compiled by ClojureScript 1.10.145 {}
goog.provide('klipse.lang.reagent');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('klipse.lang.clojure');
klipse.lang.reagent.eval_reagent = (function klipse$lang$reagent$eval_reagent(src,p__16884){
var map__16885 = p__16884;
var map__16885__$1 = ((((!((map__16885 == null)))?(((((map__16885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16885):map__16885);
var opts = map__16885__$1;
var container_id = cljs.core.get.call(null,map__16885__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var container = cljs.core.get.call(null,map__16885__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var exps = klipse.lang.clojure.split_expressions.call(null,src);
var component = cljs.reader.read_string.call(null,cljs.core.last.call(null,exps));
var component__$1 = ((cljs.core.vector_QMARK_.call(null,component))?component:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));
var other_code = clojure.string.join.call(null,"\n",cljs.core.drop_last.call(null,(1),exps));
var code = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(other_code),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("reagent.core","render-component","reagent.core/render-component",-2060829669,null),null,(1),null)),(new cljs.core.List(null,component__$1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","document.getElementById","js/document.getElementById",2053304690,null),null,(1),null)),(new cljs.core.List(null,container_id,null,(1),null))))),null,(1),null))))))].join('');
return klipse.lang.clojure.str_eval_async.call(null,code,opts);
}catch (e16887){var e = e16887;
goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.reagent.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.reagent.eval_reagent,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-reagent","selector_reagent",klipse.lang.reagent.opts);

//# sourceMappingURL=reagent.js.map
