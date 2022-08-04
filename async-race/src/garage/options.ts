import { createCarApi } from '../api/api';
import { renderGarageResult } from './garage';

export function createCar() {
  let color = '#ffffff';
  let name = '';
  const inputName = document.querySelector('.garage-create-text') as HTMLInputElement;
  const inputColor = document.querySelector('.garage-create-color') as HTMLInputElement;
  inputColor.addEventListener('change', () => {
    color = inputColor.value.toString();
  });
  inputName.addEventListener('change', () => {
    name = inputName.value.toString();
  });
  const createButton = document.querySelector('.garage-create-button') as HTMLButtonElement;
  createButton.addEventListener('click', async () => {
    await createCarApi({ name, color });
    renderGarageResult();
  });
}
