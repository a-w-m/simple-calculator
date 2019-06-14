(function calculator() {
    let buttonInputArray = []
    let isThereADecimal = false

    const displayToTerminal = function() {
        document.getElementById("terminal").innerHTML = buttonInputArray.join("")
    }

    const numbers = document.getElementsByClassName("numbers")

    for (let x = 0; x < numbers.length; x++) {
        numbers[x].onclick = function() {
            if (document.getElementById("terminal").innerHTML.indexOf("=") != -1) {
                buttonInputArray = []
                buttonInputArray.push(numbers[x].innerHTML)
                displayToTerminal();
            } else {
                buttonInputArray.push(numbers[x].innerHTML)
                displayToTerminal();
            }
        }
    }

    const operations = document.getElementsByClassName("operations")

    for (let operation = 0; operation < operations.length; operation++) {
        operations[operation].onclick = function() {
            if (buttonInputArray[buttonInputArray.length - 1] == "*" || buttonInputArray[buttonInputArray.length - 1] == "/" || buttonInputArray[buttonInputArray.length - 1] == "+" || buttonInputArray[buttonInputArray.length - 1] == "-" || buttonInputArray[buttonInputArray.length - 1] == ".") {

                buttonInputArray.pop()
                buttonInputArray.push(operations[operation].innerHTML)
                displayToTerminal();
                isThereADecimal = false;
            } else {
                buttonInputArray.push(operations[operation].innerHTML)
                displayToTerminal();
                isThereADecimal = false;
            }
        }

    }

    const equals = function () {

        let myRegex = /[\*\+-\/]+$/

        if (buttonInputArray[0] == '/' || buttonInputArray[0] == "*") {
            buttonInputArray.unshift(0)
            document.getElementById("terminal").innerHTML = buttonInputArray.join("") + "=" + eval(buttonInputArray.join(""));
            buttonInputArray = [eval(buttonInputArray.join(""))]

        } else if (myRegex.test(buttonInputArray.join(""))) {
            let buttonInputString = buttonInputArray.join("").replace(myRegex, "")
            document.getElementById("terminal").innerHTML = buttonInputString + "=" + eval(buttonInputString)
            buttonInputArray = [eval(buttonInputString)]
        } else {
            document.getElementById("terminal").innerHTML = buttonInputArray.join("") + "=" + eval(buttonInputArray.join(""));
            buttonInputArray = [eval(buttonInputArray.join(""))]
        }
    }


    document.getElementById("equals").onclick = equals;

    document.getElementById("allClear").onclick = function() {
        buttonInputArray = [];
        document.getElementById("terminal").innerHTML = "0"
        isThereADecimal = false;
    }

    const deleteLastInput = function () {
        if (buttonInputArray[buttonInputArray.length - 1] == ".") {
            buttonInputArray.pop()
            displayToTerminal();
            isThereADecimal = false;
        } else {
            buttonInputArray.pop()
            displayToTerminal();
        }
    }

    document.getElementById("delete").onclick = deleteLastInput;

 const decimal = function () {
        if (isThereADecimal == false) {
            buttonInputArray.push(".")
            displayToTerminal();
            isThereADecimal = true

        } else {
            displayToTerminal();
        }

    }
    document.getElementById("decimal").onclick = decimal

    document.addEventListener('keydown', (event) =>{

        const keyPress = event.key
        const operators = ["/", "*", "+", "-"]

        if(!(isNaN(keyPress))){

            if (document.getElementById("terminal").innerHTML.indexOf("=") != -1) {
                buttonInputArray = []
                buttonInputArray.push(keyPress)
                displayToTerminal();
            } else {
                buttonInputArray.push(keyPress)
                displayToTerminal();
            }
        }

        else if(operators.indexOf(keyPress) != -1 ){

            if (buttonInputArray[buttonInputArray.length - 1] == "*" || buttonInputArray[buttonInputArray.length - 1] == "/" || buttonInputArray[buttonInputArray.length - 1] == "+" || buttonInputArray[buttonInputArray.length - 1] == "-" || buttonInputArray[buttonInputArray.length - 1] == ".") {

                buttonInputArray.pop()
                buttonInputArray.push(keyPress)
                displayToTerminal();
                isThereADecimal = false;
            } else {
                buttonInputArray.push(keyPress)
                displayToTerminal();
                isThereADecimal = false;
            }

        }
        else if(keyPress == "=" || keyPress.toLowerCase() == "enter"){
            equals();

        }
        else if(keyPress.toLowerCase() == "backspace"|| keyPress.toLowerCase() == "delete"){
            deleteLastInput()
        }
        else if(keyPress == "."){
            decimal();
        }


    })


})();