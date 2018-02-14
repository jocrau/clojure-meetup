(ns meetup.persistence)

(defonce storage (atom nil))

(defn persist [data]
  (reset! storage data))

(defn find-products []
  (deref storage))

