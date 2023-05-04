$(function () {
  const defaultConfig = {
    megaMenu: ".megamenu",
    megaOpenButton: ".btn-megamenu",
    megaCloseButton: ".btn_close",
    responsiveMobile: 1024,
  };
  const config = {
    visualPaging: ".visual__paging",
    visualPagingMobile: ".visual__paging__mobile",
    ...defaultConfig,
  };
  const $window = $(window);
  const $btnMega = $(defaultConfig.megaOpenButton);
  const $btnMegaClose = $(defaultConfig.megaCloseButton);
  const $megaMenu = $(defaultConfig.megaMenu);
  const $mobileSize = defaultConfig.responsiveMobile;
  const $visualPagnation = $(config.visualPaging);
  const $visualPagnationMobile = $(config.visualPagingMobile);

  let visualPageName = [
    "OH월에도 할인",
    "엔진오일 런칭 혜택",
    "체험단 모집",
    "타이어펑크수리 무료",
    "토스페이 캐시백",
    "친구 초대 이벤트",
    "앱 설치 혜택",
  ];

  function init() {
    eventListens();
    visualSlide(".visual");
  }

  function eventListens() {
    // 모바일 메뉴 클릭 이벤트 핸들링
    $btnMega.on("click", megaOpen);
    $btnMegaClose.on("click", megaClose);

    //반응형 모바일 메뉴 리사이즈 이벤트 핸들링
    $window.on("resize", removeMobileNav);
  }

  function megaOpen() {
    $megaMenu.show();
  }

  function megaClose() {
    $megaMenu.hide();
  }

  //반응형 모바일메뉴 제어
  function removeMobileNav() {
    let windowWidth = $window.width();
    if (windowWidth > $mobileSize) {
      megaClose();
      $visualPagnation.show();
      $visualPagnationMobile.hide();
    } else {
      $visualPagnation.hide();
      $visualPagnationMobile.show();
    }
  }
  function visualSlide($target) {
    var swiper = new Swiper($target, {
      loop: true,
      pagination: {
        el: config.visualPaging,
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<button class="' +
            className +
            '">' +
            visualPageName[index] +
            "</button>"
          );
        },
      },
    });
    var swiperFraction = new Swiper($target, {
      pagination: {
        el: config.visualPagingMobile,
        type: "fraction",
        clickable: true,
      },
    });
    swiper.controller.control = swiperFraction;
  }

  init();
});
