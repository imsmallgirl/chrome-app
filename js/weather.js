

const apiKey = '8f79f195073fde254a11c5208634d866';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    getWeatherInfo(lat, lon);
};

function getWeatherInfo(lat, lon){
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`;
    fetch(APIURL).then(response => response.json()).then(data => {
        const weatherTit = document.querySelector('#weather_tit');
        const weatherTem = document.querySelector('#weather_tem');
        const weatherIcon = document.querySelector('#weather_icon');

        const temp = Math.floor(data.main.temp);
        const place = data.name;
        const Des = data.weather[0].description;
        const weatherIcons = data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcons}@2x.png`;

        weatherTit.innerText = `오늘 ${place} 는`;
        weatherTem.innerText = `약 ${temp}도, ${Des} 입니다`;
        weatherIcon.setAttribute('src', weatherIconAdrs);
    });
}

function onGeoError(){
    alert(`날씨 정보를 불러올 수 없습니다.`);
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);