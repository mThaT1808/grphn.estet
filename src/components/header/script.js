const burgers = document.querySelectorAll(".hamburger");
const functional = document.querySelector(".header__functional");
const header = document.querySelector('.header');

for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("click", function () {
        if (header.classList.contains('header--inner')) {
            functional.classList.toggle('header__functional--open');
        }
    })
}
