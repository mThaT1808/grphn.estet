import noUiSlider from 'nouislider';
import {min, max} from '../../Card/script.js';
import { collectData } from '../../Aside/script.js';

const slider = document.getElementById('sliderPrice');
const rangeMin = min;
const rangeMax = max;
const step = parseInt(slider.dataset.step);
const filterInputs = document.querySelectorAll('input.price-slider__input');
const form = document.querySelector('.aside__filter');

noUiSlider.create(slider, {
    start: [rangeMin, rangeMax],
    connect: true,
    step: step,
    range: {
        'min': rangeMin,
        'max': rangeMax
    },

    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});

// bind inputs with noUiSlider
slider.noUiSlider.on('update', (values, handle) => {
    filterInputs[handle].value = values[handle].toFixed(0);
    filterInputs.forEach((input) => {
        document.querySelector(`label[for="${input.name}"] .price-slider__currency`).innerHTML = `<span style="color: transparent">${input.value}</span> P`
    });
});

slider.noUiSlider.on('change', collectData);

function inputHandler (input, indexInput, reset) {
    slider.noUiSlider.setHandle(indexInput, input.value);
    if (reset) {
        if (indexInput === 0) {
            slider.noUiSlider.setHandle(0, min);
        }

        if (indexInput === 1) {
            slider.noUiSlider.setHandle(1, max);
        }
    }
    document.querySelector(`label[for="${input.name}"] .price-slider__currency`).innerHTML = `<span style="color: transparent">${input.value}</span> P`
}

filterInputs.forEach((input, indexInput) => {
    input.addEventListener('keyup', () => {inputHandler(input, indexInput)});
    input.addEventListener('keydown', () => {inputHandler(input, indexInput)});
    input.addEventListener('change', () => {inputHandler(input, indexInput)});
    form.addEventListener('reset', () => {inputHandler(input, indexInput, true)});
})