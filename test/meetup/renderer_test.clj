(ns meetup.renderer-test
  (:require [clojure.test :refer :all]
            [meetup.renderer :refer :all]))

(def mock-data
  [{:id 1 :name "Foo"}
   {:id 2 :name "Bar"}])

(deftest render-test
  (testing "transforming items into a HTML list"
    (let [result (render-list mock-data)]
      (is (re-find #"<li>Foo</li>" result))
      (is (re-find #"<li>Bar</li>" result)))))
