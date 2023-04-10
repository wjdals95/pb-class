document.addEventListener("click", (e) => {
  const darkButton = document.querySelector(".dark_button");
  const body = document.querySelector("body");

  const clickButtons = document.querySelectorAll(".click_button");
  const clickContent = document.querySelector(".click_contents");
  
  if (e.target == darkButton) {
    body.classList.toggle("active");
    if (body.classList.contains("active")) {
      darkButton.innerHTML = "Light";
    } else {
      darkButton.innerHTML = "Dark";
    }
  }

  const clickText = e.target.value;
 
    e.target = clickButtons ? clickContent.innerHTML = clickText : "";

});

document.addEventListener('scroll',() => {
    const scrollEvnet = document.querySelector('.scroll_box')

    const scrollOffset = Math.ceil(window.scrollY);

    console.log(scrollOffset);
    scrollEvnet.innerHTML = "현재 offsetTop:" + scrollOffset;
})