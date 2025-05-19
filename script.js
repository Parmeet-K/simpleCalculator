
        let currentInput = "";
        let currentOperation = "";
        let previousInput = "";

        function appendNumber(number) {
            currentInput += number;
            document.getElementById("display").value = currentInput;
        }

        function clearDisplay() {
            currentInput = "";
            currentOperation = "";
            previousInput = "";
            document.getElementById("display").value = "";
        }

        function setOperation(operator) {
            if (currentInput === "") return;
            if (previousInput !== "") {
                calculateResult();
            }
            currentOperation = operator;
            previousInput = currentInput;
            currentInput = "";
        }

        function calculateResult() {
            if (previousInput === "" || currentInput === "") return;
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            switch (currentOperation) {
                case "+":
                    result = prev + current;
                    break;
                case "-":
                    result = prev - current;
                    break;
                case "*":
                    result = prev * current;
                    break;
                case "/":
                    if (current === 0) {
                        alert("Cannot divide by zero");
                        clearDisplay();
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            currentOperation = "";
            previousInput = "";
            document.getElementById("display").value = currentInput;
        }