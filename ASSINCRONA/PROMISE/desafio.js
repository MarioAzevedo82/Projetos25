function enviar() {
    const login = document.getElementById("login").value.trim();
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "⏳ Carregando...";
    mensagem.style.color = "black";

    if(login === ""){
        alert("Por favor, digite seu login.");
        return;
    }

    const usuarios = ["admin", "mario", "joao", "ana"]

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuarios.includes(login)){
                resolve(`✅ Bem-vindo, ${login}!`);
            } else {
                reject(`❌ Usuário ${login} não encontrado.`);
            }
        }, 2000);
    })

    promessa
    .then(msg => {
        mensagem.textContent = msg;
        mensagem.style.color = "green";
    })
    .catch(erro => {
        mensagem.textContent = erro;
        mensagem.style.color = "red";
    })
}