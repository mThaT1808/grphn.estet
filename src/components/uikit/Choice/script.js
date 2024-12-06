const selectBox = document.querySelectorAll('.choice__box');

// Хранилище выбранного значения + значение по умолчанию
let selectedLocation = "Нижний Новгород";
let selectedLocationText = "Нижний Новгород";

function updateSelectBoxes() {
  selectBox.forEach(selectContainer => {
    const selectedValue = selectContainer.querySelector('.choice__value');
    const locationInput = selectContainer.querySelector('.choice__hidden-input');
    selectedValue.textContent = selectedLocationText;
    locationInput.value = selectedLocation;
  });
}

selectBox.forEach(selectContainer => {;
  const optionsContainer = selectContainer.querySelector('.choice__options');

  const initialOptions = [
    { value: "Нижний Новгород", text: "Нижний Новгород" },
    { value: "Новокузнецк", text: "Новокузнецк" },
    { value: "Ульяновск", text: "Ульяновск" },
    { value: "Самара", text: "Самара" },
    { value: "Хабаровск", text: "Хабаровск" },
    { value: "Уфа", text: "Уфа" },
    { value: "Москва", text: "Москва" },
    { value: "Сызрань", text: "Сызрань" },
    { value: "Димитровград", text: "Димитровград" },
    { value: "Краснодар", text: "Краснодар" },
    { value: "Александровск-Сахалинский", text: "Александровск - Сахалинский" }
  ];

  initialOptions.sort((a, b) => a.text.localeCompare(b.text));

  initialOptions.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option.text;
    li.addEventListener('click', () => {
      selectedLocation = option.value;
      selectedLocationText = option.text;
      updateSelectBoxes();
      optionsContainer.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
      li.classList.add('selected');
    });
    optionsContainer.appendChild(li);
    if (option.value === selectedLocation) {
      li.classList.add('selected');
    }
  });

  selectContainer.addEventListener('click', () => {
    optionsContainer.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    if (!selectContainer.contains(event.target)) {
      optionsContainer.classList.remove('open');
    }
  });
});

updateSelectBoxes();