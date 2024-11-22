document.querySelectorAll('.filter__opener').forEach(button => {
    button.addEventListener('click', function() {
        const filterList = this.nextElementSibling; // Находим следующий элемент (список)

        // Закрываем другие списки
        // document.querySelectorAll('.filter__list').forEach(list => {
        //     if (list !== filterList) {
        //         list.classList.remove('active');
        //     }
        // });

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