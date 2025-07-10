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
let interval

function timer() {
    clearInterval(interval)
    interval = setInterval(() => {
        seg++
        document.getElementById("timer").textContent = seg
    }, 1000);
}