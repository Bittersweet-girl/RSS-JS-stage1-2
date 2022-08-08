import { driveApi, startEngineApi } from '../api/api';
import { STATE } from '../components/constants';
import { getDistanceBetweenElement } from '../components/distance';

export async function startEngine(id: number) {
  const { velocity, distance } = await startEngineApi(id);

  const animationTime = Math.round(distance / velocity);

  const carImg = document.querySelector('.garage__item-car_svg') as HTMLElement;
  const flagImg = document.querySelector('.garage__item-finish_img') as HTMLElement;

  let HTML_DISTANCE: number;
  let start: null | number = null;
  function step(timeStep: number) {
    if (!start) start = timeStep;
    const time = timeStep - start;
    const passed = Math.round(time * (HTML_DISTANCE / animationTime));
    carImg.style.transform = `translate(${Math.min(passed, HTML_DISTANCE)}px)`;
    STATE.distance = passed;
    if (passed < HTML_DISTANCE) {
      STATE.id = window.requestAnimationFrame(step);
    } else STATE.end = true;
  }
  if (Number(carImg.id) === id && Number(flagImg.getAttribute('data-id')) === id) {
    HTML_DISTANCE = Math.floor(getDistanceBetweenElement(carImg, flagImg)) + 90;
    STATE.end = false;
    STATE.id = window.requestAnimationFrame(step);
  }
  const { success } = await driveApi(id);
  if (!success) {
    STATE.end = await true;
    await window.cancelAnimationFrame(STATE.id as number);
  }
  if (!STATE.stopped) return { success, id, animationTime };
  return {};
}
