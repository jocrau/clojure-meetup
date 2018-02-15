(ns tutorials.react-frontend.bmi
  (:require
    [reagent.core :as r]))

;; tag::content[]
(defonce bmi-data (r/atom {:height 180 :weight 80}))

(defn calc-bmi [data]
      (let [{:keys [height weight bmi]} data
            h (/ height 100)]
           (if (nil? bmi)
             (assoc data :bmi (/ weight (Math/pow h 2)))
             (assoc data :weight (* bmi h h)))))

(defn slider [attribute value min max]
      [:input {:type      "range" :value value :min min :max max
               :style     {:width "100%"}
               :on-change (fn [e]
                              (swap! bmi-data assoc attribute (.. e -target -value))
                              (when-not (= :bmi attribute)
                                        (swap! bmi-data dissoc :bmi)))}])

(defn bmi-component []
      (let [{:keys [weight height bmi]} (calc-bmi @bmi-data)
            [color diagnose] (cond
                               (< bmi 18.5) ["orange" "underweight"]
                               (< bmi 25) ["inherit" "normal"]
                               (< bmi 30) ["orange" "overweight"]
                               :else ["red" "obese"])]
           [:div
            [:h4 "BMI Calculator"]
            [:div
             "Height: " (int height) "cm"
             [slider :height height 100 220]]
            [:div
             "Weight: " (int weight) "kg"
             [slider :weight weight 30 150]]
            [:div
             "BMI: " (int bmi) " "
             [:span {:style {:color color}} diagnose]
             [slider :bmi bmi 10 50]]]))
;; end::content[]
