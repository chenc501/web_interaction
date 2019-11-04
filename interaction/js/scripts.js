let elements = document.querySelectorAll(".mydiv");
let caloriescount = document.getElementById("caloriescount");
let totalCalories = 0;

elements.forEach(function(element){
  dragElement(element);
});
  

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  // }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    
  }

  function closeDragElement() {

    //adding calories 
    totalCalories += getCalories(elmnt);
    caloriescount.innerHTML =  "You are eating " + totalCalories + " calories/ per dumpling "; 

    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



// var calories = element.classList.item(1)
function getCalories(element){
  var calories = element.classList.item(1);
  return parseInt(calories);

}

$('#resultButton').click(function(){
    $('#result').fadeIn();

})




