function enviar() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Aguarde o carregamento..."

    new Promise((resolve, reject) => {
        const sucesso = Math.random() > 0.2

        setTimeout(() => {
            if(sucesso) {
                resolve("✅ Dados carregados com sucesso!")
            } else {
                reject("❌ Erro ao carregar...")
            }
        }, 2000);
    } )

    .then(msg => {
        mensagem.textContent = msg
    })
    .catch(erro => {
        mensagem.textContent = erro
    })
}