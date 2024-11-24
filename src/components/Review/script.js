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
const playIcon = document.querySelector('.icon--video-play');

playIcon.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
    } else {
        video.pause();
        playIcon.style.display = 'block';
    }
})

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        video.src = slide.dataset.video;
        video.scrollIntoView({behavior: "smooth", block: "center"})
        video.play();
        playIcon.style.display = 'none';

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
    if (video.paused) {
        video.play()
        playIcon.style.display = 'none';
    } else {
       video.pause(); 
       playIcon.style.display = 'block';
    }
     
})

prev.addEventListener('click', () => {
    $('.review__list').slick('slickPrev');
});

next.addEventListener('click', () => {
    $('.review__list').slick('slickNext');
})

$('.review__list').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    row: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: breakpoint.desktop - 1,
            settings: {
                infinite: true,
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
                infinite: false,
                slidesToShow: 4,
                adaptiveHeight: false,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true
            }
        }
    ]
});