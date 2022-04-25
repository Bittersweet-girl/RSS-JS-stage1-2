import { pets } from "./pets.js";

export function Pagination(itemsPerPage) {
  const pagination = document.querySelector(".pagination__items");
  const prevButton = document.querySelector(".btn_prev");
  const firstButton = document.querySelector(".btn_first");
  const pageButton = document.querySelector(".btn_page");
  const nextButton = document.querySelector(".btn_next");
  const lastButton = document.querySelector(".btn_last");

  let lastPage;
  let currentPage = 1;

  if (itemsPerPage == 8) lastPage = 6;
  if (itemsPerPage == 6) lastPage = 8;
  if (itemsPerPage == 3) lastPage = 16;

    let arrOfNumbers = [];
    let arrOfRandomNumbers = [];
    let i;
    for (i = 0; i < pets.length; i++) arrOfNumbers.push(i);
    arrOfRandomNumbers = mixarr(arrOfNumbers);
    arrOfNumbers.splice(0, arrOfNumbers.length);
    for (i = 0; i < 6; i++) {
      arrOfRandomNumbers.push(arrOfRandomNumbers[0]);
      arrOfRandomNumbers.splice(0, 1);
      arrOfNumbers = arrOfNumbers.concat(...arrOfRandomNumbers);
    }

  function showData() {
    pagination.classList.add("animate");
    pagination.innerHTML = "";
    pageButton.innerHTML = "";
    for (let i = (currentPage - 1) * itemsPerPage; i < itemsPerPage * currentPage; i++) {
      generateItem(arrOfNumbers[i]);
    }
    checkActiveBtn();
    pageButton.innerHTML = currentPage;
  }
  showData();

  pagination.addEventListener("animationend", () => {
    pagination.classList.remove("animate");
  });
  
  function generateItem(i) {
    pagination.innerHTML += `<div class="pagination__item">
                  <img src="${pets[i].img}" alt="" />
                  <h3>${pets[i].name}</h3>
                  <button class="button btn_blank">Learn more</button>
                </div>`;
  }

  
  function mixarr(array) {
    return array
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  }

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) currentPage--;
    showData();
  });
  firstButton.addEventListener("click", () => {
    currentPage = 1;
    showData();
  });
  lastButton.addEventListener("click", () => {
    currentPage = lastPage;
    showData();
  });
  nextButton.addEventListener("click", () => {
    if (currentPage <= lastPage) currentPage++;
    showData();
  });

  function checkActiveBtn() {
    if (currentPage == 1){
      prevButton.classList.add("btn_inactive");
      prevButton.setAttribute("disabled", true);
      firstButton.classList.add("btn_inactive");
      firstButton.setAttribute("disabled", true);
    } else {
      prevButton.classList.remove("btn_inactive");
      prevButton.removeAttribute("disabled");
      firstButton.classList.remove("btn_inactive");
      firstButton.removeAttribute("disabled");
      prevButton.classList.add("btn_blank");
      firstButton.classList.add("btn_blank");
    }
    if (currentPage == lastPage){
      nextButton.classList.add("btn_inactive");
      nextButton.setAttribute("disabled", true);
      lastButton.classList.add("btn_inactive");
      lastButton.setAttribute("disabled", true);
    } else {
      nextButton.classList.remove("btn_inactive");
      nextButton.removeAttribute("disabled");
      lastButton.classList.remove("btn_inactive");
      lastButton.removeAttribute("disabled");
      nextButton.classList.add("btn_blank");
      lastButton.classList.add("btn_blank");
    }
  }
}