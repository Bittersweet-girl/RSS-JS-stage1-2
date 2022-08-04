import { prevPage, nextPage } from '../components/pagination';
import { getCarApi } from '../api/api';
import { ICar } from '../interfaces/interfaces';
import { updateCar } from './options';

export function garageHandler() {
  const garageContent = document.querySelector('.garage-content') as HTMLElement;
  garageContent.addEventListener('click', (e) => {
    if ((e.target as Element).classList.contains('btn-prev')) {
      prevPage();
    }
    if ((e.target as Element).classList.contains('btn-next')) {
      nextPage();
    }
    if ((e.target as Element).classList.contains('garage__item-select')) {
      const id = Number((e.target as Element).getAttribute('data-id'));
      getCarApi(id).then((res: ICar) => {
        (document.querySelector('.garage-update-button') as HTMLButtonElement).disabled = false;
        updateCar(id, res);
      });
    }
  });
}
