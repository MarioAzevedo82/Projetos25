function buscarPiada() {
    const p = document.getElementById("piada")
    p.textContent = "⏳ Buscando piada..."

    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => {
            if(!res.ok) throw new Error("❌ Não foi possível carregar a piada.")
            return res.json()
        })
        .then(post => {
            p.textContent = post.value
        })
        .catch(erro => {
            p.textContent = "❌ Erro" + erro.message
            p.style.color = "red"
        })
}
