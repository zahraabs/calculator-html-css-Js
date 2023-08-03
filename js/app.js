let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

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
    calculate();
    screen.value = Math.sin(screen.value);
}
function cos() {
    calculate();
    screen.value = Math.cos(screen.value);
}
function tan() {
    calculate();
    screen.value = Math.tan(screen.value);
}
function pow() {
    calculate();
    screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
    calculate();
    if (screen.value <= 0) {
        return screen.value = "Error"
    }
    screen.value = Math.sqrt(screen.value, 2);

}
function log() {
    calculate();
    if (screen.value <= 0) {
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
    let result = 1;
    if (number < 0) {
        return screen.value = "Error";
    }

    for (let i = 0; i < number; i++) {
        result *= i + 1;
    }
    screen.value = result;
}

function backSpace() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}

function calculate() {
    if (screen.value === "") return;
    if (screen.value.includes(")") || screen.value.includes("(")) {
        if (!/\([^)]*\)|\[[^\]]*\]/g.test(screen.value)) {
            screen.value = "Error";
            return;
        }
    }
    screen.value = eval(screen.value);
}

function doseEndsWithOperator(str) {
    return (
        str.endsWith("+") ||
        str.endsWith("-") ||
        str.endsWith("/") ||
        str.endsWith("*")
    );
}

function isOperator(str) {
    return str === "+" || str === "-" || str === "/" || str === "*";
}