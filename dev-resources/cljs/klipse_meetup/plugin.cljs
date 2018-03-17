(ns klipse-meetup.plugin
  (:require klipse.core
            klipse.lang.javascript
            klipse.lang.jsx
            klipse.lang.html
            klipse.lang.clojure
            klipse.lang.reagent
            [klipse.plugin :as plugin]))

(js/console.info "settings: " (aget js/window "klipse_settings"))

(defn ^:export settings []
  (aget js/window "klipse_settings"))

(when (settings)
  (plugin/init (settings)))
