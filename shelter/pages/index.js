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
let itemsPerPage = 3;
let currentPage = 1;
// let page = 1;

async function getData() {  //получить данные из файла
  const pets = "Create pets.json";
  const res = await fetch(pets);
  const data = await res.json();
  showData(data);
}

const desktop = window.matchMedia("(min-width: 1280px)");
const laptop = window.matchMedia("(max-width: 1279px) and (min-width: 768px)");
const tablet = window.matchMedia("(max-width: 767px) and (min-width: 320px");

function mediaQuery() {
  if (desktop.matches) { itemsPerPage = 3; getData();}
  else if (laptop.matches) { itemsPerPage = 2; getData();}
  else if (tablet.matches) {itemsPerPage = 1; getData();}
  desktop.addEventListener("change", (e) => {
  if (e.matches) {
    itemsPerPage = 3;
    getData();
  }
});
  laptop.addEventListener("change", (e) => {
  if (e.matches) {
    itemsPerPage = 2;
    getData();
  }
});
tablet.addEventListener("change", (e) => {
  if (e.matches) {
    itemsPerPage = 1;
    getData();
  }
});
}
// mediaQuery();

const pagination = document.querySelector(".pagination__items");

function showData(data) {
  let pages = Math.ceil(data.length / itemsPerPage);
  // let rand = Math.floor(Math.random() * data.length);
  pagination.innerHTML = "";
 if (currentPage < 1) currentPage = 1;
 if (currentPage > pages) currentPage = pages;
  for (
    let i = (currentPage - 1) * itemsPerPage;
    i < currentPage * itemsPerPage && i < data.length;
    i++
  ) {
    pagination.innerHTML += `<div class="pagination__item">
                  <img src="${data[i].img}" alt="" />
                  <h3>${data[i].name}</h3>
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
  if (currentPage < 8 / itemsPerPage) ++currentPage;
  getData();
}

function prevPage() {
  // if not on the first page, goto previous page
  if (currentPage > 1) --currentPage;
  getData();
}

window.addEventListener("load", () => { mediaQuery();});