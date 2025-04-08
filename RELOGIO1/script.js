

var hour = document.querySelector('#hour')
var minutes = document.querySelector('#minutes')
var hour = document.querySelector('#hour')

var agora = new Date()

var hora = agora.getHours() 
var minutos = agora.getMinutes()

hour.textContent = hora
minutes.textContent = minutos