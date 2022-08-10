import { IWinners } from '../interfaces/interfaces';

export function renderWinner(items: Array<IWinners>) {
  return `${items
    .map((winner: IWinners, index: number) => {
      return `<tr>
   <td>${index + 1}</td>
   <td>${winner.car.name}</td>
   <td>${winner.wins}</td>
   <td>${winner.time}</td>
 </tr>`;
    })
    .join('')}`;
}
