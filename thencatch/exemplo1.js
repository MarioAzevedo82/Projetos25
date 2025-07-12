function buscar() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Buscando Dados ..."

    new Promise((resolve, reject) => {
        const sucesso = Math.random() > 0.5

        setTimeout(() => {
            if(sucesso) {
                resolve("✅ Dados carregados com sucesso!")
            } else {
                reject("❌ Falha ao carregar Dados!")
            }
        }, 4000);
    })

    .then(resposta => {
        mensagem.textContent = resposta
    })
    .catch(erro => {
        mensagem.textContent = erro
    })
}