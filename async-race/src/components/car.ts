import './car.scss';
import { ICar } from '../interfaces/interfaces';
import { carImage } from './carImage';

export function renderCar(car: ICar) {
  return `
  <div class="garage__item-changes">
    <button class="btn btn-small garage__item-select" data-id="${car.id}">Select</button>
    <button id="remove" class="btn btn-small garage__item-remove" data-id="${car.id}">
    Remove</button>
    <span>${car.name}</span>
  </div>
  <div class="garage__item-handles">
    <button id="start" data-id="${car.id}" class="btn btn-small garage__item-start">Start</button>
    <button id="stop" data-id="${car.id}" class="btn btn-small garage__item-stop" disabled="">
    Stop</button>
  </div>
  <div class="garage__item-road">
    <div class="garage__item-car" id="${car.id}">${carImage(car.color)}</div>
    <div class="garage__item-finish"><img src="./assets/flag-finish.svg" alt=""></div>
  </div>`;
}
