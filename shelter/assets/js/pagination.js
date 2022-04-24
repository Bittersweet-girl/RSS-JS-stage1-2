import { pets } from "./pets.js";

export function Pagination(itemsPerPage) {
  const pagination = document.querySelector(".pagination__items");
  const prevButton = document.querySelector(".btn_prev");
  const firstButton = document.querySelector(".btn_first");
  const pageButton = document.querySelector(".btn_page");
  const nextButton = document.querySelector(".btn_next");
  const lastButton = document.querySelector(".btn_last");

  let arr = [];
  let arr1 = [];
  let arr2 = [];
  let lastPage;
  let currentPage = 1;

  if (itemsPerPage == 8) lastPage = 6;
  if (itemsPerPage == 6) lastPage = 8;
  if (itemsPerPage == 3) lastPage = 16;
  
  for (let i = 0; i < pets.length; i++) arr.push(i);
  arr1 = mixarr(arr);

  // for (let i = 0; i < 7; i++){
  //   arr1 = mixarr(arr);
  //   arr2.concat(...arr1);
  // }
  
  // console.log(arr1);
  // console.log(arr2);

  function showData() {
    let index;
    pagination.classList.add("animate");
    pagination.innerHTML = "";
    pageButton.innerHTML = "";
    for (let i = (currentPage - 1) * itemsPerPage; i < itemsPerPage * currentPage; i++) {
      index = generateRandomIndex();
      // console.log("index", index);
      generateItem(index);
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

  function generateRandomIndex() {
    let ind;
    ind = arr1[0];
    arr2.push(ind);
    arr1.splice(0, 1);

    if (itemsPerPage == 8 && arr1.length == 0) {
      arr1 = arr2.slice().reverse();
      arr2.splice(0, arr2.length);
    }
    if ((arr1.length == 0) && (itemsPerPage == 6 || itemsPerPage == 3)) {
      arr1 = arr2.slice();
      arr2.splice(0, arr2.length);
    }
    // if () {
    //   arr1 = concat(...arr2);
    //   
    // }

    // console.log("arr1", arr1, "arr2", arr2);
    return ind;
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