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

const sliders = document.querySelectorAll<HTMLInputElement>('input[type="range"]');

sliders[0].addEventListener('input', () => {
    if (sliders[0].value > sliders[1].value) {
        sliders[1].value = sliders[0].value;
    }
});

sliders[1].addEventListener('input', () => {
    if (sliders[1].value < sliders[0].value) {
        sliders[0].value = sliders[1].value;
    }
});

sliders.forEach((slider) => {
    slider.addEventListener('change', () => {
        console.log(`from ${sliders[0].value} to ${sliders[1].value}`);
    });
});

import { App } from './app/app';
const app = new App();
app.render();

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
