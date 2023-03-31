const tabs = document.querySelectorAll(".tab");
const tabHightlight = document.querySelectorAll(".tab a");
const contents = document.querySelectorAll(".tab_content");
const contents1 = document.querySelectorAll(".tab_contents");

tabs.forEach((tab, index) => {
  tab.addEventListener("mouseover", () => {
    contents[index].classList.add("show");
    tabs[index].classList.add("tabActive");
  });

  tab.addEventListener("mouseout", () => {
    contents[index].classList.remove("show");
    tabs[index].classList.remove("tabActive");
  });
});

contents.forEach((content, index) => {
  content.addEventListener("mouseover", () => {
    contents[index].classList.add("show");
    tabs[index].classList.add("tabActive");
  });

  content.addEventListener("mouseout", () => {
    contents[index].classList.remove("show");
    tabs[index].classList.remove("tabActive");
  });
});

const modal = document.querySelector("#modal");
const btnModal = document.querySelector("#btn_modal");
const closeBtn = modal.querySelector(".modal_close_area");

// const btnFlex = modal.style.display = "flex"
window.addEventListener("click", (e) => {

  if (e.target == btnModal) {
    modal.style.display = "flex";
  }
  // e.target == btnModal ? btnFlex : ""  ;

  if (e.target == closeBtn) {
    modal.style.display = "none";
  }
  // e.target == btnModal ? modal.style.display = "none": "" ;
  
  if (e.target == modal) {
    if (e.target.classList.contains("modal_overlay")) {
      modal.style.display = "none";
    }
  }
});

//모달창이 켜져있는 상태에서 esc누르면 꺼지기
window.addEventListener("keyup", (e) => {
  if (modal.style.display === "flex" && e.key === "Escape") {
    modal.style.display = "none";
  }
});

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

document
  .querySelectorAll(".tab_content")
  .forEach((tab_content) => io.observe(tab_content));
