const refs = {
  menu: document.querySelector(".js-mob-menu"),
  openMenu: document.querySelector(".js-btn-open-menu"),
  closeMenu: document.querySelector(".js-btn-close-menu"),
  menuLinks: document.querySelectorAll(".mob-menu-list-item"),
  logoMobile: document.querySelector(".logo-mobile"),
};

refs.openMenu.addEventListener("click", () => {
  refs.menu.classList.add("is-open");
  refs.openMenu.style.display = "none";
  refs.logoMobile.style.opacity = "0";
  refs.closeMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

refs.closeMenu.addEventListener("click", () => {
  refs.menu.classList.remove("is-open");
  refs.closeMenu.style.display = "none";
  refs.logoMobile.style.opacity = "1";
  refs.openMenu.style.display = "block";
  document.body.style.overflow = "";
});

refs.menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    refs.menu.classList.remove("is-open");
    refs.logoMobile.style.opacity = "1";
    document.body.style.overflow = "";
  });
});

function applyStylesOnResize() {
  if (window.innerWidth >= 1440) {
    refs.openMenu.style.display = "none";
  } else {
    refs.openMenu.style.display = "block";
  }
}

applyStylesOnResize();

window.addEventListener("resize", applyStylesOnResize);
