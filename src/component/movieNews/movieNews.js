import './movieNews.css';

import showNewsCache from './showNewsCache';
import showNews from './showNews';
import showError from './showError';

const divMovieNews = document.createElement('div');
divMovieNews.classList.add('divMovieNews');
divMovieNews.innerHTML = '<a href="#" class="update">Обновить</a>';

const titleH4 = document.createElement('h4');
titleH4.classList.add('titleH4');
titleH4.textContent = 'Новости мира кино';
divMovieNews.append(titleH4);

// const divDownload = document.createElement('div');
// divDownload.textContent = 'Загрузка новостей ...';
// divDownload.classList.add('divDownload');
// divMovieNews.append(divDownload);

document.body.append(divMovieNews);

showNewsCache();

const update = divMovieNews.querySelector('.update');

update.addEventListener('click', () => { // console.log('click');
  window.location.reload();
});

let fetchData = null;

// fetch('http://localhost:7070/movies', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
// }).then((response) => {
//   if (response.ok) {
//     // console.log(response.ok);
//     return response.json();
//   }
//   throw new Error(`Ошибка загрузки данных: ${response.status}`);
// }).then((value) => { // console.log(value);
//   fetchData = value;
//   showNews(fetchData);
// }).catch((error) => { // если ошибка
//   showError();

//   console.log('Ошибка:', error);
// });

fetch('http://localhost:7070/movies', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}).then((response) => {
  if (response.ok) {
    // console.log(response.ok);
    return response.json();
  }
  throw new Error(`Ошибка загрузки данных: ${response.status}`);
}).then((value) => { // console.log('Valiu_: ' + value);
  fetchData = value;
  showNews(fetchData);
}).catch((error) => { // если ошибка
  showError();

  console.log('Ошибка:', error);
});
