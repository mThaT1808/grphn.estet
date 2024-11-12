import $ from 'jquery';
import 'slick-slider';

function changeTemplate() {
    if ($(window).width() < 768) {
        console.log('перемещение в контейнер');
        $('.about .about__container .about__inner .about__main').prependTo('.about .about__container');
    } else {
        console.log('перемещение в inner');
        $('.about .about__container .about__main').prependTo('.about__inner');
    }
}

function checkWidth() {
    const slider = $('.about__inner');
    if ($(window).width() < 768) {

        if (!slider.hasClass('slick-initialized')) {
            slider.slick({
                arrows: false,
                autoplay: true,
                mobileFirst: true,
                easing: "ease-in-out",
                speed: 1000,
            });

            $('.arrow--prev').on('click', function(e) {
                e.preventDefault();
                slider.slick('slickPrev');
            });

            $('.arrow--next').on('click', function(e) {
                e.preventDefault();
                slider.slick('slickNext');
            });

            // slider.slick('slickRemove', 2, true);
            slider.slick('setPosition');
        }
    } else {

        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
            // slider.slick('slickAdd','<div class="about__wrapper about__wrapper--empty"><picture class="about__image-box about__image-box--empty"><source srcset="/images/about/empty-tablet.webp" type="image/webp"><img class="about__image about__image--empty" src="/images/about/empty-tablet.jpg" alt=""></picture></div>', 2);
            slider.slick('setPosition');
        }
    }
}

$(document).ready(function() {
    changeTemplate();
    checkWidth();
});

$(window).on('resize', function() {
    changeTemplate();
    checkWidth();
});
