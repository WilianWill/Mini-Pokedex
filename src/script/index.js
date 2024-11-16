function getPokemonData() {
  /* get field inputs */

  const searchInput = document.getElementById("searchInput");
  const search = document.getElementById("search");
  const pokemonName = document.getElementById("pokemonName");
  const sprite = document.querySelector(".sprite");
  const pokemonWeight = document.getElementById("pokemonWeight");
  const pokemonHeight = document.getElementById("pokemonHeight");
  const pokemonType = document.getElementById("pokemonType");

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  search.addEventListener("click", (e) => {
    e.preventDefault();

    if (searchInput.value === "") {
      alert("Digite um pokemon!");
      return;
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${searchInput.value.toLowerCase()}`;
    fetch(url)
      /* get response */
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        pokemonName.innerHTML = data.name;
        pokemonHeight.innerHTML = data.height;
        pokemonWeight.innerHTML = data.weight;
        pokemonType.innerHTML = data.types[0].type.name;
        sprite.setAttribute("src", data.sprites.front_default);
        searchInput.value = "";
        const pokeContainer = document.querySelector(".cards-container");
        pokeContainer.style.display = "flex";
        console.log(data);
      })
      .catch((error) => {
        console.log("Erro de conexão", error);
      });
  });
  const currentId = searchInput.value;
  prev;
}

getPokemonData();
