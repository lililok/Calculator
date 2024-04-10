const buttons = document.querySelectorAll("button");
const display = document.querySelector('.display');
let displayValue = '0';
let operator = null;
let firstValue = null;
let secondValue = null;
let secondValueStarted = false;
display.innerHTML = 0;

function numberClick(number) {
    
}

function operatorClick(operator) {
    
}

function clear() {
    
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(firstValue, secondValue, operator) {
    const firstValueParsed = parseInt(firstValue);
    const secondValueParsed = parseInt(secondValue);
    switch (operator) {
        case '+':
            return add(firstValueParsed, secondValueParsed);
        case '-':
            return subtract(firstValueParsed, secondValueParsed);
        case '*':
            return multiply(firstValueParsed, secondValueParsed);
        case '/':
            return divide(firstValueParsed, secondValueParsed);
    }
}
