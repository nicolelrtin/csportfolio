// declaring variables
var newitem = document.getElementById("newitem");
var opt = document.getElementById("opt");
var addbutton = document.getElementById("addbutton");
var list = document.getElementById("list");

// creating items and adding it to a list
addbutton.addEventListener("click",
function showInput() {
    
    if (opt.checked){
        // alert();
        list.innerHTML += '<div style="font-weight: bold; color: #EBD0F6;">' +newitem.value +'</div>';
    }
     else {
         list.innerHTML += '<div>'+newitem.value+'</div>';
    }
    
});

// makes the list interactive with the user
list.addEventListener("click",
function (evt) {
    var task = evt.target;
    task.parentNode.removeChild(task);

    evt.preventDefault();
}, false);

// make list item italic when double clicked
list.addEventListener("mouseover",
function(evt) {
    var task = evt.target;
    task.innerHTML += '<div style="font-style: italic; color: #8F9DB8;">' +newitem.value +'</div>';
});