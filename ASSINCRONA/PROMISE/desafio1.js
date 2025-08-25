function enviar() {
    const login = document.getElementById("login").value;
    const mensagem = document.getElementById("mensagem");

    if (login === ""){
        alert("Digite o nome de um usuário!");
        return;
    }

    mensagem.textContent = "⏳ Carregando"
    mensagem.style.color = "blue"
}