window.onload = function() {
	window.addEventListener("scroll", function(e) {
		scrollEvent();
	});
}

var scrollEvent = function() {
	// 사용자 모니터 화면 높이 + 스크롤이 움직인 높이
	var scroll = window.innerHeight + window.scrollY;
	
    // 애니메이션 효과를 넣을 DOM 객체 배열
	var itemList = document.querySelectorAll("#contents .animatable");
	 
	Array.prototype.forEach.call(itemList, function(div){
		// 객체 위치와 높이 비교 : 화면에 표출되는 높이인지 체크
		if(div.offsetTop < scroll) {
			// 객체 animatable 클래스 지우고, animated 클래스 추가
			div.classList.remove("animatable");
			div.classList.add("animated");
		}
	});
}

var animateHTML = function() {
  var elems,
      windowHeight
  
  var init = function() {
    elems = document.getElementsByClassName("hidden");
    windowHeight = window.innerHeight;
    _addEventHandlers();
  }
  
  var _addEventHandlers = function() {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("resize", init)
  }
  var _checkPosition = function() {
    for ( var i = 0; i < elems.length; i++ ) {
      var posFromTop = elems[i].getBoundingClientRect().top;
      if ( posFromTop - windowHeight <= 0) { 
        elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
      }else{
        elems[i].className = elems[i].className.replace( "fade-in", "hidden" );
      }
    }    
  }
  
  return {
    init: init
  }
}

animateHTML().init();