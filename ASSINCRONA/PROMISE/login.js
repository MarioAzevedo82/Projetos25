function enviar() {
    const mensagem = document.getElementById("mensagem");
    const login = document.getElementById("login").value;
    mensagem.textContent = "⏳ Carregando...";
    mensagem.style.color = "black"

    if(login === ""){
        alert("Digite seu login")
        return
    }

    const promessa = new Promise((resolve, reject) =>{
        setTimeout(() => {
            
            if(login === "admin"){
                resolve("✅Conectado!")
            } else {
                reject("❌ Usuário não cadastrado.")
            }
        }, 1500);
    })

    promessa
    .then(certo => {
        mensagem.textContent = certo
        mensagem.style.color = "green"
    })
    .catch(erro => {
        mensagem.textContent = erro
        mensagem.style.color = "red"
    })
}