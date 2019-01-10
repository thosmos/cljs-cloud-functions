## CLJS Cloud Functions

#### Initialize the tools and project
```
npm install -g firebase-tools shadow-cljs

git clone https://github.com/thosmos/cljs-cloud-functions.git
cd cljs-cloud-functions/functions
yarn || npm install
```

#### Build and deploy a release
```
shadow-cljs release gcf
firebase login (once)
firebase use <your-firebase-project> (once)
firebase deploy
```

#### Notes

* Explicity export each function in both `gcf.cljs` and again in `index.js` in order for the `firebase deploy` helper to recognize it.
* Firebase provides a local development server via `firebase serve`.  It will still require CLJS release builds in order to run correctly.
* In order to improve development speed, run `shadow-cljs server` once, which keeps a JVM running and reduces the time for each `shadow-cljs release gcf` build.

