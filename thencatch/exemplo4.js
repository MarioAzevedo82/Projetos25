function buscarMensagem() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Buscando mensagem ..."

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
}