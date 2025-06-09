function horaAtual(){
    
    var display = document.querySelector('.display')
    
    var agora = new Date()
    
    var horario = (agora.getHours()) + ":" + (agora.getMinutes()) + ":" + (agora.getSeconds())
    
    display.textContent = horario
    
}

setInterval(horaAtual, 1000)
horaAtual()

