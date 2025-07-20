// Mensagem com atraso

function atrasar(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000))
}

async function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Aguarde 2 segundos..."

    await atrasar(2)
    mensagem.textContent = "✅ Carregamento executado!"
}