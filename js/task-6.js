// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector('#validation-input');
const minInputlength = +input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let inputValue = event.target.value.length;
  if (inputValue === minInputlength) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  }
  if (inputValue !== minInputlength) {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
  if (inputValue === 0) {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
  }
}
