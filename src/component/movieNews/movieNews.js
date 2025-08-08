import './movieNews.css';

const divMovieNews = document.createElement('div');
divMovieNews.classList.add('divMovieNews');
divMovieNews.innerHTML = '<a href="#" class="update">Обновить</a>';

const titleH4 = document.createElement('h4');
titleH4.classList.add('titleH4');
titleH4.textContent = 'Новости мира кино';

divMovieNews.append(titleH4);
document.body.append(divMovieNews);

const update = divMovieNews.querySelector('.update');
// console.log(update);
update.addEventListener('click', () => {
  console.log('click');
  // location.reload();
  window.location.reload();
});
