// creates variables for the input and equal button + saves DOM element
var equainput1 = document.getElementById("equainput1");
var equainput2 = document.getElementById("equainput2");
var equafunct = document.getElementById("equafunct");
var calcbutton = document.getElementById("calcbutton");
var display = document.getElementById("display");
var result;

// EventListener; responds to user "clicks"
calcbutton.addEventListener("click",
// the following describes the calculations to be performed with a given input
function(){
//create variables to abbreviate others & cleans appearance
    var ui1 = equainput1.value;
    var ui2 = equainput2.value;
    var fun = equafunct.value;

    if(fun == "+") {
        result = +ui1 + +ui2;
        display.innerHTML = result;
    }
    else if(fun == "-") {
        result = +ui1 - +ui2;
        display.innerHTML = result;
    }
    else if(fun == "*") {
        result = +ui1 * +ui2;
        display.innerHTML = result;
    }
    else if(fun == "/") {
        result = +ui1 / +ui2;
        display.innerHTML = result;
    }
    else if(fun == "^") {
        result = Math.pow(+ui1, +ui2);
        display.innerHTML = result;
    }
    else if(fun == "√") {
        result = Math.sqrt(+ui2);
        display.innerHTML = result;
    }
})