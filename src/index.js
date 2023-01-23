import { isNumber } from 'lodash';
import './styles/index.scss';

function clickNumber(e) {
	const value = e.target.innerHTML;
	const inputEl = document.getElementById("input");

	const inputValue = inputEl.value;

	inputEl.value = inputValue + value;
}

const numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	element.addEventListener("click", clickNumber)
}

function clickOperator(e) {
	let operator = e.target.innerHTML;

	const inputEl = document.getElementById("input");

	const inputValue = inputEl.value;

	if (inputEl.value[inputEl.value.length - 1] === " ") {
		const newValue = inputEl.value.substring(0, inputEl.value.length - 2) + operator + " ";

		inputEl.value = newValue;
	} else {
		inputEl.value = inputValue + " " + operator + " ";
	}
}

const operators = document.getElementsByClassName("operator");

for (let i = 0; i < operators.length; i++) {
	const elementOne = operators[i];
	elementOne.addEventListener("click", clickOperator)

}

const handleBack = document.getElementById('back-button');

handleBack.addEventListener("click", () => {
	const calculatorInput = document.getElementById('input');
	const value = calculatorInput.value;

	if (isNumber(value.charAt(value.length - 1))) {
		calculatorInput.value = value.slice(0, - 1);


	} else {
		calculatorInput.value = value.slice(0, - 2);

	}

})

const equal = document.getElementById('operator-equal');

equal.addEventListener("click", () => {
	const calculatorInput = document.getElementById('input');

	const result = eval(calculatorInput.value);

	calculatorInput.value = result;
})
