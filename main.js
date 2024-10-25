const numbers = Array.from(document.getElementsByClassName("number"));
const bar = document.getElementById("math");
const addButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
let currentInput = "";
let num1 = undefined;
let num2 = undefined;
let operator = undefined;

numbers.map((number) => {
  number.addEventListener("click", function (e) {
    const input = e.target.innerHTML;
    console.log(input);
    const intInput = Number.parseInt(input);
    if (Number.isInteger(intInput)) {
      currentInput += intInput;
      bar.innerHTML = currentInput;
    } else {
      checkOperator(input);
    }
    printValues();
  });
});

function checkOperator(str) {
  if (!num1) {
    num1 = Number.parseInt(currentInput);
    currentInput = "";
  } else {
    num2 = Number.parseInt(currentInput);
    currentInput = "";
  }
  switch (str) {
    case "+":
      operator = "add";
      switchOperator();
      break;
    case "-":
      operator = "subtract";
      switchOperator();
      break;
    case "x":
      operator = "multiply";
      switchOperator();
      break;
    case "/":
      operator = "divide";
      switchOperator();
      break;
    case "CE":
      clear();
      switchOperator();
      break;
    case "=":
      const result = doMath();
      bar.innerHTML = result;
      num1 = undefined;
      num2 = undefined;
      return;
    default:
      alert("Invalid");
      break;
  }
}

function printValues() {
  console.log("Printing Value");
  console.log("Current Input: " + currentInput);

  console.log("Number 1:" + num1);
  console.log("Number 2:" + num2);
  console.log("Operator:" + operator);

  console.log("Done Printing Value");
}

function doMath() {
  switch (operator) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      return "error";
  }
}

function clear() {
  bar.innerHTML = "";
  num1 = undefined;
  num2 = undefined;
  currentInput = "";
  operator = undefined;
}

function switchOperator() {
  switch(operator) {
    case "add":
      addButton.style.backgroundColor = "green";
      minusButton.style.backgroundColor = "beige";
      multiplyButton.style.backgroundColor = "beige";
      divideButton.style.backgroundColor = "beige";
      break;
    case "subtract":
      addButton.style.backgroundColor = "beige";
      minusButton.style.backgroundColor = "green";
      multiplyButton.style.backgroundColor = "beige";
      divideButton.style.backgroundColor = "beige";
      break;
    case "multiply":
      addButton.style.backgroundColor = "beige";
      minusButton.style.backgroundColor = "beige";
      multiplyButton.style.backgroundColor = "green";
      divideButton.style.backgroundColor = "beige";
      break;
    case "divide":
      addButton.style.backgroundColor = "beige";
      minusButton.style.backgroundColor = "beige";
      multiplyButton.style.backgroundColor = "beige";
      divideButton.style.backgroundColor = "green";
      break;
    default:
      addButton.style.backgroundColor = "beige";
      minusButton.style.backgroundColor = "beige";
      multiplyButton.style.backgroundColor = "beige";
      divideButton.style.backgroundColor = "beige";
      break;
    
  }
}