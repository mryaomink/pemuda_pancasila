'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "941f1182ff1eab7fc105d7ceff452c63",
"assets/assets/images/aksiagama.png": "130d41703bb9f29fe62a776a0a198c8b",
"assets/assets/images/asuransi.png": "6b9a029734b1bf5805862872fe94dfbc",
"assets/assets/images/bantuan.png": "981153c67c67888bcb7275b1f968594e",
"assets/assets/images/cicilan.png": "d38ca321089ffcc3a7dd2889dbc4036d",
"assets/assets/images/dot.png": "84f99948748605e5abba1522173b808c",
"assets/assets/images/driverojek.png": "9ea0483cd9a47e331853c08acb99b996",
"assets/assets/images/duitinsampah.png": "a83b0e3994e1dddef17a48de4de795fd",
"assets/assets/images/gasnegara.png": "bc6798af6f92344a1c8e32dc51928924",
"assets/assets/images/handshake.png": "3e9b309fd0a27d51d9b64d9e3c60bc95",
"assets/assets/images/hari.png": "d06789e0f52dd6940ed4255518beb51c",
"assets/assets/images/img1.png": "1b3afde693e5ba4ed889a64079b2dbb8",
"assets/assets/images/img2.png": "788cb7d79090bc2d53e83bcaaaeb537c",
"assets/assets/images/juraganamdk.png": "e93399356b61a060cb74c8ce92cf1065",
"assets/assets/images/juraganangkutan.png": "1d4d28cc76e08ca5afcff652e5e6cef1",
"assets/assets/images/juragankuliner.png": "132d39da2835b77ce05ebd1df24ee1fc",
"assets/assets/images/juraganppob.png": "e871582dd3e43086682662ee5d29b325",
"assets/assets/images/juraganwarung.png": "2e30bcecbbd65f09d5204e9b2487724c",
"assets/assets/images/kmpw.png": "5fdaa16a3e59cfe5665168a2cbc13ce8",
"assets/assets/images/kpp.png": "717a2d61cca35ccb835844a4b664d45f",
"assets/assets/images/lihat.png": "1742490421f8dcabb5ef64566adba8a7",
"assets/assets/images/lihatsemua.png": "a3064abb434215268a79f682db7da1b9",
"assets/assets/images/logopartner.png": "6604b33c565c3218e9974407ee9038b2",
"assets/assets/images/logopat.png": "6604b33c565c3218e9974407ee9038b2",
"assets/assets/images/logopp.png": "fa017db9d6a9c24a97aea8e2b6be2562",
"assets/assets/images/love.png": "52a1c3ff4c287c740703095dc5e23820",
"assets/assets/images/oshop.png": "4a858d68b3f62b454723856005543a3e",
"assets/assets/images/paketdata.png": "706b9a6807a8f64ff61490061e838c76",
"assets/assets/images/pascabayar.png": "53dada0185942df921385c197b3b5909",
"assets/assets/images/pdam.png": "c962d055ad10110a010ba6faa5034bd3",
"assets/assets/images/pejuangwarung.png": "0cfdb23789b25bb9813b6b665d79da0c",
"assets/assets/images/penanggota.png": "46167ef08d75a0ab81d97c4e2603396a",
"assets/assets/images/pengaturan.png": "ccd908d57d73df8e7cbd44dd93f2d4b4",
"assets/assets/images/pengepuljelantah.png": "80763a04aa76e8a83c90452b89d23be4",
"assets/assets/images/peopleg.png": "3110d78fff854e1fcf765a46ddcbb8cb",
"assets/assets/images/phero.png": "f8f90cf96dff51927e9c2de43f587459",
"assets/assets/images/pln.png": "d67677d7e780fd532541ee792ae9d579",
"assets/assets/images/profil.png": "fa4055d771a6e4392e531bda328003de",
"assets/assets/images/profilepemuda.png": "6b1721900b59df47e6c1722dfe858235",
"assets/assets/images/programkemandiri.png": "d73f7a3293def2daf27baf25560c6511",
"assets/assets/images/pulsareguler.png": "151a5577b77548b2ff846142d39afe45",
"assets/assets/images/reganggota.png": "46167ef08d75a0ab81d97c4e2603396a",
"assets/assets/images/riwayat.png": "826b81965be230fb78b4df3455783cd4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ee58b0aa2e5543982ed01dab0bc38c7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35850eadcd3f024e7001b22996bc2ba7",
"/": "35850eadcd3f024e7001b22996bc2ba7",
"main.dart.js": "cb0ed77989820789c8b6c8460fe4f330",
"manifest.json": "fd0d84d86eb5410fea9eacb4de97017e",
"version.json": "fbc89be5473d55d57f272eee551ec69e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
