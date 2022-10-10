# Peogressive Web App

Make your web app work in offline like native apps
ref: https://create-react-app.dev/docs/making-a-progressive-web-app/, https://web.dev/progressive-web-apps/

## Three most important things to build PWA

1. [HTTPS](#https)
2. [App manifest](#pwa---app-manifest)
3. [Service worker](#service-worker)

## HTTPS

One of the requirements for PWA <br/>
https prevents bad actores from tempering? with conumications b/w our app and browser<br/>
Platforms to get https url <br/>:

- https://pages.github.com/
- https://letsencrypt.org/
- https://www.cloudflare.com/
  Other ref:
- https://web.dev/pwa-checklist/

## PWA - App Manifest

For a rpgress web app to behave like a netive app, we need to mimic not only functions on the netive app but also some of the views that we get with it.
For example on a phone you can download an app and have an icon, and we can do that with the app manifest. <br >
You can see the file in inspect > Application > Manifest <br >
splash screen: chrom 47 and above has the idea of splash screen where you can add the backgrond color when you loading the app as well as icon.
ref:
[real favicon generator](https://realfavicongenerator.net/)

## Service Worker

How do we use service worker?
![rough drawing about how service workder works with s browser](./service-worker.PNG)

1. download "sw-precache"
2. mofify `build` command to `react-scripts build && sw-precache --config=sw-precache-config.js`
3. add `<script>` in `public/index.html`

```html
<script>
  if ("serviceWorker" in navigator) {
    window.addEventlistener("load", function () {
      navigator.serviceWorker.register("/service-worker.js");
    });
  }
</script>
```

4. add `public/manifest`
5. add `sw-precache-config.js`

```javascript
modele.exports = {
  strioPrefix: "build/",
  staticFileGlobs: [
    "build/*.html",
    "build/manifest.json",
    "build/static/**/!(*map*)",
  ],
  dontCacheBustUrlsMatching: /\.w{8}\./,
  swFilePath: "build/service-warker.js",
};
```

ref:

- https://jakearchibald.github.io/isserviceworkerready/
- [how to push notifications](https://auth0.com/blog/introduction-to-progressive-web-apps-push-notifications-part-3/)
