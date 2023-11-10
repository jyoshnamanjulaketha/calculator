let displayValue = '0';
let operator = '';
let firstOperand = '';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  firstOperand = '';
  updateDisplay();
}

function appendInput(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  firstOperand = displayValue;
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  const secondOperand = displayValue;
  let result = 0;

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
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
  }

  displayValue = result.toString();
  operator = '';
  firstOperand = '';
  updateDisplay();
}
