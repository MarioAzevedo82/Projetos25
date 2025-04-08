function horaAtual(){

    var hour = document.querySelector('#hour')
    var minutes = document.querySelector('#minutes')
    var seconds = document.querySelector('#seconds')
    var ampm = document.querySelector('#ampm')
    
    var agora = new Date()
    
    var hora = agora.getHours() 
    var minutos = corrigirHora(agora.getMinutes())
    var segundos = corrigirHora(agora.getSeconds())
    
    hour.textContent = hora
    minutes.textContent = minutos
    seconds.textContent = segundos
    ampm.textContent = "AM"

    if (hora > 12) {
        hora = hora - 12
        ampm = "PM"
    }
    
}
function corrigirHora(num) {
    if(num < 10){
        num = "0" + num
    }
    return num
}

horaAtual()
setInterval(horaAtual, 1000)
