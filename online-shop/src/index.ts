import './normalize.css';
import './style.css';

import './assets/img/img 1.jpg';
import './assets/img/img 2.jpg';
import './assets/img/img 3.jpg';

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
