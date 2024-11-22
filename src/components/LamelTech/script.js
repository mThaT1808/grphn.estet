import $ from 'jquery';
import 'slick-slider';

const slider = $('.lamel-tech__slider');
const nextArrow = $('.arrow--lamel-tech.arrow--right');
const prevArrow = $('.arrow--lamel-tech.arrow--left');
const body = document.querySelector('.page-wrapper');
var slidesToShow = ((body.clientWidth - 25) / 300);
var notActiveSlides = document.querySelectorAll('.lamel-tech__slider .slick-slide');

const updateNotActive = () => {
    notActiveSlides = document.querySelectorAll('.lamel-tech__slider .slick-slide');

    notActiveSlides.forEach((slide) => {
        if  (!slide.classList.contains('slick-active')) {
            slide.style.opacity = '0.5';
        } else {
            slide.style.opacity = '1';
        }
    })
}

slider.on('setPosition', updateNotActive)

slider.slick({
    slidesToShow: slidesToShow,
    easing: "ease",
    infinite: false,
    arrows: false,
    adaptiveHeight: true
});


async function checkWidth () {

    if (body.clientWidth < 1366) {
        slidesToShow = ((body.clientWidth) / 300);
    }
    else if ((body.clientWidth < 1366)) {
        slidesToShow = ((1200 + (body.clientWidth - 1200) / 2) / 300)
    } else {
        slidesToShow = (1400 / 300);
    }

    slider.slick('unslick');
    slider.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        adaptiveHeight: true
    })
}

$(window).on('resize', checkWidth)


updateNotActive();
checkWidth();


nextArrow.on('click', function(e) {
    e.preventDefault();
    slider.slick('slickNext');
});
prevArrow.on('click', function(e) {
    e.preventDefault();
    slider.slick('slickPrev');
});

slider.on('afterChange', updateNotActive);

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