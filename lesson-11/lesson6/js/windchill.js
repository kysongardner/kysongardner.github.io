var t = document.getElementById('temperature').textContent
var wS = document.getElementById('wind-speed').textContent

function windChillCalculation(t, wS) {
    if (t < 50 && wS > 3) {
        var f = Math.round(35.74 + 0.6215 * t - 35.75 * wS ** 0.16 + 0.4275 * t * wS ** 0.16, 0)
        document.querySelector("#wind-chill").innerHTML = "Wind Chill: " + f
    } else {
        document.querySelector("#wind-chill").innerHTML = "Wind Chill: " + "N/A"
    }
}
windChillCalculation(t, wS)