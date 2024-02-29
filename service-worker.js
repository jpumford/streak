self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('streak-counter').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       // Add other assets like CSS, images, etc.
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});

