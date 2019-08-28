// Get all buttons with a class of num
let numbersBtn = document.querySelectorAll(".num");

/* Convert the node list to an array and sort it
based on its value */
numbersBtn = [...numbersBtn].sort((a, b) => {
  return a.id - b.id;
});

// Add an event listener to each num button
numbersBtn.forEach(btn => {
  btn.addEventListener("click", displayNum);
});

// Get the div with the class of output
const output = document.querySelector(".output");

// Negative button
const negativeBtn = document.querySelector("#negative");

// Add event listener to the negative button
negativeBtn.addEventListener("click", addNegative);

// Add negative function
function addNegative() {
  if (output.innerHTML.includes("-") === false) {
    output.innerHTML = "-" + output.innerHTML;
  }
}

// Boolean to tell us if any of the operator buttons or equal button are clicked
let operatorBtnClicked = false;
let equalBtnClicked = false;

// Operator type
let operator;

// Outputs --> keep track of the inputs
let result = null;

// num btn pressed flag
let numBtnPressed = false;

// Display the num on the output div
function displayNum(e) {
  numBtnPressed = true;

  let outputValue = output.innerHTML;
  if (outputValue === "0") {
    output.innerHTML = e.target.innerHTML;
  } else {
    output.innerHTML += e.target.innerHTML;
  }

  if (operatorBtnClicked === true || equalBtnClicked === true) {
    output.innerHTML = 0;
    operatorBtnClicked = false;
    equalBtnClicked = false;
    displayNum(e);
  }

  resetBtn.innerHTML = "C";
}

// Get all the buttons with the class of operations
let operationsBtn = document.querySelectorAll(".operations");
operationsBtn = Array.from(operationsBtn);

// Add event listener to each operation button
operationsBtn.forEach(btn => {
  btn.addEventListener("click", operate);
});

// Previous operator
let preOperator;

// Operate function
function operate(e) {
  let outputValue = !output.innerHTML.includes(".")
    ? parseInt(output.innerHTML)
    : parseFloat(output.innerHTML);

  operatorBtnClicked = true;

  // Get the operator type
  if (e.target.id) {
    operator = e.target.id;
  } else {
    operator = e.target.parentElement.id;
  }
  console.log(operator);
  console.log(preOperator);

  if (numBtnPressed === false) {
    preOperator = operator;
  } else {
    if (result === null) {
      result = outputValue;
      preOperator = operator;
      console.log(result);
    } else if (preOperator === "plus") {
      result += outputValue;
      output.innerHTML = result;
      console.log(result);
      preOperator = operator;
    } else if (preOperator === "minus") {
      result -= outputValue;
      output.innerHTML = result;
      console.log(result);
      preOperator = operator;
    } else if (preOperator === "multiply") {
      result *= outputValue;
      output.innerHTML = result;
      console.log(result);
      preOperator = operator;
    }
  }

  numBtnPressed = false;
}

// Get the equal button
const equalBtn = document.querySelector("#equal");

// Adding eventlistener to the equal button
equalBtn.addEventListener("click", displayResult);

// displayResult function
function displayResult() {
  equalBtnClicked = true;

  let outputValue = output.innerHTML.includes(".")
    ? parseFloat(output.innerHTML)
    : parseInt(output.innerHTML);

  let answer;
  if (operator === "plus") {
    answer = result + outputValue;
    console.log(answer);
  } else if (operator === "minus") {
    answer = result - outputValue;
    console.log(answer);
  } else if (operator === "multiply") {
    answer = result * outputValue;
    console.log(answer);
  } else if (operator === "divide") {
    answer = result / outputValue;
    console.log(answer);
  }

  if (answer) {
    output.innerHTML = answer;
  }

  result = null;
  operator = null;
}

// Get the AC button
const resetBtn = document.querySelector("#reset");

// Add eventlistener to the reset button
resetBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", acOrC);

// Reset function
function reset() {
  output.innerHTML = 0;
}

// acOrC function
function acOrC() {
  if (resetBtn.innerHTML === "C") {
    resetBtn.innerHTML = "AC";
  }
}

// Get the percent button
const percentBtn = document.querySelector("#percent");

// Add event listener to the percent button
percentBtn.addEventListener("click", convertToPercent);

// convertToPercent function
function convertToPercent() {
  output.innerHTML = !output.innerHTML.includes(".")
    ? parseInt(output.innerHTML) / 100
    : parseFloat(output.innerHTML) / 100;
}

// Get decimal button
const decimalBtn = document.querySelector("#decimal");

// Add Event listener to the decimal button
decimalBtn.addEventListener("click", addDecimal);

// addDecimal function
function addDecimal() {
  if (!output.innerHTML.includes(".")) {
    output.innerHTML += ".";
  }
}
