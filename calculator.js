let currentInput = "";
let operator = null;
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  firstOperand = null;
  operator = null;
  secondOperand = null;
  document.getElementById('display').value = "";
}

function appendOperator(op) {
  if (firstOperand === null) {
    firstOperand = currentInput;
    operator = op;
    currentInput = "";
    document.getElementById('display').value = firstOperand + " " + operator;
  } else if (currentInput !== "") {
    secondOperand = currentInput;
    calculate();
    operator = op;
    document.getElementById('display').value = firstOperand + " " + operator;
    currentInput = "";
  }
}

function calculate() {
  if (operator === null || firstOperand === null || currentInput === "") {
    return;
  }

  secondOperand = currentInput;

  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      if (parseFloat(secondOperand) === 0) {
        alert("Error! Division by zero.");
        clearDisplay();
        return;
      }
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }

  // Show result in the display
  document.getElementById('display').value = firstOperand + " " + operator + " " + secondOperand + " = " + result;

  // Reset the calculator for the next operation
  firstOperand = result.toString();
  currentInput = "";
  operator = null;
}
