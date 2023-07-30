let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

for ( item of btn) {
    item.addEventListener("click" , function(e){
        let btnText = e.target.innerText;
        if (btnText == 'x') {
            btnText = '*'
        }
        if (btnText == '÷') {
            btnText ='/'
        }
        screen.value += btnText;
    })
}

function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value , 2);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value , 2);
}
function log() {
    screen.value = Math.log(screen.value);
}
function pi() {
    screen.value = 3.141592653589;
}
function e() {
    screen.value = 2.718281828459045;
}

function Factorial(number) {
    let result = 1;
    for (let i = 0; i <number; i++) {
      result *= i +1; 
    }
    screen.value = result;
}