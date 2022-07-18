export class Cart {
    addProduct() {
        const cartButtons = document.querySelectorAll<HTMLInputElement>('#addToCart');
        const cart = document.querySelector('.header__basket') as HTMLInputElement;
        let count = 0;
        cartButtons.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                if ((event.target as HTMLInputElement).innerHTML === 'В корзину' && count !== 10) {
                    count++;
                    (event.target as HTMLInputElement).innerHTML = 'Из корзины';
                } else if ((event.target as HTMLInputElement).innerHTML === 'Из корзины') {
                    count--;
                    (event.target as HTMLInputElement).innerHTML = 'В корзину';
                } else if ((event.target as HTMLInputElement).innerHTML === 'В корзину' && count === 10) {
                    alert('Корзина заполнена');
                }
                cart.innerHTML = `В корзине ${count} товаров`;
            });
        });
    }
}
