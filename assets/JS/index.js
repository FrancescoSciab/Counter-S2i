function CreateElem(tagName, id, innerHTML, value, type) {
    let elem = document.createElement(tagName);
    elem.id= id;
    elem.innerHTML = innerHTML;
    elem.value = value;
    elem.type = type;

    //inserting plus button
document.body.firstElementChild.insertAdjacentElement("afterbegin", elem);
//inserting result
document.body.firstElementChild.insertAdjacentElement("afterbegin", elem);
//inserting minus button
document.body.firstElementChild.insertAdjacentElement("afterbegin", elem);

}

//Getting div container
const container = document.getElementById("container");



let plusBtn = new CreateElem("input", "null", "null", "+", "button");
let number = new CreateElem("span", "result", 0, "null", "null");
let minusBtn = new CreateElem("input", "null", "null", "-", "button");


//creating result output by using a span



//creating second button (-) by using input




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