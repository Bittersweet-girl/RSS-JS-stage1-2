import { renderGarageResult } from '../garage/garage';
import { garageURL } from './constants';

let page = 1;

export function prevPage() {
  if (page > 1) {
    page--;
    renderGarageResult(page);
  }
}
export async function nextPage() {
  const responseAllCars = await fetch(`${garageURL}`);
  const resAllCars = await responseAllCars.json();
  const countPage: number = Math.ceil(resAllCars.length / 7);
  if (countPage > page) {
    page++;
    renderGarageResult(page);
  }
}
