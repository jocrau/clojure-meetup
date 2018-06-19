(ns tutorials.react-frontend.weather
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [reagent.core :as r]
    [taoensso.timbre :refer-macros [log trace debug info warn error fatal report spy]]
    [cljs.core.async :refer [<! >! chan sliding-buffer pipe timeout close! pub sub unsub unsub-all]]
    [tutorials.react-frontend.gauge :refer [gauge]]
    [tutorials.react-frontend.chart :refer [timeline]]
    [tutorials.react-frontend.endpoint :as endpoint]))

(defn station-uri [station-id]
  (str "https://stationdata.wunderground.com/cgi-bin/stationlookup?station=" station-id "&units=english&v=2.0&format=json"))

(defn processing-ch []
  (chan (sliding-buffer 1)
        (comp
          (filter #(= (:status %) 200))
          (map #(-> % :body :stations first second)))))

(defonce stations
         (r/atom [{:id "KMAAMHER21" :name "North Amherst"}
                  {:id "KCASANFR131" :name "San Francisco"}
                  {:id "KMACHESH5" :name "Mt. Greylock"}]))

(defn interval [delta]
  (let [now   (js/Date.)
        end   (js/Date. (.setSeconds (js/Date.) (+ (.getSeconds now) 5)))
        start (js/Date. (.setSeconds (js/Date.) (- (.getSeconds end) delta)))]
    {:start start :end end}))

(defn data-point [[timestamp data]]
  {:value [timestamp (:wind_speed data)]})

(defn weather-widget [{:keys [id name] :as station}]
  (let [channel       (processing-ch)
        data          (r/atom (sorted-map))
        send-requests (atom true)]
    (r/create-class
      {:reagent-render         (fn [this]
                                 (let [[timestamp current-conditions] (last @data)
                                       wind-speed (:wind_speed current-conditions 0)]
                                   [:div
                                    [:h5 (str name " (" id ")")]
                                    [gauge {:max 20 :value wind-speed}]
                                    [timeline {:interval (interval 60) :data (map data-point @data)}]]))
       :component-did-mount    (fn [this]
                                 (js/console.info "weather-widget did mount" id)
                                 (go (while @send-requests
                                       (endpoint/request-data (station-uri id) channel)
                                       (<! (timeout 2000))))
                                 (go (while @send-requests
                                       (when-let [conditions (<! channel)]
                                         (swap! data #(assoc % (js/Date. (* (:updated conditions) 1000)) conditions))))))
       :component-will-unmount (fn [this]
                                 (js/console.debug "weather-widget will unmount" id)
                                 (reset! send-requests false))})))

(defn dashboard []
  [:div.row (map (fn [station]
                   ^{:key (:id station)}
                   [:div.col-md-3
                    [weather-widget station]])
                 @stations)])

