const defaultResult = 0;
let currentResult = defaultResult;
let logEntries =[];

// gets input from input field 
function getUserNumInput() {
    return parseInt(usrInput.value);
}

function calcResult (calcType) {
    const enteredNum = getUserNumInput();
    const initResult = currentResult;
    let mathOp;
    if (calcType === 'ADD') {
        currentResult += enteredNum;
        mathOp = '+';
    } else if (calcType === 'SUB') {
        currentResult -= enteredNum;
        mathOp = '-';
    } else if (calcType === 'MUL') {
        currentResult *= enteredNum;
        mathOp = '*';
    } else if (calcType === 'DIV') {
        currentResult /= enteredNum;
        mathOp = '/';
    }
    createAndWriteOutput(mathOp, initResult, enteredNum);
    writeToLog(calcType, initResult, enteredNum, currentResult);
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
   calcResult('ADD');
}

// function that takes numbers and subs them
function subNumbers () {
   calcResult('SUB');
}

// function that takes numbers and multiplies them
function multNumbers() {
    calcResult('MUL');
    
}

// function that takes numbers and divides them
function divNumbers() {
    calcResult('DIV');
}



//event listeners for operator buttons on click
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click',subNumbers);
divideBtn.addEventListener('click', divNumbers);
multiplyBtn.addEventListener('click', multNumbers);



