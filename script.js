let display = document.getElementById("display");
let current = "";

function appendNumber(num) {
  current += num;
  updateDisplay();
}

function appendOperator(op) {
  if (current !== "") {
    current += " " + op + " ";
    updateDisplay();
  }
}

function clearDisplay() {
  current = "";
  updateDisplay();
}

function calculate() {
  try {
    current = eval(current).toString();
  } catch (e) {
    current = "Erro";
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = current || "0";
}
// end