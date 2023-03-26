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
