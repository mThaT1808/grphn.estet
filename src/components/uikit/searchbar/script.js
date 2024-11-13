const searchbars = document.querySelectorAll('.searchbar');
const buttons = document.querySelectorAll('.searchbar__button');

window.addEventListener('click', anotherClickHandler);

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', searchButtonListener)
}

function searchButtonListener (e) {
    for (var i = 0; i < searchbars.length; i++) {
        if (searchbars[i].contains(e.target)) {
            searchbars[i].classList.contains('searchbar--open')?
            alert('что то ищем'):
            searchbars[i].classList.add('searchbar--open');
        }
    }
}

function anotherClickHandler (e) {
    for (var i = 0; i < searchbars.length; i++) {
        if (!searchbars[i].contains(e.target)) {
            searchbars[i].classList.remove('searchbar--open');
        }
    }
}