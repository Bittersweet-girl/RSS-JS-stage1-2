import { driveApi, startEngineApi } from '../api/api';
import { STATE } from '../components/constants';
// import { getDistanceBetweenElement } from '../components/distance';
import { carAnimation } from './carAnimation';

export async function startEngine(id: number) {
  const { velocity, distance } = await startEngineApi(id);
  const animationTime = Math.round(distance / velocity);
  // const carImg = document.getElementById(id.toFixed()) as HTMLElement;
  // const flagImg = document.querySelector('.garage__item-finish_img') as HTMLElement;
  carAnimation(id, animationTime);
  const { success } = await driveApi(id);
  if (!success) {
    STATE.end = true;
    window.cancelAnimationFrame(STATE.id as number);
  }
  return { success, id, animationTime };
}
