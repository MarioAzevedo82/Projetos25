function carregarDados() {
    const res = document.getElementById("resultado")
    res.textContent = "⏳ Carregando..."

    new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Dados carregados com sucesso!")
        }, 2000);
    })
    .then((msg)=>{
        res.textContent = msg
        res.style.color = "green"
    })
}