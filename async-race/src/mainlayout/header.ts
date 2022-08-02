import './header.scss';

export default function makeHeader(): string {
  return `<header class="header">
              <a href="#/" class="header__link">Garage</a>
              <h1>Acync Race</h1>
              <a href="#/winners" class="header__link">Winners</a>
          </header>`;
}
