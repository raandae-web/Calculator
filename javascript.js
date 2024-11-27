let add = function(a, b){
    return a + b;
}

let subtract = function(a,b){
    return a - b;
}

let multiply = function(a,b){
    return a * b;
}

let divide = function(a,b){
    return a / b;
}

let value1 = 0;

let operator = "";

let value2 = 0;

let numberVal = "";

let numberVal2 = ""




    
const numbersContainer = document.querySelector(".numbers-container");

const totalDisplay = document.querySelector(".total-display")

const operatorContainer = document.querySelector(".operator-container")  


numbersContainer.addEventListener("click", (event) => {
   
    if (operator === "") {
        
        numberVal += event.target.textContent; 
        value1 = parseInt(numberVal);
        totalDisplay.textContent = value1
    } else {
        
        numberVal2 += event.target.textContent;
        value2 = parseInt(numberVal2);
        totalDisplay.textContent = value2
    }
});




operatorContainer.addEventListener("click", (event)=>{
    const clickedOperator = event.target.textContent;

    if (clickedOperator !== "=" && clickedOperator !== '') {
       
        operator = clickedOperator;
        totalDisplay.textContent = operator
    }

    if (clickedOperator === "=") {
        
        operate(value1, operator, value2);

        value1 = 0;
        value2 = 0;
        operator = "";
    }
});



let operate = function(v1, op, v2){

    let result;
    switch(op) {
    case '+':
        result = add(v1, v2);
        break;
    case '-':
        result = subtract(v1, v2);
        break;
    case '*':
        result = multiply(v1, v2);
        break;
    case '/':
        result = divide(v1, v2);
        break;
    default:
        result = "Error"; 
        break;

}
totalDisplay.textContent = result;  
}

