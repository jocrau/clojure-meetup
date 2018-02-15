(ns tutorials.react-frontend.echarts
  (:require
    [reagent.core :as r]))

;; tag::content[]
(defonce specification
         (r/atom
           {:canvas {:width  "600px"
                     :height "400px"}
            :chart  {:title   {:text "ECharts Example"}
                     :tooltip {}
                     :legend  {:data ["Sales"]}
                     :xAxis   {:data ["Mon" "Tue" "Wed" "Thu" "Fri" "Sat" "Sun"]}
                     :yAxis   {}
                     :series  [{:name "Sales"
                                :type "bar"
                                :data [6 17 36 10 10 20 25]}]}}))

(defn chart []
  (let [canvas (atom nil)]
    (r/create-class
      {:reagent-render       (fn [this]
                               [:div {:style (:canvas @specification)}])
       :component-did-mount  (fn [this]
                               (reset! canvas (js/echarts.init (r/dom-node this)))
                               (.setOption @canvas (clj->js (:chart @specification))))
       :component-did-update (fn [this]
                               (.setOption @canvas (clj->js (:chart @specification))))})))

;; end::content[]
