const input = document.querySelector("input");
const searchButton = document.querySelector("button");
const container = document.querySelector(".data");
const error = document.createElement("h3");
const processingText = document.createElement("p");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  container.innerHTML = "";

  if (input.value !== "") {

    processingText.textContent = "Processing...";
    container.append(processingText);

    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
      .then((response) => {
        if (!response.ok) {
          error.textContent = "Invalid Pokemon name";
          container.append(error);
        }
        return response.json();
      })
      .then((data) => {
        const dataDiv = document.createElement("div");
        const pokemonName = document.createElement("h1");
        const pokemonImg = document.createElement("img");
        const stats = document.createElement("h2");
        const ul1 = document.createElement("ul");
        ul1.className = "ul1";
        const abilities = document.createElement("h2");
        const ul2 = document.createElement("ul");
        ul2.className = "ul2";

        pokemonName.textContent = data.name.toUpperCase();
        pokemonImg.src = data.sprites.front_default;
        stats.textContent = "stats";
        abilities.textContent = "abilities";

        data.stats.forEach((state) => {
          const li1 = document.createElement("li");
          li1.className = "li1";
          li1.innerHTML = `<span class="stat-name">${state.stat.name}</span>
            <span class="stat-value">${state.base_stat}</span>`;
          ul1.append(li1);
        });

        data.abilities.forEach((ability) => {
          const li2 = document.createElement("li");
          li2.textContent = `${ability.ability.name}`;
          ul2.append(li2);
        });

        dataDiv.append(pokemonName, pokemonImg, stats, ul1, abilities, ul2);
        container.append(dataDiv);

        input.value = "";
      });
  } else {
    error.textContent = "Empty search";
    container.append(error);
  }
});
