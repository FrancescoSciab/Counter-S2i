//Getting div container
const container = document.getElementById("container");


//creating first button (+) by using input
const plusBtn = document.createElement("input");
plusBtn.type = "button";
plusBtn.value = "+";


//creating result output by using a span
let number = document.createElement("span");
number.id = "result";
number.innerText = 0;


//creating second button (-) by using input
const minusBtn = document.createElement("input");
minusBtn.type = "button";
minusBtn.value = "-";


//inserting plus button
document.body.firstElementChild.prepend(plusBtn);
//inserting result
document.body.firstElementChild.prepend(number);
//inserting minus button
document.body.firstElementChild.prepend(minusBtn);


//Assigning increasing function
plusBtn.onclick = function increaseValue() {
    let result = document.getElementById("result");
    return result.innerText++;
}

//Assigning decreasing function
minusBtn.onclick = function decreaseValue() {
    let result = document.getElementById("result");
    return result.innerText--;
}