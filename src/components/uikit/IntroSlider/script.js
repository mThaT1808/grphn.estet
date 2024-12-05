import $ from 'jquery';
import 'slick-slider';

const slider = $('.intro-slider__slider');
const textSlider = $('.intro-slider__text-slider');

slider.slick({
    slidesToShow: 1,
    easing: "ease",
    infinite: true,
    arrows: false,
    asNavFor: '.intro-slider__text-slider'
});

textSlider.slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    fade: true,
    asNavFor: '.intro-slider__slider'
})

$('.intro-slider__button--right').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickNext');
    textSlider.slick('slickNext');
});
$('.intro-slider__button--left').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickPrev');
    textSlider.slick('slickPrev');
});