// document.querySelectorAll('.filter__opener').forEach(button => {
//     button.addEventListener('click', function() {
//         const filterList = this.nextElementSibling; // Находим следующий элемент (список)

//         // Закрываем другие списки
//         document.querySelectorAll('.filter__list').forEach(list => {
//             if (list !== filterList) {
//                 list.classList.remove('active');
//             }
//         });

//         // Переключаем активный класс у текущего списка
//         filterList.classList.toggle('active');
//     });
// });


document.querySelectorAll('.filter__opener').forEach(button => {
    button.addEventListener('click', function() {
        const filterList = this.nextElementSibling;

        // Закрываем другие списки
        document.querySelectorAll('.filter__list').forEach(list => {
            if (list !== filterList) {
                list.classList.remove('active');
            }
        });

        // Переключаем активный класс у текущего списка
        filterList.classList.toggle('active');
    });
});