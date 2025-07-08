let intervalo

function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem")
    const contador = document.getElementById("contador")

    mensagem.textContent = "Essa mensagem vai sumir em 5 segundos!"
    mensagem.classList.remove("oculto")

    let segundosRestantes = 5
    contador.textContent = `Sumindo em ${segundosRestantes} seg`

    clearInterval(intervalo)
    intervalo = setInterval(() => {
        segundosRestantes--
        contador.textContent = `Sumindo em ${segundosRestantes} seg`
        
        if(segundosRestantes === 0){
            clearInterval(intervalo)
            mensagem.classList.add("oculto");
            contador.textContent = ""
        }
    }, 1000);
}