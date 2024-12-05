import { formData} from '../Aside/script';
import {getData} from './server.js';

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
const doors = await getData();
const pagination = document.querySelector('.card__quantity');

function checkQuantity() {
    if (quantityCurrent.textContent === '0') {
        pagination.style.display = 'none';
    } else {
        pagination.style.display = 'block';
    }

    if (quantityCurrent.textContent === quantityMax.textContent) {
        showMore.style.display = 'none';
    } else {
        showMore.style.display = 'block';
    }
}

showMore.addEventListener('click', () => {
    if (isFiltered) {
        renderList(filtered, itemsToAdd, false, true);
    } else {
        renderList(doors, itemsToAdd);
    }
    checkQuantity();
});

function renderList(list, count, filter, add) {
    if (filter) {
        for (let i = 0; i < container.children.length; i++) {
            if (container.children[i].classList.contains('door')) {
                container.removeChild(container.children[i]);
                i--;
            }
        }
        activeItems = 0;
        isFiltered = true;
    } if (!filter && !add) {
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
        mark.classList.add(`door__mark--${list[i].markClass}`);
        mark.textContent = list[i].mark;
        door.querySelector('.door__title').textContent = list[i].title;
        door.querySelector('.door__price-new').textContent = `от ${list[i].priceNew}\u20BD`;
        door.querySelector('.door__price-old').textContent = list[i].priceOld;
        const colorContainer = door.querySelector('.door__choice-box');
        for (let j = 0; j < list[i].colors.length; j++) {
            const button = colorContainer.querySelector('.door__choice-btn');
            if (j >= 5 && document.documentElement.clientWidth <= 1660) {
               button.textContent = `+${list[i].colors.length - j}`;    
               break;
            }

            if (list[i].colors.length - 5 <= 0) {
                button.style.display = 'none';
            }

            const item = list[i].colors[j];
            const label = document.createElement('label');
            label.key = item;
            const img = document.createElement('img');
            img.classList.add('door__choice-textures');
            img.src = `/images/card/texture/${item}.png`;
            img.alt=""
            const input = document.createElement('input');
            input.classList.add('door__choice');
            input.type = 'radio';
            input.name = `card-color`;
            input.value = item;
            label.appendChild(img);
            label.appendChild(input);
            colorContainer.insertBefore(label, button);
        };
        container.appendChild(door);
    }

    activeItems += activeCount;
    quantityCurrent.textContent = activeItems;
    quantityMax.textContent = filter || add ? filtered.length : doors.length;
};

function checkFields (item) {
    let active = true;
    for (let [name, value] of formData) {
        if (name === 'discount' && value === 'on' && item.markClass !== 'promo') {
            active = false;
        }
        
        if (name === 'colors') {
            if (value) {
                value.split(',').forEach((val) => {
                    if (!item.colors.includes(val)) {
                        active = false;
                    }
                });
            }
        }

        if (name === 'style') {
            if (value) {
                if (!value.split(' ').includes(item.style.toLowerCase())) {
                    active = false;
                }   
            }
        }

        if (name === 'collection') {
            if (value) {
                if (!value.split(' ').includes(item.collection.toLowerCase())) {
                    active = false;
                }   
            }
        }

        if (name === 'finishing') {
            if (value) {
                if (!value.split(' ').includes(item.finishing.toLowerCase())) {
                    active = false;
                }   
            }
        }
    }
    return active;
}

form.addEventListener('edit', () => {
    filtered = doors.filter((door) => checkFields(door));
    renderList(filtered, itemsToShow, true);
    checkQuantity();
});

renderList(doors, itemsToShow);
