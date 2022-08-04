import { createCarApi, updateCarApi } from '../api/api';
import { renderGarageResult } from './garage';
import { ICar } from '../interfaces/interfaces';

let color: string;
let name: string;

export function createCar() {
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
    inputColor.value = '#ffffff';
    inputName.value = '';
  });
}
export function updateCar(id: number, res: ICar) {
  const updateName = document.querySelector('.garage-update-text') as HTMLInputElement;
  const updateColor = document.querySelector('.garage-update-color') as HTMLInputElement;
  updateName.value = res.name;
  updateColor.value = res.color;
  updateColor.addEventListener('change', () => {
    color = updateColor.value.toString();
  });
  updateName.addEventListener('change', () => {
    name = updateName.value.toString();
  });
  const updateButton = document.querySelector('.garage-update-button') as HTMLButtonElement;
  updateButton.addEventListener('click', async () => {
    await updateCarApi(id, { name, color });
    renderGarageResult();
    updateColor.value = '#ffffff';
    updateName.value = '';
  });
}
