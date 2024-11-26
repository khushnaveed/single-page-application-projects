import View from './View.js';
import Client from './Client.js';

// All of your javascript should go here
console.log("Hello from index.js");

const view = new View();
const client = new Client();

const input = document.querySelector('input');
const saveBtn = document.querySelector('.btn-save');
const resetBtn = document.querySelector('btn-reset');
const movies = [];

saveBtn.addEventListener('click', async () =>{
    const movieName = input.value;
    console.log(movieName);
    if (!movieName) {
        alert("Please enter a movie title.");
        return;
    }
    const movieData = client.getMovieData(movieName);
    console.log(movieData);

    const displayData = client
    
})