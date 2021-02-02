function date() {
    let now = new Date();
    let dateDiv = document.querySelector(".date");
    let timeDiv = document.querySelector(".time");
    dateDiv.innerHTML = `${now.toDateString()}`;

    let minutes = now.getMinutes();
    if (minutes<10) {
        minutes = `0${minutes}`
    }
    timeDiv.innerHTML = `${now.getHours()}:${minutes}`;
}
date();


let imgDiv = document.querySelector(".icon");
let img = document.createElement("img");
imgDiv.append(img);

document.querySelector(".btn").addEventListener("click", myWeather);

function myWeather() {
    let valueInput = document.querySelector(".input").value;
    let a = `https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    fetch(`${a}`)
    .then(data => data.json())
    .then(weather => {

        let city = weather.name;
        let country = weather.sys.country;
        let locationDiv = document.querySelector(".location");
        locationDiv.innerHTML = `${city}, ${country}`; 

        let temp = +weather.main.temp;
        let tempDiv = document.querySelector(".temp");
        tempDiv.innerHTML = `${Math.round(temp)}&ordm;C`;
 
        let pressure = weather.main.pressure;
        let pressureDiv = document.querySelector(".pressure");
        pressureDiv.innerHTML = `Pressure: ${pressure}hPa`;

        let description = weather.weather[0].description;
        let feels = weather.main.feels_like;
        let descriptionDiv = document.querySelector(".description");
        descriptionDiv.innerHTML = `${description[0].toLocaleUpperCase()+description.substring(1)}, feels like ${Math.round(feels)}&ordm;C`;

        let humidity = weather.main.humidity;
        let humidityDiv = document.querySelector(".humidity");
        humidityDiv.innerHTML = `Humidity: ${humidity}%`;

        let speed = weather.wind.speed;
        let speedDiv = document.querySelector(".speed");
        speedDiv.innerHTML = `&#10148; ${speed}m/s`;

        let deg = weather.wind.deg;
        let degDiv = document.querySelector(".deg");
        degDiv.innerHTML = `Deg: ${deg}&ordm;`;
 
        let icon = weather.weather[0].icon;
        iconA = `http://openweathermap.org/img/w/${icon}.png`;
        img.setAttribute("src", iconA);
        
        let block = document.querySelector(".weather-block");
        block.style.display = "block";
    })
}




// створення нальоту
// let img = document.createElement("img");
// let avatar = user.avatar_url;
// img.setAttribute("src",avatar);
// document.body.append(img);

// document.querySelector("button").addEventListener("click", myAvatar);