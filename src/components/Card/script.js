const showMore = document.querySelector('.button--more');
const doorLength = document.querySelectorAll('.door').length - 1;
const cardPagination = document.querySelector('.card__pagination');
let items = 9;

showMore.addEventListener('click', () => {
	items += 4;
	const array = Array.from(document.querySelector('.card__inner').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('visible'));

	if (visItems.length === doorLength) {
			cardPagination.style.display = 'none';
	}
});