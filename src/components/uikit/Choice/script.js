// const selectContainer = document.querySelector('.choice__box');
// const selectedValue = document.querySelector('.choice__value');
// const optionsContainer = document.querySelector('.choice__options');
// const locationInput = document.querySelector('.choice__hidden-input');

// const initialOptions = [
//     { value: "Нижний Новгород", text: "Нижний Новгород" },
//     { value: "Новокузнецк", text: "Новокузнецк" },
//     { value: "Ульяновск", text: "Ульяновск" },
//     { value: "Самара", text: "Самара" },
//     { value: "Хабаровск", text: "Хабаровск" }
//   ];

// initialOptions.sort((a, b) => a.text.localeCompare(b.text));

// function setSelectedValue(value) {
//     locationInput.value = value;
//     selectedValue.textContent = value;
//   }

//   let selectedLi = null;

//   initialOptions.forEach(option => {
//     const li = document.createElement('li');
//     li.textContent = option.text;
//     li.addEventListener('click', () => {
//         setSelectedValue(option.value);
//         optionsContainer.classList.remove('open');
//         optionsContainer.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
//         li.classList.add('selected');
//         selectedLi = li;
//     });
//     optionsContainer.appendChild(li);

//     if (option.value === "Нижний Новгород") {
//         li.classList.add('selected');
//         selectedLi = li;
//         setSelectedValue(option.value);
//     }
//   });

//   if (selectedLi) {
//         selectedValue.textContent = selectedLi.textContent;
//   }

//   selectContainer.addEventListener('click', () => {
//         optionsContainer.classList.toggle('open');
//   });

const selectContainers = document.querySelectorAll('.choice__box');

selectContainers.forEach(selectContainer => {
  const selectedValue = selectContainer.querySelector('.choice__value');
  const optionsContainer = selectContainer.querySelector('.choice__options');
  const locationInput = selectContainer.querySelector('.choice__hidden-input');

  const initialOptions = [
    { value: "Нижний Новгород", text: "Нижний Новгород" },
    { value: "Новокузнецк", text: "Новокузнецк" },
    { value: "Ульяновск", text: "Ульяновск" },
    { value: "Самара", text: "Самара" },
    { value: "Хабаровск", text: "Хабаровск" }
  ];

  initialOptions.sort((a, b) => a.text.localeCompare(b.text));

  function setSelectedValue(value) {
    locationInput.value = value;
    selectedValue.textContent = value;
  }

  let selectedLi = null;

  initialOptions.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option.text;
    li.addEventListener('click', () => {
      setSelectedValue(option.value);
      optionsContainer.classList.remove('open');
      optionsContainer.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
      li.classList.add('selected');
      selectedLi = li;
    });
    optionsContainer.appendChild(li);

    if (option.value === "Нижний Новгород") {
      li.classList.add('selected');
      selectedLi = li;
      setSelectedValue(option.value);
    }
  });

  if (selectedLi) {
    selectedValue.textContent = selectedLi.textContent;
  }

  selectContainer.addEventListener('click', () => {
    optionsContainer.classList.toggle('open');
  });
});