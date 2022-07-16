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
}
