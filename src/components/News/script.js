import $ from 'jquery';
import 'slick-slider';

$(document).ready(function(){
    const slider = $('.news__slider');

        slider.slick({
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 2,
            infinite: false,
            easing: "ease",
            responsive:[{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    rows: 1,
                }
            }]
        });

        $('.arrow-info--prev').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickPrev');
        });
        $('.arrow-info--next').on('click', function(e) {
            e.preventDefault();
            slider.slick('slickNext');
        });
});