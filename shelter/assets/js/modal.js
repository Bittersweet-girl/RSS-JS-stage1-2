export function Modal() {
  const openModal = document.querySelector(".pagination__items");
  const modal = document.querySelector(".modal-background");
  const closeModal = document.querySelector(".modal__close");

  openModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('pagination__item')) {
      modal.classList.add('modal_open');
    }
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal_open");
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove("modal_open");
    }
  })
}