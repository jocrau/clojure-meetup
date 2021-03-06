(ns meetup.core
  (:require
    [aleph.http :refer [start-server]]
    [meetup.persistence :refer [persist find-products]]
    [meetup.renderer :refer [render-list]]))

(def method-not-allowed-response
  {:status 405})

(defn handler [resource]
  (fn [request]
    (let [request-method (get request :request-method)
          handle (get-in resource [request-method :handler])]
      (if handle
        (handle request)
        method-not-allowed-response))))

(def home-resource
  {:get {:handler (fn [request] {:status  200
                                 :headers {"Content-Type" "text/html"}
                                 :body    "<h1>Hello World</h1><a href=\"/products\">Products</a>"})}})

(def product-resource
  {:get  {:handler (fn [request] {:status  200
                                  :headers {"Content-Type" "text/html"}
                                  :body    (str "<h1>Products Page</h1>" (render-list (find-products)))})}
   :post {:handler (fn [request]
                     (if (persist (read-string (slurp (:body request))))
                       {:status 201}
                       {:status 406}))}})

(def routes
  {"/"         (handler home-resource)
   "/products" (handler product-resource)})

(def not-found-response
  {:status 404})

(defn web-app []
  (fn [request]
    (let [uri (get request :uri)
          handle (get routes uri)]
      (if handle
        (handle request)
        not-found-response))))

(defn start []
  (start-server (web-app) {:port 8080}))

(defn stop [server]
  (.close server))
