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