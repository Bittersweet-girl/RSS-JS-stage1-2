import { Card } from './cards/cards';
import data from './DB/data';

export class App {
    render() {
        const cardContainer = document.querySelector('.main__cards') as HTMLInputElement;

        const card = new Card();
        let i: number;
        const cards: string[] = [];
        for (i = 0; i < data.length; i++) {
            cards.push(card.render(i));
        }
        return (cardContainer.innerHTML = cards.join(''));
    }
}
