// Hamburger

const nav = document.getElementById("nav"),
  headerMenu = document.getElementById("header-menu"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (headerMenu) {
  headerMenu.addEventListener("click", () => {
    nav.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    nav.classList.remove("show-menu");
  });
}

// Movie Swiper

let swiperMovie = new Swiper(".movie-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 25,

  breakpoints: {
    // when window width is >= 440px
    440: {
      slidesPerView: "auto",
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 4,
    },

    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
    },
  },
});

// New Swiper

let swiperNew = new Swiper(".new-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 2,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 440px
    440: {
      slidesPerView: "auto",
      centeredSlides: false,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      centeredSlides: false,
    },

    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

// Add Blur To Hedder Section

const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// Scroll Up Button

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
