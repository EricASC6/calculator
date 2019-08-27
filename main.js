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

// Boolean to tell us if any of the operator buttons or equal button are clicked
let operatorBtnClicked = false;
let equalBtnClicked = false;

// Operator type
let operator;

// Outputs --> keep track of the inputs
let result = null;

// Display the num on the output div
function displayNum(e) {
  const outputValue = parseInt(output.innerHTML);
  if (outputValue === 0) {
    output.innerHTML = e.target.innerHTML;
  } else {
    output.innerHTML += e.target.innerHTML;
  }

  if (operatorBtnClicked === true || equalBtnClicked === true) {
    reset();
    operatorBtnClicked = false;
    equalBtnClicked = false;
    displayNum(e);
  }
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
  let outputValue = parseInt(output.innerHTML);
  operatorBtnClicked = true;

  // Get the operator type
  if (e.target.id) {
    operator = e.target.id;
  } else {
    operator = e.target.parentElement.id;
  }
  console.log(preOperator);

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

// Get the equal button
const equalBtn = document.querySelector("#equal");

// Adding eventlistener to the equal button
equalBtn.addEventListener("click", displayResult);

// displayResult function
function displayResult() {
  equalBtnClicked = true;

  let answer;
  if (operator === "plus") {
    answer = result + parseInt(output.innerHTML);
    console.log(answer);
  } else if (operator === "minus") {
    answer = result - parseInt(output.innerHTML);
    console.log(answer);
  } else if (operator === "multiply") {
    answer = result * parseInt(output.innerHTML);
    console.log(answer);
  } else if (operator === "divide") {
    answer = result / parseInt(output.innerHTML);
    console.log(answer);
  }

  output.innerHTML = answer;

  result = null;
  operator = null;
}

// Get the AC button
const resetBtn = document.querySelector("#reset");

// Add eventlistener to the reset button
resetBtn.addEventListener("click", reset);

// Reset function
function reset() {
  output.innerHTML = 0;
}
