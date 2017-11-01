function autocompleteInit(){
    var input = $( "#search" );
    if(input.length > 0){
        input.autocomplete({
            source: availableTags,
            classes: {
                "ui-autocomplete": "search-style"
            }
        });
        input.focus(function () {
            $('.header__search').addClass('focus');
        });
        input.blur(function () {
            $('.header__search').removeClass('focus');
        });
    }
}
function loginClick(){
    var butt = $('.cabinet__login>a');
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
function logRegClick(){
    var butt = $('.login-pop>a');
    var menu = $('.login-pop__menu-wrap');
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
//menuMob
var menu = $('.left-menu');
var butt = $('.header__butter-button');
function leftMenu(){
    var close = $('.left-menu__close button');
    var layer = $('.js-layer-close');
    var body = $('body');
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
        close.click(closeMenuMob)
        layer.click(closeMenuMob)
    }
}
function closeMenuMob(e){
    e.preventDefault();
    butt.removeClass('active');
    menu.removeClass('open');
}
//menuMob end
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
        var width = area.width();
        var step = parseInt(width / slides);
        var lastX = 15;
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
                    pin.css('left', 15);
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
            if (set >= width || (cur+1) >= slides) set = width - 36;
            if (cur == 0) set=15;
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
            if (set >= width || (cur+1) >= slides) set = width - 36;
            if (cur == 0) set=15;
            $('.paginator__pin').css('left', set);
            lastX = parseInt($('.paginator__pin').css('left'));
            $('.top-slider__wrap').slick('slickGoTo',cur);
        });
        $('.top-slider__wrap').on('afterChange', function(event, slick, currentSlide, nextSlide){
            var set = slick.currentSlide * step + step/2;
            if (set >= width || (slick.currentSlide+1) >= slides) set = width - 36;
            if (slick.currentSlide == 0) set=15;
            $('.paginator__pin').css('left', set);
            lastX = parseInt($('.paginator__pin').css('left'));
        });

    }
}
function slideActualInit() {
    var slider = $('.actual__slide');
        
    if(slider.length > 0){
        slider.slick({
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1116,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    
}
function slideRecomendlInit() {
    var slide2 = $('.recomend__slider-wrap');
    if(slide2.length > 0){ 
        slide2.slick({
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1116,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
}
function placeholder(){
    var ph = $('input + .placeholder');
    if(ph.length > 0){
        ph.each(function () {
            var input = $(this).prev('input');
            var that = $(this);
            input.blur(function (){
                if($(this).val().length > 0){
                    that.addClass('focus');
                }else{
                    that.removeClass('focus');
                }
            });
        });
    }
}
function stylerForm(){
    $('.jq-selectbox').styler();
}
function inputNumber() {
    $(document).on('click', '.js-number-minus', function () {
        var val = getVal($(this));
        val--;
        val = val < 1 ? 1 : val;
        $(this).closest('.js-input-number').find('input').val(val);
    });
    $(document).on('click', '.js-number-plus', function () {
        var val = getVal($(this));
        val++;
        $(this).closest('.js-input-number').find('input').val(val);
    });
    function getVal(butt) {
        var val =  parseInt(butt.closest('.js-input-number').find('input').val());
        val = (typeof val == "number" && !isNaN(val)) ? val : 0;
        return val;
    }
    $(document).on('keypress', '.js-input-number', function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false;
        return true;
    })
    $(document).on('keypress', 'input[name$="[price]"]', function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false;
        return true;
    });
}
$('input.recuired').on('focus', function(){
    $(this).closest('dd').find('.basket__inputs-text').css('display', 'none');
    $("input.val-phone").mask("+9 (99) 99-99-999");
  });
$('input.recuired').on('focusout', function(){
    var content = $(this).val();
    if(content.length == 0){
        $(this).closest('dd').find('.basket__inputs-text').css('display', 'block');
    }
})
$('input.val-phone').on('keyup keypress', function(e) {
    if (e.keyCode == 8 || e.keyCode == 46) {}
    else
    {
        var letters='1234567890';
        return (letters.indexOf(String.fromCharCode(e.which))!=-1);
    }
});
var tabsCange = (function (){
    var $btn = $('.js-tab');
    var $tabBody = $(".js-tab-container");
    var $tabItem = $(".js-tab-item");

    $tabItem.eq(0).addClass('active');
    $btn.eq(0).addClass('active');


    $btn.on("click", function(e){

        e.preventDefault();
        $tabItem.removeClass("active");

        var $this = $(this);
        var $target = $this.attr("href");

        if( $this.hasClass('active')){
            $this.toggleClass("active");
        }else{
            $btn.removeClass('active');
            $this.addClass('active');
        }

        if($btn.hasClass('active')){
            $tabBody.find($target).addClass("active");
        }

    });

})();
function cutText(){
    var lenDescr = 82;
    var descr = $('.news__item__text');
    var lenDescrMain = 190;
    var descrMain = $('.news__banner__text');
    if(descr){
        descr.each(function(){
            var descrText = $(this).text();
            var descrTextLenght = descrText.length;
            if(descrTextLenght > lenDescr ){
                descrText = descrText.substr(0, lenDescr);
                descrText = descrText.replace(/\w+$/, '');
                descrText += '...';
                $(this).html(descrText);
            }
        })
    }
    if(descrMain){
        descrMain.each(function(){
            var descrText = $(this).text();
            var descrTextLenght = descrText.length;
            if(descrTextLenght > lenDescrMain ){
                descrText = descrText.substr(0, lenDescrMain);
                descrText = descrText.replace(/\w+$/, '');
                descrText += '...';
                $(this).html(descrText);
            }
        })
    }
}
$(window).on("load",function(){
    cutText();
  $(".js-custom-scroll").mCustomScrollbar({
    "theme" : "dark-2"
    });
  $(".js-chat-scroll").mCustomScrollbar({
    "theme" : "dark-3"
    });
  $(".js-booking-scroll").mCustomScrollbar({
    "theme" : "dark-2"
    });
});
$(document).ready(function(){
    slideRecomendlInit()
    autocompleteInit();
    loginClick();
    logRegClick();
    leftMenu();
    slideInit();
    paginator();
    slideActualInit();
    placeholder();
    stylerForm();
    inputNumber();
});