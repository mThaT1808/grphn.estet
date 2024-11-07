import $ from 'jquery';
import 'slick-slider'

$(function() {
    $('.slider--shop').slick({
        arrow: true,
        infinite: false,
        initialSlide: 0,
        rows:1,
        slidesPerRow: 1,
        centerMode: true,
        responsive:
        [
            {
                breakpoint: 1024,
                settings: {
                    rows:4,
                    slidesPerRow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    rows: 1,
                    slidesPerRow: 1,
                }
            }
        ]
    })

    // (document).ready
    $(function () {
        function updateArrowOpacity(currentSlide, slideCount) {
            // Сброс стилей стрелок
            $('.slick-prev').css('opacity', '1');
            $('.slick-next').css('opacity', '1');

            // Установка opacity для левой стрелки, если это первый слайд
            if (currentSlide === 0) {
                $('.slick-prev').css('opacity', '0.2');
            }

            // Установка opacity для правой стрелки, если это последний слайд
            if (currentSlide === slideCount - 1) {
                $('.slick-next').css('opacity', '0.2');
            }
        }

        // Обновление стрелок после смены слайда
        $('.slider--shop').on('afterChange', function (event, slick, currentSlide) {
            updateArrowOpacity(currentSlide, slick.slideCount);
        });

        // Установка начального состояния стрелок при загрузке страницы
        updateArrowOpacity(0, $('.slider--shop .slick-slide').length);
    });
})