function iniciarContagem(){
    let tempo = 10
    const display = document.getElementById('relogio')
    display.textContent = tempo

    const intervalo = setInterval(() => {
        tempo--;
        document.getElementById('relogio').textContent = tempo
        
        if(tempo <= 0){
            clearInterval(intervalo)
            document.getElementById('relogio').textContent = "Contagem encerrada!"
        }
    }, 1000);
}