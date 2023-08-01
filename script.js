// http://www.omdbapi.com/?apikey=442a3887&s=
// 442a3887
var movieListElem = document.querySelector('.post-list');




//main(name)

async function onSearchChange(event){
    var search = document.getElementById('searchbox').value

    const id = event.target.value;
const movies = await fetch(`http://www.omdbapi.com/?apikey=442a3887&s=${search}`)
const movieData = await movies.json();
 console.log(movieData);
//  movieListElem.innerHTML = movieData.map(post=> `
//     <div class="post">
//     <div class="post__title">
//       ${post.title}
//     </div>
//     <p class="post__body">
//       ${post.year}
//     </p>
//     <p class="post__body2">
//     ${post.genre}
//   </p>
//     </div>
//     `).join('');
    }




    // ??button 

