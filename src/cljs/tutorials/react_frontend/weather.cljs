(ns tutorials.react-frontend.weather
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [reagent.core :as r]
    [taoensso.timbre :refer-macros [log trace debug info warn error fatal report spy]]
    [cljs.core.async :refer [<! >! chan sliding-buffer pipe timeout close! pub sub unsub unsub-all]]
    [tutorials.react-frontend.gauge :refer [gauge]]
    [tutorials.react-frontend.endpoint :as endpoint]))

(defn station-uri [station-id]
  (str "https://stationdata.wunderground.com/cgi-bin/stationlookup?station=" station-id "&units=english&v=2.0&format=json"))

(defn processing-ch []
  (chan (sliding-buffer 1)
        (comp
          (filter #(= (:status %) 200))
          (map #(-> % :body :stations first second)))))

(def stations
  [{:id "KMAAMHER12" :name "North Amherst"}
   {:id "KMAADAMS4" :name "Mt. Greylock"}
   {:id "KCASANFR131" :name "San Francisco"}])

(defn wind-gauge [{:keys [id name] :as station}]
  (let [channel    (processing-ch)
        wind-speed (r/atom 0)]
    (r/create-class
      {:reagent-render      (fn [this]
                              [:div
                               [gauge {:title (str name " (" id ")") :max 20} @wind-speed]
                               [gauge {:title (str name " (" id ")") :max 20} @wind-speed]])
       :component-did-mount (fn [this]
                              (go (while true
                                    (endpoint/request-data (station-uri id) channel)
                                    (<! (timeout 2000))))
                              (go (while true
                                    (when-let [conditions (<! channel)]
                                      (reset! wind-speed (:wind_speed conditions))))))})))

(defn dashboard []
  [:div.row (map-indexed (fn [idx station]
                           ^{:key idx} [:div.col-md-3
                                        [wind-gauge station]])
                         stations)])

