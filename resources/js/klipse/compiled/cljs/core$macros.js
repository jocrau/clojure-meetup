// Compiled by ClojureScript 1.10.145 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__4531__auto___33887 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33888 = arguments.length;
var i__4498__auto___33889 = (0);
while(true){
if((i__4498__auto___33889 < len__4497__auto___33888)){
args__4500__auto__.push((arguments[i__4498__auto___33889]));

var G__33890 = (i__4498__auto___33889 + (1));
i__4498__auto___33889 = G__33890;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null)),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__33891 = threaded;
var G__33892 = cljs.core.next.call(null,forms__$1);
x__$1 = G__33891;
forms__$1 = G__33892;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq33883){
var G__33884 = cljs.core.first.call(null,seq33883);
var seq33883__$1 = cljs.core.next.call(null,seq33883);
var G__33885 = cljs.core.first.call(null,seq33883__$1);
var seq33883__$2 = cljs.core.next.call(null,seq33883__$1);
var G__33886 = cljs.core.first.call(null,seq33883__$2);
var seq33883__$3 = cljs.core.next.call(null,seq33883__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__33884,G__33885,G__33886,seq33883__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__4531__auto___33897 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33898 = arguments.length;
var i__4498__auto___33899 = (0);
while(true){
if((i__4498__auto___33899 < len__4497__auto___33898)){
args__4500__auto__.push((arguments[i__4498__auto___33899]));

var G__33900 = (i__4498__auto___33899 + (1));
i__4498__auto___33899 = G__33900;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),cljs.core.next.call(null,form),(new cljs.core.List(null,x__$1,null,(1),null))))),cljs.core.meta.call(null,form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__33901 = threaded;
var G__33902 = cljs.core.next.call(null,forms__$1);
x__$1 = G__33901;
forms__$1 = G__33902;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq33893){
var G__33894 = cljs.core.first.call(null,seq33893);
var seq33893__$1 = cljs.core.next.call(null,seq33893);
var G__33895 = cljs.core.first.call(null,seq33893__$1);
var seq33893__$2 = cljs.core.next.call(null,seq33893__$1);
var G__33896 = cljs.core.first.call(null,seq33893__$2);
var seq33893__$3 = cljs.core.next.call(null,seq33893__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__33894,G__33895,G__33896,seq33893__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__4531__auto___33910 = (function (){
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
var G__33909 = arguments.length;
switch (G__33909) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___33912 = arguments.length;
var i__4498__auto___33913 = (0);
while(true){
if((i__4498__auto___33913 < len__4497__auto___33912)){
args_arr__4512__auto__.push((arguments[i__4498__auto___33913]));

var G__33914 = (i__4498__auto___33913 + (1));
i__4498__auto___33913 = G__33914;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq33904){
var G__33905 = cljs.core.first.call(null,seq33904);
var seq33904__$1 = cljs.core.next.call(null,seq33904);
var G__33906 = cljs.core.first.call(null,seq33904__$1);
var seq33904__$2 = cljs.core.next.call(null,seq33904__$1);
var G__33907 = cljs.core.first.call(null,seq33904__$2);
var seq33904__$3 = cljs.core.next.call(null,seq33904__$2);
var G__33908 = cljs.core.first.call(null,seq33904__$3);
var seq33904__$4 = cljs.core.next.call(null,seq33904__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__33905,G__33906,G__33907,G__33908,seq33904__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__4531__auto___33918 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33919 = arguments.length;
var i__4498__auto___33920 = (0);
while(true){
if((i__4498__auto___33920 < len__4497__auto___33919)){
args__4500__auto__.push((arguments[i__4498__auto___33920]));

var G__33921 = (i__4498__auto___33920 + (1));
i__4498__auto___33920 = G__33921;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq33915){
var G__33916 = cljs.core.first.call(null,seq33915);
var seq33915__$1 = cljs.core.next.call(null,seq33915);
var G__33917 = cljs.core.first.call(null,seq33915__$1);
var seq33915__$2 = cljs.core.next.call(null,seq33915__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__33916,G__33917,seq33915__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__4531__auto___33925 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33926 = arguments.length;
var i__4498__auto___33927 = (0);
while(true){
if((i__4498__auto___33927 < len__4497__auto___33926)){
args__4500__auto__.push((arguments[i__4498__auto___33927]));

var G__33928 = (i__4498__auto___33927 + (1));
i__4498__auto___33927 = G__33928;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,cljs.core.first.call(null,clauses),(new cljs.core.List(null,((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq33922){
var G__33923 = cljs.core.first.call(null,seq33922);
var seq33922__$1 = cljs.core.next.call(null,seq33922);
var G__33924 = cljs.core.first.call(null,seq33922__$1);
var seq33922__$2 = cljs.core.next.call(null,seq33922__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__33923,G__33924,seq33922__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__4531__auto___33933 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33934 = arguments.length;
var i__4498__auto___33935 = (0);
while(true){
if((i__4498__auto___33935 < len__4497__auto___33934)){
args__4500__auto__.push((arguments[i__4498__auto___33935]));

var G__33936 = (i__4498__auto___33935 + (1));
i__4498__auto___33935 = G__33936;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (p1__33929_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.vary_meta.call(null,p1__33929_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true),null,(1),null)),(2),null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq33930){
var G__33931 = cljs.core.first.call(null,seq33930);
var seq33930__$1 = cljs.core.next.call(null,seq33930);
var G__33932 = cljs.core.first.call(null,seq33930__$1);
var seq33930__$2 = cljs.core.next.call(null,seq33930__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__33931,G__33932,seq33930__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__4531__auto___33941 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33942 = arguments.length;
var i__4498__auto___33943 = (0);
while(true){
if((i__4498__auto___33943 < len__4497__auto___33942)){
args__4500__auto__.push((arguments[i__4498__auto___33943]));

var G__33944 = (i__4498__auto___33943 + (1));
i__4498__auto___33943 = G__33944;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gx,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,f),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))));
}
});})(gx))
,forms),(new cljs.core.List(null,gx,null,(1),null)))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq33937){
var G__33938 = cljs.core.first.call(null,seq33937);
var seq33937__$1 = cljs.core.next.call(null,seq33937);
var G__33939 = cljs.core.first.call(null,seq33937__$1);
var seq33937__$2 = cljs.core.next.call(null,seq33937__$1);
var G__33940 = cljs.core.first.call(null,seq33937__$2);
var seq33937__$3 = cljs.core.next.call(null,seq33937__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__33938,G__33939,G__33940,seq33937__$3);
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
var G__33945 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__33946 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__33945;
s = G__33946;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,((function (impls){
return (function (p__33947){
var vec__33948 = p__33947;
var t = cljs.core.nth.call(null,vec__33948,(0),null);
var fs = cljs.core.nth.call(null,vec__33948,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,p,null,(1),null)),fs)));
});})(impls))
,impls))));
});
var ret__4531__auto___33955 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___33956 = arguments.length;
var i__4498__auto___33957 = (0);
while(true){
if((i__4498__auto___33957 < len__4497__auto___33956)){
args__4500__auto__.push((arguments[i__4498__auto___33957]));

var G__33958 = (i__4498__auto___33957 + (1));
i__4498__auto___33957 = G__33958;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq33951){
var G__33952 = cljs.core.first.call(null,seq33951);
var seq33951__$1 = cljs.core.next.call(null,seq33951);
var G__33953 = cljs.core.first.call(null,seq33951__$1);
var seq33951__$2 = cljs.core.next.call(null,seq33951__$1);
var G__33954 = cljs.core.first.call(null,seq33951__$2);
var seq33951__$3 = cljs.core.next.call(null,seq33951__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__33952,G__33953,G__33954,seq33951__$3);
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
var G__33959 = cljs.core.next.call(null,params__$1);
var G__33960 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__33961 = lets;
params__$1 = G__33959;
new_params = G__33960;
lets = G__33961;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__33962 = cljs.core.next.call(null,params__$1);
var G__33963 = cljs.core.conj.call(null,new_params,gparam);
var G__33964 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__33962;
new_params = G__33963;
lets = G__33964;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),body))),null,(1),null)))));
}
break;
}
}
});
var ret__4531__auto___33971 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33972 = arguments.length;
var i__4498__auto___33973 = (0);
while(true){
if((i__4498__auto___33973 < len__4497__auto___33972)){
args__4500__auto__.push((arguments[i__4498__auto___33973]));

var G__33974 = (i__4498__auto___33973 + (1));
i__4498__auto___33973 = G__33974;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__33968 = sig;
var seq__33969 = cljs.core.seq.call(null,vec__33968);
var first__33970 = cljs.core.first.call(null,seq__33969);
var seq__33969__$1 = cljs.core.next.call(null,seq__33969);
var params = first__33970;
var body = seq__33969__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = ((((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__3922__auto__ = conds;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first.call(null,body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (vec__33968,seq__33969,first__33970,seq__33969__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(vec__33968,seq__33969,first__33970,seq__33969__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__33968,seq__33969,first__33970,seq__33969__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(vec__33968,seq__33969,first__33970,seq__33969__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq33965){
var G__33966 = cljs.core.first.call(null,seq33965);
var seq33965__$1 = cljs.core.next.call(null,seq33965);
var G__33967 = cljs.core.first.call(null,seq33965__$1);
var seq33965__$2 = cljs.core.next.call(null,seq33965__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__33966,G__33967,seq33965__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__4531__auto___33979 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33980 = arguments.length;
var i__4498__auto___33981 = (0);
while(true){
if((i__4498__auto___33981 < len__4497__auto___33980)){
args__4500__auto__.push((arguments[i__4498__auto___33981]));

var G__33982 = (i__4498__auto___33981 + (1));
i__4498__auto___33981 = G__33982;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq33975){
var G__33976 = cljs.core.first.call(null,seq33975);
var seq33975__$1 = cljs.core.next.call(null,seq33975);
var G__33977 = cljs.core.first.call(null,seq33975__$1);
var seq33975__$2 = cljs.core.next.call(null,seq33975__$1);
var G__33978 = cljs.core.first.call(null,seq33975__$2);
var seq33975__$3 = cljs.core.next.call(null,seq33975__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__33976,G__33977,G__33978,seq33975__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__4531__auto___33992 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__33991 = arguments.length;
switch (G__33991) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___33994 = arguments.length;
var i__4498__auto___33995 = (0);
while(true){
if((i__4498__auto___33995 < len__4497__auto___33994)){
args_arr__4512__auto__.push((arguments[i__4498__auto___33995]));

var G__33996 = (i__4498__auto___33995 + (1));
i__4498__auto___33995 = G__33996;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4513__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__33983__auto__","temp__33983__auto__",90750604,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__33983__auto__","temp__33983__auto__",90750604,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__33983__auto__","temp__33983__auto__",90750604,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq33985){
var G__33986 = cljs.core.first.call(null,seq33985);
var seq33985__$1 = cljs.core.next.call(null,seq33985);
var G__33987 = cljs.core.first.call(null,seq33985__$1);
var seq33985__$2 = cljs.core.next.call(null,seq33985__$1);
var G__33988 = cljs.core.first.call(null,seq33985__$2);
var seq33985__$3 = cljs.core.next.call(null,seq33985__$2);
var G__33989 = cljs.core.first.call(null,seq33985__$3);
var seq33985__$4 = cljs.core.next.call(null,seq33985__$3);
var G__33990 = cljs.core.first.call(null,seq33985__$4);
var seq33985__$5 = cljs.core.next.call(null,seq33985__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__33986,G__33987,G__33988,G__33989,G__33990,seq33985__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__4531__auto___33999 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__33998 = arguments.length;
switch (G__33998) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null)))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__4531__auto___34006 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34007 = arguments.length;
var i__4498__auto___34008 = (0);
while(true){
if((i__4498__auto___34008 < len__4497__auto___34007)){
args__4500__auto__.push((arguments[i__4498__auto___34008]));

var G__34009 = (i__4498__auto___34008 + (1));
i__4498__auto___34008 = G__34009;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__34001_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__34001_SHARP_);
}),fnspecs))),null,(1),null)),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq34002){
var G__34003 = cljs.core.first.call(null,seq34002);
var seq34002__$1 = cljs.core.next.call(null,seq34002);
var G__34004 = cljs.core.first.call(null,seq34002__$1);
var seq34002__$2 = cljs.core.next.call(null,seq34002__$1);
var G__34005 = cljs.core.first.call(null,seq34002__$2);
var seq34002__$3 = cljs.core.next.call(null,seq34002__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__34003,G__34004,G__34005,seq34002__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__4531__auto___34014 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34015 = arguments.length;
var i__4498__auto___34016 = (0);
while(true){
if((i__4498__auto___34016 < len__4497__auto___34015)){
args__4500__auto__.push((arguments[i__4498__auto___34016]));

var G__34017 = (i__4498__auto___34016 + (1));
i__4498__auto___34016 = G__34017;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,t,null,(1),null)),args)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),args))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq34010){
var G__34011 = cljs.core.first.call(null,seq34010);
var seq34010__$1 = cljs.core.next.call(null,seq34010);
var G__34012 = cljs.core.first.call(null,seq34010__$1);
var seq34010__$2 = cljs.core.next.call(null,seq34010__$1);
var G__34013 = cljs.core.first.call(null,seq34010__$2);
var seq34010__$3 = cljs.core.next.call(null,seq34010__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__34011,G__34012,G__34013,seq34010__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__4531__auto___34022 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34023 = arguments.length;
var i__4498__auto___34024 = (0);
while(true){
if((i__4498__auto___34024 < len__4497__auto___34023)){
args__4500__auto__.push((arguments[i__4498__auto___34024]));

var G__34025 = (i__4498__auto___34024 + (1));
i__4498__auto___34024 = G__34025;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq34018){
var G__34019 = cljs.core.first.call(null,seq34018);
var seq34018__$1 = cljs.core.next.call(null,seq34018);
var G__34020 = cljs.core.first.call(null,seq34018__$1);
var seq34018__$2 = cljs.core.next.call(null,seq34018__$1);
var G__34021 = cljs.core.first.call(null,seq34018__$2);
var seq34018__$3 = cljs.core.next.call(null,seq34018__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__34019,G__34020,G__34021,seq34018__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__4531__auto___34034 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34035 = arguments.length;
var i__4498__auto___34036 = (0);
while(true){
if((i__4498__auto___34036 < len__4497__auto___34035)){
args__4500__auto__.push((arguments[i__4498__auto___34036]));

var G__34037 = (i__4498__auto___34036 + (1));
i__4498__auto___34036 = G__34037;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
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


var vec__34031 = bindings;
var x = cljs.core.nth.call(null,vec__34031,(0),null);
var xs = cljs.core.nth.call(null,vec__34031,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"xs__34026__auto__","xs__34026__auto__",849870238,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"xs__34026__auto__","xs__34026__auto__",849870238,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq34027){
var G__34028 = cljs.core.first.call(null,seq34027);
var seq34027__$1 = cljs.core.next.call(null,seq34027);
var G__34029 = cljs.core.first.call(null,seq34027__$1);
var seq34027__$2 = cljs.core.next.call(null,seq34027__$1);
var G__34030 = cljs.core.first.call(null,seq34027__$2);
var seq34027__$3 = cljs.core.next.call(null,seq34027__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__34028,G__34029,G__34030,seq34027__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__4531__auto___34043 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34044 = arguments.length;
var i__4498__auto___34045 = (0);
while(true){
if((i__4498__auto___34045 < len__4497__auto___34044)){
args__4500__auto__.push((arguments[i__4498__auto___34045]));

var G__34046 = (i__4498__auto___34045 + (1));
i__4498__auto___34045 = G__34046;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34038__auto__","temp__34038__auto__",738958058,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34038__auto__","temp__34038__auto__",738958058,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34038__auto__","temp__34038__auto__",738958058,null),null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq34039){
var G__34040 = cljs.core.first.call(null,seq34039);
var seq34039__$1 = cljs.core.next.call(null,seq34039);
var G__34041 = cljs.core.first.call(null,seq34039__$1);
var seq34039__$2 = cljs.core.next.call(null,seq34039__$1);
var G__34042 = cljs.core.first.call(null,seq34039__$2);
var seq34039__$3 = cljs.core.next.call(null,seq34039__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__34040,G__34041,G__34042,seq34039__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__4531__auto___34051 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34052 = arguments.length;
var i__4498__auto___34053 = (0);
while(true){
if((i__4498__auto___34053 < len__4497__auto___34052)){
args__4500__auto__.push((arguments[i__4498__auto___34053]));

var G__34054 = (i__4498__auto___34053 + (1));
i__4498__auto___34053 = G__34054;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,null,(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq34047){
var G__34048 = cljs.core.first.call(null,seq34047);
var seq34047__$1 = cljs.core.next.call(null,seq34047);
var G__34049 = cljs.core.first.call(null,seq34047__$1);
var seq34047__$2 = cljs.core.next.call(null,seq34047__$1);
var G__34050 = cljs.core.first.call(null,seq34047__$2);
var seq34047__$3 = cljs.core.next.call(null,seq34047__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__34048,G__34049,G__34050,seq34047__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__4531__auto___34059 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34060 = arguments.length;
var i__4498__auto___34061 = (0);
while(true){
if((i__4498__auto___34061 < len__4497__auto___34060)){
args__4500__auto__.push((arguments[i__4498__auto___34061]));

var G__34062 = (i__4498__auto___34061 + (1));
i__4498__auto___34061 = G__34062;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq34055){
var G__34056 = cljs.core.first.call(null,seq34055);
var seq34055__$1 = cljs.core.next.call(null,seq34055);
var G__34057 = cljs.core.first.call(null,seq34055__$1);
var seq34055__$2 = cljs.core.next.call(null,seq34055__$1);
var G__34058 = cljs.core.first.call(null,seq34055__$2);
var seq34055__$3 = cljs.core.next.call(null,seq34055__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__34056,G__34057,G__34058,seq34055__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__4531__auto___34071 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34072 = arguments.length;
var i__4498__auto___34073 = (0);
while(true){
if((i__4498__auto___34073 < len__4497__auto___34072)){
args__4500__auto__.push((arguments[i__4498__auto___34073]));

var G__34074 = (i__4498__auto___34073 + (1));
i__4498__auto___34073 = G__34074;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__34067){
var vec__34068 = p__34067;
var test = cljs.core.nth.call(null,vec__34068,(0),null);
var step = cljs.core.nth.call(null,vec__34068,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)))));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq34063){
var G__34064 = cljs.core.first.call(null,seq34063);
var seq34063__$1 = cljs.core.next.call(null,seq34063);
var G__34065 = cljs.core.first.call(null,seq34063__$1);
var seq34063__$2 = cljs.core.next.call(null,seq34063__$1);
var G__34066 = cljs.core.first.call(null,seq34063__$2);
var seq34063__$3 = cljs.core.next.call(null,seq34063__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__34064,G__34065,G__34066,seq34063__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__4531__auto___34083 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34084 = arguments.length;
var i__4498__auto___34085 = (0);
while(true){
if((i__4498__auto___34085 < len__4497__auto___34084)){
args__4500__auto__.push((arguments[i__4498__auto___34085]));

var G__34086 = (i__4498__auto___34085 + (1));
i__4498__auto___34085 = G__34086;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__34079){
var vec__34080 = p__34079;
var test = cljs.core.nth.call(null,vec__34080,(0),null);
var step = cljs.core.nth.call(null,vec__34080,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)))));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq34075){
var G__34076 = cljs.core.first.call(null,seq34075);
var seq34075__$1 = cljs.core.next.call(null,seq34075);
var G__34077 = cljs.core.first.call(null,seq34075__$1);
var seq34075__$2 = cljs.core.next.call(null,seq34075__$1);
var G__34078 = cljs.core.first.call(null,seq34075__$2);
var seq34075__$3 = cljs.core.next.call(null,seq34075__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__34076,G__34077,G__34078,seq34075__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__4531__auto___34092 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34093 = arguments.length;
var i__4498__auto___34094 = (0);
while(true){
if((i__4498__auto___34094 < len__4497__auto___34093)){
args__4500__auto__.push((arguments[i__4498__auto___34094]));

var G__34095 = (i__4498__auto___34094 + (1));
i__4498__auto___34094 = G__34095;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((4) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4501__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms)),null,(1),null)))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq34087){
var G__34088 = cljs.core.first.call(null,seq34087);
var seq34087__$1 = cljs.core.next.call(null,seq34087);
var G__34089 = cljs.core.first.call(null,seq34087__$1);
var seq34087__$2 = cljs.core.next.call(null,seq34087__$1);
var G__34090 = cljs.core.first.call(null,seq34087__$2);
var seq34087__$3 = cljs.core.next.call(null,seq34087__$2);
var G__34091 = cljs.core.first.call(null,seq34087__$3);
var seq34087__$4 = cljs.core.next.call(null,seq34087__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__34088,G__34089,G__34090,G__34091,seq34087__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__4531__auto___34100 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34101 = arguments.length;
var i__4498__auto___34102 = (0);
while(true){
if((i__4498__auto___34102 < len__4497__auto___34101)){
args__4500__auto__.push((arguments[i__4498__auto___34102]));

var G__34103 = (i__4498__auto___34102 + (1));
i__4498__auto___34102 = G__34103;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)))));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq34096){
var G__34097 = cljs.core.first.call(null,seq34096);
var seq34096__$1 = cljs.core.next.call(null,seq34096);
var G__34098 = cljs.core.first.call(null,seq34096__$1);
var seq34096__$2 = cljs.core.next.call(null,seq34096__$1);
var G__34099 = cljs.core.first.call(null,seq34096__$2);
var seq34096__$3 = cljs.core.next.call(null,seq34096__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__34097,G__34098,G__34099,seq34096__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__4531__auto___34108 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34109 = arguments.length;
var i__4498__auto___34110 = (0);
while(true){
if((i__4498__auto___34110 < len__4497__auto___34109)){
args__4500__auto__.push((arguments[i__4498__auto___34110]));

var G__34111 = (i__4498__auto___34110 + (1));
i__4498__auto___34110 = G__34111;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)))));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq34104){
var G__34105 = cljs.core.first.call(null,seq34104);
var seq34104__$1 = cljs.core.next.call(null,seq34104);
var G__34106 = cljs.core.first.call(null,seq34104__$1);
var seq34104__$2 = cljs.core.next.call(null,seq34104__$1);
var G__34107 = cljs.core.first.call(null,seq34104__$2);
var seq34104__$3 = cljs.core.next.call(null,seq34104__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__34105,G__34106,G__34107,seq34104__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__4531__auto___34121 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__34120 = arguments.length;
switch (G__34120) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34123 = arguments.length;
var i__4498__auto___34124 = (0);
while(true){
if((i__4498__auto___34124 < len__4497__auto___34123)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34124]));

var G__34125 = (i__4498__auto___34124 + (1));
i__4498__auto___34124 = G__34125;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4513__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34112__auto__","temp__34112__auto__",1357464067,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34112__auto__","temp__34112__auto__",1357464067,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34112__auto__","temp__34112__auto__",1357464067,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq34114){
var G__34115 = cljs.core.first.call(null,seq34114);
var seq34114__$1 = cljs.core.next.call(null,seq34114);
var G__34116 = cljs.core.first.call(null,seq34114__$1);
var seq34114__$2 = cljs.core.next.call(null,seq34114__$1);
var G__34117 = cljs.core.first.call(null,seq34114__$2);
var seq34114__$3 = cljs.core.next.call(null,seq34114__$2);
var G__34118 = cljs.core.first.call(null,seq34114__$3);
var seq34114__$4 = cljs.core.next.call(null,seq34114__$3);
var G__34119 = cljs.core.first.call(null,seq34114__$4);
var seq34114__$5 = cljs.core.next.call(null,seq34114__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__34115,G__34116,G__34117,G__34118,G__34119,seq34114__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__4531__auto___34131 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34132 = arguments.length;
var i__4498__auto___34133 = (0);
while(true){
if((i__4498__auto___34133 < len__4497__auto___34132)){
args__4500__auto__.push((arguments[i__4498__auto___34133]));

var G__34134 = (i__4498__auto___34133 + (1));
i__4498__auto___34133 = G__34134;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34126__auto__","temp__34126__auto__",-1138550648,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34126__auto__","temp__34126__auto__",-1138550648,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34126__auto__","temp__34126__auto__",-1138550648,null),null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq34127){
var G__34128 = cljs.core.first.call(null,seq34127);
var seq34127__$1 = cljs.core.next.call(null,seq34127);
var G__34129 = cljs.core.first.call(null,seq34127__$1);
var seq34127__$2 = cljs.core.next.call(null,seq34127__$1);
var G__34130 = cljs.core.first.call(null,seq34127__$2);
var seq34127__$3 = cljs.core.next.call(null,seq34127__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__34128,G__34129,G__34130,seq34127__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__34135_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__34135_SHARP_)){
return cljs.core.first.call(null,p1__34135_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34135_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34135_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__34136_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__34136_SHARP_);
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
var G__34137 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__34138 = cljs.core.next.call(null,fdecls);
ret = G__34137;
fdecls = G__34138;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
return (new cljs.core.List(null,asig.call(null,fdecl),null,(1),null));
}
});
var ret__4531__auto___34139 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,init,null,(1),null))))),null,(1),null)))));
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
return cljs.core.conj.call(null,ret,gseq,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),(new cljs.core.List(null,gvec,null,(1),null)),(2),null)));
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
var G__34146 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__34147 = n;
var G__34148 = cljs.core.nnext.call(null,bs);
var G__34149 = true;
ret = G__34146;
n = G__34147;
bs = G__34148;
seen_rest_QMARK_ = G__34149;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__34150 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null))))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null)))))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),(new cljs.core.List(null,gvec,(new cljs.core.List(null,n,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null))));
var G__34151 = (n + (1));
var G__34152 = cljs.core.next.call(null,bs);
var G__34153 = seen_rest_QMARK_;
ret = G__34150;
n = G__34151;
bs = G__34152;
seen_rest_QMARK_ = G__34153;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null)))))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__34140_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__3922__auto__ = mkns;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.namespace.call(null,p1__34140_SHARP_);
}
})(),cljs.core.name.call(null,p1__34140_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__34141_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.symbol.call(null,(function (){var or__3922__auto__ = mkns;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.namespace.call(null,p1__34141_SHARP_);
}
})(),cljs.core.name.call(null,p1__34141_SHARP_)),null,(1),null)),(2),null));
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
return (function (p1__34142_SHARP_,p2__34143_SHARP_){
return cljs.core.assoc.call(null,p1__34142_SHARP_,p2__34143_SHARP_,cljs.core.val.call(null,entry).call(null,p2__34143_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?(((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$))))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,(new cljs.core.List(null,defaults.call(null,local),null,(1),null)),(2),null)),(3),null)),(4),null)):(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,null,(1),null)),(2),null)),(3),null)));
var G__34154 = (((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol))))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__34155 = cljs.core.next.call(null,bes);
ret = G__34154;
bes = G__34155;
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
return (function (p1__34144_SHARP_){
return (cljs.core.first.call(null,p1__34144_SHARP_) instanceof cljs.core.Keyword);
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
var ret__4531__auto___34157 = /**
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
if(((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false))){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":((((default$ === true) || (default$ === false)))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,sym,((function (defname,type){
return (function (m){
var G__34156 = m;
if(!(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223)))){
return cljs.core.assoc.call(null,G__34156,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.symbol.call(null,type));
} else {
return G__34156;
}
});})(defname,type))
),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join(''),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","define","goog/define",-352722538,null),null,(1),null)),(new cljs.core.List(null,defname,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__4531__auto___34162 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34163 = arguments.length;
var i__4498__auto___34164 = (0);
while(true){
if((i__4498__auto___34164 < len__4497__auto___34163)){
args__4500__auto__.push((arguments[i__4498__auto___34164]));

var G__34165 = (i__4498__auto___34164 + (1));
i__4498__auto___34164 = G__34165;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.destructure.call(null,bindings),null,(1),null)),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq34158){
var G__34159 = cljs.core.first.call(null,seq34158);
var seq34158__$1 = cljs.core.next.call(null,seq34158);
var G__34160 = cljs.core.first.call(null,seq34158__$1);
var seq34158__$2 = cljs.core.next.call(null,seq34158__$1);
var G__34161 = cljs.core.first.call(null,seq34158__$2);
var seq34158__$3 = cljs.core.next.call(null,seq34158__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__34159,G__34160,G__34161,seq34158__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__4531__auto___34174 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34175 = arguments.length;
var i__4498__auto___34176 = (0);
while(true){
if((i__4498__auto___34176 < len__4497__auto___34175)){
args__4500__auto__.push((arguments[i__4498__auto___34176]));

var G__34177 = (i__4498__auto___34176 + (1));
i__4498__auto___34176 = G__34177;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body)));
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
return (function (ret,p__34170){
var vec__34171 = p__34170;
var b = cljs.core.nth.call(null,vec__34171,(0),null);
var v = cljs.core.nth.call(null,vec__34171,(1),null);
var g = cljs.core.nth.call(null,vec__34171,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,bfs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs)),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq34166){
var G__34167 = cljs.core.first.call(null,seq34166);
var seq34166__$1 = cljs.core.next.call(null,seq34166);
var G__34168 = cljs.core.first.call(null,seq34166__$1);
var seq34166__$2 = cljs.core.next.call(null,seq34166__$1);
var G__34169 = cljs.core.first.call(null,seq34166__$2);
var seq34166__$3 = cljs.core.next.call(null,seq34166__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__34167,G__34168,G__34169,seq34166__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__34178_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34178_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__34179){
var vec__34180 = p__34179;
var p = cljs.core.nth.call(null,vec__34180,(0),null);
var b = cljs.core.nth.call(null,vec__34180,(1),null);
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
var ret__4531__auto___34186 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34187 = arguments.length;
var i__4498__auto___34188 = (0);
while(true){
if((i__4498__auto___34188 < len__4497__auto___34187)){
args__4500__auto__.push((arguments[i__4498__auto___34188]));

var G__34189 = (i__4498__auto___34188 + (1));
i__4498__auto___34188 = G__34189;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
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

cljs.core$macros.str.cljs$lang$applyTo = (function (seq34183){
var G__34184 = cljs.core.first.call(null,seq34183);
var seq34183__$1 = cljs.core.next.call(null,seq34183);
var G__34185 = cljs.core.first.call(null,seq34183__$1);
var seq34183__$2 = cljs.core.next.call(null,seq34183__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__34184,G__34185,seq34183__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__3911__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__3911__auto__;
}
});
var ret__4531__auto___34201 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__34199 = arguments.length;
switch (G__34199) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34203 = arguments.length;
var i__4498__auto___34204 = (0);
while(true){
if((i__4498__auto___34204 < len__4497__auto___34203)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34204]));

var G__34205 = (i__4498__auto___34204 + (1));
i__4498__auto___34204 = G__34205;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4513__auto__);

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
return (function (p1__34190_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__34190_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__34191_SHARP_){
var _STAR_cljs_warnings_STAR_34200 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__34191_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_34200;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,((function (forms){
return (function (p1__34192_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__34192_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null));
});})(forms))
.call(null,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})"))));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,and_str,null,(1),null)),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"and__34193__auto__","and__34193__auto__",-806234019,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__34193__auto__","and__34193__auto__",-806234019,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__34193__auto__","and__34193__auto__",-806234019,null),null,(1),null))))),null,(1),null)))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq34195){
var G__34196 = cljs.core.first.call(null,seq34195);
var seq34195__$1 = cljs.core.next.call(null,seq34195);
var G__34197 = cljs.core.first.call(null,seq34195__$1);
var seq34195__$2 = cljs.core.next.call(null,seq34195__$1);
var G__34198 = cljs.core.first.call(null,seq34195__$2);
var seq34195__$3 = cljs.core.next.call(null,seq34195__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__34196,G__34197,G__34198,seq34195__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__4531__auto___34217 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__34215 = arguments.length;
switch (G__34215) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34219 = arguments.length;
var i__4498__auto___34220 = (0);
while(true){
if((i__4498__auto___34220 < len__4497__auto___34219)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34220]));

var G__34221 = (i__4498__auto___34220 + (1));
i__4498__auto___34220 = G__34221;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4513__auto__);

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
return (function (p1__34206_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__34206_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__34207_SHARP_){
var _STAR_cljs_warnings_STAR_34216 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__34207_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_34216;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,((function (forms){
return (function (p1__34208_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__34208_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null));
});})(forms))
.call(null,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})"))));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,or_str,null,(1),null)),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"or__34209__auto__","or__34209__auto__",-1577615291,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__34209__auto__","or__34209__auto__",-1577615291,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__34209__auto__","or__34209__auto__",-1577615291,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),next))),null,(1),null))))),null,(1),null)))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq34211){
var G__34212 = cljs.core.first.call(null,seq34211);
var seq34211__$1 = cljs.core.next.call(null,seq34211);
var G__34213 = cljs.core.first.call(null,seq34211__$1);
var seq34211__$2 = cljs.core.next.call(null,seq34211__$1);
var G__34214 = cljs.core.first.call(null,seq34211__$2);
var seq34211__$3 = cljs.core.next.call(null,seq34211__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__34212,G__34213,G__34214,seq34211__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__4531__auto___34222 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34223 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34224 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(!~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__4531__auto___34225 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__4531__auto___34226 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} == ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__4531__auto___34227 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__4531__auto___34228 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != null && ~{} !== false)",(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__4531__auto___34229 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"arguments",null,(1),null)),(2),null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__4531__auto___34230 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"delete ~{}[~{}]",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__4531__auto___34231 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} in ~{}",(new cljs.core.List(null,key,(new cljs.core.List(null,obj,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__4531__auto___34232 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"debugger",null,(1),null)),(2),null)),(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__4531__auto___34237 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__34234 = clojure.string.split.call(null,comment,/\n/);
var seq__34235 = cljs.core.seq.call(null,vec__34234);
var first__34236 = cljs.core.first.call(null,seq__34235);
var seq__34235__$1 = cljs.core.next.call(null,seq__34235);
var x = first__34236;
var ys = seq__34235__$1;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__34234,seq__34235,first__34236,seq__34235__$1,x,ys){
return (function (p1__34233_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__34233_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__34234,seq__34235,first__34236,seq__34235__$1,x,ys))
,ys)))," */\n"].join(''),null,(1),null)),(2),null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__4531__auto___34238 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,cast_expr,(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__4531__auto___34239 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join(''),null,(1),null)),(2),null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__4531__auto___34240 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === true",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34241 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === false",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34242 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'string'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34243 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} !== 'undefined'",(new cljs.core.List(null,cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true),null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34244 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(void 0 === ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34245 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34248 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} instanceof ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,c,null,(1),null)),(2),null)),(3),null)),(4),null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__34246__auto__","c__34246__auto__",-325138842,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34247__auto__","x__34247__auto__",-5702370,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"(~{} instanceof ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34247__auto__","x__34247__auto__",-5702370,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__34246__auto__","c__34246__auto__",-325138842,null),null,(1),null))))),null,(1),null)))))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34249 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'number'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34250 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34251 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34261 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__34258 = arguments.length;
switch (G__34258) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34263 = arguments.length;
var i__4498__auto___34264 = (0);
while(true){
if((i__4498__auto___34264 < len__4497__auto___34263)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34264]));

