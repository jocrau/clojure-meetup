(ns tutorials.react-frontend.endpoint
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs-http.client :as http]
    [cljs.core.async :refer [<! >! chan sliding-buffer pipe timeout close!]]))

(def station-id "KMAAMHER21")

(def process-data
  (comp
    (filter #(= (:status %) 200))
    (map #(get-in % [:body :stations (keyword station-id)]))))

(defonce data-processing-ch (chan (sliding-buffer 1) process-data))

(defn request-wind-data []
  (go (let [response (<! (http/get (str "http://stationdata.wunderground.com/cgi-bin/stationlookup?station=" station-id "&units=english&v=2.0&format=json")))]
        (>! data-processing-ch response))))

(defonce running (atom false))

(defn start []
  (when-not @running
    (reset! running true)
    (go (while @running
          (request-wind-data)
          (<! (timeout 1000))))))

(defn stop []
  (reset! running false))

(comment

  (start)
  (go (while @running
        (when-let [conditions (<! data-processing-ch)]
          (println conditions))))
  (stop)

  )