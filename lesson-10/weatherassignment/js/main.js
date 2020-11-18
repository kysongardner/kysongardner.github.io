function changeMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("menuEdit")
}
const url = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=da3b68c843f01e78d91a043033def649&units=imperial"
fetch(url)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject)
})