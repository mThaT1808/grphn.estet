import $ from 'jquery';
import 'slick-slider';

const buttonContainer = document.querySelector('.info__button-wrapper');
const buttons = buttonContainer.querySelectorAll('button');
const nextArrow = $('.arrow--info.arrow--right');
const prevArrow = $('.arrow--info.arrow--left');

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

    document.querySelectorAll('.info__button-wrapper').forEach(el =>
        el.addEventListener('click', () => {
            slider.slick('unslick');
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
                }],
            });
        })
    );

    nextArrow.on('click', function(e) {
        e.preventDefault();
        slider.slick('slickNext');
    });
    prevArrow.on('click', function(e) {
        e.preventDefault();
        slider.slick('slickPrev');
    });
});

$(function(){
    const slider = $('.suggestions__slider');

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

    document.querySelectorAll('.info__button-wrapper').forEach(el =>
        el.addEventListener('click', () => {
            slider.slick('unslick');
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
                }],
            });
        })
    );

    nextArrow.on('click', function(e) {
        e.preventDefault();
        slider.slick('slickNext');
    });
    prevArrow.on('click', function(e) {
        e.preventDefault();
        slider.slick('slickPrev');
    });
});

$(function() {
    function updateArrowOpacity(currentSlide, slideCount) {
        prevArrow.css('opacity', '1');
        nextArrow.css('opacity', '1');

        if (currentSlide === 0) {
            prevArrow.css('opacity', '0.2');
        }

        if (currentSlide === slideCount - 1) {
            nextArrow.css('opacity', '0.2');
        }
    }

    $('.news__slider').on('afterChange', function (event, slick, currentSlide) {
        updateArrowOpacity(currentSlide, slick.slideCount);
    });
    updateArrowOpacity(0, $('.news__slider .slick-slide').length);
});

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        buttons.forEach((button) => {
            button.classList.remove('button--active');
        });
        button.classList.add('button--active');
        buttonContainer.classList.toggle('info__button-wrapper--active-right');
        const news = document.querySelector('.tab-pane.news');
        const suggestions = document.querySelector('.tab-pane.suggestions');
        const newsLink = document.querySelector('.link--info-news');
        const suggestionsLink = document.querySelector('.link--info-suggestions');
        if (e.target.classList.contains('button--news')){
            news.classList.add('tab-pane-show');
            suggestions.classList.remove('tab-pane-show');
            newsLink.classList.add('tab-pane-show');
            suggestionsLink.classList.remove('tab-pane-show');
        } if (e.target.classList.contains('button--suggestions')){
            suggestions.classList.add('tab-pane-show');
            news.classList.remove('tab-pane-show');
            suggestionsLink.classList.add('tab-pane-show');
            newsLink.classList.remove('tab-pane-show');
        }
    });
});

const showTab = (elTabBtn) => {
    const elTab = elTabBtn.closest('.tab');
    if (elTabBtn.classList.contains('tab-btn-active')) {
      return;
    }
    const targetId = elTabBtn.dataset.targetId;
    const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
    if (elTabPane) {
      const elTabBtnActive = elTab.querySelector('.tab-btn-active');
      elTabBtnActive.classList.remove('tab-btn-active');
      elTabBtn.classList.add('tab-btn-active');
    }
}

document.addEventListener('click', (e) => {
    const news = document.querySelector('.tab-pane.news');
    if (e.target && !e.target.closest('.tab-btn')) {
        return;
    }
    if(e.target.classList.contains('button--news')){

    }
    const elTabBtn = e.target.closest('.tab-btn');
    showTab(elTabBtn);
});