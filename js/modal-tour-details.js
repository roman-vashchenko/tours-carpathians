const refs = {
  modalHoverla: document.querySelector(".js-modal-details-tour-hoverla"),
  openModal: document.querySelector(".js-tours-btn-hoverla"),
  closeModal: document.querySelector(
    ".js-modal-details-tour-hoverla-close-btn"
  ),
};

refs.openModal.addEventListener("click", () => {
  refs.modalHoverla.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
});

refs.closeModal.addEventListener("click", () => {
  refs.modalHoverla.classList.add("is-hidden");
  document.body.style.overflow = "";
});
