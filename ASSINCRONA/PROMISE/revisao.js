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
        .catch(errado => {
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
            return new Promise(resolve => {
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

//let timeoutId

function inicio() {
    const inicio = document.getElementById("inicio")
    inicio.textContent = "Iniciando ..."
    inicio.style.color = "black"

    const promessa = new Promise(resolve => {
        timeoutId = setTimeout(() => {
            resolve("✅ Função executada corretamente!")
        }, 2000);
    })

    promessa.then(msg => {
        inicio.textContent = msg
        inicio.style.color = "green"
    })

}
function parar() {
    clearTimeout(timeoutId)
    const parar = document.getElementById("parar")
    const inicio = document.getElementById("inicio")

    parar.textContent = "Interrompendo ..."
    inicio.textContent = "❌ Função interrompida"
    inicio.style.color = "red"

}

let timeoutId
function start() {
    const start = document.getElementById("start")
    start.textContent = "⏳ Waiting for beginning"
    start.style.color = "green"

    new Promise(resolve => {
        timeoutId = setTimeout(() => {
            resolve('Begin')
        }, 1000);
    })

    .then(msg => {
        start.textContent = msg
        start.style.color = "blue"

        return new Promise(resolve => {
            timeoutId = setTimeout(() => {
                resolve("Middle")
            }, 1000);
        })
    })
    .then(msg => {
        start.textContent = msg
        start.style.color = "gray"

        return new Promise(resolve => {
           timeoutId = setTimeout(() => {
                resolve("Ending 🚀")
            }, 1000);
        })
    })
    .then(msg => {
        start.textContent = msg + "🚀🚀🚀"
        start.style.color = "green"
    })

}
function stop() {
    clearTimeout(timeoutId)
    const start = document.getElementById("start")
    const stop = document.getElementById("stop")

    start.textContent = "❌ Breaking ..."
    start.style.color = "red"
    stop.textContent = "🛑 Stopped"
    stop.style.color = "red"
}