const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumInput() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription);

}

// function that takes numbers and adds them
function addNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult = currentResult + enteredNum;
    createAndWriteOutput('+', initResult, enteredNum);
}

function subNumbers () {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult = currentResult - enteredNum;
    createAndWriteOutput('-', initResult, enteredNum);
}

function divNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult = currentResult / enteredNum;
    createAndWriteOutput('/', initResult, enteredNum);

}


function multNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult = currentResult * enteredNum;
    createAndWriteOutput('*', initResult, enteredNum);
}


addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click',subNumbers);
divideBtn.addEventListener('click', divNumbers);
multiplyBtn.addEventListener('click', multNumbers);



