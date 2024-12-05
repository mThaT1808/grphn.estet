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

            $('.arrow--left').on('click', function (e) {
                e.preventDefault();
                slider.slick('slickPrev');
            });

            $('.arrow--right').on('click', function (e) {
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

function toggleCard(imageBox, descriptionBox) {
    const isActive = imageBox.classList.contains('active');
    document.querySelectorAll('.about__image-box.active, .about__descr.active').forEach(box => box.classList.remove('active'));

    if (!isActive) {
        descriptionBox.classList.add('active');
        imageBox.classList.add('active');
    } else {
        descriptionBox.classList.remove('active');
        imageBox.classList.remove('active');
    }

    dots.forEach((dot) => {
        if (imageBox.classList.contains('active')) {
            dot.style.opacity = 0;
        } else {
            dot.style.opacity = 1;
        }
    });
}

const imageSolution = document.querySelector('.about__image-box--solution');
const descrSolution = document.querySelector('.about__descr--solution');
const imageQuality = document.querySelector('.about__image-box--quality');
const descrQuality = document.querySelector('.about__descr--quality');
const imageTech = document.querySelector('.about__image-box--tech');
const descrTech = document.querySelector('.about__descr--tech');
const descrCompany = document.querySelector('.about__descr--company');
const imageCompany = document.querySelector('.about__image-box--company');

imageSolution.addEventListener('click', () => toggleCard(imageSolution, descrSolution));
imageQuality.addEventListener('click', () => toggleCard(imageQuality, descrQuality));
imageTech.addEventListener('click', () => toggleCard(imageTech, descrTech));
descrCompany.addEventListener('click', () => toggleCard(imageCompany, descrCompany));
