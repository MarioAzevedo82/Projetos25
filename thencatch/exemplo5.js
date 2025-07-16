function enviar() {
    const mensagem = document.getElementById("mensagem")
    const load = document.getElementById("load")

    load.style.width = "0%"
    mensagem.textContent = "⏳ Aguarde para carregar..."

    let progresso = 0;

    const intervalo = setInterval(() => {
        progresso++
        load.style.width = progresso + "%"

        if(progresso >= 100) {
            clearInterval(intervalo);

            new Promise((resolve) => {
                resolve("✅ Carregamento completo!")
            }) .then(msg => {
                mensagem.textContent =msg
            })
        }
    }, 30);
}