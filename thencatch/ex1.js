function buscarDados() {
    const answer = document.getElementById("resposta")
    answer.textContent = "⏳ Buscando..."

    new Promise((resolve, reject) =>{
        setTimeout(() => {
            const sucesso = Math.random() > 0.3
            
            if(sucesso){
                resolve("✅ Dados encontrados com sucesso!")
            } else {
                reject("❌ Erro ao buscar dados.")
            }
        }, 2000);
    })
    
    .then(resposta => {
        answer.textContent = resposta
    })
    .catch(erro => {
        answer.textContent = erro
    })
}