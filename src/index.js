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

const operators = document.getElementsByClassName("sign");

for (let i = 0; i < operators.length; i++) {
	const elementOne = operators[i];
	elementOne.addEventListener("click", clickOperator)

}


// function result(number) {
// 	let sum = 0;

// 	const inputEl = document.getElementById("input");
// 	const inputValue = inputEl.value;

// 	if (operators === "+") {
// 		const sum = 0;
// 		newValue = sum;
// 		sum.value = number + number
// 	} else if (operators === "-") {
// 		inputEl.value = number - number
// 	} else if (operators === "*") {
// 		inputEl.value = number * number
// 	} else if (operators === "/") {
// 		inputEl.value = number / number
// 	}
// }

// result(numbers);


// function calculator(someArray) {
// 	let result;
// 	for (let i = 0; i <= someArray.length; i++) {
// 	}
// 	result = someArray[i] + someArray[i += 1];
// }

// calculator(numbers);

// function result(number) {
// 	const inputEl = document.getElementById("input");
// 	const inputValue = inputEl.value;
// 	const newValue = inputEl.value

// 	if (operators === "+") {
// 		const sum = 0;
// 		newValue = sum;
// 		sum.value = number + number
// 	} else if (operators === "-") {
// 		inputEl.value = number - number
// 	} else if (operators === "*") {
// 		inputEl.value = number * number
// 	} else if (operators === "/") {
// 		inputEl.value = number / number
// 	}
// }

// result(numbers);
