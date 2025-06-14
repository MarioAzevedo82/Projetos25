
let segundos = 0;
let minutos = 0;
let intervalo = null;
let rodando = false;

function atualizarDisplay(){
    const tempo = document.getElementById('tempo');
    const min = minutos < 10? `0${minutos}`: minutos;
    const seg = segundos < 10? `0${segundos}`: segundos;
    const tempo = `${min}:${seg}`
}