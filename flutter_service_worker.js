'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7770240f62019b36e618576957ff1e98",
".git/config": "8ae2ec8505d1b4c2066639795618727e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "eeef44fe5d28c6a4285073fa2c8bb4f1",
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
".git/index": "66655ec8d40a06ea936ae5bdf80a4197",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "973e0b6cf15771f7d76a0085e6f64643",
".git/logs/refs/heads/yaominkversisatu": "d44385875a9a7f40f4d9bb0083a5f607",
".git/logs/refs/heads/yaopp": "43b17297d72715d44198be4e6ea08f0d",
".git/logs/refs/remotes/origin/yaopp": "47567def29fe49d8a3306afc83169ef5",
".git/objects/05/69f3781f2b611755618301b90677d32457dd9c": "7afa373900af1b1d8ad8113763a7dd82",
".git/objects/06/d7b186e7d327573a44be0b4e6b7e941323a5f5": "481afaac22aaa3d3e4f044f9b621ca66",
".git/objects/0b/753403581834e62d505173fc6b37344f07327e": "6a6451a83d4516ea1709a4eb502a8d19",
".git/objects/0c/ee2163f876d62a5f6039a6cb7a673f03edffe0": "bf3a64de450668459c50392e750d99d3",
".git/objects/0e/a9a2dd0a89d767b28c06eccd6b1c07209973fc": "a887f6a6b8276c64a90db203dcd4c007",
".git/objects/0f/e5fb83a2eb1a6bda7f2735f73935159b5a752c": "a6329be22b5e30bdb471092554b3a93f",
".git/objects/11/a7c5947771c218a152830adfe1a0df27c5a9d0": "8ab5f916b57c54362564244ded1f5982",
".git/objects/12/8dfcbf882be90bd2b42466d7468ddb66270b88": "68f7d6294ffd96e3c33d4ac2a5658164",
".git/objects/14/5769b04779705e51688f522908572265212742": "d23d5dcfd292b5e00b8d70a09bbcb190",
".git/objects/14/f6662ae005b3a76a2699d24e390859fc036418": "495f3b100f68e2c52bb693f2438eef39",
".git/objects/17/39bb739b7fa84f1029fbdda79a9eb03c19b74a": "37aa0f4946da1b2ac2c68cee52d78ef6",
".git/objects/18/7b2f89f4b5b351f15d8cf23344941dcf78daf2": "3e7be8d51abd606f0fd66f1212337214",
".git/objects/1a/4b2553a6024b0518b10e75a6b26e61112fdcd8": "bb6fc093b15c820b9ca28f3db0a615d2",
".git/objects/1a/8c073485a792d455cff18f0fcb30e6d903e846": "ce9b159fd42c20c1e006f59fa1469d6f",
".git/objects/1d/1a1aa561bee396c9fc88c7eed21d0c1e51cdb5": "0e490097c1373729e53fabd392b852c0",
".git/objects/24/9ea8f1d2fa00103f6e75b4d8d795d0e92ee9fb": "2a9c22056634736757b88d96405b7d10",
".git/objects/2b/6cfa646b70f9373d4d7aea1f3d904519f723f1": "9816df6925cd040bec0b3d44da0409c6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/edc30e0c6115269d370b0e24e424c09701ea73": "f6b798a5302de34dc2d673944ef65d05",
".git/objects/38/ef65105f044d7abdb78f3cd33c57f4b730e561": "8bc9bf3a9177e3bdfa5c2dd2ccb0c6e7",
".git/objects/3a/10e94c577ef6729467ccffdf934a6d1ddc580d": "d51b7bd7e1b76c626bb36273bcaa8a4f",
".git/objects/3d/5e52a4319310743b99167c9178df441a6127a8": "2ecc472161aaa9c59fb8e74f47400722",
".git/objects/43/ed64ddb7c0a30c92f82d8e38b8e450530da2c5": "91b094c8e14cbe2548c2a4aef6dd94a4",
".git/objects/44/fd4d1459ebb7c48b1f266c8134c4b27c2a1f29": "ec375c0d4bb14302267987776eda7582",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/3071ded423d325c02135c161580f46dba1f576": "262a34adaf1d90ae211c57ed4e886151",
".git/objects/55/bfbad653cb0b1030ee5faf4e255c4b634b12f2": "9372f0fb989be1a973dc29632755a4b8",
".git/objects/57/3b07688a0ee961804a67540ce163a3c91dfeca": "792bdb5c59d815ca1b14abdb1d64966d",
".git/objects/5c/b0f733e2cffe001fb177d2c6fe2310f58303d8": "3501f58f2dc64c792097c9dfb9631e79",
".git/objects/60/245350a1bb6b2021c8402fac99c73872d611fd": "3e77320d1bff39c40cee1e3645d699f3",
".git/objects/72/70dff78ba15135ec780ac80595c63e890a0ca5": "5a5e2e780ace4e4cd85ce7272cda29f9",
".git/objects/74/72b170e76f26b334f9ea03e920a717c2ad0da7": "7ffa54abe84002406ca20f0807314167",
".git/objects/76/84660fe4f6917fbb4c466b0ea49a3d70f48aad": "dccfff95a62bb635f99f7dda7e246d09",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/eb2bb49512acf4c78127a4f674dc26377a67bb": "131819cf1656033f9fcf4035270eedc1",
".git/objects/81/5238f949277661f591c71f84c4bc9d74df7f99": "9baecf1fb37e1429f0dd61b643cd642f",
".git/objects/82/3a22f0659539b3ee5f64800d9c9fefe9552c6f": "20ae6044e7dc436d49f1a69d2f66253b",
".git/objects/82/929c912c7a635e2e16f17bb9f404e2093bb99f": "2ebff6131185ac0871455ac87e654f50",
".git/objects/84/bed1489038b9618f219d1943ffd35efadd9893": "7cbdbd82f2dab2e83fe1b6f93f1c53a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/b23ca9eb21722c4b08ebb9f83cf2b98511a301": "a021b4f0053d6b1335bfc76cb32146f7",
".git/objects/9f/16a565f58e4c18b8d1f2bc5cf10344485c7509": "837b5e9dab3a2ada3ad3355a77943e65",
".git/objects/9f/adcb7a4a9ab2dbba1e37599cbe62bb31a4ac6a": "f4271edffa80d7b678065ea5001ed596",
".git/objects/9f/c6725b959b68028a27c4230a35b173aa59fad4": "fae8311c3532455deaf9d04cec17d376",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/f613ac724b5496eaf17577bf023a23384d5465": "857fcd085660a116ff9e5d86d099ed79",
".git/objects/b4/e75974a3b91eca8807ac5328dd784d582e4c5e": "6e4d4255cb0c542b4ddd58a92663c51c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/bd09e108921fc50e3ade73ba47008cdc894d60": "22744017148cf8162cbd1232f106d198",
".git/objects/c6/3bec983b6e3b8804b626a6c5ca852b9ba1a7b4": "c7e031682314f22540e80e34f74fc676",
".git/objects/cd/51604f9729157ce0415f99184b26d291ce145a": "408f496d58aeb82b2c1ff99354dcfc16",
".git/objects/ce/d34ddfaa9c65056abe9c0d22fbffa3e679d115": "cc22af2f249b5494e500b4b088964a92",
".git/objects/d2/3b4bd4d96e6185d209df99438c94daab1aa6b6": "ac4e6793bb15653478883cf29358da01",
".git/objects/d2/b4d247af8a599643538b9df63dac4e1df02774": "ebd44d28253d89ace52a087b884abf53",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/63187b0db46dae058dfd2ae73aac9e52d80dd5": "55b957d136564e140be896e9fef37706",
".git/objects/e3/01274b55b311c41eb95a6aa0d62a260a75485d": "fd6d4b8d2a5f73906de1eb3fc8af6446",
".git/objects/e3/0dafec730362895828cc2d5d77bde098b4b903": "d607a5c32a01dbb845d338589f016609",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/3cb377b6f584b9ffb47301d67a9fe726fa6dcf": "ea4921733bf39f6341b515599e7991e6",
".git/objects/f4/064bd3b41799e39efbb6d5d4311f55c2500287": "ff8a08072919739f575006762e2c3a15",
".git/refs/heads/yaominkversisatu": "ea81a4960440e9db21de3bc3c0701d97",
".git/refs/heads/yaopp": "ea81a4960440e9db21de3bc3c0701d97",
".git/refs/remotes/origin/yaopp": "ea81a4960440e9db21de3bc3c0701d97",
"assets/AssetManifest.json": "f19a18f7aae1e9d79a5bd1cab7830cd2",
"assets/assets/images/aksiagama.png": "130d41703bb9f29fe62a776a0a198c8b",
"assets/assets/images/aksisosial&keagamaan.png": "b093705db4dcdece3c5cb1705493d07a",
"assets/assets/images/asuransi.png": "ad4eced834ae4ed295bf910ec5957241",
"assets/assets/images/bantuan.png": "8bf93a26351d3a2cd4551d323e004122",
"assets/assets/images/belanjaseharihari.png": "217a4e83d41e1a80601072ad7fca7787",
"assets/assets/images/cicilan.png": "de5dd6e880f737cdd954c93589193679",
"assets/assets/images/dot.png": "84f99948748605e5abba1522173b808c",
"assets/assets/images/driverojek.png": "9ea0483cd9a47e331853c08acb99b996",
"assets/assets/images/duitinsampah.png": "a83b0e3994e1dddef17a48de4de795fd",
"assets/assets/images/gasnegara.png": "924fb24043c3a17f3f938f56902b9ebb",
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
"assets/assets/images/lihatsemua.png": "81a024cd6419640ee63053da2e3fa9e9",
"assets/assets/images/logopartner.png": "6604b33c565c3218e9974407ee9038b2",
"assets/assets/images/logopat.png": "6604b33c565c3218e9974407ee9038b2",
"assets/assets/images/logopp.png": "fa017db9d6a9c24a97aea8e2b6be2562",
"assets/assets/images/love.png": "52a1c3ff4c287c740703095dc5e23820",
"assets/assets/images/oshop.png": "4a858d68b3f62b454723856005543a3e",
"assets/assets/images/paketdata.png": "bdf738da951714455ba04aa05003e9d7",
"assets/assets/images/pascabayar.png": "4242f702cfe96447a4f2a17108ea6603",
"assets/assets/images/pdam.png": "6d579a2d25cb77f7cd8f468e009eb5cf",
"assets/assets/images/pejuangwarung.png": "0cfdb23789b25bb9813b6b665d79da0c",
"assets/assets/images/penanggota.png": "46167ef08d75a0ab81d97c4e2603396a",
"assets/assets/images/pendaftarananggota.png": "7586fd2dcc278b55d76027f6e77d6b77",
"assets/assets/images/pengaturan.png": "78c2d7232b33a86062585b1e20ea44ea",
"assets/assets/images/pengepuljelantah.png": "80763a04aa76e8a83c90452b89d23be4",
"assets/assets/images/peopleg.png": "3110d78fff854e1fcf765a46ddcbb8cb",
"assets/assets/images/phero.png": "f8f90cf96dff51927e9c2de43f587459",
"assets/assets/images/pln.png": "d67677d7e780fd532541ee792ae9d579",
"assets/assets/images/profil.png": "fa4055d771a6e4392e531bda328003de",
"assets/assets/images/profilepemuda.png": "6b1721900b59df47e6c1722dfe858235",
"assets/assets/images/profilepemudapancasila.png": "b755b1363ad4f17deea3467e68f74a32",
"assets/assets/images/profileuser.png": "448ad756f3ceb3c0ceb0df06b1ed4ad6",
"assets/assets/images/programkemandiri.png": "d73f7a3293def2daf27baf25560c6511",
"assets/assets/images/programkemandiriankader.png": "6c1aca3c060bd5bdeb418cb3fe856d44",
"assets/assets/images/pulsareguler.png": "84887fe4760b8625f91a89eb8dca346d",
"assets/assets/images/reganggota.png": "46167ef08d75a0ab81d97c4e2603396a",
"assets/assets/images/riwayat.png": "a9e120e2e507ca7ec144f5013219d192",
"assets/assets/images/tokenlistrik.png": "c86259f5c8e937b7a6c1e01e0c8f1106",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ee58b0aa2e5543982ed01dab0bc38c7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6ae22bfd3cec868eac2fe76b1cb6b8fc",
"/": "6ae22bfd3cec868eac2fe76b1cb6b8fc",
"main.dart.js": "30d7e8a5a75c8d1414928457c7b70d4f",
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
