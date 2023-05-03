$(function() {
    const $btnMega = $(".btn-megamenu");
    const $megaMenu = $('.megamenu');
    const $btnMegaClose = $('.btn_close')

    //모바일메뉴
    function mega (){
        $btnMega.on('click', megaOpen);
        $btnMegaClose.on('click', megaClose);
    }
    function megaOpen (){
        $megaMenu.show();
    }
    function megaClose(){
        $megaMenu.hide();
    }
    mega();

    //반응형 모바일메뉴 제어
    function removeMobileNav () {
        $(window).on('resize', resizeMobile)
    };
    function resizeMobile() {
        let $windowWidth = $(window).width();
        if($windowWidth > 1024){
            megaClose();
        }
    }
    removeMobileNav();
});