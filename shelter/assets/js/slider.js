import { pets } from "./pets.js";

export function Slider(itemsPerPage) {
  const pagination = document.querySelector(".pagination__items");

  let arrOfNumbers = [];
  let arrOfRandomNumbers = [];

  for (let i = 0; i < pets.length; i++) arrOfNumbers.push(i);
  arrOfRandomNumbers = mixarr(arrOfNumbers);
  arrOfNumbers.splice(0, arrOfNumbers.length);
  
  function showData() {
    let index;
    pagination.innerHTML = "";
    pagination.classList.add("animate");
    for (let i = 0; i <  itemsPerPage; i++) {
      index = generateRandomIndex();
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
  rightButton.addEventListener("click", showData);

  function mixarr(array) {
    return array
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  }

  function generateRandomIndex() {
    let ind;
    ind = arrOfRandomNumbers[0];
    arrOfNumbers.push(ind);
    arrOfRandomNumbers.splice(0, 1);

    if (arrOfRandomNumbers.length == 0) {
      arrOfRandomNumbers = mixarr(arrOfNumbers);
      
      for (let i = 0; i < 5; i++){
        for (let j = arrOfNumbers.length - 1; j > arrOfNumbers.length - 4; j--){
          if (arrOfRandomNumbers[i] == arrOfNumbers[j]) {
            arrOfRandomNumbers.push(arrOfRandomNumbers[i]);
            arrOfRandomNumbers.splice(i, 1);
            i--;
          }
        }
      }
      arrOfNumbers.splice(0, arrOfNumbers.length);
    }
    return ind;
  }
}
