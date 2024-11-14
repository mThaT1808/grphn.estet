const language = document.querySelector('.language');
const buttons = document.querySelectorAll('.language__button', '.language__select');

window.addEventListener('click', anotherClickHandler);

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', languageButtonListener)
}

function languageButtonListener (e) {
    language.classList.toggle('language--open');
}

function anotherClickHandler (e) {
    if (!language.contains(e.target)) {
        language.classList.remove('language--open');
    }
}