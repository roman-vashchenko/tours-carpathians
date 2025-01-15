const swiperTours = new Swiper(".swiper-tours", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

const swiperGallery = new Swiper(".swiper-gallery", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 2,
    },
  },
});

const swiperTourDetails = new Swiper(".swiper-tour-details", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination-details",
    dynamicBullets: true,
  },
});
