import { garageURL, CARSPERPAGE } from '../components/constants';
import { ICar } from '../interfaces/interfaces';
import { renderCar } from '../components/car';

export async function makeGarageTitle(page: number, limit: number) {
  const response = await fetch(`${garageURL}?_page=${page}&_limit=${limit}`);
  const res = await response.json();

  const responseAllCars = await fetch(`${garageURL}`);
  const resAllCars = await responseAllCars.json();

  return `
    <h3>In garage ${resAllCars.length} cars</h3>
    <div class="garage-pagination">
        <h3 class="garage-pagination__title">Page #${page}</h3>
        <button class="btn btn-prev" disabled="">Prev</button>
        <button class="btn btn-next">Next</button>
    </div>
    <div class="garage-content__items">
    ${res.map((car: ICar) => `<div class="garage__item">${renderCar(car)}</div>`).join('')}
    </div>`;
}

export function renderGarageResult(page = 1) {
  makeGarageTitle(page, CARSPERPAGE).then((res) => {
    const garageContent = document.querySelector('.garage-content') as HTMLElement;
    garageContent.innerHTML = '';
    garageContent.innerHTML = res;
  });
}
