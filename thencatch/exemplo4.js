function buscarMensagem() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Buscando mensagem ..."
    mensagem.style.color = "black"

    new Promise((resolve, reject) => {
        const sucesso = Math.random() > 0.5

        setTimeout(() => {
            if(sucesso){
                resolve("✅ Mensagem encontrada com sucesso!")
            }    else {
                reject("❌ Erro ao encontrar a mensagem.")
            }
        }, 2000);
    })
    
    .then(msg => {
        mensagem.textContent = msg
        mensagem.style.color = "green"
    })
    .catch(erro => {
        mensagem.textContent = erro
        mensagem.style.color = "red"
    })
}