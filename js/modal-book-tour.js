const btnOpenModalBookTour = document.querySelector(".js-open-modal-book-tour");
const backdropModalBookTour = document.querySelector(
  ".js-backdrop-modal-book-tour"
);
const btnCloseModalBookTour = document.querySelector(
  ".js-close-modal-book-tour"
);

btnOpenModalBookTour.addEventListener("click", () => {
  backdropModalBookTour.classList.remove("is-hidden");
});

btnCloseModalBookTour.addEventListener("click", () => {
  backdropModalBookTour.classList.add("is-hidden");
});
