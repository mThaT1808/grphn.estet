import { formData} from '../Aside/script';
import doors from './doors.json';

const showMore = document.querySelector('.button--more');
const itemsToShow = 8;
const itemsToAdd = 4;
let activeItems = 0;
let filtered = [];
let isFiltered = false; 
const template = document.querySelector('#card__template').content;
const container = document.querySelector('.card__inner');
const quantityCurrent = document.querySelector('.card__quantity-current');
const quantityMax = document.querySelector('.card__quantity-total');
const form = document.querySelector('.aside__filter');

showMore.addEventListener('click', () => {
    renderList(doors, itemsToAdd);
    if (quantityCurrent.textContent === quantityMax.textContent) {
        showMore.style.display = 'none';
    }
});

function renderList(list, count, filter) {
    if (filter) {
        for (let i = 0; i < container.children.length; i++) {
            if (container.children[i].classList.contains('door')) {
                container.removeChild(container.children[i]);
                i--;
            }
        }
        activeItems = 0;
        isFiltered = true;
    } else {
        isFiltered = false;
    }

    const activeCount = activeItems + 1 +  count <=  list.length ? count : list.length - activeItems;
    for (let i = 0; i < activeCount; i++) {
        const door = template.cloneNode(true);

        if ((i === 0 || i === 1) && activeItems === 0) {
            door.querySelector('.door').classList.add('door--intro');
        }

        const picture = door.querySelector('.door__image-box');
        picture.querySelector('source').srcset = list[i].imageWebp;
        picture.querySelector('img').src = list[i].imageJpg;
        const mark = door.querySelector('.door__mark'); 
        mark.classList.add(list[i].markClass);
        mark.textContent = list[i].mark;
        door.querySelector('.door__title').textContent = list[i].title;
        door.querySelector('.door__price-new').textContent = list[i].priceNew;
        door.querySelector('.door__price-old').textContent = list[i].priceOld;
        container.appendChild(door);
    }

    activeItems += activeCount;
    quantityCurrent.textContent = activeItems;
    quantityMax.textContent = filter ? filtered.length : doors.length;
};

function checkFields (item) {
    let active = true;
    for (let [name, value] of formData) {
        if (value && item[name].toLowerCase() !== value) {
            active = false;
        } 
    }
    return active;
}

form.addEventListener('edit', () => {
    filtered = doors.filter((door) => checkFields(door));
    renderList(filtered, itemsToShow, true);
});

renderList(doors, itemsToShow);