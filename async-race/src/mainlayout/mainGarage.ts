import './mainGarage.scss';
import { garageURL } from '../components/constants';

export async function makeGarageTitle(page: number) {
  const responseAllCars = await fetch(`${garageURL}`);
  const resAllCars = await responseAllCars.json();

  const garageView = `
    <h3>In garage ${resAllCars.length} cars</h3>
    <div class="garage-pagination">
        <h3 class="garage-pagination__title">Page #${page}</h3>
        <button class="btn btn-prev" disabled="">Prev</button>
        <button class="btn btn-next" disabled="">Next</button>
    </div>`;
  return garageView;
}

export function renderGarageResult() {
  makeGarageTitle(1).then((res) => {
    (document.querySelector('.garage-content') as HTMLElement).innerHTML = res;
  });
}

export default function makeMainGarage(): string {
  return `<section class="garage">
    <div class="garage-inputs">
        <div class="garage-inputs__create">
            <input class="garage-create-text" type="text">
            <input class="garage-create-color" type="color" value="#000000">
            <button class="btn garage-create-button" disabled="">create</button>
        </div>
        <div class="garage-inputs__update">
            <input class="garage-update-text" type="text">
            <input class="garage-update-color" type="color" value="#000000">
            <button class="btn garage-update-button" disabled="">update</button>
        </div>
    </div>
    <div class="garage__buttons">
        <button class="btn garage-race-btn">Race</button>
        <button class="btn garage-reset-btn">Reset</button>
        <button class="btn garage-generate-btn">Generate cars</button>
    </div>
    <div class="garage-content">
      ${renderGarageResult()}
    </div>
    </section>`;
}
