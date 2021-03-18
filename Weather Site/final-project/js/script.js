function editMenu() {
    document.getElementsByClassName("navigation-bar")[0].classList.toggle("shrinkMenu")
}

fetch("/final-project/temple-data.json")
    .then(temples => temples.json())
    .then(jsonObject => {
        temples = jsonObject["temples"]
        let kansasOrdinaces = document.getElementById("kansas-ordinances")
        let paysonOrdinaces = document.getElementById("payson-ordinances")
        let saltLakeOrdinaces = document.getElementById("salt-lake-ordinances")
        let phoenixOrdinaces = document.getElementById("phoenix-ordinances")
        tmps = [kansasOrdinaces, paysonOrdinaces, saltLakeOrdinaces, phoenixOrdinaces]
        for (let i = 0; i < temples.length; i++) {

            let address = document.createElement("p")
            address.textContent = "Address: " + temples[i].address

            let telephone = document.createElement("p")
            telephone.textContent = "Telephone: " + temples[i].telephone

            let email = document.createElement("p")
            email.textContent = "Email: " + temples[i].email

            let services = document.createElement("p")
            services.textContent = "Services: " + temples[i].services

            let history = document.createElement("p")
            history.textContent = "History: " + temples[i].history

            let phase = document.createElement("p")
            phase.textContent = "Phase: " + temples[i].phase

            let open = document.createElement("p")
            open.textContent = "Open: " + temples[i].open

            let baptisms = document.createElement("p")
            baptisms.textContent = "Baptisms: " + temples[i].baptisms

            let iniatories = document.createElement("p")
            iniatories.textContent = "Iniatories: " + temples[i].iniatories

            let endowments = document.createElement("p")
            endowments.textContent = "Endowments: " + temples[i].endowments

            let sealings = document.createElement("p")
            sealings.textContent = "Sealings: " + temples[i].sealings

            tmps[i].appendChild(address)
            tmps[i].appendChild(telephone)
            tmps[i].appendChild(email)
            tmps[i].appendChild(services)
            tmps[i].appendChild(history)
            tmps[i].appendChild(phase)
            tmps[i].appendChild(open)
            tmps[i].appendChild(baptisms)
            tmps[i].appendChild(iniatories)
            tmps[i].appendChild(endowments)
            tmps[i].appendChild(sealings)
        }
        let kansasCityURL = "https://api.openweathermap.org/data/2.5/weather?id=4393217&appid=da3b68c843f01e78d91a043033def649&units=imperial"
        let paysonURL = "https://api.openweathermap.org/data/2.5/weather?id=5779548&appid=da3b68c843f01e78d91a043033def649&units=imperial"
        let saltLakeCityURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&appid=da3b68c843f01e78d91a043033def649&units=imperial"
        let phoenixURL = "https://api.openweathermap.org/data/2.5/weather?id=5308655&appid=da3b68c843f01e78d91a043033def649&units=imperial"

        fetch(kansasCityURL)
            .then(data => data.json())
            .then((jsObject) => {
                console.log(jsObject)
                let weatherCondition = document.createElement("p")
                weatherCondition.textContent = "Weather Condition: " + jsObject.weather[0].main
                let temperature = document.createElement("p")
                temperature.textContent = "Temperature: " + Math.round(jsObject.main.temp)
                kansasOrdinaces.appendChild(weatherCondition)
                kansasOrdinaces.appendChild(temperature)
            })
            fetch(paysonURL)
            .then(data => data.json())
            .then((jsObject) => {
                console.log(jsObject)
                let weatherCondition = document.createElement("p")
                weatherCondition.textContent = "Weather Condition: " + jsObject.weather[0].main
                let temperature = document.createElement("p")
                temperature.textContent = "Temperature: " + Math.round(jsObject.main.temp)
                paysonOrdinaces.appendChild(weatherCondition)
                paysonOrdinaces.appendChild(temperature)
            })
            fetch(saltLakeCityURL)
            .then(data => data.json())
            .then((jsObject) => {
                console.log(jsObject)
                let weatherCondition = document.createElement("p")
                weatherCondition.textContent = "Weather Condition: " + jsObject.weather[0].main
                let temperature = document.createElement("p")
                temperature.textContent = "Temperature: " + Math.round(jsObject.main.temp)
                saltLakeOrdinaces.appendChild(weatherCondition)
                saltLakeOrdinaces.appendChild(temperature)
            })
            fetch(phoenixURL)
            .then(data => data.json())
            .then((jsObject) => {
                console.log(jsObject)
                let weatherCondition = document.createElement("p")
                weatherCondition.textContent = "Weather Condition: " + jsObject.weather[0].main
                let temperature = document.createElement("p")
                temperature.textContent = "Temperature: " + Math.round(jsObject.main.temp)
                phoenixOrdinaces.appendChild(weatherCondition)
                phoenixOrdinaces.appendChild(temperature)
            })
    })