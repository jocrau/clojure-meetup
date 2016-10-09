(ns meetup.slides
  (:require
    [aleph.http :refer [start-server]]
    [yada.yada :refer [handler resource]]
    [yada.resources.classpath-resource :refer [new-classpath-resource]]
    [bidi.ring :refer [make-handler redirect]]))

(defn routes []
  ["/" (handler (new-classpath-resource "slides"))])

(defn start []
  (start-server (make-handler (routes)) {:port 8081}))

(defn stop [server]
  (.close server))
