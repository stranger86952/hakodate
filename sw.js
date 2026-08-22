const C = 'hakodate-v21';

const A = [
  './',
  './sw.js',
  './app.js',
  './index.html',
  './manifest.webmanifest?v=4',
  './styles.css',
  './data/hazards.js',
  './data/tourism-spots.js',
  './icons/icon.svg',
  './icons/favicon-16.png?v=4',
  './icons/favicon-32.png?v=4',
  './icons/favicon-48.png?v=4',
  './icons/favicon.ico?v=4',
  './icons/apple-touch-icon.png?v=4',
  './icons/icon-192.png?v=4',
  './icons/icon-512.png?v=4',
  './questions/flash-questions.js',
  './assets/offline-map.jpeg',
  './assets/hotel/schedule.png',
  './assets/hotel/busmap.png',
  './assets/questions/flash/Triangulene.svg',
  './assets/questions/flash/Coronene.svg',
  './assets/tourism/aynu.webp',
  './assets/tourism/goryokaku-tower.jpg',
  './assets/tourism/goryokaku.jpeg',
  './assets/tourism/hakodate-mountain.jpg',
  './assets/tourism/jgsdf.png',
  './assets/tourism/jmsdf.jpg',
  './assets/tourism/nogi-shrine.jpg',
  './assets/tourism/ropeway.jpg',
  './assets/tourism/tachimachi.jpg',
  './assets/tourism/tropical.jpg',
  './vendor/katex/katex.min.css',
  './vendor/katex/katex.min.js',
  './vendor/katex/contrib/mhchem.min.js',
  './vendor/fontawesome/css/fontawesome.min.css',
  './vendor/fontawesome/css/solid.min.css',
  './vendor/fontawesome/webfonts/fa-solid-900.woff2',
  './vendor/katex/fonts/KaTeX_AMS-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2',
  './vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2',
  './vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Main-Bold.woff2',
  './vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2',
  './vendor/katex/fonts/KaTeX_Main-Italic.woff2',
  './vendor/katex/fonts/KaTeX_Main-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2',
  './vendor/katex/fonts/KaTeX_Math-Italic.woff2',
  './vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2',
  './vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2',
  './vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Script-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size1-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size2-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size3-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size4-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2',
  './vendor/nerdamer/all.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(C)
      .then(cache =>
        cache.addAll(
          A.map(url => new Request(url, { cache: 'reload' }))
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== C)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==location.origin)return;const url=new URL(request.url),immutable=/\.(?:png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf)$/i.test(url.pathname);if(!immutable){event.respondWith(fetch(request,{cache:'no-store'}).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(C).then(cache=>cache.put(request,copy)))}return response}).catch(async()=>{const cached=await caches.match(request);if(cached)return cached;if(request.mode==='navigate')return(await caches.match('./index.html'))||(await caches.match('./'));throw new Error('オフラインキャッシュがありません')}));return}event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(C).then(cache=>cache.put(request,copy)))}return response})))})