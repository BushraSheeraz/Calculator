function showOne() {
    let rs = document.querySelector("#inp").value += 1;
}
function showTwo() {
    let rs = document.querySelector("#inp").value += 2;
} 
function showThree() {
    let rs = document.querySelector("#inp").value += 3;
}
function showFour() {
    let rs = document.querySelector("#inp").value += 4;
} 
function showFive() {
    let rs = document.querySelector("#inp").value += 5;
} 
function showSix() {
    let rs = document.querySelector("#inp").value += 6;
} 
function showSeven() {
    let rs = document.querySelector("#inp").value += 7;
}
function showEight() {
    let rs = document.querySelector("#inp").value += 8;
}
function showNine() {
    let rs = document.querySelector("#inp").value += 9;
}
function showZero() {
    let rs = document.querySelector("#inp").value += 0;
}

function showAdd() {
    document.querySelector("#inp").value += " + ";
}
function showSub() {
    document.querySelector("#inp").value += " - ";
}
function showMultiply() {
    document.querySelector("#inp").value += " * ";
}
function showDivide() {
    document.querySelector("#inp").value += " / ";
}
function showDecimal(){
    document.querySelector("#inp").value += " . ";
}
function clearScreen(){
    document.querySelector("#inp").value = "  ";
    document.querySelector("#inp2").value= "  ";
}
function removeItem() {
    let num = document.querySelector("#inp").value;
    let num2 = document.querySelector("#inp2").value;
    let x = num;
    let y = num2;
    if (y.length > 0){
        y = y.substring(0, y.length - 1);
        num2 = y;
    }
    else if (x.length > 0) {
        x = x.substring(0, x.length - 1);
        num = x;
    }
    document.querySelector("#inp").value = num;
    document.querySelector("#inp2").value = num2;
}
function result(){
    document.querySelector("#inp2").value += " = " + eval(document.querySelector("#inp").value);
}
