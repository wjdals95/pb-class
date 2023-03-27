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