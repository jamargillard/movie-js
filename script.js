

// // 4th attempt, youtube video and stack overflow help

// // variables
const apikey = '442a3887&s';
const apiurl = 'https://www.omdbapi.com/?apikey=';

const urlWithKey = apiurl + apikey;

let searchInput = document.getElementById('searchbox');
let word = searchInput.value.trim();
const searchBtn = document.getElementById('searchButton');
// let savedSearchInput = '';
const movieId = '';
const loadingSpinEl = document.querySelector(' .loading')
const searchTitleEl = document.querySelector(" .title")
const movieResultsEl = document.querySelector(" .movie__results")







// loading state
async function renderMovies(word){
    setTimeout(() => {        
        loadingSpinEl.classList += ' movies__loading';
        }, 300)


movieResultsEl.style.visibility='hidden';
const movieTitles= await fetch (`https://www.omdbapi.com/?apikey=442a3887&s=${word}`);
const movieTitlesData = await movieTitles.json();
console.log(movieTitlesData)
let movieTitlesArray = await movieTitlesData.search


setTimeout(() => {
    movieResultsEl.style.visibility='visible';
    loadingSpinEl.classList.remove('movies__loading');
// add {i} maybe
    movieResultsEl.innerHTML = movieTitlesArray.map((movie) => movieHTML(movie)).join("");
    searchTitleEl.innerHTML = `Results for: ${word}`;

}, 600);




    

    function onSearchChange(event){
        word = event.target.value;
        event.preventDefault();
        renderMovies();
    }
    
    function movieHTML(movie) {
        return `<div class="movie">
            <figure class="movie__cover--wrapper">
                <img class="movie__cover" src="${movie.Poster}" alt="">
            </figure>
            <h2 class="movie__title">${movie.Title}</h2>
            <p class="movie__year">${movie.Year}</p>
        </div>`;
    }

//   search button (problem with undefined passing in renderMov dont worry for now)

    const search = document.getElementById("searchBtn");
    search.addEventListener("click", function () {
    renderMovies(word);
    });

}


    // hamburg
    // function openMenu() {
    //     document.body.classList += " menu--open"
    // }
    
    // function closeMenu() {
    //     document.body.classList.remove('menu--open')
    // }









































































































// // const searchResults = dataFromFetch;



// //       // // main things
// // awaits the get movie function

// document.addEventListener('DOMContentLoaded', async () => {
//         const trendingMovieData = await Promise.all(trendingMovies.map(async movieIds => {
//             const movieData = await getMovieId(movieId);
//             return movieData;
//         }));
//         showMovieData(trendingMovieData);
        
//     })
// // // function to get movie id , defined  with dataFromFetch

// async function getMovieId(movieId){
    
//    const fetchResponse = await fetch(`${urlWithKey}&i=${movieId}&plot=short`);
// const dataFromFetch = await fetchResponse.json();
// return dataFromFetch;

// }

// // // search api for query, map over it (stack overflow encode), using data from fetch

// //first part
// const searchInputVal = searchInput.value.trim();

// async function searchApiForInputVal(searchInputVal){
//     const fetchResponse = await fetch(`${urlWithKey}&s=${encodeURIComponent(searchInputVal)}`)
// const dataFromFetch = await fetchResponse.json();
// console.log('API Response:', dataFromFetch);


// // store results
// const searchResults = dataFromFetch.Search || [];
// console.log('Search Results:', searchResults);

// const movieIds =  searchResults.map(movie => movie.imdbID);
// console.log('Movie IDs:', movieIds);


// const specificMovieData = await Promise.all(
//     movieIds.map(async id => {
//         const specificResponse = await fetch(`${urlWithKey}&i=${id}&plot=short`);
//         const specificMovieData = await specificResponse.json();
//         return specificMovieData;
//     })
// );

// console.log('Specific Movie Data:', specificMovieData);
// return specificMovieData.slice(0, 6);

// }


// function showMovieData(movieData){

//     if (movieData.length === 0) {
//         searchResults.innerHTML = 'No movies found.';
//       } else {
//         searchResults.innerHTML = `
//         <h1 class="movie__heading"> results for ${search}</h1>
        
//         <div class="mov__container ">
//          <div class="mov__inner">
//         ${movieData
//             .map(
//         movie => `
//          <div class="mov__pic--holder">
//          <div class= 'mov__pic'>
//          <img src="${movie.Poster}"  class="mov__pic" > 
//          </div>
//          <div class="post-list">
//                  <div class="post">
//                    <div class="post__title">
//                       "${movie.title}"
//                    </div>
//                    <p class="post__body">
//                       ${movie.year}
//                    </p>
//                    <p class="post__body2">
//                      ${movie.genre}
//                    </p>
//                  </div>
//                </div>
//          </div>
        
        
//          <div class="mov__pic--holder">
//          <div class= 'mov__pic2'>
//          <img src="${movie.Poster}"  class="mov__pic"> 
//          </div>
//          <div class="post-list">
//                  <div class="post">
//                    <div class="post__title">
//                       "${movie.title}"
//                    </div>
//                    <p class="post__body">
//                       ${movie.year}
//                    </p>
//                    <p class="post__body2">
//                      ${movie.genre}
//                    </p>
//                  </div>
//                </div>
//          </div>

//                `
//         )
//              .join('')}
//              </div>` ;

//              const movieOptions = searchResults.querySelectorAll('.chibi__inner');
//              movieOptions.forEach((option, index) => {
//       option.addEventListener('click', () => {
//         movieOption(movieData[index]);
//       });
//     });
//   }
  
// }

















   
        
// //         
// //  















