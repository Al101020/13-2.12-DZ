import './movieNews.css';

// import http from "node:http";
import showNews from './showNews';

const divMovieNews = document.createElement('div');
divMovieNews.classList.add('divMovieNews');
divMovieNews.innerHTML = '<a href="#" class="update">Обновить</a>';

const titleH4 = document.createElement('h4');
titleH4.classList.add('titleH4');
titleH4.textContent = 'Новости мира кино';

divMovieNews.append(titleH4);
document.body.append(divMovieNews);

const update = divMovieNews.querySelector('.update');

update.addEventListener('click', () => {
  console.log('click');
  window.location.reload();
});

let fetchData = null;

fetch('http://localhost:7070/movies', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Ошибка загрузки данных: ${response.status}`);
}).then((value) => { // console.log(value);
  fetchData = value;
  showNews(fetchData);
}).catch((error) => {
  console.log('Ошибка:', error);
});
