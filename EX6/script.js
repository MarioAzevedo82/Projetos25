let segundos = 0
let intervalo

function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Essa mensagem vai sumir em 3 segundos!"

    setTimeout(() => {
        mensagem.textContent = ""
    }, 3000);
}
