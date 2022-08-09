import { startEngine } from '../car/startEngine';
import { addPopupWinner } from '../mainlayout/popup';

async function race() {
  let itsTrue = true;
  const cars = document.querySelectorAll<HTMLElement>('.garage__item-car_svg');
  cars.forEach(async (item) => {
    const carState = await startEngine(Number(item.id));
    if (carState?.success && itsTrue && Object.keys(carState).length !== 0) {
      itsTrue = false;
      addPopupWinner(Number(carState.id), Number(carState.animationTime));
    }
  });
}
export function raceClick(): void {
  const btnRace = document.querySelector('.garage-race-btn') as HTMLButtonElement;
  btnRace.addEventListener('click', async () => {
    document.querySelectorAll<HTMLButtonElement>('.garage__item-start').forEach((el) => {
      el.disabled = true;
    });
    document.querySelectorAll<HTMLButtonElement>('.garage__item-stop').forEach((el) => {
      el.disabled = false;
    });
    await race();
  });
}
