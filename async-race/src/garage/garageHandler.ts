import { prevPage, nextPage } from '../components/pagination';

export function garageHandler() {
  const garageContent = document.querySelector('.garage-content') as HTMLElement;
  garageContent.addEventListener('click', async (e) => {
    if ((e.target as Element).classList.contains('btn-prev')) {
      prevPage();
    }
    if ((e.target as Element).classList.contains('btn-next')) {
      nextPage();
    }
  });
}
