import { prevPage, nextPage } from '../components/pagination';
import { getCarApi, deleteCarApi, deleteWinnerApi } from '../api/api';
import { ICar } from '../interfaces/interfaces';
import { updateCar } from './options';
import { renderGarageResult } from './garage';
import { startEngine } from '../car/startEngine';

export function garageHandler() {
  const garageContent = document.querySelector('.garage-content') as HTMLElement;

  garageContent.addEventListener('click', (e) => {
    const stopBtn = document.querySelector('.garage__item-stop') as HTMLButtonElement;
    const startBtn = document.querySelector('.garage__item-start') as HTMLButtonElement;
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
    if ((e.target as Element).classList.contains('garage__item-remove')) {
      const id = Number((e.target as Element).getAttribute('data-id'));
      deleteCarApi(id);
      deleteWinnerApi(id);
      renderGarageResult();
    }
    if ((e.target as Element).classList.contains('garage__item-start')) {
      const id = Number((e.target as Element).getAttribute('data-id'));
      startEngine(id);
      startBtn.disabled = true;
      stopBtn.disabled = false;
    }
    if ((e.target as Element).classList.contains('garage__item-stop')) {
      // const id = Number((e.target as Element).getAttribute('data-id'));

      startBtn.disabled = false;
      stopBtn.disabled = true;
    }
  });
}
