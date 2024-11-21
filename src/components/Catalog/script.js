function changeTemplate() {
    const aside = document.querySelector('.catalog .aside');
    const catalogWrapper = document.querySelector('.catalog .catalog__wrapper');
    const catalog = document.querySelector('.catalog');

    if (window.innerWidth < 1280) {
        catalogWrapper.prepend(aside);
    } else {
        catalog.prepend(aside);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    changeTemplate();
});

window.addEventListener('resize', function() {
    changeTemplate();
});