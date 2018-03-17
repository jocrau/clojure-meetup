(require '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel! :klipse)

(ra/cljs-repl :klipse)
