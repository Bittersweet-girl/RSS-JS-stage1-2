import { driveApi, startEngineApi } from '../api/api';
import { getDistanceBetweenElement } from '../components/distance';
import { IState } from '../interfaces/interfaces';

export async function startEngine(id: number) {
  const state: IState = {};
  const { velocity, distance } = await startEngineApi(id);

  const animationTime = Math.round(distance / velocity);

  const carImg = document.querySelector('.garage__item-car_svg') as HTMLElement;
  const flagImg = document.querySelector('.garage__item-finish_img') as HTMLElement;

  let HTML_DISTANCE: number;
  let start: null | number = null;
  function step(timeStep: number) {
    if (!start) start = timeStep;
    const time = timeStep - start;
    const passed = Math.round(time * (distance / animationTime));
    carImg.style.transform = `translate(${Math.min(passed, HTML_DISTANCE)}px)`;
    state.distance = passed;
    if (passed < HTML_DISTANCE) {
      state.id = window.requestAnimationFrame(step);
    } else state.end = true;
  }
  if (Number(carImg.id) === id && Number(flagImg.getAttribute('data-id')) === id) {
    HTML_DISTANCE = Math.floor(getDistanceBetweenElement(carImg, flagImg)) + 90;
    state.end = false;
    state.id = window.requestAnimationFrame(step);
  }
  const { success } = await driveApi(id);
  if (!success) {
    state.end = await true;
    await window.cancelAnimationFrame(state.id as number);
  }
  if (!state.stopped) return { success, id, animationTime };
  return {};
}
