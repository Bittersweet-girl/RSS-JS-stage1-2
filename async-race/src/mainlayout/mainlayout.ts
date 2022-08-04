import { makeHeader } from './header';
import { makeMainGarage } from './mainGarage';
import { createCar } from '../garage/options';
import { generate } from '../garage/generate';
import { garageHandler } from '../garage/garageHandler';
import { makeMainWinners } from './mainWinners';
import { changePage } from '../components/changePage';

export function makeMainLayout() {
  const rootElement: HTMLElement = document.body;
  rootElement.innerHTML = makeHeader();
  const main: HTMLElement = document.createElement('main');
  main.innerHTML = makeMainGarage();
  main.innerHTML += makeMainWinners();
  rootElement.appendChild(main);
  // changePage();
  createCar();
  generate();
  garageHandler();
  return rootElement;
}