var G__34265 = (i__4498__auto___34264 + (1));
i__4498__auto___34264 = G__34265;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__34259 = cljs.analyzer.checked_arrays.call(null);
var G__34259__$1 = (((G__34259 instanceof cljs.core.Keyword))?G__34259.fqn:null);
switch (G__34259__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)))));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,null,(1),null)),(2),null)),(3),null)),(4),null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__34260 = cljs.analyzer.checked_arrays.call(null);
var G__34260__$1 = (((G__34260 instanceof cljs.core.Keyword))?G__34260.fqn:null);
switch (G__34260__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join(''),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq34253){
var G__34254 = cljs.core.first.call(null,seq34253);
var seq34253__$1 = cljs.core.next.call(null,seq34253);
var G__34255 = cljs.core.first.call(null,seq34253__$1);
var seq34253__$2 = cljs.core.next.call(null,seq34253__$1);
var G__34256 = cljs.core.first.call(null,seq34253__$2);
var seq34253__$3 = cljs.core.next.call(null,seq34253__$2);
var G__34257 = cljs.core.first.call(null,seq34253__$3);
var seq34253__$4 = cljs.core.next.call(null,seq34253__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__34254,G__34255,G__34256,G__34257,seq34253__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__4531__auto___34278 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__34275 = arguments.length;
switch (G__34275) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34280 = arguments.length;
var i__4498__auto___34281 = (0);
while(true){
if((i__4498__auto___34281 < len__4497__auto___34280)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34281]));

var G__34282 = (i__4498__auto___34281 + (1));
i__4498__auto___34281 = G__34282;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4513__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__34276 = cljs.analyzer.checked_arrays.call(null);
var G__34276__$1 = (((G__34276 instanceof cljs.core.Keyword))?G__34276.fqn:null);
switch (G__34276__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__34277 = cljs.analyzer.checked_arrays.call(null);
var G__34277__$1 = (((G__34277 instanceof cljs.core.Keyword))?G__34277.fqn:null);
switch (G__34277__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join(''),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq34269){
var G__34270 = cljs.core.first.call(null,seq34269);
var seq34269__$1 = cljs.core.next.call(null,seq34269);
var G__34271 = cljs.core.first.call(null,seq34269__$1);
var seq34269__$2 = cljs.core.next.call(null,seq34269__$1);
var G__34272 = cljs.core.first.call(null,seq34269__$2);
var seq34269__$3 = cljs.core.next.call(null,seq34269__$2);
var G__34273 = cljs.core.first.call(null,seq34269__$3);
var seq34269__$4 = cljs.core.next.call(null,seq34269__$3);
var G__34274 = cljs.core.first.call(null,seq34269__$4);
var seq34269__$5 = cljs.core.next.call(null,seq34269__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__34270,G__34271,G__34272,G__34273,G__34274,seq34269__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__4531__auto___34285 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__4531__auto___34286 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__4531__auto___34294 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__34293 = arguments.length;
switch (G__34293) {
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
var args_arr__4512__auto__ = [];
var len__4497__auto___34296 = arguments.length;
var i__4498__auto___34297 = (0);
while(true){
if((i__4498__auto___34297 < len__4497__auto___34296)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34297]));

var G__34298 = (i__4498__auto___34297 + (1));
i__4498__auto___34297 = G__34298;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} + ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq34288){
var G__34289 = cljs.core.first.call(null,seq34288);
var seq34288__$1 = cljs.core.next.call(null,seq34288);
var G__34290 = cljs.core.first.call(null,seq34288__$1);
var seq34288__$2 = cljs.core.next.call(null,seq34288__$1);
var G__34291 = cljs.core.first.call(null,seq34288__$2);
var seq34288__$3 = cljs.core.next.call(null,seq34288__$2);
var G__34292 = cljs.core.first.call(null,seq34288__$3);
var seq34288__$4 = cljs.core.next.call(null,seq34288__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__34289,G__34290,G__34291,G__34292,seq34288__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__4531__auto___34299 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__4531__auto___34300 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__4531__auto___34301 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__4531__auto___34302 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__4531__auto___34303 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__4531__auto___34304 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__4531__auto___34305 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__4531__auto___34306 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__4531__auto___34307 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__4531__auto___34311 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34312 = arguments.length;
var i__4498__auto___34313 = (0);
while(true){
if((i__4498__auto___34313 < len__4497__auto___34312)){
args__4500__auto__.push((arguments[i__4498__auto___34313]));

var G__34314 = (i__4498__auto___34313 + (1));
i__4498__auto___34313 = G__34314;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq34308){
var G__34309 = cljs.core.first.call(null,seq34308);
var seq34308__$1 = cljs.core.next.call(null,seq34308);
var G__34310 = cljs.core.first.call(null,seq34308__$1);
var seq34308__$2 = cljs.core.next.call(null,seq34308__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__34309,G__34310,seq34308__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__4531__auto___34318 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34319 = arguments.length;
var i__4498__auto___34320 = (0);
while(true){
if((i__4498__auto___34320 < len__4497__auto___34319)){
args__4500__auto__.push((arguments[i__4498__auto___34320]));

var G__34321 = (i__4498__auto___34320 + (1));
i__4498__auto___34320 = G__34321;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq34315){
var G__34316 = cljs.core.first.call(null,seq34315);
var seq34315__$1 = cljs.core.next.call(null,seq34315);
var G__34317 = cljs.core.first.call(null,seq34315__$1);
var seq34315__$2 = cljs.core.next.call(null,seq34315__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__34316,G__34317,seq34315__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__4531__auto___34322 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__4531__auto___34323 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__4531__auto___34327 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34328 = arguments.length;
var i__4498__auto___34329 = (0);
while(true){
if((i__4498__auto___34329 < len__4497__auto___34328)){
args__4500__auto__.push((arguments[i__4498__auto___34329]));

var G__34330 = (i__4498__auto___34329 + (1));
i__4498__auto___34329 = G__34330;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq34324){
var G__34325 = cljs.core.first.call(null,seq34324);
var seq34324__$1 = cljs.core.next.call(null,seq34324);
var G__34326 = cljs.core.first.call(null,seq34324__$1);
var seq34324__$2 = cljs.core.next.call(null,seq34324__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__34325,G__34326,seq34324__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__4531__auto___34331 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__4531__auto___34332 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__4531__auto___34336 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34337 = arguments.length;
var i__4498__auto___34338 = (0);
while(true){
if((i__4498__auto___34338 < len__4497__auto___34337)){
args__4500__auto__.push((arguments[i__4498__auto___34338]));

var G__34339 = (i__4498__auto___34338 + (1));
i__4498__auto___34338 = G__34339;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq34333){
var G__34334 = cljs.core.first.call(null,seq34333);
var seq34333__$1 = cljs.core.next.call(null,seq34333);
var G__34335 = cljs.core.first.call(null,seq34333__$1);
var seq34333__$2 = cljs.core.next.call(null,seq34333__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__34334,G__34335,seq34333__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__4531__auto___34343 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34344 = arguments.length;
var i__4498__auto___34345 = (0);
while(true){
if((i__4498__auto___34345 < len__4497__auto___34344)){
args__4500__auto__.push((arguments[i__4498__auto___34345]));

var G__34346 = (i__4498__auto___34345 + (1));
i__4498__auto___34345 = G__34346;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq34340){
var G__34341 = cljs.core.first.call(null,seq34340);
var seq34340__$1 = cljs.core.next.call(null,seq34340);
var G__34342 = cljs.core.first.call(null,seq34340__$1);
var seq34340__$2 = cljs.core.next.call(null,seq34340__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__34341,G__34342,seq34340__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__4531__auto___34347 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__4531__auto___34348 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__4531__auto___34349 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__4531__auto___34353 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34354 = arguments.length;
var i__4498__auto___34355 = (0);
while(true){
if((i__4498__auto___34355 < len__4497__auto___34354)){
args__4500__auto__.push((arguments[i__4498__auto___34355]));

var G__34356 = (i__4498__auto___34355 + (1));
i__4498__auto___34355 = G__34356;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq34350){
var G__34351 = cljs.core.first.call(null,seq34350);
var seq34350__$1 = cljs.core.next.call(null,seq34350);
var G__34352 = cljs.core.first.call(null,seq34350__$1);
var seq34350__$2 = cljs.core.next.call(null,seq34350__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__34351,G__34352,seq34350__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__4531__auto___34360 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34361 = arguments.length;
var i__4498__auto___34362 = (0);
while(true){
if((i__4498__auto___34362 < len__4497__auto___34361)){
args__4500__auto__.push((arguments[i__4498__auto___34362]));

var G__34363 = (i__4498__auto___34362 + (1));
i__4498__auto___34362 = G__34363;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq34357){
var G__34358 = cljs.core.first.call(null,seq34357);
var seq34357__$1 = cljs.core.next.call(null,seq34357);
var G__34359 = cljs.core.first.call(null,seq34357__$1);
var seq34357__$2 = cljs.core.next.call(null,seq34357__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__34358,G__34359,seq34357__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__4531__auto___34371 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__34370 = arguments.length;
switch (G__34370) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34373 = arguments.length;
var i__4498__auto___34374 = (0);
while(true){
if((i__4498__auto___34374 < len__4497__auto___34373)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34374]));

var G__34375 = (i__4498__auto___34374 + (1));
i__4498__auto___34374 = G__34375;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(- ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} - ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq34365){
var G__34366 = cljs.core.first.call(null,seq34365);
var seq34365__$1 = cljs.core.next.call(null,seq34365);
var G__34367 = cljs.core.first.call(null,seq34365__$1);
var seq34365__$2 = cljs.core.next.call(null,seq34365__$1);
var G__34368 = cljs.core.first.call(null,seq34365__$2);
var seq34365__$3 = cljs.core.next.call(null,seq34365__$2);
var G__34369 = cljs.core.first.call(null,seq34365__$3);
var seq34365__$4 = cljs.core.next.call(null,seq34365__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__34366,G__34367,G__34368,G__34369,seq34365__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__4531__auto___34383 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__34382 = arguments.length;
switch (G__34382) {
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
var args_arr__4512__auto__ = [];
var len__4497__auto___34385 = arguments.length;
var i__4498__auto___34386 = (0);
while(true){
if((i__4498__auto___34386 < len__4497__auto___34385)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34386]));

var G__34387 = (i__4498__auto___34386 + (1));
i__4498__auto___34386 = G__34387;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} * ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq34377){
var G__34378 = cljs.core.first.call(null,seq34377);
var seq34377__$1 = cljs.core.next.call(null,seq34377);
var G__34379 = cljs.core.first.call(null,seq34377__$1);
var seq34377__$2 = cljs.core.next.call(null,seq34377__$1);
var G__34380 = cljs.core.first.call(null,seq34377__$2);
var seq34377__$3 = cljs.core.next.call(null,seq34377__$2);
var G__34381 = cljs.core.first.call(null,seq34377__$3);
var seq34377__$4 = cljs.core.next.call(null,seq34377__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__34378,G__34379,G__34380,G__34381,seq34377__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__4531__auto___34395 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__34394 = arguments.length;
switch (G__34394) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34397 = arguments.length;
var i__4498__auto___34398 = (0);
while(true){
if((i__4498__auto___34398 < len__4497__auto___34397)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34398]));

var G__34399 = (i__4498__auto___34398 + (1));
i__4498__auto___34398 = G__34399;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq34389){
var G__34390 = cljs.core.first.call(null,seq34389);
var seq34389__$1 = cljs.core.next.call(null,seq34389);
var G__34391 = cljs.core.first.call(null,seq34389__$1);
var seq34389__$2 = cljs.core.next.call(null,seq34389__$1);
var G__34392 = cljs.core.first.call(null,seq34389__$2);
var seq34389__$3 = cljs.core.next.call(null,seq34389__$2);
var G__34393 = cljs.core.first.call(null,seq34389__$3);
var seq34389__$4 = cljs.core.next.call(null,seq34389__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__34390,G__34391,G__34392,G__34393,seq34389__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__4531__auto___34407 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__34406 = arguments.length;
switch (G__34406) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34409 = arguments.length;
var i__4498__auto___34410 = (0);
while(true){
if((i__4498__auto___34410 < len__4497__auto___34409)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34410]));

var G__34411 = (i__4498__auto___34410 + (1));
i__4498__auto___34410 = G__34411;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq34401){
var G__34402 = cljs.core.first.call(null,seq34401);
var seq34401__$1 = cljs.core.next.call(null,seq34401);
var G__34403 = cljs.core.first.call(null,seq34401__$1);
var seq34401__$2 = cljs.core.next.call(null,seq34401__$1);
var G__34404 = cljs.core.first.call(null,seq34401__$2);
var seq34401__$3 = cljs.core.next.call(null,seq34401__$2);
var G__34405 = cljs.core.first.call(null,seq34401__$3);
var seq34401__$4 = cljs.core.next.call(null,seq34401__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__34402,G__34403,G__34404,G__34405,seq34401__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__4531__auto___34419 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__34418 = arguments.length;
switch (G__34418) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34421 = arguments.length;
var i__4498__auto___34422 = (0);
while(true){
if((i__4498__auto___34422 < len__4497__auto___34421)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34422]));

var G__34423 = (i__4498__auto___34422 + (1));
i__4498__auto___34422 = G__34423;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} < ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq34413){
var G__34414 = cljs.core.first.call(null,seq34413);
var seq34413__$1 = cljs.core.next.call(null,seq34413);
var G__34415 = cljs.core.first.call(null,seq34413__$1);
var seq34413__$2 = cljs.core.next.call(null,seq34413__$1);
var G__34416 = cljs.core.first.call(null,seq34413__$2);
var seq34413__$3 = cljs.core.next.call(null,seq34413__$2);
var G__34417 = cljs.core.first.call(null,seq34413__$3);
var seq34413__$4 = cljs.core.next.call(null,seq34413__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__34414,G__34415,G__34416,G__34417,seq34413__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__4531__auto___34431 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__34430 = arguments.length;
switch (G__34430) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34433 = arguments.length;
var i__4498__auto___34434 = (0);
while(true){
if((i__4498__auto___34434 < len__4497__auto___34433)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34434]));

var G__34435 = (i__4498__auto___34434 + (1));
i__4498__auto___34434 = G__34435;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} <= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq34425){
var G__34426 = cljs.core.first.call(null,seq34425);
var seq34425__$1 = cljs.core.next.call(null,seq34425);
var G__34427 = cljs.core.first.call(null,seq34425__$1);
var seq34425__$2 = cljs.core.next.call(null,seq34425__$1);
var G__34428 = cljs.core.first.call(null,seq34425__$2);
var seq34425__$3 = cljs.core.next.call(null,seq34425__$2);
var G__34429 = cljs.core.first.call(null,seq34425__$3);
var seq34425__$4 = cljs.core.next.call(null,seq34425__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__34426,G__34427,G__34428,G__34429,seq34425__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__4531__auto___34443 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__34442 = arguments.length;
switch (G__34442) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34445 = arguments.length;
var i__4498__auto___34446 = (0);
while(true){
if((i__4498__auto___34446 < len__4497__auto___34445)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34446]));

var G__34447 = (i__4498__auto___34446 + (1));
i__4498__auto___34446 = G__34447;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} > ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq34437){
var G__34438 = cljs.core.first.call(null,seq34437);
var seq34437__$1 = cljs.core.next.call(null,seq34437);
var G__34439 = cljs.core.first.call(null,seq34437__$1);
var seq34437__$2 = cljs.core.next.call(null,seq34437__$1);
var G__34440 = cljs.core.first.call(null,seq34437__$2);
var seq34437__$3 = cljs.core.next.call(null,seq34437__$2);
var G__34441 = cljs.core.first.call(null,seq34437__$3);
var seq34437__$4 = cljs.core.next.call(null,seq34437__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__34438,G__34439,G__34440,G__34441,seq34437__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__4531__auto___34455 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__34454 = arguments.length;
switch (G__34454) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34457 = arguments.length;
var i__4498__auto___34458 = (0);
while(true){
if((i__4498__auto___34458 < len__4497__auto___34457)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34458]));

var G__34459 = (i__4498__auto___34458 + (1));
i__4498__auto___34458 = G__34459;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq34449){
var G__34450 = cljs.core.first.call(null,seq34449);
var seq34449__$1 = cljs.core.next.call(null,seq34449);
var G__34451 = cljs.core.first.call(null,seq34449__$1);
var seq34449__$2 = cljs.core.next.call(null,seq34449__$1);
var G__34452 = cljs.core.first.call(null,seq34449__$2);
var seq34449__$3 = cljs.core.next.call(null,seq34449__$2);
var G__34453 = cljs.core.first.call(null,seq34449__$3);
var seq34449__$4 = cljs.core.next.call(null,seq34449__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__34450,G__34451,G__34452,G__34453,seq34449__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__4531__auto___34467 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__34466 = arguments.length;
switch (G__34466) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34469 = arguments.length;
var i__4498__auto___34470 = (0);
while(true){
if((i__4498__auto___34470 < len__4497__auto___34469)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34470]));

var G__34471 = (i__4498__auto___34470 + (1));
i__4498__auto___34470 = G__34471;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq34461){
var G__34462 = cljs.core.first.call(null,seq34461);
var seq34461__$1 = cljs.core.next.call(null,seq34461);
var G__34463 = cljs.core.first.call(null,seq34461__$1);
var seq34461__$2 = cljs.core.next.call(null,seq34461__$1);
var G__34464 = cljs.core.first.call(null,seq34461__$2);
var seq34461__$3 = cljs.core.next.call(null,seq34461__$2);
var G__34465 = cljs.core.first.call(null,seq34461__$3);
var seq34461__$4 = cljs.core.next.call(null,seq34461__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__34462,G__34463,G__34464,G__34465,seq34461__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__4531__auto___34472 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__4531__auto___34473 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__4531__auto___34474 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34475 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34476 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34486 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__34485 = arguments.length;
switch (G__34485) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34488 = arguments.length;
var i__4498__auto___34489 = (0);
while(true){
if((i__4498__auto___34489 < len__4497__auto___34488)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34489]));

var G__34490 = (i__4498__auto___34489 + (1));
i__4498__auto___34489 = G__34490;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34477__auto__","x__34477__auto__",-1602161512,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__34478__auto__","y__34478__auto__",101568691,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} > ~{}) ? ~{} : ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34477__auto__","x__34477__auto__",-1602161512,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__34478__auto__","y__34478__auto__",101568691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34477__auto__","x__34477__auto__",-1602161512,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__34478__auto__","y__34478__auto__",101568691,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq34480){
var G__34481 = cljs.core.first.call(null,seq34480);
var seq34480__$1 = cljs.core.next.call(null,seq34480);
var G__34482 = cljs.core.first.call(null,seq34480__$1);
var seq34480__$2 = cljs.core.next.call(null,seq34480__$1);
var G__34483 = cljs.core.first.call(null,seq34480__$2);
var seq34480__$3 = cljs.core.next.call(null,seq34480__$2);
var G__34484 = cljs.core.first.call(null,seq34480__$3);
var seq34480__$4 = cljs.core.next.call(null,seq34480__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__34481,G__34482,G__34483,G__34484,seq34480__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__4531__auto___34500 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__34499 = arguments.length;
switch (G__34499) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34502 = arguments.length;
var i__4498__auto___34503 = (0);
while(true){
if((i__4498__auto___34503 < len__4497__auto___34502)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34503]));

var G__34504 = (i__4498__auto___34503 + (1));
i__4498__auto___34503 = G__34504;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34491__auto__","x__34491__auto__",1588940238,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__34492__auto__","y__34492__auto__",-1906874394,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} < ~{}) ? ~{} : ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34491__auto__","x__34491__auto__",1588940238,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__34492__auto__","y__34492__auto__",-1906874394,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34491__auto__","x__34491__auto__",1588940238,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__34492__auto__","y__34492__auto__",-1906874394,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq34494){
var G__34495 = cljs.core.first.call(null,seq34494);
var seq34494__$1 = cljs.core.next.call(null,seq34494);
var G__34496 = cljs.core.first.call(null,seq34494__$1);
var seq34494__$2 = cljs.core.next.call(null,seq34494__$1);
var G__34497 = cljs.core.first.call(null,seq34494__$2);
var seq34494__$3 = cljs.core.next.call(null,seq34494__$2);
var G__34498 = cljs.core.first.call(null,seq34494__$3);
var seq34494__$4 = cljs.core.next.call(null,seq34494__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__34495,G__34496,G__34497,G__34498,seq34494__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__4531__auto___34505 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} % ~{})",(new cljs.core.List(null,num,(new cljs.core.List(null,div,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__4531__auto___34506 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~ ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__4531__auto___34514 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__34513 = arguments.length;
switch (G__34513) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34516 = arguments.length;
var i__4498__auto___34517 = (0);
while(true){
if((i__4498__auto___34517 < len__4497__auto___34516)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34517]));

var G__34518 = (i__4498__auto___34517 + (1));
i__4498__auto___34517 = G__34518;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq34508){
var G__34509 = cljs.core.first.call(null,seq34508);
var seq34508__$1 = cljs.core.next.call(null,seq34508);
var G__34510 = cljs.core.first.call(null,seq34508__$1);
var seq34508__$2 = cljs.core.next.call(null,seq34508__$1);
var G__34511 = cljs.core.first.call(null,seq34508__$2);
var seq34508__$3 = cljs.core.next.call(null,seq34508__$2);
var G__34512 = cljs.core.first.call(null,seq34508__$3);
var seq34508__$4 = cljs.core.next.call(null,seq34508__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__34509,G__34510,G__34511,G__34512,seq34508__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__4531__auto___34526 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__34525 = arguments.length;
switch (G__34525) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34528 = arguments.length;
var i__4498__auto___34529 = (0);
while(true){
if((i__4498__auto___34529 < len__4497__auto___34528)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34529]));

var G__34530 = (i__4498__auto___34529 + (1));
i__4498__auto___34529 = G__34530;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq34520){
var G__34521 = cljs.core.first.call(null,seq34520);
var seq34520__$1 = cljs.core.next.call(null,seq34520);
var G__34522 = cljs.core.first.call(null,seq34520__$1);
var seq34520__$2 = cljs.core.next.call(null,seq34520__$1);
var G__34523 = cljs.core.first.call(null,seq34520__$2);
var seq34520__$3 = cljs.core.next.call(null,seq34520__$2);
var G__34524 = cljs.core.first.call(null,seq34520__$3);
var seq34520__$4 = cljs.core.next.call(null,seq34520__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__34521,G__34522,G__34523,G__34524,seq34520__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__4531__auto___34538 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__34537 = arguments.length;
switch (G__34537) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34540 = arguments.length;
var i__4498__auto___34541 = (0);
while(true){
if((i__4498__auto___34541 < len__4497__auto___34540)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34541]));

var G__34542 = (i__4498__auto___34541 + (1));
i__4498__auto___34541 = G__34542;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq34532){
var G__34533 = cljs.core.first.call(null,seq34532);
var seq34532__$1 = cljs.core.next.call(null,seq34532);
var G__34534 = cljs.core.first.call(null,seq34532__$1);
var seq34532__$2 = cljs.core.next.call(null,seq34532__$1);
var G__34535 = cljs.core.first.call(null,seq34532__$2);
var seq34532__$3 = cljs.core.next.call(null,seq34532__$2);
var G__34536 = cljs.core.first.call(null,seq34532__$3);
var seq34532__$4 = cljs.core.next.call(null,seq34532__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__34533,G__34534,G__34535,G__34536,seq34532__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__4531__auto___34543 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__4531__auto___34551 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__34550 = arguments.length;
switch (G__34550) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34553 = arguments.length;
var i__4498__auto___34554 = (0);
while(true){
if((i__4498__auto___34554 < len__4497__auto___34553)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34554]));

var G__34555 = (i__4498__auto___34554 + (1));
i__4498__auto___34554 = G__34555;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq34545){
var G__34546 = cljs.core.first.call(null,seq34545);
var seq34545__$1 = cljs.core.next.call(null,seq34545);
var G__34547 = cljs.core.first.call(null,seq34545__$1);
var seq34545__$2 = cljs.core.next.call(null,seq34545__$1);
var G__34548 = cljs.core.first.call(null,seq34545__$2);
var seq34545__$3 = cljs.core.next.call(null,seq34545__$2);
var G__34549 = cljs.core.first.call(null,seq34545__$3);
var seq34545__$4 = cljs.core.next.call(null,seq34545__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__34546,G__34547,G__34548,G__34549,seq34545__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__4531__auto___34563 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__34562 = arguments.length;
switch (G__34562) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34565 = arguments.length;
var i__4498__auto___34566 = (0);
while(true){
if((i__4498__auto___34566 < len__4497__auto___34565)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34566]));

var G__34567 = (i__4498__auto___34566 + (1));
i__4498__auto___34566 = G__34567;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq34557){
var G__34558 = cljs.core.first.call(null,seq34557);
var seq34557__$1 = cljs.core.next.call(null,seq34557);
var G__34559 = cljs.core.first.call(null,seq34557__$1);
var seq34557__$2 = cljs.core.next.call(null,seq34557__$1);
var G__34560 = cljs.core.first.call(null,seq34557__$2);
var seq34557__$3 = cljs.core.next.call(null,seq34557__$2);
var G__34561 = cljs.core.first.call(null,seq34557__$3);
var seq34557__$4 = cljs.core.next.call(null,seq34557__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__34558,G__34559,G__34560,G__34561,seq34557__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__4531__auto___34568 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~(1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__4531__auto___34569 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__4531__auto___34570 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} & (1 << ~{})) != 0)",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__4531__auto___34571 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} << ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__4531__auto___34572 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__4531__auto___34573 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__4531__auto___34574 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__4531__auto___34575 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__4531__auto___34576 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} >>> ~{}) & 0x01f)",(new cljs.core.List(null,hash,(new cljs.core.List(null,shift,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__4531__auto___34577 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(1 << ~{})",(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null),null,(1),null)),(new cljs.core.List(null,hash,null,(1),null)),(new cljs.core.List(null,shift,null,(1),null))))),null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__4531__auto___34579 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"h__34578__auto__","h__34578__auto__",-920867404,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__34578__auto__","h__34578__auto__",-920867404,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__34578__auto__","h__34578__auto__",-920867404,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"h__34578__auto__","h__34578__auto__",-920867404,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,hash_fn,null,(1),null)),(new cljs.core.List(null,coll,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__34578__auto__","h__34578__auto__",-920867404,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__34578__auto__","h__34578__auto__",-920867404,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cargs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34580__auto__","x__34580__auto__",203870225,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),cargs,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34580__auto__","x__34580__auto__",203870225,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,args,null,(1),null)),body))),null,(1),null)))));
});
var ret__4531__auto___34588 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34589 = arguments.length;
var i__4498__auto___34590 = (0);
while(true){
if((i__4498__auto___34590 < len__4497__auto___34589)){
args__4500__auto__.push((arguments[i__4498__auto___34590]));

var G__34591 = (i__4498__auto___34590 + (1));
i__4498__auto___34590 = G__34591;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((6) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4501__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq34581){
var G__34582 = cljs.core.first.call(null,seq34581);
var seq34581__$1 = cljs.core.next.call(null,seq34581);
var G__34583 = cljs.core.first.call(null,seq34581__$1);
var seq34581__$2 = cljs.core.next.call(null,seq34581__$1);
var G__34584 = cljs.core.first.call(null,seq34581__$2);
var seq34581__$3 = cljs.core.next.call(null,seq34581__$2);
var G__34585 = cljs.core.first.call(null,seq34581__$3);
var seq34581__$4 = cljs.core.next.call(null,seq34581__$3);
var G__34586 = cljs.core.first.call(null,seq34581__$4);
var seq34581__$5 = cljs.core.next.call(null,seq34581__$4);
var G__34587 = cljs.core.first.call(null,seq34581__$5);
var seq34581__$6 = cljs.core.next.call(null,seq34581__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__34582,G__34583,G__34584,G__34585,G__34586,G__34587,seq34581__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f1,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,clojure.walk.postwalk.call(null,(function (p1__34592_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__34592_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__34592_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__34592_SHARP_));
} else {
return p1__34592_SHARP_;
}
}),fkv),null,(1),null)),(new cljs.core.List(null,fkv,null,(1),null)))));
});
var ret__4531__auto___34597 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__34593,fkv){
var vec__34594 = p__34593;
var f1 = cljs.core.nth.call(null,vec__34594,(0),null);
var k = cljs.core.nth.call(null,vec__34594,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__4531__auto___34601 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___34602 = arguments.length;
var i__4498__auto___34603 = (0);
while(true){
if((i__4498__auto___34603 < len__4497__auto___34602)){
args__4500__auto__.push((arguments[i__4498__auto___34603]));

var G__34604 = (i__4498__auto___34603 + (1));
i__4498__auto___34603 = G__34604;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),locals,(new cljs.core.List(null,meta_sym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,meta_sym,null,(1),null))))),null,(1),null)),impls))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),locals,(new cljs.core.List(null,cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form)),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq34598){
var G__34599 = cljs.core.first.call(null,seq34598);
var seq34598__$1 = cljs.core.next.call(null,seq34598);
var G__34600 = cljs.core.first.call(null,seq34598__$1);
var seq34598__$2 = cljs.core.next.call(null,seq34598__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__34599,G__34600,seq34598__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__4531__auto___34609 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34610 = arguments.length;
var i__4498__auto___34611 = (0);
while(true){
if((i__4498__auto___34611 < len__4497__auto___34610)){
args__4500__auto__.push((arguments[i__4498__auto___34611]));

var G__34612 = (i__4498__auto___34611 + (1));
i__4498__auto___34611 = G__34612;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),impls))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq34605){
var G__34606 = cljs.core.first.call(null,seq34605);
var seq34605__$1 = cljs.core.next.call(null,seq34605);
var G__34607 = cljs.core.first.call(null,seq34605__$1);
var seq34605__$2 = cljs.core.next.call(null,seq34605__$1);
var G__34608 = cljs.core.first.call(null,seq34605__$2);
var seq34605__$3 = cljs.core.next.call(null,seq34605__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34606,G__34607,G__34608,seq34605__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__4531__auto___34617 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34618 = arguments.length;
var i__4498__auto___34619 = (0);
while(true){
if((i__4498__auto___34619 < len__4497__auto___34618)){
args__4500__auto__.push((arguments[i__4498__auto___34619]));

var G__34620 = (i__4498__auto___34619 + (1));
i__4498__auto___34619 = G__34620;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq34613){
var G__34614 = cljs.core.first.call(null,seq34613);
var seq34613__$1 = cljs.core.next.call(null,seq34613);
var G__34615 = cljs.core.first.call(null,seq34613__$1);
var seq34613__$2 = cljs.core.next.call(null,seq34613__$1);
var G__34616 = cljs.core.first.call(null,seq34613__$2);
var seq34613__$3 = cljs.core.next.call(null,seq34613__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__34614,G__34615,G__34616,seq34613__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__4531__auto___34621 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"this",null,(1),null)),(2),null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__4531__auto___34626 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34627 = arguments.length;
var i__4498__auto___34628 = (0);
while(true){
if((i__4498__auto___34628 < len__4497__auto___34627)){
args__4500__auto__.push((arguments[i__4498__auto___34628]));

var G__34629 = (i__4498__auto___34628 + (1));
i__4498__auto___34628 = G__34629;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq34622){
var G__34623 = cljs.core.first.call(null,seq34622);
var seq34622__$1 = cljs.core.next.call(null,seq34622);
var G__34624 = cljs.core.first.call(null,seq34622__$1);
var seq34622__$2 = cljs.core.next.call(null,seq34622__$1);
var G__34625 = cljs.core.first.call(null,seq34622__$2);
var seq34622__$3 = cljs.core.next.call(null,seq34622__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__34623,G__34624,G__34625,seq34622__$3);
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

if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
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
var G__34630 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__34631 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__34630;
s = G__34631;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__34632){
var vec__34633 = p__34632;
var p = cljs.core.nth.call(null,vec__34633,(0),null);
var sigs = cljs.core.nth.call(null,vec__34633,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__34633,p,sigs){
return (function (p__34636){
var vec__34637 = p__34636;
var seq__34638 = cljs.core.seq.call(null,vec__34637);
var first__34639 = cljs.core.first.call(null,seq__34638);
var seq__34638__$1 = cljs.core.next.call(null,seq__34638);
var f = first__34639;
var meths = seq__34638__$1;
var form = vec__34637;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),meths))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(psym,pfn_prefix,vec__34633,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,sym),null,(1),null)))));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,sym),null,(1),null)))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__34640){
var vec__34641 = p__34640;
var seq__34642 = cljs.core.seq.call(null,vec__34641);
var first__34643 = cljs.core.first.call(null,seq__34642);
var seq__34642__$1 = cljs.core.next.call(null,seq__34642);
var vec__34644 = first__34643;
var seq__34645 = cljs.core.seq.call(null,vec__34644);
var first__34646 = cljs.core.first.call(null,seq__34645);
var seq__34645__$1 = cljs.core.next.call(null,seq__34645);
var this$ = first__34646;
var args = seq__34645__$1;
var sig = vec__34644;
var body = seq__34642__$1;
return (new cljs.core.List(null,cljs.core.vec.call(null,args),(new cljs.core.List(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body),null,(1),null)),(2),null));
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__34647){
var vec__34648 = p__34647;
var seq__34649 = cljs.core.seq.call(null,vec__34648);
var first__34650 = cljs.core.first.call(null,seq__34649);
var seq__34649__$1 = cljs.core.next.call(null,seq__34649);
var vec__34651 = first__34650;
var seq__34652 = cljs.core.seq.call(null,vec__34651);
var first__34653 = cljs.core.first.call(null,seq__34652);
var seq__34652__$1 = cljs.core.next.call(null,seq__34652);
var this$ = first__34653;
var args = seq__34652__$1;
var sig = vec__34651;
var body = seq__34649__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__34654){
var vec__34655 = p__34654;
var seq__34656 = cljs.core.seq.call(null,vec__34655);
var first__34657 = cljs.core.first.call(null,seq__34656);
var seq__34656__$1 = cljs.core.next.call(null,seq__34656);
var vec__34658 = first__34657;
var seq__34659 = cljs.core.seq.call(null,vec__34658);
var first__34660 = cljs.core.first.call(null,seq__34659);
var seq__34659__$1 = cljs.core.next.call(null,seq__34659);
var this$ = first__34660;
var args = seq__34659__$1;
var sig = vec__34658;
var body = seq__34656__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,args),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),null,(1),null)),body))),null,(1),null)))));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__34661){
var vec__34662 = p__34661;
var seq__34663 = cljs.core.seq.call(null,vec__34662);
var first__34664 = cljs.core.first.call(null,seq__34663);
var seq__34663__$1 = cljs.core.next.call(null,seq__34663);
var vec__34665 = first__34664;
var seq__34666 = cljs.core.seq.call(null,vec__34665);
var first__34667 = cljs.core.first.call(null,seq__34666);
var seq__34666__$1 = cljs.core.next.call(null,seq__34666);
var this$ = first__34667;
var args = seq__34666__$1;
var sig = vec__34665;
var body = seq__34663__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,this_SINGLEQUOTE_,null,(1),null)),body))),null,(1),null)))));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__34669){
var vec__34670 = p__34669;
var seq__34671 = cljs.core.seq.call(null,vec__34670);
var first__34672 = cljs.core.first.call(null,seq__34671);
var seq__34671__$1 = cljs.core.next.call(null,seq__34671);
var f = first__34672;
var meths = seq__34671__$1;
var form = vec__34670;
var vec__34673 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__34673,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__34673,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,f__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),cljs.core.map.call(null,((function (vec__34673,f__$1,meths__$1,vec__34670,seq__34671,first__34672,seq__34671__$1,f,meths,form){
return (function (p1__34668_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__34668_SHARP_);
});})(vec__34673,f__$1,meths__$1,vec__34670,seq__34671,first__34672,seq__34671__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form)),null,(1),null)))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__34677){
var vec__34678 = p__34677;
var seq__34679 = cljs.core.seq.call(null,vec__34678);
var first__34680 = cljs.core.first.call(null,seq__34679);
var seq__34679__$1 = cljs.core.next.call(null,seq__34679);
var f = first__34680;
var meths = seq__34679__$1;
var form = vec__34678;
return cljs.core.map.call(null,((function (vec__34678,seq__34679,first__34680,seq__34679__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,meth,null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(vec__34678,seq__34679,first__34680,seq__34679__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__34678,seq__34679,first__34680,seq__34679__$1,f,meths,form){
return (function (p1__34676_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__34676_SHARP_);
});})(vec__34678,seq__34679,first__34680,seq__34679__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__34682){
var vec__34683 = p__34682;
var seq__34684 = cljs.core.seq.call(null,vec__34683);
var first__34685 = cljs.core.first.call(null,seq__34684);
var seq__34684__$1 = cljs.core.next.call(null,seq__34684);
var f = first__34685;
var meths = seq__34684__$1;
var form = vec__34683;
var meths__$1 = cljs.core.map.call(null,((function (vec__34683,seq__34684,first__34685,seq__34684__$1,f,meths,form){
return (function (p1__34681_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__34681_SHARP_);
});})(vec__34683,seq__34684,first__34685,seq__34684__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),meths__$1))),cljs.core.meta.call(null,form)),null,(1),null))))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-call",".-call",1760541695,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".concat",".concat",1180408684,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,argsym,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__34686){
var vec__34687 = p__34686;
var seq__34688 = cljs.core.seq.call(null,vec__34687);
var first__34689 = cljs.core.first.call(null,seq__34688);
var seq__34688__$1 = cljs.core.next.call(null,seq__34688);
var f = first__34689;
var meths = seq__34688__$1;
var form = vec__34687;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form)),null,(1),null)))))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__34687,seq__34688,first__34689,seq__34688__$1,f,meths,form){
return (function (p__34690){
var vec__34691 = p__34690;
var seq__34692 = cljs.core.seq.call(null,vec__34691);
var first__34693 = cljs.core.first.call(null,seq__34692);
var seq__34692__$1 = cljs.core.next.call(null,seq__34692);
var sig = first__34693;
var body = seq__34692__$1;
var meth = vec__34691;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.adapt_proto_params.call(null,type,meth),null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(pf,vec__34687,seq__34688,first__34689,seq__34688__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__34694){
var vec__34695 = p__34694;
var p = cljs.core.nth.call(null,vec__34695,(0),null);
var sigs = cljs.core.nth.call(null,vec__34695,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,pprefix),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__34695,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__34695,p,sigs))
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
var vec__34698 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__34698,(0),null);
var sigs = cljs.core.nth.call(null,vec__34698,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_34701 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_34701))){
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

if(((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths)))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__34702 = cljs.core.next.call(null,sigs__$1);
var G__34703 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__34702;
seen = G__34703;
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

var seen_34707 = cljs.core.PersistentHashSet.EMPTY;
var methods_34708__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_34708__$1)){
var vec__34704_34709 = cljs.core.first.call(null,methods_34708__$1);
var fname_34710 = cljs.core.nth.call(null,vec__34704_34709,(0),null);
var method_34711 = vec__34704_34709;
if(cljs.core.contains_QMARK_.call(null,seen_34707,fname_34710)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_34710], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_34711);

