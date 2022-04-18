import { pets } from "./pets.js";
export function Modal() {
  const openModal = document.querySelector(".pagination__items");
  const modal = document.querySelector(".modal-background");
  const closeModal = document.querySelector(".modal__close");

  openModal.addEventListener("click", (e) => {

    if (e.target.closest(".pagination__item")) {
      let title = e.target.closest(".pagination__item").querySelector("h3").innerHTML;
      let index = pets.findIndex((el) => el.name == title);
      createModal(index);
      modal.classList.add("modal_open");
    }

  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal_open");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("modal_open");
    }
  });
  
  function createModal(i) {
    const modalContent = document.querySelector(".modal-text");
    const modalImage = document.querySelector(".modal-img");
    modalImage.innerHTML = "";
    modalImage.innerHTML += `<img src="${pets[i].img}" alt="pet">`;
    modalContent.innerHTML = "";
    modalContent.innerHTML += `<h2>${pets[i].name}</h2>
            <h3>${pets[i].type} - ${pets[i].breed}</h3>
            <p>${pets[i].description}</p>
            <ul class="modal-list">
              <li><span><b>Age:</b> ${pets[i].age}</span></li>
              <li><span><b>Inoculations:</b> ${pets[i].inoculations}</span></li>
              <li><span><b>Diseases:</b> ${pets[i].diseases}</span></li>
              <li><span><b>Parasites:</b> ${pets[i].parasites}</span></li>
            </ul>`;
    
}
}

