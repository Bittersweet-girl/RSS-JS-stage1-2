import { getCarApi } from '../api/api';
import { WINNERSSPERPAGE, winnersURL } from '../components/constants';
import { IWinner } from '../interfaces/interfaces';

export async function renderWinners(limit: number, page = 1) {
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
    ${items
      .map((winner: IWinner, index: number) => {
        const car = getCarApi(+winner.id);
        return `
    <tr>
      <td>${index + 1}</td>
      <td>${car.then((res) => {
        return res.color;
      })}</td>
      <td>${winner.car}</td>
      <td>${winner.wins}</td>
      <td>${winner.time}</td>
    </tr>
    `;
      })
      .join('')}
  </tbody>
</table>`;
}

export function renderWinnersResult() {
  renderWinners(WINNERSSPERPAGE, 1).then((res) => {
    const winnersContent = document.querySelector('.winners-content') as HTMLElement;
    winnersContent.innerHTML = '';
    winnersContent.innerHTML = res;
  });
}
