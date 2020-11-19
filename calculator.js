const plusButton = document.querySelector('#PLUS');
const minusButton = document.querySelector('#MINUS');
const multButton = document.querySelector('#MULT');
const dividButton = document.querySelector('#DIVID');
const cancelButton = document.querySelector('#CANCEL');
const equalsButton = document.querySelector('#EQUALS');
const num = input.setAttribute('value');
let num = 0;


function add (num1, num2) {
	let total = num1 + num2;
	return total;
}

function subtract (num1, num2) {
	let total = num1 - num2;
	return total;
}

function multiply (num1, num2) {
	let total = num1*num2;
	return total;
}

function divide (num1, num2) {
	let result = num1/num2;
	return result;
}