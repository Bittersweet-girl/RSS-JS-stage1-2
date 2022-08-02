import makeHeader from './header';
import makeMainGarage from './mainGarage';

export default function makeMainLayout() {
  const rootElement: HTMLElement = document.body;
  rootElement.innerHTML = makeHeader();
  const main: HTMLElement = document.createElement('main');
  main.innerHTML = makeMainGarage();
  rootElement.appendChild(main);
  return rootElement;
}
