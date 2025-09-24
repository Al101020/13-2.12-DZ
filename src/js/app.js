// import '../component/movieNews/movieNews';

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./service-worker.js', { scope: './' })
//     .then((reg) => {
//       // регистрация сработала
//       console.log(`Registration succeeded. Scope is ${reg.scope}`);
//     }).catch((error) => {
//       // регистрация прошла неудачно
//       console.log(`Registration failed with ${error}`);
//     });
// }

import '../component/movieNews/movieNews';

if ('serviceWorker' in navigator) {
  // Указываем путь к сгенерированному Workbox Service Worker
  // navigator.serviceWorker.register('./sw.js', { scope: './' })
  navigator.serviceWorker.register('./service-worker.js', { scope: './' })
    .then((reg) => {
      console.log(`Registration succeeded. Scope is ${reg.scope}`);
    }).catch((error) => {
      console.log(`Registration failed with ${error}`);
    });
}
