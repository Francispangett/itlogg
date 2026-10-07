/* ==============================
   CALCULATOR
   ============================== */

const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");


let firstNumber = "";
let secondNumber = "";
let operator = "";


/* ==============================
   NUMBER BUTTONS
   ============================== */

numberButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.getAttribute("data-value");

        if (operator === "") {

            if (value === "." && firstNumber.includes(".")) {
                return;
            }

            firstNumber += value;

            display.value = firstNumber;

        } 
        
        else {

            if (value === "." && secondNumber.includes(".")) {
                return;
            }

            secondNumber += value;

            display.value = secondNumber;
        }

    });

});


/* ==============================
   OPERATOR BUTTONS
   ============================== */

operatorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (firstNumber === "") {
            return;
        }

        operator = button.getAttribute("data-value");

    });

});

/* ==============================
   EQUALS BUTTON
   ============================== */

equalsButton.addEventListener("click", function() {

    // Special 143 condition
    if (firstNumber === "05" && secondNumber === "" && operator === "") {

        display.value = "Iluvicecream(D)";

        firstNumber = "";
        secondNumber = "";
        operator = "";

        return;
    }


    // Normal calculator calculation
    if (
        firstNumber === "" ||
        secondNumber === "" ||
        operator === ""
    ) {
        return;
    }


    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    let result;


    if (operator === "+") {

        result = num1 + num2;

    }

    else if (operator === "-") {

        result = num1 - num2;

    }

    else if (operator === "*") {

        result = num1 * num2;

    }

    else if (operator === "/") {

        if (num2 === 0) {

            display.value = "Error";

            firstNumber = "";
            secondNumber = "";
            operator = "";

            return;
        }

        result = num1 / num2;

    }


    display.value = result;

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";

});

/* ==============================
   CLEAR BUTTON
   ============================== */

clearButton.addEventListener("click", function() {

    firstNumber = "";
    secondNumber = "";
    operator = "";

    display.value = "0";

});


/* ==============================
   DELETE BUTTON
   ============================== */

deleteButton.addEventListener("click", function() {

    if (operator === "") {

        firstNumber = firstNumber.slice(0, -1);

        if (firstNumber === "") {
            display.value = "0";
        }

        else {
            display.value = firstNumber;
        }

    }

    else {

        secondNumber = secondNumber.slice(0, -1);

        if (secondNumber === "") {
            display.value = "0";
        }

        else {
            display.value = secondNumber;
        }

    }

});


/* ==============================
   MOVABLE CALCULATOR
   ============================== */

const calculator = document.querySelector(".calculator");
const header = document.querySelector(".calculator-header");


let isDragging = false;

let offsetX;
let offsetY;


/* Start dragging */

header.addEventListener("mousedown", function(event) {

    isDragging = true;

    offsetX = event.clientX - calculator.offsetLeft;
    offsetY = event.clientY - calculator.offsetTop;

});


/* Move calculator */

document.addEventListener("mousemove", function(event) {

    if (isDragging === false) {
        return;
    }

    calculator.style.left =
        (event.clientX - offsetX) + "px";

    calculator.style.top =
        (event.clientY - offsetY) + "px";

});


/* Stop dragging */

document.addEventListener("mouseup", function() {

    isDragging = false;

});

