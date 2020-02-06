const defaultResult = 0;

let currentResult = defaultResult;

function getUserNumInput() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;

}

// function that takes numbers and adds them
function addNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult = currentResult + enteredNum;
    createAndWriteOutput('+', initResult, enteredNum);
}

// event that runs addNumbers function on button click
addBtn.addEventListener('click', addNumbers);

function subNumbers () {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult = currentResult - enteredNum;
    createAndWriteOutput('-', initResult, enteredNum);

}

subtractBtn.addEventListener('click',subNumbers);

function divNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult = currentResult / enteredNum;
    createAndWriteOutput('/', initResult, enteredNum);

}

divideBtn.addEventListener('click', divNumbers);

function multNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult = currentResult * enteredNum;
    createAndWriteOutput('*', initResult, enteredNum);
}

multiplyBtn.addEventListener('click', multNumbers);

