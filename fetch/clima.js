function buscarClima(){
    const p = document.getElementById("clima")
    p.textContent = "⏳ Buscando clima..."

    fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true
")
        .then(res =>{
            if(!res.ok) throw new Error("Erro ao buscar o clima")
            return res.json()
        })
        
}