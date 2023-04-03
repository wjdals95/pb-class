const tabs = document.querySelectorAll(".tab");
const tabHightlight = document.querySelectorAll(".tab a");
const contents = document.querySelectorAll(".tab_content");
const contents1 = document.querySelectorAll(".tab_contents");
const tabContents = document.querySelectorAll(".tab_content_box");

tabs.forEach((tab, index) => {
  tab.addEventListener("mouseover", () => {
    contents[index].classList.add("show");
    tabs[index].classList.add("tabActive");
    tabContents[index].classList.add("active1");
  });

  tab.addEventListener("mouseout", () => {
    contents[index].classList.remove("show");
    tabs[index].classList.remove("tabActive");
    tabContents[index].classList.remove("active1");
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

// 모달창
const modal = document.querySelector("#modal");
const btnModal = document.querySelector("#btn_modal");
const closeBtn = modal.querySelector(".modal_close_area");

// const btnFlex = modal.style.display = "flex"
window.addEventListener("click", (e) => {
  e.target == btnModal ? (modal.style.display = "flex") : "";

  e.target == closeBtn ? (modal.style.display = "none") : "";

  e.target == modal
    ? e.target.classList.contains("modal_overlay")
      ? (modal.style.display = "none")
      : ""
    : "";
});

//모달창이 켜져있는 상태에서 esc누르면 꺼지기
window.addEventListener("keyup", (e) => {
  modal.style.display === "flex" && e.key === "Escape"
    ? (modal.style.display = "none")
    : "";
});

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add("active")
      : entry.target.classList.remove("active");
  });
});

document
  .querySelectorAll(".tab_content")
  .forEach((tab_content) => io.observe(tab_content));
