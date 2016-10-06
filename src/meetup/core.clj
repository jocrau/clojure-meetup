(ns meetup.core)

(def web-app
  (fn [request]
    {:status  200
     :headers {"Content-Type" "text/html"}
     :body    "<h1>Hello World</h1>"}))
