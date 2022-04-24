import { pets } from "./pets.js";

export function Slider(itemsPerPage) {
  const pagination = document.querySelector(".pagination__items");

  let arr = [];
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < pets.length; i++) arr.push(i);

  arr1 = mixarr(arr);
  
  function showData() {
    let index;
    
    pagination.innerHTML = "";
    pagination.classList.add("animate");
    for (let i = 0; i <  itemsPerPage; i++) {
      index = generateRandomIndex();
      // console.log("index", index);
      generateItem(index);
    }
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

  const leftButton = document.querySelector(".btn_left");
  const rightButton = document.querySelector(".btn_right");

  leftButton.addEventListener("click", showData);
  rightButton.addEventListener("click", () => {
    // 
    showData();
  });

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

    if (arr1.length == 0) {
      arr1 = mixarr(arr2);
      arr2.splice(0, arr2.length);
    }
    
    // console.log("arr1", arr1, "arr2", arr2);
    return ind;
  }
}
