import UserHttpClient from "./pokemon-client.js";

const fetchPokemon = () => {
  let pokemons = [];

  UserHttpClient.getAllUsers().then((data) => {
    pokemons = data.results;
    render(pokemons);
  });

  function render(data) {
    for (let i = 0; i < data.length; i++) {
      console.log(`pokemon ${i}`, data[i]);
      UserHttpClient.getOneUser(data[i].url).then((result) => {
        pokemons[i].id = result.id;
        pokemons[i].name = result.name;
        pokemons[i].image = result.sprites["front_default"];
        pokemons[i].type = result.types
          .map((type) => type.type.name)
          .join(", ");
        console.log(result);
        displayPokemon(pokemons[i]);
      });
    }

    console.log("prueba");
  }

  const displayPokemon = (pokemons) => {
    console.log(pokemons);
    const pokemonHTMLSting = `
  <li>
  <img src = "${pokemons.image}"/>
  <h2>${pokemons.id}. ${pokemons.name}</h2>
  <p>type: ${pokemons.type}</p>
  </li>
  `;

    pokedex.innerHTML += pokemonHTMLSting;
  };
};

fetchPokemon();
