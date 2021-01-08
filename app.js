
function date() {
    let now = new Date();
    let dateDiv = document.querySelector(".date");
    let timeDiv = document.querySelector(".time");
    dateDiv.innerHTML = `${now.toDateString()}`;
    timeDiv.innerHTML = `${now.toLocaleTimeString().substring(0,5)}`;
}
date();

let city = prompt("city?");
let a = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;


function myWeather() {
    fetch(`${a}`)
    .then(data => data.json())
    .then(weather => {

        console.log(weather)

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

        // let newStr = str[0].toLocaleUpperCase() + str.substring(1);

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
        let imgDiv = document.querySelector(".icon");
        iconA = `http://openweathermap.org/img/w/${icon}.png`;
        let img = document.createElement("img");
        img.setAttribute("src", iconA);
        imgDiv.append(img);
    })
}
myWeather();




// створення на льоту
// let img = document.createElement("img");
// let avatar = user.avatar_url;
// img.setAttribute("src",avatar);
// document.body.append(img);

// document.querySelector("button").addEventListener("click", myAvatar);