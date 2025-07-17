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