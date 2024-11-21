import $ from 'jquery';
import 'slick-slider';

$(function(){
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

$(function () {
    function updateArrowOpacity(currentSlide, slideCount) {
        $('.arrow-info--prev').css('opacity', '1');
        $('.arrow-info--next').css('opacity', '1');

        if (currentSlide === 0) {
            $('.arrow-info--prev').css('opacity', '0.2');
        }

        if (currentSlide === slideCount - 1) {
            $('.arrow-info--next').css('opacity', '0.2');
        }
    }

    $('.news__slider').on('afterChange', function (event, slick, currentSlide) {
        updateArrowOpacity(currentSlide, slick.slideCount);
    });

    updateArrowOpacity(0, $('.news__slider .slick-slide').length);
});