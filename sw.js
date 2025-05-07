const CACHE_NAME = "js-projects-v2";
const urlsToCache = [
  "/JAVASCRIPT-PROJECTS/",
  "/JAVASCRIPT-PROJECTS/index.html",
  "/JAVASCRIPT-PROJECTS/landing.html",
  "/JAVASCRIPT-PROJECTS/manifest.json",
  "/JAVASCRIPT-PROJECTS/icons/icon-192.png",
  "/JAVASCRIPT-PROJECTS/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
