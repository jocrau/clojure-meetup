// Compiled by ClojureScript 1.10.145 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__34444__delegate = function (x__34428__auto__){
if(cljs.core.truth_(tutorials.react_frontend.app.init)){
return cljs.core.apply.call(null,tutorials.react_frontend.app.init,x__34428__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("tutorials.react_frontend.app/init"),"' is missing"].join(''));
}
};
var G__34444 = function (var_args){
var x__34428__auto__ = null;
if (arguments.length > 0) {
var G__34445__i = 0, G__34445__a = new Array(arguments.length -  0);
while (G__34445__i < G__34445__a.length) {G__34445__a[G__34445__i] = arguments[G__34445__i + 0]; ++G__34445__i;}
  x__34428__auto__ = new cljs.core.IndexedSeq(G__34445__a,0,null);
} 
return G__34444__delegate.call(this,x__34428__auto__);};
G__34444.cljs$lang$maxFixedArity = 0;
G__34444.cljs$lang$applyTo = (function (arglist__34446){
var x__34428__auto__ = cljs.core.seq(arglist__34446);
return G__34444__delegate(x__34428__auto__);
});
G__34444.cljs$core$IFn$_invoke$arity$variadic = G__34444__delegate;
return G__34444;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1521209067326
