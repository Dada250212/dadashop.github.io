const CACHE_NAME = "dada-shop-v1";

const FILES_TO_CACHE = [
"./",
"./app.html",
"./manifest.json",
"./sac_franges.jpg"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll(FILES_TO_CACHE);
})
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
});
