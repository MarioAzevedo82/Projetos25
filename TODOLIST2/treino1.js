const input = document.getElementById("todo-input")
const button = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

button.addEventListener('click', addTodo)

function addTodo() {
    var newTask = input.value.trim()
    
    if(newTask === "") return

    const li = document.createElement('li')
    li.textContent = newTask

    const removeBtn = document.createElement('button')
    removeBtn.textContent = "Remover"
    removeBtn.addEventListener('click', () => li.remove())
}