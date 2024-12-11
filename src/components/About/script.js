import $ from 'jquery';
import 'slick-slider';

function changeTemplate() {
    if ($(window).width() < 768) {
        // console.log('перемещение в контейнер');
        $('.about .about__container .about__inner .about__main').prependTo(
            '.about .about__container'
        );
    } else {
        // console.log('перемещение в inner');
        $('.about .about__container .about__main').prependTo('.about__inner');
    }
}

function checkWidth() {
    const slider = $('.about__inner');
    if ($(window).width() < 768) {
        if (!slider.hasClass('slick-initialized')) {
            slider.slick({
                arrows: false,
                infinite: true,
                mobileFirst: true,
                easing: 'ease-in-out',
                speed: 1000
            });

            $('.arrow--about.arrow--left').on('click', function (e) {
                e.preventDefault();
                slider.slick('slickPrev');
            });

            $('.arrow--about.arrow--right').on('click', function (e) {
                e.preventDefault();
                slider.slick('slickNext');
            });

            $('.slick-slide').each(function () {
                if (
                    $(this).find('.about__wrapper--empty').length ||
                    $(this).find('.about__wrapper--logo').length
                ) {
                    $(this).css('display', 'none');
                }
            });
            slider.slick('setPosition');
        }
    } else {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
            slider.slick('setPosition');
        }

        $('.slick-slide').each(function () {
            if (
                $(this).find('.about__wrapper--empty').length ||
                $(this).find('.about__wrapper--logo').length
            ) {
                $(this).css('display', 'inline-block');
            }
        });
    }
}

$(document).ready(function () {
    changeTemplate();
    checkWidth();
});

$(window).on('resize', function () {
    changeTemplate();
    checkWidth();
});

const dots = document.querySelectorAll('.about__dot');

dots.forEach((dot) => {
    const randomDelay = Math.random() * 2;
    dot.style.animationDelay = `${randomDelay}s`;
});

const cards = [
    {
        imageBox: document.querySelector('.about__image-box--tech'),
        descriptionBox: document.querySelector('.about__descr--tech'),
    },
    {
        imageBox: document.querySelector('.about__image-box--quality'),
        descriptionBox: document.querySelector('.about__descr--quality'),
    },
    {
        imageBox: document.querySelector('.about__image-box--solution'),
        descriptionBox: document.querySelector('.about__descr--solution'),
    },
    {
        imageBox: document.querySelector('.about__image-box--company'),
        descriptionBox: document.querySelector('.about__descr--company'),
    },
];

function toggleCard(imageBox, descriptionBox) {
    const isActive = imageBox.classList.contains('active');
    document.querySelectorAll('.about__image-box.active, .about__descr.active').forEach(box => box.classList.remove('active'));

    if (!isActive) {
        descriptionBox.classList.add('active');
        imageBox.classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.style.opacity = imageBox.classList.contains('active') && index !== cards.indexOf({ imageBox, descriptionBox }) ? 0 : 1;
    });
}

cards.forEach((card, index) => {
    card.imageBox.addEventListener('click', () => toggleCard(card.imageBox, card.descriptionBox));
    card.descriptionBox.addEventListener('click', () => toggleCard(card.imageBox, card.descriptionBox));

    dots[index].addEventListener('click', () => toggleCard(card.imageBox, card.descriptionBox));
});