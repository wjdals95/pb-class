//전역변수 사용을 회피하기 위해서 즉시실행 익명함수를 만든다.
//즉시실행 익명함수에서 전역변수를 설정하더라도 그 외부에서는 지역변수에 해당하므로 변수의 오남용을 회피할수있다.
(() => {
  const actions = {
    birdFlies(key) {
      if (key) {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(${window.innerWidth}px)`;
      } else {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(-100%)`;
      }
    },
    birdFlies2(key) {
      if (key) {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`;
      } else {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translateX(-100%)`;
      }
    },
  };

  const graphicElems = document.querySelectorAll(".graphic-item");
  const stepElems = document.querySelectorAll(".step");
  let currentItem = graphicElems[0]; //현재 활성화된(visible 클래스가 부은) graphic-item을 지정

  let ioIndex;
  const io = new IntersectionObserver((entries, observer) => {
    //처음엔 무자열로 찍히는데 index는 숫자로 관리하는게 편하므로 곱하기1을하여 숫자로 변경
    ioIndex = entries[0].target.dataset.index * 1;
  });

  //step과 graphic-item에 index부여하기
  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    // stepElems[i].setAttribute('data-index' , i)
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  function activate(action) {
    currentItem.classList.add("visible");
    if (action) {
      actions[action](true);
    }
  }
  function inactivate(action) {
    currentItem.classList.remove("visible");
    if (action) {
      actions[action](false);
    }
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    //step의 전체를 조건검색하고 출력되기때문에 비효율적이므로 intersectionObserver를 사용하여 화면에 보이는 step만 관리하게한다.
    // for(let i = 0; i<stepElems.length; i++){
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;

      boundingRect = step.getBoundingClientRect();

      //만일 step이 화면의 10%~80%일때 이벤트 발생)
      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        //visible클래스 삭제해주기
        inactivate(currentItem.dataset.action);

        currentItem = graphicElems[step.dataset.index];

        activate(currentItem.dataset.action);
      }
    }
  });
  activate();


  //새로고침하면 화면 상다으로 이동하게한다.
  //intersectionObserver를 사용하면 스크롤 양을 계산하는 것이 아니라 보고있는 화면객체를 기준으로 하기때문에
  //새로고침하면 원하는 결과값이 안나올수 있으므로 0,0으로 이동시켜준다.
  window.addEventListener('load',() => {
    setTimeout(() => scrollTo(0, 0), 100);
    
  })
})();
