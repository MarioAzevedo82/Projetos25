

var hour = document.querySelector('#hour')
var minutes = document.querySelector('#minutes')
var seconds = document.querySelector('#seconds')

var agora = new Date()

var hora = agora.getHours() 
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
 
hour.textContent = hora
minutes.textContent = minutos
seconds.textContent = segundos