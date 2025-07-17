function esperar() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    })
}

async function carregar() {
    const p = document.getElementById("mensagem")
    p.textContent = "⏳ Carregando..."

    await esperar()

    p.textContent = "✅ Concluído!"
}

// Esperar 3 segundos

function wait(){
    return new Promise(resolve => {
        setTimeout(resolve, 3000)
    })
}

async function esperar3segundos() {
    const frase = document.getElementById("frase")
    frase.textContent = "🔄 Carregando por 3 segundos..."

    await wait()

    frase.textContent = "✅ Carregamento concluído!"
}