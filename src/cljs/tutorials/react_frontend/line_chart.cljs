(ns tutorials.react-frontend.gauge
  (:require
    [reagent.core :as r]
    [taoensso.timbre :refer-macros [log trace debug info warn error fatal report spy]]))

(defn gauge [{:keys [title size max] :or {size "300px" max 10} :as props} value]
  (let [spec {:title  {:text title}
              :series [{:type "gauge" :min 0 :max max :data [0]}]}]
    (r/create-class
      {:reagent-render       (fn [this]
                               [:span {:style {:width size :height size}}])
       :component-did-mount  (fn [this]
                               (doto (js/echarts.init (r/dom-node this))
                                 (.setOption (clj->js spec))))
       :component-did-update (fn [this [_ _ value]]
                               (doto (js/echarts.getInstanceByDom (r/dom-node this))
                                 (.setOption (clj->js (assoc-in spec [:series 0 :data] [value])) true)))})))
