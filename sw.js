const CACHE_NAME = 'weather-pro-v10.0';
const MAX_CACHE_SIZE = 50; // Maximum number of cached items

// Core assets that must be cached for offline support
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
  './icon-maskable.svg'
];

// External CDN resources for offline support
const CDN_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js'
];

// Helper function to limit cache size
const limitCacheSize = async (cacheName, maxItems) => {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxItems) {
      // Delete oldest entries (first items in the cache)
      const deleteCount = keys.length - maxItems;
      for (let i = 0; i < deleteCount; i++) {
        await cache.delete(keys[i]);
      }
    }
  } catch (err) {
    console.warn('Failed to limit cache size:', err);
  }
};

// 1. Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache core assets first (these are critical)
      try {
        await cache.addAll(CORE_ASSETS);
      } catch (err) {
        console.error('Failed to cache core assets:', err);
      }

      // Try to cache CDN assets (non-blocking, some may fail due to CORS)
      for (const url of CDN_ASSETS) {
        try {
          await cache.add(url);
        } catch (err) {
          console.log('Failed to cache CDN asset:', url);
        }
      }
    }).catch((err) => {
      console.error('Cache open failed during install:', err);
    })
  );
  self.skipWaiting();
});

// 2. Activate and Clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      ))
      .catch((err) => {
        console.error('Failed to clean old caches:', err);
      })
  );
  self.clients.claim();
});

// 3. Fetch Strategy: Network First, Fallback to Cache
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Skip non-GET requests
  if (e.request.method !== 'GET') return;

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) return;

  // Allow weather/AQI API calls to bypass cache for fresh data
  if (url.hostname.includes('open-meteo.com')) {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // For Google Fonts stylesheets, cache and return
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        const fetchPromise = fetch(e.request)
          .then((response) => {
            if (response && response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(e.request, clone))
                .catch((err) => console.warn('Failed to cache font:', err));
            }
            return response;
          })
          .catch(() => cached);

        return cached || fetchPromise;
      })
    );
    return;
  }

  // Default strategy: Network first, fallback to cache
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Only cache successful responses
        if (res && res.ok) {
          const resClone = res.clone();
          caches.open(CACHE_NAME)
            .then(async (cache) => {
              try {
                await cache.put(e.request, resClone);
                // Limit cache size after adding new entry
                await limitCacheSize(CACHE_NAME, MAX_CACHE_SIZE);
              } catch (err) {
                console.warn('Failed to cache response:', err);
              }
            });
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// 4. Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
