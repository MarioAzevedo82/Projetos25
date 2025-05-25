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

var sec = 0
var min = 0
var hrs = 0
var interval

function twoDigits(digit){
    if( digit < 10){
        return ("0" + digit)
    } else {
        return digit
    }
}

function start() {
    watch()
    interval = setInterval(watch, 1000)
}

function pause() {  
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    hrs = 0
    document.getElementById('watch').innerHTML = "00:00:00"
}

function watch() {
    sec++
    if(sec == 60) {
        min++
        sec = 0
    } if(min == 60){
        hrs++
        min = 0
    }
    document.getElementById('watch').innerHTML = twoDigits(hrs) + ":" + twoDigits(min) + ":" + twoDigits(sec)
}


// CALCULADORA

function insert(num) {
    var numero = document.getElementById('visor').innerHTML
    document.getElementById('visor').innerHTML = numero + num
}

function clean() {
    document.getElementById('visor').innerHTML = ""
}

function back() {
    var visor = document.getElementById('visor').innerHTML
    document.getElementById('visor').innerHTML = visor.substring(0, visor.length - 1)
}

// function calcular(visor) {
//     var visor = document.getElementById('visor').innerHTML
//     if (visor){
//         document.getElementById('visor').innerHTML = eval(visor).toFixed(2)
//     } else {
//         document.getElementById('visor').innerHTML = 'Erro'
//     }
// }

function calcular(){
    var expressao = document.getElementById('visor').innerHTML
    try {
        if(expressao){
            let resultado = eval(expressao)
            resultado = parseFloat(resultado.toFixed(3))
            document.getElementById('visor').innerHTML = resultado
        } else {
            document.getElementById('visor').innerHTML = "Erro"
        }
    } catch (error) {
        document.getElementById('visor').innerHTML = "Erro"
    }
}