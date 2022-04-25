export function Burger() {

  const hamburger = document.querySelector(".header__burger"); //получить бургер по классу
  const headerNav = document.querySelector(".header__nav"); //получить меню по классу
  const body = document.querySelector('body');
  const bg = document.querySelector(".header__burger_bg");

  function toggleMenu() {
    //добавить и убрать класс open бургеру и меню
    hamburger.classList.toggle("open");
    headerNav.classList.toggle("open");
    bg.classList.toggle("open");
    body.classList.toggle("no-scroll");
  }
  hamburger.addEventListener("click", toggleMenu); //слушает клик на бургер
  bg.addEventListener("click", closeMenu); 
  headerNav.addEventListener("click", () => {
    toggleMenu();
    if (document.querySelectorAll(".header__link").target.classList.contains("header__link")) {  
      closeMenu();
    }
  }); //слушает клик на меню

  function closeMenu() {
    //закрывает меню 
    
      hamburger.classList.remove("open");
      headerNav.classList.remove("open");
      bg.classList.remove("open");
      body.classList.remove("no-scroll");
    
  }
}
