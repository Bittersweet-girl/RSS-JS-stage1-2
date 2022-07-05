import { Burger } from "../assets/js/burger.js";
import { Modal } from "../assets/js/modal.js";
import { Pagination } from "../assets/js/pagination.js";

let itemsPerPage = 8;

const desktop = window.matchMedia("(min-width: 1280px)");
const laptop = window.matchMedia("(max-width: 1279px) and (min-width: 768px)");
const tablet = window.matchMedia("(max-width: 767px) and (min-width: 320px");

function mediaQuery() {
  if (desktop.matches) {
    itemsPerPage = 8;
    Pagination(itemsPerPage);
  } else if (laptop.matches) {
    itemsPerPage = 6;
    Pagination(itemsPerPage);
  } else if (tablet.matches) {
    itemsPerPage = 3;
    Pagination(itemsPerPage);
  }
  // desktop.addEventListener("change", (e) => {
  //   if (e.matches) {
  //     itemsPerPage = 8;
  //     Pagination(itemsPerPage);
  //   }
  // });
  // laptop.addEventListener("change", (e) => {
  //   if (e.matches) {
  //     itemsPerPage = 6;
  //     Pagination(itemsPerPage);
  //   }
  // });
  // tablet.addEventListener("change", (e) => {
  //   if (e.matches) {
  //     itemsPerPage = 3;
  //     Pagination(itemsPerPage);
  //   }
  // });
}

window.addEventListener("load", () => {
  mediaQuery();
  Modal();
  Burger();
});
