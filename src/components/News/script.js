import $ from 'jquery';
import 'slick-slider';

const buttonContainer = document.querySelector('.info__button-wrapper');
const buttons = buttonContainer.querySelectorAll('button');

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

    $('.arrow--news-prev').on('click', function(e) {
        e.preventDefault();
        slider.slick('slickPrev');
    });
    $('.arrow--news-next').on('click', function(e) {
        e.preventDefault();
        slider.slick('slickNext');
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

    $('.arrow--news-prev').on('click', function(e) {
        e.preventDefault();
        slider.slick('slickPrev');
    });
    $('.arrow--news-next').on('click', function(e) {
        e.preventDefault();
        slider.slick('slickNext');
    });
});

$(function() {
    function updateArrowOpacity(currentSlide, slideCount) {
        $('.arrow--news-prev').css('opacity', '1');
        $('.arrow--news-next').css('opacity', '1');

        if (currentSlide === 0) {
            $('.arrow--news-prev').css('opacity', '0.2');
        }

        if (currentSlide === slideCount - 1) {
            $('.arrow--news-next').css('opacity', '0.2');
        }
    }

    $('.slider--info').on('afterChange', function (event, slick, currentSlide) {
        updateArrowOpacity(currentSlide, slick.slideCount);
    });

    updateArrowOpacity(0, $('.slider--info .slick-slide').length);
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach((button) => {
            button.classList.remove('button--active');
        });
        button.classList.add('button--active');
        buttonContainer.classList.toggle('info__button-wrapper--active-right');
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
      const elTabPaneShow = elTab.querySelector('.tab-pane-show');
      elTabPaneShow.classList.remove('tab-pane-show');
      elTabBtn.classList.add('tab-btn-active');
      elTabPane.classList.add('tab-pane-show');
    }
}

document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.tab-btn')) {
        return;
    }
    const elTabBtn = e.target.closest('.tab-btn');
    showTab(elTabBtn);
});


// const showTab = (elTabBtn) => {
//     const elTab = elTabBtn.closest('.tab');
//     if (elTabBtn.classList.contains('tab-btn-active')) {
//       return;
//     }
//     const targetId = elTabBtn.dataset.targetId;
//     const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
//     if (elTabPane) {
//       const elTabBtnActive = elTab.querySelector('.tab-btn-active');
//       elTabBtnActive.classList.remove('tab-btn-active');
//       const elTabPaneShow = elTab.querySelector('.tab-pane-show');
//       elTabPaneShow.classList.remove('tab-pane-show');
//       elTabBtn.classList.add('tab-btn-active');
//       elTabPane.classList.add('tab-pane-show');
//     }
// }

// document.addEventListener('click', (e) => {
//     if (e.target && !e.target.closest('.tab-btn')) {
//         return;
//     }
//     const elTabBtn = e.target.closest('.tab-btn');
//     showTab(elTabBtn);
// });