let weather={
    "apiKey":"a8dce86071ac84345c347724a8a4fea5",
    fetchWeather : function(city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&appid="
        + this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));    
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity :" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed :" + speed + "km/hr";
    } ,
    search : function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }  
};
document.querySelector(".search button").addEventListener("click", function(){
weather.search();
});

