// http://www.omdbapi.com/?apikey=442a3887&s=
// 442a3887
var movieListElem = document.querySelector('#chibis');




//main 

async function onSearchChange(event){
    var search = document.getElementById('searchbox').value

    const id = event.target.value;
const movies = await fetch(`http://www.omdbapi.com/?apikey=442a3887&s=${search}`)
const movieData = await movies.json();

var movieArray = [];
for(var i in movieData)
    movieArray.push([i, movieData [i]]);

 console.log(movieData);

// for(let i = 0; i >= 6; i++){
 movieListElem.innerHTML = movieArray.map(movie=> `
 
 <h1 class="movie__heading"> results for ${search}</h1>

 <div class="chibi__container ">
<div class="chibi__inner">


<div class="goku">
<img src="http://img.omdbapi.com/?apikey=442a3887&s=${search}" alt="" class="goku__pic">    <div class="post-list">
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


<div class="naruto">
<img src="http://img.omdbapi.com/?apikey=442a3887&s=${search}" alt="" class="naruto__pic">    <div class="post-list">
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

<div class="luffy">
<img src="http://img.omdbapi.com/?apikey=442a3887&s=${search}" alt="" class="luffy__pic">    <div class="post-list">
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

<div class="goku">
<img src="http://img.omdbapi.com/?apikey=442a3887&s=${search}" alt="" class="fast__pic">  <div class="post-list">
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

<div class="naruto">
<img src="http://img.omdbapi.com/?apikey=442a3887&s=${search}" alt="" class="transformers__pic">  <div class="post-list">
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

<div class="luffy">
<img src="http://img.omdbapi.com/?apikey=442a3887&s=${search}" alt="" class="gotg__pic">  <div class="post-list">
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


</div>
</div>
    `).join('');
    }
// }



    // ??button 

