(ns meetup.core)

(def routes
  {"/"         (fn [request]
                 {:status  200
                  :headers {"Content-Type" "text/html"}
                  :body    "<h1>Hello World</h1><a href=\"/products\">Products</a>"})
   "/products" (fn [request]
                 {:status  200
                  :headers {"Content-Type" "text/html"}
                  :body    "<h1>Products Page</h1>"})})

(def not-found-response
  {:status 404})

(defn web-app [request]
  (let [uri (get request :uri)
        handle (get routes uri)]
    (if handle
      (handle request)
      not-found-response)))
