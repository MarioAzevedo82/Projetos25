// ✅ PASSO 2: Mostrar dados no HTML
// Agora, vamos buscar um post e mostrar o título e o corpo na tela.

function carregarPost(){
    const titulo = document.getElementById("titulo")
    const corpo = document.getElementById("corpo")

    titulo.textContent = "⏳ Carregando..."
    corpo.textContent = ""

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            if(!res.ok) throw new Error("Erro ao buscar o post")
            return res.json()    
        })
        .then(post => {
            titulo.textContent = post.title
            corpo.textContent = post.body
        })
        .catch(erro => {
            titulo.textContent = "❌ Não foi possível carregar o post."
            corpo.textContent = erro.message
            titulo.style.color = "red"
        })
}

// Lista de usuários

function carregarUsuários(){
    const ul = document.getElementById("lista")
    ul.innerHTML = "<li>⏳ Carregando...</li>"

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar usuários")
        return res.json()
    })
    .then(usuarios => {
        ul.innerHTML = ""
        usuarios.forEach(usuario => {
            const li = document.createElement("li")
            li.textContent = usuario.name
            ul.appendChild(li)
        });
    })
}