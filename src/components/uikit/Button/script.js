const collectionsButton = document.getElementById('collectionsButton');
const allDoorsButton = document.getElementById('allDoorsButton');
const showMore = document.querySelector('.button--more');
const doorLength = document.querySelectorAll('.door').length - 1;
const cardPagination = document.querySelector('.card__pagination');
let items = 9;

collectionsButton.addEventListener('click', () => {
    collectionsButton.classList.remove('button--pink');
    allDoorsButton.classList.add('button--pink');
});

allDoorsButton.addEventListener('click', () => {
    allDoorsButton.classList.remove('button--pink');
    collectionsButton.classList.add('button--pink');
});

showMore.addEventListener('click', () => {
    items += 4;
    const array = Array.from(document.querySelector('.card__inner').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('visible'));

    if (visItems.length === doorLength) {
        cardPagination.style.display = 'none';
    }
});

