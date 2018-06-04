(ns tutorials.react-frontend.echarts
  (:require
    [reagent.core :as r]))


;; tag::chart[]
(defonce specification
         (r/atom {:canvas {:width "600px" :height "400px"}
                  :chart {:title {:text "ECharts Example"}
                          :tooltip {}
                          :animation false
                          :legend {:data ["Sales"]}
                          :xAxis {:show true :data ["Mon" "Tue" "Wed" "Thu" "Fri" "Sat" "Sun"]}
                          :yAxis {:show true}
                          :series [{:name "Sales"
                                    :type "bar"
                                    :data [6 17 36 10 10 20 25]}]}}))

(defn chart []
  (r/create-class
    {:reagent-render (fn [this]
                       [:div {:style (:canvas @specification)}])
     :component-did-mount (fn [this]
                            (doto (js/echarts.init (r/dom-node this))
                              (.setOption (clj->js (:chart @specification)))))
     :component-did-update (fn [this]
                             (-> (r/dom-node this)
                                 (js/echarts.getInstanceByDom)
                                 (.setOption (clj->js (:chart @specification)) true)))}))
;; end::chart[]

(comment

  (swap! specification assoc-in [:chart :title :text] "New Title")

  (swap! specification assoc-in [:chart :series 0 :data] [15 17 20 10 12 22 25])

  (swap! specification assoc-in [:chart :series 1] {:name "Foo" :type "line" :data [6 17 36 10 10 20 25]})

  (swap! specification assoc :chart
         {:title {:text "ECharts Gauge Example"}
          :xAxis {:show false :data []}
          :yAxis {:show false}
          :series [{:name "Wind"
                    :type "gauge"
                    :min  0
                    :max  20
                    :data [4]}]})

  (swap! specification assoc-in [:chart :series 0 :data 0] (rand-int 20))

  )
