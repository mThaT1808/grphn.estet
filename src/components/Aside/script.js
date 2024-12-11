import {min, max} from '../Card/script.js'

document.querySelectorAll('.filter__opener').forEach(button => {
    button.addEventListener('click', function() {
        const filterList = this.nextElementSibling;
        // Переключаем активный класс у текущего списка
        filterList.classList.toggle('active');
    });
});

document.querySelectorAll('.filter__opener').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.icon--opener');
        if (icon) {
            icon.style.transform = icon.style.transform === 'rotate(270deg)' ? 'rotate(90deg)' : 'rotate(270deg)';
        }
    });
});

const collectionsButton = document.getElementById('collectionsButton');
const allDoorsButton = document.getElementById('allDoorsButton');


collectionsButton.addEventListener('click', () => {
    collectionsButton.classList.remove('button--pink');
    allDoorsButton.classList.add('button--pink');
});

allDoorsButton.addEventListener('click', () => {
    allDoorsButton.classList.remove('button--pink');
    collectionsButton.classList.add('button--pink');
});

const form = document.querySelector('.aside__filter');
const priceInputs = document.querySelectorAll('.price-slider__input');

const filterLists = document.querySelectorAll('.filter__list');

//списки фильтров выполняют роль полей формы

filterLists.forEach((list) => {
    list.addEventListener('click', (e) => {
        //при клике меняем состояние элемента фильтра
        //активный -> неактивный и наоборот
        if (e.target.classList.contains('filter__item')) {
            e.target.classList.toggle('filter__item--active');
            //каждый список в data-name хранит имя фильтра
            //а в data-value переданные значения этого фильтра
            //если значение фильтра уже было выбрано
            //при повторном клике оно убивается из значения
            //data-value фильтра
            if (formData.has(list.dataset.name)) {
                if(list.dataset.value.includes(e.target.dataset.value)) {
                    const text = formData.get(list.dataset.name).replace(e.target.dataset.value, '');
                    list.dataset.value = text;
                    if (list.dataset.value.trim() === '') {
                        list.dataset.value = list.dataset.value.trim();
                    }
                    //собираем данные при каждом клике по элементу фильтра
                    collectData();
                    return;
                }
            }

            //если data-value пустое то просто записывем туда
            //значение выбранного фильтра
            //иначе добавляем к существующему значению новое
            if (list.dataset.value) {
                list.dataset.value += ` ${e.target.dataset.value}`;
            } else {
                list.dataset.value = e.target.dataset.value;
            }
            collectData();
        }
    });
});

//кастомное событие которое будет вызываться при каждом изменение формы
const editEvent = new CustomEvent("edit", {bubbles : true, cancelable : true, detail : "filter form"})

let formData = new FormData(form);
function collectData () {
    formData = new FormData(form);

    //добавляем в автоматически собранные данные формы информацию
    //о выставленных минимальной/максимальном значение цены
    priceInputs.forEach((input) => {
        formData.set(input.name, input.value);
    });
    //каждый выбранный input с цветом добавляет в собранные данные
    //ключ name и значение value
    //собираем их все в один массив и убираем их из собранных данных формы
    //добавив только общий массив colors
    const colors = [];
    for (let [name, value] of formData) {
        if (name === 'color') {
            colors.push(value);
        }
    }
    formData.append('colors', colors);
    formData.delete('color');
    filterLists.forEach((list) => {
        if (!list.classList.contains('filter__list-input')) {
            formData.append(list.dataset.name, list.dataset.value);
        }
    });

    form.dispatchEvent(editEvent);
}

//сбрасывем форму значения полей фильтра и минимальное/максимальное значения
function reset() {
    form.reset();
    formData = new FormData();
    filterLists.forEach((list) => {
        list.dataset.value = '';
        const items = list.querySelectorAll('.filter__item[data-value]');
        items.forEach((item) => item.classList.remove('filter__item--active'));
    });
    const minPrice = document.querySelector('.price-slider__input[name="price-from"]');
    const maxPrice = document.querySelector('.price-slider__input[name="price-to"]');
    minPrice.value = min;
    maxPrice.value = max;
}


form.addEventListener('change', () => {
    collectData();
});

const resetButton = document.querySelector('.filter__button--reset');

//при сбросе формы загружаем неотфильтрованный массив
resetButton.addEventListener('click', () => {
    reset();
    form.dispatchEvent(editEvent);
});

export {formData, collectData};