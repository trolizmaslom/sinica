function autocompleteInit(){
    var input = $( "#search" );
    if(input.length > 0){
        input.autocomplete({
            source: availableTags,
            classes: {
                "ui-autocomplete": "search-style"
            }
        });
    }
}
function loginClick(){
    var butt = $('.cabinet__login a');
    var menu = $('.cabinet__menu-wrap');
    if(butt.length > 0){
        butt.click(function (e) {
            e.preventDefault();
            butt.toggleClass('active');
            if(butt.hasClass('active')){
                menu.stop().slideDown(100);
            }else{
                menu.stop().slideUp(100);
            }
        });

    }
}
function leftMenu(){
    var butt = $('.header__butter-button');
    var close = $('.left-menu__close button');
    var menu = $('.left-menu');
    if(butt.length > 0){
        butt.click(function (e) {
            e.preventDefault();
            butt.toggleClass('active');
            if(butt.hasClass('active')){
                menu.addClass('open');
            }else{
                menu.removeClass('open');
            }
        });
        close.click(function (e) {
            e.preventDefault();
            butt.removeClass('active');
            menu.removeClass('open');
        })
    }
}
function slideInit() {
    var slider = $('.top-slider__wrap');
    if(slider.length > 0){
        slider.slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
}
function paginator(){
    var area = $('.paginator__area');
    var pin = $('.paginator__pin');
    if(area.length > 0){
        var slides = $('.top-slider__slide-wrap').length;
        var width = area.width() - 22;
        var step = parseInt(width / slides);
        var lastX = step - step/2;
        pin.css('left', lastX);
        pin = {};
        var drag = false;
        var downX;
        function onMouseDown(e) {
            if (e.which != 1) return;
            if (!$(e.target).hasClass('paginator__pin')) return;
            downX = e.pageX;
            pin = $('.paginator__pin');
            drag = true;
            return false;
        }
        function onMouseMove(e) {
            if (!pin) return;
            if (drag){
                var moveX = e.pageX - downX;
                var current = lastX + moveX;
                pin.css('left', current);
                if(current < 10) {
                    pin.css('left', 10);
                    stopDrag();
                }else if(current > width) {
                    pin.css('left', width);
                    stopDrag();
                }
            }
            return false;
        }
        function onMouseUp(e) {
            stopDrag();
        }
        function stopDrag() {
            pin = {};
            drag = false;
            lastX = parseInt($('.paginator__pin').css('left'));
            stopPin();
        }
        function stopPin() {
            var cur = parseInt(lastX / step);
            var set = cur*step + step/2;
            if (set >= width){
                set = width - step/2;
            }
            $('.paginator__pin').css('left', set);
            lastX = parseInt($('.paginator__pin').css('left'));
            $('.top-slider__wrap').slick('slickGoTo',cur);
        }
        document.onmousemove = onMouseMove;
        document.onmouseup = onMouseUp;
        document.onmousedown = onMouseDown;
        area.click(function (e) {
            var x = e.offsetX == undefined ? e.layerX : e.offsetX;
            var cur = parseInt(x / step);
            var set = cur*step + step/2;
            if (set >= width){
                set = width - step/2;
            }
            $('.paginator__pin').css('left', set);
            lastX = parseInt($('.paginator__pin').css('left'));
            $('.top-slider__wrap').slick('slickGoTo',cur);
        });

    }
}
function slideActualInit() {
    var slider = $('.actual__slider');
    if(slider.length > 0){
        slider.slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500
        });
    }
}
$(document).ready(function(){
    autocompleteInit();
    loginClick();
    leftMenu();
    slideInit();
    paginator();
    slideActualInit();
});