import { STATE } from '../components/constants';
import { getDistanceBetweenElement } from '../components/distance';

export function carAnimation(id: number, animationTime: number) {
  const carImg = document.getElementById(id.toFixed()) as HTMLElement;
  const flags = document.querySelectorAll<HTMLButtonElement>('.garage__item-finish_img');
  let HTML_DISTANCE: number;
  let start: null | number = null;

  flags.forEach((flag) => {
    if (flag.getAttribute('data-id') === carImg.id) {
      HTML_DISTANCE = Math.floor(getDistanceBetweenElement(carImg, flag)) + 90;
    }
  });

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

  STATE.end = false;
  STATE.id = window.requestAnimationFrame(step);
  // return STATE.id;
}
