import { stopEngineApi } from '../api/api';
import { STATE } from '../components/constants';

export async function stopEngine(id: number) {
  STATE.stopped = true;
  await stopEngineApi(id);
  const carImg = document.querySelector('.garage__item-car_svg') as HTMLElement;
  carImg.style.transform = 'translateX(0)';
  window.cancelAnimationFrame(STATE.id as number);
}
