let weather = {
    "apiKey": "4e999e8610ab790336a9f9e011c5460b",
    fetchWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=imperial&appid=" 
        + this.apiKey
        )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function () {
        this.fetchWeather(document.querySelector(".info").value);
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".info").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }

});


// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date and time
document.querySelector(".date").innerText = n;
document.querySelector(".time").innerText = time