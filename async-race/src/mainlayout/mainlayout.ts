import makeHeader from './header';

export default function makeMainLayout() {
  const rootElement: HTMLElement = document.body;
  rootElement.innerHTML = makeHeader();
  return rootElement;
}
