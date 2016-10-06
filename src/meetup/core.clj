(ns meetup.core
  (:require
    [aleph.http :refer [start-server]]))

(def web-app
  (fn [request]
    (clojure.pprint/pprint request)
    {:status  200
     :headers {"Content-Type" "text/html"}
     :body    "<h1>Hello World</h1>"}))

(defn start []
  (start-server #'web-app {:port 8080}))

(defn stop [server]
  (.close server))
