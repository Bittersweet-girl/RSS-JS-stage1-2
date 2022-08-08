import { IWinner } from '../interfaces/interfaces';
import { getCarApi } from '../api/api';

export function renderWinner(items: Array<IWinner>) {
  return `${items
    .map((winner: IWinner, index: number) => {
      const car = getCarApi(winner.id);
      return `<tr>
   <td>${index + 1}</td>
   <td>${car.then((res) => res.color)}</td>
   <td>${winner.car}</td>
   <td>${winner.wins}</td>
   <td>${winner.time}</td>
 </tr>`;
    })
    .join('')}`;
}
