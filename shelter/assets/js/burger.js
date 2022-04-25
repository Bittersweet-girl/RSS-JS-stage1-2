export function Burger() {

  const hamburger = document.querySelector(".header__burger"); //получить бургер по классу
  const headerNav = document.querySelector(".header__nav"); //получить меню по классу
  const body = document.querySelector('body');

  function toggleMenu() {
    //добавить и убрать класс open бургеру и меню
    hamburger.classList.toggle("open");
    headerNav.classList.toggle("open");
    body.classList.toggle("no-scroll");
  }
  hamburger.addEventListener("click", toggleMenu); //слушает клик на бургер
  headerNav.addEventListener("click", () => {
    toggleMenu();
    closeMenu();
  }); //слушает клик на меню

  function closeMenu() {
    //закрывает меню при нажатии на ссылку
    if (
      document
        .querySelectorAll(".header__link")
        .target.classList.contains("header__link")
    ) {
      hamburger.classList.remove("open");
      headerNav.classList.remove("open");
      body.classList.remove("no-scroll");
    }
  }
}
