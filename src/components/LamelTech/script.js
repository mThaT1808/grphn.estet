import $ from 'jquery';
import 'slick-slider';

const slider = $('.lamel-tech__slider');

slider.slick({
    slidesToShow: 1,
    easing: "ease",
    infinite: true,
    arrows: false,
});

$('.arrow--lamel-tech.arrow--right').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickNext');
});
$('.arrow--lamel-tech.arrow--left').on('click', function(e) {
    e.preventDefault();
    slider.slick('slickPrev');
});