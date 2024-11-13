import $ from 'jquery';
import 'slick-slider';

const slider = $('.sale-slider');

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