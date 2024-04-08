const buttons = document.querySelectorAll("button");
const display = document.querySelector('.display');
let displayValue = 0;
display.innerHTML = displayValue;

displayValue = ''
buttons.forEach(button => {
    button.addEventListener("click", () => {
        displayValue += button.id;
        display.innerHTML = displayValue;
    });
});

function add(a, b) {
    
}

function subtract(a, b) {
    
}

function multiply(a, b) {
    
}

function divide(a, b) {
    
}

function operate(a, b, operator) {
    add(a, b);
    subtract(a, b);
    multiply(a, b);
    divide(a, b);
}
