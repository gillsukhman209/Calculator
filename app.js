const btns = document.querySelectorAll(".btn")
let operation = 0;
let currentNumber = 0
let previousNumber;

btns.forEach((btn) => {


    btn.addEventListener("click", (e) => {
        switch (e.target.textContent) {
            case "+":
                operation = 1;
                console.log("operation 1")
                break;
            case "-":
                operation = 2;
                console.log("operation 2")
                break;

            case "/":
                operation = 1;
                console.log("operation 3")
                break;
            case "X":
                operation = 2;
                console.log("operation 4")
                break;

        }
        if (!e.target.textContent in ["+", "-", "/", "X"]) {
            currentNumber = parseInt(e.target.textContent)
            console.log("Current number " + currentNumber)
        }
    })
})

function calculate(operation, num1, num2) {
    if (operation == 0) {
        sum(num1, num2)
    }
    switch (operation) {
        case 1:
            sum(num1, num2);
            break;
        case 2:
            sub(num1, num2);
            break
        case 3:
            div(num1, num2);
            break;
        case 4:
            mul(num1, num2);
            break
    }
}

function sum(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function div(num1, num2) {
    return num1 / num2
}

function mul(num1, num2) {
    return num1 * num2
}