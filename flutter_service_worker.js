'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "20eb027a6462641a04912677f8357352",
"index.html": "45ecf888da8999ff7e4bd1a35db66b53",
"/": "45ecf888da8999ff7e4bd1a35db66b53",
"main.dart.js": "1ea4f7357a94a2451729c70271b5e355",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "462538a4a4244e750ac820a939987e7e",
"icons/Icon-192.png": "bc07cf55a7ecc214b5f2e7b503d78ae2",
"icons/Icon-maskable-192.png": "bc07cf55a7ecc214b5f2e7b503d78ae2",
"icons/Icon-maskable-512.png": "4029eead46623548e00f6731c4e3e113",
"icons/Icon-512.png": "4029eead46623548e00f6731c4e3e113",
"manifest.json": "1f1c678392f07eb1425ea0043fb0f456",
".git/config": "d510a81b4245168e76e1468cd1831fe9",
".git/objects/0d/305377f1ac3dc201ab056406ae4c6b1137a545": "e23ebb157f561ecdadd77067468ebcf0",
".git/objects/3e/631e007e3ccc2a72bb6270e1fa7678faffad67": "312cb39fcec503eb07f224bb614a977a",
".git/objects/3b/8c8e6aded6dd908fc6e9e8f27b50eee844109b": "87a5840e9304e8e8fce89507a8036f80",
".git/objects/6f/f157fd0ec996689286a70ea390fe85bb65c202": "eb0db8f03d3d7ce453def9210a36b4ea",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/f803e7e92c2649de1162b4d16a350101f0690d": "6d9eaf73f4ad7b65740dffa6dd6050d6",
".git/objects/58/1477080dc776deb2636f4ac79a8426f6c00154": "7903ad3b1e95a33f0b0077aee0684a31",
".git/objects/0b/4cf3a058cb59b170f5c87b99848e5f2aa5a32c": "9f6a709e3f7f96fce857e9ffc71c0fe8",
".git/objects/5f/735286fa396c419f72cc90698f3d3b00780125": "a20425c45a6fecc25d879af1ac538e5d",
".git/objects/be/ecd856bc2ff5251e7d8b9b4f750622b7fea91d": "17ab754ac83e8a4cd358afed39e65604",
".git/objects/bd/453b008c302f8beb0f43aa14a8b7a1db9139df": "e34e7fd5a42d860a72b1fc3c9d7da054",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/60d770f533cbbf0973de0a15ff8956a8d847a3": "d5415ca5fd1064c0e1995dd3e44c527b",
".git/objects/ed/71d8ee78828659d1e607e84e02b7a52a0d4dd9": "8a3303600819390489d5ded1a2f538b4",
".git/objects/ec/74d7a1d6ef7e30afa5c55f30f9b5d2440568e2": "831e89fb36203fc52a2f606962f79767",
".git/objects/18/baa2eb76b62bf9bff2beb5fec8e89b876ee51a": "c3ad68837c1f00f635a94742e35d7d37",
".git/objects/89/f823679b12283a669b114ecaee47e6d989a920": "9bbf1c89feb5e762813fb243616c72ff",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/46c20ea50bea880e8188dfb3e910bc242a9f0c": "fd3cecc759fe2dfb77eb1d0e485ebb08",
".git/objects/7b/79ec14982d57b66ca7d669a595c22b66026b34": "f86d5e1ae4d24db62472aaa5a0b8f7f6",
".git/objects/7e/9bc26d6686eae38087e43be4df5f6dba9d0f6f": "6fbc8e4dd060d79fe91f127aa0cba6d7",
".git/objects/81/84293655bb3c1392920332233bbd7622b59c91": "7031e0023c6d22c52b4b90ba1b89111f",
".git/objects/9f/f2c25b378eafa6b503dae18c06d05a9b37cf73": "dc1a246787b853ea0e29581a997fdd62",
".git/objects/6b/608e2221eadb3bbf674618b5ada7ff38547fd1": "03070816f1ab3bf9a015baae426bbdca",
".git/objects/62/7024f169bd4b89b605cd773995ba70551f87a2": "4377cfb852832a1ad9f2f7caf00c20e4",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/28e2eeea5f9e751128b117930f7619747190cf": "1750b581c4479b7249bb574503721d69",
".git/objects/6d/757f830b24cb388eb614dbbed4a95f837b8e94": "d1edd9c590844f39277e8fb544c1d20b",
".git/objects/6c/c0e061dfff4ec2d72387c961df3880a6eb1e83": "50f2af7feffc90b4613a0409aecf8218",
".git/objects/55/3b50e9137173d0406c50036b24c12cbfe76d2f": "9fc92e14a35870d53a9052ad8bbe5c40",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/64/b6a37dee27107a1461b7a3b65fa9b52aa27856": "b6c57343512b9dbadaa6992eaa1a9499",
".git/objects/90/bee2995ef3317cdc0ab2effd077c7e329c258f": "880d6183af4a45f65720fbd419e4d406",
".git/objects/90/230b8e73882e73a2d0fae823d3731fe8b6c80d": "a308f9d67c16a6c369aa4a53d14dc972",
".git/objects/dc/bc0a45813543c769fb1d325568a18129bfaaef": "6970ccb682396acaacb77e33c14f39cf",
".git/objects/dc/658d32b5dbc6ff13f0bd80de2b8745ed5edad3": "e7155656720550cba494f706bcc9f2d9",
".git/objects/a9/74ae0216ceaddde26b8f4058b1cb9bdfdb3fae": "31049a3c6bd66f6af15cbc486d49d476",
".git/objects/aa/c86056ef8fe8c71219ed8a8673b746b1535d23": "4f78f614790e6e48fc5de33aee8b52f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/4416a4a9bad1501a4f2d9d696e8b9d770e9368": "dbfb8ec032ad6caa59fdc40c2cf0a68d",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f7/b287c03042c845de65b6d0498dbc8610431283": "1da1296ea7d04d49028b06c8d72613ec",
".git/objects/fa/c7095981f4441aa550b2c65089c3e764ff161c": "c1cf644137a9186b8b76fa5b43a3306e",
".git/objects/fa/63750772f1fb65cbe5a2d4062668ebc9cc8c19": "83c95103838380e837346f46dbdb9ade",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/4e81d003a225c405b26b9d1b40da9c40915bde": "04ecbf0ef47db9ee446488c030ac5234",
".git/objects/48/2a639b5d71309c49a0f15067602bf56bb5d8f3": "eb0a875a2ee28113cf1d909f149b598e",
".git/objects/15/272c7cfc10e8cc075e57f997e904c3b3fc6b56": "0cc650d6c51c90c6e515f3b2ca991ae5",
".git/objects/15/a7fc278d76312d3b32c358e0270da9ce0fbb8a": "c8db0fdb50776bcc8a3a0ae82d985dd3",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/c64222721d9fb8038d38fb86639339b62e503f": "d8e6f58b4fb5c32b185a78b8b0d1bc19",
".git/objects/82/afd7b835a30255c7504fa319d71ebc80d07345": "9c0bdd16079a3285d3671182499e8260",
".git/objects/82/dfefec3d295ca1acf527ca304a63ac5522051e": "edb02589f65d131992c17bc922721116",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/2b/98a7a788a3c27587d108df8dd41f74a879c8ca": "39b3723d637cfe21e2b5df277aef673c",
".git/objects/47/e68261b00c90f70ac48237bff91ccfe3424ea3": "a08977422823cfaa46332309db144c86",
".git/objects/13/4de042df837085e73bf48e8b79e0fc4e466f8e": "24775696e8824173d4858b77fca9716f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c292ea7b47dbba4f546c2fa7c80854a0",
".git/logs/refs/heads/master": "c292ea7b47dbba4f546c2fa7c80854a0",
".git/logs/refs/remotes/origin/master": "fe80df92b688f6f545f656c5fe2d7a11",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e4201a4eb49ee4d75df6884c621d0ddc",
".git/refs/remotes/origin/master": "e4201a4eb49ee4d75df6884c621d0ddc",
".git/index": "ea09384acb041c5a0fce578971f8b0b7",
".git/COMMIT_EDITMSG": "ee4374e71f6df49ff9ba1a9e0509846b",
"assets/AssetManifest.json": "b22ebfeb6e559864477d62b047d08838",
"assets/NOTICES": "d5987c64b82d49968fb674b5dfe6c39f",
"assets/FontManifest.json": "a919236f56c9231cb9d1cb36e13a88d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/LeeSeoyun.otf": "77862007c184f72d31d935ec96d2a5f4",
"assets/assets/%25EC%2598%2581%25EC%2583%25811.mp4": "ee2f435c29bc58f9b3cd03b0a6ea175f",
"assets/assets/background.png": "e7e871ef941cfc4d88779905e14e756a",
"assets/assets/img5.jpg": "ff6ddb7d119c77119629418c20dc8e9a",
"assets/assets/img4.jpg": "88651adb368646075a9f62b6fbd937cb",
"assets/assets/img6.jpg": "dbbb3d99907ccd0231028dbe6c03f290",
"assets/assets/img7.jpg": "5512419d22383886c7fcb29685b10688",
"assets/assets/img3.jpg": "b6afe8728aadadeb7d14b439884b9a13",
"assets/assets/img2.jpg": "615aebe77a61bec67f7baea62b28f01a",
"assets/assets/img1.jpg": "8d118febca317ba003535ad94291d3cb",
"canvaskit/canvaskit%202.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit%202.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
