// SelfScore PWA Service Worker — v2
const CACHE_NAME = "selfscore-pwa-v2";

const CRITICAL_STATIC_ASSETS = [
  "/",
  "/offline",
  "/explore",
  "/results",
  "/about",
  "/privacy",
  "/terms",
  "/manifest.json",
  "/icons/icon.svg",
];

// Install: Cache critical static shell and offline fallback
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_STATIC_ASSETS).catch((err) => {
        console.warn("[SW] Cache preload partial failure:", err);
      });
    })
  );
  self.skipWaiting();
});

// Activate: Purge older version caches and claim clients immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[SW] Deleting obsolete cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event listener
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignore non-GET and non-origin requests
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  // 1. Static immutable bundles & media (_next/static, icons, images)
  // Strategy: Cache-first with background network update
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.match(/\.(svg|png|jpg|jpeg|webp|woff2|ico)$/)
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // 2. HTML Page Navigations
  // Strategy: Network-first to guarantee freshness; fallback to cached page; fallback to /offline
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Check if this exact page was previously cached
          const cachedPage = await caches.match(request);
          if (cachedPage) {
            return cachedPage;
          }

          // Otherwise serve the dedicated offline fallback page
          const offlineFallback = await caches.match("/offline");
          if (offlineFallback) {
            return offlineFallback;
          }

          // Ultimate fallback to cached root
          return caches.match("/");
        })
    );
    return;
  }

  // 3. General requests: Network with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
