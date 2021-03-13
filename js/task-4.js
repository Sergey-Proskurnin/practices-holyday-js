// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// {/* <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> */}

let counterValue = 0;

const ref = {
  decreaseValueBtn: document.querySelector('[data-action="decrement"]'),
  increaseValueBtn: document.querySelector('[data-action="increment"]'),
  valueCounterSpan: document.querySelector('#value'),
};

ref.increaseValueBtn.addEventListener('click', incrementValue);
ref.decreaseValueBtn.addEventListener('click', decrementValue);

function incrementValue() {
  counterValue += 1;
  renewalValue();
}

function decrementValue() {
  counterValue -= 1;
  renewalValue();
}

function renewalValue() {
  ref.valueCounterSpan.textContent = counterValue;
}
