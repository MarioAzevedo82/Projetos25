// CALCULADORA

function horaAtual(){
    var display = document.querySelector('.display')
 
    var agora = new Date()

    var horario = horaCerta(agora.getHours()) + ":" + horaCerta(agora.getMinutes()) + ":" + horaCerta(agora.getSeconds())
    
    display.innerHTML = horario

    function horaCerta(num){
        if(num < 10){
            num = "0" + num
        }
        return num
    }
}

setInterval(horaAtual, 1000)
horaAtual()

// CRONÔMETRO



function start(){
    alert('clicou')
}

