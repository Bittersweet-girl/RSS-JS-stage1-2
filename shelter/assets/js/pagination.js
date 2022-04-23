import { pets } from "./pets.js";

export function Pagination(itemsPerPage) {
  const pagination = document.querySelector(".pets-pagination");

  let arr = [];
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < pets.length; i++) arr.push(i);
  for (let i = 0; i < 7; i++){
    arr1 = mixarr(arr);
    arr2.concat(...arr1);
  }
  
  console.log(arr1);
  console.log(arr2);

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

}