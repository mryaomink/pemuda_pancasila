'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "86cc2c80a25c5358b2b34aa085f5412d",
".git/config": "c2c96416e8abc518ecc85bf4ea42d441",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "3d83364150e44ce3e7643326baefa6e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb44d64ccf152aaa33b2050fd686a6f1",
".git/logs/refs/heads/main": "20ab2221dbabb2d7f671c3ca0cfa5cae",
".git/logs/refs/remotes/origin/main": "edce33a3816d6ca70530c869292877be",
".git/objects/06/d7b186e7d327573a44be0b4e6b7e941323a5f5": "481afaac22aaa3d3e4f044f9b621ca66",
".git/objects/10/041e5937559f0dd027e28db1d86eb66b28097f": "5e6352723f9ed5e0a1e40d139ad8940c",
".git/objects/14/5769b04779705e51688f522908572265212742": "d23d5dcfd292b5e00b8d70a09bbcb190",
".git/objects/1d/ecfbf517e561086cb63084ec9487dc702a39fd": "608eca75e41d7d1b9febd625097dfbc3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/edc30e0c6115269d370b0e24e424c09701ea73": "f6b798a5302de34dc2d673944ef65d05",
".git/objects/34/8d2c5e06b09706b1f8ae808e458c1bd8d77ede": "31b2a067229fc5275b4c8ac0af6d7e8b",
".git/objects/3a/2b5f36a01f4f502019c09033262615823dbb32": "7da88f04cede6f7f4c1bb93817b01a78",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5c/b0f733e2cffe001fb177d2c6fe2310f58303d8": "3501f58f2dc64c792097c9dfb9631e79",
".git/objects/74/72b170e76f26b334f9ea03e920a717c2ad0da7": "7ffa54abe84002406ca20f0807314167",
".git/objects/76/45b41ffeff7bc5becc0e52e8aa9956fe3882d8": "d70be8a67a757dc4892d349d9e2505d0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/3ab17ce08588b5637129d71bc57f65756495f3": "917283eaec8fb78f0404925a694956bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/19e2ccbb1f2f75644dd89fda33680f203a0e92": "daddc7f2015f2e0d22313cdf056b2eef",
".git/objects/9c/5dac7ad97c7525b272082bc4263a212372c0d5": "33fc4dd6731c53e163e61b873ab22cbe",
".git/objects/9f/adcb7a4a9ab2dbba1e37599cbe62bb31a4ac6a": "f4271edffa80d7b678065ea5001ed596",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c6/3bec983b6e3b8804b626a6c5ca852b9ba1a7b4": "c7e031682314f22540e80e34f74fc676",
".git/objects/c9/a9540d92a7478464725a7662e628880fb89ccb": "d7852dedd08ab68fe3b79b4ee0b79c15",
".git/objects/ce/d34ddfaa9c65056abe9c0d22fbffa3e679d115": "cc22af2f249b5494e500b4b088964a92",
".git/objects/d2/3b4bd4d96e6185d209df99438c94daab1aa6b6": "ac4e6793bb15653478883cf29358da01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/63187b0db46dae058dfd2ae73aac9e52d80dd5": "55b957d136564e140be896e9fef37706",
".git/objects/df/260eaccdb0ead2cae214a516f544d3d6723dbc": "4e326b6309a4652b860c6ce59ffae94c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/3cb377b6f584b9ffb47301d67a9fe726fa6dcf": "ea4921733bf39f6341b515599e7991e6",
".git/objects/f4/064bd3b41799e39efbb6d5d4311f55c2500287": "ff8a08072919739f575006762e2c3a15",
".git/objects/f8/007765f14a99b13cb6dddddb8b7de6fa49209f": "b1493f01e5815cf6fb1c55922f9b4e47",
".git/objects/f8/a3e09d6ca95490c357b3ca9114eb117a5f294c": "317c80de17c89fb36beb6b5faf04d855",
".git/refs/heads/main": "42c66c2b22bf27179e62b9c72aee8d58",
".git/refs/remotes/origin/main": "42c66c2b22bf27179e62b9c72aee8d58",
"assets/AssetManifest.json": "556de2dc452174281059f58ddab68a73",
"assets/assets/images/asuransi.png": "6b9a029734b1bf5805862872fe94dfbc",
"assets/assets/images/bantuan.png": "981153c67c67888bcb7275b1f968594e",
"assets/assets/images/cicilan.png": "d38ca321089ffcc3a7dd2889dbc4036d",
"assets/assets/images/dot.png": "84f99948748605e5abba1522173b808c",
"assets/assets/images/gasnegara.png": "bc6798af6f92344a1c8e32dc51928924",
"assets/assets/images/handshake.png": "3e9b309fd0a27d51d9b64d9e3c60bc95",
"assets/assets/images/img1.png": "1b3afde693e5ba4ed889a64079b2dbb8",
"assets/assets/images/img2.png": "788cb7d79090bc2d53e83bcaaaeb537c",
"assets/assets/images/kmpw.png": "5fdaa16a3e59cfe5665168a2cbc13ce8",
"assets/assets/images/kpp.png": "717a2d61cca35ccb835844a4b664d45f",
"assets/assets/images/lihat.png": "1742490421f8dcabb5ef64566adba8a7",
"assets/assets/images/logopp.png": "fa017db9d6a9c24a97aea8e2b6be2562",
"assets/assets/images/love.png": "52a1c3ff4c287c740703095dc5e23820",
"assets/assets/images/oshop.png": "4a858d68b3f62b454723856005543a3e",
"assets/assets/images/paketdata.png": "706b9a6807a8f64ff61490061e838c76",
"assets/assets/images/pascabayar.png": "53dada0185942df921385c197b3b5909",
"assets/assets/images/pdam.png": "c962d055ad10110a010ba6faa5034bd3",
"assets/assets/images/pengaturan.png": "ccd908d57d73df8e7cbd44dd93f2d4b4",
"assets/assets/images/peopleg.png": "3110d78fff854e1fcf765a46ddcbb8cb",
"assets/assets/images/phero.png": "f8f90cf96dff51927e9c2de43f587459",
"assets/assets/images/pln.png": "d67677d7e780fd532541ee792ae9d579",
"assets/assets/images/profil.png": "fa4055d771a6e4392e531bda328003de",
"assets/assets/images/pulsareguler.png": "151a5577b77548b2ff846142d39afe45",
"assets/assets/images/riwayat.png": "826b81965be230fb78b4df3455783cd4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5bbfbdcebcd81e5a1a73c3cb0e675a03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "daaff15f44f1df8c77cd6f8a69a1bcc4",
"/": "daaff15f44f1df8c77cd6f8a69a1bcc4",
"main.dart.js": "9a09c80ec5dca88d8ec5cd9924a4cb86",
"manifest.json": "eb20b77c13f4fac50664db4e7e7b21d1",
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
