const buttons = document.querySelectorAll("button");
const display = document.querySelector('.display');
let displayValue = 0;
let operator = '';
let firstValue = '';
let secondValue = '';
let result = 0;
let secondValueStarted = false;
display.innerHTML = displayValue;

displayValue = ''
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "equal") {
            let result = operate(firstValue, secondValue, operator);
            displayValue = result;
            display.innerHTML = displayValue;
        }
        if (button.classList.contains("operator")) {
            operator = button.textContent;
            secondValueStarted = true;
        } else {
            if (secondValueStarted === false) {
                firstValue += button.id;
                displayValue = firstValue;
                display.innerHTML = displayValue;
            } else {
                secondValue += button.id;
                displayValue = secondValue;
                display.innerHTML = displayValue;
            }
        }
    });
});

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
