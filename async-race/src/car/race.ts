import { startEngine } from './startEngine';
import { addPopupWinner } from '../mainlayout/popup';
import { IDrive } from '../interfaces/interfaces';

async function race() {
  const cars = document.querySelectorAll<HTMLElement>('.garage__item-car_svg');
  cars.forEach(async (item) => {
    const carState: IDrive = await startEngine(Number(item.id));
    if (carState?.success && Object.keys(carState).length !== 0) {
      addPopupWinner(Number(carState.id), Number(carState.animationTime));
    }
  });
}
export function raceClick(): void {
  const btnRace = document.querySelector('.garage-race-btn') as HTMLButtonElement;
  btnRace.addEventListener('click', async () => {
    (document.querySelector('.garage__item-start') as HTMLButtonElement).disabled = true;
    (document.querySelector('.garage__item-stop') as HTMLButtonElement).disabled = false;
    await race();
  });
}
