import { formData} from '../Aside/script';
import {getData} from './server.js';

const showMore = document.querySelector('.button--more');
const itemsToShow = 8;
const itemsToAdd = 4;
let activeItems = 0;
let filtered = [];
const template = document.querySelector('#card__template').content;
const container = document.querySelector('.card__inner');
const quantityCurrent = document.querySelector('.card__quantity-current');
const quantityMax = document.querySelector('.card__quantity-total');
const form = document.querySelector('.aside__filter');
const pagination = document.querySelector('.card__quantity');

//проверяем кол-во показанных и максимальное кол-во дверей
//если больше нечего показывать прячем кнопку показать больше
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

//при клике на кнопку показать больше загружаем новую партию элементов
//начиная со следующего после загруженного элемента
showMore.addEventListener('click', async () => {
    const data = new URLSearchParams(formData).toString() + `&from=${quantityCurrent.textContent}&to=${parseInt(quantityCurrent.textContent) + itemsToAdd}`;
    const response = await getData(data);
    filtered = response.items;
    renderList(filtered);
    quantityCurrent.textContent = parseInt(quantityCurrent.textContent) + response.items.length;
    checkQuantity();
});

//при фильтрации перерисовываем элементы исходя из значения фильтра
//иначе просто отображаем нужное кол-во элементов
function renderList(list, filter) {
    if (filter) {
        for (let i = 0; i < container.children.length; i++) {
            if (container.children[i].classList.contains('door')) {
                container.removeChild(container.children[i]);
                i--;
            }
        }
        activeItems = 0;
    }

    //для каждого элемента переданного списка
    //на основе готового шаблона создаём новый элемент
    for (let i = 0; i < list.length; i++) {
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
        const quantities = document.querySelectorAll('.personal__item:has(.personal__button--like) .personal__quantity');
        quantities.forEach((quantity) => {
            if (document.querySelector('.personal__quantity').textContent > 0) {
                document.querySelector('.personal__quantity').style.display = 'block';
            } else {
                document.querySelector('.personal__quantity').style.display = 'none';
            }
        })

        door.querySelector('.door__mark-like').addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('icon-heart');
            icon.classList.toggle('icon-heart-fill');

            //увеличине/уменьшение счётчика лайков
            if (icon.classList.contains('icon-heart-fill')) {
                quantities.forEach((quantity) => {
                    quantity.textContent++
                })
            } else {
                quantities.forEach((quantity) => {
                    quantity.textContent--
                })
            }

            //если лайков нет прячем счётчик
            quantities.forEach((quantity) => {
                if (quantity.textContent > 0) {
                    quantity.style.display = 'block';
                } else {
                    quantity.style.display = 'none';
                }
            })

        });

        const colorContainer = door.querySelector('.door__choice-box');

        //для каждого возможного цвета двери
        //создаём label с изображением текстуры
        function createColorButton(item, button) {
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

        for (let j = 0; j < list[i].colors.length; j++) {
            const button = colorContainer.querySelector('.door__choice-btn');

            //если разрешение меньше 1600 показываем до 4 цвета
            //остальные прячем
            if (j >= 4 && document.documentElement.clientWidth < 1600) {
               button.textContent = `+${list[i].colors.length - j}`;
               button.addEventListener('click', () => {
                for (let k = j; k < list[i].colors.length; k++) {
                    const item = list[i].colors[k];
                    createColorButton(item, button);
            };
            button.style.display = 'none';
            });
               break;
            }

            //при разрешение 1600 и выше показываем до 6 цветов
            if (j >= 6) {
                button.textContent = `+${list[i].colors.length - j}`;
                button.addEventListener('click', () => {
                    for (let k = j; k < list[i].colors.length; k++) {
                        const item = list[i].colors[k];
                        createColorButton(item, button);
                    };
                    button.style.display = 'none';
                });
                break;
            }

            if (list[i].colors.length - 5 <= 0) {
                button.style.display = 'none';
            }

            const item = list[i].colors[j];
            createColorButton(item, button);
        };
        container.appendChild(door);
    }

    activeItems += list.length;
};

form.addEventListener('edit', async () => {
    const range = activeItems === 0 ? '&from=0&to=8' : `&from=0&to=${activeItems}`;
    const data = new URLSearchParams(formData).toString() + range;
    const response = await getData(data);
    filtered = response.items;
    renderList(filtered, true);
    quantityCurrent.textContent = 0 + response.items.length;
    quantityMax.textContent = response.length;
    checkQuantity();
});

const data = new URLSearchParams(formData).toString() + `&from=${activeItems}&to=${itemsToShow}`;
const response = await getData(data);
filtered = response.items;
quantityCurrent.textContent = activeItems + response.items.length;
quantityMax.textContent = response.length;
const min = response.min;
const max = response.max;
renderList(filtered);
checkQuantity();

export {min, max};