(ns meetup.core)

(defn web-app [request]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "<h1>Hello World</h1>"})
