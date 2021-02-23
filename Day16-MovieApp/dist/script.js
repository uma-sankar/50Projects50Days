const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=567b8cc0def6e8f0b4a5e9c319d3465d&page=1&sort_by=popularity.desc';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=567b8cc0def6e8f0b4a5e9c319d3465d&page=1&query=';
const formElement = document.getElementById('form');
const searchElement = document.getElementById('search');
const mainElement = document.getElementById('main');
window.onload = () => {

  getMovies(API_URL);
}
async function getMovies(url) {
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  mainElement.innerHTML = "";
  console.log(movies);
  movies.forEach(movie => {
    const { title, poster_path, overview, vote_average } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
       <img src="${IMAGE_PATH + poster_path}" alt="${title}" />
       <div class="movie-info">
         <h3>${title}</h3>
         <span class="${getColor(vote_average)}"> ${vote_average}</span>
       </div>
       <div class="overview">
         <h3>Overview</h3>
         <p>
           ${overview}
         </p>
       </div>
       `;
    mainElement.appendChild(movieEl);
  });
}
function getColor(vote) {
  if (vote > 8) {
    return 'green';
  }
  if (vote > 6 && vote <= 8) { return 'orange' }

  else {
    return 'red';
  }
}
formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  let searchTerm = searchElement.value;
  if (searchElement && searchElement !== '') {
    getMovies(SEARCH_URL + searchTerm);
  }
  else {
    window.location.reload();
  }
  searchElement.value = '';
})