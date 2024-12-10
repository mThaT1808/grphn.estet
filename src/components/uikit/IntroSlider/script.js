import $ from 'jquery';
import 'slick-slider';

const slider = $('.intro-slider__slider');

slider.slick({
    slidesToShow: 1,
    easing: "ease",
    infinite: true,
    arrows: false,
    fade: true
});

$('.intro-slider__button--right').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickNext');
});
$('.intro-slider__button--left').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickPrev');
});