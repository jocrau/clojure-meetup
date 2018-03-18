(ns tutorials.data-processing.import
  (:require
    [clojure-csv.core]
    [iota])
  (:import [java.io StringReader]))

(defn str-to-long [x]
  (try
    (when-not (empty? x)
      (Long/parseLong x))
    (catch Exception e)))

(defn str-to-integer [x]
  (try
    (when-not (empty? x)
      (Integer/parseInt x))
    (catch Exception e)))

(defn str-to-double [x]
  (try
    (when-not (empty? x)
      (Double/parseDouble x))
    (catch Exception e)))

(defn parse-line [col-defs line]
  (loop [col-defs col-defs
         line     line
         tuple    {}]
    (if (seq col-defs)
      (let [col-def (first col-defs)
            value   (first line)]
        (recur (rest col-defs)
               (rest line)
               (assoc tuple (:name col-def) ((:parser col-def) value))))
      tuple)))

(def file "data/Hitting.csv")

(def col-defs
  [{:name :G# :parser identity}
   {:name :DATE :parser identity}
   {:name :MON :parser str-to-integer}
   {:name :WK :parser str-to-integer}
   {:name :TEAM :parser identity}
   {:name :NAME :parser identity}
   {:name :POS :parser identity}
   {:name :POS1 :parser identity}
   {:name :AB :parser str-to-integer}
   {:name :PA :parser str-to-integer}
   {:name :H :parser str-to-integer}
   {:name :1B :parser str-to-integer}
   {:name :2B :parser str-to-integer}
   {:name :3B :parser str-to-integer}
   {:name :HR :parser str-to-integer}
   {:name :R :parser str-to-integer}
   {:name :RBI :parser str-to-integer}
   {:name :BB :parser str-to-integer}
   {:name :IBB :parser str-to-integer}
   {:name :SO :parser str-to-integer}
   {:name :HBP :parser str-to-integer}
   {:name :SF :parser str-to-integer}
   {:name :SH :parser str-to-integer}
   {:name :GDP :parser str-to-integer}
   {:name :SB :parser str-to-integer}
   {:name :CS :parser str-to-integer}
   {:name :GB :parser str-to-integer}
   {:name :FB :parser str-to-integer}
   {:name :LD :parser str-to-integer}
   {:name :IFFB :parser str-to-integer}
   {:name :IFH :parser str-to-integer}
   {:name :BU :parser str-to-integer}
   {:name :BUH :parser str-to-integer}
   {:name :Balls :parser str-to-integer}
   {:name :Strikes :parser str-to-integer}
   {:name :Pitches :parser str-to-integer}
   {:name :BO :parser str-to-integer}
   {:name :WPA :parser str-to-double}
   {:name :BATTER :parser identity}])

(defn read-data []
  (->> (iota/seq file)
       (rest)
       (map #(#'clojure-csv.core/parse-csv-line (StringReader. %) \, \" false nil))
       (map #(parse-line col-defs %))))

