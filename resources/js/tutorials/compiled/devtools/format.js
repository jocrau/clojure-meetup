// Compiled by ClojureScript 1.10.145 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._header[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._header["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._has_body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o23045 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23045["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23046 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23046["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23047 = temp__5455__auto____$2;
return (o23047["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o23048 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23048["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23049 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23049["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23050 = temp__5455__auto____$2;
return (o23050["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o23051 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23051["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23052 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23052["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23053 = temp__5455__auto____$2;
return (o23053["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o23054 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23054["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23055 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23055["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23056 = temp__5455__auto____$2;
return (o23056["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o23057 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23057["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23058 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23058["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23059 = temp__5455__auto____$2;
return (o23059["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o23060 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23060["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23061 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23061["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23062 = temp__5455__auto____$2;
return (o23062["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o23063 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23063["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23064 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23064["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23065 = temp__5455__auto____$2;
return (o23065["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23067 = arguments.length;
var i__4498__auto___23068 = (0);
while(true){
if((i__4498__auto___23068 < len__4497__auto___23067)){
args__4500__auto__.push((arguments[i__4498__auto___23068]));

var G__23069 = (i__4498__auto___23068 + (1));
i__4498__auto___23068 = G__23069;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq23066){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23066));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23071 = arguments.length;
var i__4498__auto___23072 = (0);
while(true){
if((i__4498__auto___23072 < len__4497__auto___23071)){
args__4500__auto__.push((arguments[i__4498__auto___23072]));

var G__23073 = (i__4498__auto___23072 + (1));
i__4498__auto___23072 = G__23073;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq23070){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23070));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23075 = arguments.length;
var i__4498__auto___23076 = (0);
while(true){
if((i__4498__auto___23076 < len__4497__auto___23075)){
args__4500__auto__.push((arguments[i__4498__auto___23076]));

var G__23077 = (i__4498__auto___23076 + (1));
i__4498__auto___23076 = G__23077;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq23074){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23074));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23079 = arguments.length;
var i__4498__auto___23080 = (0);
while(true){
if((i__4498__auto___23080 < len__4497__auto___23079)){
args__4500__auto__.push((arguments[i__4498__auto___23080]));

var G__23081 = (i__4498__auto___23080 + (1));
i__4498__auto___23080 = G__23081;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq23078){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23078));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23083 = arguments.length;
var i__4498__auto___23084 = (0);
while(true){
if((i__4498__auto___23084 < len__4497__auto___23083)){
args__4500__auto__.push((arguments[i__4498__auto___23084]));

var G__23085 = (i__4498__auto___23084 + (1));
i__4498__auto___23084 = G__23085;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq23082){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23082));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23087 = arguments.length;
var i__4498__auto___23088 = (0);
while(true){
if((i__4498__auto___23088 < len__4497__auto___23087)){
args__4500__auto__.push((arguments[i__4498__auto___23088]));

var G__23089 = (i__4498__auto___23088 + (1));
i__4498__auto___23088 = G__23089;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq23086){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23086));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23091 = arguments.length;
var i__4498__auto___23092 = (0);
while(true){
if((i__4498__auto___23092 < len__4497__auto___23091)){
args__4500__auto__.push((arguments[i__4498__auto___23092]));

var G__23093 = (i__4498__auto___23092 + (1));
i__4498__auto___23092 = G__23093;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq23090){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23090));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23101 = arguments.length;
var i__4498__auto___23102 = (0);
while(true){
if((i__4498__auto___23102 < len__4497__auto___23101)){
args__4500__auto__.push((arguments[i__4498__auto___23102]));

var G__23103 = (i__4498__auto___23102 + (1));
i__4498__auto___23102 = G__23103;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__23097){
var vec__23098 = p__23097;
var state_override = cljs.core.nth.call(null,vec__23098,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__23098,state_override){
return (function (p1__23094_SHARP_){
return cljs.core.merge.call(null,p1__23094_SHARP_,state_override);
});})(vec__23098,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq23095){
var G__23096 = cljs.core.first.call(null,seq23095);
var seq23095__$1 = cljs.core.next.call(null,seq23095);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__23096,seq23095__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23105 = arguments.length;
var i__4498__auto___23106 = (0);
while(true){
if((i__4498__auto___23106 < len__4497__auto___23105)){
args__4500__auto__.push((arguments[i__4498__auto___23106]));

var G__23107 = (i__4498__auto___23106 + (1));
i__4498__auto___23106 = G__23107;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq23104){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23104));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___23110 = arguments.length;
var i__4498__auto___23111 = (0);
while(true){
if((i__4498__auto___23111 < len__4497__auto___23110)){
args__4500__auto__.push((arguments[i__4498__auto___23111]));

var G__23112 = (i__4498__auto___23111 + (1));
i__4498__auto___23111 = G__23112;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq23108){
var G__23109 = cljs.core.first.call(null,seq23108);
var seq23108__$1 = cljs.core.next.call(null,seq23108);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__23109,seq23108__$1);
});


//# sourceMappingURL=format.js.map?rel=1521146633109
