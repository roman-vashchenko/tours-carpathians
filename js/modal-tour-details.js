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

// ====================================

refs.openModalHoverla.addEventListener("click", handleOpenModalHoverla);
refs.closeModalHoverla.addEventListener("click", handleCloseModalHoverla);

function handleKeydownEscapeForModalHoverla(e) {
  if (e.key === "Escape") handleCloseModalHoverla();
}

function handleOpenModalHoverla() {
  refs.modalHoverla.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleKeydownEscapeForModalHoverla);
  document.addEventListener("click", (e) => {
    if (
      e.target.className ===
      "backdrop-modal-details-tour-hoverla js-modal-details-tour-hoverla"
    )
      handleCloseModalHoverla();
  });
}

function handleCloseModalHoverla() {
  refs.modalHoverla.classList.add("is-hidden");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleKeydownEscapeForModalHoverla);
}

refs.bookTourHoverla.addEventListener("click", () => {
  refs.modalHoverla.classList.add("is-hidden");
  document.body.style.overflow = "";
});

// =======================================

refs.openModalBukovel.addEventListener("click", handleOpenModalBukovel);
refs.closeModalBukovel.addEventListener("click", handleCloseModalBukovel);

function handleKeydownEscapeForModalBukovel(e) {
  if (e.key === "Escape") handleCloseModalBukovel();
}

function handleOpenModalBukovel() {
  refs.modalBukovel.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleKeydownEscapeForModalBukovel);
  document.addEventListener("click", (e) => {
    if (
      e.target.className ===
      "backdrop-modal-details-tour-bukovel js-modal-details-tour-bukovel"
    )
      handleCloseModalBukovel();
  });
}

function handleCloseModalBukovel() {
  refs.modalBukovel.classList.add("is-hidden");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleKeydownEscapeForModalBukovel);
}

refs.bookTourBukovel.addEventListener("click", () => {
  refs.modalBukovel.classList.add("is-hidden");
  document.body.style.overflow = "";
});

// =======================================

refs.openModalCarpathians.addEventListener("click", handleOpenModalCarpathians);
refs.closeModalCarpathians.addEventListener(
  "click",
  handleCloseModalCarpathians
);

function handleKeydownEscapeForModalCarpathians(e) {
  if (e.key === "Escape") handleCloseModalCarpathians();
}

function handleOpenModalCarpathians() {
  refs.modalCarpathians.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleKeydownEscapeForModalCarpathians);
  document.addEventListener("click", (e) => {
    if (
      e.target.className ===
      "backdrop-modal-details-tour-carpathians js-modal-details-tour-carpathians"
    )
      handleCloseModalCarpathians();
  });
}

function handleCloseModalCarpathians(e) {
  refs.modalCarpathians.classList.add("is-hidden");
  document.body.style.overflow = "";
  document.removeEventListener(
    "keydown",
    handleKeydownEscapeForModalCarpathians
  );
}

refs.bookTourCarpathians.addEventListener("click", () => {
  refs.modalCarpathians.classList.add("is-hidden");
  document.body.style.overflow = "";
});
