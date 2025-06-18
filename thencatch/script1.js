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
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Carregando..."

    new Promise((resolve, reject)=>{
        setTimeout(() => {
            const sucesso = Math.random() > 0.5
            if(sucesso){
                resolve("Requisição bem sucedida!")
            } else {
                reject("Requisição falhou!")
            }
        }, 2000);
    })
    .then((msg)=>{
        mensagem.textContent = msg
        mensagem.style.color = "blue"
    })
    .catch((erro)=>{
        mensagem.textContent = erro
        mensagem.style.color = "red"
    })
}