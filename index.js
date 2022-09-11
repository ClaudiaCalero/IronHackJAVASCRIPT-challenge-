const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const buttonNumbers = document.querySelectorAll('.number');
const buttonOperators = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

buttonNumbers.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

buttonOperators.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});