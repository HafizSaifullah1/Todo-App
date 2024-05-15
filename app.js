

var userText = document.getElementById("userText")
var parent = document.getElementById("parent")

function delList(btn){
    console.log(btn.parentNode);
    btn.parentNode.remove();
}

function editList (btn){
    console.log(btn.parentNode.childNodes[0]);
    btn.parentNode.childNodes[0].nodeValue =prompt()

}

function addElement (){
var pera = document.createElement("P");
var text = document.createTextNode(userText.value);
pera.appendChild(text);
// console.log(pera)

var editBtn = document.createElement("BUTTON")
var editTxet = document.createTextNode("Edit")

editBtn.setAttribute("class","edit")

editBtn.setAttribute("onclick","editList(this)")
editBtn.appendChild(editTxet)
// console.log(editBtn)

var deletBtn = document.createElement("BUTTON")
var deletTxet = document.createTextNode("Delet")

deletBtn.setAttribute("class","del")

deletBtn.setAttribute("onclick","delList(this)")
deletBtn.appendChild(deletTxet)

// console.log(deletBtn)

pera.appendChild(editBtn)
pera.appendChild(deletBtn)

parent.appendChild(pera);
console.log(pera)
}

function deletAll(){
    parent.innerHTML= "";
}