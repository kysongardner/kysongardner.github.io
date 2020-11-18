const url = "https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=da3b68c843f01e78d91a043033def649";
fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
    });
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;
document.getElementById('imagesrc').textContent = imagesrc;
document.getElementById('icon').setAttribute('src', imagesrc);
document.getElementById('icon').setAttribute('alt', desc);