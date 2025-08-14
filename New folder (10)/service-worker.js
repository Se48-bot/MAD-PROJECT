const CACHE_NAME = 'agro-connect-cache-v1';
const PRECACHE_URLS = [
	'./',
	'Agro-Connect-Hub-Ghana.html',
	'Buyer-Dashboard-Overview.html',
	'Farmer-Dashboard.html',
	'https://cdn.tailwindcss.com/3.4.16',
	'https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))).then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', event => {
	const { request } = event;
	if (request.method !== 'GET') return;
	event.respondWith(
		caches.match(request).then(cached => cached || fetch(request).then(resp => {
			const respClone = resp.clone();
			caches.open(CACHE_NAME).then(cache => cache.put(request, respClone));
			return resp;
		}).catch(() => cached))
	);
});