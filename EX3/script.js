

function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contagem!"
    setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou o setTimeout!"
    }, 3000)
}