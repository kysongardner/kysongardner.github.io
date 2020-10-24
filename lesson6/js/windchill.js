function windChillCalculation(t, wS) {
    if (t < 50 && wS > 3.0) {
        let f
        f = 35.74 + 0.6215 * t - 35.75 * wS ** 0.16 + 0.4275 * t * s ** 0.16
        document.getElementById("wind-chill").textContent = "Wind Chill:" + f
    }
    else{
        document.getElementById("wind-chill").textContent = "N/A"
    }
}
t = document.getElementById("temperature")
wS = document.getElementById("wind-speed")
windChillCalculation(t, wS)