import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = (
  <img 
    className='background' 
    alt='ocean' 
    src='./images/ocean.jpg'
  />
)

const showBackground = true;

const images = [];
for (const animal in animals){
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const randomIndex = Math.floor(Math.random() * animalInfo.facts.length);
  
  const funFact = animalInfo.facts[randomIndex];
  document.getElementById('fact').innerHTML = funFact;
}

let title = '';

const animalFactsJSX = (
  <div>
    <h1>
      {title === '' ? 'Click an animal for a fun fact' : title}
    </h1>
    { showBackground && background}
    <p id='fact'></p>
    <div className='animals'>
      {images}
    </div>
  </div>
)

ReactDOM.render(animalFactsJSX, document.getElementById('root'));


