function buscarClima(){
    const p = document.getElementById("clima")
    p.textContent = "⏳ Buscando clima..."

    fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true")
        .then(res =>{
            if(!res.ok) throw new Error("Erro ao buscar o clima")
            return res.json()
        })
        .then(dados =>{
            const temperatura = dados.current_weather.temperature
            const vento = dados.current_weather.windspeed
            p.textContent = `🌡 Temperatura: ${temperatura}°C | 💨 Vento: ${vento} Km/h`
        })
        .catch(erro => {
            p.textContent = "❌ Erro:" + erro.message
            p.style.color = "red"
        })
}

// Buscar o clima por cidade

function buscarCidade(){
    const cidadeInput = document.getElementById("cidade").value.trim()
    const t = document.getElementById("tempo")

    if(cidadeInput === ""){
        t.textContent = "❗ Digite o nome de uma cidade."
        t.style.color = "red"
        return
    }
    t.style.color = "black"
    t.textContent = "⏳ Buscando localização..."
    
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cidadeInput}`)
    .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar localização")
        return res.json()
    })
    .then(dados => {
        if(!dados.results || dados.results.length === 0){
            throw new Error("Cidade não encontrada.")
        }

        const latitude = dados.results[0].latitude
        const longitude = dados.results[0].longitude
        const cidadeNome = dados.results[0].name

        p.textContent = `📍 ${cidade} - buscando clima...`
    })
}