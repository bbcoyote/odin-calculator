let numOne;
let operand;
let numTwo;

const add = function (numOne, numTwo) {
    return numOne + numTwo
}

const subtract = function (numOne, numTwo) {
    return numOne - numTwo
}

const multiply = function (numOne, numTwo) {
    return numOne * numTwo
}

const divide = function (numOne, numTwo) {
    return numOne / numTwo
}



const operate = function (numOne, operand, numTwo) {
    switch (operand) {
        case "/":
            divide(numOne, numTwo);
            break;
        case "*":
            multiply(numOne, numTwo);
            break;
        case "+":
            add(numOne, numTwo);
            break;
        case "-":
            subtract(numOne, numTwo);
            break;
        default:
            console.log("You Messed Up Somewhere")
    }
}