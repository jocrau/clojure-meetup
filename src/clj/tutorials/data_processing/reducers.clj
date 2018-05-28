;; Basics

(range 10)

(map inc (range 10))

(take 10 (filter even? (map inc (range))))

(reduce + (filter even? (map inc (range 10))))

(->> (range 10)
     (map inc)
     (filter even?)
     (reduce +))



;; Reducers

(require '[clojure.core.reducers :as r])

(r/reduce + (r/filter even? (r/map inc (range 10))))

(r/filter even? (r/map inc (range 10)))

(into [] (r/filter even? (r/map inc (range 10))))



;; Word Count

(def book (slurp "http://www.gutenberg.org/files/2600/2600-0.txt"))

(def lines (drop 844 (clojure.string/split-lines book)))

(take 10 lines)

(defn combine-fn
  ([] {})
  ([a b]
   (merge-with + a b)))

(defn reduce-fn [acc [word cnt]]
  (assoc acc word (+ cnt (get acc word 0))))

(defn word-count [lines]
  (->> lines
       (mapcat #(re-seq #"\w+" %))
       (map #(vector % 1))
       (reduce reduce-fn {})
       (into [])))

(def freqs (time (word-count lines)))

(defn word-count [lines]
  (->> lines
       (r/mapcat #(re-seq #"\w+" %))
       (r/map #(vector % 1))
       (r/fold combine-fn reduce-fn)
       (into [])))

(def freqs (time (word-count lines)))

(take 10 freqs)

(filter #(= (first %) "Andrew") freqs)

(take 10 (reverse (sort-by second freqs)))



;; Transducers

(map inc)

(into [] (range 10))

(into [] (map inc) (range 10))

(def my-transformation
  (comp (map inc)
        (filter even?)))

(into [] my-transformation (range 10))
