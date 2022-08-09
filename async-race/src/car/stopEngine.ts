import { stopEngineApi } from '../api/api';
import { STATE } from '../components/constants';

export async function stopEngine(id: number) {
  STATE.stopped = true;
  await stopEngineApi(id);
  const carImg = document.getElementById(id.toFixed()) as HTMLElement;
  carImg.style.transform = 'translateX(0)';
  window.cancelAnimationFrame(STATE.id as number);
}
