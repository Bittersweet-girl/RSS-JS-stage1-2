// import { getCarApi } from '../api/api';
import { WINNERSSPERPAGE, winnersURL } from '../components/constants';
// import { IWinner } from '../interfaces/interfaces';
import { renderWinner } from '../components/winner';

export async function renderWinners(limit: number, page: number) {
  const response = await fetch(`${winnersURL}?_page=${page}&_limit=${limit}`);
  const items = await response.json();
  return `
<h3>Winners (${items.length})</h3>
 <h4>Page #${page}</h4>
 <table>
  <thead>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th>Wins</th>
    <th>Best time (seconds)</th>
  </thead>
<tbody>
${renderWinner(items)}
  </tbody>
</table>`;
}

export function renderWinnersResult(page = 1) {
  renderWinners(WINNERSSPERPAGE, page).then((res) => {
    const winnersContent = document.querySelector('.winners-content') as HTMLElement;
    winnersContent.innerHTML = '';
    winnersContent.innerHTML = res;
  });
}
