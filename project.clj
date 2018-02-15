(defproject meetup "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs" "src/cljc"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]

                 ; web server
                 [http-kit "2.2.0"]
                 [aleph "0.4.4"]

                 ; request handling
                 [yada "1.2.11"]
                 [liberator "0.14.1"]

                 ; routing
                 [bidi "2.1.3"]
                 [compojure "1.5.1"]

                 ; security
                 [buddy/buddy "2.0.0"]
                 [com.cemerick/friend "0.2.3"]

                 ; templating
                 [hiccup "1.0.5"]
                 [enlive "1.1.6"]
                 [de.ubercode.clostache/clostache "1.4.0"]

                 [reagent "0.8.0-alpha1"]

                 [org.clojure/tools.namespace "0.2.11"]]

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.14"]
                                  [binaryage/devtools "0.9.9"]]
                   :plugins      [[lein-cljsbuild "1.1.7"]
                                  [lein-figwheel "0.5.14" :exclusions [org.clojure/clojure org.clojure/clojurescript]]]}}

  :cljsbuild {:builds {:dev {:figwheel     {:on-jsload "tutorials.react_frontend.app/init"}
                             :source-paths ["src/cljs" "src/cljc"]
                             :compiler     {:main                 tutorials.react_frontend.app
                                            :asset-path           "js/compiled"
                                            :output-to            "resources/js/reagent_frontend.js"
                                            :output-dir           "resources/js/compiled"
                                            :optimizations        :none
                                            :preloads             [devtools.preload]
                                            :source-map-timestamp true
                                            :pretty-print         true}}}}

  :figwheel {:css-dirs ["resources/css"]}

  :main ^:skip-aot meetup.intro
  :target-path "target/%s")
