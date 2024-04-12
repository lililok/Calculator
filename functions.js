const buttons = document.querySelectorAll("button");
const display = document.querySelector('.display');
let operator = '';
let firstValue = '';
let secondValue = '';
let beginSecondValue = false;
display.innerHTML = 0;

function numberClick(number) {
    if (beginSecondValue === false) {
        firstValue += number;
        display.innerHTML = firstValue;
    } else {
        secondValue += number;
        display.innerHTML = secondValue;
    }
}

function operatorClick(op) {
    beginSecondValue = true;
    operator = op;
}

function clearing() {
    firstValue = '';
    secondValue = '';
    operator = '';
    result = '';
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
    let firstValueParsed = parseInt(firstValue);
    let secondValueParsed = parseInt(secondValue);
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
            if (secondValueParsed !== 0) {
                result = divide(firstValueParsed, secondValueParsed);
            } else {
                result = 0;
            }
            break;
        default:
            return;
    }
    display.innerHTML = result;
    return result;
}