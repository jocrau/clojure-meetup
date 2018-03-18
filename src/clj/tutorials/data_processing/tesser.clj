(ns tutorials.data-processing.tesser
  (:require
    [tutorials.data-processing.import :as import]
    [tesser.core :as t]
    [tesser.utils :as u]
    [tesser.math :as m]
    [tesser.quantiles :as q]))


(defn post-combine [f fold]
  (conj fold
        (fn [downstream]
          (assoc downstream
            :post-combiner (fn [tuples]
                             ((:post-combiner downstream identity) (f tuples)))))))


(defn rank
  ([attribute] (rank attribute []))
  ([attribute fold]
   (conj fold
         (fn [downstream]
           {:reducer-identity  sorted-map
            :reducer           (fn [acc tuple]
                                 (if-let [value (get tuple attribute)]
                                   (update acc value
                                           #(conj % {attribute value}))
                                   acc))
            :post-reducer      identity
            :combiner-identity sorted-map
            :combiner          (fn [acc tuple]
                                 (merge-with into acc tuple))
            :post-combiner     (fn [result]
                                 (loop [tuple-collections (reverse (vals result))
                                        rank              1
                                        result            []]
                                   (if-let [tuples (first tuple-collections)]
                                     (recur (rest tuple-collections)
                                            (+ rank (count tuples))
                                            (into result (map (fn [tuple]
                                                                (assoc tuple
                                                                  :rank rank))
                                                              tuples)))
                                     ((:post-combiner downstream identity) result))))}))))

(defn top
  ([n attribute] (top n attribute []))
  ([n attribute fold]
   (->> fold
        (rank attribute)
        (post-combine (partial filterv #(<= (:rank %) n))))))

(defn top-count
  ([n item] (top-count n item []))
  ([n item fold]
   (->> fold
        (top n item)
        (post-combine count))))


(comment

  (def data (import/read-data))

  (take 10 data)

  ;; At how many games did a hitter appear on the plate?
  (t/tesser (t/chunk 10 data)
            (->>
              (t/group-by :NAME)
              (t/count)))

  (t/tesser (t/chunk 10 data)
            (->>
              (t/group-by (juxt :TEAM :POS1))
              (rank :Pitches)))

  (t/tesser (t/chunk 10 data)
            (->>
              (t/group-by (juxt :TEAM :POS1))
              (top 2 :Pitches)))

  (t/tesser (t/chunk 10 data)
            (->>
              (t/group-by (juxt :TEAM :POS1))
              (top-count 2 :Pitches)))

  (t/tesser (t/chunk 10 data)
            (->>
              (t/filter #(= (:TEAM %) "Astros"))
              (t/group-by (juxt :TEAM :POS1))
              (top 1 :Pitches)))

  (t/tesser (t/chunk 10 data)
            (->>
              (t/filter #(= (:TEAM %) "Astros"))
              (t/group-by (juxt :TEAM :POS1))
              (t/fuse
                {:count (t/count)
                 :top2  (top-count 2 :Pitches)})))

  )