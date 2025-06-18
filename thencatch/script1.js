function carregarDados() {
    const res = document.getElementById("resultado")
    res.textContent = "⏳ Carregando..."

    new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Dados carregados com sucesso!")
        }, 2000);
    })
    .then((msg)=>{
        res.textContent = msg
        res.style.color = "green"
    })
}

// simulador API

function simularAPI(){
    const mensagem = document.getElementById('mensagem')
    mensagem.textContent = "⏳ Carregando ..."

    new Promise((resolve, reject)=>{
        setInterval(() => {
            const sucesso = Math.random() > 0.5
        if (sucesso) {
            resolve("Requisição bem sucedida!")
        } else {
            reject("Erro de requisição!")
        }
        }, 1500);
    })
    .then((msg)=>{
        mensagem.textContent = msg
        mensagem.style.color = "green"
    })
    .catch((erro)=>{
        mensagem.textContent = erro
        mensagem.style.color = "red"
    })
}

// Encadeando Processos

function processo(){
    const texto = document.getElementById("processo")

    new Promise((resolve)=>{
        texto.textContent = "🟡 Etapa 1: preparando ..."
        setTimeout(() => {
            resolve("🟠 Etapa 2: carregando...")
        }, 1500);
    })
    .then((msg)=>{
        texto.textContent = msg
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("✅ Etapa 3: finalizado!")
            }, 1500);
        })
    })
    .then((msgFinal)=>{
        texto.textContent = msgFinal
        texto.style.color = "blue"
    })
}