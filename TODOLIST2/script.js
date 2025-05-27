const input = document.getElementById('todo-input')
const button = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

button.addEventListener('click', addTodo)

function addTodo() {
    const taskTest = input.value.trim() //1

    if(taskTest === "") return //2

    const li = document.createElement("li") // 3
    li.textContent = taskTest // 4

    const removeBtn = document.createElement("button") // 5
    removeBtn.textContent = "Remover" // 6
    removeBtn.addEventListener('click', () => li.remove()) //7

    li.addEventListener("click", () =>{
        li.classList.toggle("completed") //8
    })

    li.appendChild(removeBtn); //9
    list.appendChild(li) //10
    input.value = ""//11
}