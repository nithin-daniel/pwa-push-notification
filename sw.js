// Service Worker for PWA
const CACHE_NAME = 'pwa-push-v1';

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(self.clients.claim());
});

// Fetch event - just pass through to network
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
