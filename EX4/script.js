function iniciarContagem() {
    let tempo = 10
    const display = document.getElementById('relogio')
    display.textContent = tempo

    setInterval(() => {
        tempo--;
        document.getElementById('relogio').textContent = tempo
    }, 1000);
}