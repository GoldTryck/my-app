// pokeUtils.js

export async function getPokemonById(id) {
  if (!id) throw new Error("ID de Pokémon no proporcionado");

  const storedData = sessionStorage.getItem("pokemonDetails");
  let dataMap = storedData ? JSON.parse(storedData) : {};

  if (dataMap[id]) {
    console.log(`Pokemon ${id} loaded from sessionStorage.`);
    return dataMap[id];
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const pokemon = await response.json();

  dataMap[id] = pokemon;
  sessionStorage.setItem("pokemonDetails", JSON.stringify(dataMap));
  console.log(`Pokemon ${id} fetched from API and stored.`);

  return pokemon;
}

export async function getEvolutionChain(speciesUrl) {
  if (!speciesUrl) throw new Error("ID de species no proporcionado");
  const response = await fetch(speciesUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  const evolutionChainUrl = result.evolution_chain.url;
  const evolutionResponse = await fetch(evolutionChainUrl);
  if (!evolutionResponse.ok) {
    throw new Error(`HTTP error! Status: ${evolutionResponse.status}`);
  }
  const evolutionData = await evolutionResponse.json();
  return evolutionData.chain;
}

export async function getPokemonesFromEvolutionChain(evolutionData) {
  if (!evolutionData) throw new Error("No evolution data provided");

  const pokemones = [];

  const pokemon = await getPokemonById(
    evolutionData.species.url.split("/").slice(-2, -1)[0]
  );

  pokemones.push(pokemon);
  for (const nextEvolution of evolutionData.evolves_to) {
    const nextPokemones = await getPokemonesFromEvolutionChain(nextEvolution);
    pokemones.push(...nextPokemones);
  }

  return pokemones;
}
