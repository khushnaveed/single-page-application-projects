class Client {
  constructor() {
    //Your token goes here
    this.token = "216b8fe4";
  }

  async getMovieData(movie) {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=${this.token}`
    );
    let data = await response.json();
    return data;
  }
}

console.log("Hello from Client.js");

export default Client;
