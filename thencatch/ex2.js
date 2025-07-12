function carregarDados() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Buscando Dados..."

    new Promise((resolve, reject) =>{
        const sucesso = Math.random() > 0.1
        
        setTimeout(() => {
            if(sucesso){
                resolve("✅ Dados carregados com sucesso!")
            } else {
                reject("❌ Falha ao carregar Dados...")
            }
        }, 3000);
    })

    .then(resposta => {
        mensagem.textContent = resposta
    })
    .catch(erro => {
        mensagem.textContent = erro
    })
}