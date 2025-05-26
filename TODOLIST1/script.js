const localStorageKey = 'to-do-list-ma'

function newTask() {
    let input = document.getElementById('input-new-task')

    //validation
    if(!input.value){
        alert('digite algo para inserir na lista')
    }
    // else if()
    else
    {
        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
}