let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");


plusBtn.onclick = function ciao() {
    let result = document.getElementById("result");
    return result.innerHTML++;
}

minusBtn.onclick = function ciao2() {
    let result = document.getElementById("result");
    return result.innerHTML--;
}

