import $ from 'jquery';
import 'slick-slider';

// function changeTemplate() {
//     if ($(window).width() < 768) {
//         console.log('перемещение в контейнер');
//         $('.about .about__container .about__inner .about__main').prependTo('.about .about__container');
//     } else {
//         console.log('перемещение в inner');
//         $('.about .about__container .about__main').prependTo('.about__inner');
//     }
// }

// function checkWidth() {
//     const slider = $('.about__inner');
//     if ($(window).width() < 768) {

//         if (!slider.hasClass('slick-initialized')) {
//             slider.slick({
//                 arrows: false,
//                 autoplay: true,
//                 mobileFirst: true,
//                 easing: "ease-in-out",
//                 speed: 1000,
//             });

//             $('.arrow--prev').on('click', function(e) {
//                 e.preventDefault();
//                 slider.slick('slickPrev');
//             });
//             $('.arrow--next').on('click', function(e) {
//                 e.preventDefault();
//                 slider.slick('slickNext');
//             });
//         }
//     } else {

//         if (slider.hasClass('slick-initialized')) {
//             slider.slick('unslick');
//         }
//     }
// }

// $(document).ready(function() {
//     changeTemplate();
//     // checkWidth();
// });

// $(window).on('resize', function() {
//     changeTemplate();
//     // checkWidth();
// });
