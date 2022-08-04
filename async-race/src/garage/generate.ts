import { MODELS, NAMES } from '../components/constants';
import { createCarApi } from '../api/api';
import { renderGarageResult } from './garage';

export const getRandomNAme = () => {
  const model = MODELS[Math.floor(Math.random() * MODELS.length)];
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  return `${model} ${name}`;
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateRandomCars = (count = 100) =>
  new Array(count).fill(1).map(() => ({ name: getRandomNAme(), color: getRandomColor() }));

export function generate() {
  const generateCars = document.querySelector('.garage-generate-btn') as HTMLButtonElement;
  generateCars.addEventListener('click', () => {
    const carArray = generateRandomCars();
    carArray.map(async (car) => {
      return createCarApi(car);
    });
    renderGarageResult();
  });
}
