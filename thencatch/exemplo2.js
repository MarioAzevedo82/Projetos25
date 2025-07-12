function login(usuario, senha){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario === "admin" & senha === "1234") {
                resolve("✅ Login autorizado")
            } else {
                reject("❌ Usuário ou senha incorretos")
            }
        }, 1500);
    })
}

function fazerLogin() {
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem")

    msg.textContent = "🔒 Verificando..."

    login(user, pass)
        .then(resultado => {
            msg.textContent = resultado
        })
        .catch(erro => {
            msg.textContent = erro
        })
}