(defproject meetup "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs" "src/cljc"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.145"]

                 ; web server
                 [http-kit "2.2.0"]
                 [aleph "0.4.4"]

                 ; request handling
                 [yada "1.2.11"]
                 [liberator "0.15.1"]
                 [cljs-http "0.1.44"]

                 ; routing
                 [bidi "2.1.3"]
                 [compojure "1.6.0"]

                 ; security
                 [buddy/buddy "2.0.0"]
                 [com.cemerick/friend "0.2.3"]

                 ; templating
                 [hiccup "1.0.5"]
                 [enlive "1.1.6"]
                 [de.ubercode.clostache/clostache "1.4.0"]

                 [reagent "0.8.1"]

                 ;; processing
                 [tesser.core "1.0.2"]
                 [tesser.math "1.0.2"]
                 [clojure-csv/clojure-csv "2.0.2"]
                 [iota "1.1.3"]

                 [org.clojure/tools.namespace "0.2.11"]
                 [com.taoensso/timbre "4.10.0"]]

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.15"]
                                  [binaryage/devtools "0.9.9"]
                                  [viebel/gadjett "0.5.2"]
                                  [klipse "7.3.2" :exclusions [viebel/gadjett]]]
                   :plugins      [[lein-cljsbuild "1.1.7"]
                                  [lein-figwheel "0.5.15" :exclusions [org.clojure/clojure org.clojure/clojurescript]]]}}

  :cljsbuild {:builds {:dev    {:figwheel     {:on-jsload "tutorials.react_frontend.app/init"}
                                :source-paths ["src/cljs" "src/cljc"]
                                :compiler     {:main                 tutorials.react_frontend.app
                                               :asset-path           "js/tutorials/compiled"
                                               :output-to            "resources/js/tutorials/react_frontend.js"
                                               :output-dir           "resources/js/tutorials/compiled"
                                               :optimizations        :none
                                               :npm-deps             {:react     "16.1.0"
                                                                      :react-dom "16.1.0"}
                                               :install-deps         true
                                               :preloads             [devtools.preload]
                                               :source-map-timestamp true
                                               :pretty-print         true}}
                       :klipse {:figwheel     true
                                :source-paths ["dev-resources/cljs"]
                                :compiler     {:main               klipse-meetup.plugin
                                               :asset-path         "../../resources/js/klipse/compiled"
                                               :output-to          "resources/js/klipse/klipse_plugin.js"
                                               :output-dir         "resources/js/klipse/compiled"
                                               :optimizations      :none
                                               :pretty-print       true
                                               :verbose            true}}}}

  :figwheel {:css-dirs ["resources/css"]}

  :clean-targets ^{:protect false} ["resources/js/tutorials"
                                    "resources/js/klipse"]

  :target-path "target/%s")
