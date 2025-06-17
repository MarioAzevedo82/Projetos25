function carregarMensagem(){
    const p = document.getElementById('resposta')

    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensagem carregada com sucesso!")
        }, 2000);
    })

    .then((mensagem) =>{
        p.textContent = mensagem
    })
}

function tentarCarregar(){
    const t = document.getElementById('erro')

    new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject("Algo deu errado!")
        }, 1500);
    })

    .then((mensagem)=>{
        t.textContent = mensagem
    })
    .catch((erro)=>{
        t.textContent = erro
        t.style.color = "red"
    })
}