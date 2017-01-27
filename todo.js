// declaring variables
var newitem = document.getElementById("newitem");
var bold = document.getElementById("bold");
var ital = document.getElementById("ital")
var addbutton = document.getElementById("addbutton");
var list = document.getElementById("list");
var pink = document.getElementById("pink");
var blue = document.getElementById("blue");
// creating items and adding it to a list

addbutton.addEventListener("click",
function showInput() {
    
    if (pink.checked && bold.checked && ital.checked){
        list.innerHTML+= '<div style="color: #EBD0F6; font-weight: bold; font-style: italic;">' +newitem.value +'</div>';
    }
    else if (blue.checked && bold.checked && ital.checked){
        list.innerHTML+= '<div style="color: #C7D1E6; font-weight: bold; font-style: italic;">'+newitem.value +'</div>';
    }
    else if (pink.checked && bold.checked){
        list.innerHTML+= '<div style="font-weight: bold; color: #EBD0F6;">' +newitem.value +'</div>';
    } 
    else if (pink.checked && ital.checked){
        list.innerHTML+= '<div style="color: #EBD0F6; font-style: italic;">' +newitem.value +'</div>';
    }
     else if (blue.checked && ital.checked){
        list.innerHTML+= '<div style="color: #C7D1E6; font-style: italic;">'+newitem.value +'</div>';
    } 
    else if (blue.checked && bold.checked){
        list.innerHTML+= '<div style="font-weight: bold; color: #C7D1E6;">' +newitem.value +'</div>';
    } 
    else if (ital.checked && bold.checked){
        list.innerHTML+= '<div style="font-weight: bold; font-style: italic;">' +newitem.value +'</div>';  
    }
    else if (bold.checked){
        // alert();
        list.innerHTML+= '<div style="font-weight: bold;">' +newitem.value +'</div>';
    }
    else if (ital.checked){
        list.innerHTML+= '<div style="font-style: italic;">' +newitem.value +'</div>';
    }
    else if (blue.checked){
        list.innerHTML+= '<div style="color: #C7D1E6;">' +newitem.value +'</div>';
    }    
    else if (pink.checked){
        list.innerHTML+= '<div style="color: #EBD0F6;">' +newitem.value +'</div>';
    }
    else {
         list.innerHTML += newitem.value;
    }
    
});

// makes the list interactive with the user
list.addEventListener("click",
function (evt) {
    var task = evt.target;
    task.parentNode.removeChild(task);

    evt.preventDefault();
}, false);
