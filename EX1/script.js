// RELÓGIO
function horaAtual(){
    
    var display = document.querySelector('.display')
    
    var agora = new Date()
    
    var horario = horaCerta(agora.getHours()) + ":" + horaCerta(agora.getMinutes()) + ":" + horaCerta(agora.getSeconds())
    
    display.textContent = horario
    
    function horaCerta(num){
        if(num < 10){
            num = "0" + num
        } return num
    }
}

setInterval(horaAtual, 1000)
horaAtual()

// TODO LIST

const input = document.getElementById('todo-input')
const button = document.getElementById('todo-btn')
const list = document.getElementById('todo-list')
const apagar = document.getElementById('apagar')

button.addEventListener("click", addTodo)

input.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        addTodo()
    }
})

apagar.addEventListener('click', () =>{
    list.textContent = ""
})

function addTodo(){
    const taskTest = input.value.trim()

    if(taskTest === ""){
        alert('Digite uma tarefa...')
        return
    }

    const li = document.createElement("li")
    li.textContent = taskTest

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Apagar"
    removeBtn.addEventListener("click", () => li.remove())

    li.appendChild(removeBtn)
    list.appendChild(li)
    input.value = ""
}

// CRONÔMETRO




