





const loadingSpinEl = document.querySelector(' .loading')

const moviesHTML = document.querySelector(".movie");
let moviesList = [];


document.addEventListener('keypress', function (e) {
  if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
  }
  
});


  document.querySelector('#movies').style.visibility = "hidden";
  document.querySelector('.movie__container').style.visibility = "hidden";



async function mainRender(search) {
 
  

  let movies = await fetch(
    ` https://www.omdbapi.com/?i=tt3896198&apikey=442a3887&s=${search}`
  );
  let moviesData = await movies.json();
  
  moviesList = moviesData.Search;
  moviesHTML.innerHTML = moviesData.Search.map((movie) =>
    moviesShow(movie)
  ).join("");
}
setTimeout(() => {        
  loadingSpinEl.classList += ' movies__loading';
  }, 300)

  
function searchInput(event) {
 
  const search = event.target.value;

  setTimeout(() => {        
    loadingSpinEl.classList.remove('movies__loading');
    document.querySelector('.movie__container').style.visibility = "visible";

    }, 2000)
    document.querySelector('#movies').style.visibility = "visible";

  event.preventDefault();
  mainRender(search);
}

function moviesShow(movie) {
  return `
<div class='movie__inner'>
    <figure class="movie__cover--wrapper">
      <img src="${movie.Poster}" alt="" class="movie__img"/>
    </figure>
    <div class="movie__description">
    <p class="movie__title style="word-wrap: break-word; width: 100px">${movie.Title}</p>
    <p class="movie__year">${movie.Year}</p>
  </div>
  </div>
  `


}
mainRender();
    

  
function showMovies() {
  moviesHTML.style.display = "flex";
}

