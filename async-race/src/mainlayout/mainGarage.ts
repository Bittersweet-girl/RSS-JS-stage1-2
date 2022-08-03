import './mainGarage.scss';
import { renderGarageResult } from '../garage';
import { createCar } from '../garage/options';
import { generate } from '../garage/generate';

export default function makeMainGarage(): string {
  return `<section class="garage">
    <div class="garage-inputs">
        <div class="garage-inputs__create">
            <input class="garage-create-text" type="text">
            <input class="garage-create-color" type="color" value="#ffffff">
            <button class="btn garage-create-button" onclick="${createCar()}">create</button>
        </div>
        <div class="garage-inputs__update">
            <input class="garage-update-text" type="text">
            <input class="garage-update-color" type="color" value="#ffffff">
            <button class="btn garage-update-button" disabled="">update</button>
        </div>
    </div>
    <div class="garage__buttons">
        <button class="btn garage-race-btn">Race</button>
        <button class="btn garage-reset-btn">Reset</button>
        <button class="btn garage-generate-btn" onclick="${generate()}">Generate cars</button>
    </div>
    <div class="garage-content">
      ${renderGarageResult()}
    </div>
    </section>`;
}
