var segundos = 0
var minutos = 0
var intervalo

function iniciarContador(){
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    setInterval(() => {
        segundos++
        if(segundos === 60){
            minutos++
            segundos = 0
        }
        document.getElementById('contador').textContent = `Contando: ${minutos} min e ${segundos} seg`
    }, 1000);
}


function mostrarMensagem(){
    const mensagem = document.getElementById('mensagem')
    mensagem.textContent = "Essa mensagem vai sumir em 3 segundos!"

    setTimeout(() => {
        mensagem.textContent = ""
    }, 3000);
}

iniciarContador()

