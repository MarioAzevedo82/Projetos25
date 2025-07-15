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

// Encadeamento de Promises

function buscarUsuario() {
    const frase = document.getElementById("frase")
    frase.textContent = "🔄 Buscando usuário..."

    new Promise((resolve) => {
        setTimeout(() => {
            resolve("🔄 Buscando dados...")
        }, 2000);
    })
    .then(acerto => {
        frase.textContent = acerto
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("✅ Tudo carregado com sucesso!")
            }, 2000);
        })
    })     // A segunda promise fica dentro o then

    .then(msgFinal =>{
        frase.textContent = msgFinal
    })
}

// Exemplo com .finally()

function executarTarefa() {
    const status = document.getElementById("status");
    const fim = document.getElementById("fim");

    status.textContent = "🔄 Processando...";
    fim.textContent = "";

    new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5
            
            if(sucesso){
                resolve("✅ Sucesso na operação!")
            } else {
                reject("❌ Falha na operação.")
            }
        }, 1500);
    })

    .then(msg => {
        status.textContent = msg
    })
    .catch(erro => {
        status.textContent = erro
    })

    .finally(() => {
        fim.textContent = "🔚 Processo encerrado."
        fim.style.fontStyle = "italic"
        fim.style.color = "#333"
    })
}