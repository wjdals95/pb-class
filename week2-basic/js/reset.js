var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction: 'horizontal',
  slidesPerView: 1,
  
  loop: true,
  loopAdditionalSlides: 1,
});
