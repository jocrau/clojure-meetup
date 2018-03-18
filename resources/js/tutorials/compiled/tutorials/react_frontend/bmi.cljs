(ns tutorials.react-frontend.bmi
  (:require
    [reagent.core :as r]))

;; tag::content[]
(defn calc-bmi [height weight]
  (/ weight (Math/pow (/ height 100) 2)))

(defn calc-weight [bmi height]
  (let [h (/ height 100)]
    (* bmi h h)))

(defn slider [{:keys [min max value on-change]}]
  [:input {:type "range"
           :style {:width "100%"}
           :min min
           :max max
           :value value
           :on-change (fn [event]
                        (let [new-value (.. event -target -value)]
                          (on-change new-value)))}])

(defn bmi-component []
  (let [state (r/atom {:height 180 :weight 80 :bmi (calc-bmi 180 80)})]
    (fn []
      (let [{:keys [weight height bmi]} @state
            [color diagnose] (condp > bmi
                               18.5 ["orange" "underweight"]
                               25 ["inherit" "normal"]
                               30 ["orange" "overweight"]
                               ["red" "obese"])]
        [:div
         [:h4 "BMI Calculator"]
         [:div
          "Height: " (int height) "cm"
          [slider {:min 100 :max 220 :value height
                   :on-change (fn [new-value]
                                (reset! state
                                        {:height new-value
                                         :weight weight
                                         :bmi (calc-bmi new-value weight)}))}]]
         [:div
          "Weight: " (int weight) "kg"
          [slider {:min 30 :max 150 :value weight
                   :on-change (fn [new-value]
                                (reset! state
                                        {:height height
                                         :weight new-value
                                         :bmi (calc-bmi height new-value)}))}]]
         [:div
          "BMI: " (int bmi) " " [:span {:style {:color color}} diagnose]
          [slider {:min 10 :max 50 :value bmi
                   :on-change (fn [new-value]
                                (reset! state
                                        {:height height
                                         :weight (calc-weight new-value height)
                                         :bmi new-value}))}]]]))))
;; end::content[]
