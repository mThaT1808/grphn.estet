import $ from 'jquery';
import 'slick-slider';

const slider = $('.slider--shop');
var slidesToShow = 1.5;
var slidesToScroll = 1;
var rows = 1;
var easing = "ease";
var infinite = false;
var arrows = false;

slider.slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    rows: 1,
    easing: "ease",
    infinite: false,
    arrows: false,
});

function checkWidth() {
    slidesToShow = 1.5;
    slidesToScroll = 1;
    rows = 1;
    easing = "ease";
    infinite = false;
    arrows = false;

    if ($(window).width() < 425) {
        slidesToShow= 1.5;
        slidesToScroll= 1;
        rows= 1;
        infinite= false;
        arrows= false;
    } else if ($(window).width() < 768) {
        slidesToShow= 2.5;
        slidesToScroll= 1;
        rows= 1;
        easing= "ease";
        infinite= false;
        arrows= false;

    }else if ($(window).width() < 1024) {
        slidesToShow= 2;
        rows= 4;
        easing= "ease";
        infinite= false;
        arrows= false;

    }else if ($(window).width() < 1280) {
        slidesToShow= 3;
        rows= 4;
        easing= "ease";
        infinite= false;
        arrows= false;

    } else {
        easing= "ease";
        infinite= false;
        slidesToShow= 4.5;
        slidesToScroll= 1;
        rows=1;
        arrows= false;
    }

    slider.slick('unslick');
    slider.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        rows: rows,
        easing: easing,
        infinite: infinite,
        arrows: arrows,
    });
}

checkWidth();

$(window).on('resize', checkWidth);

$('.arrow--shop-prev').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickPrev');
});
$('.arrow--shop-next').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickNext');
});

$(function () {
    function updateArrowOpacity(currentSlide, slideCount) {
        // Сброс стилей стрелок
        $('.arrow--shop-prev').css('opacity', '1');
        $('.arrow--shop-next').css('opacity', '1');

        // Установка opacity для левой стрелки, если это первый слайд
        if (currentSlide === 0) {
            $('.arrow--shop-prev').css('opacity', '0.2');
        }

        // Установка opacity для правой стрелки, если это последний слайд
        if (currentSlide === slideCount - 1) {
            $('.arrow--shop-next').css('opacity', '0.2');
        }
    }

    // Обновление стрелок после смены слайда
    $('.slider--shop').on('afterChange', function (event, slick, currentSlide) {
        updateArrowOpacity(currentSlide, slick.slideCount);
    });

    // Установка начального состояния стрелок при загрузке страницы
    updateArrowOpacity(0, $('.slider--shop .slick-slide').length);
});