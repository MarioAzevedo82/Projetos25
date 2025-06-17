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