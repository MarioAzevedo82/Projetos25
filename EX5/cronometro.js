
let segundos = 0;
let minutos = 0;
let intervalo = null;
let rodando = false;

function atualizarDisplay(){
    const tempo = document.getElementById('tempo');
    const min = minutos < 10? `0${minutos}`: minutos;
    const seg = segundos < 10? `0${segundos}`: segundos;
    tempo.textContent = `${min}:${seg}`
}

function iniciar(){
    if(!rodando){
        rodando = true;
        intervalo = setInterval(() => {
            segundos++
            if(segundos === 60){
                segundos = 0
                minutos++
            }
            atualizarDisplay()
        }, 1000);
    }
}

function pausar(){
    clearInterval(intervalo)
    rodando = false;
}

function resetar(){
    pausar()
    segundos = 0
    minutos = 0
    atualizarDisplay()
}