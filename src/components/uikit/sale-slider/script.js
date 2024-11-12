import $ from 'jquery';
import 'slick-slider';

function checkWidth() {
    const slider = $('.sale-slider');
    if ($(window).width() < 768) {

        slider.slick({
            slidesToShow: 1,
            easing: "ease",
            infinite: true,
            arrows: false,
        });

        $('.arrow--right').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickNext');
        });
        $('.arrow--sale-slider.arrow--left').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickPrev');
        });
    } else {

        slider.slick({
            easing: "ease",
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        $('.arrow--right.arrow--right').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickNext');
        });
        $('.arrow--sale-slider.arrow--left').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickPrev');
        });
    }
}

$(document).ready(function() {
    checkWidth();
});

$(window).on('resize', function() {
    checkWidth();
});