import { makeHeader } from './header';
import { makeMainGarage } from './mainGarage';
import { createCar } from '../garage/options';
import { generate } from '../garage/generate';
import { garageHandler } from '../garage/garageHandler';
import { makeMainWinners } from './mainWinners';
import { raceClick } from '../car/race';

export function makeMainLayout() {
  const rootElement: HTMLElement = document.body;
  rootElement.innerHTML = makeHeader();
  const main: HTMLElement = document.createElement('main');
  main.innerHTML = makeMainGarage() + makeMainWinners();
  rootElement.appendChild(main);
  createCar();
  generate();
  garageHandler();
  raceClick();
  return rootElement;
}
