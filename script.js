const btnZero = document.getElementById("btnZero");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");

const clearBtn = document.getElementById("clearBtn");
const signalConvert = document.getElementById("signalConvert");
const commaBtn = document.getElementById("comma");

const divideBtn = document.getElementById("divideBtn")
const multiplyBtn = document.getElementById("multiplyBtn")
const minusBtn = document.getElementById("minusBtn")
const sumBtn = document.getElementById("sumBtn");
const equalBtn = document.getElementById("equalBtn");

const displayContent = document.getElementById("displayContent")

const numberChoice = [];
let firstValue = 0;
let secondValue = 0;
let finalResult = 0;
let operator = "";

function operatorClick(operatorChoice) {  // Function to sum
    const agroupArray = numberChoice.reduce((total, element) => total + element, "") // Sum
    firstValue = parseFloat(agroupArray); // Converts to number type
    displayContent.innerHTML = 0 // Clear the display
    numberChoice.length = 0; // Clear the array numberChoice
    let result 
    
    switch (operatorChoice) {
        case "Sum":
            result = clickingBtn(sumBtn, "special", "crimson");
            if (result === "Unpressed") {operator = "" }
            else { operator = operatorChoice }
            break;
        case "Divide":
            result = clickingBtn(divideBtn, "special", "crimson");
            if (result === "Unpressed") {operator = "" }
            else { operator = operatorChoice }
            break;  
        case "Multiply":
            result = clickingBtn(multiplyBtn, "special", "crimson");
            if (result === "Unpressed") {operator = "" }
            else { operator = operatorChoice }
            break;
        case "Minus":
            result = clickingBtn(minusBtn, "special", "crimson");
            if (result === "Unpressed") {operator = "" }
            else { operator = operatorChoice }
            break;          
    }
}       

function clickingBtn(button, special, crimson) {     
    if(button.classList.contains(special)) {
        button.classList.remove(special);
        button.classList.add(crimson);
        return "Unpressed" }
    else if(button.classList.contains(crimson)) {
        button.classList.remove(crimson);
        button.classList.add(special);
        return "Pressed"
    }    
}

function equalTheCount() { // Function to equal
    const agroupArray = numberChoice.reduce((total, element) => total + element, "") // Sum
    if (finalResult !== 0) {
        firstValue = parseFloat(agroupArray); // Converts to number type
        switch (operator) {
            case "Sum":
                finalResult += firstValue
            break;
            case "Minus":
                finalResult -= firstValue
            break;
            case "Multiply":
                console.log(`${firstValue}`)
                finalResult = firstValue * finalResult
                console.log("caso multiply")
            break;    
            case "Divide":
                finalResult /= firstValue
        }
    }
    // Second Value Case
    else if(operator === "Sum") {
        secondValue = parseInt(agroupArray);
        finalResult = firstValue + secondValue
    }
    else if(operator === "Minus") {
        secondValue = parseInt(agroupArray);
        finalResult = firstValue - secondValue
    }
    else if(operator === "Multiply") {
        secondValue = parseInt(agroupArray);
        finalResult = firstValue * secondValue
    }
    else if (operator === "Divide") {
        secondValue = parseInt(agroupArray);
        finalResult = firstValue / secondValue
    }

    displayContent.innerHTML = finalResult
    numberChoice.length = 0;
    operator = "";
    removeSelection();
    // firstValue = 0; 
    secondValue = 0;
}

function displayMessage(number) {
    let currentContent = displayContent.innerHTML;
    if (currentContent === "0" && number === ",") {
    console.log("entrou no if")  
    displayContent.innerHTML = currentContent + number }
    else if(number === "-") {
        displayContent.innerHTML = number + currentContent}
    else if(currentContent === "0") {
        displayContent.innerHTML = number
    }
    else {
        console.log("entrou no else")
        displayContent.innerHTML = currentContent + number;
    }
}

btnZero.addEventListener("click", () => {
    numberChoice.push("0");
    displayMessage(0); });
btnOne.addEventListener("click", () => {
        numberChoice.push("1");
    displayMessage(1); });
btnTwo.addEventListener("click", () => {
    numberChoice.push("2");
    displayMessage(2); });
btnThree.addEventListener("click", () => {
    numberChoice.push("3");
    displayMessage(3); });
btnFour.addEventListener("click", () => {
    numberChoice.push("4");
    displayMessage(4); });
btnFive.addEventListener("click", () => {
    numberChoice.push("5");
    displayMessage(5); });
btnSix.addEventListener("click", () => {
    numberChoice.push("6");
    displayMessage(6); });
btnSeven.addEventListener("click", () => {
    numberChoice.push("7");
    displayMessage(7); });
btnEight.addEventListener("click", () => {
    numberChoice.push("8");
    displayMessage(8); });
btnNine.addEventListener("click", () => {
    numberChoice.push("9");
    displayMessage(9); });
    
equalBtn.addEventListener("click", equalTheCount);
sumBtn.addEventListener("click", function(event) {
    event.preventDefault();
    operatorClick("Sum")
});
divideBtn.addEventListener("click", function(event) {
    event.preventDefault();
    operatorClick("Divide")
})
multiplyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    operatorClick("Multiply")
})
minusBtn.addEventListener("click", function(event) {
    event.preventDefault();
    operatorClick("Minus")
});

clearBtn.addEventListener("click", () => {
    displayContent.innerHTML = "0"
    operator = ""
    numberChoice.length = 0
    finalResult = 0
    removeSelection();
});

commaBtn.addEventListener("click", () => {
    numberChoice.push(".")
    displayMessage(",")
})
 
signalConvert.addEventListener("click", () => {
    numberChoice.unshift("-");
    displayMessage("-")
})

function removeSelection() {
const specialClass = document.querySelectorAll(".special")
specialClass.forEach(element => {
        element.classList.remove("special");
        element.classList.add("crimson");})
}