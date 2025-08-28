import '../component/movieNews/movieNews';

if ('serviceWorker' in navigator) { 
        navigator.serviceWorker.register('./service-worker.js', { scope: './' })
          .then((reg) => {
            // регистрация сработала
            console.log('Registration succeeded. Scope is ' + reg.scope);
          }).catch((error) => {
            // регистрация прошла неудачно
            console.log('Registration failed with ' + error);
          });
      }

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('service-worker.js', { scope: './' })
//     .then((reg) => {
//       // регистрация сработала
//       console.log(`Registration succeeded. Scope is ${reg.scope}`);
//     }).catch((error) => {
//       // регистрация прошла неудачно
//       console.log(`Registration failed with ${error}`);
//     });
// }











// if ('serviceWorker' in navigator) {
//   console.log('SW в navigator есть');
//   navigator.serviceWorker.register('./service-worker', { scope: './' })
//     .then((reg) => {
//       // регистрация сработала
//       console.log(`Registration succeeded. Scope is ${reg.scope}`);
//     }).catch((error) => {
//       // регистрация прошла неудачно
//       console.log(`Registration failed with ${error}`);
//     });
// }



// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./src/service-worker.js', { scope: './' })
//     .then((reg) => {
//       // регистрация сработала
//       console.log(`Registration succeeded. Scope is ${reg.scope}`);
//     }).catch((error) => {
//       // регистрация прошла неудачно
//       console.log(`Registration failed with ${error}`);
//     });
// }

// if (navigator.serviceWorker) {
//   window.addEventListener('load', async () => {
//     try {
//       if (navigator.serviceWorker) {
//         await navigator.serviceWorker.register(
//           '/src/service.worker.js',
//         );
//         console.log('sw registered');
//       }
//       // await registration.unregister();
//     } catch (e) {
//       console.log(e);
//     }
//   });
// }
