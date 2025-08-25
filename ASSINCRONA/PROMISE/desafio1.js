function enviar() {
    const login = document.getElementById("login").value.trim().toLowerCase();
    const mensagem = document.getElementById("mensagem");

    if (login === ""){
        alert("Digite o nome de um usuário!");
        return;
    }

    mensagem.textContent = "⏳ Carregando.."
    mensagem.style.color = "black"
    
    let usuarios = ['mario', 'vitor', 'roger', 'pedro'];

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuarios.includes(login)){
                resolve(`✅ Bem vindo, ${login}!`)
            } else {
                reject(`❌ Usuário ${login} não identificado.`)
            }
        }, 1500)
    })

    promessa
    .then(msg => {
        mensagem.textContent = msg
        mensagem.style.color = "green"
    })
    .catch(erro => {
        mensagem.textContent = erro
        mensagem.style.color = "red"
    })
}


