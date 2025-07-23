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

// Contagem com atraso

function esperar(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000))
}

async function contar() {
    const msg = document.getElementById("msg")
    for(let i = 1; i <= 5; i++){
        msg.textContent = `Contador: ${i}`
        await esperar(1)
    }
    
    msg.textContent = "✅ Fim da contagem!"

}

// msg com atraso

function hold(segundos){
    return new Promise(resolve => setTimeout(resolve, segundos * 1000))
}

async function mostrar() {
    const message = document.getElementById("message")
    message.textContent = "⏳ Carregando..."

    await hold(2)
    message.textContent = "✅ Carregado com sucesso!"
    message.style.color = "green"
}

// Contagem com delay2

function esperar2(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000))
}

async function contar2() {
    const mensagem2 = document.getElementById("mensagem2")
    mensagem2.textContent = "⏳ Aguarde para iniciar a contagem..."

    for(let i = 0; i <= 5; i++){

        mensagem2.textContent = `Contando: ${i}`
        await esperar2(1)
    }

    mensagem2.textContent = "🚫 Contagem encerrada."
}


console.log("teste")