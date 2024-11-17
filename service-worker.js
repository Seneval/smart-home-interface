const CACHE_NAME = "smarthome-cache-v1";
const urlsToCache = [
  "/smart-home-interface/",
  "/smart-home-interface/index.html",
  "/smart-home-interface/styles.css",
  "/smart-home-interface/script.js",
  "/smart-home-interface/manifest.json",
  "/smart-home-interface/icons/icon-192x192.png",
  "/smart-home-interface/icons/icon-512x512.png"
];

// Install service worker and cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch resources from cache or network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate service worker and clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
