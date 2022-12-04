//Getting buttons 
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");

//Assigning to plus button a function which increase span
plusBtn.onclick = function increaseValue() {
    let result = document.getElementById("result");
    return result.innerHTML++;
}

//Assigning to minus button a function which decrease span
minusBtn.onclick = function decreaseValue() {
    let result = document.getElementById("result");
    return result.innerHTML--;
}

