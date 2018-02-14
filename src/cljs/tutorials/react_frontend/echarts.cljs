(ns tutorials.react-frontend.echarts
  (:require [reagent.core :as r]))

;; tag::content[]
(defn chart [spec]
      (let [element (atom nil)]
           (r/create-class
             {:reagent-render      (fn [this]
                                       [:div {:styles "display: block; width: 1000px; height: 800px;"}])
              :component-did-mount (fn [this]
                                       (let [node (r/dom-node this)]
                                            (doto (js/echarts.init node)
                                                  (.setOption (clj->js spec)))))})))

(def specification
  {:title   {:text "ECharts entry example"}
   :tooltip {}
   :legend  {:data ["Sales"]}
   :xAxis   {:data ["shirt" "cardign" "chiffon shirt" "pants" "heels" "socks"]}
   :yAxis   {}
   :series  [{:name "Sales"
              :type "bar"
              :data [5 20 36 10 10 20]}]})
;; end::content[]

