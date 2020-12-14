function editMenu() {
    document.getElementsByClassName("navigation-bar")[0].classList.toggle("shrinkMenu")
}

fetch("/temple-data.json")
    .then(temples => temples.json())
    .then(jsonObject => {
        temples = jsonObject["temples"]
        kansasOrdinaces = document.getElementById("kansas-ordinances")
        paysonOrdinaces = document.getElementById("payson-ordinances")
        saltLakeOrdinaces = document.getElementById("salt-lake-ordinances")
        phoenixOrdinaces = document.getElementById("phoenix-ordinances")
        tmps = [kansasOrdinaces, paysonOrdinaces, saltLakeOrdinaces, phoenixOrdinaces]
        for (let i = 0; i < temples.length; i++) {
            phase = document.createElement("p")
            phase.textContent = "Phase: " + temples[i].phase

            open = document.createElement("p")
            open.textContent = "Open: " + temples[i].open

            baptisms = document.createElement("p")
            baptisms.textContent = "Baptisms: " + temples[i].baptisms

            iniatories = document.createElement("p")
            iniatories.textContent = "Iniatories: " + temples[i].iniatories

            endowments = document.createElement("p")
            endowments.textContent = "Endowments: " + temples[i].endowments

            sealings = document.createElement("p")
            sealings.textContent = "Sealings: " + temples[i].sealings

            tmps[i].appendChild(phase)
            tmps[i].appendChild(open)
            tmps[i].appendChild(baptisms)
            tmps[i].appendChild(iniatories)
            tmps[i].appendChild(endowments)
            tmps[i].appendChild(sealings)
        }



    })