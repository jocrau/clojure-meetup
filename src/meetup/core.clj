(ns meetup.core
  (:require
    [aleph.http :refer [start-server]]))

(def routes
  {"/"         (fn [request]
                 {:status  200
                  :headers {"Content-Type" "text/html"}
                  :body    "<h1>Hello World</h1><a href=\"/products\">Products</a>"})
   "/products" (fn [request]
                 {:status  200
                  :headers {"Content-Type" "text/html"}
                  :body    "<h1>Products Page</h1>"})})

(def web-app
  (fn [request]
    (clojure.pprint/pprint request)
    (let [uri (:uri request)
          handler (or (get routes uri)
                      (fn [request]
                        {:status  404
                         :headers {"Content-Type" "text/html"}
                         :body    "Nothing here. That's sad."}))]
      (handler request))))

(defn start []
  (start-server #'web-app {:port 8080}))

(defn stop [server]
  (.close server))
