function esperar(segundos){
    return new Promise(resolve => 
        setTimeout(resolve, segundos * 1000))
}

async function enviar() {
    const texto = document.getElementById("texto").value;
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "🟢 Enviando informações";

    if(texto.trim() === ""){
        mensagem.textContent = "❌ Digite um texto válido";
        return 
    }

    await esperar(2) 
    mensagem.textContent = "✅ Dados enviados!"
}