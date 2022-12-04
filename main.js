document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");



  document.querySelector("#btnNav").addEventListener("click", () => {
      nav.classList.add("nav-open");
      nav.classList.remove("hidden")
  });

  document.querySelector(".nav_overlay").addEventListener("click", () => {
      nav.classList.remove("nav-open");
      nav.classList.add("hidden")
  });
});

// End NavBar Section
let navBar = document.querySelector("#navbar");
const sticky = navBar.offsetTop;
function myfunction() {
  if (window.pageYOffset > sticky + 300) {
    navBar.classList.add("sticky-nav");
  } else if (window.pageYOffset < sticky) {
    navBar.classList.remove("sticky-nav");
  }
}
// End NavBar Section

// Start Fade In Section
const boxs = document.querySelectorAll(".box");
const options = {}
const observer = new IntersectionObserver((entries) => {
  
  entries.forEach(el => {
    el.target.classList.toggle('slide', el.isIntersecting)

    if (el.isIntersecting) {
      observer.unobserve(el.target)
    }
  })

 }, options)
boxs.forEach(box => {
  observer.observe(box)
})
// End Fade In Section

// Start Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  draggable: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    }

  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// End Swiper