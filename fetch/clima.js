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
