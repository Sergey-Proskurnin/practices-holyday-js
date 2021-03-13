const inputWrapper = document.querySelector('#controls');
const inputValue = inputWrapper.firstElementChild;
const btnToСreate = inputValue.nextElementSibling;
const btnToClear = btnToСreate.nextElementSibling;
const boxesWrapper = document.querySelector('#boxes');

let amount;
inputValue.addEventListener('input', onVelueBoxes);

function onVelueBoxes(evens) {
  amount = +evens.target.value;
  
  return amount;
}

btnToСreate.addEventListener('click', function () {
 if ( amount === undefined ) {
   amount = 0
 }
 console.log(amount);
  const boxes = createBoxes(amount);
  boxesWrapper.append(...boxes);
});

function createBoxes(amount) {
  return [...Array(amount)]
    .map((_, idx) => ++idx)
    .map(i => {
      const newDivBoxes = document.createElement('div');
      newDivBoxes.style.backgroundColor = `${
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      }`;
      newDivBoxes.style.width = `${(i - 1) * 10 + 30}px`;
      newDivBoxes.style.height = `${(i - 1) * 10 + 30}px`;
      newDivBoxes.style.marginTop = `${30}px`;

      return newDivBoxes;
    });
}
btnToClear.addEventListener('click', function () {
  boxesWrapper.innerHTML = '';
});
