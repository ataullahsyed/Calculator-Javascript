const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value || button.textContent;

    if (value === 'C') {
      firstNumber = '';
      operator = '';
      secondNumber = '';
      result = '';
      display.value = '';
    } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
      operator = value;
      firstNumber = parseFloat(display.value);
      display.value = '';
    } else if (value === '=') {
      secondNumber = parseFloat(display.value);

      switch (operator) {
        case '+':
          result = firstNumber + secondNumber;
          break;
        case '-':
          result = firstNumber - secondNumber;
          break;
        case '*':
          result = firstNumber * secondNumber;
          break;
        case '/':
          result = firstNumber / secondNumber;
          break;
        case '%':
          result = firstNumber % secondNumber;
          break;
      }

      display.value = result;
      firstNumber = result;
      operator = '';
      secondNumber = '';
    } else {
      display.value += value;
    }
  });
});