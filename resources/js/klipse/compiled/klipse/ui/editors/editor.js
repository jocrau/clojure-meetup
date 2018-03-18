// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.ui.editors.editor');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.dom_utils');
goog.require('gadjett.collections');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.edit.closebrackets');
goog.require('clojure.string');
klipse.ui.editors.editor.code_mirror = CodeMirror;
klipse.ui.editors.editor.create = (function klipse$ui$editors$editor$create(dom_id,config){
return CodeMirror.fromTextArea(document.getElementById(dom_id),cljs.core.clj__GT_js.call(null,config));
});
klipse.ui.editors.editor.get_value = (function klipse$ui$editors$editor$get_value(editor){
return editor.getValue();
});
klipse.ui.editors.editor.get_selection = (function klipse$ui$editors$editor$get_selection(editor){
return editor.getSelection();
});
klipse.ui.editors.editor.get_selection_or_nil = (function klipse$ui$editors$editor$get_selection_or_nil(editor){
var s = klipse.ui.editors.editor.get_selection.call(null,editor);
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
klipse.ui.editors.editor.get_selection_when_selected = (function klipse$ui$editors$editor$get_selection_when_selected(editor){
var or__8916__auto__ = klipse.ui.editors.editor.get_selection_or_nil.call(null,editor);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return klipse.ui.editors.editor.get_value.call(null,editor);
}
});
klipse.ui.editors.editor.set_value = (function klipse$ui$editors$editor$set_value(editor,value){
editor.setValue(value);

return editor;
});
klipse.ui.editors.editor.on_change = (function klipse$ui$editors$editor$on_change(editor,f){
editor.on("change",f);

return editor;
});
klipse.ui.editors.editor.set_option = (function klipse$ui$editors$editor$set_option(editor,option,value){
editor.setOption(option,value);

return editor;
});
klipse.ui.editors.editor.fix_blank_lines = (function klipse$ui$editors$editor$fix_blank_lines(editor){
return klipse.ui.editors.editor.set_value.call(null,editor,gadjett.collections.fix_blank_lines.call(null,klipse.ui.editors.editor.get_value.call(null,editor)));
});
if(typeof klipse.ui.editors.editor.beautify_language !== 'undefined'){
} else {
klipse.ui.editors.editor.beautify_language = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.ui.editors.editor","beautify-language"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function (editor,mode){
return mode;
});})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,klipse.ui.editors.editor.beautify_language,new cljs.core.Keyword(null,"default","default",-1987822328),(function (editor,_){
return editor;
}));
cljs.core._add_method.call(null,klipse.ui.editors.editor.beautify_language,"text/x-sql",(function (editor,_){
return klipse.ui.editors.editor.set_value.call(null,editor,(function (){var obj_SHARP_ = sqlFormatter;
var fn_SHARP_ = (obj_SHARP_["format"]);
return fn_SHARP_.call(obj_SHARP_,klipse.ui.editors.editor.get_value.call(null,editor));
})());
}));
klipse.ui.editors.editor.fix_comments_lines = (function klipse$ui$editors$editor$fix_comments_lines(editor,mode){
if(cljs.core._EQ_.call(null,"clojure",mode)){
return klipse.ui.editors.editor.set_value.call(null,editor,gadjett.collections.remove_ending_comments.call(null,klipse.ui.editors.editor.get_value.call(null,editor)));
} else {
return editor;
}
});
klipse.ui.editors.editor.do_indent = (function klipse$ui$editors$editor$do_indent(editor){
var obj_SHARP__36858 = editor;
var fn_SHARP__36859 = (obj_SHARP__36858["operation"]);
fn_SHARP__36859.call(obj_SHARP__36858,((function (obj_SHARP__36858,fn_SHARP__36859){
return (function (){
var n__9961__auto__ = (function (){var obj_SHARP___$1 = editor;
var fn_SHARP___$1 = (obj_SHARP___$1["lineCount"]);
return fn_SHARP___$1.call(obj_SHARP___$1);
})();
var line = (0);
while(true){
if((line < n__9961__auto__)){
var obj_SHARP__36860__$1 = editor;
var fn_SHARP__36861__$1 = (obj_SHARP__36860__$1["indentLine"]);
fn_SHARP__36861__$1.call(obj_SHARP__36860__$1,line,"smart");

var G__36862 = (line + (1));
line = G__36862;
continue;
} else {
return null;
}
break;
}
});})(obj_SHARP__36858,fn_SHARP__36859))
);

return editor;
});
klipse.ui.editors.editor.beautify = (function klipse$ui$editors$editor$beautify(editor,mode,p__36863){
var map__36864 = p__36863;
var map__36864__$1 = ((((!((map__36864 == null)))?((((map__36864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36864):map__36864);
var indent_QMARK_ = cljs.core.get.call(null,map__36864__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__36864__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614));
var $ = editor;
var $__$1 = (cljs.core.truth_(indent_QMARK_)?klipse.ui.editors.editor.do_indent.call(null,$):$);
var $__$2 = klipse.ui.editors.editor.fix_blank_lines.call(null,$__$1);
var $__$3 = (cljs.core.truth_(remove_ending_comments_QMARK_)?klipse.ui.editors.editor.fix_comments_lines.call(null,$__$2,mode):$__$2);
return klipse.ui.editors.editor.beautify_language.call(null,$__$3,mode);
});
klipse.ui.editors.editor.set_value_and_beautify = (function klipse$ui$editors$editor$set_value_and_beautify(editor,mode,value,opts){
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,opts);
});
klipse.ui.editors.editor.replace_element_by_editor = (function klipse$ui$editors$editor$replace_element_by_editor(var_args){
var args__10202__auto__ = [];
var len__10195__auto___36876 = arguments.length;
var i__10196__auto___36877 = (0);
while(true){
if((i__10196__auto___36877 < len__10195__auto___36876)){
args__10202__auto__.push((arguments[i__10196__auto___36877]));

var G__36878 = (i__10196__auto___36877 + (1));
i__10196__auto___36877 = G__36878;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,p__36870,p__36871){
var map__36872 = p__36870;
var map__36872__$1 = ((((!((map__36872 == null)))?((((map__36872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36872):map__36872);
var opts = map__36872__$1;
var mode = cljs.core.get.call(null,map__36872__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var map__36873 = p__36871;
var map__36873__$1 = ((((!((map__36873 == null)))?((((map__36873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36873):map__36873);
var klass = cljs.core.get.call(null,map__36873__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var indent_QMARK_ = cljs.core.get.call(null,map__36873__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true);
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__36873__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),true);
var editor = CodeMirror(((function (map__36872,map__36872__$1,opts,mode,map__36873,map__36873__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_){
return (function (elt){
if(cljs.core.not.call(null,klass)){
return goog.dom.replaceNode(elt,element);
} else {
var wrapping_div = goog.dom.createElement("div");
goog.dom.appendChild(wrapping_div,elt);

goog.dom.replaceNode(wrapping_div,element);

return klipse.dom_utils.add_class.call(null,wrapping_div,klass);
}
});})(map__36872,map__36872__$1,opts,mode,map__36873,map__36873__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_))
,cljs.core.clj__GT_js.call(null,opts));
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_], null));
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$maxFixedArity = (3);

klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$applyTo = (function (seq36866){
var G__36867 = cljs.core.first.call(null,seq36866);
var seq36866__$1 = cljs.core.next.call(null,seq36866);
var G__36868 = cljs.core.first.call(null,seq36866__$1);
var seq36866__$2 = cljs.core.next.call(null,seq36866__$1);
var G__36869 = cljs.core.first.call(null,seq36866__$2);
var seq36866__$3 = cljs.core.next.call(null,seq36866__$2);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic(G__36867,G__36868,G__36869,seq36866__$3);
});

klipse.ui.editors.editor.replace_id_by_editor = (function klipse$ui$editors$editor$replace_id_by_editor(var_args){
var args__10202__auto__ = [];
var len__10195__auto___36882 = arguments.length;
var i__10196__auto___36883 = (0);
while(true){
if((i__10196__auto___36883 < len__10195__auto___36882)){
args__10202__auto__.push((arguments[i__10196__auto___36883]));

var G__36884 = (i__10196__auto___36883 + (1));
i__10196__auto___36883 = G__36884;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (id,cm_opts,more_opts){
var element = goog.dom.getElement(id);
var value = (element["textContent"]);
return cljs.core.apply.call(null,klipse.ui.editors.editor.replace_element_by_editor,element,value,cm_opts,more_opts);
});

klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$maxFixedArity = (2);

klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$applyTo = (function (seq36879){
var G__36880 = cljs.core.first.call(null,seq36879);
var seq36879__$1 = cljs.core.next.call(null,seq36879);
var G__36881 = cljs.core.first.call(null,seq36879__$1);
var seq36879__$2 = cljs.core.next.call(null,seq36879__$1);
return klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic(G__36880,G__36881,seq36879__$2);
});

klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(var_args){
var args__10202__auto__ = [];
var len__10195__auto___36892 = arguments.length;
var i__10196__auto___36893 = (0);
while(true){
if((i__10196__auto___36893 < len__10195__auto___36892)){
args__10202__auto__.push((arguments[i__10196__auto___36893]));

var G__36894 = (i__10196__auto___36893 + (1));
i__10196__auto___36893 = G__36894;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,opts,p__36889){
var map__36890 = p__36889;
var map__36890__$1 = ((((!((map__36890 == null)))?((((map__36890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36890):map__36890);
var klass = cljs.core.get.call(null,map__36890__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__36890__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false);
var indent_QMARK_ = cljs.core.get.call(null,map__36890__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false);
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.dom_utils.create_div_after.call(null,element,cljs.core.PersistentArrayMap.EMPTY),value,opts,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$lang$maxFixedArity = (3);

klipse.ui.editors.editor.create_editor_after_element.cljs$lang$applyTo = (function (seq36885){
var G__36886 = cljs.core.first.call(null,seq36885);
var seq36885__$1 = cljs.core.next.call(null,seq36885);
var G__36887 = cljs.core.first.call(null,seq36885__$1);
var seq36885__$2 = cljs.core.next.call(null,seq36885__$1);
var G__36888 = cljs.core.first.call(null,seq36885__$2);
var seq36885__$3 = cljs.core.next.call(null,seq36885__$2);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic(G__36886,G__36887,G__36888,seq36885__$3);
});


//# sourceMappingURL=editor.js.map
