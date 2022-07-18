import { ICard } from '../interfaces/card';

export class Card {
    render(i: number, data: Array<ICard>) {
        return `
    <div class="main__card" data-name="${data[i].name}" data-id="${data[i].id}">
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
