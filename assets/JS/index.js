//Getting div container
let container = document.getElementById("container");


//creating first button (+) by using input
let plusBtn = document.createElement("input");
plusBtn.type = "button";
plusBtn.value = "+";

//inserting plus button
document.body.firstElementChild.prepend(plusBtn);


//creating result output by using a span
let number = document.createElement("span");
number.id = "result";
number.innerHTML = "0";

//inserting result
document.body.firstElementChild.prepend(number);


//creating second button (-) by using input
let minusBtn = document.createElement("input");
minusBtn.type = "button";
minusBtn.value = "-";

//inserting minus button
document.body.firstElementChild.prepend(minusBtn);


//Assigning increasing function

plusBtn.onclick = function increaseValue() {
    let result = document.getElementById("result");
    return result.innerHTML++;
}

//Assigning decreasing function
minusBtn.onclick = function decreaseValue() {
    let result = document.getElementById("result");
    return result.innerHTML--;
}

