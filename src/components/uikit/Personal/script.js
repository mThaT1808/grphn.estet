const closeButtons = document.querySelectorAll(".personal__close");
const likesPopover = document.querySelector(".personal__popover--like");
const basketPopover = document.querySelector(".personal__popover--basket");
const likesButton = document.querySelector(".personal__button--like");
const basketButton = document.querySelector(".personal__button--basket");

function closeAll () {
    likesPopover.classList.remove('personal__popover--open');
    basketPopover.classList.remove('personal__popover--open');
}

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', closeAll)
}

likesButton.addEventListener('click', function () {
    closeAll();
    likesPopover.classList.add('personal__popover--open');
})

basketButton.addEventListener('click', function () {
    closeAll();
    basketPopover.classList.add('personal__popover--open');
})
