let segundos = 0
let intervalo

function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Essa mensagem vai sumir em 3 segundos!"

    setTimeout(() => {
        mensagem.textContent = ""
        iniciarContador()
    }, 3000);

}

function iniciarContador() {
    clearInterval(intervalo)
    segundos = 0
    intervalo = setInterval(() => {
        segundos++
        document.getElementById("contador").textContent = `Contando: ${segundos}`
    }, 1000);
}
