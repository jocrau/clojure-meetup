(ns meetup.renderer)

(defn render-item [item]
  (str "<li>" (:name item) "</li>"))

(defn render-list [items]
  (str "<ul>" (reduce str (map render-item items)) "</ul>"))
