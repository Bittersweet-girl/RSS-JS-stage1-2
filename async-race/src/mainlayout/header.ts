import './header.css';

export default function makeHeader(): string {
  return `<header class="header">
              <a href="#/" class="header__link">Garage</a>
              <a href="#/winners" class="header__link">Winners</a>
          </header>`;
}
