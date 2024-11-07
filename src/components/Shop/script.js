import $ from 'jquery';
import 'slick-slider'

$(function() {
    $('.slider--shop').slick({
        arrow: true,
        infinite: false,
        initialSlide: 0,
        centerMode: true,
        initialSlide: 0,
        centerPadding: '0',
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