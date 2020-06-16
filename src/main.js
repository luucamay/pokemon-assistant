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
    //console.log(element);
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    const pokemonImg = document.createElement('img');
    const pokemonName = document.createElement('p');
    const pokemonType = document.createElement('p');
    pokemonCard.appendChild(pokemonImg);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonType);
    pokemonImg.src = element.img;
    pokemonName.textContent = element.name;
    pokemonType.textContent = element.type.join(' | ');
    pokemonCards.appendChild(pokemonCard);
  });

  mainView.appendChild(pokemonCards);

}

pokemonQuantity.textContent = pokemonArray.length;
renderMainView();