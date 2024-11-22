import $ from 'jquery';
import 'slick-slider';

const slider = $('.lamel-tech__slider');
const nextArrow = $('.arrow--lamel-tech.arrow--right');
const prevArrow = $('.arrow--lamel-tech.arrow--left');
const body = document.querySelector('.page-wrapper');
var slidesToShow = ((body.clientWidth - 25) / 300);

slider.slick({
    slidesToShow: slidesToShow,
    easing: "ease",
    infinite: false,
    arrows: false,
});

async function checkWidth () {
    if(body.clientWidth < 768) {
        slidesToShow = ((body.clientWidth - 25) / 300);
    }
    else if (body.clientWidth < 1366) {
        slidesToShow = ((body.clientWidth - 84) / 300);
    }
    else {
        slidesToShow = ((1200 + (1200 - body.clientWidth) / 2) / 300)
    }

    slider.slick('unslick');
    slider.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
    })
}

$(window).on('resize', checkWidth)

checkWidth();


nextArrow.on('click', function(e) {
    e.preventDefault();
    slider.slick('slickNext');
});
prevArrow.on('click', function(e) {
    e.preventDefault();
    slider.slick('slickPrev');
});

$(function () {
    function updateArrowOpacity(currentSlide, slideCount) {
        // Сброс стилей стрелок
        prevArrow.css('opacity', '1');
        nextArrow.css('opacity', '1');

        // Установка opacity для левой стрелки, если это первый слайд
        if (currentSlide === 0) {
            prevArrow.css('opacity', '0.2');
        }

        // Установка opacity для правой стрелки, если это последний слайд
        if (currentSlide === slideCount - 1) {
            nextArrow.css('opacity', '0.2');
        }
    }

    // Обновление стрелок после смены слайда
    slider.on('afterChange', function (event, slick, currentSlide) {
        updateArrowOpacity(currentSlide, slick.slideCount);
    });

    // Установка начального состояния стрелок при загрузке страницы
    updateArrowOpacity(0, $('.lamel-tech__slider .slick-slide').length);
});