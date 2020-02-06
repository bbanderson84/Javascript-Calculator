const defaultResult = 0;

let currentResult = defaultResult;

// function that takes numbers and adds them
function addNumbers() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
}

// event that runs addNumbers function on button click
addBtn.addEventListener('click', addNumbers);

// function subNumbers (num1, num2) {
//     const result = num1 - num2;
// }

// function divNumbers (num1, num2) {
//     const result = num1 / num2;
// }

// function multNumbers (num1, num2) {
//     const result = num1 * num2;
// }

