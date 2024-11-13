import $ from 'jquery';
import 'slick-slider';

function changeTemplate() {
    if ($(window).width() < 768) {
        // console.log('перемещение в контейнер');
        $('.about .about__container .about__inner .about__main').prependTo('.about .about__container');
    } else {
        // console.log('перемещение в inner');
        $('.about .about__container .about__main').prependTo('.about__inner');
    }
}

function checkWidth() {
    const slider = $('.about__inner');
    if ($(window).width() < 768) {

        if (!slider.hasClass('slick-initialized')) {
            slider.slick({
                arrows: false,
                infinite: true,
                // autoplay: true,
                mobileFirst: true,
                easing: "ease-in-out",
                speed: 1000,
            });

            $('.arrow--left').on('click', function(e) {
                e.preventDefault();
                slider.slick('slickPrev');
            });

            $('.arrow--right').on('click', function(e) {
                e.preventDefault();
                slider.slick('slickNext');
            });

            $('.slick-slide').each(function() {
                if ($(this).find('.about__wrapper--empty').length || $(this).find('.about__wrapper--logo').length) {
                    $(this).css('display', 'none');
                }
            });
            slider.slick('setPosition');
        }
    } else {

        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
            slider.slick('setPosition');
        }

        $('.slick-slide').each(function() {
            if ($(this).find('.about__wrapper--empty').length || $(this).find('.about__wrapper--logo').length) {
                $(this).css('display', 'inline-block');
            }
        });
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


const dots = $('.about__dot');

dots.each(function() {
    const randomDelay = Math.random() * 2; 
    $(this).css('animation-delay', `${randomDelay}s`); 
});