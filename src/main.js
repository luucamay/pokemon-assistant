import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example);

const pokemonArray = data.pokemon;
const pokemonQuantity = document.querySelector('#pokemonQuantity');
const mainView = document.querySelector('main');

const renderMainView = () => {
  const pokemonCards = document.createElement('div');
  pokemonCards.classList.add('pokemon-cards');

  pokemonArray.forEach(element => {
    // TO DO: ask if there is a more performatic way to make this possible!
    const pokemonCard = document.createElement('div');
    pokemonCard.id = element.id;
    pokemonCard.classList.add('pokemon-card');
    const pokemonImg = document.createElement('img');
    const pokemonName = document.createElement('p');
    const pokemonType = document.createElement('p');
    pokemonCard.appendChild(pokemonImg);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonType);
    // TODO Another way to avoid create an event listener for each pokemon card
    pokemonCard.addEventListener('click', showInfoPokemon);
    pokemonImg.src = element.img;
    pokemonName.textContent = element.name;
    pokemonType.textContent = element.type.join(' | ');
    pokemonCards.appendChild(pokemonCard);
  });

  mainView.appendChild(pokemonCards);

}

const showInfoPokemon = (event) => {
  // TODO make sure not already showing info of a pokemon
  console.log(event.currentTarget);

}

pokemonQuantity.textContent = pokemonArray.length;
renderMainView();