import View from "./View.js";
import Client from "./Client.js";

// All of your javascript should go here
console.log("Hello from index.js");

const view = new View();
const client = new Client();

const input = document.querySelector("input");
const saveBtn = document.querySelector(".btn-save");
const resetBtn = document.querySelector(".btn-reset");
const movies = [];

saveBtn.addEventListener("click", async () => {
  const movieName = input.value;
  if (!movieName) {
    alert("Please enter a movie title.");
    return;
  }

  // Check if the movie is already displayed
  if (movies.includes(movieName.toLowerCase())) {
    alert("This movie is already displayed on the page.");
    input.value = "";
    return;
  }

  const movieDataLocal = localStorage.getItem(movieName.toLowerCase());
  if (movieDataLocal) {

    view.displayMovieOnPage(JSON.parse(movieDataLocal));
    movies.push(movieName.toLowerCase())
    input.value = "";

  } else {
    const movieData = await client.getMovieData(movieName);
    console.log(movieData);
    movies.push(movieName.toLowerCase());
    view.displayMovieOnPage(movieData);
    input.value = "";
    localStorage.setItem(movieName.toLowerCase(), JSON.stringify(movieData));
  }
});
resetBtn.addEventListener("click", () => {
  view.removeDisplay();
  localStorage.clear();
});
