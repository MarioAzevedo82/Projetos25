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

function carregarProdutos(){
    const info = document.getElementById("info")
    info.textContent = "⏳ Aguarde resposta do sistema"
    info.style.color = "black"

    const tempoResposta = Math.floor(Math.random() * 3000) + 500

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(tempoResposta <= 2000) {
                resolve("✅ produtos carregados: ['Camisa', 'Tênis', 'Calça'] ")
            } else {
                reject("❌ Tempo de resposta excedido!")
            }
        }, 3000);
    })

    promessa
    .then(msg => {
        info.textContent = msg;
        info.style.color = "green";
    })
    .catch(erro => {
        info.textContent = erro;
        info.style.color = "red"
    })
}

function login() {
    const login = document.getElementById("log").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("message");

    if(login === "" || senha === ""){
        alert("⚠ Atenção! Preencha todos os campos! ⚠");
        return;
    }

    mensagem.textContent = "⏳ Aguarde carregamento...";
    mensagem.style.color = "black";

    let usuarios = [
        {login: "mario", senha: "1234"},
        {login: "admin", senha: "abcd"}
    ]

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.find(u => u.login === login && u.senha === senha);
            if(usuario){
                resolve(`✅ Bem vindo, ${usuario.login}!`);
            } else {
                reject(`❌ Usuário ${login} não encontrado!`);
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

