(ns meetup.intro)

(comment

  ;; Expressions and Evaluation

  1
  2.3
  1/3
  "Hello World"
  \a
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
                 :status  ::current}
                {:address "6 North Street"
                 :zip     "01018"
                 :city    "Hatfield"}]}

  #{"foo" "bar" "baz"}
  ;#{"foo" "bar" "foo" "baz"}

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

  '(+ 1 2 3 4)
  ;; evaluates to a list

  (+ 1 2 3 4)
  ;; infix notation:  1 + 2 + 3 + 4
  ;; prefix notation: add(1, 2, 3, 4)

  (str "Jochen" "Rau")

  (fn [number] (+ number 3))

  ((fn [number] (+ number 3)) 5)

  (def add3 (fn [number] (+ number 3)))

  (add3 5)

  (add3 (* 2 4))
  ;; hierarchical evaluation

  (def adder (fn [addend] (fn [number] (+ number addend))))

  ;; "adder" is a function that evaluates
  ;; to another function

  ((adder 10) 5)
  ;; hierarchical evaluation

  (def add10 (adder 10))

  (add10 5)

  (add3 (add3 5))

  (def twice (fn [fun number] (fun (fun number))))

  ;; "twice" is a function that takes a function as argument (-> higher-order function)

  (twice add3 5)

  (def add3 (fn [number] (+ number 3)))
  ;; can be written shorter as
  (defn add3 [number] (+ number 3))



  (map add3 [1 2 3])

  (reduce + [1 2 3])

  (reduce + (map add3 [1 2 3]))
  ;; Who needs Hadoop®? ;-)


  ;; function composition
  ((comp str add3) 5)

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
                          :status  ::current}
                         {:address "60 North Street"
                          :zip     "01018"
                          :city    "Hatfield"}]})

  (get joe :first-name)

  (get joe :locations)

  (first (filter (fn [location] (= (:status location) ::current)) (get joe :locations)))

  (get (get (get joe :locations) 0) :city)

  (get-in joe [:locations 0 :city])

  (get-in joe [:locations 0 :city] "N/A")

  ;; keywords are functions
  (:first-name joe)
  ;; yes, that's weird, but incredibly helpful
  (map :city (:locations joe))


  (if true "Ok" "Nope")
  (if (> 3 10) "Ok" "Nope")
  (when true "Ok" "Nope")
  ;; ??

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


  ;; lazy evaluation

  (range 0 10)
  (range 10)
  (range 10000)
  (range)
  (def numbers (range))
  numbers
  (take 10 numbers)
  (time (nth numbers 1000000))
  (time (nth (range) 1000000))
  (time (nth (map inc numbers) 1000000))
  (time (nth (map inc (range)) 1000000))

  (filter (fn [number]
            (println number)
            (= number 20))
          (map inc (range)))

  (first (filter (fn [number]
                   (println number)
                   (= number 20))
                 (map inc (range))))

  ;; recursion


  (* 1 2 3 4 5 6 7 8)

  (defn factorial [n acc]
    (if (zero? n)
      acc
      (factorial (dec n) (* n acc))))

  (factorial 8 1)

  (defn factorial [n acc]
    (if (zero? n)
      acc
      (recur (dec n) (* n acc))))

  (factorial 8 1)

  (defn factorial [n]
    (loop [cnt n
           acc 1]
      (if (zero? cnt)
        acc
        (recur (dec cnt)
               (* cnt acc)))))

  (factorial 8)

  (defn factorial [n]
    (reduce * (range 1 (inc n))))

  (factorial 8)



  ;; state

  (def balance (atom 100))
  @balance
  (swap! balance + 10)
  @balance

  (defn slow-fun [a b]
    (Thread/sleep 2000)
    (+ a b))

  (time (slow-fun 3 2))

  ;; Set up a cache memory
  (def mem (atom {}))
  @mem

  (defn cache [fun]
    (fn [& args]
      (if-let [ret (get @mem args)]
        ret
        (let [ret (apply fun args)]
          (swap! mem assoc args ret)
          ret))))

  (def cached-slow-fun (cache slow-fun))

  (time (cached-slow-fun 3 2))

  @mem

  )
