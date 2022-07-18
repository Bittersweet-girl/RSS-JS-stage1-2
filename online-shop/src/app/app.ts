import { Card } from './cards/cards';
// import data from './DB/data';
import { ICard } from './interfaces/card';

export class App {
    render(data: Array<ICard>) {
        const cardContainer = document.querySelector('.main__cards') as HTMLInputElement;

        const card = new Card();
        let i: number;
        const cards: string[] = [];
        for (i = 0; i < data.length; i++) {
            cards.push(card.render(i, data));
        }
        return (cardContainer.innerHTML = cards.join(''));
    }
}
