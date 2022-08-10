import { prevPage, nextPage } from '../components/pagination';
import { getCarApi, deleteCarApi, deleteWinnerApi } from '../api/api';
import { ICar } from '../interfaces/interfaces';
import { updateCar } from './options';
import { renderGarageResult } from './garage';
import { startEngine } from '../car/startEngine';
import { stopEngine } from '../car/stopEngine';
import { renderWinnersResult } from '../winners/winners';

export function garageHandler() {
  const garageContent = document.querySelector('.garage-content') as HTMLElement;

  garageContent.addEventListener('click', (e) => {
    const stopBtns = document.querySelectorAll<HTMLButtonElement>('.garage__item-stop');
    const startBtns = document.querySelectorAll<HTMLButtonElement>('.garage__item-start');
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
      renderWinnersResult();
    }
    if ((e.target as Element).classList.contains('garage__item-start')) {
      const id = (e.target as Element).getAttribute('data-id');
      startEngine(Number(id));
      startBtns.forEach((btn) => {
        if (id === btn.getAttribute('data-id')) {
          btn.disabled = true;
        }
      });
      stopBtns.forEach((btn) => {
        if (id === btn.getAttribute('data-id')) {
          btn.disabled = false;
        }
      });
    }
    if ((e.target as Element).classList.contains('garage__item-stop')) {
      const id = (e.target as Element).getAttribute('data-id');
      stopEngine(Number(id));
      startBtns.forEach((btn) => {
        if (id === btn.getAttribute('data-id')) {
          btn.disabled = false;
        }
      });
      stopBtns.forEach((btn) => {
        if (id === btn.getAttribute('data-id')) {
          btn.disabled = true;
        }
      });
    }
  });
}
