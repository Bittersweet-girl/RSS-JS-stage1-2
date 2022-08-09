import { driveApi, startEngineApi } from '../api/api';
import { STATE } from '../components/constants';
import { carAnimation } from './carAnimation';

export async function startEngine(id: number) {
  const { velocity, distance } = await startEngineApi(id);
  const animationTime = Math.round(distance / velocity);
  carAnimation(id, animationTime);
  const { success } = await driveApi(id);
  if (!success) {
    STATE.end = true;
    window.cancelAnimationFrame(STATE.id as number);
  }
  return { success, id, animationTime };
}
