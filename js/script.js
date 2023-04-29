const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const menuIcon = document.querySelector("#menu_icon");
const navBar = document.querySelector(".navbar");
const navBg = document.querySelector(".nav_bg");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
  navBg.classList.toggle("active");
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    console.log(offset);
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

window.addEventListener('click', (e) =>{
  
  let goToTop = document.querySelector('.menu__item-link')
  e.target == goToTop && window.scrollTo(0,0);
})
