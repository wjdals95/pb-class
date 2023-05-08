(() => {
  const load = document.querySelector(".load");
  const html = document.querySelector('html');
  const $loadTop = document.querySelector(".load_top");

  html.style.overflow = "hidden";

  function loadingTop() {
    setTimeout(() => {
      $loadTop.classList.add("visible");
    }, 1000);
  }

  window.addEventListener("load", () => {
    scrollTo(0, 0);
    setTimeout(() => {
      load.classList.add("hide");
      html.style.overflow = "auto";
    }, 3000);
    loadingTop();
  });

  //스와이퍼
  var swiper = new Swiper(".swiper-container", {
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
  
  //내비게이션
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
  
  //컨택섹션 텍스트
  // let didScroll = false;
  // let paralaxTitles = document.querySelectorAll('.paralax-title');
  
  // const scrollInProgress = () => {
  //   didScroll = true
  // }
  
  // const raf = () => {
  //   if(didScroll) {
  //     paralaxTitles.forEach((element, index) => {
  //       element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
  //     })
  //     didScroll = false;
  //   }
  //   requestAnimationFrame(raf);
  // }
  
  
  // // requestAnimationFrame(raf);
  // window.addEventListener('scroll', scrollInProgress)
  
  //퀵메뉴
  window.addEventListener('click', (e) =>{
    
    let goToTop = document.querySelector('.menu__item-link')
    e.target == goToTop && window.scrollTo(0,0);
  })
  
 
})();


