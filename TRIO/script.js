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