var G__34712 = cljs.core.conj.call(null,seen_34707,fname_34710);
var G__34713 = cljs.core.next.call(null,methods_34708__$1);
seen_34707 = G__34712;
methods_34708__$1 = G__34713;
continue;
} else {
}
break;
}

var G__34714 = cljs.core.conj.call(null,protos,proto);
var G__34715 = impls__$2;
protos = G__34714;
impls__$1 = G__34715;
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
var ret__4531__auto___34724 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___34725 = arguments.length;
var i__4498__auto___34726 = (0);
while(true){
if((i__4498__auto___34726 < len__4497__auto___34725)){
args__4500__auto__.push((arguments[i__4498__auto___34726]));

var G__34727 = (i__4498__auto___34726 + (1));
i__4498__auto___34726 = G__34727;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__34721 = (function (){var temp__5455__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__34721,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__34721,(1),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__3911__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__34721,type,assign_impls){
return (function (p1__34716_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__34716_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__34721,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq34717){
var G__34718 = cljs.core.first.call(null,seq34717);
var seq34717__$1 = cljs.core.next.call(null,seq34717);
var G__34719 = cljs.core.first.call(null,seq34717__$1);
var seq34717__$2 = cljs.core.next.call(null,seq34717__$1);
var G__34720 = cljs.core.first.call(null,seq34717__$2);
var seq34717__$3 = cljs.core.next.call(null,seq34717__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__34718,G__34719,G__34720,seq34717__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__34729){
var vec__34730 = p__34729;
var f = cljs.core.nth.call(null,vec__34730,(0),null);
var sigs = cljs.core.nth.call(null,vec__34730,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__34730,f,sigs){
return (function (p1__34728_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__34728_SHARP_),cljs.core.nnext.call(null,p1__34728_SHARP_));
});})(vec__34730,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__34734 = arguments.length;
switch (G__34734) {
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
var G__34736 = ret__$1;
var G__34737 = specs__$2;
ret = G__34736;
specs__$1 = G__34737;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__34738_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__34738_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var docstring = ["Positional factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),"."].join('');
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),field_values))),null,(1),null)))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__4531__auto___34750 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___34751 = arguments.length;
var i__4498__auto___34752 = (0);
while(true){
if((i__4498__auto___34752 < len__4497__auto___34751)){
args__4500__auto__.push((arguments[i__4498__auto___34752]));

var G__34753 = (i__4498__auto___34752 + (1));
i__4498__auto___34752 = G__34753;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((4) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4501__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__34747 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__34747,(0),null);
var pmasks = cljs.core.nth.call(null,vec__34747,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),(new cljs.core.List(null,fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34739__auto__","this__34739__auto__",-828998197,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__34740__auto__","writer__34740__auto__",1214731530,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opt__34741__auto__","opt__34741__auto__",1897057971,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__34740__auto__","writer__34740__auto__",1214731530,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq34742){
var G__34743 = cljs.core.first.call(null,seq34742);
var seq34742__$1 = cljs.core.next.call(null,seq34742);
var G__34744 = cljs.core.first.call(null,seq34742__$1);
var seq34742__$2 = cljs.core.next.call(null,seq34742__$1);
var G__34745 = cljs.core.first.call(null,seq34742__$2);
var seq34742__$3 = cljs.core.next.call(null,seq34742__$2);
var G__34746 = cljs.core.first.call(null,seq34742__$3);
var seq34742__$4 = cljs.core.next.call(null,seq34742__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__34743,G__34744,G__34745,G__34746,seq34742__$4);
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
return (function (p1__34754_SHARP_){
return cljs.core.with_meta.call(null,p1__34754_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-clone","-clone",227130084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34755__auto__","this__34755__auto__",-786018440,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),fields__$2))),null,(1),null))))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34756__auto__","this__34756__auto__",811889857,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34756__auto__","this__34756__auto__",811889857,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__34757__auto__","coll__34757__auto__",-1938768617,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__34757__auto__","coll__34757__auto__",-1938768617,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,other,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,field),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,field),null,(1),null))))),null,(1),null)))));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34758__auto__","this__34758__auto__",-697430712,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34759__auto__","this__34759__auto__",-1363474240,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)))),null,(1),null))))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34760__auto__","this__34760__auto__",-871540852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34761__auto__","k__34761__auto__",2087936522,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34760__auto__","this__34760__auto__",-871540852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34761__auto__","k__34761__auto__",2087936522,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34762__auto__","this__34762__auto__",-1951280742,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"else__34763__auto__","else__34763__auto__",-2022743452,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"else__34763__auto__","else__34763__auto__",-2022743452,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-count","-count",416049189,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34764__auto__","this__34764__auto__",-582493064,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,base_fields),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34765__auto__","this__34765__auto__",178907153,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__34766__auto__","entry__34766__auto__",-920915386,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__34766__auto__","entry__34766__auto__",-920915386,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34765__auto__","this__34765__auto__",178907153,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__34766__auto__","entry__34766__auto__",-920915386,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__34766__auto__","entry__34766__auto__",-920915386,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34765__auto__","this__34765__auto__",178907153,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__34766__auto__","entry__34766__auto__",-920915386,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34767__auto__","this__34767__auto__",1435611810,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34768__auto__","k__34768__auto__",-1757065100,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34768__auto__","k__34768__auto__",-1757065100,null),null,(1),null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34768__auto__","k__34768__auto__",-1757065100,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34769__auto__","this__34769__auto__",1721552683,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34770__auto__","k__34770__auto__",1582337801,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34770__auto__","k__34770__auto__",1582337801,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34769__auto__","this__34769__auto__",1721552683,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34770__auto__","k__34770__auto__",1582337801,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__34770__auto__","k__34770__auto__",1582337801,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34772__auto__","this__34772__auto__",-613446522,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__34771_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cljs.core.MapEntry.","cljs.core.MapEntry.",1115113147,null),(new cljs.core.List(null,cljs.core.keyword.call(null,p1__34771_SHARP_),(new cljs.core.List(null,p1__34771_SHARP_,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,base_fields),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34774__auto__","this__34774__auto__",1446355957,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__34775__auto__","writer__34775__auto__",-862776454,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__34776__auto__","opts__34776__auto__",-1215185764,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__34777__auto__","pr-pair__34777__auto__",-2023677213,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__34778__auto__","keyval__34778__auto__",-1568257957,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__34775__auto__","writer__34775__auto__",-862776454,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__34776__auto__","opts__34776__auto__",-1215185764,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__34778__auto__","keyval__34778__auto__",-1568257957,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__34775__auto__","writer__34775__auto__",-862776454,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__34777__auto__","pr-pair__34777__auto__",-2023677213,null),null,(1),null)),(new cljs.core.List(null,pr_open,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,"}",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__34776__auto__","opts__34776__auto__",-1215185764,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__34773_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null),(new cljs.core.List(null,cljs.core.keyword.call(null,p1__34773_SHARP_),(new cljs.core.List(null,p1__34773_SHARP_,null,(1),null)),(2),null)),(3),null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))], null));
var vec__34779 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__34779,(0),null);
var pmasks = cljs.core.nth.call(null,vec__34779,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),(new cljs.core.List(null,hinted_fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true)))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var docstring = ["Factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),", taking a map of keywords to field values."].join('');
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,docstring,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)))));
});})(fn_name,docstring,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ms,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),getters,(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)),ks))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))));
});
var ret__4531__auto___34789 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___34790 = arguments.length;
var i__4498__auto___34791 = (0);
while(true){
if((i__4498__auto___34791 < len__4497__auto___34790)){
args__4500__auto__.push((arguments[i__4498__auto___34791]));

var G__34792 = (i__4498__auto___34791 + (1));
i__4498__auto___34791 = G__34792;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((4) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4501__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34782__auto__","this__34782__auto__",-1118688025,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__34782__auto__","this__34782__auto__",-1118688025,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__34783__auto__","writer__34783__auto__",1657650046,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__34783__auto__","writer__34783__auto__",1657650046,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq34784){
var G__34785 = cljs.core.first.call(null,seq34784);
var seq34784__$1 = cljs.core.next.call(null,seq34784);
var G__34786 = cljs.core.first.call(null,seq34784__$1);
var seq34784__$2 = cljs.core.next.call(null,seq34784__$1);
var G__34787 = cljs.core.first.call(null,seq34784__$2);
var seq34784__$3 = cljs.core.next.call(null,seq34784__$2);
var G__34788 = cljs.core.first.call(null,seq34784__$3);
var seq34784__$4 = cljs.core.next.call(null,seq34784__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__34785,G__34786,G__34787,G__34788,seq34784__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__4531__auto___34820 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___34821 = arguments.length;
var i__4498__auto___34822 = (0);
while(true){
if((i__4498__auto___34822 < len__4497__auto___34821)){
args__4500__auto__.push((arguments[i__4498__auto___34822]));

var G__34823 = (i__4498__auto___34822 + (1));
i__4498__auto___34822 = G__34823;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__34799 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__34799,(0),null);
var methods$ = cljs.core.nth.call(null,vec__34799,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__34799,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__34799,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__34802 = cljs.core.seq.call(null,methods$);
var chunk__34803 = null;
var count__34804 = (0);
var i__34805 = (0);
while(true){
if((i__34805 < count__34804)){
var vec__34806 = cljs.core._nth.call(null,chunk__34803,i__34805);
var seq__34807 = cljs.core.seq.call(null,vec__34806);
var first__34808 = cljs.core.first.call(null,seq__34807);
var seq__34807__$1 = cljs.core.next.call(null,seq__34807);
var mname = first__34808;
var arities = seq__34807__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__34824 = seq__34802;
var G__34825 = chunk__34803;
var G__34826 = count__34804;
var G__34827 = (i__34805 + (1));
seq__34802 = G__34824;
chunk__34803 = G__34825;
count__34804 = G__34826;
i__34805 = G__34827;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34802);
if(temp__5457__auto__){
var seq__34802__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34802__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34802__$1);
var G__34828 = cljs.core.chunk_rest.call(null,seq__34802__$1);
var G__34829 = c__4319__auto__;
var G__34830 = cljs.core.count.call(null,c__4319__auto__);
var G__34831 = (0);
seq__34802 = G__34828;
chunk__34803 = G__34829;
count__34804 = G__34830;
i__34805 = G__34831;
continue;
} else {
var vec__34809 = cljs.core.first.call(null,seq__34802__$1);
var seq__34810 = cljs.core.seq.call(null,vec__34809);
var first__34811 = cljs.core.first.call(null,seq__34810);
var seq__34810__$1 = cljs.core.next.call(null,seq__34810);
var mname = first__34811;
var arities = seq__34810__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__34832 = cljs.core.next.call(null,seq__34802__$1);
var G__34833 = null;
var G__34834 = (0);
var G__34835 = (0);
seq__34802 = G__34832;
chunk__34803 = G__34833;
count__34804 = G__34834;
i__34805 = G__34835;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if(((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null))))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,sig__$1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,sig__$1),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,sig__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,sig__$1),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34793__auto__","x__34793__auto__",-2141832631,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,sig__$1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,sig__$1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__34794__auto__","m__34794__auto__",1442691332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,fqn.call(null,fname),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__34793__auto__","x__34793__auto__",-2141832631,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__34794__auto__","m__34794__auto__",1442691332,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__34794__auto__","m__34794__auto__",1442691332,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__34794__auto__","m__34794__auto__",1442691332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,fqn.call(null,fname),null,(1),null)),(new cljs.core.List(null,"_",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__34794__auto__","m__34794__auto__",1442691332,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__34794__auto__","m__34794__auto__",1442691332,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,sig__$1),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});})(p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__34812){
var vec__34813 = p__34812;
var seq__34814 = cljs.core.seq.call(null,vec__34813);
var first__34815 = cljs.core.first.call(null,seq__34814);
var seq__34814__$1 = cljs.core.next.call(null,seq__34814);
var fname = first__34815;
var sigs = seq__34814__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__34816){
var vec__34817 = p__34816;
var seq__34818 = cljs.core.seq.call(null,vec__34817);
var first__34819 = cljs.core.first.call(null,seq__34818);
var seq__34818__$1 = cljs.core.next.call(null,seq__34818);
var fname = first__34819;
var sigs = seq__34818__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fname__$1,null,(1),null)),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__34817,seq__34818,first__34819,seq__34818__$1,fname,sigs,p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__34817,seq__34818,first__34819,seq__34818__$1,fname,sigs,p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__34799,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,psym__$2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"function(){}",null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,method,methods$),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq34795){
var G__34796 = cljs.core.first.call(null,seq34795);
var seq34795__$1 = cljs.core.next.call(null,seq34795);
var G__34797 = cljs.core.first.call(null,seq34795__$1);
var seq34795__$2 = cljs.core.next.call(null,seq34795__$1);
var G__34798 = cljs.core.first.call(null,seq34795__$2);
var seq34795__$3 = cljs.core.next.call(null,seq34795__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__34796,G__34797,G__34798,seq34795__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__4531__auto___34839 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__34836 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__34836,(0),null);
var bit = cljs.core.nth.call(null,vec__34836,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34843 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__34840 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__34840,(0),null);
var bit = cljs.core.nth.call(null,vec__34840,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__4531__auto___34847 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34848 = arguments.length;
var i__4498__auto___34849 = (0);
while(true){
if((i__4498__auto___34849 < len__4497__auto___34848)){
args__4500__auto__.push((arguments[i__4498__auto___34849]));

var G__34850 = (i__4498__auto___34849 + (1));
i__4498__auto___34849 = G__34850;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq34844){
var G__34845 = cljs.core.first.call(null,seq34844);
var seq34844__$1 = cljs.core.next.call(null,seq34844);
var G__34846 = cljs.core.first.call(null,seq34844__$1);
var seq34844__$2 = cljs.core.next.call(null,seq34844__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__34845,G__34846,seq34844__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__4531__auto___34854 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34855 = arguments.length;
var i__4498__auto___34856 = (0);
while(true){
if((i__4498__auto___34856 < len__4497__auto___34855)){
args__4500__auto__.push((arguments[i__4498__auto___34856]));

var G__34857 = (i__4498__auto___34856 + (1));
i__4498__auto___34856 = G__34857;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq34851){
var G__34852 = cljs.core.first.call(null,seq34851);
var seq34851__$1 = cljs.core.next.call(null,seq34851);
var G__34853 = cljs.core.first.call(null,seq34851__$1);
var seq34851__$2 = cljs.core.next.call(null,seq34851__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__34852,G__34853,seq34851__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__4531__auto___34866 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___34867 = arguments.length;
var i__4498__auto___34868 = (0);
while(true){
if((i__4498__auto___34868 < len__4497__auto___34867)){
args__4500__auto__.push((arguments[i__4498__auto___34868]));

var G__34869 = (i__4498__auto___34868 + (1));
i__4498__auto___34868 = G__34869;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__34862){
var vec__34863 = p__34862;
var k = cljs.core.nth.call(null,vec__34863,(0),null);
var v = cljs.core.nth.call(null,vec__34863,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names))))),null,(1),null)),cljs.core.map.call(null,bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),cljs.core.map.call(null,bind_value,resets)))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq34858){
var G__34859 = cljs.core.first.call(null,seq34858);
var seq34858__$1 = cljs.core.next.call(null,seq34858);
var G__34860 = cljs.core.first.call(null,seq34858__$1);
var seq34858__$2 = cljs.core.next.call(null,seq34858__$1);
var G__34861 = cljs.core.first.call(null,seq34858__$2);
var seq34858__$3 = cljs.core.next.call(null,seq34858__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__34859,G__34860,G__34861,seq34858__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__4531__auto___34874 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___34875 = arguments.length;
var i__4498__auto___34876 = (0);
while(true){
if((i__4498__auto___34876 < len__4497__auto___34875)){
args__4500__auto__.push((arguments[i__4498__auto___34876]));

var G__34877 = (i__4498__auto___34876 + (1));
i__4498__auto___34876 = G__34877;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq34870){
var G__34871 = cljs.core.first.call(null,seq34870);
var seq34870__$1 = cljs.core.next.call(null,seq34870);
var G__34872 = cljs.core.first.call(null,seq34870__$1);
var seq34870__$2 = cljs.core.next.call(null,seq34870__$1);
var G__34873 = cljs.core.first.call(null,seq34870__$2);
var seq34870__$3 = cljs.core.next.call(null,seq34870__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__34871,G__34872,G__34873,seq34870__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__4531__auto___34890 = (function (){
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
 *   expression is provided and no clause matches, an Error is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34891 = arguments.length;
var i__4498__auto___34892 = (0);
while(true){
if((i__4498__auto___34892 < len__4497__auto___34891)){
args__4500__auto__.push((arguments[i__4498__auto___34892]));

var G__34893 = (i__4498__auto___34892 + (1));
i__4498__auto___34892 = G__34893;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((4) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4501__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__34884 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__34887 = cljs.core.nth.call(null,vec__34884,(0),null);
var a = cljs.core.nth.call(null,vec__34887,(0),null);
var b = cljs.core.nth.call(null,vec__34887,(1),null);
var c = cljs.core.nth.call(null,vec__34887,(2),null);
var clause = vec__34887;
var more = cljs.core.nth.call(null,vec__34884,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit.call(null,pred__$1,expr__$1,more),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__34878__auto__","p__34878__auto__",-224118238,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__34878__auto__","p__34878__auto__",-224118238,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit.call(null,pred__$1,expr__$1,more),null,(1),null)))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gpred,null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,gexpr,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,emit.call(null,gpred,gexpr,clauses),null,(1),null)))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq34879){
var G__34880 = cljs.core.first.call(null,seq34879);
var seq34879__$1 = cljs.core.next.call(null,seq34879);
var G__34881 = cljs.core.first.call(null,seq34879__$1);
var seq34879__$2 = cljs.core.next.call(null,seq34879__$1);
var G__34882 = cljs.core.first.call(null,seq34879__$2);
var seq34879__$3 = cljs.core.next.call(null,seq34879__$2);
var G__34883 = cljs.core.first.call(null,seq34879__$3);
var seq34879__$4 = cljs.core.next.call(null,seq34879__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__34880,G__34881,G__34882,G__34883,seq34879__$4);
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
var m = (function (){var and__3911__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__3911__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__4531__auto___34910 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___34911 = arguments.length;
var i__4498__auto___34912 = (0);
while(true){
if((i__4498__auto___34912 < len__4497__auto___34911)){
args__4500__auto__.push((arguments[i__4498__auto___34912]));

var G__34913 = (i__4498__auto___34912 + (1));
i__4498__auto___34912 = G__34913;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null))))),null,(1),null))))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__34902){
var vec__34903 = p__34902;
var test = cljs.core.nth.call(null,vec__34903,(0),null);
var expr = cljs.core.nth.call(null,vec__34903,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__34903,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test__$1,null,(1),null)),(2),null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__34903,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test,null,(1),null)),(2),null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__34894_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__34894_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__34895_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__34895_SHARP_)){
return cljs.core.vec.call(null,p1__34895_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34895_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__34896_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34896_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__34897_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__34897_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__34897_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__34897_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null),null,(1),null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__34906){
var vec__34907 = p__34906;
var m = cljs.core.nth.call(null,vec__34907,(0),null);
var c = cljs.core.nth.call(null,vec__34907,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(esym,default$,env,pairs,tests))
,pairs),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq34898){
var G__34899 = cljs.core.first.call(null,seq34898);
var seq34898__$1 = cljs.core.next.call(null,seq34898);
var G__34900 = cljs.core.first.call(null,seq34898__$1);
var seq34898__$2 = cljs.core.next.call(null,seq34898__$1);
var G__34901 = cljs.core.first.call(null,seq34898__$2);
var seq34898__$3 = cljs.core.next.call(null,seq34898__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__34899,G__34900,G__34901,seq34898__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__4531__auto___34914 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__4531__auto___34917 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__34916 = arguments.length;
switch (G__34916) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join(''),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Assert failed: ",null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null)),(new cljs.core.List(null,cljs.core.pr_str.call(null,x),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__4531__auto___34955 = /**
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
return cljs.core.reduce.call(null,(function (groups,p__34924){
var vec__34925 = p__34924;
var k = cljs.core.nth.call(null,vec__34925,(0),null);
var v = cljs.core.nth.call(null,vec__34925,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__34956__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__34956 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__34957__i = 0, G__34957__a = new Array(arguments.length -  0);
while (G__34957__i < G__34957__a.length) {G__34957__a[G__34957__i] = arguments[G__34957__i + 0]; ++G__34957__i;}
  msg = new cljs.core.IndexedSeq(G__34957__a,0,null);
} 
return G__34956__delegate.call(this,msg);};
G__34956.cljs$lang$maxFixedArity = 0;
G__34956.cljs$lang$applyTo = (function (arglist__34958){
var msg = cljs.core.seq(arglist__34958);
return G__34956__delegate(msg);
});
G__34956.cljs$core$IFn$_invoke$arity$variadic = G__34956__delegate;
return G__34956;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__34928){
var vec__34929 = p__34928;
var seq__34930 = cljs.core.seq.call(null,vec__34929);
var first__34931 = cljs.core.first.call(null,seq__34930);
var seq__34930__$1 = cljs.core.next.call(null,seq__34930);
var vec__34932 = first__34931;
var seq__34933 = cljs.core.seq.call(null,vec__34932);
var first__34934 = cljs.core.first.call(null,seq__34933);
var seq__34933__$1 = cljs.core.next.call(null,seq__34933);
var bind = first__34934;
var first__34934__$1 = cljs.core.first.call(null,seq__34933__$1);
var seq__34933__$2 = cljs.core.next.call(null,seq__34933__$1);
var expr = first__34934__$1;
var mod_pairs = seq__34933__$2;
var vec__34935 = seq__34930__$1;
var vec__34938 = cljs.core.nth.call(null,vec__34935,(0),null);
var _ = cljs.core.nth.call(null,vec__34938,(0),null);
var next_expr = cljs.core.nth.call(null,vec__34938,(1),null);
var next_groups = vec__34935;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__34929,seq__34930,first__34931,seq__34930__$1,vec__34932,seq__34933,first__34934,seq__34933__$1,bind,first__34934__$1,seq__34933__$2,expr,mod_pairs,vec__34935,vec__34938,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__34941){
var vec__34942 = p__34941;
var seq__34943 = cljs.core.seq.call(null,vec__34942);
var first__34944 = cljs.core.first.call(null,seq__34943);
var seq__34943__$1 = cljs.core.next.call(null,seq__34943);
var vec__34945 = first__34944;
var k = cljs.core.nth.call(null,vec__34945,(0),null);
var v = cljs.core.nth.call(null,vec__34945,(1),null);
var pair = vec__34945;
var etc = seq__34943__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__34919__auto__","iterys__34919__auto__",-2029238872,null),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind.call(null,next_groups),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__34920__auto__","fs__34920__auto__",1834680370,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__34919__auto__","iterys__34919__auto__",-2029238872,null),null,(1),null)),(new cljs.core.List(null,next_expr,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__34920__auto__","fs__34920__auto__",1834680370,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__34920__auto__","fs__34920__auto__",1834680370,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null)))));

}
}
}
}
}
});})(giter,gxs,vec__34929,seq__34930,first__34931,seq__34930__$1,vec__34932,seq__34933,first__34934,seq__34933__$1,bind,first__34934__$1,seq__34933__$2,expr,mod_pairs,vec__34935,vec__34938,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_mod.call(null,mod_pairs),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__34929,seq__34930,first__34931,seq__34930__$1,vec__34932,seq__34933,first__34934,seq__34933__$1,bind,first__34934__$1,seq__34933__$2,expr,mod_pairs,vec__34935,vec__34938,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__34948){
var vec__34949 = p__34948;
var seq__34950 = cljs.core.seq.call(null,vec__34949);
var first__34951 = cljs.core.first.call(null,seq__34950);
var seq__34950__$1 = cljs.core.next.call(null,seq__34950);
var vec__34952 = first__34951;
var k = cljs.core.nth.call(null,vec__34952,(0),null);
var v = cljs.core.nth.call(null,vec__34952,(1),null);
var pair = vec__34952;
var etc = seq__34950__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null)))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__34929,seq__34930,first__34931,seq__34930__$1,vec__34932,seq__34933,first__34934,seq__34933__$1,bind,first__34934__$1,seq__34933__$2,expr,mod_pairs,vec__34935,vec__34938,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__34921__auto__","c__34921__auto__",-1488206427,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/Users/jocrau/.cljs/.aot_cache/1.10.145/020545A/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,2392,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,2392,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,82,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null),null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__34922__auto__","size__34922__auto__",-531107391,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__34921__auto__","c__34921__auto__",-1488206427,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__34922__auto__","size__34922__auto__",-531107391,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__34922__auto__","size__34922__auto__",-531107391,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__34921__auto__","c__34921__auto__",-1488206427,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_cmod.call(null,mod_pairs),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_mod.call(null,mod_pairs),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iter__34923__auto__","iter__34923__auto__",1002981470,null),null,(1),null)),(new cljs.core.List(null,emit_bind.call(null,to_groups.call(null,seq_exprs)),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iter__34923__auto__","iter__34923__auto__",1002981470,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second.call(null,seq_exprs),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__4531__auto___34964 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34965 = arguments.length;
var i__4498__auto___34966 = (0);
while(true){
if((i__4498__auto___34966 < len__4497__auto___34965)){
args__4500__auto__.push((arguments[i__4498__auto___34966]));

var G__34967 = (i__4498__auto___34966 + (1));
i__4498__auto___34966 = G__34967;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
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
var G__34968__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__34968 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__34969__i = 0, G__34969__a = new Array(arguments.length -  0);
while (G__34969__i < G__34969__a.length) {G__34969__a[G__34969__i] = arguments[G__34969__i + 0]; ++G__34969__i;}
  msg = new cljs.core.IndexedSeq(G__34969__a,0,null);
} 
return G__34968__delegate.call(this,msg);};
G__34968.cljs$lang$maxFixedArity = 0;
G__34968.cljs$lang$applyTo = (function (arglist__34970){
var msg = cljs.core.seq(arglist__34970);
return G__34968__delegate(msg);
});
G__34968.cljs$core$IFn$_invoke$arity$variadic = G__34968__delegate;
return G__34968;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body,(new cljs.core.List(null,null,null,(1),null)))))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)))),null,(1),null)),(new cljs.core.List(null,recform__$1,null,(1),null)))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null))))),null,(1),null)))));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,isym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,subform_chunk,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__34959__auto__","c__34959__auto__",-775643663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__34959__auto__","c__34959__auto__",-775643663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__34959__auto__","c__34959__auto__",-775643663,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))], null);

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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq34960){
var G__34961 = cljs.core.first.call(null,seq34960);
var seq34960__$1 = cljs.core.next.call(null,seq34960);
var G__34962 = cljs.core.first.call(null,seq34960__$1);
var seq34960__$2 = cljs.core.next.call(null,seq34960__$1);
var G__34963 = cljs.core.first.call(null,seq34960__$2);
var seq34960__$3 = cljs.core.next.call(null,seq34960__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__34961,G__34962,G__34963,seq34960__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__4531__auto___34974 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34975 = arguments.length;
var i__4498__auto___34976 = (0);
while(true){
if((i__4498__auto___34976 < len__4497__auto___34975)){
args__4500__auto__.push((arguments[i__4498__auto___34976]));

var G__34977 = (i__4498__auto___34976 + (1));
i__4498__auto___34976 = G__34977;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq34971){
var G__34972 = cljs.core.first.call(null,seq34971);
var seq34971__$1 = cljs.core.next.call(null,seq34971);
var G__34973 = cljs.core.first.call(null,seq34971__$1);
var seq34971__$2 = cljs.core.next.call(null,seq34971__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__34972,G__34973,seq34971__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__4531__auto___34988 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__34987 = arguments.length;
switch (G__34987) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___34990 = arguments.length;
var i__4498__auto___34991 = (0);
while(true){
if((i__4498__auto___34991 < len__4497__auto___34990)){
args_arr__4512__auto__.push((arguments[i__4498__auto___34991]));

var G__34992 = (i__4498__auto___34991 + (1));
i__4498__auto___34991 = G__34992;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4513__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"dims__34978__auto__","dims__34978__auto__",-789762691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null),null,(1),null)),more_sizes))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__34979__auto__","dimarray__34979__auto__",-435963562,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"i__34980__auto__","i__34980__auto__",-1668110403,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__34979__auto__","dimarray__34979__auto__",-435963562,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__34979__auto__","dimarray__34979__auto__",-435963562,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__34980__auto__","i__34980__auto__",-1668110403,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dims__34978__auto__","dims__34978__auto__",-789762691,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__34979__auto__","dimarray__34979__auto__",-435963562,null),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq34982){
var G__34983 = cljs.core.first.call(null,seq34982);
var seq34982__$1 = cljs.core.next.call(null,seq34982);
var G__34984 = cljs.core.first.call(null,seq34982__$1);
var seq34982__$2 = cljs.core.next.call(null,seq34982__$1);
var G__34985 = cljs.core.first.call(null,seq34982__$2);
var seq34982__$3 = cljs.core.next.call(null,seq34982__$2);
var G__34986 = cljs.core.first.call(null,seq34982__$3);
var seq34982__$4 = cljs.core.next.call(null,seq34982__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__34983,G__34984,G__34985,G__34986,seq34982__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__4531__auto___34999 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__34998 = arguments.length;
switch (G__34998) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___35001 = arguments.length;
var i__4498__auto___35002 = (0);
while(true){
if((i__4498__auto___35002 < len__4497__auto___35001)){
args_arr__4512__auto__.push((arguments[i__4498__auto___35002]));

var G__35003 = (i__4498__auto___35002 + (1));
i__4498__auto___35002 = G__35003;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4513__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
var cnt = (cljs.core.count.call(null,xs) + (1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq34994){
var G__34995 = cljs.core.first.call(null,seq34994);
var seq34994__$1 = cljs.core.next.call(null,seq34994);
var G__34996 = cljs.core.first.call(null,seq34994__$1);
var seq34994__$2 = cljs.core.next.call(null,seq34994__$1);
var G__34997 = cljs.core.first.call(null,seq34994__$2);
var seq34994__$3 = cljs.core.next.call(null,seq34994__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__34995,G__34996,G__34997,seq34994__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__4531__auto___35009 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__35008 = arguments.length;
switch (G__35008) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___35011 = arguments.length;
var i__4498__auto___35012 = (0);
while(true){
if((i__4498__auto___35012 < len__4497__auto___35011)){
args_arr__4512__auto__.push((arguments[i__4498__auto___35012]));

var G__35013 = (i__4498__auto___35012 + (1));
i__4498__auto___35012 = G__35013;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4513__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq35005){
var G__35006 = cljs.core.first.call(null,seq35005);
var seq35005__$1 = cljs.core.next.call(null,seq35005);
var G__35007 = cljs.core.first.call(null,seq35005__$1);
var seq35005__$2 = cljs.core.next.call(null,seq35005__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__35006,G__35007,seq35005__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__4531__auto___35023 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__35020 = arguments.length;
switch (G__35020) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___35025 = arguments.length;
var i__4498__auto___35026 = (0);
while(true){
if((i__4498__auto___35026 < len__4497__auto___35025)){
args_arr__4512__auto__.push((arguments[i__4498__auto___35026]));

var G__35027 = (i__4498__auto___35026 + (1));
i__4498__auto___35026 = G__35027;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4513__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if(((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__35014_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__35014_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__35015_SHARP_){
var _STAR_cljs_warnings_STAR_35022 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__35015_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_35022;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(cljs.core.count.call(null,kvs) / (2)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),kvs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),kvs))),null,(1),null)))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq35017){
var G__35018 = cljs.core.first.call(null,seq35017);
var seq35017__$1 = cljs.core.next.call(null,seq35017);
var G__35019 = cljs.core.first.call(null,seq35017__$1);
var seq35017__$2 = cljs.core.next.call(null,seq35017__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__35018,G__35019,seq35017__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__4531__auto___35033 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__35032 = arguments.length;
switch (G__35032) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___35035 = arguments.length;
var i__4498__auto___35036 = (0);
while(true){
if((i__4498__auto___35036 < len__4497__auto___35035)){
args_arr__4512__auto__.push((arguments[i__4498__auto___35036]));

var G__35037 = (i__4498__auto___35036 + (1));
i__4498__auto___35036 = G__35037;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4513__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),ks))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),vs))),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq35029){
var G__35030 = cljs.core.first.call(null,seq35029);
var seq35029__$1 = cljs.core.next.call(null,seq35029);
var G__35031 = cljs.core.first.call(null,seq35029__$1);
var seq35029__$2 = cljs.core.next.call(null,seq35029__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__35030,G__35031,seq35029__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__4531__auto___35047 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__35044 = arguments.length;
switch (G__35044) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___35049 = arguments.length;
var i__4498__auto___35050 = (0);
while(true){
if((i__4498__auto___35050 < len__4497__auto___35049)){
args_arr__4512__auto__.push((arguments[i__4498__auto___35050]));

var G__35051 = (i__4498__auto___35050 + (1));
i__4498__auto___35050 = G__35051;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4513__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if((((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__35038_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__35038_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__35039_SHARP_){
var _STAR_cljs_warnings_STAR_35046 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__35039_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_35046;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs))))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,xs),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq35041){
var G__35042 = cljs.core.first.call(null,seq35041);
var seq35041__$1 = cljs.core.next.call(null,seq35041);
var G__35043 = cljs.core.first.call(null,seq35041__$1);
var seq35041__$2 = cljs.core.next.call(null,seq35041__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__35042,G__35043,seq35041__$2);
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
var ret__4531__auto___35067 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35068 = arguments.length;
var i__4498__auto___35069 = (0);
while(true){
if((i__4498__auto___35069 < len__4497__auto___35068)){
args__4500__auto__.push((arguments[i__4498__auto___35069]));

var G__35070 = (i__4498__auto___35069 + (1));
i__4498__auto___35069 = G__35070;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return (((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__35055){
var vec__35056 = p__35055;
var k = cljs.core.nth.call(null,vec__35056,(0),null);
var _ = cljs.core.nth.call(null,vec__35056,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs)),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__35059){
var vec__35060 = p__35059;
var k = cljs.core.nth.call(null,vec__35060,(0),null);
var v = cljs.core.nth.call(null,vec__35060,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__35063){
var vec__35064 = p__35063;
var k = cljs.core.nth.call(null,vec__35064,(0),null);
var v = cljs.core.nth.call(null,vec__35064,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.get.call(null,kvs,k),null,(1),null)))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(new cljs.core.List(null,obj,null,(1),null)))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq35052){
var G__35053 = cljs.core.first.call(null,seq35052);
var seq35052__$1 = cljs.core.next.call(null,seq35052);
var G__35054 = cljs.core.first.call(null,seq35052__$1);
var seq35052__$2 = cljs.core.next.call(null,seq35052__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__35053,G__35054,seq35052__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__4531__auto___35071 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}.length",(new cljs.core.List(null,a,null,(1),null)),(2),null)),(3),null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__4531__auto___35074 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__35072__auto__","a__35072__auto__",168665528,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__35073__auto__","l__35073__auto__",-443558543,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__35072__auto__","a__35072__auto__",168665528,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__35072__auto__","a__35072__auto__",168665528,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__35073__auto__","l__35073__auto__",-443558543,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__4531__auto___35077 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__35075__auto__","a__35075__auto__",426892365,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__35076__auto__","l__35076__auto__",790296094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__35075__auto__","a__35075__auto__",426892365,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,init,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__35076__auto__","l__35076__auto__",790296094,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__4531__auto___35083 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35084 = arguments.length;
var i__4498__auto___35085 = (0);
while(true){
if((i__4498__auto___35085 < len__4497__auto___35084)){
args__4500__auto__.push((arguments[i__4498__auto___35085]));

var G__35086 = (i__4498__auto___35085 + (1));
i__4498__auto___35085 = G__35086;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"n__35078__auto__","n__35078__auto__",1285552087,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__35078__auto__","n__35078__auto__",1285552087,null),null,(1),null))))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq35079){
var G__35080 = cljs.core.first.call(null,seq35079);
var seq35079__$1 = cljs.core.next.call(null,seq35079);
var G__35081 = cljs.core.first.call(null,seq35079__$1);
var seq35079__$2 = cljs.core.next.call(null,seq35079__$1);
var G__35082 = cljs.core.first.call(null,seq35079__$2);
var seq35079__$3 = cljs.core.next.call(null,seq35079__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__35080,G__35081,G__35082,seq35079__$3);
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
var args__4500__auto__ = [];
var len__4497__auto___35090 = arguments.length;
var i__4498__auto___35091 = (0);
while(true){
if((i__4498__auto___35091 < len__4497__auto___35090)){
args__4500__auto__.push((arguments[i__4498__auto___35091]));

var G__35092 = (i__4498__auto___35091 + (1));
i__4498__auto___35091 = G__35092;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__35087_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35087_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq35088){
var G__35089 = cljs.core.first.call(null,seq35088);
var seq35088__$1 = cljs.core.next.call(null,seq35088);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__35089,seq35088__$1);
});

var ret__4531__auto___35102 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___35103 = arguments.length;
var i__4498__auto___35104 = (0);
while(true){
if((i__4498__auto___35104 < len__4497__auto___35103)){
args__4500__auto__.push((arguments[i__4498__auto___35104]));

var G__35105 = (i__4498__auto___35104 + (1));
i__4498__auto___35104 = G__35105;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,mm_name,m__$2),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__35093__auto__","method-table__35093__auto__",-384747927,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__35094__auto__","prefer-table__35094__auto__",960922219,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__35095__auto__","method-cache__35095__auto__",827716305,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__35096__auto__","cached-hierarchy__35096__auto__",-2033343205,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__35097__auto__","hierarchy__35097__auto__",-186240648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,options__$4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,mm_ns,null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,mm_name),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,dispatch_fn,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__35097__auto__","hierarchy__35097__auto__",-186240648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__35093__auto__","method-table__35093__auto__",-384747927,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__35094__auto__","prefer-table__35094__auto__",960922219,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__35095__auto__","method-cache__35095__auto__",827716305,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__35096__auto__","cached-hierarchy__35096__auto__",-2033343205,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq35098){
var G__35099 = cljs.core.first.call(null,seq35098);
var seq35098__$1 = cljs.core.next.call(null,seq35098);
var G__35100 = cljs.core.first.call(null,seq35098__$1);
var seq35098__$2 = cljs.core.next.call(null,seq35098__$1);
var G__35101 = cljs.core.first.call(null,seq35098__$2);
var seq35098__$3 = cljs.core.next.call(null,seq35098__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__35099,G__35100,G__35101,seq35098__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__4531__auto___35111 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35112 = arguments.length;
var i__4498__auto___35113 = (0);
while(true){
if((i__4498__auto___35113 < len__4497__auto___35112)){
args__4500__auto__.push((arguments[i__4498__auto___35113]));

var G__35114 = (i__4498__auto___35113 + (1));
i__4498__auto___35113 = G__35114;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((4) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4501__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null)),null,(1),null)),(new cljs.core.List(null,dispatch_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),fn_tail))),null,(1),null)))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq35106){
var G__35107 = cljs.core.first.call(null,seq35106);
var seq35106__$1 = cljs.core.next.call(null,seq35106);
var G__35108 = cljs.core.first.call(null,seq35106__$1);
var seq35106__$2 = cljs.core.next.call(null,seq35106__$1);
var G__35109 = cljs.core.first.call(null,seq35106__$2);
var seq35106__$3 = cljs.core.next.call(null,seq35106__$2);
var G__35110 = cljs.core.first.call(null,seq35106__$3);
var seq35106__$4 = cljs.core.next.call(null,seq35106__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__35107,G__35108,G__35109,G__35110,seq35106__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__4531__auto___35117 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__35115__auto__","start__35115__auto__",310132906,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35116__auto__","ret__35116__auto__",-781905226,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Elapsed time: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__35115__auto__","start__35115__auto__",310132906,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(6),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35116__auto__","ret__35116__auto__",-781905226,null),null,(1),null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__4531__auto___35132 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35133 = arguments.length;
var i__4498__auto___35134 = (0);
while(true){
if((i__4498__auto___35134 < len__4497__auto___35133)){
args__4500__auto__.push((arguments[i__4498__auto___35134]));

var G__35135 = (i__4498__auto___35134 + (1));
i__4498__auto___35134 = G__35135;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((5) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4501__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__35129){
var map__35130 = p__35129;
var map__35130__$1 = ((((!((map__35130 == null)))?(((((map__35130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35130):map__35130);
var print_fn = cljs.core.get.call(null,map__35130__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__35118__auto__","start__35118__auto__",-101652568,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35119__auto__","ret__35119__auto__",961282364,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___35120__auto__","___35120__auto__",1319460219,null),null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__35121__auto__","end__35121__auto__",-983650002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__35122__auto__","elapsed__35122__auto__",-1727679323,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__35121__auto__","end__35121__auto__",-983650002,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__35118__auto__","start__35118__auto__",-101652568,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,print_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,bs_str,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,expr_str,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)),(new cljs.core.List(null," runs, ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__35122__auto__","elapsed__35122__auto__",-1727679323,null),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq35123){
var G__35124 = cljs.core.first.call(null,seq35123);
var seq35123__$1 = cljs.core.next.call(null,seq35123);
var G__35125 = cljs.core.first.call(null,seq35123__$1);
var seq35123__$2 = cljs.core.next.call(null,seq35123__$1);
var G__35126 = cljs.core.first.call(null,seq35123__$2);
var seq35123__$3 = cljs.core.next.call(null,seq35123__$2);
var G__35127 = cljs.core.first.call(null,seq35123__$3);
var seq35123__$4 = cljs.core.next.call(null,seq35123__$3);
var G__35128 = cljs.core.first.call(null,seq35123__$4);
var seq35123__$5 = cljs.core.next.call(null,seq35123__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__35124,G__35125,G__35126,G__35127,G__35128,seq35123__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__35137 = arguments.length;
switch (G__35137) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core$macros.cs.call(null,(n - (1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),cljs.core.take.call(null,n,cljs.core$macros.cs)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.call(null,(n + (1))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"Only up to 20 arguments supported on functions",null,(1),null))))),null,(1),null)))));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__4531__auto___35139 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.call(null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__35140_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35140_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new_arg_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,proto_prop,null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,proto_inv,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),all_args))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),all_args))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__35141__auto__","arr__35141__auto__",-947396362,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),all_args))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"s__35142__auto__","s__35142__auto__",1335805061,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__35142__auto__","s__35142__auto__",1335805061,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__35141__auto__","arr__35141__auto__",-947396362,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__35142__auto__","s__35142__auto__",1335805061,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__35142__auto__","s__35142__auto__",1335805061,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__35141__auto__","arr__35141__auto__",-947396362,null),null,(1),null))))),null,(1),null))))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym)),null,(1),null))))),null,(1),null)))));
});
var ret__4531__auto___35143 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__4531__auto___35149 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35150 = arguments.length;
var i__4498__auto___35151 = (0);
while(true){
if((i__4498__auto___35151 < len__4497__auto___35150)){
args__4500__auto__.push((arguments[i__4498__auto___35151]));

var G__35152 = (i__4498__auto___35151 + (1));
i__4498__auto___35151 = G__35152;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__35144__auto__","sb__35144__auto__",-90758569,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35145__auto__","x__35145__auto__",1273894681,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".append",".append",1595439852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__35144__auto__","sb__35144__auto__",-90758569,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35145__auto__","x__35145__auto__",1273894681,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__35144__auto__","sb__35144__auto__",-90758569,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq35146){
var G__35147 = cljs.core.first.call(null,seq35146);
var seq35146__$1 = cljs.core.next.call(null,seq35146);
var G__35148 = cljs.core.first.call(null,seq35146__$1);
var seq35146__$2 = cljs.core.next.call(null,seq35146__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__35147,G__35148,seq35146__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__4531__auto___35157 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35158 = arguments.length;
var i__4498__auto___35159 = (0);
while(true){
if((i__4498__auto___35159 < len__4497__auto___35158)){
args__4500__auto__.push((arguments[i__4498__auto___35159]));

var G__35160 = (i__4498__auto___35159 + (1));
i__4498__auto___35159 = G__35160;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.map.call(null,(function (p1__35153_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),(new cljs.core.List(null,p1__35153_SHARP_,null,(1),null)),(2),null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq35154){
var G__35155 = cljs.core.first.call(null,seq35154);
var seq35154__$1 = cljs.core.next.call(null,seq35154);
var G__35156 = cljs.core.first.call(null,seq35154__$1);
var seq35154__$2 = cljs.core.next.call(null,seq35154__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__35155,G__35156,seq35154__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__4531__auto___35161 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"''+~{}",(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__4531__auto___35163 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null),null,(1),null)),(new cljs.core.List(null,ty,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__35162__auto__","this__35162__auto__",-1754288571,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__35162__auto__","this__35162__auto__",-1754288571,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__4531__auto___35172 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__35164){
var vec__35165 = p__35164;
var sym = cljs.core.nth.call(null,vec__35165,(0),null);
var _ = cljs.core.nth.call(null,vec__35165,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym)),null,(1),null))))),null,(1),null))))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__35168){
var vec__35169 = p__35168;
var _ = cljs.core.nth.call(null,vec__35169,(0),null);
var info = cljs.core.nth.call(null,vec__35169,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))))),null,(1),null)))));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__4531__auto___35177 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__35173){
var vec__35174 = p__35173;
var ctor = cljs.core.nth.call(null,vec__35174,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__35174,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,ctor),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,qualified_ctor),null,(1),null))))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null))))))),null,(1),null)))));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__4531__auto___35182 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__35178){
var vec__35179 = p__35178;
var sym = cljs.core.nth.call(null,vec__35179,(0),null);
var _ = cljs.core.nth.call(null,vec__35179,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym)),null,(1),null))))),null,(1),null))))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))),null,(1),null)))));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__4531__auto___35183 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null),null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.call(null,ns),null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),null,(1),null)))));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__4531__auto___35189 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35190 = arguments.length;
var i__4498__auto___35191 = (0);
while(true){
if((i__4498__auto___35191 < len__4497__auto___35190)){
args__4500__auto__.push((arguments[i__4498__auto___35191]));

var G__35192 = (i__4498__auto___35191 + (1));
i__4498__auto___35191 = G__35192;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((4) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4501__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null))))),null,(1),null)),args))),null,(1),null)))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq35184){
var G__35185 = cljs.core.first.call(null,seq35184);
var seq35184__$1 = cljs.core.next.call(null,seq35184);
var G__35186 = cljs.core.first.call(null,seq35184__$1);
var seq35184__$2 = cljs.core.next.call(null,seq35184__$1);
var G__35187 = cljs.core.first.call(null,seq35184__$2);
var seq35184__$3 = cljs.core.next.call(null,seq35184__$2);
var G__35188 = cljs.core.first.call(null,seq35184__$3);
var seq35184__$4 = cljs.core.next.call(null,seq35184__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35185,G__35186,G__35187,G__35188,seq35184__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__4531__auto___35197 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35198 = arguments.length;
var i__4498__auto___35199 = (0);
while(true){
if((i__4498__auto___35199 < len__4497__auto___35198)){
args__4500__auto__.push((arguments[i__4498__auto___35199]));

var G__35200 = (i__4498__auto___35199 + (1));
i__4498__auto___35199 = G__35200;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq35193){
var G__35194 = cljs.core.first.call(null,seq35193);
var seq35193__$1 = cljs.core.next.call(null,seq35193);
var G__35195 = cljs.core.first.call(null,seq35193__$1);
var seq35193__$2 = cljs.core.next.call(null,seq35193__$1);
var G__35196 = cljs.core.first.call(null,seq35193__$2);
var seq35193__$3 = cljs.core.next.call(null,seq35193__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__35194,G__35195,G__35196,seq35193__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__4531__auto___35201 = cljs.core$macros.ns_special_form = (function cljs$core$macros$ns_special_form(_AMPERSAND_form,_AMPERSAND_env){
return null;
});
cljs.core$macros.ns_special_form.cljs$lang$macro = true;

var ret__4531__auto___35205 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___35206 = arguments.length;
var i__4498__auto___35207 = (0);
while(true){
if((i__4498__auto___35207 < len__4497__auto___35206)){
args__4500__auto__.push((arguments[i__4498__auto___35207]));

var G__35208 = (i__4498__auto___35207 + (1));
i__4498__auto___35207 = G__35208;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args),null,(1),null)))));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq35202){
var G__35203 = cljs.core.first.call(null,seq35202);
var seq35202__$1 = cljs.core.next.call(null,seq35202);
var G__35204 = cljs.core.first.call(null,seq35202__$1);
var seq35202__$2 = cljs.core.next.call(null,seq35202__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__35203,G__35204,seq35202__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__4531__auto___35212 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35213 = arguments.length;
var i__4498__auto___35214 = (0);
while(true){
if((i__4498__auto___35214 < len__4497__auto___35213)){
args__4500__auto__.push((arguments[i__4498__auto___35214]));

var G__35215 = (i__4498__auto___35214 + (1));
i__4498__auto___35214 = G__35215;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args),null,(1),null)))));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq35209){
var G__35210 = cljs.core.first.call(null,seq35209);
var seq35209__$1 = cljs.core.next.call(null,seq35209);
var G__35211 = cljs.core.first.call(null,seq35209__$1);
var seq35209__$2 = cljs.core.next.call(null,seq35209__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__35210,G__35211,seq35209__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__4531__auto___35219 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___35220 = arguments.length;
var i__4498__auto___35221 = (0);
while(true){
if((i__4498__auto___35221 < len__4497__auto___35220)){
args__4500__auto__.push((arguments[i__4498__auto___35221]));

var G__35222 = (i__4498__auto___35221 + (1));
i__4498__auto___35221 = G__35222;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args),null,(1),null)))));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq35216){
var G__35217 = cljs.core.first.call(null,seq35216);
var seq35216__$1 = cljs.core.next.call(null,seq35216);
var G__35218 = cljs.core.first.call(null,seq35216__$1);
var seq35216__$2 = cljs.core.next.call(null,seq35216__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__35217,G__35218,seq35216__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__4531__auto___35226 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35227 = arguments.length;
var i__4498__auto___35228 = (0);
while(true){
if((i__4498__auto___35228 < len__4497__auto___35227)){
args__4500__auto__.push((arguments[i__4498__auto___35228]));

var G__35229 = (i__4498__auto___35228 + (1));
i__4498__auto___35228 = G__35229;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args),null,(1),null)))));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq35223){
var G__35224 = cljs.core.first.call(null,seq35223);
var seq35223__$1 = cljs.core.next.call(null,seq35223);
var G__35225 = cljs.core.first.call(null,seq35223__$1);
var seq35223__$2 = cljs.core.next.call(null,seq35223__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__35224,G__35225,seq35223__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__4531__auto___35233 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__4500__auto__ = [];
var len__4497__auto___35234 = arguments.length;
var i__4498__auto___35235 = (0);
while(true){
if((i__4498__auto___35235 < len__4497__auto___35234)){
args__4500__auto__.push((arguments[i__4498__auto___35235]));

var G__35236 = (i__4498__auto___35235 + (1));
i__4498__auto___35235 = G__35236;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists),null,(1),null)))));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq35230){
var G__35231 = cljs.core.first.call(null,seq35230);
var seq35230__$1 = cljs.core.next.call(null,seq35230);
var G__35232 = cljs.core.first.call(null,seq35230__$1);
var seq35230__$2 = cljs.core.next.call(null,seq35230__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__35231,G__35232,seq35230__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__4531__auto___35240 = (function (){
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
var args__4500__auto__ = [];
var len__4497__auto___35241 = arguments.length;
var i__4498__auto___35242 = (0);
while(true){
if((i__4498__auto___35242 < len__4497__auto___35241)){
args__4500__auto__.push((arguments[i__4498__auto___35242]));

var G__35243 = (i__4498__auto___35242 + (1));
i__4498__auto___35242 = G__35243;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args),null,(1),null)))));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq35237){
var G__35238 = cljs.core.first.call(null,seq35237);
var seq35237__$1 = cljs.core.next.call(null,seq35237);
var G__35239 = cljs.core.first.call(null,seq35237__$1);
var seq35237__$2 = cljs.core.next.call(null,seq35237__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__35238,G__35239,seq35237__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__4531__auto___35244 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","goog","js/goog",-70605150,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__4531__auto___35245 = /**
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form),null,(1),null)))));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__4531__auto___35246 = /**
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
var G__35247 = form_SINGLEQUOTE_;
var G__35248 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__35247;
form_SINGLEQUOTE_ = G__35248;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form_SINGLEQUOTE_,null,(1),null)))));
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
var and__3911__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__3911__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__3911__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__35250 = arguments.length;
switch (G__35250) {
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

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__35251,solo){
var vec__35252 = p__35251;
var seq__35253 = cljs.core.seq.call(null,vec__35252);
var first__35254 = cljs.core.first.call(null,seq__35253);
var seq__35253__$1 = cljs.core.next.call(null,seq__35253);
var arglist = first__35254;
var body = seq__35253__$1;
var method = vec__35252;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__35252,seq__35253,first__35254,seq__35253__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__35252,seq__35253,first__35254,seq__35253__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__35252,seq__35253,first__35254,seq__35253__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__35252,seq__35253,first__35254,seq__35253__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__35252,seq__35253,first__35254,seq__35253__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,param,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/Users/jocrau/.cljs/.aot_cache/1.10.145/020545A/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3011,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,49,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3011,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,54,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/Users/jocrau/.cljs/.aot_cache/1.10.145/020545A/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3012,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,51,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3012,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))));
});})(sig,restarg,vec__35252,seq__35253,first__35254,seq__35253__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__35252,seq__35253,first__35254,seq__35253__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,get_delegate.call(null),null,(1),null)),params,(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,get_delegate.call(null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}
});})(sig,restarg,vec__35252,seq__35253,first__35254,seq__35253__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,get_delegate_prop.call(null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,sig),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(cljs.core.count.call(null,sig) - (1)),null,(1),null))))),null,(1),null)))))):null),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,apply_to.call(null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__4531__auto___35258 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"len__35256__auto__","len__35256__auto__",-485574497,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"i__35257__auto__","i__35257__auto__",1693725050,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__35257__auto__","i__35257__auto__",1693725050,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"len__35256__auto__","len__35256__auto__",-485574497,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,dest,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__35257__auto__","i__35257__auto__",1693725050,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__35257__auto__","i__35257__auto__",1693725050,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__35261,emit_var_QMARK_){
var vec__35262 = p__35261;
var vec__35265 = cljs.core.nth.call(null,vec__35262,(0),null);
var seq__35266 = cljs.core.seq.call(null,vec__35265);
var first__35267 = cljs.core.first.call(null,seq__35266);
var seq__35266__$1 = cljs.core.next.call(null,seq__35266);
var arglist = first__35267;
var body = seq__35266__$1;
var method = vec__35265;
var fdecl = vec__35262;
var dest_args = ((function (vec__35262,vec__35265,seq__35266,first__35267,seq__35266__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__35262,vec__35265,seq__35266,first__35267,seq__35266__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
});})(vec__35262,vec__35265,seq__35266,first__35267,seq__35266__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__35262,vec__35265,seq__35266,first__35267,seq__35266__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,arglist,null,(1),null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,name,meta__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args__35259__auto__","args__35259__auto__",-714882604,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__35259__auto__","args__35259__auto__",-714882604,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__35260__auto__","argseq__35260__auto__",1602129927,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,c_1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__35259__auto__","args__35259__auto__",-714882604,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/Users/jocrau/.cljs/.aot_cache/1.10.145/020545A/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3059,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3059,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,75,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__35259__auto__","args__35259__auto__",-714882604,null),null,(1),null)),(new cljs.core.List(null,c_1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args.call(null,c_1),(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__35260__auto__","argseq__35260__auto__",1602129927,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.variadic_fn_STAR_.call(null,rname,method),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))):null),null,(1),null)))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('')),null,(1),null)),dest_args.call(null,c)))),null,(1),null)))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__35276){
var vec__35277 = p__35276;
var seq__35278 = cljs.core.seq.call(null,vec__35277);
var first__35279 = cljs.core.first.call(null,seq__35278);
var seq__35278__$1 = cljs.core.next.call(null,seq__35278);
var sig = first__35279;
var body = seq__35278__$1;
var method = vec__35277;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,method,null,(1),null))))),null,(1),null)))));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__35268_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__35268_SHARP_);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,name,meta__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__35269_SHARP_){
return fixed_arity.call(null,rname,p1__35269_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(new cljs.core.List(null,((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__35270__auto__","args-arr__35270__auto__",398579335,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__35270__auto__","args-arr__35270__auto__",398579335,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__35271__auto__","argseq__35271__auto__",-79946875,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/Users/jocrau/.cljs/.aot_cache/1.10.145/020545A/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3120,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,59,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3120,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,79,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__35270__auto__","args-arr__35270__auto__",398579335,null),null,(1),null)),(new cljs.core.List(null,maxfa,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args.call(null,maxfa),(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__35271__auto__","argseq__35271__auto__",-79946875,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,fn_method,fdecl),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,maxfa,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))):null),null,(1),null)))));
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core$macros.sigs.call(null,fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta.call(null,name,m__$4),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4),null,(1),null)),(2),null)),(3),null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__35280__i = 0, G__35280__a = new Array(arguments.length -  3);
while (G__35280__i < G__35280__a.length) {G__35280__a[G__35280__i] = arguments[G__35280__i + 3]; ++G__35280__i;}
  fdecl = new cljs.core.IndexedSeq(G__35280__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__35281){
var _AMPERSAND_form = cljs.core.first(arglist__35281);
arglist__35281 = cljs.core.next(arglist__35281);
var _AMPERSAND_env = cljs.core.first(arglist__35281);
arglist__35281 = cljs.core.next(arglist__35281);
var name = cljs.core.first(arglist__35281);
var fdecl = cljs.core.rest(arglist__35281);
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
var args__4500__auto__ = [];
var len__4497__auto___35287 = arguments.length;
var i__4498__auto___35288 = (0);
while(true){
if((i__4498__auto___35288 < len__4497__auto___35287)){
args__4500__auto__.push((arguments[i__4498__auto___35288]));

var G__35289 = (i__4498__auto___35288 + (1));
i__4498__auto___35288 = G__35289;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (new cljs.core.List(null,cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true),null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__35290 = cljs.core.cons.call(null,f,p);
var G__35291 = cljs.core.next.call(null,args__$1);
p = G__35290;
args__$1 = G__35291;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__35292 = cljs.core.cons.call(null,f,p);
var G__35293 = cljs.core.next.call(null,args__$1);
p = G__35292;
args__$1 = G__35293;
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
var G__35294 = cljs.core.next.call(null,fd);
fd = G__35294;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__35295 = cljs.core.next.call(null,fd);
fd = G__35295;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
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
var G__35296 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__35297 = cljs.core.next.call(null,ds);
acc = G__35296;
ds = G__35297;
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
var G__35298 = cljs.core.next.call(null,p);
var G__35299 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__35298;
d = G__35299;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35282__auto__","ret__35282__auto__",1898885080,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35282__auto__","ret__35282__auto__",1898885080,null),null,(1),null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq35283){
var G__35284 = cljs.core.first.call(null,seq35283);
var seq35283__$1 = cljs.core.next.call(null,seq35283);
var G__35285 = cljs.core.first.call(null,seq35283__$1);
var seq35283__$2 = cljs.core.next.call(null,seq35283__$1);
var G__35286 = cljs.core.first.call(null,seq35283__$2);
var seq35283__$3 = cljs.core.next.call(null,seq35283__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__35284,G__35285,G__35286,seq35283__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__4531__auto___35304 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if(((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym))))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__35300 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e35303){var e = e35303;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__35300,(0),null);
var meta = cljs.core.nth.call(null,vec__35300,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,meta,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map?rel=1521297435842
