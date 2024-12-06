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
const playIcon = document.querySelector('.icon-play');
const pauseIcon = document.querySelector('.icon-pause');
let isStarted = false;

playIcon.addEventListener('click', () => {
    isStarted = true;
    playIcon.style.display = 'none';
    video.scrollIntoView({behavior: "smooth", block: "center"});

    if (video.paused) {
        video.play();
        pauseIcon.style.display = 'none';
    } else {
        video.pause();
        pauseIcon.style.display = 'block';
    }
});

pauseIcon.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        pauseIcon.style.display = 'none';
    } else {
        video.pause();
        pauseIcon.style.display = 'block';
    }
});

video.addEventListener('mouseover', () => {
    if (isStarted && !video.paused) {
        pauseIcon.style.display = 'block';
        playIcon.style.display = 'none';
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

video.addEventListener('mouseout', (e) => {
    if (e.relatedTarget && !e.relatedTarget.classList.contains('icon')) {
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'none';
    }
});

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        isStarted = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'none';
        video.src = slide.dataset.video;
        video.scrollIntoView({behavior: "smooth", block: "center"});
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
    isStarted = true;
    playIcon.style.display = 'none';
    video.scrollIntoView({behavior: "smooth", block: "center"});
    if (video.paused) {
        video.play();
        pauseIcon.style.display = 'none';
    } else {
       video.pause();
       pauseIcon.style.display = 'block';
    }
})

prev.addEventListener('click', () => {
    isStarted = false;
    $('.review__list').slick('slickPrev');
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';
});

next.addEventListener('click', () => {
    isStarted = false;
    $('.review__list').slick('slickNext');
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';
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