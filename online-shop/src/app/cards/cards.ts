import { ICard } from '../interfaces/card';

export class Card {
    render(i: number, data: Array<ICard>) {
        return `
    <div class="main__card" data-name="${data[i].name}">
      <img src="./assets/img/${data[i].img}" alt="${data[i].name}">
      <h3 class="main__subtitle">${data[i].title}</h3>
      <p class="main__price">${data[i].price}$</p>
      <div class="main__card_hover">
        <a href="#" class="main__card_link">Подробнее</a><br>
        <a href="#" class="main__card_link" id="addToCart" data-id="${data[i].id}">В корзину</a>
      </div>
    </div>`;
    }
}
