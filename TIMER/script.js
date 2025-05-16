var sec = 0
var min = 0
var hrs = 0
var interval

function twoDigits(digit){
    if(digit < 10){
        return("0" + digit)
    } else {
        return digit
    }
}

function start(){
    watch()
   interval = setInterval(watch, 10)
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerHTML = "00:00:00"
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            hrs++
            min = 0
        }
    } 
    document.getElementById('watch').innerHTML = twoDigits(hrs) + ":" + twoDigits(min) + ":" + twoDigits(sec)

}