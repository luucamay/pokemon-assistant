import { sortPokemon, filterPokemon, computeStats } from '../src/data.js';

const pokemonsDummyData = [
  {
    "id": 3,
    "name": "Venusaur",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "type": [
      "Grass",
      "Poison"
    ]
  }, {
    "id": 4,
    "name": "Charmander",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
    "type": [
      "Fire"
    ]
  }, {
    "id": 5,
    "name": "Charmeleon",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "type": [
      "Fire"
    ]
  }
];

const sortedPokemons = [
  {
    "id": 4,
    "name": "Charmander",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
    "type": [
      "Fire"
    ]
  }, {
    "id": 3,
    "name": "Venusaur",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "type": [
      "Grass",
      "Poison"
    ]
  }, {
    "id": 5,
    "name": "Charmeleon",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "type": [
      "Fire"
    ]
  }
];

const filteredPokemons = [
  {
    "id": 4,
    "name": "Charmander",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
    "type": [
      "Fire"
    ]
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "type": [
      "Fire"
    ]
  }
];

const filteredPokemons2 = [
  {
    "id": 3,
    "name": "Venusaur",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "type": [
      "Grass",
      "Poison"
    ]
  }
];

const averageSpawnFrequency = 9.4;

describe('sortPokemon', () => {
  it('is a function', () => {
    expect(typeof sortPokemon).toBe('function');
  });

  it('returns `${sortedPokemons}` frequency', () => {
    expect(sortPokemon(pokemonsDummyData, 'frequency')).toEqual(sortedPokemons);
  });

  it('returns `${sortedPokemons} default`', () => {
    expect(sortPokemon(pokemonsDummyData, 'default')).toEqual(pokemonsDummyData);
  });
});


describe('filterPokemon', () => {
  it('is a function', () => {
    expect(typeof filterPokemon).toBe('function');
  });

  it('returns `${filteredPokemons}` Fire', () => {
    expect(filterPokemon(pokemonsDummyData, 'Fire')).toEqual(filteredPokemons);
  });

  it('returns `${filteredPokemons2} Poison`', () => {
    expect(filterPokemon(pokemonsDummyData, 'Poison')).toEqual(filteredPokemons2);
  });

});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('returns `${averageSpawnFrequency}` ', () => {
    expect(computeStats(pokemonsDummyData)).toBe(averageSpawnFrequency);
  });

});