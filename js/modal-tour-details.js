const refs = {
  modalHoverla: document.querySelector(".js-modal-details-tour-hoverla"),
  openModalHoverla: document.querySelector(".js-tours-btn-hoverla"),
  closeModalHoverla: document.querySelector(
    ".js-modal-details-tour-hoverla-close-btn"
  ),
  bookTourHoverla: document.querySelector(
    ".js-modal-details-book-tour-hoverla-btn"
  ),
  modalBukovel: document.querySelector(".js-modal-details-tour-bukovel"),
  openModalBukovel: document.querySelector(".js-tours-btn-bukovel"),
  closeModalBukovel: document.querySelector(
    ".js-modal-details-tour-bukovel-close-btn"
  ),
  bookTourBukovel: document.querySelector(
    ".js-modal-details-book-tour-bukovel-btn"
  ),

  modalCarpathians: document.querySelector(
    ".js-modal-details-tour-carpathians"
  ),
  openModalCarpathians: document.querySelector(".js-tours-btn-carpathians"),
  closeModalCarpathians: document.querySelector(
    ".js-modal-details-tour-carpathians-close-btn"
  ),
  bookTourCarpathians: document.querySelector(
    ".js-modal-details-book-tour-carpathians-btn"
  ),
};

refs.openModalHoverla.addEventListener("click", () => {
  refs.modalHoverla.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
});

refs.closeModalHoverla.addEventListener("click", () => {
  refs.modalHoverla.classList.add("is-hidden");
  document.body.style.overflow = "";
});

refs.bookTourHoverla.addEventListener("click", () => {
  refs.modalHoverla.classList.add("is-hidden");
  document.body.style.overflow = "";
});

refs.openModalBukovel.addEventListener("click", () => {
  refs.modalBukovel.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
});

refs.closeModalBukovel.addEventListener("click", () => {
  refs.modalBukovel.classList.add("is-hidden");
  document.body.style.overflow = "";
});

refs.bookTourBukovel.addEventListener("click", () => {
  refs.modalBukovel.classList.add("is-hidden");
  document.body.style.overflow = "";
});

refs.openModalCarpathians.addEventListener("click", () => {
  refs.modalCarpathians.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
});

refs.closeModalCarpathians.addEventListener("click", () => {
  refs.modalCarpathians.classList.add("is-hidden");
  document.body.style.overflow = "";
});

refs.bookTourCarpathians.addEventListener("click", () => {
  refs.modalCarpathians.classList.add("is-hidden");
  document.body.style.overflow = "";
});
