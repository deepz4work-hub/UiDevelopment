displayName=(id)=>{
    id.value.trim()?userName.textContent= "Hello "+id.value.trim():alert("Please enter a valid name");
}
function onFill(event) {
   if(event.target.className!="full")
{   
    event.target.style.backgroundColor = event.target.id;
    event.target.className = "full"
}
else{
    event.target.style.backgroundColor = "white";
    event.target.className = ""
}
}
let addButtons = document.getElementsByClassName("add_item");
debugger
for (addButton of addButtons) {
    addButton.addEventListener('click', (event) => {
        alert("Item added to the cart");
    })
}
