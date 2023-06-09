var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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
    threshold: 0.1,
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
  
  const observer1 = new IntersectionObserver(observerCallback1, observerOptions1);
  
  const fadeElms1 = document.querySelectorAll(".fadeUp");
  fadeElms1.forEach((el) => observer1.observe(el));