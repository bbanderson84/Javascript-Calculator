const defaultResult = 0;
let currentResult = defaultResult;
let logEntries =[];

// gets input from input field 
function getUserNumInput() {
    return parseInt(usrInput.value);
}


//generates and writes calc log
function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription); // from vendor file

}

function writeToLog(opIdentifer, prvResult, opNumber, newResult) {
    const logEntry = {
        operation: opIdentifer,
        prevResult: prvResult,
        number: opNumber,
        aftResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// function that takes numbers and adds them
function addNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', initResult, enteredNum);
    writeToLog('ADD', initResult, enteredNum, currentResult);
}

// function that takes numbers and subs them
function subNumbers () {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', initResult, enteredNum);
    writeToLog('SUB', initResult, enteredNum, currentResult);
}

// function that takes numbers and divides them
function divNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', initResult, enteredNum);
    writeToLog('DIV', initResult, enteredNum, currentResult);
}

// function that takes numbers and multiplies them
function multNumbers() {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', initResult, enteredNum);
    writeToLog('MULT', initResult, enteredNum, currentResult);

}

//event listeners for operator buttons on click
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click',subNumbers);
divideBtn.addEventListener('click', divNumbers);
multiplyBtn.addEventListener('click', multNumbers);



