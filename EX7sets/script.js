let intervalo

function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem")
    const contador = document.getElementById("contador")

    mensagem.textContent = "Essa mensagem vai sumir em 5 segundos!"
    mensagem.classList.remove("oculto")

    let segundosRestantes = 5
    contador.textContent = `Sumindo em ${segundosRestantes}`
}