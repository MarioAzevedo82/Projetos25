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

var sec = 0
var min = 0
var hrs = 0
var interval

function doisDigitos(digit){
    if(digit < 10){
        digit = "0" + digit
    }  return digit
    
}

function start(){
    watch()
    interval = setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec = 0
    min = 0
    hrs = 0
    document.getElementById('watch').innerHTML = "00:00:00"
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec = 0
    } if(min == 60){
        hrs++
        min = 0
    }
    document.getElementById('watch').innerHTML = doisDigitos(hrs) + ":" + doisDigitos(min) + ":" + doisDigitos(sec)
}

// CALCULADORA

function insert(num){
    var numero = document.getElementById('visor').innerHTML
    document.getElementById('visor').innerHTML = numero + num
}

function clean(){
    document.getElementById('visor').innerHTML = ""
}