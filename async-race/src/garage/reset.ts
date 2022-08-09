import { stopEngine } from '../car/stopEngine';

async function resetRace() {
  const cars = document.querySelectorAll<HTMLElement>('.garage__item-car_svg');
  cars.forEach(async (item) => {
    await stopEngine(Number(item.id));
  });
}
export function resetClick(): void {
  const btnRace = document.querySelector('.garage-reset-btn') as HTMLButtonElement;
  btnRace.addEventListener('click', async () => {
    document.querySelectorAll<HTMLButtonElement>('.garage__item-start').forEach((el) => {
      el.disabled = false;
    });
    document.querySelectorAll<HTMLButtonElement>('.garage__item-stop').forEach((el) => {
      el.disabled = true;
    });
    await resetRace();
  });
}
