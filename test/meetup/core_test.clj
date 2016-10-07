(ns meetup.core-test
  (:require [clojure.test :refer :all]
            [meetup.core :refer :all]))

(def test-request
  {:scheme         :http
   :request-method :get
   :remote-addr    "127.0.0.1"
   :server-port    8080
   :uri            "/products"
   :query-string   nil
   :headers        {}
   :body           nil})

(deftest web-app-test
  (testing "simple request-response cycle"
    (let [response ((web-app) test-request)]
      (is (= (get response :status) 200))
      (is (re-find #"Product" (get response :body)))))
  (testing "404 response"
    (let [response ((web-app) (assoc test-request :uri "/nope"))]
      (is (= (get response :status) 404))))
  (testing "POST request"
    (let [response ((web-app) (assoc test-request
                                :request-method :post
                                :body "[{:id 1234 :name \"Stand Mixer\"}]"))]
      (is (= (get response :status) 201)))
    (let [response ((web-app) (assoc test-request
                                :request-method :post
                                :uri "/"))]
      (is (= (get response :status) 405)))))
