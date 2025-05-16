var sec = 0
var min = 0

function start(){
   setInterval(watch, 1000)
}

function pause() {
    
}

function stop() {
    
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec = 0
    }
    document.getElementById('watch').innerHTML = (min) + ":" + (sec)

   
}