























//random
 
async function randomQuote(Event){
    // const id = event.target.value;
await fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))
}