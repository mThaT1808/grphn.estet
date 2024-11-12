import $ from 'jquery';
import 'slick-slider';

function checkWidth() {
    const slider = $('.news__slider');
    if ($(window).width() < 768) {

        slider.slick({
            slidesToShow: 2,
            easing: "ease",
            infinite: false,
        });

        $('.arrow--info-prev').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickPrev');
        });
        $('.arrow--info-next').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickNext');
        });
    } else {

        slider.slick({
            easing: "ease",
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows:2,
        });

        $('.arrow--info-prev').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickPrev');
        });
        $('.arrow--info-next').on('click', function(e) {
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
