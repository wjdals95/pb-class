(() => {
  const load = document.querySelector(".load");
  const html = document.querySelector("html");
  const $loadTop = document.querySelector(".load_top");
  let scrollY = 0; // window.scrollY 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; //현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
  const homeSpan1 = document.querySelectorAll(".home-span-section1 .home-span");
  const homeSpan2 = document.querySelectorAll(".home-span-section2 .home-span");
  const sceneInfo = [
    // 0 - home
    {
      scrollHeight: document.querySelector("#home").offsetHeight, //862,
      objs: {
        homeSection: document.querySelector("#home"),
      },
      values: {},
    },
    // 1 - aobut
    {
      scrollHeight: (aboutSectionHeight =
        document.querySelector("#about").offsetHeight), //1136,
      objs: {
        homeSection: document.querySelector("#about"),
      },
      values: {},
    },
    // 2 - project
    {
      scrollHeight: (portfolioSectionHeight =
        document.querySelector("#portfolio").offsetHeight), //2335,
      objs: {
        homeSection: document.querySelector("#portfolio"),
      },
      values: {},
    },
    // 3 - contact
    {
      scrollHeight: (contactSectionHeight =
        document.querySelector("#contact").offsetHeight), //862,
      objs: {
        homeSection: document.querySelector("#contact"),
      },
      values: {},
    },
  ];

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
    setTimeout(() => {
      mainLoad();
    }, 3300);
    setTimeout(() => {
      mainLoad2();
      homeBtn.style.opacity = "1";
    }, 3800);
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

  window.addEventListener("wheel", (e) => {
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
    totalScroll();
  };
  //Color
  const footerBtn = document.querySelector(".footer-btn");
  const footerBtn1 = document.querySelector(".footer-btn-1");
  const footerBtn2 = document.querySelector(".footer-btn-2");
  const footerBtn3 = document.querySelector(".footer-btn-3");
  const homeBtn = document.querySelector(".home-btn");
  const homeBtn1 = document.querySelector(".home-btn-1");
  const homeBtn2 = document.querySelector(".home-btn-2");
  const homeBtn3 = document.querySelector(".home-btn-3");

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
      footerBtn1.style.transform = "translate3d(0px, 3em, 0px)";
      footerBtn1.style.color = "rgb(193, 192, 182)";
      footerBtn2.style.transform = "translate3d(0px, -0, 0px)";
      footerBtn3.style.height = "0%";
    }
    if (
      e.target == homeBtn ||
      e.target == homeBtn1 ||
      e.target == homeBtn2 ||
      e.target == homeBtn3
    ) {
      homeBtn1.style.transform = "translate3d(0px, 0, 0px)";
      homeBtn1.style.color = "rgb(63, 59, 55)";
      homeBtn2.style.transform = "translate3d(0px, -3em, 0px)";
      homeBtn3.style.height = "100%";
    } else {
      homeBtn1.style.transform = "translate3d(0px, 3em, 0px)";
      homeBtn1.style.color = "rgb(193, 192, 182)";
      homeBtn2.style.transform = "translate3d(0px, 0, 0px)";
      homeBtn3.style.height = "0%";
    }
    randomColor();
  });

  //스크롤
  function totalScroll() {
    scrollY = window.scrollY;
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= scrollY) {
        currentScene = i;
        break;
      }
    }
    
    prevScrollHeight = 0;
    
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    if (scrollY > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
    }
    if (scrollY < prevScrollHeight) {
      currentScene--;
    }

    console.log(scrollY, currentScene);
  }
  
})();
