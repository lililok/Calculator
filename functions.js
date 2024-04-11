const buttons = document.querySelectorAll("button");
const display = document.querySelector('.display');
let displayValue = '0';
let operator = '';
let firstValue = '';
let secondValue = '';
let beginSecondValue = false;
display.innerHTML = 0;

function numberClick(number) {
    if (beginSecondValue) {
        secondValue += number;
        display.innerHTML = secondValue;
    } else {
        firstValue += number;
        display.innerHTML = firstValue;
    }
}

function operatorClick(op) {
    operator = op;
    beginSecondValue = true;
}

function clearing() {
    firstValue = '';
    secondValue = '';
    operator = '';
    beginSecondValue = false;
    display.innerHTML = '0';
}

function add(firstValueParsed, secondValueParsed) {
    return firstValueParsed+secondValueParsed;
}

function subtract(firstValueParsed, secondValueParsed) {
    return firstValueParsed-secondValueParsed;
}

function multiply(firstValueParsed, secondValueParsed) {
    return firstValueParsed*secondValueParsed;
}

function divide(firstValueParsed, secondValueParsed) {
    return firstValueParsed/secondValueParsed;
}

function operate(firstValue, secondValue, operator) {
    const firstValueParsed = parseInt(firstValue);
    const secondValueParsed = parseInt(secondValue);
    let result;
    switch (operator) {
        case '+':
            result = add(firstValueParsed, secondValueParsed);
            break;
        case '-':
            result = subtract(firstValueParsed, secondValueParsed);
            break;
        case '*':
            result = multiply(firstValueParsed, secondValueParsed);
            break;
        case '/':
            result = divide(firstValueParsed, secondValueParsed);
            break;
        default:
            return;
    }
    display.innerHTML = result;
    firstValue = result;
    secondValue = '';
    operator = '';
}