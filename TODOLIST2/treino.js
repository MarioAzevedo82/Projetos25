const input = document.getElementById('todo-input')
const button = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

button.addEventListener("click", addTodo)

function addTodo(){
    const taskTest = list.value.trim()

    if(taskTest === "") return

    const li = document.createElement("li")
    li.textContent = taskTest

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover"
    removeBtn.addEventListener("click", () => li.remove())

    li.addEventListener("click", () =>{
        li.classList.toggle("completed")
    })

    li.appendChild(removeBtn)
    list.appendChild(li)
    input.value = ""
}