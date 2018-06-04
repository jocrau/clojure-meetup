(ns tutorials.react-frontend.endpoint
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs-http.client :as http]
    [cljs.core.async :refer [<! >! chan sliding-buffer pipe timeout close! pub sub unsub unsub-all]]))

(defn request-data [uri ch]
  (go (let [response (<! (http/get uri))]
        (>! ch response))))
