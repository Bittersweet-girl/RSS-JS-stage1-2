import './normalize.css';
import './style.css';

import './assets/img/img 1.jpg';
import './assets/img/img 2.jpg';
import './assets/img/img 3.jpg';
import './assets/img/img 4.jpg';
import './assets/img/img 5.jpg';
import './assets/img/img 6.jpg';
import './assets/img/img 7.jpeg';
import './assets/img/img 8.jpg';
import './assets/img/img 9.jpg';
import './assets/img/img 10.jpg';
import './assets/img/img 11.jpg';
import './assets/img/img 12.jpg';

import data from './app/DB/data';
import { App } from './app/app';
const app = new App();
app.render(data);

import { Search } from './app/filtr/search';
const search = new Search();
search.search();

import { Filtr } from './app/filtr/filtr';
const filtr = new Filtr();
filtr.filtrCategories();

const select = document.querySelector('#sort') as HTMLInputElement;
select.addEventListener('change', () => {
    filtr.sort(select.value);
});

filtr.filtrs();

import { Cart } from './app/cart/addCart';
const cart = new Cart();
cart.addProduct();

const resetBtn = document.querySelector('.main__filtr-btn') as HTMLInputElement;
resetBtn.addEventListener('click', () => {
    filtr.reset();
});

import { Slider } from './app/slider';
const slider = new Slider();
slider.render();

import './nouislider.css';
