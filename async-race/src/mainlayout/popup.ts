import './popup.scss';
import { getCarApi } from '../api/api';

export function renderPopup(name = 'None', time = 'null') {
  return `
       <div class="garage-popup-content">
          <p class="garage-popup__text">${name} went first (${time}s)!</p>
          <button class="btn garage-popup__delete">
             OK
          </button>
       </div>
      `;
}
function removePopup(): void {
  const buttonClosePopup = document.querySelector('.garage-popup__delete') as HTMLButtonElement;
  buttonClosePopup.addEventListener('click', () => {
    (document.querySelector('.garage-popup') as HTMLElement).style.display = 'none';
  });
}
export async function addPopupWinner(id: number, time: number) {
  const request = await getCarApi(id);
  if (time) {
    renderPopup(request.name, (time / 1000).toFixed(2));
    (document.querySelector('.garage-popup') as HTMLElement).style.display = 'flex';
    removePopup();
  }
}
