
function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function clean() {
    document.getElementById('resultado').innerHTML = ""
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado).toFixed(3)
    } else {
        document.getElementById('resultado').innerHTML = "Erro"
    }
}

function horaAtual(){

    var display = document.querySelector('.display')
    var agora = new Date()
    var horario = horaCerta(agora.getHours()) + ":" + horaCerta(agora.getMinutes()) + ":" + horaCerta(agora.getSeconds())
    display.textContent = horario

    function horaCerta(num){
        if(num < 10){
            num = "0" + num
        } 
        return num
    }
}

setInterval(horaAtual, 1000)
horaAtual()
