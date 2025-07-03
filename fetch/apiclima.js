document.querySelector("#search").addEventListener('submit', (event) => {
    event.preventDefault()

    const cityName = document.querySelector("#city_name").value

    if (!cityName) {
        return showAlert("Você precisa digitar uma cidade...")
    }

})

function showAlert(msg) {
    document.getElementById("alert").innerHTML = msg
}