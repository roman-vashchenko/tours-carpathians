const btnOpenModalBookTour = document.querySelector(".js-open-modal-book-tour");
const backdropModalBookTour = document.querySelector(
  ".js-backdrop-modal-book-tour"
);
const btnCloseModalBookTour = document.querySelector(
  ".js-close-modal-book-tour"
);

btnOpenModalBookTour.addEventListener("click", openModalBookTour);

btnCloseModalBookTour.addEventListener("click", closeModalBookTour);

function handleKeydownEscapeForCloseModal(e) {
  if (e.key === "Escape") closeModalBookTour();
}

function openModalBookTour() {
  backdropModalBookTour.classList.remove("is-hidden");
  document.addEventListener("keydown", handleKeydownEscapeForCloseModal);
  document.addEventListener("click", (e) => {
    if (e.target.className === "backdrop js-backdrop-modal-book-tour")
      closeModalBookTour();
  });
}

function closeModalBookTour() {
  backdropModalBookTour.classList.add("is-hidden");
  document.removeEventListener("keydown", handleKeydownEscapeForCloseModal);
}
