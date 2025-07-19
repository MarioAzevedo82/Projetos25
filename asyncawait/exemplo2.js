function esperar(segundos){
    return new Promise(resolve => 
        setTimeout(resolve, segundos * 1000))
}

async function enviar() {
    const texto = document.getElementById("texto").value;
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "🟢 Enviando informações";

    if(texto.trim() === ""){
        mensagem.textContent = "❌ Digite um texto válido";
        return 
    }

    await esperar(2) 
    mensagem.textContent = "✅ Dados enviados!"
}

// REsultado aleatório

function wait() {
    const sucess = Math.random() > 0.5

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(sucess){
                resolve("Donne")
            } else {
                reject("Undonne")
            }
        }, 2000);
    })
}

async function send() {
    const message = document.getElementById("message");
    message.textContent = "Loading..."

    try {
        const result = await wait()
        message.textContent = result
    } catch (error) {
        message.textContent = error
    }
    
}

// Tentativa de sucesso

function aguardar(){
    const sucesso = Math.random() > 0.3

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(sucesso) {
                resolve("✅ Sucesso!")
            } else {
                reject("❌ Falhou.")
            }
        }, 2000);
    })
}

async function tentar() {
    const recado = document.getElementById("recado")
    recado.textContent = "⏳ Processando..."

    try {
        const resultado = await aguardar()
        recado.textContent = resultado
    } catch (erro) {
        recado.textContent = erro
    }
}

// Sequência de estapas com espera entre elas