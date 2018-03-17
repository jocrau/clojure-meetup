// Compiled by ClojureScript 1.10.145 {}
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
var or__3922__auto__ = klipse.ui.editors.editor.get_selection_or_nil.call(null,editor);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
klipse.ui.editors.editor.beautify_language = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.ui.editors.editor","beautify-language"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (editor,mode){
return mode;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
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
var obj_SHARP__12509 = editor;
var fn_SHARP__12510 = (obj_SHARP__12509["operation"]);
fn_SHARP__12510.call(obj_SHARP__12509,((function (obj_SHARP__12509,fn_SHARP__12510){
return (function (){
var n__4376__auto__ = (function (){var obj_SHARP___$1 = editor;
var fn_SHARP___$1 = (obj_SHARP___$1["lineCount"]);
return fn_SHARP___$1.call(obj_SHARP___$1);
})();
var line = (0);
while(true){
if((line < n__4376__auto__)){
var obj_SHARP__12511__$1 = editor;
var fn_SHARP__12512__$1 = (obj_SHARP__12511__$1["indentLine"]);
fn_SHARP__12512__$1.call(obj_SHARP__12511__$1,line,"smart");

var G__12513 = (line + (1));
line = G__12513;
continue;
} else {
return null;
}
break;
}
});})(obj_SHARP__12509,fn_SHARP__12510))
);

return editor;
});
klipse.ui.editors.editor.beautify = (function klipse$ui$editors$editor$beautify(editor,mode,p__12514){
var map__12515 = p__12514;
var map__12515__$1 = ((((!((map__12515 == null)))?(((((map__12515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12515):map__12515);
var indent_QMARK_ = cljs.core.get.call(null,map__12515__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__12515__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614));
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
var args__4500__auto__ = [];
var len__4497__auto___12527 = arguments.length;
var i__4498__auto___12528 = (0);
while(true){
if((i__4498__auto___12528 < len__4497__auto___12527)){
args__4500__auto__.push((arguments[i__4498__auto___12528]));

var G__12529 = (i__4498__auto___12528 + (1));
i__4498__auto___12528 = G__12529;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,p__12521,p__12522){
var map__12523 = p__12521;
var map__12523__$1 = ((((!((map__12523 == null)))?(((((map__12523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12523):map__12523);
var opts = map__12523__$1;
var mode = cljs.core.get.call(null,map__12523__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var map__12524 = p__12522;
var map__12524__$1 = ((((!((map__12524 == null)))?(((((map__12524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12524):map__12524);
var klass = cljs.core.get.call(null,map__12524__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var indent_QMARK_ = cljs.core.get.call(null,map__12524__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true);
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__12524__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),true);
var editor = CodeMirror(((function (map__12523,map__12523__$1,opts,mode,map__12524,map__12524__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_){
return (function (elt){
if(cljs.core.not.call(null,klass)){
return goog.dom.replaceNode(elt,element);
} else {
var wrapping_div = goog.dom.createElement("div");
goog.dom.appendChild(wrapping_div,elt);

goog.dom.replaceNode(wrapping_div,element);

return klipse.dom_utils.add_class.call(null,wrapping_div,klass);
}
});})(map__12523,map__12523__$1,opts,mode,map__12524,map__12524__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_))
,cljs.core.clj__GT_js.call(null,opts));
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_], null));
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$maxFixedArity = (3);

klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$applyTo = (function (seq12517){
var G__12518 = cljs.core.first.call(null,seq12517);
var seq12517__$1 = cljs.core.next.call(null,seq12517);
var G__12519 = cljs.core.first.call(null,seq12517__$1);
var seq12517__$2 = cljs.core.next.call(null,seq12517__$1);
var G__12520 = cljs.core.first.call(null,seq12517__$2);
var seq12517__$3 = cljs.core.next.call(null,seq12517__$2);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic(G__12518,G__12519,G__12520,seq12517__$3);
});

klipse.ui.editors.editor.replace_id_by_editor = (function klipse$ui$editors$editor$replace_id_by_editor(var_args){
var args__4500__auto__ = [];
var len__4497__auto___12533 = arguments.length;
var i__4498__auto___12534 = (0);
while(true){
if((i__4498__auto___12534 < len__4497__auto___12533)){
args__4500__auto__.push((arguments[i__4498__auto___12534]));

var G__12535 = (i__4498__auto___12534 + (1));
i__4498__auto___12534 = G__12535;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (id,cm_opts,more_opts){
var element = goog.dom.getElement(id);
var value = (element["textContent"]);
return cljs.core.apply.call(null,klipse.ui.editors.editor.replace_element_by_editor,element,value,cm_opts,more_opts);
});

klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$maxFixedArity = (2);

klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$applyTo = (function (seq12530){
var G__12531 = cljs.core.first.call(null,seq12530);
var seq12530__$1 = cljs.core.next.call(null,seq12530);
var G__12532 = cljs.core.first.call(null,seq12530__$1);
var seq12530__$2 = cljs.core.next.call(null,seq12530__$1);
return klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic(G__12531,G__12532,seq12530__$2);
});

klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(var_args){
var args__4500__auto__ = [];
var len__4497__auto___12543 = arguments.length;
var i__4498__auto___12544 = (0);
while(true){
if((i__4498__auto___12544 < len__4497__auto___12543)){
args__4500__auto__.push((arguments[i__4498__auto___12544]));

var G__12545 = (i__4498__auto___12544 + (1));
i__4498__auto___12544 = G__12545;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,opts,p__12540){
var map__12541 = p__12540;
var map__12541__$1 = ((((!((map__12541 == null)))?(((((map__12541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12541):map__12541);
var klass = cljs.core.get.call(null,map__12541__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__12541__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false);
var indent_QMARK_ = cljs.core.get.call(null,map__12541__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false);
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.dom_utils.create_div_after.call(null,element,cljs.core.PersistentArrayMap.EMPTY),value,opts,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$lang$maxFixedArity = (3);

klipse.ui.editors.editor.create_editor_after_element.cljs$lang$applyTo = (function (seq12536){
var G__12537 = cljs.core.first.call(null,seq12536);
var seq12536__$1 = cljs.core.next.call(null,seq12536);
var G__12538 = cljs.core.first.call(null,seq12536__$1);
var seq12536__$2 = cljs.core.next.call(null,seq12536__$1);
var G__12539 = cljs.core.first.call(null,seq12536__$2);
var seq12536__$3 = cljs.core.next.call(null,seq12536__$2);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic(G__12537,G__12538,G__12539,seq12536__$3);
});


//# sourceMappingURL=editor.js.map
