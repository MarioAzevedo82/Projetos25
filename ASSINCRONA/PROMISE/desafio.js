function enviar() {
    const login = document.getElementById("login").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "⏳ Carregando..."

    if(login === ""){
        alert("Por favor, digite seu login.")
        return
    }
}