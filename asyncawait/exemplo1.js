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

// Esperar o tempo definido pelo usuário

function aguardar(segundos){
    return new Promise(resolve => {
        setTimeout(resolve, segundos * 1000)
    })
}

async function definir() {
    const tempo = Number(document.getElementById("tempo").value);
    const msg = document.getElementById("msg")
    msg.textContent = `O usuário definiu ${tempo} segundos`

    await aguardar(tempo)

    msg.textContent = `✅ Carregado em ${tempo} segundos`
}