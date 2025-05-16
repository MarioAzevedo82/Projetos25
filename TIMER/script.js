var sec = 0
var min = 0
var hrs = 0
var interval

function start(){
   interval = setInterval(watch, 1000)
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerHTML = "00:00"
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
    document.getElementById('watch').innerHTML =(hrs) + ":" + (min) + ":" + (sec)

   
}