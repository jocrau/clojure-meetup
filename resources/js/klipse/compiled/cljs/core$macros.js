// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__10241__auto___31857 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31858 = arguments.length;
var i__10196__auto___31859 = (0);
while(true){
if((i__10196__auto___31859 < len__10195__auto___31858)){
args__10202__auto__.push((arguments[i__10196__auto___31859]));

var G__31860 = (i__10196__auto___31859 + (1));
i__10196__auto___31859 = G__31860;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__9870__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})());
var G__31861 = threaded;
var G__31862 = cljs.core.next.call(null,forms__$1);
x__$1 = G__31861;
forms__$1 = G__31862;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq31853){
var G__31854 = cljs.core.first.call(null,seq31853);
var seq31853__$1 = cljs.core.next.call(null,seq31853);
var G__31855 = cljs.core.first.call(null,seq31853__$1);
var seq31853__$2 = cljs.core.next.call(null,seq31853__$1);
var G__31856 = cljs.core.first.call(null,seq31853__$2);
var seq31853__$3 = cljs.core.next.call(null,seq31853__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__31854,G__31855,G__31856,seq31853__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__10241__auto___31867 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31868 = arguments.length;
var i__10196__auto___31869 = (0);
while(true){
if((i__10196__auto___31869 < len__10195__auto___31868)){
args__10202__auto__.push((arguments[i__10196__auto___31869]));

var G__31870 = (i__10196__auto___31869 + (1));
i__10196__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__9870__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__9870__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})());
var G__31871 = threaded;
var G__31872 = cljs.core.next.call(null,forms__$1);
x__$1 = G__31871;
forms__$1 = G__31872;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq31863){
var G__31864 = cljs.core.first.call(null,seq31863);
var seq31863__$1 = cljs.core.next.call(null,seq31863);
var G__31865 = cljs.core.first.call(null,seq31863__$1);
var seq31863__$2 = cljs.core.next.call(null,seq31863__$1);
var G__31866 = cljs.core.first.call(null,seq31863__$2);
var seq31863__$3 = cljs.core.next.call(null,seq31863__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__31864,G__31865,G__31866,seq31863__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__10241__auto___31880 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__31879 = arguments.length;
switch (G__31879) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___31882 = arguments.length;
var i__10196__auto___31883 = (0);
while(true){
if((i__10196__auto___31883 < len__10195__auto___31882)){
args_arr__10218__auto__.push((arguments[i__10196__auto___31883]));

var G__31884 = (i__10196__auto___31883 + (1));
i__10196__auto___31883 = G__31884;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq31874){
var G__31875 = cljs.core.first.call(null,seq31874);
var seq31874__$1 = cljs.core.next.call(null,seq31874);
var G__31876 = cljs.core.first.call(null,seq31874__$1);
var seq31874__$2 = cljs.core.next.call(null,seq31874__$1);
var G__31877 = cljs.core.first.call(null,seq31874__$2);
var seq31874__$3 = cljs.core.next.call(null,seq31874__$2);
var G__31878 = cljs.core.first.call(null,seq31874__$3);
var seq31874__$4 = cljs.core.next.call(null,seq31874__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__31875,G__31876,G__31877,G__31878,seq31874__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__10241__auto___31888 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31889 = arguments.length;
var i__10196__auto___31890 = (0);
while(true){
if((i__10196__auto___31890 < len__10195__auto___31889)){
args__10202__auto__.push((arguments[i__10196__auto___31890]));

var G__31891 = (i__10196__auto___31890 + (1));
i__10196__auto___31890 = G__31891;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq31885){
var G__31886 = cljs.core.first.call(null,seq31885);
var seq31885__$1 = cljs.core.next.call(null,seq31885);
var G__31887 = cljs.core.first.call(null,seq31885__$1);
var seq31885__$2 = cljs.core.next.call(null,seq31885__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__31886,G__31887,seq31885__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__10241__auto___31895 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31896 = arguments.length;
var i__10196__auto___31897 = (0);
while(true){
if((i__10196__auto___31897 < len__10195__auto___31896)){
args__10202__auto__.push((arguments[i__10196__auto___31897]));

var G__31898 = (i__10196__auto___31897 + (1));
i__10196__auto___31897 = G__31898;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__9870__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$2);
})(),x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq31892){
var G__31893 = cljs.core.first.call(null,seq31892);
var seq31892__$1 = cljs.core.next.call(null,seq31892);
var G__31894 = cljs.core.first.call(null,seq31892__$1);
var seq31892__$2 = cljs.core.next.call(null,seq31892__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__31893,G__31894,seq31892__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__10241__auto___31903 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31904 = arguments.length;
var i__10196__auto___31905 = (0);
while(true){
if((i__10196__auto___31905 < len__10195__auto___31904)){
args__10202__auto__.push((arguments[i__10196__auto___31905]));

var G__31906 = (i__10196__auto___31905 + (1));
i__10196__auto___31905 = G__31906;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__31899_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.vary_meta.call(null,p1__31899_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq31900){
var G__31901 = cljs.core.first.call(null,seq31900);
var seq31900__$1 = cljs.core.next.call(null,seq31900);
var G__31902 = cljs.core.first.call(null,seq31900__$1);
var seq31900__$2 = cljs.core.next.call(null,seq31900__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__31901,G__31902,seq31900__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__10241__auto___31911 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31912 = arguments.length;
var i__10196__auto___31913 = (0);
while(true){
if((i__10196__auto___31913 < len__10195__auto___31912)){
args__10202__auto__.push((arguments[i__10196__auto___31913]));

var G__31914 = (i__10196__auto___31913 + (1));
i__10196__auto___31913 = G__31914;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__9870__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq31907){
var G__31908 = cljs.core.first.call(null,seq31907);
var seq31907__$1 = cljs.core.next.call(null,seq31907);
var G__31909 = cljs.core.first.call(null,seq31907__$1);
var seq31907__$2 = cljs.core.next.call(null,seq31907__$1);
var G__31910 = cljs.core.first.call(null,seq31907__$2);
var seq31907__$3 = cljs.core.next.call(null,seq31907__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__31908,G__31909,G__31910,seq31907__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__31915 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__31916 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__31915;
s = G__31916;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__31917){
var vec__31918 = p__31917;
var t = cljs.core.nth.call(null,vec__31918,(0),null);
var fs = cljs.core.nth.call(null,vec__31918,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9870__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__10241__auto___31925 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31926 = arguments.length;
var i__10196__auto___31927 = (0);
while(true){
if((i__10196__auto___31927 < len__10195__auto___31926)){
args__10202__auto__.push((arguments[i__10196__auto___31927]));

var G__31928 = (i__10196__auto___31927 + (1));
i__10196__auto___31927 = G__31928;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq31921){
var G__31922 = cljs.core.first.call(null,seq31921);
var seq31921__$1 = cljs.core.next.call(null,seq31921);
var G__31923 = cljs.core.first.call(null,seq31921__$1);
var seq31921__$2 = cljs.core.next.call(null,seq31921__$1);
var G__31924 = cljs.core.first.call(null,seq31921__$2);
var seq31921__$3 = cljs.core.next.call(null,seq31921__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__31922,G__31923,G__31924,seq31921__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__31929 = cljs.core.next.call(null,params__$1);
var G__31930 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__31931 = lets;
params__$1 = G__31929;
new_params = G__31930;
lets = G__31931;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__31932 = cljs.core.next.call(null,params__$1);
var G__31933 = cljs.core.conj.call(null,new_params,gparam);
var G__31934 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__31932;
new_params = G__31933;
lets = G__31934;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
break;
}
}
});
var ret__10241__auto___31941 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31942 = arguments.length;
var i__10196__auto___31943 = (0);
while(true){
if((i__10196__auto___31943 < len__10195__auto___31942)){
args__10202__auto__.push((arguments[i__10196__auto___31943]));

var G__31944 = (i__10196__auto___31943 + (1));
i__10196__auto___31943 = G__31944;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__9870__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__31938 = sig;
var seq__31939 = cljs.core.seq.call(null,vec__31938);
var first__31940 = cljs.core.first.call(null,seq__31939);
var seq__31939__$1 = cljs.core.next.call(null,seq__31939);
var params = first__31940;
var body = seq__31939__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__8916__auto__ = conds;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__9870__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.map.call(null,((function (vec__31938,seq__31939,first__31940,seq__31939__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9870__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(vec__31938,seq__31939,first__31940,seq__31939__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__31938,seq__31939,first__31940,seq__31939__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9870__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(vec__31938,seq__31939,first__31940,seq__31939__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq31935){
var G__31936 = cljs.core.first.call(null,seq31935);
var seq31935__$1 = cljs.core.next.call(null,seq31935);
var G__31937 = cljs.core.first.call(null,seq31935__$1);
var seq31935__$2 = cljs.core.next.call(null,seq31935__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__31936,G__31937,seq31935__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__10241__auto___31949 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31950 = arguments.length;
var i__10196__auto___31951 = (0);
while(true){
if((i__10196__auto___31951 < len__10195__auto___31950)){
args__10202__auto__.push((arguments[i__10196__auto___31951]));

var G__31952 = (i__10196__auto___31951 + (1));
i__10196__auto___31951 = G__31952;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq31945){
var G__31946 = cljs.core.first.call(null,seq31945);
var seq31945__$1 = cljs.core.next.call(null,seq31945);
var G__31947 = cljs.core.first.call(null,seq31945__$1);
var seq31945__$2 = cljs.core.next.call(null,seq31945__$1);
var G__31948 = cljs.core.first.call(null,seq31945__$2);
var seq31945__$3 = cljs.core.next.call(null,seq31945__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__31946,G__31947,G__31948,seq31945__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__10241__auto___31962 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__31961 = arguments.length;
switch (G__31961) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___31964 = arguments.length;
var i__10196__auto___31965 = (0);
while(true){
if((i__10196__auto___31965 < len__10195__auto___31964)){
args_arr__10218__auto__.push((arguments[i__10196__auto___31965]));

var G__31966 = (i__10196__auto___31965 + (1));
i__10196__auto___31965 = G__31966;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10219__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9870__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__31953__auto__","temp__31953__auto__",833900433,null)),(function (){var x__9870__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__31953__auto__","temp__31953__auto__",833900433,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__31953__auto__","temp__31953__auto__",833900433,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq31955){
var G__31956 = cljs.core.first.call(null,seq31955);
var seq31955__$1 = cljs.core.next.call(null,seq31955);
var G__31957 = cljs.core.first.call(null,seq31955__$1);
var seq31955__$2 = cljs.core.next.call(null,seq31955__$1);
var G__31958 = cljs.core.first.call(null,seq31955__$2);
var seq31955__$3 = cljs.core.next.call(null,seq31955__$2);
var G__31959 = cljs.core.first.call(null,seq31955__$3);
var seq31955__$4 = cljs.core.next.call(null,seq31955__$3);
var G__31960 = cljs.core.first.call(null,seq31955__$4);
var seq31955__$5 = cljs.core.next.call(null,seq31955__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__31956,G__31957,G__31958,G__31959,G__31960,seq31955__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__10241__auto___31969 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__31968 = arguments.length;
switch (G__31968) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9870__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9870__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__10241__auto___31976 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31977 = arguments.length;
var i__10196__auto___31978 = (0);
while(true){
if((i__10196__auto___31978 < len__10195__auto___31977)){
args__10202__auto__.push((arguments[i__10196__auto___31978]));

var G__31979 = (i__10196__auto___31978 + (1));
i__10196__auto___31978 = G__31979;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__31971_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__31971_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq31972){
var G__31973 = cljs.core.first.call(null,seq31972);
var seq31972__$1 = cljs.core.next.call(null,seq31972);
var G__31974 = cljs.core.first.call(null,seq31972__$1);
var seq31972__$2 = cljs.core.next.call(null,seq31972__$1);
var G__31975 = cljs.core.first.call(null,seq31972__$2);
var seq31972__$3 = cljs.core.next.call(null,seq31972__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__31973,G__31974,G__31975,seq31972__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__10241__auto___31984 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31985 = arguments.length;
var i__10196__auto___31986 = (0);
while(true){
if((i__10196__auto___31986 < len__10195__auto___31985)){
args__10202__auto__.push((arguments[i__10196__auto___31986]));

var G__31987 = (i__10196__auto___31986 + (1));
i__10196__auto___31986 = G__31987;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq31980){
var G__31981 = cljs.core.first.call(null,seq31980);
var seq31980__$1 = cljs.core.next.call(null,seq31980);
var G__31982 = cljs.core.first.call(null,seq31980__$1);
var seq31980__$2 = cljs.core.next.call(null,seq31980__$1);
var G__31983 = cljs.core.first.call(null,seq31980__$2);
var seq31980__$3 = cljs.core.next.call(null,seq31980__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__31981,G__31982,G__31983,seq31980__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__10241__auto___31992 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__10202__auto__ = [];
var len__10195__auto___31993 = arguments.length;
var i__10196__auto___31994 = (0);
while(true){
if((i__10196__auto___31994 < len__10195__auto___31993)){
args__10202__auto__.push((arguments[i__10196__auto___31994]));

var G__31995 = (i__10196__auto___31994 + (1));
i__10196__auto___31994 = G__31995;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq31988){
var G__31989 = cljs.core.first.call(null,seq31988);
var seq31988__$1 = cljs.core.next.call(null,seq31988);
var G__31990 = cljs.core.first.call(null,seq31988__$1);
var seq31988__$2 = cljs.core.next.call(null,seq31988__$1);
var G__31991 = cljs.core.first.call(null,seq31988__$2);
var seq31988__$3 = cljs.core.next.call(null,seq31988__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__31989,G__31990,G__31991,seq31988__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__10241__auto___32004 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32005 = arguments.length;
var i__10196__auto___32006 = (0);
while(true){
if((i__10196__auto___32006 < len__10195__auto___32005)){
args__10202__auto__.push((arguments[i__10196__auto___32006]));

var G__32007 = (i__10196__auto___32006 + (1));
i__10196__auto___32006 = G__32007;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__32001 = bindings;
var x = cljs.core.nth.call(null,vec__32001,(0),null);
var xs = cljs.core.nth.call(null,vec__32001,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__31996__auto__","xs__31996__auto__",-1253632648,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9870__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__31996__auto__","xs__31996__auto__",-1253632648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq31997){
var G__31998 = cljs.core.first.call(null,seq31997);
var seq31997__$1 = cljs.core.next.call(null,seq31997);
var G__31999 = cljs.core.first.call(null,seq31997__$1);
var seq31997__$2 = cljs.core.next.call(null,seq31997__$1);
var G__32000 = cljs.core.first.call(null,seq31997__$2);
var seq31997__$3 = cljs.core.next.call(null,seq31997__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__31998,G__31999,G__32000,seq31997__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__10241__auto___32013 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32014 = arguments.length;
var i__10196__auto___32015 = (0);
while(true){
if((i__10196__auto___32015 < len__10195__auto___32014)){
args__10202__auto__.push((arguments[i__10196__auto___32015]));

var G__32016 = (i__10196__auto___32015 + (1));
i__10196__auto___32015 = G__32016;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32008__auto__","temp__32008__auto__",-536098074,null)),(function (){var x__9870__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32008__auto__","temp__32008__auto__",-536098074,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32008__auto__","temp__32008__auto__",-536098074,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq32009){
var G__32010 = cljs.core.first.call(null,seq32009);
var seq32009__$1 = cljs.core.next.call(null,seq32009);
var G__32011 = cljs.core.first.call(null,seq32009__$1);
var seq32009__$2 = cljs.core.next.call(null,seq32009__$1);
var G__32012 = cljs.core.first.call(null,seq32009__$2);
var seq32009__$3 = cljs.core.next.call(null,seq32009__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__32010,G__32011,G__32012,seq32009__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__10241__auto___32021 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32022 = arguments.length;
var i__10196__auto___32023 = (0);
while(true){
if((i__10196__auto___32023 < len__10195__auto___32022)){
args__10202__auto__.push((arguments[i__10196__auto___32023]));

var G__32024 = (i__10196__auto___32023 + (1));
i__10196__auto___32023 = G__32024;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),null),x__9870__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq32017){
var G__32018 = cljs.core.first.call(null,seq32017);
var seq32017__$1 = cljs.core.next.call(null,seq32017);
var G__32019 = cljs.core.first.call(null,seq32017__$1);
var seq32017__$2 = cljs.core.next.call(null,seq32017__$1);
var G__32020 = cljs.core.first.call(null,seq32017__$2);
var seq32017__$3 = cljs.core.next.call(null,seq32017__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__32018,G__32019,G__32020,seq32017__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__10241__auto___32029 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32030 = arguments.length;
var i__10196__auto___32031 = (0);
while(true){
if((i__10196__auto___32031 < len__10195__auto___32030)){
args__10202__auto__.push((arguments[i__10196__auto___32031]));

var G__32032 = (i__10196__auto___32031 + (1));
i__10196__auto___32031 = G__32032;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9870__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq32025){
var G__32026 = cljs.core.first.call(null,seq32025);
var seq32025__$1 = cljs.core.next.call(null,seq32025);
var G__32027 = cljs.core.first.call(null,seq32025__$1);
var seq32025__$2 = cljs.core.next.call(null,seq32025__$1);
var G__32028 = cljs.core.first.call(null,seq32025__$2);
var seq32025__$3 = cljs.core.next.call(null,seq32025__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__32026,G__32027,G__32028,seq32025__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__10241__auto___32041 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32042 = arguments.length;
var i__10196__auto___32043 = (0);
while(true){
if((i__10196__auto___32043 < len__10195__auto___32042)){
args__10202__auto__.push((arguments[i__10196__auto___32043]));

var G__32044 = (i__10196__auto___32043 + (1));
i__10196__auto___32043 = G__32044;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__32037){
var vec__32038 = p__32037;
var test = cljs.core.nth.call(null,vec__32038,(0),null);
var step = cljs.core.nth.call(null,vec__32038,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq32033){
var G__32034 = cljs.core.first.call(null,seq32033);
var seq32033__$1 = cljs.core.next.call(null,seq32033);
var G__32035 = cljs.core.first.call(null,seq32033__$1);
var seq32033__$2 = cljs.core.next.call(null,seq32033__$1);
var G__32036 = cljs.core.first.call(null,seq32033__$2);
var seq32033__$3 = cljs.core.next.call(null,seq32033__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32034,G__32035,G__32036,seq32033__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__10241__auto___32053 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32054 = arguments.length;
var i__10196__auto___32055 = (0);
while(true){
if((i__10196__auto___32055 < len__10195__auto___32054)){
args__10202__auto__.push((arguments[i__10196__auto___32055]));

var G__32056 = (i__10196__auto___32055 + (1));
i__10196__auto___32055 = G__32056;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__32049){
var vec__32050 = p__32049;
var test = cljs.core.nth.call(null,vec__32050,(0),null);
var step = cljs.core.nth.call(null,vec__32050,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq32045){
var G__32046 = cljs.core.first.call(null,seq32045);
var seq32045__$1 = cljs.core.next.call(null,seq32045);
var G__32047 = cljs.core.first.call(null,seq32045__$1);
var seq32045__$2 = cljs.core.next.call(null,seq32045__$1);
var G__32048 = cljs.core.first.call(null,seq32045__$2);
var seq32045__$3 = cljs.core.next.call(null,seq32045__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32046,G__32047,G__32048,seq32045__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__10241__auto___32062 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32063 = arguments.length;
var i__10196__auto___32064 = (0);
while(true){
if((i__10196__auto___32064 < len__10195__auto___32063)){
args__10202__auto__.push((arguments[i__10196__auto___32064]));

var G__32065 = (i__10196__auto___32064 + (1));
i__10196__auto___32064 = G__32065;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((4) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10203__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq32057){
var G__32058 = cljs.core.first.call(null,seq32057);
var seq32057__$1 = cljs.core.next.call(null,seq32057);
var G__32059 = cljs.core.first.call(null,seq32057__$1);
var seq32057__$2 = cljs.core.next.call(null,seq32057__$1);
var G__32060 = cljs.core.first.call(null,seq32057__$2);
var seq32057__$3 = cljs.core.next.call(null,seq32057__$2);
var G__32061 = cljs.core.first.call(null,seq32057__$3);
var seq32057__$4 = cljs.core.next.call(null,seq32057__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32058,G__32059,G__32060,G__32061,seq32057__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__10241__auto___32070 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32071 = arguments.length;
var i__10196__auto___32072 = (0);
while(true){
if((i__10196__auto___32072 < len__10195__auto___32071)){
args__10202__auto__.push((arguments[i__10196__auto___32072]));

var G__32073 = (i__10196__auto___32072 + (1));
i__10196__auto___32072 = G__32073;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq32066){
var G__32067 = cljs.core.first.call(null,seq32066);
var seq32066__$1 = cljs.core.next.call(null,seq32066);
var G__32068 = cljs.core.first.call(null,seq32066__$1);
var seq32066__$2 = cljs.core.next.call(null,seq32066__$1);
var G__32069 = cljs.core.first.call(null,seq32066__$2);
var seq32066__$3 = cljs.core.next.call(null,seq32066__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32067,G__32068,G__32069,seq32066__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__10241__auto___32078 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32079 = arguments.length;
var i__10196__auto___32080 = (0);
while(true){
if((i__10196__auto___32080 < len__10195__auto___32079)){
args__10202__auto__.push((arguments[i__10196__auto___32080]));

var G__32081 = (i__10196__auto___32080 + (1));
i__10196__auto___32080 = G__32081;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq32074){
var G__32075 = cljs.core.first.call(null,seq32074);
var seq32074__$1 = cljs.core.next.call(null,seq32074);
var G__32076 = cljs.core.first.call(null,seq32074__$1);
var seq32074__$2 = cljs.core.next.call(null,seq32074__$1);
var G__32077 = cljs.core.first.call(null,seq32074__$2);
var seq32074__$3 = cljs.core.next.call(null,seq32074__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32075,G__32076,G__32077,seq32074__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__10241__auto___32091 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__32090 = arguments.length;
switch (G__32090) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32093 = arguments.length;
var i__10196__auto___32094 = (0);
while(true){
if((i__10196__auto___32094 < len__10195__auto___32093)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32094]));

var G__32095 = (i__10196__auto___32094 + (1));
i__10196__auto___32094 = G__32095;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10219__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__9870__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32082__auto__","temp__32082__auto__",1449962185,null)),(function (){var x__9870__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32082__auto__","temp__32082__auto__",1449962185,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32082__auto__","temp__32082__auto__",1449962185,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq32084){
var G__32085 = cljs.core.first.call(null,seq32084);
var seq32084__$1 = cljs.core.next.call(null,seq32084);
var G__32086 = cljs.core.first.call(null,seq32084__$1);
var seq32084__$2 = cljs.core.next.call(null,seq32084__$1);
var G__32087 = cljs.core.first.call(null,seq32084__$2);
var seq32084__$3 = cljs.core.next.call(null,seq32084__$2);
var G__32088 = cljs.core.first.call(null,seq32084__$3);
var seq32084__$4 = cljs.core.next.call(null,seq32084__$3);
var G__32089 = cljs.core.first.call(null,seq32084__$4);
var seq32084__$5 = cljs.core.next.call(null,seq32084__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__32085,G__32086,G__32087,G__32088,G__32089,seq32084__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__10241__auto___32101 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32102 = arguments.length;
var i__10196__auto___32103 = (0);
while(true){
if((i__10196__auto___32103 < len__10195__auto___32102)){
args__10202__auto__.push((arguments[i__10196__auto___32103]));

var G__32104 = (i__10196__auto___32103 + (1));
i__10196__auto___32103 = G__32104;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32096__auto__","temp__32096__auto__",-1038688489,null)),(function (){var x__9870__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32096__auto__","temp__32096__auto__",-1038688489,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32096__auto__","temp__32096__auto__",-1038688489,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq32097){
var G__32098 = cljs.core.first.call(null,seq32097);
var seq32097__$1 = cljs.core.next.call(null,seq32097);
var G__32099 = cljs.core.first.call(null,seq32097__$1);
var seq32097__$2 = cljs.core.next.call(null,seq32097__$1);
var G__32100 = cljs.core.first.call(null,seq32097__$2);
var seq32097__$3 = cljs.core.next.call(null,seq32097__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__32098,G__32099,G__32100,seq32097__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__32105_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__32105_SHARP_)){
return cljs.core.first.call(null,p1__32105_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32105_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32105_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__32106_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__32106_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__32107 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__32108 = cljs.core.next.call(null,fdecls);
ret = G__32107;
fdecls = G__32108;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__9870__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
}
});
var ret__10241__auto___32109 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__9870__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__32116 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__32117 = n;
var G__32118 = cljs.core.nnext.call(null,bs);
var G__32119 = true;
ret = G__32116;
n = G__32117;
bs = G__32118;
seen_rest_QMARK_ = G__32119;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__32120 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9870__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9870__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__9870__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__32121 = (n + (1));
var G__32122 = cljs.core.next.call(null,bs);
var G__32123 = seen_rest_QMARK_;
ret = G__32120;
n = G__32121;
bs = G__32122;
seen_rest_QMARK_ = G__32123;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__9870__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__9870__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__32110_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__8916__auto__ = mkns;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.namespace.call(null,p1__32110_SHARP_);
}
})(),cljs.core.name.call(null,p1__32110_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__32111_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.symbol.call(null,(function (){var or__8916__auto__ = mkns;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.namespace.call(null,p1__32111_SHARP_);
}
})(),cljs.core.name.call(null,p1__32111_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__32112_SHARP_,p2__32113_SHARP_){
return cljs.core.assoc.call(null,p1__32112_SHARP_,p2__32113_SHARP_,cljs.core.val.call(null,entry).call(null,p2__32113_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__9870__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$2);
})(),x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__9870__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__32124 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__32125 = cljs.core.next.call(null,bes);
ret = G__32124;
bes = G__32125;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__5455__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__32114_SHARP_){
return (cljs.core.first.call(null,p1__32114_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__5455__auto__){
var kwbs = temp__5455__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__10241__auto___32126 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9870__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__9870__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__10241__auto___32131 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32132 = arguments.length;
var i__10196__auto___32133 = (0);
while(true){
if((i__10196__auto___32133 < len__10195__auto___32132)){
args__10202__auto__.push((arguments[i__10196__auto___32133]));

var G__32134 = (i__10196__auto___32133 + (1));
i__10196__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__9870__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq32127){
var G__32128 = cljs.core.first.call(null,seq32127);
var seq32127__$1 = cljs.core.next.call(null,seq32127);
var G__32129 = cljs.core.first.call(null,seq32127__$1);
var seq32127__$2 = cljs.core.next.call(null,seq32127__$1);
var G__32130 = cljs.core.first.call(null,seq32127__$2);
var seq32127__$3 = cljs.core.next.call(null,seq32127__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__32128,G__32129,G__32130,seq32127__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__10241__auto___32143 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32144 = arguments.length;
var i__10196__auto___32145 = (0);
while(true){
if((i__10196__auto___32145 < len__10195__auto___32144)){
args__10202__auto__.push((arguments[i__10196__auto___32145]));

var G__32146 = (i__10196__auto___32145 + (1));
i__10196__auto___32145 = G__32146;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9870__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__32139){
var vec__32140 = p__32139;
var b = cljs.core.nth.call(null,vec__32140,(0),null);
var v = cljs.core.nth.call(null,vec__32140,(1),null);
var g = cljs.core.nth.call(null,vec__32140,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq32135){
var G__32136 = cljs.core.first.call(null,seq32135);
var seq32135__$1 = cljs.core.next.call(null,seq32135);
var G__32137 = cljs.core.first.call(null,seq32135__$1);
var seq32135__$2 = cljs.core.next.call(null,seq32135__$1);
var G__32138 = cljs.core.first.call(null,seq32135__$2);
var seq32135__$3 = cljs.core.next.call(null,seq32135__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__32136,G__32137,G__32138,seq32135__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__32147_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32147_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__32148){
var vec__32149 = p__32148;
var p = cljs.core.nth.call(null,vec__32149,(0),null);
var b = cljs.core.nth.call(null,vec__32149,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
var ret__10241__auto___32155 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32156 = arguments.length;
var i__10196__auto___32157 = (0);
while(true){
if((i__10196__auto___32157 < len__10195__auto___32156)){
args__10202__auto__.push((arguments[i__10196__auto___32157]));

var G__32158 = (i__10196__auto___32157 + (1));
i__10196__auto___32157 = G__32158;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,xs)));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq32152){
var G__32153 = cljs.core.first.call(null,seq32152);
var seq32152__$1 = cljs.core.next.call(null,seq32152);
var G__32154 = cljs.core.first.call(null,seq32152__$1);
var seq32152__$2 = cljs.core.next.call(null,seq32152__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__32153,G__32154,seq32152__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__8904__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__8904__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__8904__auto__;
}
});
var ret__10241__auto___32169 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__32167 = arguments.length;
switch (G__32167) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32171 = arguments.length;
var i__10196__auto___32172 = (0);
while(true){
if((i__10196__auto___32172 < len__10195__auto___32171)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32172]));

var G__32173 = (i__10196__auto___32172 + (1));
i__10196__auto___32172 = G__32173;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10219__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__32159_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__32159_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__32160_SHARP_){
var _STAR_cljs_warnings_STAR_32168 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__32160_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_32168;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9870__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32161__auto__","and__32161__auto__",399363212,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32161__auto__","and__32161__auto__",399363212,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32161__auto__","and__32161__auto__",399363212,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq32163){
var G__32164 = cljs.core.first.call(null,seq32163);
var seq32163__$1 = cljs.core.next.call(null,seq32163);
var G__32165 = cljs.core.first.call(null,seq32163__$1);
var seq32163__$2 = cljs.core.next.call(null,seq32163__$1);
var G__32166 = cljs.core.first.call(null,seq32163__$2);
var seq32163__$3 = cljs.core.next.call(null,seq32163__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__32164,G__32165,G__32166,seq32163__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__10241__auto___32184 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__32182 = arguments.length;
switch (G__32182) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32186 = arguments.length;
var i__10196__auto___32187 = (0);
while(true){
if((i__10196__auto___32187 < len__10195__auto___32186)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32187]));

var G__32188 = (i__10196__auto___32187 + (1));
i__10196__auto___32187 = G__32188;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10219__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__32174_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__32174_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__32175_SHARP_){
var _STAR_cljs_warnings_STAR_32183 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__32175_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_32183;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9870__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32176__auto__","or__32176__auto__",1738783460,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32176__auto__","or__32176__auto__",1738783460,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32176__auto__","or__32176__auto__",1738783460,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq32178){
var G__32179 = cljs.core.first.call(null,seq32178);
var seq32178__$1 = cljs.core.next.call(null,seq32178);
var G__32180 = cljs.core.first.call(null,seq32178__$1);
var seq32178__$2 = cljs.core.next.call(null,seq32178__$1);
var G__32181 = cljs.core.first.call(null,seq32178__$2);
var seq32178__$3 = cljs.core.next.call(null,seq32178__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__32179,G__32180,G__32181,seq32178__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__10241__auto___32189 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32190 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32191 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__10241__auto___32192 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__10241__auto___32193 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__10241__auto___32194 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__10241__auto___32195 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__10241__auto___32196 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__10241__auto___32197 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__10241__auto___32198 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__10241__auto___32199 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9870__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__10241__auto___32204 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__32201 = clojure.string.split.call(null,comment,/\n/);
var seq__32202 = cljs.core.seq.call(null,vec__32201);
var first__32203 = cljs.core.first.call(null,seq__32202);
var seq__32202__$1 = cljs.core.next.call(null,seq__32202);
var x = first__32203;
var ys = seq__32202__$1;
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__32201,seq__32202,first__32203,seq__32202__$1,x,ys){
return (function (p1__32200_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__32200_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__32201,seq__32202,first__32203,seq__32202__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__10241__auto___32205 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$2);
})(),x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__10241__auto___32206 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__10241__auto___32207 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32208 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32209 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32210 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32211 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32212 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32215 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32213__auto__","c__32213__auto__",-1207441643,null)),(function (){var x__9870__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32214__auto__","x__32214__auto__",1828902594,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32214__auto__","x__32214__auto__",1828902594,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32213__auto__","c__32213__auto__",-1207441643,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32216 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32217 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32218 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32228 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__32225 = arguments.length;
switch (G__32225) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32230 = arguments.length;
var i__10196__auto___32231 = (0);
while(true){
if((i__10196__auto___32231 < len__10195__auto___32230)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32231]));

var G__32232 = (i__10196__auto___32231 + (1));
i__10196__auto___32231 = G__32232;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__32226 = cljs.analyzer.checked_arrays.call(null);
var G__32226__$1 = (((G__32226 instanceof cljs.core.Keyword))?G__32226.fqn:null);
switch (G__32226__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__32227 = cljs.analyzer.checked_arrays.call(null);
var G__32227__$1 = (((G__32227 instanceof cljs.core.Keyword))?G__32227.fqn:null);
switch (G__32227__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9870__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq32220){
var G__32221 = cljs.core.first.call(null,seq32220);
var seq32220__$1 = cljs.core.next.call(null,seq32220);
var G__32222 = cljs.core.first.call(null,seq32220__$1);
var seq32220__$2 = cljs.core.next.call(null,seq32220__$1);
var G__32223 = cljs.core.first.call(null,seq32220__$2);
var seq32220__$3 = cljs.core.next.call(null,seq32220__$2);
var G__32224 = cljs.core.first.call(null,seq32220__$3);
var seq32220__$4 = cljs.core.next.call(null,seq32220__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__32221,G__32222,G__32223,G__32224,seq32220__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__10241__auto___32245 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__32242 = arguments.length;
switch (G__32242) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32247 = arguments.length;
var i__10196__auto___32248 = (0);
while(true){
if((i__10196__auto___32248 < len__10195__auto___32247)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32248]));

var G__32249 = (i__10196__auto___32248 + (1));
i__10196__auto___32248 = G__32249;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10219__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__32243 = cljs.analyzer.checked_arrays.call(null);
var G__32243__$1 = (((G__32243 instanceof cljs.core.Keyword))?G__32243.fqn:null);
switch (G__32243__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$2);
})(),x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__32244 = cljs.analyzer.checked_arrays.call(null);
var G__32244__$1 = (((G__32244 instanceof cljs.core.Keyword))?G__32244.fqn:null);
switch (G__32244__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9870__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq32236){
var G__32237 = cljs.core.first.call(null,seq32236);
var seq32236__$1 = cljs.core.next.call(null,seq32236);
var G__32238 = cljs.core.first.call(null,seq32236__$1);
var seq32236__$2 = cljs.core.next.call(null,seq32236__$1);
var G__32239 = cljs.core.first.call(null,seq32236__$2);
var seq32236__$3 = cljs.core.next.call(null,seq32236__$2);
var G__32240 = cljs.core.first.call(null,seq32236__$3);
var seq32236__$4 = cljs.core.next.call(null,seq32236__$3);
var G__32241 = cljs.core.first.call(null,seq32236__$4);
var seq32236__$5 = cljs.core.next.call(null,seq32236__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__32237,G__32238,G__32239,G__32240,G__32241,seq32236__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__10241__auto___32252 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__10241__auto___32253 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$2);
})(),x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__10241__auto___32261 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__32260 = arguments.length;
switch (G__32260) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32263 = arguments.length;
var i__10196__auto___32264 = (0);
while(true){
if((i__10196__auto___32264 < len__10195__auto___32263)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32264]));

var G__32265 = (i__10196__auto___32264 + (1));
i__10196__auto___32264 = G__32265;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq32255){
var G__32256 = cljs.core.first.call(null,seq32255);
var seq32255__$1 = cljs.core.next.call(null,seq32255);
var G__32257 = cljs.core.first.call(null,seq32255__$1);
var seq32255__$2 = cljs.core.next.call(null,seq32255__$1);
var G__32258 = cljs.core.first.call(null,seq32255__$2);
var seq32255__$3 = cljs.core.next.call(null,seq32255__$2);
var G__32259 = cljs.core.first.call(null,seq32255__$3);
var seq32255__$4 = cljs.core.next.call(null,seq32255__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__32256,G__32257,G__32258,G__32259,seq32255__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__10241__auto___32266 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__10241__auto___32267 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__10241__auto___32268 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__10241__auto___32269 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__10241__auto___32270 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__10241__auto___32271 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__10241__auto___32272 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__10241__auto___32273 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__10241__auto___32274 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__10241__auto___32278 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32279 = arguments.length;
var i__10196__auto___32280 = (0);
while(true){
if((i__10196__auto___32280 < len__10195__auto___32279)){
args__10202__auto__.push((arguments[i__10196__auto___32280]));

var G__32281 = (i__10196__auto___32280 + (1));
i__10196__auto___32280 = G__32281;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq32275){
var G__32276 = cljs.core.first.call(null,seq32275);
var seq32275__$1 = cljs.core.next.call(null,seq32275);
var G__32277 = cljs.core.first.call(null,seq32275__$1);
var seq32275__$2 = cljs.core.next.call(null,seq32275__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__32276,G__32277,seq32275__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__10241__auto___32285 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32286 = arguments.length;
var i__10196__auto___32287 = (0);
while(true){
if((i__10196__auto___32287 < len__10195__auto___32286)){
args__10202__auto__.push((arguments[i__10196__auto___32287]));

var G__32288 = (i__10196__auto___32287 + (1));
i__10196__auto___32287 = G__32288;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq32282){
var G__32283 = cljs.core.first.call(null,seq32282);
var seq32282__$1 = cljs.core.next.call(null,seq32282);
var G__32284 = cljs.core.first.call(null,seq32282__$1);
var seq32282__$2 = cljs.core.next.call(null,seq32282__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__32283,G__32284,seq32282__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__10241__auto___32289 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__10241__auto___32290 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__10241__auto___32294 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32295 = arguments.length;
var i__10196__auto___32296 = (0);
while(true){
if((i__10196__auto___32296 < len__10195__auto___32295)){
args__10202__auto__.push((arguments[i__10196__auto___32296]));

var G__32297 = (i__10196__auto___32296 + (1));
i__10196__auto___32296 = G__32297;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq32291){
var G__32292 = cljs.core.first.call(null,seq32291);
var seq32291__$1 = cljs.core.next.call(null,seq32291);
var G__32293 = cljs.core.first.call(null,seq32291__$1);
var seq32291__$2 = cljs.core.next.call(null,seq32291__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__32292,G__32293,seq32291__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__10241__auto___32298 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__10241__auto___32299 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__10241__auto___32303 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32304 = arguments.length;
var i__10196__auto___32305 = (0);
while(true){
if((i__10196__auto___32305 < len__10195__auto___32304)){
args__10202__auto__.push((arguments[i__10196__auto___32305]));

var G__32306 = (i__10196__auto___32305 + (1));
i__10196__auto___32305 = G__32306;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq32300){
var G__32301 = cljs.core.first.call(null,seq32300);
var seq32300__$1 = cljs.core.next.call(null,seq32300);
var G__32302 = cljs.core.first.call(null,seq32300__$1);
var seq32300__$2 = cljs.core.next.call(null,seq32300__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__32301,G__32302,seq32300__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__10241__auto___32310 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32311 = arguments.length;
var i__10196__auto___32312 = (0);
while(true){
if((i__10196__auto___32312 < len__10195__auto___32311)){
args__10202__auto__.push((arguments[i__10196__auto___32312]));

var G__32313 = (i__10196__auto___32312 + (1));
i__10196__auto___32312 = G__32313;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq32307){
var G__32308 = cljs.core.first.call(null,seq32307);
var seq32307__$1 = cljs.core.next.call(null,seq32307);
var G__32309 = cljs.core.first.call(null,seq32307__$1);
var seq32307__$2 = cljs.core.next.call(null,seq32307__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__32308,G__32309,seq32307__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__10241__auto___32314 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__10241__auto___32315 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__10241__auto___32316 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__10241__auto___32320 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32321 = arguments.length;
var i__10196__auto___32322 = (0);
while(true){
if((i__10196__auto___32322 < len__10195__auto___32321)){
args__10202__auto__.push((arguments[i__10196__auto___32322]));

var G__32323 = (i__10196__auto___32322 + (1));
i__10196__auto___32322 = G__32323;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq32317){
var G__32318 = cljs.core.first.call(null,seq32317);
var seq32317__$1 = cljs.core.next.call(null,seq32317);
var G__32319 = cljs.core.first.call(null,seq32317__$1);
var seq32317__$2 = cljs.core.next.call(null,seq32317__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__32318,G__32319,seq32317__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__10241__auto___32327 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32328 = arguments.length;
var i__10196__auto___32329 = (0);
while(true){
if((i__10196__auto___32329 < len__10195__auto___32328)){
args__10202__auto__.push((arguments[i__10196__auto___32329]));

var G__32330 = (i__10196__auto___32329 + (1));
i__10196__auto___32329 = G__32330;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq32324){
var G__32325 = cljs.core.first.call(null,seq32324);
var seq32324__$1 = cljs.core.next.call(null,seq32324);
var G__32326 = cljs.core.first.call(null,seq32324__$1);
var seq32324__$2 = cljs.core.next.call(null,seq32324__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__32325,G__32326,seq32324__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__10241__auto___32338 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__32337 = arguments.length;
switch (G__32337) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32340 = arguments.length;
var i__10196__auto___32341 = (0);
while(true){
if((i__10196__auto___32341 < len__10195__auto___32340)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32341]));

var G__32342 = (i__10196__auto___32341 + (1));
i__10196__auto___32341 = G__32342;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq32332){
var G__32333 = cljs.core.first.call(null,seq32332);
var seq32332__$1 = cljs.core.next.call(null,seq32332);
var G__32334 = cljs.core.first.call(null,seq32332__$1);
var seq32332__$2 = cljs.core.next.call(null,seq32332__$1);
var G__32335 = cljs.core.first.call(null,seq32332__$2);
var seq32332__$3 = cljs.core.next.call(null,seq32332__$2);
var G__32336 = cljs.core.first.call(null,seq32332__$3);
var seq32332__$4 = cljs.core.next.call(null,seq32332__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__32333,G__32334,G__32335,G__32336,seq32332__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__10241__auto___32350 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__32349 = arguments.length;
switch (G__32349) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32352 = arguments.length;
var i__10196__auto___32353 = (0);
while(true){
if((i__10196__auto___32353 < len__10195__auto___32352)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32353]));

var G__32354 = (i__10196__auto___32353 + (1));
i__10196__auto___32353 = G__32354;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq32344){
var G__32345 = cljs.core.first.call(null,seq32344);
var seq32344__$1 = cljs.core.next.call(null,seq32344);
var G__32346 = cljs.core.first.call(null,seq32344__$1);
var seq32344__$2 = cljs.core.next.call(null,seq32344__$1);
var G__32347 = cljs.core.first.call(null,seq32344__$2);
var seq32344__$3 = cljs.core.next.call(null,seq32344__$2);
var G__32348 = cljs.core.first.call(null,seq32344__$3);
var seq32344__$4 = cljs.core.next.call(null,seq32344__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__32345,G__32346,G__32347,G__32348,seq32344__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__10241__auto___32362 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__32361 = arguments.length;
switch (G__32361) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32364 = arguments.length;
var i__10196__auto___32365 = (0);
while(true){
if((i__10196__auto___32365 < len__10195__auto___32364)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32365]));

var G__32366 = (i__10196__auto___32365 + (1));
i__10196__auto___32365 = G__32366;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq32356){
var G__32357 = cljs.core.first.call(null,seq32356);
var seq32356__$1 = cljs.core.next.call(null,seq32356);
var G__32358 = cljs.core.first.call(null,seq32356__$1);
var seq32356__$2 = cljs.core.next.call(null,seq32356__$1);
var G__32359 = cljs.core.first.call(null,seq32356__$2);
var seq32356__$3 = cljs.core.next.call(null,seq32356__$2);
var G__32360 = cljs.core.first.call(null,seq32356__$3);
var seq32356__$4 = cljs.core.next.call(null,seq32356__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__32357,G__32358,G__32359,G__32360,seq32356__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__10241__auto___32374 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__32373 = arguments.length;
switch (G__32373) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32376 = arguments.length;
var i__10196__auto___32377 = (0);
while(true){
if((i__10196__auto___32377 < len__10195__auto___32376)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32377]));

var G__32378 = (i__10196__auto___32377 + (1));
i__10196__auto___32377 = G__32378;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq32368){
var G__32369 = cljs.core.first.call(null,seq32368);
var seq32368__$1 = cljs.core.next.call(null,seq32368);
var G__32370 = cljs.core.first.call(null,seq32368__$1);
var seq32368__$2 = cljs.core.next.call(null,seq32368__$1);
var G__32371 = cljs.core.first.call(null,seq32368__$2);
var seq32368__$3 = cljs.core.next.call(null,seq32368__$2);
var G__32372 = cljs.core.first.call(null,seq32368__$3);
var seq32368__$4 = cljs.core.next.call(null,seq32368__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__32369,G__32370,G__32371,G__32372,seq32368__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__10241__auto___32386 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__32385 = arguments.length;
switch (G__32385) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32388 = arguments.length;
var i__10196__auto___32389 = (0);
while(true){
if((i__10196__auto___32389 < len__10195__auto___32388)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32389]));

var G__32390 = (i__10196__auto___32389 + (1));
i__10196__auto___32389 = G__32390;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq32380){
var G__32381 = cljs.core.first.call(null,seq32380);
var seq32380__$1 = cljs.core.next.call(null,seq32380);
var G__32382 = cljs.core.first.call(null,seq32380__$1);
var seq32380__$2 = cljs.core.next.call(null,seq32380__$1);
var G__32383 = cljs.core.first.call(null,seq32380__$2);
var seq32380__$3 = cljs.core.next.call(null,seq32380__$2);
var G__32384 = cljs.core.first.call(null,seq32380__$3);
var seq32380__$4 = cljs.core.next.call(null,seq32380__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__32381,G__32382,G__32383,G__32384,seq32380__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__10241__auto___32398 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__32397 = arguments.length;
switch (G__32397) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32400 = arguments.length;
var i__10196__auto___32401 = (0);
while(true){
if((i__10196__auto___32401 < len__10195__auto___32400)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32401]));

var G__32402 = (i__10196__auto___32401 + (1));
i__10196__auto___32401 = G__32402;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq32392){
var G__32393 = cljs.core.first.call(null,seq32392);
var seq32392__$1 = cljs.core.next.call(null,seq32392);
var G__32394 = cljs.core.first.call(null,seq32392__$1);
var seq32392__$2 = cljs.core.next.call(null,seq32392__$1);
var G__32395 = cljs.core.first.call(null,seq32392__$2);
var seq32392__$3 = cljs.core.next.call(null,seq32392__$2);
var G__32396 = cljs.core.first.call(null,seq32392__$3);
var seq32392__$4 = cljs.core.next.call(null,seq32392__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32393,G__32394,G__32395,G__32396,seq32392__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__10241__auto___32410 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__32409 = arguments.length;
switch (G__32409) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32412 = arguments.length;
var i__10196__auto___32413 = (0);
while(true){
if((i__10196__auto___32413 < len__10195__auto___32412)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32413]));

var G__32414 = (i__10196__auto___32413 + (1));
i__10196__auto___32413 = G__32414;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq32404){
var G__32405 = cljs.core.first.call(null,seq32404);
var seq32404__$1 = cljs.core.next.call(null,seq32404);
var G__32406 = cljs.core.first.call(null,seq32404__$1);
var seq32404__$2 = cljs.core.next.call(null,seq32404__$1);
var G__32407 = cljs.core.first.call(null,seq32404__$2);
var seq32404__$3 = cljs.core.next.call(null,seq32404__$2);
var G__32408 = cljs.core.first.call(null,seq32404__$3);
var seq32404__$4 = cljs.core.next.call(null,seq32404__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__32405,G__32406,G__32407,G__32408,seq32404__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__10241__auto___32422 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__32421 = arguments.length;
switch (G__32421) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32424 = arguments.length;
var i__10196__auto___32425 = (0);
while(true){
if((i__10196__auto___32425 < len__10195__auto___32424)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32425]));

var G__32426 = (i__10196__auto___32425 + (1));
i__10196__auto___32425 = G__32426;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq32416){
var G__32417 = cljs.core.first.call(null,seq32416);
var seq32416__$1 = cljs.core.next.call(null,seq32416);
var G__32418 = cljs.core.first.call(null,seq32416__$1);
var seq32416__$2 = cljs.core.next.call(null,seq32416__$1);
var G__32419 = cljs.core.first.call(null,seq32416__$2);
var seq32416__$3 = cljs.core.next.call(null,seq32416__$2);
var G__32420 = cljs.core.first.call(null,seq32416__$3);
var seq32416__$4 = cljs.core.next.call(null,seq32416__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32417,G__32418,G__32419,G__32420,seq32416__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__10241__auto___32434 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__32433 = arguments.length;
switch (G__32433) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32436 = arguments.length;
var i__10196__auto___32437 = (0);
while(true){
if((i__10196__auto___32437 < len__10195__auto___32436)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32437]));

var G__32438 = (i__10196__auto___32437 + (1));
i__10196__auto___32437 = G__32438;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq32428){
var G__32429 = cljs.core.first.call(null,seq32428);
var seq32428__$1 = cljs.core.next.call(null,seq32428);
var G__32430 = cljs.core.first.call(null,seq32428__$1);
var seq32428__$2 = cljs.core.next.call(null,seq32428__$1);
var G__32431 = cljs.core.first.call(null,seq32428__$2);
var seq32428__$3 = cljs.core.next.call(null,seq32428__$2);
var G__32432 = cljs.core.first.call(null,seq32428__$3);
var seq32428__$4 = cljs.core.next.call(null,seq32428__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32429,G__32430,G__32431,G__32432,seq32428__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__10241__auto___32439 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__10241__auto___32440 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__10241__auto___32441 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32442 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32443 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32453 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__32452 = arguments.length;
switch (G__32452) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32455 = arguments.length;
var i__10196__auto___32456 = (0);
while(true){
if((i__10196__auto___32456 < len__10195__auto___32455)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32456]));

var G__32457 = (i__10196__auto___32456 + (1));
i__10196__auto___32456 = G__32457;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32444__auto__","x__32444__auto__",-296603235,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32445__auto__","y__32445__auto__",-1322697849,null)),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32444__auto__","x__32444__auto__",-296603235,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32445__auto__","y__32445__auto__",-1322697849,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32444__auto__","x__32444__auto__",-296603235,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32445__auto__","y__32445__auto__",-1322697849,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq32447){
var G__32448 = cljs.core.first.call(null,seq32447);
var seq32447__$1 = cljs.core.next.call(null,seq32447);
var G__32449 = cljs.core.first.call(null,seq32447__$1);
var seq32447__$2 = cljs.core.next.call(null,seq32447__$1);
var G__32450 = cljs.core.first.call(null,seq32447__$2);
var seq32447__$3 = cljs.core.next.call(null,seq32447__$2);
var G__32451 = cljs.core.first.call(null,seq32447__$3);
var seq32447__$4 = cljs.core.next.call(null,seq32447__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__32448,G__32449,G__32450,G__32451,seq32447__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__10241__auto___32467 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__32466 = arguments.length;
switch (G__32466) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32469 = arguments.length;
var i__10196__auto___32470 = (0);
while(true){
if((i__10196__auto___32470 < len__10195__auto___32469)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32470]));

var G__32471 = (i__10196__auto___32470 + (1));
i__10196__auto___32470 = G__32471;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32458__auto__","x__32458__auto__",-444826648,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32459__auto__","y__32459__auto__",11218094,null)),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32458__auto__","x__32458__auto__",-444826648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32459__auto__","y__32459__auto__",11218094,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32458__auto__","x__32458__auto__",-444826648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32459__auto__","y__32459__auto__",11218094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq32461){
var G__32462 = cljs.core.first.call(null,seq32461);
var seq32461__$1 = cljs.core.next.call(null,seq32461);
var G__32463 = cljs.core.first.call(null,seq32461__$1);
var seq32461__$2 = cljs.core.next.call(null,seq32461__$1);
var G__32464 = cljs.core.first.call(null,seq32461__$2);
var seq32461__$3 = cljs.core.next.call(null,seq32461__$2);
var G__32465 = cljs.core.first.call(null,seq32461__$3);
var seq32461__$4 = cljs.core.next.call(null,seq32461__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__32462,G__32463,G__32464,G__32465,seq32461__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__10241__auto___32472 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__10241__auto___32473 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__10241__auto___32481 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__32480 = arguments.length;
switch (G__32480) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32483 = arguments.length;
var i__10196__auto___32484 = (0);
while(true){
if((i__10196__auto___32484 < len__10195__auto___32483)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32484]));

var G__32485 = (i__10196__auto___32484 + (1));
i__10196__auto___32484 = G__32485;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq32475){
var G__32476 = cljs.core.first.call(null,seq32475);
var seq32475__$1 = cljs.core.next.call(null,seq32475);
var G__32477 = cljs.core.first.call(null,seq32475__$1);
var seq32475__$2 = cljs.core.next.call(null,seq32475__$1);
var G__32478 = cljs.core.first.call(null,seq32475__$2);
var seq32475__$3 = cljs.core.next.call(null,seq32475__$2);
var G__32479 = cljs.core.first.call(null,seq32475__$3);
var seq32475__$4 = cljs.core.next.call(null,seq32475__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__32476,G__32477,G__32478,G__32479,seq32475__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__10241__auto___32493 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__32492 = arguments.length;
switch (G__32492) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32495 = arguments.length;
var i__10196__auto___32496 = (0);
while(true){
if((i__10196__auto___32496 < len__10195__auto___32495)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32496]));

var G__32497 = (i__10196__auto___32496 + (1));
i__10196__auto___32496 = G__32497;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq32487){
var G__32488 = cljs.core.first.call(null,seq32487);
var seq32487__$1 = cljs.core.next.call(null,seq32487);
var G__32489 = cljs.core.first.call(null,seq32487__$1);
var seq32487__$2 = cljs.core.next.call(null,seq32487__$1);
var G__32490 = cljs.core.first.call(null,seq32487__$2);
var seq32487__$3 = cljs.core.next.call(null,seq32487__$2);
var G__32491 = cljs.core.first.call(null,seq32487__$3);
var seq32487__$4 = cljs.core.next.call(null,seq32487__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__32488,G__32489,G__32490,G__32491,seq32487__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__10241__auto___32505 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__32504 = arguments.length;
switch (G__32504) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32507 = arguments.length;
var i__10196__auto___32508 = (0);
while(true){
if((i__10196__auto___32508 < len__10195__auto___32507)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32508]));

var G__32509 = (i__10196__auto___32508 + (1));
i__10196__auto___32508 = G__32509;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq32499){
var G__32500 = cljs.core.first.call(null,seq32499);
var seq32499__$1 = cljs.core.next.call(null,seq32499);
var G__32501 = cljs.core.first.call(null,seq32499__$1);
var seq32499__$2 = cljs.core.next.call(null,seq32499__$1);
var G__32502 = cljs.core.first.call(null,seq32499__$2);
var seq32499__$3 = cljs.core.next.call(null,seq32499__$2);
var G__32503 = cljs.core.first.call(null,seq32499__$3);
var seq32499__$4 = cljs.core.next.call(null,seq32499__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__32500,G__32501,G__32502,G__32503,seq32499__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__10241__auto___32510 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__10241__auto___32518 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__32517 = arguments.length;
switch (G__32517) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32520 = arguments.length;
var i__10196__auto___32521 = (0);
while(true){
if((i__10196__auto___32521 < len__10195__auto___32520)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32521]));

var G__32522 = (i__10196__auto___32521 + (1));
i__10196__auto___32521 = G__32522;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq32512){
var G__32513 = cljs.core.first.call(null,seq32512);
var seq32512__$1 = cljs.core.next.call(null,seq32512);
var G__32514 = cljs.core.first.call(null,seq32512__$1);
var seq32512__$2 = cljs.core.next.call(null,seq32512__$1);
var G__32515 = cljs.core.first.call(null,seq32512__$2);
var seq32512__$3 = cljs.core.next.call(null,seq32512__$2);
var G__32516 = cljs.core.first.call(null,seq32512__$3);
var seq32512__$4 = cljs.core.next.call(null,seq32512__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__32513,G__32514,G__32515,G__32516,seq32512__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__10241__auto___32530 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__32529 = arguments.length;
switch (G__32529) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32532 = arguments.length;
var i__10196__auto___32533 = (0);
while(true){
if((i__10196__auto___32533 < len__10195__auto___32532)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32533]));

var G__32534 = (i__10196__auto___32533 + (1));
i__10196__auto___32533 = G__32534;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq32524){
var G__32525 = cljs.core.first.call(null,seq32524);
var seq32524__$1 = cljs.core.next.call(null,seq32524);
var G__32526 = cljs.core.first.call(null,seq32524__$1);
var seq32524__$2 = cljs.core.next.call(null,seq32524__$1);
var G__32527 = cljs.core.first.call(null,seq32524__$2);
var seq32524__$3 = cljs.core.next.call(null,seq32524__$2);
var G__32528 = cljs.core.first.call(null,seq32524__$3);
var seq32524__$4 = cljs.core.next.call(null,seq32524__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__32525,G__32526,G__32527,G__32528,seq32524__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__10241__auto___32535 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__10241__auto___32536 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__10241__auto___32537 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__10241__auto___32538 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__10241__auto___32539 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__10241__auto___32540 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__10241__auto___32541 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__10241__auto___32542 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__10241__auto___32543 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__10241__auto___32544 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__9870__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__10241__auto___32546 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32545__auto__","h__32545__auto__",75484345,null)),(function (){var x__9870__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32545__auto__","h__32545__auto__",75484345,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32545__auto__","h__32545__auto__",75484345,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32545__auto__","h__32545__auto__",75484345,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32545__auto__","h__32545__auto__",75484345,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32545__auto__","h__32545__auto__",75484345,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32547__auto__","x__32547__auto__",568559922,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32547__auto__","x__32547__auto__",568559922,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
var ret__10241__auto___32555 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32556 = arguments.length;
var i__10196__auto___32557 = (0);
while(true){
if((i__10196__auto___32557 < len__10195__auto___32556)){
args__10202__auto__.push((arguments[i__10196__auto___32557]));

var G__32558 = (i__10196__auto___32557 + (1));
i__10196__auto___32557 = G__32558;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((6) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__10203__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq32548){
var G__32549 = cljs.core.first.call(null,seq32548);
var seq32548__$1 = cljs.core.next.call(null,seq32548);
var G__32550 = cljs.core.first.call(null,seq32548__$1);
var seq32548__$2 = cljs.core.next.call(null,seq32548__$1);
var G__32551 = cljs.core.first.call(null,seq32548__$2);
var seq32548__$3 = cljs.core.next.call(null,seq32548__$2);
var G__32552 = cljs.core.first.call(null,seq32548__$3);
var seq32548__$4 = cljs.core.next.call(null,seq32548__$3);
var G__32553 = cljs.core.first.call(null,seq32548__$4);
var seq32548__$5 = cljs.core.next.call(null,seq32548__$4);
var G__32554 = cljs.core.first.call(null,seq32548__$5);
var seq32548__$6 = cljs.core.next.call(null,seq32548__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__32549,G__32550,G__32551,G__32552,G__32553,G__32554,seq32548__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = clojure.walk.postwalk.call(null,(function (p1__32559_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__32559_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__32559_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__32559_SHARP_));
} else {
return p1__32559_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
var ret__10241__auto___32564 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__32560,fkv){
var vec__32561 = p__32560;
var f1 = cljs.core.nth.call(null,vec__32561,(0),null);
var k = cljs.core.nth.call(null,vec__32561,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__10241__auto___32568 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32569 = arguments.length;
var i__10196__auto___32570 = (0);
while(true){
if((i__10196__auto___32570 < len__10195__auto___32569)){
args__10202__auto__.push((arguments[i__10196__auto___32570]));

var G__32571 = (i__10196__auto___32570 + (1));
i__10196__auto___32570 = G__32571;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__9870__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__9870__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),locals,(function (){var x__9870__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),locals,(function (){var x__9870__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq32565){
var G__32566 = cljs.core.first.call(null,seq32565);
var seq32565__$1 = cljs.core.next.call(null,seq32565);
var G__32567 = cljs.core.first.call(null,seq32565__$1);
var seq32565__$2 = cljs.core.next.call(null,seq32565__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__32566,G__32567,seq32565__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__10241__auto___32576 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32577 = arguments.length;
var i__10196__auto___32578 = (0);
while(true){
if((i__10196__auto___32578 < len__10195__auto___32577)){
args__10202__auto__.push((arguments[i__10196__auto___32578]));

var G__32579 = (i__10196__auto___32578 + (1));
i__10196__auto___32578 = G__32579;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq32572){
var G__32573 = cljs.core.first.call(null,seq32572);
var seq32572__$1 = cljs.core.next.call(null,seq32572);
var G__32574 = cljs.core.first.call(null,seq32572__$1);
var seq32572__$2 = cljs.core.next.call(null,seq32572__$1);
var G__32575 = cljs.core.first.call(null,seq32572__$2);
var seq32572__$3 = cljs.core.next.call(null,seq32572__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32573,G__32574,G__32575,seq32572__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__10241__auto___32584 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32585 = arguments.length;
var i__10196__auto___32586 = (0);
while(true){
if((i__10196__auto___32586 < len__10195__auto___32585)){
args__10202__auto__.push((arguments[i__10196__auto___32586]));

var G__32587 = (i__10196__auto___32586 + (1));
i__10196__auto___32586 = G__32587;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq32580){
var G__32581 = cljs.core.first.call(null,seq32580);
var seq32580__$1 = cljs.core.next.call(null,seq32580);
var G__32582 = cljs.core.first.call(null,seq32580__$1);
var seq32580__$2 = cljs.core.next.call(null,seq32580__$1);
var G__32583 = cljs.core.first.call(null,seq32580__$2);
var seq32580__$3 = cljs.core.next.call(null,seq32580__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__32581,G__32582,G__32583,seq32580__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__10241__auto___32588 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__10241__auto___32593 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32594 = arguments.length;
var i__10196__auto___32595 = (0);
while(true){
if((i__10196__auto___32595 < len__10195__auto___32594)){
args__10202__auto__.push((arguments[i__10196__auto___32595]));

var G__32596 = (i__10196__auto___32595 + (1));
i__10196__auto___32595 = G__32596;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq32589){
var G__32590 = cljs.core.first.call(null,seq32589);
var seq32589__$1 = cljs.core.next.call(null,seq32589);
var G__32591 = cljs.core.first.call(null,seq32589__$1);
var seq32589__$2 = cljs.core.next.call(null,seq32589__$1);
var G__32592 = cljs.core.first.call(null,seq32589__$2);
var seq32589__$3 = cljs.core.next.call(null,seq32589__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__32590,G__32591,G__32592,seq32589__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__5455__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__5455__auto__)){
var var$ = temp__5455__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__8904__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8904__auto__)){
var and__8904__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__8904__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__5455__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__5455__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__32597 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__32598 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__32597;
s = G__32598;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__32599){
var vec__32600 = p__32599;
var p = cljs.core.nth.call(null,vec__32600,(0),null);
var sigs = cljs.core.nth.call(null,vec__32600,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9870__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__32600,p,sigs){
return (function (p__32603){
var vec__32604 = p__32603;
var seq__32605 = cljs.core.seq.call(null,vec__32604);
var first__32606 = cljs.core.first.call(null,seq__32605);
var seq__32605__$1 = cljs.core.next.call(null,seq__32605);
var f = first__32606;
var meths = seq__32605__$1;
var form = vec__32604;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(psym,pfn_prefix,vec__32600,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9870__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9870__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__9870__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__32607){
var vec__32608 = p__32607;
var seq__32609 = cljs.core.seq.call(null,vec__32608);
var first__32610 = cljs.core.first.call(null,seq__32609);
var seq__32609__$1 = cljs.core.next.call(null,seq__32609);
var vec__32611 = first__32610;
var seq__32612 = cljs.core.seq.call(null,vec__32611);
var first__32613 = cljs.core.first.call(null,seq__32612);
var seq__32612__$1 = cljs.core.next.call(null,seq__32612);
var this$ = first__32613;
var args = seq__32612__$1;
var sig = vec__32611;
var body = seq__32609__$1;
var x__9870__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__32614){
var vec__32615 = p__32614;
var seq__32616 = cljs.core.seq.call(null,vec__32615);
var first__32617 = cljs.core.first.call(null,seq__32616);
var seq__32616__$1 = cljs.core.next.call(null,seq__32616);
var vec__32618 = first__32617;
var seq__32619 = cljs.core.seq.call(null,vec__32618);
var first__32620 = cljs.core.first.call(null,seq__32619);
var seq__32619__$1 = cljs.core.next.call(null,seq__32619);
var this$ = first__32620;
var args = seq__32619__$1;
var sig = vec__32618;
var body = seq__32616__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9870__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__32621){
var vec__32622 = p__32621;
var seq__32623 = cljs.core.seq.call(null,vec__32622);
var first__32624 = cljs.core.first.call(null,seq__32623);
var seq__32623__$1 = cljs.core.next.call(null,seq__32623);
var vec__32625 = first__32624;
var seq__32626 = cljs.core.seq.call(null,vec__32625);
var first__32627 = cljs.core.first.call(null,seq__32626);
var seq__32626__$1 = cljs.core.next.call(null,seq__32626);
var this$ = first__32627;
var args = seq__32626__$1;
var sig = vec__32625;
var body = seq__32623__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9870__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__32628){
var vec__32629 = p__32628;
var seq__32630 = cljs.core.seq.call(null,vec__32629);
var first__32631 = cljs.core.first.call(null,seq__32630);
var seq__32630__$1 = cljs.core.next.call(null,seq__32630);
var vec__32632 = first__32631;
var seq__32633 = cljs.core.seq.call(null,vec__32632);
var first__32634 = cljs.core.first.call(null,seq__32633);
var seq__32633__$1 = cljs.core.next.call(null,seq__32633);
var this$ = first__32634;
var args = seq__32633__$1;
var sig = vec__32632;
var body = seq__32630__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9870__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__32636){
var vec__32637 = p__32636;
var seq__32638 = cljs.core.seq.call(null,vec__32637);
var first__32639 = cljs.core.first.call(null,seq__32638);
var seq__32638__$1 = cljs.core.next.call(null,seq__32638);
var f = first__32639;
var meths = seq__32638__$1;
var form = vec__32637;
var vec__32640 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__32640,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__32640,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__32640,f__$1,meths__$1,vec__32637,seq__32638,first__32639,seq__32638__$1,f,meths,form){
return (function (p1__32635_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__32635_SHARP_);
});})(vec__32640,f__$1,meths__$1,vec__32637,seq__32638,first__32639,seq__32638__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__32644){
var vec__32645 = p__32644;
var seq__32646 = cljs.core.seq.call(null,vec__32645);
var first__32647 = cljs.core.first.call(null,seq__32646);
var seq__32646__$1 = cljs.core.next.call(null,seq__32646);
var f = first__32647;
var meths = seq__32646__$1;
var form = vec__32645;
return cljs.core.map.call(null,((function (vec__32645,seq__32646,first__32647,seq__32646__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(vec__32645,seq__32646,first__32647,seq__32646__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__32645,seq__32646,first__32647,seq__32646__$1,f,meths,form){
return (function (p1__32643_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__32643_SHARP_);
});})(vec__32645,seq__32646,first__32647,seq__32646__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__32649){
var vec__32650 = p__32649;
var seq__32651 = cljs.core.seq.call(null,vec__32650);
var first__32652 = cljs.core.first.call(null,seq__32651);
var seq__32651__$1 = cljs.core.next.call(null,seq__32651);
var f = first__32652;
var meths = seq__32651__$1;
var form = vec__32650;
var meths__$1 = cljs.core.map.call(null,((function (vec__32650,seq__32651,first__32652,seq__32651__$1,f,meths,form){
return (function (p1__32648_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__32648_SHARP_);
});})(vec__32650,seq__32651,first__32652,seq__32651__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9870__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__9870__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__9870__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__9870__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__32653){
var vec__32654 = p__32653;
var seq__32655 = cljs.core.seq.call(null,vec__32654);
var first__32656 = cljs.core.first.call(null,seq__32655);
var seq__32655__$1 = cljs.core.next.call(null,seq__32655);
var f = first__32656;
var meths = seq__32655__$1;
var form = vec__32654;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__32654,seq__32655,first__32656,seq__32655__$1,f,meths,form){
return (function (p__32657){
var vec__32658 = p__32657;
var seq__32659 = cljs.core.seq.call(null,vec__32658);
var first__32660 = cljs.core.first.call(null,seq__32659);
var seq__32659__$1 = cljs.core.next.call(null,seq__32659);
var sig = first__32660;
var body = seq__32659__$1;
var meth = vec__32658;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(pf,vec__32654,seq__32655,first__32656,seq__32655__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__32661){
var vec__32662 = p__32661;
var p = cljs.core.nth.call(null,vec__32662,(0),null);
var sigs = cljs.core.nth.call(null,vec__32662,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__32662,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__32662,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__32665 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__32665,(0),null);
var sigs = cljs.core.nth.call(null,vec__32665,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_32668 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_32668))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__32669 = cljs.core.next.call(null,sigs__$1);
var G__32670 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__32669;
seen = G__32670;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_32674 = cljs.core.PersistentHashSet.EMPTY;
var methods_32675__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_32675__$1)){
var vec__32671_32676 = cljs.core.first.call(null,methods_32675__$1);
var fname_32677 = cljs.core.nth.call(null,vec__32671_32676,(0),null);
var method_32678 = vec__32671_32676;
if(cljs.core.contains_QMARK_.call(null,seen_32674,fname_32677)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_32677], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_32678);

var G__32679 = cljs.core.conj.call(null,seen_32674,fname_32677);
var G__32680 = cljs.core.next.call(null,methods_32675__$1);
seen_32674 = G__32679;
methods_32675__$1 = G__32680;
continue;
} else {
}
break;
}

var G__32681 = cljs.core.conj.call(null,protos,proto);
var G__32682 = impls__$2;
protos = G__32681;
impls__$1 = G__32682;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__10241__auto___32691 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32692 = arguments.length;
var i__10196__auto___32693 = (0);
while(true){
if((i__10196__auto___32693 < len__10195__auto___32692)){
args__10202__auto__.push((arguments[i__10196__auto___32693]));

var G__32694 = (i__10196__auto___32693 + (1));
i__10196__auto___32693 = G__32694;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__32688 = (function (){var temp__5455__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__32688,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__32688,(1),null);
if(cljs.core.truth_((function (){var and__8904__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__8904__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__32688,type,assign_impls){
return (function (p1__32683_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__32683_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__32688,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq32684){
var G__32685 = cljs.core.first.call(null,seq32684);
var seq32684__$1 = cljs.core.next.call(null,seq32684);
var G__32686 = cljs.core.first.call(null,seq32684__$1);
var seq32684__$2 = cljs.core.next.call(null,seq32684__$1);
var G__32687 = cljs.core.first.call(null,seq32684__$2);
var seq32684__$3 = cljs.core.next.call(null,seq32684__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__32685,G__32686,G__32687,seq32684__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__32696){
var vec__32697 = p__32696;
var f = cljs.core.nth.call(null,vec__32697,(0),null);
var sigs = cljs.core.nth.call(null,vec__32697,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__32697,f,sigs){
return (function (p1__32695_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__32695_SHARP_),cljs.core.nnext.call(null,p1__32695_SHARP_));
});})(vec__32697,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__32701 = arguments.length;
switch (G__32701) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__32703 = ret__$1;
var G__32704 = specs__$2;
ret = G__32703;
specs__$1 = G__32704;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__32705_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__32705_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9870__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__10241__auto___32717 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32718 = arguments.length;
var i__10196__auto___32719 = (0);
while(true){
if((i__10196__auto___32719 < len__10195__auto___32718)){
args__10202__auto__.push((arguments[i__10196__auto___32719]));

var G__32720 = (i__10196__auto___32719 + (1));
i__10196__auto___32719 = G__32720;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((4) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10203__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__32714 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__32714,(0),null);
var pmasks = cljs.core.nth.call(null,vec__32714,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__9870__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9870__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9870__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9870__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__9870__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9870__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32706__auto__","this__32706__auto__",-1039791121,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32707__auto__","writer__32707__auto__",-1583496699,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__32708__auto__","opt__32708__auto__",564901017,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32707__auto__","writer__32707__auto__",-1583496699,null)),(function (){var x__9870__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq32709){
var G__32710 = cljs.core.first.call(null,seq32709);
var seq32709__$1 = cljs.core.next.call(null,seq32709);
var G__32711 = cljs.core.first.call(null,seq32709__$1);
var seq32709__$2 = cljs.core.next.call(null,seq32709__$1);
var G__32712 = cljs.core.first.call(null,seq32709__$2);
var seq32709__$3 = cljs.core.next.call(null,seq32709__$2);
var G__32713 = cljs.core.first.call(null,seq32709__$3);
var seq32709__$4 = cljs.core.next.call(null,seq32709__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__32710,G__32711,G__32712,G__32713,seq32709__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__32721_SHARP_){
return cljs.core.with_meta.call(null,p1__32721_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32722__auto__","this__32722__auto__",-152657028,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32723__auto__","this__32723__auto__",-1232153229,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32723__auto__","this__32723__auto__",-1232153229,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__32724__auto__","coll__32724__auto__",-989935217,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9870__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__32724__auto__","coll__32724__auto__",-989935217,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__9870__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__9870__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__9870__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9870__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9870__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__9870__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__9870__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32725__auto__","this__32725__auto__",-56582233,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32726__auto__","this__32726__auto__",-670205780,null)),(function (){var x__9870__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32727__auto__","this__32727__auto__",-2051616591,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32728__auto__","k__32728__auto__",-1947249179,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32727__auto__","this__32727__auto__",-2051616591,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32728__auto__","k__32728__auto__",-1947249179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32729__auto__","this__32729__auto__",101076094,null)),(function (){var x__9870__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__32730__auto__","else__32730__auto__",1687441416,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9870__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9870__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__32730__auto__","else__32730__auto__",1687441416,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32731__auto__","this__32731__auto__",-1698477582,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9870__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32732__auto__","this__32732__auto__",-1549898224,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32733__auto__","entry__32733__auto__",-962399484,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32733__auto__","entry__32733__auto__",-962399484,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32732__auto__","this__32732__auto__",-1549898224,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32733__auto__","entry__32733__auto__",-962399484,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32733__auto__","entry__32733__auto__",-962399484,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32732__auto__","this__32732__auto__",-1549898224,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32733__auto__","entry__32733__auto__",-962399484,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32734__auto__","this__32734__auto__",-27249957,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32735__auto__","k__32735__auto__",1095965322,null)),(function (){var x__9870__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32735__auto__","k__32735__auto__",1095965322,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32735__auto__","k__32735__auto__",1095965322,null)),(function (){var x__9870__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32736__auto__","this__32736__auto__",-1475494791,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32737__auto__","k__32737__auto__",-1790492335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32737__auto__","k__32737__auto__",-1790492335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32736__auto__","this__32736__auto__",-1475494791,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32737__auto__","k__32737__auto__",-1790492335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32737__auto__","k__32737__auto__",-1790492335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32739__auto__","this__32739__auto__",-445771778,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__32738_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.keyword.call(null,p1__32738_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = p1__32738_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9870__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32741__auto__","this__32741__auto__",994648074,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32742__auto__","writer__32742__auto__",-1344132160,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32743__auto__","opts__32743__auto__",1338000150,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__32744__auto__","pr-pair__32744__auto__",143473573,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__32745__auto__","keyval__32745__auto__",1849031919,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32742__auto__","writer__32742__auto__",-1344132160,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32743__auto__","opts__32743__auto__",1338000150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__32745__auto__","keyval__32745__auto__",1849031919,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32742__auto__","writer__32742__auto__",-1344132160,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__32744__auto__","pr-pair__32744__auto__",143473573,null)),(function (){var x__9870__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32743__auto__","opts__32743__auto__",1338000150,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__32740_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.keyword.call(null,p1__32740_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = p1__32740_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))], null));
var vec__32746 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__32746,(0),null);
var pmasks = cljs.core.nth.call(null,vec__32746,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__9870__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9870__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9870__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9870__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
var ret__10241__auto___32756 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32757 = arguments.length;
var i__10196__auto___32758 = (0);
while(true){
if((i__10196__auto___32758 < len__10195__auto___32757)){
args__10202__auto__.push((arguments[i__10196__auto___32758]));

var G__32759 = (i__10196__auto___32758 + (1));
i__10196__auto___32758 = G__32759;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((4) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10203__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9870__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9870__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__9870__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32749__auto__","this__32749__auto__",24548228,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9870__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9870__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32749__auto__","this__32749__auto__",24548228,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32750__auto__","writer__32750__auto__",1304922641,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32750__auto__","writer__32750__auto__",1304922641,null)),(function (){var x__9870__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq32751){
var G__32752 = cljs.core.first.call(null,seq32751);
var seq32751__$1 = cljs.core.next.call(null,seq32751);
var G__32753 = cljs.core.first.call(null,seq32751__$1);
var seq32751__$2 = cljs.core.next.call(null,seq32751__$1);
var G__32754 = cljs.core.first.call(null,seq32751__$2);
var seq32751__$3 = cljs.core.next.call(null,seq32751__$2);
var G__32755 = cljs.core.first.call(null,seq32751__$3);
var seq32751__$4 = cljs.core.next.call(null,seq32751__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__32752,G__32753,G__32754,G__32755,seq32751__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__10241__auto___32787 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32788 = arguments.length;
var i__10196__auto___32789 = (0);
while(true){
if((i__10196__auto___32789 < len__10195__auto___32788)){
args__10202__auto__.push((arguments[i__10196__auto___32789]));

var G__32790 = (i__10196__auto___32789 + (1));
i__10196__auto___32789 = G__32790;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__32766 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__32766,(0),null);
var methods$ = cljs.core.nth.call(null,vec__32766,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__32766,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__32766,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__32769 = cljs.core.seq.call(null,methods$);
var chunk__32770 = null;
var count__32771 = (0);
var i__32772 = (0);
while(true){
if((i__32772 < count__32771)){
var vec__32773 = cljs.core._nth.call(null,chunk__32770,i__32772);
var seq__32774 = cljs.core.seq.call(null,vec__32773);
var first__32775 = cljs.core.first.call(null,seq__32774);
var seq__32774__$1 = cljs.core.next.call(null,seq__32774);
var mname = first__32775;
var arities = seq__32774__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__32791 = seq__32769;
var G__32792 = chunk__32770;
var G__32793 = count__32771;
var G__32794 = (i__32772 + (1));
seq__32769 = G__32791;
chunk__32770 = G__32792;
count__32771 = G__32793;
i__32772 = G__32794;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32769);
if(temp__5457__auto__){
var seq__32769__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32769__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__32769__$1);
var G__32795 = cljs.core.chunk_rest.call(null,seq__32769__$1);
var G__32796 = c__9847__auto__;
var G__32797 = cljs.core.count.call(null,c__9847__auto__);
var G__32798 = (0);
seq__32769 = G__32795;
chunk__32770 = G__32796;
count__32771 = G__32797;
i__32772 = G__32798;
continue;
} else {
var vec__32776 = cljs.core.first.call(null,seq__32769__$1);
var seq__32777 = cljs.core.seq.call(null,vec__32776);
var first__32778 = cljs.core.first.call(null,seq__32777);
var seq__32777__$1 = cljs.core.next.call(null,seq__32777);
var mname = first__32778;
var arities = seq__32777__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__32799 = cljs.core.next.call(null,seq__32769__$1);
var G__32800 = null;
var G__32801 = (0);
var G__32802 = (0);
seq__32769 = G__32799;
chunk__32770 = G__32800;
count__32771 = G__32801;
i__32772 = G__32802;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32760__auto__","x__32760__auto__",-1615772429,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32761__auto__","m__32761__auto__",1482096125,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9870__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32760__auto__","x__32760__auto__",-1615772429,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32761__auto__","m__32761__auto__",1482096125,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32761__auto__","m__32761__auto__",1482096125,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32761__auto__","m__32761__auto__",1482096125,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9870__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32761__auto__","m__32761__auto__",1482096125,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32761__auto__","m__32761__auto__",1482096125,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__9870__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__32779){
var vec__32780 = p__32779;
var seq__32781 = cljs.core.seq.call(null,vec__32780);
var first__32782 = cljs.core.first.call(null,seq__32781);
var seq__32781__$1 = cljs.core.next.call(null,seq__32781);
var fname = first__32782;
var sigs = seq__32781__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__32783){
var vec__32784 = p__32783;
var seq__32785 = cljs.core.seq.call(null,vec__32784);
var first__32786 = cljs.core.first.call(null,seq__32785);
var seq__32785__$1 = cljs.core.next.call(null,seq__32785);
var fname = first__32786;
var sigs = seq__32785__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9870__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__32784,seq__32785,first__32786,seq__32785__$1,fname,sigs,p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__32784,seq__32785,first__32786,seq__32785__$1,fname,sigs,p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__32766,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9870__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq32762){
var G__32763 = cljs.core.first.call(null,seq32762);
var seq32762__$1 = cljs.core.next.call(null,seq32762);
var G__32764 = cljs.core.first.call(null,seq32762__$1);
var seq32762__$2 = cljs.core.next.call(null,seq32762__$1);
var G__32765 = cljs.core.first.call(null,seq32762__$2);
var seq32762__$3 = cljs.core.next.call(null,seq32762__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__32763,G__32764,G__32765,seq32762__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__10241__auto___32806 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__32803 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__32803,(0),null);
var bit = cljs.core.nth.call(null,vec__32803,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9870__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9870__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32810 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__32807 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__32807,(0),null);
var bit = cljs.core.nth.call(null,vec__32807,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9870__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9870__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9870__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9870__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9870__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9870__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__10241__auto___32814 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32815 = arguments.length;
var i__10196__auto___32816 = (0);
while(true){
if((i__10196__auto___32816 < len__10195__auto___32815)){
args__10202__auto__.push((arguments[i__10196__auto___32816]));

var G__32817 = (i__10196__auto___32816 + (1));
i__10196__auto___32816 = G__32817;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq32811){
var G__32812 = cljs.core.first.call(null,seq32811);
var seq32811__$1 = cljs.core.next.call(null,seq32811);
var G__32813 = cljs.core.first.call(null,seq32811__$1);
var seq32811__$2 = cljs.core.next.call(null,seq32811__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__32812,G__32813,seq32811__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__10241__auto___32821 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32822 = arguments.length;
var i__10196__auto___32823 = (0);
while(true){
if((i__10196__auto___32823 < len__10195__auto___32822)){
args__10202__auto__.push((arguments[i__10196__auto___32823]));

var G__32824 = (i__10196__auto___32823 + (1));
i__10196__auto___32823 = G__32824;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq32818){
var G__32819 = cljs.core.first.call(null,seq32818);
var seq32818__$1 = cljs.core.next.call(null,seq32818);
var G__32820 = cljs.core.first.call(null,seq32818__$1);
var seq32818__$2 = cljs.core.next.call(null,seq32818__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__32819,G__32820,seq32818__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__10241__auto___32833 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32834 = arguments.length;
var i__10196__auto___32835 = (0);
while(true){
if((i__10196__auto___32835 < len__10195__auto___32834)){
args__10202__auto__.push((arguments[i__10196__auto___32835]));

var G__32836 = (i__10196__auto___32835 + (1));
i__10196__auto___32835 = G__32836;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__32829){
var vec__32830 = p__32829;
var k = cljs.core.nth.call(null,vec__32830,(0),null);
var v = cljs.core.nth.call(null,vec__32830,(1),null);
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq32825){
var G__32826 = cljs.core.first.call(null,seq32825);
var seq32825__$1 = cljs.core.next.call(null,seq32825);
var G__32827 = cljs.core.first.call(null,seq32825__$1);
var seq32825__$2 = cljs.core.next.call(null,seq32825__$1);
var G__32828 = cljs.core.first.call(null,seq32825__$2);
var seq32825__$3 = cljs.core.next.call(null,seq32825__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__32826,G__32827,G__32828,seq32825__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__10241__auto___32841 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32842 = arguments.length;
var i__10196__auto___32843 = (0);
while(true){
if((i__10196__auto___32843 < len__10195__auto___32842)){
args__10202__auto__.push((arguments[i__10196__auto___32843]));

var G__32844 = (i__10196__auto___32843 + (1));
i__10196__auto___32843 = G__32844;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__9870__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq32837){
var G__32838 = cljs.core.first.call(null,seq32837);
var seq32837__$1 = cljs.core.next.call(null,seq32837);
var G__32839 = cljs.core.first.call(null,seq32837__$1);
var seq32837__$2 = cljs.core.next.call(null,seq32837__$1);
var G__32840 = cljs.core.first.call(null,seq32837__$2);
var seq32837__$3 = cljs.core.next.call(null,seq32837__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__32838,G__32839,G__32840,seq32837__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__10241__auto___32857 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32858 = arguments.length;
var i__10196__auto___32859 = (0);
while(true){
if((i__10196__auto___32859 < len__10195__auto___32858)){
args__10202__auto__.push((arguments[i__10196__auto___32859]));

var G__32860 = (i__10196__auto___32859 + (1));
i__10196__auto___32859 = G__32860;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((4) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10203__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__32851 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__32854 = cljs.core.nth.call(null,vec__32851,(0),null);
var a = cljs.core.nth.call(null,vec__32854,(0),null);
var b = cljs.core.nth.call(null,vec__32854,(1),null);
var c = cljs.core.nth.call(null,vec__32854,(2),null);
var clause = vec__32854;
var more = cljs.core.nth.call(null,vec__32851,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9870__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__32845__auto__","p__32845__auto__",584606916,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__32845__auto__","p__32845__auto__",584606916,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq32846){
var G__32847 = cljs.core.first.call(null,seq32846);
var seq32846__$1 = cljs.core.next.call(null,seq32846);
var G__32848 = cljs.core.first.call(null,seq32846__$1);
var seq32846__$2 = cljs.core.next.call(null,seq32846__$1);
var G__32849 = cljs.core.first.call(null,seq32846__$2);
var seq32846__$3 = cljs.core.next.call(null,seq32846__$2);
var G__32850 = cljs.core.first.call(null,seq32846__$3);
var seq32846__$4 = cljs.core.next.call(null,seq32846__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__32847,G__32848,G__32849,G__32850,seq32846__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__8904__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__8904__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__10241__auto___32881 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32882 = arguments.length;
var i__10196__auto___32883 = (0);
while(true){
if((i__10196__auto___32883 < len__10195__auto___32882)){
args__10202__auto__.push((arguments[i__10196__auto___32883]));

var G__32884 = (i__10196__auto___32883 + (1));
i__10196__auto___32883 = G__32884;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__32869){
var vec__32870 = p__32869;
var test = cljs.core.nth.call(null,vec__32870,(0),null);
var expr = cljs.core.nth.call(null,vec__32870,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__32870,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__9870__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__32870,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__9870__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__32861_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__32861_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__32862_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__32862_SHARP_)){
return cljs.core.vec.call(null,p1__32862_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32862_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__32863_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32863_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__32864_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__32864_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__32864_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__32864_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__32877){
var vec__32878 = p__32877;
var m = cljs.core.nth.call(null,vec__32878,(0),null);
var c = cljs.core.nth.call(null,vec__32878,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9870__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__9870__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq32865){
var G__32866 = cljs.core.first.call(null,seq32865);
var seq32865__$1 = cljs.core.next.call(null,seq32865);
var G__32867 = cljs.core.first.call(null,seq32865__$1);
var seq32865__$2 = cljs.core.next.call(null,seq32865__$1);
var G__32868 = cljs.core.first.call(null,seq32865__$2);
var seq32865__$3 = cljs.core.next.call(null,seq32865__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__32866,G__32867,G__32868,seq32865__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__10241__auto___32885 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__10241__auto___32888 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__32887 = arguments.length;
switch (G__32887) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9870__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__9870__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__9870__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__10241__auto___32926 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__32895){
var vec__32896 = p__32895;
var k = cljs.core.nth.call(null,vec__32896,(0),null);
var v = cljs.core.nth.call(null,vec__32896,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__32927__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__32927 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__32928__i = 0, G__32928__a = new Array(arguments.length -  0);
while (G__32928__i < G__32928__a.length) {G__32928__a[G__32928__i] = arguments[G__32928__i + 0]; ++G__32928__i;}
  msg = new cljs.core.IndexedSeq(G__32928__a,0,null);
} 
return G__32927__delegate.call(this,msg);};
G__32927.cljs$lang$maxFixedArity = 0;
G__32927.cljs$lang$applyTo = (function (arglist__32929){
var msg = cljs.core.seq(arglist__32929);
return G__32927__delegate(msg);
});
G__32927.cljs$core$IFn$_invoke$arity$variadic = G__32927__delegate;
return G__32927;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__32899){
var vec__32900 = p__32899;
var seq__32901 = cljs.core.seq.call(null,vec__32900);
var first__32902 = cljs.core.first.call(null,seq__32901);
var seq__32901__$1 = cljs.core.next.call(null,seq__32901);
var vec__32903 = first__32902;
var seq__32904 = cljs.core.seq.call(null,vec__32903);
var first__32905 = cljs.core.first.call(null,seq__32904);
var seq__32904__$1 = cljs.core.next.call(null,seq__32904);
var bind = first__32905;
var first__32905__$1 = cljs.core.first.call(null,seq__32904__$1);
var seq__32904__$2 = cljs.core.next.call(null,seq__32904__$1);
var expr = first__32905__$1;
var mod_pairs = seq__32904__$2;
var vec__32906 = seq__32901__$1;
var vec__32909 = cljs.core.nth.call(null,vec__32906,(0),null);
var _ = cljs.core.nth.call(null,vec__32909,(0),null);
var next_expr = cljs.core.nth.call(null,vec__32909,(1),null);
var next_groups = vec__32906;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__32900,seq__32901,first__32902,seq__32901__$1,vec__32903,seq__32904,first__32905,seq__32904__$1,bind,first__32905__$1,seq__32904__$2,expr,mod_pairs,vec__32906,vec__32909,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__32912){
var vec__32913 = p__32912;
var seq__32914 = cljs.core.seq.call(null,vec__32913);
var first__32915 = cljs.core.first.call(null,seq__32914);
var seq__32914__$1 = cljs.core.next.call(null,seq__32914);
var vec__32916 = first__32915;
var k = cljs.core.nth.call(null,vec__32916,(0),null);
var v = cljs.core.nth.call(null,vec__32916,(1),null);
var pair = vec__32916;
var etc = seq__32914__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__32890__auto__","iterys__32890__auto__",2016774834,null)),(function (){var x__9870__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__32891__auto__","fs__32891__auto__",-821030845,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__32890__auto__","iterys__32890__auto__",2016774834,null)),(function (){var x__9870__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__32891__auto__","fs__32891__auto__",-821030845,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__32891__auto__","fs__32891__auto__",-821030845,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__9870__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__32900,seq__32901,first__32902,seq__32901__$1,vec__32903,seq__32904,first__32905,seq__32904__$1,bind,first__32905__$1,seq__32904__$2,expr,mod_pairs,vec__32906,vec__32909,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__32900,seq__32901,first__32902,seq__32901__$1,vec__32903,seq__32904,first__32905,seq__32904__$1,bind,first__32905__$1,seq__32904__$2,expr,mod_pairs,vec__32906,vec__32909,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__32919){
var vec__32920 = p__32919;
var seq__32921 = cljs.core.seq.call(null,vec__32920);
var first__32922 = cljs.core.first.call(null,seq__32921);
var seq__32921__$1 = cljs.core.next.call(null,seq__32921);
var vec__32923 = first__32922;
var k = cljs.core.nth.call(null,vec__32923,(0),null);
var v = cljs.core.nth.call(null,vec__32923,(1),null);
var pair = vec__32923;
var etc = seq__32921__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9870__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__9870__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9870__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__32900,seq__32901,first__32902,seq__32901__$1,vec__32903,seq__32904,first__32905,seq__32904__$1,bind,first__32905__$1,seq__32904__$2,expr,mod_pairs,vec__32906,vec__32909,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32892__auto__","c__32892__auto__",480680532,null)),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/jocrau/dev/workspaces/clojure-meetup/resources/js/klipse/compiled/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__32893__auto__","size__32893__auto__",-1616898295,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32892__auto__","c__32892__auto__",480680532,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__32893__auto__","size__32893__auto__",-1616898295,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__32893__auto__","size__32893__auto__",-1616898295,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32892__auto__","c__32892__auto__",480680532,null)),(function (){var x__9870__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9870__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9870__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9870__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__32894__auto__","iter__32894__auto__",1360791406,null)),(function (){var x__9870__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__32894__auto__","iter__32894__auto__",1360791406,null)),(function (){var x__9870__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__10241__auto___32935 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32936 = arguments.length;
var i__10196__auto___32937 = (0);
while(true){
if((i__10196__auto___32937 < len__10195__auto___32936)){
args__10202__auto__.push((arguments[i__10196__auto___32937]));

var G__32938 = (i__10196__auto___32937 + (1));
i__10196__auto___32937 = G__32938;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__32939__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__32939 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__32940__i = 0, G__32940__a = new Array(arguments.length -  0);
while (G__32940__i < G__32940__a.length) {G__32940__a[G__32940__i] = arguments[G__32940__i + 0]; ++G__32940__i;}
  msg = new cljs.core.IndexedSeq(G__32940__a,0,null);
} 
return G__32939__delegate.call(this,msg);};
G__32939.cljs$lang$maxFixedArity = 0;
G__32939.cljs$lang$applyTo = (function (arglist__32941){
var msg = cljs.core.seq(arglist__32941);
return G__32939__delegate(msg);
});
G__32939.cljs$core$IFn$_invoke$arity$variadic = G__32939__delegate;
return G__32939;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9870__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9870__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__9870__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32930__auto__","c__32930__auto__",-127177520,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32930__auto__","c__32930__auto__",-127177520,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32930__auto__","c__32930__auto__",-127177520,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9870__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq32931){
var G__32932 = cljs.core.first.call(null,seq32931);
var seq32931__$1 = cljs.core.next.call(null,seq32931);
var G__32933 = cljs.core.first.call(null,seq32931__$1);
var seq32931__$2 = cljs.core.next.call(null,seq32931__$1);
var G__32934 = cljs.core.first.call(null,seq32931__$2);
var seq32931__$3 = cljs.core.next.call(null,seq32931__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__32932,G__32933,G__32934,seq32931__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__10241__auto___32945 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__10202__auto__ = [];
var len__10195__auto___32946 = arguments.length;
var i__10196__auto___32947 = (0);
while(true){
if((i__10196__auto___32947 < len__10195__auto___32946)){
args__10202__auto__.push((arguments[i__10196__auto___32947]));

var G__32948 = (i__10196__auto___32947 + (1));
i__10196__auto___32947 = G__32948;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq32942){
var G__32943 = cljs.core.first.call(null,seq32942);
var seq32942__$1 = cljs.core.next.call(null,seq32942);
var G__32944 = cljs.core.first.call(null,seq32942__$1);
var seq32942__$2 = cljs.core.next.call(null,seq32942__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__32943,G__32944,seq32942__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__10241__auto___32959 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__32958 = arguments.length;
switch (G__32958) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32961 = arguments.length;
var i__10196__auto___32962 = (0);
while(true){
if((i__10196__auto___32962 < len__10195__auto___32961)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32962]));

var G__32963 = (i__10196__auto___32962 + (1));
i__10196__auto___32962 = G__32963;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10219__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__9870__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9870__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__32949__auto__","dims__32949__auto__",-1316552396,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__32950__auto__","dimarray__32950__auto__",-207741967,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9870__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__32951__auto__","i__32951__auto__",850595189,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__32950__auto__","dimarray__32950__auto__",-207741967,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__32950__auto__","dimarray__32950__auto__",-207741967,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__32951__auto__","i__32951__auto__",850595189,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__32949__auto__","dims__32949__auto__",-1316552396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__32950__auto__","dimarray__32950__auto__",-207741967,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq32953){
var G__32954 = cljs.core.first.call(null,seq32953);
var seq32953__$1 = cljs.core.next.call(null,seq32953);
var G__32955 = cljs.core.first.call(null,seq32953__$1);
var seq32953__$2 = cljs.core.next.call(null,seq32953__$1);
var G__32956 = cljs.core.first.call(null,seq32953__$2);
var seq32953__$3 = cljs.core.next.call(null,seq32953__$2);
var G__32957 = cljs.core.first.call(null,seq32953__$3);
var seq32953__$4 = cljs.core.next.call(null,seq32953__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__32954,G__32955,G__32956,G__32957,seq32953__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__10241__auto___32972 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__32970 = arguments.length;
switch (G__32970) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32974 = arguments.length;
var i__10196__auto___32975 = (0);
while(true){
if((i__10196__auto___32975 < len__10195__auto___32974)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32975]));

var G__32976 = (i__10196__auto___32975 + (1));
i__10196__auto___32975 = G__32976;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10219__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_32971 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_32971;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32964__auto__","x__32964__auto__",-860518070,null)),(function (){var x__9870__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32964__auto__","x__32964__auto__",-860518070,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq32966){
var G__32967 = cljs.core.first.call(null,seq32966);
var seq32966__$1 = cljs.core.next.call(null,seq32966);
var G__32968 = cljs.core.first.call(null,seq32966__$1);
var seq32966__$2 = cljs.core.next.call(null,seq32966__$1);
var G__32969 = cljs.core.first.call(null,seq32966__$2);
var seq32966__$3 = cljs.core.next.call(null,seq32966__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__32967,G__32968,G__32969,seq32966__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__10241__auto___32982 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__32981 = arguments.length;
switch (G__32981) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32984 = arguments.length;
var i__10196__auto___32985 = (0);
while(true){
if((i__10196__auto___32985 < len__10195__auto___32984)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32985]));

var G__32986 = (i__10196__auto___32985 + (1));
i__10196__auto___32985 = G__32986;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq32978){
var G__32979 = cljs.core.first.call(null,seq32978);
var seq32978__$1 = cljs.core.next.call(null,seq32978);
var G__32980 = cljs.core.first.call(null,seq32978__$1);
var seq32978__$2 = cljs.core.next.call(null,seq32978__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__32979,G__32980,seq32978__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__10241__auto___32996 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__32993 = arguments.length;
switch (G__32993) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___32998 = arguments.length;
var i__10196__auto___32999 = (0);
while(true){
if((i__10196__auto___32999 < len__10195__auto___32998)){
args_arr__10218__auto__.push((arguments[i__10196__auto___32999]));

var G__33000 = (i__10196__auto___32999 + (1));
i__10196__auto___32999 = G__33000;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__32987_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__32987_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__32988_SHARP_){
var _STAR_cljs_warnings_STAR_32995 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__32988_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_32995;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq32990){
var G__32991 = cljs.core.first.call(null,seq32990);
var seq32990__$1 = cljs.core.next.call(null,seq32990);
var G__32992 = cljs.core.first.call(null,seq32990__$1);
var seq32990__$2 = cljs.core.next.call(null,seq32990__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__32991,G__32992,seq32990__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__10241__auto___33006 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__33005 = arguments.length;
switch (G__33005) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___33008 = arguments.length;
var i__10196__auto___33009 = (0);
while(true){
if((i__10196__auto___33009 < len__10195__auto___33008)){
args_arr__10218__auto__.push((arguments[i__10196__auto___33009]));

var G__33010 = (i__10196__auto___33009 + (1));
i__10196__auto___33009 = G__33010;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq33002){
var G__33003 = cljs.core.first.call(null,seq33002);
var seq33002__$1 = cljs.core.next.call(null,seq33002);
var G__33004 = cljs.core.first.call(null,seq33002__$1);
var seq33002__$2 = cljs.core.next.call(null,seq33002__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__33003,G__33004,seq33002__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__10241__auto___33020 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__33017 = arguments.length;
switch (G__33017) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___33022 = arguments.length;
var i__10196__auto___33023 = (0);
while(true){
if((i__10196__auto___33023 < len__10195__auto___33022)){
args_arr__10218__auto__.push((arguments[i__10196__auto___33023]));

var G__33024 = (i__10196__auto___33023 + (1));
i__10196__auto___33023 = G__33024;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__33011_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33011_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__33012_SHARP_){
var _STAR_cljs_warnings_STAR_33019 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__33012_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_33019;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9870__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq33014){
var G__33015 = cljs.core.first.call(null,seq33014);
var seq33014__$1 = cljs.core.next.call(null,seq33014);
var G__33016 = cljs.core.first.call(null,seq33014__$1);
var seq33014__$2 = cljs.core.next.call(null,seq33014__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__33015,G__33016,seq33014__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__10241__auto___33040 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33041 = arguments.length;
var i__10196__auto___33042 = (0);
while(true){
if((i__10196__auto___33042 < len__10195__auto___33041)){
args__10202__auto__.push((arguments[i__10196__auto___33042]));

var G__33043 = (i__10196__auto___33042 + (1));
i__10196__auto___33042 = G__33043;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__33028){
var vec__33029 = p__33028;
var k = cljs.core.nth.call(null,vec__33029,(0),null);
var _ = cljs.core.nth.call(null,vec__33029,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__9870__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__33032){
var vec__33033 = p__33032;
var k = cljs.core.nth.call(null,vec__33033,(0),null);
var v = cljs.core.nth.call(null,vec__33033,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9870__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__33036){
var vec__33037 = p__33036;
var k = cljs.core.nth.call(null,vec__33037,(0),null);
var v = cljs.core.nth.call(null,vec__33037,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9870__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__9870__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq33025){
var G__33026 = cljs.core.first.call(null,seq33025);
var seq33025__$1 = cljs.core.next.call(null,seq33025);
var G__33027 = cljs.core.first.call(null,seq33025__$1);
var seq33025__$2 = cljs.core.next.call(null,seq33025__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__33026,G__33027,seq33025__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__10241__auto___33044 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__10241__auto___33047 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33045__auto__","a__33045__auto__",158913557,null)),(function (){var x__9870__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__33046__auto__","l__33046__auto__",1347112635,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33045__auto__","a__33045__auto__",158913557,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33045__auto__","a__33045__auto__",158913557,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__33046__auto__","l__33046__auto__",1347112635,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9870__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__10241__auto___33050 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33048__auto__","a__33048__auto__",-1738675655,null)),(function (){var x__9870__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__33049__auto__","l__33049__auto__",818214908,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33048__auto__","a__33048__auto__",-1738675655,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9870__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__33049__auto__","l__33049__auto__",818214908,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9870__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__10241__auto___33056 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33057 = arguments.length;
var i__10196__auto___33058 = (0);
while(true){
if((i__10196__auto___33058 < len__10195__auto___33057)){
args__10202__auto__.push((arguments[i__10196__auto___33058]));

var G__33059 = (i__10196__auto___33058 + (1));
i__10196__auto___33058 = G__33059;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__33051__auto__","n__33051__auto__",-1512205250,null)),(function (){var x__9870__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__33051__auto__","n__33051__auto__",-1512205250,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9870__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq33052){
var G__33053 = cljs.core.first.call(null,seq33052);
var seq33052__$1 = cljs.core.next.call(null,seq33052);
var G__33054 = cljs.core.first.call(null,seq33052__$1);
var seq33052__$2 = cljs.core.next.call(null,seq33052__$1);
var G__33055 = cljs.core.first.call(null,seq33052__$2);
var seq33052__$3 = cljs.core.next.call(null,seq33052__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__33053,G__33054,G__33055,seq33052__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33063 = arguments.length;
var i__10196__auto___33064 = (0);
while(true){
if((i__10196__auto___33064 < len__10195__auto___33063)){
args__10202__auto__.push((arguments[i__10196__auto___33064]));

var G__33065 = (i__10196__auto___33064 + (1));
i__10196__auto___33064 = G__33065;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__33060_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33060_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq33061){
var G__33062 = cljs.core.first.call(null,seq33061);
var seq33061__$1 = cljs.core.next.call(null,seq33061);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__33062,seq33061__$1);
});

var ret__10241__auto___33075 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33076 = arguments.length;
var i__10196__auto___33077 = (0);
while(true){
if((i__10196__auto___33077 < len__10195__auto___33076)){
args__10202__auto__.push((arguments[i__10196__auto___33077]));

var G__33078 = (i__10196__auto___33077 + (1));
i__10196__auto___33077 = G__33078;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__33066__auto__","method-table__33066__auto__",-1482818295,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__33067__auto__","prefer-table__33067__auto__",-1698873999,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__33068__auto__","method-cache__33068__auto__",33152178,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__33069__auto__","cached-hierarchy__33069__auto__",227022085,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__33070__auto__","hierarchy__33070__auto__",-1485901298,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__9870__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9870__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__33070__auto__","hierarchy__33070__auto__",-1485901298,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__33066__auto__","method-table__33066__auto__",-1482818295,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__33067__auto__","prefer-table__33067__auto__",-1698873999,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__33068__auto__","method-cache__33068__auto__",33152178,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__33069__auto__","cached-hierarchy__33069__auto__",227022085,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq33071){
var G__33072 = cljs.core.first.call(null,seq33071);
var seq33071__$1 = cljs.core.next.call(null,seq33071);
var G__33073 = cljs.core.first.call(null,seq33071__$1);
var seq33071__$2 = cljs.core.next.call(null,seq33071__$1);
var G__33074 = cljs.core.first.call(null,seq33071__$2);
var seq33071__$3 = cljs.core.next.call(null,seq33071__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__33072,G__33073,G__33074,seq33071__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__10241__auto___33084 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33085 = arguments.length;
var i__10196__auto___33086 = (0);
while(true){
if((i__10196__auto___33086 < len__10195__auto___33085)){
args__10202__auto__.push((arguments[i__10196__auto___33086]));

var G__33087 = (i__10196__auto___33086 + (1));
i__10196__auto___33086 = G__33087;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((4) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10203__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq33079){
var G__33080 = cljs.core.first.call(null,seq33079);
var seq33079__$1 = cljs.core.next.call(null,seq33079);
var G__33081 = cljs.core.first.call(null,seq33079__$1);
var seq33079__$2 = cljs.core.next.call(null,seq33079__$1);
var G__33082 = cljs.core.first.call(null,seq33079__$2);
var seq33079__$3 = cljs.core.next.call(null,seq33079__$2);
var G__33083 = cljs.core.first.call(null,seq33079__$3);
var seq33079__$4 = cljs.core.next.call(null,seq33079__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__33080,G__33081,G__33082,G__33083,seq33079__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__10241__auto___33090 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33088__auto__","start__33088__auto__",1456258051,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33089__auto__","ret__33089__auto__",1593273266,null)),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33088__auto__","start__33088__auto__",1456258051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33089__auto__","ret__33089__auto__",1593273266,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__10241__auto___33105 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33106 = arguments.length;
var i__10196__auto___33107 = (0);
while(true){
if((i__10196__auto___33107 < len__10195__auto___33106)){
args__10202__auto__.push((arguments[i__10196__auto___33107]));

var G__33108 = (i__10196__auto___33107 + (1));
i__10196__auto___33107 = G__33108;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((5) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10203__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__33102){
var map__33103 = p__33102;
var map__33103__$1 = ((((!((map__33103 == null)))?((((map__33103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33103):map__33103);
var print_fn = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33091__auto__","start__33091__auto__",-1819223039,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33092__auto__","ret__33092__auto__",-916776375,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___33093__auto__","___33093__auto__",751344934,null)),(function (){var x__9870__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__33094__auto__","end__33094__auto__",-798367962,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__33095__auto__","elapsed__33095__auto__",-1303034080,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__33094__auto__","end__33094__auto__",-798367962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33091__auto__","start__33091__auto__",-1819223039,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__9870__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9870__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9870__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__33095__auto__","elapsed__33095__auto__",-1303034080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq33096){
var G__33097 = cljs.core.first.call(null,seq33096);
var seq33096__$1 = cljs.core.next.call(null,seq33096);
var G__33098 = cljs.core.first.call(null,seq33096__$1);
var seq33096__$2 = cljs.core.next.call(null,seq33096__$1);
var G__33099 = cljs.core.first.call(null,seq33096__$2);
var seq33096__$3 = cljs.core.next.call(null,seq33096__$2);
var G__33100 = cljs.core.first.call(null,seq33096__$3);
var seq33096__$4 = cljs.core.next.call(null,seq33096__$3);
var G__33101 = cljs.core.first.call(null,seq33096__$4);
var seq33096__$5 = cljs.core.next.call(null,seq33096__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__33097,G__33098,G__33099,G__33100,G__33101,seq33096__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__33110 = arguments.length;
switch (G__33110) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__9870__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__10241__auto___33112 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__33113_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33113_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__9870__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9870__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9870__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__33114__auto__","arr__33114__auto__",-655056501,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__33115__auto__","s__33115__auto__",-910827700,null)),(function (){var x__9870__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__33115__auto__","s__33115__auto__",-910827700,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__33114__auto__","arr__33114__auto__",-655056501,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__33115__auto__","s__33115__auto__",-910827700,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__33115__auto__","s__33115__auto__",-910827700,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__33114__auto__","arr__33114__auto__",-655056501,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
var ret__10241__auto___33116 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__10241__auto___33122 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33123 = arguments.length;
var i__10196__auto___33124 = (0);
while(true){
if((i__10196__auto___33124 < len__10195__auto___33123)){
args__10202__auto__.push((arguments[i__10196__auto___33124]));

var G__33125 = (i__10196__auto___33124 + (1));
i__10196__auto___33124 = G__33125;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33117__auto__","sb__33117__auto__",-767628277,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33118__auto__","x__33118__auto__",378689417,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33117__auto__","sb__33117__auto__",-767628277,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33118__auto__","x__33118__auto__",378689417,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33117__auto__","sb__33117__auto__",-767628277,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq33119){
var G__33120 = cljs.core.first.call(null,seq33119);
var seq33119__$1 = cljs.core.next.call(null,seq33119);
var G__33121 = cljs.core.first.call(null,seq33119__$1);
var seq33119__$2 = cljs.core.next.call(null,seq33119__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__33120,G__33121,seq33119__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__10241__auto___33130 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33131 = arguments.length;
var i__10196__auto___33132 = (0);
while(true){
if((i__10196__auto___33132 < len__10195__auto___33131)){
args__10202__auto__.push((arguments[i__10196__auto___33132]));

var G__33133 = (i__10196__auto___33132 + (1));
i__10196__auto___33132 = G__33133;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__33126_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = p1__33126_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq33127){
var G__33128 = cljs.core.first.call(null,seq33127);
var seq33127__$1 = cljs.core.next.call(null,seq33127);
var G__33129 = cljs.core.first.call(null,seq33127__$1);
var seq33127__$2 = cljs.core.next.call(null,seq33127__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__33128,G__33129,seq33127__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__10241__auto___33134 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9870__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__10241__auto___33136 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9870__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33135__auto__","this__33135__auto__",-1434102132,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33135__auto__","this__33135__auto__",-1434102132,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__10241__auto___33153 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__33145){
var vec__33146 = p__33145;
var sym = cljs.core.nth.call(null,vec__33146,(0),null);
var _ = cljs.core.nth.call(null,vec__33146,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9870__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__33149){
var vec__33150 = p__33149;
var _ = cljs.core.nth.call(null,vec__33150,(0),null);
var info = cljs.core.nth.call(null,vec__33150,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__10241__auto___33162 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__33158){
var vec__33159 = p__33158;
var ctor = cljs.core.nth.call(null,vec__33159,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__33159,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9870__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__10241__auto___33171 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9870__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__33167){
var vec__33168 = p__33167;
var sym = cljs.core.nth.call(null,vec__33168,(0),null);
var _ = cljs.core.nth.call(null,vec__33168,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9870__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__10241__auto___33172 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__9870__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__10241__auto___33178 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33179 = arguments.length;
var i__10196__auto___33180 = (0);
while(true){
if((i__10196__auto___33180 < len__10195__auto___33179)){
args__10202__auto__.push((arguments[i__10196__auto___33180]));

var G__33181 = (i__10196__auto___33180 + (1));
i__10196__auto___33180 = G__33181;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((4) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10203__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__9870__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__9870__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq33173){
var G__33174 = cljs.core.first.call(null,seq33173);
var seq33173__$1 = cljs.core.next.call(null,seq33173);
var G__33175 = cljs.core.first.call(null,seq33173__$1);
var seq33173__$2 = cljs.core.next.call(null,seq33173__$1);
var G__33176 = cljs.core.first.call(null,seq33173__$2);
var seq33173__$3 = cljs.core.next.call(null,seq33173__$2);
var G__33177 = cljs.core.first.call(null,seq33173__$3);
var seq33173__$4 = cljs.core.next.call(null,seq33173__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33174,G__33175,G__33176,G__33177,seq33173__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__10241__auto___33186 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33187 = arguments.length;
var i__10196__auto___33188 = (0);
while(true){
if((i__10196__auto___33188 < len__10195__auto___33187)){
args__10202__auto__.push((arguments[i__10196__auto___33188]));

var G__33189 = (i__10196__auto___33188 + (1));
i__10196__auto___33188 = G__33189;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq33182){
var G__33183 = cljs.core.first.call(null,seq33182);
var seq33182__$1 = cljs.core.next.call(null,seq33182);
var G__33184 = cljs.core.first.call(null,seq33182__$1);
var seq33182__$2 = cljs.core.next.call(null,seq33182__$1);
var G__33185 = cljs.core.first.call(null,seq33182__$2);
var seq33182__$3 = cljs.core.next.call(null,seq33182__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__33183,G__33184,G__33185,seq33182__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__10241__auto___33193 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33194 = arguments.length;
var i__10196__auto___33195 = (0);
while(true){
if((i__10196__auto___33195 < len__10195__auto___33194)){
args__10202__auto__.push((arguments[i__10196__auto___33195]));

var G__33196 = (i__10196__auto___33195 + (1));
i__10196__auto___33195 = G__33196;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9870__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq33190){
var G__33191 = cljs.core.first.call(null,seq33190);
var seq33190__$1 = cljs.core.next.call(null,seq33190);
var G__33192 = cljs.core.first.call(null,seq33190__$1);
var seq33190__$2 = cljs.core.next.call(null,seq33190__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__33191,G__33192,seq33190__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__10241__auto___33200 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33201 = arguments.length;
var i__10196__auto___33202 = (0);
while(true){
if((i__10196__auto___33202 < len__10195__auto___33201)){
args__10202__auto__.push((arguments[i__10196__auto___33202]));

var G__33203 = (i__10196__auto___33202 + (1));
i__10196__auto___33202 = G__33203;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9870__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq33197){
var G__33198 = cljs.core.first.call(null,seq33197);
var seq33197__$1 = cljs.core.next.call(null,seq33197);
var G__33199 = cljs.core.first.call(null,seq33197__$1);
var seq33197__$2 = cljs.core.next.call(null,seq33197__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__33198,G__33199,seq33197__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__10241__auto___33207 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33208 = arguments.length;
var i__10196__auto___33209 = (0);
while(true){
if((i__10196__auto___33209 < len__10195__auto___33208)){
args__10202__auto__.push((arguments[i__10196__auto___33209]));

var G__33210 = (i__10196__auto___33209 + (1));
i__10196__auto___33209 = G__33210;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9870__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq33204){
var G__33205 = cljs.core.first.call(null,seq33204);
var seq33204__$1 = cljs.core.next.call(null,seq33204);
var G__33206 = cljs.core.first.call(null,seq33204__$1);
var seq33204__$2 = cljs.core.next.call(null,seq33204__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__33205,G__33206,seq33204__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__10241__auto___33214 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33215 = arguments.length;
var i__10196__auto___33216 = (0);
while(true){
if((i__10196__auto___33216 < len__10195__auto___33215)){
args__10202__auto__.push((arguments[i__10196__auto___33216]));

var G__33217 = (i__10196__auto___33216 + (1));
i__10196__auto___33216 = G__33217;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9870__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq33211){
var G__33212 = cljs.core.first.call(null,seq33211);
var seq33211__$1 = cljs.core.next.call(null,seq33211);
var G__33213 = cljs.core.first.call(null,seq33211__$1);
var seq33211__$2 = cljs.core.next.call(null,seq33211__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__33212,G__33213,seq33211__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__10241__auto___33221 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33222 = arguments.length;
var i__10196__auto___33223 = (0);
while(true){
if((i__10196__auto___33223 < len__10195__auto___33222)){
args__10202__auto__.push((arguments[i__10196__auto___33223]));

var G__33224 = (i__10196__auto___33223 + (1));
i__10196__auto___33223 = G__33224;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9870__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq33218){
var G__33219 = cljs.core.first.call(null,seq33218);
var seq33218__$1 = cljs.core.next.call(null,seq33218);
var G__33220 = cljs.core.first.call(null,seq33218__$1);
var seq33218__$2 = cljs.core.next.call(null,seq33218__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__33219,G__33220,seq33218__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__10241__auto___33228 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33229 = arguments.length;
var i__10196__auto___33230 = (0);
while(true){
if((i__10196__auto___33230 < len__10195__auto___33229)){
args__10202__auto__.push((arguments[i__10196__auto___33230]));

var G__33231 = (i__10196__auto___33230 + (1));
i__10196__auto___33230 = G__33231;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9870__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq33225){
var G__33226 = cljs.core.first.call(null,seq33225);
var seq33225__$1 = cljs.core.next.call(null,seq33225);
var G__33227 = cljs.core.first.call(null,seq33225__$1);
var seq33225__$2 = cljs.core.next.call(null,seq33225__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__33226,G__33227,seq33225__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__10241__auto___33232 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__9870__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__10241__auto___33233 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9870__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__10241__auto___33234 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__33235 = form_SINGLEQUOTE_;
var G__33236 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__33235;
form_SINGLEQUOTE_ = G__33236;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9870__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__8904__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__8904__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__8904__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__33238 = arguments.length;
switch (G__33238) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__33239,solo){
var vec__33240 = p__33239;
var seq__33241 = cljs.core.seq.call(null,vec__33240);
var first__33242 = cljs.core.first.call(null,seq__33241);
var seq__33241__$1 = cljs.core.next.call(null,seq__33241);
var arglist = first__33242;
var body = seq__33241__$1;
var method = vec__33240;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__33240,seq__33241,first__33242,seq__33241__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__33240,seq__33241,first__33242,seq__33241__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__33240,seq__33241,first__33242,seq__33241__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__33240,seq__33241,first__33242,seq__33241__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__33240,seq__33241,first__33242,seq__33241__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/jocrau/dev/workspaces/clojure-meetup/resources/js/klipse/compiled/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2999),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2999),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/jocrau/dev/workspaces/clojure-meetup/resources/js/klipse/compiled/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3000),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3000),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
});})(sig,restarg,vec__33240,seq__33241,first__33242,seq__33241__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__33240,seq__33241,first__33242,seq__33241__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),params,(function (){var x__9870__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9870__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});})(sig,restarg,vec__33240,seq__33241,first__33242,seq__33241__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))):null),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__10241__auto___33246 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__33244__auto__","len__33244__auto__",-1104990751,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33245__auto__","i__33245__auto__",-1530845411,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33245__auto__","i__33245__auto__",-1530845411,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__33244__auto__","len__33244__auto__",-1104990751,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__9870__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33245__auto__","i__33245__auto__",-1530845411,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33245__auto__","i__33245__auto__",-1530845411,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__33249,emit_var_QMARK_){
var vec__33250 = p__33249;
var vec__33253 = cljs.core.nth.call(null,vec__33250,(0),null);
var seq__33254 = cljs.core.seq.call(null,vec__33253);
var first__33255 = cljs.core.first.call(null,seq__33254);
var seq__33254__$1 = cljs.core.next.call(null,seq__33254);
var arglist = first__33255;
var body = seq__33254__$1;
var method = vec__33253;
var fdecl = vec__33250;
var dest_args = ((function (vec__33250,vec__33253,seq__33254,first__33255,seq__33254__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__33250,vec__33253,seq__33254,first__33255,seq__33254__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});})(vec__33250,vec__33253,seq__33254,first__33255,seq__33254__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__33250,vec__33253,seq__33254,first__33255,seq__33254__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__9870__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33247__auto__","args__33247__auto__",-199179244,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33247__auto__","args__33247__auto__",-199179244,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33248__auto__","argseq__33248__auto__",-1888801681,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9870__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33247__auto__","args__33247__auto__",-199179244,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/jocrau/dev/workspaces/clojure-meetup/resources/js/klipse/compiled/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33247__auto__","args__33247__auto__",-199179244,null)),(function (){var x__9870__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33248__auto__","argseq__33248__auto__",-1888801681,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9870__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__33264){
var vec__33265 = p__33264;
var seq__33266 = cljs.core.seq.call(null,vec__33265);
var first__33267 = cljs.core.first.call(null,seq__33266);
var seq__33266__$1 = cljs.core.next.call(null,seq__33266);
var sig = first__33267;
var body = seq__33266__$1;
var method = vec__33265;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__33256_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__33256_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__33257_SHARP_){
return fixed_arity.call(null,rname,p1__33257_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__9870__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__33258__auto__","args-arr__33258__auto__",69409440,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__33258__auto__","args-arr__33258__auto__",69409440,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33259__auto__","argseq__33259__auto__",-379963883,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/jocrau/dev/workspaces/clojure-meetup/resources/js/klipse/compiled/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__33258__auto__","args-arr__33258__auto__",69409440,null)),(function (){var x__9870__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33259__auto__","argseq__33259__auto__",-379963883,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__9870__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__9870__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__9870__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto____$1);
})(),x__9870__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__33268__i = 0, G__33268__a = new Array(arguments.length -  3);
while (G__33268__i < G__33268__a.length) {G__33268__a[G__33268__i] = arguments[G__33268__i + 3]; ++G__33268__i;}
  fdecl = new cljs.core.IndexedSeq(G__33268__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__33269){
var _AMPERSAND_form = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var _AMPERSAND_env = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var name = cljs.core.first(arglist__33269);
var fdecl = cljs.core.rest(arglist__33269);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__10202__auto__ = [];
var len__10195__auto___33275 = arguments.length;
var i__10196__auto___33276 = (0);
while(true){
if((i__10196__auto___33276 < len__10195__auto___33275)){
args__10202__auto__.push((arguments[i__10196__auto___33276]));

var G__33277 = (i__10196__auto___33276 + (1));
i__10196__auto___33276 = G__33277;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__9870__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__33278 = cljs.core.cons.call(null,f,p);
var G__33279 = cljs.core.next.call(null,args__$1);
p = G__33278;
args__$1 = G__33279;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__33280 = cljs.core.cons.call(null,f,p);
var G__33281 = cljs.core.next.call(null,args__$1);
p = G__33280;
args__$1 = G__33281;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__33282 = cljs.core.next.call(null,fd);
fd = G__33282;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__33283 = cljs.core.next.call(null,fd);
fd = G__33283;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__9870__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__33284 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__33285 = cljs.core.next.call(null,ds);
acc = G__33284;
ds = G__33285;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__33286 = cljs.core.next.call(null,p);
var G__33287 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__33286;
d = G__33287;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33270__auto__","ret__33270__auto__",-1120746513,null)),(function (){var x__9870__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9870__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33270__auto__","ret__33270__auto__",-1120746513,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq33271){
var G__33272 = cljs.core.first.call(null,seq33271);
var seq33271__$1 = cljs.core.next.call(null,seq33271);
var G__33273 = cljs.core.first.call(null,seq33271__$1);
var seq33271__$2 = cljs.core.next.call(null,seq33271__$1);
var G__33274 = cljs.core.first.call(null,seq33271__$2);
var seq33271__$3 = cljs.core.next.call(null,seq33271__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__33272,G__33273,G__33274,seq33271__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__10241__auto___33292 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__33288 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e33291){var e = e33291;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__33288,(0),null);
var meta = cljs.core.nth.call(null,vec__33288,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9870__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9870__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9870__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})(),(function (){var x__9870__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9870__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map
