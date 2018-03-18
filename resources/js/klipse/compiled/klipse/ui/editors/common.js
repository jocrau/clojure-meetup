// Compiled by ClojureScript 1.9.946 {}
goog.provide('klipse.ui.editors.common');
goog.require('cljs.core');
goog.require('klipse.ui.editors.editor');
goog.require('klipse.utils');
klipse.ui.editors.common.display_url_with_input = (function klipse$ui$editors$common$display_url_with_input(base_url,value){
var G__37375 = klipse.utils.create_url_with_input.call(null,base_url,value);
cljs.core.print.call(null,G__37375);

alert(G__37375);

return G__37375;
});
klipse.ui.editors.common.refresh_with_code = (function klipse$ui$editors$common$refresh_with_code(base_url,value){
return location.replace(klipse.utils.create_url_with_input.call(null,base_url,value));
});
klipse.ui.editors.common.handle_events = (function klipse$ui$editors$common$handle_events(editor,p__37376){
var map__37377 = p__37376;
var map__37377__$1 = ((((!((map__37377 == null)))?((((map__37377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37377):map__37377);
var on_should_eval = cljs.core.get.call(null,map__37377__$1,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168));
var on_change = cljs.core.get.call(null,map__37377__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var idle_msec = cljs.core.get.call(null,map__37377__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var base_url = cljs.core.get.call(null,map__37377__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398),null);
var extra_keys = cljs.core.get.call(null,map__37377__$1,new cljs.core.Keyword(null,"extra-keys","extra-keys",-1845607319));
var vec__37379 = klipse.utils.debounce.call(null,on_should_eval,idle_msec);
var debouncer = cljs.core.nth.call(null,vec__37379,(0),null);
var runner = cljs.core.nth.call(null,vec__37379,(1),null);
var default_extra_keys = new cljs.core.PersistentArrayMap(null, 4, ["Ctrl-S",((function (vec__37379,debouncer,runner,map__37377,map__37377__$1,on_should_eval,on_change,idle_msec,base_url,extra_keys){
return (function (){
return klipse.ui.editors.common.display_url_with_input.call(null,base_url,klipse.ui.editors.editor.get_value.call(null,editor));
});})(vec__37379,debouncer,runner,map__37377,map__37377__$1,on_should_eval,on_change,idle_msec,base_url,extra_keys))
,"Ctrl-R",((function (vec__37379,debouncer,runner,map__37377,map__37377__$1,on_should_eval,on_change,idle_msec,base_url,extra_keys){
return (function (){
return klipse.ui.editors.common.refresh_with_code.call(null,base_url,klipse.ui.editors.editor.get_value.call(null,editor));
});})(vec__37379,debouncer,runner,map__37377,map__37377__$1,on_should_eval,on_change,idle_msec,base_url,extra_keys))
,"Ctrl-Enter",runner,"Cmd-Enter",runner], null);
var the_extra_keys = cljs.core.merge.call(null,default_extra_keys,extra_keys);
if(cljs.core.truth_(on_change)){
klipse.ui.editors.editor.on_change.call(null,editor,on_change);
} else {
}

klipse.ui.editors.editor.on_change.call(null,editor,debouncer);

klipse.ui.editors.editor.set_option.call(null,editor,"extraKeys",cljs.core.clj__GT_js.call(null,the_extra_keys));

return editor;
});

//# sourceMappingURL=common.js.map
