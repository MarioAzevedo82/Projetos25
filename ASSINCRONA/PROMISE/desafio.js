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
                resolve("✅ Conectado!");
            } else {
                reject("❌ Usuário não cadastrado");
            }
        }, 2000);
    })

    
}