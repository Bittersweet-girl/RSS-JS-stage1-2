export function changePage() {
  const garageBtn = document.querySelector('.header__link_garage') as HTMLButtonElement;
  const winnersBtn = document.querySelector('.header__link_winners') as HTMLButtonElement;
  const winnersPage = document.querySelector('.winners') as HTMLElement;
  const garagePage = document.querySelector('.garage') as HTMLElement;
  garageBtn.addEventListener('click', () => {
    winnersPage.style.display = 'none';
    garagePage.style.display = 'block';
  });
  winnersBtn.addEventListener('click', () => {
    garagePage.style.display = 'none';
    winnersPage.style.display = 'block';
  });
}
