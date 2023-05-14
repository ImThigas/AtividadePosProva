var displayValue = "";

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += " " + operator + " ";
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes(".")) {
    displayValue += ".";
    updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function calculate() {
    var result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("result").value = displayValue;
}