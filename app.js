const btns = document.querySelectorAll(".btn")
const display = document.querySelector(".display")
let operation = 0;
let currentNumber = ""
let previousNumber = ""
let displayText = ""

btns.forEach((btn) => {


    btn.addEventListener("click", (e) => {
        if (e.target.textContent != "=") {
            displayText = display.textContent + e.target.textContent
            display.textContent = displayText
        }

        switch (e.target.textContent) {
            case "+":
                operation = 1;

                break;
            case "-":
                operation = 2;

                break;

            case "/":
                operation = 3;

                break;
            case "X":
                operation = 4;
                break;
            case "=":
                calculate(operation, previousNumber, currentNumber)
                previousNumber = ""
                currentNumber = ""
                break;
            default:

                if (previousNumber == "") {
                    previousNumber = parseInt(e.target.textContent)

                } else {
                    currentNumber = parseInt(e.target.textContent)

                }

                break;





        }

    })
})

function calculate(operation, num1, num2) {

    switch (operation) {
        case 1:
            updateDisplay(sum(num1, num2))

            break;
        case 2:
            updateDisplay(sub(num1, num2))
            break
        case 3:
            updateDisplay(div(num1, num2))
            break;
        case 4:
            updateDisplay(mul(num1, num2))
            break
    }
}

function updateDisplay(text) {
    display.textContent = text
}

function sum(num1, num2) {
    return (num1 + num2)
}

function sub(num1, num2) {
    return (num1 - num2)
}

function div(num1, num2) {
    return (num1 / num2)
}

function mul(num1, num2) {
    return (num1 * num2)
}