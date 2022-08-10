import { nextPage, prevPage } from './paginationW';

export function winnerHandler() {
  const winnerContent = document.querySelector('.winners-content') as HTMLElement;

  winnerContent.addEventListener('click', (e) => {
    if ((e.target as Element).classList.contains('btn-prev')) {
      prevPage();
    }
    if ((e.target as Element).classList.contains('btn-next')) {
      nextPage();
    }
  });
}
