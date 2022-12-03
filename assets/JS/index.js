let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");


plusBtn.onclick = function increaseValue() {
    let result = document.getElementById("result");
    return result.innerHTML++;
}

minusBtn.onclick = function decreaseValue() {
    let result = document.getElementById("result");
    return result.innerHTML--;
}

