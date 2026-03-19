function addTask(){

let input = document.getElementById("taskInput")
let task = input.value

if(task===""){
alert("Enter task")
return
}

let list = document.getElementById("taskList")

let div = document.createElement("div")
div.className="item"

div.innerHTML = `
<span>${task}</span>

<div class="actions">
<button class="edit" onclick="editTask(this)">Edit</button>
<button class="remove" onclick="removeTask(this)">Remove</button>
</div>
`

list.appendChild(div)

input.value=""

}

function removeTask(btn){
btn.parentElement.parentElement.remove()
}

function editTask(btn){

let text = btn.parentElement.parentElement.querySelector("span")

let newTask = prompt("Edit Task", text.innerText)

if(newTask){
text.innerText = newTask
}

}