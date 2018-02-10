(defproject meetup "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]

                 ; web server
                 [http-kit "2.1.19"]
                 [aleph "0.4.1"]

                 ; request handling
                 [yada "1.1.37"]
                 [liberator "0.14.1"]

                 ; routing
                 [bidi "2.0.9"]
                 [compojure "1.5.1"]

                 ; security
                 [buddy/buddy "1.1.0"]
                 [com.cemerick/friend "0.2.3"]

                 ; templating
                 [hiccup "1.0.5"]
                 [enlive "1.1.6"]
                 [de.ubercode.clostache/clostache "1.4.0"]

                 [org.clojure/tools.namespace "0.2.11"]]
  :plugins [[lein-gorilla "0.4.0"]]
  :main ^:skip-aot meetup.intro
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
