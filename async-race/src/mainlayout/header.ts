import './header.scss';

export function makeHeader(): string {
  return `<header class="header">
              <a href="#" class="header__link header__link_garage">Garage</a>
              <h1>Acync Race</h1>
              <a href="#" class="header__link header__link_winners">Winners</a>
          </header>`;
}
