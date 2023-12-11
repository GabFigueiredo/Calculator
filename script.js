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

const divideBtn = document.getElementById("divideBtn")
const multiplyBtn = document.getElementById("multiplyBtn")
const minusBtn = document.getElementById("minusBtn")
const sumBtn = document.getElementById("sumBtn");
const equalBtn = document.getElementById("equalBtn");

const displayContent = document.getElementById("displayContent")
const pressedBtns = document.querySelectorAll('.crimson')

const numberChoice = [];
let firstValue = 0;
let secondValue = 0;
let operator = "";

function sumChoice(operatorChoice) {  // Function to sum
    const displayTest = numberChoice.reduce((total, element) => total + element, "") // Sum
    firstValue = parseInt(displayTest); // Converts to number type
    displayContent.innerHTML = 0 // Clear the display
    numberChoice.length = 0; // Clear the array numberChoice
    
    if(sumBtn.classList.contains("crimson")) {
        console.log("entrou no if")
        operator = operatorChoice
        sumBtn.classList.remove("crimson")
        sumBtn.classList.add("special") }
    else if (sumBtn.classList.contains("special")) {
        console.log("entrou no else") 
        operator = "";
        sumBtn.classList.remove("special");
        sumBtn.classList.add("crimson")
    }
}       


function minusChoice() { // Function to minus
    const displayTest = numberChoice.reduce((total, element) => total + element, "") // Sum
    firstValue = parseInt(displayTest); // Converts to number type
    numberChoice.length = 0; // Clear the numberChoice
    operator = "Minus" 
}

function multiplyChoice() { // Function to multiply
    const displayTest = numberChoice.reduce((total, element) => total + element, "") // Sum
    firstValue = parseInt(displayTest); // Converts to number type
    numberChoice.length = 0; // Clear the numberChoice
    operator = "Multiply"  
    console.log("entrou no if, e o valor é " + firstValue)
}

function divideChoice() { // Function to divide
    const displayTest = numberChoice.reduce((total, element) => total + element, "") // Sum
    firstValue = parseInt(displayTest); // Converts to number type
    numberChoice.length = 0; // Clear the numberChoice
    operator = "Divide"  
}


function equalTheCount() { // Function to equal
    const displayTest = numberChoice.reduce((total, element) => total + element, "") // Sum
    if(operator === "Sum") {
        secondValue = parseInt(displayTest);
        numberChoice.length = 0;
        displayContent.innerHTML = firstValue + secondValue
        firstValue = 0;
        secondValue = 0;
    }
    else if(operator === "Minus") {
        console.log(firstValue - secondValue)
        displayContent.innerHTML = firstValue - secondValue
        firstValue = 0;
        secondValue = 0;
    }
    else if(operator === "Multiply") {
        console.log(firstValue * secondValue)
        displayContent.innerHTML = firstValue * secondValue
        firstValue = 0;
        secondValue = 0;
    }
    else if (operator === "Divide") {
        console.log(firstValue / secondValue)
        displayContent.innerHTML = firstValue / secondValue
        firstValue = 0;
        secondValue = 0;
    }
}

function displayMessage(number) {
    let currentContent = displayContent.innerHTML;
    if (currentContent === "0") {  
    displayContent.innerHTML = number }
    else {
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

sumBtn.addEventListener("click", sumChoice);
equalBtn.addEventListener("click", equalTheCount);
divideBtn.addEventListener("click", divideChoice)
multiplyBtn.addEventListener("click", multiplyChoice)
minusBtn.addEventListener("click", minusChoice);

clearBtn.addEventListener("click", () => {
    displayContent.innerHTML = "0"
    operator = ""

});
signalConvert.addEventListener("click", () => {
    firstValue * -1
    secondValue * -1
})

// pressedBtns.forEach(btnEl => {
//     btnEl.addEventListener('click', () => {
//         document.querySelector('.special')?.classList.remove('special');
//         btnEl.classList.add('special');
//     })
// })
   