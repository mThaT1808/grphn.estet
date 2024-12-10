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


const filterLists = document.querySelectorAll('.filter__list');
filterLists.forEach((list) => {
    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter__item')) {
            e.target.classList.toggle('filter__item--active');
            if (formData.has(list.dataset.name)) {
                if(list.dataset.value.includes(e.target.dataset.value)) {
                    const text = formData.get(list.dataset.name).replace(e.target.dataset.value, '');
                    list.dataset.value = text;
                    if (list.dataset.value.trim() === '') {
                        list.dataset.value = list.dataset.value.trim();
                    }
                    collectData();
                    return;
                }
            }

            if (list.dataset.value) {
                list.dataset.value += ` ${e.target.dataset.value}`;
            } else {
                list.dataset.value = e.target.dataset.value;
            }
            collectData();
        }
    });
});

const editEvent = new CustomEvent("edit", {bubbles : true, cancelable : true, detail : "filter form"})

let formData = new FormData(form);
function collectData () {
    formData = new FormData(form);
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

function reset() {
    form.reset();
    formData = new FormData();
    filterLists.forEach((list) => {
        list.dataset.value = '';
        const items = list.querySelectorAll('.filter__item[data-value]');
        items.forEach((item) => item.classList.remove('filter__item--active'));
    });

}


form.addEventListener('change', () => {
    collectData();
});

const resetButton = document.querySelector('.filter__button--reset');

resetButton.addEventListener('click', () => {
    reset();
    form.dispatchEvent(editEvent);
});

reset();

export {formData};