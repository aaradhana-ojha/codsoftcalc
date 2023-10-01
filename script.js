// script.js

const display = document.querySelector('input[name="display"]');

function appendCharacter(character) {
    display.value += character;
}
//working of ac
function clearDisplay() {
    display.value = '';
}
//working of del
function deleteLastChar() {
    display.value = display.value.toString().slice(0, -1);
}
//error handling
function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
