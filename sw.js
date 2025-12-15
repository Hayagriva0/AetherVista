const CACHE_NAME = 'weather-pro-v6.1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// 1. Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// 2. Activate and Clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

// 3. Fetch Strategy: Network First, Fallback to Cache
self.addEventListener('fetch', (e) => {
  // bypass cache for weather APIs to ensure fresh data
  if (e.request.url.includes('api.open-meteo.com') || e.request.url.includes('geocoding-api.open-meteo.com')) {
    return; 
  }

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
