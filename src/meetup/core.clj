(ns meetup.core
  (:require
    [aleph.http :refer [start-server]]))

(def defaults
  {:headers {"Content-Type" "text/html"}})

(def not-found-response
  (merge defaults
         {:status 404
          :body   "Nothing here. That's sad."}))

(def home-response
  (merge defaults
         {:status 200
          :body   "<h1>Hello World</h1><a href=\"/products\">Products</a>"}))

(def products-response
  (merge defaults
         {:status 200
          :body   "<h1>Products Page</h1>"}))

(def routes
  {"/"         (fn [request] home-response)
   "/products" (fn [request] products-response)})

(def web-app
  (fn [request]
    (clojure.pprint/pprint request)
    (let [uri (:uri request)
          handler (or (get routes uri)
                      (fn [request] not-found-response))]
      (handler request))))

(defn start []
  (start-server #'web-app {:port 8080}))

(defn stop [server]
  (.close server))
