function enviar(){
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Carregando dados..."

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.3

            if(sucesso){
                resolve("✅ Dados carregados com sucesso!")
            } else {
                reject("❌ Erro ao carregar dados.")
            }
        }, 1500);
    })
        .then(msg => {
            mensagem.textContent = msg
        })
        .catch(erro => {
            mensagem.textContent = erro
        })
        
}