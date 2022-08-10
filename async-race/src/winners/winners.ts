import './winner.scss';
import { WINNERSSPERPAGE, winnersURL } from '../components/constants';
import { renderWinner } from '../components/winner';
import { IWinners } from '../interfaces/interfaces';
import { getCarApi } from '../api/api';

function getSort(sort: string, order: string): string {
  if (sort && order) return `&_sort=${sort}&_order=${order}`;
  return '';
}

export async function renderWinners(limit: number, page: number, sort: string, order: string) {
  const response = await fetch(
    `${winnersURL}?_page=${page}&_limit=${limit}${getSort(sort, order)}`,
  );
  const winnersItem = await response.json();
  const winnersRes: Array<IWinners> = await Promise.all(
    winnersItem.map(async (winner: IWinners) => ({ ...winner, car: await getCarApi(winner.id) })),
  );
  const respons = await fetch(`${winnersURL}?`);
  const items = await respons.json();
  return `
  <h3>Winners (${items.length})</h3>
  <div class="winners-pagination">
    <h4 class="winners-pagination__title">Page ${page}</h4>
    <button class="btn btn-prev">Prev</button>
    <button class="btn btn-next">Next</button>
  </div>
  <table class="winner-table">
  <thead>
    <th>Number</th>
    <th>Name</th>
    <th><button class="btn btn-win">Wins</button></th>
    <th><button class="btn btn-time">Best time (sec)</button></th>
  </thead>
<tbody>
${renderWinner(winnersRes)}
  </tbody>
</table>`;
}

export function renderWinnersResult(page = 1, sort = 'id', order = 'ASC') {
  renderWinners(WINNERSSPERPAGE, page, sort, order).then((res) => {
    const winnersContent = document.querySelector('.winners-content') as HTMLElement;
    winnersContent.innerHTML = '';
    winnersContent.innerHTML = res;
  });
}
