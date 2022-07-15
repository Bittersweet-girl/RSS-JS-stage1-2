import data from '../DB/data';

export class Card {
    render(i: number) {
        return `
    <div class="main__card">
      <img src="${data[i].img}" alt="${data[i].name}">
      <h3 class="main__subtitle">${data[i].title}</h3>
      <p class="main__price">${data[i].price}$</p>
      <div class="main__card_hover">
        <a class="main__card_link">Подробнее</a><br>
        <a class="main__card_link" data-id="${data[i].id}" data-name="${data[i].name}" data-price="${data[i].price}">В корзину</a>
      </div>
    </div>`;
    }
}
