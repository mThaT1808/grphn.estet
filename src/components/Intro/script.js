import $ from 'jquery';
import 'slick-slider';

const slider = $('.intro__slider')
const textSlider = $('.intro__text-slider')

slider.slick({
    slidesToShow: 1,
    easing: "ease",
    infinite: true,
    arrows: false,
    asNavFor: '.intro__text-slider'
});

textSlider.slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    fade: true,
    asNavFor: '.intro__slider'
})

$('.intro__button--right').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickNext');
    textSlider.slick('slickNext');
});
$('.intro__button--left').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickPrev');
    textSlider.slick('slickPrev');
});