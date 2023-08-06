// make variables
let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");
let switchBox = document.querySelector(".switch");
let body = document.querySelector("body");

let lightTheme = true;

for (item of btn) {
    item.addEventListener("click", function (e) {
        let btnText = e.target.innerText;
        if (btnText == 'x') {
            btnText = '*'
        }
        if (btnText == '÷') {
            btnText = '/'
        }
        if (screen.value.length === 0 && isOperator(btnText)) return;
        if (isOperator(btnText) && doseEndsWithOperator(screen.value)) return;
        screen.value += btnText;
    })
}

function sin() {
    calculateTrig(Math.sin);
}

function cos() {
    calculateTrig(Math.cos);
}

function tan() {
    calculateTrig(Math.tan);
}

function pow() {
    calculate();
    screen.value = Math.pow(screen.value , 2)
}

function sqrt() {
    calculate();
    if (screen.value <= 0 || isNaN(screen.value)) {
        return screen.value = "Error"
    }
    screen.value = Math.sqrt(screen.value, 2);

}

function log() {
    calculate();
    if (screen.value <= 0 ||  isNaN(screen.value)) {
        return screen.value = "Error"
    }
    screen.value = Math.log10(screen.value);
}

function pi() {
    screen.value = Math.PI;
}

function e() {
    screen.value = Math.E;
}

function Factorial(number) {
    calculate();
    if (isNaN(number) || number < 0) {
        screen.value = "Error";
        return;
    }
    
    let result = 1;
    for (let i = 0; i < number; i++) {
        result *= i +1;
    }
    screen.value = result;
}

function backSpace() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}

function calculate() {
    if (screen.value === "") return;
    if (screen.value.includes(")") || screen.value.includes("(")) {
        if (!isValidParentheses(screen.value)) {
            screen.value = "Error";
            return;
          }
    }
    screen.value = eval(screen.value);
}

function doseEndsWithOperator(str) {
    return (
        str.endsWith("+") ||
        str.endsWith("/") ||
        str.endsWith("*")
    );
}

function isOperator(str) {
    return str === "+" || str === "/" || str === "*";
}

// validation for sin , cos ,tan and pow
function calculateTrig(func) {
    calculate();
    let value = parseFloat(screen.value);
    if (isNaN(value)) {
        screen.value = "Error";
        return;
    }
    screen.value = func(value);
}

function isValidParentheses(expression) {
    const parenthesesStack = [];
  
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === '(' || expression[i] === '[') {
        parenthesesStack.push(expression[i]);
      } else if (expression[i] === ')' || expression[i] === ']') {
        if (parenthesesStack.length === 0) {
          return false; // Closing parenthesis encountered without matching opening parenthesis
        }
  
        const lastOpeningParenthesis = parenthesesStack.pop();
        if (
          (expression[i] === ')' && lastOpeningParenthesis !== '(') ||
          (expression[i] === ']' && lastOpeningParenthesis !== '[')
        ) {
          return false; // Mismatched opening and closing parenthesis
        }
      }
    }
  
    return parenthesesStack.length === 0; // Check if all opening parentheses have been closed
  }


// for dark and light theme
window.addEventListener("load" ,function(){
    let getTheme = this.localStorage.getItem("mode");
    if (getTheme === "dark") {
        darkMode();
    }else if (getTheme === "light"){
        lightMode()
    }
})

switchBox.addEventListener("click" , function(){
    if (lightTheme) {
        darkMode();
    }else{
        lightMode()
    }
})

function darkMode() {
    lightTheme = false;
    localStorage.setItem("mode" , "dark");
    body.classList.add("dark");
}

function lightMode() {
    lightTheme = true;
    localStorage.setItem("mode" , 'light');
    body.classList.remove("dark");
}