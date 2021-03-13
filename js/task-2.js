// В HTML есть пустой список ul#ingredients.

// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива
//  ingredients создаст отдельный li, после чего вставит все li за
//   одну операцию в список ul.ingredients. Для создания DOM-узлов
//    используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');
const makeIngredientsItemOption = newIngredients => {
  return newIngredients.map((ingredient, i) => {
    const newItemList = document.createElement('li');
    newItemList.classList.add('list-item');
    newItemList.textContent = `${ingredient}`;
    return newItemList;
  });
};

const ingredientsItem = makeIngredientsItemOption(ingredients);

ingredientsList.append(...ingredientsItem);
