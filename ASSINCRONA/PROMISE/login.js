function enviar() {
    const mensagem = document.getElementById("mensagem");
    const login = document.getElementById("login").value;
    mensagem.textContent = "⏳ Carregando...";

    if(login === ""){
        alert("Digite seu login")
        return
    }

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            
            if(login === "admin"){
                resolve("✅Conectado!")
            } else {
                reject("❌ Usuário não cadastrado.")
            }
        }, 1500);
    })

    .then(certo => {
        mensagem.textContent = certo
    })
    .catch(erro => {
        mensagem.textContent = erro
    })
}