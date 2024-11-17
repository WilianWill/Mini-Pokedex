function getPokemonData() {
  /* get field inputs */

  const searchInput = document.getElementById("searchInput");
  const search = document.getElementById("search");
  const pokemonName = document.getElementById("pokemonName");
  const sprite = document.querySelector(".sprite");
  const pokemonWeight = document.getElementById("pokemonWeight");
  const pokemonHeight = document.getElementById("pokemonHeight");
  const pokemonType = document.getElementById("pokemonType");

  const pokemonId = document.getElementById("pokemonId");
  const sprites = document.querySelector(".sprites");

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
        const cardsContainer = document.querySelector(".cards-container");
        const getSprite = document.querySelector(".sprites");
        pokemonName.innerHTML = data.name;
        pokemonId.innerHTML = `#${data.id}`;
        pokemonHeight.innerHTML = `Height: ${data.height}`;
        pokemonWeight.innerHTML = `Weight: ${data.weight}`;
        pokemonType.innerHTML = data.types[0].type.name;
        data.types[0].type.name;
        sprite.setAttribute("src", data.sprites.front_default);
        searchInput.value = "";

        cardsContainer.style.display = "flex";

        console.log(data);
      })
      .catch((error) => {
        console.log("Erro de conexão", error);
      });
  });

  prev;
}

getPokemonData();
