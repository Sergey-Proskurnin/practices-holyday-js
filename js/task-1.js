// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//  то есть элементов li.item. Получится 'В списке 3 категории.'.
const categoriesItem = document.querySelector('#categories');
const elementsItem = categoriesItem.querySelectorAll('.item');
console.log(`There are ${elementsItem.length} categories in the list.`);
// Для каждого элемента li.item в списке ul#categories, найдет и выведет
//  в консоль текст заголовка элемента (тега h2) и количество элементов в
//   категории (всех вложенных в него элементов li).
elementsItem.forEach(element => {
  console.log(
    `Category: ${element.firstElementChild.textContent}
Amount of elements: ${element.querySelectorAll('li').length}`,
  );
});
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
