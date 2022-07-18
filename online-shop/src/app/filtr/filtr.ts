import { App } from '../app';
import data from '../DB/data';
import { ICard } from '../interfaces/card';

export class Filtr {
    filtrCategories() {
        (document.querySelector('.main__category') as HTMLInputElement).addEventListener('click', (e) => {
            if ((e.target as HTMLInputElement).classList.contains('main__btn')) {
                const activeBtn = e.target as HTMLInputElement;
                const btns = document.querySelectorAll('.main__btn');
                btns.forEach((btn) => {
                    btn.classList.remove('main__btn_active');
                });
                activeBtn.classList.add('main__btn_active');
                const category = (e.target as HTMLInputElement).getAttribute('data-category');
                const searchItems = document.querySelectorAll<HTMLInputElement>('.main__card');
                searchItems.forEach((card) => {
                    if (category === 'all') {
                        searchItems.forEach(function (elem) {
                            elem.classList.remove('hide');
                        });
                    }
                    if (card.getAttribute('data-name') !== category) {
                        card.classList.add('hide');
                    } else {
                        card.classList.remove('hide');
                    }
                });
            }
        });
    }
    sort(value: string) {
        const cardContainer = document.querySelector('.main__cards') as HTMLInputElement;
        switch (value) {
            case 'low-cost':
                data.sort((a, b) => a.price - b.price);
                break;
            case 'high-cost':
                data.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                data.sort((a, b) => b.popular - a.popular);
                break;
            case 'a-z':
                data.sort((a, b) => (a.title > b.title ? 1 : -1));
                break;
            case 'z-a':
                data.sort((a, b) => (b.title > a.title ? 1 : -1));
                break;
        }
        cardContainer.innerHTML = '';
        const app = new App();
        app.render(data);
    }
    filtrs() {
        const cardContainer = document.querySelector('.main__cards') as HTMLInputElement;
        let sorted: Array<ICard> = [];
        const checkboxes = document.querySelectorAll<HTMLInputElement>('.main__checkbox');
        const app = new App();
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked == true) {
                    sorted = data
                        .filter((card) => (checkbox.getAttribute('name') == 'stock' ? card.inStock == true : card))
                        // .filter((card) => {
                        //     checkbox.getAttribute('name') == 'size'
                        //         ? card.size.find((sizeItem) => sizeItem == checkbox.value) == checkbox.value
                        //         : card;
                        // })
                        .filter((card) =>
                            checkbox.getAttribute('name') == 'print' ? card.print == checkbox.value : card
                        );
                }
                console.log(sorted);
                cardContainer.innerHTML = '';
                app.render(sorted);
            });
        });
    }
}
