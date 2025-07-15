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

// Exemplo de login e senha

function entrar() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const message = document.getElementById("message")
    message.textContent = "⏳ Aguarde, verificando dados..."

    new Promise((resolve, reject) => {
        setTimeout(() => {
             if(login === "admin" && senha === "1234"){
                resolve("✅ Acesso autorizado! Bem vindo!")
             } else {
                reject("❌ Acesso negado! Usuário ou senha incorretos.")
             }
        }, 1500);
    })

    .then(certo => {
        message.textContent = certo
    })
    .catch(errado => {
        message.textContent = errado
    })
}