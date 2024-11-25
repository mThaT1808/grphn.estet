import $ from 'jquery';
import 'slick-slider';

const buttons = document.querySelector('.preview__button-container').children;
const prevButton = buttons[0];
const nextButton = buttons[1];
const videos = document.querySelectorAll('.preview__video');
const playButton = document.querySelector('.icon-play');
const pauseButton = document.querySelector('.icon-pause');
const breakpoint = {
    tablet: 768,
    desktop: 1280
}

function restart () {
    videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
        video.load();
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    });
}

function setActive (direction) {
    if (document.documentElement.clientWidth < breakpoint.tablet) {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].classList.contains('slick-active')) {
                dots.forEach((dot) => {
                    if (!dot.classList.contains('click-active')) {
                        dot.style.display = 'none';
                    }
                });
                dots[i].style.display = 'block';
                if (i > 0) {
                    dots[i - 1].style.display = 'block';
                }
    
                if (i > 1) {
                    dots[i - 2].style.display = 'block';
                }
    
                if (i === dots.length - 1) {
                    dots[i - 3].style.display = 'block';
                }
        
                if (i < dots.length - 1) {
                    dots[i + 1].style.display = 'block';
                } 
    
                if (i === 0) {
                    dots[i + 3].style.display = 'block';
                }
    
                if (i <= 1) {
                    dots[i + 2].style.display = 'block';
                }
    
                if (direction === 'right') {
                        if (i >= 3 && i < dots.length - 1) {
                            setTimeout(() => {
                                dots[i + 1].style.display = 'block';
                                dots[i - 3].style.display = 'none';    
                            }, 250);
                            dots[i + 1].style.display = 'none';
                            dots[i - 3].style.display = 'block';
                    }
    
                }
                
                if (direction === 'left') {
                    if (i >= 2 && i <= dots.length - 1) {
                        {
                            setTimeout(() => {
                                dots[i + 2].style.display = 'none';
                                dots[i - 2].style.display = 'block';    
                            }, 250);
                            dots[i + 2].style.display = 'block';
                            dots[i - 2].style.display = 'none';
                        }
                    }
                }
    
                if (direction === 'dots-right') {
                    if (i >= 2 && i < dots.length - 1) {
                        setTimeout(() => {
                            dots[i + 1].style.display = 'block';
                            dots[i - 3].style.display = 'none';
                        }, 250);
                        for (let j = i + 1; j < dots.length; j++) {
                            dots[j].style.display = 'none';
                            dots[i - 3].style.display = 'block';
                        }
                    }
                }
            }
        }

    } else {
        dots.forEach((dot) => {
            dot.style.display = 'block';
        });
    }
}

window.addEventListener('resize', () => {
    setActive();
});

prevButton.addEventListener('click', () => {
    $('.preview__slider').slick('slickPrev');
    restart();
    setActive('left');
});

nextButton.addEventListener('click', () => {
    $('.preview__slider').slick('slickNext');
    restart();
    setActive('right');
});

videos.forEach((video) => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
            pauseButton.style.display = 'none';
            video.muted = false;
        } else {
            video.pause();
            pauseButton.style.display = 'block';
        }            
    });
});

playButton.addEventListener('click', () => {
    const video = document.querySelector('.preview__slider').querySelector('.slick-active').querySelector('.preview__video');
    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'none';
});
pauseButton.addEventListener('click', () => {
    const video = document.querySelector('.preview__slider').querySelector('.slick-active').querySelector('.preview__video');
    video.play();
    pauseButton.style.display = 'none';
});

$('.preview__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false
});

const dots = document.querySelector('.slick-dots').querySelectorAll('li');

setActive();

for (let i = 0; i < dots.length; i++) {
    const current = document.querySelector('.slick-dots').querySelector('.slick-active').children[0].ariaLabel[0];
    dots[i].addEventListener('click', () => {
        const active = document.querySelector('.slick-dots').querySelector('.slick-active').children[0].ariaLabel[0];
        if (current < active) {
            setActive('dots-right');
        } else {
            setActive('left');
        }
    });
}