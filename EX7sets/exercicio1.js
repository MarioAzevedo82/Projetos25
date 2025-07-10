// Exercício 1
function saudacao() {
    document.getElementById("saudacao").textContent = "⏳ Aguarde a saudação..."
    
    setTimeout(() => {
        document.getElementById("saudacao").textContent = "Olá, usuário!"
    }, 2000);
}
// Exercício 2
function dados() {
    document.getElementById("dados").textContent = "⏳ Carregando dados ..."

    setTimeout(() => {
        document.getElementById("dados").textContent = "✅ Dados carregados com sucesso!"
    }, 4000);
}
// Exercício 3
function hide() {
    const frase = document.getElementById("hide") 
    frase.textContent = "A boa e velha persistência supera tudo!"
    frase.style.color = "green"
    
    setTimeout(() => {
        frase.style.display = "none"
    }, 5000);
}
// Exercício 4
let seg = 0
let min = 0
let interval

function timer() {
    clearInterval(interval)
    interval = setInterval(() => {
        seg++
        if(seg === 60){
            min++
            seg = 0
        }
        document.getElementById("timer").textContent = `${min} min ${seg} seg`
    }, 100);
}
// Exercício 5
let segundos = 10;
let interv;

function contador() {
    clearInterval(interv);
    interv = setInterval(() => {
        segundos--;
        if(segundos > 0) {
            document.getElementById("contador").textContent = segundos;
        } else {
            clearInterval(interv);
            document.getElementById("contador").textContent = "❌ Tempo esgotado!";
        }
    }, 1000);
}

function parar(){
    clearInterval(interv);
    document.getElementById("contador").textContent = "🚫 Contagem interrompida!"
}