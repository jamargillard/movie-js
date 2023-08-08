

// // 3rd attempt, youtube video and stack voerflow help

// // variables
const apikey = '442a3887&s';
const apiurl = 'https://www.omdbapi.com/?apikey=';
const urlWithKey = apiurl + apikey;
const searchInput = document.getElementById('searchbox');
const searchBtn = document.getElementById('searchButton');
const trendingMovies =['tt1517268', 'tt15398776', 'tt0439572', 'tt6791350', 'tt1695843', 'tt4912910']
let savedSearchInput = '';
const movieId = '';








// const searchResults = dataFromFetch;



//       // // main things
// awaits the get movie function

document.addEventListener('DOMContentLoaded', async () => {
        const trendingMovieData = await Promise.all(trendingMovies.map(async movieIds => {
            const movieData = await getMovieId(movieId);
            return movieData;
        }));
        showMovieData(trendingMovieData);
        
    })
// // function to get movie id , defined  with dataFromFetch

async function getMovieId(movieId){
    
   const fetchResponse = await fetch(`${urlWithKey}&i=${movieId}&plot=short`);
const dataFromFetch = await fetchResponse.json();
return dataFromFetch;

}

// // search api for query, map over it (stack overflow encode), using data from fetch

//first part
const searchInputVal = searchInput.value.trim();

async function searchApiForInputVal(searchInputVal){
    const fetchResponse = await fetch(`${urlWithKey}&s=${encodeURIComponent(searchInputVal)}`)
const dataFromFetch = await fetchResponse.json();
console.log('API Response:', dataFromFetch);


// store results
const searchResults = dataFromFetch.Search || [];
console.log('Search Results:', searchResults);

const movieIds =  searchResults.map(movie => movie.imdbID);
console.log('Movie IDs:', movieIds);


const specificMovieData = await Promise.all(
    movieIds.map(async id => {
        const specificResponse = await fetch(`${urlWithKey}&i=${id}&plot=short`);
        const specificMovieData = await specificResponse.json();
        return specificMovieData;
    })
);

console.log('Specific Movie Data:', specificMovieData);
return specificMovieData.slice(0, 6);

}


function showMovieData(movieData){

    if (movieData.length === 0) {
        searchResults.innerHTML = 'No movies found.';
      } else {
        searchResults.innerHTML = `
        <h1 class="movie__heading"> results for ${search}</h1>
        
        <div class="chibi__container ">
         <div class="chibi__inner">
        ${movieData
            .map(
        movie => `
         <div class="mov__pic--holder">
         <div class= 'mov__pic'>
         <img src="${movie.Poster}"  class="mov__pic" > 
         </div>
         <div class="post-list">
                 <div class="post">
                   <div class="post__title">
                      "${movie.title}"
                   </div>
                   <p class="post__body">
                      ${movie.year}
                   </p>
                   <p class="post__body2">
                     ${movie.genre}
                   </p>
                 </div>
               </div>
         </div>
        
        
         <div class="mov__pic--holder">
         <div class= 'mov__pic2'>
         <img src="${movie.Poster}"  class="mov__pic"> 
         </div>
         <div class="post-list">
                 <div class="post">
                   <div class="post__title">
                      "${movie.title}"
                   </div>
                   <p class="post__body">
                      ${movie.year}
                   </p>
                   <p class="post__body2">
                     ${movie.genre}
                   </p>
                 </div>
               </div>
         </div>

               `
        )
             .join('')}
             </div>` ;

             const movieOptions = searchResults.querySelectorAll('.chibi__inner');
             movieOptions.forEach((option, index) => {
      option.addEventListener('click', () => {
        movieOption(movieData[index]);
      });
    });
  }
  
}



// search btn 
// searchBtn.addEventListener('click', function(){
//     const searchInputVal = searchInput.value.trim();
//     savedSearchInput = searchInputVal;
//     searchMovie();});
//     console.log(savedSearchInput)







        //   loading state
    //     remove.onclick = () => {
    //         const loadTog = document.querySelector('#modal');
    //         loadTog.classList.remove("invis");
    //       }
    //       const loading = document.querySelector(".modal__overlay--loading");
    //       loading.classList += " modal__overlay--visible";
    //     }
    //   });

















   
        
//         
//  















