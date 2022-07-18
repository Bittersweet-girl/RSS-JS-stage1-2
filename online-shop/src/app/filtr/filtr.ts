import { App } from '../app';
import data from '../DB/data';
import { ICard } from '../interfaces/card';

export class Filtr {
    private app = new App();
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
        const sorted: Array<ICard> = [...data];
        switch (value) {
            case 'low-cost':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'high-cost':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                sorted.sort((a, b) => b.popular - a.popular);
                break;
            case 'a-z':
                sorted.sort((a, b) => (a.title > b.title ? 1 : -1));
                break;
            case 'z-a':
                sorted.sort((a, b) => (b.title > a.title ? 1 : -1));
                break;
        }
        cardContainer.innerHTML = '';
        this.app.render(sorted);
    }
    filtrs() {
        const cardContainer = document.querySelector('.main__cards') as HTMLInputElement;
        let sorted: Array<ICard> = [...data];
        const checkboxes = document.querySelectorAll<HTMLInputElement>('.main__checkbox');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked == true) {
                    sorted = sorted
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
                cardContainer.innerHTML = '';
                this.app.render(sorted);
            });
        });
    }
    reset() {
        const cardContainer = document.querySelector('.main__cards') as HTMLInputElement;
        cardContainer.innerHTML = '';
        this.app.render(data);
        const checkboxes = document.querySelectorAll<HTMLInputElement>('.main__checkbox');
        checkboxes.forEach((item) => (item.checked = false));
    }
}
