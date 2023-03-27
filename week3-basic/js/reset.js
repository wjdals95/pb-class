const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab_content");
const contents1 = document.querySelectorAll(".tab_contents")

tabs.forEach((tab, index) => {
  tab.addEventListener("mouseover", () => {
    contents[index].classList.add("show");
  
  });

  tab.addEventListener("mouseout", () => {
    contents[index].classList.remove("show");

  });
});

contents.forEach((content, index) => {
  content.addEventListener("mouseover", () => {
    contents[index].classList.add("show");
  });

  content.addEventListener("mouseout", () => {
    contents[index].classList.remove("show");

  });
});

//로그인 버튼 누를시 모달창 켜지기
const modal = document.getElementById("modal")

const btnModal = document.getElementById("btn_modal")
btnModal.addEventListener("click", e => {
    modal.style.display = "flex"
})
// x버튼 누를시 꺼지기
const closeBtn = modal.querySelector(".modal_close_area")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
})

//모달창 바깥 부분 누르면 꺼지기
modal.addEventListener("click", e => {
    if(e.target.classList.contains("modal_overlay")) {
        modal.style.display = "none"
    }
})

//모달창이 켜져있는 상태에서 esc누르면 꺼지기
window.addEventListener("keyup", e => {
    if(modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none"
    }
})

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });                            
  });
  
  document.querySelectorAll('.tab_content').forEach((tab_content) => io.observe(tab_content));