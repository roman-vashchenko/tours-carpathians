const refs = {
  modal: document.querySelector(".js-modal-details-tour-hoverla"),
  openModal: document.querySelector(".js-tours-btn"),
  closeModal: document.querySelector(
    ".js-modal-details-tour-hoverla-close-btn"
  ),
};

refs.openModal.addEventListener("click", () => {
  refs.modal.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
});

refs.closeModal.addEventListener("click", () => {
  refs.modal.classList.add("is-hidden");
  document.body.style.overflow = "";
});
