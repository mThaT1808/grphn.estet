import $ from 'jquery';
import 'slick-slider';

const buttons = document.querySelector('.preview__button-container').children;
const prevButton = buttons[0];
const nextButton = buttons[1];
const videos = document.querySelectorAll('.preview__video');
const playButton = document.querySelector('.icon--video-review');

function restart () {
    videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
        video.load();
    });
}

prevButton.addEventListener('click', () => {
    $('.preview__slider').slick('slickPrev');
    restart();
});

nextButton.addEventListener('click', () => {
    $('.preview__slider').slick('slickNext');
    restart();
});

videos.forEach((video) => {
    video.addEventListener('click', () => {
        video.paused ? video.play() : video.pause();
    });
    playButton.addEventListener('click', () => {
        video.paused ? video.play() : video.pause();
    });
})


$('.preview__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});

// const dots = document.querySelector('.slick-dots').querySelectorAll('li');
// console.log(dots);

// for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener('click', () => {
//         console.log(dots[i - 1]);
//         console.log(dots[i]);
//         console.log(dots[i + 1]);
//     });
// }