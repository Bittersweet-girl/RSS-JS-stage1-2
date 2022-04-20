import { pets } from "./pets.js";

export function Slider(itemsPerPage) {
  let currentPage = 1;
  const pagination = document.querySelector(".pagination__items");
  let pages = Math.ceil(pets.length / itemsPerPage);

  function showData() {
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
  showData();

  const leftButton = document.querySelector(".btn_left");
  const rightButton = document.querySelector(".btn_right");

  leftButton.addEventListener("click", prevPage);
  rightButton.addEventListener("click", nextPage);

  function nextPage() {
    if (currentPage < pages) {
      ++currentPage;
    } else {
      currentPage = 1;
    }
    showData();
  }

  function prevPage() {
    if (currentPage > 1) {
       --currentPage;
    } else {
      currentPage = pages;
    }
    showData();
  }
}
