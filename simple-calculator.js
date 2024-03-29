(function calculator() {
  let buttonInputArray = [];
  let isThereADecimal = false;

  const displayToTerminal = function() {
    /*This function renders the buttons pressed on the calculator, which are stored in the array buttonInputArray, on the calculator's terminal. 
    Dynamically resizes the content of the terminal depending on its length*/

    document.getElementById("terminal").innerHTML = buttonInputArray.join("");
    if (
      buttonInputArray.join("").length > 13 &&
      buttonInputArray.join("").length <= 38
    ) {
      document.getElementById("terminal").style.fontSize = "2rem";
    } else if (
      buttonInputArray.join("").length > 38 &&
      buttonInputArray.join("").length <= 51
    ) {
      document.getElementById("terminal").style.fontSize = "1.5rem";
    } else if (buttonInputArray.join("").length > 51) {
      document.getElementById("terminal").style.fontSize = "1rem";
    } else {
      document.getElementById("terminal").style.fontSize = "3rem";
    }
  };

  const numbers = document.getElementsByClassName("numbers");

  /* assigns a function to each number element that handles what happens when the number is clicked*/

  for (let x = 0; x < numbers.length; x++) {
    numbers[x].onclick = function() {
      numbers[x].classList.toggle("active")
      if (document.getElementById("terminal").innerHTML.indexOf("=") != -1) {
        buttonInputArray = [];
        buttonInputArray.push(numbers[x].innerHTML);
        displayToTerminal();
        this.blur();
      } else {
        buttonInputArray.push(numbers[x].innerHTML);
        displayToTerminal();
        this.blur();
      }
    };
  }

  const operations = document.getElementsByClassName("operations");

  /* assigns a function to each operation element that handles what happens when the numerical oepration is clicked*/

  for (let operation = 0; operation < operations.length; operation++) {
    operations[operation].onclick = function() {
      operations[operation].classList.toggle("active")
      if (
        buttonInputArray[buttonInputArray.length - 1] == "*" ||
        buttonInputArray[buttonInputArray.length - 1] == "/" ||
        buttonInputArray[buttonInputArray.length - 1] == "+" ||
        buttonInputArray[buttonInputArray.length - 1] == "."
      ) {
          if (operations[operation].innerHTML != "-"){
          
        
                   //buttonInputArray.pop();
                    buttonInputArray.push(operations[operation].innerHTML);
                    displayToTerminal();
                    isThereADecimal = false;
                    this.blur();
      }  
         else {
        buttonInputArray.push(operations[operation].innerHTML);
        displayToTerminal();
        isThereADecimal = false;
        this.blur();
         } }
        
        else {
        buttonInputArray.push(operations[operation].innerHTML);
        displayToTerminal();
        isThereADecimal = false;
        this.blur();
      }
      
    };
  }

  const equals = function() {
    /*This function uses mathjs evaluation function to evaluate mathematical expressions stored in strings*/
    let myRegex = /[\*\+-\/]+$/;
  

    
    if (buttonInputArray[0] == "/" || buttonInputArray[0] == "*") {
      buttonInputArray.unshift(0);
      document.getElementById("terminal").innerHTML =
        buttonInputArray.join("") +
        "=" +
        math.evaluate(buttonInputArray.join(""));
      buttonInputArray = [math.evaluate(buttonInputArray.join(""))];
    } else if (myRegex.test(buttonInputArray.join(""))) {
      let buttonInputString = buttonInputArray.join("").replace(myRegex, "");
      document.getElementById("terminal").innerHTML =
        buttonInputString + "=" + math.evaluate(buttonInputString);
      buttonInputArray = [math.evaluate(buttonInputString)];
    } else {
      document.getElementById("terminal").innerHTML =
        buttonInputArray.join("") +
        "=" +
        math.evaluate(buttonInputArray.join(""));
      buttonInputArray = [math.evaluate(buttonInputArray.join(""))];
    }
  };

  document.getElementById("equals").onclick = equals;

  document.getElementById("allClear").onclick = function() {
    /*This function returns the calculator to it's initial state*/

    buttonInputArray = [];
    document.getElementById("terminal").innerHTML = "0";
    isThereADecimal = false;
    this.blur();
  };

  const deleteLastInput = function() {
    this.classList.toggle("active")
    if (buttonInputArray[buttonInputArray.length - 1] == ".") {
      buttonInputArray.pop();
      displayToTerminal();
      isThereADecimal = false;
      this.blur();
    } else {
      buttonInputArray.pop();
      displayToTerminal();
      this.blur();
    }
  };

  document.getElementById("delete").onclick = deleteLastInput;

  const decimal = function() {
    this.classList.toggle("active")

    if (isThereADecimal == false) {
      buttonInputArray.push(".");
      displayToTerminal();
      isThereADecimal = true;
      this.blur();
    } else {
      displayToTerminal();
      this.blur();
    }
  };
  document.getElementById("decimal").onclick = decimal;

  document.addEventListener("keydown", event => {
    /*event listener that handles key presses instead of mouse clicks*/
    const keyPress = event.key;
    const operators = ["/", "*", "+", "-"];
    const button = document.querySelectorAll("[data-key=" +"\'" + event.key + "\'" +"]")
    button[0].classList.toggle("active")

    if (!isNaN(keyPress)) {
      if (document.getElementById("terminal").innerHTML.indexOf("=") != -1) {
        buttonInputArray = [];
        buttonInputArray.push(keyPress);
        displayToTerminal();
      } else {
        buttonInputArray.push(keyPress);
        displayToTerminal();
      }
    } else if (operators.indexOf(keyPress) != -1) {
      if (
        buttonInputArray[buttonInputArray.length - 1] == "*" ||
        buttonInputArray[buttonInputArray.length - 1] == "/" ||
        buttonInputArray[buttonInputArray.length - 1] == "+" ||
        buttonInputArray[buttonInputArray.length - 1] == "."
      ) {
          if (keyPress != "-"){
          
        
                    buttonInputArray.push(keyPress);
                    displayToTerminal();
                    isThereADecimal = false;
                    this.blur();
      }  
         else {
        buttonInputArray.push(keyPress);
        displayToTerminal();
        isThereADecimal = false;
        this.blur();
         } }
        
        else {
        buttonInputArray.push(keyPress);
        displayToTerminal();
        isThereADecimal = false;
        this.blur();
      }
    } else if (keyPress == "=" || keyPress === "Enter") {
      equals();
    } else if (
      keyPress.toLowerCase() == "backspace" ||
      keyPress.toLowerCase() == "delete"
    ) {
      deleteLastInput();
    } else if (keyPress == ".") {
      decimal();
    }
  });

  const buttons = document.getElementsByTagName("button")
  Array.from(buttons).forEach(button =>{
    button.addEventListener("transitionend", function(){
      button.classList.remove("active");
    })

  })
})();



