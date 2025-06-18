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

// Mensagem com Promisse

// function enviarMensagem(){
//     const input = document.getElementById('entrada')
//     const saida = document.getElementById('saida')

//     new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(input.value)
//         }, 2000);
//     })

//     .then((mensagemRecebida)=>{
//         saida.textContent = `Recebido da Promisse: ${mensagemRecebida}`
//     })
// }

function dispareErro(){
    const input = document.getElementById("input")
    const resposta = document.getElementById("resposta")

    resposta.textContent = ""
    resposta.style.color = "black"

    new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(input.value.trim() === ""){
                reject("Erro, digite algo!")
            } else {
                resolve(input.value)
            }
        }, 1500);
    })
    .then((mensagem)=>{
        resposta.textContent = mensagem
        resposta.style.color = "green"
    })
    .catch((erro)=> {
        resposta.textContent = erro
        resposta.style.color = "red"
    })
}