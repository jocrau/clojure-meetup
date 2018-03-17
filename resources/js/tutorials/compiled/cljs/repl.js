// Compiled by ClojureScript 1.10.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37391){
var map__37392 = p__37391;
var map__37392__$1 = ((((!((map__37392 == null)))?(((((map__37392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37392):map__37392);
var m = map__37392__$1;
var n = cljs.core.get.call(null,map__37392__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37392__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37394_37416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37395_37417 = null;
var count__37396_37418 = (0);
var i__37397_37419 = (0);
while(true){
if((i__37397_37419 < count__37396_37418)){
var f_37420 = cljs.core._nth.call(null,chunk__37395_37417,i__37397_37419);
cljs.core.println.call(null,"  ",f_37420);


var G__37421 = seq__37394_37416;
var G__37422 = chunk__37395_37417;
var G__37423 = count__37396_37418;
var G__37424 = (i__37397_37419 + (1));
seq__37394_37416 = G__37421;
chunk__37395_37417 = G__37422;
count__37396_37418 = G__37423;
i__37397_37419 = G__37424;
continue;
} else {
var temp__5457__auto___37425 = cljs.core.seq.call(null,seq__37394_37416);
if(temp__5457__auto___37425){
var seq__37394_37426__$1 = temp__5457__auto___37425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37394_37426__$1)){
var c__4319__auto___37427 = cljs.core.chunk_first.call(null,seq__37394_37426__$1);
var G__37428 = cljs.core.chunk_rest.call(null,seq__37394_37426__$1);
var G__37429 = c__4319__auto___37427;
var G__37430 = cljs.core.count.call(null,c__4319__auto___37427);
var G__37431 = (0);
seq__37394_37416 = G__37428;
chunk__37395_37417 = G__37429;
count__37396_37418 = G__37430;
i__37397_37419 = G__37431;
continue;
} else {
var f_37432 = cljs.core.first.call(null,seq__37394_37426__$1);
cljs.core.println.call(null,"  ",f_37432);


var G__37433 = cljs.core.next.call(null,seq__37394_37426__$1);
var G__37434 = null;
var G__37435 = (0);
var G__37436 = (0);
seq__37394_37416 = G__37433;
chunk__37395_37417 = G__37434;
count__37396_37418 = G__37435;
i__37397_37419 = G__37436;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37437 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37437);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37437)))?cljs.core.second.call(null,arglists_37437):arglists_37437));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37398_37438 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37399_37439 = null;
var count__37400_37440 = (0);
var i__37401_37441 = (0);
while(true){
if((i__37401_37441 < count__37400_37440)){
var vec__37402_37442 = cljs.core._nth.call(null,chunk__37399_37439,i__37401_37441);
var name_37443 = cljs.core.nth.call(null,vec__37402_37442,(0),null);
var map__37405_37444 = cljs.core.nth.call(null,vec__37402_37442,(1),null);
var map__37405_37445__$1 = ((((!((map__37405_37444 == null)))?(((((map__37405_37444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37405_37444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37405_37444):map__37405_37444);
var doc_37446 = cljs.core.get.call(null,map__37405_37445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37447 = cljs.core.get.call(null,map__37405_37445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37443);

cljs.core.println.call(null," ",arglists_37447);

if(cljs.core.truth_(doc_37446)){
cljs.core.println.call(null," ",doc_37446);
} else {
}


var G__37448 = seq__37398_37438;
var G__37449 = chunk__37399_37439;
var G__37450 = count__37400_37440;
var G__37451 = (i__37401_37441 + (1));
seq__37398_37438 = G__37448;
chunk__37399_37439 = G__37449;
count__37400_37440 = G__37450;
i__37401_37441 = G__37451;
continue;
} else {
var temp__5457__auto___37452 = cljs.core.seq.call(null,seq__37398_37438);
if(temp__5457__auto___37452){
var seq__37398_37453__$1 = temp__5457__auto___37452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37398_37453__$1)){
var c__4319__auto___37454 = cljs.core.chunk_first.call(null,seq__37398_37453__$1);
var G__37455 = cljs.core.chunk_rest.call(null,seq__37398_37453__$1);
var G__37456 = c__4319__auto___37454;
var G__37457 = cljs.core.count.call(null,c__4319__auto___37454);
var G__37458 = (0);
seq__37398_37438 = G__37455;
chunk__37399_37439 = G__37456;
count__37400_37440 = G__37457;
i__37401_37441 = G__37458;
continue;
} else {
var vec__37407_37459 = cljs.core.first.call(null,seq__37398_37453__$1);
var name_37460 = cljs.core.nth.call(null,vec__37407_37459,(0),null);
var map__37410_37461 = cljs.core.nth.call(null,vec__37407_37459,(1),null);
var map__37410_37462__$1 = ((((!((map__37410_37461 == null)))?(((((map__37410_37461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37410_37461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37410_37461):map__37410_37461);
var doc_37463 = cljs.core.get.call(null,map__37410_37462__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37464 = cljs.core.get.call(null,map__37410_37462__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37460);

cljs.core.println.call(null," ",arglists_37464);

if(cljs.core.truth_(doc_37463)){
cljs.core.println.call(null," ",doc_37463);
} else {
}


var G__37465 = cljs.core.next.call(null,seq__37398_37453__$1);
var G__37466 = null;
var G__37467 = (0);
var G__37468 = (0);
seq__37398_37438 = G__37465;
chunk__37399_37439 = G__37466;
count__37400_37440 = G__37467;
i__37401_37441 = G__37468;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__37412 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37413 = null;
var count__37414 = (0);
var i__37415 = (0);
while(true){
if((i__37415 < count__37414)){
var role = cljs.core._nth.call(null,chunk__37413,i__37415);
var temp__5457__auto___37469__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___37469__$1)){
var spec_37470 = temp__5457__auto___37469__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37470));
} else {
}


var G__37471 = seq__37412;
var G__37472 = chunk__37413;
var G__37473 = count__37414;
var G__37474 = (i__37415 + (1));
seq__37412 = G__37471;
chunk__37413 = G__37472;
count__37414 = G__37473;
i__37415 = G__37474;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__37412);
if(temp__5457__auto____$1){
var seq__37412__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37412__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37412__$1);
var G__37475 = cljs.core.chunk_rest.call(null,seq__37412__$1);
var G__37476 = c__4319__auto__;
var G__37477 = cljs.core.count.call(null,c__4319__auto__);
var G__37478 = (0);
seq__37412 = G__37475;
chunk__37413 = G__37476;
count__37414 = G__37477;
i__37415 = G__37478;
continue;
} else {
var role = cljs.core.first.call(null,seq__37412__$1);
var temp__5457__auto___37479__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___37479__$2)){
var spec_37480 = temp__5457__auto___37479__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37480));
} else {
}


var G__37481 = cljs.core.next.call(null,seq__37412__$1);
var G__37482 = null;
var G__37483 = (0);
var G__37484 = (0);
seq__37412 = G__37481;
chunk__37413 = G__37482;
count__37414 = G__37483;
i__37415 = G__37484;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1521146650196
