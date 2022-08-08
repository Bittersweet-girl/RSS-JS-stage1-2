import './mainWinners.scss';
import { renderWinnersResult } from '../winners/winners';

export function makeMainWinners() {
  return `<section class="winners">
    <div class="winners-content">
      ${renderWinnersResult()}
    </div>
    </section>`;
}
