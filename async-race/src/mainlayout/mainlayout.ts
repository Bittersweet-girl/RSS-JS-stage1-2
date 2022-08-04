import { makeHeader } from './header';
import { makeMainGarage } from './mainGarage';
import { createCar } from '../garage/options';
import { generate } from '../garage/generate';

export function makeMainLayout() {
  const rootElement: HTMLElement = document.body;
  rootElement.innerHTML = makeHeader();
  const main: HTMLElement = document.createElement('main');
  main.innerHTML = makeMainGarage();
  rootElement.appendChild(main);
  createCar();
  generate();
  return rootElement;
}
