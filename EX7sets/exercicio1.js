// Exercício 1
function saudacao() {
    document.getElementById("saudacao").textContent = "⏳ Aguarde a saudação..."
    
    setTimeout(() => {
        document.getElementById("saudacao").textContent = "Olá, usuário!"
    }, 2000);
}
