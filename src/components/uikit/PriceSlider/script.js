import noUiSlider from 'nouislider';

const slider = document.getElementById('sliderPrice');
const rangeMin = parseInt(slider.dataset.min);
const rangeMax = parseInt(slider.dataset.max);
const step = parseInt(slider.dataset.step);
const filterInputs = document.querySelectorAll('input.price-slider__input');

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

filterInputs.forEach((input, indexInput) => {
    input.addEventListener('keydown', (e) => {
        slider.noUiSlider.setHandle(indexInput, input.value);
        document.querySelector(`label[for="${input.name}"] .price-slider__currency`).innerHTML = `<span style="color: transparent">${input.value + (e.key >= '0' && e.key <= '9'? e.key: '')}</span> P`
    })
});