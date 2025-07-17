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