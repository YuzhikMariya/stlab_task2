class StringCalculator {
    static operations = [
        {
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
        },
        {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
        },
    ];

    static parseString(str) {
        str = str.replace(/\s+/g, "");
        const OPERATORS = "*/+-";
        let calcArray = [];
        let currOperand = "";
        for (let i = 0; i < str.length; i++) {
            let tempChar = str.charAt(i);
            if (OPERATORS.indexOf(tempChar) > -1) {
                if (currOperand == "" && tempChar == "-") {
                    currOperand = "-";
                } else {
                    calcArray.push(parseFloat(currOperand), tempChar);
                    currOperand = "";
                }
            } else {
                currOperand += str.charAt(i);
            }
        }
        if (currOperand != "") {
            calcArray.push(parseFloat(currOperand));
        }
        return calcArray;
    }

    static calculate(str) {
        let calcArray = this.parseString(str);
        let newCalcArray = [];
        let currOperation;
        for (let i = 0; i < this.operations.length; i++) {
            for (let j = 0; j < calcArray.length; j++) {
                if (this.operations[i][calcArray[j]]) {
                    currOperation = this.operations[i][calcArray[j]];
                } else {
                    if (currOperation) {
                        newCalcArray[newCalcArray.length - 1] = currOperation(
                            newCalcArray[newCalcArray.length - 1],
                            calcArray[j]
                        );
                        currOperation = null;
                    } else {
                        newCalcArray.push(calcArray[j]);
                    }
                }
            }
            calcArray = newCalcArray;
            newCalcArray = [];
        }
        if (calcArray.length > 1 || isNaN(calcArray[0])) {
            return "Invalid string";
        } else {
            return calcArray[0];
        }
    }
}
