// Contagem regressiva

function iniciarContagem(){
    let tempo = 10
    const display = document.getElementById('relogio')
    display.textContent = tempo

    const intervalo = setInterval(() => {
        tempo--;
        document.getElementById('relogio').textContent = tempo
        
        if(tempo <= 0){
            clearInterval(intervalo)
            document.getElementById('relogio').textContent = "Contagem encerrada!"
        }
    }, 1000);
}

// Mensagem piscando

let piscar

function iniciarPiscar(){
    const elemento = document.getElementById("piscando")
    piscar = setInterval(() => {
        elemento.style.visibility = 
            elemento.style.visibility === "hidden" ? "visible" : "hidden"
    }, 100);
}

function pararPiscar(){
    clearInterval(piscar)
    document.getElementById('piscado').style.visibility = "visible"
}

// Temporizador

function desativarDepois(){
    const botao = document.getElementById("btnTempo")
    const mensagem = document.getElementById("mensagemBotao")

    mensagem.textContent = "Você tem 5 segundos ..."

    setTimeout(() => {
        botao.disabled = true;
        mensagem.textContent = "Tempo esgotado! Botão desativado."
    }, 5000);
}