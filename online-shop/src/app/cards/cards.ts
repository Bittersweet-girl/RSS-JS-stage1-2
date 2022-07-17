// import data from '../DB/data';
import { ICard } from '../interfaces/card';

export class Card {
    render(i: number, data: Array<ICard>) {
        return `
    <div class="main__card" data-size="${data[i].size}" data-name="${data[i].name}" data-price="${data[i].price}" >
      <img src="./assets/img/${data[i].img}" alt="${data[i].name}">
      <h3 class="main__subtitle">${data[i].title}</h3>
      <p class="main__price">${data[i].price}$</p>
      <div class="main__card_hover">
        <a class="main__card_link">Подробнее</a><br>
        <a class="main__card_link">В корзину</a>
      </div>
    </div>`;
    }
}
