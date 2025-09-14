console.log('service-worker.js');

self.addEventListener('install', (event) => {
// this.addEventListener('install', (event) => {
  console.log('Установлен');

  event.waitUntil(
    caches.open('my-cache')
      .then((cache) => {
        cache.addAll([
          '/',
          '/index.html',
          // './node_modules/mini.css/dist/mini-default.min.css',
          // './css/style.css',
          // '/component/movieNews/aaa.png',
        ]);
      }),

  );
  //   event.open('my-cache')
  //     .then((cache) => {
  //       cache.addAll([
  //         './',
  //         './index.html',
  //         './node_modules/mini.css/dist/mini-default.min.css',
  //         './style.css',
  //         './component/movieNews/aaa.png'
  //       ])

//     })
});

self.addEventListener('activate', () => {
  console.log('Активирован');
});

self.addEventListener('fetch', () => {
  console.log('Происходит запрос на сервер');
});
