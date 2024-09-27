const apiKey = `ac62cf6c579e43139e6135555242609`
const button = document.querySelector(`#submitButton`)


const getWeather = async () => {
    const Weather = await axios.get(`http://api.weatherapi.com/v1`)
    console.log(Weather)
}
 let cityName = document.querySelector(`#cityName`)
 let temperatureF = document.querySelector(`#tempF`)
 let temperatureC = document.querySelector(`#tempC`)
let latitude = document.querySelector(`#latitude`)
let longitude = document.querySelector(`#longitude`)
let condition = document.querySelector(`#condition`)
button.addEventListener(`click`, async() => {

    let input = document.querySelector(`#textInput`).value
    console.log(input)
    let response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=yes`
    )

    let nameOfCity = `You are currently viewing the weather for ${response.data.location.name},${response.data.location.region}`
    let TempF = `The temperature in Fahrenheit is currently ${response.data.current.temp_f}F` 
    let TempC = `The temperature in Fahrenheit is currently ${response.data.current.temp_c}C`
    let locationLon = `Longitude = ${response.data.location.lon}` 
    let locationLat = `Latitude = ${response.data.location.lat}`
    let conditions = `Current conditions are ${response.data.current.condition.text},`
    let conditions_image = response.data.current.condition.icon

    cityName.innerText = nameOfCity 
    temperatureF.innerText = TempF
    temperatureC.innerText = TempC
    latitude.innerText = locationLat
    longitude.innerText = locationLon
    condition.innerText = conditions 
    condition.setAttribute (`src`, `${conditions_image}`)

})