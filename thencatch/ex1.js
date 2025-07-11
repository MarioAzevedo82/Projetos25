function buscarDados() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const sucesso = Math.random() > 0.3

            if(sucesso){
                resolve("✅ Dados encontrados com sucesso!")
            } else {
                reject("❌ Erro ao buscar dados.")
            }
        }, 2000);
    })
}