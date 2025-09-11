export default function showNews(fetchData) {
  const divMovieNews = document.querySelector('.divMovieNews');//   console.log(divMovieNews);
  const divDownload = document.querySelector('.divDownload'); // console.log(divDownload);

  for (let i = 0; i < fetchData.length; i += 1) {
    divDownload.classList.remove('divDownload');
    divDownload.classList.add('displayNone');

    // console.log(fetchData[i].time);
    const movieNews = document.createElement('div');
    movieNews.classList.add('movieNews');
    divMovieNews.appendChild(movieNews);

    const time = document.createElement('div');
    time.classList.add('time');
    time.textContent = fetchData[i].time;
    movieNews.appendChild(time);

    const movie = document.createElement('div');
    movie.classList.add('movie');
    movieNews.appendChild(movie);

    const image = document.createElement('img');
    image.classList.add('image');
    movie.appendChild(image);

    const divNameMovie = document.createElement('div');
    divNameMovie.classList.add('divNameMovie');
    movie.appendChild(divNameMovie);

    const nameMovie = document.createElement('div');
    nameMovie.classList.add('nameMovie');
    nameMovie.textContent = fetchData[i].title;
    divNameMovie.appendChild(nameMovie);
  }
}
