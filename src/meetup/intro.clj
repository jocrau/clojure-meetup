(ns meetup.intro)

;; Expressions and Evaluation

1
2.3
1/3
"Hello World"
:foo
:my.namespace/foo
::foo
#uuid"01a38532-c3d2-4ad8-89fa-3a4f1ea3fe69"
#inst"2016-10-09"
true
false
nil

[1 2 "foo" :bar]

{:first-name "Jochen"
 :last-name  "Rau"}

{"first-name" "Jochen" "last-name" "Rau"}

{:first-name "Jochen"
 :last-name  "Rau"
 :shoe-size  9
 :birth-date #inst"1971-03-15"
 :locations  [{:address "120 Pulpit Hill Rd"
               :zip     "01002"
               :city    "Amherst"
               :state   ::current}
              {:address "6 North Street"
               :zip     "01018"
               :city    "Hatfield"}]}

#{"foo" "bar" "baz"}
;; #{"foo" "bar" "foo" "baz"}

;; Vars (not variables) and Immutability

(def my-name "Jochen")

my-name

(let [my-name "Shawn"]
  my-name)

my-name

(def my-name "Shawn")

my-name
;; Wait, isn't that mutable then?
;; see slide 1 ;-)


;; Lists and Functions

(+ 1 2 3 4)
;; infix notation:  1 + 2 + 3 + 4
;; prefix notation: add(1, 2, 3, 4)

'(+ 1 2 3 4)
;; evaluates to a list

(str "Jochen" "Rau")

(fn [number] (+ number 3))

(def add3 (fn [number] (+ number 3)))

(add3 5)

(add3 (* 2 4))
;; hierarchical evaluation

(def adder (fn [addend] (fn [number] (+ number addend))))

(def add10 (adder 10))

(add10 5)

((adder 10) 5)
;; hierarchical evaluation

;; "adder" is a function that evaluates
;; to another function

(add3 (add3 5))

(def twice (fn [fun number] (fun (fun number))))

(twice add3 5)

(def add3 (fn [number] (+ number 3)))
;; can be written shorter as
(defn add3 [number] (+ number 3))

(map add3 [1 2 3])

(reduce + (map add3 [1 2 3]))
;; Who needs Hadoop®? ;-)

(even? 3)
(even? 4)

(map even? [1 2 3 4 5 6])

(filter even? [1 2 3 4 5 6])


(def joe {:first-name "Jochen"
          :last-name  "Rau"
          :shoe-size  9
          :birth-date #inst"1971-03-15"
          :locations  [{:address "120 Pulpit Hill Rd"
                        :zip     "01002"
                        :city    "Amherst"
                        :state   ::current}
                       {:address "6 North Street"
                        :zip     "01018"
                        :city    "Hatfield"}]})

(get joe :first-name)

(get joe :locations)

(get (get (get joe :locations) 0) :city)

(get-in joe [:locations 0 :city])

(get-in joe [:locations 0 :city] "N/A")

;; keywords are functions
(:first-name joe)
;; yes, that's weird, but incredibly helpful
(map :city (:locations joe))


(if true "Ok" "Nope")

(conj [:a :b] :c)
(conj '(:a :b) :c)
(conj #{:a :b} :c)
(conj #{:a :b} :b)
(conj {:a 1 :b 2} [:c 3])

(assoc joe :first-name "Shawn")
joe

(first [:a :b])
(first '(:a :b))
(first #{:a :b})
(first {:a 1 :b 2})

(rest [:a :b :c])


;; recursion

(loop [names ["Jochen" "Shawn" "Alice"]
       result []]
  (if (empty? names)
    result
    (recur (rest names)
           (conj result {:first-name (first names)}))))

;; 1 1 2 3 5 8 13 21 34 55 ...

(defn fib [n]
  (loop [a 0 b 1 i n]
    (if (zero? i)
      a
      (recur b (+ a b) (dec i)))))

(fib 10)
