(ns tutorials.data-processing.import
  (:require
    [clojure-csv.core]
    [iota])
  (:import [java.io StringReader]))

(declare file col-defs)

(defn parse-line [col-defs line]
  (loop [col-defs col-defs
         line     line
         tuple    {}]
    (if (seq col-defs)
      (let [col-def (first col-defs)
            value   (first line)]
        (recur (rest col-defs)
               (rest line)
               (assoc tuple
                 (:name col-def)
                 (try
                   (when-not (empty? value)
                     ((:parser col-def) value))
                   (catch Exception e)))))
      tuple)))

(defn read-data []
  (->> (iota/seq file)
       (rest)
       (map #(#'clojure-csv.core/parse-csv-line (StringReader. %) \, \" false nil))
       (map #(parse-line col-defs %))))

(def file "data/Hitting.csv")

(def col-defs
  [{:name :G# :parser identity}
   {:name :DATE :parser identity}
   {:name :MON :parser #(Integer/parseInt %)}
   {:name :WK :parser #(Integer/parseInt %)}
   {:name :TEAM :parser identity}
   {:name :NAME :parser identity}
   {:name :POS :parser identity}
   {:name :POS1 :parser identity}
   {:name :AB :parser #(Integer/parseInt %)}
   {:name :PA :parser #(Integer/parseInt %)}
   {:name :H :parser #(Integer/parseInt %)}
   {:name :1B :parser #(Integer/parseInt %)}
   {:name :2B :parser #(Integer/parseInt %)}
   {:name :3B :parser #(Integer/parseInt %)}
   {:name :HR :parser #(Integer/parseInt %)}
   {:name :R :parser #(Integer/parseInt %)}
   {:name :RBI :parser #(Integer/parseInt %)}
   {:name :BB :parser #(Integer/parseInt %)}
   {:name :IBB :parser #(Integer/parseInt %)}
   {:name :SO :parser #(Integer/parseInt %)}
   {:name :HBP :parser #(Integer/parseInt %)}
   {:name :SF :parser #(Integer/parseInt %)}
   {:name :SH :parser #(Integer/parseInt %)}
   {:name :GDP :parser #(Integer/parseInt %)}
   {:name :SB :parser #(Integer/parseInt %)}
   {:name :CS :parser #(Integer/parseInt %)}
   {:name :GB :parser #(Integer/parseInt %)}
   {:name :FB :parser #(Integer/parseInt %)}
   {:name :LD :parser #(Integer/parseInt %)}
   {:name :IFFB :parser #(Integer/parseInt %)}
   {:name :IFH :parser #(Integer/parseInt %)}
   {:name :BU :parser #(Integer/parseInt %)}
   {:name :BUH :parser #(Integer/parseInt %)}
   {:name :Balls :parser #(Integer/parseInt %)}
   {:name :Strikes :parser #(Integer/parseInt %)}
   {:name :Pitches :parser #(Integer/parseInt %)}
   {:name :BO :parser #(Integer/parseInt %)}
   {:name :WPA :parser #(Double/parseDouble %)}
   {:name :BATTER :parser identity}])
