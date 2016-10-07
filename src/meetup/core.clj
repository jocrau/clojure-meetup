(ns meetup.core)

(defn handler [resource]
  (fn [request]
    {:status  200
     :headers {"Content-Type" "text/html"}
     :body    (get resource :html)}))

(def home-resource
  {:html "<h1>Hello World</h1><a href=\"/products\">Products</a>"})

(def product-resource
  {:html "<h1>Products Page</h1>"})

(def routes
  {"/"         (handler home-resource)
   "/products" (handler product-resource)})

(def not-found-response
  {:status 404})

(defn web-app [request]
  (let [uri (get request :uri)
        handle (get routes uri)]
    (if handle
      (handle request)
      not-found-response)))
