function rodarPromise() {
    const saida = document.getElementById("saida")
    saida.textContent = "Clicou!"

    new Promise(resolve => {
        setTimeout(() => {
            resolve("✅ Executada após 2 segundos!")
        }, 2000);
    })

        .then(valor => {
            saida.textContent = valor
        })
}

function testar() {
    const mensagem = document.getElementById("msg");
    mensagem.textContent = "⏳ Aguarde para saber a resposta!"
    mensagem.style.color = "black"

    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5

            if (sucesso) {
                resolve("✅ Resposta certa!")
            } else {
                reject("❌ Resposta errada!")
            }
        }, 2000);
    })

    .then(certo => {
        mensagem.textContent = certo
        mensagem.style.color = "green"
    })
    .catch(errado =>{
        mensagem.textContent = errado
        mensagem.style.color = "red"
    })
}

function encadear() {
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "⚠ Inciando Sequência!"

    new Promise(resolve => {
        setTimeout(() => {
            resolve("1️⃣ Passo 1 concluído")
        }, 1000);
    })

    .then(msg => {
        mensagem.textContent = msg
        return new Promise(resolve =>{
            setTimeout(() => {
                resolve("2️⃣ Passo 2 concluído!")
            }, 1000);
        })
    })
    .then(msg => {
        mensagem.textContent = msg
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("3️⃣ Passo 3 concluído!")
            }, 1000);
        })
    })

    .then(msg => {
        mensagem.textContent = msg + "🚀 Concluído!"
    })
}