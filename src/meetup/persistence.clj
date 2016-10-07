(ns meetup.persistence)

(defonce storage (atom nil))

(defn persist [data]
  (reset! storage data))

