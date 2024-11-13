const searchbar = document.querySelector('.searchbar')
const button = searchbar.querySelector('.searchbar__button')

function searchButtonListener () {
    searchbar.classList.contains('searchbar--open')?
    alert('что то ищем'):
    searchbar.classList.add('searchbar--open');
    window.addEventListener('click', anotherClickHandler)
}

function anotherClickHandler (e) {
    if (!searchbar.contains(e.target)) {
        searchbar.classList.remove('searchbar--open');
        window.removeEventListener('click', anotherClickHandler)
    }
}

button.addEventListener('click', searchButtonListener)