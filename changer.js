// creating variables and saving DOM elements to each
var colorinput = document.getElementById("colorinput");
var colorbutton = document.getElementById("colorbutton");

// EventListener for button.
// Sets the body's background coloe to the user provided value
colorbutton.addEventListener("click", function(){
    document.body.style.backgroundColor = colorinput.value;
})