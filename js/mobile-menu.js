const refs = {
  menu: document.querySelector(".js-mob-menu"),
  openMenu: document.querySelector(".js-btn-open-menu"),
  closeMenu: document.querySelector(".js-btn-close-menu"),
  menuLinks: document.querySelectorAll(".mob-menu-list-item"),
  logoMobile: document.querySelector(".logo-mobile"),
};

refs.openMenu.addEventListener("click", () => {
  refs.menu.classList.add("is-open");
  refs.openMenu.classList.add("is-hidden");
  refs.logoMobile.style.opacity = "0";
  refs.closeMenu.classList.add("is-active");
  document.body.style.overflow = "hidden";
});

refs.closeMenu.addEventListener("click", () => {
  refs.menu.classList.remove("is-open");
  refs.closeMenu.classList.remove("is-active");
  refs.logoMobile.style.opacity = "1";
  refs.openMenu.classList.remove("is-hidden");
  document.body.style.overflow = "";
});

refs.menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    refs.menu.classList.remove("is-open");
    refs.closeMenu.classList.remove("is-active");
    refs.openMenu.classList.remove("is-hidden");
    refs.logoMobile.style.opacity = "1";
    document.body.style.overflow = "";
  });
});

function resizeWindowControl() {
  if (window.innerWidth >= 1440) {
    refs.openMenu.classList.remove("is-hidden");
    refs.closeMenu.classList.remove("is-active");
    refs.menu.classList.remove("is-open");
    refs.logoMobile.style.opacity = "1";
    document.body.style.overflow = "";
  }
}

window.addEventListener("resize", resizeWindowControl);

resizeWindowControl();
