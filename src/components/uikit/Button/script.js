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



