import { renderGarageResult } from '../garage/garage';
import { garageURL } from './constants';

const next = document.querySelector('.btn-prev') as HTMLButtonElement;
const prev = document.querySelector('.btn-next') as HTMLButtonElement;

let page = 1;

export function prevPage() {
  if (page > 1) {
    page--;
    renderGarageResult(page);
    next.disabled = false;
  } else prev.disabled = true;
}
export async function nextPage() {
  const responseAllCars = await fetch(`${garageURL}`);
  const resAllCars = await responseAllCars.json();
  const countPage: number = Math.ceil(resAllCars.length / 7);
  if (countPage > page) {
    page++;
    renderGarageResult(page);
    prev.disabled = false;
  } else next.disabled = true;
}
