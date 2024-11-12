import $ from 'jquery';
import 'slick-slider'

function checkWidth() {
    const slider = $('.slider--shop');
    if ($(window).width() < 768) {
        slider.slick({
            slidesToShow: 1.5,
            rows: 1,
            easing: "ease",
            infinite: false,
        });

        $('.arrow--shop-prev').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickPrev');
        });
        $('.arrow--shop-next').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickNext');
        });

    }else if ($(window).width() < 1366) {
            slider.slick({
                slidesToShow: 2,
                rows: 4,
                easing: "ease",
                infinite: false,
            });

            $('.arrow--shop-prev').on('click', function(e) {
                e.preventDefault();
                slider.slick('slickPrev');
            });
            $('.arrow--shop-next').on('click', function(e) {
                e.preventDefault();
                slider.slick('slickNext');
            });

    } else {
        slider.slick({
            easing: "ease",
            infinite: false,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            rows:1,
        });

        $('.arrow--shop-prev').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickPrev');
        });
        $('.arrow--shop-next').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickNext');
        });
    }
}

$(document).ready(function() {
    checkWidth();
});

$(window).on('resize', function() {
    checkWidth();
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