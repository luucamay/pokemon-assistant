// get pokemon data here or receive data from index js?

export const sortPokemon = (pokemonArray) => {
  pokemonArray.sort((a, b) => { return b.avg_spawns - a.avg_spawns; });
  return pokemonArray;
};

export const anotherExample = () => {
  return 'OMG';
};
