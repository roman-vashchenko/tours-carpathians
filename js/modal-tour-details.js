const refs = {
  modalHoverla: document.querySelector(".js-modal-details-tour-hoverla"),
  openModalHoverla: document.querySelector(".js-tours-btn-hoverla"),
  closeModalHoverla: document.querySelector(
    ".js-modal-details-tour-hoverla-close-btn"
  ),
  // modalBukovel: document.querySelector(".js-modal-details-tour-bukovel"),
  // openModalBukovel: document.querySelector(".js-tours-btn-bukovel"),
  // closeModalBukovel: document.querySelector(
  //   ".js-modal-details-tour-bukovel-close-btn"
  // ),
  // modalCarpathians: document.querySelector(".js-modal-details-tour-carpathians"),
  // openModalCarpathians: document.querySelector(".js-tours-btn-carpathians"),
  // closeModalCarpathians: document.querySelector(
  //   ".js-modal-details-tour-carpathians-close-btn"
  // ),

  // ),
};

refs.openModalHoverla.addEventListener("click", () => {
  refs.modalHoverla.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
});

refs.closeModalHoverla.addEventListener("click", () => {
  refs.modalHoverla.classList.add("is-hidden");
  document.body.style.overflow = "";
});
