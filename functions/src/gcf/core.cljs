(ns gcf.core
  (:require ["firebase-functions" :as fb-fn]))

(def cd-fn 
  (.onRequest (.-https fb-fn)
   (fn [req res] 
     (.send res "Hello from CLJS!!!!"))))

 (def exports #js {:cljsHTTP cd-fn})