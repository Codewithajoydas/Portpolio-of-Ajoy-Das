const CACHE_NAME = "js-projects-cache-v1";

// Detect base path (GitHub Pages vs localhost)
const BASE_PATH = self.location.pathname.includes("/JAVASCRIPT-PROJECTS/")
  ? "/JAVASCRIPT-PROJECTS/"
  : "/";

// Files to cache
const urlsToCache = [
  `${BASE_PATH}`,
  `${BASE_PATH}projects.html`,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}manifest.json`,
  `${BASE_PATH}offline.html`, // Create this offline fallback page
  `${BASE_PATH}icons/icon-192.png`,
  `${BASE_PATH}icons/icon-512.png`,
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => {
          // Show offline page for failed navigation
          if (event.request.mode === "navigate") {
            return caches.match(`${BASE_PATH}offline.html`);
          }
        })
      );
    })
  );
});
