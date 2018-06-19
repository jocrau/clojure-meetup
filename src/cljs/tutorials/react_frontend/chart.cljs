(ns tutorials.react-frontend.chart
  (:require
    [reagent.core :as r]
    [taoensso.timbre :refer-macros [log trace debug info warn error fatal report spy]]))

(defn props->option [{:keys [data interval] :as props}]
  (clj->js {:xAxis     {:show true :type "time" :min (:start interval) :max (:end interval) :splitLine {:show false}}
            :yAxis     {:show true :min 0 :max 20}
            :animation false
            :series    [{:type "line" :data data}]}))

(defn timeline [{:keys [size interval] :or {size "300px"} :as props}]
  (r/create-class
    {:reagent-render       (fn [props]
                             [:span {:style {:width size :height "180px"}}])
     :component-did-mount  (fn [this]
                             (doto (js/echarts.init (r/dom-node this))
                               (.setOption (props->option props))))
     :component-did-update (fn [this [_ props]]
                             (doto (js/echarts.getInstanceByDom (r/dom-node this))
                               (.setOption (props->option props) true)))}))
