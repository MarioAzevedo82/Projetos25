const input = document.getElementById('todo-input')
const button = document.getElementById('add-btn')
const list = document.getElementById('todo-list')
const limpar = document.getElementById('limparTodo')

button.addEventListener('click', addTodo)

limpar.addEventListener('click', () => {
    list.innerHTML = ""
})

function addTodo(){
    const taskTest = input.value.trim()
    
    if(taskTest === ""){
        alert('digite uma tarefa')
        return
    }

    const li = document.createElement('li')
    li.textContent = taskTest
    
    const removeBtn = document.createElement('button')
    removeBtn.textContent = "apagar"
    removeBtn.addEventListener('click', () => li.remove())

    li.appendChild(removeBtn)
    list.appendChild(li)
    input.value = ""
}