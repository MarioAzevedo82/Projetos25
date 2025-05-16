var sec = 00

function start(){
   setInterval(watch, 1000)
}

function pause() {
    
}

function stop() {
    
}

function watch(){
    sec++
    document.getElementById('watch').innerHTML = sec
}