(() => {
  const load = document.querySelector(".load");
  const html = document.querySelector("html");
  const $loadTop = document.querySelector(".load_top");
  let scrollY = 0; // window.scrollY 대신 쓸 변수
  let headerHeight = document.querySelector("header").offsetHeight;
  const screenHeight = screen.availHeight;
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
  const logoBtn = document.querySelector(".logo");
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
  //textSCroll
  function contactScroll() {
    let scrollY = window.scrollY;
    const footerTop = document.querySelector(".footer").offsetTop;
    const footerHeight = document.querySelector(".footer").offsetHeight;
    const footerTitle = document.querySelector(".contact-title");
    let scrollRatio =
      ((scrollY + screenHeight - footerTop) * 30) / footerHeight;
    if (scrollY + screenHeight >= footerTop) {
      footerTitle.style.transform = `translate3d(${20 - scrollRatio}%, 0, 0)`;
    }
  }
  function aboutScroll() {
    scrollY = window.scrollY;
    const aboutTop = document.querySelector(".about").offsetTop;
    const aboutHeight = document.querySelector(".about").offsetHeight;
    const aboutTitle = document.querySelector(".about-title");
    let scrollRatio = ((scrollY + screenHeight - aboutTop) * 40) / aboutHeight;
    if (scrollY + screenHeight >= aboutTop) {
      aboutTitle.style.transform = `translate3d(${20 - scrollRatio}%, 0, 0)`;
    }
  }
  //about interactive(getBoundingClientRect())
  function aboutScrollEvent() {
    const aboutTop = document
      .querySelector("#about")
      .getBoundingClientRect().top;
    const languageTop = document.querySelectorAll(
      ".skill .language li .skill-top"
    );
    const languageBottom = document.querySelectorAll(
      ".skill .language li .skill-bottom"
    );

    for (let i = 0; i < languageTop.length; i++) {
      aboutTop >= -screenHeight * 0.8 && aboutTop <= screenHeight * 0.15
        ? (languageTop[0].style.transform = "scaleY(1)")
        : (languageTop[0].style.transform = "scaleY(0)");

      aboutTop >= -screenHeight * 0.8 && aboutTop <= screenHeight * 0.05
        ? (languageTop[1].style.transform = "scaleY(1)")
        : (languageTop[1].style.transform = "scaleY(0)");

      aboutTop >= -screenHeight * 0.8 && aboutTop <= 0
        ? (languageTop[2].style.transform = "scaleY(1)")
        : (languageTop[2].style.transform = "scaleY(0)");
    }
    for (let i = 0; i < languageBottom.length; i++) {
      aboutTop >= -screenHeight * 0.7 && aboutTop <= -screenHeight * 0.1
        ? (languageBottom[i].style.opacity = "1")
        : (languageBottom[i].style.opacity = "0");
    }
  }
  async function strengthScroll() {
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));

    const aboutTop = document
      .querySelector("#about")
      .getBoundingClientRect().top;

    const strengthLi = document.querySelectorAll(".strength ul li");

    for (let i = 0; i < strengthLi.length; i++) {
      if (aboutTop >= -screenHeight * 1.15 && aboutTop <= -screenHeight * 0.5) {
        strengthLi[i].style.opacity = "1";
        await timer(100);
      } else {
        strengthLi[i].style.opacity = "0";
        await timer(0);
      }
    }
  }
  function footerScroll() {
    const footerTop = document
      .querySelector("#footer")
      .getBoundingClientRect().top;
    const footerText = document.querySelector(".footer-colored");
    const footerBtn = document.querySelector(".footer-btn");

    if (footerTop <= 0) {
      footerText.style.transform = "scaleY(1)";
      footerBtn.style.opacity = "1";
    } else {
      footerText.style.transform = "scaleY(0)";
      footerBtn.style.opacity = "0";
    }
  }

  window.addEventListener("scroll", () => {
    contactScroll();
    aboutScroll();
    aboutScrollEvent();
    strengthScroll();
    footerScroll();
  });
  //FadeIn
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
  fadeElms.forEach((el) => observer.observe(el));

  //fadeUp
  const observerOptions1 = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };
  function observerCallback1(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // fade in observed elements that are in view
        entry.target.classList.replace("fadeUpOut", "fadeUpIn");
      } else {
        // fade out observed elements that are not in view
        entry.target.classList.replace("fadeUpIn", "fadeUpOut");
      }
    });
  }

  const observer1 = new IntersectionObserver(
    observerCallback1,
    observerOptions1
  );

  const fadeElms1 = document.querySelectorAll(".fadeUp");
  fadeElms1.forEach((el) => observer1.observe(el));
})();
