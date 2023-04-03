window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);

  
  const fadeIn = document.querySelectorAll('.fadein')
  
  //스크롤 할 수 있는 양
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  //현재 스크롤 양
  const scrolled = window.scrollY;
  //창틀을 제거한 브라우저 높이
  const windowHeight = window.innerHeight;
  //해당 섹션이 브라우저 화면에서의 지점
  const popularTop = document.querySelector('#popular').getBoundingClientRect().top;
  //해당 섹션의 높이
  const popularHeight = document.querySelector('#popular').getBoundingClientRect().height;
  console.log(scrolled)

  for(i = 0; i<fadeIn.length; i++){

    const fadePercent = fadeIn[i].dataset.fade;
    let fadeTop = fadeIn[i].getBoundingClientRect().top;

    if(fadeTop < (windowHeight * fadePercent)){
      fadeIn[i].classList.add('active')
  
    }
    else{
      fadeIn[i].classList.remove('active')
    }
  }
});
