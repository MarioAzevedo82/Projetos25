function iniciarCarregamento() {
    const status = document.getElementById("status")
    let contador = 0
    let intervalId

    status.textContent = "Carregando..."

    setTimeout(() => {

        intervalId = setInterval(() => {
            contador++;
            if(contador === 1){
                status.textContent = "Carregando."
            } else if (contador === 2) {
                status.textContent = "Carregando.."
            } else if (contador === 3) {
                status.textContent = "Carregando..."
                contador = 0
            }
        }, 500);

        setTimeout(() => {
            clearInterval(intervalId)
            status.textContent = "Página carregada com sucesso!"
        }, 3000);
    }, 5000);
}