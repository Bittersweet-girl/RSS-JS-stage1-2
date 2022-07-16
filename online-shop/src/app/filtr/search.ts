export class Search {
    search() {
        const search = document.querySelector('.header__search-form') as HTMLInputElement;

        search.addEventListener('input', (event: Event) => {
            const value = (event.target as HTMLInputElement).value.trim();
            const searchItems = document.querySelectorAll<HTMLInputElement>('.main__card');
            if (value != '') {
                searchItems.forEach(function (elem) {
                    if (elem.innerText.search(RegExp(value, 'gi')) == -1) {
                        elem.classList.add('hide');
                    } else {
                        elem.classList.remove('hide');
                    }
                });
            } else {
                searchItems.forEach(function (elem) {
                    elem.classList.remove('hide');
                });
            }
        });
    }
}
