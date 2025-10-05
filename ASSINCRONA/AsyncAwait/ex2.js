
function rodarPromise() {
    const saida = document.getElementById('saidaPromise')
    saida.textContent = "⏳ Excutando com Promise!"

    new Promise(resolve => {
        setTimeout(() => {
            resolve("✅ Concluído com Promise!")
        }, 2000);
    })

    .then(msg => {
        saida.textContent = msg;
        saida.style.color = "green"
    })
    .catch(erro => {
        saida.textContent = "❌ Erro: " + erro
        saida.style.color = "red"
    })
}

async function rodarAsync() {
    const saida = document.getElementById("saidaAsync")
    saida.textContent = "⏳ Executando com Async/Await..."
    
    try {
        const msg = await new Promise(resolve =>{
            setTimeout(() => {
                resolve("✅ Concluído com Async/Await")
            }, 2000);
        })
        
        saida.textContent = msg
        saida.style.color = "green"
    } catch (erro) {
        saida.textContent = "❌ Erro: " + erro
        saida.style.color = "red"
    }
}