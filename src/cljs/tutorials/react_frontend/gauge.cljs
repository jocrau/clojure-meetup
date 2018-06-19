(ns tutorials.react-frontend.gauge
  (:require
    [reagent.core :as r]
    [taoensso.timbre :refer-macros [log trace debug info warn error fatal report spy]]))

(defn props->option [{:keys [value max] :as props}]
  (clj->js {:series [{:type "gauge" :min 0 :max max :data [value]}]}))

(defn gauge [{:keys [size] :or {size "300px" max 10 value 0} :as props}]
  (r/create-class
    {:reagent-render               (fn [this]
                                     [:span {:style {:width size :height size}}])
     :component-did-mount          (fn [this]
                                     (js/console.debug "gauge did mount")
                                     (doto (js/echarts.init (r/dom-node this))
                                       (.setOption (props->option props))))
     :component-will-unmount       (fn [this]
                                     (js/console.debug "gauge will unmount")
                                     (.dispose (js/echarts.getInstanceByDom (r/dom-node this))))
     :should-component-update      (fn [this [_ old-props] [_ new-props]]
                                     (js/console.debug "should gauge update?" (clj->js old-props) (clj->js new-props))
                                     true)
     :component-will-receive-props (fn [this [_ new-props]]
                                     (js/console.debug "gauge will receive props" (clj->js new-props)))
     :component-will-update        (fn [this [_ new-props]]
                                     (js/console.debug "gauge will update" (clj->js new-props)))
     :component-did-update         (fn [this [_ old-props]]
                                     (js/console.debug "gauge did update" (clj->js old-props))
                                     (doto (js/echarts.getInstanceByDom (r/dom-node this))
                                       (.setOption (props->option old-props) true)))}))
