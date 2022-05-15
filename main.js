let weatherKey = {
    apiKey : "3d8b093323a646c5f9a995b15f0ed29d",
    fetchWeather : function(city){
            fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&unit=metric&appid=" +this.apiKey)
            .then((response)=>response.json())
            .then((data) => this.displayWeather(data)); 
    },
    displayWeather : function(data){
        const {name} = data;
        const {description} = data.weather[0];
        const {speed} = data.wind;
        const {temp, humidity} = data.main;
        console.log(humidity);
        document.querySelector(".town").innerText = "Weather in " + name;
        document.querySelector(".for-cloud").innerText = description
        document.querySelector(".degree").innerText = temp + " F";
        document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
        document.querySelector(".for-wind").innerText = "Wind speed " + speed + " Km/h"
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search").value);
    }
}
 document.querySelector(".search-btn").addEventListener("click", function(){
        weatherKey.search();
});

weatherKey.fetchWeather("bukavu");