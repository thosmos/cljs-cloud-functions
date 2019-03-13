## CLJS Cloud Functions

#### Initialize the tools and project

Clone this project then run the following commands at the root of the repository:

```sh
cd functions
yarn || npm install


# sign into your firebase account and select a project
npx firebase login (once)
npx firebase use <your-firebase-project> (once)
```

#### Development

Whenever the underlying files change the `firebase serve` command will restart
the function emulator allowing a somewhat interactive workflow:
```
npx shadow-cljs watch gcf
npx firebase serve --only functions
```

#### Build and deploy a release
```
npx shadow-cljs release gcf
npx firebase deploy
```
