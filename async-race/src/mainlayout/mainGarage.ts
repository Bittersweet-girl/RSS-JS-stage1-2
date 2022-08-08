import './mainGarage.scss';
import { renderGarageResult } from '../garage/garage';
import { renderPopup } from './popup';

export function makeMainGarage(): string {
  return `<section class="garage">
    <div class="garage-options">
      <div class="garage-inputs">
          <div class="garage-inputs__create">
              <input class="garage-create-text" type="text">
              <input class="garage-create-color" type="color" value="#ffffff">
              <button class="btn garage-create-button">create</button>
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
          <button class="btn garage-generate-btn">Generate cars</button>
      </div>
    </div>
    <div class="garage-content">
      ${renderGarageResult()}
    </div>
    <div class="garage-popup">
      ${renderPopup()}
    </div>
    </section>`;
}
