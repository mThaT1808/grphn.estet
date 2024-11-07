const burgers = document.querySelectorAll(".hamburger")
const functional = document.querySelector(".header__functional")

for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("click", function () {
        functional.classList.toggle('header__functional--open');
    })
}