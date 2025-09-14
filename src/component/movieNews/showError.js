export default function showError() {
  const divMovieNews = document.querySelector('.divMovieNews');

  // const divDownload = document.querySelector('.divDownload');
  // divDownload.remove();

  // const // Тут нужно удалить все новости кино
  const movieNewsAll = document.querySelectorAll('.movieNews');
  // console.log(movieNewsAll);
  for (let i = 0; i < movieNewsAll.length; i += 1) {
    // console.log(movieNewsAll[i]);
    movieNewsAll[i].remove();
  }

  const divError = document.createElement('div');
  divError.classList.add('divError');
  divError.textContent = 'Не удалось загрузить данные\nПроверте подключение\nи обновите страницу';
  divMovieNews.append(divError);
}
