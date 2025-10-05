function rodarPromise() {
    const saida = document.getElementById("saidaPromise")
    saida.textContent = "⏳ Iniciado sequência com Promise..."

    new Promise(resolve => {
        setTimeout(() => {
            resolve("1️⃣ Início")
        }, 1000); 
    })
    .then(msg => {
        saida.textContent = msg

        return new Promise(resolve => {
            setTimeout(() => {
                resolve("2️⃣ Meio")    
            }, 1000);
        })
    })
    .then(msg => {
        saida.textContent = msg

        return new Promise(resolve => {
            setTimeout(() => {
                resolve("3️⃣ Fim!")
            }, 1000);
        })
    })
    .then(msg => {
        saida.textContent = msg + "🚀"
    })
    .catch(erro => {
        saida.textContent = "❌ Erro" + erro
    })
}

async function rodarAsync() {
    const saida = document.getElementById("saidaAsync")
    saida.textContent = "⏳ Iniciando sequência com Async/Await..."

    try {
        const inicio = await new Promise(resolve => {
            setTimeout(() => {
                resolve("1️⃣ Início")
            }, 1000);
        })
        saida.textContent = inicio

        const meio = await new Promise(resolve => {
            setTimeout(() => {
                resolve("2️⃣ Meio")
            }, 1000);
        })

        saida.textContent = meio

        const fim = await new Promise(resolve => {
            setTimeout(() => {
                resolve("3️⃣ Fim!")
            }, 1000);
        })
        saida.textContent = fim

    } catch(erro){
        saida.textContent = "❌ Erro: " + erro
    }
}