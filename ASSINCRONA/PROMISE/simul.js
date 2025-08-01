function enviar() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⏳ Aguarde carregamento de dados..."
    mensagem.style.color = "black"
    
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const sucesso = Math.random() > 0.3
            if(sucesso){
                resolve("✅ Dados carregados com sucesso!")
            } else {
                reject("❌ Erro ao carregar dados.")
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