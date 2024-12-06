// function initLikes() {
//     let count = 0;
//     const quantityElement = document.querySelector('.personal__quantity');

//     document.querySelectorAll('.door__mark-like').forEach(function(container) {
//         container.addEventListener('click', function() {
//             const icon = this.querySelector('i');
//             icon.classList.toggle('icon-heart');
//             icon.classList.toggle('icon-heart-fill');

//             if (icon.classList.contains('icon-heart-fill')) {
//                 count++;
//             } else {
//                 count--;
//             }

//             quantityElement.textContent = count;

//             if (count > 0) {
//                 quantityElement.style.display = 'block';
//             } else {
//                 quantityElement.style.display = 'none';
//             }
//         });
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {initLikes();});
