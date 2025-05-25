// CALCULADORA

function horaAtual(){
    var display = document.querySelector('.display').innerHTML
 
    var agora = new Date()

    var horario = (agora.getHours()) + ":" + (agora.getMinutes()) + ":" + (agora.getSeconds())
    
    display.innerHTML = horario
}





