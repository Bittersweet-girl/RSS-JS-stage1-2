import { Burger } from "../assets/js/burger.js";
import { Modal } from "../assets/js/modal.js";
import { Slider } from "../assets/js/slider.js";

let itemsPerPage = 3;

const desktop = window.matchMedia("(min-width: 1280px)");
const laptop = window.matchMedia("(max-width: 1279px) and (min-width: 768px)");
const tablet = window.matchMedia("(max-width: 767px) and (min-width: 320px");

function mediaQuery() {
  if (desktop.matches) {
    itemsPerPage = 3;
    Slider(itemsPerPage);
  } else if (laptop.matches) {
    itemsPerPage = 2;
    Slider(itemsPerPage);
  } else if (tablet.matches) {
    itemsPerPage = 1;
    Slider(itemsPerPage);
  }
  // desktop.addEventListener("change", (e) => {
  //   if (e.matches) {
  //     itemsPerPage = 3;
  //     Slider(itemsPerPage);
  //   }
  // });
  // laptop.addEventListener("change", (e) => {
  //   if (e.matches) {
  //     itemsPerPage = 2;
  //     Slider(itemsPerPage);
  //   }
  // });
  // tablet.addEventListener("change", (e) => {
  //   if (e.matches) {
  //     itemsPerPage = 1;
  //     Slider(itemsPerPage);
  //   }
  // });
}

window.addEventListener("load", () => {
  mediaQuery();
  Modal();
  Burger();
});
