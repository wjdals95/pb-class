(() => {
  const load = document.querySelector(".load");
  const html = document.querySelector("html");
  const $loadTop = document.querySelector(".load_top");
  const homeSpan1 = document.querySelectorAll(".home-span-section1 .home-span");
  const homeSpan2 = document.querySelectorAll(".home-span-section2 .home-span");

  html.style.overflow = "hidden";

  //로딩화면
  function loadingTop() {
    setTimeout(() => {
      $loadTop.classList.add("visible");
    }, 1000);
  }
  //메인화면
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  async function mainLoad() {
    for (let i = 0; i < homeSpan1.length; i++) {
      homeSpan1[i].classList.add("home-animation");
      await timer(100);
    }
  }

  async function mainLoad2() {
    for (let i = 0; i < homeSpan2.length; i++) {
      homeSpan2[i].classList.add("home-animation");
      await timer(100);
    }
  }

  window.addEventListener("load", () => {
    scrollTo(0, 0);
    loadingTop();
    setTimeout(() => {
      load.classList.add("hide");
      html.style.overflow = "auto";
    }, 3000);
    setTimeout(() =>{
      mainLoad()
    },3300);
    setTimeout(() =>{
      mainLoad2()
    },3800)
  });

  //스와이퍼
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //내비게이션
  const menuIcon = document.querySelector("#menu_icon");
  const navBar = document.querySelector(".navbar");
  const navBg = document.querySelector(".nav_bg");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  const quickMenu = document.querySelector(".quickmenu");

  menuIcon.addEventListener("click", (e) => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
    navBg.classList.toggle("active");
  });

  window.addEventListener("mousewheel", (e) => {
    //퀵메뉴
    let currentTop = window.scrollY;
    const windowHeight = document.body.clientHeight;

    e.deltaY > 0 && windowHeight * 0.2 <= currentTop
      ? (quickMenu.style.opacity = "1")
      : (quickMenu.style.opacity = "0");
  });

  //퀵메뉴
  quickMenu.addEventListener("click", () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  });

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      //내비게이션
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
  //Color
  const footerBtn = document.querySelector(".footer-btn");
  const footerBtn1 = document.querySelector(".footer-btn-1");
  const footerBtn2 = document.querySelector(".footer-btn-2");
  const footerBtn3 = document.querySelector(".footer-btn-3");
  const footerSpan = document.querySelectorAll(".footer-span");
  const homeSpan = document.querySelectorAll(".home-span");
  const colorRandom = ["#DEDDCF", "#D6AE5D", "#3F3B37"];

  function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
  }

  function randomColor() {
    footerSpan.forEach((content, index) => {
      content.addEventListener("mouseover", () => {
        footerSpan[index].style.color = `${randomItem(colorRandom)}`;
      });
      content.addEventListener("mouseout", () => {
        setTimeout(() => {
          footerSpan[index].style.color = "inherit";
        }, 3000);
      });
    });
    homeSpan.forEach((elem, index) => {
      elem.addEventListener("mouseover", () => {
        homeSpan[index].style.color = `${randomItem(colorRandom)}`;
      });
      elem.addEventListener("mouseout", () => {
        setTimeout(() => {
          homeSpan[index].style.color = "inherit";
        }, 3000);
      });
    });
  }

  window.addEventListener("mouseover", (e) => {
    if (
      e.target == footerBtn ||
      e.target == footerBtn1 ||
      e.target == footerBtn2 ||
      e.target == footerBtn3
    ) {
      footerBtn1.style.transform = "translate3d(0px, 0, 0px)";
      footerBtn1.style.color = "rgb(63, 59, 55)";
      footerBtn2.style.transform = "translate3d(0px, -3em, 0px)";
      footerBtn3.style.height = "100%";
    } else {
      footerBtn1.style.transform = "translate3d(0px, -3em, 0px)";
      footerBtn1.style.color = "rgb(193, 192, 182)";
      footerBtn2.style.transform = "translate3d(0px, -0, 0px)";
      footerBtn3.style.height = "0%";
    }
    randomColor();
  });

  //컨택 섹션 텍스트
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
})();
