(require '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel! :dev)

(ra/cljs-repl :dev)
