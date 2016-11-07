(ns meetup.templating
  (:require
    [hiccup.core :as hiccup]
    [net.cgrand.enlive-html :as enlive]
    [clostache.parser :as clostache]
    [clojure.java.io :as io]))

(def example-posts [{:author  "Jochen"
                     :title   "First post"
                     :content "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    {:author  "Shawn"
                     :title   "Second post"
                     :content "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}])

;; Hiccup

(defn render-blog-hiccup [title posts]
  (hiccup/html [:html
                [:head
                 [:title title]]
                [:body
                 [:h1 title]
                 (for [post posts]
                   [:article
                    [:h2 (:title post)]
                    [:p (str "By " (:author post))]
                    [:p (:content post)]])]]))

(render-blog-hiccup "My Blog with Hiccup" example-posts)

;; Enlive

(defn render-blog-enlive [title posts]
  (let [post-snippet (enlive/snippet "templates/blog-enlive.html" [:article] [post]
                                     [:header :h1] (enlive/content (:title post))
                                     [:header :.author] (enlive/content (:author post))
                                     [:article :> :p] (enlive/content (:content post)))
        blog-template (enlive/template "templates/blog-enlive.html" [title posts]
                                       [:title] (enlive/content title)
                                       [:article] (enlive/substitute (map post-snippet posts)))]
    (reduce str (blog-template title posts))))


(render-blog-enlive "My Blog with Enlive" example-posts)


;; Clostache

(defn render-blog-clostache [title posts]
  (let [blog-template (slurp (io/resource "templates/blog-clostache.html"))]
    (clostache/render blog-template {:blog-title title :posts posts})))


(render-blog-clostache "My Blog with Clostache" example-posts)
