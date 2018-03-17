// Compiled by ClojureScript 1.10.145 {}
goog.provide('klipse_meetup.plugin');
goog.require('cljs.core');
goog.require('klipse.core');
goog.require('klipse.lang.javascript');
goog.require('klipse.lang.jsx');
goog.require('klipse.lang.html');
goog.require('klipse.lang.clojure');
goog.require('klipse.lang.reagent');
goog.require('klipse.plugin');
console.info("settings: ",(window["klipse_settings"]));
klipse_meetup.plugin.settings = (function klipse_meetup$plugin$settings(){
return (window["klipse_settings"]);
});
goog.exportSymbol('klipse_meetup.plugin.settings', klipse_meetup.plugin.settings);
if(cljs.core.truth_(klipse_meetup.plugin.settings.call(null))){
klipse.plugin.init.call(null,klipse_meetup.plugin.settings.call(null));
} else {
}

//# sourceMappingURL=plugin.js.map
