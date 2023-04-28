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

window.addEventListener('click', () =>{
  let goToTop = document.querySelector('.marquee')
  this.target == gotoTop && window.scrollTo(0,0);
})
// function Marquee(selector, speed) {
//   const parentSelector = document.querySelector(selector);
//   const clone = parentSelector.innerHTML;
//   const firstElement = parentSelector.children[0];
//   let i = 0;
//   console.log(firstElement);
//   parentSelector.insertAdjacentHTML("beforeend", clone);
//   parentSelector.insertAdjacentHTML("beforeend", clone);

//   setInterval(function () {
//     firstElement.style.marginLeft = `-${i}px`;
//     if (i > firstElement.clientWidth) {
//       i = 0;
//     }
//     i = i + speed;
//   }, 0);
// }

// //after window is completed load
// //1 class selector for marquee
// //2 marquee speed 0.2
// window.addEventListener("load", () => {
//   Marquee(".marquee", 0.8);
  
// });




document.addEventListener("DOMContentLoaded", (_) => {
  const items = [...document.getElementsByClassName("list__item")];
  const containerElem = document.getElementById("containerElem");
  const leftSideOfContainer = containerElem.getBoundingClientRect().left;
  const listElem = document.getElementById("list");
  let currentLeftValue = 0;

  window.setInterval(animationLoop, 1);

  /* 
Looks at first item in the list and checks if it goes out of the visible area 
by comparing the right position of the first list item to the left position 
of the containing element. 
*/
  function animationLoop() {
    const firstListItem = listElem.querySelector(
      ".list__item:first-child"
    );

    let rightSideOfFirstItem =
      firstListItem.getBoundingClientRect().right;

    /* 
If first list item is out of viewable area, move it to the end of the list. 
Also, set the current left value to -1 so we won't stutter.
*/
    if (rightSideOfFirstItem == leftSideOfContainer) {
      currentLeftValue = -1;
      listElem.appendChild(firstListItem);
    }

    // The part that keeps it all going: animating the margin left value of the list.
    listElem.style.marginLeft = `${currentLeftValue}px`;
    currentLeftValue--;
  }
});