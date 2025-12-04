const CACHE_NAME = 'weather-pro-v5.5';
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
// This ensures weather data is always fresh, but the app shell loads if offline.
self.addEventListener('fetch', (e) => {
  // Allow weather API calls to go straight to network (don't cache weather data indefinitely)
  if (e.request.url.includes('api.open-meteo.com') || e.request.url.includes('geocoding-api.open-meteo.com')) {
    return; 
  }

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Clone the response to save it in cache for next time
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(e.request)) // If offline, serve from cache
  );
});
