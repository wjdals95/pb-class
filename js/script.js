(() => {
  const load = document.querySelector(".load");
  const html = document.querySelector("html");
  const $loadTop = document.querySelector(".load_top");
  let scrollY = 0; // window.scrollY 대신 쓸 변수
  let headerHeight = document.querySelector("header").offsetHeight;
  const screenHeight = screen.availHeight;
  const homeSpan1 = document.querySelectorAll(".home-span-section1 .home-span");
  const homeSpan2 = document.querySelectorAll(".home-span-section2 .home-span");
  // const sceneInfo = [
  //   // 0 - home
  //   {
  //     scrollHeight: document.querySelector("#home").offsetHeight, //862,
  //     objs: {
  //       homeSection: document.querySelector("#home"),
  //     },
  //     values: {},
  //   },
  //   // 1 - aobut
  //   {
  //     scrollHeight: document.querySelector("#about").offsetHeight, //1136,
  //     objs: {
  //       homeSection: document.querySelector("#about"),
  //     },
  //     values: {},
  //   },
  //   // 2 - project
  //   {
  //     scrollHeight: document.querySelector("#portfolio").offsetHeight, //2335,
  //     objs: {
  //       homeSection: document.querySelector("#portfolio"),
  //     },
  //     values: {},
  //   },
  //   // 3 - footer
  //   {
  //     scrollHeight: document.querySelector("#footer").offsetHeight, //862,
  //     objs: {
  //       homeSection: document.querySelector("#footer"),
  //     },
  //     values: {},
  //   },
  // ];


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
  const homeButton = document.querySelector(".home-btn");
  const logoBtn  = document.querySelector(".logo");
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

  //내비게이션
  for (let i = 0; i < navLinks.length; i++) {
    let sectionOffsetTop = sections[i].offsetTop;
    let sectionOffsetHeight = sections[i].offsetHeight;
    homeButton.addEventListener("click", () => {
      window.scrollTo(0, sections[1].offsetTop - headerHeight);
    });
    logoBtn.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    navLinks[i].addEventListener("click", () => {
      window.scrollTo(0, sections[i].offsetTop - headerHeight);
    });

    //첫 로딩시
    navLinks[0].classList.add("active");

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      const windowHeight = document.body.offsetHeight;
      // console.log(windowHeight);
      if (
        scrollY >= sectionOffsetTop - headerHeight &&
        scrollY < sectionOffsetTop + sectionOffsetHeight - headerHeight
      ) {
        navLinks[i].classList.add("active");
      } else {
        navLinks[i].classList.remove("active");
      }
    });
  }

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
  function contactScroll () {
    let scrollY = window.scrollY
    const footerTop = document.querySelector(".footer").offsetTop;
    const footerHeight = document.querySelector(".footer").offsetHeight;
    const footerTitle = document.querySelector(".contact-title");
    let scrollRatio = (scrollY + screenHeight - footerTop )* 30/ footerHeight;
    if(scrollY + screenHeight >= footerTop){
      footerTitle.style.transform = `translate3d(${20 - scrollRatio}%, 0, 0)`;
    }
  }
  function aboutScroll () {
    scrollY = window.scrollY;
    const aboutTop = document.querySelector('.about').offsetTop;
    const aboutHeight = document.querySelector(".about").offsetHeight;
    const aboutTitle = document.querySelector(".about-title");
    let scrollRatio = (scrollY + screenHeight - aboutTop )* 40/ aboutHeight;
    if(scrollY + screenHeight >= aboutTop){
      aboutTitle.style.transform = `translate3d(${20 - scrollRatio}%, 0, 0)`;
    }
  }
  window.addEventListener("scroll",() => {
    contactScroll()
    aboutScroll()
  })
  //  //스크롤
  //  function totalScroll() {
  //   scrollY = window.scrollY;
  //   let totalScrollHeight = 0;
  //   for (let i = 0; i < sceneInfo.length; i++) {
  //     totalScrollHeight += sceneInfo[i].scrollHeight;
  //     if (totalScrollHeight >= scrollY) {
  //       currentScene = i;
  //       break;
  //     }
  //   }

  //   const currentYOffset = yOffset - prevScrollHeight;
  //   const scrollHeight = sceneInfo[currentScene].scrollHeight;
  //   const scrollRatio = currentYOffset / scrollHeight;

  //   function calcValues(values, currentYOffset) {
  //     let rv;
  //     //현재 씬(스크롤섹션)에서 스크롤 된 범위를 비율로 구하기
  //   const currentYOffset = yOffset - prevScrollHeight;
  //     const scrollHeight = sceneInfo[currentScene].scrollHeight;
  //     const scrollRatio = currentYOffset / scrollHeight;
  
  //     if (values.length === 3) {
  //       // start ~ end 사이에 애니메이션 실행
  //       const partScrollStart = values[2].start * scrollHeight;
  //       const partScrollEnd = values[2].end * scrollHeight;
  //       const partScrollHeight = partScrollEnd - partScrollStart;
  //       if (
  //         currentYOffset >= partScrollStart &&
  //         currentYOffset <= partScrollEnd
  //       ) {
  //         rv =
  //           ((currentYOffset - partScrollStart) / partScrollHeight) *
  //             (values[1] - values[0]) +
  //           values[0];
  //       } else if (currentYOffset < partScrollStart) {
  //         rv = values[0];
  //       } else if (currentYOffset > partScrollEnd) {
  //         rv = values[1];
  //       }
  //     } else {
  //       rv = scrollRatio * (values[1] - values[0]) + values[0];
  //     }
  
  //     return rv;
  //   }

  //   prevScrollHeight = 0;

  //   for (let i = 0; i < currentScene; i++) {
  //     prevScrollHeight += sceneInfo[i].scrollHeight;
  //   }
  //   if (scrollY > prevScrollHeight + sceneInfo[currentScene].scrollHeight - headerHeight) {
  //     currentScene++;
  //   }
  //   if (scrollY < prevScrollHeight - headerHeight) {
  //     currentScene--;
  //   }

  //   console.log(scrollY, currentScene, prevScrollHeight );
  // }


  //FadeIn
{/* <section class="aboutPage fade fadeOut"></section>

  .fade {
    transition: opacity 0.7s ease-in;
  }
  
  .fadeOut { opacity: 0; }
  .fadeIn { opacity: 1; }

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace("fadeOut", "fadeIn");
    } else {
      // fade out observed elements that are not in view
      entry.target.classList.replace("fadeIn", "fadeOut");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll(".fade");
fadeElms.forEach((el) => observer.observe(el)); */}
})();
