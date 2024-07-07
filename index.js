const zeroBtn = document.querySelector(".zero");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const enterBtn = document.querySelector(".enter");
const dotBtn = document.querySelector(".dot");
const inputBar = document.querySelector(".input-bar");
const clearBtn = document.querySelector(".clear");

let numOne = "";
let operand = "";
let numTwo = "";
let answer;

inputBar.value = `${numOne} ${operand} ${numTwo}`;



const add = function (numOne, numTwo) {
    return answer = numOne + numTwo
};

const subtract = function (numOne, numTwo) {
    return answer = numOne - numTwo
};

const multiply = function (numOne, numTwo) {
    return answer = numOne * numTwo
};

const divide = function (numOne, numTwo) {
    return answer = numOne / numTwo
};



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
            console.log("You Messed Up Somewhere");
    };
};

zeroBtn.addEventListener("click", () => {
    inputBar.value += "0";
    if (!operand) {
        numOne += 0;
    } else if (operand) {
        numTwo += 0;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})
oneBtn.addEventListener("click", () => {
    inputBar.value += "1";
    if (!operand) {
        numOne += 1;
    } else if (operand) {
        numTwo += 1;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
});

twoBtn.addEventListener("click", () => {
    inputBar.value += "2"
    if (!operand) {
        numOne += 2;
    } else if (operand) {
        numTwo += 2;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})

threeBtn.addEventListener("click", () => {
    inputBar.value += "3"
    if (!operand) {
        numOne += 3;
    } else if (operand) {
        numTwo += 3;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})

fourBtn.addEventListener("click", () => {
    inputBar.value += "4"
    if (!operand) {
        numOne += 4;
    } else if (operand) {
        numTwo += 4;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})

fiveBtn.addEventListener("click", () => {
    inputBar.value += "5"
    if (!operand) {
        numOne += 5;
    } else if (operand) {
        numTwo += 5;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})

sixBtn.addEventListener("click", () => {
    inputBar.value += "6"
    if (!operand) {
        numOne += 6;
    } else if (operand) {
        numTwo += 6;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})

sevenBtn.addEventListener("click", () => {
    inputBar.value += "7"
    if (!operand) {
        numOne += 7;
    } else if (operand) {
        numTwo += 7;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})

eightBtn.addEventListener("click", () => {
    inputBar.value += "8"
    if (!operand) {
        numOne += 8;
    } else if (operand) {
        numTwo += 8;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})

nineBtn.addEventListener("click", () => {
    inputBar.value += "9"
    if (!operand) {
        numOne += 9;
    } else if (operand) {
        numTwo += 9;
    };
    console.log(`${numOne} numOne, ${numTwo} numTwo`);
})

plusBtn.addEventListener("click", () => {
    inputBar.value += "+"
    operand = "+"

})

minusBtn.addEventListener("click", () => {
    inputBar.value += "-"
    operand = "-"

})

multiplyBtn.addEventListener("click", () => {
    inputBar.value += "*"
    operand = "*"

})

divideBtn.addEventListener("click", () => {
    inputBar.value += "/"
    operand = "/"

})

dotBtn.addEventListener("click", () => {
    inputBar.value += "."
})

enterBtn.addEventListener("click", () => {
    operate(numOne, operand, numTwo)
    console.log(operate(numOne, operand, numTwo))
})

// calculator takes number stores it in variable then takes
// an operator and stores it in variable.
// takes a 2nd number and stores it in another variable.
// once enter is pressed function is called to calculate the two numbers by
// the operator stored
// how to make the computer know to store 2nd number in another variable?