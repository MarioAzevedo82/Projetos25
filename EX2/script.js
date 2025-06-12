let segundos = 0
let intervalo

function iniciarContador(){
    clearInterval(intervalo)
    segundos = 0
    intervalo = setInterval(() => {
       segundos++
       document.getElementById('contador').textContent = `Contando: ${segundos} segundos` 
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

