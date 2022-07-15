import { Card } from './cards/cards';
import data from './DB/data';

export class App{
  
}
const cardContainer = document.querySelector('.main__cards') as HTMLInputElement;
const card = new Card();
for (let i = 0; i < data.length; i++) {
    cardContainer.innerHTML += card.render(i);
}