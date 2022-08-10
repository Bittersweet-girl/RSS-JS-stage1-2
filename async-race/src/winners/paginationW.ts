import { winnersURL } from '../components/constants';
import { renderWinnersResult } from './winners';

let page = 1;

export function prevPage() {
  if (page > 1) {
    page--;
    renderWinnersResult(page);
  }
}
export async function nextPage() {
  const responseAllWins = await fetch(`${winnersURL}`);
  const resAllWins = await responseAllWins.json();
  const countPage: number = Math.ceil(resAllWins.length / 7);
  if (countPage > page) {
    page++;
    renderWinnersResult(page);
  }
}
