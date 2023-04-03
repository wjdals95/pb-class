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
  console.log(popularHeight)

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




// var scrollEvent = function () {
//   // 사용자 모니터 화면 높이 + 스크롤이 움직인 높이
//   var scroll = window.innerHeight + window.scrollY;

//   // 애니메이션 효과를 넣을 DOM 객체 배열
//   var itemList = document.querySelectorAll("#contents .animatable");

//   Array.prototype.forEach.call(itemList, function (div) {
//     // 객체 위치와 높이 비교 : 화면에 표출되는 높이인지 체크
//     if (div.offsetTop < scroll) {
//       // 객체 animatable 클래스 지우고, animated 클래스 추가
//       div.classList.remove("animatable");
//       div.classList.add("animated");
//     }
//   });
// };

// var animateHTML = function () {
//   var elems, windowHeight;

//   var init = function () {
//     elems = document.getElementsByClassName("hidden");
//     windowHeight = window.innerHeight;
//     _addEventHandlers();
//   };

//   var _addEventHandlers = function () {
//     window.addEventListener("scroll", _checkPosition);
//     window.addEventListener("resize", init);
//   };
//   var _checkPosition = function () {
//     for (var i = 0; i < elems.length; i++) {
//       var posFromTop = elems[i].getBoundingClientRect().top;
//       if (posFromTop - windowHeight <= 0) {
//         elems[i].className = elems[i].className.replace("hidden", "fade-in");
//       } else {
//         elems[i].className = elems[i].className.replace("fade-in", "hidden");
//       }
//     }
//   };

//   return {
//     init: init,
//   };
// };

// animateHTML().init();
