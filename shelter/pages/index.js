import { Burger } from "../assets/js/burger.js";
import { pets } from "../assets/js/pets.js";

Burger();

let itemsPerPage = 3;
let currentPage = 1;

const desktop = window.matchMedia("(min-width: 1280px)");
const laptop = window.matchMedia("(max-width: 1279px) and (min-width: 768px)");
const tablet = window.matchMedia("(max-width: 767px) and (min-width: 320px");

function mediaQuery() {
  if (desktop.matches) {
    itemsPerPage = 3;
    showData();
  } else if (laptop.matches) {
    itemsPerPage = 2;
    showData();
  } else if (tablet.matches) {
    itemsPerPage = 1;
    showData();
  }
  desktop.addEventListener("change", (e) => {
    if (e.matches) {
      itemsPerPage = 3;
      showData();
    }
  });
  laptop.addEventListener("change", (e) => {
    if (e.matches) {
      itemsPerPage = 2;
      showData();
    }
  });
  tablet.addEventListener("change", (e) => {
    if (e.matches) {
      itemsPerPage = 1;
      showData();
    }
  });
}
// mediaQuery();

const pagination = document.querySelector(".pagination__items");

function showData() {
  let pages = Math.ceil(pets.length / itemsPerPage);
  // let rand = Math.floor(Math.random() * pets.length);
  pagination.innerHTML = "";
  if (currentPage < 1) currentPage = 1;
  if (currentPage > pages) currentPage = pages;
  for (
    let i = (currentPage - 1) * itemsPerPage;
    i < currentPage * itemsPerPage && i < pets.length;
    i++
  ) {
    pagination.innerHTML += `<div class="pagination__item">
                  <img src="${pets[i].img}" alt="" />
                  <h3>${pets[i].name}</h3>
                  <button class="button btn_blank">Learn more</button>
                </div>`;
  }
}

const leftButton = document.querySelector(".btn_left");
const rightButton = document.querySelector(".btn_right");

leftButton.addEventListener("click", prevPage);
rightButton.addEventListener("click", nextPage);
function nextPage() {
  // if not on last page, goto next page
  if (currentPage < pets.length / itemsPerPage) ++currentPage;
  showData();
}

function prevPage() {
  // if not on the first page, goto previous page
  if (currentPage > 1) --currentPage;
  showData();
}

window.addEventListener("load", () => {
  mediaQuery();
});
