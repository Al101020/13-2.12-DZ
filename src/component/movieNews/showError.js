export default function showError() {
  const divMovieNews = document.querySelector('.divMovieNews');

  const divDownload = document.querySelector('.divDownload');
  divDownload.remove();

  const divError = document.createElement('div');
  divError.classList.add('divError');
  divError.textContent = 'Не удалось загрузить данные\nПроверте подключение\nи обновите страницу';
  divMovieNews.append(divError);
}
