import { sortPokemon, anotherExample } from '../src/data.js';

const pokemonsToSort = [
  {
    "id": 3,
    "name": "Venusaur",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
  }, {
    "id": 4,
    "name": "Charmander",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
  }, {
    "id": 5,
    "name": "Charmeleon",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
  }
];

const sortedPokemons = [
  {
    "id": 4,
    "name": "Charmander",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
  }, {
    "id": 3,
    "name": "Venusaur",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
  }, {
    "id": 5,
    "name": "Charmeleon",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
  }
];

describe('sortPokemon', () => {
  it('is a function', () => {
    expect(typeof sortPokemon).toBe('function');
  });

  it('returns `${sortedPokemons}`', () => {
    expect(sortPokemon(pokemonsToSort)).toEqual(sortedPokemons);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
