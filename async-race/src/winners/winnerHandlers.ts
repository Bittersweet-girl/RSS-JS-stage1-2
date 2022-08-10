import { nextPage, prevPage } from './paginationW';
import { renderWinnersResult } from './winners';

export function winnerHandler() {
  const winnerContent = document.querySelector('.winners-content') as HTMLElement;
  let sortOrder = 'asc';
  winnerContent.addEventListener('click', (e) => {
    if ((e.target as Element).classList.contains('btn-prev')) {
      prevPage();
    }
    if ((e.target as Element).classList.contains('btn-next')) {
      nextPage();
    }
    if ((e.target as Element).classList.contains('btn-win')) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      renderWinnersResult(1, 'wins', sortOrder);
    }
    if ((e.target as Element).classList.contains('btn-time')) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      renderWinnersResult(1, 'time', sortOrder);
    }
  });
}
