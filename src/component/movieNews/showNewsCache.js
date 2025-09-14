export default function showNewsCache() {
  // console.log('showNewsCache');
  const divMovieNews = document.querySelector('.divMovieNews');//   console.log(divMovieNews);
  // const divDownload = document.querySelector('.divDownload'); // console.log(divDownload);

  // divDownload.classList.remove('divDownload');
  // divDownload.classList.add('displayNone');

  for (let i = 0; i < 3; i += 1) {
    const movieNews = document.createElement('div');
    movieNews.classList.add('movieNews');
    divMovieNews.appendChild(movieNews);

    const time = document.createElement('div');
    time.classList.add('time_');
    // time.textContent = fetchData[i].time;
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

    const nameMovieRow1 = document.createElement('div');
    nameMovieRow1.classList.add('nameMovie_row1');
    divNameMovie.appendChild(nameMovieRow1);

    const nameMovieRow2 = document.createElement('div');
    nameMovieRow2.classList.add('nameMovie_row2');
    divNameMovie.appendChild(nameMovieRow2);
  }
}
