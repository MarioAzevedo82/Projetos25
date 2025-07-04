document.querySelector("#search").addEventListener('submit', async (event) => {
    event.preventDefault()

    const cityName = document.querySelector("#city_name").value

    if (!cityName) {
        return showAlert("Você precisa digitar uma cidade...")
    }

    const apiKey = '820e9fba3a8baa72a45680a26d4a7590'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt-br`

    const results = await fetch(apiUrl)
    const json = results.json()

    if(json.cod === 200){

    } else {
        showAlert("Não foi possível localizar...")
    }
})

function showAlert(msg) {
    document.getElementById("alert").innerHTML = msg
}