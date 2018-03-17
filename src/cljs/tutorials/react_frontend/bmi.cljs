(ns tutorials.react-frontend.bmi
  (:require
    [reagent.core :as r]))

;; tag::content[]
(defn calc-bmi [height weight]
  (/ weight (Math/pow (/ height 100) 2)))

(defn calc-weight [bmi height]
  (let [h (/ height 100)]
    (* bmi h h)))

(defn slider [props]
  [:input (merge {:type "range" :style {:width "100%"}}
                 (select-keys props [:min :max :value :on-change]))])

(defn bmi-component []
  (let [bmi-data (r/atom {:height 180 :weight 80 :bmi (calc-bmi 180 80)})]
    (fn []
      (let [{:keys [weight height bmi]} @bmi-data
            [color diagnose] (cond
                               (< bmi 18.5) ["orange" "underweight"]
                               (< bmi 25) ["inherit" "normal"]
                               (< bmi 30) ["orange" "overweight"]
                               :else ["red" "obese"])]
        [:div
         [:h4 "BMI Calculator"]
         [:div
          "Height: " (int height) "cm"
          [slider {:min       100
                   :max       220
                   :value     height
                   :on-change (fn [e]
                                (let [new-value (.. e -target -value)]
                                  (reset! bmi-data
                                          {:height new-value
                                           :weight weight
                                           :bmi    (calc-bmi new-value weight)})))}]]
         [:div
          "Weight: " (int weight) "kg"
          [slider {:min       30
                   :max       150
                   :value     weight
                   :on-change (fn [e]
                                (let [new-value (.. e -target -value)]
                                  (reset! bmi-data
                                          {:height height
                                           :weight new-value
                                           :bmi    (calc-bmi height new-value)})))}]]
         [:div
          "BMI: " (int bmi) " " [:span {:style {:color color}} diagnose]
          [slider {:min       10
                   :max       50
                   :value     bmi
                   :on-change (fn [e]
                                (let [new-value (.. e -target -value)]
                                  (reset! bmi-data
                                          {:height height
                                           :weight (calc-weight new-value height)
                                           :bmi    new-value})))}]]]))))
;; end::content[]
