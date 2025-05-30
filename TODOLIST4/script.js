const input = document.getElementById('todo-input')
const button = document.getElementById('add-btn')
const list = document.getElementById('todo-list')
const apagar = document.getElementById('apagar')

apagar.addEventListener('click', () =>{
    list.innerHTML = ""
})

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        addTodo()
    }
})

function addTodo(){
    const taskTest = input.value.trim()

    if(taskTest === ""){
        alert("Digite uma tarefa")
        return
    }

    const li = document.createElement('li')
    li.textContent = taskTest

    li.addEventListener('click', () =>{
        li.classList.toggle('concluida')
    })

    const removeBtn = document.createElement('button')
    removeBtn.textContent = "Apagar"
    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        li.remove()
    }) 

    list.appendChild(li)
    li.appendChild(removeBtn)
    input.value = ""
}