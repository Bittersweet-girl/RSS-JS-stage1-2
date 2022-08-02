import './mainGarage.scss';

export default function makeMainGarage() {
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
      
  </div>
  </section>`;
}
