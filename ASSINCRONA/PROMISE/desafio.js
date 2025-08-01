function enviar() {
    const login = document.getElementById("login").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "⏳ Carregando...";

    if(login === ""){
        alert("Por favor, digite seu login.");
        return;
    }

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(login === admin || login === mario || login === ana || login === joao){
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