const burgers = document.querySelectorAll(".hamburger");
const functional = document.querySelector(".header__functional");
const header = document.querySelector('.header');
const desktopWidth = 1280;


function toggleScroll(isHidden) {
    document.body.style.overflow = isHidden ? 'hidden' : 'auto';
}

burgers.forEach(burger => {
    burger.addEventListener("click", function () {
        if (!header.classList.contains('header--inner') && document.documentElement.clientWidth >= desktopWidth) {
            return;
        } else {
            const isOpen = functional.classList.toggle('header__functional--open');
            toggleScroll(isOpen);
        }
    });
});
