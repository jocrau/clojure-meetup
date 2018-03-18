(ns tutorials.react-frontend.app
  (:require
    [reagent.core :as r]
    [tutorials.react-frontend.bmi :refer [bmi-component slider]]
    [tutorials.react-frontend.todo :refer [todo-app]]
    [tutorials.react-frontend.echarts :refer [chart]]))

(enable-console-print!)

(def tabs
  {:bmi    {:label "BMI Calculator"
            :content [bmi-component]
                   #_[slider {:min       30
                            :max       150
                            :on-change (fn [e] (js/console.info (.. e -target -value)))}]}
   :charts {:label   "Charts"
            :content [chart]}
   :todo   {:label   "ToDo App"
            :content [todo-app]}})

(defonce current-tab-id (r/atom (ffirst tabs)))

(defn navbar []
  [:ul.nav.navbar-nav.navbar-left
   (doall
     (map (fn [[tab-id {:keys [label]}]]
            ^{:key tab-id}
            [:li
             {:class (when (= @current-tab-id tab-id) "active")}
             [:a
              {:on-click #(reset! current-tab-id tab-id)}
              label]])
          tabs))])

(defn content []
  (get-in tabs [@current-tab-id :content]))

(defn init []
  (r/render-component [navbar] (js/document.getElementById "navbar-mobile"))
  (r/render-component [content] (js/document.getElementById "container")))