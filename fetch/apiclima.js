document.querySelector("#search").addEventListener('submit', async (event) => {
    event.preventDefault()

    const cityName = document.querySelector("#city_name").value

    if (!cityName) {
        return showAlert("Você precisa digitar uma cidade...")
    }

    const apiKey = '820e9fba3a8baa72a45680a26d4a7590'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt-br`

    const results = await fetch(apiUrl)
    const json = await results.json()

    if(json.cod === 200){
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            descripion: json.weather[0].descripion,
            tempIcon: json.weather[0].icon,
            windspeed: json.wind.speed,
            humidity: json.main.humidity,

        })
    } else {
        showAlert("Não foi possível localizar...")
    }
})

function showInfo(json){
    showAlert("");

    document.querySelector("#weather").classList.add('show')
}

function showAlert(msg) {
    document.getElementById("alert").innerHTML = msg
}