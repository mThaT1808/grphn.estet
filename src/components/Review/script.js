import $ from 'jquery';
import 'slick-slider';

const arrows = document.querySelector('.review__arrow-container').children;
const slides = document.querySelectorAll('.review__item');
const video = document.querySelector('.review__video');
const prev = arrows[0];
const next = arrows[1];
const breakpoint = {
    tablet: 768,
    desktop: 1280
}

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        video.src = slide.dataset.video;
        video.play();

        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('review__item--active')) {
                slides[i].classList.remove('review__item--active');
                break;
            }
        }

        slide.classList.add('review__item--active');
    })
});

video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
})

prev.addEventListener('click', () => {
    $('.review__list').slick('slickPrev');
});

next.addEventListener('click', () => {
    $('.review__list').slick('slickNext');
})

$('.review__list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: breakpoint.desktop - 1,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
                rows: 2,
            }
        },
        {
            breakpoint: breakpoint.tablet - 1,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true   
            }
        }
    ]
});