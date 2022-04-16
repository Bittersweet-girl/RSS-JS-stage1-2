const hamburger = document.querySelector('.header__burger');//получить бургер по классу
const headerNav = document.querySelector('.header__nav');//получить меню по классу

function toggleMenu() {//добавить и убрать класс open бургеру и меню
  hamburger.classList.toggle('open');
  headerNav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);//слушает клик на бургер
headerNav.addEventListener('click', () => {toggleMenu(); closeMenu();});//слушает клик на меню

function closeMenu() { //закрывает меню при нажатии на ссылку
  if (document.querySelectorAll('.header__link').target.classList.contains('header__link')) {
    hamburger.classList.remove('open');
    headerNav.classList.remove('open');
  }
}

async function getData() {  //получить данные из файла
  const pets = "Create pets.json";
  const res = await fetch(pets);
  const data = await res.json();
  showData(data);
}

const pagination = document.querySelector(".pagination__items");
let itemsPerPage = 3;
let currentPage = 1;
// let pages = Math.ceil(data.length / itemsPerPage);

function showData(data) {
  var rand = Math.floor(Math.random() * data.length);
  pagination.innerHTML = "";
  for (let i = currentPage; i <= itemsPerPage; i++){
    pagination.innerHTML += `<div class="pagination__item">
                  <img src="${data[rand + i].img}" alt="" />
                  <h3>${data[rand + i].name}</h3>
                  <button class="button btn_blank">Learn more</button>
                </div>`;
  }

}

const laptop = window.matchMedia("(max-width: 1279px)");
const tablet = window.matchMedia("(max-width: 767px)");
function mediaQuery() {
  
  if (laptop.matches) { // Если медиа запрос совпадает
    itemsPerPage = 2;
  } else if (tablet.matches) {
     itemsPerPage = 1;
  }
}

mediaQuery();
window.addEventListener("load", getData);