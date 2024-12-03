const showMore = document.querySelector('.button--more');
const doorLength = document.querySelectorAll('.door').length;
const cardPagination = document.querySelector('.card__pagination');
let items = 11;

showMore.addEventListener('click', () => {
	items += 4;
	const array = Array.from(document.querySelector('.card__inner').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('visible'));

	if (visItems.length === doorLength) {
			cardPagination.style.display = 'none';

			const cardInners = document.querySelectorAll('.card__inner');
    		cardInners.forEach(cardInner => {
        			cardInner.style.margin = '0';
    		});
	}
});