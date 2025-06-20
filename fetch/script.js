fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(resposta => resposta.json())
    .then(dado => console.log(dado))
    .catch(erro => console.log("Erro", erro));

    // Buscar post

    function buscarPost() {

        const res = document.getElementById("resultado")
        res.textContent = "⏳ Carregando..."

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => {
                res.textContent = JSON.stringify(data, null, 2)
            })
            .catch(erro => {
                res.textContent = "❌ Erro ao buscar o post."
            })
    }