self.addEventListener('fetch', function(e) {
  e.respondWith(
    (function(response) {
      return response || fetch(e.request);
    })
  );
});
