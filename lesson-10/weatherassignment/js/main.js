function changeMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("menuEdit")
}

const url = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=da3b68c843f01e78d91a043033def649&units=imperial"
fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        let weatherSummarySection = document.createElement('SECTION')
        let currentCondition = document.createElement('P')
        let highTemp = document.createElement('P')
        let currentTemp = document.createElement('P')
        let humidity = document.createElement('P')
        let windSpeed = document.createElement('P')
        let windChill = document.createElement('P')

        currentCondition.textContent = "Currently: " + jsObject.weather[0].main
        highTemp.textContent = "High: " + jsObject.main.temp_max
        currentTemp.textContent = "Current Temp: " + jsObject.main.temp
        humidity.textContent = "Humidity: " + jsObject.main.humidity
        windSpeed.textContent = "Wind Speed: " + jsObject.wind.speed
        windChill.textContent = ""

        // Wind chill calculation and display
        var t = currentTemp
        var wS = windSpeed

        function windChillCalculation(t, wS) {
            if (t < 50 && wS > 3) {
                var f = Math.round(35.74 + 0.6215 * t - 35.75 * wS ** 0.16 + 0.4275 * t * wS ** 0.16, 0)
                windChill.textContent = "Wind Chill: " + f
            } else {
                windChill.textContent = "Wind Chill: N/A"
            }
        }
        windChillCalculation(t, wS)

        weatherSummarySection.appendChild(currentCondition)
        weatherSummarySection.appendChild(highTemp)
        weatherSummarySection.appendChild(currentTemp)
        weatherSummarySection.appendChild(humidity)
        weatherSummarySection.appendChild(windSpeed)
        weatherSummarySection.appendChild(windChill)

        document.getElementById("weather-summary-box").appendChild(weatherSummarySection)
    })

// Loading information into the 5 day forecast
let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=da3b68c843f01e78d91a043033def649&units=imperial"
fetch(fiveDayUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        let daysOfWeather = []
        for (let i = 0; i < jsObject.list.length; i++) {

            let correctEntry = "18:00:00"
            let goodEntry = jsObject.list[i].dt_txt

            String(goodEntry).includes(correctEntry)

            if (goodEntry == true){
                daysOfWeather.push(jsObject.list[i])
                console.log(goodEntry)
            }
        }
            
            let dayOne = document.createElement("TR")
            let dayTwo = document.createElement("TR")
            let dayThree = document.createElement("TR")
            let dayFour = document.createElement("TR")
            let dayFive = document.createElement("TR")

            dayOne.textContent = jsObject.list.daysOfWeather[0].main.temp
            dayTwo.textContent = jsObject.list.daysOfWeather[1].main.temp
            dayThree.textContent = jsObject.list.daysOfWeather[2].main.temp
            dayFour.textContent = jsObject.list.daysOfWeather[3].main.temp
            dayFive.textContent = jsObject.list.daysOfWeather[4].main.temp

            document.getElementById("five-day-summary-degrees").appendChild(dayOne)
            document.getElementById("five-day-summary-degrees").appendChild(dayTwo)
            document.getElementById("five-day-summary-degrees").appendChild(dayThree)
            document.getElementById("five-day-summary-degrees").appendChild(dayFour)
            document.getElementById("five-day-summary-degrees").appendChild(dayFive)
        });
        