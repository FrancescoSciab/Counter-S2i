//Creating elements through "addElem" function
function addElem(tagName, id, innerHTML, value, type) {
    let elem = document.createElement(tagName);
    elem.id= id;
    elem.innerHTML = innerHTML;
    elem.value = value;
    elem.type = type;

    //inserting elements(to be declared inside this function as "elem" is a local variable)
    document.body.firstElementChild.insertAdjacentElement("afterbegin", elem);
}




let plusBtn = addElem("input", "null", "null", "+", "button");
let number = addElem("span", "result", 0, "null", "null");
let minusBtn = addElem("input", "null", "null", "-", "button");


//Buttons working through "updateValue" function
document.body.firstElementChild.addEventListener('click', function updateValue(event) {

    let result = document.getElementById("result");
    if (event.target.value == "+") {
        result.innerHTML++;
    } else if (event.target.value == "-") {
        result.innerHTML--;
    } else return;
});
