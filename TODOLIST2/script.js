const input = document.getElementById('todo-input')
const button = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

button.addEventListener('click', addTodo)

function addTodo() {
    const taskTest = input.value.trim() // 1. Pega o texto da tarefa

    if(taskTest === "") return // 2. Valida se não está vazio

    const li = document.createElement("li") // 3. Cria a estrutura da tarefa
    li.textContent = taskTest // 4. Permite marcar como concluída

    const removeBtn = document.createElement("button") // 5. Adiciona botão de remover
    removeBtn.textContent = "Remover" // 6. Exibe na tela
    removeBtn.addEventListener('click', () => li.remove()) //7. Limpa o campo

    li.addEventListener("click", () =>{
        li.classList.toggle("completed") //8
    })

    li.appendChild(removeBtn); //9 coloca o botão remover dentro da li
    list.appendChild(li) //10 coloca o li dentro da lu
    input.value = ""//11 limpa o campo apos add a tarefa
}
