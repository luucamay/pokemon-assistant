// get pokemon data here or receive data from index js?

export const sortPokemon = (pokemonArray, condition) => {
  if (condition === 'frequency') {
    return pokemonArray.sort((a, b) => b.avg_spawns - a.avg_spawns);
  }
  return pokemonArray.sort((a, b) => a.id - b.id);
};

export const filterPokemon = (pokemonArray, type) => pokemonArray.filter((pokemon) =>
  pokemon.type.includes(type));